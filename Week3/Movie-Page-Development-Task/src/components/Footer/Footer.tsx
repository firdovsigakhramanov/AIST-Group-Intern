import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../../assets/icons/face.svg'
import Twitter from '../../assets/icons/twit.svg'
import Linkedin from '../../assets/icons/linkedin.svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='footer__navigation-container container'>
                    <div className='footer__navigation-block'>
                        <h3 className='footer__navigation-title'>Home</h3>
                        <ul className='footer__navigation-item'>
                            <li><Link className='footer__navigation-link'>Categories</Link></li>
                            <li><Link className='footer__navigation-link'>Devices</Link></li>
                            <li><Link className='footer__navigation-link'>Pricing</Link></li>
                            <li><Link className='footer__navigation-link'>FAQ</Link></li>
                        </ul>
                    </div>
                    <div className='footer__navigation-block'>
                        <h3 className='footer__navigation-title'>Movies</h3>
                        <ul className='footer__navigation-item'>
                            <li><Link className='footer__navigation-link'>Games</Link></li>
                            <li><Link className='footer__navigation-link'>Trending</Link></li>
                            <li><Link className='footer__navigation-link'>New Release</Link></li>
                            <li><Link className='footer__navigation-link'>Popular</Link></li>
                        </ul>
                    </div>
                    <div className='footer__navigation-block'>
                        <h3 className='footer__navigation-title'>Shows</h3>
                        <ul className='footer__navigation-item'>
                            <li><Link className='footer__navigation-link'>Categories</Link></li>
                            <li><Link className='footer__navigation-link'>Devices</Link></li>
                            <li><Link className='footer__navigation-link'>Pricing</Link></li>
                            <li><Link className='footer__navigation-link'>FAQ</Link></li>
                        </ul>
                    </div>
                    <div className='footer__navigation-block'>
                        <h3 className='footer__navigation-title'>Support</h3>
                        <ul className='footer__navigation-item'>
                            <li><Link className='footer__navigation-link'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='footer__navigation-block'>
                        <h3 className='footer__navigation-title'>Subscription</h3>
                        <ul className='footer__navigation-item'>
                            <li><Link className='footer__navigation-link'>Plans</Link></li>
                            <li><Link className='footer__navigation-link'>Features</Link></li>
                        </ul>
                    </div>
                    <div className='footer__navigation-block'>
                        <h3 className='footer__navigation-title'>Connect With Us</h3>
                        <ul className='footer__navigation-item'>
                            <li><Link className='footer__navigation-link'><img src={Facebook} alt="" /></Link></li>
                            <li><Link className='footer__navigation-link'><img src={Twitter} alt="" /></Link></li>
                            <li><Link className='footer__navigation-link'><img src={Linkedin} alt="" /></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className='footer__bottom-bar container'>
                    <div className='footer__bottom-left'>
                        <p className='footer__bottom-author'>@2023 streamvib, All Rights Reserved</p>
                    </div>
                    <div className='footer__bottom-right'>
                        <Link>Terms of Use</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Cookie Policy</Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer