export function createDragStreak({limit=10}={}){
  let count=0,clicks=0,lastX=0,lastY=0,direction=null;
  return {
    begin(x,y){lastX=x;lastY=y;direction=null;},
    move(x,y){
      const dx=x-lastX,dy=y-lastY;
      lastX=x;lastY=y;
      if(dx===0&&dy===0)return false;
      const next=dx!==0?(dx>0?'right':'left'):(dy>0?'down':'up');
      if(next===direction)return false;
      direction=next;count++;
      return count>=limit;
    },
    click(){clicks++;return clicks>=limit;},
    record(moved){
      if(!moved)return false;
      count++;
      return count>=limit;
    },
    reset(){count=0;clicks=0;direction=null;}
  };
}
