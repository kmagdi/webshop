import React, { useEffect, useState } from 'react';
import firebase from 'firebase'
import {appUpload} from './base'

export const ModifyProduct=({item})=>{
    console.log('termék:',item.id)
    const [newname,setName]=useState(item.name)
    const [newprice,setPrice]=useState(item.price)
    const [newquantity,setQuantity]=useState(item.quantity)
    const [newdescription,setDescription]=useState(item.description)
    const [newphotoUrl,setPhotoUrl]=useState(item.photo)

    useEffect(()=>{
        setName(item.name)
        setPrice(item.price)
        setDescription(item.description)
        setQuantity(item.quantity)
        setPhotoUrl(item.photo)

    },[item])

    const onFileChange=async(e)=>{
        const file=e.target.files[0]
        const storageRef=appUpload.storage().ref() 
        const fileRef=storageRef.child(file.name)
        await fileRef.put(file)
        setPhotoUrl(await fileRef.getDownloadURL())
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log('modositas name -db:',newname)
        console.log('gomb:'+e.target.id)
        if(e.target.id=='update'){
            firebase
                .firestore()
                .collection('products').doc(item.id)
                .update({
                    name:newname,
                    description:newdescription,
                    price:parseInt(newprice),
                    quantity:parseInt(newquantity),
                    photo:newphotoUrl
                })
        }else{
            firebase
                .firestore()
                .collection('products').doc(item.id)
                .delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
        }
    }

    return(
        <React.Fragment>
            <h4 className='text-center text-info'>Termék módosítása / törlése</h4>
            <form className='form border p-2 border-info text-info' >
                <div className='form-group'>
                    <label>Termék neve:</label>
                    <input className='form-control' type='text' value={newname} onChange={(e=>setName(e.currentTarget.value))}/>
                </div>
                <div className='form-group'>
                    <label>Leírása:</label>
                    <input className='form-control' type='text' value={newdescription} onChange={(e=>setDescription(e.currentTarget.value))}/>
                </div>
                <div className='form-group'>
                    <label>Fotó:</label><img src={newphotoUrl} width='60'/>
                    <input className='form-control' type='file'  onChange={onFileChange} />
                </div>
                <div className='row'>
                    <div className='col-4'>
                         <label>Termék ára:</label>
                        <input className='form-control' type='number' value={newprice} onChange={(e=>setPrice(e.currentTarget.value))}/>
                    </div>
                    <div className='col-4'>
                        <label>Darab:</label>
                        <input className='form-control' type='number' value={newquantity} onChange={(e=>setQuantity(e.currentTarget.value))}/>
                    </div> 
                </div>
                <div className="row mt-2 mb-2 justify-content-center">
                    <button className='w-25  btn btn-outline-info' type='submit' id='update' onClick={onSubmit}>  Módosítás</button>
                    <button className='w-25  btn btn-outline-danger ml-1' type='submit' id='delete' onClick={onSubmit}> Törlés</button>
                </div>
                
            </form>
        </React.Fragment>
    )
}