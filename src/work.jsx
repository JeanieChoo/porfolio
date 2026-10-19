import React,{useState,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {motion,AnimatePresence,useReducedMotion} from 'motion/react';
import './work.css';
import './work-overview.css';
import ProjectDetail from './ProjectDetail';
const projectInfo=[
 {name:'栖宝',description:'独居青年桌面 AI 情感陪伴机器人',image:'assets/work-cover-qibao-clean-v2.jpg'},
 {name:'康松',description:'防久坐智能按摩仪',image:'assets/work-cover-kangsong-clean-v2.jpg'},
 {name:'Imirror+',description:'家用智能穿衣镜'},
 {name:'小叙龙',description:'AI 儿童故事机设计'},
 {name:'兜福',description:'基于建德文化的产品包装设计',image:'assets/work-cover-doufu-v2.jpg'},
 {name:'绵竹有礼',description:'四川绵竹木版年画文创产品设计',image:'assets/work-cover-05-v2.png'}
];
const projects=projectInfo.map((project,id)=>({...project,id,number:`0${id+1}`,category:id<5?'产品 + 界面':'平面文创',image:project.image||`assets/work-cover-0${id+1}.png`,alt:`${project.name} · ${project.description}封面`}));
function Cover({project}){return <div className="overview-cover-art has-image"><img src={project.image} alt={project.alt} loading={project.id===0?'eager':'lazy'} decoding="async" draggable={false}/></div>}
function WorkArchive(){
 const [selected,setSelected]=useState(null);
 const gallery=useRef(null),cardRefs=useRef([]),reduced=useReducedMotion();
 function close(){const id=selected;setSelected(null);requestAnimationFrame(()=>cardRefs.current[id]?.querySelector('button')?.focus({preventScroll:true}))}
 return <div ref={gallery} className="overview-work is-overview">

  <aside className="overview-info"><p className="overview-note">从日常需求与生活体验出发，探索产品、界面与文化表达，让想法逐步成为可感知的设计。</p><div className="overview-letter" aria-hidden="true">O</div></aside>
  <div className="overview-gallery">{projects.map(project=><article key={project.id} className="overview-project" data-index={project.id} ref={element=>cardRefs.current[project.id]=element}><button className="overview-project-cover" onClick={()=>{setSelected(project.id)}} aria-label={`查看作品 ${project.number} ${project.name}`}><Cover project={project}/><span className="overview-cover-open" aria-hidden="true">↗</span></button><div className="overview-caption"><div><h2>{project.name}</h2><span>{project.description}</span></div><p>{project.category}</p></div></article>)}</div>
  <AnimatePresence>{selected!==null&&<ProjectDetail project={projects[selected]} nextProject={projects[(selected+1)%projects.length]} onClose={close} onNext={()=>setSelected((selected+1)%projects.length)}/>}</AnimatePresence>
 </div>
}
export function mountWork(target){const root=createRoot(target);root.render(<WorkArchive/>);return()=>root.unmount();}



