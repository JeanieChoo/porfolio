import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createDragStreak} from './drag-streak.mjs';
test('ten alternating directions during one held drag trigger even at subpixel distances',()=>{const streak=createDragStreak();streak.begin(0,0);for(let i=0;i<9;i++)assert.equal(streak.move(i%2===0?.1:0,0),false);assert.equal(streak.move(0,0),true);});
test('same-direction events count as one stroke and stationary events do not count',()=>{const streak=createDragStreak();streak.begin(0,0);for(let i=1;i<=100;i++)assert.equal(streak.move(i,0),false);assert.equal(streak.move(100,0),false);for(let i=0;i<8;i++)assert.equal(streak.move(i%2===0?99:100,0),false);assert.equal(streak.move(99,0),true);});
test('ten clicks trigger without any movement',()=>{const streak=createDragStreak();for(let i=0;i<9;i++)assert.equal(streak.click(),false);assert.equal(streak.click(),true);streak.reset();assert.equal(streak.click(),false);});
test('click and stroke counters do not double count one gesture',()=>{const streak=createDragStreak();for(let i=0;i<9;i++){streak.begin(0,0);assert.equal(streak.click(),false);assert.equal(streak.move(1,0),false);}streak.begin(0,0);assert.equal(streak.click(),true);});
test('drag count is retained between gestures',()=>{const streak=createDragStreak();for(let i=0;i<5;i++)assert.equal(streak.record(true),false);for(let i=0;i<4;i++)assert.equal(streak.record(true),false);assert.equal(streak.record(true),true);});
test('rehanging clears the previous drag count',()=>{const streak=createDragStreak();for(let i=0;i<9;i++)streak.record(true);streak.reset();assert.equal(streak.record(true),false);});
