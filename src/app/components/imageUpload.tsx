import React, { ButtonHTMLAttributes, DetailedHTMLProps, useRef, useState } from "react";
import { Button } from "./button";
import Resizer from 'react-image-file-resizer';
import { ImageObject } from "../page";
import { blobToBase64, cropImage64 } from "../services/imageFunctions";

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
                const base64 = await blobToBase64(uploadedFile);
                setImageURLs((urls: ImageObject[]) => [...urls, {url: base64, title: title, desc: ""}]);
                if (counter === urls.length) {
                    setIsLoading(false);
                }
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