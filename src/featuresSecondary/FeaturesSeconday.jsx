import React from 'react'
import Container from '../components/Container'
import { motion } from 'motion/react'
import { SkeletonOne } from './skeletons/FirstSkeleton'

export const FeaturesSeconday = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
        <Container>
           <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800
           divide-x divide-neutral-200 dark:divide-neutral-800">
            <div>
                <CardContent>
                <h2 className="text-lg font-bold text-neutral-800">Agent Studio</h2>
                <CardDescription>Design, launch and customize AI agents for marketing, sales, support and ops, built around your workflows.</CardDescription>
                </CardContent>
                <CardSkeleton>
                    <SkeletonOne/>
                </CardSkeleton>
            </div>
            <div>
                <CardContent>
                <h2 className="text-lg font-bold text-neutral-800">Multi-Agent Orchestration</h2>
                <CardDescription>Coordinate multiple agents across workflows using memory, interrupts, and conditional logic.</CardDescription>
                </CardContent>
                <CardSkeleton>Abcd</CardSkeleton>
            </div>
           </div>
        </Container>
    </section>
  )
}



export const CardContent = ({children}) => {
    return(
      <div className="p-4 md:p-8">{children}</div>
    )
}

export const CardDescription = ({children}) => {
    return(
        <p className="text-neutral-600 mt-2 max-w-md text-balance">
            {children}
        </p>
    )
}

export const CardSkeleton = ({className, children}) => {
    return(
       <div className={` relative h-80 sm:h-60 md:h-80 overflow-hidden perspective-distant flex flex-col ${className}`}>
       {children}
          </div>
        
    )
}
