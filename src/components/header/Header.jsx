import s from "./Header.module.scss"
import coracao from "../../assets/icones/site.png"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <div className={s.logo}>
      <img src={coracao} alt="imagem de um coraçao" />
      <h2>Médicos & Dentistas</h2>
      </div>
      <div className={s.botoes}>
        <Link className={s.linkHome} to="/">Home</Link>
        <Link className={s.linkvoluntario} to="voluntario">Seja Voluntário</Link>        
      </div>
    </nav>
  )
}
