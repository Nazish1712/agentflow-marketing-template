import { useState } from 'react'
import './App.css'
import ModeToggle from "./components/ModeToggle"
import {Navbar} from "./components/Navbar"
import Hero from "./components/Hero"
import LogoCloud from './components/LogoCloud'
import Features from './components/features/Features'
import Speed from './components/Speed'
import {FeaturesSecondary} from './featuresSecondary/FeaturesSeconday'
import { FeaturesTertiary } from './featuresTertiary/FeaturesTertiary'

function App() {

return (
    <div className="min-h-screen">
   <Navbar/>
   <Hero/>
   <LogoCloud/>
   <Features/>
   <Speed/>
   <FeaturesSecondary/>
   <FeaturesTertiary/>
     </div>
  )
}

export default App
