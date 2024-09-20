/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from  './Components/Home/Home'
// eslint-disable-next-line no-unused-vars
import Search from './Components/Search/Search'
import NavBar from './Components/Navbar/Navbar'
import Support from './Components/Support/Support'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import Travellers from './Components/Travelers/Travellers'
import Subscribers from './Components/Subscribers/Subscribers'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
        <NavBar/>
        <Home/>
        <Search/>
        <Support/>
        <Info/>
        <Lounge/>
        <Travellers/>
        <Subscribers/>
        <Footer/>
    </div>
  )
}

export default App