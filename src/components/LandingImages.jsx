import React from 'react'
import { easeOut, motion } from "motion/react"


const LandingImages = () => {
  return (
    <div className="relative min-h-140 w-full pt-20 perspective-distant">
     <motion.div 
     initial={{
        opacity:0,
        y: -100,
        }} 
        animate={{
        opacity: 1,
        y : 0,
        }}
        transition={{
            duration: 0.5,
            ease: 'easeOut',
        }}
         className="perspective-[4000px]">
        <img src="/images/hero1.webp" alt="Hero-image"
        height={1080} width={1920}
        className="absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-2xl"
        style={{transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"}}></img>
     </motion.div>
     <motion.div initial={{
        opacity:0,
        y: -100,
        }} 
        animate={{
        opacity: 1,
        y: 0,
        }}
        transition={{
            duration: 0.5,
            delay: 0.1,
            ease: 'easeOut',
        }}
        className="perspective-[4000px] translate-x-20 -translate-y-40">
     <img src="/images/hero2.webp" alt="Hero-image2"
    height={1080} width={1920}
    className="absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-2xl"
    style={{transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"}}></img>
     </motion.div>
  </div>
  )
}

export default LandingImages