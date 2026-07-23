import React from 'react'

const Heading = ({children,className="",as="h2"}) => {

    const Tag = as;
  return (
    <Tag className={`text-2xl md:text-4xl lg:text-6xl tracking-tight
        font-bold font-display ${className}`}>{children}</Tag>
  )
}

export default Heading