import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "../vistas/notFound.css";

const BarraNavegacion = () => {
  return (
    <>
      <Navbar sticky="top" bg="danger" variant="dark">
        <Navbar.Brand className="mx-5">Happy Cake</Navbar.Brand>
        <Container className="justify-content-end">
          <Link to="/" />
          <Link to="/home" className="text-white ms-3 text-decoration-none">
            <button type="button" class="btn btn-warning">
              Inicio
            </button>
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            <button type="button" class="btn btn-success">
              Contacto
            </button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraNavegacion;
