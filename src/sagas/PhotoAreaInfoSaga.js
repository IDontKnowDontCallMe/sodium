import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {searchPhotosApi, getPhotoOfThemeApi} from '../api/PhotoAreaInfoApi'

function* searchPhotos(action) {

    try{
        const searchList = yield call(searchPhotosApi, action.payload);

        yield put({type:'CHANGE_ALL_PHOTO_LIST', payload: {photoList: searchList}});
    }
    catch (e){
        console.log('search error')
    }


}

function * getPhotosOfTheme(action) {

    yield put({type:'PHOTO_AREA_LOADING_OPEN'});

    try{
        const searchResult = yield call(getPhotoOfThemeApi, action.payload);

        if(searchResult.success){
            yield put({type:'CHANGE_ALL_PHOTO_LIST', payload: {photoList: searchResult.list}});
        }
        else {
            alert('get photos of theme false!')
        }
    }
    catch (e){
        console.log('getTheme error')
    }

    yield put({type:'PHOTO_AREA_LOADING_CLOSE'});

}

export default [

    takeLatest('SEARCH_PHOTO', searchPhotos ),
    takeLatest('GET_PHOTOS_OF_THEME', getPhotosOfTheme)


];