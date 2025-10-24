import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import Data from "@/Data/data.json";
import { AuroraText } from "@/components/ui/aurora-text";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto flex  gap-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Work <AuroraText>Experience</AuroraText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Professional journey and achievements
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {Data.experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-24"
              >
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-foreground border-4 border-background" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-4">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gradient font-semibold mb-4">
                    {exp.company}
                    <span className="text-muted-foreground font-normal text-sm ml-2">
                      {exp.location}
                    </span>
                  </p>

                  <p className="text-muted-foreground mb-6 text-lg">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                        <p className="text-foreground/80">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
