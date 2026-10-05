import { Footer, Navbar, SkipLink } from './components/layout'
import Preview from './Preview'

function App() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        {/* Etapa 5 substitui a prévia pelas seções reais */}
        <Preview />
      </main>
      <Footer />
    </>
  )
}

export default App
