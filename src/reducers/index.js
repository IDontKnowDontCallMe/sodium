import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import MainInfoReducer from './MainInfoReducer';
import PhotoAreaInfoReducer from './PhotoAreaInfoReducer';
import AlbumDisplayInfoReducer from './AlbumDisplayInfoReducer';

import {routerReducer} from 'react-router-redux';


export default combineReducers({

    mainInfo: MainInfoReducer,
    photoAreaInfo: PhotoAreaInfoReducer,
    albumDisplayInfo: AlbumDisplayInfoReducer,
    user: UserReducer,
    router: routerReducer,

});