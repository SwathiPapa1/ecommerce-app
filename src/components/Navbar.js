import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = ({ cartCount }) => {
  return (
    <>
      <style>
        {`
          .custom-navbar {
            background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
            padding: 12px 20px;
            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
          }

          .brand-text {
            font-size: 1.5rem;
            color: #ffdd57 !important;
            letter-spacing: 1px;
          }

          .nav-link-custom {
            color: #f1f1f1 !important;
            margin: 0 12px;
            font-weight: 500;
            transition: all 0.3s ease;
            border-radius: 6px;
            padding: 6px 12px;
          }

          .nav-link-custom:hover {
            background: rgba(255, 255, 255, 0.2);
            color: #ffdd57 !important;
            transform: scale(1.05);
          }

          .nav-link-custom.active {
            background: #ffdd57 !important;
            color: #2c5364 !important;
            font-weight: 600;
          }
        `}
      </style>

      <Navbar expand="lg" className="custom-navbar" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold brand-text">
            TechNova
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products" className="nav-link-custom">
                Products
              </Nav.Link>
              {/* ✅ Show cart count here */}
              <Nav.Link as={NavLink} to="/cart" className="nav-link-custom">
                Cart ({cartCount})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
