import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{" "}
        <a href="https://ycl818.github.io/" target="_blank" rel="noopener">
          ycl818.github.io
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{" "}
        <a
          href="mailto:kevinyichienlee@gmail.com"
          target="_blank"
          rel="noopener"
        >
          kevinyichienlee@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{" "}
        <a href="https://github.com/ycl818" target="_blank" rel="noopener">
          ycl818
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/yi-chienlee/"
          target="_blank"
          rel="noopener"
        >
          yi-chienlee
        </a>
        ;
        {/* </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{" "}
        <a
          href=""
          target="_blank"
          rel="noopener"
        >
          
        </a>
        ; */}
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{" "}
        <a
          href="https://www.instagram.com/qq_lyc0818/"
          target="_blank"
          rel="noopener"
        >
          qq_lyc0818
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp; codepen:{" "}
        <a href="https://codepen.io/LYC0818" target="_blank" rel="noopener">
          LYC0818
        </a>
        ;
      </p>
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
