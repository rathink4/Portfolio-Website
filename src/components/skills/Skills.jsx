import { motion, useInView } from 'framer-motion';
import './skills.scss'
import { useRef } from 'react';
import Label from '../label/Label';


const variant = {
  initial: {
    width: "0%",
    opacity: 0,
  },
  animate: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 2,
      scale: {
        type: "spring",
        visualDuration: 0.9,
        bounce: 0.5,
      },
    },
  },
};

const labelVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.2,
    },
  },
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const programmingLanguages = ["Java", "Python", "TypeScript", "JavaScript", "HTML", "CSS"];
    const frameworks = ["Spring Boot", "React", "Node.js", "Express.js"]
    const devAndCloud = ["AWS", "Docker", "Jenkins", "Kubernetes", "Unix", "Linux", "Git"]
    const databases = ["MySQL", "MS SQL Server", "PostgreSQL", "MongoDB"]

  return (
    <div className='skills'>
        <div className="title-container">
            <h1>Skills</h1>
            <motion.hr
                ref={ref}
                variants={variant}
                initial="initial"
                animate={isInView ? "animate" : {}}
            />
        </div>
        <div className="languages-container">
            <h2>Programming Languages</h2>
            <motion.div className="labels-wrapper" ref={ref} variants={labelVariants} initial="initial" animate={isInView ? "animate": {}}>
                {programmingLanguages.map((labelName, index) => (
                <Label key={index} labelName={labelName}/>
                ))}
            </motion.div>
        </div>
        <div className="frameworks-container">
            <h2>Frameworks</h2>
            <motion.div className="labels-wrapper" ref={ref} variants={labelVariants} initial="initial" animate={isInView ? "animate" : {}}>
                {frameworks.map((labelName, index) => (
                <Label key={index} labelName={labelName}/>
                ))}
            </motion.div>
        </div>
        <div className="cloud-container">
            <h2>DevOps and Cloud</h2>
            <motion.div className="labels-wrapper" ref={ref} variants={labelVariants} initial="initial" animate={isInView ? "animate" : {}}>
                {devAndCloud.map((labelName, index) => (
                <Label key={index} labelName={labelName}/>
                ))}
            </motion.div>
        </div>
        <div className="databases-container">
            <h2>Databases</h2>
            <motion.div className="labels-wrapper" ref={ref} variants={labelVariants} initial="initial" animate={isInView ? "animate" : {}}>
                {databases.map((labelName, index) => (
                <Label key={index} labelName={labelName}/>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Skills