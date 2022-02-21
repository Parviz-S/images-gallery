import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../img/logo.svg";

const headerStyle = {
  backgroundColor: "#eeeeee",
};

const Header = ({ title }) => {
  return (
    <Navbar style={headerStyle} variant="dark">
      <Container>
        <Logo style={{ maxWidth: "15rem", maxHeight: "4rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;
