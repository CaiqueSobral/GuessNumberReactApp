import React from 'react';
import { Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function HomePage() {
  return (
    <View className="flex-1 justify-center p-[5%] bg-[#72063c]">
      <View className="self-center w-[90%] h-[30%] mt-[-100%] flex-col items-center justify-center border-4 border-[#ddb52f] rounded-xl bg-[#72063c]">
        <Text className="text-3xl mb-16 text-[#39031e] font-bold">
          Guess The Number
        </Text>
        <PrimaryButton>Play</PrimaryButton>
      </View>
    </View>
  );
}
