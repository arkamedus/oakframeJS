/** @license
 * 
 * OA Integrated Engine (Colors.js) — Javascript and HTML Interactive DOM & Canvas Framework
 * 
 * Author          :   Gordon Goodrum
 * License         :   Open Source with author attribution for non-commercial projects only.
 * Contact         :   stopgordy@gmail.com
 * 
 * Copyright 2015 — Gordon Goodrum, Oakstead Arts. All rights reserved.
 */
 
 
 
/**
 * @constructor
 */
function RGB() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
}
RGB.prototype.set = function (r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    return this;
}
RGB.prototype.copy = function (rgb) {
    this.r = rgba.r;
    this.g = rgba.g;
    this.b = rgba.b;
    return this;
}

/**
 * @constructor
 */
function RGBA() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
}
RGBA.prototype.set = function (r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    return this;
}
RGBA.prototype.copy = function (rgba) {
    this.r = rgba.r;
    this.g = rgba.g;
    this.b = rgba.b;
    this.a = rgba.a;
    return this;
}