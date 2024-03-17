import React, { useRef } from 'react'
import './UploadImage.css'

export default function UploadImage(props) {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.click()
    }

    const handleFileSelection = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileExtension = file.type.split('/').pop().toLowerCase();
            if (fileExtension === 'jpeg' || fileExtension === 'jpg') {
                const img = new Image();
                img.onload = function() {
                    const imgWidth = this.width;
                    const imgHeight = this.height;
                    if (imgWidth >= 70 && imgHeight >= 70) {
                        props.setUploadedFile(file)
                    } 
                    else {
                        props.setUploadedFile(null)
                    }
                };
                img.src = URL.createObjectURL(file)
            } 
            else {
                props.setUploadedFile(null)
            }
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
        <p className={props.error ? 'file-helper-text error' : 'file-helper-text'}>minimum size of photo 70x70px, the photo size max 5 Mb</p> 
    </div>
    )
}
