'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css'

export default function ImagePicker({ label, name }){
const [pickedImage, setPickImage] = useState();
const imageInput = useRef();

  function handlePick(){
    imageInput.current.click();
  }

  function handleImgChange(event){
    const file = event.target.files[0];

    if (!file){
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return(
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
       <div className={classes.preview}>
       {!pickedImage && <p>No image picked yet.</p>}
        {pickedImage && (
          <Image 
          src={pickedImage}
          alt='The Image selected by the user'
          fill
          />)}
       </div>
        <input 
        className={classes.input}
        type='file' 
        id='image' 
        accept='image/png, image/jpeg, image/jpg'
        name={name}
        ref={imageInput}
        onChange={handleImgChange}
        required
        />
        <button 
        className={classes.button} 
        type='button'
        onClick={handlePick}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}
