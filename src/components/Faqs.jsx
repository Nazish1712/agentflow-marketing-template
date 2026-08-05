import React, { useState } from 'react'
import Container from './Container'
import { UserChatIcon } from './illustrations/general'
import Heading from './Heading'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'motion/react'

export const Faqs = () => {
  return (
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
        <Container>
        <UserChatIcon/>
        <Heading className="my-10 md:my-20">
        Frequently Asked Questions
        </Heading>
        <Question/>
        </Container>
    </section>
  )
}

const Question = ({question, answer}) => {

    const [open , setOpen] = useState(false)
    return(
        <button onClick={()=>(setOpen(!open))} className="w-full rounded-3xl overflow-hidden bg-neutral-100 p-4 md:p-8">
            <div className="flex items-center justify-between ">
                <h3 className="text-lg md:text-2xl font-bold font-display">What is ahentforce ai</h3>
                <div className="size-6 rounded-full relative  bg-black flex items-center justify-center">
                    <IconMinus className={cn("size-6 text-white absolute inset-0 transition-all duration-200",
                    open && "scale-0 rotate-90"
                    )}/>
                    <IconPlus className={cn("size-6 text-white absolute inset-0 scale-0 -rotate-90 transition-all duration-200",
                    open && "scale-100 rotate-0"
                    )}/>
                </div>
            </div>
            {open && (
            <AnimatePresence>
            {open && (
                <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className='text-left mt-4 text-neutral-600 overflow-hidden'
                >
                    Agenforce AI is a platform for building and managing AI agents.
                </motion.p>
            )}
        </AnimatePresence>)
            }
            
        </button>  
    )
}

