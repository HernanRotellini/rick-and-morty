import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER,GET_ALL_FAVS } from "./actionstype";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload]
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== payload),
        allCharacters: state.allCharacters.filter((char) => char.id !== payload)
      };

    case FILTER:
      const allCharsFiltered = state.allCharacters.filter(char => char.gender === payload);
      return {
        ...state,
        myFavorites: [...allCharsFiltered]
      }

    case ORDER:
      return {
        ...state,
        myFavorites: 
        payload === 'Ascendente'
        ? [...state.myFavorites].sort((a, b) => a.id - b.id)
        : [...state.myFavorites].sort((a, b) => b.id - a.id)
      }
      case GET_ALL_FAVS: 
      return{
        ...state,
        myFavorites: [...state.allCharacters]
      }


    default:
      return { ...state };
  }
};

export default reducer;