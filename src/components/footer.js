import React from 'react';
import styled from 'styled-components'
import { IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-scroll'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaInstagram, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import { MdContactPhone, MdEmail } from 'react-icons/md'


const MainDiv = styled.div`
    background:#DCDCDC;
    box-shadow: 0px 10px 5px #888, 0px -2px 5px #888;
    font-family:Roboto Slab, serif;
    min-height: 60vh;
    color:white;
    align-items:center;
    justify-content:center;
    text-align:center;
    .v1{
        border-left: 5px solid white;
        height:50px;
    }
`
const Footer = () => {
    return (
        <MainDiv>
            <Container>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                > <IoIosArrowUp size={32}
                    />
                </Link>
                <Row style={{ padding: '4vh' }}>
                    <Col>
                        <a style={{ color: '#8A2BE2' }} href="https://www.facebook.com/kriemjohn.benitez.7"><FaFacebook size={20} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#8A2BE2' }} href="https://www.linkedin.com/in/emil-john-benitez-11987b146/"><FaLinkedin size={20} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#8A2BE2' }} href="https://github.com/emiljohnbenitez24"><FaGithub size={20} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#8A2BE2' }} href="#"><FaInstagram size={20} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#8A2BE2' }} href="#"><FaTwitterSquare size={20} /></a>

                    </Col>
                </Row >
                <Row >
                    <Col>
                        <h4 style={{ color: '#8A2BE2' }}>Contact Me:</h4>
                    </Col>

                </Row >
                <Row >
                    <Col>
                        <MdContactPhone style={{ color: '#8A2BE2' }} size={20} /> <span style={{ color: '#000', opacity: '.7' }}>09166047725</span>
                    </Col>
                </Row >
                <Row >
                    <Col>
                        <MdEmail style={{ color: '#8A2BE2' }} size={20} /> <span style={{ color: '#000', opacity: '.7' }}>emiljohnbenitez24@gmail.com</span>
                    </Col>

                </Row >
            </Container >
        </MainDiv >
    )
}

export default Footer;