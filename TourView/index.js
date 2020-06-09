import React from 'react';
import Header from '../Components/HeaderComponent'
//import {Colors} from "../styles"
import BookMark from '../Components/BookmarkComponent'
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function TourView() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text  >Tour View</Text>
      <View style={styles.container}>
        
        <BookMark />
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
