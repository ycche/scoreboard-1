import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/sidebar'
import MainSection from '../Components/MainSection/mainSection'
import InfoSection from '../Components/InfoSection/InfoSection'
import Footer from '../Components/Footer/Footer'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../Components/Data'
function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <MainSection />
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    <InfoSection {...homeObjFour}/>
    <Footer/>
    </>
  )
}

export default Homepage
