import React from "react";
import { Preview } from "./preview";
import { ImageObject } from "../page";

const ItemList = ({ list, onClick, selected }: { list: ImageObject[], onClick: Function, selected: ImageObject | undefined}) => {
    return (
        <div className="grid gap-8 grid-flow-row-dense grid-cols-3 overflow-y-scroll" style={{maxHeight: "1000px", paddingRight: 10}}>
            {list.map(item => (
                <Preview item={item} onClick={onClick} selected={item === selected} />
            ))}
        </div>
    );
}

export { ItemList };