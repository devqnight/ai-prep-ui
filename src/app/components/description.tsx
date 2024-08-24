import React, { ChangeEventHandler } from "react";

const Description = (
    {text, onChangeText}
        :
    {text: string,
        onChangeText: ChangeEventHandler<HTMLTextAreaElement>
    }
) => {

    return (
        <div
            className="min-w-full py-7 pl-3 pr-3">
            <textarea name="txt" id="txt"
                onChange={onChangeText}
                className="text-justify text-purple-50 text-opacity-70 bg-black border-purple-50 border-opacity-30 border-2 rounded-md py-2 pl-3 pr-3 sm:text-lg max-w-full min-w-full">
                
            </textarea>
        </div>
    );
};

export { Description };