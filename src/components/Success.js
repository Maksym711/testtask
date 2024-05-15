import React, { useState, useEffect } from 'react';
import './Success.css';
import success_logo from '../image/success-image.svg';

export default function Success() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image()
    img.src = success_logo
    img.onload = () => setImageLoaded(true)
  }, [])

  return (
    <div className="success">
      {imageLoaded && (
        <>
          <h1>User successfully registered</h1>
          <img src={success_logo} alt="success" />
        </>
      )}
    </div>
  )
}