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

return (<div>
    <button onClick={volver}>Volver</button>
    <h2>{char.name}</h2>
 
 <h2>{char.species}</h2>
 <h2>{char.gender}</h2>
 <h2>{char.status}</h2>
 {char.origin && <h2>{char.origin.name}</h2>}
 <img src={char.image} alt="" /> 
</div>)

}
export default Detail