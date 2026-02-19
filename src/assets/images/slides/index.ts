import clefairy from "./clefairy.jpg";
import gengar from "./gengar.jpg";
import pikachu from "./pikachu.jpg";
import dreepy from "./dreepy.jpg";
import chikorita from "./chikorita.jpg";
import charmander from "./charmander.jpg";

export type Slide = {
  name: string;
  image: string;
};

export const slides: Slide[] = [
  { name: "Charmander", image: charmander },
  { name: "Chikorita", image: chikorita },
  { name: "Clefairy", image: clefairy },
  { name: "Dreepy", image: dreepy },
  { name: "Gengar", image: gengar },
  { name: "Pikachu", image: pikachu },
];
