import {takeEvery, takeLatest} from 'redux-saga/effects';
import PhotoAreaInfoSaga from './PhotoAreaInfoSaga';
import PostAreaInfoSaga from './PostAreaInfoASaga';
import AlbumDisplayInfoSaga from './AlbumDisplayInfoSaga';


export default function* rootSaga () {

    let sagas = [];

    sagas.push(PhotoAreaInfoSaga);
    sagas.push(PostAreaInfoSaga);
    sagas.push(AlbumDisplayInfoSaga);

    yield [

        sagas

    ];



}