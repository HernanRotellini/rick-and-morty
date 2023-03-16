import {React} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import "./favorites.modules.css"
import { useEffect } from 'react';
import { orderCards,filterCards, getAllFavorites } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function Favoritos(props){
  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(getAllFavorites());
    }, [dispatch]);

const handleOrderChange = (e) => {
  dispatch(orderCards(e.target.value));
};

// handle filtering change
const handleFilterChange = (e) => {
  if(e.target.value !== "none"){
  dispatch(filterCards(e.target.value));}
  else{
    dispatch(getAllFavorites())
  }
};
    return (
        <div>
          <Link to="/home">
            <button className="volver">Volver</button>
          </Link>
          <div className="cartas">
          <div>
        <label htmlFor="order">Ordenar por:</label>
        <select name="order" id="order" onChange={handleOrderChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
      <div>
        <label htmlFor="filter">Filtrar por:</label>
        <select name="filter" id="filter" onChange={handleFilterChange}>
          <option value="none">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>
            {props.myFavorites.map((favorito) => {
              return (
                <div key={favorito.id} className={props.darkMode ? 'favsdark' : 'favslight' }>
                  <Link className={props.darkMode ? 'linkdark' : 'linklight' } to={`/detail/${favorito.id}`}>
                    <h2>{favorito.name}</h2>
                  </Link>
                  <h2>{favorito.species}</h2>
                  <h2>{favorito.gender}</h2>
                  <div className="image">
                    <img src={favorito.image} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
}


const mapStateToProps = (state)=>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favoritos);