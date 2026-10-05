import { useReveal } from './hooks/useReveal'
import { Footer, Navbar, SkipLink } from './components/layout'
import {
  Comunidade,
  Contato,
  CtaFinal,
  Depoimentos,
  Estrutura,
  Faq,
  Hero,
  Manifesto,
  Modalidades,
  Planos,
} from './sections'

function App() {
  useReveal()

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Manifesto />
        <Comunidade />
        <Modalidades />
        <Estrutura />
        <Depoimentos />
        <Planos />
        <Faq />
        <CtaFinal />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App
