import MainSlideShow from "@/presentation/components/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRateQuery, upComingQuery } =
    useMovies();
  const saveArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="mt-2 " style={{ paddingTop: saveArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2"> En Cartelera </Text>

        {/* Carrusel de imagenes*/}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Lista de peliculas populares */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
        />

        {/* Lista de peliculas con mejor ranking */}
        <MovieHorizontalList
          title="Mejor Calificadas"
          movies={topRateQuery.data ?? []}
        />

        {/* Lista de peliculas con mejor ranking */}
        <MovieHorizontalList
          title="Proximamente"
          movies={upComingQuery.data ?? []}
        />
        {/* Lista de peliculas con mejor ranking */}
        <MovieHorizontalList title="Nuevas" movies={topRateQuery.data ?? []} />
        <View className="mb-10" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
