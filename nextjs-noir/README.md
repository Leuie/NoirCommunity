# NOIR Gaming Community - Next.js Site

A modern, responsive website for the NOIR Gaming Community built with Next.js, Sanity CMS, and Tailwind CSS.

## Features

- **Next.js 15** with App Router for optimal performance
- **Sanity CMS** integration for content management
- **Tailwind CSS** with custom NOIR branding
- **TypeScript** for type safety
- **Responsive design** optimized for all devices
- **SEO optimized** with proper meta tags and structured data

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file with your Sanity configuration:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=qgn02sj5
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── [slug]/         # Dynamic post pages
│   ├── about/          # About page
│   ├── community/      # Community page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # Reusable components
├── lib/               # Utility functions
└── sanity/            # Sanity client configuration
```

## Content Management

Content is managed through Sanity CMS. Access your Sanity Studio at:
[https://qgn02sj5.sanity.studio/](https://qgn02sj5.sanity.studio/)

### Content Types

- **Posts** - Blog posts and articles
- **Authors** - Content creators and writers
- **Community Posts** - User-generated content
- **Team Members** - NOIR team information

## Deployment

The site is configured for static export and can be deployed to any static hosting provider:

```bash
npm run build
```

## Customization

### Branding

The site uses the NOIR brand colors defined in `tailwind.config.ts`:
- Purple: `#a855f7`
- Blue: `#3b82f6`
- Cyan: `#06b6d4`

### Styling

Custom styles are defined in `src/app/globals.css` with Tailwind CSS utilities.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

© 2025 NOIR Gaming Community. All rights reserved.