import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function PlayButton() {
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity className="flex justify-center items-center h-[12%] px-[15%] rounded-full bg-neutral-800 shadow-md">
        <Text className="text-4xl text-gray-100">Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}
