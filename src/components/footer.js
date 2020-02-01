import React from 'react';
import styled from 'styled-components'
import { IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-scroll'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaInstagram, FaTwitterSquare } from 'react-icons/fa'
import { MdContactPhone, MdEmail } from 'react-icons/md'


const MainDiv = styled.div`
    background:black;
    opacity:.9;
    font-family:arial cursive;
    min-height: 35vh;
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
                        <a style={{ color: '#FF7E00' }} href="https://www.facebook.com/kriemjohn.benitez.7"><FaFacebook size={20} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#FF7E00' }} href="#"><FaGithub size={20} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#FF7E00' }} href="#"><FaInstagram size={20} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#FF7E00' }} href="#"><FaTwitterSquare size={20} /></a>
                    </Col>
                </Row >
                <Row >
                    <Col>
                        <h4 style={{ color: '#FF7E00' }}>Contact Me</h4>
                    </Col>

                </Row >
                <Row >
                    <Col>
                        <MdContactPhone style={{ color: '#FF7E00' }} size={20} /> 09166047725
                   </Col>
                </Row >
                <Row >
                    <Col>
                        <MdEmail style={{ color: '#FF7E00' }} size={20} /> emiljohnbenitez24@gmail.com
                   </Col>

                </Row >
            </Container >
        </MainDiv >
    )
}

export default Footer;