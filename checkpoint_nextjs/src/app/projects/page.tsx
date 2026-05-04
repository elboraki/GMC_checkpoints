import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Explore my recent projects and technical work",
};

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, shopping cart, and payment integration.",
    image: "https://placehold.co/600x400/1a1a2e/4a90d9?text=E-Commerce",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop, and team features.",
    image: "https://placehold.co/600x400/1a1a2e/4a90d9?text=Task+App",
    tags: ["React", "Socket.io", "MongoDB", "Express"],
    link: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather application with location-based forecasts, maps, and severe weather alerts.",
    image: "https://placehold.co/600x400/1a1a2e/4a90d9?text=Weather",
    tags: ["TypeScript", "API", "Charts.js", "CSS"],
    link: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects, skills, and contact information with dark theme.",
    image: "https://placehold.co/600x400/1a1a2e/4a90d9?text=Portfolio",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://github.com",
  },
  {
    title: "Algorithm Visualizer",
    description: "An interactive tool for visualizing sorting and pathfinding algorithms with step-by-step animations.",
    image: "https://placehold.co/600x400/1a1a2e/4a90d9?text=Algorithms",
    tags: ["React", "D3.js", "Algorithms"],
    link: "https://github.com",
  },
  {
    title: "Chat Application",
    description: "A real-time messaging platform with group chats, file sharing, and end-to-end encryption.",
    image: "https://placehold.co/600x400/1a1a2e/4a90d9?text=Chat+App",
    tags: ["Node.js", "WebSocket", "Redis", "React"],
    link: "https://github.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Projects
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        Here&apos;s a selection of projects I&apos;ve worked on. Each one represents a unique challenge and learning opportunity.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
