import styled from 'styled-components';

export const ContactContainer = styled.div `

  z-index: 1;
  height: 100%;
  width: 100%;
  display: block;
  align-items: center;
  height: 1000px;
  margin-bottom: 20px;

  top: 0;
  left: 0;

`

export const ContactWrapper = styled.div `
  color: #fff;
`

export const Logo = styled.div `
  position: absolute;
  background: transparent;
  cursor: pointer;
  outline: none;
`

export const BackgroundContainer = styled.div `
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  height: 900px;
`

export const BackgroundH1 = styled.h1 `
  font-size: 36px;
  font-weight: bold;
  color: #000;
  text-align: center;
`
export const TextContainer = styled.div `
  margin-top: -35px;

`

export const BackgroundImage = styled.img `
  width: 100%;
  height: 100%;
`

export const ContactInfoContainer = styled.div `
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  box-sizing: border-box;


`
export const Container = styled.div `
  position: relative;
  z-index: 2;
  max-width: 900px;
  justify-content: center;
  align-items: center;
  top: 140px;
  margin: 0 auto;

  @media screen and (min-width 1441px){
    padding: 0 40px;
  }

`
export const ContactForm = styled.form `
    background: #fff;
    max-width: 720px;
    padding: 70px 100px;
    margin: auto;
    margin-bottom: -395px;
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.25);
    border-radius: 5px;
    margin-top: 55px;


`
export const ContactInputs = styled.div `
  float: none !important;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  margin-bottom: 4px !important;
`

export const ContactLabel = styled.label `
  color: #000;
  display: inline-block;
  margin-bottom: 6px;

`

export const ContactField = styled.input `
  height: 55px;
  width: 100%;
  display: block;
  padding-left: 10px;

`

export const ContactOption = styled.option `
  font-size: 10px;
`
export const ContactType = styled.select `
  height: 55px;
  width: 100%;
  display: block;
  padding-left: 10px;
`

export const ContactText = styled.textarea `
height: 200px;
width: 100%;
display: block;
padding-left: 10px;
font-size: 16px;
`

export const ContactH1 = styled.h1 `
  font-size: 15px;
  color: #000;
`

export const ContactButtonWrapper = styled.div `
  width: 90%;
  margin: auto;
  padding-top: 15px;
`
export const ContactButton = styled.input `
width: 100%;
height: 67px;
padding: 20px;
margin-top: 10px;
border-radius: 2px;
background: linear-gradient(
 90deg,
 rgb(39, 176, 255) 0%,
 rgb(0, 232, 236) 100%
);
outline: none;
border: none;
color: #fff;
font-size: 1rem;
cursor: pointer;
`

export const ErrorMessage = styled.p `
  color: red;
  font-size: 10px;
  margin-top: 2px;
`
export const SuccessImage = styled.img `
  width: 90%;
  height: 90%;
`
export const SuccessH1 = styled.h1 `
  font-size: 28px;
  text-decoration: none;
  color: #000;
  text-align: center;
  margin-top: 50px;
`

export const SuccessContainer = styled.div `

background: #fff;
max-width: 720px;
padding: 70px 100px;
margin: auto;
margin-bottom: -395px;
box-shadow: 0 0 10px 2px rgba(0,0,0,0.25);
border-radius: 5px;
margin-top: 71px;

`
