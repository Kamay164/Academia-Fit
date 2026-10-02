import { Dumbbell } from 'lucide-react'

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white text-neutral-900">
      <Dumbbell aria-hidden="true" className="size-10" strokeWidth={1.5} />
      <h1 className="text-4xl font-bold tracking-tight">Hello +Fit</h1>
      <p className="text-neutral-500">Setup concluído — Etapa 0</p>
    </main>
  )
}

export default App
