import React from "react";
import { Preview } from "./preview";

const ItemList = ({ list, onClick, selected }: { list: string[], onClick: Function, selected: string }) => {
    return (
        <div className="grid gap-8 grid-cols-3 overflow-y-scroll max-h-96">
            {list.map(item => (
                <Preview item={item} onClick={onClick} selected={item === selected} />
            ))}
        </div>
    );
}

export { ItemList };