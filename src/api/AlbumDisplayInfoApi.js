import {request} from '../until/request'
const backendAddress = 'http://localhost:3000';

export function addAlbumStarApi(param) {
    console.log('api:addAlbumStarApi')
    console.log(param)

    return true;
}

export function cancelAlbumStarApi(param) {
    console.log('api:cancelAlbumStarApi')
    console.log(param)

    return true;
}

export function addAlbumCommentApi(param) {
    console.log('api:addAlbumCommentApi')
    console.log(param)

    // return [
    //
    //     {
    //         authorId: 1,
    //         authorName: 'Jack',
    //         createdAt : '2017-10-20 16:21',
    //         content: '评论1',
    //     },
    //     {
    //         authorId: 2,
    //         authorName: 'Jane',
    //         createdAt : '2017-10-21 16:21',
    //         content: '评论2',
    //     },
    //     {
    //         authorId: 3,
    //         authorName: 'Tom',
    //         createdAt : '2017-10-23 16:21',
    //         content: '评论3长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论',
    //     },
    //     {
    //         authorId: 4,
    //         authorName: 'Tom',
    //         createdAt : '2017-10-23 18:21',
    //         content: '评论4',
    //     },
    //     {
    //         authorId: 4,
    //         authorName: 'Tom',
    //         createdAt : '2017-10-23 18:21',
    //         content: '模拟新评论',
    //     },
    //
    //
    // ]

    let headers = new Headers()
    headers.append('Content-Type', 'application/json');

    return request(backendAddress+'/private/addAlbumComment', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(param),
    })
}