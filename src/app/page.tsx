'use client'
import Image from "next/image";
import Process from "./views/process";
import { useState } from "react";
import loading from '../../public/uploading.gif';
import Header from "./views/header";

export default function Home() {

  const [isLoading, setIsLoading] = useState(false);

  const [imageURL, setImageURL] = useState([]);

  const [counter, setCounter] = useState(0);


  return (
    <main className="max-h-fit">
      <div>
        <Header />

        {!isLoading &&
          <Process setIsLoading={setIsLoading} setImageURLs={setImageURL} imageURLs={imageURL} setCounter={setCounter} counter={counter}/>
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
