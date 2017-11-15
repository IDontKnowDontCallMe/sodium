import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {searchPostApi, createPostApi} from '../api/PostAreaInfoApi';
import {history} from '../store'

function* searchPost(action) {

    try{
        const searchList = yield call(searchPostApi, action.payload);

        yield put({type:'CHANGE_ALL_POST_LIST', payload: {postList: searchList, order: action.payload.order}});
    }
    catch (e){
        console.log('search error')
    }


}

function* createPost(action) {

    try{

        const createResult = yield call(createPostApi, action.payload);

        if(createResult.success){

            history.push('/post/'+createResult.postId);

        }
        else {
            console.log('create post false!')
        }

    }
    catch (e){
        console.log(e)
    }

}


export default [

    takeLatest('SEARCH_POST', searchPost ),
    takeLatest('CREATE_POST', createPost),

];