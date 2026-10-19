const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
http.createServer((req,res)=>{
  const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const target = path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!target.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  fs.stat(target,(err,stat)=>{if(err||!stat.isFile()){res.writeHead(404).end('Not found');return;}
    const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.mp4':'video/mp4','.webm':'video/webm','.png':'image/png','.jpg':'image/jpeg'};
    const headers={'Content-Type':types[path.extname(target)]||'application/octet-stream','Accept-Ranges':'bytes'};
    let start=0,end=stat.size-1,status=200;
    if(req.headers.range){
      const match=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if(!match||(!match[1]&&!match[2])){res.writeHead(416,{'Content-Range':`bytes */${stat.size}`}).end();return;}
      if(match[1]){start=Number(match[1]);if(match[2])end=Math.min(Number(match[2]),end)}
      else start=Math.max(0,stat.size-Number(match[2]));
      if(start>end||start>=stat.size){res.writeHead(416,{'Content-Range':`bytes */${stat.size}`}).end();return;}
      status=206;headers['Content-Range']=`bytes ${start}-${end}/${stat.size}`;
    }
    headers['Content-Length']=Math.max(0,end-start+1);
    res.writeHead(status,headers);
    if(req.method==='HEAD'||stat.size===0){res.end();return;}
    const stream=fs.createReadStream(target,{start,end});stream.on('error',()=>res.destroy());res.on('close',()=>stream.destroy());stream.pipe(res);
  });
}).listen(4175,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4175'));
