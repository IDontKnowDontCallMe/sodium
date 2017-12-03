import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {addPostCommentApi, loadPostDetailApi} from '../api/PostDetailInfoApi'

function* addPostComment(action) {

    try{
        const newPostCommentList = yield call(addPostCommentApi, action.payload);

        yield put({type:'CHANGE_POST_COMMENT', payload: {postCommentList: newPostCommentList}});
    }
    catch (e){
        console.log('add post answer error')
    }


}

function* loadPostInfo(action) {

    yield put({type:'CLEAR_POST_INFO'});
    yield put({type: 'POST_INFO_LOADING_OPEN'});

    try{

        const result = yield call(loadPostDetailApi, action.payload);

        if(result.success){

            console.log(result)

            yield put({type:'CHANGE_POST_INFO', payload: result})

        }
        else{
            alert('load post info false!!!')
        }
    }
    catch (e){
        console.log(e)
    }

    yield put({type: 'POST_INFO_LOADING_CLOSE'})

}

export default [

    takeLatest('ADD_POST_COMMENT', addPostComment ),
    takeLatest('LOAD_POST_INFO', loadPostInfo),


];