import React from 'react';
import {createRoot} from 'react-dom/client';
import Folder from './Folder.jsx';
const entries=[
 ['产品思维','能够从用户场景出发识别需求，结合调研发现与业务反馈拆解问题，提出功能及体验方案。'],
 ['协作沟通','具备校企项目、活动组织经验，能够整理多方意见，协调任务安排并跟进执行。'],
 ['商业意识','具备销售数据与顾客偏好分析经验，能够结合用户需求和经营反馈思考产品方案。'],
 ['掌握工具','熟练使用 Figma 等原型开发软件，熟练使用 Excel 整理与分析数据，精通 Rhino、KeyShot 等模型软件，具备 Vibe Coding 协同开发经验。']
];
function SummaryFolders(){const items=entries.map(([title,text],i)=>({title,content:<div className="summary-paper"><span>ABOUT JEANIE / 0{i+1}</span><h4>{title}</h4><p>{text}</p></div>}));return <div className="summary-single-folder"><Folder label="个人总结" items={items} mode="flap" variant="solid" layout="spread" color="#9980bc" paperColor="#ffffff" tabPosition="right" openOn="click" size={1.3} frost={0.25} tilt={0.5} speed={1} bounce={0.4} peek intro draggable zoomOnClick theme="dark"/></div>}
export function mountSummary(target){const root=createRoot(target);root.render(<SummaryFolders/>);return()=>root.unmount();}
