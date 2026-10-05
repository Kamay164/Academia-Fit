# Créditos das imagens

Todas as fotos vêm do [Unsplash](https://unsplash.com) e são usadas sob a [Unsplash License](https://unsplash.com/license) (uso gratuito; atribuição não é obrigatória, mas creditamos por cortesia).

> **Status (Etapa 9):** 15 fotos otimizadas e em uso em `src/data/images.ts` (as 5 da Estrutura foram trocadas pelas enviadas pelo Vinicius). Se uma foto for trocada, atualize **esta tabela e o `images.ts`** ao mesmo tempo.

## Fotos em uso

| Uso                     | Arquivos em `src/assets/images/`   | Autor                | Foto no Unsplash                                       | Edição feita                                               |
| ----------------------- | ---------------------------------- | -------------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| Hero                    | `hero-{768,1280,1920}`             | Geert Pieters        | [3RnkZpDqsEI](https://unsplash.com/photos/3RnkZpDqsEI) | Redimensionada (3:2, sem recorte)                          |
| Comunidade 1            | `comunidade-1-{600,1000}`          | Ashford Marx         | [LIs-2xpMOHA](https://unsplash.com/photos/LIs-2xpMOHA) | Recorte 3:4                                                |
| Comunidade 2            | `comunidade-2-{600,1000}`          | Victor Freitas       | [nlZTjUZX2qo](https://unsplash.com/photos/nlZTjUZX2qo) | Recorte 4:3                                                |
| Comunidade 3            | `comunidade-3-{600,1000}`          | Mina Rad             | [bJvDVW26_5Q](https://unsplash.com/photos/bJvDVW26_5Q) | Recorte 4:3                                                |
| Comunidade 4            | `comunidade-4-{600,1000}`          | Mina Rad             | [15m-orMYuuA](https://unsplash.com/photos/15m-orMYuuA) | Recorte 4:3                                                |
| Comunidade 5            | `comunidade-5-{600,1000}`          | Mina Rad             | [prbmux92JTU](https://unsplash.com/photos/prbmux92JTU) | Recorte 3:4                                                |
| Modalidade · Musculação | `modalidade-musculacao-{480,800}`  | Sven Mieke           | [Lx_GDv7VA9M](https://unsplash.com/photos/Lx_GDv7VA9M) | Recorte 4:5                                                |
| Modalidade · Funcional  | `modalidade-funcional-{480,800}`   | Meghan Holmes        | [wy_L8W0zcpI](https://unsplash.com/photos/wy_L8W0zcpI) | Recorte 4:5                                                |
| Modalidade · Coletivas  | `modalidade-coletivas-{480,800}`   | Trust "Tru" Katsande | [A_ftsTh53lM](https://unsplash.com/photos/A_ftsTh53lM) | Recorte 4:5 (**confirmar autor/link**, veja abaixo)        |
| Modalidade · Lutas      | `modalidade-lutas-{480,800}`       | Eser GOAT            | [wdvQK4lL1u0](https://unsplash.com/photos/wdvQK4lL1u0) | Recorte 4:5 + desfoque de placas e marcas ao fundo         |
| Estrutura 1 a 4         | `estrutura-{1..4}-{640,1100,1600}` | **A confirmar**      | Enviadas pelo Vinicius (autor a informar)              | Recorte 16:10                                              |
| Estrutura 5             | `estrutura-5-{640,1100,1600}`      | Victor Marques       | [l1qp7UUH8oE](https://unsplash.com/photos/l1qp7UUH8oE) | Recorte 16:10; versão editada pelo Vinicius (ringue vazio) |

Todos os arquivos finais são WebP sem metadados (EXIF removido).

A galeria da Comunidade ficou com 5 fotos (decisão da Etapa 9): a `comunidade-6` não será mais usada.

## Pendências

- **Confirmar a foto de aulas coletivas:** o arquivo `_reserva_  bike.jpg` foi identificado como `A_ftsTh53lM` (mulheres em bikes indoor, parede de blocos cinza). Abra o link e confira se é a mesma foto; se não for, corrija o autor aqui e em `src/data/images.ts`.
- **Estrutura:** as fotos 1 a 4 também são do Unsplash; falta só o nome dos autores (links não são necessários). Marcas de equipamentos (Hammer Strength, Eleiko, Reebok, Everlast etc.) continuam visíveis; a placa "TNT BOXING" saiu na versão editada do ringue. Dá para desfocar mais, se preferir.

## Baixadas e não usadas (na pasta `imagens-originais`, fora do Git)

| Arquivo                                     | Motivo                                                                                   |
| ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `modalidade-coletivas.jpg`                  | Só mostra pernas e bikes desfocadas, sem rostos; marca visível na ventoinha da bike      |
| `estrutura-3.jpg` (ringue)                  | Logo "Temple" na bolsa, nas almofadas do ringue e no piso                                |
| `comunidade-reserva.jpg`                    | Listras da Adidas visíveis nas calças; clima de selfie no espelho                        |
| `hero.jpg`                                  | Usada como Estrutura 3 (pessoas separadas, menos "junto" para o hero)                    |
| `_reserva_.jpg`, `_reserva_  estrutura.jpg` | Reservas sem uso (cordas navais desfocadas; sala renderizada parecida com a Estrutura 1) |
