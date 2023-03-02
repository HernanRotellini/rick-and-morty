import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function SearchBar(props) {
   const [character, setCharacter] = useState('')
   const onchange = ((event)=>{
   setCharacter(event.target.value)
   
})

   return (
      
      <div>
         <input type='search' onChange={onchange} />
         <button onClick={() => props.onSearch({ id: character })}>Agregar</button>
         <br />
         <br />
         <Link to="/home">
            <button>Home</button></Link><span>     </span> <span>   </span>
            <Link to="/about">
            <button>About</button></Link><span>  </span> <span>  </span>
            <Link to="/favorites">
            <button>Favoritos</button></Link>
      </div>
     
   );
}
