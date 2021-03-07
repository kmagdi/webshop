import React from 'react';
import './Product.css'
import {useStateValue} from '../stateProvider'


export const Product=({id,title,img,price,rating})=>{
    const [basket,dispatch]=useStateValue()
    console.log('basket content:',basket)
   
    const addToBasket=()=>{
        dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            img:img,
            price:price,
            rating:rating
            }
        })
    }
    return(
        <div className='product'>
            <div className='product-info'>
                <p>{title}</p>
                <p className='product-price'>
                    <strong>{price}</strong>
                    <small>Ft</small>
                </p>
                <div className='product-rating'>
                    {
                     Array(rating).fill().map((_, i) =><p>*</p>)//ES6 - generate an array of numbers
                    }
                </div>
            </div>
            <img className='product-img' src={img} alt=''/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}