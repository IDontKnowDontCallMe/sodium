
const sampleNoticfications = [
    {
        id: 0,
        type: 0,
        makerId: 1,
        makerName: 'Jack',
        makerAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        receiverId:2,
        itemId: 1,
        itemName: '第一个相册',
        createdAt: '2017-11-11 11:10'
    },
    {
        id: 1,
        type: 1,
        makerId: 1,
        makerName: 'Jack',
        makerAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        receiverId:2,
        itemId: 1,
        itemName: '第一个帖子',
        createdAt: '2017-11-12 11:10'
    },
    {
        id: 2,
        type: 3,
        makerId: 1,
        makerName: 'Jack',
        makerAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        receiverId:2,
        itemId: 1,
        itemName: '被评论的相册',
        createdAt: '2017-11-13 11:10'
    },
    {
        id: 4,
        type: 4,
        makerId: 1,
        makerName: 'Jack',
        makerAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        receiverId:2,
        itemId: 1,
        itemName: '被评论的帖子',
        createdAt: '2017-11-13 10:10'
    },
    {
        id: 2,
        type: 5,
        makerId: 1,
        makerName: 'Jack',
        makerAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        receiverId:2,
        itemId: 1,
        itemName: '被评论的帖子',
        createdAt: '2017-11-13 10:10'
    },
];

const sampleUser = [

    {
        id: 0,
        avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        name: 'first',

    },
    {
        id: 1,
        avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
        name: 'second',

    },
    {
        id: 2,
        avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        name: 'third',

    },
    {
        id: 3,
        avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
        name: 'Tom',

    },

];

const initState = {

    notificationList: sampleNoticfications,
    followersList: sampleUser,
    followingsList: sampleUser,

};

export default function PeopleInfoReducer(state = initState, action) {
    switch (action.type) {

        case 'SUB_FOLLOWING_MEMBER':
            const {cancelId} = action.payload;
            const followingsList = state.followingsList;
            let shouldDeleteIndex = -1;
            for(let i=0; i<followingsList.length; i++){
                if(followingsList[i].id === cancelId){
                    shouldDeleteIndex = i;
                    break;
                }
            }
            followingsList.splice(shouldDeleteIndex, 1);
            return {
                ...state,
                followingsList: followingsList,
            };

        default:
            return state;
    }
}