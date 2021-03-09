import React from 'react';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../stateProvider';
import './Subtotal.css'

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
            <button className='checkout-btn'>Rendelés</button>
        </div>
    )
}