import React from "react";

const Title = ({onChangeText}:{onChangeText: React.ChangeEventHandler<HTMLInputElement>}) => {

    return (
        <div>
            <input
                style={{color: "black"}}
                onChange={onChangeText}
                title="Title"
            />
        </div>
    );
};

export {Title};