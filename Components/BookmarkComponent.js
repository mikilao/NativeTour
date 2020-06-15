import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
//import { Feather } from '@expo/vector-icons';
import { SpacedGS } from '../styles';
import { Icon } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class BookMark extends Component {
  
  render(){
  return (
    <View style={styles.bookmark}>

      <Icon
        raised
        reversed
        name='plane' 
        type='font-awesome'
        color="#fff"
        size={24}
        id="Bookmark"
       // ternary operator
         onPress={() => console.log("favorited already")}
    />
    </View>
  )
  }
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