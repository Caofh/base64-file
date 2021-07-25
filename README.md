# base64-file
### Plug in for front-end conversion files（前端转换文件插件：base64、blob(二进制)、File(文件类型)之间相互转换）

## 一：install
```
npm install base64-file -S
```
## 二：use
### 1、网图转成base64<font face="黑体" color=red>（注意：图片资源必须是允许跨域访问的资源，否则回报跨域问题）</font>
```
import { imageUrlToBase64 } from 'base64-file'
const imageUrl = `https://tpdoc.cn/erp/uploads/image/self/cao_admin_carousel.png`
imageUrlToBase64(imageUrl).then((base64) => {
  console.log(base64)
})
```

### 2、文件转成base64
```
import { fileToBase64 } from 'base64-file'
const file = *** // 文件类型的数据：<input type="file"> 上传的文件类型数据
fileToBase64(file).then((base64) => {
  console.log(base64)
})
```

### 3、base64转成blob(二进制)
```
import { dataURLtoBlob } from 'base64-file'
const base64 = `***` // base64字符串
const blob = dataURLtoBlob(base64)
console.log(blob)
```

### 4、blob(二进制)转成File
```
import { blobToFile } from 'base64-file'
const blob = `***` // 文件二进制数据
const file = blobToFile(blob)
console.log(file)
```

### 5、base64转成File
```
import { dataURLtoBlob, blobToFile } from 'base64-file'
const base64 = `***` // base64字符串
const blob = dataURLtoBlob(base64)
const file = blobToFile(blob)
console.log(file)
```

### 6、File转成blob(二进制)
```
import { fileToBase64, dataURLtoBlob } from 'base64-file'
const file = *** // 文件类型的数据：<input type="file"> 上传的文件类型数据
fileToBase64(file).then((base64) => {
  const blob = dataURLtoBlob(base64)
  console.log(blob)
})
```

