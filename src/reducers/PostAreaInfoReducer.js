const sampleList = [

    {
        url: '',
        postId: 1,
        postName: '一一一一一一一一一一一一一一',
        createdAt: '2017-11-11 15:30',
        updatedAt: '2017-11-15 15:30',
        answerNum: 25,
    },
    {
        url: '',
        postId: 2,
        postName: '二二二二二二二二二二二二二二二二二',
        createdAt: '2017-11-11 15:30',
        updatedAt: '2017-11-15 15:30',
        answerNum: 25,
    },
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
        answerNum: 25,
    },
    {
        url: '',
        postId: 5,
        postName: '五五',
        createdAt: '2017-11-11 15:30',
        updatedAt: '2017-11-15 15:30',
        answerNum: 25,
    },

];


const initState = {

    postList: sampleList,
    choosedLabel:  'postTime',
    pageNum: 5,
    pageIndex: 1,

};

export default function MainInfoReducer(state = initState, action) {
    switch (action.type) {

        // case 'LOGIN_ERROR':
        //     return {
        //         ...state,
        //     };
        default:
            return state;
    }
}