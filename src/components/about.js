import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap'
import emilImg from '../assets/emil.jpg';


const About = () => {

    const MainDiv = styled.div`
    background:#DCDCDC;
    min-height:60vh;
    align-items:center;
    justify-content:center;
    padding:5vh;
    .about-me, .skills{
        padding:5vh;
    }
    h1{
        width: 100%; 
        text-align: center; 
        border-bottom: 2px solid #8A2BE2;
        line-height: 0.1em;
        margin: 10px 0 20px; 
    }
    p{
        margin-top:10vh;
    }
        `

    return (
        <MainDiv id="about">
            <Container>
                <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
                    <h1 style={{ color: '#000', fontWeight: 'bold', opacity: '.7' }}><span
                        style={{ background: '#DCDCDC', padding: '0 20px' }}
                    >About Me</span></h1>
                </ScrollAnimation>
                <Row className="about-me">
                    <Col sm={4} style={{ textAlign: 'center' }}>
                        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                            <Image src={emilImg} style={{ boxShadow: '5px 5px #8A2BE2' }} width={200} height={200}></Image>
                        </ScrollAnimation>
                    </Col>
                    <Col sm={8}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <p style={{ opacity: '.6', float: 'left' }}>I'm a Front End Web Developer from Pasig City
                  I'm passionate about building interactive websites, I loved coding and learning something new
                  about Web Development.</p >
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
            <div className="second-div"></div>
        </MainDiv >
    )
}

export default About;