import React from 'react';
import { StyleSheet, Text, View, ScrollView,
    TextInput ,Image ,TouchableHighlight} from 'react-native';
import NavBar from '../../../navigationComponent/navigationBar';
import CardViewHeader from '../../cardViewHeader/cardViewHeader';
import Constant from '../../../../services/apiConstant'


export default class paymentOption extends React.Component {
  onClose = () => {
    alert("hiii");
  }
      render() {
        return (
          <View style={{flex:1}}>
            <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
              <Image resizeMode="contain" style={{height:Constant.screenHeight,width:Constant.screenWidth}} source={require("../../../../../assets/images/Asset_25xxxhdpi.png")}/>
              </View>
            <NavBar/>
            <View style={{padding:15}}>
              <CardViewHeader title="Payment Option" onClose={this.onClose}/>
              <View style={{padding: 15, backgroundColor: 'rgb(255, 237, 237)'}}>
              <Text>Payment</Text>
            </View>
            </View>
          </View>
        );
    }
}
