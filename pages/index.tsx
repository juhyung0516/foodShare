import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Router, { withRouter } from "next/router";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import SearchLocation from "../component/SearchLocation";
//import TestModals from "../component/testModal";
// const Home: NextPage = () => {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.search}>
//         <SearchLocation />
//         <TestModals />
//       </div>
//     </div>
//   );
// };
// export default Home;
