import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image} from 'react-native';
import PopUpComponent from './component/popUpComponent';
import NavBar from '../../navigationComponent/navigationBar'


export default class prevExperience extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
                    <Image source={require("../../../../assets/images/homeScreenBack.jpg")}/>
                </View>
                <NavBar/>
                <PopUpComponent headerTitle="israeli summer time" />

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
