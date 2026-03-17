import p1 from "../assets/projects/p1.png"
import p2 from "../assets/projects/p2.png"
import p3 from "../assets/projects/p3.png"
import type { IconName } from "tech-stack-icons"

export type ProjectType = {
  title: string
  tagline: string
  content: string
  tech: IconName[]
  image: string
  git? : string
}

// Array of all projects
export const projects: ProjectType[] = [
  {
    title: "Portfolio Website",
    tagline: "My personal portfolio",
    content: "This project is a personal portfolio website developed to showcase my projects, research, and technical experience. The site was built using React with TypeScript and Vite for a fast and modern development environment, with Radix UI used to implement accessible and modular interface components. The website is deployed using GitHub Pages, providing a lightweight and easily maintainable platform for presenting my work, project summaries, and professional information online.",
    tech: ["react", "typescript", "radixui", "vitejs"],
    image: p1,
    git: "https://github.com/C-k-87/C-k-87.github.io",
  },
  {
    title: "Sri Tel",
    tagline: "Simulated Telco Application",
    content: "SriTel is a mock telecommunications platform developed as a university project to simulate the architecture and behaviour of a real-world telco web application. The system was designed using a microservices architecture with polyglot persistence, enabling different services to operate independently while managing their own data stores. Built with Java (Spring Boot), Node.js, Socket.IO, and RabbitMQ, the platform demonstrates event-driven communication between services through message brokers, allowing the simulation of asynchronous telecom-style transactions and real-time interactions within a distributed system.",
    tech: ["spring", "nodejs", "rabbitmq", "socketio"],
    image: p2,
    git: "https://github.com/C-k-87/csc4222-sritel"
  },
  {
    title: "Memory Augmentation for Quantized LLM Agents",
    tagline: "Vector Memory Augmented code generation agents",
    content: "This research explores methods to enhance the coding capabilities of locally deployed, quantized LLMs by augmenting them with persistent memory. Using Python with the llama.cpp framework and ChromaDB, an RL-based algorithm was designed as an extension of the Reflexion approach, enabling an LLM agent to store and retrieve contextual experiences through a vector DB. The system aimed to improve code generation performance of small locally run models. Its effectiveness was evaluated using the OpenAI HumanEval benchmark, measuring improvements in problem-solving accuracy for programming tasks.",
    tech: ["python", "openai"],
    image: p3,
    git: "https://github.com/C-k-87/csc4046-research-project.git"
  },
]