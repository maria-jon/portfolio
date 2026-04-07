import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects/" }),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        linkLive: z.string(),
        linkGithub: z.string(),
        tags: z.array(z.string()),
        imgSrc: z.string(),
        imgWidth: z.string(),
        imgHeight: z.string(),
        imgAlt: z.string(),
        }),
});

const miniCards = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/miniCards/" }),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        linkLive: z.string(),
        linkGithub: z.string(),
        tags: z.array(z.string()),
    }),
});

const tools = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/intro/tools" }),
    schema: z.object({
        title: z.string(),
        id: z.number(),
    })
});

export const collections = {
    projects,
    miniCards,
    tools,
};