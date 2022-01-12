import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoSectionElements'
import {LinkButton} from '../ButtonElements'

function InfoSection({lightBg, id, imgStart, topLine, lightText, darkText, headline, description,
                      img, alt,ButtonLabel,lvisible,buttonLink}) {
  return (
    <InfoContainer lightBg = {lightBg} id = {id}  >
      <InfoWrapper>
        <InfoRow imgStart = {imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine> {topLine} </TopLine>
              <Heading lightText = {lightText}> {headline} </Heading>
              <Subtitle darkText = {darkText}> {description} </Subtitle>
              <BtnWrap>

                <LinkButton to = {buttonLink} visible = {lvisible}> {ButtonLabel} </LinkButton>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt = {alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
