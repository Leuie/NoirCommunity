<p align="center"><img src="https://github.com/Leuie/NoirCommunity/blob/main/public/N.png?raw=true" alt="NOIR" width="20%" /></p>

![Tests](https://img.shields.io/github/actions/workflow/status/Leuie/NoirCommunity/tests.yml?label=tests&color=brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/Leuie/NoirCommunity?color=brightgreen)
![Contributors](https://img.shields.io/github/contributors/Leuie/NoirCommunity?color=blue)


# NOIR Community Gaming Portal


## About
Welcome to the official repository for the **NOIR Community Gaming Website**, a dynamic hub built to unite gamers, creators, and developers under a shared digital banner. This project is designed to be scalable, content-rich, and community-driven. Powered by modern web technologies.

## Live Site
Visit the production site: [www.noircommunity.com](https://www.noircommunity.com)

## Purpose

The NOIR Community Gaming Portal serves as a central platform for:
- Showcasing community-driven content, events, and media
- Hosting game-related resources, updates, and announcements
- Providing a sleek, immersive experience for gamers and developers alike
- Encouraging collaboration and creativity within the NOIR ecosystem

## Tech Stack

| Technology         | Purpose                                                  |
|--------------------|----------------------------------------------------------|
| **TypeScript**     | Strong typing and scalable codebase                      |
| **React**          | Component-based UI architecture                          |
| **Next.js**        | Routing, server-side rendering, and SEO optimization     |
| **Tailwind CSS**   | Utility-first styling for rapid UI development           |
| **MondoDB Atlas**  | Backend-as-a-Service for auth and database               |
| **Payload CMS**    | Self-hosted headless CMS for content management          |
| **CSS Transitions**| Smooth animations and visual polish                      |

## Who It's For

- **Gamers** looking for a curated, immersive experience
- **NOIR Content Creators** who want to contribute media and updates
- **Developers** interested in contributing to an open-source gaming platform
- **Community Leaders** managing events, announcements, and engagement

## Features

- Real-time content updates via Payload CMS
- User authentication and data management with Supabase
- Responsive design optimized for desktop and mobile
- Modular architecture for future scalability
- SEO meta + OG tags for discoverability
- Smooth scrolling and page transitions

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Leuie/NoirCommunity.git
   cd NoirCommunity
   npm install
   ```

2. **Set up MongoDB:**
   
   **Option A: MongoDB Atlas (Recommended for development)**
   - Sign up at https://www.mongodb.com/atlas
   - Create a free cluster
   - Get your connection string
   
   **Option B: Local MongoDB**
   ```bash
   # macOS
   brew install mongodb-community
   brew services start mongodb-community
   
   # Ubuntu/Debian  
   sudo apt-get install mongodb
   sudo systemctl start mongodb
   ```

3. **Set up environment variables:**
   Create a `.env.local` file with your configuration:
   ```
   # Payload CMS
   PAYLOAD_SECRET=your-secret-key-here
   DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/noir-community
   NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3001
   ```

4. **Start Payload CMS server:**
   ```bash
   npm run payload:dev
   ```

5. **Run the Next.js development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   - Next.js app: [http://localhost:3000](http://localhost:3000)
   - Payload admin: [http://localhost:3001/admin](http://localhost:3001/admin)

## Content Management

Content is managed through Payload CMS. Access your Payload admin panel at:
[http://localhost:3001/admin](http://localhost:3001/admin)

### Content Types

- **Posts** - Blog posts and articles
- **Community Posts** - User-generated content
- **Team Members** - NOIR team information
- **Media** - File uploads and images

## To Do

Here's a running list of upcoming tasks and enhancements:

- [x] Add favicon for branding consistency
- [x] Replace Sanity CMS with Payload CMS
- [ ] Set up MongoDB database for Payload
- [ ] Create initial admin user for Payload
- [ ] Implement rich text rendering for blog posts

---

Feel free to fork, contribute, or reach out with ideas. This project is built for the community, and by the community.

## Social Links

Stay connected with the NOIR Community:

- Threads: `threads.com/@noircommunity`
- Discord: `discord.noircommunity.com`
- YouTube: `youtube.com/@noircommunity`
- Twitch: `twitch.tv/noircommunity`
- Instagram: `@noircommunity`

## Contributing

```Important Prompt
### If you are using AI to assist with design and pull requests. Make sure this prompt is always preceding your initial query.

For all designs I ask you to make, have them be beautiful, not cookie cutter. Iterate content that is fully featured and worthy for production.
When using client-side hooks (useState and useEffect) in a component that's being treated as a Server Component by Next.js, always add the "use client" directive at the top of the file.
Do not write code that will trigger this error: "Warning: Extra attributes from the server: %s%s""class,style"
By default, the website template supports JSX syntax with Tailwind CSS classes, the shadcn/ui library, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.
Use icons from lucide-react for logos unless otherwise prompted.
```

```markdown
### Adding New Pages

1. Create a new directory in `app/` (e.g., `app/about/`)
2. Add a `page.tsx` file with your component
3. Update navigation in `components/header.tsx` (already done for About page)
```
Please read through our contribution guidelines before starting a pull request. We welcome contributions of all kinds, not just code! If you're stuck for ideas, look for the good first issue label on issues in the repository. If you have any questions about the project, feel free to ask them on the community Discord. Before creating your own issue or pull request, always check to see if one already exists! Don't rush contributions, take your time and ensure you're doing it correctly.