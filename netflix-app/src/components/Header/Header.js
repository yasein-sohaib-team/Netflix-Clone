import { Nav, Container, Navbar } from "react-bootstrap";
import netflixLogo from "../../assets/logo.png";
import styled from "styled-components";

const LogoImg = styled.img`
  height: 5vh;
  width: 7.5vw;
`;

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <LogoImg src={netflixLogo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/getMovieById/:id">Movies</Nav.Link>
            <Nav.Link href="/favList">Favorite List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
