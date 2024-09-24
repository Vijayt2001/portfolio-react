import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg"
function Hero() {
  return (
    <section id="hero">
      <div className={styles.colorModeContainer}>
        {" "}
        //colorModeContainer is for dark mode and light mode
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Vijay"
        />
        <img src={themeIcon} alt="Color mode icon" />
      </div>
    </section>
  );
}

export default Hero;
