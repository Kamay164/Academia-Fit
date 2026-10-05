# +Fit — Design System

**Direção escolhida:** B · "Juntos" — moderna, calorosa e acolhedora.
**Fonte da verdade dos tokens:** `src/styles/index.css` (bloco `@theme`).
**Visualização:** página temporária `src/styleguide/StyleGuide.tsx` (exibida em `/` até a Etapa 4).

---

## 1. Conceito

A +Fit é o lugar onde ninguém treina sozinho. O visual equilibra:

- **Respiro** — muito branco, poucas cores, tipografia grande. Minimalismo de academia de alto padrão.
- **Energia** — um único destaque elétrico (lima) e títulos pesados e compactos.
- **Pertencimento** — cantos arredondados, botões em pílula, fotos de grupo coloridas, números e rostos da comunidade em evidência.

O ritmo da página alterna **seções claras** (branco / mist) com **blocos grafite** onde o lima brilha.

## 2. Logo

| Arquivo                                              | Uso                                       |
| ---------------------------------------------------- | ----------------------------------------- |
| `src/assets/brand/logo.svg`                          | Fundo claro (texto grafite)               |
| `src/assets/brand/logo-dark.svg`                     | Fundo escuro (texto branco)               |
| `src/assets/brand/symbol.svg` / `public/favicon.svg` | Símbolo isolado: favicon, avatar de redes |

- **Conceito:** o "+" é soma — cada pessoa que entra deixa o grupo mais forte. O círculo é o grupo.
- Wordmark "fit" em Bricolage Grotesque 800, convertido em curvas (não depende da fonte carregada).
- **Respiro mínimo:** metade da altura do círculo em todos os lados.
- **Tamanho mínimo:** 24px de altura (logo completo); 16px (símbolo).
- **Não fazer:** mudar as cores do círculo, separar o "+" do "fit" com outro espaçamento, aplicar sombra ou contorno, usar o logo claro sobre fundo claro.

## 3. Cores

> A paleta padrão do Tailwind está **desligada** (`--color-*: initial`). Só existem as cores abaixo.

| Token           | Hex       | Uso                                                                        | Contraste                  |
| --------------- | --------- | -------------------------------------------------------------------------- | -------------------------- |
| `ink`           | `#0E1311` | Texto principal, blocos escuros, botão primário em fundo claro             | 18.8:1 sobre branco        |
| `ink-soft`      | `#1A211E` | Cards e superfícies sobre fundo escuro                                     | branco 16.4:1              |
| `moss`          | `#56605B` | Texto secundário sobre claro                                               | 6.5:1 branco · 6.0:1 mist  |
| `stone`         | `#8A948F` | Bordas de inputs, ícones discretos                                         | 3.1:1 (componente de UI)   |
| `fog`           | `#A9B3AE` | Texto secundário sobre escuro                                              | 8.7:1 ink · 7.6:1 ink-soft |
| `line`          | `#E3E7E4` | Divisórias e bordas decorativas                                            | decorativo                 |
| `mist`          | `#F3F5F2` | Fundo alternativo de seções claras                                         | ink 17.1:1                 |
| `white`         | `#FFFFFF` | Fundo principal                                                            | —                          |
| `lime`          | `#C8F031` | **Destaque.** Fundo de CTA, palavras-chave sobre ink, foco em fundo escuro | 14.3:1 com ink             |
| `lime-strong`   | `#B5DB22` | Hover do destaque                                                          | 11.7:1 com ink             |
| `lime-deep`     | `#3F6B00` | Texto "verde" sobre claro (eyebrows, links)                                | 6.3:1 branco · 5.8:1 mist  |
| `error`         | `#C0261A` | Mensagens de erro sobre claro                                              | 5.9:1                      |
| `error-on-dark` | `#FF7A6B` | Mensagens de erro sobre escuro                                             | 7.4:1                      |

**Regras de ouro**

1. **Lima nunca é texto sobre branco/mist** (1.3:1). Sobre claro use `lime-deep`.
2. Texto sobre lima é sempre `ink`.
3. Lima é tempero: no máximo **um** elemento lima de destaque por tela (CTA ou palavra-chave), mais pequenos ícones.
4. Proporção aproximada da página: 60% branco/mist · 30% ink · 10% lima.

## 4. Tipografia

| Papel                             | Fonte                                      | Peso                                      |
| --------------------------------- | ------------------------------------------ | ----------------------------------------- |
| Títulos (`font-display`)          | Bricolage Grotesque Variable (eixo `opsz`) | 800 (h1–h2), 700 (h3)                     |
| Textos e UI (`font-sans`, padrão) | Inter Variable                             | 400 corpo · 500 UI · 600 botões e rótulos |

Fontes auto-hospedadas via Fontsource (`@fontsource-variable/*`), importadas em `src/main.tsx`.

| Token          | Tamanho (mobile → desktop) | Altura de linha | Tracking | Uso                                                        |
| -------------- | -------------------------- | --------------- | -------- | ---------------------------------------------------------- |
| `text-display` | 44px → 92px                | 0.95            | -0.035em | Headline do hero (uma por página)                          |
| `text-h1`      | 36px → 64px                | 1.0             | -0.03em  | Títulos de destaque                                        |
| `text-h2`      | 28px → 44px                | 1.05            | -0.025em | Títulos de seção                                           |
| `text-h3`      | 20px → 24px                | 1.2             | -0.015em | Títulos de cards                                           |
| `text-lead`    | 18px → 21px                | 1.55            | —        | Subtítulos e introduções                                   |
| `text-base`    | 16px                       | 1.6 (padrão)    | —        | Corpo                                                      |
| `text-sm`      | 14px                       | padrão          | —        | Legendas, metadados                                        |
| `text-eyebrow` | 12px                       | 1               | 0.14em   | Rótulo acima de títulos — sempre `uppercase font-semibold` |

- Títulos usam `text-wrap: balance`; parágrafos `text-wrap: pretty` (já no CSS base).
- Parágrafos limitados a `max-w-prose` (40rem ≈ 65 caracteres).
- Palavra-chave em destaque no título: `<span className="text-lime">` (só em fundo ink).

## 5. Espaço e layout

- Base de 4px (escala padrão do Tailwind: `p-4` = 16px etc.).
- `py-section` — espaço vertical entre seções: 80px → 144px (fluido).
- `px-gutter` — margem lateral: 16px → 32px (fluido).
- `max-w-content` — largura máxima do conteúdo: 76rem (1216px).
- Padrão de seção: `<section className="py-section"><div className="mx-auto max-w-content px-gutter">…`
- Mobile-first. Breakpoints padrão do Tailwind (`sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280).

## 6. Formas, sombras e movimento

| Token           | Valor                           | Uso                               |
| --------------- | ------------------------------- | --------------------------------- |
| `rounded-sm`    | 8px                             | Elementos pequenos                |
| `rounded-md`    | 14px                            | Inputs, tags                      |
| `rounded-lg`    | 20px                            | Cards                             |
| `rounded-xl`    | 28px                            | Fotos e blocos grandes            |
| `rounded-full`  | —                               | Botões (pílula), avatares, badges |
| `shadow-soft`   | sombra suave                    | Cards em repouso (opcional)       |
| `shadow-lift`   | sombra elevada                  | Hover de cards                    |
| `ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Transições de entrada e hover     |

- Durações: 150–200ms para cor/hover; 300–600ms para entradas.
- `prefers-reduced-motion` já zera animações no CSS base.

## 7. Componentes de UI (Etapa 4)

Todos em `src/components/ui/` (importe pelo barrel `index.ts`). Só usam tokens deste documento.

| Componente     | Para quê                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------ |
| `Container`    | `max-w-content` + `px-gutter`, centralizado                                                                  |
| `Section`      | `<section>` com `py-section` e `scroll-mt-nav`; `tone` light/mist/dark/lime; `dark` já aplica `data-surface` |
| `SectionTitle` | Eyebrow + título (`Heading` com destaque) + descrição; `tone` light/dark/lime; `as` h1/h2; `size`            |
| `Button`       | Link (`href`) ou botão; `variant` primary/secondary; `tone` light/dark; `size` md/lg; `arrow`; `fullWidth`   |
| `Badge`        | Tons lime, ink, mist, outline, glass                                                                         |
| `Logo`         | `tone` light (fundo claro) ou dark (fundo escuro)                                                            |
| `SocialIcon`   | Glifos de Instagram, YouTube e TikTok (Lucide não tem logos de marcas)                                       |

Layout em `src/components/layout/`: `SkipLink`, `Navbar`, `Footer`. Seções da página em `src/sections/` (barrel `index.ts`).

### Hero (Etapa 5A)

- `#inicio`, fundo `ink`, altura `min-h-svh` (no desktop limitada a 58rem). Único `h1` da página (`size="display"`).
- Mobile: foto ao fundo com gradiente grafite de baixo para cima e texto alinhado embaixo — o CTA principal fica visível sem rolar em 375×667.
- Desktop: foto ocupando 64% à direita, dissolvida no grafite por gradiente da esquerda; card de ritual (vidro escuro) no canto inferior direito.
- Foto com `fetchPriority="high"` (é o LCP); `sizes` = `(min-width: 1024px) 64vw, 100vw`.

### Manifesto (Etapa 5A)

- `#sobre`, fundo branco. Título `size="h1"` em 7 colunas, texto em 5 colunas alinhado à base; pilares em 3 colunas com `border-t border-line`, ícone em círculo lima e número decorativo.

### Botões

| Variante   | Fundo claro (`tone="light"`)                   | Fundo escuro (`tone="dark"`)                               |
| ---------- | ---------------------------------------------- | ---------------------------------------------------------- |
| Primário   | `bg-ink text-white` → hover `bg-ink-soft`      | `bg-lime text-ink` → hover `bg-lime-strong`                |
| Secundário | `border border-ink text-ink` → hover `bg-mist` | `border border-white/40 text-white` → hover `border-white` |

Pílula, mínimo 44px de altura. O tamanho `lg` é mais compacto abaixo de 360px e de 640px para caber com a seta em 320px e 375px.

> **Cuidado:** não passe `hidden`/`lg:hidden` em `className` do `Button` (conflita com `inline-flex` sem tailwind-merge). Envolva o botão em uma `div` com a classe de visibilidade.

### Destaque no título (`highlight`)

- Fundo escuro: palavra em `text-lime`.
- Fundo claro: marca-texto lima com texto `ink` (lima nunca como texto sobre claro).
- Fundo lima: marca-texto `ink` com texto lima.
- O marca-texto é um gradiente com 84% da altura da linha (`box-decoration-clone`), para as faixas não se encostarem quando o título quebra em várias linhas.

### Navbar e âncoras

- Fixa (`h-nav`, `--spacing-nav: 4.5rem`). Transparente com texto branco sobre o hero escuro; vira `bg-white/90 backdrop-blur` com borda após rolar ou ao abrir o menu.
- Toda `Section` tem `scroll-mt-nav`, então as âncoras não ficam escondidas sob a barra.
- Seção ativa marcada com `aria-current="location"`.
- Menu mobile: botão com `aria-expanded`/`aria-controls`, fecha com Esc, clique fora ou ao escolher um link; foco preso no painel enquanto aberto; fecha sozinho ao passar de 1024px.
- O corpo da página é `<main id="conteudo" tabIndex={-1}>`, alvo do `SkipLink`.
- Se usar `backdrop-filter` num pai, filhos `fixed` passam a se posicionar nele — por isso o fundo escurecido do menu é `absolute top-full h-dvh`.

## 8. Acessibilidade

- Todas as combinações de texto listadas atingem **WCAG AA** (≥ 4.5:1); bordas de UI ≥ 3:1.
- Foco visível global: contorno `ink` 2px com 3px de afastamento. Em blocos escuros, adicione `data-surface="dark"` no container e o contorno vira lima.
- Ícones decorativos com `aria-hidden="true"`.

## 9. Fotografia (guia para a Etapa 3)

- **Sempre grupos:** duas ou mais pessoas interagindo — high-five, ajudando no exercício, aula coletiva, rindo depois do treino, roda de alongamento.
- **Suor real:** rostos com esforço, roupas marcadas, mas expressão positiva. Nada de pose de espelho.
- **Luz natural e cores quentes**, levemente dessaturadas para conviver com o lima. Evitar fotos com muito verde ou amarelo forte competindo com o destaque.
- **Diversidade** de corpos, idades e etnias — pertencimento é para todo mundo.
- Fotos em `rounded-xl`; sobre fotos com texto, usar gradiente de `ink` para garantir contraste.
