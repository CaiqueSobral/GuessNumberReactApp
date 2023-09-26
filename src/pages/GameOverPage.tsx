import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import PrimaryButton from '../components/PrimaryButton';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GameOverPage({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 justify-center p-[2%]">
      <View className="self-center w-[90%] h-[30%] flex-col items-center justify-center rounded-xl bg-primary shadow-2xl opacity-95">
        <Text className="text-3xl mb-16 text-secondary font-bold">
          You Guessed It!!! Nice
        </Text>
        <PrimaryButton onPress={() => navigation.navigate('GamePage' as never)}>
          Play Again
        </PrimaryButton>
      </View>
    </SafeAreaView>
  );
}
