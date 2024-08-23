import React from "react";
import { ImagePreview } from "../components/imagePreview";

const Preview = ({item, onClick, selected}:{item:string, onClick: Function, selected: boolean}) => {
    return (
        <div style={{padding:5}} onClick={(e) => {onClick(e.nativeEvent.target.src)}}>
            <ImagePreview src={item} heightImg={80} />
        </div>
    );
}

export {Preview};