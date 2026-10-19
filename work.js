const workDialog=document.querySelector('#work-dialog');
const workRoot=document.querySelector('#work-archive-root');
let disposeWork=null,workRequest=0;
async function openWork(){
  if(workDialog.open)return;
  document.querySelector('#about-dialog')?.close();
  document.querySelector('#lab-dialog')?.close();
  workDialog.showModal();workDialog.scrollTop=0;
  const request=++workRequest;
  try{const {mountWork}=await import('./work.bundle.js');if(request!==workRequest||!workDialog.open)return;disposeWork=mountWork(workRoot)}
  catch(error){console.error('Work could not load',error);workRoot.textContent='作品目录加载失败，请刷新重试。'}
}
document.querySelectorAll('a[href="#work"]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();if(location.hash!=='#work')history.pushState(null,'','#work');openWork()}));
workDialog.querySelector('button').addEventListener('click',()=>{workDialog.close();location.hash='home'});
workDialog.querySelectorAll('a:not([href="#work"])').forEach(link=>link.addEventListener('click',()=>workDialog.close()));
workDialog.addEventListener('close',()=>{workRequest++;disposeWork?.();disposeWork=null;workRoot.replaceChildren();if(location.hash==='#work')history.replaceState(null,'','#home')});
function syncWork(){if(location.hash==='#work')openWork();else if(workDialog.open)workDialog.close()}
window.addEventListener('hashchange',syncWork);window.addEventListener('popstate',syncWork);syncWork();
