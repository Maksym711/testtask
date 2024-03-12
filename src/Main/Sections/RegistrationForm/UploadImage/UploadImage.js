import React, { useRef } from 'react'
import './UploadImage.css'

export default function UploadImage(props) {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.click()
    }

    const handleFileSelection = (e) => {
        const file = e.target.files[0]
        const fileExtension = file.type.split('/').pop().toLowerCase()

        if(fileExtension === 'jpeg' || fileExtension === 'jpg'){
            console.log(e.target.files[0])
            props.setUploadedFile(e.target.files[0])
        }
        else {
            props.setUploadedFile(null)
        }
    }

    if(props.disabled && props.uploadedFile && props.uploadedFile.size <= 5000000){
        props.setErrorUploadImage(false)
    }
    
    return (
    <div className={props.error ? 'upload-block error' : 'upload-block'}>
        <div className='upload-image'>
            <div onClick={handleClick} className={props.error ? "file-selection error" : "file-selection"}>Upload</div>
            <div className={props.error ? "file-name error" : "file-name"}>
                {!props.uploadedFile && (<p className='image-helper' onClick={handleClick}>Upload your photo</p>)}
                {props.uploadedFile &&(<p className='image-name' onClick={handleClick}>{props.uploadedFile.name.length > 25 ? props.uploadedFile.name.slice(0, 25) + '...' : props.uploadedFile.name}</p>)}
            </div>
            <input 
                ref={inputRef} 
                className='input-file' 
                type="file" 
                accept='image/jpeg,image/jpg'
                onChange={handleFileSelection}     
            />
        </div>
        {props.error && <p className='error-text'>minimum size of photo 70x70px, the photo size max 5 Mb</p>}   
    </div>
    )
}
