import {LOGIN, REGISTER} from "../actions/auth.action";

const initialUser = {
    id: 1,
    email: 'admin@admin.com',
    password: '123456',
    name: 'Admin',
    lastName: 'Admin',
    img: 'default.png'
}

const initialState = {
    users: [initialUser],
    statusType: '',
    message: '',

    user: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                statusType: action.type
            }
        }
        case REGISTER: {
            return {
                ...state,
                message: action.payload.message
            }
        }
        default: {
            return state
        }
    }
}

export default authReducer;
