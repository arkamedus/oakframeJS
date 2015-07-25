importScripts('math.js');

scan = new Vec2();
ray = new Ray();
draw_buffer = [];

function Ray() {
            this.origin = new Vec3();
            this.direction = new Vec3();
            this._dir = new Vec3();
            this._cast = new Vec3();
            this._cast_result = false;
            this._far = 24;
            this.color = new RGBA();
            return this;
        };

 function Camera() {
            this.from = new Vec3().set(0, 4, 6);
            this.to = new Vec3().set(0, 0, 0.86);
            this.fov = 40;
            this.up = new Vec3().set(0, 0, 1);
            this.samples = 1;
            this.aspect = 1;
            this.lightsource = new Vec3().set(8, -1, 16);
            return this;
        };

camera =new Camera();
projection = new Projection();

onmessage = function (e) {
        //console.log('worker recieved message',e);
    camera.from.copy(e.data.camera.from);
    
    camera.lightsource.copy(e.data.camera.lightsource);
    projection.set(camera);

        for (var x = 0; x < e.data.sizex; x++) {
            for (var y = 0; y < e.data.sizey; y++) {
                scan.set(x +e.data.startx,y +e.data.starty);
                
                
                
                 ray.origin.copy(camera.from);
                        projection.toWorld({_width:e.data.totalx,_height:e.data.totaly}, scan, camera.from, ray._dir);
                        ray.direction.copy(ray._dir.pointTo(ray.origin));
                        ray._cast.set(0, 0, -99999);
                        
                        
                        for (var i = 0; i < e.data.mesh.length; i++) {
                            ray._cast_result = rayTriangle(ray.origin, ray.direction, e.data.mesh[i]);
                            if (ray._cast_result) {
                                if (ray._cast_result.dist(camera.from) < ray._cast.dist(camera.from)) {
                                    ray._cast.copy(ray._cast_result);
                                    ray.color.copy(e.data.mesh[i].color);
                                }


                            }
                        }

                        if (ray._cast.dist(camera.from) < 999) {
                            ray.color.r = ((1 - ray._cast.dist(ray.origin) / ray._far) * (ray.color.r)) | 0;
                            ray.color.g = ((1 - ray._cast.dist(ray.origin) / ray._far) * (ray.color.g)) | 0;
                            ray.color.b = ((1 - ray._cast.dist(ray.origin) / ray._far) * (ray.color.b)) | 0;
                            ray.color.a = 255; //((x + (y * camera.samples)) % camera.samples) / camera.samples;


                            // LIGHT CALCULATION
                            ray.origin.copy(camera.lightsource);
                            ray.direction.copy(ray._dir.copy(ray._cast).pointTo(camera.lightsource));
                            //ray.origin.add(ray._dir.copy(ray.direction).normalize().divI(1));
                            //ray._cast.x  *= 1 +((0.5-Math.random())/10000000);
                            //ray._cast.y  *= 1 +((0.5-Math.random())/10000000);
                            //ray._cast.z  *= 1 +((0.5-Math.random())/10000000);
                            ray._dir.copy(ray._cast);
                           ray._cast.set(0, 0, -99999);
                            for (var i = 0; i < e.data.mesh.length; i++) {
                                ray._cast_result = rayTriangle(ray.origin, ray.direction, e.data.mesh[i]);
                                if (ray._cast_result) {
                                    if (camera.lightsource.dist(ray._cast_result) +0.0000001 < camera.lightsource.dist(ray._dir)) {
                                        ray._cast.copy(ray._cast_result);
                                        //ray.color.copy(mesh[i].color);
                                    }


                                }
                            }
                            if (ray._cast.dist(camera.lightsource) < 999) {
                                ray.color.r/=2;
                                ray.color.g/=2;
                                ray.color.b/=2;
                            }



                            draw_buffer[((x +(y*e.data.sizex))*4) +0] = ray.color.r;
                            draw_buffer[((x +(y*e.data.sizex))*4) +1] = ray.color.g;
                            draw_buffer[((x +(y*e.data.sizex))*4) +2] = ray.color.b;
                            draw_buffer[((x +(y*e.data.sizex))*4) +3] = ray.color.a;
                           
                        }
                
                
                /*
                draw_buffer[((x +(y*e.data.sizex))*4) +0] = (((x +e.data.startx)/e.data.totalx)*255)|0; //r
                draw_buffer[((x +(y*e.data.sizex))*4) +1] = (((y +e.data.starty)/e.data.totaly)*255)|0; //g
                draw_buffer[((x +(y*e.data.sizex))*4) +2] = (((x +e.data.startx)/e.data.totalx)*255)|0;//b
                draw_buffer[((x +(y*e.data.sizex))*4) +3] =  255;//a*/
            }
        }

//console.//
        postMessage({x:e.data.x,y:e.data.y,buffer:draw_buffer});
    }
    /*
    //this.ram = new Array
                for (var x = 0; x < surface._width * camera.samples; x++) {
                    for (var y = 0; y < surface._height * camera.samples; y++) {
                        scan.set((x / camera.samples), (y / camera.samples));
                        ray.origin.copy(camera.from);
                        projection.toWorld(surface, scan, camera.from, ray._dir);
                        ray.direction.copy(ray._dir.pointTo(ray.origin));
                        ray._cast.set(0, 0, -99999);
                        
                        
                        for (var i = 0; i < mesh.length; i++) {
                            ray._cast_result = rayTriangle(ray.origin, ray.direction, mesh[i]);
                            if (ray._cast_result) {
                                if (ray._cast_result.dist(camera.from) < ray._cast.dist(camera.from)) {
                                    ray._cast.copy(ray._cast_result);
                                    ray.color.copy(mesh[i].color);
                                }


                            }
                        }

                        if (ray._cast.dist(camera.from) < 999) {
                            ray.color.r = ((1 - ray._cast.dist(ray.origin) / ray._far) * (ray.color.r)) | 0;
                            ray.color.g = ((1 - ray._cast.dist(ray.origin) / ray._far) * (ray.color.g)) | 0;
                            ray.color.b = ((1 - ray._cast.dist(ray.origin) / ray._far) * (ray.color.b)) | 0;
                            ray.color.a = 255; //((x + (y * camera.samples)) % camera.samples) / camera.samples;


                            // LIGHT CALCULATION
                            ray.origin.copy(camera.lightsource);
                            ray.direction.copy(ray._dir.copy(ray._cast).pointTo(camera.lightsource));
                            //ray.origin.add(ray._dir.copy(ray.direction).normalize().divI(10));
                            //ray._cast.x  *= 1 +((0.5-Math.random())/10000000);
                            //ray._cast.y  *= 1 +((0.5-Math.random())/10000000);
                            //ray._cast.z  *= 1 +((0.5-Math.random())/10000000);
                            ray._dir.copy(ray._cast);
                           ray._cast.set(0, 0, -99999);
                            for (var i = 0; i < mesh.length; i++) {
                                ray._cast_result = rayTriangle(ray.origin, ray.direction, mesh[i]);
                                if (ray._cast_result) {
                                    if (camera.lightsource.dist(ray._cast_result) < camera.lightsource.dist(ray._dir)) {
                                        ray._cast.copy(ray._cast_result);
                                        //ray.color.copy(mesh[i].color);
                                    }


                                }
                            }
                            if (ray._cast.dist(camera.lightsource) < 999) {
                                ray.color.r/=2;
                                ray.color.g/=2;
                                ray.color.b/=2;
                            }



                            draw_buffer.data[(((x) + (y * surface._height)) * 4) + 0] = ray.color.r;
                            draw_buffer.data[(((x) + (y * surface._height)) * 4) + 1] = ray.color.g;
                            draw_buffer.data[(((x) + (y * surface._height)) * 4) + 2] = ray.color.b;
                            draw_buffer.data[(((x) + (y * surface._height)) * 4) + 3] = ray.color.a;
                           
                      //  }
                    }
                }*/
