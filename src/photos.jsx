import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import BounceCards from './BounceCards.jsx';
const images=[
 {src:'assets/about-collage-3.jpg',alt:'张劲秋的户外旅行照片'},
 {src:'assets/about-collage-5.jpg',alt:'张劲秋挑选面料'},
 {src:'assets/about-collage-1.jpg',alt:'张劲秋雪场自拍'},
 {src:'assets/about-collage-6.jpg',alt:'张劲秋参观机器人展览'},
 {src:'assets/about-collage-7.jpg',alt:'张劲秋洞穴攀岩'},
 {src:'assets/about-collage-4.jpg',alt:'张劲秋与小熊猫合影'},
 {src:'assets/about-collage-8.jpg',alt:'张劲秋的健身照片'},
 {src:'assets/about-collage-9.jpg',alt:'张劲秋的看展照片'}
];
function PhotoCards(){
 const ref=useRef(null);const [visible,setVisible]=useState(false);const [width,setWidth]=useState(500);
 useEffect(()=>{const node=ref.current;const resize=new ResizeObserver(entries=>setWidth(Math.min(500,entries[0].contentRect.width)));resize.observe(node);const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){setVisible(true);observer.disconnect();}},{threshold:.2});observer.observe(node);return()=>{resize.disconnect();observer.disconnect();};},[]);
 const compact=width<440;
 return <div className="photo-bounce-host" ref={ref}>{visible&&<BounceCards images={images} containerWidth={width} containerHeight={320} cardSize={compact?140:200} spread={compact?42:65} rotation={10} arc={0} pushDistance={compact?90:160} hoverScale={1.06} bounciness={0.6} animationDelay={0.5} animationStagger={0.06} borderWidth={5} borderColor="#ffffff" radius={25} shadow enableHover/>}</div>;
}
export function mountPhotos(target){const root=createRoot(target);root.render(<PhotoCards/>);return()=>root.unmount();}
