import React from 'react';
import './Navlinks.css'
import {Link} from 'react-router-dom'
import {useStateValue} from '../stateProvider'

export const Navlinks=()=>{
   const [{loggedinuser}]=useStateValue()
   //console.log('basket:'+basket)
   console.log('user-navlinks:'+loggedinuser?.email)
   const admin=loggedinuser?.email=='teszt@gmail.com'? true :false
    return(
        <div className='navlinks'>
            <div className='navlinks-outer'>
           
                 <Link>
                    Today?
                 </Link>
                 <Link>
                    Kapcsolat
                 </Link>
                 <Link to={admin?'/insertproducts':'/login'}>
                    Termék nyílvántartás
                 </Link>
                 <Link to={admin?'/uploadphoto':'/login'}>
                    Fájlfeltöltés
                 </Link>
           
            </div>
        </div>
    )
}