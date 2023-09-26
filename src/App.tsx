import { registerRootComponent } from 'expo';
import React from 'react';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} className="flex-1">
      <ImageBackground
        source={require('../assets/background-image.png')}
        resizeMode="cover"
        className="flex-1"
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaProvider>
          <GamePage />
        </SafeAreaProvider>
      </ImageBackground>
    </LinearGradient>
  );
}

registerRootComponent(App);
