import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  LayoutDashboard,
  Cloud,
  Bug,
  CpuIcon,
} from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import Data from "@/Data/data.json";
import SkillIcons from "@/components/RederSkillsIcons";

const categories = [
  { id: "frontend", name: "Frontend", icon: LayoutDashboard },
  { id: "languages", name: "Languages", icon: Code },
  { id: "backend", name: "Backend", icon: Server },
  { id: "database", name: "Databases & ORM", icon: Database },
  { id: "testing", name: "Testing", icon: Bug },
  { id: "devops", name: "DevOps & Tools", icon: Cloud },
];

const categoryDescriptions = {
  frontend:
    "Building responsive, accessible, and performant user interfaces with modern web technologies.",
  backend:
    "Designing and implementing robust, scalable server-side applications and APIs.",
  database:
    "Working with both SQL and NoSQL databases to design efficient data models.",
  devops:
    "Implementing CI/CD pipelines and cloud infrastructure for reliable deployments.",
  testing:
    "Ensuring code quality and application reliability through comprehensive testing.",
  languages:
    "Proficient in multiple programming languages with a focus on modern features.",
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <CpuIcon className="h-4 w-4" />
            <span>My Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technical <AuroraText>Skills</AuroraText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with on a daily basis
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: categories.indexOf(category) * 0.1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card rounded-xl border border-border/50 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                {
                  categoryDescriptions[
                    category.id as keyof typeof categoryDescriptions
                  ]
                }
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-8">
                {Data.skillsData[category.id]?.map((skill, index) => (
                  <motion.div
                    key={`${category.id}-${skill}`}
                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col items-center mb-10 justify-center rounded-lg hover:bg-muted/20 transition-colors h-full"
                  >
                    <div className="w-10 h-10 p-2 sm:w-11 sm:h-11 flex items-center justify-center mb-4">
                      <SkillIcons name={skill} index={index} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
