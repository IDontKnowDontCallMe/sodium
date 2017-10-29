import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import MainInfoReducer from './MainInfoReducer';
import PhotoAreaInfoReducer from './PhotoAreaInfoReducer'

import {routerReducer} from 'react-router-redux';


export default combineReducers({

    mainInfo: MainInfoReducer,
    photoAreaInfo: PhotoAreaInfoReducer,
    user: UserReducer,
    router: routerReducer,

});