import React from "react";
import { ImageObject } from "../page";


const ImagePreview = ({src, heightImg}:{src: ImageObject, heightImg: any}) => {

    const style = {
        height: heightImg
    }

    return (
        <div>
            <img
                src={src.url} alt={src.title} style={style} />
        </div>
    );
};

export {ImagePreview};