import s from "./Home.module.scss"
import medico from "../../assets/imagens/medicovoluntario 1.png"
import steto from "../../assets/icones/steto.png"

export default function Home() {
  return (
    <main className={s.home}>

      {/* HERO */}

      <section className={s.hero}>

        <div className={s.heroText}>

          <div className={s.tag}>
            <img src={steto} alt="" />
            <p>Saúde para todos</p>
          </div>

          <h1>
            Saúde e cuidado <br />
            sem barreiras
          </h1>

          <p>
            Um projeto dedicado a oferecer atendimento médico e
            odontológico gratuito para pessoas que mais precisam
            na nossa comunidade.
          </p>

          <div className={s.buttons}>
            <button className={s.primary}>
              Seja Voluntário
            </button>

            <button className={s.secondary}>
              Como Ajudar
            </button>
          </div>

        </div>

        <div className={s.heroImage}>
          <img src={medico} alt="doctor" />
        </div>

      </section>

      {/* MISSÃO */}

      <section className={s.mission}>

        <h2>Nossa Missão</h2>

        <p className={s.subtitle}>
          Transformar vidas através do acesso universal a saúde de qualidade
        </p>

        <div className={s.cards}>

          <div className={s.card}>
            <h3>Acesso Equitativo</h3>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </div>

          <div className={s.card}>
            <h3>Comunidade Forte</h3>
            <p>
              Construir uma rede de profissionais de saúde dedicados a servir
              com compaixão e profissionalismo.
            </p>
          </div>

          <div className={s.card}>
            <h3>Bem-estar Total</h3>
            <p>
              Oferecer atendimento integral em medicina geral e odontologia
              para melhorar a qualidade de vida.
            </p>
          </div>

        </div>

      </section>

      {/* IMPACTO */}

      <section className={s.impact}>

        <h2>Nosso Impacto</h2>

        <p className={s.subtitle}>
          Transformando a saúde de nossa comunidade, um paciente de cada vez
        </p>

        <div className={s.stats}>

          <div className={s.stat}>
            <h3>2,500+</h3>
            <p>Pessoas Atendidas</p>
          </div>

          <div className={s.stat}>
            <h3>150+</h3>
            <p>Profissionais Voluntários</p>
          </div>

          <div className={s.stat}>
            <h3>98%</h3>
            <p>Satisfação dos Pacientes</p>
          </div>

          <div className={s.stat}>
            <h3>5+</h3>
            <p>Anos de Dedicação</p>
          </div>

        </div>

      </section>

    </main>
  )
}
