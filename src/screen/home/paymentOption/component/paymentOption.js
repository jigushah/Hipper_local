import React from 'react';
import { StyleSheet, Text, View, ScrollView, Picker, Select,
    TextInput ,Image ,TouchableHighlight} from 'react-native';
import NavBar from '../../../navigationComponent/navigationBar';
import CardViewHeader from '../../cardViewHeader/cardViewHeader';
import Constant from '../../../../services/apiConstant';
import ModalDropdown from 'react-native-modal-dropdown';
import CheckBox from 'react-native-checkbox';


export default class paymentOption extends React.Component {
  onClose = () => {
    alert("hiii");
  }
  render() {
        return (
          <View style={{flex:1}}>

            <View style={{position:'absolute',top:0,bottom:0,left:0,right:0}}>
                 <Image resizeMode="contain" style={{height:Constant.screenHeight,width:Constant.screenWidth}}
                      source={require("../../../../../assets/images/Asset_25xxxhdpi.png")}/>
            </View>
            <NavBar/>
            <ScrollView style={{padding:15}}>
            <View style={{paddingBottom:20,marginBottom:50,opacity:0.9,backgroundColor: 'rgb(255, 220, 220)'}}>
            <View>
              <CardViewHeader title="Payment Option" onClose={this.onClose}/>
              <View style={styles.paymentOptionParentContainer}>
                  <View style={styles.paymentOptionContainer}>
                      <View style={styles.paymentOption}>
                        <Image style={styles.paymentOptionImage}
                           source={require("../../../../../assets/images/cardImage.jpeg")}
                           resizeMode={'contain'}/>
                        <Text style={styles.textStyle}>Credit Card</Text>
                      </View>
                      <View style={styles.paymentOptionEmptySpace} />
                      <View style={styles.paymentOption}>
                        <Image style={styles.paymentOptionImage}
                           source={require("../../../../../assets/images/cardImage.jpeg")}
                           resizeMode={'contain'}/>
                        <Text style={styles.textStyle}>PayPal</Text>
                      </View>
                  </View>
              </View>
              <View style={{height:450,marginTop:10, backgroundColor: 'rgb(255, 220, 220)'}}>
                 <View style={styles.headersOnCardContainer}>
                   <Text style={styles.textStyle}> Name on the card </Text>
                   <TextInput style={styles.biggerTextBoxStyle}
                    placeholder="Name on the card"/>
                 </View>
                 <View style={styles.creditCardDetails}>
                    <View>
                       <Text style={styles.textStyle}> Card Number </Text>
                    </View>
                    <View style={styles.creditCardDigitInputContainer}>
                       <TextInput style={styles.creditCardDigitInput}  placeholder="1234" maxLength = {4}/>
                       <TextInput style={styles.creditCardDigitInput}  placeholder="5678" maxLength = {4}/>
                       <TextInput style={styles.creditCardDigitInput}  placeholder="9012" maxLength = {4}/>
                       <TextInput style={styles.creditCardDigitInput}  placeholder="3456" maxLength = {4}/>
                    </View>
                 </View>
                 <View style={{  flexDirection: 'row', justifyContent:'space-between', width:330}}>
                    <View style={styles.headersOnCardContainer}>
                      <Text style={styles.textStyle}> Expirtion Date </Text>
                      <View style={{  flexDirection: 'row', justifyContent:'space-between', width:130, marginLeft:5}}>
                        <View style={{  flexDirection: 'row', backgroundColor:'white', width:60}}>
                          <ModalDropdown style={styles.dropDownNormalStyle}
                           defaultIndex={0}
                           defaultValue='MM' dropdownStyle={styles.modalDropdownSpecial}
                           textStyle={styles.modalDropdownText}
                           options={['MM','01', '02','03','04','05','06','07','08','09','10','11','12']}>
                        </ModalDropdown>
                        <Text style={{  marginTop: 12}}> &#8744; </Text>
                        </View>
                        <View style={{  flexDirection: 'row', backgroundColor:'white', width:60}}>
                          <ModalDropdown style={styles.dropDownNormalStyle} defaultValue= 'YY'
                           dropdownStyle={styles.modalDropdownSpecial}
                           defaultIndex={0}
                           textStyle={styles.modalDropdownText}
                           showsVerticalScrollIndicator={true}
                           options={['YY','18', '19','20','21','22','23','24','25','26','27','28','29']}>
                          </ModalDropdown>
                          <Text style={{  marginTop: 12}}> &#8744; </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.cvvContainer}>
                      <Text style={[styles.textStyle,{fontSize:13,textAlign:'right'}]}> CVV/CVC </Text>
                      <TextInput style={styles.cvvTextInput}  placeholder="CVV" maxLength = {3}/>
                    </View>
                 </View>


                   <View style={styles.headersOnCardContainer}>
                      <Text style={styles.textStyle}> I have a coupon code </Text>
                      <TextInput style={styles.biggerTextBoxStyle}
                       placeholder=" Coupon code"/>
                   </View>

                 <View>
                   <View style={styles.saveCardCheckBoxContainer}>
                     <CheckBox label='Save my card details'
                     checkboxStyle={{height:50,width:50}}
                      checkedImage={require('../../../../../assets/images/right.png')}
                      uncheckedImage={require('../../../../../assets/images/cross_validate.png')}
                      onChange={(checked) => alert('I am', this.checked)} />
                  </View>
                 </View>
                 <View style={styles.paymentButtonContainer}>
                 <TouchableHighlight onPress={this.onClose}>
                    <Text style={styles.paymentText}>
                       Pay 144 nis
                    </Text>
                 </TouchableHighlight>
                 </View>
</View>
              </View>
            </View>
            </ScrollView>
          </View>

        );
    }
}

const styles = StyleSheet.create({
    paymentOptionParentContainer: {
      padding: 15,
      backgroundColor: 'rgb(255,255,255)',
      shadowColor: 'black',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 1
    },
    paymentOptionContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15

    },
    paymentOption: {
      alignItems: 'center',
      flexDirection: 'column',
      marginRight:20
    },
    paymentOptionEmptySpace: {
      marginRight:20,
      marginLeft:20
    },
    paymentOptionImage: {
      marginBottom: 10,
      width:40,
      height:30
    },
    closeButton:{
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    headersOnCardContainer:{
      flexDirection:'column',
      justifyContent:'space-between',
      marginLeft:20,
      marginTop:10,
      marginBottom:10,
    },
    textStyle:{
      fontFamily: 'NunitoRegular',
      fontSize: 16,
      color:'rgb(128,128,128)',
      marginBottom:5,
    },
    biggerTextBoxStyle: {
       height: 40,
       width: 300,
       marginLeft:5,
       backgroundColor:'white',
       borderWidth: 0,
       borderRadius:3
    },
    dropDownNormalStyle:{
      height: 40,
      width:40,
      backgroundColor:'white',
      borderRadius:3
    },
    creditCardDetails:{
      marginLeft:20,
      marginTop:10,
      marginBottom:10,
      marginRight:25
    },
    creditCardDigitInputContainer:{
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    creditCardDigitInput:{
      height: 40,
      width:60,
      backgroundColor:'white',
      marginLeft:5,
      borderRadius:3
    },
    modalDropdownSpecial:{
      width:50,
      marginTop:15,
      marginLeft:5,
      borderRadius:3
    },
    modalDropdownText:{
      fontSize:15,
      marginLeft:10,
      marginTop:12,
    },
    cvvTextInput:{
      height: 40,
      width:60,
      flex:1,
      backgroundColor:'white',
      borderRadius:3
    },
    cvvContainer:{
        alignItems: 'flex-end',
        flexDirection:'column',
        justifyContent:'space-between',
        marginLeft:20,
        marginTop:10,
        marginRight:10,
        marginBottom:10
    },
    saveCardCheckBoxContainer:{
      marginLeft:20,
      marginTop:10,
      marginBottom:10
    },
    paymentButtonContainer:{
      marginLeft:20,
      marginRight:25,
      alignItems: 'center',
      backgroundColor:'#D5D3D3',
      height:40,
      borderRadius: 5
    },
    paymentText:{
      marginTop:10,
      marginBottom:10,
      fontFamily:'Arial',
      fontSize:20,
      color:'white',
      fontStyle:'italic'
    }
});
