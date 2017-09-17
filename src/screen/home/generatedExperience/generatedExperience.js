import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,ScrollView} from 'react-native';
import GeneratedExperienceCom from './component/generatedExperienceCom';
import NavBar from '../../navigationComponent/navigationBar'
const images = [
{image1 :require('../../../../assets/images/image1.jpg')},
{image2:require('../../../../assets/images/image2.jpg')},
{image3:require('../../../../assets/images/image3.jpg')},
];

export default class prevExperience extends React.Component {
    render() {

        return (
            <View style={{flex:1}}>
                <NavBar/>
                <View style={{
                    padding:15,
                    backgroundColor:'rgb(240,240,240)',
                    justifyContent:'center'}}>
                    <Text style={{textAlign:'center',
                        fontFamily:'NunitoBoldItalic',
                        fontSize:18,
                        color:'rgb(121,121,121)'}}>
                        My Generated Experience
                    </Text>
                </View>
                <ScrollView style={{flex:1}}>
                <GeneratedExperienceCom title="The Best of Rotchild"
                                        imagePic={require('../../../../assets/images/image1.jpg')}
                                        cost="72" distance="2.48"/>
                <GeneratedExperienceCom title="The Florentine Taste"
                                        imagePic={require('../../../../assets/images/image2.jpg')}
                                        cost="84" distance="1.57"/>
                <GeneratedExperienceCom title="The israeli summer time"
                                        imagePic={require('../../../../assets/images/image3.jpg')}
                                        cost="69" distance="2.44"/>
                </ScrollView>
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
