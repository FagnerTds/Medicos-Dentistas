import s from "./Header.module.scss";
import coracao from "../../assets/icones/site.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Fecha o menu se a tela ficar maior que 768px
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className={s.logo}>
        <img src={coracao} alt="imagem de um coração" />
        <h2>Médicos & Dentistas</h2>
      </div>

      <nav className={s.botoes}>
        <Link className={s.linkHome} to="/">
          Home
        </Link>

        <Link className={s.linkvoluntario} to="/voluntario">
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
            to="/voluntario"
            onClick={() => setMenuAberto(false)}
          >
            Seja Voluntário
          </Link>
        </nav>
      )}
    </header>
  );
}