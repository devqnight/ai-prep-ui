import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type buttonType = "button" | "submit" | "reset" | undefined;

const Button = ({onPressButton, enabled, text, type}: {onPressButton: Function, enabled: boolean, text: string, type: buttonType}) => {

    return (
        <div style={{padding: 15, border: "1px solid white", borderRadius: 50, backgroundColor: "red", alignContent: "center"}}>
            <button onClick={onPressButton()} disabled={!enabled} type={type}>{text}</button>
        </div>
    );
};

export { Button };
export type { buttonType };
