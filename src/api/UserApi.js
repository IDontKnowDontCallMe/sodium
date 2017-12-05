import {request} from '../until/request'

const backendAddress = 'http://localhost:3000';

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};


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

export async function addFollowingApi(param) {
    console.log('api:addFollowingApi')
    console.log(param)


    return request(backendAddress+`/private/addFollowing/${param.followingId}`,{
        method: 'GET',
    } );

}

export async function cancelFollowingApi(param) {
    console.log('api:cancelFollowingApi')
    console.log(param)


    return request(backendAddress+`/private/cancelFollowing/${param.followingId}`,{
        method: 'GET',
    } );

}

export async function getPeopleInfoApi() {
    console.log('api:getPeopleInfoApi')

    await sleep(800)

    return request(backendAddress+'/private/peopleInfo',{
        method: 'GET',
    })
}

export async function getUserDetailInfoApi(param){
    console.log('api:getUserDetailInfoApi')
    console.log(param)


    const sampleAlbumList = [
        {
            url: '',
            coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
            name: '相册1',
            starNum: 23,
            albumId:1,
        },
        {
            url: '',
            coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
            name: '美丽风光',
            starNum: 33,
            albumId:1,
        },

    ];

    const samplePostList = [

        {
            url: '',
            postId: 3,
            postName: '二二二二二二二二二二二',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 4,
            postName: '四四四四四四四四四四四四四四',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 12,
        },

    ];



    // return {
    //
    //     userId: 1,
    //     userName: 'Jack3',
    //     userAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
    //     hasFollowed: true,
    //
    //     albumList: sampleAlbumList,
    //     postList: samplePostList,
    //
    // };

    await sleep(800)

    return request(backendAddress+`/userInfo/${param.userId}`, {
        method: 'GET'
    })

}

export async function getHomePageContentApi() {
    console.log('api:getHomePageContentApi')

    return request(backendAddress+'/getHomePage',{
        method: 'GET',
    })
}