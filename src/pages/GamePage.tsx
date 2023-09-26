import PrimaryButton from '../components/PrimaryButton';
import React from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function GamePage() {
  return (
    <View className="flex-1 p-[5%] bg-[#72063c]">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center"
      >
        <View className="self-center w-[90%] h-[30%] mt-[-100%] flex-col items-center justify-center border-4 border-[#ddb52f] rounded-xl bg-[#72063c] shadow-2xl">
          <Text className="text-[#ddb52f] text-3xl">Make Your Guess</Text>
          <TextInput
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            className="border-b-2 mb-8 px-4 text-3xl text-[#ddb52f] border-[#ddb52f]"
          ></TextInput>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
