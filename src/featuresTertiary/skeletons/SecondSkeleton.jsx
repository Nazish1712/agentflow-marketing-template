import React from 'react'


export const SkeletonTwo = () => {
  return (
    <div className="flex-1 rounded-t-3xl gap-2 w-full h-full px-8">
        <div className="grid grid-cols-5 gap-1">
           <Item/>
        </div>
        </div>)}


const Item = ({children, className}) => {
    return(
       <div className={`size-20 rounded-md border border-dashed border-neutral-200 ${className}`}>
        {children}
       </div>
    )
}

