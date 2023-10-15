import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fw-bold fixed-top">
        <Container>
          <Navbar.Brand href="/">
            <h3>
              <i class="bi bi-cloud-plus-fill"></i> CRUD Operation
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/">
                <i class="bi bi-house-door-fill"></i> Home
              </Nav.Link>
              <Nav.Link href="/Create">
                <i class="bi bi-database-fill-add"></i> Add New-Data
              </Nav.Link>
              <Nav.Link href="/Read">
                <i class="bi bi-bookmark-fill"></i> Existing-User's
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;