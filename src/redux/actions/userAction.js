import { SET_CURRENT_USER,CLEAR_USER } from "./actionsType";

export const setCurrentUser=(user)=>{
    return(
        {
            type:SET_CURRENT_USER,
            payload:user
        }
    )
}
export const clearUser=()=>{
    return(
        {
            type:CLEAR_USER,
        }
    )
}