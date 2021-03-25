import './App.css';
import React from 'react';
import {Header} from './components/Header'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {Login} from './components/login'
import {Portfolio} from './components/Portfolio'
import {Home} from './components/Home'
import {Footer} from './components/Footer'
import {Checkout} from './components/Checkout'
import {Order} from './components/Order'
import SearchIcon from '@material-ui/icons/Search'
import './components/Header.css'
import { Navlinks } from './components/Navlinks';
import {UploadPhoto} from './components/UploadPhoto'
import {InsertProducts} from './components/InsertProducts'

function App() {
  return (
    
  <BrowserRouter>
      <div className="App">
        <Switch>
           <Route path="/checkout">
             <Header />
             <Checkout />
          </Route>
           <Route path="/login" component={Login} />

           <Route path="/uploadphoto">
             <Header />
             <Navlinks />
             <UploadPhoto />
          </Route>

          <Route path="/insertproducts">
             <Header />
             <Navlinks />
             <InsertProducts />
          </Route>

          <Route path="/order">
             <Header />
             <Navlinks />
             <Order />
          </Route>
          

           <Route path="/">
              <Header/>
              <Navlinks/>
              <Home/>
              <Footer/>
           </Route>
           
       </Switch> 
    </div>
  </BrowserRouter>

    
  );
}

export default App;
