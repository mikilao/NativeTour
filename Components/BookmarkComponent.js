import React from 'react';
import { StyleSheet,  View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {  SpacedGS} from '../styles';
import {Icon} from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function BookMark() {
  return (
    <View style={styles.bookmark}>
    
    <Icon
  raised
  name='plane'
  type='font-awesome'
  color={Colors.gold}
  size={24}
  id="Bookmark" 
   color={Colors.gold}
  onPress={() => console.log('hello')} />
    </View>
  );
}
const styles = StyleSheet.create({
 
    bookmark: {
        position: "absolute",
        width: 56,
        height:56,
        right: 32,
        top: -56 /2,
        backgroundColor: '#fff',
        ...SpacedGS.center,
        borderRadius: 56/2,
        zIndex: 10
    }
})