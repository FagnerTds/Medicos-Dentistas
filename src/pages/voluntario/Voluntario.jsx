import s from "./Voluntario.module.scss"

export default function Voluntario() {
  return (
    <main className={s.voluntario}>

      {/* HERO */}

      <section className={s.hero}>

        <h1>Seja Voluntário</h1>

        <p>
          Junte-se a nós e faça a diferença na vida de pessoas que precisam
        </p>

        <div className={s.cards}>

          <div className={s.card}>
            <h3>Impacto Direto</h3>
            <p>
              Sua dedicação salva vidas e transforma comunidades
            </p>
          </div>

          <div className={s.card}>
            <h3>Crescimento Pessoal</h3>
            <p>
              Desenvolva habilidades e cresça profissionalmente
            </p>
          </div>

          <div className={s.card}>
            <h3>Comunidade</h3>
            <p>
              Faça parte de uma rede de profissionais comprometidos
            </p>
          </div>

        </div>

      </section>

      {/* FORM */}

      <section className={s.formSection}>

        <div className={s.formContainer}>

          <h2>Inscrição para Voluntários</h2>

          <form className={s.form}>

            <span>Dados Pessoais</span>

            <div className={s.row}>
              <input
                type="text"
                placeholder="Seu Nome *"
              />

              <input
                type="email"
                placeholder="Seu Email *"
              />
            </div>

            <input
              type="tel"
              placeholder="Seu Telefone *"
            />

            <span>Mensagem Adicional</span>

            <textarea
              placeholder="Conte-nos porque você quer ser voluntário..."
            />

            <p className={s.info}>
              Entraremos em contato para mais informações
            </p>

            <button type="submit">
              Enviar Inscrição
            </button>

          </form>

        </div>

      </section>

    </main>
  )
}
