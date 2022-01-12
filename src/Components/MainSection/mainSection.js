import React from 'react'
import {MainContainer,
   MainBackground,
   ImageBackground,
   MainBtnContainer,
   MainContent,
   MainH1,
   MainP} from './mainSectionElements';
import Image from "../../Images/background-img2.jpg"
import {ScrollButton} from '../ButtonElements';


function MainSection() {
  return (
    <MainContainer>
      <MainBackground>
        <ImageBackground src={Image} />
      </MainBackground>
      <MainContent>
        <MainH1>
          Work smarter and better.
        </MainH1>
        <MainP>
          A multi-functional text editor with the goal of increasing efficiency.
        </MainP>
        <MainBtnContainer>
          <ScrollButton to='/' primary='true' dark='true'>
            Get Started
          </ScrollButton>
        </MainBtnContainer>
      </MainContent>

    </MainContainer>
  )
}

export default MainSection
