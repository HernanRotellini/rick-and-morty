import './detail.modules.css'
import { useParams,useNavigate} from "react-router-dom";

import React from "react"
function Detail(){
const [char, setChar] = React.useState({})
const {detailId}=useParams();

const navigate = useNavigate();

const volver = ()=>{
    navigate("/home")
}
React.useEffect(() => {
    fetch(`https://be-a-rym.up.railway.app/api/character/${detailId}?key=3681102e3393.a2e00517a5401fef1d76`)
      .then((response) => response.json())
      .then((char) => {
        if (char.id) {
          setChar(char);
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
  <div className='fondo'>
    <button onClick={volver}>Volver</button>
<div className="detalle">
  

<br /><br />
<img className='nohover' src={char.image} alt="" />
<div className='datos'>
 

<h2>Nombre: {char.name}</h2>
 
<h2>Especie: {char.species}</h2>
<h2>Genero: {char.gender}</h2>
<h2>Estado: {char.status}</h2>
{char.origin && <h2>Origen: {char.origin.name}</h2>}
{char.episode && <h2>Cantidad de episodios: {char.episode.length}</h2>}

</div>
</div>
</div>
)
}

export default Detail