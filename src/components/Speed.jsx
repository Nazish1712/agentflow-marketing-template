import React from 'react'
import Container from './Container'
import Heading from './Heading'
import SubHeading from './SubHeading'
import LandingImages from './LandingImages'

const Speed = () => {
  return (
    <Container className="py-10  md:py-20 lg:py-32 relative overflow-hidden">
        <Heading>Built for Speed<br/> Designed for Scale</Heading>
        <SubHeading className="py-8">Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.</SubHeading>
        <LandingImages showGradient={false}/>
    </Container>
  )
}

export default Speed