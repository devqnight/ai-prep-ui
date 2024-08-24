import React from "react";
import { ImageObject } from "../page";


const ImageLocal = ({src}:{src: ImageObject}) => {

    return (
        <div style={{width:512, height:"auto"}}>
            <img
                src={src.url} alt={src.title} />
        </div>
    );
};

export {ImageLocal};