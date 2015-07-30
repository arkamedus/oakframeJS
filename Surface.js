/** @license
 * 
 * OA Integrated Engine (Surface.js) — Javascript and HTML Interactive DOM & Canvas Framework
 * 
 * Author          :   Gordon Goodrum
 * License         :   Open Source with author attribution for non-commercial projects only.
 * Contact         :   stopgordy@gmail.com
 * 
 * Copyright 2015 — Gordon Goodrum, Oakstead Arts. All rights reserved.
 */

console.warn("Surface.js needs to be type annotated!");

/**
 * @constructor
 */
function Surface() {
    this._element = document.createElement('canvas');
    this._context = this._element.getContext('2d');
    this._width = 128;
    this._height = 128;
};
Surface.prototype.setFilter = function (a) {
    // this.filter = a;

    this._element.mozImageSmoothingEnabled = a;
    this._element.webkitImageSmoothingEnabled = a;
    this._element.msImageSmoothingEnabled = a;
    this._element.imageSmoothingEnabled = a;
    return this;
};
Surface.prototype.bind = function (canvas) {
    this._element = canvas;
    this._context = this._element.getContext('2d');
    return this;
};
Surface.prototype.free = function () {
    this._element = null;
    this._context = null;
    return this;
};
Surface.prototype.attach = function () {
    document.body.appendChild(this._element);
    //this._element.style.position = "fixed";
    return this;
}
Surface.prototype.resize = function (width, height) {
    this._element.width = width;
    this._element.height = height;
    this._width = width;
    this._height = height;
    return this;
}
Surface.prototype.clear = function () {
    this._context.clearRect(0, 0, this._width, this._height);
    return this;
}
Surface.prototype.fill = function (col) {
    this._context.beginPath();
    this._context.fillStyle = col;
    this._context.rect(0, 0, this._width, this._height);
    this._context.fill();
    return this;
}
