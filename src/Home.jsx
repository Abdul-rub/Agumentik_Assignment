import React from 'react'
import MapSection from './Component/MapSection'
import MengenalDestinize from './Component/MengenalDestinize'
import Testimonial from './Component/Testimonial'
import Accordion from './Component/Accordion'
import { Intro } from './Component/Intro'
import LandingPage from './Component/LandingPage'
import Destiny from './Component/Destiny'


const Home = () => {
  return (
    <div>
      <LandingPage />
      <Destiny />
      <MapSection />
      <MengenalDestinize />
      <Testimonial />
      <Accordion />


    </div>
  )
}

export default Home