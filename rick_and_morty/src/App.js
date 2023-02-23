import React, { useState } from 'react';
import { Routes , Route} from "react-router-dom"
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import Detail from './components/Detail';



const URL = "https://be-a-rym.up.railway.app/api"
const APIKEY= "3681102e3393.a2e00517a5401fef1d76"
function App() {
  const [characters, setCharacters] = useState([]);
 
  //https://be-a-rym.up.railway.app/api/character/162?key=3681102e3393.a2e00517a5401fef1d76
  const onClose = (id) => {
    setCharacters(characters.filter((c) => c.id !== id));
  }

  function onSearch(character) {
    fetch(`${URL}/character/${character.id}?key=${APIKEY}`)
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
   <div class="App">
    <Nav onSearch={onSearch}/>
    <Routes>
    <Route exact path="/about" element={<About/>} />
    <Route class="grid" exact path="/home" element={<Cards characters={characters} onClose={onClose} />}>
      
      </Route>
      <Route path="/detail/:detailId" element={<Detail/>} />

      </Routes>
    
      
    </div>
  );
}

export default App
