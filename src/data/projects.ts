export interface Project {
  id: "starian" | "baralho" | "porquinhoo" | "wave" | "natureba" | "twitch";
  folder: string;
  cover: string;
  images: string[];
  categoryKey: "digitalArt" | "visualIdentity" | "branding" | "productDesign" | "editorialIllustration";
  skillKeys: string[];
}

export const projectData: Project[] = [
  {
    id: "starian",
    folder: "Starian - Conteudo e Campanhas",
    cover: "/projects/Starian - Conteudo e Campanhas/capa.JPG",
    images: ["capa", "Slide2", "Slide3", "Slide4", "Slide5", "Slide6", "Slide7", "Slide8"]
      .map((name) => `/projects/Starian - Conteudo e Campanhas/${name}.JPG`),
    categoryKey: "branding",
    skillKeys: ["campaignDesign", "emailMarketing", "digitalDesign", "appliedAI"],
  },
  {
    id: "baralho",
    folder: "Just Married (or not) - Characters",
    cover: "/projects/Just Married (or not) - Characters/capa-silksong.png",
    images: Array.from({ length: 6 }, (_, index) => `/projects/Just Married (or not) - Characters/${index + 1}.png`),
    categoryKey: "digitalArt",
    skillKeys: ["illustration", "graphicDesign", "packaging"],
  },
  {
    id: "porquinhoo",
    folder: "Porquinhoo",
    cover: "/projects/Porquinhoo/1.jpg",
    images: Array.from({ length: 11 }, (_, index) => `/projects/Porquinhoo/${index + 1}.jpg`),
    categoryKey: "visualIdentity",
    skillKeys: ["branding", "appDesign", "artDirection"],
  },
  {
    id: "wave",
    folder: "The Wave - Loja de Presentes",
    cover: "/projects/The Wave - Loja de Presentes/tbm.png",
    images: Array.from({ length: 10 }, (_, index) => `/projects/The Wave - Loja de Presentes/${index + 1}.png`),
    categoryKey: "branding",
    skillKeys: ["visualIdentity", "graphicDesign", "applications"],
  },
  {
    id: "natureba",
    folder: "Natureba - Cosméticos Naturais",
    cover: "/projects/Natureba - Cosméticos Naturais/tbm.png",
    images: Array.from({ length: 11 }, (_, index) => `/projects/Natureba - Cosméticos Naturais/${index + 1}.png`),
    categoryKey: "productDesign",
    skillKeys: ["packaging", "branding", "sustainability"],
  },
  {
    id: "twitch",
    folder: "Twitch Arts Collection",
    cover: "/projects/Twitch Arts Collection/tbm.png",
    images: [1, 2, 4, 5, 6, 7, 8, 9, 10].map((number) => `/projects/Twitch Arts Collection/${number}.png`),
    categoryKey: "digitalArt",
    skillKeys: ["emotes", "digitalDesign", "illustration"],
  },
];
