import React from 'react';
import Main from './Components/MainComponent';
import { Colors } from "./styles";
import {Header} from "./Components/HeaderComponent";
import TourView from './TourView/index'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  return (
    <ScrollView style={styles.container}>
          <Header />
          <TourView />
          <Main />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBg,

  },

});
