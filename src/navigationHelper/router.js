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
import paymentOption from '../screen/home/paymentOption/component/paymentOption'
import experiencingNow from '../screen/home/experiencingNow/experiencingNow'
import mainList from '../screen/home/PopUp/mainList'
import mainList2 from '../screen/home/PopUp/mainList2'
import mainList3 from '../screen/home/PopUp/mainList3'

export default createRouter(() => ({
    login: () => login,
    homeScreen: () => homeScreen,
    signUp: () => signUp,
    drawer: () => drawer,
    preExperience: () => preExperience,
    genExperience: () => genExperience,
    bookExperience: () => bookExperience,
    paymentOption: () => paymentOption,
    experiencingNow: () => experiencingNow,
    mainList: () => mainList,
    mainList2: () => mainList2,
    mainList3: () => mainList3,

}),{ignoreSerializableWarnings: true});
