import PlayButton from '../components/primaryButton';
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const image = require('../../assets/backgroundImage.jpg');

export default function HomePage() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={image}
        resizeMode="cover"
        className="flex-1 items-center justify-center"
      >
        <PlayButton />
      </ImageBackground>
    </View>
  );
}
