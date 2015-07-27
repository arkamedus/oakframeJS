/**
 * @constructor
 */
function Face3() {

    this.pos1 = new Vec3();
    this.uv1 = new Vec2();

    this.pos2 = new Vec3();
    this.uv2 = new Vec2();

    this.pos3 = new Vec3();
    this.uv3 = new Vec2();

    this.color = new Vec3();

    this.center = new Vec3();
    this.normal = new Vec3();
    this._cullvec = new Vec3();
    this._dotvec = new Vec3();
    this._depth = 9999;
}

Face3.prototype.set = function (x1, y1, z1, u1, v1, x2, y2, z2, u2, v2, x3, y3, z3, u3, v3, r, g, b) {
    this.pos1.set(x1, y1, z1);
    this.uv1.set(u1, v1);

    this.pos2.set(x2, y2, z2);
    this.uv2.set(u2, v2);

    this.pos3.set(x3, y3, z3);
    this.uv3.set(u3, v3);

    this.center.copy(this.pos1).add(this.pos2).add(this.pos3).divI(3);
    this.getnormal();

    this.color.set(r, g, b);
    return this;
}


/**
 * @type {function():Vec3} 
 */
Face3.prototype.getcenter = function () {
    return new Vec3().set((this.pos1.x + this.pos2.x + this.pos3.x) / 3, (this.pos1.y + this.pos2.y + this.pos3.y) / 3, (this.pos1.z + this.pos2.z + this.pos3.z) / 3);
};

/**
 * @type {function():Vec3} 
 */
Face3.prototype.getnormal = function () {

    var ax, ay, az, bx, by, bz, rx, ry, rz, m;

    //point0 -> point1
    ax = this.pos2.x - this.pos1.x;
    ay = this.pos2.y - this.pos1.y;
    az = this.pos2.z - this.pos1.z;

    //point0 -> point2
    bx = this.pos3.x - this.pos1.x;
    by = this.pos3.y - this.pos1.y;
    bz = this.pos3.z - this.pos1.z;

    //cross product
    rx = ay * bz - by * az;
    ry = az * bx - bz * ax,
        rz = ax * by - bx * ay;

    //magnitude
    m = Math.sqrt(rx * rx + ry * ry + rz * rz);

    //normalize
    return this.normal.set(rx / m, ry / m, rz / m);
};

/**
 * @type {function():Face3} 
 */
Face3.prototype.clone = function () {
    return new Face3().set(this.pos1.x, this.pos1.y, this.pos1.z, this.uv1.x, this.uv1.y,
        this.pos2.x, this.pos2.y, this.pos2.z, this.uv2.x, this.uv2.y,
        this.pos3.x, this.pos3.y, this.pos3.z, this.uv3.x, this.uv3.y,
        this.color.x, this.color.y, this.color.z);
};
console.warn("function Face3().copy() is broken!");
/**
 * @type {function(Face3):Face3} 
 */
Face3.prototype.copy = function (face3) {
    this.pos1.copy(face3.pos1);
    this.pos2.copy(face3.pos2);
    this.pos3.copy(face3.pos3);
    this.color.copy(face3.color);
    return this;
};
/**
 * @type {function(Vec3):Face3} 
 */
Face3.prototype.translate = function (vec3) {
    this.pos1.add(vec3);
    this.pos2.add(vec3);
    this.pos3.add(vec3);
    return this;
};
/**
 * @type {function(number):Face3} 
 */
Face3.prototype.rotX = function (rot) {
    this.pos1.rotX(rot);
    this.pos2.rotX(rot);
    this.pos3.rotX(rot);
    return this;
};
/**
 * @type {function(number):Face3} 
 */
Face3.prototype.rotY = function (rot) {
    this.pos1.rotY(rot);
    this.pos2.rotY(rot);
    this.pos3.rotY(rot);
    return this;
};
/**
 * @type {function(number):Face3} 
 */
Face3.prototype.rotZ = function (rot) {
    this.pos1.rotZ(rot);
    this.pos2.rotZ(rot);
    this.pos3.rotZ(rot);
    return this;
};
/**
 * @type {function(number):Face3} 
 */
Face3.prototype.scale = function (vec) {
    this.pos1.mul(vec);
    this.pos2.mul(vec);
    this.pos3.mul(vec);
    return this;
};



/**
 * @constructor
 */
function Mesh() {
    this._children = [];
    this._bounds = [0, 0, 0, 0, 0, 0];
    this._tmpv = new Vec3();
    this._tmpr = new Vec3();
     this.sortmeta = {
        co: 0,
        sw: 0,
        index: 0,
        loop: 0,
        val: {},
        times: 0
    }
}
Mesh.prototype.clear = function () {
    this._children = [];
    this._bounds = [0, 0, 0, 0, 0, 0];
    return this;
};
Mesh.prototype.join = function (mesh, pos) {
    //this._children = this._children.concat(mesh._children);
    var target = this;
    mesh._children.forEach(function (face) {
        target._children.push(face.clone().translate(pos));
    });
    // this._bounds = [Math.min(mesh._bounds[0],this._bounds[0]),0,0,0,0,0];
    //console.warn('Mesh.prototype.join() is incomplete!');
    return this;
};
console.warn("function Mesh().draw() should have tri._cullvec moved into mesh, not children");
Mesh.prototype.draw = function (camera, surface, parent) {
    //var vecFrom = new Vec3();

    if (surface._draw_outline&&!parent._static) {
        surface._context.beginPath();
        surface._context.fillStyle = "rgba(0,0,0,255)";
        this._children.forEach(function (tri) {
            //vecFrom.set(camera.from).pointTo();
            //tri._cullvec.clear().add(tri.normal).dot(tri.center.clone().add().pointTo(camera.from))
            // if (dotproduct(tri.normal(), vecFromVecs(camera.from, this._children[index].getCenter())) > 0) {
            if (tri._cullvec.copy(tri._dotvec.copy(tri.normal).mul(parent.scale).normalize().rotY(parent.rotation.y).rotX(parent.rotation.x).rotZ(parent.rotation.z)).dot(tri._dotvec.copy(tri.center).mul(parent.scale).rotY(parent.rotation.y).rotX(parent.rotation.x).rotZ(parent.rotation.z).add(parent.position).pointTo(camera.from)) > 0) {
                surface.drawFaceOutline(camera, tri, parent);
            } else {
                surface._tmp.culltris++;
            }

        });
        surface._context.fill();
    }


    this._children.forEach(function (tri) {
        //vecFrom.set(camera.from).pointTo();
        //tri._cullvec.clear().add(tri.normal).dot(tri.center.clone().add().pointTo(camera.from))
        // if (dotproduct(tri.normal(), vecFromVecs(camera.from, this._children[index].getCenter())) > 0) {
        if (tri._cullvec.copy(tri._dotvec.copy(tri.normal).mul(parent.scale).normalize().rotY(parent.rotation.y).rotX(parent.rotation.x).rotZ(parent.rotation.z)).dot(tri._dotvec.copy(tri.center).mul(parent.scale).rotZ(parent.rotation.z).add(parent.position).pointTo(camera.from).invert()) > 0) {
            surface.drawFace(camera, tri, parent);
        } else {
            surface._tmp.culltris++;
        }

    });

    return this;
};

Mesh.prototype.sort = function (from, parent) {
    this.sortmeta.co = 0;
    this.sortmeta.sw = 0; // ti = performance.now();

    for (this.sortmeta.index = 0; this.sortmeta.index < this._children.length; this.sortmeta.index++) {
        this._children[this.sortmeta.index]._depth = this._tmpv.copy(from).sub(parent.position).dist(this._tmpr.copy(this._children[this.sortmeta.index].center).mul(parent.scale).rotY(parent.rotation.y).rotX(parent.rotation.x).rotZ(parent.rotation.z));
        //dc++;
    }
    this.sortmeta.loop = true;
    this.sortmeta.times = 0;


    // quickSort(this._children);


    // BAD BUBBLE SORT
    //ti = performance.now();
    do {
        this.sortmeta.loop = false;

        for (var i = 0; i < this._children.length - (1 + this.sortmeta.times); i++) {
            //co += 1;

            if (this._children[i]._depth < this._children[i + 1]._depth) {
                //sw += 1;
                this.sortmeta.val = this._children[i];
                this._children[i] = this._children[i + 1];
                this._children[i + 1] = this.sortmeta.val;
                this.sortmeta.loop = true;
            }

        }
        this.sortmeta.times++;
    } while (this.sortmeta.loop);









    return this;
}