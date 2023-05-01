import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg4 from "../assets/img/proyecto.png";
import projImg5 from "../assets/img/proyecto1.png";
import projImg6 from "../assets/img/proyecto3.png";

import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Empresa Emergente",
      description: "Diseño y Desarrollo",
      imgUrl: projImg1,
    },
    {
      title: "Empresa Emergente",
      description: "Diseño y Desarrollo",
      imgUrl: projImg5,
    },
    {
      title: "Empresa Emergente",
      description: "Diseño y Desarrollo",
      imgUrl: projImg3,
    },
    {
      title: "Empresa Emergente",
      description: "Diseño y Desarrollo",
      imgUrl: projImg4,
    },
    {
      title: "Empresa Emergente",
      description: "Diseño y Desarrollo",
      imgUrl: projImg2,
    },
    {
      title: "Empresa Emergente",
      description: "Diseño y Desarrollo",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Precios accesibles para negocios locales en busca de crecimiento.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Ventana 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Ventana 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Ventana 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="section">
                      <p>Aumento de las ventas: una página web puede ser una herramienta de venta muy efectiva, permitiéndote mostrar tus productos o servicios de una manera atractiva y ofrecer una forma fácil y segura de comprarlos en línea.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Control completo de tu marca: al tener una página web, tienes el control total de la imagen y la marca de tu negocio en línea, lo que te permite mostrarla de la forma que mejor se adapte a tus necesidades y objetivos.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
