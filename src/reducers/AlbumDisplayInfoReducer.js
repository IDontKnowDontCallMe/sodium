const samplePhotoList = [

    {
        url: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        photoId: 1,
        height: 600,
        width: 600,
    },
    {
        url: 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
        photoId: 2,
        height: 600,
        width: 600,
    },
    {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509373501964&di=a2f0a976c940b2990f0cf2d7e98ed04b&imgtype=0&src=http%3A%2F%2Fp1.v.17173cdn.com%2Fvw0tha%2FYWxqaGBf%2Fuploads%2Fimages%2Fvideo%2F20141029%2F18662900_1.jpg',
        photoId: 3,
        height: 300,
        width: 200,
    },
    {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509277294092&di=db49b31b15d185c459f91210d5737fe5&imgtype=0&src=http%3A%2F%2Fimg2.pconline.com.cn%2Fpconline%2F0707%2F29%2F1067959_070730bg06.jpg',
        photoId: 4,
        height: 400,
        width: 300,
    },


]

const sampleComments = [

    {
        authorId: 1,
        authorName: 'Jack',
        createdAt : '2017-10-20 16:21',
        content: '评论1',
    },
    {
        authorId: 2,
        authorName: 'Jane',
        createdAt : '2017-10-21 16:21',
        content: '评论2',
    },
    {
        authorId: 3,
        authorName: 'Tom',
        createdAt : '2017-10-23 16:21',
        content: '评论3长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论长评论',
    },
    {
        authorId: 4,
        authorName: 'Tom',
        createdAt : '2017-10-23 18:21',
        content: '评论4',
    },


]


const initState = {

    albumId: 1,
    albumName: '样本相册',
    theme: '人像',
    albumDescription: '这是一条很长的描述这是一条很长的描述这是一条很长的描述这是一条很长的描述这是一条很长的描述',
    authorId: 1,
    authorName: 'Jack',

    starNum: 25,
    hasStaredIt: false,

    photoList: samplePhotoList,
    commentList: sampleComments,

};



export default function AlbumDisplayInfoReducer(state = initState, action) {
    switch (action.type) {

        default:
            return state;
    }
}