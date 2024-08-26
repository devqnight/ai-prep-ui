import React from "react";
import { Preview } from "./preview";
import { ImageObject } from "../page";

const ItemList = ({ list, onClick, selected }: { list: ImageObject[], onClick: Function, selected: ImageObject | undefined}) => {
    return (
        <div className="grid gap-0 grid-cols-1 overflow-y-scroll  divide-y-2 divide-green-900 p-0 m-0" style={{maxHeight: "1000px"}}>
            {list.map(item => (
                <Preview item={item} onClick={onClick} selected={item === selected} key={item.url}/>
            ))}
        </div>
    );
}

export { ItemList };