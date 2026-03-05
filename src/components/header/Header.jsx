import s from "./Header.module.scss";
import coracao from "../../assets/icones/site.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header>
      <div className={s.logo}>
        <img src={coracao} alt="imagem de um coraçao" />
        <h2>Médicos & Dentistas</h2>
      </div>
      <nav className={s.botoes}>
        <Link className={s.linkHome} to="/">
          Home
        </Link>
        <Link className={s.linkvoluntario} to="voluntario">
          Seja Voluntário
        </Link>
      </nav>

      <button
        className={s.hamburger}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        ☰
      </button>

      {menuAberto && (
        <nav className={s.menuMobile}>
          <Link
            className={s.linkHomeM}
            to="/"
            onClick={() => setMenuAberto(false)}
          >
            Home
          </Link>
          <Link
            className={s.linkvoluntarioM}
            to="voluntario"
            onClick={() => setMenuAberto(false)}
          >
            Seja Voluntário
          </Link>
        </nav>
      )}
    </header>
  );
}
