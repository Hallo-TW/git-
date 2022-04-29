let small = document.querySelector('.small');
let img1 = document.querySelector('.small>img');
let layer = document.querySelector('.layer');
let detail = document.querySelector('.detail');
let img2 = document.querySelector('.detail>img');





small.onmouseover = function() {
    layer.style.display = 'block';
    detail.style.display = 'block';
}

small.onmouseout = function() {
    layer.style.display = 'none';
    detail.style.display = 'none';
}

small.onmousemove = function(pos) {
    console.dir(pos.offsetX, pos.offsetY);

    let img1Width = img1.offsetWidth;
    let img1Height = img1.offsetHeight;
    let layerWidth = layer.offsetWidth;
    let layerHeight = layer.offsetHeight;
    let detailWidth = detail.offsetWidth;
    let detailHeight = detail.offsetHeight;
    let img2Width = img2.offsetWidth;
    let img2Height = img2.offsetHeight;

    layer.style.left = pos.clientX - 50 - (layerWidth / 2) + 'px';
    layer.style.top = pos.clientY - 50 - (layerHeight / 2) + 'px';
    if (parseInt(layer.style.left) <= 0) {
        layer.style.left = 0 + 'px';
    }
    if (parseInt(layer.style.top) <= 0) {
        layer.style.top = 0 + 'px';
    }
    if (parseInt(layer.style.left) >= img1Width - layerWidth) {
        layer.style.left = img1Width - layerWidth + 'px';
    }
    if (parseInt(layer.style.top) >= img1Height - layerHeight) {
        layer.style.top = img1Height - layerHeight + 'px';
    }

    img2.style.left = -(pos.clientX - 50 - layerWidth / 2) * 3 + 'px';
    img2.style.top = -(pos.clientY - 50 - layerHeight / 2) * 3 + 'px';

    if (img2.style.left > 0 + 'px') {
        img2.style.left = 0 + 'px';
    }
    if (img2.style.top > 0 + 'px') {
        img2.style.top = 0 + 'px';
    }

    if (parseInt(img2.style.left) < -(img2Width - detailWidth)) {
        img2.style.left = -(img2Width - detailWidth) + 'px';
    }
    if (parseInt(img2.style.top) < -(img2Height - detailHeight)) {
        img2.style.top = -(img2Height - detailHeight) + 'px';
    }
}