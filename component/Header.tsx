import styles from "../styles/Header.module.scss";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

interface IMenuOpen {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function Header({ menuOpen, setMenuOpen }: IMenuOpen) {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header_left}>
          {menuOpen ? (
            <svg
              className={styles.returnArrow}
              onClick={() => setMenuOpen(!menuOpen)}
              focusable="false"
              aria-hidden="true"
              data-testid="MenuOpenIcon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              enable-background="new 0 0 1000 1000"
              xmlSpace="preserve"
            >
              <metadata>
                {" "}
                Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
              </metadata>
              <g>
                <path d="M380.5,100.5l-350,350c-27.3,27.3-27.3,71.6,0,99l350,350c27.3,27.3,71.6,27.3,99,0c27.3-27.3,27.3-71.6,0-99L249,570h671c38.7,0,70-31.3,70-70c0-38.7-31.3-70-70-70H249l230.5-230.5c13.7-13.7,20.5-31.6,20.5-49.5c0-17.9-6.8-35.8-20.5-49.5C452.1,73.2,407.8,73.2,380.5,100.5z" />
              </g>
            </svg>
          ) : (
            <svg
              className={styles.allMenu}
              onClick={() => setMenuOpen(!menuOpen)}
              focusable="false"
              viewBox="0 0 1000 1000"
              aria-hidden="true"
            >
              <path d="M935.6,527.2H581.7c-30.1,0-54.4,24.4-54.4,54.4v353.9c0,30.1,24.4,54.4,54.4,54.4h353.9c30.1,0,54.4-24.4,54.4-54.4V581.7C990,551.6,965.6,527.2,935.6,527.2z M935.6,935.6H581.7V581.7h353.9V935.6z M418.3,527.2H64.4c-30.1,0-54.4,24.4-54.4,54.4v353.9c0,30.1,24.4,54.4,54.4,54.4h353.9c30.1,0,54.4-24.4,54.4-54.4V581.7C472.8,551.6,448.4,527.2,418.3,527.2z M418.3,935.6H64.4V581.7h353.9V935.6z M935.6,10H581.7c-30.1,0-54.4,24.4-54.4,54.4v353.9c0,30.1,24.4,54.4,54.4,54.4h353.9c30.1,0,54.4-24.4,54.4-54.4V64.4C990,34.4,965.6,10,935.6,10z M935.6,418.3H581.7V64.4h353.9V418.3z M418.3,10H64.4C34.4,10,10,34.4,10,64.4v353.9c0,30.1,24.4,54.4,54.4,54.4h353.9c30.1,0,54.4-24.4,54.4-54.4V64.4C472.8,34.4,448.4,10,418.3,10z M418.3,418.3H64.4V64.4h353.9V418.3z" />
            </svg>
          )}
        </div>
        <div>
          <Link href="/">
            <a className={styles.homeLogo}>Food Order Share</a>
          </Link>
        </div>
        <div className={styles.header_right}>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete">
              <Link href="/notification">
                <NotificationsNoneSharpIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="delete">
              <AccountCircleSharpIcon />
            </IconButton>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Header;
