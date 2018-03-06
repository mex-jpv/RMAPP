/**
 * Remind Me App
 * Remind App for iOS and Android
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import IntroScreen from './screens/IntroScreen';
import TasksScreen from './screens/TasksScreen';
import AddTaskModal from './modals/AddTaskModal';




//TODO: Delete Header... headerMode: 'none'

export default App = StackNavigator (
{
  Home: { screen: IntroScreen },
   Tasks: { screen: TasksScreen }
},
{
  headerMode: 'none'
}
);
