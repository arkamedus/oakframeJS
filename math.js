// 2D Vector Calculations

/**
 * @constructor
 */
function Vec2() {
    this.x = 0|0;
    this.y = 0|0;
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
/** @type {function(Vec2):Vec2} */
Vec2.prototype.div = function (vec2) {
    this.x /= vec2.x;
    this.y /= vec2.y;
    return this;
};
/** @type {function():Vec2} */
Vec2.prototype.clone = function () {
    return (new Vec2().set(this.x, this.y));
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
    var b= new Vec3().set((this.x * Math.cos(a) - this.y * Math.sin(a)), (this.x * Math.sin(a) + this.y * Math.cos(a)), this.z);
    return b;
};
/** @type {function(Vec3):number} */
Vec3.prototype.dot = function (a) {
    return (this.x *a.x +this.y*a.y +this.z *a.z);
};
/** @type {function(Vec3):Vec3} */
Vec3.prototype.copy = function (a) {
    this.x =a.x;
    this.y =a.y;
    this.z =a.z;
    return this;
};
/** @type {function(number):Vec3} */
Vec3.prototype.pointTo = function (vec) {
    var a = this.clone().sub(vec).divI(this.dist(vec));
    return a;
};
/** @type {function(number):Vec3} */
Vec3.prototype.dist = function (vec) {
    return Math.sqrt(Math.pow((this.x - vec.x), 2) + Math.pow((this.y - vec.y), 2) + Math.pow((this.z - vec.z), 2));
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
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} x3
 * @param {number} y3
 * @param {number} z3
 */
function Tri3(x1, y1, z1, x2, z2, y2, x3, y3, z3) {
    this.x1 = x1 || 0;
    this.y1 = y1 || 0;
    this.z1 = z1 || 0;
    this.x2 = x2 || 0;
    this.y2 = y2 || 0;
    this.z2 = z2 || 0;
    this.x3 = x3 || 0;
    this.y3 = y3 || 0;
    this.z3 = z3 || 0;
}
/**
 * @type {function():Vec3} 
 */
Tri3.prototype.center = function () {
    return new Vec3().set((this.x1 + this.x2 + this.x3) / 3, (this.y1 + this.y2 + this.y3) / 3, (this.z1 + this.z2 + this.z3) / 3);
};




/*
function Projection() {
    this.dX = 0;
    this.dY = 0;
    this.dZ = 0;
    this.mm = 0;
    this.vX = 0;
    this.vY = 0;
    this.vZ = 0;
    this.uX = 0;
    this.uY = 0;
    this.uZ = 0;
    this.tFOV = 1;
    this.tFovPower = 1;
    this.tFovPowerAspect = 0;
    this.isOrtho = false;


    this.set = function (camera) {
        this.dX = camera.to.x - camera.from.x;
        this.dY = camera.to.y - camera.from.y;
        this.dZ = camera.to.z - camera.from.z;
        this.mm = Math.sqrt(this.dX * this.dX + this.dY * this.dY + this.dZ * this.dZ);
        this.dX = this.dX / this.mm;
        this.dY = this.dY / this.mm;
        this.dZ = this.dZ / this.mm;
        this.uX = camera.up.x;
        this.uY = camera.up.y;
        this.uZ = camera.up.z;
        this.mm = this.uX * this.dX + this.uY * this.dY + this.uZ * this.dZ;
        this.uX = this.uX - (this.mm * this.dX);
        this.uY = this.uY - (this.mm * this.dY);
        this.uZ = this.uZ - (this.mm * this.dZ);
        this.mm = Math.sqrt(this.uX * this.uX + this.uY * this.uY + this.uZ * this.uZ);
        this.uX = this.uX / this.mm;
        this.uY = this.uY / this.mm;
        this.uZ = this.uZ / this.mm;
        this.tFOV = Math.tan(camera.fov * Math.PI / 360);
        this.tFovPower = Math.pow(this.tFOV, 2);
        this.tFovPowerAspect = Math.pow((camera.aspect) * this.tFOV, 2)
        this.uX = this.uX * this.tFOV;
        this.uY = this.uY * this.tFOV;
        this.uZ = this.uZ * this.tFOV;
        this.vX = this.uY * this.dZ - this.dY * this.uZ;
        this.vY = this.uZ * this.dX - this.dZ * this.uX;
        this.vZ = this.uX * this.dY - this.dX * this.uY;
        this.vX = this.vX * camera.aspect;
        this.vY = this.vY * camera.aspect;
        this.vZ = this.vZ * camera.aspect;
    };

    this.toWorld = function (surface, m, from) {
        if (this.isOrtho) {
            return [m[0] + (from[0]) + (0) - (surface._width / 2), m[1] - (from[1]) + (0) - (surface._height / 2), 0];
        } else {
            var screenx, screeny, mX, mY, mZ;
            screenx = 2 * m[0] / surface._width - 1;
            screeny = 1 - 2 * m[1] / surface._height;
            mX = this.dX + this.uX * screeny + this.vX * screenx;
            mY = this.dY + this.uY * screeny + this.vY * screenx;
            mZ = this.dZ + this.uZ * screeny + this.vZ * screenx;
            if (mZ != 0) {
                return [from[0] - from[2] * mX / mZ, from[1] - from[2] * mY / mZ, 0];
            } else {
                return [from[0] - from[2] * mX, from[1] - from[2] * mY, 0];
            }
        }
    };

    this.toScreen = function (surface, a, b) { // toScreen(surface, position, from)


            var pX, pY, pZ, x_2d, y_2d;
            pX = a.x - b.x;
            pY = a.y - b.y;
            pZ = a.z - b.z;
            this.mm = pX * this.dX + pY * this.dY + pZ * this.dZ;
            if (this.mm > 0) {
                pX /= this.mm;
                pY /= this.mm;
                pZ /= this.mm;
                this.mm = (pX * this.vX + pY * this.vY + pZ * this.vZ) / this.tFovPowerAspect;
                x_2d = (this.mm + 1) / 2 * surface._width;
                this.mm = (pX * this.uX + pY * this.uY + pZ * this.uZ) / this.tFovPower;
                y_2d = (1 - this.mm) / 2 * surface._height;

                //if ((x_2d > 256 && x_2d < surface.width+256)&&(y_2d > 0)){
                return new Vec2().set(x_2d,y_2d);
                // }else{
                //    return [0,-1280, false];
                // }
            }
         return new Vec2();
        

    };
};


*/




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
Projection.prototype.toWorld = function (surface, m, from,target) {
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
Projection.prototype.toScreen = function (surface, position, from,target) {
    this.p.set(position.x - from.x, position.y - from.y, position.z - from.z);
    this.mm = this.p.dot(this.d);//this.p.x * this.d.x + this.p.y * this.d.y + this.p.z * this.d.z;
    if (this.mm > 0) {
        this.p.divI(this.mm);
        this.mm = this.p.dot(this.v)/ this.tfovpoweraspect;//(this.p.x * this.v.x + this.p.y * this.v.y + this.p.z * this.v.z) / this.tfovpoweraspect;
        target.x = (this.mm + 1) / 2 * surface._width;
        this.mm = this.p.dot(this.u) / this.tfovpower;//(this.p.x * this.u.x + this.p.y * this.u.y + this.p.z * this.u.z) / this.tfovpower;
        target.y = (1 - this.mm) / 2 * surface._height;
    }

    //return this.s;
};

/*
function ProjectionOld() {

   
    this.toScreen = function (surface, a, b) { // toScreen(surface, position, from)


            this.mm = pX * this.dX + pY * this.dY + pZ * this.dZ;
            if (this.mm > 0) {
                pX /= this.mm;
                pY /= this.mm;
                pZ /= this.mm;
                this.mm = (pX * this.vX + pY * this.vY + pZ * this.vZ) / this.tFovPowerAspect;
                x_2d = (this.mm + 1) / 2 * surface._width;
                this.mm = (pX * this.uX + pY * this.uY + pZ * this.uZ) / this.tFovPower;
                y_2d = (1 - this.mm) / 2 * surface._height;

                //if ((x_2d > 256 && x_2d < surface.width+256)&&(y_2d > 0)){
                return [x_2d, y_2d, true];
                // }else{
                //    return [0,-1280, false];
                // }
            } else {
                // x_2d = 0;
                //y_2d = 0;
                return [0, 0, false];
            }
        }

    };
};
*/





//
