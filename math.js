// 2D Vector Calculations

/**
 * @constructor
 */
function Vec2() {
    this.x = 0 | 0;
    this.y = 0 | 0;
};
/** @type {function():Vec2} */
Vec2.prototype.clear = function () {
    this.x = 0;
    this.y = 0;
    return this;
};
/** @type {function(number,number):Vec2} */
Vec2.prototype.set = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
};
/** @type {function(Vec2):Vec2} */
Vec2.prototype.add = function (vec2) {
    this.x += vec2.x;
    this.y += vec2.y;
    return this;
};
/** @type {function(Vec2):Vec2} */
Vec2.prototype.sub = function (vec2) {
    this.x -= vec2.x;
    this.y -= vec2.y;
    return this;
};
/** @type {function(Vec2):Vec2} */
Vec2.prototype.mul = function (vec2) {
    this.x *= vec2.x;
    this.y *= vec2.y;
    return this;
};
/** @type {function(number):Vec2} */
Vec2.prototype.mulI = function (amt) {
    this.x *= amt;
    this.y *= amt;
    return this;
};
/** @type {function(number):Vec2} */
Vec2.prototype.divI = function (amt) {
    this.x /= amt;
    this.y /= amt;
    return this;
};
/** @type {function(Vec2):Vec2} */
Vec2.prototype.div = function (vec2) {
    this.x /= vec2.x;
    this.y /= vec2.y;
    return this;
};
/** @type {function():number} */
Vec2.prototype.toDeg = function () {
    var normalized = this.clone().normalize();
    return ((Math.atan2(normalized.x, normalized.y + 0.0000001) / Math.PI) * 180) + 180;
};
/** @type {function():Vec2} */
Vec2.prototype.normalize = function () {
    var mag = this.mag();
    this.x /= mag;
    this.y /= mag;
    return this;
};
/** @type {function():number} */
Vec2.prototype.mag = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};
/** @type {function(Vec2):number} */
Vec2.prototype.dot = function (a) {
    return (this.x * a.x + this.y * a.y);
};
/** @type {function():Vec2} */
Vec2.prototype.clone = function () {
    return (new Vec2().set(this.x, this.y));
};
/** @type {function(Vec2):Vec2} */
Vec2.prototype.copy = function (a) {
    this.x = a.x;
    this.y = a.y;
    return this;
};
/** @type {function(Vec2):number} */
Vec2.prototype.dist = function (vec) {
    return Math.sqrt(Math.pow((this.x - vec.x), 2) + Math.pow((this.y - vec.y), 2));
};



// 3D Vector Calculations

//TEMP VECTOR3 CACHE
var Vec3_TempI = 0,
    Vec3_TempV = new Vec3();
/**
 * @constructor
 */
function Vec3() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    return this;
};
/** @type {function():Vec3} */
Vec3.prototype.clear = function () {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    return this;
};
/** @type {function(number,number,number):Vec3} */
Vec3.prototype.set = function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
};
/** @type {function(Vec3):Vec3} */
Vec3.prototype.add = function (vec3) {
    this.x += vec3.x;
    this.y += vec3.y;
    this.z += vec3.z;
    return this;
};
/** @type {function(Vec3):Vec3} */
Vec3.prototype.sub = function (vec3) {
    this.x -= vec3.x;
    this.y -= vec3.y;
    this.z -= vec3.z;
    return this;
};
/** @type {function(Vec3):Vec3} */
Vec3.prototype.mul = function (vec3) {
    this.x *= vec3.x;
    this.y *= vec3.y;
    this.z *= vec3.z;
    return this;
};
/** @type {function(Vec3):Vec3} */
Vec3.prototype.div = function (vec3) {
    this.x /= vec3.x;
    this.y /= vec3.y;
    this.z /= vec3.z;
    return this;
};
/** @type {function(number):Vec3} */
Vec3.prototype.mulI = function (a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    return this;
};
/** @type {function(number):Vec3} */
Vec3.prototype.divI = function (a) {
    this.x /= a;
    this.y /= a;
    this.z /= a;
    return this;
};


/** @type {function(number):Vec3} */
Vec3.prototype.rotX = function (deg) {
    deg *= (Math.PI / 180);
    //var b = new Vec3().set((this.x * Math.cos(a) - this.y * Math.sin(a)), (this.x * Math.sin(a) + this.y * Math.cos(a)), this.z);
    Vec3_TempV.y = (this.y * Math.cos(deg) - this.z * Math.sin(deg));
    Vec3_TempV.z = (this.y * Math.sin(deg) + this.z * Math.cos(deg));
    this.y = Vec3_TempV.y;
    this.z = Vec3_TempV.z;
    return this;
};

/** @type {function(number):Vec3} */
Vec3.prototype.rotY = function (deg) {
    deg *= (Math.PI / 180);
    //var b = new Vec3().set((this.x * Math.cos(a) - this.y * Math.sin(a)), (this.x * Math.sin(a) + this.y * Math.cos(a)), this.z);
    var xx = (this.x * Math.cos(deg) - this.z * Math.sin(deg)),
        zz = (this.x * Math.sin(deg) + this.z * Math.cos(deg));
    this.x = xx;
    this.z = zz;
    return this;
};

/** @type {function(number):Vec3} */
Vec3.prototype.rotZ = function (deg) {
    deg *= (Math.PI / 180);
    //var b = new Vec3().set((this.x * Math.cos(a) - this.y * Math.sin(a)), (this.x * Math.sin(a) + this.y * Math.cos(a)), this.z);
    Vec3_TempV.x = (this.x * Math.cos(deg) - this.y * Math.sin(deg));
    Vec3_TempV.y = (this.x * Math.sin(deg) + this.y * Math.cos(deg));
    this.x = Vec3_TempV.x;
    this.y = Vec3_TempV.y;
    return this;
};




/** @type {function(Vec3):number} */
Vec3.prototype.dot = function (a) {
    return (this.x * a.x + this.y * a.y + this.z * a.z);
};
/** @type {function(Vec3):Vec3} */
Vec3.prototype.copy = function (a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    return this;
};
/** @type {function(Vec3):Vec3} */
Vec3.prototype.pointTo = function (vec) {
    //var a = this.clone();
    // a.sub(vec).divI(a.dist(vec));
    // var d = this.dist(vec);
    this.sub(vec).normalize();
    return this;
    // return a;
};
/** @type {function(Vec3):number} */
Vec3.prototype.dist = function (vec) {
    return Math.sqrt((this.x - vec.x) * (this.x - vec.x) + (this.y - vec.y) * (this.y - vec.y) + (this.z - vec.z) * (this.z - vec.z));
    // return Math.sqrt(Math.pow((this.x - vec.x), 2) + Math.pow((this.y - vec.y), 2) + Math.pow((this.z - vec.z), 2));
};
/** @type {function():number} */
Vec3.prototype.mag = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
};
/** @type {function():Vec3} */
Vec3.prototype.normalize = function () {
    Vec3_TempI = this.mag();
    this.x /= Vec3_TempI;
    this.y /= Vec3_TempI;
    this.z /= Vec3_TempI;
    return this;
};
/** @type {function():Vec3} */
Vec3.prototype.clone = function () {
    return (new Vec3().set(this.x, this.y, this.z));
};
/** @type {function():Vec3} */
Vec3.prototype.invert = function () {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this;
};


// 3D Vector Calculations
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


//2D Triangle Functions
/**
 * @constructor
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 */
function Tri2(x1, y1, x2, y2, x3, y3) {
    this.pos1 = new Vec2();
    this.pos2 = new Vec2();
    this.pos3 = new Vec2();
}
Tri2.prototype.isPointInside = function (point) {
    var s = this.pos1.y * this.pos3.x - this.pos1.x * this.pos3.y + (this.pos3.y - this.pos1.y) * point.x + (this.pos1.x - this.pos3.x) * point.y,
        t = this.pos1.x * this.pos2.y - this.pos1.y * this.pos2.x + (this.pos1.y - this.pos2.y) * point.x + (this.pos2.x - this.pos1.x) * point.y;

    if ((s < 0) != (t < 0)) {
        return false;
    }

    var a = -this.pos2.y * this.pos3.x + this.pos1.y * (this.pos3.x - this.pos2.x) + this.pos1.x * (this.pos2.y - this.pos3.y) + this.pos2.x * this.pos3.y;
    if (a < 0) {
        s = -s;
        t = -t;
        a = -a;
    }
    return s > 0 && t > 0 && (s + t) < a;

}




//3D Triangle Functions
/**
 * @constructor
 */
function Tri3() {
    this.pos1 = new Vec3();
    this.pos2 = new Vec3();
    this.pos3 = new Vec3();
    this.color = new RGBA();
}
/**
 * @type {function():Vec3} 
 */
Tri3.prototype.center = function () {
    return new Vec3().set((this.pos1.x + this.pos2.x + this.pos3.x) / 3, (this.pos1.y + this.pos2.y + this.pos3.y) / 3, (this.pos1.z + this.pos2.z + this.pos3.z) / 3);
};

function triangleGrow(p1, p2, p3, amt) {
    var center = new Vec2();
    center.x = (p1.x + p2.x + p3.x) / 3;
    center.y = (p1.y + p2.y + p3.y) / 3;

    var nv = new Vec2();

    p1.copy(nv.copy(p1).sub(center).mulI((nv.mag() + amt) / (nv.mag())).add(center));
    p2.copy(nv.copy(p2).sub(center).mulI((nv.mag() + amt) / (nv.mag())).add(center));
    p3.copy(nv.copy(p3).sub(center).mulI((nv.mag() + amt) / (nv.mag())).add(center));
}

//TEMP TRIANGLE CACHE

var Tri3_Temp = {
    a:0,i:0,t:0,e:0,u:0,v:0,f:0,g:0,s:0,c:0,h:0,M:0
}

function rayTriangle(origin, direction, tri) { // rayTriangle(from:Vec3, direction:Vec3 triangle:Face3)
    Tri3_Temp.a = (tri.pos2.y - tri.pos1.y) * (tri.pos3.z - tri.pos1.z) - (tri.pos3.y - tri.pos1.y) * (tri.pos2.z - tri.pos1.z);
        Tri3_Temp.i = (tri.pos2.z - tri.pos1.z) * (tri.pos3.x - tri.pos1.x) - (tri.pos3.z - tri.pos1.z) * (tri.pos2.x - tri.pos1.x);
        Tri3_Temp.t = (tri.pos2.x - tri.pos1.x) * (tri.pos3.y - tri.pos1.y) - (tri.pos3.x - tri.pos1.x) * (tri.pos2.y - tri.pos1.y);
        Tri3_Temp.e = Math.sign(Tri3_Temp.a * (tri.pos1.x - origin.x) + Tri3_Temp.i * (tri.pos1.y - origin.y) + Tri3_Temp.t * (tri.pos1.z - origin.z));
        Tri3_Temp.u = direction.x * Tri3_Temp.a + direction.y * Tri3_Temp.i + direction.z * Tri3_Temp.t;
    if (Tri3_Temp.e != Math.sign(Tri3_Temp.u) || 0 == Tri3_Temp.e) return !1;
    Tri3_Temp.v = (Tri3_Temp.a * tri.pos1.x + Tri3_Temp.i * tri.pos1.y + Tri3_Temp.t * tri.pos1.z - (Tri3_Temp.a * origin.x + Tri3_Temp.i * origin.y + Tri3_Temp.t * origin.z)) / Tri3_Temp.u;
        Tri3_Temp.f = direction.x * Tri3_Temp.v + origin.x;
        Tri3_Temp.g = direction.y * Tri3_Temp.v + origin.y;
        Tri3_Temp.s = direction.z * Tri3_Temp.v + origin.z;
        Tri3_Temp.c = (tri.pos1.y - Tri3_Temp.g) * (tri.pos2.z - Tri3_Temp.s) - (tri.pos2.y - Tri3_Temp.g) * (tri.pos1.z - Tri3_Temp.s);
        Tri3_Temp.h = (tri.pos1.z - Tri3_Temp.s) * (tri.pos2.x - Tri3_Temp.f) - (tri.pos2.z - Tri3_Temp.s) * (tri.pos1.x - Tri3_Temp.f);
        Tri3_Temp.M = (tri.pos1.x - Tri3_Temp.f) * (tri.pos2.y - Tri3_Temp.g) - (tri.pos2.x - Tri3_Temp.f) * (tri.pos1.y - Tri3_Temp.g);
    if (0 > Tri3_Temp.c * Tri3_Temp.a + Tri3_Temp.h * Tri3_Temp.i + Tri3_Temp.M * Tri3_Temp.t) return !1;
    Tri3_Temp.c = (tri.pos2.y - Tri3_Temp.g) * (tri.pos3.z - Tri3_Temp.s) - (tri.pos3.y - Tri3_Temp.g) * (tri.pos2.z - Tri3_Temp.s);
    Tri3_Temp.h = (tri.pos2.z - Tri3_Temp.s) * (tri.pos3.x - Tri3_Temp.f) - (tri.pos3.z - Tri3_Temp.s) * (tri.pos2.x - Tri3_Temp.f);
    Tri3_Temp.M = (tri.pos2.x - Tri3_Temp.f) * (tri.pos3.y - Tri3_Temp.g) - (tri.pos3.x - Tri3_Temp.f) * (tri.pos2.y - Tri3_Temp.g);
    if (0 > Tri3_Temp.c * Tri3_Temp.a + Tri3_Temp.h * Tri3_Temp.i + Tri3_Temp.M * Tri3_Temp.t) return !1;
    Tri3_Temp.c = (tri.pos3.y - Tri3_Temp.g) * (tri.pos1.z - Tri3_Temp.s) - (tri.pos1.y - Tri3_Temp.g) * (tri.pos3.z - Tri3_Temp.s);
    Tri3_Temp.h = (tri.pos3.z - Tri3_Temp.s) * (tri.pos1.x - Tri3_Temp.f) - (tri.pos1.z - Tri3_Temp.s) * (tri.pos3.x - Tri3_Temp.f);
    Tri3_Temp.M = (tri.pos3.x - Tri3_Temp.f) * (tri.pos1.y - Tri3_Temp.g) - (tri.pos1.x - Tri3_Temp.f) * (tri.pos3.y - Tri3_Temp.g);
    return 0 > Tri3_Temp.c * Tri3_Temp.a + Tri3_Temp.h * Tri3_Temp.i + Tri3_Temp.M * Tri3_Temp.t ? !1 : new Vec3().set(Tri3_Temp.f, Tri3_Temp.g, Tri3_Temp.s); //[f, g, s, vecDist(y, [f, g, s])];
}

var bias = function (v, b) {
    return v / ((1 / b - 2) * (1 - v) + 1);
}


/**
 * @constructor
 */
function Projection() {
    this.d = new Vec3();
    this.u = new Vec3();
    this.v = new Vec3();

    this.mm = 0;

    this.p = new Vec3();
    this.s = new Vec2();

    this.tfov = 1;
    this.tfovpower = 1;
    this.tfovpoweraspect = 1;
    return this;
}
/** @type {function(Camera):Projection} */
Projection.prototype.set = function (camera) {
    this.d.copy(camera.to).sub(camera.from);
    //console.log(this.d);
    this.mm = Math.sqrt(this.d.x * this.d.x + this.d.y * this.d.y + this.d.z * this.d.z);

    this.d.divI(this.mm);
    this.u.copy(camera.up);
    this.mm = this.u.dot(this.d);

    this.u.x -= (this.mm * this.d.x);
    this.u.y -= (this.mm * this.d.y);
    this.u.z -= (this.mm * this.d.z);
    this.mm = Math.sqrt(this.u.x * this.u.x + this.u.y * this.u.y + this.u.z * this.u.z);

    this.u.divI(this.mm);

    this.tfov = Math.tan(camera.fov * Math.PI / 360);
    this.tfovpower = this.tfov * this.tfov;
    this.tfovpoweraspect = (camera.aspect * this.tfov) * (camera.aspect * this.tfov);

    this.u.mulI(this.tfov);

    this.v.set(this.u.y * this.d.z - this.d.y * this.u.z, this.u.z * this.d.x - this.d.z * this.u.x, this.u.x * this.d.y - this.d.x * this.u.y).mulI(camera.aspect);

    return this;
};

/** @type {function(Surface,Vec2,Vec3,Vec3)} */
Projection.prototype.toWorld = function (surface, m, from, target) {
    // if (this.isOrtho) {
    //     return [m[0] + (from[0]) + (0) - (surface._width / 2), m[1] - (from[1]) + (0) - (surface._height / 2), 0];
    // } else {
    //, mX, mY, mZ;
    this.s.x = 2 * m.x / surface._width - 1;
    this.s.y = 1 - 2 * m.y / surface._height;
    this.p.x = this.d.x + this.u.x * this.s.y + this.v.x * this.s.x;
    this.p.y = this.d.y + this.u.y * this.s.y + this.v.y * this.s.x;
    this.p.z = this.d.z + this.u.z * this.s.y + this.v.z * this.s.x;
    if (this.p.z != 0) {
        target.set(from.x - from.z * this.p.x / this.p.z, from.y - from.z * this.p.y / this.p.z, 0);
    } else {
        target.set(from.x - from.z * this.p.x, from.y - from.z * this.p.y, 0);
    }
    // }
};

/** @type {function(Surface,Vec3,Vec3,Vec2)} */
Projection.prototype.toScreen = function (surface, position, from, target) {
    this.p.set(position.x - from.x, position.y - from.y, position.z - from.z);
    this.mm = this.p.dot(this.d); //this.p.x * this.d.x + this.p.y * this.d.y + this.p.z * this.d.z;
    if (this.mm > 0) {
        this.p.divI(this.mm);
        this.mm = this.p.dot(this.v) / this.tfovpoweraspect; //(this.p.x * this.v.x + this.p.y * this.v.y + this.p.z * this.v.z) / this.tfovpoweraspect;
        target.x = (this.mm + 1) / 2 * surface._width;
        this.mm = this.p.dot(this.u) / this.tfovpower; //(this.p.x * this.u.x + this.p.y * this.u.y + this.p.z * this.u.z) / this.tfovpower;
        target.y = (1 - this.mm) / 2 * surface._height;
    } else {
        target.set(-99, -99);
    }

};
