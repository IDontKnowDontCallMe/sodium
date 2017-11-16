
const sampleAlbumList = [
];

const samplePostList = [


];

const initState = {

    userId: -1,
    userName: 'null',
    userAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
    hasFollowed: true,
    userInfoLoading: true,

    albumList: sampleAlbumList,
    postList: samplePostList,

};

export default function UserInfoReducer(state = initState, action) {

    let {userId, userName, userAvatar , hasFollowed, albumList, postList} = (action.payload===undefined? action: action.payload);

    switch (action.type) {

        case 'CHANGE_USER_INFO':
            return {
                ...state,
                userId: userId,
                userName: userName,
                userAvatar: userAvatar,
                hasFollowed: hasFollowed,
                albumList: albumList,
                postList: postList
            }

        case 'USER_INFO_LOADING_OPEN':
            return {
                ...state,
                userInfoLoading: true,
            }

        case 'USER_INFO_CLEAR':
            return {
                ...state,
                userId: -1,
                userName: '',
                userAvatar: '',
            }

        case 'USER_INFO_LOADING_CLOSE':
            return {
                ...state,
                userInfoLoading: false,
            }

        case 'USER_INFO_FOLLOWED_TRUE':
            return {
                ...state,
                hasFollowed: true,
            }

        case 'USER_INFO_FOLLOWED_FALSE':
            return {
                ...state,
                hasFollowed: false,
            }

        default:
            return state;
    }
}