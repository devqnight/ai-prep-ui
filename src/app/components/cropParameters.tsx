import React from "react";

const calcRatio = (str: string) => {
    if (str.includes("/")) {
        return parseFloat(str.split("/")[0]) / parseFloat(str.split("/")[1])
    } else {
        return parseFloat(str);
    }
}

const Parameters = (
    props: {ratio: number, setRatio: Function, maxSide: number | undefined, setMaxSide: Function}
) => {

    return (
        <div className="flex flex-col justify-evenly items-start">
            <div className="grid grid-flow-col justify-evenly items-center p-1">
                <span className="m-2">Crop Ratio</span>
                <input
                    title="Crop Ratio"
                    onChange={(e) => props.setRatio(calcRatio(e.target.value))}
                    className="text-justify text-purple-50 text-opacity-70 bg-black border-purple-50 border-opacity-30 border-2 rounded-md p-3 sm:text-lg max-w-full min-w-lg max-h-fit overflow-visible "
                    defaultValue={props.ratio}
                />
            </div>
            <div className="grid grid-flow-col justify-evenly items-center p-1">
                <span className="m-2">Max Side Size</span>
                <input
                    title="Max Side Size"
                    onChange={(e) => props.setMaxSide(e.target.value)}
                    className="text-justify text-purple-50 text-opacity-70 bg-black border-purple-50 border-opacity-30 border-2 rounded-md p-3 sm:text-lg max-w-full min-w-lg max-h-fit overflow-visible "
                    defaultValue={props.maxSide}
                />
            </div>
        </div>
    );
}

export { Parameters };