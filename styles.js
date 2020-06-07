import {StyleSheet} from 'react-native';
export const Colors = {
    darkBg: '#222',
    lightBg: '#333',
    darkHl: '#666',
    lighthl: '#888',
    pinkbtn: "#ea3372",
    text: "#fff"
},
export const SpacedGS = StyleSheet.create({
   rowCenter:{
   flexDirection: 'row',
   alignContent: 'center'
   },
    rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    },
    center:{
        alignitems:'center',
        justifyContent: 'center'
    }

})