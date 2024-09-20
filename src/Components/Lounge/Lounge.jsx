// eslint-disable-next-line no-unused-vars
import React,{useEffect}from 'react'

import imageGrid from '../../assets/images-Grid2.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='Lounge container section'>
      <div className="sectionContainer grid">

        <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <img src={imageGrid} />
        </div>

        <div className="textDiv">
          <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Help through the airport
            </span>
            <p>
              Our lounge is designed to provide a comfortable and safe environment for unaccompanied minors to relax.
            </p>

        </div>

        <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Priority Boarding
            </span>
            <p>
              Our lounge is designed to provide a comfortable and safe environment for unaccompanied minors to relax.
            </p>

        </div>

        <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Care on the flight
            </span>
            <p>
              Our lounge is designed to provide a comfortable and safe environment for unaccompanied minors to relax.
            </p>

        </div>

        <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Chauffeur-drive service
            </span>
            <p>
              Our lounge is designed to provide a comfortable and safe environment for unaccompanied minors to relax.
            </p>

        </div>

          </div>
        </div>

        


      </div>
    </div>
  )
}

export default Lounge