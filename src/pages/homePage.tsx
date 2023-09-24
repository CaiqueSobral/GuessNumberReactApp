import React from 'react';
import { View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function HomePage() {
  return (
    <View className="flex-1 bg-neutral-500">
      <PrimaryButton>Play</PrimaryButton>
    </View>
  );
}
