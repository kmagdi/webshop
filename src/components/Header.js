import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import React, { useEffect, useReducer } from 'react';
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './logo.png'  
import {useStateValue} from '../stateProvider'
import { auth } from './firebaseApp';
import { AddToHomeScreen } from '@material-ui/icons';

export const Header=()=>{
    const [{basket,loggedinuser},dispatch]=useStateValue()

    //console.log('basket:'+basket)
    //console.log('user:')
    const logoutUser=()=>{
        auth.signOut()
    }
    useEffect(()=>{
        auth.onAuthStateChanged((userauth)=>{
            if(userauth){
                dispatch({
                    type:'LOGIN_USER',
                    user:userauth
                })
             }else{
                dispatch({
                    type:'LOGIN_USER',
                    user:null
                })
             }
        })
    },[])
    return(    

        <nav className="header">
            <img className="header-logo" src={logo} alt='logo' />
           
                <div className='header-search'>
                    <input className='header-search-input' type='text'/>
                    <SearchIcon className='header-search-icon'/>
                </div>
            <div className="header-nav">
            <Link to={!loggedinuser&&'/login'} className='header-link'>
                <div onClick={logoutUser} className='header-option'>
                    <span className='header-option1'>Hello, {loggedinuser?.email}</span>
                    <span className='header-option2'>{loggedinuser?'sign out':'sign in'}</span>
                </div>
            </Link>
            <Link to='/' className='header-link'>
                <div className='header-option'>
                    <span className='header-option1'>Returns</span>
                    <span className='header-option2'>Orders</span>
                </div>
            </Link>
            <Link to='/checkout' className='header-link'>
                <div className='header-option-basket'>
                    <ShoppingBasketIcon/>
                    <span className='header-option1 header-product-count'>{basket.length}</span>
                </div>
            </Link>
        </div>
    </nav>

    )
}