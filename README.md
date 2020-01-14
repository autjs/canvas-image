# canvas-image
> ##### 合成压缩图像 返回Base64数据，
>
> ##### 主要用于web前端向服务器发送数据或其它



####  * 不同环境下使用

```js
<script> 
    import * as cn from '@ziki/gm'
    // 本地直接打开访问会有跨域问题
    // 记得自己启个服务访问
    cn.bitmap.compose([
        {
            src: './bg.jpg',
            x: 0, 
            y: 0,
            width: 600,
            height: 400
        },
        {
            src: './item.jpg',
            x: 0, 
            y: 0,
            width: 200,
            height: 200
        }
    ], (base64) => {
        console.log(base64) // 可以拿这个数据直接放在浏览器地址里查看合成后的图
    });
</script>
```



```js
<script type="text/javascript" src="dist/cncoder.js"></script>
<script> 
    // 本地直接打开访问会有跨域问题
    // 记得自己启个服务访问
    cncoder.bitmap.compose([
        {
            src: './bg.jpg',
            x: 0, 
            y: 0,
            width: 600,
            height: 400
        },
        {
            src: './item.jpg',
            x: 0, 
            y: 0,
            width: 200,
            height: 200
        }
    ], (base64) => {
        console.log(base64) // 可以拿这个数据直接放在浏览器地址里查看合成后的图
    });
</script>
```

