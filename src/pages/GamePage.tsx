import PrimaryButton from '../components/PrimaryButton';
import React, { useState } from 'react';
import { TextInput, View, Text, Alert } from 'react-native';

export default function GamePage() {
  const randomNumber = Math.floor(Math.random() * 99) + 1;
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }],
      );
      return;
    }
  }

  return (
    <View className="flex-1 justify-center p-[5%]">
      <View className="self-center w-[90%] h-[30%] mt-[-100%] flex-col items-center justify-center rounded-xl bg-[#3b021f] shadow-2xl">
        <Text className="text-[#ddb52f] text-3xl">Make Your Guess</Text>
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          className="border-b-2 mb-8 px-4 text-3xl text-[#ddb52f] border-[#ddb52f]"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        ></TextInput>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}
