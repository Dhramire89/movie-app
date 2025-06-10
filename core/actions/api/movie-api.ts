// primero se instala axios con npm install axios
import axios from "axios";

//se crea una instancia de axios con la URL base de la API de películas
// y se exporta para que pueda ser utilizada en otros archivos
export const movieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_URL, // para tener acceso a la URL base de la API de películas
  // se utiliza process.env.EXPO_PUBLIC_MOVIE_URL para obtener la URL base de la API de películas
  params: {
    // parámetros por defecto para las peticiones a la API
    language: "es-ES", // idioma por defecto costa rica
    api_key: process.env.EXPO_PUBLIC_MOVIE_API_KEY, // clave de la API
  },
});
