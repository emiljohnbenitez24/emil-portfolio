import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImg from '.././assets/pasigcity.jpg'
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-scroll";
import { IoIosArrowDown } from 'react-icons/io'


const Home = () => {

    const [state, setState] = useState(true)

    useEffect(() => {
        window.onscroll()
    })

    window.onscroll = () => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0px";
            } else {
                document.getElementById("navbar").style.top = "-90px";
            }
            prevScrollpos = currentScrollPos;
        }
    }

    const MainDiv = styled.div`
    background:#000 url(${backgroundImg});
    font-family:arial;
    min-height:100vh;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display:flex;
    color:white;
    background-attachment:fixed;
    text-align:center;
    align-items:center;
    background-size:cover;
    position:relative;
    .nav-bar{
        top: 0px;
        transition: top 0.5s;
        background-color:#FF7E00;
        .navbar-brand{
            color:white !important;
        }
    }
    .container{
        z-index:1;
    }
    .h-tag{
           font-size:60px;
           color:#FF7E00;
           font-family: Roboto Slab, serif;
           font-weight:bold;
    }
    .nav-items .nav-link{
        color:white;
        font-family: 'Roboto Slab, serif';
        font-size:20px;
    }
    .nav-items .nav-link:hover{
        opacity:.8;
    }
    .nav-items .nav-link:focus{
        color:orange
    }
    .second-div{
        background:black;
        width:100%;
        height:100%;
        opacity:.7;
        position:absolute;
    }
        `

    console.log(state)
    return (
        <MainDiv id="home">
            <Container>
                <Navbar id="navbar"
                    className='fixed-top nav-bar' collapseOnSelect expand="lg" variant="dark">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <Navbar.Brand style={{ fontFamily: 'Roboto Slab, serif ', color: '#FF7E00', fontWeight: 'bold', fontSize: '40px' }} href="#home">EJBenitez</Navbar.Brand>
                    </Link>
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
                                offset={-80}
                            >  <Nav.Link eventKey={1} href="about" >About</Nav.Link> </Link>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
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
                                offset={-70}
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
                        <h1
                            className="h-tag"
                        >Hi, Im Emil John</h1>
                        <p style={{ opacity: '.7' }}>ReactJS Web Developer</p>
                    </Col>
                </Row>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                > <IoIosArrowDown size={32}
                    />
                </Link>
            </Container>
            <div className="second-div">
            </div>
        </MainDiv >
    )
}

export default Home