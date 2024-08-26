import React from "react";
import { ImagePreview } from "../components/imagePreview";
import { ImageObject } from "../page";
import { Button } from "../components/button";
import { zip } from "../services/download";

const PreviewDownload = ({ item }: { item: ImageObject }) => {
    return (
        <div className="p-2 border-purple-50 border-opacity-30 border-2 rounded-md flex flex-shrink justify-between bg-transparent bg-gray-900 ">
            <ImagePreview src={item} heightImg={80} />
            <h1 className="p-1 flex items-center overflow-hidden">{item.title}</h1>
            <Button onPressButton={async () => await zip([item])} enabled={true} text={"Download"} type={"button"} />
        </div>
    );
}

export { PreviewDownload };