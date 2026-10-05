/** Primeiro item focável da página: permite pular a navegação com o teclado. */
export function SkipLink() {
  return (
    <a
      href="#conteudo"
      className="bg-lime text-ink sr-only rounded-full font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:px-5 focus:py-3"
    >
      Pular para o conteúdo
    </a>
  )
}
