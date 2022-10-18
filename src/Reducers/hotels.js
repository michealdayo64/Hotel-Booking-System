import { ActionType } from "../Actions/types"

const initialState = {
    hotel_list: [],
    hotel_id: null
}

export default function hotels(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case ActionType.LOAD_HOTELS:
            return{
                ...state,
                //hotels_with_rooms: [...hotels_with_rooms, payload.msg]
                hotel_list: payload.msg
            }
        case ActionType.LOAD_HOTEL_ID:
            return{
                ...state,
                hotel_id: payload.msg
            }
        default:
            return state
    }
}