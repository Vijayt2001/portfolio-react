import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg"
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg"
import LinkedInLight from "../../assets/linkedin-light.svg";
import LinkedInDark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext";
import moon from '../../assets/moon.svg'

function Hero() {

    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const LinkedInIcon = theme === 'light' ? LinkedInLight : LinkedInDark;



  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        
        {/* colorModeContainer is for dark mode and light mode */}
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Vijay"
        />
        <img src={themeIcon} alt="Color mode icon" 
        onClick={toggleTheme}
        />
        
      </div>

      <div className={styles.info}>
        <h1>
          Vijay
          <br />
          Tolnoorkar
        </h1>
        <h2>Developer</h2>
        <span>
          <a href="https://twitter.com">
            <img src={twitterIcon} alt="X Icon" />
          </a>

          <a href="https://gihub.com">
            <img src={githubIcon} alt="X Icon" />
          </a>

          <a href="https://LinkedIn.com">
            <img src={LinkedInIcon} alt="X Icon" />
          </a>
        </span>

        <p className={styles.description}>
          Recent Computer Science Graduate | Future-Focused Software Engineer |
          Skilled in Python, Java, C++ and Full-Stack Development | | Seeking
          Entry-Level Roles
        </p>
        <a href={CV}>
            <button className="hover" download >
                Resume
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
