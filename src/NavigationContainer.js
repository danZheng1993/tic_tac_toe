import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainScreen from './boards/game';
import ScoreScreen from './boards/score';

const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Game" component={MainScreen} />
      <Tab.Screen name="Score" component={ScoreScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
