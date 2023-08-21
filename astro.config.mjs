import { defineConfig } from "astro/config";
import activeHandout from "@insperedu/active-handout";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [
    activeHandout({
      title: "Developer Life",
      description:
        "Disciplina do 1o semestre do curso de Ciência da Computação do Insper",
      auth: true,
      lang: "pt",
    }),
  ],
  vite: {
    server: {
      fs: {
        // We use this for development
        allow: ["../.."],
      },
    },
  },
});
