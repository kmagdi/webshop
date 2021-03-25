import React, { useState } from 'react';
import { useStateValue } from '../stateProvider';


export const Order=()=>{
    const [{basket},dispatch]=useStateValue()
   

    const getCartTotal=(basket)=>basket?.reduce((tot,item)=>item.price*item.quantity+tot,0)
    
    return(
        <div >
          <h1>Összefoglaló</h1>
          {
          [...basket].sort((a,b)=>a.id>b.id ? 1:-1).map(item=>
            <div className='row justify-content-center '>
              <div className='col border p-2'>{item.id}</div>
              <div className='col border p-2'>{item.title}</div>
              <div className='col-1 border p-2'>{item.price}</div>
              <div className='col-1 border p-2'>{item.quantity}</div>
              <div className='col-1 border p-2 text-center'><img src={item.img} width='50'/></div>
              <div className='col border p-2 text-info'>subtotal:{item.price*item.quantity}</div>
            </div>
          
          )
          }
          <div className='w-100 text-info text-center'>Az össz rendelés értéke : {getCartTotal(basket)} Ft</div>
        </div>
    )
}