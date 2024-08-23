import React, { ButtonHTMLAttributes, DetailedHTMLProps, useRef, useState } from "react";
import { Button } from "./button";
import Resizer from 'react-image-file-resizer';

function image64ToImage(base64: any) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = base64;
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject(img);
        };
    });
}

function cropImage(image: any, x: any, y: any, newWidth: any, newHeight: any) {
    const canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        return;
    }

    ctx.drawImage(image, x, y, newWidth, newHeight, 0, 0, newWidth, newHeight);
    return canvas.toDataURL("image/jpeg");
}

async function cropImage64(base64: any, x: any, y: any, newWidth: any, newHeight: any) {
    const img = await image64ToImage(base64);
    return cropImage(img, x, y, newWidth, newHeight);
}



const Uploader = ({ setIsLoading, setImageURLs, setCounter, counter, urls }: { setIsLoading: Function, setImageURLs: Function, setCounter: Function, counter: number, urls: string[] }) => {
    const fileUploadRef: any = useRef();

    const handleImageUpload = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fileUploadRef.current.click();
    };

    const uploadImageDisplay = async () => {
        setIsLoading(true);
        setCounter(fileUploadRef.current.files.length);
        const files: any[] = Array.from(fileUploadRef.current.files);
        await Promise.all(
            files.map(async (file: any) => {
                const uploadedFile = file;
                const objectImage = URL.createObjectURL(uploadedFile);
                const img = new Image();
                img.onload = async () => {
                    const imgHeight = img.height < img.width ? 1024 : img.height;
                    const imgWidth = img.height > img.width ? 1024 : img.width;
                    Resizer.imageFileResizer(
                        uploadedFile,
                        imgWidth,
                        imgHeight,
                        "JPEG",
                        100,
                        0,
                        async (uri) => {
                            const croppedImage = await cropImage64(uri, 0, 0, 1024, 1024);
                            setImageURLs((urls: string[]) => [...urls, croppedImage]);
                            if (counter === urls.length) {
                                setIsLoading(false);
                            }
                        },
                        "base64"
                    );
                }

                img.src = objectImage;
            })
        );
    }

    return (
        <div>
            <form id="form" encType='multipart/form-data' onSubmit={handleImageUpload}>
                <Button onPressButton={() => { }} enabled={true} text="Upload" type="submit" />
                <input type="file" id="file" hidden ref={fileUploadRef} onChange={uploadImageDisplay} multiple />
            </form>
        </div>

    );
};

export { Uploader };