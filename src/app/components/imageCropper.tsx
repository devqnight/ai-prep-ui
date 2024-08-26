import React, { ImgHTMLAttributes, useState } from "react";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import { ImageObject } from "../page";
import { ImageLocal } from "./image";
import 'react-image-crop/dist/ReactCrop.css'

const ImageCropper = (props: { imageToCrop: ImageObject; crop: Crop, setCrop: Function, aspect: number, refImage: string }) => {

    return (
        <div>
            <ReactCrop
                crop={props.crop}
                onChange={(crop, percentCrop) => {
                    //console.log(percentCrop, crop); 
                    props.setCrop(crop,percentCrop)
                }}
                aspect={1}
                keepSelection={true}
                locked
            >
                <ImageLocal src={props.imageToCrop} id={props.refImage}/>
            </ReactCrop>
        </div>
    );
}

export {ImageCropper}