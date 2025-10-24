import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, BriefcaseBusiness } from "lucide-react";
import TestMyStack from "@/assets/icons/testmystack.png";
import AiSummary from "@/assets/icons/aisummery.png";
import SecureFlow from "@/assets/icons/secureflow.png";
import GithubIcon from "@/assets/icons/github.svg?react";
import { Button } from "@/components/ui/button";
import Data from "@/Data/data.json";
import { AuroraText } from "@/components/ui/aurora-text";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <BriefcaseBusiness className="h-4 w-4" />
            <span>My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured <AuroraText>Projects</AuroraText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work and contributions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Data.projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative h-full flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image with overlay */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img
                    src={
                      project.title === "TESTMYSTACK"
                        ? TestMyStack
                        : project.title === "SecureFlow"
                        ? SecureFlow
                        : AiSummary
                    }
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                  />
                </motion.div>

                <div className="absolute bottom-4 left-0 right-0 px-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-background/90 backdrop-blur-sm border border-border/50 text-foreground/90 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-2 mb-6">
                  <h4 className="text-sm font-semibold text-primary/90 mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="relative pl-5 text-sm text-foreground/90 leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 * i,
                          type: "spring",
                          stiffness: 300,
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                      >
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                        <span className="block -mt-0.5">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between">
                  {project.github !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 text-sm font-medium group/btn"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <GithubIcon className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                      <span>View Code</span>
                    </Button>
                  )}
                  {project.Link !== "#" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-sm font-medium group/link"
                      onClick={() => window.open(project.Link, "_blank")}
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 font-medium group"
            onClick={() =>
              window.open("https://github.com/sarvesh092", "_blank")
            }
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
