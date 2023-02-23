import s from "./card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   const handleClick = () => {
      props.onClose(props.id);
   };
   
   return (
     
      <div className={s.cartas} >
         <button className={s.xbutton} onClick={handleClick}>
            X
            <span>Cerrar la tarjeta del personaje</span>
         </button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt="" /> 
      </div>
      
   );
}
