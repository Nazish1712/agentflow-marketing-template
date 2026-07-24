import { useState } from 'react'
import './App.css'
import ModeToggle from "./components/ModeToggle"
import {Navbar} from "./components/Navbar"
import Hero from "./components/Hero"
import LogoCloud from './components/LogoCloud'

function App() {

return (
    <div className="min-h-screen">
   <Navbar/>
   <Hero/>
   <LogoCloud/>
     </div>
  )
}

export default App
