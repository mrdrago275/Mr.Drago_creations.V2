'use client';

import {useEffect,useRef,useState} from 'react';

import type {Wallpaper} from '../../data/wallpapers';

import {
 HeartIcon as HeartOutline
} from '@heroicons/react/24/outline';

import {
 HeartIcon as HeartSolid
} from '@heroicons/react/24/solid';



export default function WallpaperItem({

 wallpaper,
 onOpen,
 onToggleLike,
 liked,

}:{

 wallpaper:Wallpaper;

 onOpen:()=>void;

 onToggleLike:()=>void;

 liked:boolean;

}){


const imgRef =
useRef<HTMLImageElement|null>(null);


const [visible,setVisible]=useState(false);

const [loaded,setLoaded]=useState(false);



useEffect(()=>{

 const img=imgRef.current;

 if(!img)return;


 const obs=new IntersectionObserver(

 ([entry])=>{

  if(entry.isIntersecting){

   setVisible(true);
   obs.disconnect();

  }

 },

 {rootMargin:'200px'}

 );


 obs.observe(img);


 return()=>obs.disconnect();


},[]);





return(

<article className="
relative
overflow-hidden
rounded-2xl
group
">


<div
onClick={onOpen}
className="cursor-pointer"
>


<img

ref={imgRef}

src={
visible
? wallpaper.image
: undefined
}

alt={wallpaper.title}

onLoad={()=>setLoaded(true)}

className={`
w-full
rounded-2xl
transition
duration-500
group-hover:scale-105

${loaded?'opacity-100':'opacity-0'}
`}

/>


{
!loaded &&

<div className="
absolute
inset-0
bg-white/10
animate-pulse
rounded-2xl
"/>

}





<button

onClick={(e)=>{

e.stopPropagation();

onToggleLike();

}}

className="
absolute
top-3
right-3
glass
p-2
rounded-full
"

>

{
liked ?

<HeartSolid className="w-5 h-5 text-red-500"/>

:

<HeartOutline className="w-5 h-5 text-white"/>

}

</button>





<div className="
absolute
bottom-3
left-3
right-3
glass
rounded-xl
p-3
">


<h3 className="
text-white
font-semibold
text-sm
truncate
">

{wallpaper.title}

</h3>


<p className="
text-silver
text-xs
">

{wallpaper.author}

</p>


</div>


</div>

</article>


);

}
