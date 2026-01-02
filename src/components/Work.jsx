import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import yumigo from "../assets/images/Yumigo.png";
import spotify from "../assets/images/Spotify-App.png";
import todo from "../assets/images/to-do.png";
import portfolio from "../assets/images/portfolio.png";
import foodSharp from "../assets/images/food-sharp.webp";
import music from "../assets/images/music.jpg";

const works = [
  {
    imgSrc: yumigo,
    title: "Yumigo Food Ordering App",
    tags: ["MERN", "Full Stack", "API"],
    projectLink: "https://github.com/ankityadav456/mern-food-ordering",
  },
  {
    imgSrc: spotify,
    title: "Spotify Clone Music Player",
    tags: ["React", "API", "Web App"],
    projectLink: "https://github.com/ankityadav456/spotify__clone.git",
  },
  {
    imgSrc: todo,
    title: "Modern To-Do App",
    tags: ["React", "CRUD", "Backend"],
    projectLink: "https://github.com/ankityadav456/user-managment_.git",
  },
  {
    imgSrc: portfolio,
    title: "My Portfolio",
    tags: ["React", "UI/UX"],
    projectLink: "https://github.com/ankityadav456/My-app.git",
  },
  {
    imgSrc: foodSharp,
    title: "Food-Sharp",
    tags: ["Android", "E-Commerce"],
    projectLink: "https://github.com/ankityadav456/Food-sharp",
  },
  {
    imgSrc: music,
    title: "Music Player",
    tags: ["Android", "Development"],
    projectLink: "https://github.com/ankityadav456/-Music-Player",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const Work = () => {
  return (
    <section id="work" className="relative section mt-10">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-start"
        >
          <h2 className="text-4xl font-semibold text-text ">
            Selected Work
          </h2>
          <p className="mt-3 text-muted-foreground">
            A showcase of projects I’ve built with passion & precision
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard key={key} imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}  />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
