import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import React from "react";
import { Text, View } from "react-native";
import "../global.css";

const RootLayout = () => {
  nowPlayingAction();
  return (
    <View>
      <Text className="text-3xl pt-10 px-4">solo es una prueba</Text>
    </View>
  );
};

export default RootLayout;
