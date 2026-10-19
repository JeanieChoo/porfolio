import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createBottomHold} from './bottom-hold.mjs';
function fixture(){
 let now=0,next=0,breaks=0;const tasks=new Map();
 const hold=createBottomHold({onBreak:()=>breaks++,setTimer:(fn,delay)=>{const id=++next;tasks.set(id,{fn,at:now+delay});return id;},clearTimer:id=>tasks.delete(id)});
 return {hold,advance(ms){now+=ms;for(const [id,t] of tasks){if(t.at<=now){tasks.delete(id);t.fn();}}},get breaks(){return breaks;}};
}
test('triggers only after 0.8 uninterrupted seconds of a long pull',()=>{const f=fixture();f.hold.update(true,true);f.advance(799);assert.equal(f.breaks,0);f.advance(1);assert.equal(f.breaks,1);f.hold.update(true,true);f.advance(3000);assert.equal(f.breaks,1);});
test('moving back or releasing cancels the pull and re-entry starts a fresh timer',()=>{const f=fixture();f.hold.update(true,true);f.advance(500);f.hold.update(false,true);f.advance(1000);assert.equal(f.breaks,0);f.hold.update(true,true);f.advance(500);f.hold.update(true,false);f.advance(1000);assert.equal(f.breaks,0);f.hold.update(true,true);f.advance(799);assert.equal(f.breaks,0);f.advance(1);assert.equal(f.breaks,1);});
test('reset permits another trigger and disposal cancels pending work',()=>{const f=fixture();f.hold.update(true,true);f.advance(800);f.hold.reset();f.hold.update(true,true);f.advance(800);assert.equal(f.breaks,2);f.hold.reset();f.hold.update(true,true);f.hold.dispose();f.advance(3000);assert.equal(f.breaks,2);});
