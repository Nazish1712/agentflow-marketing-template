import React from 'react'
import Heading from "./Heading"
import Container from "./Container"
import SubHeading from "./SubHeading"
import { Button } from './ui/button'
import LandingImages from './LandingImages'

const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
    <Container>
        <Heading as="h1">Agents that do the work <br/> Approvals that keep you safe.</Heading>
        <SubHeading className="py-8">Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.</SubHeading>
        <div className="flex items-center gap-6">
            <Button className="shadow-brand">Start your free trial</Button>
            <Button variant="outline">View role based demos</Button>
        </div>
        <LandingImages/>
       </Container>
    </div>
  )
}

export default Hero