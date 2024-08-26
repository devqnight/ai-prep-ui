import { ImageObject } from "../page";
import Resizer from 'react-image-file-resizer';
import { downloadImage } from "./download";
import { Crop } from "react-image-crop";

function image64ToImage(base64: any) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = base64;
		img.onload = () => {
			resolve(img);
		};
		img.onerror = () => {
			reject(img);
		};
	});
}

function cropImage(image: any, x: any, y: any, newWidth: any, newHeight: any) {
	const canvas = document.createElement("canvas");
	canvas.width = newWidth;
	canvas.height = newHeight;
	const ctx = canvas.getContext("2d");
	if (!ctx) {
		return;
	}

	ctx.drawImage(image, x, y, newWidth, newHeight, 0, 0, newWidth, newHeight);
	return canvas.toDataURL("image/jpeg");
}

async function cropImage64(base64: any, x: any, y: any, newWidth: any, newHeight: any) {
	const img = await image64ToImage(base64);
	return cropImage(img, x, y, newWidth, newHeight);
}


const resizeFile = (image: any, width: number, height: number) => {
	return new Promise<string>((resolve) => {
		Resizer.imageFileResizer(
			image,
			width,
			height,
			"JPEG",
			100,
			0,
			(uri) => {
				resolve(uri as string);
			},
			"base64"
		);
	});
}

function blobToBase64(blob: Blob) {
	return new Promise((resolve) => {
	  const reader = new FileReader();
	  reader.onloadend = () => resolve(reader.result);
	  reader.readAsDataURL(blob);
	});
  }
 
async function resizeImage(imageObject: ImageObject, image: HTMLImageElement, maxSide: number = 1024) {
	
	const imgHeight = image.height < image.width ? maxSide : image.height;
	const imgWidth = image.height > image.width ? maxSide : image.width;
	const imageBlob = await downloadImage(imageObject);
	const resizedImage = await resizeFile(imageBlob, imgWidth, imgHeight);
	return {...imageObject, url: resizedImage};
}

function cropImageNow(image: HTMLImageElement, imageObject: ImageObject, crop: Crop, window: Window, maxSize: number = 1024) {
	
	console.log("image.naturalHeight", image.naturalHeight, "image.naturalWidth", image.naturalWidth, "image.height", image.height, "image.width", image.width);

	const canvas = document.createElement("canvas");
	const scaleX = image.naturalWidth / image.width;
	const scaleY = image.naturalHeight / image.height;


	console.log(scaleX , scaleY);

	canvas.width = crop.width;
	canvas.height = crop.height;
	console.log(crop);
	console.log("canvas.height",canvas.height," canvas.width", canvas.width)

	const ctx = canvas.getContext("2d");

	if (ctx) {
		const pixelRatio = window.devicePixelRatio;

		console.log(pixelRatio)

		canvas.width =maxSize;
		canvas.height = maxSize;
		console.log("canvas.height",canvas.height," canvas.width", canvas.width)
		ctx?.setTransform(pixelRatio, 0,0, pixelRatio, 0,0);
	
		ctx.imageSmoothingQuality = "high";

		console.log(canvas);
		
		ctx.drawImage(
			image,
			(crop.x * scaleX) ,
			(crop.y * scaleY) ,
			maxSize,
			maxSize,
			0,
			0,
			maxSize ,
			maxSize 
		);	
		const base64 = canvas.toDataURL("image/jpeg");
		return {...imageObject, url: base64};
	}
	return imageObject;
}

export { image64ToImage, cropImage, cropImage64, blobToBase64, cropImageNow, resizeImage };