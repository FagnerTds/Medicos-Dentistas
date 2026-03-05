import s from "./Footer.module.scss";
import coracao from "../../assets/icones/site.png";


export default function Footer() {
  return (
    <footer>
      <div className={s.logo}>
        <img src={coracao} alt="imagem de um coraçao" />
        <h2>Médicos & Dentistas</h2>
      </div>
    </footer>
  );
}
