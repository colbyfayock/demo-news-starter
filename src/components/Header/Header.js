import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Container from '@/components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <p className={styles.headerTitle}>
            <Link href="/">
              The Hundred
            </Link>
          </p>
          <p className={styles.headerTagline}>
            <Link href="/">
              Know everything. No Limits.
            </Link>
          </p>
        </div>
        <ul className={styles.headerLinks}>
          <li>
            <a href="https://github.com/colbyfayock/demo-news-starter" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
