import { ActionType } from "./types";
import axios from "axios";


export const signup = ({username, email, password}) => async dispatch => {

    dispatch({
        type: ActionType.LOADING
    })

    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, email, password})

    try {
        const res = await axios.post('http://127.0.0.1:8000/account/register-api/', body, config);
        dispatch({
            type: ActionType.SIGNUP_SUCCESS,
            payload: res.data
        });

        //dispatch(login(username, password))
    } catch (error) {
        dispatch({
            type: ActionType.SIGNUP_FAIL,
            payload: error.response.data
        })

        //dispatch(setAlert('Error Authenticating', 'error'))
    }
}

export const login = ({username, password}) => async dispatch => {

    dispatch({
        type: ActionType.LOADING
    })

    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password })

    try {
        const res = await axios.post('http://127.0.0.1:8000/account/login-api/', body, config);
        dispatch(
            {type: ActionType.LOGIN_SUCCESS,
            payload: res.data
            }
        );

    
        //dispatch(setAlert("Authenticated", "Successful"))
    } catch (err) {
        dispatch({
            type: ActionType.LOGIN_FAIL,
            payload: err.response.data
            
            
        })
        console.log(err.response.data)
        //dispatch(setAlert('Error Authenticating', 'error'))
    }
}

export const loadUser = () => async (dispatch, getState) => {

    const userToken = getState().auth.token;
 
     dispatch({
        type: ActionType.LOADING
    })
 
     const config = {
         headers:{
             'Content-Type': 'application/json',
         }
     }
 
     if (userToken){
         config.headers['Authorization'] = `Token ${userToken}`
     }
     try {
         const res = await axios.get('http://127.0.0.1:8000/account/get-user-api/', config);
         dispatch({
             type: ActionType.LOAD_USER,
             payload: res.data
         });
 
     } catch (error) {
         dispatch({
             type: ActionType.LOAD_USER_FAIL,
             payload: error.response.data
         })
 
         //dispatch(setAlert('Error Authenticating', 'error'))
     }
 }

 export const logout = () => async (dispatch, getState) => {
    let token = getState().auth.token;
    //console.log(token)


    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }

    if (token){
        config.headers['Authorization'] = `Token ${token}`
    }

    try {
        const res = await axios.post('http://127.0.0.1:8000/account/logout-api/', null, config);
        dispatch({
            type: ActionType.LOGOUT,
            payload: res.data
        });

        //dispatch(login(username, password))
    } catch (err) {
        
        
    }
    
}