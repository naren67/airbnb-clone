import React from 'react'
import './Search.css'
import Button from '@material-ui/core/Button';
import Explored from './Explored'
import OtherPlace from './OtherPlace'

function Search() {
          return (
                    <div className='searched_Result'>
                              
                             <div>
                             <div className='searched__buttonsAndMonths'>
                              <div className='searched__months'>
                                        <p>62 stays -</p>
                                        <p> 26 august to 30 august -</p>
                                        <p> 2 guest</p>
                              </div>

                              <div className='searched__nearby'>
                                        <h1>Stays nearby</h1>
                              </div>

                              <div className='searched__buttons'>
                              <Button variant="contained">Type of place</Button>
                              <Button variant="contained">Price</Button>
                              <Button variant="contained">Cancellation flexibility</Button>
                              <Button variant="contained">Rooms and beds</Button>
                              <Button variant="contained">More filters</Button>
                              </div>
                              </div>
                             </div>

                             <div className='searched__cards'>

                               <Explored
                               images='http://placeimg.com/640/360/any'
                               rating='4.82(185)'
                               houseName='Treehouse'
                               place='Banglore'
                               desc='Tree House close to Bangalore'
                               price='$120 / night'
                               />   

                               <Explored
                               images='http://placeimg.com/640/360/any'
                               rating='4.82(185)'
                               houseName='Treehouse'
                               place='Banglore'
                               desc='Tree House close to Bangalore'
                               price='$120 / night'
                               />

                               <Explored
                               images='http://placeimg.com/640/360/any'
                               rating='4.82(185)'
                               houseName='Treehouse'
                               place='Banglore'
                               desc='Tree House close to Bangalore'
                               price='$120 / night'
                               />

                               <Explored
                               images='http://placeimg.com/640/360/any'
                               rating='4.82(185)'
                               houseName='Treehouse'
                               place='Banglore'
                               desc='Tree House close to Bangalore'
                               price='$120 / night'
                               />

                               <Explored
                               images='http://placeimg.com/640/360/any'
                               rating='4.82(185)'
                               houseName='Treehouse'
                               place='Banglore'
                               desc='Tree House close to Bangalore'
                               price='$120 / night'
                               />

                               <Explored
                               images='http://placeimg.com/640/360/any'
                               rating='4.82(185)'
                               houseName='Treehouse'
                               place='Banglore'
                               desc='Tree House close to Bangalore'
                               price='$120 / night'
                               />

                             </div>

                             <div className='checkOtherPlace'>
                                       <h1>Other popular destination</h1>
                             </div> 


                        <div className='otherPlace'>

                          

                       <div className='place_one'>

                       <OtherPlace
                        pics=''
                        area='Kochi'
                        />

                        <OtherPlace
                        pics=''
                        area='Colombo'
                        />

                       <OtherPlace
                        pics=''
                        area='Munnar'
                        />
                        
                       </div>

                       <div className='place_two'>

                       <OtherPlace
                        pics=''
                        area='Kandy'
                        />

                        <OtherPlace
                        pics=''
                        area='Gokarna'
                        />

                       <OtherPlace
                        pics=''
                        area='Kodaikanal'
                        />

                       </div>

                        </div>


                    </div>
          )
}

export default Search
