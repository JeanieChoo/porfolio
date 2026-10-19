export function createBottomHold({onBreak,onHolding=()=>{},delay=800,setTimer=setTimeout,clearTimer=clearTimeout}){
  let timer=null,fired=false;
  const cancel=()=>{if(timer!==null){clearTimer(timer);timer=null;onHolding(false);}};
  return {
    update(atBottom,dragging){
      if(fired)return;
      if(!atBottom||!dragging){cancel();return;}
      if(timer!==null)return;
      onHolding(true);
      timer=setTimer(()=>{timer=null;fired=true;onHolding(false);onBreak();},delay);
    },
    reset(){cancel();fired=false;},
    dispose:cancel
  };
}
