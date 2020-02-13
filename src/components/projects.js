import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap'
import flower from '.././assets/flower.png'
import phone from '.././assets/phone.png'
import noimage from '.././assets/noimage.jpg';
import ScrollAnimation from 'react-animate-on-scroll'

const Projects = () => {

  const MainDiv = styled.div`
    font-family:Roboto Slab, serif;
    background:#DCDCDC;
    text-align:center;
    justify-content:center;
    align-items:center;
    min-height:70vh;
    .hovereffect {
        width: 100%;
        min-height:40vh;
        overflow: hidden;
        position: relative;
        text-align: center;
        -webkit-transition: all 0.5s ease;
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
        -webkit-transition: all 0.5s ease;
        transition: all 0.4s ease-in;
      }
      
      .hovereffect:hover {
        background-color:rgb(11, 2, 34);
        opacity:#191970;
        -webkit-transition: all 0.5s ease;
      }

      .hovereffect:hover img{
        opacity:0;
      }
      
      .hovereffect h2 {
        text-align: center;
        align-items:center;
        margin-top:20px;
        justify-content:center;
        position: relative;
        font-size: 17px;
        padding: 10px;
      }
      
      .hovereffect a.info {
        display: inline-block;
        text-decoration:none;
        padding: 5px;
        border: 2px solid #8A2BE2;
        margin: 50px 10px 0 10px;
        background: rgba(0, 0, 0, 0.6);
      }
      
      .hovereffect a.info:hover {
        background-color:#8A2BE2;
        color:white !important;
      }
      
      .hovereffect a.info, .hovereffect h2 {
        -webkit-transition: all 0.4s ease-in;
        transition: all 0.4s ease-in;
        opacity: 0;
        color: #fff;
      }
      
      .hovereffect:hover a.info, .hovereffect:hover h2 {
        opacity: 1;
      }
        `

  return (
    <MainDiv id="projects">
      <Container style={{ padding: '5vh' }}>
        <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
          <h1 style={{ color: '#000', opacity: '.7', fontWeight: 'bold' }}>My Works</h1>
        </ScrollAnimation>
        <Row style={{ padding: '10vh' }} className="justify-content-md-center">
          <Col sm={4}>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div class="hovereffect" style={{ marginBottom: '5vh' }}>
                <Image width={200} class="img-responsive" src={phone} />
                <div class="overlay">
                  <h2>Shopping Cart <p >Using Pure React</p></h2>
                  <a class="info" href="https://ej-react-shoppingcart.herokuapp.com/">View Project</a>
                  <a class="info" href="https://github.com/emiljohnbenitez24/pure-react-shoppingcart">View Code</a>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col sm={4}>
            <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce={true}>
              <div class="hovereffect" style={{ marginBottom: '5vh' }}>
                <Image width={200} class="img-responsive" src={flower} />
                <div class="overlay">
                  <h2>FlowerShop WebApp <p >Using React w/Redux</p></h2>
                  <a class="info" href="https://ejflowershop.herokuapp.com">View Project</a>
                  <a class="info" href="https://github.com/emiljohnbenitez24/emil-flowershop">View Code</a>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col sm={4}>
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