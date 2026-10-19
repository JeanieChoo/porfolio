// Hover previews only the page colour; the existing links open page content.
const navigationLinks=[...document.querySelectorAll('.hero header nav a,.about-nav a,.work-dialog-nav a')];
const previewColours={'#work':'#ffffff','#about':'#c6b5ee','#lab':'#bdd8f2'};
let clickedDestination=null;
function clearNavigationPreview(){
 document.documentElement.classList.remove('navigation-previewing');
 delete document.documentElement.dataset.navigationPreview;
}
function previewNavigation(link){
 const destination=link.getAttribute('href');
 if(destination===clickedDestination)return;
 clickedDestination=null;
 document.documentElement.style.setProperty('--navigation-preview',previewColours[destination]);
 document.documentElement.dataset.navigationPreview=destination.slice(1);
 document.documentElement.classList.add('navigation-previewing');
}
navigationLinks.forEach(link=>{
 link.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')previewNavigation(link)});
 link.addEventListener('focus',()=>previewNavigation(link));
 link.addEventListener('click',()=>{clickedDestination=link.getAttribute('href');clearNavigationPreview()},true);
});
new Set(navigationLinks.map(link=>link.parentElement)).forEach(nav=>{
 nav.addEventListener('pointerleave',clearNavigationPreview);
 nav.addEventListener('focusout',event=>{if(!nav.contains(event.relatedTarget))clearNavigationPreview()});
});
document.addEventListener('pointermove',event=>{if(event.clientY>94)clickedDestination=null},{passive:true});
document.addEventListener('keydown',event=>{if(event.key==='Escape')clearNavigationPreview()});
window.addEventListener('hashchange',clearNavigationPreview);
window.addEventListener('blur',clearNavigationPreview);
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearNavigationPreview()});
