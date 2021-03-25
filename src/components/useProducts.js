import firebase from 'firebase'
import React, { useEffect, useState } from 'react';

export const useProducts=()=>{
    const [products,setProducts]=useState([])
    
    useEffect(()=>{
        const unSubscribe=firebase
            .firestore()
            .collection('products')
            .onSnapshot((snapshot)=>{
                const newProduct=snapshot.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data()
                }))
                setProducts(newProduct)
            })
        return ()=>unSubscribe()
    },[])
    return products
}
