import React from 'react'
import Container from '../components/Container'
import { motion } from 'motion/react'
import { SkeletonOne } from './skeletons/FirstSkeleton'
import { SkeletonTwo } from './skeletons/SecondSkeleton'
import { WorkflowIcon , IntegrationIcon, HumanInLoopIcon} from '@/icons'
import {SkeletonThree} from './skeletons/ThirdSkeleton'
import {SkeletonFourth} from "./skeletons/FourthSkeleton"

export const FeaturesTertiary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
        <Container>
           <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800
         divide-neutral-200 dark:divide-neutral-800">
            <div className="md:border-r border-b border-neutral-200 dark:border-neutral-800">
                <CardContent>
                <h2 className="text-lg font-bold text-neutral-800">Audit Trail</h2>
                <CardDescription>Tracks every agent action with full input-output visibility and timestamps.</CardDescription>
                </CardContent>
                <CardSkeleton>
                    <SkeletonOne/>
                </CardSkeleton>
            </div>
            <div className="border-b border-neutral-200 dark:border-neutral-800">
                <CardContent>
                <h2 className="text-lg font-bold text-neutral-800">Role-Based Access</h2>
                <CardDescription>Controls who can launch, review, or manage agents based on roles.</CardDescription>
                </CardContent>
                <CardSkeleton className="mask-radial-from-20%">
                    <SkeletonTwo/>
                </CardSkeleton>
            </div>
            <div className="md:border-r border-neutral-200 dark:border-neutral-800">
                <CardContent>
                <h2 className="text-lg font-bold text-neutral-800">Approval Queue</h2>
                <CardDescription>Sends agent-generated content to human reviewers before it's published.</CardDescription>
                </CardContent>
                <CardSkeleton className="mask-radial-from-20% mask-r-from-50%">
                    <SkeletonThree/>
                </CardSkeleton>
            </div>
            <div className="">
                <CardContent>
                <h2 className="text-lg font-bold text-neutral-800">Guardrail Engine</h2>
                <CardDescription>Applies brand, tone, and policy checks before output goes live.</CardDescription>
                </CardContent>
                <CardSkeleton className="">
                    <SkeletonFourth/>
                </CardSkeleton>
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
