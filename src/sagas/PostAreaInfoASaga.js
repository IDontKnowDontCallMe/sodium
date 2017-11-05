import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {searchPostApi} from '../api/PostAreaInfoApi'

function* searchPost(action) {

    try{
        const searchList = yield call(searchPostApi, action.payload);

        yield put({type:'CHANGE_ALL_POST_LIST', payload: {postList: searchList, order: action.payload.order}});
    }
    catch (e){
        console.log('search error')
    }


}


export default [

    takeLatest('SEARCH_POST', searchPost ),


];