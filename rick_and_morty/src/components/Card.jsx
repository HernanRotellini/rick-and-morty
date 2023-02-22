import s from "./card.module.css"

export default function Card(props) {
   const handleClick = () => {
      props.onClose(props.id);
   };
   
   return (
      <div className={s.cartas}>
         <button className={s.xbutton} onClick={handleClick}>
            X
            <span>Cerrar la tarjeta del personaje</span>
         </button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt="" /> 
      </div>
   );
}
