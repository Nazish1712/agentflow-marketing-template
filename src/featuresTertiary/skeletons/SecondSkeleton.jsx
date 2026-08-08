import { LogoIcon } from '@/components/Logo'
import React from 'react'
import { cn } from "@/lib/utils";
import { motion } from 'motion/react';


export const SkeletonTwo = () => {

  return (
    <div className="flex-1 rounded-t-3xl gap-4 space-y-4 w-full h-full px-8 flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 gap-2 justify-center max-w-md mx-auto">
           <Item/>
           <Item src="/images/photo-1.webp"/>
           <Item src="/images/photo-2.webp"/>
           <Item/>
           
          </div>
        
        <div className="grid grid-cols-5 gap-2">
           <Item/>
           <Item src="/images/photo-3.webp"/>
           <Item containerClassName="from-black/50 via-transparent to-black/50">
            <div className="h-full w-full bg-white dark:bg-neutral-900 rounded-[12px] flex items-center justify-center relative z-20">
            <LogoIcon className="size-12"/>
            </div>
           </Item>
           <Item src="/images/photo-4.webp"/>
           <Item/>
          </div>

        <div className="grid grid-cols-4 gap-2 justify-center max-w-md mx-auto">
           <Item/>
           <Item src="/images/photo-5.webp"/>
           <Item src="/images/photo-6.webp"/>
           <Item/>
          </div>
        </div>)}


const Item = ({children, className, src , containerClassName}) => {
    return(
       <div className="w-full justify-self-center aspect-square  border border-dashed border-neutral-200 dark:border-neutral-700/80 [--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-neutral)]/10 relative p-[1px] rounded-xl">

      <motion.div 
      initial={{
         opacity:0,
         filter:"blur(10px)",
      }}
      whileInView={{
         opacity:1,
         filter:"blur(0px)"
      }}
      transition={{
         duration: Math.random() * 0.8 + 0.2,
         delay: Math.random() * 0.8 + 0.2,
      }}
      className={cn("relative flex items-center justify-center w-full h-full rounded-[12px] p-[1px]", src && "bg-gradient-to-br from-blue-500 via-transparent to-blue-500" ,containerClassName)}>
         {children ?? (       
         src && (
         <img src={src} alt="image" height={120} width={120} className="object-cover aspect-square rounded-[12px] relative z-20" />
         )
         )}
      </motion.div>

        <div className="absolute inset-0
bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:5px_5px] bg-fixed"></div>
       </div>
    )
}

