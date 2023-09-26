import { registerRootComponent } from 'expo';
import React from 'react';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

export function App() {
  return <GamePage />;
}

registerRootComponent(App);
