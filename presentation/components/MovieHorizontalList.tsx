import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

// interface de la lista horizontal de peliculas
interface Props {
  movies: Movie[];
  title: string;
}

const MovieHorizontalList = ({ movies, title }: Props) => {
  return (
    <View>
      <Text className="text-3xl font-bold px-4 pt-5 pb-3">{title}</Text>
      <FlatList
        horizontal
        keyExtractor={(item) => item.id.toString()}
        data={movies}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster
            id={item.id}
            poster={item.poster}
            smallPoster
            className="pb-4"
          />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
