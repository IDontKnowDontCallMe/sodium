import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {createAlbumApi, loadAlbumInfoApi} from '../api/AlbumInfoApi';
import {history} from '../store'

function* createAlbum(action){

    yield put({type: 'CREATE_ALBUM_LOADING_OPEN'})

    try{

        const result = yield call(createAlbumApi, action.payload);

        if(result.success){

            history.push(`/album/${result.albumId}`)

        }
        else{
            alert('create album false!!!')
        }
    }
    catch (e){
        console.log(e)
    }

    yield put({type: 'CREATE_ALBUM_LOADING_CLOSE'})
}

function* loadAlbumInfo(action) {

    yield put({type:'CLEAR_ALBUM_INFO'});
    yield put({type: 'ALBUM_INFO_LOADING_OPEN'});

    try{

        const result = yield call(loadAlbumInfoApi, action.payload);

        if(result.success){

            yield put({type:'CHANGE_ALBUM_INFO', payload: result})

        }
        else{
            alert('load album info false!!!')
        }
    }
    catch (e){
        console.log(e)
    }

    yield put({type: 'ALBUM_INFO_LOADING_CLOSE'})

}


export default [
    takeLatest('CREATE_ALBUM', createAlbum),
    takeLatest('LOAD_ALBUM_INFO', loadAlbumInfo)


];

