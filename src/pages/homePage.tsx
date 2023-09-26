import React from 'react';
import { Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function HomePage() {
  return (
    <View className="flex-1 justify-center p-[5%]">
      <View className="self-center w-[90%] h-[30%] mt-[-100%] flex-col items-center justify-center rounded-xl bg-[#3b021f] shadow-2xl">
        <Text className="text-3xl mb-16 text-[#ddb52f] font-bold">
          Guess The Number
        </Text>
        <PrimaryButton>Play</PrimaryButton>
      </View>
    </View>
  );
}
