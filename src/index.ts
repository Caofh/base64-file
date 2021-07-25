

// file文件 =》 base64
function fileToBase64 (file: File): Promise<any> {
  return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = function (ev) {
          const base64Str = ev.target.result
          resolve(base64Str)
      }
      reader.onerror = function (err) {
          console.log(err)
          reject(err)
      }
      reader.readAsDataURL(file);
  })
}

// 网图 =》 base64（图片资源必须允许跨域，否则不可下载转换）
function imageUrlToBase64 (imageUrl: string): Promise<any> {
  return new Promise((resolve, reject) => {
      let tmpImage = createImage(imageUrl)
      tmpImage.onload = function() {
          let canvas = appendCanvas()
          canvas.width = tmpImage.width
          canvas.height = tmpImage.height
          let context = canvas.getContext('2d')
          context.drawImage(tmpImage, 0, 0)
          const base64Str = canvas.toDataURL('image/png')
          resolve(base64Str)
      }
      tmpImage.onerror = function(err) {
          console.log(err)
          reject(err)
      }
  })
}
function appendCanvas(): HTMLCanvasElement {
  let body = document.body
  let canvas = document.createElement('canvas')
  body.appendChild(canvas)
  return canvas
}
function createImage(url: string): HTMLImageElement {
  let img = new Image()
  img.setAttribute('crossOrigin', 'anonymous')
  img.src = url
  return img
}

// base64字符串转二进制(blob)
function dataURLtoBlob(dataurl: string): Blob {
  let arr = dataurl.split(','),
  mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]),
  n = bstr.length,
  u8arr = new Uint8Array(n);
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {
      type: mime
  });
}

// 二进制(blob)转File
function blobToFile (blob: Blob): File {
  const fileType = blob.type
  const fileName = `${new Date().getTime()}.${fileType.split('/')[1]}`
  const file = new File([blob], fileName, {
      type: fileType
  });
  return file
}

export {
  fileToBase64,
  imageUrlToBase64,
  dataURLtoBlob,
  blobToFile
}