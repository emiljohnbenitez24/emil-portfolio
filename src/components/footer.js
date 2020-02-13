import React from 'react';
import styled from 'styled-components'
import { IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-scroll'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaInstagram, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import { MdContactPhone, MdEmail } from 'react-icons/md'


const MainDiv = styled.div`
    background:#DCDCDC;
    box-shadow: 0px 10px 5px #888, 0px -2px 5px #888;
    font-family:Roboto Slab, serif;
    min-height: 65vh;
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
                    style={{ color: '#8A2BE2' }} />
                </Link>
                <Row style={{ padding: '4vh', border: '2px solid #8A2BE2', height: '80vh', margin: '40px 10px 10px 10px' }}>
                    <Col>
                        <h3 style={{ color: 'black', opacity: '.7' }}>Get In Touch</h3>
                        <Form style={{ marginTop: '5vh' }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" required />
                                <Form.Text className="text-muted">
                                    I'll never share your email with anyone else.
                                  </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control placeholder="Enter Comment" as="textarea" rows="3" required />
                            </Form.Group>
                            <Button style={{ backgroundColor: '#8A2BE2' }} type="submit">
                                Submit
  </Button>
                        </Form>
                    </Col>
                </Row >
                <Row style={{ padding: '4vh' }}>
                    <Col>
                        <a style={{ color: '#8A2BE2' }} href="https://www.facebook.com/kriemjohn.benitez.7"><FaFacebook size={32} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#8A2BE2' }} href="https://www.linkedin.com/in/emil-john-benitez-11987b146/"><FaLinkedin size={32} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#8A2BE2' }} href="https://github.com/emiljohnbenitez24"><FaGithub size={32} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#8A2BE2' }} href="#"><FaInstagram size={32} style={{ marginRight: '2vh' }} /></a>
                        <a style={{ color: '#8A2BE2' }} href="#"><FaTwitterSquare size={32} /></a>

                    </Col>
                </Row >
            </Container >
        </MainDiv >
    )
}

export default Footer;