import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";

const Experience = () => {
  const experiences = [
    {
      title: "AI Scholarship",
      company: "NTI - National Telecommunication Institute",
      location: "Giza, Egypt",
      period: "July 2025 - Sept 2025",
      type: "On-Site",
      description: "Intensive training program focused on core concepts and practical applications of Artificial Intelligence, Machine Learning, and Deep Learning. The program included hands-on projects, collaborative learning, and mentorship from industry professionals.",
      technologies: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "Keras", "NumPy", "Jupyter Notebooks", "Matplotlib", "Seaborn"],
      achievements: [
        "Built and deployed machine learning models for real-world datasets",
        "Completed a capstone project applying deep learning to image classification",
        "Collaborated in a team environment to solve AI-driven problems",
        "Gained strong understanding of supervised and unsupervised learning techniques"
      ]
    },
    {
      title: "Data Science Scholarship",
      company: "ALX Africa",
      location: "Cairo, Egypt",
      period: "May 2025 - Present",
      type: "Remote",
      description: "Wrote Python code for data analysis and machine learning at ALX Africa. Worked with teammates on real projects to improve my skills. Connected with tech professionals across Africa to learn and grow.",
      technologies: ["Python", "Preparing Data", "SQL", "Data Analysis", "Data Visualization", "ML", "Regression", "NLP", "AWS Foundations"],
      achievements: [
        "Professional Foundations learn leadership and professional skills for workplace success",
        "Machine Learning understand algorithms to build predictive, data-driven models.",
        "AWS Cloud Practitioner gain basic AWS and cloud computing knowledge for a career start."
      ]
    },
    {
      title: "Google Data Analysis Scholarship",
      company: "Digital Egypt Pioneers Initiative - DEPI",
      location: "Cairo, Egypt",
      period: "Nov 2024 - May 2025",
      type: "Hybrid",
      description: "The DEPI scholarship is a program from Egypt's Ministry of Communications that helps students and graduates get ready for tech jobs, especially in areas like Data Science.",
      technologies: ["Excel","Python", "Data Analysis", "SQL","Tableau","Power BI","Data Cleaning","Exploratory Data Analysis", "Data Visualization", "Machine Learning"],
      achievements: [
        "Analyzed large datasets to identify trends and patterns",
        "Created comprehensive reports and visualizations",
        "Collaborated with cross-functional teams to drive data-driven decisions",
        "Utilized statistical methods to extract meaningful insights"
    ],
      
    }
  ];

  const getBadgeColor = (type) => {
    switch (type) {
      case "On-Site":
        return "bg-green-500 text-white";
      case "Hybrid":
        return "bg-blue-500 text-white";
      case "Remote":
        return "bg-yellow-400 text-black";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Professional Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A journey through my professional career, highlighting key roles and achievements
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <Card key={index} className="p-6 md:p-8 shadow-lg rounded-2xl border-2 border-primary/40 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-primary">
                  <div className="flex flex-col gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-semibold">{experience.title}</h3>
                        <Badge className={getBadgeColor(experience.type)}>{experience.type}</Badge>
                      </div>

                      <div className="flex flex-col gap-2 mb-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;