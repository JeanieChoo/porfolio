import React,{useEffect,useRef} from 'react';
import {motion,useReducedMotion} from 'motion/react';
import {projectDetails} from './project-detail-data';
import imageSizes from './project-image-sizes.json';
import './project-detail.css';

export default function ProjectDetail({project,nextProject,onClose,onNext}){
 const root=useRef(null),back=useRef(null),reduced=useReducedMotion();
 const detail=projectDetails[project.id];
 useEffect(()=>{
  const node=root.current;node.scrollTo({top:0,behavior:'instant'});back.current.focus({preventScroll:true});
  if(reduced)return;
  const targets=[...node.querySelectorAll('[data-case-reveal]')];
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(!entry.isIntersecting)return;
   entry.target.classList.add('is-visible');observer.unobserve(entry.target);
  }),{root:node,threshold:.06});
  targets.forEach(target=>{target.classList.add('will-reveal');observer.observe(target)});
  return()=>observer.disconnect();
 },[project.id,reduced]);
 return <motion.section ref={root} className="overview-detail case-detail" aria-label={`${project.name}项目详情`} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:.3}} onKeyDown={event=>{if(event.key==='Escape'){event.stopPropagation();event.preventDefault();onClose()}}}>
  <div className="case-toolbar"><span>PROJECT {project.number} / {project.category}</span><button ref={back} onClick={onClose}>返回总览 ↗</button></div>
  <header className="case-hero">
   <div className="case-hero-copy"><span className="case-label">项目概述 / OVERVIEW</span><h1>{project.name}</h1><p className="case-subtitle">{project.description}</p>{detail&&<><p className="case-hero-intro">{detail.intro}</p><div className="case-tags">{detail.tags.map(tag=><span key={tag}>{tag}</span>)}</div></>}</div>
   <div className="case-hero-picture"><img src={project.image} alt={`${project.name}产品封面`} decoding="async"/></div>
  </header>
  {detail&&<>
   <div className={`case-chapters${detail.layout?' is-centered':''}${detail.layout==='render-gallery'?' is-render-gallery':''}`}>{detail.sections.map((section,index)=><section className={`case-chapter${section.compact?' is-compact':''}`} key={section.label}>
    <div className="case-chapter-heading" data-case-reveal><span className="case-label">{section.label}</span><div><h2>{section.title}</h2>{section.text&&<p>{section.text}</p>}</div></div>
    <div className="case-images">{section.images.map((img,i)=><figure key={img.src} data-case-reveal><img src={img.src} alt={img.alt} loading="lazy" decoding="async" width={imageSizes[img.src.split('/').pop()][0]} height={imageSizes[img.src.split('/').pop()][1]}/>{detail.layout!=='render-gallery'&&<figcaption><span>{img.alt}</span><span>{String(index+1).padStart(2,'0')}.{i+1}</span></figcaption>}</figure>)}</div>
   </section>)}</div>
  </>}
  <footer className="case-next"><span className="case-label">下一个项目 / NEXT PROJECT</span><button onClick={onNext}><span>{nextProject.name}</span><span aria-hidden="true">↗</span></button><p>{nextProject.description}</p></footer>
 </motion.section>
}

