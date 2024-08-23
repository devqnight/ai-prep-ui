import React, { useState } from "react";
import { Uploader } from "../components/imageUpload";
import { ImageLocal } from "../components/image";
import { Description } from "../components/description";
import { Title } from "../components/title";

export default function Edit({imageURL}:{imageURL: string}) {



    return (
        <div>
            <div>
                <Title onChangeText={() => {}} />
            </div>
            <div>
                <ImageLocal src={imageURL} />
            </div>
            <div>
                <Description />
            </div>
        </div>
    );
}