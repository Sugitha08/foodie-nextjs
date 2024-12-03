import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="logo" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browser Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
              {/* path === "/community" --->doesnot have nested path  */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
