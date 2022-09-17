import React from 'react'
import { Container, Row, Col, Tab } from 'react-bootstrap'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from './ProjectCard'
import colorSharp2 from "../assets/img/color-sharp2.png"




export const Projects = () => {
  const projects = [
    {
        title: 'Dummy title 1',
        description: 'Dummy Description',
        imgUrl: projImg1,
    },
    {
        title: 'Dummy title 2',
        description: 'Dummy Description',
        imgUrl: projImg2,
    },
    {
        title: 'Dummy title 3',
        description: 'Dummy Description',
        imgUrl: projImg3,
    },
    {
        title: 'Dummy title 4',
        description: 'Dummy Description',
        imgUrl: projImg2,
    },
    {
        title: 'Dummy title 5',
        description: 'Dummy Description',
        imgUrl: projImg1,
    },
    {
        title: 'Dummy title 6',
        description: 'Dummy Description',
        imgUrl: projImg3,
    }
  ]
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                    <h2> Projects </h2>
                    <p> These are the projects that I have done so far</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-centre align-items-center' id='pills-tab'>
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" >Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
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
                                Lorem Ipsum
                        </Tab.Pane> 
                        <Tab.Pane eventKey="third">
                                Lorem Ipsum
                        </Tab.Pane> 
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        {/* <img src={colorSharp2} alt="bg-img2" className="background-imag-right" /> */}
    </section>
  )
}
