import React from 'react'
import Banner from '../components/shared/Banner'
import Recommended from '../components/Recommended'
import LiveEvents from '../components/LiveEvents'
const Home = () => {
  return (
    <div>
        <Banner />
        <Recommended />
        <LiveEvents />
    </div>
  )
}

export default Home