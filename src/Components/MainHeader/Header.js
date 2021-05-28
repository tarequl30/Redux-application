import React from "react";
import Banner from "../Banner/Banner";
import NavbarMenu from "../SharedComponents/NavbarMenu/Menubar";

const Header = () => {
  return (
    <header>
      <NavbarMenu />
      <Banner />
    </header>
  );
};

export default Header;
