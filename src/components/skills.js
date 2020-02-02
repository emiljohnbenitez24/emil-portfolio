import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';


const MainDiv = styled.div`
    background:black;
    min-height:50vh;
    font-family:arial cursive;
    text-align:center;
    color:white;
    opacity:.9;
    p{
        font-size:12px;
        opacity:.7;
    }
`

const Skills = () => {
    return (
        <MainDiv id="skills">
            <Container>
                <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                    <h1 style={{ color: '#FF7E00', fontWeight: 'bold', padding: '5vh' }}>My Skills</h1>
                </ScrollAnimation>
                <Row style={{ padding: '5vh' }} className="justify-content-md-center">
                    <Col md="auto">
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <h4 style={{ color: '#FF7E00' }}>Front End</h4>
                            <hr style={{ border: '5px solid white', width: '15vh' }} />
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Photoshop</p>
                            <p>Javascript</p>
                            <p>ReactJS & Redux</p>
                        </ScrollAnimation>
                    </Col>
                    <Col md="auto">
                        <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce={true}>
                            <h4 style={{ color: '#FF7E00' }}> Back End</h4>
                            <hr style={{ border: '5px solid white', width: '15vh' }} />
                            <p>PHP</p>
                        </ScrollAnimation>
                    </Col>
                    <Col md="auto">
                        <ScrollAnimation animateIn="fadeIn" delay={1000} animateOnce={true}>
                            <h4 style={{ color: '#FF7E00' }}>Database</h4>
                            <hr style={{ border: '5px solid white', width: '15vh' }} />
                            <p>MySql</p>
                            <p>MongoDB</p>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </MainDiv>
    )
}

export default Skills