import React, { useEffect, useRef, useState } from "react";
import { ImageLocal } from "../components/image";
import { Description } from "../components/description";
import { Title } from "../components/title";
import { Button } from "../components/button";
import { ImageObject } from "../page";
import { ImageCropper } from "../components/imageCropper";
import { Crop, makeAspectCrop } from "react-image-crop";
import { Parameters } from "../components/cropParameters";
import { cropImageNow, resizeImage } from "../services/imageFunctions";
import { ResizePrompt } from "../components/resizePrompt";
import { Loader } from "../components/loader";

export default function Edit(props: { imageObject: ImageObject, setFinalImages: Function }) {

    const [resizedImage, setResizedImage] = useState<ImageObject>();
    const [title, setTitle] = useState<string>();
    const [desc, setDesc] = useState<string>();
    const [maxSize, setMaxSize] = useState(1024);
    const [crop, setCrop] = useState<Crop>(
        {
            "unit": "px",
            "x": 0,
            "y": 0,
            "width": maxSize,
            "height": maxSize,
        }
    );
    const [cropPx, setCropPx] = useState<Crop>(
        {
            "unit": "px",
            "x": 0,
            "y": 0,
            "width": maxSize,
            "height": maxSize,
        }
    );
    const [autoResize, setAutoResize] = useState(false);

    const [isLoading, setIsLoading] = useState<boolean>();

    const onResize = async () => {
        const image: HTMLImageElement = new Image();
        image.onload = async () => {
            setResizedImage(undefined);
            //console.log("maxSize:",maxSize)
            const resized = await resizeImage(props.imageObject, image, maxSize);
            const newResizedImage = new Image();
            newResizedImage.onload = () => {
                const width = newResizedImage.width;
                const height = newResizedImage.height;

                //console.log("height",height, "width",width);
                setResizedImage(resized);
                setIsLoading(false);
                setCrop({
                    "unit": "%",
                    "x": 0,
                    "y": 0,
                    "width": width === maxSize ? 100 : (height / width) * 100,
                    "height": height === maxSize ? 100 : (width / height) * 100,
                });
                setTitle(resized.title);
                //console.log(crop);
            };
            newResizedImage.src = resized.url;
        };
        image.src = props.imageObject.url;
    }

    const validateEdit = () => {
        // only do cropping in here
        console.log(resizedImage)
        const toCrop: ImageObject = { ...resizedImage } as ImageObject;
        console.log(toCrop)
        const imageElement: HTMLImageElement = document.getElementById(toCrop.title);
        console.log(imageElement)
        const cropped: ImageObject = cropImageNow(imageElement, toCrop, cropPx, window, maxSize);
        props.setFinalImages({ ...cropped, title: title, desc: desc }, props.imageObject.url);
        resetEdit();
    }

    const resetEdit = () => {
        setResizedImage(undefined);
        setDesc("");
        setTitle("");
    }


    //implement auto resizing for new images when previous is saved and toggled is checked

    return (
        <div className="flex flex-col min-h-screen align-top">
            <div>
                <ResizePrompt
                    setResize={onResize}
                    max={maxSize}
                    setMax={setMaxSize}
                    setIsLoading={setIsLoading}
                    toggled={autoResize}
                    setToggle={setAutoResize}
                />
            </div>

            {resizedImage &&
                <div className="min-h-96">
                    <div>
                        <Title onChangeText={(e) => { setTitle(e.target.value) }} text={props.imageObject.title} key={props.imageObject.title} />
                    </div>
                    <div>
                        <ImageCropper
                            imageToCrop={resizedImage}
                            crop={crop}
                            setCrop={(a: Crop, b: Crop) => { setCropPx(a); setCrop(b) }} aspect={0} refImage={props.imageObject.title} />
                    </div>
                    <div >
                        <Description text={props.imageObject.desc} onChangeText={(e) => { setDesc(e.target.value) }} key={props.imageObject.desc} />
                    </div>
                    <div className="flex justify-end">
                        <Button
                            onPressButton={validateEdit} enabled={true} text={"Save"} type={"button"} />
                    </div>
                </div>
            }
            {isLoading &&
                <Loader />
            }
        </div>
    );
}