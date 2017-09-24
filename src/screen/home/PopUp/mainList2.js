import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image, ScrollView} from 'react-native';
import RateYourExperience from './component/rateYourExperience';
import QuickQuestion from './component/quickQuestion';
import YesNoPopUp from './component/yesNoPopUp';
import TakeAPicWith from './component/takeApicWith'
import OpenQuestion from './component/openQuestion'
import ShareWith from './component/shareWith'
import NavBar from '../../navigationComponent/navigationBar'


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

                <RateYourExperience headerTitle="Rate Your Experience" />
                <TakeAPicWith headerTitle="Take a Pic With"
                              title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                />
                <ShareWith headerTitle="Share With"/>
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
