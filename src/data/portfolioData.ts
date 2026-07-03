import AiExpense from "../assets/Ai_Expense.png";
import Botriq from "../assets/Botriq.jpeg"

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: "talk" | "award" | "competition";
  link?: string;
  event?: string;
  year?: string;
  details?: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  profileImageUrl: string | null;
}

export const personalInfo: PersonalInfo = {
  name: "Raja Yadav",
  title: "Full Stack Developer",
  bio: "Full Stack Developer with 2+ years of industry experience building modern web and mobile applications. Passionate about creating intuitive user experiences while developing scalable frontend architectures and robust backend services. Experienced in transforming business requirements into production-ready solutions using modern JavaScript technologies and Agile development practices.",
  location: "Indore, Madhya Pradesh, India",
  email: "rajayadav12061@gmail.com",
  // PLACEHOLDER: resume lists "LINKEDIN" without a URL — replace with your real profile link.
  linkedin: "https://linkedin.com/in/raja-yadav-906073283",
  // PLACEHOLDER: no GitHub URL on the resume — replace with your real GitHub profile.
  github: "https://github.com/Raja1260?tab=repositories",
  // PLACEHOLDER: no profile photo supplied — swap for your real headshot.
  profileImageUrl: "https://placehold.co/600x600?text=Raja+Yadav",
};

export const achievements: Achievement[] = [
  // Education only — postgraduation and graduation from the resume.
  {
    id: "1",
    title: "Master of Computer Application (MCA)",
    description:
      "Postgraduate degree in Computer Application with a strong focus on software engineering and full-stack development.",
    type: "award",
    event: "SGSITS, Indore",
    year: "2022 – 2024",
    details: "GPA: 7.91 / 10",
    icon: "🎓",
  },
  {
    id: "2",
    title: "Bachelor of Science (Computer Science)",
    description:
      "Undergraduate degree in Computer Science building foundations in programming, data structures, and web technologies.",
    type: "award",
    event: "SPIPS, Indore",
    year: "2019 – 2022",
    details: "GPA: 8.21 / 10",
    icon: "🎓",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Expense Handler",
    description:
      "Full-stack AI-powered expense platform with multi-account management, budgets, AI receipt scanning, transaction CRUD, and automated monthly email reports. Increased financial tracking efficiency by 50% through AI-driven automation and scheduled workflows.",
    technologies: [
      "Next.js",
      "Node.js",
      "Prisma ORM",
      "Supabase",
      "Clerk",
      "ShadCN",
      "Inngest",
      "Arcjet",
      "Recharts",
      "Gemini AI",
    ],
    // PLACEHOLDER image — replace with a real screenshot of the project.
    imageUrl: AiExpense,
    liveUrl: "https://example.com/ai-expense-handler",
    githubUrl: "https://github.com/Raja1260/AiExpenseHandler",
    featured: true,
  },
  {
    id: "2",
    title: "CertifyMe – Workflow Platform",
    description:
      "Full-stack workflows across 4+ modules including onboarding, property forms, document handling, and verification. Engineered a toggle-based AI chatbot assistant for contextual form guidance with 10+ field-level validation and error-handling checks. (Built at Blucursor Infotech.)",
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "AI Chatbot", "Mongo-DB", "Grafana", "Asana", "S3 Bucket"],
    // PLACEHOLDER image — replace with a real screenshot of the project.
    imageUrl: "https://placehold.co/600x400?text=CertifyMe",
    // PLACEHOLDER link — replace with a real URL if available.
    featured: true,
  },
  {
    id: "3",
    title: "Botriq – Waiter Robot System",
    description:
      "Delivered the Botriq waiter-robot system end to end across 2 apps: a React Native tablet app handling multiple robot command workflows (REST API, AOA integration, Gradle bundling) and a React web admin portal for real-time location control. (Built at Blucursor Infotech.)",
    technologies: ["React Native", "React.js", "REST APIs", "AOA", "Gradle","Web Socket", "TypeScript"],
    // PLACEHOLDER image — replace with a real screenshot of the project.
    imageUrl: Botriq,
    featured: true,
  },
  {
    id: "4",
    title: "Piemind – Personnel Tracking Dashboards",
    description:
      "Built 3+ interactive dashboards and personnel-tracking flows implementing activity logs and real-time alerts, while resolving 20+ recurring UI issues. (Built at Blucursor Infotech.)",
    technologies: ["React.js", "REST APIs", "Real-time Alerts", "React-Redux", "Figma AI", "Tailwind CSS"],
    // PLACEHOLDER image — replace with a real screenshot of the project.
    imageUrl: "https://placehold.co/600x400?text=Piemind+Dashboards",
    featured: false,
  },
  {
    id: "5",
    title: "Expense Management System (HRMS)",
    description:
      "Expense Management System with dynamic forms, multi-step approval workflows, and real-time reimbursements that reduced manual processing effort. Part of a 5+ module HRMS platform. (Built at Fincoopers Capital.)",
    technologies: ["Next.js", "MUI", "RBAC", "REST APIs", "AI Workflow", "Context API"],
    // PLACEHOLDER image — replace with a real screenshot of the project.
    imageUrl: "https://placehold.co/600x400?text=Expense+Management",
    featured: false,
  },
  {
    id: "6",
    title: "Gas Metering Data Analysis",
    description:
      "Analyzed large-scale gas metering data and surfaced actionable insights, identifying discrepancies that reduced wastage by 15%.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    // PLACEHOLDER image — replace with a real screenshot of the project.
    imageUrl: "https://placehold.co/600x400?text=Gas+Metering+Analysis",
    // PLACEHOLDER link — replace with a real repo URL if available.
    featured: false,
  },
];

export const skills: Skill[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "Python",
    ],
  },
  {
    category: "Styling & UI",
    items: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MUI",
      "ShadCN",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    category: "State, APIs & Databases",
    items: [
      "Redux",
      "Context API",
      "REST APIs",
      "Prisma ORM",
      "MongoDB",
      "MySQL",
      "Supabase",
      "JWT Authentication",
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Docker",
      "CI/CD",
      "AWS",
      "Vercel",
      "GitHub Copilot",
      "Generative AI",
      "Gemini API",
      "Agile",
      "Claude Code",
      "Kiro"
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Blucursor Infotech Pvt Ltd",
    position: "Software Development Engineer",
    duration: "Nov 2025 - Jun 2026",
    description: [
      "Developed full-stack workflows for CertifyMe across 4+ modules — onboarding, property forms, document handling, and verification — using Next.js, Node.js, and Express.js with REST APIs.",
      "Engineered a toggle-based AI chatbot assistant for contextual form guidance, adding 10+ field-level validation and error-handling checks that improved submission accuracy.",
      "Built 3+ interactive dashboards and personnel-tracking flows on the Piemind platform, implementing activity logs and real-time alerts while resolving 20+ recurring UI issues.",
      "Delivered the Botriq waiter-robot system end to end across 2 apps: a React Native tablet app handling multiple robot command workflows (REST API, AOA integration, Gradle bundling) and a React web admin portal for real-time location control.",
      "Optimized the web and mobile experience of Billsora across 3+ screen sizes, improving responsiveness, refining usability, and resolving 15+ UI bugs.",
    ],
    technologies: [
      "React.js", "Node.js", "Express.js", "REST APIs", "AI Chatbot", "Mongo-DB", "Grafana", "Asana", "S3 Bucket",
      "React Native","AOA", "Gradle","Web Socket", "TypeScript"
    ],
  },
  {
    id: "2",
    company: "Fincoopers Capital Pvt Ltd",
    position: "Software Development Engineer",
    duration: "May 2024 - Oct 2025",
    description: [
      "Built 5+ core modules for an HRMS platform with Next.js and MUI, including a Careers page, RBAC-based interview scheduling, role-based PDF generation, and document management.",
      "Developed an Expense Management System with dynamic forms, multi-step approval workflows, and real-time reimbursements, reducing manual processing effort.",
      "Designed reusable React UI components for the Vendor Management system (CommandX), accelerating development speed and enforcing design consistency across the product.",
      "Integrated chatbot support in Finexe using Axios and improved LOS performance by resolving 50+ UI bugs and optimizing frontend logic.",
    ],
    technologies: ["Next.js", "MUI", "Axios", "RBAC", "REST APIs", "AI Workflow", "Context API"
    ],
  },
  {
    id: "3",
    company: "Geniehub Solutions Pvt Ltd",
    position: "Frontend Developer Intern",
    duration: "Jan 2024 - Apr 2024",
    description: [
      "Built responsive, mobile-first UIs with React and Tailwind CSS, ensuring consistent rendering across devices and browsers.",
      "Integrated the Razorpay payment gateway, enabling 1,000+ secure subscription transactions.",
      "Optimized frontend and API performance, reducing page load times by approximately 25%.",
    ],
    technologies: ["React", "Tailwind CSS", "Razorpay", "REST APIs"],
  },
];
