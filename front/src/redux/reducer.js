import { DELETE_FAVORITE,ADD_FAVORITE } from "./actionstype";

let initialState={
    myFavorites: [],

}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((favorito)=>{return favorito.id !== action.payload})
            }
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites,action.payload]
            
            }

        default: return {
            ...state
        }
    }

}
export default reducer;