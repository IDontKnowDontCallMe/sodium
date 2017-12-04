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

    allPostList: [],
    postList: [],
    choosedLabel:  '发帖时间',
    pageNum: 1,
    pageIndex: 1,

    searchLoading: false,

};

export default function PostAreaInfoReducer(state = initState, action) {
    switch (action.type) {

        case 'CHANGE_ALL_POST_LIST':
            const {postList, order} = action.payload;

            let num = postList.length;
            let rest = num%10;
            num = num/10;
            if(rest>0){
                num++;
            }

            return {
                allPostList: postList,
                postList: postList.slice(0, 10),
                choosedLabel: order ,
                pageNum: num,
                pageIndex: 1,
            };

        case 'CHANGE_POST_PAGE':

            const {targetPage} = action.payload;

            return {
                ...state,
                pageIndex: targetPage,
                postList: state.allPostList.slice((targetPage-1)*10,(targetPage-1)*10+10),
            };

        case 'SEARCH_POST_LOADING_OPEN':
            return {
                ...state,
                searchLoading:true
            }

        case 'SEARCH_POST_LOADING_CLOSE':
            return {
                ...state,
                searchLoading:false
            }




        default:
            return state;
    }
}