import React from "react";
import Image from "next/image";
import loading from '../../../public/uploading.gif';

const Loader = () => {

    return (
        <div>
            <Image
                src={loading}
                alt={"Loading"}
                width={150}
                height={150} />
        </div>
    );
}

export {Loader}