import { useIsFocused } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type GuessesNumbers = {
  guessedNumber: number;
  id: number;
};

export default function GamePage({ navigation }: any) {
  const isFocused = useIsFocused();
  React.useEffect(() => {
    if (isFocused) {
      startGame();
    }
  }, [isFocused]);

  const [randomNumber, setRandomNumber] = useState(0);
  const [enteredNumber, setEnteredNumber] = useState('');
  const [guessedNumbers, setGuessedNumbers] = useState<Array<GuessesNumbers>>(
    [],
  );

  const startGame = () => {
    setRandomNumber(Math.floor(Math.random() * 99) + 1);
  };

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

  const resetGuessedNumbersList = () => {
    setGuessedNumbers([]);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }],
      );

      return;
    }

    console.log(randomNumber);

    if (chosenNumber === randomNumber) {
      resetInputHandler();
      resetGuessedNumbersList();
      return navigation.navigate('GameOverPage' as never);
    }

    addGuessedNumber(chosenNumber);
    resetInputHandler();
  };

  return (
    <SafeAreaView className="flex-1 p-[2%]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View
          className={`self-center w-[90%] py-8 mt-[2%] flex-col items-center justify-center rounded-xl bg-primary shadow-2xl`}
        >
          <Text className="text-secondary text-3xl mb-4">Make Your Guess</Text>
          <TextInput
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            className="border-b-2 mb-8 px-4 text-3xl text-secondary border-secondary"
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
              <View className="w-[90%] self-center bg-secondary border-2 border-slate-900 mb-2 rounded-full shadow-2xl">
                <Text className="text-center text-lg">{`The number is actually ${
                  guessedNumbers.item.guessedNumber > randomNumber
                    ? 'lower'
                    : 'bigger'
                } than #${guessedNumbers.item.guessedNumber}`}</Text>
              </View>
            );
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
