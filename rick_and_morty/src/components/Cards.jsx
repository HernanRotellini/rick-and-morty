import Card from './Card';
import s from "./cards.modules.css"
export default function Cards(props) {
   
   return (
      <div className={s.fondo}>
         {props.characters.map(character =>
            <Card 
               key={character.id} 
               name={character.name} 
               species={character.species} 
               gender={character.gender} 
               image={character.image} 
               id={character.id} 
               onClose={props.onClose}
            />
         )}
      </div>
   );
}