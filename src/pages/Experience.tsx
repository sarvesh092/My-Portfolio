import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import Data from "@/Data/data.json";
import { AuroraText } from "@/components/ui/aurora-text";

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-0 lg:flex-shrink-0 lg:w-1/3"
        >
          <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-foreground">
            Work <AuroraText>Experience</AuroraText>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Professional journey and achievements
          </p>
        </motion.div>

        <div className="relative lg:flex-1">
          <div className="absolute left-2 sm:left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 sm:space-y-14 lg:space-y-16">
            {Data.experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-8 sm:pl-12 md:pl-24"
              >
                <div className="absolute left-2 sm:left-4 md:left-8 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-foreground border-2 sm:border-4 border-background" />

                <div>
                  <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-3 sm:mb-4">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-gradient font-semibold mb-3 sm:mb-4">
                    {exp.company}
                    <span className="text-muted-foreground font-normal text-xs sm:text-sm ml-1 sm:ml-2">
                      {exp.location}
                    </span>
                  </p>

                  <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">
                    {exp.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 sm:mt-2.5 flex-shrink-0" />
                        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{achievement}</p>
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
