import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER,GET_ALL_FAVS } from "./actionstype";

export const deleteFavorite = (id) => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          `http://localhost:3001/rickandmorty/fav/${id}`,
          {
            method: "delete",
          }
        );
        if (response.ok) {
         
          dispatch({ type: DELETE_FAVORITE, payload: id });
        } else {
          console.error("Error eliminando favorito");
        }
      } catch (error) {
        console.error(error);
      }
    };
  };
export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
       await fetch("http://localhost:3001/rickandmorty/fav", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(character),
      });
      
      dispatch({ type: ADD_FAVORITE, payload: character });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterCards = (gender)=>{
return {type: FILTER, payload: gender}
}
export const orderCards = (order)=>{
  return {type: ORDER, payload: order}
  }
  export const getAllFavorites = ()=>{
    return {type: GET_ALL_FAVS}
    }


