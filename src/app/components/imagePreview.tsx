import React from "react";


const ImagePreview = ({src, heightImg}:{src: string, heightImg: any}) => {

    const style = {
        height: heightImg
    }

    return (
        <div>
            <img
                src={src} alt={"image"} style={style} />
        </div>
    );
};

export {ImagePreview};