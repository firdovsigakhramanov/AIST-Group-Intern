import React from 'react'
import prevIcon from '../../../assets/icons/Buttonprev.svg'
import nextIcon from '../../../assets/icons/nextbtn.svg'

const TopBar = () => {
    return (
        <div className='card-block__top-bar'>
            <div className='card-block__top-left'>
                <h3 className='card-block__top-title'>Our Genres</h3>
            </div>
            <div className='card-block__top-right'>
                <div className='video-playback__prev-btn video-playback__silder-btn btn'>
                    <img src={prevIcon} alt="" />
                </div>
                <ul className='video-playback__slider-nav'>
                    <li className='video-playback__slider-nav-item active'>
                    </li>
                    <li className='video-playback__slider-nav-item'>
                    </li>
                    <li className='video-playback__slider-nav-item '>
                    </li>
                    <li className='video-playback__slider-nav-item'>
                    </li>
                </ul>
                <div className='video-playback__next-btn video-playback__silder-btn btn'>
                    <img src={nextIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TopBar