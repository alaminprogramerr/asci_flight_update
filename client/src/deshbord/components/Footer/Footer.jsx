
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink style={{fontSize:"30px", color:"#e14eca"}} href="">ASIC</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">About Us</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
