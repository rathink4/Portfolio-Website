import { motion, useInView } from "framer-motion";
import "./about.scss";
import { useRef } from "react";
import Card from "../card/Card";

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

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const experiences = [
    {
      role: "Software Developer",
      company: "DreamlineAI",
      points: [
        "Developed responsive landing pages, dashboards, and navigation for DreamlineAI using React, JSX, HTML, and CSS, improving user experience.",
        "Implemented client-side logic and validation with ES6 and TypeScript for accurate, seamless functionality.",
        "Managed API calls and database queries with MySQL and Docker Compose to optimize backend performance.",
        "Documented API endpoints and backend processes using Confluence and Swagger.",
      ],
    },
    {
      role: "Backend Software Developer",
      company: "University of Texas at Dallas",
      points: [
        "Reduced issue tickets through TDD, enhancing code quality with Spring MVC in Java Spring Boot.",
        "Managed concurrent requests, built RESTful APIs with service classes and dependency injection.",
        "Improved MySQL query efficiency using Hibernate ORM, JPA, and POJO classes.",
        "Automated deployments, platform reliability by promoting Jenkins CI/CD with Docker.",
      ],
    },
    {
      role: "Fullstack Software Dev Intern",
      company: "KPTAC Technologies",
      points: [
        "Enabled new revenue stream through transaction fees for checkout system using TypeScript.",
        "Scaled TypeScript backend microservices to support 1M daily users, utilizing AWS Cloud.",
        "Boosted product sales through data analysis using NumPy/Pandas, collected via a Python web scraper.",
        "Participated in Agile sprint planning, daily stand-ups, and retrospectives using JIRA."
      ],
    },
  ];

  return (
    <div className="about">
      <div className="title-container">
        <h1>About me</h1>
        <motion.hr
          ref={ref}
          variants={variant}
          initial="initial"
          animate={isInView ? "animate" : {}}
        />
      </div>
      <div className="text-container">
        <p>
          Hey, my name is Rathin and I like to code. <br /> <br /> Honestly, I
          did not code as a hobby. I started off as a normal computer science
          student doing his coursework. However, over time I continued to
          develop my skills and got good at it. Now, I can't imagine my life
          without developing something new and exciting in this new age of AI,
          Internet, and memes.
          <br /> <br /> Check out my experience down below!
        </p>
      </div>
      <div className="cards-container">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            role={exp.role}
            company={exp.company}
            points={exp.points}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
