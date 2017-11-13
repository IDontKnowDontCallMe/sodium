import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {addPostCommentApi} from '../api/PostDetailInfoApi'

function* addPostComment(action) {

    try{
        const newPostCommentList = yield call(addPostCommentApi, action.payload);

        yield put({type:'CHANGE_POST_COMMENT', payload: {postCommentList: newPostCommentList}});
    }
    catch (e){
        console.log('add post answer error')
    }


}

export default [

    takeLatest('ADD_POST_COMMENT', addPostComment ),


];