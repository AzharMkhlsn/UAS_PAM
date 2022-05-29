import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import BrandaScreen from './src/BrandaScreen';
import MusicScreen from './src/MusicScreen';
import Social from './src/Social';
import Education from './src/Education';
import Recreation from './src/Recreation';
import Charity from './src/Charity';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
   <NavigationContainer>
    
     <Stack.Navigator>
         
     
     <Stack.Screen name="WELCOME" component={HomeScreen} ></Stack.Screen>
     <Stack.Screen name="branda" component={BrandaScreen}></Stack.Screen>
     <Stack.Screen name="music" component={MusicScreen}></Stack.Screen>
     <Stack.Screen name="social" component={Social}></Stack.Screen>
     <Stack.Screen name="education" component={Education}></Stack.Screen>
     <Stack.Screen name="recreation" component={Recreation}></Stack.Screen>
     <Stack.Screen name="charity" component={Charity}></Stack.Screen> 

     
     </Stack.Navigator>
   </NavigationContainer>
  )
}