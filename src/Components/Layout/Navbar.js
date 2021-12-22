import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
