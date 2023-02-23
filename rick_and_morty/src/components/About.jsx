 import s from '../components/about.modules.css'

 function About() {
    return (
        <div className={s}>
            <h1>Creador: Hernan Rotellini</h1>
            <p>Este proyecto sobre Rick and Morty fue creado utilizando Javascript Node.js React y Redux
                el mismo realiza llamadas a un API externa en la cual se encuentran los personajes de dicha serie
            </p>
        </div>
    )
}
export default About