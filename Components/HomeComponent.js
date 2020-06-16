import React from "react";
import { ScrollView, StyleSheet, View, Text, FlatList, SectionList } from "react-native";
import { Image, Divider } from "react-native-elements";
import { SpacedGS, Colors } from "../styles";


const imgData = [
    {
        id:0,
        title: "Soma",
        source: { uri: "https://assets.vogue.com/photos/5891f9739c1609bf7a72f48c/master/w_2560%2Cc_limit/00-art-guided-tour-of-san-francisco.jpg" }
    },
    {
        id:1,
        title: 'Embarcadero',
        source: { uri: "https://www.shoreexcursionsgroup.com/img/tour/AKSFCSSASHOHOP-2.jpg" }
    },
    {
        id:2,
        title: 'North Beach',
        source: require("https://www.shoreexcursionsgroup.com/img/tour/AKSFCSSASHOHOP-2.jpg")
        //source:{uri: "https://www.shoreexcursionsgroup.com/img/tour/AKSFCSSASHOHOP-2.jpg" }
    }
]
const Item = ({ title }) => (
    <View style={styles.container}>
        <Text style={SpacedGS.title}>{title}</Text>
        <Image style={{ width: '100%', height: 200 }} src={imgData.source} />
    </View>
);


function Home() {
    return (
        <ScrollView style={styles.container}>
            <Text style={SpacedGS.sectionTitle}>3 different adventures to take </Text>
            <Text style={SpacedGS.sectionsContainer}> Bacon ipsum dolor amet cupim meatball pig andouille. Veniam elit landjaeger burgdoggen, ipsum consequat meatloaf eu nulla tri-tip consectetur sirloin aliqua cow est. Deserunt chuck meatloaf ad turkey ribeye in dolor irure quis. Eiusmod tongue sausage fatback aute non, pork belly ullamco jowl. Ham excepteur ea, ullamco pork belly capicola fugiat dolore pastrami jerky turducken kielbasa labore pork chop shoulder. Sed nulla ad ut kevin cupim. Officia qui ipsum sed.             </Text>

            <Text style={SpacedGS.sectionTitle}> Food and Drinks</Text>
            <Text style={SpacedGS.sectionsContainer} >Bacon ipsum dolor amet cupim meatball pig andouille. Veniam elit landjaeger burgdoggen, ipsum consequat meatloaf eu nulla tri-tip consectetur sirloin aliqua cow est. Deserunt chuck meatloaf ad turkey ribeye in dolor irure quis. Eiusmod tongue sausage fatback aute non, pork belly ullamco jowl. Ham excepteur ea, ullamco pork belly capicola fugiat dolore pastrami jerky turducken kielbasa labore pork chop shoulder. Sed nulla ad ut kevin cupim. Officia qui ipsum sed.
                 </Text>
                 <FlatList
        data={imgData}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
            
                   </ScrollView>
                  
    )

}
export default Home;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: Colors.gold

        },
    }
)/*
<Image
style={{ width: 200, height: 200, }}
source={{ uri: "https://assets.vogue.com/photos/5891f9739c1609bf7a72f48c/master/w_2560%2Cc_limit/00-art-guided-tour-of-san-francisco.jpg" }} />
<Text style={SpacedGS.center, SpacedGS.title}> Soma  </Text>

<Image
style={{ width: 200, height: 200 }}
source={{ uri: "https://www.shoreexcursionsgroup.com/img/tour/AKSFCSSASHOHOP-2.jpg" }} />
<Text style={SpacedGS.title}>Embarcadero</Text>

<Image style={{ width: 200, height: 200 }} source={{ uri: "https://www.e-biketours.net/imag/ggb/palace-of-fine-arts.webp" }} />
<Text style={SpacedGS.title}>North Beach</Text>

</ScrollView>*/