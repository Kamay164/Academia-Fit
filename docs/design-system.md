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

## 10. Seções da página (Etapa 5B)

Ritmo de fundos: ink (hero) → branco (manifesto) → mist (comunidade) → branco (modalidades) → ink (estrutura) → branco (depoimentos) → mist (planos) → branco (FAQ) → lima (CTA) → branco (contato) → ink (rodapé).

- Todas em `src/sections/`, consumindo `src/data/`. Fotos pelo componente `PhotoImage` (srcSet, dimensões e `loading="lazy"`).
- **Comunidade:** números (contadores animam na Etapa 6), mosaico de 5 fotos e três rituais.
- **Modalidades:** 4 cartões com foto, etiqueta lima, ícone e destaques.
- **Estrutura:** fundo escuro, 3 fotos e 6 ambientes.
- **Depoimentos:** 4 cartões `figure/blockquote` com aviso de que são fictícios.
- **Planos:** plano em destaque em `ink` com etiqueta lima.
- **FAQ:** acordeão nativo `<details>`.
- **Contato:** formulário só front-end (`FormField.tsx`: TextField, SelectField, TextAreaField), validação ao enviar, `aria-invalid` + `aria-describedby`, foco no primeiro erro, máscara de WhatsApp, estado de envio simulado e mensagem de sucesso com foco. Nada é enviado.

## 11. Movimento (Etapa 6)

Sem biblioteca: CSS + `IntersectionObserver`. Só `opacity` e `transform` são animados (nada que mude o layout).

- **Entrada do hero:** `animate-rise` (sobe 20px e aparece, 0,9s) em cascata com `animationDelay` (0, 180, 320, 520 ms); a foto "assenta" com `animate-settle` (zoom de 1,06 a 1).
- **Revelação no scroll:** `{...reveal(delay)}` (de `src/lib/reveal.ts`) em qualquer elemento; `useReveal()` (chamado uma vez no `App`) troca `data-reveal` para `in` ao entrar na tela e **remove o atributo no fim da transição**. `stagger(i)` escalona itens de lista (90 ms por item, máximo 360 ms). `SectionTitle` já revela sozinho (`reveal={false}` desliga).
- **Regra:** não ponha classes `transition-*` no mesmo elemento que tem `reveal`; elas sobrescrevem a transição da revelação. Para hover, use um elemento interno (como nos cartões de Planos).
- **Contadores:** `CountUp` conta até o valor ao entrar na tela (1,6 s, ease-out-expo). Reserva a largura do valor final (sem salto) e leitores de tela leem só o valor final.
- **Hover/foco:** botões afundam (`active:scale-[0.98]`) e a seta avança; cartões de plano sobem 4px; fotos de modalidade ampliam 5%; perguntas do FAQ mudam de cor e o "+" gira.
- **Movimento reduzido:** o CSS zera animações e transições, `data-reveal` vira visível na hora, `useReveal` remove os atributos e o `CountUp` mostra o valor final.

## 12. Responsividade e acessibilidade (Etapa 7)

**Verificado** (Playwright + axe-core + Lighthouse, build de produção):

- Sem rolagem horizontal em 320, 375, 414, 768, 1024, 1280, 1440 e 1920 px; hero também em paisagem de celular (667×375).
- axe (WCAG 2.0/2.1/2.2 A e AA + boas práticas): 0 violações. Lighthouse: Acessibilidade 100, Boas práticas 100 (SEO e Performance ficam para a Etapa 8).
- Landmarks: `header`, `nav` "Principal", `main#conteudo`, `footer`, `nav` "Rodapé"; cada seção tem `aria-labelledby`. Um único `h1`; `h2` por seção e `h3` dentro delas, sem pular nível.
- Teclado: skip link, ordem natural de foco, contorno visível em todos os controles (grafite sobre claro, lima sobre escuro, branco na navbar transparente), menu mobile com Esc e foco preso, FAQ e formulário operáveis só com teclado.
- Formulário: todo campo tem `label`; erros com `aria-invalid` + `aria-describedby`, aviso `role="alert"` e foco no primeiro campo inválido; sucesso com `role="status"` e foco.
- Alvos de toque: links e botões isolados têm pelo menos 44px de altura no mobile (logo, rodapé, e-mail, botões); só os links do menu desktop (27px) ficam abaixo disso, acima do mínimo de 24px da WCAG 2.2.
- Links que abrem em nova aba avisam "(abre em nova aba)" para leitores de tela.
- Contraste do texto do hero sobre a foto medido por amostragem de pixels: ≥ 5:1 em 320–768 px; no desktop o texto fica sobre o gradiente grafite e o card do ritual tem fundo `ink/80`.
- Movimento reduzido: animações, transições **e atrasos** zerados (sem isso, o atraso escondia elementos por até meio segundo).

## 13. Performance e SEO (Etapa 8)

**Medido** (Lighthouse sobre o build de produção, `vite preview`): celular — Desempenho 92, Acessibilidade 100, Boas práticas 100, SEO 100; desktop — 100 / 100 / 100 / 100. CLS 0, TBT ≤ 30 ms. No celular com rede lenta simulada o LCP fica em ~3 s (limitado pelo JavaScript do React, que renderiza a página no cliente).

- **Cabeçalho gerado no build** (`vite.config.ts`, plugin `maisfit-head`): título e descrição vêm de `src/data/site.ts` (`site.seo`); Open Graph, Twitter Card, `robots`, canonical e `og:url`.
- **Endereço público:** o plugin lê `SITE_URL` (defina na Vercel se usar domínio próprio) ou `VERCEL_PROJECT_PRODUCTION_URL` (variável de sistema da Vercel). Sem nenhuma das duas, canonical/sitemap são omitidos e `og:image` fica relativo (a prévia em redes sociais só funciona com URL absoluta).
- **Gerados no build:** `robots.txt` e `sitemap.xml` (só com endereço conhecido).
- **Preloads:** foto do hero (`imagesrcset`/`imagesizes` iguais aos do `<img>`, `fetchpriority="high"`) e as duas fontes principais (latin). O CSS é inserido inline no HTML (sem requisição bloqueante).
- **Imagens:** WebP em várias larguras, `loading="lazy"` abaixo da dobra (hero é `eager` com prioridade alta), `width`/`height` em todas. `srcSet` e `sizes` são passados antes de `src` no JSX (o React aplica os atributos na ordem; com `src` primeiro o navegador baixaria a maior versão). O `src` de plano B é a versão média.
- **Ícones e compartilhamento:** `public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192/512.png`, `icon-maskable-512.png`, `site.webmanifest`, `og-image.jpg` (1200×630, gerada a partir do hero e da marca).
- **Limitação conhecida:** a página é renderizada no cliente (SPA). Buscadores modernos executam JavaScript; pré-renderização estática ficaria fora do escopo do projeto.
- Sem dados estruturados (JSON-LD) de propósito: o endereço, o telefone e o horário são fictícios.
