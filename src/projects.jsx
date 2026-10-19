import React from 'react';
import {createRoot} from 'react-dom/client';
import './projects.css';
const asset=file=>`assets/${file}`;
function Tags({words}){return <div className="case-tags">{words.map(word=><span key={word}>{word}</span>)}</div>}
function Detail({title,children}){return <p className="case-description"><strong>{title}：</strong>{children}</p>}
function Projects(){return <div className="project-cases">
<article className="case-robot" aria-labelledby="robot-project-title">
<img className="robot-backdrop" src={asset('project-duoduo-assembly.jpg')} alt="多多机器人装配与调试现场"/><div className="robot-shade"/>
<div className="robot-copy"><p className="case-kicker">01 / 校企合作 · 2026.07—至今</p><h3 id="robot-project-title">多多<br/>老年陪伴机器人</h3><p className="case-role">工业设计负责人</p>
<Detail title="需求拆解">梳理甲方既定的外观方向与功能要求，结合预算、产品定位及实现条件参与方案可行性讨论；围绕“毛绒手”需求，与团队提出可穿脱衣物方案，探索既定需求下的功能与体验拓展。</Detail>
<Detail title="方案设计">全程负责产品工业设计（ID），完成外观建模与曲面优化，结合结构及装配要求调整方案，协调外观表达与实物实现之间的约束。</Detail>
<Detail title="落地协作">参与机身支撑、连接等部分结构设计，跟进打样与装配调试，配合团队推进样机制作。</Detail>
<Tags words={['需求拆解','方案设计','外观建模','打样装配']}/></div>
<div className="robot-process" aria-label="机器人制作过程照片">{[['project-duoduo-assembly.jpg','装配调试','01'],['project-duoduo-printing.png','三维打印','02'],['project-duoduo-making.jpg','外壳制作','03']].map(([file,title,num])=><figure key={file}><img src={asset(file)} alt={title}/><figcaption><span>{num}</span><strong>{title}</strong></figcaption></figure>)}</div>
</article>
<article className="case-songshou" aria-labelledby="songshou-project-title"><div className="songshou-copy"><p className="case-kicker">02 / 用户调研 · 2025.09—2025.10</p><h3 id="songshou-project-title">松手<br/>智能放料箱</h3><p className="case-role">用户调研与方案设计</p>
<Detail title="需求分析">通过后厨现场观察与工人访谈，独立完成用户体验地图，梳理备料、配料及清洗流程，识别人工投料依赖经验、配比缺少定量依据、戴手套操作按钮不便等问题。</Detail>
<Detail title="产品规划">对比人工操作与现有设备流程，提出料仓内置、集中管理方案；规划餐盘扫码、称重与预配方联动，将减少手动设置、规范投料过程作为设计目标。</Detail>
<Detail title="硬件方案">针对出料集中与拆洗不便的问题，提出双轴移动餐盘撒料、出料口外置便于拆洗的设计方向，完成产品结构与交互方案提报。</Detail>
<Tags words={['用户调研','体验地图','产品规划','硬件方案']}/></div><figure className="songshou-photo"><img src={asset('project-songshou.jpg')} alt="后厨现场的人工配料操作"/><figcaption>后厨现场观察 / 识别操作痛点</figcaption></figure></article>
<article className="case-huawei" aria-labelledby="huawei-project-title"><div className="huawei-row"><figure className="huawei-photo"><img src={asset('project-huawei-scanning.jpg')} alt="华维改装车项目实车逆向扫描现场"/></figure><div className="huawei-copy"><p className="case-kicker">03 / 产品设计 · 2026.02—2026.04</p><h3 id="huawei-project-title">华维公司改装车项目</h3><p className="case-role">产品设计师</p>
<Detail title="现场分析">参与实车勘测与逆向扫描，采集车辆尺寸及空间信息，为改装方案设计提供依据。</Detail>
<Detail title="方案规划">参与前期手绘、流程规划与成本规划，通过 AI 进行快速表达，将现场信息用于方案讨论，支持改装方案细化。</Detail>
<Tags words={['现场分析','逆向扫描','流程规划','成本规划','AI 快速表达']}/></div></div></article>
</div>}
export function mountProjects(target){const root=createRoot(target);root.render(<Projects/>);return()=>root.unmount();}

