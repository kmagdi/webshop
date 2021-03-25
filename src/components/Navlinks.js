import React from 'react';
import './Navlinks.css'
import {Link} from 'react-router-dom'

export const Navlinks=()=>{
    return(
        <div className='navlinks'>
            <div className='navlinks-outer'>
           
                 <Link>
                    Today ....
                 </Link>
                 <Link>
                    Kapcsolat
                 </Link>
                 <Link to='/insertproducts'>
                    Termék nyílvántartás
                 </Link>
                 <Link to='/uploadphoto'>
                    Fájlfeltöltés
                 </Link>
           
            </div>
        </div>
    )
}