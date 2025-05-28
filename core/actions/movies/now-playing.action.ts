import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/movie-api";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");
    console.log("Peliculas actuales:", JSON.stringify(data));

    return [];
  } catch (error) {
    console.error(error);
    throw "Error al cargar las peliculas actuales:"; // Re-throw the error for further handling if needed
  }
};
