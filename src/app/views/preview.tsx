import React, { useState } from "react";
import { ImagePreview } from "../components/imagePreview";
import { ImageObject } from "../page";

const Preview = ({ item, onClick, selected }: { item: ImageObject, onClick: Function, selected: boolean }) => {

    return (
        <button className="p-2" id={item.title + "_btn"} type={"button"} style={selected ? {background: "green"} : {background: "black"}}
            onClick={(e) => { onClick(e.nativeEvent.target) }}
        >
            <div className="p-2 border-purple-50 border-opacity-30 border-2 rounded-md flex flex-shrink justify-between bg-transparent bg-gray-900 ">

                <ImagePreview src={item} heightImg={80} />
                <h1 className="p-1 flex items-center overflow-hidden">{item.title}</h1>
            </div>
        </button>

    );
}

export { Preview };