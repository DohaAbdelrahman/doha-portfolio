"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Job Management System",
      description: "This project is a freelance job board system that allows clients to post job offers and freelancers to apply for them. The system is built using Python and stores data using JSON files instead of a database.",
      keyFeatures: [
        "User Authentication (Clients & Freelancers)",
        "Job Posting & Applications", 
        "Client Management & Notifications"
      ],
      technologies: ["Python", "JSON", "Google Cloud Console"],
      image: "/lovable-uploads/464c8acf-c74f-47dc-9821-6c877f354052.png",
      githubUrl: "https://github.com/DohaAbdelrahman",
      demoUrl: "#"
    },
    {
      title: "Hotel Booking Cancellation Prediction System", 
      description: "The hospitality industry faces a huge challenge with booking cancellations that affect revenue, occupancy rates, and customer satisfaction. We developed a machine learning solution to predict cancellations using historical and real-time data.",
      keyFeatures: [
        "Machine Learning Prediction Models",
        "Real-time Data Processing",
        "Interactive Dashboard with Streamlit"
      ],
      technologies: ["Python", "Machine Learning", "Streamlit"],
      image: "/lovable-uploads/464c8acf-c74f-47dc-9821-6c877f354052.png",
      githubUrl: "https://github.com/DohaAbdelrahman",
      demoUrl: "#"
    },
    {
      title: "Exploratory Data Analysis and Machine Learning for Turkish Market Sales",
      description: "Analyze market data to uncover trends, seasonal patterns & product performance. Cleaned 365,000+ records, performed EDA with Python, normalized data to 3NF (SQL), created interactive dashboards, and implemented Random Forest for sales prediction.",
      keyFeatures: [
        "Cleaned 365,000+ records",
        "EDA with Python (Pandas, Seaborn)", 
        "Normalized data to 3NF (SQL)",
        "Interactive Dashboards (Power BI)",
        "Random Forest for Sales Prediction"
      ],
      technologies: ["Python", "SQL", "EDA", "Machine Learning", "Power BI"],
      image: "/lovable-uploads/464c8acf-c74f-47dc-9821-6c877f354052.png", 
      githubUrl: "https://github.com/DohaAbdelrahman",
      demoUrl: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my programming projects, demonstrating expertise in
            data analysis, algorithm design, and software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/90 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(147,51,234,0.35)] group overflow-hidden">
                {/* Project Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-primary/20 text-primary border-primary/30 text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary text-xs"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3 w-3 mr-2" />
                        View Code
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-xs"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
