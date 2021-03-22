import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../image/clock.jpg";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#">
          <img
            alt="logo"
            src={logo}
            width="35"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Schedule your time
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header