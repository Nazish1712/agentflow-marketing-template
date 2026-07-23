import React from 'react'

const SubHeading = ({children,className="",as="p"}) => {

    const Tag = as;
  return (
    <Tag className={`text-base md:text-lg text-neutral-400 dark:text-neutral-600
         font-inter max-w-xl ${className}`}>{children}</Tag>
  )
}

export default SubHeading