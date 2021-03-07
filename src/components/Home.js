import homeimg from './homeimg.jpg'
import {Product} from './Product'
import './Home.css'

export const Home=()=>{
    return(
        <div className='home'>
            <img className='home-img' alt='' src={homeimg}/>

            <div className='home-row'>
                <Product id={1} title={'a termék neve'} 
                        price={1000} 
                        img='https://raw.githubusercontent.com/kmagdi/memory/master/src/components/hegy.jpg'
                        rating={4}
                />
                 <Product id={2} title={'a termék neve'} 
                        price={1000} 
                        img='https://raw.githubusercontent.com/kmagdi/memory/master/src/components/hegy.jpg'
                        rating={2}
                />
                 <Product id={3} title={'a termék neve'} 
                        price={1000} 
                        img='https://raw.githubusercontent.com/kmagdi/memory/master/src/components/hegy.jpg'
                        rating={3}
                />
            </div>
        </div>

    )
}