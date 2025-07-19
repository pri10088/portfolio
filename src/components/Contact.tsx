import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Madurai, India"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8220600676"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "shanmugapriyaar0@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      username: "pri10088",
      url: "https://github.com/pri10088"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      username: "/shanmugapriya-ar",
      url: "https://linkedin.com/in/shanmugapriya-ar"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Get in Touch</h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-neon mb-6">Let's Connect</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card p-4 rounded-lg hover:bg-neon/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="text-neon">{info.icon}</div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-neon">Social Links</h4>
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-3 p-4 glass-card rounded-lg hover:bg-neon/10 transition-all duration-300 group">
                  <div className="text-neon group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{link.label}</p>
                    <p className="text-white group-hover:text-neon transition-colors duration-300">
                      {link.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-neon mb-6">Send Message</h3>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 glass-card rounded-lg bg-transparent border-0 focus:ring-2 focus:ring-neon/50 focus:outline-none placeholder-gray-400"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 glass-card rounded-lg bg-transparent border-0 focus:ring-2 focus:ring-neon/50 focus:outline-none placeholder-gray-400"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-4 glass-card rounded-lg bg-transparent border-0 focus:ring-2 focus:ring-neon/50 focus:outline-none placeholder-gray-400 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full p-4 bg-neon text-black font-semibold rounded-lg hover:bg-neon-dark transition-all duration-300 neon-glow flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl">
            <blockquote className="text-2xl font-light text-gray-300 mb-4">
              "Let your code speak. Let your design whisper."
            </blockquote>
            <cite className="text-neon font-semibold">— Shanmuga Priya</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;