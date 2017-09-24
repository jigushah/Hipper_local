import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,TouchableHighlight} from 'react-native';
import PopUpHeader from '../subComponent/popUpHeader';
import RatingLogoComponent from '../subComponent/ratingLogoComponent'

export default class OpenQuestion extends React.Component {
  closePopUp = () => {
    alert("Pop up Closed.")
  }
    render() {
        return (
            <View style={{backgroundColor:'white',marginTop:30,marginLeft:15,marginRight:15,paddingBottom:10,borderRadius:5}}>
                <PopUpHeader headerTitle={this.props.headerTitle} closePopUp={this.closePopUp}/>
                <View style={{paddingLeft:30,paddingRight:30,paddingTop:10}}>
                  <Text style={{marginBottom:10,color:'gray'}}>
                  {this.props.question}</Text>
                  <TextInput multiline={true} numberOfLine={4}
                  placeholder="Type your answer"
                  style={{borderColor:'gray',borderRadius:5,fontSize:16,
                  borderWidth:1,height:60,padding:10}}/>
                  <View style={{backgroundColor:'rgb(68,176,165)',shadowColor:'gray',
                  shadowOpacity:1,
                  shadowRadius:3,
                  shadowOffset:{height:0,width:0},
                  borderRadius:5,marginTop:10}}>
                  <TouchableHighlight underlayColor="transparent" onPress={()=>{}}>
                  <Text style={{color:'white',textAlign:'center',padding:10,fontSize:16,fontFamily:'NunitoBoldItalic'}}>Send</Text>
                  </TouchableHighlight>
                  </View>
                  </View>
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
