import { Dimensions } from 'react-native'

module.exports = {
    //Screen's Constant
    screen: Dimensions.get('window'),
    screenHeight:  Dimensions.get('window').height,
    screenWidth:  Dimensions.get('window').width,

    //API Constant
    baseUrl: 'http://35.198.70.235:8090/',

    //tour api

    generateTour:"tours/generator",
    generatedTourList : "tours/generator/list/"

};
