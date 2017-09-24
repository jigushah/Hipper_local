import React from 'react';
import { StyleSheet, Text, View, ScrollView,
    TextInput ,Image ,TouchableHighlight, TouchableOpacity} from 'react-native';

export default class cardViewHeader extends React.Component {
      render() {
        return (
              <View style={styles.cardviewContainer}>
                   <Text style={styles.cardViewHeaderText}>{this.props.title}</Text>
                  <View style={styles.closeButton}>
                  <TouchableHighlight onPress={this.props.onClose}>
                     <Image style={{width:20, height:20}} source={require("../../../../assets/images/cross.png")}>
                         {this.props.closeButton}
                     </Image>
                  </TouchableHighlight>
                  </View>
              </View>
        );
    }
}

const styles = StyleSheet.create({
    cardViewHeaderText: {
      color:'#0AD1C5',
      fontFamily:'NunitoRegular',
      fontSize:17,
      fontWeight:'bold'
    },
    closeButton:{
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    cardviewContainer:{
      backgroundColor:"white",
      flexDirection:'row',
      justifyContent:'space-between',
      shadowRadius: 3,
      borderRadius:2,
      padding:10,
      shadowOffset: {width: 1, height: 1},
      shadowColor: 'black',
      shadowOpacity: 100
    }
});
