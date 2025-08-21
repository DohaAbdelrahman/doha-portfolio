import { Card } from "@/components/ui/card"
import { Calendar, MapPin, BookOpen } from "lucide-react"
import helwanUniversity from "@/assets/helwan-university.jpg"

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my academic journey - building a strong foundation in computer science and IT.
          </p>
        </div>

        <Card className="p-8 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* University Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={helwanUniversity}
                  alt="Helwan National University Campus"
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
              </div>
            </div>

            {/* Education Details */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-hero-gradient bg-clip-text text-transparent">
                  Helwan National University
                </h3>
                <p className="text-lg text-foreground mb-4">Computer Science & Information Technology</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    October 2023 - Present
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Cairo, Egypt
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Kickstart your academic journey with a strong foundation in computer science and IT. 
                The program emphasizes problem-solving, programming, and teamwork, creating the perfect 
                environment for growth and innovation.
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Key Takeaways:
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                    Develop teamwork and project management skills
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                    Gain proficiency in programming languages such as C++, Java, and Python
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                    Master Object-Oriented Programming (OOP), data structures, and algorithms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                    Explore web development and database management
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                    Build a solid foundation in your preferred specialization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}