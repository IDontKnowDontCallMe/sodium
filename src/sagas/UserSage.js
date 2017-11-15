import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {loginApi, registerApi, logoutApi,tryLoginApi, cancelFollowingApi } from '../api/UserApi';
import {history} from '../store'

export function* login(action) {

    try{
        yield put({type:'LOGIN_BUTTON_LOADING'})

        const result = yield call(loginApi, action.payload);

        if(result.success){
            yield put({type:'LOGIN_SUCCESS', payload: result});

            //返回首页
            //history.push('/')
        }
        else {
            alert(result.message)
            yield put({type: 'LOGIN_ERROR', payload: result});
        }
    }
    catch (e){
        console.log(e)
        yield put({type:'LOGIN_BUTTON_LOADING_CLOSE'})
    }


}

function* tryLogin(action){
    try{

        const result = yield call(tryLoginApi);

        if(result.success){
            yield put({type:'LOGIN_SUCCESS', payload: result});

        }
    }
    catch (e){
        console.log(e)
    }
}

function* register(action) {

    try{

        yield put({type:'REGISTER_BUTTON_LOADING'});

        const result = yield call(registerApi, action.payload);

        if(result.success){

            yield put({type:'REGISTER_SUCCESS', payload: result});

            let loginParam = {userName: action.payload.userName, password: action.payload.password};

            let loginResult = yield call(loginApi, loginParam);

            if(loginResult.success){
                yield put({type:'LOGIN_SUCCESS', payload: loginResult});

                //返回首页
                history.push('/')
            }


        }
        else {
            alert(result.message)
            yield put({type: 'REGISTER_ERROR', payload: result});
        }

    }
    catch (e){

        yield put({type:'REGISTER_BUTTON_LOADING_CLOSE'});
        console.log(e)

    }

}

function* logout(action) {

    try{

        const result = yield call(logoutApi, action.payload);

        if(result.success){

            yield put({type:'LOGOUT_SUCCESS'});

            //返回首页
            history.push('/')

        }
        else {
            console.log('logout error')
        }

    }
    catch (e){

        console.log(e)

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
    takeLatest('TRY_LOGIN', tryLogin),
    takeLatest('LOGIN', login ),
    takeLatest('REGISTER', register),
    takeLatest('LOGOUT', logout),
    takeLatest('CANCEL_FOLLOWING', cancelFollowing),


];