export interface Project {
  id: "baralho" | "porquinhoo" | "wave" | "natureba" | "book" | "twitch";
  folder: string;
  cover: string;
  images: string[];
  categoryKey: "digitalArt" | "visualIdentity" | "branding" | "productDesign" | "editorialIllustration";
  skillKeys: string[];
}

export const projectData: Project[] = [
  {
    id: "baralho",
    folder: "Just Married (or not) - Characters",
    cover: "/projects/Just Married (or not) - Characters/tbm.png",
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
    id: "book",
    folder: "Children's Book Cover",
    cover: "/projects/Children's Book Cover/tbm.png",
    images: [
      "/projects/Children's Book Cover/1.jpg",
      "/projects/Children's Book Cover/2.png",
      "/projects/Children's Book Cover/3.jpg",
      "/projects/Children's Book Cover/4.png",
      "/projects/Children's Book Cover/5.jpg",
      "/projects/Children's Book Cover/6.png",
    ],
    categoryKey: "editorialIllustration",
    skillKeys: ["illustration", "editorialDesign", "visualNarrative"],
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
