import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, CalendarDays, CheckCircle, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analysts Scholarship",
      issuer: "Digital Egypt Pioneers Initiative - DEPI",
      date: "2025",
      credentialId: "ٌDEPI-DA-R2",
      status: "Active",
      description: "The DEPI scholarship is a program from Egypt's Ministry of Communications that helps students and graduates get ready for tech jobs, especially in areas like Data Science.",
      skills: ["Excel","Python", "Data Analysis", "SQL","Tableau","Power BI","Data Cleaning","Exploratory Data Analysis", "Data Visualization", "Machine Learning"],
      verificationUrl: "C:/Users/Doha/OneDrive/Hnu/Doha Abdelrahman Abdelqader.jpg"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-500/10 text-green-500 border-green-500/20"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
      case "Renewing":
        return <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20"><Clock className="w-3 h-3 mr-1" />Renewing</Badge>;
      case "Expired":
        return <Badge variant="destructive" className="bg-red-500/10 text-red-500 border-red-500/20">Expired</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
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
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Professional Certifications</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Validated expertise through industry-recognized certifications and continuous professional development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              <Card className="p-6 shadow-card border-border/50 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">5</h3>
                    <p className="text-sm text-muted-foreground">Total Certifications</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card border-border/50 bg-gradient-to-br from-green-500/5 to-green-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">3</h3>
                    <p className="text-sm text-muted-foreground">Active Certifications</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card border-border/50 bg-gradient-to-br from-accent/5 to-accent/10 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">1</h3>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 md:p-8 shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-semibold">{cert.title}</h3>
                        {getStatusBadge(cert.status)}
                      </div>

                      <div className="flex flex-col gap-2 mb-4 text-muted-foreground">
                        <p className="text-primary font-medium">{cert.issuer}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            <span>Issued: {cert.date}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Skills Validated</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline">{skill}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Credential ID:</span> {cert.credentialId}
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-2 transition-all duration-300 bg-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Verify Certificate
                        </Button>

                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <Card className="p-8 shadow-card border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Commitment to Excellence</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I believe in continuous learning and maintaining the highest standards in my field.
                    These certifications represent my commitment to staying current with industry best practices and emerging technologies.
                  </p>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <Badge variant="outline" className="border-primary/30 text-primary">Cloud Architecture</Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">Container Orchestration</Badge>
                    <Badge variant="outline" className="border-tech-cyan/30 text-tech-cyan">Database Management</Badge>
                    <Badge variant="outline" className="border-tech-green/30 text-tech-green">DevOps Practices</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certifications;