import React from 'react';
import './Product.css'
import {useStateValue} from '../stateProvider'


export const Product=({id,title,img,price,rating,quantity})=>{
    const [basket,dispatch]=useStateValue()
    console.log('basket content:',basket)
   
    const addToBasket=()=>{
        //console.log('van mar ilyen?'+Object.keys(basket))
        //console.log('van mar ilyen??'+typeof(basket.basket))
        //console.log('van mar ilyen???'+Object.keys(basket.basket))
        let index=basket.basket.findIndex(item=>item.id==id)
      
        if(index===-1){
                dispatch({
                type:'ADD_TO_BASKET',
                item:{
                    id:id,
                    title:title,
                    img:img,
                    price:price,
                    rating:rating,
                    quantity:1
                    }
                })
            }else{
                console.log('van mar ilyen?'+index+' - darab:'+basket.basket[index].quantity)
                let qty=basket.basket[index].quantity
                dispatch({
                    type:'MODIFY_QUANTITY',
                    id:id,
                    qty:qty
                    })
        }
    }
    return(
        <div className='product'>
            <div className='product-info'>
                <p className='termeknev'>{title}</p>
                <p>Id:{id}</p>
                <p className='product-price'>
                    <strong>{price}</strong>
                    <small>Ft</small>
                </p>
                <div className='product-rating'>
                    {
                     Array(rating).fill().map((_, i) =><p key={i}>*</p>)//ES6 - generate an array of numbers
                    }
                </div>
            </div>
            <img className='product-img' src={img} alt=''/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}