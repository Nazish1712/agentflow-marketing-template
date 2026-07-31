import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import SubHeading from '../SubHeading'
import { Card } from './Card'
import { CardTitle } from './Card'
import { CardContent } from './Card'
import { IconPlus } from '@tabler/icons-react'
import { CardCta } from './Card'
import { CardSkeleton } from './Card'
import {FirstSkeleton} from './skeletons/FirstSkeleton'
import ThirdSkeleton from './skeletons/ThirdSkeleton'
import {SecondSkeleton} from './skeletons/SecondSkeleton'


const Features = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-32">
        <div className="flex items-baseline-last justify-between">
        <Heading>Built for Fast Moving <br/> Teams That Need Control.</Heading>
        <SubHeading className="py-8">Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.
        </SubHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 md:my-20">
            <Card className="rounded-tl-3xl rounded-bl-3xl">
                <CardSkeleton>
                    <FirstSkeleton/>
                </CardSkeleton>
                <CardContent>
                <CardTitle>Prebuilt Agents, Turned to Your Workflows</CardTitle>
                <CardCta>
                    <IconPlus/>
                    </CardCta>
                </CardContent>
            </Card>
            <Card>
            <CardSkeleton>
                <SecondSkeleton/>
            </CardSkeleton>
                <CardContent>
                <CardTitle>Automate Handsoff, Reduce Ops Friction</CardTitle>
                <CardCta>
                    <IconPlus/>
                    </CardCta>
                </CardContent>
            </Card>
            <Card className="rounded-tr-3xl rounded-br-3xl">
            <CardSkeleton>
                <ThirdSkeleton/>
            </CardSkeleton>
                <CardContent>
                <CardTitle>Approvals, Guardrails, and full Auditability</CardTitle>
                <CardCta>
                    <IconPlus/>
                    </CardCta>
                </CardContent>
            </Card>
        </div>
    </Container>
  )
}

export default Features