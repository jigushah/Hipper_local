import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image} from 'react-native';
import PreExperienceComponent from './component/preExperienceComponent';
import NavBar from '../../navigationComponent/navigationBar'


export default class prevExperience extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
                    <Image source={require("../../../../assets/images/homeScreenBack.jpg")}/>
                </View>
                <NavBar/>
                <View style={{
                    padding:15,
                    backgroundColor:'rgb(240,240,240)',
                    justifyContent:'center'}}>
                    <Text style={{textAlign:'center',
                        fontFamily:'NunitoBoldItalic',
                        fontSize:18,
                        color:'rgb(121,121,121)'}}>
                        My Previous Experience
                    </Text>
                </View>
                <PreExperienceComponent title="israeli summer time" star="4.5" date="June 12 2017" place="Tel-aviv"/>
                <PreExperienceComponent title="The best of Rotchild" star="4.5" date="June 12 2017" place="Jerusalem"/>
                <PreExperienceComponent title="The Florentine Taste" star="4.5" date="June 12 2017" place="Berlin"/>
                <PreExperienceComponent title="Go green in Tel-aviv" star="4.5" date="June 12 2017" place="Tel-aviv"/>
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
