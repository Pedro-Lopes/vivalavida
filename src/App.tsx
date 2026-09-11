import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Waves,
  Menu,
  X,
  Compass,
  Sun,
  Anchor,
  Check,
  MessageCircle,
} from 'lucide-react'
import { routes } from './data/routes'
import { plans } from './data/plans'
import { faqItems } from './data/faq'
import { getWhatsAppUrlWithText } from './utils/whatsapp'
import { siteConfig } from './config/site'
import './App.css'

const photos = {
  hero: `${import.meta.env.BASE_URL}images/rio.jpg`,
  boat: `${import.meta.env.BASE_URL}images/boat.jpg`,
  coast: `${import.meta.env.BASE_URL}images/coast.jpg`,
  ocean: `${import.meta.env.BASE_URL}images/ocean.jpg`,
}
const imageSet = (photo: string) =>
  `${photo.replace('.jpg', '-800.webp')} 800w, ${photo.replace('.jpg', '-1600.webp')} 1600w`
const navigation = [
  ['A experiência', '#experiencia'],
  ['Roteiros', '#roteiros'],
  ['A bordo', '#lancha'],
] as const

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [routeIndex, setRouteIndex] = useState(0)
  const [planIndex, setPlanIndex] = useState(0)
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('')
  const [contactNotice, setContactNotice] = useState(false)
  const [showMobileBooking, setShowMobileBooking] = useState(false)
  const route = routes[routeIndex]
  const plan = plans[planIndex]
  const today = new Date()
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  useEffect(() => {
    let pastHero = false
    let nearBooking = false
    let nearFooter = false
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target.id === 'inicio')
          pastHero =
            !entry.isIntersecting && entry.boundingClientRect.bottom < 0
        if (entry.target.id === 'contato') nearBooking = entry.isIntersecting
        if (entry.target.tagName === 'FOOTER') nearFooter = entry.isIntersecting
      }
      setShowMobileBooking(pastHero && !nearBooking && !nearFooter)
    })
    document
      .querySelectorAll('#inicio, #contato, .site-footer')
      .forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        if (document.activeElement?.closest('.navigation'))
          document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 701px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    window.addEventListener('keydown', close)
    return () => {
      window.removeEventListener('keydown', close)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  function contact() {
    if (/0{8,}$/.test(siteConfig.whatsappNumber)) {
      setContactNotice(true)
      return
    }
    const message = `Olá! Quero viver um dia com a Viva La Vida. Roteiro: ${route.title}. Plano: ${plan.name}. ${date ? `Data desejada: ${date.split('-').reverse().join('/')}.` : 'Gostaria de consultar as datas.'} ${guests ? `Grupo de ${guests} pessoas.` : ''} Pode me passar a disponibilidade e os valores?`
    window.open(
      getWhatsAppUrlWithText(message),
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Viva La Vida, início">
          <Waves strokeWidth={1.3} />
          <span>
            viva la vida<small>RIO DE JANEIRO · PASSEIOS DE LANCHA</small>
          </span>
        </a>
        <nav
          className={menuOpen ? 'navigation is-open' : 'navigation'}
          aria-label="Navegação principal"
          id="navigation"
        >
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#contato"
            onClick={() => setMenuOpen(false)}
          >
            Vamos embarcar <ArrowUpRight size={17} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main id="conteudo">
        <section className="hero-section" id="inicio">
          <div className="hero-heading">
            <div>
              <p className="eyebrow">
                <span className="live-dot" /> MENOS ROTINA. MAIS HORIZONTE.
              </p>
              <h1>
                O Rio fica ainda
                <br />
                mais bonito <em>do mar.</em>
              </h1>
            </div>
            <div className="hero-intro">
              <p>
                Um dia de sol, a sua melhor companhia
                <br className="desktop-break" /> e uma cidade inteira para
                redescobrir.
              </p>
              <a className="text-link" href="#roteiros">
                Encontre o seu passeio <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src={photos.hero}
              srcSet={imageSet(photos.hero)}
              sizes="(max-width: 700px) 92vw, 94vw"
              alt="Pão de Açúcar e Baía de Guanabara banhados pela luz do sol"
              fetchPriority="high"
            />
            <div className="hero-photo-shade" />
            <span className="photo-location">
              <span /> RIO DE JANEIRO, BRASIL
            </span>
            <p className="photo-caption">
              A vida acontece.
              <br />
              <em>Vá viver.</em>
            </p>
            <a
              className="round-explore"
              href="#experiencia"
              aria-label="Explorar a experiência"
            >
              <ArrowDown size={25} />
            </a>
            <span className="photo-coordinate">22°54′ S &nbsp; 43°12′ W</span>
          </div>
          <div className="hero-strip">
            <span>PASSEIOS PRIVATIVOS</span>
            <span>RIO & NITERÓI</span>
            <Waves size={22} strokeWidth={1} />
            <span>ROTEIROS PERSONALIZADOS</span>
            <span>MEMÓRIAS QUE FICAM</span>
          </div>
        </section>
        <section className="experience section-pad" id="experiencia">
          <div className="section-marker">
            <span>01 — A EXPERIÊNCIA</span>
            <Sun size={32} strokeWidth={1} />
          </div>
          <div className="experience-copy">
            <h2>
              Tem dias que a gente
              <br />
              não quer que <em>acabem.</em>
            </h2>
            <div className="experience-bottom">
              <p>
                O vento no rosto. Um mergulho sem pressa. A música que combina
                com o momento. Na Viva La Vida, o Rio é o cenário — e as
                melhores histórias são as suas.
              </p>
              <p>
                Reúna quem faz a vida valer a pena. A gente cuida do caminho
                para você aproveitar cada pedacinho do dia.
              </p>
            </div>
          </div>
        </section>
        <section className="routes-section section-pad" id="roteiros">
          <div className="section-top">
            <div>
              <p className="eyebrow">02 — ESCOLHA O SEU HORIZONTE</p>
              <h2>
                Qual é o seu <em>Rio?</em>
              </h2>
            </div>
            <p>
              Dos cartões-postais aos cantinhos de paz.
              <br />
              Um roteiro para cada jeito de viver.
            </p>
          </div>
          <div
            className="route-tabs"
            role="tablist"
            aria-label="Roteiros de passeio"
          >
            {routes.map((item, index) => (
              <button
                key={item.id}
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={routeIndex === index}
                aria-controls="route-panel"
                tabIndex={routeIndex === index ? 0 : -1}
                onClick={() => setRouteIndex(index)}
                onKeyDown={(event) => {
                  let next = index
                  if (event.key === 'ArrowRight')
                    next = (index + 1) % routes.length
                  else if (event.key === 'ArrowLeft')
                    next = (index + routes.length - 1) % routes.length
                  else if (event.key === 'Home') next = 0
                  else if (event.key === 'End') next = routes.length - 1
                  else return
                  event.preventDefault()
                  setRouteIndex(next)
                  document.getElementById(`tab-${routes[next].id}`)?.focus()
                }}
              >
                <span>0{index + 1}</span>
                {
                  [
                    'Rio & Niterói',
                    'Saindo do Rio',
                    'Ilhas & mar aberto',
                    'Praias de Niterói',
                  ][index]
                }
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
          <div
            className="route-feature"
            id="route-panel"
            role="tabpanel"
            aria-labelledby={`tab-${route.id}`}
            tabIndex={0}
          >
            <div className="route-photo">
              <img
                key={route.id}
                src={
                  [photos.hero, photos.coast, photos.ocean, photos.coast][
                    routeIndex
                  ]
                }
                alt={route.imageAlt}
                srcSet={imageSet(
                  [photos.hero, photos.coast, photos.ocean, photos.coast][
                    routeIndex
                  ],
                )}
                sizes="(max-width: 700px) 88vw, 48vw"
                loading="lazy"
              />
              <span className="image-tag">{route.subtitle}</span>
            </div>
            <div className="route-copy">
              <Compass size={31} strokeWidth={1} />
              <div>
                <p className="eyebrow">UM NOVO PONTO DE VISTA</p>
                <h3>{route.title}</h3>
                <p>{route.description}</p>
              </div>
              <div className="route-stops">
                {route.stops.map((stop) => (
                  <span key={stop}>{stop}</span>
                ))}
              </div>
              <a href="#contato" className="text-link">
                Quero viver esse roteiro <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
          <p className="small-note">
            Cada dia no mar é único. Percursos e paradas dependem do clima, das
            condições de navegação e do pacote escolhido. Imagens ilustrativas.
          </p>
        </section>
        <section className="boat-section" id="lancha">
          <div className="boat-photo">
            <img
              src={photos.boat}
              srcSet={imageSet(photos.boat)}
              sizes="(max-width: 700px) 100vw, 50vw"
              alt="Embarcação de lazer sobre águas azuis, imagem ilustrativa"
              loading="lazy"
            />
            <span className="image-tag">
              IMAGEM ILUSTRATIVA · EMBARCAÇÃO DE REFERÊNCIA
            </span>
          </div>
          <div className="boat-copy">
            <p className="eyebrow">03 — SEU LUGAR AO SOL</p>
            <h2>
              Leve as pessoas.
              <br />
              Deixe a pressa
              <br />
              <em>em terra.</em>
            </h2>
            <p>
              Um passeio só para o seu grupo, com espaço para conversar,
              celebrar e simplesmente estar presente.
            </p>
            <div className="boat-details">
              <span>
                <Anchor size={19} /> Capitão e marinheiro
              </span>
              <span>
                <Sun size={19} /> Aproximadamente 5 horas
              </span>
              <span>
                <Waves size={19} /> Paradas para aproveitar o mar
              </span>
            </div>
            <a className="text-link" href="#contato">
              Planejar meu dia a bordo <ArrowUpRight size={20} />
            </a>
          </div>
        </section>
        <section className="plans-section section-pad" id="planos" aria-labelledby="plans-title">
          <div className="section-top">
            <div>
              <p className="eyebrow">04 — PLANOS DE PASSEIO</p>
              <h2 id="plans-title">
                Seu passeio, <em>seu plano.</em>
              </h2>
            </div>
            <p>
              Escolha o plano que combina com o seu dia.
              <br />
              Confira o que está incluído e planeje com a gente.
            </p>
          </div>
          <div className="plan-grid">
            {plans.map((item, index) => (
              <button
                key={item.id}
                className={`plan-card ${planIndex === index ? 'selected' : ''}`}
                aria-pressed={planIndex === index}
                onClick={() => setPlanIndex(index)}
              >
                <span className="plan-number">
                  0{index + 1}
                  {planIndex === index ? (
                    <Check size={20} />
                  ) : (
                    <ArrowUpRight size={20} />
                  )}
                </span>
                <h3>{item.name}</h3>
                <p>{item.tagline}</p>
                <span className="plan-action">
                  {planIndex === index
                    ? 'Plano selecionado'
                    : 'Escolher plano'}
                </span>
              </button>
            ))}
          </div>
          <div className="plan-included" aria-live="polite">
            <span>O plano {plan.name} inclui</span>
            <div>
              {plan.highlights.map((item) => (
                <span key={item}>
                  <Check size={14} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="interlude">
          <img
            src={photos.ocean}
            srcSet={imageSet(photos.ocean)}
            sizes="100vw"
            alt="Ondas suaves chegando à praia"
            loading="lazy"
          />
          <div>
            <p className="eyebrow">COLECIONE MOMENTOS, NÃO COMPROMISSOS.</p>
            <h2>
              Seu próximo dia favorito
              <br />
              <em>começa aqui.</em>
            </h2>
            <a href="#contato" className="pill light">
              Vamos combinar? <ArrowUpRight size={19} />
            </a>
          </div>
        </section>
        <section className="booking-section section-pad" id="contato">
          <div className="booking-intro">
            <p className="eyebrow">05 — VAMOS TIRAR DO PAPEL</p>
            <h2>
              Um dia no mar.
              <br />
              <em>Simples assim.</em>
            </h2>
            <ol className="steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Imagine o seu passeio</h3>
                  <p>Escolha o roteiro, a companhia e uma data.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Converse com a gente</h3>
                  <p>Acertamos valores, embarque e cada detalhe.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Agora é só viver</h3>
                  <p>Reserva confirmada? Nos vemos a bordo.</p>
                </div>
              </li>
            </ol>
          </div>
          <form
            className="booking-form"
            onSubmit={(event) => {
              event.preventDefault()
              contact()
            }}
          >
            <span className="eyebrow">SEU DIA, SEU RITMO</span>
            <h3>Vamos planejar?</h3>
            <label>
              Por onde vamos?
              <select
                value={routeIndex}
                onChange={(event) => setRouteIndex(Number(event.target.value))}
              >
                {routes.map((item, index) => (
                  <option key={item.id} value={index}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
            <div className="form-row">
              <label>
                Qual a data?
                <input
                  type="date"
                  value={date}
                  min={minDate}
                  onChange={(event) => setDate(event.target.value)}
                />
              </label>
              <label>
                Quantas pessoas?
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Seu grupo"
                  min="1"
                  step="1"
                  value={guests}
                  onChange={(event) => setGuests(event.target.value)}
                />
              </label>
            </div>
            <label>
              Seu plano de passeio
              <select
                value={planIndex}
                onChange={(event) => setPlanIndex(Number(event.target.value))}
              >
                {plans.map((item, index) => (
                  <option key={item.id} value={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
            <button className="pill" type="submit">
              Conversar pelo WhatsApp <MessageCircle size={18} />
            </button>
            <p className="form-note">
              Sem compromisso. Disponibilidade, capacidade e valores confirmados
              com a nossa equipe.
            </p>
            {contactNotice && (
              <p role="status" className="contact-notice">
                Nosso canal de reservas está sendo preparado. Em breve você
                poderá combinar seu passeio por aqui.
              </p>
            )}
          </form>
        </section>
        <section className="faq-section section-pad">
          <div>
            <p className="eyebrow">ANTES DE EMBARCAR</p>
            <h2>
              Tudo <em>às claras.</em>
            </h2>
          </div>
          <div className="faq-list">
            {faqItems
              .filter((item) =>
                [
                  'duracao',
                  'alimentos',
                  'clima',
                  'embarque',
                  'reserva',
                ].includes(item.id),
              )
              .map((item) => (
                <details key={item.id}>
                  <summary>
                    {item.question}
                    <span className="faq-plus">+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
          </div>
        </section>
      </main>
      {showMobileBooking && !menuOpen && (
        <div className="mobile-booking">
          <a className="pill" href="#contato">
            Planejar meu passeio <ArrowUpRight size={20} />
          </a>
        </div>
      )}
      <footer className="site-footer">
        <div className="footer-top">
          <a href="#inicio" className="brand">
            <Waves strokeWidth={1} />
            <span>
              viva la vida<small>O RIO. O MAR. O SEU MOMENTO.</small>
            </span>
          </a>
          <a className="text-link" href="#contato">
            A gente se encontra no mar. <ArrowUpRight size={23} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Viva La Vida</span>
          <span>Rio de Janeiro & Niterói, Brasil</span>
          <span>Fotografias ilustrativas.</span>
          <a href="#inicio">
            Voltar ao topo <ArrowRight size={14} className="up-arrow" />
          </a>
        </div>
      </footer>
    </>
  )
}

