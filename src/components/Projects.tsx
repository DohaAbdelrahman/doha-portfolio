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
      description: `Freelance job board system that allows clients to post job offers and freelancers to apply for them. Built with Python and JSON files instead of a database.`,
      technologies: ["Python", "JSON", "Google Cloud Console"],
      image:
        "https://www.bing.com/th/id/OIP.DJWgxvYRReMosFo4SJaEagHaD4?w=240&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      githubUrl: "https://github.com/DohaAbdelrahman",
    },
    {
      title: "Hotel Booking Cancellation Prediction",
      description:
        "Machine learning solution to predict booking cancellations using historical and real-time data to help hotels optimize revenue and occupancy.",
      technologies: ["Python", "Machine Learning", "Streamlit"],
      image:
        "https://www.bing.com/th/id/OIP.wWML5tVtceiuLrj-tl7zhQHaDt?w=284&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      githubUrl: "https://github.com/DohaAbdelrahman",
    },
    {
      title: "EDA & ML for Turkish Market Sales",
      description: `Analyzed 365k+ market records, performed EDA, normalized data (SQL), built Power BI dashboards, and applied Random Forest for sales prediction.`,
      technologies: ["Python", "SQL", "EDA", "Machine Learning", "Power BI"],
      image:
        "https://www.bing.com/th/id/OIP.PmrqeWwi2QglSauMYIanhwHaE8?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      githubUrl: "https://github.com/DohaAbdelrahman",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my programming projects, demonstrating expertise in
            data analysis, algorithm design, and software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl">
                {/* Project Image with overlay */}
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-purple-100 text-purple-700 text-xs hover:bg-purple-200 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-purple-300 hover:border-purple-600 hover:bg-purple-50"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-purple-600 hover:text-white transition-colors"
            asChild
          >
            <a
              href="https://github.com/DohaAbdelrahman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
