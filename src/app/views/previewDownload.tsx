import React from "react";
import { ImagePreview } from "../components/imagePreview";
import { ImageObject } from "../page";
import { Button } from "../components/button";
import { zip } from "../services/download";

const PreviewDownload = ({item}:{item:ImageObject}) => {
    return (
        <div className="p-1 grid grid-cols-2">   
            <div className="p-1 grid grid-cols-1">
                <h1 className="p-1 flex items-center overflow-hidden">{item.title}</h1>
                <ImagePreview src={item} heightImg={80} />
            </div>
            <Button onPressButton={async () => await zip([item])} enabled={true} text={"Download"} type={"button"} />
        </div>
    );
}

export {PreviewDownload};