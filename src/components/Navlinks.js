import React from 'react';
import './Navlinks.css'
import {Link} from 'react-router-dom'

export const Navlinks=()=>{
    return(
        <div className='navlinks'>
            <div className='navlinks-outer'>
            <div className='navlinks-inner'>
                 <Link>
                    Today ....
                 </Link>
                 <Link>
                    Kapcsolat
                 </Link>
                 <Link>
                    Regisztráció
                 </Link>
                 <Link>
                    Menü ....
                 </Link>
                 
            </div>
           
            </div>
        </div>
    )
}