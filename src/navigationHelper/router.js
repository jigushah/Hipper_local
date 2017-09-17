import {
    createRouter,
} from '@expo/ex-navigation';

import login from '../screen/account/login'
import homeScreen from '../screen/account/homeScreen'
import signUp from '../screen/account/signUp'
import drawer from '../screen/home/drawer'
import preExperience from '../screen/home/prevExperience/prevExperience'
import genExperience from '../screen/home/generatedExperience/generatedExperience'
import bookExperience from '../screen/home/bookExperience/bookExperience'

export default createRouter(() => ({
    login: () => login,
    homeScreen: () => homeScreen,
    signUp: () => signUp,
    drawer: () => drawer,
    preExperience: () => preExperience,
    genExperience: () => genExperience,
    bookExperience: () => bookExperience

}),{ignoreSerializableWarnings: true});
