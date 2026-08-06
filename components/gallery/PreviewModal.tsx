'use client';


import {useEffect} from 'react';

import type {Wallpaper} from '../../data/wallpapers';



export default function PreviewModal({

wallpaper,
onClose,
onDownload,
onShare,
onToggleLike,
liked,


}:{

wallpaper:Wallpaper|null;

onClose:()=>void;

onDownload:(w:Wallpaper)=>void;

onShare:(w:Wallpaper)=>void;

onToggleLike:(id:string)=>void;

liked:boolean;


}){



useEffect(()=>{


function key(e:KeyboardEvent){

if(e.key==="Escape")
onClose();

}


window.addEventListener(
"keydown",
key
);


return()=>{

window.removeEventListener(
"keydown",
key
);

};


},[onClose]);





if(!wallpaper)
return null;




return(

<div className="
fixed
inset-0
z-50
flex
items-center
justify-center
p-4
">


<div
className="
absolute
inset-0
bg-black/80
"
onClick={onClose}
/>



<div className="
relative
z-10
max-w-5xl
w-full
glass
rounded-2xl
overflow-hidden
">


<img

src={wallpaper.image}

alt={wallpaper.title}

className="
max-h-[75vh]
w-full
object-contain
bg-black
"

/>


<div className="
p-4
flex
justify-between
items-center
">


<div>

<h2 className="
text-white
font-bold
">

{wallpaper.title}

</h2>


<p className="text-silver">

{wallpaper.author}

</p>

</div>



<div className="
flex
gap-2
">


<button
onClick={()=>
onToggleLike(wallpaper.id)
}
className="glass px-3 py-2 rounded-lg"
>
{liked?'♥':'♡'}
</button>


<button
onClick={()=>
onDownload(wallpaper)
}
className="bg-primary text-white px-3 py-2 rounded-lg"
>
Download
</button>


<button
onClick={()=>
onShare(wallpaper)
}
className="glass px-3 py-2 rounded-lg"
>
Share
</button>


<button
onClick={onClose}
className="glass px-3 py-2 rounded-lg"
>
Close
</button>


</div>


</div>


</div>


</div>


);


}
