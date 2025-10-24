import { motion } from "framer-motion";
import { CalendarDays, Cpu, Rocket, Users, Lightbulb } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { MorphingText } from "@/components/ui/morphing-text";

const AboutMe = () => {
  const stats = [
    {
      value: "2+",
      label: "Years Experience",
      icon: <CalendarDays className="h-6 w-6" />,
    },
    {
      value: "10+",
      label: "Real Projects Built",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      value: "12+",
      label: "Technologies Mastered",
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      value: "100%",
      label: "Passion & Ownership",
      icon: <Lightbulb className="h-6 w-6" />,
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
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A problem solver at heart, passionate about building intelligent,
            scalable, and user-focused web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-0 text-left"
          >
            <MorphingText
              className="!text-xl sm:!text-2xl md:!text-3xl text-left flex !justify-start !items-start !h-12"
              texts={["I'm Sarvesh Kashyap", "A Software Developer"]}
            />

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              With over 2 years of experience in modern web development, I
              specialize in building full-stack applications that combine
              real-time interactivity, automation, and AI capabilities. I love
              transforming ideas into scalable digital products that deliver
              real user impact.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I'm deeply focused on performance, clean architecture, and user
              experience. Whether it's creating seamless frontends or
              engineering efficient backend systems, I bring ownership,
              creativity, and problem-solving to every project I work on.
            </p>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                What I Love Working On
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 bg-muted/50 text-foreground/90 rounded-full text-xs sm:text-sm font-medium hover:bg-muted transition-colors"
                  >
                    {interest}
                  </motion.span>
                ))}
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
