import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Award } from "lucide-react";
export const Certifications = () => {
  const certifications = [
    {
    title: "Google Data Analysts Scholarship",
    issuer: "Digital Egypt Pioneers Initiative - DEPI",
    status: "Active",
    year: "2025",
    credentialId: "DEPI-DA-R2",
    description: "The DEPI scholarship is a program from Egypt's Ministry of Communications that helps students and graduates get ready for tech jobs, especially in areas like Data Science.",
    skills: ["Excel", "Python", "Data Analysis", "SQL", "Tableau", "Power BI", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Machine Learning"],
    verifyUrl: "https://drive.google.com/file/d/1jcC5HyN3MtiE6JEf8LtSp32C9mMBH5UD/view?usp=drive_link"
  }, 
  {
    title: "Huawei ICT Academy – Artificial Intelligence Scholarship",
    issuer: "Huawei ICT Academy-Egypt",
    status: "Active",
    year: "2025",
    credentialId: "HCIA-AI V4.0",
    description: "Successfully completed the ETA Scholarship training program delivered by the National Telecommunication Institute (NTI) in collaboration with Huawei ICT Academy – Egypt.",
    skills: ["Data Analysis", "Machine Learning", "Python", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization"],
    verifyUrl: "https://drive.google.com/file/d/1EqDnMZV-IQoJx8USInegDpQd94jB6lCH/view?usp=drive_link"
  }, 
  {
    title: "Certificate in Teaching Business English",
    issuer: "Berlitz Egypt",
    status: "Active",
    year: "2025",
    description: "This training enhanced both my language proficiency and my ability to communicate effectively in a professional environment.",
    skills: ["Business English Communication", "Professional Writing", "Presentation Skills"],
    verifyUrl: "https://drive.google.com/file/d/1vmYaZ3C_ymf47Cs5tA_2lC3ryoKTi6nz/view?usp=drive_link"
  }];
  return <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 bg-clip-text bg-primary text-primary">Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Certified expertise with continuous learning
          </p>
        </div>

        <div className="grid gap-8">
          {certifications.map((cert, index) => <Card key={cert.title} className="p-8 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Certificate Icon & Status */}
                <div className="flex flex-col items-center lg:items-start space-y-4">
                  <div className="p-4 rounded-full bg-primary/20">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-center lg:text-left">
                    <span className="px-3 py-1 text-sm rounded-full text-primary font-bold bg-inherit">
                      {cert.status}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      Issued: {cert.year}
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="lg:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 bg-hero-gradient bg-clip-text text-transparent">
                      {cert.title}
                    </h3>

                    <p className="text-lg text-foreground mb-1">{cert.issuer}</p>
                    {cert.credentialId && <p className="text-sm text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </p>}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Validated */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Skills Validated</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium transition-colors hover:bg-primary/30">
                          {skill}
                        </span>)}
                    </div>
                  </div>

                  {/* Verify Certificate Button */}
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};