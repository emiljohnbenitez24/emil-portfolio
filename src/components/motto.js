import React from 'react'
import mountainImg from '../assets/mountain.jpg'
import styled from 'styled-components'


const MainContainer = styled.div`
    background:#000 url(${mountainImg});
    min-height:80vh;
    display:flex;
    background-size:100% 100%;
    background-attachment:fixed;
    align-items:center;
    text-align:center;
    justify-content:center;
    position:relative;
    background-size: 100% 100%;
    .container{
        z-index:1;
    }
`
const SecondContainer = styled.div`
    background:black;
    height:100%;
    width:100%;
    position:absolute;
    opacity:.7;
`
const Motto = () => {
    return (
        <MainContainer>
            <SecondContainer></SecondContainer>
            <div className="container">
                <h1 style={{ color: 'white' }}>“Believe you can and you’re halfway there.”</h1>
                <p style={{ color: 'white', opacity: '.7' }}>— Theodore Roosevelt</p>
            </div>
        </MainContainer>
    )
}

export default Motto