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
import {Pricing} from './components/Pricing'
import { Faqs } from './components/Faqs'
import Footer from './components/Footer'

function App() {

return (
    <div className="min-h-screen overflow-x-hidden  bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-300">
   <Navbar/>
   <Hero/>
   <LogoCloud/>
   <Features/>
   <FeaturesTertiary/>
   <Speed/>
   <FeaturesSecondary/>
   <Pricing/>
   <Faqs/>
   <Footer/>
     </div>
  )
}

export default App
