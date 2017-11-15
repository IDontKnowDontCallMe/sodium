const initState = {

    hasLogined: false,
    userId: 1,
    userName: 'Man',
    userAvatar: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',

    showLoginModal: false,
    loginButtonLoading: false,
    loginErrorString: '',
    registerButtonLoading: false,
    registerErrorString: '',

};

export default function MainInfoReducer(state = initState, action) {

    let {userId, userName, userAvatar , message} = (action.payload===undefined? action: action.payload);

    switch (action.type) {
        // case 'CHANGE_USER':
        //     return {
        //         ...state,
        //         hasLogined: true,
        //         userId: action.payload.userId,
        //         userName: action.payload.userName,
        //     };
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

        case 'LOGIN_BUTTON_LOADING':
            return {
                ...state,
                loginButtonLoading: true,
            }

        case 'REGISTER_BUTTON_LOADING':
            return {
                registerButtonLoading: true,
            }

        case 'LOGIN_BUTTON_LOADING_CLOSE':
            return {
                ...state,
                loginButtonLoading: false,
            }

        case 'REGISTER_BUTTON_LOADING_CLOSE':
            return {
                registerButtonLoading: false,
            }


        case 'LOGIN_SUCCESS':

            return {
                ...state,
                hasLogined: true,
                userId: userId,
                userName: userName,
                userAvatar: userAvatar,
                loginButtonLoading: false,
                loginErrorString: '',
                showLoginModal:false
            }

        case 'REGISTER_SUCCESS':
            return {
                ...state,
                registerButtonLoading: false,
                registerErrorString: '',
            }

        case 'LOGIN_ERROR':
            return {
                ...state,
                loginButtonLoading: false,
                loginErrorString: message,
            };
        case 'REGISTER_ERROR':
            return {
                ...state,
                registerButtonLoading: false,
                registerErrorString: message,
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                hasLogined: false,
                userId: -1,
                userName: null,
                userAvatar: null,
            }


        default:
            return state;
    }
}