import React from 'react'
import Container from './Container'
import Heading from './Heading'
import SubHeading from './SubHeading'
import { LockIcon, LoopIcon, UserIcon } from '@/icons'
import { Button } from './ui/button'
import { IconCircleCheckFilled } from '@tabler/icons-react'


export const Pricing = () => {
  return (
    <section className="py-10 md:py-20 lg:py-32 overflow-hidden">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-4">
          <SubHeading className="mt-2">
          Trusted by 500+ enterprise companies
          </SubHeading>
          <Heading>
          Affordable pricing. <br/>
          Easy scaling.
          </Heading>
          <SubHeading className="mt-4">
          Start small to explore automation, add agents as you scale, and unlock enterprise-grade guardrails, orchestration, and reporting when you're ready.
          </SubHeading>
          <ul className="list-none *:flex *:items-center *:gap-2 *font-medium flex flex-col gap-2 mt-4">
            <li>
                <LockIcon/>
                <p className="dark:text-neutral-100">Built-in Guardrails</p>
            </li>
            <li>
                <UserIcon/>
                <p className="dark:text-neutral-100">Agent Orchestration</p>
            </li>
            <li>
                <LoopIcon/>
                <p className="dark:text-neutral-100">Human-in-the-Loop</p>
            </li>
          </ul>
          </div>

          <div className="flex flex-col gap-4">
           <PricingCard
           price="10"
           description="Perfect for individuals or small teams exploring automation."
           ctaText="Start your free trial"
           steps={[
            "1 AI Agent Included",
            "Basic Approval Flows",
            "7 Day activity logs",
            "Standard Integrations",
           ]}/>
           <PricingCard
           price="60"
           description="Ideal for growing teams ready to scale automation safely."
           ctaText="Contact Sales"
           steps={[
            "Upto 5 AI Agents",
            "Multi Agent Orchestration",
            "Advanced Approval Flows",
            "30 Day activity logs",
            "ROI Insights"
           ]}/>
            </div>
        </Container>
    </section>
  )
}

const PricingCard = ({
 price,
 description,
 ctaText,
 steps,
}) => {
    return(
        <div className="p-4 md:p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
        <Heading>
            ${price}<span className="text-neutral-400 text-sm md:text-xl lg:text-3xl">/mo</span>
        </Heading>
        <SubHeading className="mt-4">
        {description}
        
        </SubHeading>
        <Button className="mt-4">{ctaText}</Button>
        </div>
        <ul className="list-none *:flex *:items-center *:gap-2 *font-medium flex flex-col gap-2 mt-4">
        {steps.map((step, index) => (
            <Step key={step+index} title={step}/>
        ))}
  </ul>
    </div>
    )
}

const Step = ({title}) => {
    return(
        <li>
        <IconCircleCheckFilled className="size-5 text-neutral-500"/>
        <p className='text-sm md:text-base'>{title}</p>
    </li>
    )
}

