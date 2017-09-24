import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image, ScrollView} from 'react-native';
import RateYourExperience from './component/rateYourExperience';
import QuickQuestion from './component/quickQuestion';
import YesNoPopUp from './component/yesNoPopUp';
import TakeAPicWith from './component/takeApicWith'
import OpenQuestion from './component/openQuestion'
import ShareWith from './component/shareWith'
import NavBar from '../../navigationComponent/navigationBar'

const image = require("../../../../assets/images/smile_4.png");

export default class MainLis2 extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
                    <Image source={require("../../../../assets/images/homeScreenBack.jpg")}/>
                </View>
                <NavBar/>
                <ScrollView>
                <View style={{paddingBottom:50}}>
                  <YesNoPopUp headerTitle="Are You Sure?"
                  title="All the Data will be Lost."
                  hasButton={true}
                  />
                  <YesNoPopUp headerTitle="Experience is Active"
                  title="You can't delete while experience is active."
                  hasButton={false}
                  />
                  <YesNoPopUp headerTitle="Bummer"
                  title="I could not genarate an experience for you,try later or in anoter spot."
                  centerImage={image}
                  />
                  <YesNoPopUp headerTitle="Something is Wrong"
                  title="Unknown coupon code"
                  hasButton={false}
                  />
                  <YesNoPopUp headerTitle="Something is Wrong"
                  title="Sry,Can't recognize the code,try manually."
                  hasButton={false}
                  />

                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
