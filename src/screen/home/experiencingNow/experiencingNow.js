import React from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput ,Image ,TouchableHighlight} from 'react-native';
import NavBar from '../../navigationComponent/navigationBar';
import Constant from '../../../services/apiConstant';
import AccordionView from '../AccordionView/AccordionView';

export default class experiencingNow extends React.Component {
      render() {
        return (
          <View style={{flex:1}}>
          <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
              <Image resizeMode="contain" style={{height:Constant.screenHeight,width:Constant.screenWidth}}  source={require("../../../../assets/images/Asset_25xxxhdpi.png")}/>
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
                    Experiencing Now
                </Text>
            </View>
            <View style={{
                padding:15,
                justifyContent:'center',
                backgroundColor: 'rgba(0,0,0,0)'}}>
                <Text style={{textAlign:'center',
                    fontFamily:'NunitoBoldItalic',
                    fontSize:18,
                    color:'white'}}>
                    The best of Rotchild
                </Text>
            </View>
            <AccordionView />
          </View>
        );
    }
}
