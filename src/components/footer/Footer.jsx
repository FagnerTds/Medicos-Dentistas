import s from "./Footer.module.scss";
import coracao from "../../assets/icones/site.png";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.brand}>
          <div className={s.logo}>
            <img src={coracao} alt="imagem de um coraçao" />
            <h3>Médicos & Dentistas</h3>
          </div>

          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div className={s.contact}>
          <h4>Contato</h4>

          <p>✉ contato@medico-dentista.org</p>
          <p>📞 (11) 3000-0000</p>
          <p>📍 São Paulo, Brasil</p>
        </div>

        <div className={s.social}>
          <h4>Redes Sociais</h4>

          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </div>

      <div className={s.copy}>
        © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
