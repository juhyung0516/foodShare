import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import React from "react";
import SearchLocation from "../component/SearchLocation";
import TestModals from "../component/testModal";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <SearchLocation />
        <TestModals />
      </div>
    </div>
  );
};

export default Home;
