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
      image: "public/helwan-uni.jpg.jpg", // ✅ الصورة في public
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
          className="text-4xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
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
            <Card className="bg-[#0a0a0a] border border-purple-500/40 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-500">
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
                  <h3 className="text-xl font-semibold text-purple-300">
                    {edu.institution}
                  </h3>
                  <div className="text-purple-400">>
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>

                  <p className="text-xl font-semibold text-purple-300">{edu.description}</p>

                  <div>
                    <h4 className="font-semibold text-purple-400">
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
