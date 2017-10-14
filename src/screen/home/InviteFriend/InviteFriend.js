import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import NavBar from '../../navigationComponent/navigationBar';
import Textbox from '../../account/component/textBox'

const qrImg = require('../../../../assets/images/qr_code.png')


export default class InviteFriend extends Component {
  render() {
    return (
      <View>
        <NavBar/>
        <View style={styles.headerStyle}>
            <Text style={styles.headerLabel}>
                Experiencing Now
            </Text>
        </View>
        <Text style={styles.instructionText}>
            Tell Your Friend To Scan This With Hipper To Join Your Tour
        </Text>
        <View>
          <Image resizeMode={'contain'} style={styles.qrImage} source={qrImg}/>
          <Text style={{marginLeft:90, marginTop:5, fontSize:15}}>X2H3JM</Text>
        </View>
        <View style={{flexDirection:'row',margin:20}}>
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{
                    justifyContent:'center',
                    height:2,borderRadius:10,
                    backgroundColor:'rgb(166,166,166)'}}/>
            </View>
            <View style={{justifyContent:'center',margin:10}}>
                <Text style={{
                    fontSize:18,color:'rgb(166,166,166)',
                    textAlign:'center',
                    fontFamily:'NunitoBold'}}>OR</Text>
            </View>
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{
                    justifyContent:'center',
                    height:2,borderRadius:10,
                    backgroundColor:'rgb(166,166,166)'}}/>
            </View>
        </View>
        <Text style={{
            fontSize:18,color:'rgb(166,166,166)',
            textAlign:'center',
            fontFamily:'NunitoBold'}}>Invite By Email
        </Text>
        <View>
            <Textbox image={require('../../../../assets/images/email.png')} placeHolder={"Email"} textChanged={"dyr"}/>
        </View>
        <View style={{
            padding:10,flexDirection:'row',
            backgroundColor:'rgb(68,176,166)',
            alignItems:'center',
            justifyContent:'center',borderRadius:0,
            marginLeft:20,marginRight:20,marginTop:5,marginBottom:5}}>
            <Text style={{marginLeft:10,color:'white',fontSize:20}}>INVITE</Text>
        </View>
      </View>
    );
  }
}

const styles = {
    headerStyle: {
        padding:15,
        backgroundColor:'rgb(240,240,240)',
        justifyContent:'center'},

    headerLabel: {
        textAlign:'center',
        fontFamily:'NunitoBoldItalic',
        fontSize:18,
        color:'rgb(121,121,121)'},

    instructionText: {
      marginTop:20,
      marginRight:25,
      marginLeft:25,
      textAlign:'center',
      fontFamily:'NunitoRegular',
      fontSize:18,
      color:'rgb(121,121,121)'
    },

    qrImage: {
      marginTop:25,
      height:200,
      width:'100%'
    }

}
