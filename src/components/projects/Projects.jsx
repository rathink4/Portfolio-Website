import { forwardRef, useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import img1 from '/maze-solver.jpg'
import gif2 from '/verlet-cloth.gif'

const items = [
  {
    id: 1,
    title: "A* Hexagonal Path Finder",
    img: img1,
    link: "https://github.com/rathink4/A-star-Hexagonal-Path-Finder",
    description:
      "This project is essentially a three part project of understanding hexagons and the math required to work with them in coding, understanding how to generate a random solvable maze, and implementing A* algorithm to find shortest path from one selected point to another.",
  },
  {
    id: 2,
    title: "Verlet Integration Cloth",
    img: gif2,
    link: "https://github.com/rathink4/Verlet-Cloth",
    description:
      "Made use of Verlet Integration to simulate a cloth. Working with SDL Library in C++ was a blast and got to learn tons of stuff of basic structure of any simulation application!",
  },
  {
    id: 3,
    title: "Periodic Table with React + CSS",
    img: "https://user-images.githubusercontent.com/7591614/203695958-23c597fb-22f9-4293-8517-3e9af4b1c74b.gif",
    link: "https://github.com/rathink4/Periodic-Table-CSS",
    description:
      "One of my initial projects trying to learn CSS and React.",
  },
];



const SingleProject = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
  const handleResumeClick = (link) => {
    window.open(item.link, '_blank'); // Opens the link in a new tab
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="image-container">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="text-container">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={handleResumeClick}>Check it out here!</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = forwardRef((props, pref) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={pref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item) => (
        <SingleProject item={item} key={item.id} />
      ))}
    </div>
  );
});

export default Projects;
