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
      image: "/my-uni.jpsrc/components/image.png", 
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
          className="text-4xl font-bold text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)] text-center mb-12"
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
            <Card className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-purple-500/30 rounded-2xl overflow-hidden shadow-[0_0_18px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] transition-all duration-500">
              <div className="flex flex-col md:flex-row">
                {/* Left Side - Image */}
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image 
                    src={edu.image} 
                    alt="Helwan University" 
                    fill 
                    className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                  />
                </div>

                {/* Right Side - Content */}
                <div className="md:w-2/3 p-8 space-y-6">
                  <h3 className="text-2xl font-semibold text-purple-300">
                    {edu.institution}
                  </h3>

                  <div className="flex items-center gap-2 text-purple-400 font-medium">
                    <Calendar className="h-5 w-5" />
                    <span>{edu.period}</span>
                  </div>

                  {/* ✅ Box فيه إطار + Glow حوالين الوصف + Key Takeaways */}
                  <div className="border border-purple-500/40 rounded-xl p-5 bg-black/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-500">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <h4 className="font-semibold text-purple-400 mb-2">
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
