import React from 'react';
import Header from '../Components/HeaderComponent';
import About from '../Components/AboutComponent';
//import {Colors} from "../styles"
import BookMark from '../Components/BookmarkComponent'
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function TourView() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
         
        <View >
        <BookMark />
        <About />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

});
