import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import './login.css'
import logo from './logo.png'
import {auth} from './firebaseApp'

export const Login=()=>{
    const history=useHistory()
    const [email,setEmail]=useState('')
    const [passw,setPassw]=useState('')

    const loginuser=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,passw)
            .then((auth)=>{
                history.push('/')//redirect to do Home page of the app
            })
            .catch(e=>alert(e.message))
    }
    const signupuser=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,passw)
            .then(auth=>{
                history.push('/')
            })
            .catch(e=>alert(e.message))
    }


    return(
        <div className='login'>
            <Link>
                <img alt='' className='login-logo' src={logo}/>
            </Link>
            <div className='login-container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input onChange={e=>setEmail(e.target.value)} value={email} type='email'/>
                    <h5>Password:</h5>
                    <input onChange={e=>setPassw(e.target.value)} value={passw} type='password'/>
                    <button onClick={loginuser} type='submit' className='login-signin-btn'>Sign In</button>
                </form>
                <p>...accept conditions.</p>
                <button onClick={signupuser} className='login-registration'>Create account</button>
            </div>

        </div>
    )
}