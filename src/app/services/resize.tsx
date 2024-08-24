
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

export { image64ToImage, cropImage, cropImage64}