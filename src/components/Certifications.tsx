import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Office Specialist",
      issuer: "Microsoft",
      date: "2023",
      description: "Comprehensive certification covering advanced features of Microsoft Office Suite including Excel, Word, and PowerPoint.",
      skills: ["Microsoft Excel", "Data Analysis", "Microsoft Word", "Microsoft PowerPoint", "Office Productivity"],
      credentialId: "MOS-2023-DOH",
      status: "Verified"
    }
  ];

  const upcomingCertifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Planned",
      description: "Foundation-level certification demonstrating overall understanding of AWS Cloud."
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      status: "In Progress",
      description: "Comprehensive program covering data analysis, visualization, and business intelligence."
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-hero min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications validating expertise in technology and data analysis
          </p>
        </div>

        {/* Current Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Current Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-primary text-xl mb-2">{cert.name}</CardTitle>
                        <h4 className="text-lg font-semibold text-foreground mb-1">{cert.issuer}</h4>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">Issued: {cert.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border border-green-500/30">
                        {cert.status}
                      </Badge>
                      <Button size="sm" variant="outline" className="border-primary/30 hover:bg-primary/10">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{cert.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-3">Skills Covered:</h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-secondary/50 hover:bg-primary/20 hover:text-primary border border-border/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <strong>Credential ID:</strong> {cert.credentialId}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Upcoming Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingCertifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-primary text-lg mb-2">{cert.name}</CardTitle>
                      <h4 className="text-base font-semibold text-foreground mb-2">{cert.issuer}</h4>
                      <Badge 
                        variant="secondary" 
                        className={cert.status === 'In Progress' 
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" 
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;