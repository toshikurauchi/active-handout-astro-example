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
      useEmailAuth: true,
      useGoogleAuth: true,
      useGitHubAuth: true,
      lang: "pt",
      authPageImage: "/img/insper.png",
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
