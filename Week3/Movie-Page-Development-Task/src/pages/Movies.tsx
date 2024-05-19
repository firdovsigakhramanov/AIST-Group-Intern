import React from 'react'
import videoCover from '../assets/images/02aad8dff901b2ed9af793040b85b0dd.png'
import playIcon from '../assets/icons/playIcon.svg'
import addIcon from '../assets/icons/Vector.svg'
import likeIcon from '../assets/icons/likeIcon.svg'
import soundIcon from '../assets/icons/sound.svg'
import prevIcon from '../assets/icons/Buttonprev.svg'
import nextIcon from '../assets/icons/nextbtn.svg'
import CardBlock from '../components/CardBlock/CardBlock'
const Movies = () => {
    return (
        <>
            <section>
                <div className='container video-playback__container'>
                    <img className='video-playback__cover' src={videoCover} alt="" />
                    <div className='video-playback__content'>
                        <h2 className='video-playback__name'>Avengers : Endgame</h2>
                        <p className='video-playback__description'>
                            With the help of remaining allies,
                            the Avengers must assemble once more in order to undo
                            Thanos's actions and undo the chaos to the universe, no matter what consequences
                            may be in store,
                            and no matter who they face... Avenge the fallen.
                        </p>
                        <div className='video-playback__btns'>
                            <button className='video-playback__play-btn btn btn-primary'>
                                <div className='video-playback__play-img'><img src={playIcon} alt="" /></div>
                                <span className='video-playback__play-text'>Play Now</span>
                            </button>
                            <button className='video-playback__add-btn btn btn-secondary'>
                                <img src={addIcon} alt="" />
                            </button>
                            <button className='video-playback__like-btn btn btn-secondary'>
                                <img src={likeIcon} alt="" />
                            </button>
                            <button className='video-playback__sound-btn btn btn-secondary'>
                                <img src={soundIcon} alt="" />
                            </button>
                        </div>
                        <div className='video-playback__silder-btns'>
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
                </div>
            </section>
            <CardBlock />
        </>

    )
}

export default Movies