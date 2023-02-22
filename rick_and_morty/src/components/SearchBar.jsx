import React, { useState } from "react";
export default function SearchBar(props) {
   const [character, setCharacter] = useState('')
   const onchange = ((event)=>{
   setCharacter(event.target.value)
   
})

   return (
      
      <div>
         <input type='search' onChange={onchange} />
         <button onClick={() => props.onSearch({ id: character })}>Agregar</button>
      </div>
     
   );
}
