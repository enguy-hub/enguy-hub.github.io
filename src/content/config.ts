import { defineCollection, reference, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.string().default('Other'),
      tags: z.array(z.string()).default([]),
      repo: z.string().url().optional(),
      liveUrl: z
        .string()
        .optional()
        .refine(
          (value) =>
            !value ||
            value.startsWith('http://') ||
            value.startsWith('https://') ||
            value.startsWith('/'),
          { message: 'Must be an absolute or root-relative URL' }
        ),
      apiKey: z.string().optional(),
      status: z.enum(['active', 'incubating', 'archived']).default('active'),
      featured: z.boolean().default(false),
      heroImage: image().optional(),
      relatedPosts: z.array(reference('blogs')).default([])
    })
});

const blogs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string().default('Other'),
    tags: z.array(z.string()).default([]),
    publishedAt: z
      .string()
      .transform((str) => new Date(str))
      .refine((date) => !Number.isNaN(date.getTime()), { message: 'Invalid date' }),
    draft: z.boolean().default(false)
  })
});

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string().default('Research'),
    venue: z.string().optional(),
    publishedAt: z
      .string()
      .transform((str) => new Date(str))
      .refine((date) => !Number.isNaN(date.getTime()), { message: 'Invalid date' }),
    link: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { projects, blogs, papers };
