import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "dohaabd757@dmail.com",
      link: "mailto:dohaabd757@dmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "01029474155",
      link: "tel:01029474155"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Al-Manib, Al-Giza",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/DohaAbdelrahman",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/doha-abdelrahman-3540292a5",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new opportunities 
            and exciting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, need technical consultation, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

          {/* Contact Details */}
            <div className="space-y-4">
            {contactInfo.map((item, index) => (
            <Card
              key={item.title}
              className="bg-secondary/20 border border-border/30 hover:border-primary/40 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up backdrop-blur-md rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-5">
                <a
                  href={item.link}
                  className="flex items-center space-x-5 group"
                >
                  <div className="p-3 bg-primary/15 rounded-xl group-hover:bg-primary/25 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.value}
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4 text-primary">Follow Me</h4>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-secondary/30 hover:bg-primary/20 transition-all duration-500 ease-in-out transform hover:scale-110 backdrop-blur-md shadow-md ${social.color} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="h-5 w-5 text-white" />
              </a>
            ))}
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;