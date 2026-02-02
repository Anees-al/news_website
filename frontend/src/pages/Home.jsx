import React from 'react'
import Nav from '../components/Nav'
import Topheadlines from '../components/Topheadlines'
import Sports from '../components/Sports'
import BUsiness from '../components/BUsiness'
import Footer from '../components/Footer'
import Technology from '../components/Technology'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Topheadlines/>
      <Sports/>
      <BUsiness/>
      <Technology/>
      <Footer/>
    </div>
  )
}

export default Home
