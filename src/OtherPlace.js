import React from 'react'
import './OtherPlace.css'
import DashboardIcon from '@material-ui/icons/Dashboard';

function OtherPlace({pics, area}) {
          return (
                    <div className='otherLocations'>
                           

                             <div className='small_card'>
                                  <div>
                                            <DashboardIcon className='otherLocations__dashboard' style={{ fontSize: 120 }}/>
                                  </div>
                                  <div className='small_card_area'>
                                            {area}
                                  </div>
                             </div>
                    </div>
          )
}

export default OtherPlace
