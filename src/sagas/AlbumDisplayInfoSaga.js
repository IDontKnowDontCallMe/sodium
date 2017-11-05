import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {addAlbumCommentApi, addAlbumStarApi, cancelAlbumStarApi} from '../api/AlbumDisplayInfoApi'

function* addAlbumStar(action) {

    try{
        const result = yield call(addAlbumStarApi, action.payload);

        if(result){
            yield put({type:'CHANGE_HAS_STAR_IT'});
        }
    }
    catch (e){
        console.log('add star error')
    }


}

function * cancelAlbumStar(action) {
    try{
        const searchList = yield call(cancelAlbumStarApi, action.payload);

        if(result){
            yield put({type:'CHANGE_HAS_STAR_IT'});
        }
    }
    catch (e){
        console.log('cancel star error')
    }
}


function * addAlbumComment(action) {
    try{
        const newCommentList = yield call(addAlbumCommentApi, action.payload);

        yield put({type:'CHANGE_COMMENTS', payload: {commentList: newCommentList}});
    }
    catch (e){
        console.log('add album comment error')
    }
}

export default [

    takeLatest('ADD_ALBUM_STAR', addAlbumStar ),
    takeLatest('CANCEL_ALBUM_STAR', cancelAlbumStar),
    takeLatest('ADD_ALBUM_COMMENT', addAlbumComment),


];