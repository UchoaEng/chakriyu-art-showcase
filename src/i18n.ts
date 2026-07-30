import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      meta: {
        title: "Rebecca Chakrian — Designer Gráfica & Ilustradora",
        description: "Portfólio de Rebecca Chakrian — design gráfico, conteúdo digital, branding e processos criativos integrados à inteligência artificial.",
      },
      controls: {
        language: "Alterar idioma para inglês",
        themeLight: "Ativar tema claro",
        themeDark: "Ativar tema escuro",
        themeStateLight: "Claro",
        themeStateDark: "Escuro",
        currentLanguage: "Português",
      },
      nav: {
        label: "Navegação principal",
        sections: "Seções",
        home: "Voltar ao início",
        projects: "Projetos",
        about: "Sobre",
        experience: "Experiência",
        contact: "Contato",
        talk: "Vamos conversar",
        open: "Abrir menu",
        close: "Fechar menu",
      },
      hero: {
        eyebrow: "Design gráfico · Conteúdo digital · Branding B2B",
        titleStart: "Rebecca",
        titleEmphasis: "Chakrian",
        intro: "Traduzo estratégia de marca em peças visuais que comunicam e convertem. Atuo entre design gráfico, conteúdo digital e branding B2B, unindo processo criativo a fluxos otimizados por IA.",
        explore: "Explorar projetos",
        talk: "Falar sobre um projeto",
        portraitAlt: "Retrato de Rebecca Chakrian",
        role: "Designer gráfica & ilustradora",
        location: "João Pessoa · PB",
        note: "Estratégia, execução e tecnologia articuladas em sistemas visuais consistentes.",
        selected: "Portfólio selecionado · 2026",
        availability: "Disponível para projetos freelance",
      },
      projects: {
        eyebrow: "Trabalhos selecionados",
        headingStart: "Projetos em",
        headingEmphasis: "primeiro plano.",
        intro: "Uma seleção de identidades, ilustrações e experiências visuais. Cada trabalho nasce de uma pergunta diferente — e encontra uma linguagem própria.",
        filterLabel: "Filtrar projetos",
        all: "Todos",
        count_one: "{{count}} projeto em exibição",
        count_other: "{{count}} projetos em exibição",
        cta: "Tem um projeto em mente? Vamos conversar.",
        open: "Abrir projeto {{title}}",
        view: "Ver projeto",
        skillsLabel: "Competências utilizadas",
        previousImage: "Imagem anterior",
        nextImage: "Próxima imagem",
        closePreview: "Fechar visualização do projeto",
        galleryLabel: "Imagens do projeto",
        viewImage: "Ver imagem {{number}}",
        imageAlt: "{{title}}, imagem {{current}} de {{total}}",
        scope: "Escopo",
        categories: {
          digitalArt: "Arte digital",
          visualIdentity: "Identidade visual",
          branding: "Branding",
          productDesign: "Design de produto",
          editorialIllustration: "Ilustração editorial",
        },
        skills: {
          illustration: "Ilustração",
          graphicDesign: "Design gráfico",
          packaging: "Embalagem",
          branding: "Branding",
          appDesign: "Design de app",
          artDirection: "Direção de arte",
          visualIdentity: "Identidade visual",
          applications: "Aplicações",
          sustainability: "Sustentabilidade",
          editorialDesign: "Design editorial",
          visualNarrative: "Narrativa visual",
          emotes: "Emotes",
          digitalDesign: "Design digital",
          campaignDesign: "Design de campanha",
          emailMarketing: "E-mail marketing",
          appliedAI: "IA aplicada",
        },
        items: {
          starian: {
            title: "Conteúdo & Campanhas — Starian",
            description: "Sistema contínuo de produção para Construmanager, Sienge Construcompras e Sienge Construpoint, reunindo social media, Meta Ads, banners, e-mail marketing em HTML e um banco de imagens proprietário criado com IA.",
          },
          baralho: {
            title: "Baralho Criativo",
            description: "Uma releitura autoral dos ases de baralho inspirada em Silksong, construída entre ilustração, composição gráfica e design de embalagem.",
          },
          porquinhoo: {
            title: "Porquinhoo",
            description: "Identidade visual para uma experiência de finanças voltada a crianças e adolescentes, equilibrando clareza, educação e um universo lúdico.",
          },
          wave: {
            title: "The Wave",
            description: "Sistema de marca para uma loja de presentes, do símbolo às aplicações, com linguagem leve e consistente em diferentes pontos de contato.",
          },
          natureba: {
            title: "Natureba",
            description: "Embalagens para uma linha de cosméticos naturais, orientadas por materiais, elementos orgânicos e uma presença visual delicada.",
          },
          twitch: {
            title: "Twitch Arts Collection",
            description: "Coleção de emotes, badges e alertas com foco em expressão, leitura imediata e coerência visual para comunidades de streaming.",
          },
        },
      },
      about: {
        eyebrow: "Sobre & repertório",
        heading: "Branding, comunicação e tecnologia",
        intro: "Uma prática orientada por estratégia de marca, clareza da informação e produção visual consistente — da ideia ao fluxo de entrega.",
        pillars: {
          brand: {
            index: "01",
            title: "Pensamento de marca",
            text: "Identidades e desdobramentos guiados por posicionamento, consistência e contexto.",
          },
          communication: {
            index: "02",
            title: "Comunicação aplicada",
            text: "Conteúdo digital e materiais B2B concebidos para informar, engajar e converter.",
          },
          technology: {
            index: "03",
            title: "Tecnologia no fluxo",
            text: "IA, HTML e CSS integrados ao processo para ampliar eficiência e possibilidades de entrega.",
          },
        },
      },
      skills: {
        eyebrow: "Habilidades & Ferramentas",
        heading: "Competências organizadas para criar, desdobrar e entregar.",
        intro: "Design estratégico, conteúdo e tecnologia reunidos em um repertório aplicado a marcas e experiências digitais.",
        strategic: {
          title: "Design Estratégico & Visual",
          items: ["Identidade Visual & Rebranding", "Diagramação", "Landing Pages", "Criativos para Social Media"],
        },
        content: {
          title: "Produção de Conteúdo & Motion",
          items: ["Apresentações Corporativas", "Propostas Comerciais", "Edição de vídeos", "Motion Design"],
        },
        email: {
          title: "E-mail Marketing",
          items: [
            "HTML e CSS aplicados diretamente ao corpo de e-mails",
            "Criação de gráficos, botões, listas e conteúdos dinâmicos responsivos",
            "IA aplicada a fluxos de disparo no RD Station",
          ],
        },
        tools: {
          title: "Ferramentas",
          items: [
            "Adobe Creative Suite: Photoshop, Illustrator, InDesign e Premiere",
            "Figma",
            "RD Station",
            "IA aplicada a fluxos de design",
          ],
        },
      },
      experience: {
        eyebrow: "Experiência Profissional",
        heading: "Design, conteúdo e evolução de marca.",
        intro: "Uma trajetória dedicada a transformar estratégia em comunicação visual consistente, do planejamento à entrega.",
        companies: {
          starian: {
            company: "Starian",
            role: "Designer Gráfico Júnior",
            period: "11/2023 – 07/2026",
            paragraphs: [
              "Atuei em uma equipe central composta por três designers, estruturando entregas contínuas para campanhas digitais em redes sociais, blog e e-mail marketing.",
              "Participei ativamente do rebranding do ecossistema Sienge, desdobrando o novo manual de marca em dezenas de templates, peças e ativos digitais.",
              "Também integrei inteligência artificial, HTML e CSS diretamente ao corpo dos e-mails para criar gráficos, botões, listas e conteúdos dinâmicos responsivos nos fluxos de disparo realizados pelo RD Station.",
            ],
          },
          mvc: {
            company: "MVC Editora",
            role: "Assistente de Artes",
            period: "04/2023 – 11/2023",
            paragraphs: [
              "Desenvolvi materiais didáticos digitais, incluindo eBooks e infográficos, com foco em hierarquia da informação, legibilidade e diagramação.",
              "Também criei um sistema padronizado de templates para videoaulas e apresentações, reduzindo o volume de retrabalho e aumentando a consistência visual das entregas da equipe.",
            ],
          },
        },
      },
      education: {
        eyebrow: "Formação",
        heading: "Base acadêmica em construção contínua.",
        intro: "Formação em design e artes visuais como fundamento para uma prática crítica, técnica e multidisciplinar.",
        statusLabel: "Situação",
        items: {
          design: {
            course: "Tecnólogo em Design Gráfico",
            institution: "Unipê Centro Universitário",
            status: "Conclusão prevista para 12/2026",
          },
          arts: {
            course: "Artes Visuais — Licenciatura Plena",
            institution: "Universidade Federal da Paraíba — UFPB",
            status: "Curso pausado",
          },
        },
      },
      certifications: {
        eyebrow: "Cursos & Certificações",
        heading: "Aprendizado aplicado a marca, crescimento e acessibilidade.",
        intro: "Estudos complementares que ampliam a prática em estratégia, marketing, inclusão e construção de marcas.",
        yearLabel: "Ano",
        items: {
          growth: { name: "Growth Marketing Essencial", institution: "Conversion", year: "2026" },
          strategy: { name: "Marketing Estratégico na Prática", institution: "Conversion", year: "2026" },
          accessibility: { name: "Estratégias de Comunicação e Acessibilidade", institution: "Hand Talk by Sorenson", year: "2026" },
          brands: { name: "Evoluindo Marcas com Estratégia", institution: "Aprender Design", year: "2024" },
          branding: { name: "Branding Essencial", institution: "LAJE", year: "2023" },
        },
      },
      contact: {
        eyebrow: "Contato",
        headingStart: "Boas ideias começam",
        headingMiddle: "com uma",
        headingEmphasis: "boa conversa.",
        lead: "Tem um projeto, uma oportunidade ou uma ideia ainda sem forma? Conte um pouco sobre o contexto e eu retorno assim que possível.",
        emailLabel: "E-mail",
        baseLabel: "Base",
        base: "João Pessoa, PB · trabalho remoto",
        name: "Seu nome",
        namePlaceholder: "Como posso te chamar?",
        email: "Seu e-mail",
        emailPlaceholder: "voce@email.com",
        message: "Sobre o que vamos conversar?",
        messagePlaceholder: "Conte sobre a ideia, o momento e o que você precisa.",
        submit: "Preparar mensagem",
        note: "Ao enviar, seu aplicativo de e-mail será aberto com a mensagem preenchida.",
        mailSubject: "Contato de {{name}} pelo portfólio",
        mailReturn: "Retorno: {{email}}",
      },
      footer: {
        statement: "Design gráfico & comunicação visual\ncom estratégia e personalidade.",
        top: "Voltar ao topo ↑",
        copyright: "© {{year}} Rebecca Chakrian",
      },
      notFound: {
        title: "404",
        text: "Página não encontrada",
        home: "Voltar para o início",
      },
    },
  },
  en: {
    translation: {
      meta: {
        title: "Rebecca Chakrian — Graphic Designer & Illustrator",
        description: "Rebecca Chakrian's portfolio — graphic design, digital content, branding and creative processes integrated with artificial intelligence.",
      },
      controls: {
        language: "Switch language to Portuguese",
        themeLight: "Activate light theme",
        themeDark: "Activate dark theme",
        themeStateLight: "Light",
        themeStateDark: "Dark",
        currentLanguage: "English",
      },
      nav: {
        label: "Main navigation",
        sections: "Sections",
        home: "Back to the top",
        projects: "Projects",
        about: "About",
        experience: "Experience",
        contact: "Contact",
        talk: "Let's talk",
        open: "Open menu",
        close: "Close menu",
      },
      hero: {
        eyebrow: "Graphic design · Digital content · B2B branding",
        titleStart: "Rebecca",
        titleEmphasis: "Chakrian",
        intro: "I translate brand strategy into visual pieces that communicate and convert. I work across graphic design, digital content and B2B branding, combining creative processes with AI-optimized workflows.",
        explore: "Explore projects",
        talk: "Discuss a project",
        portraitAlt: "Portrait of Rebecca Chakrian",
        role: "Graphic designer & illustrator",
        location: "João Pessoa · Brazil",
        note: "Strategy, execution and technology articulated through consistent visual systems.",
        selected: "Selected portfolio · 2026",
        availability: "Available for freelance projects",
      },
      projects: {
        eyebrow: "Selected work",
        headingStart: "Projects in",
        headingEmphasis: "the foreground.",
        intro: "A selection of identities, illustrations and visual experiences. Each project begins with a different question — and finds a language of its own.",
        filterLabel: "Filter projects",
        all: "All",
        count_one: "{{count}} project on display",
        count_other: "{{count}} projects on display",
        cta: "Have a project in mind? Let's talk.",
        open: "Open project {{title}}",
        view: "View project",
        skillsLabel: "Skills used",
        previousImage: "Previous image",
        nextImage: "Next image",
        closePreview: "Close project preview",
        galleryLabel: "Project images",
        viewImage: "View image {{number}}",
        imageAlt: "{{title}}, image {{current}} of {{total}}",
        scope: "Scope",
        categories: {
          digitalArt: "Digital art",
          visualIdentity: "Visual identity",
          branding: "Branding",
          productDesign: "Product design",
          editorialIllustration: "Editorial illustration",
        },
        skills: {
          illustration: "Illustration",
          graphicDesign: "Graphic design",
          packaging: "Packaging",
          branding: "Branding",
          appDesign: "App design",
          artDirection: "Art direction",
          visualIdentity: "Visual identity",
          applications: "Applications",
          sustainability: "Sustainability",
          editorialDesign: "Editorial design",
          visualNarrative: "Visual narrative",
          emotes: "Emotes",
          digitalDesign: "Digital design",
          campaignDesign: "Campaign design",
          emailMarketing: "Email marketing",
          appliedAI: "Applied AI",
        },
        items: {
          starian: {
            title: "Content & Campaigns — Starian",
            description: "An ongoing production system for Construmanager, Sienge Construcompras and Sienge Construpoint, bringing together social media, Meta Ads, banners, HTML email marketing and a proprietary AI-generated image library.",
          },
          baralho: {
            title: "Creative Card Deck",
            description: "An original reinterpretation of playing-card aces inspired by Silksong, combining illustration, graphic composition and packaging design.",
          },
          porquinhoo: {
            title: "Porquinhoo",
            description: "A visual identity for a financial experience aimed at children and teenagers, balancing clarity, education and a playful universe.",
          },
          wave: {
            title: "The Wave",
            description: "A brand system for a gift shop, from symbol to applications, with a light and consistent language across different touchpoints.",
          },
          natureba: {
            title: "Natureba",
            description: "Packaging for a natural cosmetics line, guided by materials, organic elements and a delicate visual presence.",
          },
          twitch: {
            title: "Twitch Arts Collection",
            description: "A collection of emotes, badges and alerts focused on expression, instant readability and visual consistency for streaming communities.",
          },
        },
      },
      about: {
        eyebrow: "About & repertoire",
        heading: "Branding, communication and technology",
        intro: "A practice guided by brand strategy, information clarity and consistent visual production — from the first idea to the delivery workflow.",
        pillars: {
          brand: {
            index: "01",
            title: "Brand thinking",
            text: "Identities and brand applications guided by positioning, consistency and context.",
          },
          communication: {
            index: "02",
            title: "Applied communication",
            text: "Digital content and B2B materials designed to inform, engage and convert.",
          },
          technology: {
            index: "03",
            title: "Technology in the workflow",
            text: "AI, HTML and CSS integrated into the process to expand efficiency and delivery possibilities.",
          },
        },
      },
      skills: {
        eyebrow: "Skills & Tools",
        heading: "Capabilities organized to create, expand and deliver.",
        intro: "Strategic design, content and technology brought together in a repertoire applied to brands and digital experiences.",
        strategic: {
          title: "Strategic & Visual Design",
          items: ["Visual Identity & Rebranding", "Layout Design", "Landing Pages", "Social Media Creatives"],
        },
        content: {
          title: "Content Production & Motion",
          items: ["Corporate Presentations", "Commercial Proposals", "Video Editing", "Motion Design"],
        },
        email: {
          title: "Email Marketing",
          items: [
            "HTML and CSS applied directly to email bodies",
            "Responsive charts, buttons, lists and dynamic content",
            "AI applied to RD Station campaign workflows",
          ],
        },
        tools: {
          title: "Tools",
          items: [
            "Adobe Creative Suite: Photoshop, Illustrator, InDesign and Premiere",
            "Figma",
            "RD Station",
            "AI applied to design workflows",
          ],
        },
      },
      experience: {
        eyebrow: "Professional Experience",
        heading: "Design, content and brand evolution.",
        intro: "A career dedicated to turning strategy into consistent visual communication, from planning through delivery.",
        companies: {
          starian: {
            company: "Starian",
            role: "Junior Graphic Designer",
            period: "11/2023 – 07/2026",
            paragraphs: [
              "I worked in a central team of three designers, structuring continuous deliverables for digital campaigns across social media, blogs and email marketing.",
              "I actively participated in the Sienge ecosystem rebranding, translating the new brand guidelines into dozens of templates, pieces and digital assets.",
              "I also integrated artificial intelligence, HTML and CSS directly into email bodies to create responsive charts, buttons, lists and dynamic content for campaign workflows managed through RD Station.",
            ],
          },
          mvc: {
            company: "MVC Editora",
            role: "Art Assistant",
            period: "04/2023 – 11/2023",
            paragraphs: [
              "I developed digital educational materials, including eBooks and infographics, with a focus on information hierarchy, readability and layout.",
              "I also created a standardized template system for video lessons and presentations, reducing rework and increasing the visual consistency of the team's deliverables.",
            ],
          },
        },
      },
      education: {
        eyebrow: "Education",
        heading: "An academic foundation in continuous development.",
        intro: "Education in design and visual arts as the foundation for a critical, technical and multidisciplinary practice.",
        statusLabel: "Status",
        items: {
          design: {
            course: "Associate Degree in Graphic Design",
            institution: "Unipê University Center",
            status: "Expected completion in 12/2026",
          },
          arts: {
            course: "Bachelor of Arts in Visual Arts and Education",
            institution: "Federal University of Paraíba — UFPB",
            status: "Currently paused",
          },
        },
      },
      certifications: {
        eyebrow: "Courses & Certifications",
        heading: "Applied learning in branding, growth and accessibility.",
        intro: "Complementary studies that expand the practice across strategy, marketing, inclusion and brand building.",
        yearLabel: "Year",
        items: {
          growth: { name: "Essential Growth Marketing", institution: "Conversion", year: "2026" },
          strategy: { name: "Strategic Marketing in Practice", institution: "Conversion", year: "2026" },
          accessibility: { name: "Communication and Accessibility Strategies", institution: "Hand Talk by Sorenson", year: "2026" },
          brands: { name: "Evolving Brands Through Strategy", institution: "Aprender Design", year: "2024" },
          branding: { name: "Branding Essentials", institution: "LAJE", year: "2023" },
        },
      },
      contact: {
        eyebrow: "Contact",
        headingStart: "Good ideas begin",
        headingMiddle: "with a",
        headingEmphasis: "good conversation.",
        lead: "Have a project, an opportunity or an idea that has yet to take shape? Share some context and I will get back to you as soon as possible.",
        emailLabel: "Email",
        baseLabel: "Based in",
        base: "João Pessoa, Brazil · remote work",
        name: "Your name",
        namePlaceholder: "What should I call you?",
        email: "Your email",
        emailPlaceholder: "you@email.com",
        message: "What shall we discuss?",
        messagePlaceholder: "Tell me about the idea, the context and what you need.",
        submit: "Prepare message",
        note: "Submitting will open your email app with the message already filled in.",
        mailSubject: "Portfolio inquiry from {{name}}",
        mailReturn: "Reply to: {{email}}",
      },
      footer: {
        statement: "Graphic design & visual communication\nwith strategy and personality.",
        top: "Back to top ↑",
        copyright: "© {{year}} Rebecca Chakrian",
      },
      notFound: {
        title: "404",
        text: "Page not found",
        home: "Return to home",
      },
    },
  },
} as const;

const storedLanguage = typeof window !== "undefined" ? window.localStorage.getItem("rebecca-language") : null;
const initialLanguage = storedLanguage === "en" || storedLanguage === "pt"
  ? storedLanguage
  : (typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("en") ? "en" : "pt");

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "pt",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (language) => {
  const normalizedLanguage = language.startsWith("en") ? "en" : "pt";
  if (typeof window !== "undefined") {
    window.localStorage.setItem("rebecca-language", normalizedLanguage);
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = normalizedLanguage === "en" ? "en" : "pt-BR";
  }
});

if (typeof document !== "undefined") {
  document.documentElement.lang = initialLanguage === "en" ? "en" : "pt-BR";
}

export default i18n;
