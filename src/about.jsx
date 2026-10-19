import React, { useRef, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './Lanyard.jsx';
import SpecularButton from './SpecularButton.jsx';

function AboutCard(){
  const controlRef=useRef(null);
  const [free,setFree]=useState(false);
  const [exiting,setExiting]=useState(false);
  const [burst,setBurst]=useState(null);
  const resetRef=useRef(null);
  useEffect(()=>{const dialog=document.querySelector('#about-dialog');dialog?.classList.toggle('is-free',free);if(free)resetRef.current?.focus({preventScroll:true});return ()=>dialog?.classList.remove('is-free');},[free]);
  const reset=()=>{controlRef.current?.reset();setFree(false);setExiting(false);setBurst(null);};
  return <>
    <div className="lanyard-frame" style={{width:'100%',height:'100%'}}>
      <Lanyard
        frontImage="assets/card-front-composed.svg"
        backImage="assets/card-back-composed.svg"
        strapImage="assets/id-strap.svg"
        imageFit="cover"
        cardColor="#ffffff"
        orientation="portrait"
        finish="glossy"
        cornerRadius={0.3}
        size={0.56}
        anchor="center"
        strapLength={0.5}
        strapColor="#000000"
        strapWidth={0.65}
        metal="silver"
        gravity={1}
        damping={0.5}
        elasticity={0.5}
        breeze={0.5}
        interactive
        intro
        controlRef={controlRef}
        onBreak={()=>setFree(true)}
        onRelease={()=>setExiting(true)}
        onSnap={point=>setBurst(point)}
      />
    </div>
    {!free && !exiting && <button className="flip-card" onClick={()=>controlRef.current?.flip()}>翻转卡片 <span aria-hidden="true">↻</span></button>}
    {burst && <div className="snap-burst" style={{left:burst.x,top:burst.y}} aria-hidden="true">{Array.from({length:12},(_,i)=><span key={i} onAnimationEnd={i===11?()=>setBurst(null):undefined} style={{'--angle':`${i*30}deg`,'--distance':`${75+(i%4)*24}px`,'--rotation':`${i*19}deg`,'--star-size':`${12+(i%3)*5}px`,'--star-color':['#fff8e8','#f4d4eb','#8972b6'][i%3]}}>✦</span>)}</div>}
    {free && <div className="freedom-scene">
      <div className="freedom-copy" role="status"><p className="small">FREE TO CREATE</p><h3>灵感 不受束缚</h3><p>Design without limits.</p></div>
      <div className="freedom-reset"><SpecularButton focusRef={resetRef} className="rehang-button" onClick={reset} radius={28} textColor="#22201f" lineColor="#fff6ff" baseColor="#514665" tint="#ffffff" tintOpacity={0.08} idleIntensity={0.45} intensity={1.2} thickness={1.4} glow={1} autoAnimate={false}>重新挂好 <span aria-hidden="true">↗</span></SpecularButton></div>
    </div>}
  </>;
}

export function mountAbout(container){
  const root=createRoot(container);
  root.render(<AboutCard/>);
  return ()=>root.unmount();
}
