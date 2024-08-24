'use client'
import Image from "next/image";
import Process from "./views/process";
import { useState } from "react";
import loading from '../../public/uploading.gif';
import Header from "./views/header";

export type ImageObject = (
  {
    url: string,
    title: string,
    desc: string
  }
);


export default function Home() {

  const [isLoading, setIsLoading] = useState(false);

  const [imageURL, setImageURL] = useState<ImageObject[]>([]);

  const [finalImages, setFinalImages] = useState<ImageObject[]>([]);

  const [counter, setCounter] = useState(0);

  const addFinalImage = (img: ImageObject) => {
    setFinalImages((imgs) => [...imgs, img]);
    setImageURL(imageURL.filter(a => a.url !== img.url));
  }

  return (
    <main className="max-h-fit">
      <div className="max-h-lvh">
        <Header />

        {!isLoading &&
          <Process
            setIsLoading={setIsLoading}
            setImageURLs={setImageURL}
            imageURLs={imageURL}
            setCounter={setCounter} counter={counter}
            setFinalImages={addFinalImage}
            finalImages={finalImages}
          />
        }
        {isLoading &&
          <div>
            <Image
              src={loading}
              alt={"Loading"}
              width={150}
              height={150} />
            <span>{imageURL.length} out of {counter}</span>
          </div>
        }
      </div>
    </main>
  );
}
