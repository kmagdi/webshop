import React from 'react';
import { useStateValue } from '../stateProvider';
import './Checkout.css'
import {Subtotal} from './Subtotal'
import {ProductCart} from './ProductCart'


export const Checkout=()=>{
    const [{basket}]=useStateValue()

    return(
        <div className='checkout'>
            <div className='checkout-left'>
                {
                    basket.length==0 ?
                        (<div>
                            <h2 className='checkout-title'>A kosár üres.</h2>
                        <p>Vásárolj valamit.</p>
                        </div>) :
                        (<div>
                            <h2 className='basket-title'>A kosárban levő termékek </h2>
                             {
                                 [...basket].sort((a,b)=>a.id>b.id ? 1:-1).map(item=>(
                                    <ProductCart
                                        id={item.id}
                                        title={item.title}
                                        img={item.img}
                                        price={item.price}
                                        rating={item.rating}
                                        quantity={item.quantity}
                                     />
                                 ))
                             }  
                        </div>
                     )
                }
                
            </div>
         
          {
            basket.length>0 && (
                <div className='checkout-right'>     
                <Subtotal />
                </div>
            )
                }
        
        
        </div>
    )
}