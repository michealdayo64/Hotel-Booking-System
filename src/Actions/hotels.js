import { ActionType } from "./types";
import axios from "axios";


export const listHotel = () => async (dispatch) => {


    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }

    try {
        const res = await axios.get('http://127.0.0.1:8000/hotels/hotel_list/', config);
        dispatch({
            type: ActionType.LOAD_HOTELS,
            payload: res.data
        });

        //dispatch(login(username, password))
    } catch (err) {
        console.log(err.response.data)
        
    }
    
}

export const listHotelId = (id = false) => async (dispatch) => {

        const config = {
            headers:{
                'Content-Type': 'application/json',
            }
        }
        
    if(id){
    
        try {
            const res = await axios.get(`http://127.0.0.1:8000/hotels/hotel_id/${id}/`, config);
            //console.log(res.data)
            dispatch({
                type: ActionType.LOAD_HOTEL_ID,
                payload: res.data
            });
    
            //dispatch(login(username, password))
        } catch (err) {
            console.log(err.response.data)
            
        }
    }else{
        const config = {
            headers:{
                'Content-Type': 'application/json',
            }
        }
    
        try {
            const res = await axios.get(`http://127.0.0.1:8000/hotels/hotel_rooms/`, config);
            //console.log(res.data)
            dispatch({
                type: ActionType.LOAD_HOTEL_ID,
                payload: res.data
            });
    
            //dispatch(login(username, password))
        } catch (err) {
            console.log(err.response.data)
            
        }
    }
    
    
}