"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const Imageinput = useRef();
  const handlePickClick = () => {
    Imageinput.current.click();
  };
  const handleImagePicker = (e) => {
    const pickImage = e.target.files[0];

    if (!pickImage) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    
    fileReader.onload =()=>{
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(pickImage);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? <Image src={pickedImage} alt="Image to share" fill/>: <p>Image is not Picked yet</p>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png , image/jpeg "
          name={name}
          ref={Imageinput}
          onChange={handleImagePicker}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
