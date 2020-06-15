import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { SpacedGS, Colors } from '../styles';


export default class Main extends Component{
    render(){
        return (
        <ScrollView styles={styles.container}>
         
            <Text style={SpacedGS.title}>
                
            </Text>
        </ScrollView>
        )
    }
}
const styles =StyleSheet.create ({
    container:{
    backgroundColor: Colors.darkBg},
          drawerHeader: {
            backgroundColor: '#5637DD',
            height: 140,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'row'
        },
        drawerHeaderText: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold'
        },
        drawerImage: {
            margin: 10,
            height: 60,
            width: 60
        },
        stackIcon: {
            marginLeft: 10,
            color: '#fff',
            fontSize: 24
        }
    
})