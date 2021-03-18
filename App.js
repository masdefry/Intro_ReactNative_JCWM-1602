/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

// Screens
import BasicComponent from './src/Screens/BasicComponent/BasicComponent'
import CounterHooks from './src/Screens/CounterHooks/CounterHooks'
import Layouting from './src/Screens/Layouting/Layouting'

// React Navigation
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import StackNavigation from './src/Screens/Navigation/Navigation'

const App = () => {
  return(
    // <BasicComponent />
    // <CounterHooks />
    // <Layouting />
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App;
