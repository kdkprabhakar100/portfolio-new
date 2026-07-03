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
    eyebrow: "Fitness experience",
    description:
      "A focused fitness product designed around workout guidance, useful progress information and an interface that keeps the user moving forward.",
    result:
      "A clearer and more motivating experience for planning and tracking fitness activity.",
    stack: ["Next.js", "Express", "MongoDB", "Charts", "REST API"],
    visual: "fitness",
  },
  {
    number: "03",
    title: "WasteGuard",
    eyebrow: "Smart operations dashboard",
    description:
      "A waste-management interface that turns reporting, status monitoring and operational information into a visual system that is easier to understand.",
    result:
      "Faster access to meaningful operational information and clearer reporting workflows.",
    stack: ["React", "Firebase", "GSAP", "Analytics", "Responsive UI"],
    visual: "waste",
  },
];
