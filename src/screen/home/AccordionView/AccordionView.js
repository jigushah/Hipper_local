import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { AppRegistry, StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import CardComponent from './cardComponent';

const SECTIONS = [
  {
    title: 'RUSTICO',
    content: '15 Rotchild st.',

  },
  {
    title: 'BENEDICT',
    content: 'Lorem ipsum...',
  }
];

const plusImg = require('../../../../assets/images/plus_red.png');
const minusImg = require('../../../../assets/images/minus_green.png');


export default class AccordionView extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isMap: false
          activeSectionIndex: null
      };
  }
onMapClick = () => {
  this.setState({
    isMap: true
  })
}
onScanClick = () => {
  alert("Scan Clicked");
}
onChange = index => {
    this.setState(
      {
      activeSectionIndex : index
    })
  }

  _renderHeader = (section, i) => {
    return (
      <View style={styles.listBackground}>
          <View style={{paddingLeft:5,paddingRight:10}}>
            <Text style={styles.listItemText}>{section.title}</Text>
          </View>
          <View style={{position:'absolute',width:30,top:0,right:0,bottom:0}}>
              <View style={styles.listItem}>
              <Image style={{height:20,width:20,margin:2}} resizeMode="contain"
                source={this.state.activeSectionIndex === i ? minusImg : plusImg}/>
          </View>
          </View>
      </View>
    );
  }

  _renderContent = (section) => {
    return (
      <CardComponent content={section.content} onMapClick={this.onMapClick} onScanClick={this.onScanClick} />
    );
  }

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this.onChange}
      />
    );
  }
}

const styles = {
  listItem: {
      backgroundColor:'white',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      zIndex:1,
      //overflow: 'hidden',
      shadowOffset:{height:0,width:0}
  },
  listItemText:{
      color:'red', fontSize:20
  },
  listBackground:{
    marginLeft:10,marginRight:10, marginTop:5,
    backgroundColor:'rgb(255,255,255)',flexDirection:'row',opacity:1,borderRadius:5,padding:10
  }
}
