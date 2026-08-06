'use client';

import type { Wallpaper } from '../../data/wallpapers';
import WallpaperItem from './WallpaperItem';


export default function MasonryGrid({

  items,
  onOpen,
  onToggleLike,
  likes,

}:{

  items:Wallpaper[];

  onOpen:(w:Wallpaper)=>void;

  onToggleLike:(id:string)=>void;

  likes?:Record<string,boolean>;

}){


  if(!items.length){

    return(
      <div className="text-center text-silver py-20">
        No wallpapers found
      </div>
    );

  }



  return(

    <div className="masonry">

      {
        items.map((wallpaper)=>(

          <div
            key={wallpaper.id}
            className="masonry-item"
          >

            <WallpaperItem

              wallpaper={wallpaper}

              onOpen={()=>
                onOpen(wallpaper)
              }

              onToggleLike={()=>
                onToggleLike(wallpaper.id)
              }

              liked={
                !!likes?.[wallpaper.id]
              }

            />

          </div>

        ))
      }


    </div>

  );

}
