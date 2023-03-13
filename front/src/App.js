import React, { useState } from 'react';
import { Routes , Route} from "react-router-dom"
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favoritos from './components/Favorites';

const URL = "https://be-a-rym.up.railway.app/api"
const APIKEY= "3681102e3393.a2e00517a5401fef1d76"
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess]= useState(false);

  const username = 'Admin@Admin.com';
const password = 'Admin123';
  //https://be-a-rym.up.railway.app/api/character/162?key=3681102e3393.a2e00517a5401fef1d76
  const onClose = (id) => {
    setCharacters(characters.filter((c) => c.id !== id));
  }
 
  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

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

 if (location.pathname === '/') {
 return (
 <div className="App form">
  <h1>Bienvenido al Mundo de Rick & Morty</h1>
  <Form login={login}/>
  
 </div>)
}
  return (
   <div className="App">
    <Nav  onSearch={onSearch}/>
   
  <Routes>

<Route exact path="/about" element={<About/>} />
<Route className="carta" path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
<Route className="detail" path="/detail/:detailId" element={<Detail/>} />
<Route path='/favorites' element={<Favoritos />}/>
 </Routes>
    
      
    </div>
  );
}

export default App
