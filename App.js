import React from 'react';
import Main from './Components/MainComponent';
import { Colors } from "./styles";
import Header from "./Components/HeaderComponent";
import TourView from './TourView/index';
import { Image, StyleSheet, Animated, ScrollView, Text } from 'react-native';
import Navigator from './Components/NavComponent'
import TourList from './Components/TourComponent';
import Home from './Components/HomeComponent';

export default function App() {

  return (

    <ScrollView styles={styles.container}>
      <Text>HEllo</Text>
     <Header />
    <Home />
  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBg,

  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});
