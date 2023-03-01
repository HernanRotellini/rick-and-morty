import {React} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
function Favoritos(props){
return(
    <div>
        <Link to="/home">
        <button>Volver</button></Link>
        {props.myFavorites.map((favorito)=>{
            return(
            <div>
                <Link to={`/detail/${favorito.id}`}>
         <h2>{favorito.name}</h2>
         </Link>
      <h2>{favorito.species}</h2>
      <h2>{favorito.gender}</h2>
      <div className="image">
        <img src={favorito.image} alt="" />
      </div>
      
</div>)
        })
        
}
    </div>
)
}


const mapStateToProps = (state)=>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favoritos);