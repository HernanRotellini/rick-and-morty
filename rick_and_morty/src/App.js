import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';

function App() {
  const [characters, setCharacters] = useState([]);

  
  const onClose = (id) => {
    setCharacters(characters.filter((c) => c.id !== id));
  }
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character.id}`)
       .then((response) => response.json())
       .then((data) => {
        if (data.id) {
          const Existe = characters.find((c) => c.id === data.id);
          if (Existe) {
            window.alert('El personaje ya existe');
          } else {
            setCharacters((chars) => [...chars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
       });
 }
  return (
    
    <div className='App' style={{ padding: '25px'}}>
         <div>
      
        <Nav onSearch={onSearch}/>
        </div>
      <hr />
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
      <hr />
   
    </div>
  )
}

export default App
