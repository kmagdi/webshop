import React from 'react';
import {appUpload} from './base'

export const UploadPhoto=()=>{
    const onchange=(e)=>{
        const file=e.target.files[0]
        const storageRef=appUpload.storage().ref() 
        const fName=document.getElementById('value')
        const extensionType=file.name.slice(file.name.search('.'))
        console.log(fName+'.'+extensionType)
        const fileRef=storageRef.child(file.name)
        fileRef.put(file).then(()=>{
            console.log('uploaded')
        })
    }
    return(
        <div>
            <h1>Fájlok feltöltése</h1>
            <input type='text' id='fileName' placeholder='milyen néven szeretnéd tárolni a fájlt?'/>
            <input type='file' onChange={onchange}/>
        </div>
    )
}