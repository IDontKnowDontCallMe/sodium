import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import MainInfoReducer from './MainInfoReducer';
import PhotoAreaInfoReducer from './PhotoAreaInfoReducer';
import AlbumDisplayInfoReducer from './AlbumDisplayInfoReducer';
import PostAreaInfoReducer from './PostAreaInfoReducer';
import PostDetailInfo from './PostDetailInfoReducer';

import {routerReducer} from 'react-router-redux';


export default combineReducers({

    mainInfo: MainInfoReducer,
    photoAreaInfo: PhotoAreaInfoReducer,
    albumDisplayInfo: AlbumDisplayInfoReducer,
    postAreaInfo: PostAreaInfoReducer,
    postDetailInfo: PostDetailInfo,
    user: UserReducer,
    router: routerReducer,

});