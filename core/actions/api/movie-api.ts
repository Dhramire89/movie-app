// primero se instala axios con npm install axios
import axios from "axios";

//se crea una instancia de axios con la URL base de la API de películas
// y se exporta para que pueda ser utilizada en otros archivos
export const movieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_URL,
  params: {
    language: "es-ES", // idioma por defecto costa rica
    api_key: process.env.EXPO_PUBLIC_MOVIE_API_KEY, // clave de la API
  },
});
