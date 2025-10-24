import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
  { id: "devops", name: "DevOps & Cloud", icon: Cloud },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-background">
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
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <CpuIcon className="h-4 w-4" />
            <span>My Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technical <AuroraText>Skills</AuroraText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I'm proficient with
          </p>
        </motion.div>

        {/* Category */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:shadow-md"
              }`}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.8,
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            className="w-full"
          >
            <div className="grid gap-6 max-w-7xl mx-auto">
              <AnimatePresence>
                <motion.div
                  className={`grid ${
                    Data.skillsData[activeCategory]?.length <= 4
                      ? "grid-cols-4 justify-items-center"
                      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8"
                  } gap-6 w-full`}
                  layout
                >
                  {Data.skillsData[activeCategory]?.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.02,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          mass: 0.5,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        y: 10,
                        transition: {
                          duration: 0.15,
                          ease: "easeInOut",
                        },
                      }}
                      className={`${
                        Data.skillsData[activeCategory]?.length <= 4
                          ? "w-full max-w-[180px]"
                          : "w-full"
                      }`}
                      layout
                    >
                      <SkillIcons name={skill} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tech Info */}
        <motion.div
          className="mt-16 p-6 bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl border border-border/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <CpuIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {categories.find((cat) => cat.id === activeCategory)?.name}{" "}
                Stack
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activeCategory === "frontend" &&
                  "Building responsive, accessible, and performant user interfaces with modern web technologies. Specializing in React ecosystem and state management solutions."}
                {activeCategory === "backend" &&
                  "Designing and implementing robust, scalable server-side applications with Node.js and Express. Experience with API development, authentication, and real-time features."}
                {activeCategory === "database" &&
                  "Working with both SQL and NoSQL databases to design efficient data models, write optimized queries, and ensure data integrity across applications."}
                {activeCategory === "devops" &&
                  "Implementing CI/CD pipelines, containerization, and cloud infrastructure to enable reliable and scalable deployments."}
                {activeCategory === "testing" &&
                  "Ensuring code quality and application reliability through comprehensive testing strategies, from unit to integration testing."}
                {activeCategory === "languages" &&
                  "Proficient in multiple programming languages, with a focus on type safety, performance, and modern language features."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
