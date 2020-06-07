import React from 'react';
import {AntDesign, Entypo} from '@expo/vector-icons';
import {SpacedGs} from "./styles";
import {Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={colors.text}>Header Screen</Text>
      <Image source={{uri:' https://images.unsplash.com/photo-1534050359320-02900022671e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}} style={{width:'100%', height:400}}></Image>
        <View style={styles.topButtons}>
            <Button name="close" size="24" color="#fff"/>
            <View style={SpacedGs.rowCenter}>
                <AntDesign name="save" size='24' />
                <AntDesign name="share" size='24' />
                <Entypo name="dots-three-vertical" size='14' />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
 topButtons: {
    ...SpacedGs.rowBetween,
    position: 'absolute',
    top: '64',
    left: "32",
    right:"32"
   
  },
  topButtonRight:{
      marginLeft:12,
      color: '#fff'
  },
 
});