import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {searchPostApi, createPostApi} from '../api/PostAreaInfoApi';
import {history} from '../store'

function* searchPost(action) {

    yield put({type: 'SEARCH_POST_LOADING_OPEN'})

    try{
        const result = yield call(searchPostApi, action.payload);


        if(result.success){
            yield put({type:'CHANGE_ALL_POST_LIST', payload: {postList: result.postList, order: action.payload.order}});
        }
        else {
            alert('get post list false!')
        }

    }
    catch (e){
        console.log('search error')
    }

    yield put({type: 'SEARCH_POST_LOADING_CLOSE'})

}

function* createPost(action) {

    yield put({type: 'CREATE_POST_LOADING_OPEN'})

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

    yield put({type: 'CREATE_POST_LOADING_CLOSE'})

}


export default [

    takeLatest('SEARCH_POST', searchPost ),
    takeLatest('CREATE_POST', createPost),

];