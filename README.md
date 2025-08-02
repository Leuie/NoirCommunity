# NOIR Community Gaming Portal

Welcome to the official repository for the **NOIR Community Gaming Website**, a dynamic hub built to unite gamers, creators, and developers under a shared digital banner. This project is designed to be scalable, content-rich, and community-driven. Powered by modern web technologies.

## Live Site
Visit the production site: [www.noircommunity.com](https://www.noircommunity.com)

## Purpose

The NOIR Community Gaming Portal serves as a central platform for:
- Showcasing community-driven content, events, and media
- Hosting game-related resources, updates, and announcements
- Providing a sleek, immersive experience for gamers and developers alike
- Encouraging collaboration and creativity within the NOIR ecosystem

If using AI to assist with design, make sure this prompt is always preceding your query.
For all designs I ask you to make, have them be beautiful, not cookie cutter. Iterate content that is fully featured and worthy for production.
When using client-side hooks (useState and useEffect) in a component that's being treated as a Server Component by Next.js, always add the "use client" directive at the top of the file.
Do not write code that will trigger this error: "Warning: Extra attributes from the server: %s%s""class,style"
By default, the website template supports JSX syntax with Tailwind CSS classes, the shadcn/ui library, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.
Use icons from lucide-react for logos unless otherwise prompted.

## 🛠Tech Stack

| Technology         | Purpose                                                  |
|--------------------|----------------------------------------------------------|
| **TypeScript**     | Strong typing and scalable codebase                      |
| **React**          | Component-based UI architecture                          |
| **Next.js**        | Routing, server-side rendering, and SEO optimization     |
| **Tailwind CSS**   | Utility-first styling for rapid UI development           |
| **Supabase**       | Backend-as-a-Service for auth and database               |
| **Sanity CMS**     | Headless content management system for and flexibility   |
| **CSS Transitions**| Smooth animations and visual polish                      |

## Who It's For

- **Gamers** looking for a curated, immersive experience
- **NOIR Content Creators** who want to contribute media and updates
- **Developers** interested in contributing to an open-source gaming platform
- **Community Leaders** managing events, announcements, and engagement

## Features

- Real-time content updates via Sanity CMS
- User authentication and data management with Supabase
- Responsive design optimized for desktop and mobile
- Modular architecture for future scalability
- SEO meta + OG tags for discoverability
- Smooth scrolling and page transitions

## To Do

Here’s a running list of upcoming tasks and enhancements:

- [ ] Add favicon for branding consistency
- [ ] Integrate [FullCalendar.js](https://fullcalendar.io/) for event scheduling
- [ ] Aggregate gaming news using NewsAPI with feeds from:
  - IGN, Gamespot, Polygon, Kotaku, Eurogamer, Video Games Chronicle, Rock Paper Shotgun, The Verge Gaming, GamesRadar+, Game Informer
  - Card-based layout with tag filters (MMO, ARPG, MOBA, FPS, RPG, Action, Sports, Indie, TCG)
  - Hover summaries + clickable articles
  - Utilize [news_aggregator](https://github.com/abhinxvz/news_aggregator) for backend logic
- [ ] Integrate Spreadshirt/Shopify for community merchandise (shirts, hoodies, hats)
- [ ] Embed live Twitch/YouTube streams from featured community members
- [ ] Build blog/article section for long-form content
- [ ] Build guide section for long-form content (this may become its own application)
- [ ] Create admin dashboard for content moderation
- [ ] Implement user profiles and avatars
- [ ] Add community forum or discussion board
- [ ] Add dark/light mode toggle
- [ ] Optimize SEO and metadata
- [ ] Write unit and integration tests for key components

---

Feel free to fork, contribute, or reach out with ideas. This project is built for the community, and by the community.

## Social Links

Stay connected with the NOIR Community:

- Threads: `threads.com/@noircommunity`
- Discord: `discord.noircommunity.com`
- YouTube: `youtube.com/@noircommunity`
- Twitch: `twitch.tv/noircommunity`
- Instagram: `@noircommunity`


```markdown
### Adding New Pages

1. Create a new directory in `app/` (e.g., `app/about/`)
2. Add a `page.tsx` file with your component
3. Update navigation in `components/header.tsx` (already done for About page)
```
