import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Grand Canyon",
    src: photo1,
    photographer: "Photo by some guy 1",
    location: "USA",
  },
  {
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Photo by some guy 2",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Great Wall of China",
    src: photo3,
    photographer: "Photo by some guy 3",
    location: "China",
  },
];

export default wondersImages;
