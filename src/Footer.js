import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
          return (
                    <div className='footer'>
                          
                          <div className='footer__info'>
                          <h1>When are you travelling?</h1>   
                          <p>Add dates for updated pricing and availability</p> 
                          </div>

                          <div className='footer__btn'>
                                    <button>Add dates</button>
                          </div>

                          <div className='footer__place'>
                                    <p>Chennai.</p>
                          </div>

                          <div className='footer__bottomPart'>
                                <div className='footer__line'></div>
                                
                                <div className='footer__copyAndSocial'>

                                <div className='footer__copyRight'>
                                          <p>© 2021 Airbnb, Inc. All rights reserved</p>
                                </div>

                                <div className='footer__social'>
                                      <FacebookIcon className='facebook_icon' style={{ fontSize: 35 }}/>
                                      <InstagramIcon className='instagram_icon' style={{ fontSize: 35 }}/>
                                      <TwitterIcon className='twitter_icon' style={{ fontSize: 35 }}/>
                                </div>

                                </div>

                          </div>
                    </div>
          )
}

export default Footer
