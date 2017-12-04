import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {createVideoApi } from '../api/VideoInfoApi';
import {history} from '../store'

function* createVideo(action){

    yield put({type: 'CREATE_VIDEO_LOADING_OPEN'})


    try{

        const result = yield call(createVideoApi, action.payload);

        if(result.success){



        }
        else{
            alert('create video false!!!')
        }
    }
    catch (e){
        console.log(e)
    }

    yield put({type: 'CREATE_VIDEO_LOADING_CLOSE'})

}


export default [
    takeLatest('CREATE_VIDEO', createVideo),


];