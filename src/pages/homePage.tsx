import React from 'react';
import { View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import BackgroundImageRender from '../components/BackgroundImageRender';

export default function HomePage() {
  return (
    <View className="flex-1 bg-neutral-500">
      <BackgroundImageRender>
        <PrimaryButton>Play</PrimaryButton>
      </BackgroundImageRender>
    </View>
  );
}
