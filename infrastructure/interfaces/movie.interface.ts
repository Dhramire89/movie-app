import { useRef } from "react";
import { ICarouselInstance } from "react-native-reanimated-carousel";

export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
}
export const ref = useRef<ICarouselInstance>(null); // este tipo se saco de la documentation de reanimated-carousel
