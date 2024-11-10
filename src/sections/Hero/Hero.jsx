import { useState } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';

import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

    const themeIconSrc = theme === 'light' ? themeIcon : themeIcon; // You can change this to use a different icon like moon.svg for dark mode

    // Apply appropriate styles based on the current theme
    const containerClass = theme === 'light' ? styles.lightMode : styles.darkMode;

  return (
    
    <section id="hero" className={`${styles.container} ${containerClass}`}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Prince
          <br />
          De Vera
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/petokss/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Petoks" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>                   
        </span>
        <p className={styles.description}>
        A passionate and driven React developer  specialize in building modern, responsive, and user-friendly web applications for businesses of all sizes.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
