import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/linkedin-light.svg"
import LinkedInIcon from "../../assets/github-light.svg"

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        {" "}
        {/* colorModeContainer is for dark mode and light mode */}
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Vijay"
        />
        <img src={themeIcon} alt="Color mode icon" />
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
      </div>
    </section>
  );
}

export default Hero;
