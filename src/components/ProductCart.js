import React from 'react';
import { useStateValue } from '../stateProvider';
import './ProductCart.css'


export const ProductCart=({id,title,img,price,rating,quantity})=>{
    const [{basket},dispatch]=useStateValue()
    const removeItem=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
           
        })
    }
    const plusQuantity=()=>{
        dispatch({
            type:'PLUS_ONE',
            id:id,
            item:{
                id:id,
                title:title,
                img:img,
                price:price,
                rating:rating,
                quantity:quantity+1
                }
        })
    }
    const minusQuantity=()=>{
        dispatch({
            type:'MINUS_ONE',
            id:id,
            item:{
                id:id,
                title:title,
                img:img,
                price:price,
                rating:rating,
                quantity:quantity-1
                }
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
                <div className="qty">
                    <span className='qty-value'>Quantity:{quantity}</span>
                    <span onClick={plusQuantity} className='add-qty'>+</span>
                    <span onClick={minusQuantity} className='del-qty'>-</span>
                </div>
            <button onClick={removeItem} >Remove item from the Cart</button>
            </div>
        </div>
    )
}