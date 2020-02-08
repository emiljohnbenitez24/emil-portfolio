import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap'
import emilImg from '../assets/emil.png';


const About = () => {

    const MainDiv = styled.div`
    background:#F8F8FF;
    min-height:60vh;
    align-items:center;
    text-align:center;
    justify-content:center;
    padding:5vh;
    .about-me, .skills{
        padding:5vh;
    }
    h1{
        width: 100%; 
        text-align: center; 
        border-bottom: 2px solid #000; 
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
                    <h1 style={{ color: '#FF7E00' }}><span
                        style={{ background: '#F8F8FF', padding: '0 20px' }}
                    >About Me</span></h1>
                </ScrollAnimation>
                <Row className="about-me">
                    <Col sm={4}>
                        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                            <Image src={emilImg} width={200} height={200}></Image>
                        </ScrollAnimation>
                    </Col>
                    <Col sm={8}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <p style={{ opacity: '.6' }}>I'm a Front End Web Developer from Pasig City
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