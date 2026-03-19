import { Analytics } from '@vercel/analytics/react'

const services = [
  'Tecnologia',
  'Pesquisas AD Hoc',
  'Criação',
  'Mídia',
  'Atendimento',
  'Web',
]

const capabilities = [
  {
    title: 'Novos Negócios',
    text: 'Capacidade de identificar oportunidades de mercado, estruturar propostas de alto valor, conduzir negociações e abrir novas frentes de crescimento para marcas e parceiros.',
  },
  {
    title: 'Atendimento Estratégico',
    text: 'Leitura profunda de briefing, relacionamento próximo com o cliente, alinhamento entre expectativa e entrega e acompanhamento contínuo da performance das ações.',
  },
  {
    title: 'Operações',
    text: 'Organização de processos, integração entre áreas, cumprimento rigoroso de prazos e gestão operacional orientada à consistência e escalabilidade das entregas.',
  },
  {
    title: 'Mídia & Performance',
    text: 'Planejamento estratégico de mídia, análise de investimento, leitura de dados e otimização contínua para ampliar eficiência, alcance e resultado.',
  },
]

const researchTools = [
  'Ibope Easy Media: audiência de rádio',
  'Ibope TGI: avaliação e consumo do target',
  'Ibope Monitor: investimento do mercado mês a mês',
  'Acesso a softwares de pesquisa por meio de parcerias estratégicas',
]

const partnerPillars = [
  {
    title: 'Intelligence',
    text: 'Lógica, tendências, atenção, retenção, linguagem, emoções, comunicação e resolução de problemas como base para decisões mais eficazes.',
  },
  {
    title: 'Consumer',
    text: 'Reação sensorial, testes neuropsicológicos, observação de comportamento, focus groups emocionais e análise do consumidor em profundidade.',
  },
  {
    title: 'Neuroscience',
    text: 'Uso de métricas neurofisiológicas como EEG, ECG, Eye Tracking, EMG e outras leituras para sustentar hipóteses e validar estratégias.',
  },
]

const logos = [
  'Casas Bahia',
  'SKY',
  'NET',
  'Ponto Frio',
  'Embratel',
  'Chevrolet',
  'Anhanguera',
  'Claro TV',
  'Oi',
  'Drummond',
  'Carrera',
  'CTT',
  'ExxonMobil',
  'Danone',
  'Delta',
  'Fogás',
  'Bemol',
  'Momentum',
]

function App() {
  return (
    <div>
      <Analytics />
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#inicio">BOIZE</a>
          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#pesquisas">Pesquisas</a>
            <a href="#equipe">Capacidades</a>
            <a href="#parcerias">Parcerias</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">Agência de Publicidade e Propaganda</span>
              <h1>Estratégia, mídia, criação e inteligência para campanhas mais efetivas.</h1>
              <p className="hero-text">
                A Boize surgiu para preencher uma lacuna de eficiência e isenção na compra de mídia e na criação,
                atuando em todo o território brasileiro com foco em resultado para o cliente.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contato">Falar com a Boize</a>
                <a className="btn btn-secondary" href="#servicos">Conhecer serviços</a>
              </div>
            </div>
            <div className="hero-cards">
              <article className="info-card accent">
                <p className="card-kicker">Posicionamento</p>
                <h3>Eficiência com isenção</h3>
                <p>Planejamento, compra de mídia e criação com visão estratégica e foco em performance.</p>
              </article>
              <article className="info-card">
                <p className="card-kicker">Atuação</p>
                <h3>Brasil inteiro</h3>
                <p>Estrutura integrada para atender marcas em diferentes mercados, praças e necessidades.</p>
              </article>
              <article className="info-card">
                <p className="card-kicker">Base estratégica</p>
                <h3>Pesquisa e inteligência</h3>
                <p>Leitura de target, comportamento e investimento de mídia para decisões mais assertivas.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="container split">
            <div>
              <span className="section-tag">Sobre</span>
              <h2>Uma agência construída para conectar estratégia, mídia e resultado.</h2>
            </div>
            <div className="surface large-text">
              A Boize Comunicação se apresenta como uma agência voltada a preencher uma lacuna de eficiência e isenção
              na compra de mídia e na criação, com atuação nacional e compromisso com resultados efetivos para seus clientes.
            </div>
          </div>
        </section>

        <section className="section section-alt" id="servicos">
          <div className="container">
            <span className="section-tag">Serviços</span>
            <h2>Estrutura completa para comunicação, planejamento e execução.</h2>
            <div className="grid services-grid">
              {services.map((service) => (
                <article className="surface service-card" key={service}>
                  <h3>{service}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="pesquisas">
          <div className="container split research-split">
            <div>
              <span className="section-tag">Pesquisas</span>
              <h2>Propostas mais assertivas com base em dados, target e consumo.</h2>
              <p>
                A apresentação destaca o uso de ferramentas como Ibope Easy Media, Ibope TGI e Ibope Monitor,
                além de parcerias que ampliam o acesso a softwares de pesquisa para recomendação e análise.
              </p>
            </div>
            <div className="stack">
              {researchTools.map((item) => (
                <article className="surface" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="equipe">
          <div className="container">
            <span className="section-tag">Capacidades</span>
            <h2>Frentes complementares que sustentam o trabalho da agência.</h2>
            <div className="grid capabilities-grid">
              {capabilities.map((item) => (
                <article className="surface capability-card" key={item.title}>
                  <div className="icon-badge">{item.title.split(' ').map((word) => word[0]).slice(0, 2).join('')}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="parcerias">
          <div className="container">
            <span className="section-tag">Parcerias</span>
            <h2>Neurociência aplicada ao consumo como base estratégica.</h2>
            <div className="partner-intro surface">
              <p>
                A apresentação destaca a parceria com a ICN Agency, defendendo o uso de investigação científica,
                comportamento do consumidor e métricas neurofisiológicas para reduzir risco de investimento e aumentar
                a eficácia de campanhas, produtos, embalagens e experiências.
              </p>
            </div>
            <div className="grid partner-grid">
              {partnerPillars.map((pillar) => (
                <article className="surface partner-card" key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="marcas">
          <div className="container">
            <span className="section-tag">Marcas</span>
            <h2>Empresas e grupos exibidos na apresentação institucional.</h2>
            <div className="grid logo-grid">
              {logos.map((logo) => (
                <article className="surface logo-card" key={logo}>
                  <span>{logo}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section" id="contato">
          <div className="container">
            <div className="cta-box">
              <span className="section-tag dark">Contato</span>
              <h2>Vamos construir uma campanha com mais inteligência e resultado?</h2>
              <p>
                Este projeto está pronto para publicação no Vercel e pode ser adaptado depois com formulário,
                WhatsApp, cases, portfólio e domínio próprio.
              </p>
              <div className="hero-actions center-on-mobile">
                <a className="btn btn-dark" href="mailto:contato@boize.com.br">contato@boize.com.br</a>
                <a className="btn btn-outline-dark" href="#inicio">Voltar ao topo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
