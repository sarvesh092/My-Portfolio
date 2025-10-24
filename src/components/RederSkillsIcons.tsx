import { motion, AnimatePresence } from "framer-motion";
import { Code, Database } from "lucide-react";
import PrismaIcon from "@/assets/icons/prisma.svg?react";
import NextIcon from "@/assets/icons/next.svg?react";
import CssIcon from "@/assets/icons/css.svg?react";
import HtmlIcon from "@/assets/icons/html.svg?react";
import ReactIcon from "@/assets/icons/react.svg?react";
import TailwindIcon from "@/assets/icons/tailwind.svg?react";
import ReduxIcon from "@/assets/icons/redux.svg?react";
import MaterialUIIcon from "@/assets/icons/material-ui.svg?react";
import NodeIcon from "@/assets/icons/node.svg?react";
import ExpressIcon from "@/assets/icons/express.svg?react";
import WebSocketsIcon from "@/assets/icons/socketio.svg?react";
import FigmaIcon from "@/assets/icons/figma.svg?react";
import MongoDBIcon from "@/assets/icons/mongodb.svg?react";
import MySqlIcon from "@/assets/icons/mysql.svg?react";
import AzureIcon from "@/assets/icons/azure.svg?react";
import DevToolsIcon from "@/assets/icons/chrome-devtools.svg?react";
import TypeScriptIcon from "@/assets/icons/typescript.svg?react";
import PythonIcon from "@/assets/icons/python.svg?react";
import SQLIcon from "@/assets/icons/sql.svg?react";
import ReactTestingIcon from "@/assets/icons/reactTesting.svg?react";
import RedisIcon from "@/assets/icons/redis.svg?react";
import GitIcon from "@/assets/icons/git.svg?react";
import CiCdIcon from "@/assets/icons/gitlab.svg?react";
import JavaScriptIcon from "@/assets/icons/js.svg?react";
import JestIcon from "@/assets/icons/jest-snapshot.svg?react";
import PostmanIcon from "@/assets/icons/postman.svg?react";
import GitHubIcon from "@/assets/icons/github.svg?react";
import DockerIcon from "@/assets/icons/docker.svg?react";
import KubernetesIcon from "@/assets/icons/kubernetes.svg?react";
import NginxIcon from "@/assets/icons/nginx.svg?react";

const SkillIcons = ({ name, index }: { name: string; index: number }) => {
  const getSkillIcon = (skillName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      // Languages
      JavaScript: <JavaScriptIcon className="h-10 w-10" />,
      TypeScript: <TypeScriptIcon className="h-10 w-10" />,
      Python: <PythonIcon className="h-10 w-10" />,
      SQL: <SQLIcon className="h-10 w-10" />,

      // Frontend
      React: <ReactIcon className="h-10 w-10" />,
      "Next.js": <NextIcon className="h-10 w-10" />,
      HTML5: <HtmlIcon className="h-10 w-10" />,
      CSS3: <CssIcon className="h-10 w-10" />,
      "Tailwind CSS": <TailwindIcon className="h-10 w-10" />,
      "Redux Toolkit": <ReduxIcon className="h-10 w-10" />,
      Zustand: (
        <div className="h-10 w-10 text-amber-500 flex items-center justify-center font-bold text-xl">
          Z
        </div>
      ),
      "React Query": (
        <div className="h-10 w-10 text-red-500 flex items-center justify-center font-bold text-lg">
          RQ
        </div>
      ),
      "Material UI": <MaterialUIIcon className="h-10 w-10" />,
      Figma: <FigmaIcon className="h-10 w-10" />,
      Shadcn: (
        <div className="h-10 w-10 text-red-500 flex items-center justify-center font-bold text-sm">
          Sh
        </div>
      ),

      // Backend
      "Node.js": <NodeIcon className="h-10 w-10" />,
      "Express.js": <ExpressIcon className="h-10 w-10" />,
      "RESTful APIs": (
        <div className="h-10 w-10 text-green-400 flex items-center justify-center font-bold text-sm">
          API
        </div>
      ),
      Microservices: (
        <div className="h-10 w-10 text-purple-400 flex items-center justify-center font-bold">
          M
        </div>
      ),
      "JWT & OAuth": (
        <div className="h-10 w-10 text-pink-500 flex items-center justify-center text-xl">
          🔑
        </div>
      ),
      WebSockets: <WebSocketsIcon className="h-10 w-10" />,
      "Redis Caching": <RedisIcon className="h-10 w-10" />,
      MongoDB: <MongoDBIcon className="h-10 w-10" />,
      MySQL: <MySqlIcon className="h-10 w-10" />,
      PostgreSQL: <Database className="h-10 w-10 text-blue-500" />,
      "Prisma ORM": <PrismaIcon className="h-10 w-10" />,
      Redis: <RedisIcon className="h-10 w-10" />,

      // DevOps & Cloud
      Docker: <DockerIcon className="h-10 w-10" />,
      Kubernetes: <KubernetesIcon className="h-10 w-10" />,
      Azure: <AzureIcon className="h-10 w-10" />,
      Git: <GitIcon className="h-10 w-10" />,
      Nginx: <NginxIcon className="h-10 w-10" />,
      "CI/CD Pipelines": <CiCdIcon className="h-10 w-10" />,
      GitHub: <GitHubIcon className="h-10 w-10" />,

      // Testing
      Jest: <JestIcon className="h-10 w-10" />,
      "React Testing Library": <ReactTestingIcon className="h-10 w-10" />,
      Postman: <PostmanIcon className="h-10 w-10" />,
      "Chrome DevTools": <DevToolsIcon className="h-10 w-10" />,
    };

    return icons[skillName] || <Code className="h-8 w-8" />;
  };

  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
      transition={{
        delay: index * 0.02,
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className="group flex flex-col items-center justify-center p-4 text-center"
    >
      <motion.div
        className="mb-2 p-2 rounded-2xl transition-all duration-300
                    bg-primary/5 group-hover:shadow-lg group-hover:shadow-primary/10"
        whileHover={{
          scale: 1.15,
          rotate: [0, -5, 5, -5, 5, 0],
          transition: {
            duration: 0.6,
            rotate: {
              repeat: 1,
              duration: 0.6,
              ease: "easeInOut",
            },
          },
        }}
      >
        {getSkillIcon(name)}
      </motion.div>
      <motion.span className="text-sm font-medium text-foreground/90 relative">
        {name}
        <motion.span
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
          initial={{ width: 0 }}
        />
      </motion.span>
    </motion.div>
  );
};

export default SkillIcons;
