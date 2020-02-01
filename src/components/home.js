import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImg from '.././assets/pasigcity.jpg'
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-scroll";
import { IoIosArrowDown } from 'react-icons/io'


const Home = () => {

    const MainDiv = styled.div`
    background:#000 url(${backgroundImg});
    font-family:arial;
    min-height:100vh;
    display:flex;
    color:white;
    text-align:center;
    align-items:center;
    background-size:cover;
    position:relative;
    .container{
        z-index:1;
    }
    .nav-items .nav-link{
        color:white;
    }
    .nav-items .nav-link:hover{
        opacity:.8;
    }
    .nav-items .nav-link:focus{
        color:orange
    }
    h1{
        font-size:7vh;
    }
    .second-div{
        background:black;
        width:100%;
        height:100%;
        opacity:.7;
        position:absolute;
    }
        `

    return (
        <MainDiv id="home">
            <Container>
                <Navbar style={{ top: '0', position: 'sticky', position: 'absolute', width: '100%', left: '0' }} collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand style={{ color: '#FF7E00', fontWeight: 'bold', fontSize: '30px' }} href="#home">EJBenitez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav className="nav-items">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >  <Nav.Link eventKey={1} href="about" >About</Nav.Link> </Link>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <Nav.Link eventKey={2} href="skills">
                                    Skills
                                </Nav.Link>
                            </Link>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <Nav.Link eventKey={2} href="projects">
                                    Projects
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row>
                    <Col>
                        <h1 style={{ fontSize: '50px', color: '#FF7E00', fontWeight: 'bold' }}>Hi, Im Emil John</h1>
                        <p style={{ opacity: '.7' }}>ReactJS Web Developer</p>
                    </Col>
                </Row>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                > <IoIosArrowDown size={32}
                    />
                </Link>
            </Container>
            <div className="second-div">
            </div>
        </MainDiv>
    )
}

export default Home