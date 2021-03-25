import React, { useCallback, useEffect, useState } from 'react';
import {AddProduct} from './AddProduct'
import {ModifyProduct} from './ModifyProduct'
import  "../../node_modules/bootstrap/dist/css/bootstrap.css"
import {useProducts} from  './useProducts'

export const InsertProducts=()=>{
    const [type,setType]=useState('insert')    
    const [currentItem,setCurrentItem]=useState({})

    const products=useProducts()
//The current preferred route is useCallback, which is the same as your useMemo solution, 
//but with additional possible optimizations in the future. Pass an empty array [] to make sure 
//the function will always have the same reference for the lifetime of the component.
    const toggleType= useCallback((item) => {
        console.log('toggle:',item)
        if(item?.id){
            setCurrentItem(item) 
            setType('update')
        }else { 
            setCurrentItem({})   
            setType('insert');
       }
      }, []);

    return(
        <div className='container-fluid' style={{height:'100vw'}}>
            <div className='row'>   
                <div className='col'>
                    <h4 className='text-center'>Termékek listája</h4>
                    <table className='table table-responsive table-striped'>
                        <thead className='thead-dark'><tr><th>Név</th><th>Ár</th><th>Leírás</th><th>Darab</th><th>Fotó</th>
                                <th><button className='btn btn-outline-success' id='insert' onClick={()=>toggleType({})}>insert</button></th></tr></thead>
                        <tbody>
                            {products.map(product=>
                                <tr className='border' key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.quantity}</td>
                                    <td><img src={product.photo} alt="fotó" width="60" /></td>
                                    <td ><button className='btn btn-outline-info' id='update' onClick={()=>toggleType(product)}>modify</button></td>
                                    <td ><button className='btn btn-outline-danger' id='delete' onClick={()=>toggleType(product)}>delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div> 
                <div className='col'>
                    {type=='insert'?  <AddProduct /> :  <ModifyProduct item={currentItem}/> }
                     
                </div>
            </div>
        </div>
    )
}