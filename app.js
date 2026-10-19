const projects = [
 {name:'Orbit — 日常，自有轨道',type:'数字产品 / 体验设计',image:'orbit.svg',description:'以清晰的信息层级和轻盈的交互节奏，探索日常财务管理体验。'},
 {name:'Forme — 形态的另一面',type:'品牌系统 / 视觉设计',image:'forme.svg',description:'以形态、色彩和留白，探索一套具有延展性的视觉语言。'},
 {name:'Bloom — 从阅读开始',type:'编辑设计 / 品牌表达',image:'bloom.svg',description:'以文字与图像的节奏，构建一本关于生活与灵感的独立刊物。'},
 {name:'Aura — 感受细微之美',type:'品牌设计 / 包装系统',image:'aura.svg',description:'从触感与日常仪式出发，探索柔和而清晰的品牌体验。'},
 {name:'Atlas — 连接城市与人',type:'产品系统 / 服务设计',image:'atlas.svg',description:'将城市信息转化为容易理解的界面，探索连接地点与人的数字服务。'},
 {name:'Common ground — 共生',type:'设计研究 / 数字体验',image:'common.svg',description:'以研究驱动的方式，探索人与环境之间更自然的联系。'}
];
const grid=document.querySelector('#projects');
const dialog=document.querySelector('#project-dialog');
let previousFocus;
projects.forEach((p)=>{const button=document.createElement('button');button.className='project';button.innerHTML=`<div class="project-image"><img src="assets/${p.image}" alt="${p.name}，示例项目视觉" loading="lazy"></div><div class="project-caption"><div><h3>${p.name}</h3><p>${p.type}</p></div><span aria-hidden="true">↗</span></div>`;button.addEventListener('click',()=>{previousFocus=button;document.querySelector('#dialog-content').innerHTML=`<img src="assets/${p.image}" alt="${p.name}示例视觉"><div class="dialog-text"><p class="small">CONCEPT PREVIEW · 示例项目</p><h2>${p.name}</h2><p>${p.description}</p><p>这是用于预览排版与视觉方向的示例内容。收到你的作品素材后，这里将替换为真实项目介绍与设计过程。</p></div>`;dialog.showModal();document.querySelector('.close-dialog').focus()});grid.append(button)});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>previousFocus?.focus());
const hero=document.querySelector('.hero'),trail=document.querySelector('.trail');
const trailImages=['work-cover-qibao-clean-v3.jpg','work-cover-kangsong-clean-v2.jpg','work-cover-03.png','work-cover-04.png','work-cover-doufu-v2.jpg','work-cover-05-v2.png','home-video-cover.jpg'];
const colors=['#c6b5ee','#edb9d2','#aac8eb','#bfd4b4'];
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let last={x:-1000,y:-1000},lastTime=0,index=0,colorIndex=-1;
trailImages.forEach(image=>{const img=new Image();img.src=`assets/${image}`});
hero.addEventListener('pointermove',e=>{if(reduced.matches||e.pointerType==='touch'||e.target.closest('a'))return;const now=performance.now();const rect=hero.getBoundingClientRect();const x=e.clientX-rect.left,y=e.clientY-rect.top;const nextColor=Math.min(3,Math.floor(x/rect.width*4));if(nextColor!==colorIndex){hero.style.backgroundColor=colors[nextColor];colorIndex=nextColor}if(Math.hypot(x-last.x,y-last.y)<85||now-lastTime<110)return;last={x,y};lastTime=now;const img=document.createElement('img');img.className='trail-image';img.src=`assets/${trailImages[index%trailImages.length]}`;img.alt='';img.style.left=`${x}px`;img.style.top=`${y}px`;img.style.setProperty('--rotation',`${index%2?7:-8}deg`);trail.append(img);index++;if(trail.children.length>12)trail.firstChild.remove();img.addEventListener('animationend',()=>img.remove(),{once:true})});

const aboutDialog=document.querySelector('#about-dialog');
aboutDialog.addEventListener('scroll',()=>aboutDialog.classList.toggle('is-reading',aboutDialog.scrollTop>100),{passive:true});
const aboutRoot=document.querySelector('#about-card-root');
let disposeAbout=null, disposeAboutReveal=null, aboutTrigger=null, returnHash='#home', aboutRequest=0;
function mountAboutReveal(root){
  if(reduced.matches||!('IntersectionObserver' in window))return()=>{};
  const selector='.greeting-top > *, .greeting-summary > h3, .summary-static-card, .maria-full-photo, .maria-education-copy > *, .maria-work > *, .maria-film-frame, .maria-ted-copy > *, .robot-copy > *, .robot-process > figure, .songshou-copy > *, .songshou-photo, .huawei-photo, .huawei-copy > *, .maria-toolkit > .maria-script';
  const targets=new Set(), animations=new Set();
  const show=element=>{
    if(!element.hasAttribute('data-about-reveal'))return;
    element.removeAttribute('data-about-reveal');
    observer.unobserve(element);
    if(reduced.matches)return;
    const siblings=[...element.parentElement.children].filter(child=>targets.has(child));
    const delay=Math.min(Math.max(0,siblings.indexOf(element))*65,195);
    const animation=element.animate([{opacity:0,translate:'0 24px'},{opacity:1,translate:'0 0'}],{duration:650,delay,easing:'cubic-bezier(.2,.7,.2,1)',fill:'backwards'});
    animations.add(animation);
    animation.finished.then(()=>animations.delete(animation),()=>animations.delete(animation));
  };
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)show(entry.target)}),{root,rootMargin:'0px 0px -7% 0px',threshold:0});
  const scan=()=>root.querySelectorAll(selector).forEach(element=>{
    if(targets.has(element))return;
    targets.add(element);
    if(reduced.matches)return;
    element.setAttribute('data-about-reveal','');
    observer.observe(element);
  });
  const mutations=new MutationObserver(scan);
  scan();mutations.observe(root,{childList:true,subtree:true});
  const showAll=()=>{targets.forEach(element=>element.removeAttribute('data-about-reveal'));observer.disconnect();animations.forEach(animation=>animation.cancel());animations.clear()};
  const onPreference=()=>{if(reduced.matches)showAll()};
  const onFocus=event=>{const target=event.target.closest('[data-about-reveal]');if(target)show(target)};
  reduced.addEventListener('change',onPreference);root.addEventListener('focusin',onFocus);
  return()=>{mutations.disconnect();showAll();reduced.removeEventListener('change',onPreference);root.removeEventListener('focusin',onFocus)};
}
async function openAbout(trigger){
  if(aboutDialog.open)return;
  aboutTrigger=trigger||document.activeElement;
  document.body.classList.add('about-open');
  aboutDialog.showModal();
  aboutDialog.scrollTop=0;
  disposeAboutReveal=mountAboutReveal(aboutDialog);
  document.querySelector('.about-home').focus();
  const request=++aboutRequest;
  try{
    const [{mountAbout},{mountSkills},{mountPhotos},{mountProjects}]=await Promise.all([import('./about.bundle.js'),import('./skills.bundle.js'),import('./photos.bundle.js'),import('./projects.bundle.js')]);
    if(request!==aboutRequest||!aboutDialog.open)return;
    const disposeCard=mountAbout(aboutRoot);
    const skillTarget=document.querySelector('#about-skills-root');
    const disposeSkills=mountSkills(skillTarget);
    const photoTarget=document.querySelector('#about-photos-root');
    const disposePhotos=mountPhotos(photoTarget);
    const projectTarget=document.querySelector('#about-project-folders');
    const disposeProjects=mountProjects(projectTarget);
    disposeAbout=()=>{disposeCard();disposeSkills();disposePhotos();disposeProjects();skillTarget.replaceChildren();photoTarget.replaceChildren();projectTarget.replaceChildren();};
  }catch(error){
    console.error('About card could not load',error);
    if(request!==aboutRequest||!aboutDialog.open)return;
    aboutRoot.innerHTML='<img class="lanyard-fallback" src="assets/card-front-composed.svg" alt="JeanieChoo 的个人照片卡片">';
  }
}
document.querySelectorAll('a[href="#about"]').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();
  if(aboutDialog.open)return;
  returnHash=location.hash||'#home';
  history.pushState(null,'','#about');
  openAbout(link);
}));
document.querySelector('.about-home').addEventListener('click',()=>{aboutDialog.close();location.hash='home'});
aboutDialog.querySelectorAll('a:not([href="#about"])').forEach(link=>link.addEventListener('click',()=>aboutDialog.close()));
aboutDialog.addEventListener('close',()=>{
  aboutRequest++;
  disposeAboutReveal?.();disposeAboutReveal=null;
  disposeAbout?.();disposeAbout=null;aboutRoot.replaceChildren();
  document.body.classList.remove('about-open');
  if(location.hash==='#about')history.replaceState(null,'',returnHash);
  aboutTrigger?.focus({preventScroll:true});
});
function syncAboutRoute(){
  if(location.hash==='#skills')history.replaceState(null,'','#about');
  if(location.hash==='#about')openAbout();
  else if(aboutDialog.open)aboutDialog.close();
}
window.addEventListener('hashchange',syncAboutRoute);
window.addEventListener('popstate',syncAboutRoute);
syncAboutRoute();


