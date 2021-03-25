import homeimg from './homeimg.jpg'
import {Product} from './Product'
import './Home.css'
import {useProducts} from  './useProducts'

export const Home=()=>{
    const products=useProducts()

    return(
        <div className='home'>
            <img className='home-img' alt='' src={homeimg}/>

            <div className='home-row'>
            {products.map(product=>
                <Product key={product.id}
                    id={product.id}
                    title={product.name}
                    price={product.price}

                    quantity={product.quantity}
                    img={product.photo}
                    rating={4}
                />
            )}
            </div>
        </div>

    )
}