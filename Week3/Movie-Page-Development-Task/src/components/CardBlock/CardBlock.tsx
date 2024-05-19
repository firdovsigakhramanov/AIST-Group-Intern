import React from 'react'
import TopBar from './TopBar/TopBar'
import CardOne from './CardOne/CardOne'

const CardBlock = () => {
  return (
    <div className='card-block container'>
      <div className='card-block__label'>Movies</div>
      <TopBar />
      <div className='card-container'>
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
      </div>

    </div>
  )
}

export default CardBlock