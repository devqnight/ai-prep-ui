import React, { useState } from "react";
import { Uploader } from "../components/imageUpload";
import ProcessingPage from "./processingPage";
import { ImageObject } from "../page";

export default function Process(
    {setIsLoading, 
        setImageURLs, 
        imageURLs, 
        setCounter, 
        counter, 
        setFinalImages, 
        finalImages
    }
        :
    {setIsLoading:Function, 
        setImageURLs:Function, 
        imageURLs: ImageObject[], 
        setCounter: Function, 
        counter:number, 
        setFinalImages: Function, 
        finalImages: ImageObject[]
    }) 
{
    return (
        <div >
            {imageURLs.length > 0 && 
                <ProcessingPage 
                    imageURLs={imageURLs} 
                    setIsLoading={setIsLoading} 
                    setCounter={setCounter} 
                    setImageURLs={setImageURLs} 
                    setFinalImages={setFinalImages}
                    finalImages={finalImages}
                />
            }

            {imageURLs.length == 0 &&
                <div  className="flex min-h-screen flex-col items-center justify-between p-24">
                    <Uploader setImageURLs={setImageURLs} setIsLoading={setIsLoading} setCounter={setCounter} urls={imageURLs} counter={counter}/>
                </div>
            }
        </div>
    );
}