import {createRoot} from 'react-dom/client';
import LogoLoop from './LogoLoop';
const rows=[
 {label:'建模、原型、视觉与绘画',items:[['犀牛 Rhino','skills-png/skill-rhino.png'],['KeyShot','skills-png/skill-keyshot-user.png'],['Cinema 4D','skills-png/skill-c4d-cutout.png'],['SolidWorks','skills-png/skill-solidworks-cutout.png'],['Nomad Sculpt','skills-png/skill-nomad.png'],['Figma','skills-png/skill-figma.png'],['Photoshop','skills-png/skill-photoshop.png'],['Illustrator','skills-png/skill-illustrator.png'],['Procreate','skills-png/skill-procreate.png']]},
 {label:'AI、视频制作与办公',items:[['ChatGPT','skills-png/tool-chatgpt.png'],['Codex','skills-png/skill-codex.png'],['即梦','skills-png/tool-jimeng.png'],['可灵','skills-png/tool-kling-user.png'],['Midjourney','skills-png/tool-midjourney.png'],['Lovart','skills-png/tool-lovart.png'],['剪映','skills-png/skill-capcut.png'],['开拍','skills-png/skill-kaipai.png'],['Word','skills-png/skill-word.png'],['Excel','skills-png/skill-excel.png'],['PowerPoint','skills-png/skill-ppt.png']]},
];
const renderItem=(item,key)=><span className="skill-logo" tabIndex={key.startsWith('0-')?0:-1} aria-label={item.alt}><img src={item.src} alt={item.alt} draggable={false}/><span className="skill-logo-name" aria-hidden="true">{item.alt}</span></span>;
export function mountSkills(target){
 const root=createRoot(target);
 root.render(<div className="skills-loops">{rows.map((row,i)=><LogoLoop key={row.label} logos={row.items.map(([alt,file])=>({alt,src:`assets/${file}`}))} speed={[32,25,36,28][i]} direction={i%2?'right':'left'} logoHeight={54} gap={58} pauseOnHover fadeOut={false} renderItem={renderItem} ariaLabel={row.label}/>)}</div>);
 return ()=>root.unmount();
}



