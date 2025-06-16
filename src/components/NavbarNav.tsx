import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';

// Logo CSS
const logoStyle = `
  .pyramid-loader {
    position: relative;
    width: 40px;
    height: 40px;
    display: inline-block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
    margin-right: 10px;
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }

  .pyramid-loader .wrapper .side {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  .pyramid-loader .wrapper .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
  }

  .pyramid-loader .wrapper .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
  }

  .pyramid-loader .wrapper .side3 {
    transform: rotateX(30deg);
    background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
  }

  .pyramid-loader .wrapper .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
  }

  .pyramid-loader .wrapper .shadow {
    width: 15px;
    height: 15px;
    background: #8B5AD5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-10px);
    filter: blur(12px);
  }

  .brand-text {
    background: linear-gradient(45deg, #2BDEAC, #F028FD, #2F2585);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .custom-nav-link {
    color: #444444 !important;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: 0 5px;
    padding: 8px 12px !important;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
  }

  .custom-nav-link:hover {
    color: #2F2585 !important;
    background-color: rgba(47, 37, 133, 0.05);
  }

  .custom-nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 5px;
    left: 50%;
    background: linear-gradient(90deg, #2BDEAC, #F028FD);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .custom-nav-link:hover::after {
    width: 60%;
  }
`;

function NavbarNav() {
  const {favorites} = useStore();
  return (
    <>
      <style>{logoStyle}</style>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <div className="pyramid-loader">
              <div className="wrapper">
                <span className="side side1"></span>
                <span className="side side2"></span>
                <span className="side side3"></span>
                <span className="side side4"></span>
                <span className="shadow"></span>
              </div>
            </div>
            <span className="brand-text">Serenità</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="custom-nav-link">Ana Sayfa</Nav.Link>
              <Nav.Link as={Link} to="/about" className="custom-nav-link">Hakkımızda</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="custom-nav-link">İletişim</Nav.Link>
              <Nav.Link as={Link} to="/users" className="custom-nav-link">Kullanıcılar</Nav.Link>
              <Nav.Link as={Link} to="/favorites" className="custom-nav-link">Favoriler({favorites.length})</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarNav;