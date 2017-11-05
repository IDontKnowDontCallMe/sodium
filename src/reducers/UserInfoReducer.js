
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
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: '这是一个相册',
        starNum: 12,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        name: 'first',
        starNum: 2,
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
    {
        url: '',
        postId: 5,
        postName: '五五',
        createdAt: '2017-11-11 15:30',
        updatedAt: '2017-11-15 15:30',
        answerNum: 28,
    },

];

const initState = {

    userId: 1,
    userName: 'Jack',
    userAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
    hasFollowed: true,

    albumList: sampleAlbumList,
    postList: samplePostList,

};

export default function UserInfoReducer(state = initState, action) {
    switch (action.type) {

        // case 'LOGIN_ERROR':
        //     return {
        //         ...state,
        //     };
        default:
            return state;
    }
}