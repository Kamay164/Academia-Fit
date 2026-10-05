/**
 * Fotos otimizadas (Etapa 3). Arquivos em src/assets/images, gerados em várias larguras (WebP).
 * Todas do Unsplash (Unsplash License). Créditos completos: docs/creditos-imagens.md
 *
 * Como usar num componente:
 *   <img src={p.src} srcSet={p.srcSet} sizes="..." width={p.width} height={p.height} alt={p.alt} />
 * `width`/`height` evitam salto de layout; `sizes` depende do layout e é definido em cada componente.
 */

const urls = import.meta.glob<string>('../assets/images/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

export interface PhotoCredit {
  author: string
  url: string
}

export interface Photo {
  alt: string
  /** Maior versão — fallback do <img>. */
  src: string
  srcSet: string
  /** Dimensões da maior versão. */
  width: number
  height: number
  credit: PhotoCredit
}

const unsplash = (author: string, id: string): PhotoCredit => ({
  author,
  url: `https://unsplash.com/photos/${id}`,
})

function photo(
  name: string,
  widths: number[],
  ratio: [number, number],
  alt: string,
  credit: PhotoCredit,
): Photo {
  const urlOf = (w: number) => {
    const url = urls[`../assets/images/${name}-${w}.webp`]
    if (!url) throw new Error(`Imagem ausente: src/assets/images/${name}-${w}.webp`)
    return url
  }
  const largest = widths[widths.length - 1]
  // `src` é só o plano B de navegadores sem srcset: uma versão média, não a maior.
  const fallback = widths.length > 2 ? widths[1] : largest
  return {
    alt,
    src: urlOf(fallback),
    srcSet: widths.map((w) => `${urlOf(w)} ${w}w`).join(', '),
    width: largest,
    height: Math.round((largest * ratio[1]) / ratio[0]),
    credit,
  }
}

export const heroPhoto = photo(
  'hero',
  [768, 1280, 1920],
  [3, 2],
  'Turma de aula em grupo erguendo elásticos acima da cabeça, em sincronia, num estúdio com luz azulada',
  unsplash('Geert Pieters', '3RnkZpDqsEI'),
)

/**
 * Galeria da comunidade — 5 fotos por enquanto.
 * Falta a "comunidade-6" (três amigas na selfie, Mina Rad, CjYhWeAXB4c): ao baixar, salve em
 * imagens-originais/ e peça a otimização, ou adicione aqui com photo('comunidade-6', ...).
 */
export const communityPhotos: Photo[] = [
  photo(
    'comunidade-1',
    [600, 1000],
    [3, 4],
    'Três mulheres sorrindo e batendo as mãos no alto, comemorando juntas depois do treino',
    unsplash('Ashford Marx', 'LIs-2xpMOHA'),
  ),
  photo(
    'comunidade-2',
    [600, 1000],
    [4, 3],
    'Dois homens sentados no chão da academia encostando os punhos num cumprimento, com uma barra entre eles',
    unsplash('Victor Freitas', 'nlZTjUZX2qo'),
  ),
  photo(
    'comunidade-3',
    [600, 1000],
    [4, 3],
    'Duas mulheres sorrindo uma para a outra enquanto seguram a prancha, frente a frente',
    unsplash('Mina Rad', 'bJvDVW26_5Q'),
  ),
  photo(
    'comunidade-4',
    [600, 1000],
    [4, 3],
    'Duas amigas descansando no tatame depois do treino, sorrindo uma para a outra',
    unsplash('Mina Rad', '15m-orMYuuA'),
  ),
  photo(
    'comunidade-5',
    [600, 1000],
    [3, 4],
    'Mulher sorrindo e estendendo o punho para a câmera num soquinho de incentivo',
    unsplash('Mina Rad', 'prbmux92JTU'),
  ),
]

/** Chaves iguais aos `id` de `modalities.items` em modalities.ts. */
export const modalityPhotos: Record<'musculacao' | 'funcional' | 'coletivas' | 'lutas', Photo> = {
  musculacao: photo(
    'modalidade-musculacao',
    [480, 800],
    [4, 5],
    'Atleta com a barra apoiada nas costas durante um agachamento, com outras pessoas treinando ao lado, em preto e branco',
    unsplash('Sven Mieke', 'Lx_GDv7VA9M'),
  ),
  funcional: photo(
    'modalidade-funcional',
    [480, 800],
    [4, 5],
    'Mulher em pleno salto sobre uma caixa de madeira durante um treino funcional',
    unsplash('Meghan Holmes', 'wy_L8W0zcpI'),
  ),
  coletivas: photo(
    'modalidade-coletivas',
    [480, 800],
    [4, 5],
    'Mulheres pedalando lado a lado em bikes indoor durante uma aula coletiva',
    unsplash('Trust "Tru" Katsande', 'A_ftsTh53lM'),
  ),
  lutas: photo(
    'modalidade-lutas',
    [480, 800],
    [4, 5],
    'Dupla de boxeadores treinando no ringue, um deles em pleno soco, em preto e branco',
    unsplash('Eser GOAT', 'wdvQK4lL1u0'),
  ),
}

/**
 * Estrutura — 3 fotos. Falta a do ringue/área de lutas: a candidata do Unsplash tinha a marca
 * "Temple" em toda parte e foi descartada. Ao baixar outra, adicione aqui como "estrutura-4".
 */
export const facilityPhotos: Photo[] = [
  photo(
    'estrutura-1',
    [640, 1100],
    [16, 10],
    'Sala de treino com piso de madeira, esteira, bicicleta ergométrica e janelões com vista da cidade',
    unsplash('Aalo Lens', 'fuyulf8cNmg'),
  ),
  photo(
    'estrutura-2',
    [640, 1100],
    [16, 10],
    'Amplo salão de musculação com racks, anilhas coloridas e linhas de luz no teto',
    unsplash('Jinish Shah', 'GNWUPn44-eg'),
  ),
  photo(
    'estrutura-3',
    [640, 1100],
    [16, 10],
    'Área de musculação com racks e bancos, onde três pessoas treinam com barras',
    unsplash('Kobe Kian Clata', 'bYe3FbB4ReY'),
  ),
]
