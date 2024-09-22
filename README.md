<div align="center">

<h3>⭐ Leave a star if you like this project! ⭐️</h3>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjetboom%2Fpersonal-site)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jetboom/personal-site)

Check out the [Demo](https://average.website)

</div>

<hr>

## 📌 Table Of Contents

- [Features](#-Features)
- [Roadmap](#-Roadmap)
- [Stack](#-Stack)
- [Running locally](#-Running-Locally)
- [Configure](#-Configure)
- [Categories](#-Adding-a-category)
- [Posts](#-Adding-a-post)
- [Draft](#-Activating-draft-mode)
- [FrontMatter](#-Frontmatter)
- [CMS](#-Tina-CMS)
- [CLI](#-Commands)
- [Contributors](#-Contributors)

## 💪 Features:

- ✅ Markdown & MDX support
- ✅ Resume page to show off skills, experience, education, etc.
- ✅ Semantic HTML
- ✅ Image optimization
- ✅ Mobile responsive
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ [Pagefind](https://pagefind.app/) static search library integration

### Posts

- ✅ Zero-database commenting
- ✅ Related posts
- ✅ Table of contents
- ✅ Draft mode
- ✅ Code blocks with syntax highlighting
- ✅ Share to Linkedin, twitter, dev.to, and easily add more
- ✅ CMS

## ⚙️ Stack

- TypeScript
- [**Astro**](https://astro.build) - Astro is the all-in-one web framework designed for speed.
- [**Tailwind CSS** + **Tailwind-Merge** + **clsx**](https://tailwindcss.com) - Tailwind CSS is a utility-first CSS framework.
- [**Iconify**](https://iconify.design) - Super-easy integration of all popular icon sets.
- [**Eslint**](https://eslint.org) - Linter and code formatting rules.
- [**Search Library**](https://pagefind.app) - Static search library integration.
- [**Motion**](https://motion.dev) - Motion One is the smallest fully-featured animation library for the web.
- [**Giscus**](https://giscus.app) - Disqus-style comments powered by GitHub discussions for a zero-database comment section that you control.
- [**Tina**](https://tina.io) - CMS.

## 👨🏻‍💻 Running Locally

**Recommended extensions for VSCode:**

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).

1. Clone or [fork](https://github.com/jetboom/personal-site/fork) the repository:

```bash
git@github.com:jetboom/personal-site.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm start
```

## 📐 Configure

- Edit the configuration file **src/site.config.ts** for the basic site metadata.
- Update the **astro.config.mjs** file at the root of the project with your own domain.
- Modify the files in the **/public** folder:
  - favicon
  - robots.txt -> update the Sitemap url to your own domain
  - open-graph -> the open-graph is the image that will be displayed when sharing the site link. For posts, the preview image is the post cover.

## 📄 Adding a post

Adding a post is as simple as adding a .md or .mdx file to the posts folder at the path **src/content/posts**. The filename will be used to create the slug/URL of the page.

For example, if you have a file named **jsx-and-react.md**, it will be transformed into: **http://yourdomain.com/post/jsx-and-react/**

## 📝 Activating draft mode

To activate draft mode, add the property **draft: true** to the file, and it will no longer be displayed on the post.

## ⚡️ Frontmatter

## Required properties:

- Title
- Description
- pubDate
- image (post cover)
- category

## 🦙 Tina CMS

By default, this template comes pre-configured with Tina CMS.

Now you can create your posts directly from the CMS without the need to do it manually.

If you decide to use Tina, it's not necessary to add any properties to the Markdown files, Tina does it automatically.

The documentation for Tina CMS can be found [here](https://tina.io/docs/)

> Tina is completely optional, and you can remove it, and it will still function in the same way.

## Optional properties:

- draft (no need to include it, by default it's false)
- tags

> The schema for posts is located at src/content/config.ts. You can modify any parameter, for example, by adding a maximum of 80 characters for titles: title: z.string().max(80).
> For more information, refer to the zod documentation.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`          | Installs dependencies                                                                                                            |
| `pnpm start`            | Starts local dev server at `localhost:4321`                                                                                      |
| `pnpm build`            | Build your production site to `./dist/`                                                                                          |
| `astro sync`            | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm run lint`         | Lint with ESLint                                                                                                                 |

## 👋 Contributors

<a href="https://github.com/jetboom/personal-site/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jetboom/personal-site" />
</a>
