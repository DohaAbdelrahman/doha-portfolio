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
  return <section id="contact" className="py-20 px-6 bg-gradient-to-br from-black via-[#0f0f1b] to-[#1a1a2e]">
      <div className="max-w-6xl mx-auto bg-inherit text-primary border-primary">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-primary bg-primary-foreground">
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
            <h3 className="text-2xl font-bold mb-4 text-primary">Get in Touch</h3>
            <p className="text-muted-foreground">
              Whether you have a project in mind, need technical consultation, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => <Card key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-5 text-primary bg-inherit border-inherit">
                    <a href={item.link} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-xl transition-colors bg-inherit text-primary border-primary-glow">
                        <item.icon className="h-6 w-6 text-[#977359] bg-inherit" />
                      </div>
                      <div>
                        <h4 className="transition-colors text-primary text-lg font-bold">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-base font-medium">{item.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col justify-center animate-fade-in">
            <div className="backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 bg-inherit text-primary">
              <h4 className="text-xl font-semibold mb-4 text-primary">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition duration-300 hover:scale-110" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <social.icon className="h-5 w-5 text-[#977359]" />
                  </a>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;