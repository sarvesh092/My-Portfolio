import { motion } from "framer-motion";
import {
  CalendarDays,
  Cpu,
  Rocket,
  Users,
  Lightbulb,
  Trophy,
  Sparkles,
  Award,
  ExternalLink,
} from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { MorphingText } from "@/components/ui/morphing-text";

const handleViewCertificate = (certificateUrl: string) => {
  window.open(certificateUrl, "_blank", "noopener,noreferrer");
};

const AboutMe = () => {
  const stats = [
    {
      value: "2+",
      label: "Years Experience",
      icon: <CalendarDays className="h-6 w-6" />,
    },
    {
      value: "10+",
      label: "Real Projects Delivered",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      value: "20+",
      label: "Production Features Shipped",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  const interests = [
    "Real-Time Systems",
    "AI & Automation",
    "UI/UX Engineering",
    "Performance Optimization",
    "Frontend & Backend",
    "Scalable Architecture",
    "DevOps & Cloud",
  ];

  return (
    <section id="about" className="py-14 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
            <Users className="h-4 w-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Know Me <AuroraText>Better</AuroraText>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            I like building systems that scale and products people actually use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <MorphingText
              className="!text-xl sm:!text-2xl md:!text-3xl text-left flex !justify-start !items-start !h-12"
              texts={["I'm Sarvesh Kashyap", "A Full Stack Developer"]}
            />

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              With 2+ years of experience, I focus on building scalable,
              real-time, and AI-driven web platforms using Next.js, Node.js, and
              cloud-native architectures. I love solving engineering problems
              that connect clean UI/UX with strong system design.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              I work across JavaScript, TypeScript, and Python ecosystems, and
              build with modern tooling like React, Next.js, Express,
              PostgreSQL, Redis, and Prisma. On the DevOps side, I use Docker,
              Kubernetes, CI/CD pipelines, and cloud platforms including Azure
              and AWS for reliable deployments.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I focus on writing clean, scalable code, improving performance,
              and shipping production-ready systems that actually create impact
              — not just demos. Outside coding, I enjoy exploring system design,
              automation ideas, and improving product usability.
            </p>

            <div className="pt-4">
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-6 text-foreground relative inline-block"
              >
                <span className="relative z-10">Achievements</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-transparent rounded-full"></span>
              </motion.h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20"></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div>
                        <h5 className="text-foreground font-semibold">
                          Best Recruit Award
                        </h5>
                        <span className="text-xs text-muted-foreground">
                          SLK Software • 2024
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 mb-3">
                      Recognized for early high-impact contributions and quickly
                      taking ownership of core production modules.
                    </p>
                    <button
                      onClick={() =>
                        handleViewCertificate(
                          "https://drive.google.com/file/d/1WyJK78XJm0zaGHDqaD0Z8hCnXjOobyDT/view?usp=sharing"
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors group"
                    >
                      View Certificate
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20"></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h5 className="text-foreground font-semibold">
                          Innovation Award
                        </h5>
                        <span className="text-xs text-muted-foreground">
                          SLK Software • 2025
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 mb-3">
                      Awarded for building internal AI automation workflows that
                      improved efficiency and reduced manual processes.
                    </p>
                    <button
                      onClick={() =>
                        handleViewCertificate(
                          "https://drive.google.com/file/d/1qbw2XB1SAqLQqQM4UL1Jp6J0bUGM6nVV/view?usp=sharing"
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors group"
                    >
                      View Certificate
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.2 }}
                viewport={{ once: true }}
                className="p-4 sm:p-6 rounded-xl bg-card border border-primary/20 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
