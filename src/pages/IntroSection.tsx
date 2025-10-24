import { motion } from "framer-motion";
import { Download, Code, Mail } from "lucide-react";
import GithubIcon from "@/assets/icons/github.svg?react";
import LinkedinIcon from "@/assets/icons/linkedn.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import { Button } from "@/components/ui/button";
import Myimage from "@/assets/icons/myimage.jpg";
import { TypingAnimation } from "@/components/ui/typing-animation";

const IntroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-background mt-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Code className="h-4 w-4" />
              <span>Software Developer</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{" "}
              <TypingAnimation
                className="text-green-500"
                words={["Sarvesh Kashyap"]}
              />
            </motion.h1>

            <motion.div 
              className="space-y-4 mb-8 max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
              >
                I craft <span className="text-primary font-medium">fast</span>, <span className="text-primary font-medium">intuitive</span> web applications 
                with a focus on <span className="text-foreground font-medium">real-time systems</span> and <span className="text-foreground font-medium">AI-powered</span> automation.
              </motion.p>

              <motion.div 
                className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border-l-4 border-primary/50"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.5,
                      delay: 0.2
                    }
                  }
                }}
              >
                <div className="mt-0.5">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-foreground font-medium">Currently Working at SLK Software</p>
                  <p className="text-sm text-muted-foreground">Associate Software Engineer (Full Stack Developer)</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                className="gap-2 px-6 h-12 rounded-full"
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
              <Button
                size="lg"
                className="gap-2 px-6 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() =>
                  window.open("src/Data/Sarvesh_Kashyap.pdf", "_blank")
                }
              >
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-muted-foreground">Follow me:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sarvesh092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-full border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/sarvesh-kashyap-3380511b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-full border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/sarvesh_092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-full border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  <XIcon className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              className="relative w-full aspect-square max-w-lg mx-auto"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 rounded-3xl -rotate-6"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />

              <motion.div
                className="relative bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 h-full w-full flex items-center justify-center"
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-center p-6">
                  <motion.div
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-primary/20"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <img
                      src={Myimage}
                      alt="My Image"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Sarvesh Kashyap
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground text-sm mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Full Stack Developer
                  </motion.p>

                  <motion.div
                    className="flex justify-center items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.span
                      className="inline-block w-3 h-3 rounded-full bg-green-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(74, 222, 128, 0.7)",
                          "0 0 0 10px rgba(74, 222, 128, 0)",
                        ],
                      }}
                      transition={{
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                        },
                      }}
                    />
                    <span className="text-sm text-muted-foreground">
                      Open to Work
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-foreground rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
