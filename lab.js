// Replace these two entries with JeanieChoo's video files and accompanying copy.
const clips = [
  {src:'assets/lab-under-two-wings.mp4', title:'双翼之下', description:'艾比意外跌入异世界，在寻找出口的途中遭遇风暴。曾被她视为威胁的乌鸦，却张开双翼护住了她。那一刻，妈妈的爱浮现心间。她终于读懂父母保护背后的深情，并带着这份理解继续前行。'},
  {src:'assets/lab-qiang-flowers-v2.mp4', title:'回到羊角花开时', description:'以羌族文化为核心，用 AIGC 奇幻现实主义叙事，讲述云朵循着神秘红线重返记忆，与灾难中守护她的阿姐跨越时空重逢。羌笛、莎朗舞与羌绣纹样交织于光影，红线串起记忆与当下。故事最终落脚当代羌寨，在非遗传承与文旅新貌中，呈现文化的延续与新生。'},
];
const dialog=document.querySelector('#lab-dialog');
const reel=dialog.querySelector('.lab-reel');
const copy=dialog.querySelector('.lab-copy');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let active=0,paused=true,scrollLock=0,wheelTotal=0,lastWheel=0,trigger=null;
const slides=clips.map((clip,index)=>{
  const slide=document.createElement('section');
  slide.className='lab-slide';
  slide.setAttribute('aria-label',`视频 ${index+1}`);
  const media=document.createElement('div');media.className='lab-media';
  if(clip.src){
    const video=document.createElement('video');
    video.src=clip.src;video.muted=false;video.volume=1;video.loop=true;video.playsInline=true;video.preload='metadata';
    video.setAttribute('aria-label',clip.title);
    const controls=document.createElement('div');controls.className='lab-video-controls';
    controls.innerHTML='<div class="lab-video-control-row"><output aria-label="当前播放时间">0:00</output><button class="lab-video-toggle" aria-label="播放视频"><span aria-hidden="true"></span></button></div><input class="lab-seek" type="range" min="0" max="100" step="0.1" value="0" aria-label="视频播放进度">';
    const button=controls.querySelector('button'),seek=controls.querySelector('input'),time=controls.querySelector('output');
    let seeking=false;
    const updateProgress=()=>{
      const seconds=video.currentTime;
      time.textContent=`${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')}`;
      if(!seeking)seek.value=Number.isFinite(video.duration)&&video.duration>0?seconds/video.duration*100:0;
      seek.style.setProperty('--progress',`${seek.value}%`);
      seek.setAttribute('aria-valuetext',`${time.textContent}，共 ${Math.floor((video.duration||0)/60)}分${Math.floor((video.duration||0)%60)}秒`);
    };
    seek.addEventListener('pointerdown',()=>{seeking=true});
    const endSeek=()=>{seeking=false;updateProgress()};
    seek.addEventListener('pointerup',endSeek);seek.addEventListener('pointercancel',endSeek);seek.addEventListener('change',endSeek);
    seek.addEventListener('input',()=>{if(Number.isFinite(video.duration)){video.currentTime=Number(seek.value)/100*video.duration;updateProgress()}});
    seek.addEventListener('keydown',event=>event.stopPropagation());
    video.addEventListener('timeupdate',updateProgress);
    video.addEventListener('loadedmetadata',()=>{media.style.aspectRatio=`${video.videoWidth}/${video.videoHeight}`;media.style.setProperty('--video-ratio',video.videoWidth/video.videoHeight);updateProgress()});
    const toggleVideo=()=>{paused=!video.paused;updatePlayback()};
    button.addEventListener('click',toggleVideo);
    video.addEventListener('click',toggleVideo);
    video.addEventListener('play',updateToggle);
    video.addEventListener('pause',updateToggle);
    video.addEventListener('error',()=>{media.replaceChildren(placeholder(index));dialog.querySelector('#lab-status').textContent='视频暂时无法播放'});
    media.append(video,controls);
  }else media.append(placeholder(index));
  slide.append(media);reel.append(slide);return slide;
});
function placeholder(index){
  const element=document.createElement('div');element.className='lab-placeholder';
  element.innerHTML=`<span aria-hidden="true">0${index+1}</span><p>视频位置预留</p>`;return element;
}
function updatePlayback(){
  slides.forEach((slide,index)=>{
    const video=slide.querySelector('video');if(!video)return;
    if(dialog.open&&index===active&&!paused&&!document.hidden){
      video.play().catch(error=>{if(error.name!=='AbortError'&&dialog.open&&active===index&&!document.hidden){paused=true;updateToggle()}});
    }else video.pause();
  });
  updateToggle();
}
function updateToggle(){slides.forEach((slide,index)=>{const button=slide.querySelector('.lab-video-toggle');const video=slide.querySelector('video');if(button){button.setAttribute('aria-label',video.paused?'播放视频':'暂停播放');button.classList.toggle('is-playing',!video.paused);button.tabIndex=index===active?0:-1;slide.querySelector('.lab-seek').tabIndex=index===active?0:-1}})}
function select(index){
  const changed=active!==index;active=index;
  dialog.querySelector('#lab-number').textContent=`0${index+1}`;
  dialog.querySelector('#lab-title').textContent=clips[index].title;

  dialog.querySelector('#lab-description').textContent=clips[index].description;
  dialog.querySelector('#lab-status').textContent=`第${index+1}个视频${clips[index].src?'':'，等待素材'}`;
  if(changed){copy.classList.remove('is-changing');requestAnimationFrame(()=>copy.classList.add('is-changing'))}
  updatePlayback();
}
function go(index){
  index=Math.max(0,Math.min(clips.length-1,index));
  scrollLock=performance.now()+700;
  reel.scrollTo({top:index*reel.clientHeight,behavior:reduced.matches?'instant':'smooth'});
  select(index);
}
reel.addEventListener('scroll',()=>{
  if(performance.now()<scrollLock)return;
  const index=Math.max(0,Math.min(clips.length-1,Math.round(reel.scrollTop/reel.clientHeight)));
  if(index!==active)select(index);
},{passive:true});
dialog.addEventListener('wheel',event=>{
  if(event.ctrlKey||Math.abs(event.deltaX)>Math.abs(event.deltaY))return;
  event.preventDefault();
  const now=performance.now();
  if(now<scrollLock)return;
  if(now-lastWheel>180||Math.sign(event.deltaY)!==Math.sign(wheelTotal))wheelTotal=0;
  lastWheel=now;wheelTotal+=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?reel.clientHeight:1);
  if(Math.abs(wheelTotal)>=40){go(active+Math.sign(wheelTotal));wheelTotal=0}
},{passive:false});
dialog.addEventListener('keydown',event=>{
  if(event.key==='ArrowDown'||event.key==='PageDown'){event.preventDefault();go(active+1)}
  if(event.key==='ArrowUp'||event.key==='PageUp'){event.preventDefault();go(active-1)}
});
dialog.querySelector('.lab-home').addEventListener('click',()=>{dialog.close();location.hash='home'});
dialog.querySelectorAll('.lab-nav a:not([href="#lab"])').forEach(link=>link.addEventListener('click',()=>dialog.close()));
dialog.querySelector('a[href="#lab"]').addEventListener('click',event=>event.preventDefault());
document.querySelector('[data-open-lab]').addEventListener('click',()=>{if(location.hash==='#lab')syncRoute()});
dialog.addEventListener('close',()=>{
  document.body.classList.remove('lab-open');updatePlayback();
  if(location.hash==='#lab')history.replaceState(null,'','#home');
  trigger?.focus({preventScroll:true});
});
function syncRoute(){
  if(location.hash==='#lab'&&!dialog.open){
    document.querySelector('#about-dialog').open&&document.querySelector('#about-dialog').close();
    trigger=document.activeElement;document.body.classList.add('lab-open');dialog.showModal();
    paused=true;reel.scrollTop=0;select(0);dialog.querySelector('.lab-home').focus();
  }else if(location.hash!=='#lab'&&dialog.open)dialog.close();
}
document.addEventListener('visibilitychange',updatePlayback);
window.addEventListener('hashchange',syncRoute);window.addEventListener('popstate',syncRoute);
window.addEventListener('resize',()=>{if(dialog.open)reel.scrollTo({top:active*reel.clientHeight,behavior:'instant'})});
syncRoute();





