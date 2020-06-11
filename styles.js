import {StyleSheet} from 'react-native';
export const Colors = {
    darkBg: '#313235',
    lightBg: '#333',
    darkHl: '#666',
    lighthl: '#888',
    redbtn: "#b51631",
    textSec: "#fffbb5",
    gold: '#F0C239'
}
export const SpacedGS = StyleSheet.create({
    sectionsContainer:{
        paddingVertical: 24,
        paddingHorizontal: 32,
        marginBottom: 8,
        backgroundColor: Colors.gold
    },
    sectionTitle:{
        fontWeight: "700",
        color: "#fff",
        fontSize: 15
    },
   rowCenter:{
   flexDirection: 'row',
   alignContent: 'center'
   },
    rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    },
    center:{
        alignItems:'center',
        justifyContent: 'center'
    },
    title:{
        color: '#fff',
        fontSize: 30
    },
    div:{
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginVertical: 24
    }

})