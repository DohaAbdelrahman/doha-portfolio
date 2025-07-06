import { Card, CardContent } from "@/components/ui/card";
import { Code2, Coffee, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, user-friendly solutions"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with designers, developers, and stakeholders"
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Data Analyst and Computer Science student majoring in Information Technology. 
            I love transforming raw data into actionable insights that drive strategic decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card border-border/50 animate-slide-up">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  Currently pursuing my Bachelor's Degree in Computer Science and Information Technology at 
                  Helwan National University. I'm gaining hands-on experience through the Digital Egypt Pioneers 
                  Initiative, where I work as a Data Analysis Intern.
                </p>
                <p className="text-muted-foreground">
                  I'm experienced in data cleaning, exploration, visualization, statistical analysis, and 
                  predictive modeling using Python, SQL, Excel, and Power BI. I focus on translating business 
                  needs into actionable data solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">1+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">2027</div>
                  <div className="text-sm text-muted-foreground">Graduation Year</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;