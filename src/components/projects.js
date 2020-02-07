import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap'
import flower from '.././assets/flower.png'
import noimage from '.././assets/noimage.jpg';
import ScrollAnimation from 'react-animate-on-scroll'

const Projects = () => {

  const MainDiv = styled.div`
    font-family:arial cursive;
    background:#F8F8FF;
    text-align:center;
    justify-content:center;
    align-items:center;
    min-height:70vh;
    .hovereffect {
        width: 100%;
        height: 100%;

        overflow: hidden;
        position: relative;
        text-align: center;
        cursor: default;
      }
      
      .hovereffect .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
      }
      
      .hovereffect img {
        position: relative;
        -webkit-transition: all 0.4s ease-in;
        transition: all 0.4s ease-in;
      }
      
      .hovereffect:hover img {
        filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" /><feGaussianBlur stdDeviation="3" /></filter></svg>#filter');
        filter: grayscale(1) blur(3px);
        -webkit-filter: grayscale(1) blur(3px);
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
      }
      
      .hovereffect h2 {
        text-transform: uppercase;
        text-align: center;
        align-items:center;
        justify-content:center;
        position: relative;
        font-size: 17px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.6);
      }
      
      .hovereffect a.info {
        display: inline-block;
        text-decoration: none;
        padding: 5px;
        border: 1px solid #fff;
        margin: 50px 0 0 0;
        background-color: transparent;
      }
      
      .hovereffect a.info:hover {
        box-shadow: 0 0 5px #fff;
      }
      
      .hovereffect a.info, .hovereffect h2 {
        -webkit-transform: scale(0.7);
        -ms-transform: scale(0.7);
        transform: scale(0.7);
        -webkit-transition: all 0.4s ease-in;
        transition: all 0.4s ease-in;
        opacity: 0;
        filter: alpha(opacity=0);
        color: #fff;
        text-transform: uppercase;
      }
      
      .hovereffect:hover a.info, .hovereffect:hover h2 {
        opacity: 1;
        filter: alpha(opacity=100);
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }
        `

  return (
    <MainDiv id="projects">
      <Container style={{ padding: '5vh' }}>
        <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
          <h1 style={{ color: '#FF7E00', fontWeight: 'bold' }}>My Projects</h1>
        </ScrollAnimation>
        <Row style={{ padding: '5vh' }}>
          <Col>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div class="hovereffect" style={{ marginBottom: '5vh' }}>
                <Image width={200} class="img-responsive" src={noimage} />
                <div class="overlay">
                  <h2>Todo App</h2>
                  <a class="info" >Soon To Build</a>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce={true}>
              <div class="hovereffect" style={{ marginBottom: '5vh' }}>
                <Image width={200} class="img-responsive" src={flower} />
                <div class="overlay">
                  <h2>FlowerShop WebApp</h2>
                  <a class="info" href="https://ejflowershop.herokuapp.com">View Project</a>
                  <a class="info" href="https://github.com/emiljohnbenitez24/emil-flowershop">View Code</a>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation animateIn="fadeIn" delay={1000} animateOnce={true}>
              <div class="hovereffect">
                <Image width={200} class="img-responsive" src={noimage} />
                <div class="overlay">
                  <h2>Evaluation WebApp</h2>
                  <a class="info" >Soon To Build</a>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>

    </MainDiv>

  )
}

export default Projects