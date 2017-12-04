


const initState = {

    videoSrc: '',

    createLoading: false,

};

export default function VideoReducer(state = initState, action) {
    switch (action.type) {

        case 'CREATE_VIDEO_LOADING_OPEN':
            return {
                ...state,
                createLoading: true,
            }

        case 'CREATE_VIDEO_LOADING_CLOSE':
            return {
                ...state,
                createLoading: false,
            }

        default:
            return state;
    }
}