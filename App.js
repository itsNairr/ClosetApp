import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import Tabs from './navigation/tabs.js';


export default function App() {

  return (
    <SafeAreaView  className="flex-auto bg-white"> 
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    </SafeAreaView>
  );
}