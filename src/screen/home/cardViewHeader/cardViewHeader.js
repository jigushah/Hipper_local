import React from 'react';
import { StyleSheet, Text, View, ScrollView,
    TextInput ,Image ,TouchableHighlight} from 'react-native';

export default class cardViewHeader extends React.Component {
      render() {

        return (
              <View style={{ padding:10, shadowOffset: {width: 1, height: 1}, shadowColor: 'black', shadowOpacity: 10 }}>
                  <Text>{this.props.title}</Text>
                <TouchableHighlight onPress={() => {this.props.onClose()}}>
                  <Image>{this.props.closeButton}</Image>
                </TouchableHighlight>
              </View>
        );
    }
}
