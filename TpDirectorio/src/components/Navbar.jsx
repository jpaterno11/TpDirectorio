import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarGeneral() {
  return (
    <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
      <Container className="justify-content-center">
        <Nav>
          <Nav.Link
            as={NavLink}
            to="/"
            className={({ isActive }) => isActive ? "fw-bold text-primary" : ""}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/estadisticas"
            className={({ isActive }) => isActive ? "fw-bold text-primary" : ""}
          >
            Estadísticas
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contacto"
            className={({ isActive }) => isActive ? "fw-bold text-primary" : ""}
          >
            Contacto
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarGeneral;
