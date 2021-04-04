import React,{useState} from 'react'
import './SearchDate.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import {useHistory} from 'react-router-dom'


function SearchDate() {

      //history function

      const history = useHistory()

         const[startDate,setStartDate] = useState(new Date())
         const[endDate,setEndDate] = useState(new Date())

         const selectionRange = {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        }

        function handleSelect(ranges){
          setStartDate(ranges.selection.startDate)
          setEndDate(ranges.selection.endDate)
        }

          return (
                    <div className='searchDate'>
                              
                              <div className='dateTheme'>
                              <DateRangePicker 
                           ranges={[selectionRange]}
                           onChange={handleSelect}
                               />
                              </div>

                              <div className='extraOptions'>

                                <div className='totalPeople'>
                                          <p>Number of people</p>
                                          <div>
                                                    <PeopleOutlineIcon/>
                                          </div>
                                </div>

                                <div className='search__inputField'>
                                          <input min={0} defaultValue={4} type={'number'}/>

                                          <div className='proceedButton'>
                                                    <button onClick={()=>history.push('/search')}>Proceed</button>
                                          </div>
                                </div>

                              </div>
                               
                    </div>
          )
}

export default SearchDate
