import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image} from 'react-native';
import PopUpHeader from '../subComponent/popUpHeader';


export default class PopUpComponent extends React.Component {
  closePopUp = () => {
    alert("Pop up Closed.")
  }
    render() {
        return (
            <View>
                <PopUpHeader headerTitle={this.props.headerTitle} closePopUp={this.closePopUp}/>
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
