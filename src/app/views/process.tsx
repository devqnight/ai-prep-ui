import React, { useState } from "react";
import { Uploader } from "../components/imageUpload";
import ProcessingPage from "./processingPage";

export default function Process({setIsLoading, setImageURLs, imageURLs, setCounter, counter}:{setIsLoading:Function, setImageURLs:Function, imageURLs: string[], setCounter: Function, counter:number}) {
    return (
        <div >
            {imageURLs.length > 0 && 
                <ProcessingPage imageURLs={imageURLs} setIsLoading={setIsLoading} setCounter={setCounter} setImageURLs={setImageURLs}/>
            }

            {imageURLs.length == 0 &&
                <div  className="flex min-h-screen flex-col items-center justify-between p-24">
                    <Uploader setImageURLs={setImageURLs} setIsLoading={setIsLoading} setCounter={setCounter} urls={imageURLs} counter={counter}/>
                </div>
            }
        </div>
    );
}