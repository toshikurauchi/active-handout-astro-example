import { sequence } from "astro:middleware";
import activeHandoutMiddleware from "@toshikurauchi/active-handout/middleware/index.ts";

export const onRequest = sequence(activeHandoutMiddleware);
