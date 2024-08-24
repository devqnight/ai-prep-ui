import React from "react";
import { ImageObject } from "../page";
import { PreviewDownload } from "./previewDownload";

const FinalItemList = ({ list }: { list: ImageObject[]}) => {
    return (
        <div className="grid gap-8 grid-cols-1 overflow-y-scroll" style={{maxHeight: "1000px", paddingRight: 10}}>
            {list.map(item => (
                <PreviewDownload item={item} key={item.url}/>
            ))}
        </div>
    );
}

export { FinalItemList };