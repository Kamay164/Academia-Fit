/**
 * Fotos otimizadas (Etapa 3). Arquivos em src/assets/images, gerados em várias larguras (WebP).
 * Licença Unsplash; autores e edições em docs/creditos-imagens.md (mantenha os dois em dia).
 *
 * Nos componentes, use `<PhotoImage photo={...} sizes="..." />` (src/components/ui): ele já
 * aplica srcSet, width/height (sem salto de layout) e loading="lazy". `sizes` depende do layout
 * e é definido em cada seção.
 */

import { heroImage } from './heroImage'
import type { ModalityId } from './modalities'

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
  /** Plano B para navegadores sem srcset (uma versão média). */
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
  heroImage.widths,
  [3, 2],
  'Turma de aula em grupo erguendo elásticos acima da cabeça, em sincronia, num estúdio com luz azulada',
  unsplash('Geert Pieters', '3RnkZpDqsEI'),
)

/**
 * Galeria da comunidade — 5 fotos. A ordem importa: o mosaico de Comunidade.tsx (`tiles`)
 * espera retrato, paisagem, paisagem, paisagem, retrato.
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

/** Uma foto por modalidade, pela mesma chave de `modalities.items` (modalities.ts). */
export const modalityPhotos: Record<ModalityId, Photo> = {
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
 * Estrutura — 5 fotos enviadas pelo Vinicius, em ordem: halteres (larga, no topo), plataforma de
 * levantamento, pista vermelha, máquinas e ringue. Autores das fotos 1 a 4 a confirmar.
 */
const pendingCredit: PhotoCredit = { author: 'Autor a confirmar', url: 'https://unsplash.com' }

export const facilityPhotos: Photo[] = [
  photo(
    'estrutura-1',
    [640, 1100, 1600],
    [16, 10],
    'Salão de musculação com fileiras de halteres, bancos ajustáveis e luzes no teto escuro',
    pendingCredit,
  ),
  photo(
    'estrutura-2',
    [640, 1100, 1600],
    [16, 10],
    'Plataforma de levantamento olímpico com barras, anilhas coloridas e racks junto a uma parede de madeira',
    pendingCredit,
  ),
  photo(
    'estrutura-3',
    [640, 1100, 1600],
    [16, 10],
    'Vista do alto de uma pista de grama sintética vermelha com trenó, bicicletas de ar e aparelhos de funcional',
    pendingCredit,
  ),
  photo(
    'estrutura-4',
    [640, 1100, 1600],
    [16, 10],
    'Área de máquinas com aparelhos de musculação, rack de halteres e escada metálica sob o teto industrial',
    pendingCredit,
  ),
  photo(
    'estrutura-5',
    [640, 1100, 1600],
    [16, 10],
    'Ringue de boxe com cordas vermelhas e pretas, sacos de pancada e pista de grama sintética ao fundo',
    unsplash('Victor Marques', 'l1qp7UUH8oE'),
  ),
]
