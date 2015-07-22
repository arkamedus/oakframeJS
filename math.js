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
Vec3.prototype.rotZ = function (a) {
    a *= (Math.PI / 180);
    //var b = new Vec3().set((this.x * Math.cos(a) - this.y * Math.sin(a)), (this.x * Math.sin(a) + this.y * Math.cos(a)), this.z);
    var xx =(this.x * Math.cos(a) - this.y * Math.sin(a)),yy = (this.x * Math.sin(a) + this.y * Math.cos(a));
    this.x = xx;
    this.y = yy;
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
    var d =this.dist(vec);
    this.sub(vec).divI(d);
    return this;
   // return a;
};
/** @type {function(Vec3):number} */
Vec3.prototype.dist = function (vec) {
    return Math.sqrt((this.x - vec.x)*(this.x - vec.x) + (this.y - vec.y)*(this.y - vec.y) + (this.z - vec.z)*(this.z - vec.z));
   // return Math.sqrt(Math.pow((this.x - vec.x), 2) + Math.pow((this.y - vec.y), 2) + Math.pow((this.z - vec.z), 2));
};
/** @type {function():number} */
Vec3.prototype.mag = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
};
/** @type {function():Vec3} */
Vec3.prototype.normalize = function () {
    var mag = this.mag();
    this.x /= mag;
    this.y /= mag;
    this.z /= mag;
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
    this.x1 = x1 || 0;
    this.y1 = x1 || 0;
    this.x2 = x2 || 0;
    this.y2 = x2 || 0;
    this.x3 = x3 || 0;
    this.y3 = x3 || 0;
}




//3D Triangle Functions
/**
 * @constructor
 */
function Tri3() {
    this.pos1 = new Vec3();
    this.pos2 = new Vec3();
    this.pos3 = new Vec3();
}
/**
 * @type {function():Vec3} 
 */
Tri3.prototype.center = function () {
    return new Vec3().set((this.pos1.x + this.pos2.x + this.pos3.x) / 3, (this.pos1.y + this.pos2.y + this.pos3.y) / 3, (this.pos1.z + this.pos2.z + this.pos3.z) / 3);
};

function triangleGrow(p1,p2,p3,amt){
    var center =new Vec2();
    center.x= (p1.x +p2.x +p3.x)/3;
    center.y= (p1.y +p2.y +p3.y)/3;
    
    var nv = new Vec2();
    
    p1.copy(nv.copy(p1).sub(center).mulI((nv.mag()+amt)/(nv.mag())).add(center));
    p2.copy(nv.copy(p2).sub(center).mulI((nv.mag()+amt)/(nv.mag())).add(center));
    p3.copy(nv.copy(p3).sub(center).mulI((nv.mag()+amt)/(nv.mag())).add(center));
}


function rayTriangle(origin, direction, tri) { // rayTriangle(from:Vec3, direction:Vec3 triangle:Face3)
    var a = (tri.pos2.y - tri.pos1.y) * (tri.pos3.z - tri.pos1.z) - (tri.pos3.y - tri.pos1.y) * (tri.pos2.z - tri.pos1.z),
        i = (tri.pos2.z - tri.pos1.z) * (tri.pos3.x - tri.pos1.x) - (tri.pos3.z - tri.pos1.z) * (tri.pos2.x - tri.pos1.x),
        t = (tri.pos2.x - tri.pos1.x) * (tri.pos3.y - tri.pos1.y) - (tri.pos3.x - tri.pos1.x) * (tri.pos2.y - tri.pos1.y),
        e = Math.sign(a * (tri.pos1.x - origin.x) + i * (tri.pos1.y - origin.y) + t * (tri.pos1.z - origin.z)),
        u = direction.x * a + direction.y * i + direction.z * t;
    if (e != Math.sign(u) || 0 == e) return !1;
    var v = (a * tri.pos1.x + i * tri.pos1.y + t * tri.pos1.z - (a * origin.x + i * origin.y + t * origin.z)) / u,
        f = direction.x * v + origin.x,
        g = direction.y * v + origin.y,
        s = direction.z * v + origin.z,
        c = (tri.pos1.y - g) * (tri.pos2.z - s) - (tri.pos2.y - g) * (tri.pos1.z - s),
        h = (tri.pos1.z - s) * (tri.pos2.x - f) - (tri.pos2.z - s) * (tri.pos1.x - f),
        M = (tri.pos1.x - f) * (tri.pos2.y - g) - (tri.pos2.x - f) * (tri.pos1.y - g);
    if (0 > c * a + h * i + M * t) return !1;
    c = (tri.pos2.y - g) * (tri.pos3.z - s) - (tri.pos3.y - g) * (tri.pos2.z - s);
    h = (tri.pos2.z - s) * (tri.pos3.x - f) - (tri.pos3.z - s) * (tri.pos2.x - f);
    M = (tri.pos2.x - f) * (tri.pos3.y - g) - (tri.pos3.x - f) * (tri.pos2.y - g);
    if (0 > c * a + h * i + M * t) return !1;
    c = (tri.pos3.y - g) * (tri.pos1.z - s) - (tri.pos1.y - g) * (tri.pos3.z - s);
    h = (tri.pos3.z - s) * (tri.pos1.x - f) - (tri.pos1.z - s) * (tri.pos3.x - f);
    M = (tri.pos3.x - f) * (tri.pos1.y - g) - (tri.pos1.x - f) * (tri.pos3.y - g);
    return 0 > c * a + h * i + M * t ? !1 : new Vec3().set(f, g, s); //[f, g, s, vecDist(y, [f, g, s])];
}

var bias = function(v, b){
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

    this.v.set(this.u.y * this.d.z - this.d.y * this.u.z, this.u.z * this.d.x - this.d.z * this.u.x, this.u.x * this.d.y - this.d.x * this.u.y);

    this.v.mulI(camera.aspect);

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
    }

    //return this.s;
};
