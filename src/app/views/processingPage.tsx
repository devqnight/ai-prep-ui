import React, { useEffect, useState } from "react";
import Edit from "./edit";
import { ItemList } from "./itemList";

export default function ProcessingPage({setIsLoading, setImageURLs, imageURLs, setCounter}:{setIsLoading:Function, setImageURLs:Function, imageURLs: string[], setCounter: Function}) {

    const [selected, setSelected] = useState("");

    useEffect(() => {
        setSelected(imageURLs[0]);
    }, [imageURLs]);

    return (
        <div className="flex flex-row items-center justify-between align-top max-h-min">
            <div  className="flex flex-col items-center justify-between p-12" style={{width: "30%"}}>
                <ItemList list={imageURLs} onClick={setSelected} selected={selected}  />
            </div>
            <div  className="flex flex-col items-center align-top justify-between p-12" style={{width: "40%"}}>
                <Edit imageURL={selected} />
            </div>    
            <div  className="flex flex-col items-center justify-between p-12" style={{width: "30%"}}></div>
        </div>
    );
}