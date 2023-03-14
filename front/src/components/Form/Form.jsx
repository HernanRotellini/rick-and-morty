import React from "react"
import { validate } from "./validation";


function Form(props){
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ username: '', password: '' });
    const onChange = (event)=>{
        const { name, value} = event.target
        setUserData({
            ...userData,
            [name]:value
        });
    }
    function onSubmit(event) {
        event.preventDefault();
        const errors = validate(userData);
        setErrors(errors);
        handleSubmit();
      }
    function handleSubmit() {
        props.login(userData);
      }
    return (
        <form onSubmit={onSubmit} action="">
            <label htmlFor="username">Usuario:</label>
            <input type="text" onChange={onChange} value={userData.username} name="username" placeholder="Ingrese su usuario"/>
            {errors.username && <span>{errors.username}</span>}
            <label htmlFor="password">Contraseña:</label>
            <input type="password" onChange={onChange}  value={userData.password} name="password" placeholder="Ingrese su contraseña"/>
            {errors.password && <span>{errors.password}</span>}
            <button type="submit" onClick={handleSubmit} >Iniciar sesion</button>
        </form>
    )
}
export default Form