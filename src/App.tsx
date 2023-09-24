import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './pages/HomePage';

export function App() {
  return <HomePage />;
}

registerRootComponent(App);
