import React from 'react'
import image1 from '../../../../assets/images/cardone1.svg'
import image2 from '../../../../assets/images/CardOne2.svg'
import image3 from '../../../../assets/images/CardOne3.svg'
import image4 from '../../../../assets/images/CardOne4.svg'
import topLabel from '../../../../assets/images/Top10Label.svg'
import arrow from '../../../../assets/icons/rightArr.svg'

const CardPopular = () => {
    return (
        <div className='card-one'>
            <ul className='card-one__images-container'>
                <li className='card-one__img'><img src={image1} alt="" /></li>
                <li className='card-one__img'><img src={image2} alt="" /></li>
                <li className='card-one__img'><img src={image3} alt="" /></li>
                <li className='card-one__img'><img src={image4} alt="" /></li>
            </ul>
            <div className='card-one__footer'>
                <div className='card-one__footer-left'>
                    <div className='card-one__footer-img'>
                        <img src={topLabel} alt="" />
                    </div>
                    <p className='card-one__movie-type'>Action</p>
                </div>
                <div className='card-one__footer-right'>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CardPopular