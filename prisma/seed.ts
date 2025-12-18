import prisma from "@/lib/db";

async function main() {
  const blogPosts = [
    {
      slug: "why-use-tailwindcss",
      title: "Why Use Tailwind CSS?",
      content: `# Why Use Tailwind CSS?
Tailwind CSS is a popular utility-first CSS framework that offers numerous benefits for web development. Here are some reasons why you should consider using it:

## Speed and Consistency
- **Utility Classes**: Write less custom CSS, benefiting from pre-built classes that ensure consistency across your designs.
- **Responsive Design**: Take advantage of Tailwind's responsive utilities to adapt your layout for different screen sizes effortlessly.

## Customization
- **Easy Customization**: Tailwind's configuration options allow you to tailor the framework to fit your specific project requirements, making it highly adaptable.

## Integration with Next.js
- **Next.js Support**: Combine Tailwind CSS with Next.js for a seamless development experience and optimized performance.

### Conclusion
Tailwind CSS is more than just a styling framework; it's a powerful tool that can significantly enhance your web development workflow. Try integrating it into your projects today!`,
    },
    {
      slug: "why-use-next-js",
      title: "Why Use Next.js?",
      content: `# Why Use Next.js?
Next.js is a popular framework for building server-rendered React applications. Here are some reasons why you should consider using it:

## Server-Side Rendering (SSR)
- **Performance**: Next.js optimizes the rendering process, resulting in faster page loads and improved user experience.
- **Static Site Generation (SSG)**: Generate static HTML files at build time, making navigation fast and SEO-friendly.

## Static Site Generation (SSG)
- **Static Site Generation**: Generate static HTML files at build time, making navigation fast and SEO-friendly.

## Server-Side Rendering (SSR)
- **Server-Side Rendering**: Render React components on the server, ensuring consistent data across different user sessions.

## Incremental Static Regeneration (ISR)
- **Incremental Static Regeneration**: Regenerate pages incrementally, optimizing performance and user experience.

### Conclusion
Next.js is a versatile framework that provides a solid foundation for building modern web applications. Whether you're a seasoned developer or just starting, Next.js has you covered!`,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: post,
    });
  }

  console.log("Seed data inserted successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
