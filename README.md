# cn.img_composition
> ##### 合成压缩图像 返回Base64数据，主要用于web前端向服务器发送数据或其它
>
> ##### 不用再发给服务器处理了，爽不爽...



####  * 不同环境下的使用

```js
<script> 
    import cn from 'cn.compose'
    // 原谅我用了两张美女图 ...
    // 本地直接打开访问会有跨域问题
    // 记得自己启个服务访问
    cn.compose([
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
<script> 
    var cn = require('cn.compose')
    // 原谅我用了两张美女图 ...
    // 本地直接打开访问会有跨域问题
    // 记得自己启个服务访问
    cn.compose([
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
<script type="text/javascript" src="index.js"></script>
<script> 
    // 原谅我用了两张美女图 ...
    // 本地直接打开访问会有跨域问题
    // 记得自己启个服务访问
    ___cn___compose([
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

