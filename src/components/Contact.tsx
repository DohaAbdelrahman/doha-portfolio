import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    title: "Email",
    value: "dohaabd757@dmail.com",
    link: "mailto:dohaabd757@dmail.com"
  }, {
    icon: Phone,
    title: "Phone",
    value: "01029474155",
    link: "tel:01029474155"
  }, {
    icon: MapPin,
    title: "Location",
    value: "Al-Manib, Al-Giza",
    link: "#"
  }];
  const socialLinks = [{
    icon: Github,
    name: "GitHub",
    url: "https://github.com/DohaAbdelrahman"
  }, {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/doha-abdelrahman-3540292a5"
  }];
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new opportunities 
            and exciting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">Get in Touch</h3>
            <p className="text-muted-foreground">
              Whether you have a project in mind, need technical consultation, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-5">
                    <a href={item.link} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-base font-medium">{item.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col justify-center animate-fade-in">
            <Card className="bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 bg-gradient-text bg-clip-text text-transparent">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition duration-300 hover:scale-110"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon className="h-5 w-5 text-primary" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;