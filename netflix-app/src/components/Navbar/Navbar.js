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
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <LogoImg src={netflixLogo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorite">Favorite List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;


// //import { Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// // import Container from "react-bootstrap/Container"
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";

// function NavBar() {
//   return (
//     <>
//       {/* <nav>
//                 <Link to="/"> Home</Link>
//                 <Link to="favRecipes"> Favorite Recipes</Link>
//             </nav> */}
//       <Navbar bg="primary" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Yummy</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/favorite">Fav Recipes</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;
