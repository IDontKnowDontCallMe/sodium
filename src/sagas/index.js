import {takeEvery, takeLatest} from 'redux-saga/effects';
import {login} from './UserSage';


export default function* rootSaga () {

    yield [

        takeLatest('LOGIN', login)

    ];

}