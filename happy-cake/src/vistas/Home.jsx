import { Container } from "react-bootstrap";
import ControlledCarousel from "../componentes/Carrusel";
//import imgs from "../imgs";
const Home = () => {
  return (
    <Container className="d-flex flex-column align-items-center m-5">
      <div className="mb-3">
        <h1 className="my-2">
          Bienvenido a <span className="fw-bold">Happy Cake</span>
        </h1>
        <h4>El lugar donde las tortas son felices</h4>
      </div>
      <div>
        <ControlledCarousel />
      </div>
    </Container>
  );
};

export default Home;
