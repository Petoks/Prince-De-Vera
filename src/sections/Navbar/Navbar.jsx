import React, { useState } from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './NavbarStyles.module.css';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => setMobileMenuOpen(!isMobileMenuOpen);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    

    return (
        <nav className={`${styles.navbar} ${styles[theme]}`}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logo}>Portfolio</div>

                {/* Navigation Links */}
                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <a href="#" className={styles.navItem} onClick={scrollToTop}>
                        About
                    </a>
                    <a href="#projects" className={styles.navItem}>Projects</a>
                    
                    <a href="#contact" className={styles.navItem}>Contact</a>
                </div>

                {/* Theme Toggle Button */}
                

                {/* Mobile Menu Button (Hamburger) */}
                <button className={styles.menuButton} onClick={handleMenuToggle}>
                    ☰
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
