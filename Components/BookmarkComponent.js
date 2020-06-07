import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { colors, SpacedGS} from '../styles'

export default function BookMark() {
  return (
    <View style={styles.bookmark}>
       
       <Feather name="Bookmark" size={24} ></Feather>
    </View>
  );
}
const styles = StyleSheet.create({
    bookmark: {
        position: "absolute",
        width: 56,
        height:56,
        right: 32,
        top: -32,
        backgroundColor: colors.text,
        ...SpacedGS.center
    }
})