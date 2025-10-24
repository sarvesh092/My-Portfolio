import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import GithubIcon from "@/assets/icons/github.svg?react";
import LinkedinIcon from "@/assets/icons/linkedn.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { useState } from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import emailjs from "emailjs-com";

const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/sarvesh092",
    color: "from-gray-700 to-gray-900",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sarvesh-kashyap-3380511b0",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: XIcon,
    label: "X",
    href: "https://x.com/sarvesh_092",
    color: "from-black to-black",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:kashyapsarvesh092@gmail.com",
    color: "from-rose-500 to-pink-600",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    try {
      setLoading(true);
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      toast.success("Thank you for reaching out. I'll get back to you soon!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again later.");
      setLoading(false);
      return;
    }
    
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Get In <AuroraText>Touch</AuroraText>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-background/80 rounded-2xl p-6 sm:p-8 border border-border/40 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-3 text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="h-12 bg-background border-border focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-3 text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  className="h-12 bg-background border-border focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-3 text-foreground"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Subject"
                  className="h-12 bg-background border-border focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-3 text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background border-border focus:border-foreground transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold h-12 rounded-full group"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Let's Connect
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -6 }}
                      transition={{
                        duration: 0.3,
                        type: "tween",
                        stiffness: 100,
                      }}
                      viewport={{ once: true }}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br ${social.color} text-white hover:shadow-lg transition-all duration-300`}
                      aria-label={social.label}
                    >
                      <div className="w-10 h-10 flex items-center justify-center mb-2 bg-white/10 rounded-lg backdrop-blur-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                className="relative p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl"></div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-1"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    Available for work
                  </span>
                </div>
                <p className="text-sm text-muted-foreground pl-11">
                  I’m currently open to new opportunities.”
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
