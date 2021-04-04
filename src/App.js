
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

             <Router>
             <Header/>
             
               <Switch>

               <Route path='/search'>
                  <Search/>
                  </Route>

                  <Route path='/'>
                  <Home/>
                  </Route>

                

               </Switch>

               <Footer/>
             </Router>

        
           {/* <Header/>
           <Home/>
           <Footer/> */}
    </div>
  );
}

export default App;
