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
            if (prevScrollpos > 20)
                document.getElementById("navbar").classList.add("navbar-border");
            else {
                document.getElementById("navbar").classList.remove("navbar-border")
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
        background-color:transparent;
        -webkit-transition: background-color 0.5s ease-in-out;
        -moz-transition: background-color 0.5s ease-in-out;
        -ms-transition: background-color 0.5s ease-in-out;
        -o-transition: background-color 0.5s ease-in-out;
        transition: background-color 0.5s ease-in-out;
        .nav-items .nav-link{
            color:white;
            opacity:.7;
            font-family: 'Roboto Slab, serif';
            font-size:20px;
        }
        .navbar-brand .nav-items .nav-link{
            -webkit-transition: color 0.5s ease-in-out;
        -moz-transition: color 0.5s ease-in-out;
        -ms-transition: color 0.5s ease-in-out;
        -o-transition: color 0.5s ease-in-out;
        transition: bcolor 0.5s ease-in-out;
        }
    }
    .navbar-border{
        box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
        background-color:#DCDCDC;
        -webkit-transition: background-color 0.5s ease-in-out;
        -moz-transition: background-color 0.5s ease-in-out;
        -ms-transition: background-color 0.5s ease-in-out;
        -o-transition: background-color 0.5s ease-in-out;
        transition: background-color 0.5s ease-in-out;
        .navbar-brand{
            color:#8A2BE2 !important;
        }
        .nav-items .nav-link{
            color:black;
            opacity:.7;
            font-family: 'Roboto Slab, serif';
            font-size:20px;
        }
        .navbar-brand .nav-items .nav-link{
            -webkit-transition: color 0.5s ease-in-out;
        -moz-transition: color 0.5s ease-in-out;
        -ms-transition: color 0.5s ease-in-out;
        -o-transition: color 0.5s ease-in-out;
        transition: bcolor 0.5s ease-in-out;
        }
    }
    .container{
        z-index:2;
    }
    .h-tag{
           font-size:50px;
           color:#DCDCDC;
           font-family: Roboto Slab, serif;
           font-weight:bold;
    }
    .nav-items .nav-link:hover{
        text-decoration: underline;
    }
    .nav-items .nav-link:activer{
        text-decoration: underline;
    }
    .nav-items .nav-link:focus{
        color:#8A2BE2;
        opacity:1;
        text-decoration: underline;
    }

    .nav-items .nav-link:focus{
        color:#8A2BE2;
        opacity:1;
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
                    className='fixed-top nav-bar' collapseOnSelect expand="lg" >
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <Navbar.Brand style={{ fontFamily: 'Roboto Slab, serif ', color: 'white', opacity: '.7', fontWeight: 'bold', fontSize: '35px' }} href="#home">EJBenitez</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
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
                            >  <Nav.Link href="about" >About</Nav.Link> </Link>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                <Nav.Link href="skills">
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
                                <Nav.Link href="projects">
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
                        >Hi, Im Emil</h1>
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
                > <IoIosArrowDown style={{ color: '#8A2BE2' }} size={32}
                    />
                </Link>
            </Container>
            <div className="second-div">
            </div>
        </MainDiv >
    )
}

export default Home