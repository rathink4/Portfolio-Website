import { motion } from "framer-motion";
import { animate } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: window.innerWidth > 400 ? "-220%" : "0%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 35,
    },
  },
};

const profileVariants = {
  initial: {
    opacity:0,
    scale:0,
  },
  animate: {
    opacity: 1,
    scale: 1, 
    transition: {
      duration: 1,
      scale: {
        type: "spring",
        visualDuration: 0.2,
        bounce: 0.1,
      }
    },
  },
};

const handleContactClick = () => {
    const section = document.getElementById("Contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

const handleResumeClick = () => {
    const resumeUrl = 'https://www.dropbox.com/scl/fi/hrprujtgmarpylswen7u2/Rathin_Resume.pdf?rlkey=4zsfnzre2w0bpnqbvryo31z0z&st=9c4k6tah&dl=0';
    window.open(resumeUrl, '_blank'); // Opens the link in a new tab
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>RATHIN KAMBLE</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.h3 variants={textVariants}>
            Experienced Software Engineer with a strong background in backend
            development, specializing in Java microservices and cloud-based
            architectures. Proven track record in optimizing
            performance and scalability of applications, leveraging tools like
            Docker, Jenkins for CI/CD. Proficient in translating complex
            business requirements into technical solutions and passionate about
            continuous learning in emerging technologies.
          </motion.h3>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button className="resume-btn" onClick={handleResumeClick}>Get my Resume</motion.button>
            <motion.button className="contact-btn" onClick={handleContactClick}>Contact me!</motion.button>
          </motion.div>
        </motion.div>
        <motion.div className="image-container" variants={profileVariants} initial="initial" animate="animate">
        <motion.div className="circle" variants={profileVariants}>
          <motion.img className="profile-pic" variants={profileVariants} src="/profile-pic.jpg" alt="profile-picture" />
        </motion.div>
      </motion.div>
      </div>
      <motion.div className="sliding-text-container" variants={sliderVariants} initial="initial" animate="animate">
        AI Cloud Automation
      </motion.div>
      <motion.img
            className="mouse-scroll-img"
            variants={textVariants}
            src="./scroll.png"
            alt="mouse-scroll"
            animate="scrollButton"
        />
      
    </div>
  );
};

export default Hero;
