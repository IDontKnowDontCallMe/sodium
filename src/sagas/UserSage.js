import {call, put} from 'redux-saga/effects';
import {loginApi } from '../api/UserApi';

export function* login(action) {

    try{
        const user = yield call(loginApi, action.payload);

        yield put({type:'LOGIN_SUCCESS', payload: user});
    }
    catch (e){
        yield put({type:'LOGIN_ERROR'});
    }


}