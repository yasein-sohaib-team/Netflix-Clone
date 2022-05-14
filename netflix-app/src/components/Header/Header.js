import { Nav, Container, Navbar } from "react-bootstrap";
import netflixLogo from "../../assets/logo.png";
import styled from "styled-components";

const LogoImg = styled.img`
  height: 5vh;
  width: 7.5vw;
`;

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <LogoImg src={netflixLogo} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/getMovieById/:id">Movies</Nav.Link>
          <Nav.Link href="/favList">My List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
