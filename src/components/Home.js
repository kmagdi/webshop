import React from 'react';
import homeimg from './homeimg.jpg'
import {Product} from './Product'
import {ProductFlip} from './ProductFlip'
import './Home.css'
import {useProducts} from  './useProducts'

export const Home=()=>{
    const products=useProducts()

    return(
        <React.Fragment>
            <div className='banner'></div>
            <div className='home-row'>
            {products.map(product=>
                <ProductFlip key={product.id}
                    id={product.id}
                    title={product.name}
                    price={product.price}

                    quantity={product.quantity}
                    img={product.photo}
                    rating={4}
                />
            )}
            </div>
        </React.Fragment> 
       
        

    )
}