const initialState = {
    username: '',
    id: '',
    profilePic: ''
}

const login_user = 'Login_User'

export default function loginuser(id, username, profilePic) {
    return {
        type: login_user,
        payload: {
            id,
            username,
            profilePic
        }
    }
}

export function reducer (state = initialState, action) {
    switch (action.type) {
        case login_user:
            return {...state, username: action.payload, id: action.payload, profilePic: action.payload}
        default:
            return state
    }
}