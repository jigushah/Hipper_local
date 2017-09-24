import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,TouchableHighlight} from 'react-native';

const minusImg = require('../../../../../assets/images/minus_green.png');
const logoBW = require('../../../../../assets/images/logo_BW.png');

export default class LogoComponent extends React.Component {
    render() {
        return (
          <View>
          <TouchableHighlight onPress={()=> {}} >
              <View>
              <Image style={{height:40,width:40,margin:2}} resizeMode="contain"
                source={this.props.image}/>
                </View>
          </TouchableHighlight>
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
