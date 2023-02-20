import s from "./card.module.css"
export default function Card(props) {
   return (
      <div>
          <button className={s.xbutton} onClick={props.onClose}>X
          <span>Al hacer click aqui eliminara el personaje</span>
          </button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="" /> 
      </div>
   );
}
