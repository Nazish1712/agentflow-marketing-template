import React from 'react'
import {Logo} from "./Logo"
import {Button} from "./ui/button"
import {IconLayoutSidebar, IconX} from "@tabler/icons-react"
import {useState} from "react"
import {motion, AnimatePresence} from "motion/react"

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

export const Navbar = () => {
  return (
        <div className="border-b border-neutral-200 dark:border-neutral-800">
            <DesktopNavbar/>
            <MobileNavbar/>
        </div>
    
  )
}


export const MobileNavbar = () => {
  const [open, setOpen] = useState(false)
  return(
    <div className="flex md:hidden px-4 py-2 justify-between">
      <Logo/>
      <button onClick={()=> setOpen(!open)}>
      <IconLayoutSidebar className="size-4"/>
      </button>

      <AnimatePresence>
      {open && 
      <motion.div
      initial={{
        opacity: 0,}} 
        animate={{
          opacity:1,
          backdropFilter: "blur(15px)",
          background: "transparent",
        }}
        exit={{
          opacity:0,
          backdropFilter: "blur(0px)",
          background: 'rgba(255, 255, 255, 0.5)',
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed inset-0 h-full w-full bg-white z-50 px-4 py-2">
        <div className="flex justify-between">
        <Logo/>
        <button className="absolute right-2 top-2" onClick={()=> setOpen(false)}>
          <IconX/>
        </button>
        </div>
        <div className="flex flex-col gap-6 my-10">
          {navLinks.map((item, index)=>(
            <motion.div i
            initial={{
              opacity: 0,
              x: -4,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.2,
              delay: index*0.1,
            }}
            key={index + item.title}>
            <a key={index} href={item.href} className="text-2xl text-neutral-600 dark:text-neutral-400 font-medium">{item.title}</a> 
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-end gap-4">
        <button className="text-sm px-4 inline-block py-2 rounded-md text-neutral-600 dark:text-neutral-400 font-medium">Login</button>
        <Button>Signup</Button>
        </div>
        </motion.div>}
        </AnimatePresence>
    </div>
  )
}


export const DesktopNavbar = () => {
  return(
    <div className="max-w-7xl mx-auto py-4 flex items-center justify-between hidden lg:flex">
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
  )
}