import React from 'react'

const LogoCloud = () => {
    const logos = [
        {
         title: 'Open AI',
         src: 'https://assets.aceternity.com/logos/openai.png'
        },
        {
         title: 'Hello Patient',
         src: 'https://assets.aceternity.com/logos/hello-patient.png'
        },
        {
         title: 'Granola',
         src: 'https://assets.aceternity.com/logos/granola.png'
        },
        {
          title: 'Character AI',
          src: 'https://assets.aceternity.com/logos/characterai.png'
        },
        {
         title: 'Portola',
         src: 'https://assets.aceternity.com/logos/portola.png'
        },
        {
         title: 'Oracle',
         src: 'https://assets.aceternity.com/logos/oracle.png'
        },

    ]
  return (
    <section>
        <h2 className="text-neutral-600 font-medium dark:text-neutral-400
        text-lg text-center max-w-xl mx-auto">Trusted by modern operators across industries.<br/> {""}
        <span className="text-neutral-500">From pilot to scale without chaos.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">
        {logos.map((logo, index)=>(
          <img key={logo.title} src={logo.src} alt={logo.title}
          width={100} height={100}
          className="size-20 object-contain mx-auto"></img>
        ))}
        </div>
    </section>
  )
}

export default LogoCloud