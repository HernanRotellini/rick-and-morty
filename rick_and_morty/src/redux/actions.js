import { DELETE_FAVORITE, ADD_FAVORITE} from "./actionstype";

export const deleteFavorite = (id)=>{
    return{
        type: DELETE_FAVORITE,
        payload: id,
        
    }
}
export const addFavorite = (character)=>{
    return{
        type: ADD_FAVORITE,
        payload: character
        
    }
}