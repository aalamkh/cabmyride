import React from 'react'

const HeroSection = ({title,children}) => {
  return (
    <div style={{borderBottom:"1px solid gray",padding:'1rem'}}>
        <h2>{title}</h2>
        <div>
            {children}
        </div>
    </div>
  )
}

export default HeroSection