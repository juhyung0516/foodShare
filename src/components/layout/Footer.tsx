import React from "react";
import styles from "styles/Footer.module.scss";

function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <footer>
        <nav>
          <a href="" target="_blank">
            유한책임회사 AAAAA
          </a>{" "}
          |
          <a href="" target="_blank">
            Github
          </a>
        </nav>
        <p>
          <span>저자 : HongJuHyung</span>
          <br />
          <span>이메일 : ainu0516@gmail.com</span>
          <br />
          <span>Copyright 2022. cocoder. All Rights Reserved.</span>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
