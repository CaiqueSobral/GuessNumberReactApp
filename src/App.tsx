import { registerRootComponent } from 'expo';
import React from 'react';
import HomePage from './pages/HomePage';

export function App() {
  return <HomePage />;
}

registerRootComponent(App);
