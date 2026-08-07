export type Wallpaper = {
  id: number;
  title: string;
  image: string;
  author: string;
  resolution: string;
};

export const TRENDING: Wallpaper[] = [
  {
    id: 1,
    title: "Dragon Logo",
    image: "/wallpapers/Dragon-Logo/dragon-logo.png",
    author: "Mr. Drago",
    resolution: "4K",
  },
];

export const FEATURED: Wallpaper[] = [
  {
    id: 2,
    title: "Red Dragon",
    image: "/wallpapers/Dragon-Logo/red-dragon-logo.png",
    author: "Mr. Drago",
    resolution: "4K",
  },
];

export const NEW_WALLPAPERS: Wallpaper[] = [
  {
    id: 3,
    title: "Black Dragon",
    image: "/wallpapers/Dragon-Logo/black-dragon.png",
    author: "Mr. Drago",
    resolution: "4K",
  },
];
