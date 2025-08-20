"use client";

import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      institution: "Helwan National University, Computer Science & Information Technology",
      period: "October 2023 - Present",
      image: "/helwan-uni.jpg", // ✅ الصورة في public
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
    <section id="education" className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Title with Glow + Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-blue-400 drop-shadow-[0_0_20px_rgba(0,191,255,1)]"
        >
          EDUCATION
        </motion.h2>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#0a0a0a] border border-blue-500/30 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,191,255,0.4)]">
              <div className="flex flex-col md:flex-row">
                {/* Left Side - Image */}
                <div className="md:w-1/3">
                  <Image
                    src={edu.image}
                    alt={edu.institution}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Right Side - Content */}
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">
                    {edu.institution}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>

                  <p className="text-gray-300 mb-6">{edu.description}</p>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3 text-lg">
                      Key Takeaways:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {edu.takeaways.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
