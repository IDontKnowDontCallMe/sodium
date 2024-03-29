
const sampleList = [

    {
      postId: 1,
      authorId: 1,
      authorName: 'Jack',
      toId: -1,
      toName: null,
      content: '说的很有道理',
      createdAt: '2017-11-12 16:12'
    },
    {
        postId: 2,
        authorId: 2,
        authorName: 'Tom',
        toId: 1,
        toName: 'Jack',
        content: '反对',
        createdAt: '2017-11-12 17:12'
    },
    {
        postId: 3,
        authorId: 1,
        authorName: 'Jack',
        toId: 2,
        toName: 'Tom',
        content: '反对啥?',
        createdAt: '2017-11-13 16:12'
    },
    {
        postId: 4,
        authorId: 3,
        authorName: 'Tony',
        toId: -1,
        toName: null,
        content: '楼上怎么了?',
        createdAt: '2017-11-12 16:12'
    },
    {
        postId: 5,
        authorId: 4,
        authorName: 'Jacky',
        toId: -1,
        toName: null,
        content: '不明白',
        createdAt: '2017-11-12 16:12'
    },
];

const initState = {

    postId: 1,
    postName: '论知识水平对大学生的重要性',
    authorId: 23,
    authorName: 'keyboard',
    content: '<p>首先：</p><blockquote>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“搞笑。”——鲁迅</blockquote><p>好好提高知识水平</p><p><br></p><p><br></p><p><br></p><h2>啊！</h2>',
    createdAt: '2017-11-09 16:12',
    updatedAt: '2017-11-12 16:12',

    postCommentList: sampleList,


    createLoading: false,
    postInfoLoading: false,
};

export default function MainInfoReducer(state = initState, action) {
    switch (action.type) {

        case 'CLEAR_POST_INFO':
            return {
                ...state,
                postId: -1,
                postName: null,
                authorId: -1,
                authorName: null,
                content: null,
                createdAt: null,
                updatedAt: null,

                postCommentList: [],
            }

        case 'CHANGE_POST_INFO':

            return {
                ...state,
                postId: action.payload.postId,
                postName: action.payload.postName,
                authorId: action.payload.authorId,
                authorName: action.payload.authorName,
                content: action.payload.content,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt,

                postCommentList: action.payload.postCommentList,
            }

        case 'CHANGE_POST_COMMENT':
            const {postCommentList} = action.payload;
            return {
                ...state,
                postCommentList: postCommentList,
            };

        case 'POST_INFO_LOADING_OPEN':
            return {
                ...state,
                postInfoLoading: true,
            }

        case 'POST_INFO_LOADING_CLOSE':
            return {
                ...state,
                postInfoLoading: false,
            }

        case 'CREATE_POST_LOADING_OPEN':
            return {
                ...state,
                createLoading: true,
            }

        case 'CREATE_POST_LOADING_CLOSE':
            return {
                ...state,
                createLoading: false,
            }

        default:
            return state;
    }
}