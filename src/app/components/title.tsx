import React, { ChangeEventHandler } from "react";

const Title = (
    {onChangeText, text}
        :
    {onChangeText: ChangeEventHandler<HTMLInputElement>,
        text: string
    }
) => {

    return (
        <div className="justify-center p-7 flex items-center">
            <h1 className="p-7 flex items-center">Title : </h1>
            <input
                title="Title"
                onChange={onChangeText}
                className="text-justify text-purple-50 text-opacity-70 bg-black border-purple-50 border-opacity-30 border-2 rounded-md p-3 sm:text-lg max-w-full min-w-lg max-h-fit overflow-visible "
                defaultValue={text}
            />
        </div>
    );
};

export {Title};