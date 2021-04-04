import React from 'react'
import './Explored.css'
import StarIcon from '@material-ui/icons/Star';

function Explored({images, houseName, rating, place, desc, price}) {
          return (
                    <div>
                           <div className='explored__miniCard'>
                                 <div className='explored__pic'>
                                           <img src={images} alt='' />
                                 </div>
                                 <div className='explore__info'>
                                        <div className='explore__rating'>
                                        <StarIcon className='explored__star'/>
                                        <p>{rating}</p>
                                        </div>

                                        <div>
                                               {houseName} - {place}   
                                        </div>

                                        <div>
                                                  {desc}
                                        </div>

                                        <div className='explore__price'>
                                                  {price}
                                        </div>
                                 </div>
                           </div>  
                    </div>
          )
}

export default Explored
