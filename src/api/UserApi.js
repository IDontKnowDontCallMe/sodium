import {request} from '../until/request'

const backendAddress = 'http://localhost:3000'


export async function loginApi(param) {

    console.log('api:loginApi')
    console.log(param)


    // return {
    //     success: true,
    //     message: 'success',
    //     userId: 1,
    //     userName: 'firstUser',
    //     userAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
    // }
    let formData = new FormData();
    formData.append('username', param.userName);
    formData.append('password', param.password);

    return request(backendAddress+'/login', {
        method: 'POST',
        body: formData
    })

}

export async function tryLoginApi() {

    console.log('api:tryLoginApi')

    return request(backendAddress+'/tryLogin', {
        method: 'GET',
    })

}

export async function registerApi(param) {

    console.log('api:registerApi')
    console.log(param)


    // return {
    //     success: true,
    //     message: 'success',
    //     userId: 1,
    //     userName: 'firstUser',
    //     userAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
    // }
    let formData = new FormData();
    formData.append('username', param.userName);
    formData.append('password', param.password);

    return request(backendAddress+'/register', {
        method: 'POST',
        body: formData
    })

}

export async function logoutApi(param) {

    console.log('api:logoutApi')
    console.log(param)

    // return {
    //     success: true
    // }
    return request(backendAddress+'/logout', {
        method: 'POST',
    })

}

export async function cancelFollowingApi(param) {
    console.log('api:cancelFollowingApi')
    console.log(param)


    return true;

}