import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,TouchableHighlight} from 'react-native';
import PopUpHeader from '../subComponent/popUpHeader';
import RatingLogoComponent from '../subComponent/ratingLogoComponent'

export default class RateThisPlace extends React.Component {
  closePopUp = () => {
    alert("Pop up Closed.")
  }
    render() {
        return (
            <View style={{backgroundColor:'white',marginTop:30,marginLeft:15,marginRight:15,paddingBottom:10,borderRadius:5}}>
                <PopUpHeader headerTitle={this.props.headerTitle} closePopUp={this.closePopUp}/>
                <View>
                {(this.props.centerImage)?
                  <View style={{alignItems:'center',padding:10}}>
                    <Image style={{height:80,width:80}} source={this.props.centerImage}/>
                  </View>
                  :<View />}
                </View>
                <View>
                {(this.props.title)?<View style={{padding:10}}>
                  <Text style={{color:'gray',marginLeft:10,fontSize:15}}>
                  {this.props.title}</Text>
                  </View>:<View />}
                </View>

                {(this.props.hasButton)?
                <View style={{paddingTop:20,
                  paddingLeft:20,paddingRight:20,
                  flexDirection:'row',
                  justifyContent:'space-around'}}>
                <TouchableHighlight
                style={{backgroundColor:'white',borderColor:'red',flex:1,borderRadius:5,borderWidth:1,padding:10,marginRight:10}}
                onPress={()=>{}}>
                  <Text style={{color:'red',fontSize:16,fontFamily:'NunitoBoldItalic',textAlign:'center'}}>No</Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={{backgroundColor:'rgb(68,176,165)',borderRadius:5,flex:1,padding:10,marginLeft:10}}
                onPress={()=>{}}>
                <Text style={{color:'white',fontSize:16,fontFamily:'NunitoBoldItalic',textAlign:'center'}}>Yes</Text>
                </TouchableHighlight>
                </View>:<View />}
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
