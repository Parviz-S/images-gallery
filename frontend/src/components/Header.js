import React from "react";
import { Container, Navbar } from "react-bootstrap";

const headerStyle = {
  backgroundColor: "#a2aaad",
};

const Header = ({ title }) => {
  return (
    <Navbar style={headerStyle} variant="dark">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
