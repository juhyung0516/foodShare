import Header2 from "./Header2";
import React, { useState } from "react";
import styles from "styles/Layout.module.scss";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header2 menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={styles.wrapper}>
        <div className={styles.content}>{children}</div>
      </div>
      <div>{/* <Footer /> */}</div>
    </>
  );
}

export default Layout;
