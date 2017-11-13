import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {loginApi, cancelFollowingApi } from '../api/UserApi';

export function* login(action) {

    try{
        const user = yield call(loginApi, action.payload);

        yield put({type:'LOGIN_SUCCESS', payload: user});
    }
    catch (e){
        yield put({type:'LOGIN_ERROR'});
    }


}

export function* cancelFollowing(action) {

    try{

        const cancelResult = yield call(cancelFollowingApi, action.payload);

        if(cancelResult){
            yield put({type:'SUB_FOLLOWING_MEMBER', payload:{cancelId: action.payload.followingId}});
        }
        else {
            console.log('cancel following false!')
        }

    }
    catch (e){
        console.log(e)
    }

}

export default [

    takeLatest('LOGIN', login ),
    takeLatest('CANCEL_FOLLOWING', cancelFollowing),


];