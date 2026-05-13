export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-with-nextjs",
    title: "Building Modern Web Apps with Next.js",
    date: "2026-04-15",
    excerpt:
      "A deep dive into building performant web applications using Next.js, TypeScript, and Tailwind CSS.",
    content: `Next.js has become my go-to framework for building modern web applications. With its powerful features like server-side rendering, static site generation, and the App Router, it provides everything you need to build fast, scalable applications.

In this post, I'll share some of the key patterns and practices I've learned while working with Next.js.

## Why Next.js?

Next.js offers a fantastic developer experience with features like:
- File-based routing with the App Router
- Server Components for reduced client-side JavaScript
- Automatic code splitting
- Built-in CSS and image optimization

## Getting Started

The App Router in Next.js 13+ introduces a new way to structure your application. Instead of pages, you use the \`app\` directory with \`page.tsx\` files for routes and \`layout.tsx\` for shared layouts.

## Conclusion

Next.js continues to evolve and improve, making it an excellent choice for modern web development. Whether you're building a portfolio, an e-commerce site, or a full-featured web application, Next.js has the tools you need.`,
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    slug: "python-for-web",
    title: "Python for Web Development: A Practical Guide",
    date: "2026-03-28",
    excerpt:
      "Exploring how Python powers backend systems and why it's a great choice for web development.",
    content: `Python's simplicity and readability make it an excellent choice for web development. Whether you're building APIs, handling data processing, or creating full-stack applications, Python has the tools and libraries you need.

## Why Python?

Python's ecosystem is incredibly rich. With frameworks like Django and Flask for web development, SQLAlchemy for database management, and FastAPI for building modern APIs, Python offers solutions for almost any web development challenge.

## Python in the Backend

For my projects, I typically use Python for:
- Building RESTful APIs with Flask or FastAPI
- Database management and ORMs with SQLAlchemy
- Data processing and analysis
- Authentication and authorization logic

## Conclusion

Python continues to be a powerhouse in web development, and its ecosystem only grows stronger. Whether you're a beginner or an experienced developer, Python has something to offer.`,
    tags: ["Python", "Backend", "SQL"],
  },
  {
    slug: "css-tips",
    title: "Tailwind CSS Tips for Better Workflows",
    date: "2026-03-10",
    excerpt:
      "Practical tips and tricks for using Tailwind CSS effectively in your projects.",
    content: `Tailwind CSS has revolutionized the way I write styles for the web. Its utility-first approach allows for rapid prototyping and consistent design systems.

## Why Utility-First?

The utility-first approach means you build components by composing small, single-purpose classes. This leads to:
- Faster development (no context switching between HTML and CSS)
- More consistent designs
- Smaller CSS bundles (thanks to purging unused styles)

## Key Tips

1. **Use the @apply directive sparingly** — It can lead to unexpected specificity issues
2. **Leverage the theme system** — Customize colors, fonts, and breakpoints in \`tailwind.config\`
3. **Master responsive prefixes** — \`sm:\`, \`md:\`, \`lg:\`, \`xl:\` make responsive design effortless
4. **Combine with CSS variables** — For dynamic theming like dark/light mode

## Conclusion

Tailwind CSS has become an essential tool in my development workflow. Its utility-first approach, combined with the flexibility of CSS variables and custom themes, makes it a powerful choice for modern web development.`,
    tags: ["CSS", "Tailwind", "Frontend"],
  },
];
