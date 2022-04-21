import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Router, { withRouter } from "next/router";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import SearchLocation from "../component/SearchLocation";
import TestModals from "../component/testModal";

// pagination 예시용
import Pagination from "../component/pagination/pagination";
import { API_URL, GithubJob } from "../lib/api";

interface HomeProps {
  jobs: GithubJob[];
}

export default function Home(props: HomeProps) {
  const [jobs, setJobs] = useState<GithubJob[]>(props.jobs);
  const [page, setPage] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <SearchLocation />
        <TestModals />
        <Pagination
          current={page}
          onChange={setPage}
          hasNext={jobs.length === 50}
        />
      </div>
    </div>
  );
}
