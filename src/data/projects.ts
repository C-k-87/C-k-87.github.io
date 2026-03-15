import p1 from "../assets/projects/p1.jpg"
import p2 from "../assets/projects/p1.jpg"

export type ProjectType = {
  title: string
  tagline: string
  content: string
  tech: string[]
  image: string
}

// Array of all projects
export const projects: ProjectType[] = [
  {
    title: "Portfolio Website",
    tagline: "My personal portfolio",
    content: "There’s a number of advanced typographic features that can be customized. These include a font size multiplier for certain components, font style, letter spacing, and leading trim. For example, you can customize the headings to render with a relatively larger font size than your default font, different leading trim values, and tighter letter spacing:",
    tech: ["React", "TypeScript", "Radix UI", "Vite"],
    image: p1
  },
  {
    title: "Chat App",
    tagline: "Real-time messaging",
    content: "There’s a number of advanced typographic features that can be customized. These include a font size multiplier for certain components, font style, letter spacing, and leading trim. For example, you can customize the headings to render with a relatively larger font size than your default font, different leading trim values, and tighter letter spacing:",
    tech: ["React", "Firebase", "CSS"],
    image: p2
  },
]