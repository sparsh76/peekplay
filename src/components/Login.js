import React from 'react'
import styled from 'styled-components'
import Header from './Header'

function Login() {
  return (
    <Container>
        <Header />
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>SIGN UP</SignUp>
            <Description>
                Get Premier Access to Raya and the Last Dragon for an additional 
                fee with a peekplay subscription.
                As of 1/11/23, the price of peekplay will increase by &1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
      
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px); 
    display: flex;
    align-items: top;
    justify-content: center;
    

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        z-index: -1;



    }

`
const CTA = styled.div`

    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    

`
const CTALogoOne = styled.img``

const SignUp = styled.a`
    color: #f9f9f9;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }

`

const Description = styled.div`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-allign: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
    padding: 20px 0;

`