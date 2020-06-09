import React, {Component} from 'react';
import {AntDesign, Entypo} from '@expo/vector-icons';
import Colors, { SpacedGS } from "../styles";
import {Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text >Header Screen</Text>
      <Image source={require("../assets/apples.jpg")} style={{width:'100%', height:200}}></Image>
        <View style={styles.topButtons}>
            <Button title="close" size={24}  color="#bbb"/>
            <View style={SpacedGS.rowCenter}>
                <AntDesign name="save" size={24}  />
                <AntDesign name="sharealt" size={24} />
                <Entypo name="dots-three-vertical" size={14} />
            </View>
        </View>
    </View> 
  );
}

const styles = StyleSheet.create({
 topButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
    position: 'absolute',
    top: 64,
    left: 32,
    right:32
   
  },
  topButtonRight:{
      marginLeft:12,
      color: '#fff'
  }
 
});