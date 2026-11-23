# Rebecca Chakrian — Portfolio

Portfolio website for Rebecca Chakrian, a graphic designer and illustrator specialized in branding, visual identity and digital art.

**[rebeccadesigner.art](https://www.rebeccadesigner.art)** · [🇧🇷 Leia em português](#-português)

## What's on the site

- **Hero, About and Skills:** who Rebecca is, her focus areas and tools.
- **Experience, Education and Certifications:** her professional path.
- **Projects:** eight case galleries (Children's Book Cover, Doce Miau Cat Café, Just Married (or not) characters, Natureba natural cosmetics, Porquinhoo, Starian content and campaigns, The Wave gift shop and a Twitch art collection), each opening in a modal with an image carousel.
- **Contact:** e-mail, WhatsApp and social links.
- Portuguese and English with a language toggle, light and dark themes, and scroll reveal animations.

## Image performance

The galleries hold large artwork files, so loading is the main engineering concern:

- Cards load lazily with Intersection Observer and animated skeleton placeholders; carousel images use native lazy loading, and only the modal's first image loads eagerly.
- A priority preloader loads in batches of up to 3 images, preloads the images next to the current carousel position and caches what was already loaded.
- Loading and error states with visual fallbacks and a 10-second timeout.
- Vercel Speed Insights collects Core Web Vitals in production.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui (Radix) · Motion · i18next · Embla Carousel · next-themes · Vercel Speed Insights

## Running locally

```bash
npm install
npm run dev        # development server
npm run build      # production build in dist/
npm run preview    # serves the build locally
npm run lint
```

## Structure

```text
src/
├── components/            Hero, About, Skills, Experience, Formation, Certifications,
│                          Projects (card + modal), Contact, Navigation, Footer,
│                          LanguageToggle, ThemeToggle, MotionReveal, OptimizedImage
├── components/ui/         shadcn/ui base components
├── data/projects.ts       project data
├── i18n.ts                PT/EN copy
├── utils/imagePreloader.ts  priority preloader
└── pages/                 Index and NotFound
public/projects/<Project name>/
├── tbm.png                thumbnail used on the card
└── 1.png … N.png          carousel images, in order
```

To add a project, create a folder in `public/projects/` with `tbm.png` and numbered images, then register it in `src/data/projects.ts`.

## Deploy

Deployed automatically on **Vercel** from this repository (`npm run build`, output `dist/`, Vite framework detection), with Speed Insights enabled.

---

<sub>Artwork © Rebecca Chakrian · Website developed by Lucas Uchôa</sub>

---

## 🇧🇷 Português

# Rebecca Chakrian — Portfólio

Site de portfólio da Rebecca Chakrian, designer gráfica e ilustradora especializada em branding, identidade visual e arte digital.

**[rebeccadesigner.art](https://www.rebeccadesigner.art)**

### O que tem no site

- **Início, Sobre e Habilidades:** quem é a Rebecca, suas áreas de atuação e ferramentas.
- **Experiência, Formação e Certificações:** a trajetória profissional.
- **Projetos:** oito galerias de cases (capa de livro infantil, Doce Miau Cat Café, personagens de Just Married (or not), Natureba Cosméticos Naturais, Porquinhoo, conteúdo e campanhas da Starian, The Wave Loja de Presentes e uma coleção de artes para Twitch), cada uma abrindo num modal com carrossel de imagens.
- **Contato:** e-mail, WhatsApp e redes sociais.
- Português e inglês com seletor de idioma, tema claro e escuro e animações de revelação na rolagem.

### Performance das imagens

As galerias têm arquivos de arte grandes, então o carregamento é a principal preocupação técnica:

- Os cards carregam sob demanda com Intersection Observer e skeletons animados; as imagens do carrossel usam lazy loading nativo, e só a primeira imagem do modal carrega na hora.
- Um preloader por prioridade carrega em lotes de até 3 imagens, antecipa as imagens vizinhas no carrossel e guarda em cache o que já foi carregado.
- Estados de carregamento e erro com fallback visual e limite de 10 segundos.
- O Vercel Speed Insights coleta os Core Web Vitals em produção.

### Stack

React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui (Radix), Motion, i18next, Embla Carousel, next-themes e Vercel Speed Insights.

### Como rodar

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção em dist/
npm run preview    # serve a build localmente
npm run lint
```

### Estrutura

A estrutura de pastas está na versão em inglês acima. Para adicionar um projeto, crie uma pasta em `public/projects/` com `tbm.png` (thumbnail do card) e as imagens numeradas do carrossel (`1.png`, `2.png`…), e registre o projeto em `src/data/projects.ts`.

### Deploy

Publicado automaticamente na **Vercel** a partir deste repositório (`npm run build`, saída em `dist/`, detecção do Vite), com Speed Insights ativado.

<sub>Artes © Rebecca Chakrian · Site desenvolvido por Lucas Uchôa</sub>
