import {createRoot} from 'react-dom/client';
import PulseHeart from './PulseHeart';
export function mountLabWidgets(heartTarget){
  const heartRoot=createRoot(heartTarget);
  const likes=[false,false];
  function select(index){heartRoot.render(<PulseHeart key={index} defaultLiked={likes[index]} count={likes[index]?1:0} showCount size={25} pillColor="transparent" idleColor="#715566" likedColor="#e04772" textColor="#715566" label="喜欢这个作品" onChange={liked=>{likes[index]=liked}}/>)}
  select(0);return {select};
}
