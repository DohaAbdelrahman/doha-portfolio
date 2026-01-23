"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
const Projects = () => {
  const projects = [{
    title: "Job Management System",
    description: "This project is a freelance job board system that allows clients to post job offers and freelancers to apply for them. The system is built using Python and stores data using JSON files instead of a database.",
    keyFeatures: ["User Authentication (Clients & Freelancers)", "Job Posting & Applications", "Client Management & Notifications"],
    technologies: ["Python", "JSON", "Google Cloud Console"],
    image: "https://www.bing.com/th/id/OIP.DJWgxvYRReMosFo4SJaEagHaD4?w=240&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    githubUrl: "https://github.com/DohaAbdelrahman",
    demoUrl: "#"
  }, {
    title: "Hotel Booking Cancellation Prediction System",
    description: "The hospitality industry faces a huge challenge with booking cancellations that affect revenue, occupancy rates, and customer satisfaction. We developed a machine learning solution to predict cancellations using historical and real-time data.",
    keyFeatures: ["Machine Learning Prediction Models", "Real-time Data Processing", "Interactive Dashboard with Streamlit"],
    technologies: ["Python", "Machine Learning", "Streamlit"],
    image: "https://www.bing.com/th/id/OIP.wWML5tVtceiuLrj-tl7zhQHaDt?w=284&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    githubUrl: "https://github.com/DohaAbdelrahman",
    demoUrl: "#"
  }, {
    title: "Exploratory Data Analysis and Machine Learning for Turkish Market Sales",
    description: "Analyze market data to uncover trends, seasonal patterns & product performance. Cleaned 365,000+ records, performed EDA with Python, normalized data to 3NF (SQL), created interactive dashboards, and implemented Random Forest for sales prediction.",
    keyFeatures: ["Cleaned 365,000+ records", "EDA with Python (Pandas, Seaborn)", "Normalized data to 3NF (SQL)", "Interactive Dashboards (Power BI)", "Random Forest for Sales Prediction"],
    technologies: ["Python", "SQL", "EDA", "Machine Learning", "Power BI"],
    image: "https://www.bing.com/th/id/OIP.PmrqeWwi2QglSauMYIanhwHaE8?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    githubUrl: "https://github.com/DohaAbdelrahman",
    demoUrl: "#"
  }];
  return <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent text-center md:text-6xl">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my programming projects, demonstrating expertise in
            data analysis, algorithm design, and software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                {/* Project Image + Overlay */}
                <div className="relative w-full h-48 md:h-60 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.keyFeatures.map((feature, idx) => <li key={idx} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>)}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.technologies.map(tech => <span key={tech} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>)}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 bg-primary text-white hover:bg-primary/90" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>

                    <Button size="sm" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>)}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="https://github.com/DohaAbdelrahman" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Projects;