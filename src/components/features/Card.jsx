import React from 'react'


export const Card = ({className, children}) => {
  return (
    <div className={`bg-neutral-50 dark:bg-neutral-800 rounded-lg ${className}`}>
        {children}
    </div>
  )
}

export const CardContent = ({className, children}) => {
    return(
        <div className={`px-4 md:px-8 md:pb-12 pb-6 flex items-center 
            justify-between ${className}`}>{children}</div>
    )
}

export const CardCta = ({className, children , ...rest}) => {
    return(
        <button className={`size-5 md:size-10 rounded-full border 
        border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0 active:scale-[0.98] transition duration-200`} {...rest}>{children}</button>
    )
}

export const CardTitle = ({className, children}) => {
    return(
      <h3 className={`text-lg md:text-2xl font-bold font-display ${className}`}>
        {children}
      </h3>
    )
}

export const CardSkeleton = ({className, children}) => {
    return(
       <div className={` relative h-40 md:h-80 overflow-hidden perspective-distant  ${className}`}>
        <div className="absolute inset-0 h-full w-full z-40 bg-white">
        {children}
          </div>
          </div>
    )
}