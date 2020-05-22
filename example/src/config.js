import { ReactComponent as DogIcon } from "./assets/Dog.svg";
import { ReactComponent as CatIcon } from "./assets/Cat.svg";
import { ReactComponent as BirdIcon } from "./assets/Bird.svg";
import { ReactComponent as HorseIcon } from "./assets/Horse.svg";
import { ReactComponent as FrogIcon } from "./assets/Frog.svg";
import { ReactComponent as HippoIcon } from "./assets/Hippo.svg";
import { ReactComponent as FishIcon } from "./assets/Fish.svg";

import dogFace from "./assets/dog-face.jpg";
import catFace from "./assets/cat-face.jpg";
import birdFace from "./assets/bird-face.jpg";
import fishFace from "./assets/fish-face.jpg";
import frogFace from "./assets/frog-face.jpg";
import hippoFace from "./assets/hippo-face.jpg";
import horseFace from "./assets/horse-face.png";

const config = [
  {
    name: "dog",
    icon: DogIcon,
    profilePic: dogFace,
    color: "#342EAD",
    backgroundColor: "hsla(243, 58%, 43%, 0.1)",
  },
  {
    name: "bird",
    icon: BirdIcon,
    profilePic: birdFace,
    color: "#1DB2A6",
    backgroundColor: "hsla(175, 72%, 41%, 0.1)",
  },
  {
    name: "cat",
    icon: CatIcon,
    profilePic: catFace,
    color: "#EA6228",
    backgroundColor: "hsla(18, 82%, 54%, 0.1)",
  },
  {
    name: "horse",
    icon: HorseIcon,
    profilePic: horseFace,
    color: "#801336",
    backgroundColor: "hsla(341, 74%, 29%, 0.1)",
  },
  {
    name: "frog",
    icon: FrogIcon,
    profilePic: frogFace,
    color: "#8CBA50",
    backgroundColor: "hsla(86, 43%, 52%, 0.1)",
  },
  {
    name: "hippo",
    icon: HippoIcon,
    profilePic: hippoFace,
    color: "#827397",
    backgroundColor: "hsla(265, 15%, 52%, 0.18)",
  },
  {
    name: "fish",
    icon: FishIcon,
    profilePic: fishFace,
    color: "#FF5733",
    backgroundColor: "hsla(11, 100%, 60%, 0.1)",
  },
];
export default config;
