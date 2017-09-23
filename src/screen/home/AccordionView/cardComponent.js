import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { AppRegistry, StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';

const listImg = require('../../../../assets/images/calzone.jpg');
const callImg = require('../../../../assets/images/calling.png')
const scanImg = require('../../../../assets/images/scan_me_btn.png')
const mapImg = require('../../../../assets/images/maps_logo.png')

export default class cardComponent extends Component {

  render() {
    return (
      <View style={styles.contentStyle}>
        <Text style={styles.contentText}>
          {this.props.content}
        </Text>
        <View style={{height:200}}>
        <Image style={{height:200,width:300,marginRight:10,marginLeft:10,alignSelf:'center' }} source={listImg}/>
          </View>
        <View style={{marginTop:20, flexDirection:'row',justifyContent:'space-between'}}>
          <Image resizeMode={'contain'} style={{height:50, width:'30%', alignSelf:'flex-start'}} source={scanImg}/>
          <Image resizeMode={'contain'} style={{height:50, width:'30%', alignSelf:'center'}} source={callImg}/>
          <Image resizeMode={'contain'} style={{height:50, width:'30%', alignSelf:'flex-end'}} source={mapImg}/>
        </View>
      </View>
    );
  }
}
const styles = {

  contentStyle: {backgroundColor:'white',
    marginLeft:10,marginRight:10,
    opacity:1,borderRadius:5,padding:10
  },
  contentText:{marginLeft:15, marginBottom:10, color:'grey',fontSize:14,fontFamily:'NunitoBoldItalic', textAlign:'left'}

}
