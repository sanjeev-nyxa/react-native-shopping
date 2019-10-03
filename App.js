/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreenPage from './screens/HomeScreenPage';




console.disableYellowBox = true;
const MainNavigator = createStackNavigator({
 
  
  HomeScreenPage: {screen: HomeScreenPage},
  
  
});

const App = createAppContainer(MainNavigator);



export default App;
