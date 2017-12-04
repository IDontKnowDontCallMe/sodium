import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import MainInfoReducer from './MainInfoReducer';
import PhotoAreaInfoReducer from './PhotoAreaInfoReducer';
import AlbumDisplayInfoReducer from './AlbumDisplayInfoReducer';
import PostAreaInfoReducer from './PostAreaInfoReducer';
import PostDetailInfoReducer from './PostDetailInfoReducer';
import PeopleInfoReducer from './PeopleInfoReducer';
import UserInfoReducer from './UserInfoReducer';
import VideoReducer from './VideoReducer';

import {routerReducer} from 'react-router-redux';


export default combineReducers({

    mainInfo: MainInfoReducer,
    photoAreaInfo: PhotoAreaInfoReducer,
    albumDisplayInfo: AlbumDisplayInfoReducer,
    postAreaInfo: PostAreaInfoReducer,
    postDetailInfo: PostDetailInfoReducer,
    peopleInfo: PeopleInfoReducer,
    userInfo: UserInfoReducer,
    user: UserReducer,
    videoInfo: VideoReducer,
    router: routerReducer,

});