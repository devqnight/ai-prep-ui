import React from "react";
import { Button } from "./button";

const ResizePrompt = (props: {setResize: Function, max: number, setMax: Function, setIsLoading: Function, toggled: boolean, setToggle: Function}) => {

	const applyMaxSize = async () => {
		props.setIsLoading(true);
		await props.setResize();
	}

	return (
		<div className="flex flex-row justify-right p-4 items-center">
			<span>Max Size : </span>
			<input 
				onChange={(e) => props.setMax(e.target.value)}
				className="text-justify text-purple-50 text-opacity-70 bg-black border-purple-50 border-opacity-30 border-2 rounded-md p-3 sm:text-lg max-w-full min-w-lg max-h-fit overflow-visible m-8"
                defaultValue={props.max}
				type="number"
			/>
			<Button 
                onPressButton={() => applyMaxSize()} enabled={true} text={"Resize"} type={"button"}								
			/>
			<input
				disabled
				title="autoResize"
				onChange={(e) => {props.setToggle(e.target.checked)}}
				checked={props.toggled}
				type="checkbox"
				
			/>
		</div>
	);
}

export {ResizePrompt}