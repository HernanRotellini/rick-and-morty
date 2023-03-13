import { DELETE_FAVORITE, ADD_FAVORITE } from "./actionstype";

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
          const data = await response.json();
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
      const response = await fetch("http://localhost:3001/rickandmorty/fav", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(character),
      });
      const data = await response.json();
      dispatch({ type: ADD_FAVORITE, payload: character });
    } catch (error) {
      console.error(error);
    }
  };
};




