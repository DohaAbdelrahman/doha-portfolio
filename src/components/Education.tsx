import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";

const Education = () => {
  const education = [
    {
      institution: "Helwan National University, Computer Science & Information Technology",
      period: "October 2023 - Present",
      image: "/helwan-uni.jpg", // ✅ حط الصورة بتاعتك في فولدر public
      description:
        "Kickstart your academic journey with a strong foundation in computer science and IT. The program emphasizes problem-solving, programming, and teamwork, creating the perfect environment for growth and innovation.",
      takeaways: [
        "Develop teamwork and project management skills",
        "Gain proficiency in programming languages such as C++, Java, and Python",
        "Master Object-Oriented Programming (OOP), data structures, and algorithms",
        "Explore web development and database management",
        "Build a solid foundation in your preferred specialization",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-hero min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        {/* Glow Effect on Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-400 drop-shadow-[0_0_10px_rgba(0,191,255,0.9)]">
          Education
        </h2>

        {education.map((edu, index) => (
          <Card
            key={index}
            className="bg-gradient-card border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Image */}
              <div className="md:w-1/3">
                <Image
                  src={edu.image}
                  alt={edu.institution}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  priority // ✅ الصورة تتفعل وتتحمل أسرع
                />
              </div>

              {/* Right Side - Content */}
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                  {edu.institution}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>

                <p className="text-muted-foreground mb-6">{edu.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-lg">
                    Key Takeaways:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {edu.takeaways.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
