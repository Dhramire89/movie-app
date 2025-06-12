import { MovieMapper } from "@/infrastructure/interfaces/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/movie-api";

export const PopularAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular");
    //console.log("Peliculas actuales:", JSON.stringify(data, null, 2));// data es esl objeto a imprimir, null es el espacio de sangrado y 2 es el número de espacios de sangrado
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    console.log("Peliculas actuales:", JSON.stringify(movies, null, 2)); // Imprime las peliculas actuales en consola
    return movies;
  } catch (error) {
    console.error(error);
    throw "Error al cargar las peliculas actuales:"; // Re-throw the error for further handling if needed
  }
};
