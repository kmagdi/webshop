import React, { useState } from 'react';
import './Product.css'
import {useStateValue} from '../stateProvider'
import ReactCardFlip from 'react-card-flip'


export const ProductFlip=({id,title,img,price,rating,quantity})=>{
    const [basket,dispatch]=useStateValue()
    const [isFlipped,setIsFlipped]=useState(false)

    const handleClick=()=>{
        setIsFlipped(!isFlipped)
    }
    console.log('basket content:',basket)
   
    const addToBasket=()=>{
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
        <React.Fragment >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
           
                    <div className=' product front'>
                        <div className='product-info'>
                            <p className='termeknev'>{title}</p>
                            <p>Id:{id}</p>
                            <p className='product-price'>
                                <strong>{price}</strong>
                                <small>Ft</small>
                            </p>
                        </div>
                        <img className='product-img' src={img} alt=''/>
                        <button onClick={addToBasket}>Add to basket</button>
                         <button className="btn btn-outline-info" onClick={handleClick}>Részletek...</button>
                    </div>
 
          
                    <div className=' product back'>
                        <div className=''>
                            <p>A Rossignol Experience 76 Ci W Xpress női síléc rendkívül könnyű. Szénszálas szerkezetének köszönhetően remekül irányítható. Ideális társa a fejlődéshez, pályára.</p>
                            <p>Enyhe, elülső rockere és szénszál-alapú szerkezete miatt nagyon jól irányítható. Nagy molekulasúlyú talp.</p>
                            <ul>
                                <li>Fekete Look Xpress XP W 10 GW kötéssel </li>
                                <li> GripWalk kompatibilis </li>
                                <li> DIN: 3-10</li>
                            </ul>
                        </div>
                        <div className='product-rating '>
                                    {
                                    Array(rating).fill().map((_, i) =><p key={i}>*</p>)//ES6 - generate an array of numbers
                                    }
                                    <div className='w-100'></div>
                                    <button className="btn btn-outline-info w-100" onClick={handleClick}>Vissza...</button>
                        </div>
                
                    
                         
                    </div>
 
            </ReactCardFlip>
    </React.Fragment>
    )
}