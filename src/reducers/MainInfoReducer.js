const initState = {

    hasLogined: true,
    userId: 1,
    userName: 'Man',

    showLoginModal: false

};

export default function MainInfoReducer(state = initState, action) {
    switch (action.type) {
        case 'CHANGE_USER':
            return {
                ...state,
                hasLogined: true,
                userId: action.payload.userId,
                userName: action.payload.userName,
            };
        case 'SHOW_LOGIN_MODAL':
            return {
                ...state,
                showLoginModal: true,
            };
        case 'CLOSE_LOGIN_MODAL':
            return {
                ...state,
                showLoginModal: false,
            };
        // case 'LOGIN_ERROR':
        //     return {
        //         ...state,
        //     };
        default:
            return state;
    }
}