import { motion } from "framer-motion";
import "./about-me.css";
import { useRef } from "react";

function AboutMe() {
    const buttonRef = useRef(null);
    return (
        <motion.section
            className="about-me"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <h1>Hi, I&apos;m Dani</h1>
            <p>
                &nbsp;Hi, I have been creating software for over 15 years.
                I&nbsp;ve recently completed the{" "}
                <a href="https://www.inceptionu.ca" target="_blank">
                    InceptionU Full Stack Developer Program
                </a>{" "}
                to build on my skills! As a Scrabble enthusiast and competitive
                tournament player, I enjoy making software for Scrabble (and
                other word game) players. You can check out those and other
                projects I&apos;ve worked on below.
            </p>
            <a href="Danielle Barker.pdf">
                <button
                    ref={buttonRef}
                    onMouseEnter={() =>
                        buttonRef.current.classList.add("leave-anim")
                    }
                    className="resume-link"
                >
                    Download Resume
                </button>
            </a>
        </motion.section>
    );
}

export default AboutMe;
