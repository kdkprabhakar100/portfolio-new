export type Project = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  result: string;
  stack: string[];
  github?: string;
  live?: string;
  visual: "salon" | "fitness" | "waste";
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Nirjara Beauty Salon",
    eyebrow: "Full-stack business platform",
    description:
      "A complete digital system for a beauty business, combining service discovery, appointment booking, products, courses, events, blogs and administration.",
    result:
      "One connected platform instead of separate tools for content, bookings and commerce.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/kdkprabhakar100/NirjaraBeautySalon",
    visual: "salon",
  },
  {
    number: "02",
    title: "FitGenius",
    eyebrow: "Fitness application",
    description:
      "A multi-part fitness product designed around workout guidance, useful progress information and a more motivating health journey.",
    result:
      "A structured application bringing frontend, backend and mobile-oriented fitness features into one project.",
    stack: ["JavaScript", "Node.js", "Java", "Python", "REST API"],
    github: "https://github.com/kdkprabhakar100/FitGenius",
    visual: "fitness",
  },
  {
    number: "03",
    title: "WasteGuard",
    eyebrow: "Waste-management system",
    description:
      "A Java-based waste-management project focused on organizing core data and operational workflows into a more structured system.",
    result:
      "A practical engineering project exploring how software can support cleaner and more organized operations.",
    stack: ["Java", "Data Models", "System Design", "Operations"],
    github: "https://github.com/kdkprabhakar100/WasteGuard",
    visual: "waste",
  },
];
