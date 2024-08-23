import React, { useState } from "react";

export default function Header() {
    return (
        <div className="flex flex-col items-center justify-between p-15" style={{backgroundColor: "mediumseagreen", margin: 0, padding: 15}}>
            <h1>AI Image Prep Tool</h1>
        </div>
    );
}