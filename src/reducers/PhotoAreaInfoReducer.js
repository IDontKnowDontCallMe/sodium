const pageOneList = [
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        name: 'first',
        starNum: 233,
        albumId:2,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'first',
        starNum: 233,
        albumId:3,
    },
    {
        url: '',
        coverUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509277294092&di=db49b31b15d185c459f91210d5737fe5&imgtype=0&src=http%3A%2F%2Fimg2.pconline.com.cn%2Fpconline%2F0707%2F29%2F1067959_070730bg06.jpg',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
        name: 'first',
        starNum: 233,
        albumId:1,
    },
];

const pageTwoList = [
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'second',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'second',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'second',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'second',
        starNum: 233,
        albumId:1,
    },
    {
        url: '',
        coverUrl: 'https://react.semantic-ui.com/assets/images/wireframe/image.png',
        name: 'second',
        starNum: 233,
        albumId:1,
    },

];

const initState = {

    activedTheme: '全部',
    activedPage: 1,
    pageNum: 1,
    photoItemList: [],
    allItemList: [],

    photoAreaLoading: false,

};



export default function PhotoAreaInfoReducer(state = initState, action) {
    switch (action.type) {

        case 'CHANGE_ALL_PHOTO_LIST':
            const {payload} = action;

            let num = payload.photoList.length;
            let rest = num%12;
            num = num/12;
            if(rest>0){
                num++;
            }

            return {
                ...state,
                activedPage: 1,
                pageNum: num,
                photoItemList: payload.photoList.slice(0,12),
                allItemList: payload.photoList,
            };


        case 'CHANGE_PHOTO_PAGE':
            const {targetPage} = action.payload;

            return {
                ...state,
                activedPage: targetPage,
                photoItemList: state.allItemList.slice((targetPage-1)*12,(targetPage-1)*12+12),
            };

        case 'PHOTO_AREA_LOADING_OPEN':
            return {
                ...state,
                photoAreaLoading: true
            }

        case 'PHOTO_AREA_LOADING_CLOSE':
            return{
                ...state,
                photoAreaLoading: false
            }


        default:
            return state;
    }
}