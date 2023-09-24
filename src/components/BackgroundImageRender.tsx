import React from 'react';
import { View, ImageBackground } from 'react-native';

const image = require('../../assets/backgroundImage.jpg');

type ChildrenProps = React.PropsWithChildren<{}>;
export default function BackgroundImageRender({ children }: ChildrenProps) {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className="flex-1 items-center justify-center opacity-80"
    >
      {children}
    </ImageBackground>
  );
}
