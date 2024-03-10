import React, { useRef } from 'react'
import './UploadImage.css'

export default function UploadImage(props) {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.click()
    }

    const handleFileSelection = (e) => {
        if(e.target.files.length > 0){
            props.setImageName(e.target.files[0].name)
        } else {
            props.setImageName('')
        }
    }

    console.log(props.imageName)

    return (
    <div className='upload-image'>
        <div onClick={handleClick} className="file-selection">Upload</div>
        <div className="file-name">
            {props.imageName.length === 0 && <p className='image-helper'>Upload your photo</p>}
            {props.imageName.length > 0 && <p className='image-name' onClick={handleClick}>{props.imageName.length > 25 ? props.imageName.slice(0, 25) + '...' : props.imageName}</p>}
        </div>
        <input 
            ref={inputRef} 
            className='input-file' 
            type="file" 
            accept='image/jpeg,image/png'
            onChange={handleFileSelection}     
        />
    </div>    
    )
}
