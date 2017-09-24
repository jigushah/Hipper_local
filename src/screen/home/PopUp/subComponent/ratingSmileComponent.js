import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,TouchableHighlight} from 'react-native';
import SmileComponent from './smileLogoComponent'

const minusImg = require('../../../../../assets/images/minus_green.png');
const Smile1 = require('../../../../../assets/images/smile_1.png');
const Smile2 = require('../../../../../assets/images/smile_2.jpeg');
const Smile3 = require('../../../../../assets/images/smile_3.png');
const Smile4 = require('../../../../../assets/images/smile_4.png');
const Smile5 = require('../../../../../assets/images/smile_5.png');

export default class RatingSmileComponent extends React.Component {
    render() {
        return (
          <View style={{flexDirection:'row',justifyContent:'space-around',
          paddingTop:10,paddingLeft:20,paddingRight:20}}>
          <SmileComponent image={Smile1}/>
          <SmileComponent image={Smile2}/>
          <SmileComponent image={Smile3}/>
          <SmileComponent image={Smile4}/>
          <SmileComponent image={Smile5}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  listItem: {
      backgroundColor:'white',
      flex:1,
      justifyContent:'center',
      alignItems:'center',

      zIndex:1,
      //overflow: 'hidden',

  },
  listItemText:{
      color:'rgb(68,176,165)', fontSize:20,fontFamily:'NunitoBoldItalic'
  },
  listBackground:{
    shadowColor:'gray',
    shadowOpacity:1,
    shadowRadius:3,
    shadowOffset:{height:0,width:0},
    marginLeft:10,marginRight:10,
    backgroundColor:'rgb(255,255,255)',flexDirection:'row',opacity:1,padding:10
  }
});
