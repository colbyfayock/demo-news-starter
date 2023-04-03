import Container from '@/components/Container';

import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <p>
          &copy; <a href="https://spacejelly.dev">Space Jelly</a>, {new Date().getFullYear()}
        </p>
        <p>
          The Hundred is <a href="https://www.esquire.com/uk/culture/a43377701/what-is-the-hundred-succession/" rel="noreferrer">based on a news company</a> from HBO TV series <a href="https://www.hbo.com/succession">Succession</a>.
        </p>
        <p>
          Site design inspired by some news sites and <a href="https://hypebeast.com/">Hypebeast</a>.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
