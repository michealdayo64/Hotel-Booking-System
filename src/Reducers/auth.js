import { ActionType } from "../Actions/types"

const initialState = {
    token: localStorage.getItem('token'),
    loginSuccess: null,
    loginFail: null,
    logoutSuccess: null,
    signupSuccess: null,
    isLoading: false,
    signupFail: null,
    isAuthenticated: false,
    user: null
}

export default function auth(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case ActionType.SIGNUP_SUCCESS:
            return{
                ...state,
                signupSuccess: payload.msg,
                isLoading: false,
                isAuthenticated: false
            }
        case ActionType.LOADING:
            return{
                ...state,
                isLoading: true
            }
        case ActionType.SIGNUP_FAIL:
            return{
                ...state,
                signupFail: payload.msg,
                isLoading: false,
                isAuthenticated: false
            }
        case ActionType.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return{
                ...state,
                isAuthenticated: true,
                token: payload.token,
                loginSuccess: payload.msg,
                isLoading: false,
            }
        case ActionType.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                loginFail: payload.msg,
            }
        case ActionType.LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: payload.msg,
                isLoading: false
            }
        case ActionType.LOAD_USER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: payload.msg,
                isLoading: false
            }
        case ActionType.LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                logoutSuccess: payload.msg
            }
        default:
            return state
    }
}