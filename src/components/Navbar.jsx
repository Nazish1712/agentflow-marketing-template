import React from 'react'
import {Logo} from "./Logo"

const Navbar = () => {

    const navLinks = [
        {
        title: "Features",
        href: "",
      },
        {
        title: "Product",
        href: "",
      },
        {
        title: "Socials",
        href: "",
      },
        {
        title: "Pricing",
        href: "",
      },
      ]
  
      return (
        <div className="flex items-center justify-between">
            <div className="max-w-7xl mx-auto py-4">
              <Logo/>
              <div className="flex items-center gap-4">
                {navLinks.map((item,index)=>{

                })}
              </div>
            </div>
        </div>
    
  )
}

export default Navbar