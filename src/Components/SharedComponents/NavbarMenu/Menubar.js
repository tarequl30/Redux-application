import React, { useEffect, useState } from "react";
import "./Menubar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Menubar = () => {
  const [isSticky, setSticky] = useState(false);
  // const dispatch= useDispatch()

  const cardProduct = useSelector((state) => {
    return state.AllProducts.addToCard;
  });
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
      <Navbar.Brand as={Link} to="/">
        LOGO
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navItems">
          <Nav.Link as={Link} to="/" className="mr-md-4">
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
          <Nav.Link as={Link} to="/cartProduct" className="mr-md-4">
            <FontAwesomeIcon icon={faShoppingBag} />{" "}
            <sup className="bg-primary p-1 rounded">{cardProduct.length}</sup>
          </Nav.Link>
        </Nav>
        <Link to="/login"><Button>LogIn</Button></Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menubar;
