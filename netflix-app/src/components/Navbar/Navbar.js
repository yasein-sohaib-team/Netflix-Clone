import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import netflixLogo from "../../assets/logo.png";
import { Nav, Container, Navbar } from "react-bootstrap";

const LogoImg = styled.img`
  height: 5vh;
  width: 7.5vw;
`;

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <LogoImg src={netflixLogo} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link href="/home">Home</Link>
          <Link href="/favorite">Favorite List</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
