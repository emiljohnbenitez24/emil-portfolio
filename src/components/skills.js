import React from 'react';
import styled from 'styled-components';
import { Image, Row, Col, ProgressBar } from 'react-bootstrap'
import frontEnd from '../assets/front-end.png'
import backEnd from '../assets/back-end.png'
import database from '../assets/database.png'
import ScrollAnimation from 'react-animate-on-scroll';


const MainDiv = styled.div`
    background:#8A2BE2;
    min-height:60vh;
    align-items:center;
    text-align:center;
    color:white;
    p{
        font-size:12px;
        opacity:.7;
    }
`

const Skills = () => {
    return (
        <MainDiv id="skills">
            <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                <h1 style={{ color: 'white', opacity: '.7', fontWeight: 'bold', padding: '5vh' }}>My Skills</h1>
            </ScrollAnimation>
            <Row style={{ padding: '5vh', flexBox: '2' }} className="justify-content-md-center">
                <Col sm={4}>
                    <h1 style={{ color: 'white', opacity: '.7' }}>Front-End</h1>
                    <Image src={frontEnd} width={100} />
                    <Row style={{ margin: '20px 0px 20px 0px' }}>
                        <Col>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                            <p>REACTJS</p>
                            <p>REDUX</p>
                            <p>PHOTOSHOP</p>
                        </Col>
                        <Col>
                            <ProgressBar animated style={{ marginBottom: '18px' }} variant="success" now={80} />
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="info" now={60} />
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="warning" now={60} />
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="primary" now={50} />
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="secondary" now={50} />
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="dark" now={70} />
                        </Col>
                    </Row>
                </Col>
                <Col sm={4}>
                    <h1 style={{ color: 'white', opacity: '.7' }}>Back-End</h1>
                    <Image src={backEnd} width={100} />
                    <Row style={{ margin: '20px 0px 20px 0px' }}>
                        <Col>
                            <p>PHP</p>
                            <p>NODEJS</p>
                            <p>EXPRESS</p>
                        </Col>
                        <Col>
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="success" now={50} />
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="info" now={40} />
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="warning" now={40} />
                        </Col>
                    </Row>
                </Col>
                <Col sm={4}>
                    <h1 style={{ color: 'white', opacity: '.7' }}>Database</h1>
                    <Image src={database} rounded width={100} />
                    <Row style={{ margin: '20px 0px 20px 0px' }}>
                        <Col>
                            <p>MONGGODB</p>
                            <p>MONGOOSE</p>
                            <p>MYSQL</p>
                        </Col>
                        <Col>
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="success" now={40} />
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="info" now={40} />
                            <ProgressBar animated style={{ marginBottom: '18px' }} striped variant="warning" now={60} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </MainDiv>
    )
}

export default Skills