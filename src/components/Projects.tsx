"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Job Management System",
      description: ` This project is a freelance job board system that allows clients to post job offers and freelancers to apply for them. The system is built using Python and stores data using JSON files instead of a database.
          Key Features:
          • User Authentication (Clients & Freelancers)  
          • Job Posting & Applications  
          • Client Management & Notifications  
         `,
      technologies: ["Python", "JSON", "Google Cloud Console"],
      image:
        "https://www.bing.com/th/id/OIP.DJWgxvYRReMosFo4SJaEagHaD4?w=240&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      githubUrl: "https://github.com/DohaAbdelrahman",
    },
    {
      title: "Hotel Booking Cancellation Prediction System",
      description:
        "The hospitality industry faces a huge challenge with booking cancellations that affect revenue, occupancy rates, and customer satisfaction. We developed a machine learning solution to predict cancellations using historical and real-time data.",
      technologies: ["Python", "Machine Learning", "Streamlit"],
      image:
        "https://www.bing.com/th/id/OIP.wWML5tVtceiuLrj-tl7zhQHaDt?w=284&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      githubUrl: "https://github.com/DohaAbdelrahman",
    },
    {
      title:
        "Exploratory Data Analysis and Machine Learning for Turkish Market Sales",
      description: `Analyze market data to uncover trends, seasonal patterns & product performance.  
          🔹 What we did:  
          • Cleaned 365,000+ records  
          • EDA with Python (Pandas, Seaborn)  
          • Normalized data to 3NF (SQL)  
          • Interactive Dashboards (Power BI)  
          • Random Forest for Sales Prediction  
      `,
      technologies: ["Python", "SQL", "EDA", "Machine Learning", "Power BI"],
      image:
        "https://www.bing.com/th/id/OIP.PmrqeWwi2QglSauMYIanhwHaE8?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      githubUrl: "https://github.com/DohaAbdelrahman",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                {/* Project Image + Overlay */}
                <div className="relative w-full h-48 md:h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground whitespace-pre-line">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-3">
                    <Button
                      size="sm"
                      className="bg-primary text-white hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a
              href="https://github.com/DohaAbdelrahman"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
