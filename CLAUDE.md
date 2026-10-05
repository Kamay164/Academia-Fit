# CLAUDE.md — Landing Page +Fit

> Arquivo de contexto e regras para o Claude Code. Leia por inteiro antes de qualquer ação.

---

## ⛔ Regra nº 1 — Uma etapa por vez

- Cada etapa abaixo é executada **separadamente**, em sua própria sessão de trabalho.
- **Nunca avance para a próxima etapa sem autorização explícita do Vinicius** (ex.: "pode iniciar a Etapa 3").
- Ao terminar uma etapa: pare, apresente o resumo (o que foi feito, como verificar, pendências) e **aguarde**.
- Não "adiante" trabalho de etapas futuras, mesmo que pareça pequeno ou óbvio.
- Se algo de uma etapa futura bloquear a atual, descreva o problema e pergunte — não resolva por conta própria.
- Antes de começar uma etapa, confirme em 2–4 linhas o que vai fazer e quais arquivos serão criados/alterados.

---

## 1. Objetivo

Criar uma **landing page moderna para a +Fit**, uma academia **fictícia**, destinada ao **portfólio** do Vinicius. O projeto deve demonstrar domínio de front-end moderno, design de interface, acessibilidade e performance.

## 2. Conceito e sentimento

- **Estilo:** clean, moderno e minimalista. Muito *white space* para respiro, mas com a energia de uma academia de alto padrão.
- **Emoção central:** suor, esforço e superação.
- **Foco principal (o mais importante):** **comunidade e união**. O visitante precisa sentir **pertencimento** — pessoas treinando juntas e se apoiando.
- Regras práticas que derivam do conceito:
  - Priorizar fotos de **grupos**, aulas coletivas, parceiros de treino, high-fives, incentivo mútuo — evitar o clichê do "atleta solitário no espelho".
  - Copy no **"nós"** e no **"juntos"** ("A gente treina junto", "Ninguém fica pra trás"), em tom motivador, nunca agressivo ou de culpa.
  - Energia vem de contraste tipográfico, uma cor de destaque forte e microanimações — **não** de excesso de elementos.

## 3. Decisões já tomadas

| Item | Decisão |
|---|---|
| Stack | React + Vite + Tailwind CSS |
| Linguagem | TypeScript (`.ts` / `.tsx`) |
| Ícones | Lucide (`lucide-react`) |
| Gerenciador de pacotes | npm |
| Lint / formatação | ESLint 9 (+ typescript-eslint, react-hooks, jsx-a11y) e Prettier (+ plugin Tailwind) |
| Idioma do site | Português (PT-BR) |
| Deploy | Vercel, com repositório no GitHub |
| Imagens | Bancos gratuitos (Unsplash / Pexels), com crédito e licença registrados |
| Identidade visual | Direção B · "Juntos" (branco + grafite + lima, Bricolage Grotesque + Inter) — ver `docs/design-system.md` |
| Conteúdo | Etapa 2 — `docs/conteudo.md` (leitura) e `src/data/` (fonte de verdade, tipado) |
| Localização fictícia | Savassi, Belo Horizonte – MG ("Rua do Movimento, 1000"); telefone `(31) 90000-0000`, e-mail `@maisfit.example` |
| Modalidades | Musculação guiada · Funcional & Cross · Aulas coletivas · Boxe & Lutas |
| Tom de voz | Próximo e motivador ("a gente", "junto", "bora") — regras em `docs/conteudo.md` |
| Fontes | Auto-hospedadas via Fontsource (`@fontsource-variable/bricolage-grotesque`, `@fontsource-variable/inter`) |
| Repositório | GitHub `Kamay164/Academia-Fit`, branch `main` (HTTPS). Commits e push são feitos pelo Vinicius no terminal do Antigravity |

**Dados de negócio:** o Vinicius autorizou dados **fictícios e plausíveis** (preços, horários, números, depoimentos), já definidos em `src/data/`. Não criar dados novos fora deles sem perguntar. Perfis de redes sociais apontam para `#`; nada deve apontar para pessoas, endereços ou contas reais.

**Ainda não definido (perguntar, não inventar):** link de portfólio do rodapé, biblioteca de animação, domínio próprio.

## 4. Tecnologias

- **Base (instalado na Etapa 0):** Vite 8, React 19, TypeScript 6, Tailwind CSS 4 (via `@tailwindcss/vite`, tokens com `@theme` em `src/styles/index.css` — não existe `tailwind.config.js`).
- **Qualidade:** ESLint 9 + Prettier. O ESLint fica na v9 porque o `eslint-plugin-jsx-a11y` ainda não suporta a v10; não atualizar sem checar isso. O template do Vite trazia oxlint, substituído pelo ESLint.
- **Scripts:** `npm run dev` · `build` · `preview` · `lint` · `format` · `format:check`.
- **Fontes:** Google Fonts ou Fontsource (auto-hospedadas de preferência).
- **Ícones:** Lucide, apenas. Ícones decorativos com `aria-hidden="true"`.
- **Animação:** CSS/Tailwind por padrão. Uma lib (ex.: Motion) só com aprovação na Etapa 6.
- **Proibido sem aprovação:** UI kits pesados, jQuery, bibliotecas de carrossel grandes, backend, banco de dados, analytics/trackers.

## 5. Estrutura de pastas prevista

```
Academia +FIT/
├── CLAUDE.md
├── README.md
├── docs/
│   ├── design-system.md     # Etapa 1
│   ├── conteudo.md          # Etapa 2 (copy de todas as seções)
│   └── creditos-imagens.md  # Etapa 3
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── brand/           # logo.svg, logo-dark.svg, symbol.svg (Etapa 1)
│   │   └── images/          # fotos otimizadas em WebP, várias larguras (ex.: hero-1280.webp) — Etapa 3
│   ├── components/
│   │   ├── ui/              # Button, Container, SectionTitle, Badge...
│   │   └── layout/          # Navbar, Footer
│   ├── sections/            # Hero, Manifesto, Comunidade, Modalidades, Estrutura, Depoimentos, Planos, Faq, CtaFinal, Contato
│   ├── data/                # conteúdo em arquivos JS/TS (textos, planos, depoimentos)
│   ├── hooks/               # useScrolled, useActiveSection, useReveal
│   ├── lib/                 # cn.ts, reveal.ts
│   ├── styles/index.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── package.json
```

> A estrutura pode ser ajustada na Etapa 0, mas qualquer mudança deve ser registrada aqui.

## 6. Seções previstas da página (sujeito à aprovação na Etapa 2)

1. **Navbar** — logo +Fit, âncoras, CTA "Agende sua aula experimental".
2. **Hero** — headline forte de comunidade + superação, foto de grupo, CTA principal.
3. **Manifesto / Sobre** — o que é a +Fit, o "porquê" da comunidade.
4. **Comunidade** — galeria/mosaico de pessoas treinando juntas, números (membros, aulas/semana — fictícios).
5. **Modalidades** — musculação, funcional, aulas coletivas etc.
6. **Estrutura** — espaço e diferenciais.
7. **Depoimentos** — fictícios, marcados como parte de um projeto de portfólio.
8. **Planos** — 2–3 planos com destaque no recomendado.
9. **CTA final** — convite para treinar junto.
10. **Contato / Rodapé** — formulário só front-end (validação, sem envio real), mapa ou endereço fictício, redes, aviso: *"Projeto fictício desenvolvido para portfólio."*

---

## 7. Etapas do projeto

Cada etapa tem: objetivo, entregáveis, verificação e modelo/esforço recomendado.
Comandos úteis: `/model <alias>` e `/effort <nível>`.

### Etapa 0 — Setup do projeto
- **Entregáveis:** projeto Vite + React + Tailwind criado, ESLint + Prettier, estrutura de pastas, `git init` com `.gitignore`, página "Hello +Fit" renderizando.
- **Perguntar antes:** JS ou TS; biblioteca de ícones; gerenciador de pacotes (npm/pnpm).
- **Verificação:** `npm run dev` abre sem erros; `npm run build` e `npm run lint` passam; uma classe Tailwind aplicada aparece no navegador.
- **Modelo:** Sonnet · esforço `medium`.

### Etapa 1 — Identidade visual e design system
- **Entregáveis:** `docs/design-system.md` com paleta (neutros + 1 cor de destaque energética), tipografia (display + texto), escala de espaçamento, raios, sombras, tom de fotografia; logo textual/wordmark "+Fit" em SVG; tokens no tema do Tailwind; página/rota temporária de *style guide* para visualização.
- **Verificação:** contraste das combinações texto/fundo ≥ 4.5:1 (WCAG AA) documentado; style guide renderiza todos os tokens; Vinicius aprova a direção visual.
- **Modelo:** Opus · esforço `high`. Apresentar 2 direções curtas antes de fechar uma.

### Etapa 2 — Arquitetura de conteúdo e copy
- **Entregáveis:** `docs/conteudo.md` com ordem final das seções, objetivo de cada uma, todos os textos em PT-BR (headlines, subtítulos, CTAs, planos, depoimentos fictícios), e dados em `src/data/`.
- **Verificação:** cada seção reforça comunidade/pertencimento; nenhum dado real inventado sem marcação `TODO`; Vinicius aprova a copy.
- **Modelo:** Opus · esforço `medium`.

### Etapa 3 — Curadoria e otimização de imagens
- **Como funciona (ajustado):** o ambiente do Claude **não consegue baixar** do Unsplash (proxy bloqueia) e não deve tentar contornar. Parte 1: Claude seleciona e verifica as fotos (`docs/imagens-selecao.md`). Parte 2: o Vinicius baixa para `imagens-originais/` (fora do Git), o Claude olha cada foto, otimiza e gera `src/assets/images/` + `src/data/images.ts`.
- **Só fotos "Free to use under the Unsplash License".** Descartar qualquer uma "Unsplash+" ou "Getty Images".
- **Entregáveis:** imagens convertidas para `.webp` em tamanhos responsivos, `src/data/images.ts` (com `alt`, autor, link) e `docs/creditos-imagens.md` (autor, link, licença).
- **Como usar as fotos nos componentes:** importar de `src/data/images.ts` (`heroPhoto`, `communityPhotos`, `modalityPhotos`, `facilityPhotos`) e renderizar `<img src srcSet sizes width height alt loading="lazy">`. Somente a foto do **hero** (LCP) não usa `loading="lazy"` e leva `fetchpriority="high"`. Não importar arquivos de `imagens-originais/`.
- **Fotos faltando** (o Vinicius baixa depois): `comunidade-6` e ringue. Os componentes devem funcionar com 5 fotos na galeria e 3 na estrutura, sem buracos no layout.
- **Edição de fotos:** só recorte, redimensionamento e desfoque pontual de placas/marcas ao fundo — sem montagem nem alteração de pessoas. Preferir rejeitar fotos com logo legível de marca real a editá-las.
- **Verificação:** toda imagem tem crédito e licença registrados; nenhuma imagem > ~250 KB na maior resolução usada; fotos coerentes com "grupo/comunidade".
- **Modelo:** Sonnet · `medium` para curadoria; Haiku · `low` para conversão em lote e geração da tabela de créditos.

### Etapa 4 — Layout base e componentes de UI
- **Entregáveis:** `Container`, `Button` (variantes), `SectionTitle`, `Badge`, `Logo`, `Navbar` (com menu mobile acessível), `Footer`, scroll suave por âncoras. Remover `src/styleguide/` e fazer `App.tsx` renderizar a landing page.
- **Verificação:** componentes usam apenas tokens do design system; navbar funciona com teclado e em 375px; build e lint sem erros.
- **Modelo:** Sonnet · esforço `medium`.

### Etapa 5A — Hero e Manifesto
- **Entregáveis:** seções Hero e Manifesto finalizadas (desktop e mobile).
- **Verificação:** a primeira dobra comunica em < 5 s "academia + comunidade + ação"; CTA visível sem rolar em 375px e 1440px; Vinicius aprova visualmente (screenshots).
- **Modelo:** Opus · esforço `high` — é a seção que define a primeira impressão do portfólio.

### Etapa 5B — Demais seções
- **Entregáveis:** Comunidade, Modalidades, Estrutura, Depoimentos, Planos, CTA final, Contato (formulário com validação client-side, sem envio real).
- **Verificação:** todas as seções consomem dados de `src/data/`; ritmo visual consistente (espaçamentos do design system); formulário mostra erros acessíveis; screenshots desktop/mobile aprovados.
- **Modelo:** Sonnet · esforço `medium`. Pode ser feita seção a seção, cada uma com aprovação.

### Etapa 6 — Animações e microinterações
- **Entregáveis:** revelação suave no scroll, hover/focus nos cards e botões, contadores de números da comunidade, transições discretas.
- **Verificação:** respeita `prefers-reduced-motion`; sem *layout shift* causado por animação; 60fps perceptível; nenhuma animação bloqueia leitura ou CTA.
- **Modelo:** Sonnet · esforço `high`. Pedir aprovação antes de adicionar qualquer biblioteca.

### Etapa 7 — Responsividade e acessibilidade
- **Entregáveis:** ajustes em 320 / 375 / 768 / 1024 / 1440 px; semântica HTML (landmarks, hierarquia de headings), `alt` descritivos, foco visível, navegação por teclado, labels no formulário.
- **Verificação:** sem scroll horizontal em nenhum breakpoint; Lighthouse Acessibilidade ≥ 95; axe sem erros críticos; teste completo só com teclado.
- **Modelo:** Sonnet · esforço `high`.

### Etapa 8 — Performance e SEO
- **Entregáveis:** lazy loading de imagens abaixo da dobra, `preload` da imagem/fonte do hero, meta tags, Open Graph + imagem de compartilhamento, favicon, `lang="pt-BR"`, título/descrição.
- **Verificação:** Lighthouse (mobile) Performance ≥ 90, SEO ≥ 95, Best Practices ≥ 95; LCP < 2.5 s; bundle sem dependências não usadas.
- **Modelo:** Sonnet · esforço `medium` (Haiku · `low` serve para gerar meta tags/OG).

### Etapa 9 — Revisão final de qualidade
- **Entregáveis:** revisão de código (duplicação, nomes, componentes), revisão visual seção a seção contra o design system, lista de correções aplicadas, verificação cruzada da copy.
- **Verificação:** lint/build limpos; nenhum `TODO` pendente sem decisão; checklist da seção 10 cumprido.
- **Modelo:** Opus · esforço `xhigh`. Só usar `max` se houver bug difícil e persistente.

### Etapa 10 — README e deploy na Vercel
- **Entregáveis:** `README.md` de portfólio (descrição, screenshots, stack, decisões de design, como rodar, créditos de imagens, aviso de projeto fictício); repositório no GitHub; deploy na Vercel.
- **Verificação:** URL pública abre e funciona em mobile e desktop; README renderiza corretamente no GitHub; Lighthouse da URL de produção confere com a Etapa 8.
- **Modelo:** Sonnet · esforço `low`. Push/deploy **somente** com autorização explícita.

---

## 8. Regras e restrições

- **Não inventar informações** de negócio (preços, endereço, contatos, pessoas). Usar placeholders marcados `TODO` e perguntar.
- **Não criar, mover ou apagar arquivos fora do escopo da etapa atual.**
- **Não instalar dependências** além das aprovadas; para qualquer nova, justificar e pedir aprovação.
- **Não fazer commit, push ou deploy** sem pedido explícito.
- Usar **apenas imagens com licença livre** (Unsplash/Pexels) e sempre registrar crédito.
- Não usar marcas, logos ou nomes de academias reais.
- Depoimentos e números são fictícios e o site deve deixar claro que é um projeto de portfólio.
- Formulário de contato não envia dados para lugar nenhum.
- Ambiente do Vinicius é **Windows** — comandos e caminhos devem funcionar nele (o caminho da pasta contém espaços e `+`; usar aspas).

## 9. Padrões de trabalho

- **Código:** componentes funcionais pequenos, um componente por arquivo, nomes em inglês para código (`HeroSection.tsx`) e conteúdo em PT-BR em `src/data/`.
- **Estilo:** Tailwind usando **somente** os tokens de `src/styles/index.css` (a paleta padrão do Tailwind está desligada); evitar valores arbitrários (`[13px]`) sem motivo; mobile-first. Regras de cor e tipografia em `docs/design-system.md` — destaque: **lima nunca como texto sobre fundo claro** e blocos escuros levam `data-surface="dark"`.
- **Validação:** o Vinicius testa pela Vercel (não roda o site localmente). Antes de entregar uma etapa, rodar `npm run lint` e `npm run build` no ambiente do Claude para garantir que o deploy não quebre.
- **Conteúdo separado da apresentação:** textos e listas sempre em `src/data/`.
- **Acessibilidade desde o início**, não só na Etapa 7.
- **Commits** (quando autorizados): Conventional Commits em PT-BR, ex.: `feat: adiciona seção hero`.
- **Ao final de cada etapa, entregar:**
  1. Resumo do que foi feito.
  2. Arquivos criados/alterados.
  3. Como verificar (comandos e o que observar).
  4. Pendências e perguntas.
  5. Sugestão da próxima etapa — **e parar aqui, aguardando autorização**.

## 10. Critérios de conclusão do projeto

- [ ] Todas as etapas 0–10 aprovadas pelo Vinicius.
- [ ] A página transmite claramente **comunidade + superação** com visual clean e minimalista.
- [ ] Responsiva de 320 px a 1440 px+, sem scroll horizontal.
- [ ] Lighthouse mobile: Performance ≥ 90 · Acessibilidade ≥ 95 · Best Practices ≥ 95 · SEO ≥ 95.
- [ ] `npm run build` e `npm run lint` sem erros nem warnings relevantes.
- [ ] Todas as imagens com crédito em `docs/creditos-imagens.md`.
- [ ] Nenhum `TODO` sem decisão.
- [ ] README de portfólio completo e deploy público na Vercel funcionando.

## 11. Status das etapas

| Etapa | Status |
|---|---|
| 0 Setup | ✅ Concluída |
| 1 Identidade visual | ✅ Concluída (Direção B · Juntos) |
| 2 Conteúdo e copy | ✅ Concluída |
| 3 Imagens | ⏳ Entregue (13 fotos otimizadas), aguardando aprovação · pendentes: `comunidade-6` e foto de ringue, que o Vinicius baixa depois |
| 4 Layout base e UI | ⏳ Entregue (componentes ui, Navbar, Footer, hooks, `Preview.tsx` temporário), aguardando aprovação · `src/styleguide/` deve ser removido à mão (`git rm -r src/styleguide`) |
| 5A Hero e Manifesto | ⏳ Entregue (`src/sections/Hero.tsx`, `Manifesto.tsx`), aguardando aprovação visual |
| 5B Demais seções | ⏳ Entregue (7 seções + FAQ, `Preview.tsx` removido), aguardando aprovação |
| 6 Animações | ⏳ Entregue (revelação no scroll, hero animado, contadores, hovers; sem biblioteca), aguardando aprovação |
| 7 Responsivo e a11y | ⏳ Entregue (auditoria 320–1920 px, axe 0 violações, Lighthouse A11y 100), aguardando aprovação |
| 8 – 10 | Não iniciadas |

## 12. Guia rápido de modelos e esforço

| Fase | Modelo | Esforço |
|---|---|---|
| 0 Setup | Sonnet | medium |
| 1 Design system | Opus | high |
| 2 Conteúdo/copy | Opus | medium |
| 3 Imagens | Sonnet / Haiku | medium / low |
| 4 Componentes base | Sonnet | medium |
| 5A Hero + Manifesto | Opus | high |
| 5B Demais seções | Sonnet | medium |
| 6 Animações | Sonnet | high |
| 7 Responsivo + a11y | Sonnet | high |
| 8 Performance + SEO | Sonnet | medium |
| 9 Revisão final | Opus | xhigh |
| 10 README + deploy | Sonnet | low |

**Quando subir de modelo/esforço:**
- O mesmo bug resiste a 2 tentativas → subir um nível de esforço (ou usar `ultrathink` no prompt).
- O resultado visual "funciona, mas não emociona" → trocar para Opus `high` só naquela seção.
- Refatoração que atravessa muitos arquivos → Opus `high`.
- Tarefas mecânicas (renomear, converter imagens, meta tags) → descer para Haiku `low`.
