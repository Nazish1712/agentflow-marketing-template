import React from 'react'
import { ShieldIllustration } from '@/components/illustrations/general'

const ThirdSkeleton = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden ">
   
   <ShieldIllustration/>

   <div className="absolute inset-0 bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)] 
dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]
[background-size:10px_10px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
    </div>
    
</div>
    
  )
}

export default ThirdSkeleton

