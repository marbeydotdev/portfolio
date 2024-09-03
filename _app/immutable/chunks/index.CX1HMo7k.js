import{b as c}from"./scheduler.mAcpkolW.js";function b(n){const t=n-1;return t*t*t+1}function g(n,{delay:t=0,duration:a=400,easing:e=b,x:i=0,y:f=0,opacity:u=0}={}){const o=getComputedStyle(n),s=+o.opacity,y=o.transform==="none"?"":o.transform,l=s*(1-u),[m,p]=c(i),[$,x]=c(f);return{delay:t,duration:a,easing:e,css:(r,_)=>`
			transform: ${y} translate(${(1-r)*m}${p}, ${(1-r)*$}${x});
			opacity: ${s-l*_}`}}export{g as f};
