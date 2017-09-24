import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { AppRegistry, TouchableHighlight, StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import Map from './MapView';

const listImg = require('../../../../assets/images/calzone.jpg');
const callImg = require('../../../../assets/images/calling.png')
const scanImg = require('../../../../assets/images/scan_me_btn.png')
const mapImg = require('../../../../assets/images/maps_logo.png')
const qrImg = require('../../../../assets/images/qr_code.png')
const closeImg = require('../../../../assets/images/cross_BW.png')

export default class cardComponent extends Component {
  constructor(){
    super();
    this.state = {
      mapView:false,
      scanView:false
    }
  }
  onScanClick = () =>{
    this.setState({
      scanView:true
    })
  }
  onMapClick = () => {
    this.setState({
      mapView:true
    })
  }

  onMapCloseClick = () => {
    this.setState({
      mapView:false,
      scanView:false
    })
  }
  onScanCloseClick = () => {
    this.setState(
      {
        mapView:false,
        scanView:false
      })
  }

  render() {
    return (
      <View style={styles.contentStyle}>
        <Text style={styles.contentText}>
          {this.props.content}
        </Text>

        <View style={{height:200}}>
          {(this.state.mapView)?
          <View style={{height:200}}>
            <TouchableHighlight style={{height:30, width:'30%', alignSelf:'flex-end'}} onPress={() => this.onMapCloseClick()}>
              <Image resizeMode={'contain'} style={{height:30, width:'100%'}} source={closeImg}/>
            </TouchableHighlight>
            <Map/>
          </View>
          :
          (this.state.scanView)?
            <View>
            <TouchableHighlight style={{height:30, width:'30%', alignSelf:'flex-end'}} onPress={() => this.onScanCloseClick()}>
              <Image resizeMode={'contain'} style={{height:30, width:'100%'}} source={closeImg}/>
            </TouchableHighlight>
            <Image style={{height:200, width:300,marginRight:10,marginLeft:10,alignSelf:'center'}} source={qrImg}/>
            </View>
            :<Image style={{height:200, width:300,marginRight:10,marginLeft:10,alignSelf:'center'}} source={listImg}/>}
        </View>

        <View style={{marginTop:20, flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableHighlight style={{height:50, width:'30%', alignSelf:'flex-end'}} onPress={() => this.onScanClick()}>
            <Image resizeMode={'contain'} style={{height:50, width:'100%', alignSelf:'flex-start'}} source={scanImg}/>
          </TouchableHighlight>
            <Image resizeMode={'contain'} style={{height:50, width:'30%', alignSelf:'center'}} source={callImg}/>
          <TouchableHighlight style={{height:50, width:'30%', alignSelf:'flex-end'}} onPress={() => this.onMapClick()}>
            <Image resizeMode={'contain'} style={{height:50, width:'100%'}} source={mapImg}/>
          </TouchableHighlight>
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
