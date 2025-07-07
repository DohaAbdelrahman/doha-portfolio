import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Data Analysis",
      skills: [
        { name: "SQL", level: 85 },
        { name: "Excel", level: 95 },
        { name: "Power BI", level: 85 },
        { name: "Statistical Analysis", level: 80 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "Data Visualization", level: 82 },
        { name: "Machine Learning", level: 75 },
        { name: "Business Intelligence", level: 80 }
      ]
    }
  ];

  const technologies = [
    "Python", "Java", "C++", "HTML/CSS", "JavaScript", "SQL", 
    "Microsoft Excel", "PowerPoint", "Power BI", "Word", "Data Analysis", 
    "Statistical Analysis", "Data Visualization", "Machine Learning",
    "Business Intelligence", "Data Cleaning"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#cc66ff] via-[#e1bee7] to-[#f48fb1] bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable applications
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{ 
                        animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s` 
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <Card className="bg-gradient-card border-border/50 animate-slide-up">
          <CardHeader>
            <CardTitle className="text-center text-2xl bg-gradient-to-r from-[#cc66ff] via-[#e1bee7] to-[#f48fb1] bg-clip-text text-transparent">Technologies I Work With</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="bg-secondary/50 hover:bg-primary/20 hover:text-primary border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;