import React from 'react'
import {ContactContainer,
        ContactWrapper,
        BackgroundContainer,
        BackgroundH1,
        BackgroundImage,
        ContactInfoContainer,
        ContactForm,
        ContactLabel,
        ContactField,
        ContactType,
        ContactOption,
        ContactH1,
        ContactText,
        ContactInputs,
        Container,
        ContactButton,
        ContactButtonWrapper,
        ErrorMessage,
        TextContainer

  } from './ContactElements';

import Image from "../../Images/contactBackground.jpeg"
import validateInfo from "./validateInfo"
import useForm from './useForm'

function ContactSection({submitForm}) {
  const {handleChange, values,handleSubmit,errors} = useForm(submitForm, validateInfo);
  return (

    <ContactContainer>
      <ContactWrapper>

        <BackgroundContainer>
          <BackgroundImage src = {Image}/>

        </BackgroundContainer>
        <Container>
          <TextContainer>
            <BackgroundH1>
              Have a question or reporting a bug? Fill out the form below or e-mail us at
              <a href =   "mailto : betternotepad@gmail."> betternotepad@gmail.com </a>
            </BackgroundH1>
          </TextContainer>

        <ContactInfoContainer>
          <ContactForm onSubmit = {handleSubmit} >
            <ContactInputs>
              <ContactLabel htmlFor= 'firstName'>
                First Name:
              </ContactLabel>
              <ContactField type='text' name='firstName'
                            placeholder= 'Enter your First Name'
                            value = {values.firstName}
                            onChange = {handleChange}/>
            {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            </ContactInputs>

            <ContactInputs>
              <ContactLabel htmlFor= 'email'>
                E-mail:
              </ContactLabel>
              <ContactField type='text' name='email' placeholder= 'Email'
                            value = {values.email}
                            onChange = {handleChange}/>
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </ContactInputs>
            <ContactInputs>
              <ContactLabel htmlFor= 'type'>
              What is your enquiry about?
              </ContactLabel>
              <ContactType name= 'type' id = 'type'   value = {values.type}
                onChange = {handleChange}>
                <ContactOption value = 'Bug'> Report a Bug </ContactOption>
                <ContactOption value = 'Assist'> Installation or Usage </ContactOption>
                <ContactOption value = 'Partner'> Become a partner or representative </ContactOption>
              </ContactType>
            </ContactInputs>
            <ContactInputs>
              <ContactLabel htmlFor ='description'> </ContactLabel>
              <ContactText name = 'description' id = 'description' placeholder = 'How can we help?'
                           value = {values.description}
                           onChange = {handleChange}/>
              {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
            </ContactInputs>
            <ContactH1>
              By submitting, you confirm that you agree to the storing and processing
              of your personal data described in our Privacy notice.
            </ContactH1>
            <ContactButtonWrapper>
              <ContactButton type= 'submit' value = 'Send enquiry'/>
            </ContactButtonWrapper>
          </ContactForm>
        </ContactInfoContainer>
        </Container>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default ContactSection
