import React, { ButtonHTMLAttributes, DetailedHTMLProps, useRef, useState } from "react";
import { Button } from "./button";
import Resizer from 'react-image-file-resizer';
import { ImageObject } from "../page";
import { cropImage64 } from "../services/resize";

const Uploader = ({ setIsLoading, setImageURLs, setCounter, counter, urls }: { setIsLoading: Function, setImageURLs: Function, setCounter: Function, counter: number, urls: ImageObject[] }) => {
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
                const title = file.name;
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
                            setImageURLs((urls: ImageObject[]) => [...urls, {url: croppedImage, title: title, desc: ""}]);
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