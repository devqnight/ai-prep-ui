import path from "path";
import { ImageObject } from "../page";
import JSZip from "jszip";

async function downloadImage(img: ImageObject){
    const response = await fetch(img.url);
    const file = await response.blob();
    return file;
}

function downloadTextFile(img: ImageObject){
    const file = new Blob([img.desc], {type: "text/plain"});
    return file;
}

async function zip(imgs: ImageObject[]) {
    let zip = new JSZip();
    for (const img of imgs){
        const dataType = img.url.substring(img.url.indexOf(":")+1, img.url.indexOf(";"));
        zip.file(img.title, await downloadImage(img), {binary: true});
        zip.file(path.format({...path.parse(img.title), base: "", ext: ".txt"}), downloadTextFile(img));
    }
    const name = imgs.length > 1 ? "all" : imgs[0].title.substring(0, imgs[0].title.indexOf("."));
    zip.generateAsync({type: "blob"}).then(function(content) {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(content);
        a.download = name;
        a.click();
    }).catch(function(e) {
        console.error(e);
    });
}

export { zip, downloadImage };