import React from 'react'

export const Hero = ({ hero }) => {
  const { id, superhero, publisher } = hero
  return (
    <div id={id} className='w-32 h-auto flex flex-col'>
      <h3>{superhero}</h3>
      <p>{publisher}</p>
    </div>
  )
}
