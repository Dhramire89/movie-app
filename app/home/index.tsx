import MainSlideShow from "@/presentation/components/MainSlideShow";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const saveArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <View className="mt-2 " style={{ paddingTop: saveArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2"> En Cartelera </Text>
      {/* Carrusel de imagenes*/}
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />
      {/* Lista de peliculas */}
    </View>
  );
};

export default HomeScreen;
