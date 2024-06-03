import React from 'react'
import TopBar from './TopBar/TopBar'
import CardOne from './Genres/CardOne/CardOne'
import CardPopular from './Popular/CardPopular/CardPopular'


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