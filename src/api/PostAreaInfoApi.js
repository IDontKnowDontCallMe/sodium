import {request} from '../until/request'
const backendAddress = 'http://localhost:3000';


export function searchPostApi(param) {

    console.log('api:searchPostApi');
    console.log(param)

    //let {order} = param;

    // return [
    //
    //     {
    //         url: '',
    //         postId: 1,
    //         postName: order+'一一一一一一一一一一一一一一',
    //         createdAt: '2017-11-11 15:30',
    //         updatedAt: '2017-11-15 15:30',
    //         answerNum: 25,
    //     },
    //     {
    //         url: '',
    //         postId: 2,
    //         postName: order+'二二二二二二二二二二二二二二二二二',
    //         createdAt: '2017-11-11 15:30',
    //         updatedAt: '2017-11-15 15:30',
    //         answerNum: 25,
    //     },
    //     {
    //         url: '',
    //         postId: 3,
    //         postName: order+'二二二二二二二二二二二',
    //         createdAt: '2017-11-11 15:30',
    //         updatedAt: '2017-11-15 15:30',
    //         answerNum: 25,
    //     },
    // ]

    let headers = new Headers()
    headers.append('Content-Type', 'application/json');

    return request(backendAddress+'/getPostList',{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(param)
    })

}

export function createPostApi(param) {

    console.log('api:createPostApi');
    console.log(param)

    // return {
    //     success: true,
    //     postId: 5,
    // };

    let headers = new Headers()
    headers.append('Content-Type', 'application/json');

    return request(backendAddress+'/private/createPost',{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(param)
    })

}