import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, CalendarDays, CheckCircle, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analysts Scholarship",
      issuer: "Digital Egypt Pioneers Initiative - DEPI",
      date: "2025",
      credentialId: "DEPI-DA-R2",
      status: "Active",
      description:
        "The DEPI scholarship is a program from Egypt's Ministry of Communications that helps students and graduates get ready for tech jobs, especially in areas like Data Science.",
      skills: [
        "Excel", "Python", "Data Analysis", "SQL", "Tableau", "Power BI", "Data Cleaning",
        "Exploratory Data Analysis", "Data Visualization", "Machine Learning"
      ],
      verificationUrl: "https://drive.google.com/file/d/1jcC5HyN3MtiE6JEf8LtSp32C9mMBH5UD/view?usp=drive_link"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
            <CheckCircle className="w-3 h-3 mr-1" /> Active
          </Badge>
        );
      case "Renewing":
        return (
          <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
            <Clock className="w-3 h-3 mr-1" /> Renewing
          </Badge>
        );
      case "Expired":
        return (
          <Badge variant="destructive" className="bg-red-500/10 text-red-500 border-red-500/20">
            Expired
          </Badge>
        );
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
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Professional Certifications
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Validated expertise through industry-recognized certifications and continuous professional development
              </p>
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
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarDays className="w-4 h-4" />
                          <span>Issued: {cert.date}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{cert.description}</p>

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

                        {/* زر التحقق بالرابط */}
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Verify Certificate
                        </a>
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

export default Certifications;
