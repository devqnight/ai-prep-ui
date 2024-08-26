import React from "react";
import { ImageObject } from "../page";


const ImageLocal = ({src, id}:{src: ImageObject, id:string}) => {

    return (
            <img style={{maxWidth:"100%", maxHeight:"20%", height:"auto"}}
                src={src.url} alt={src.title} id={id} />
    );
};

export {ImageLocal};