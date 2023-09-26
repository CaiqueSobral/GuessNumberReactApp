import React from 'react';
import { Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 justify-center p-[2%]">
      <View className="self-center w-[90%] h-[30%] flex-col items-center justify-center rounded-xl bg-primary shadow-2xl opacity-95">
        <Text className="text-3xl mb-16 text-secondary font-bold">
          Guess The Number
        </Text>
        <PrimaryButton onPress={() => navigation.navigate('GamePage' as never)}>
          Play
        </PrimaryButton>
      </View>
    </SafeAreaView>
  );
}
