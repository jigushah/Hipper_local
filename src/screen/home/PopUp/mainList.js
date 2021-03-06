import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image, ScrollView} from 'react-native';
import RateThisPlace from './component/rateThisPlace';
import QuickQuestion from './component/quickQuestion';
import YesNoPopUp from './component/yesNoPopUp';
import OpenQuestion from './component/openQuestion'
import NavBar from '../../navigationComponent/navigationBar'


export default class MainList extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
                    <Image source={require("../../../../assets/images/homeScreenBack.jpg")}/>
                </View>
                <NavBar/>
                <ScrollView>
                <View style={{paddingBottom:50}}>
                <OpenQuestion headerTitle="this is an open question"
                              question="Lorem Ipsum is simply dummy text of the printing and typesetting industry?"
                />
                <RateThisPlace headerTitle="Rate This Place" />
                <QuickQuestion headerTitle="Quick question"
                               question='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                />
                <YesNoPopUp headerTitle="Are You Sure?"/>
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
