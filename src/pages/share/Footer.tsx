import React from 'react';
import styles from '@/styles/footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_text}>&copy; 2024 Minecraft Wiki</p>
        </footer>
    );
};

export default Footer;
