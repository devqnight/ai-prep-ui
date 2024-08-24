import React, { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler } from "react";

type buttonType = "button" | "submit" | "reset" | undefined;

const Button = ({onPressButton, enabled, text, type}: {onPressButton: MouseEventHandler<HTMLButtonElement>, enabled: boolean, text: string, type: buttonType}) => {

    return (
        <div className="flex justify-center">
            <button 
                onClick={onPressButton} 
                disabled={!enabled} 
                type={type}
                className="border-purple-50 border-opacity-40 border-2 rounded-xl p-4 pl-11 pr-11 bg-emerald-900 text-center"
            >
                    {text}
            </button>
        </div>
    );
};

export { Button };
export type { buttonType };
