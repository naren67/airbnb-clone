import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function Header() {

      //history function
      const history = useHistory()

          return (
                    <div className='header'>

                          <div>
                          <Link to='/'>
                          <img className='header__logo' src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png' alt=''/>
                          </Link>
                          </div>   

                          <div className='header__middlePart'>
                                    <div className='header__input'>
                                              <input placeholder='what are u looking for'/>
                                    </div>
                                   
                                             <div className='header__search'>
                                             <SearchIcon onClick={()=>history.push('/search')}/>
                                             </div>
                                    
                          </div>

                          <div className='header__rightPart'>
                                    <div className='header__host'>
                                    <p>Become a host</p>
                                    </div>

                                    <div className='header__gloab'>
                                       <LanguageIcon style={{ fontSize: 35 }} />
                                    </div>

                                    <div className='header__arrow'>
                                              <ExpandMoreIcon style={{ fontSize: 25 }} />
                                    </div>

                                    <div className='header__avatar'>
                                           <AccountCircleIcon style={{ fontSize: 48 }} />
                                    </div>
                          </div>
                          
                    </div>
          )
}

export default Header
