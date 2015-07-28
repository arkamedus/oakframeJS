/** @type {function(Array<number>):number} */
function arrayGetAverage(a) {
    var ret = 0;
    a.forEach(function (list) {
        ret += list;
    });
    return ret / a.length;
}

/** @type {function(Array<number>):number} */
function arrayGetMin(a) {
    var ret = 0;
    a.forEach(function (list) {
        ret = Math.min(ret, list);
    });
    return ret;
}

/** @type {function(Array<number>):number} */
function arrayGetMax(a) {
    var ret = 0;
    a.forEach(function (list) {
        ret = Math.max(ret, list);
    });
    return ret;
}

/** @type {function(Array<*>,string,(number|boolean|string)):Array<*>} */
function arraySelectWhere(a, col, val) {
    var na, len, i;
    na = [];
    len = a.length;
    for (i = 0; i < len; i++) {
        //this.accounts.forEach(function(a){
        if (a[i][col] === val) {
            //return this._data[i];	
            na.push(a[i]);
        }
    }
    return na;
};

function arraySelectIndex(a, col, val) {
    var len, i;
    //na = -1;
    len = a.length;
    for (i = 0; i < len; i++) {
        //this.accounts.forEach(function(a){
        if (a[i][col] === val) {
            //return this._data[i];	
            return a[i];
        }
    }
    return -1;
};
