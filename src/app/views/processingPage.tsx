import React, { useEffect, useState } from "react";
import Edit from "./edit";
import { ItemList } from "./itemList";
import { ImageObject } from "../page";
import { FinalItemList } from "./finalItemList";
import { Button } from "../components/button";
import { zip } from "../services/download";

export default function ProcessingPage(
    {setIsLoading, setImageURLs, imageURLs, setCounter, setFinalImages, finalImages}
        :
    {setIsLoading:Function, setImageURLs:Function, imageURLs: ImageObject[], setCounter: Function, setFinalImages: Function, finalImages: ImageObject[]}
) {

    const [selected, setSelected] = useState<ImageObject>(imageURLs[0]);

    const setItemSelected = (item: any) => {
        if (item.src) {
            setSelected(imageURLs.filter(a => a.title === item.alt && a.url === item.src)[0]);
        }
    }

    useEffect(() => {
        setSelected(imageURLs[0]);
    }, [imageURLs]);

    return (
        <div className="flex flex-row items-center justify-between align-top max-h-min">
            <div  className="flex flex-col items-center justify-between p-12" style={{width: "30%", maxHeight:"1000px"}}>
                <ItemList list={imageURLs} onClick={setItemSelected} selected={selected}  />
            </div>
            <div  className="flex flex-col items-center align-top justify-between p-12" style={{width: "40%", minHeight:"600px", maxHeight: "1000px"}}>
                <Edit imageURL={selected} setFinalImages={setFinalImages} />
            </div>    
            <div  className="flex flex-col items-center justify-between p-12" style={{width: "30%", maxHeight:"1000px"}}>
                <Button onPressButton={async () => await zip(finalImages)} enabled={true} text={"Download All"} type={"button"}  />
                    <span className="p-5"></span>
                <FinalItemList list={finalImages} />
            </div>
        </div>
    );
}