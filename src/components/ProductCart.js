import React from 'react';
import { useStateValue } from '../stateProvider';
import './ProductCart.css'


export const ProductCart=({id,title,img,price,rating})=>{
    const [{basket},dispatch]=useStateValue()
    const removeItem=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return(
        <div className='product-cart'>
            <img className='productcart-img' src={img} alt=''/>
            <div className='productcart-info'>
                <p className='productcart-title'>{title}</p>
                <p className='productcart-price'>{price}</p>
                <div className='productcart-rating'>
                    {
                        Array(rating).fill().map((_)=>{
                            <p>*</p>
                        })
                    }
                </div>
            <button onClick={removeItem} >Remove item from the Cart</button>
            </div>
        </div>
    )
}