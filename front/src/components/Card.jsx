import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFavorite, addFavorite } from "../redux/actions";
import { useEffect } from "react";

function Card(props) {
  const handleClick = () => {
    props.onClose(props.id);
  };

  const [isFav, setFav] = React.useState(false);

  useEffect(() => {
    // Cargar favoritos desde el almacenamiento local
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];

    // Verificar si este personaje está en la lista de favoritos
    const found = storedFavs.some((fav) => fav.id === props.id);

    setFav(found);
  }, [props.id]);

  const handleFavorite = () => {
    if (isFav) {
      // Eliminar de favoritos
      props.deleteFavorite(props.id);

      // Actualizar la lista de favoritos en el almacenamiento local
      const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedFavs = storedFavs.filter((fav) => fav.id !== props.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));

      setFav(false);
    } else {
      // Agregar a favoritos
      props.addFavorite(props);

      // Actualizar la lista de favoritos en el almacenamiento local
      const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedFavs = [...storedFavs, props];
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));

      setFav(true);
    }
  };
   return (
      
      <div >
         <div >
         {isFav ? (
         <button  onClick={handleFavorite}>{props.darkMode ? '❤️' : '💜'}</button>
      ) : (
         <button onClick={handleFavorite}>🤍</button>
      )}
      </div>
      
         <button className="xbutton" onClick={handleClick}>X</button>
      
      <Link to={`/detail/${props.id}`}>
         <h2 className={props.darkMode ? 'dark' : 'light' }>{props.name}</h2>
         </Link>
      <h2 className={props.darkMode ? 'dark' : 'light' }>{props.species}</h2>
      <h2 className={props.darkMode ? 'dark' : 'light' }>{props.gender}</h2>
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      
    </div>
   );
}
const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch)=>{
   return{
      deleteFavorite: (id)=>{dispatch(deleteFavorite(id))},
      addFavorite: (character)=>{dispatch(addFavorite(character))}
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card)