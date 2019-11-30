export function compose(imgs, callback) {
	if(typeof document === 'undefined') {
        console.log('[cn.img_composition] 当前环境不支持: 找不到document');
        return;
    }
    imgs.forEach(element => {
        if(!element.width || !element.height) {
            console.log('[cn.img_composition] 请为图片设置宽和高')
            return;
        }
        if(element.x < 0 || element.y < 0) {
            console.log('[cn.img_composition] x和y不能小于0')
            return;
        }
    });

    let maxSize = 2048;
    let canvas = document.createElement('canvas');
    canvas.width = maxSize; 
    canvas.height = maxSize;
    let ctx = canvas.getContext("2d");
    let minx = 0; let miny = 0;
    let maxx = 0; let maxy = 0;
    renderImages(imgs, output)

    function output() {
        let outCanvas = document.createElement('canvas');
        outCanvas.width = maxx - minx;
        outCanvas.height = maxy - miny;
        let temp = ctx.getImageData(minx, miny, outCanvas.width, outCanvas.height);
        let outCtx = outCanvas.getContext('2d');
        outCtx.putImageData(temp,0,0);
        callback(outCanvas.toDataURL("image/jpeg", 1))
    }

    function renderImages(imgs, next) {
        if(imgs.length) {
            let element = imgs.shift();
            let img = new Image(element.width, element.height);
            img.onload = function() {
                if(element.x < minx) minx = element.x;
                if(element.y < miny) miny = element.y;
                if(element.x + element.width > maxx) maxx = element.x + element.width;
                if(element.y + element.height > maxy) maxy = element.y + element.height;
                ctx.drawImage(img, element.x, element.y, element.width, element.height)
                return renderImages(imgs, next);
            }
            img.src = element.src;
        } else {
            next();
        }
    }
}