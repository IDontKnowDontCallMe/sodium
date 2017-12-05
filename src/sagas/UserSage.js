import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {loginApi, registerApi, logoutApi,tryLoginApi,getUserDetailInfoApi,addFollowingApi, cancelFollowingApi, getPeopleInfoApi, getHomePageContentApi } from '../api/UserApi';
import {history} from '../store'

function* login(action) {

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

function* getUserDetail(action) {

    try{

        yield put({type: 'USER_INFO_LOADING_OPEN'});
        yield put({type: 'USER_INFO_CLEAR'});

        let userInfo = yield call(getUserDetailInfoApi, action.payload);

        if(userInfo.userId && userInfo.userId >= 0){

            yield put({type:'CHANGE_USER_INFO', payload: userInfo});

        }
        else {
            alert('get user info false')
        }


    }
    catch (e){
        console.log(e)
    }

    yield put({type: 'USER_INFO_LOADING_CLOSE'});

}

function* getPeopleInfo(action){

    try{

        yield put({type: 'PEOPLE_INFO_LOADING_OPEN'});
        yield put({type: 'PEOPLE_INFO_CLEAR'});

        let peopleInfo = yield call(getPeopleInfoApi);

        if(peopleInfo.success){

            yield put({type: 'CHANGE_PEOPLE_INFO', payload: peopleInfo})

        }
        else {
            alert('get people info false')
        }

    }
    catch (e){
        console.log(e)
    }

    yield put({type: 'PEOPLE_INFO_LOADING_CLOSE'});

}

function* cancelFollowing(action) {

    try{

        yield put({type: 'USER_INFO_LOADING_OPEN'});

        const cancelResult = yield call(cancelFollowingApi, action.payload);

        if(cancelResult.success){
            yield put({type:'SUB_FOLLOWING_MEMBER', payload:{cancelId: action.payload.followingId}});

            yield put({type: 'USER_INFO_FOLLOWED_FALSE'})
        }
        else {
            console.log('cancel following false!')
        }

    }
    catch (e){
        console.log(e)
    }

    yield put({type: 'USER_INFO_LOADING_CLOSE'});

}

function* addFollowing(action){

    try{

        yield put({type: 'USER_INFO_LOADING_OPEN'});

        const addResult = yield call(addFollowingApi, action.payload);

        if(addResult.success){

            yield put({type: 'USER_INFO_FOLLOWED_TRUE'})
        }
        else {
            console.log('add following false!')
        }

    }
    catch (e){
        console.log(e)
    }

    yield put({type: 'USER_INFO_LOADING_CLOSE'});

}

function* loadHomePage(action) {

    try{
        const result = yield call(getHomePageContentApi);

        if(result.success){

            yield put({type: 'UPDATE_HOME_PAGE', payload:{hotAlbums: result.hotAlbums, hotPosts: result.hotPosts, hotVideos: result.hotVideos}})

        }
        else {
            alert('get home page false !!!')
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
    takeLatest('ADD_FOLLOWING', addFollowing),
    takeLatest('CANCEL_FOLLOWING', cancelFollowing),
    takeLatest('LOAD_USER_INFO', getUserDetail),
    takeLatest('LOAD_PEOPLE_INFO', getPeopleInfo ),
    takeLatest('LOAD_HOME_PAGE', loadHomePage)


];