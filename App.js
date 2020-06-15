import React from 'react';
import Main from './Components/MainComponent';
import { Colors } from "./styles";
import Header from "./Components/HeaderComponent";
import TourView from './TourView/index'
import { Image, StyleSheet, Animated, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Navigator from './Components/HomeComponent';

export default function App() {

  return (

    <ScrollView style={styles.container}>
      
     <Navigator />
<Header />
      <TourView />

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
