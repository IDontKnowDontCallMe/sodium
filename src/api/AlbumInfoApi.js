import {request} from '../until/request'
const backendAddress = 'http://localhost:3000';

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};


export async function createAlbumApi(param) {

    console.log('api:createAlbumApi')
    console.log(param)

     await sleep(800)
    //
    // return {
    //     success: true,
    //     albumId: 111
    // }

    let headers = new Headers()
    headers.append('Content-Type', 'application/json');

    return request(backendAddress+'/private/createAlbum', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(param),
    })

}

export async function loadAlbumInfoApi(param) {

    return request(backendAddress+`/albumDetail/${param.albumId}`,{
        method:'GET'
    })

}

