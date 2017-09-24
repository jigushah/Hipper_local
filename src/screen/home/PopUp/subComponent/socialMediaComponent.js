import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,TouchableHighlight} from 'react-native';
import SmileComponent from './smileLogoComponent'

const minusImg = require('../../../../../assets/images/minus_green.png');
const FBLogo = require('../../../../../assets/images/facebook_logo.png');
const InstaLogo = require('../../../../../assets/images/instagram_logo_1.png');
const SnapLogo = require('../../../../../assets/images/snapchat_logo.png');
const TwitterLogo = require('../../../../../assets/images/twitter_logo.png');
const WhatsappLogo = require('../../../../../assets/images/whatsapp_logo.png');

export default class SocialMediaComponent extends React.Component {
    render() {
        return (
          <View style={{flexDirection:'row',justifyContent:'space-around',
          paddingTop:10,paddingLeft:30,paddingRight:30}}>
          <SmileComponent image={InstaLogo}/>
          <SmileComponent image={FBLogo}/>
          <SmileComponent image={SnapLogo}/>
          <SmileComponent image={TwitterLogo}/>
          <SmileComponent image={WhatsappLogo}/>
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
