import React from 'react'
import { motion } from "motion/react"
import { LogoIcon } from '@/components/Logo'
import { MsExcelIcon ,SlackIcon, InstaIcon} from '@/icons'
import { IconCircleDashedCheck } from '@tabler/icons-react'

export const SkeletonTwo = () => {
  return (
    <div className="flex-1 rounded-t-3xl gap-2 flex items-center justify-center w-full h-full inset-x-0 p-2 absolute"
    style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)"
    }}>
        <Circle className="flex items-center justify-center  border-neutral-200 shadow-sm size-40 z-[10] bg-white">
            <LogoIcon className="size-10 text-neutral-400"/>
            <div className="size-10 flex items-center justify-center bg-white border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:120px] [--orbit-duration:10s] absolute inset-0 m-auto">
        <SlackIcon classNmae="size-8"/>
        </div>
        
            <div className="size-10 flex items-center justify-center bg-white border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:160px] absolute inset-0 m-auto [--orbit-duration:20s]">
        <MsExcelIcon classNmae="size-8"/>
        </div>
            <div className="size-10 flex items-center justify-center bg-white border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:200px] absolute inset-0 m-auto [--orbit-duration:30s]">
            <InstaIcon classNmae="size-8"/>
            </div>

            <div className="h-6 w-40 flex items-center justify-between bg-white border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:220px] [--orbit-duration:40s] absolute inset-0 m-auto px-1 gap-1">
           <IconCircleDashedCheck className="size-4"/>
           <p className="text-xs font-medium">Ready made solutions</p>
           </div>
            
        </Circle>

        <Circle className="shadow border-neutral-100 size-60 bg-neutral-100/80 z-[9] relative">
       
        </Circle>

        <Circle className="shadow border-neutral-100 size-80 bg-neutral-100/60 z-[8]">
        </Circle>

        <Circle className="shadow border-neutral-100 size-100 bg-neutral-100/40 z-[7]">
        </Circle>

        <Circle className="shadow border-neutral-100 size-120 bg-neutral-100/20 z-[6]">
        </Circle>
    </div>
  )
}



const Circle = ({className, children}) => {
    return(
       <div className={`border rounded-full absolute inset-0 m-auto ${className}`}>
        {children}
       </div>
    )
}

