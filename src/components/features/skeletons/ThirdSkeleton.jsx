import React from 'react'
import { ShieldIllustration } from '@/components/illustrations/general'

const ThirdSkeleton = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden mask-radial-from-10%">
   
   <ShieldIllustration className="z-50"/>

    <div className="absolute inset-0 bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_2px)] 
dark:bg-[radial-gradient(var(--color-neutral-400)_1px,transparent_1px)]
[background-size:10px_10px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] animate-pulse transform scale-100 hover:scale-110 transition-transform duration-2000">
</div>
    
</div>
    
  )
}

export default ThirdSkeleton

