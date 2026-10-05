import { Footer, Navbar, SkipLink } from './components/layout'
import Preview from './Preview'
import { Hero, Manifesto } from './sections'

function App() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Manifesto />
        {/* Prévia temporária: as demais seções entram na Etapa 5B */}
        <Preview />
      </main>
      <Footer />
    </>
  )
}

export default App
