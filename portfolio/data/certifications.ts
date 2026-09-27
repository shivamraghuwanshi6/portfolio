export type Cert = {
  title: string;
  issuer: string;
  group: "Job Simulations" | "Cloud & AI" | "Courses";
};

export const certGroups = ["All", "Job Simulations", "Cloud & AI", "Courses"] as const;

export const certifications: Cert[] = [
  { title: "Deloitte Technology Job Simulation", issuer: "Forage", group: "Job Simulations" },
  { title: "TATA GenAI Data Analytics Job Simulation", issuer: "Forage", group: "Job Simulations" },
  { title: "Walmart Software Engineering Job Simulation", issuer: "Forage", group: "Job Simulations" },
  { title: "Wells Fargo Software Engineering / Technology Job Simulation", issuer: "Forage", group: "Job Simulations" },
  { title: "TCS iON Career Edge – Young Professional", issuer: "TCS iON", group: "Job Simulations" },
  { title: "GitHub Copilot", issuer: "Microsoft", group: "Cloud & AI" },
  { title: "Google Cloud Generative AI", issuer: "Google Cloud", group: "Cloud & AI" },
  { title: "Gemini for Google Workspace", issuer: "Google", group: "Cloud & AI" },
  { title: "JavaScript Projects", issuer: "Udemy", group: "Courses" },
  { title: "Complete Python Course", issuer: "Udemy", group: "Courses" },
  { title: "AI Tools: ChatGPT and Midjourney", issuer: "Udemy", group: "Courses" },
];