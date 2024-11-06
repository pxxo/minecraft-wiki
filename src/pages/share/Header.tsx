import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/header.module.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logoArea}>
          <Image
            className={styles.logo}
            src="/favicon.ico"
            alt="Minecraft Server Logo"
            width={40}
            height={40}
            priority
          />
          <div className={styles.logoTitle}>SERVER</div>
        </div>
        <div className={styles.header_links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>Mobs</Link>
          <Link href="/contact" className={styles.link}>Items</Link>
          <Link href="/contact" className={styles.link}>Skills</Link>
          <Link href="/contact" className={styles.link}>Vault</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
