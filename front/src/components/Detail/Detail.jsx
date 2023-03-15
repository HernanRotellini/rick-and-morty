import "./detail.modules.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
function Detail() {
  const [darkMode, setDarkMode] = useState(true);
  const [char, setChar] = React.useState({});
  const { detailId } = useParams();

  const navigate = useNavigate();

  const volver = () => {
    navigate("/home");
  };
  const toggle = () => {
    setDarkMode(!darkMode)
  };
  React.useEffect(() => {
     fetch(`https://be-a-rym.up.railway.app/api/character/${detailId}?key=3681102e3393.a2e00517a5401fef1d76`)
   // fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.id) {
          return setChar(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setChar({});
  }, [detailId]);

  return (

    <div className={darkMode ? "fondodark" : "fondo"}>
       <span className="volver" ><button onClick={volver}>Volver</button></span><span className="tema" onClick={toggle}><button >Cambiar tema</button></span>
     
      
      
      
      <div className="detalle">
        
        
        <img className="nohover" src={char.image} alt="" />
        <div className={darkMode ? "datosdark" : "datos"}>
          
        {char.name ?  <h2>Nombre: {char.name}</h2>
         :  <h2>Nombre: No lo recuerda</h2>}
          
          {char.species ?  <h2>Especie: {char.species}</h2>
         :  <h2>Especie: Desconocido</h2>}
          
          {char.gender ?  <h2>Género: {char.gender}</h2>
         :  <h2>Género: Prefiere no contestar</h2>}
         
          {char.status ? <h2>Estado: {char.status}</h2>
         : <h2>Estado: Desconocido</h2>}
          
         {char.origin ? <h2>Origen: {char.origin.name}</h2>
         : <h2>Origen: Desconocido</h2>}
         {char.episode
  ? <h2>Cantidad de episodios: {char.episode.length}</h2>
  : <h2>Cantidad de episodios: 0</h2>
}
        </div>
      </div>
    </div>
  );
}

export default Detail;
