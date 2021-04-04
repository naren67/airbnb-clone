import React,{useState} from 'react'
import './Banner.css'
import SearchDate from './SearchDate'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";


function Banner() {

        //history function

        const history = useHistory();

        const [showDate,setShowDate] = useState(false)

          return (
                    <div className='banner'>
                     
                                {/* date picker using useState */}

                                {showDate&&<SearchDate/>}

                              <div className='banner__info'>
                                        <div className='banner_datePicker'>
                                        <button onClick={()=>{setShowDate(!showDate)}}>{showDate ? 'Hide' : 'Search dates'}</button>
                                        </div>
                                    <div className='banner__innerInfo'>
                                              <div>
                                              <h2>
                                                        Go Near
                                              </h2>
                                              </div>

                                              <div>
                                              <p>Settle in somewhere new. Discover stays to live, work, or just relax.</p>
                                              </div>

                                              <div className='banner_btn'>
                                                        
                                                        <button onClick={()=>history.push('/search')}>Explore nearby</button>
                                                      
                                              </div>
                                    </div>
                              </div>
                    </div>
          )
}

export default Banner
