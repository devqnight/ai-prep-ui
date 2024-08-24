import React, { useEffect, useState } from "react";
import { ImageLocal } from "../components/image";
import { Description } from "../components/description";
import { Title } from "../components/title";
import { Button } from "../components/button";
import { ImageObject } from "../page";

export default function Edit({imageURL, setFinalImages}:{imageURL: ImageObject, setFinalImages: Function}) {

    const [title, setTitle] = useState(imageURL.title);
    const [desc, setDesc] = useState(imageURL.desc);

    const submitDesc = (target: EventTarget | null) => {
        const img: ImageObject = {
            url: imageURL.url,
            title: title ? title : imageURL.title,
            desc: desc
        }
        console.log(img);
        setFinalImages(img);
        setTitle("");
        setDesc("");
    };

    console.log(imageURL);


    return (
        <div>
            <div>
                <Title onChangeText={(e) => {setTitle(e.target.value)}} text={imageURL.title} key={imageURL.title}/>
            </div>
            <div>
                {imageURL && <ImageLocal src={imageURL} />}
            </div>
            <div>
                <Description text={imageURL.desc} onChangeText={(e) => {setDesc(e.target.value)}} key={imageURL.desc}/>
            </div>
            <div className="flex justify-end">
                <Button onPressButton={(e) => {submitDesc(e.nativeEvent.target)}} enabled={true} text={"Save"} type={"button"}  />
            </div>
        </div>
    );
}