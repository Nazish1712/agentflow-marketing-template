import { useState } from 'react'
import './App.css'
import ModeToggle from "./components/ModeToggle"
import {Navbar} from "./components/Navbar"
import Hero from "./components/Hero"
import LogoCloud from './components/LogoCloud'
import Features from './components/features/Features'
import Speed from './components/Speed'
import {FeaturesSeconday} from './featuresSecondary/FeaturesSeconday'

function App() {

return (
    <div className="min-h-screen">
   <Navbar/>
   <Hero/>
   <LogoCloud/>
   <Features/>
   <Speed/>
   <FeaturesSeconday/>
     </div>
  )
}

export default App
