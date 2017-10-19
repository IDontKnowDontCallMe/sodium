


const initState = {

    hasLogined: false,
    userId: -1,
    userName: null,

};

export default function UserReducer(state = initState, action) {
    switch (action.type) {
        case 'CHANGE_USER':
            return {
                ...state,
                hasLogined: true,
                userId: action.payload.userId,
                userName: action.payload.userName,
            };
        // case 'LOGIN_ERROR':
        //     return {
        //         ...state,
        //     };
        default:
            return state;
    }
}

