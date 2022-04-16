import styles from "../styles/Header2.module.scss";
import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { grey } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface IMenuOpen {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}
function Header2({ menuOpen, setMenuOpen }: IMenuOpen) {
  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen); // on,off 개념 boolean
  };
  return (
    <div className="header">
      <ul className={styles.header_wrapper}>
        <div id="navbar" className={styles.navbar}>
          <div className={styles.navbar_logo}>
            <Link href="/">
              <a>Food Order Share</a>
            </Link>
          </div>
          <div className={styles.navbar_link}>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete" disableRipple>
                <AddShoppingCartIcon
                  fontSize="large"
                  sx={{ color: grey[900] }}
                />
              </IconButton>
              <IconButton aria-label="delete" disableRipple>
                <Link href="/notification">
                  <NotificationsNoneSharpIcon
                    fontSize="large"
                    sx={{ color: grey[900] }}
                  />
                </Link>
              </IconButton>
              <IconButton aria-label="delete" disableRipple>
                <AccountCircleSharpIcon
                  fontSize="large"
                  sx={{ color: grey[900] }}
                />
              </IconButton>
              <IconButton
                aria-label="delete"
                className={menuOpen ? "show-menu" : "hide-menu"}
                disableRipple
              >
                <MenuIcon
                  className={styles.list}
                  fontSize="large"
                  sx={{ color: grey[900] }}
                  onClick={() => toggleMenu()}
                />
              </IconButton>
            </Stack>
          </div>
        </div>
        <div id="Search_Address" className={styles.search}></div>
      </ul>
    </div>
  );
}

export default Header2;
