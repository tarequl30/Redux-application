import React, { useEffect, useState } from "react";
import "./Menubar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Menubar = () => {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <Navbar
      expand="lg"
      variant={isSticky ? "dark" : "light"}
      fixed="top"
      className={isSticky ? "navbarSticky px-5 py-2" : "navbarMain px-5 py-3"}
    >
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navItems">
          <Nav.Link href="#home" className="mr-md-4">
            HOME
          </Nav.Link>
          <NavDropdown
            className="mr-md-4"
            title="PAGES"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Pages1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Pages2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Pages3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="mr-md-4" title="SHOP" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">shop1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">shop2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">shop3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="mr-md-4"
            title="PRODUCT"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">product1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">product2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">product3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="" className="mr-md-4">
            <FontAwesomeIcon icon={faSearch} />
          </Nav.Link>
          <Nav.Link href="" className="mr-md-4">
            <FontAwesomeIcon icon={faShoppingBag} />
          </Nav.Link>
        </Nav>
        <Button>LogIn</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menubar;
