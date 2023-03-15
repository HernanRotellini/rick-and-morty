import {React} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import "./favorites.modules.css"
import { useEffect } from 'react';
import { orderCards,filterCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function Favoritos(props){
  const dispatch = useDispatch()
//   useEffect(()=>{
//     return (
//       dispatch(orderCards('Ascendente')),
//       ()=>{ dispatch(filterCards('none'))
//     dispatch(orderCards('Ascendente'));
//     })   
// })
    return (
        <div>
          <Link to="/home">
            <button className="volver">Volver</button>
          </Link>
          <div className="cartas">
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