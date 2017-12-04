import {request} from '../until/request'
const backendAddress = 'http://localhost:3000';

export function createVideoApi(param) {
    console.log('api:createVideoApi')
    console.log(param)

    let headers = new Headers()
    headers.append('Content-Type', 'application/json');

    return request(backendAddress+'/private/createVideo',{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(param)
    });
}