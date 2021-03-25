import { Hidden } from '@material-ui/core';
import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../stateProvider';
import './Subtotal.css'
import {Link} from 'react-router-dom'

export const Subtotal=()=>{
    const [{basket},dispatch]=useStateValue()
   

    const getCartTotal=(basket)=>basket?.reduce((tot,item)=>item.price*item.quantity+tot,0)
    
    return(
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value)=>(
                    <p>
                        Subtotal ( {basket.length} item ):<strong>{value}</strong>
                    </p>
                )}
                value={getCartTotal(basket)}
                displayType={'text'}
                thousendSeparator={true}
                prefix={'Ft'}

            />
            <Link to="/order" className="btn btn-primary checkout-btn">Rendelés</Link>
        </div>
    )
}