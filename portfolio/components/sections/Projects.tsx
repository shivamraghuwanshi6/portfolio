export type Project = {
  name: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  live?: string;
  accent: string; // gradient theme
};

export const featuredProjects: Project[] = [
  {
    name: "FlickSuggester",
    category: "Full Stack / Movie Recommendation Platform",
    description:
      "A full-stack movie and series discovery platform to explore content, manage watchlists, view trailers, write reviews, and get recommendations.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT", "JavaScript"],
    features: [
      "Movie discovery, search and filtering",
      "Series exploration and movie details",
      "Watchlist and user authentication",
      "Reviews, recommendations, trailers",
      "User profile and admin functionality",
    ],
    github: "https://github.com/shivamraghuwanshi6/flicksuggester",
    accent: "from-rose-600/30 via-amber-500/10 to-transparent",
  },
  {
    name: "AI Resume Job Matcher",
    category: "Artificial Intelligence / NLP / Full Stack",
    description:
      "An AI-powered system that analyzes a resume against a job description and calculates how well the candidate matches the requirements.",
    tech: [
      "Python", "Pandas", "NumPy", "Scikit-learn", "NLP",
      "Sentence Transformers", "FastAPI", "React", "PostgreSQL", "Docker", "MLflow",
    ],
    features: [
      "Resume PDF parsing and job description analysis",
      "Skill extraction and semantic matching",
      "Resume-job similarity and match score",
      "Missing skill detection and recommendations",
      "API-based backend",
    ],
    github: "https://github.com/shivamraghuwanshi6/AI-Resume-Job-Matcher",
    accent: "from-violet-600/30 via-cyan-500/10 to-transparent",
  },
  {
    name: "MLOps Taxi Prediction",
    category: "Machine Learning / MLOps",
    description:
      "A machine learning project that predicts taxi trip duration and demonstrates an end-to-end MLOps workflow.",
    tech: [
      "Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI",
      "Docker", "MLflow", "Prefect", "Prometheus",
    ],
    features: [
      "Data preprocessing and model training",
      "Prediction API",
      "Model tracking with MLflow",
      "Dockerized deployment",
      "Monitoring and MLOps pipeline",
    ],
    accent: "from-cyan-500/30 via-blue-600/10 to-transparent",
  },
  {
    name: "Real Estate ML Engine",
    category: "Machine Learning / Web Application",
    description:
      "A machine learning-based real estate platform that estimates prices from property features and provides classification insights through an interactive web interface.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI", "JavaScript", "Docker"],
    features: [
      "House price prediction and classification",
      "ML metrics",
      "Interactive UI",
      "Property and floor-plan visualization",
      "Deployment-ready architecture",
    ],
    accent: "from-emerald-500/30 via-teal-500/10 to-transparent",
  },
];

export const otherProjects = [
  {
    name: "Medical Store Management System",
    description:
      "A Java-based system for managing medicines, inventory, and store operations.",
    tech: ["Java", "MySQL"],
  },
  { name: "Swing Student Management System", description: "", tech: [] as string[] },
  { name: "Tkinter Task Manager", description: "", tech: [] as string[] },
  { name: "NutriAI Smart Diet Planner", description: "", tech: [] as string[] },
  { name: "SRM Student Chatbot", description: "", tech: [] as string[] },
  { name: "TrimTime", description: "", tech: [] as string[] },
];