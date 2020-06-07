import React from 'react';
import Main from './Components/MainComponent';
import {colors} from "./styles"
import TourView from './TourView/index'
import {Image, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={colors.text}>Tour app</Text>
    <TourView />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'colors.darkBg',
   
  },
 
});
