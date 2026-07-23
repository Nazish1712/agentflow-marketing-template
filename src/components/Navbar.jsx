import React from 'react'
import {Logo} from "./Logo"
import {Button} from "./ui/button"

const Navbar = () => {

    const navLinks = [
        {
        title: "Features",
        href: "#feature",
      },
        {
        title: "Product",
        href: "#product",
      },
        {
        title: "Socials",
        href: "#socials",
      },
        {
        title: "Pricing",
        href: "#pricing",
      },
      ]
  
      return (
        <div className="border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
              <Logo/>
              <div className="flex items-center gap-4">
                {navLinks.map((item,index)=>(
                    <a key={index} href={item.href} className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">{item.title}</a>      
                ))}
              </div>
              <div className="flex items-center gap-4">
                 <button className="text-sm px-4 inline-block py-2 rounded-md text-neutral-600 dark:text-neutral-400 font-medium">Login</button>
                 <Button>Signup</Button>
              </div>
            </div>
        </div>
    
  )
}

export default Navbar