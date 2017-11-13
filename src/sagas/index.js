import {takeEvery, takeLatest} from 'redux-saga/effects';
import PhotoAreaInfoSaga from './PhotoAreaInfoSaga';
import PostAreaInfoSaga from './PostAreaInfoASaga';
import AlbumDisplayInfoSaga from './AlbumDisplayInfoSaga';
import PostDetailInfoSaga from './PostDetailInfoSaga';
import UserSaga from './UserSage';


export default function* rootSaga () {

    let sagas = [];

    sagas.push(PhotoAreaInfoSaga);
    sagas.push(PostAreaInfoSaga);
    sagas.push(AlbumDisplayInfoSaga);
    sagas.push(PostDetailInfoSaga);
    sagas.push(UserSaga);

    yield [

        sagas

    ];



}