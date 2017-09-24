import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image} from 'react-native';
import PopUpHeader from '../subComponent/popUpHeader';
import RatingLogoComponent from '../subComponent/ratingLogoComponent'

export default class QuickQuestion extends React.Component {
  closePopUp = () => {
    alert("Pop up Closed.")
  }
    render() {
        return (
            <View style={{backgroundColor:'white',marginTop:30,marginLeft:15,marginRight:15,paddingBottom:10,borderRadius:5}}>
                <PopUpHeader headerTitle={this.props.headerTitle} closePopUp={this.closePopUp}/>
                <Text style={{marginTop:7,color:'gray',marginLeft:20,marginRight:20,textAlign:'center'}}>
                {this.props.question}</Text>
                <RatingLogoComponent/>
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
