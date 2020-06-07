import React from 'react';
import Header from '../Components/HeaderComponent'
import {colors} from "../styles"
import BookMark from '../Components/BookmarkComponent'
import { StyleSheet, Text, View } from 'react-native';

export default function TourView() {
  return (
    <View style={styles.container}>
       <StatusBar barStyle="light-content" />
       <Text style={colors.text}>Tour View</Text>
       <Header />
       <View>
    <BookMark/>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'colors.darkBg',
   
  },
 
});
