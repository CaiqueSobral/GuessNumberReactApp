import { registerRootComponent } from 'expo';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './routes/Index';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';

export function App() {
  return (
    <SafeAreaProvider className="flex-1">
      <NavigationContainer>
        <LinearGradient colors={['#4e0329', '#ddb52f']} className="flex-1">
          <ImageBackground
            source={require('../assets/background-image.png')}
            resizeMode="cover"
            className="flex-1"
            imageStyle={{ opacity: 0.15 }}
          >
            <RootNavigator />
          </ImageBackground>
        </LinearGradient>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
