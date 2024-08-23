import React from "react";


const ImageLocal = ({src}:{src: string}) => {

    return (
        <div style={{width:512, height:"auto"}}>
            <img
                src={src} alt={"image"} />
        </div>
    );
};

export {ImageLocal};