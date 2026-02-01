import React from 'react'
import Nav from '../components/Nav'
import Topheadlines from '../components/Topheadlines'
import Sports from '../components/Sports'
import BUsiness from '../components/BUsiness'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Topheadlines/>
      <Sports/>
      <BUsiness/>
      <Footer/>
    </div>
  )
}

export default Home
