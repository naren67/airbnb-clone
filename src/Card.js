import React from 'react'
import './Card.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Card({image, description, profile, userName, region}) {
          return (
                    <div className='cards_div'>
                              <div className='card__img'>
                                        <img src={image} alt='' />
                              </div>

                              <div>
                                        <div className='des'>
                                                <p>{description}</p>
                                        </div>

                                        <div className='profileRegionName'>
                                                  <div className='profile'>
                                                    <AccountCircleIcon style={{ fontSize: 40 }}/>
                                                  </div>

                                                  <div className='nameAndRegion'>
                                                           <p className='cardName'>{userName}</p>
                                                           <p className='cardRegion'>{region}</p>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}

export default Card
