import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Award } from "lucide-react";
export const Certifications = () => {
  const certifications = [{
    title: "Google Data Analysts Scholarship",
    issuer: "Digital Egypt Pioneers Initiative - DEPI",
    status: "Active",
    year: "2025",
    credentialId: "DEPI-DA-R2",
    description: "The DEPI scholarship is a program from Egypt's Ministry of Communications that helps students and graduates get ready for tech jobs, especially in areas like Data Science.",
    skills: ["Excel", "Python", "Data Analysis", "SQL", "Tableau", "Power BI", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Machine Learning"],
    verifyUrl: "https://drive.google.com/file/d/1jcC5HyN3MtiE6JEf8LtSp32C9mMBH5UD/view?usp=drive_link",
    embedUrl: "https://drive.google.com/thumbnail?id=1jcC5HyN3MtiE6JEf8LtSp32C9mMBH5UD&sz=w2000"
  },{
    title: "Artificial Intelligence",
    issuer: "National Telecommunication Institute & Huawei",
    status: "Active",
    year: "2025",
    skills: ["Python", "Scikit-learnn", "Machine Learning Algorithm", "NLP", "Neural Networks", "Deep Learning"],
    verifyUrl: "https://drive.google.com/file/d/1qS3vnxXfzcNN3H4LUHhMmZMdDFXWuHnM/view?usp=sharing",
    embedUrl: "https://drive.google.com/thumbnail?id=1qS3vnxXfzcNN3H4LUHhMmZMdDFXWuHnM&sz=w2000"
  }, {
    title: "Professional Foundations Training",
    issuer: "ALX Africa",
    status: "Active",
    year: "2025",
    skills: ["Teamwork", "communication", "Engage in practical projects", "Learn management and innovation", "Problem Solving ", "Critical Thinking"],
    verifyUrl: "https://drive.google.com/file/d/1K5AnDxJEwFDRu4M8y8s9LbO0ibfvtj1y/view?usp=sharing",
    embedUrl: "https://drive.google.com/thumbnail?id=1K5AnDxJEwFDRu4M8y8s9LbO0ibfvtj1y&sz=w2000"
  }, {
    title: "Machine Learning - Summer Training",
    issuer: "NTI - National Telecommunication Institute",
    status: "Active",
    year: "2025",
    skills: ["Python", "Scikit-learn", "Machine Learning", "Neural Networks", "Deep Learning ", "CNNs"],
    verifyUrl: "https://drive.google.com/file/d/1QeVX0XXUeO7ndyQS5eo3fqFfySLbAssD/view?usp=sharing",
    embedUrl: "https://drive.google.com/thumbnail?id=1QeVX0XXUeO7ndyQS5eo3fqFfySLbAssD&sz=w2000"
  
  } ,{
    title: "Huawei ICT Academy – Artificial Intelligence Scholarship",
    issuer: "Huawei ICT Academy-Egypt",
    status: "Active",
    year: "2025",
    credentialId: "ICT20250816000531",
    description: "Successfully completed the ETA Scholarship training program delivered by the National Telecommunication Institute (NTI) in collaboration with Huawei ICT Academy – Egypt.",
    skills: ["Data Analysis", "Machine Learning", "Python", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization"],
    verifyUrl: "https://drive.google.com/file/d/1EqDnMZV-IQoJx8USInegDpQd94jB6lCH/view?usp=drive_link",
    embedUrl: "https://drive.google.com/file/d/1EqDnMZV-IQoJx8USInegDpQd94jB6lCH/preview"
  }, {
    title: "Certificate in Teaching Business English",
    issuer: "Berlitz Egypt",
    status: "Active",
    year: "2025",
    description: "This training enhanced both my language proficiency and my ability to communicate effectively in a professional environment.",
    skills: ["Business English Communication", "Professional Writing", "Presentation Skills"],
    verifyUrl: "https://drive.google.com/file/d/1vmYaZ3C_ymf47Cs5tA_2lC3ryoKTi6nz/view?usp=drive_link",
    embedUrl: "https://drive.google.com/thumbnail?id=1vmYaZ3C_ymf47Cs5tA_2lC3ryoKTi6nz&sz=w2000"
  }];
  return <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-bold mb-4 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-primary py-[10px] text-5xl">
            Certifications
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => <Card key={cert.title} className="p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary flex flex-col">
              {/* Certificate Preview */}
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden border border-primary/20 bg-muted/50">
                <img 
                  src={cert.embedUrl} 
                  alt={`${cert.title} Certificate`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="px-3 py-1 text-sm rounded-full text-primary font-bold bg-primary/20">
                    {cert.status}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {cert.year}
                </div>
              </div>

              {/* Certificate Details */}
              <h3 className="text-lg font-bold mb-1 bg-hero-gradient bg-clip-text line-clamp-2 text-primary">
                {cert.title}
              </h3>
              <p className="mb-2 text-base font-normal text-primary-foreground font-mono">{cert.issuer}</p>
              
              {cert.credentialId && <p className="text-xs text-muted-foreground mb-2">
                  ID: {cert.credentialId}
                </p>}

              

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => <span key={skillIndex} className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full font-medium">
                      {skill}
                    </span>)}
                </div>
              </div>

              {/* Verify Button */}
              <Button variant="outline" size="sm" asChild className="w-full mt-auto">
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </a>
              </Button>
            </Card>)}
        </div>
      </div>
    </section>;
};