export function searchPostApi(param) {

    console.log('api:searchPostApi');
    console.log(param)

    let {order} = param;

    return [

        {
            url: '',
            postId: 1,
            postName: order+'一一一一一一一一一一一一一一',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 2,
            postName: order+'二二二二二二二二二二二二二二二二二',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 3,
            postName: order+'二二二二二二二二二二二',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 4,
            postName: order+'四四四四四四四四四四四四四四',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 5,
            postName: order+'五五',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 1,
            postName: order+'一一一一一一一一一一一一一一',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 2,
            postName: order+'二二二二二二二二二二二二二二二二二',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 3,
            postName: order+'二二二二二二二二二二二',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 4,
            postName: order+'四四四四四四四四四四四四四四',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 5,
            postName: order+'五五',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 1,
            postName: order+'一一一一一一一一一一一一一一',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 2,
            postName: order+'二二二二二二二二二二二二二二二二二',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 3,
            postName: order+'二二二二二二二二二二二',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 4,
            postName: order+'四四四四四四四四四四四四四四',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 5,
            postName: order+'五五',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 1,
            postName: order+'ssssssssssssssss',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 2,
            postName: order+'sssssssssssssssss',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 3,
            postName: order+'sssssssssssssssssss',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 4,
            postName: order+'ssssssssssssssssssss',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
        {
            url: '',
            postId: 5,
            postName: order+'ssssssssssssss',
            createdAt: '2017-11-11 15:30',
            updatedAt: '2017-11-15 15:30',
            answerNum: 25,
        },
    ]

}

export function createPostApi(param) {

    console.log('api:createPostApi');
    console.log(param)

    return {
        success: true,
        postId: 5,
    };

}