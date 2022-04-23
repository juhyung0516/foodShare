import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Image from "next/image";
import styles from "styles/SearchLocation.module.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      //You have your locaton here
      console.log(pos.coords.latitude, pos.coords.longitude);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function SearchLocation() {
  return (
    <div id="search" className={styles.searchShow}>
      <div>
        <Image
          className={styles.bannerImage}
          src="/share.jpg"
          layout="fill"
          quality={100}
          draggable="false"
          loading="eager"
        />
        <a className={styles.ztest}>Where would you like it delivered?</a>
      </div>
      <div id="input-group" className={styles.wrapper}>
        <span>
          <button aria-label="delete" ng-click="" onClick={getLocation}>
            <MyLocationIcon
              className={styles.GPS}
              fontSize="large"
              cursor="pointer"
            />
          </button>
        </span>
        <div>
          <TextField
            className={styles.TextField}
            sx={{ m: 1, width: "40ch" }}
            placeholder="건물명, 도로명, 지번으로 검색하세요"
          />
          <FormControl
            className={styles.FormControl}
            sx={{ m: 1, width: "30ch" }}
            variant="outlined"
          ></FormControl>
        </div>
      </div>
    </div>
  );
}

export default SearchLocation;
