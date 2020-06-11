import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./navbarstyle.css";

const NavTop = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav1" expand="md">
        <NavbarBrand>
          <h4 className="logo1">FOODGETTER</h4>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link
                  className="lin"
                  to="/home"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="  ">
              <NavLink>
                <Link
                  className="lin"
                  to="/menu"
                  style={{ textDecoration: "none" }}
                >
                  Menu
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  className="lin"
                  to="/special"
                  style={{ textDecoration: "none" }}
                >
                  Special
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  className="lin"
                  to="/about"
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  className="lin"
                  to="/cart"
                  style={{ textDecoration: "none" }}
                >
                  Cart
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavTop;
