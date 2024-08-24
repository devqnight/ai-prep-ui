import React from "react";
import { ImagePreview } from "../components/imagePreview";
import { ImageObject } from "../page";

const Preview = ({item, onClick, selected}:{item:ImageObject, onClick: Function, selected: boolean}) => {
    return (
        <div className="p-1 grid grid-cols-1" onClick={(e) => {onClick(e.nativeEvent.target)}}>   
            <h1 className="p-1 flex items-center overflow-hidden">{item.title}</h1>
            <ImagePreview src={item} heightImg={80} />
        </div>
    );
}

export {Preview};