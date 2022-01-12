import React from 'react'
import{ContactContainer,
       ContactWrapper,
       BackgroundContainer,
       BackgroundImage,
       Container,
       BackgroundH1,
       ContactInfoContainer,
       SuccessImage,
       SuccessH1,
       SuccessContainer
     } from './ContactElements';

import Image1 from "../../Images/contactBackground.jpeg"
import Image2 from "../../Images/successImg.svg"

function FormSuccess() {
  return (
    <ContactContainer>
      <ContactWrapper>
        <BackgroundContainer>
          <BackgroundImage src = {Image1}/>
        </BackgroundContainer>
        <Container>
          <BackgroundH1>
          Have a question or reporting a bug? Fill out the form below or e-mail us at
          <a href =   "mailto : betternotepad@gmail."> betternotepad@gmail.com </a>
          </BackgroundH1>
          <ContactInfoContainer>
            <SuccessContainer>
            <SuccessImage src = {Image2}/>
            <SuccessH1>
            We have recieved your enquiry!
            </SuccessH1>
            </SuccessContainer>
          </ContactInfoContainer>
        </Container>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default FormSuccess
