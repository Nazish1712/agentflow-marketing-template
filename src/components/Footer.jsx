import React from 'react'
import Container from './Container'
import { Logo } from './Logo'
import SubHeading from './SubHeading'
import { Button } from './ui/button'
import { IconSend } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

const Footer = () => {
    const product = [
      {
        title: "Agent Simulator"
      },
      {
        title: "AI Workflows"
      },
      {
        title: "Agent Builder"
      },
      {
        title: "Analytics Dashboard"
      },
      {
        title: "API Integration"
      },
      {
        title: "Enterprise Solutions"
      }
    ]

    const company = [
        {title:"About Us"},
        {title:"Careers"},
        {title:"Press"},
        {title:"Contact"},
        {title:"Blog"},
    ]
    

  return (
    <footer className='border-t border-neutral-200 dark:border-neutral-800 py-10 md:py-20 lg:py-32 relative perspective-distant overflow-hidden px-1'>
        <Container className='grid grid-cols-1 grid-cols-2 lg:grid-cols-5 gap-10 relative z-20'>
           <div className="col-span-2 flex flex-col gap-4 items-start">
            <Logo/>
            <SubHeading>
                Safe, observable, outcome-driven AI
           </SubHeading>
           <Button className='shadow-brand'>Start a 30-day trial</Button>
           </div>
           <div className="flex flex-col gap-4">
             <h4 className='text-base font-medium text-neutral-400'>Product</h4>
             <ul className='list-none flex flex-col gap-2 cursor-pointer'>
                {product.map((item)=> (
                <li key={item.title} className="text-neutral-600 hover:text-black transition duration-200 ">
                    <a>{item.title}</a>
                </li>
                ))}
             </ul>
           </div>
           <div className="flex flex-col gap-4">
             <h4 className='text-base font-medium text-neutral-400'>Company</h4>
             <ul className='list-none flex flex-col gap-2 cursor-pointer'>
                {company.map((item)=> (
                <li key={item.title} className="text-neutral-600 hover:text-black transition duration-200 ">
                    <a>{item.title}</a>
                </li>
                ))}
             </ul>
           </div>
           <div className='flex flex-col gap-4'>
           <h4 className='text-base font-medium text-neutral-400'>Newsletter</h4>
           <div className='relative border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 rounded-md flex items-center justify-center'>
            <input className="bg-transparent outline-none py-2 pl-2 pr-12 placeholder-neutral-400 text-neutral-600 text-sm" type="email" placeholder="Email"></input>
            <button className=" cursor-pointer px-4 py-2 rounded-[7px] bg-black inset-y-0 right-0 absolute">
                <IconSend className='text-white size-4'/>
            </button>
           </div>
           </div>
        </Container>

        <Container className="flex flex-col sm:flex-row justify-between mt-10 relative z-20">
            <p className="text-sm text-neutral-500">
                2026 Agentforce AI. All rights reserved
            </p>
           <div className="flex items-center justify-center gap-4 *:text-sm *:text-neutral-500">
             <a>Privacy Policy</a>
             <a>Terms of Service</a>
           </div>
        </Container>

         <div className={cn(
            "flex items-center justify-center gap-20 h-[200%]",
            "absolute -inset-x-[150%] -inset-y-40",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)]",
             "mask-radial-from-50%",
          )}
          style={{
            transform: "rotateX(60deg)"
          }} />
    </footer>
  )
}

export default Footer