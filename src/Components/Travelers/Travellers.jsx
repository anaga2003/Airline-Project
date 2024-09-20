// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react'


import paris from '../../assets/paris.jpg'
import newyork from '../../assets/newyork.png'
import dubai from '../../assets/dubai.png'
import london from '../../assets/london.png'


import traveller1 from '../../assets/user (1).png'
import traveller2 from '../../assets/user (2).png'
import traveller3 from '../../assets/user (3).png'
import traveller4 from '../../assets/user (4).png'

import Aos from 'aos'
import 'aos/dist/aos.css'





const travellers = [
  {
    id: 1,
    destinationImage: paris,
    travellerImage: traveller2,
    travellerName:'FalconX',
    socialLink:'@falconX8'
  },
  {
  id: 2,
  destinationImage: newyork,
  travellerImage: traveller1,
  travellerName:'Wilson Lint',
  socialLink:'@wilsonlint'
},
  {
    id: 3,
    destinationImage: dubai,
    travellerImage: traveller3,
    travellerName:'Nicole Web',
    socialLink:'@nicoleweb'
  },
  {
    id: 4,
    destinationImage: london,
    travellerImage: traveller4,
    travellerName:'Naresh Lamer',
    socialLink:'@nareshlamer'
  }
]

const Travellers = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <div className='travellers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
          </h2>

          <div className="travellersContainer grid">

            {
              travellers.map(({id,destinationImage,travellerImage,travellerName,socialLink})=>{
                return(
                  <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveller">
                    <img src={destinationImage} className='destinationImage'/>

                    <div className="travellerDetails">
                      <div className="travellerPicture">
                          <img src={travellerImage} className="travellerImage"/>
                      </div>
                      <div className="travellerName">
                        <span>{travellerName}</span>
                        <p>{socialLink}</p>
                      </div>

                    </div>
                  </div>
                )

              })
            }
            

          </div>

      </div>
    </div>
  )
}

export default Travellers