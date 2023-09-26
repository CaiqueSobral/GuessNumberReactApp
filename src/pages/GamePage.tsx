import PrimaryButton from '../components/PrimaryButton';
import React, { useState } from 'react';
import { TextInput, View, Text, Alert, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type GuessesNumbers = {
  guessedNumber: number;
  id: number;
};

const randomNumber = Math.floor(Math.random() * 99) + 1;

export default function GamePage() {
  const insets = useSafeAreaInsets();
  const [enteredNumber, setEnteredNumber] = useState('');
  const [guessedNumbers, setGuessedNumbers] = useState<Array<GuessesNumbers>>(
    [],
  );

  const addGuessedNumber = (guessedNumber: number) => {
    setGuessedNumbers((oldGuessedNumbers) => {
      return [
        {
          guessedNumber: guessedNumber,
          id: guessedNumbers.length + 1,
        },
        ...oldGuessedNumbers,
      ];
    });
  };

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }],
      );
    }

    console.log(randomNumber);

    if (chosenNumber === randomNumber) console.log('You guessed it!!!!!');

    addGuessedNumber(chosenNumber);
    return;
  };

  return (
    <View className="flex-1 p-[2%]">
      <View
        className={`self-center w-[90%] h-[30%] mt-[${Math.floor(
          insets.top,
        )}] flex-col items-center justify-center rounded-xl bg-[#3b021f] shadow-2xl`}
      >
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
      <FlatList
        data={guessedNumbers}
        className="flex-1 mt-[5%]"
        renderItem={(guessedNumbers) => {
          return (
            <View className="w-[90%] self-center bg-[#ddb52f] border-2 border-slate-900 mb-2 rounded-full shadow-2xl">
              <Text className="text-center text-lg">{`The number is actually ${
                parseInt(enteredNumber) > randomNumber ? 'bigger' : 'lower'
              } than #${guessedNumbers.item.guessedNumber}`}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
