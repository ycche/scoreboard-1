import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import InfoSection from '../Components/HomeScreen/infoSection'
import Navbar from '../Components/HomeScreen/navbar'
import Cookies from 'js-cookie'
function HomePage() {
  return (
    <div>
    <Navbar>
    </Navbar>
    <InfoSection></InfoSection>
    </div>

  )
}

export default HomePage
