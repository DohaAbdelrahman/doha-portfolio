import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Al-Ahliyya Amman University",
      location: "Amman, Jordan",
      period: "2021 - Present",
      status: "In Progress",
      gpa: "Excellent Academic Standing",
      description: "Comprehensive study of computer science fundamentals including programming, algorithms, data structures, and software engineering principles.",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering",
        "Machine Learning",
        "Statistics",
        "Programming Languages"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-hero min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic foundation building expertise in computer science and data analysis
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-primary text-xl mb-2">{edu.degree}</CardTitle>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{edu.institution}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/30">
                      {edu.status}
                    </Badge>
                    <div className="text-sm text-primary font-medium">{edu.gpa}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{edu.description}</p>
                
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course) => (
                      <Badge 
                        key={course} 
                        variant="secondary" 
                        className="bg-secondary/50 hover:bg-primary/20 hover:text-primary border border-border/50"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;