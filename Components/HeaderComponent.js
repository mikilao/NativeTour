import React, {Component} from 'react';
import {AntDesign, Entypo} from '@expo/vector-icons';
import Colors, { SpacedGS } from "../styles";
import {Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
     <Image source={require("../assets/apples.jpg")} style={{width:'100%', height:200}}></Image>
        <View style={styles.topButtons}>
           
            <AntDesign name="close" size={24}  color="#bbb"/>
            
            <View style={SpacedGS.rowCenter}>
                
                <AntDesign name="sharealt" size={24} style={styles.topButtonRight} />
                <Entypo name="dots-three-vertical" size={14} style={styles.topButtonRight} />
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
    top: 10,
    left: 32,
    right:32
   
  },
  topButtonRight:{
      marginLeft:12,
      color: '#fff'
  }
 
});