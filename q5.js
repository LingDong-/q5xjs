function Q5(scope){
  return new graphics(scope);
  function graphics(scope){let $ = (scope == "global" ? window : this);
    $.canvas = document.createElement("canvas");
    let ctx = $.canvas.getContext("2d");

    $.width = 100;
    $.height = 100;
    $.canvas.width = $.width;
    $.canvas.height = $.height;
    
    if (scope != "offscreen"){
      if (document.body){
        document.body.appendChild($.canvas);
      }else{
        window.addEventListener("load",function(){
          document.body.appendChild($.canvas);
        })
      }
    }

    defaultStyle();

    //================================================================
    // CONSTANTS
    //================================================================
    $.MAGIC = 0x9A0CE55

    $.RGB = 0;
    $.HSV = 1;
    $.HSB = 1;

    $.CHORD = 0;
    $.PIE = 1;
    $.OPEN = 2;

    $.RADIUS = 1;
    $.CORNER = 2;
    $.CORNERS = 3;

    $.ROUND = "round";
    $.SQUARE = "butt";
    $.PROJECT = "square";
    $.MITER = "miter";
    $.BEVEL = "bevel";

    $.CLOSE = 1;

    $.BLEND = 'source-over';
    $.REMOVE = 'destination-out';
    $.ADD = 'lighter';
    $.DARKEST = 'darken';
    $.LIGHTEST = 'lighten';
    $.DIFFERENCE = 'difference';
    $.SUBTRACT = 'subtract';
    $.EXCLUSION = 'exclusion';
    $.MULTIPLY = 'multiply';
    $.SCREEN = 'screen';
    $.REPLACE = 'copy';
    $.OVERLAY = 'overlay';
    $.HARD_LIGHT = 'hard-light';
    $.SOFT_LIGHT = 'soft-light';
    $.DODGE = 'color-dodge';
    $.BURN = 'color-burn';

    $.NORMAL = "normal";
    $.ITALIC = "italic";
    $.BOLD = "bold";
    $.BOLDITALIC = "italic bold";

    $.CENTER = "center";
    $.LEFT = "left";
    $.RIGHT = "right";
    $.TOP = "top";
    $.BOTTOM = "bottom";
    $.BASELINE = "alphabetic";

    $.LANDSCAPE = "landscape";
    $.PORTRAIT = "portrait";

    $.ALT = 18;
    $.BACKSPACE = 8;
    $.CONTROL = 17;
    $.DELETE = 46;
    $.DOWN_ARROW = 40;
    $.ENTER = 13;
    $.ESCAPE = 27;
    $.LEFT_ARROW = 37;
    $.OPTION = 18;
    $.RETURN = 13;
    $.RIGHT_ARROW = 39;
    $.SHIFT = 16;
    $.TAB = 9;
    $.UP_ARROW = 38;
    
    $.HALF_PI = Math.PI/2;
    $.PI = Math.PI;
    $.QUARTER_PI = Math.PI/4;
    $.TAU = Math.PI*2;
    $.TWO_PI = Math.PI*2;

    $.THRESHOLD = 1;
    $.GRAY = 2;
    $.OPAQUE = 3;
    $.INVERT = 4;
    $.POSTERIZE = 5;
    $.DILATE = 6;
    $.ERODE = 7;
    $.BLUR = 8;

    $.ARROW = 'default';
    $.CROSS = 'crosshair';
    $.HAND = 'pointer';
    $.MOVE = 'move';
    $.TEXT = 'text';

    $.VIDEO = {video:true,audio:false};
    $.AUDIO = {video:false,audio:true};

    $.SHR3 = 1;
    $.LCG = 2;
    
    //================================================================
    // HINTS
    //================================================================

    $.HARDWARE_FILTERS = true;
    $.hint = function(prop,val){
      $[prop]=val;
    }

    //================================================================
    // PUBLIC PROPERTIES
    //================================================================
    $.frameCount = 0;
    $.mouseX = 0;
    $.mouseY = 0;
    $.pmouseX = 0;
    $.pmouseY = 0;
    $.mouseButton = null;
    $.keyIsPressed = false;
    $.mouseIsPressed = false;
    $.key = null;
    $.keyCode = null;
    $.pixels = null;
    $.accelerationX = 0;
    $.accelerationY = 0;
    $.accelerationZ = 0;
    $.rotationX = 0;
    $.rotationY = 0;
    $.rotationZ = 0;
    $.relRotationX = 0;
    $.relRotationY = 0;
    $.relRotationZ = 0;

    $.pAccelerationX = 0;
    $.pAccelerationY = 0;
    $.pAccelerationZ = 0;
    $.pRotationX = 0;
    $.pRotationY = 0;
    $.pRotationZ = 0;
    $.pRelRotationX = 0;
    $.pRelRotationY = 0;
    $.pRelRotationZ = 0;

    $.touches = [];
                           
    $._colorMode = $.RGB;
    $._noStroke = false;
    $._noFill = false;
    $._ellipseMode = $.CENTER;
    $._rectMode = $.CORNER;
    $._curveDetail = 20;
    $._curveAlpha = 0.0;
    $._noLoop = false;

    $._textFont = "sans-serif";
    $._textSize = 12;
    $._textLeading = 12;
    $._textStyle = "normal";

    $._pixelDensity = 1;

    $._frameRate = null;

    $._tint = null;

    //================================================================
    // PRIVATE VARS
    //================================================================
    let looper = null;
    let firstVertex = true;
    let curveBuff = [];
    let imgData = null;
    let preloadCnt = 0;
    let keysHeld = {};
    let millisStart = 0;
    let tmpCtx = null;
    let tmpCt2 = null;
    let tmpBuf = null;

    //================================================================
    // ALIAS PROPERTIES
    //================================================================


    Object.defineProperty($, "deviceOrientation", {
      get: function () {return Math.abs(window.orientation)==90?$.LANDSCAPE:$.PORTRAIT},
    });

    Object.defineProperty($, "windowWidth", {
      get: function () {return window.innerWidth},
    });

    Object.defineProperty($, "windowHeight", {
      get: function () {return window.innerHeight},
    });

    Object.defineProperty($, "drawingContext", {
      get: function () {return ctx},
    });

    //================================================================
    // CANVAS
    //================================================================

    $.createCanvas = function(width, height){
      $.width = width;
      $.height = height;
      $.canvas.width = width;
      $.canvas.height = height;
      defaultStyle();
    }

    $.resizeCanvas = function(width, height){
      $.width = width;
      $.height = height;
      $.canvas.width = width;
      $.canvas.height = height;
    }

    $.createGraphics = $.createImage = function(width, height){
      let g = new graphics("offscreen");
      g.createCanvas(width,height);
      g.noLoop();
      return g;
    }

    $.pixelDensity = function(n){
      if (n == undefined){
        return $._pixelDensity;
      }
      $._pixelDensity = n;
      
      $.canvas.width = Math.ceil($.width*n);
      $.canvas.height = Math.ceil($.height*n);
      $.canvas.style.width = $.width+"px";
      $.canvas.style.height = $.height+"px";

      ctx.scale($._pixelDensity,$._pixelDensity);
      defaultStyle();
      return $._pixelDensity;
    }

    //================================================================
    // MATH
    //================================================================

    $.map = function(value,istart,istop,ostart,ostop,clamp) {
      let val = ostart + (ostop - ostart) * ((value - istart)*1.0 / (istop - istart));
      if (!clamp){
        return val;
      }
      if (ostart < ostop){
        return Math.min(Math.max(val,ostart),ostop);
      }else{
        return Math.min(Math.max(val,ostop),ostart);
      }
    }
    $.lerp = function(a,b,t){
      return a*(1-t) + b*t;
    }
    $.constrain = function(x,lo,hi){
      return Math.min(Math.max(x,lo),hi);
    }
    $.dist = function() {
      if (arguments.length == 4){
        return Math.hypot(arguments[0]-arguments[2],arguments[1]-arguments[3]);
      }else{
        return Math.hypot(arguments[0]-arguments[3],arguments[1]-arguments[4],arguments[2]-arguments[5]);
      }
    }
    $.norm = function(value,start,stop){
      return $.map(value,start,stop,0,1);
    }
    $.sq = function(x){
      return x*x;
    }
    $.fract = function(x){
      return x-Math.floor(x);
    }
    $.degrees = function(x){
      return x*180/Math.PI;
    }
    $.radians = function(x){
      return x*Math.PI/180;
    }
    $.abs = Math.abs;
    $.ceil = Math.ceil;
    $.exp = Math.exp;
    $.floor = Math.floor;
    $.log = Math.log;
    $.mag = Math.hypot;
    $.max = Math.max;
    $.min = Math.min;
    $.round = Math.round;
    $.sqrt = Math.sqrt;
    $.sin = Math.sin;
    $.cos = Math.cos;
    $.tan = Math.tan;
    $.asin = Math.asin;
    $.acos = Math.acos;
    $.atan = Math.atan;
    $.atan2 = Math.atan2;

    //================================================================
    // VECTOR
    //================================================================
    $.Vector = function(_x,_y,_z){let v = this;
      v.x = _x || 0;
      v.y = _y || 0;
      v.z = _z || 0;
      let cacheNorm = null;
      let cacheNormSq = null;
      v.set = function(_x,_y,_z){
        v.x = _x || 0;
        v.y = _y || 0;
        v.z = _z || 0;
      }
      v.copy = function(){
        return new $.Vector(v.x,v.y,v.z);
      }
      function arg2v(x,y,z){
        if (x.x != undefined){
          return x;
        }
        if (y != undefined){
          return {x,y,z:z||0}
        }
        return {x:x,y:x,z:x};
      }
      function calcNorm(){
        if (cacheNormSq == null){
          cacheNormSq = v.x*v.x+v.y*v.y+v.z*v.z;
          cacheNorm = Math.sqrt(cacheNormSq);
        }
      }
      function deprecNorm(){
        cacheNormSq = null;
        cacheNorm = null;
      }
      v.add = function(){let u = arg2v.apply(null,arguments); v.x += u.x;v.y += u.y;v.z += u.z; deprecNorm(); return v}
      v.rem = function(){let u = arg2v.apply(null,arguments); v.x %= u.x;v.y %= u.y;v.z %= u.z; deprecNorm(); return v}
      v.sub = function(){let u = arg2v.apply(null,arguments); v.x -= u.x;v.y -= u.y;v.z -= u.z; deprecNorm(); return v}
      v.mult =function(){let u = arg2v.apply(null,arguments); v.x *= u.x;v.y *= u.y;v.z *= u.z; deprecNorm(); return v}
      v.div = function(){let u = arg2v.apply(null,arguments); v.x /= u.x;v.y /= u.y;v.z /= u.z; deprecNorm(); return v}
      v.mag = function(){calcNorm();return cacheNorm}
      v.magSq=function(){calcNorm();return cacheNormSq}
      v.dot=  function(){let u = arg2v.apply(null,arguments); return v.x*u.x+v.y*u.y+v.z*u.z}
      v.dist= function(){let u = arg2v.apply(null,arguments); let x = v.x-u.x; let y = v.y-u.y; let z = v.z-u.z; return Math.sqrt(x*x+y*y+z*z)}
      v.cross=function(){
        let u = arg2v.apply(null,arguments); 
        let x = v.y*u.z - v.z*u.y;
        let y = v.z*u.x - v.x*u.z;
        let z = v.x*u.y - v.y*u.x;
        v.x = x; v.y = y; v.z = z;
        deprecNorm();
        return v;
      }
      v.normalize = function(){
        calcNorm();
        let n = cacheNorm;
        v.x /= n; v.y /= n; v.z /= n;
        cacheNorm = 1;
        cacheNormSq = 1;
        return v;
      }
      v.limit = function(m){
        calcNorm();
        let n = cacheNorm;
        if (n > m){
          let t = m/n;
          v.x *= t; v.y *= t; v.z *= t;
          cacheNorm = m;
          cacheNormSq = m*m;
        }
        return v;
      }
      v.setMag = function(m){
        calcNorm();
        let n = cacheNorm;
        let t = m/n;
        v.x *= t; v.y *= t; v.z *= t;
        cacheNorm = m;
        cacheNormSq = m*m;
        return v;
      }
      v.heading = function(){
        return Math.atan2(v.y,v.x);
      }
      v.rotate = function(ang){
        let costh = Math.cos(ang);
        let sinth = Math.sin(ang);
        let vx = (v.x * costh - v.y * sinth);
        let vy = (v.x * sinth + v.y * costh);
        v.x = vx;
        v.y = vy;      
        return v;
      }
      v.angleBetween = function(){
        let u = arg2v.apply(null,arguments); 
        const costh = v.dot(u) / (v.mag() * u.mag());
        let ang;
        ang = Math.acos(Math.min(1, Math.max(-1, costh)));
        ang = ang * Math.sign(v.cross(u).z || 1);
        return ang;
      }
      v.lerp = function(u,t){
        v.x = v.x * (1-t) + u.x * t;
        v.y = v.y * (1-t) + u.y * t;
        v.z = v.z * (1-t) + u.z * t;
        deprecNorm();
        return v;
      }
      v.reflect = function(n) {
        n.normalize();
        return v.sub(n.mult(2 * v.dot(n)));
      }
      v.array = function(){
        return [v.x,v.y,v.z];
      }
      v.equals = function(u,epsilon){
        if (epsilon == undefined){
          epsilon = Number.EPSILON;
          if (epsilon == undefined){
            epsilon = 0;
          }
        }
        return Math.abs(u.x-v.x)<epsilon 
            && Math.abs(u.y-v.y)<epsilon 
            && Math.abs(u.z-v.z)<epsilon;
      }
      v.fromAngle = function(th,l){
        if (l == undefined){
          l = 1;
        }
        cacheNorm = l;
        cacheNormSq = l*l;
        v.x = l*Math.cos(th);
        v.y = l*Math.sin(th);
        v.z = 0;
        return v;
      }
      v.fromAngles = function(th,ph,l){
        if (l == undefined){
          l = 1;
        }
        cacheNorm = l;
        cacheNormSq = l*l;
        const cosph = Math.cos(ph);
        const sinph = Math.sin(ph);
        const costh = Math.cos(th);
        const sinth = Math.sin(th);
        v.x = l * sinth * sinph;
        v.y =-l * costh;
        v.z = l * sinth * cosph;
        return v;
      }
      v.random2D = function(){
        cacheNorm = 1;
        cacheNormSq = 1;
        return v.fromAngle(Math.random()*Math.PI*2);
      }
      v.random3D = function(){
        cacheNorm = 1;
        cacheNormSq = 1;
        return v.fromAngles(Math.random()*Math.PI*2,Math.random()*Math.PI*2);
      }
      v.toString = function(){
        return `[${v.x}, ${v.y}, ${v.z}]`
      }
    }
    $.Vector.add = function(v,u){  return new $.Vector(v.x+u.x,v.y+u.y,v.z+u.z)}
    $.Vector.rem = function(v,u){  return new $.Vector(v.x%u.x,v.y%u.y,v.z%u.z)}
    $.Vector.sub = function(v,u){  return new $.Vector(v.x-u.x,v.y-u.y,v.z-u.z)}
    $.Vector.mult= function(v,u){if (u.x==undefined){return new $.Vector(v.x*u,v.y*u,v.z*u)};  return new $.Vector(v.x*u.x,v.y*u.y,v.z*u.z)}
    $.Vector.div = function(v,u){if (u.x==undefined){return new $.Vector(v.x/u,v.y/u,v.z/u)};  return new $.Vector(v.x/u.x,v.y/u.y,v.z/u.z)}
    $.Vector.dist= function(v,u){  return Math.hypot(v.x-u.x,v.y-u.y,v.z-u.z)}
    $.Vector.cross=function(v,u){  return new $.Vector(v.y*u.z - v.z*u.y, v.z*u.x - v.x*u.z, v.x*u.y - v.y*u.x);}
    $.Vector.lerp= function(v,u,t){return new $.Vector(v.x * (1-t) + u.x * t,
                                                       v.y = v.y * (1-t) + u.y * t,
                                                       v.z = v.z * (1-t) + u.z * t);}
    $.Vector.equals = function(v,u,epsilon) {return v.equals(u,epsilon)}

    for (let k of ["fromAngle","fromAngles","random2D","random3D"]){
      $.Vector[k] = function(u,v,t){
        return (new $.Vector())[k](u,v,t);
      }
    }
    $.createVector = function(x,y,z){
      return new $.Vector(x,y,z);
    }

    //================================================================
    // CURVE QUERY
    //================================================================
    //https://github.com/processing/p5.js/blob/1.1.9/src/core/shape/curves.js

    $.curvePoint = function(a, b, c, d, t) {
      const t3 = t * t * t,
        t2 = t * t,
        f1 = -0.5 * t3 + t2 - 0.5 * t,
        f2 = 1.5 * t3 - 2.5 * t2 + 1.0,
        f3 = -1.5 * t3 + 2.0 * t2 + 0.5 * t,
        f4 = 0.5 * t3 - 0.5 * t2;
      return a * f1 + b * f2 + c * f3 + d * f4;
    }
    $.bezierPoint = function(a, b, c, d, t) {
      const adjustedT = 1 - t;
      return (
        Math.pow(adjustedT, 3) * a +
        3 * Math.pow(adjustedT, 2) * t * b +
        3 * adjustedT * Math.pow(t, 2) * c +
        Math.pow(t, 3) * d
      );
    }
    $.curveTangent = function(a, b, c, d, t) {
      const t2 = t * t,
        f1 = -3 * t2 / 2 + 2 * t - 0.5,
        f2 = 9 * t2 / 2 - 5 * t,
        f3 = -9 * t2 / 2 + 4 * t + 0.5,
        f4 = 3 * t2 / 2 - t;
      return a * f1 + b * f2 + c * f3 + d * f4;
    };
    $.bezierTangent = function(a, b, c, d, t) {
      const adjustedT = 1 - t;
      return (
        3 * d * Math.pow(t, 2) -
        3 * c * Math.pow(t, 2) +
        6 * c * adjustedT * t -
        6 * b * adjustedT * t +
        3 * b * Math.pow(adjustedT, 2) -
        3 * a * Math.pow(adjustedT, 2)
      );
    };

    //================================================================
    // COLORS
    //================================================================

    function hsv2rgb(h, s, v){
      //https://stackoverflow.com/questions/3018313/algorithm-to-convert-rgb-to-hsv-and-hsv-to-rgb-in-range-0-255-for-both
      let r , g  ,b ;
      let hh , i , ff, p , q , t ;
      if (s == 0){
        r = v;
        g = v;
        b = v;
        return [r*255,g*255,b*255];
      }
      hh = h;
      if (hh > 360) hh = 0;
      hh /= 60;
      i = ~~hh;
      ff = hh-i;
      p = v * (1.0 - s);
      q = v * (1.0 - (s*ff));
      t = v * (1.0 - (s*(1.0-ff)));
      switch (i){
        case 0:
          r = v; g = t; b = p;
          break;
        case 1:
          r = q; g = v; b = p;
          break;
        case 2:
          r = p; g = v; b = t;
          break;
        case 3:
          r = p; g = q; b = v;
          break;
        case 4:
          r = t; g = p; b = v;
          break;
        default:
          r = v; g = p; b = q;
          break;
      }
      return [r*255,g*255,b*255];
    }

    function rgb2hsv(r,g,b){
      //https://stackoverflow.com/questions/3018313/algorithm-to-convert-rgb-to-hsv-and-hsv-to-rgb-in-range-0-255-for-both
      let rgbMin, rgbMax ;
      let h, s, v ;
      rgbMin = r < g ? (r < b ? r : b) : (g < b ? g : b);
      rgbMax = r > g ? (r > b ? r : b) : (g > b ? g : b);
      v = rgbMax * 100/255;
      if (v == 0){
        h = 0;
        s = 0;
        return [h,s,v];
      }
      s = 100 * (rgbMax - rgbMin) / rgbMax;
      if (s == 0){
        h = 0;
        return [h,s,v];
      }
      if (rgbMax == r)
        h = 0 + 60 * (g - b) / (rgbMax - rgbMin);
      else if (rgbMax == g)
        h = 120 + 60 * (b - r) / (rgbMax - rgbMin);
      else
        h = 240 + 60 * (r - g) / (rgbMax - rgbMin);
      return [h,s,v];
    }
    
    $.Color = function(r,g,b,a){let that = this;
      that.MAGIC = 0xC010A;
      that._r = r;
      that._g = g;
      that._b = b;
      that._a = a;
      that._h = 0;
      that._s = 0;
      that._v = 0;
      that._hsvInferred = false;
      that.setRed = function(x){
        that._r = x;
        that._hsvInferred = false;
      }
      that.setGreen = function(x){
        that._g = x;
        that._hsvInferred = false;
      }
      that.setBlue = function(x){
        that._b = x;
        that._hsvInferred = false;
      }
      that.setAlpha = function(x){
        that._a = x/255;
        that._hsvInferred = false;
      }
      that._inferHSV = function(){
        if (!that._hsvInferred){
          [that._h, that._s, that._v] = rgb2hsv(that._r, that._g, that._b);
          that._hsvInferred = true;
        }
      }
      that.toString = function(){
        return `rgba(${Math.round(that._r)},${Math.round(that._g)},${Math.round(that._b)},${(~~(that._a*1000))/1000})`
      }
    }

    $.colorMode = function(mode){
      $._colorMode = mode;
    }

    $.color = function() {
      if (arguments.length == 1 && arguments[0].MAGIC == 0xC010A){
        return arguments[0];
      }
      if ($._colorMode == $.RGB){
        if (arguments.length == 1){
          return new $.Color(arguments[0],arguments[0],arguments[0],1);
        }else if (arguments.length == 2){
          return new $.Color(arguments[0],arguments[0],arguments[0],arguments[1]/255);
        }else if (arguments.length == 3){
          return new $.Color(arguments[0],arguments[1],arguments[2],1);
        }else if (arguments.length == 4){
          return new $.Color(arguments[0],arguments[1],arguments[2],arguments[3]/255);
        }
      }else{
        if (arguments.length == 1){
          return new $.Color(...hsv2rgb(0,0,arguments[0]/100),1);
        }else if (arguments.length == 2){
          return new $.Color(...hsv2rgb(0,0,arguments[0]/100),arguments[1]/255);
        }else if (arguments.length == 3){
          return new $.Color(...hsv2rgb(arguments[0],arguments[1]/100,arguments[2]/100),1);
        }else if (arguments.length == 4){
          return new $.Color(...hsv2rgb(arguments[0],arguments[1]/100,arguments[2]/100),arguments[3]);
        }
      }
      return null;
    }

    $.red = function(c )  { 
      return c._r;
    }
    $.green = function(c )  { 
      return c._g;
    }
    $.blue = function(c )  { 
      return c._b;
    }
    $.alpha = function(c )  { 
      return c._a*255;
    }
    $.hue = function(c )  { 
      c._inferHSV();
      return c._h;
    }
    $.saturation = function(c )  { 
      c._inferHSV();
      return c._s;
    }
    $.brightness = function(c )  { 
      c._inferHSV();
      return c._v;
    }
    $.lightness = function(c){
      return (0.2126 * c._r + 0.7152 * c._g + 0.0722 * c._b)*100/255;
    }

    function lerpHue(h0,h1,t){
      var methods = [
        [Math.abs(h1-h0),     $.map(t,0,1,h0,h1)],
        [Math.abs(h1+360-h0), $.map(t,0,1,h0,h1+360)],
        [Math.abs(h1-360-h0), $.map(t,0,1,h0,h1-360)]
        ]
      methods.sort((x,y)=>(x[0]-y[0]))
      return (methods[0][1]+720)%360;
    }

    $.lerpColor = function(a , b , t ){
      if ($._colorMode == $.RGB){
        return new $.Color(
          $.constrain($.lerp(a._r,b._r,t),0,255),
          $.constrain($.lerp(a._g,b._g,t),0,255),
          $.constrain($.lerp(a._b,b._b,t),0,255),
          $.constrain($.lerp(a._a,b._a,t),0,1),
        )
      }else{
        a._inferHSV();
        b._inferHSV();
        return new $.Color(
          $.constrain(lerpHue(a._h,b._h,t),0,360),
          $.constrain($.lerp(a._s,b._s,t),0,100),
          $.constrain($.lerp(a._v,b._v,t),0,100),
          $.constrain($.lerp(a._a,b._a,t),0,1),
        )
      }
    }

    //================================================================
    // DRAWING SETTING
    //================================================================

    function defaultStyle(){
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineCap = "round";
      ctx.lineJoin = "miter";
    }

    $.strokeWeight = function(n){
      $._noStroke = false;
      ctx.lineWidth = n;
    }
    $.stroke = function(){
      $._noStroke = false;
      if (typeof arguments[0] == "string"){
        ctx.strokeStyle = arguments[0];
        return;
      }
      let col = $.color.apply(null,arguments);
      if (col._a <= 0){
        $._noStroke = true;
        return;
      }
      ctx.strokeStyle = col;
    }
    $.noStroke = function(){
      $._noStroke = true;
    }
    $.fill = function(){
      $._noFill = false;
      if (typeof arguments[0] == "string"){
        ctx.fillStyle = arguments[0];
        return;
      }
      let col = $.color.apply(null,arguments);
      if (col._a <= 0){
        $._noFill = true;
        return;
      }
      ctx.fillStyle = col;
    }
    $.noFill = function(){
      $._noFill = true;
    }
    $.blendMode = function(x){
      ctx.globalCompositeOperation = x;
    }
    $.strokeCap =      function(x){ctx.lineCap = x;}
    $.strokeJoin =     function(x){ctx.lineJoin = x;}
    $.ellipseMode =    function(x){$._ellipseMode = x;}
    $.rectMode =       function(x){$._rectMode = x;}
    $.curveDetail =    function(x){$._curveDetail = x;}
    $.curveAlpha =     function(x){$._curveAlpha = x;}
    $.curveTightness = function(x){
      console.warn("curveTightness() sets the 'alpha' parameter of Catmull-Rom curve, and is NOT identical to p5.js counterpart. As this might change in the future, please call curveAlpha() directly.");
      $._curveAlpha = x;
    }
    
    //================================================================
    // DRAWING
    //================================================================

    $.clear = function(){
      ctx.clearRect(0,0,$.width,$.height);
    }

    $.background = function(){
      if (arguments[0] && arguments[0].MAGIC == $.MAGIC){
        return $.image(arguments[0],0,0,$.width,$.height);
      }
      ctx.save();
      ctx.resetTransform();
      if (typeof arguments[0] == "string"){
        ctx.fillStyle = arguments[0];
      }else{
        ctx.fillStyle=$.color(...Array.from(arguments));
      }
      ctx.fillRect(0,0,$.width,$.height);
      ctx.restore();
    }

    $.line = function(x0, y0, x1, y1){
      if (!$._noStroke){
        ctx.beginPath();
        ctx.moveTo(x0,y0);
        ctx.lineTo(x1,y1);
        ctx.stroke();
      }
    }

    function norm2PI(x){
      if (0 <= x && x < Math.PI*2){
        return x;
      }
      while (x < 0){
        x += Math.PI*2;
      }
      while (x >= Math.PI){
        x -= Math.PI*2;
      }
      return x;
    }

    function arcImpl(x, y, w, h, start, stop, mode, detail){
      if ($._noFill && $._noStroke){
        return;
      }
      let lo = norm2PI(start);
      let hi = norm2PI(stop);
      ctx.beginPath();
      for (let i = 0; i < detail+1; i++){
        let t = i/detail;
        let a = $.lerp(lo,hi,t);
        let dx = Math.cos(a)*w/2;
        let dy = Math.sin(a)*h/2;
        ctx[i?"lineTo":"moveTo"](x+dx,y+dy);
      }
      if (mode == $.CHORD){
        ctx.closePath();
      }else if (mode == $.PIE){
        ctx.lineTo(x,y);
        ctx.closePath();
      }
      if (!$._noFill)ctx.fill();
      if (!$._noStroke)ctx.stroke();
    }
    $.arc = function(x, y, w, h, start, stop, mode, detail){
      if (start == stop){
        return $.ellipse(x,y,w,h);
      }
      if (detail == undefined){
        detail = 25;
      }
      if (mode == undefined){
        mode = $.PIE;
      }
      if ($._ellipseMode == $.CENTER){
        arcImpl(x,y,w,h,start,stop,mode,detail);
      }else if ($._ellipseMode == $.RADIUS){
        arcImpl(x,y,w*2,h*2,start,stop,mode,detail);
      }else if ($._ellipseMode == $.CORNER){
        arcImpl(x+w/2,y+h/2,w,h,start,stop,mode,detail);
      }else if ($._ellipseMode == $.CORNERS){
        arcImpl((x+w)/2,(y+h)/2,(w-x),(h-y),start,stop,mode,detail);
      }
    }

    function ellipseImpl(x,y,w,h){
      if ($._noFill && $._noStroke){
        return;
      }
      ctx.beginPath();
      ctx.ellipse(x, y, w/2, h/2, 0, 0, Math.PI*2);
      if (!$._noFill)ctx.fill();
      if (!$._noStroke)ctx.stroke();
    }
    $.ellipse = function(x, y, w, h){
      if (h == undefined){
        h = w;
      }
      if ($._ellipseMode == $.CENTER){
        ellipseImpl(x,y,w,h);
      }else if ($._ellipseMode == $.RADIUS){
        ellipseImpl(x,y,w*2,h*2);
      }else if ($._ellipseMode == $.CORNER){
        ellipseImpl(x+w/2,y+h/2,w,h);
      }else if ($._ellipseMode == $.CORNERS){
        ellipseImpl((x+w)/2,(y+h)/2,(w-x),(h-y));
      }
    }
    $.circle = function(x,y,r){
      return $.ellipse(x,y,r,r);
    }
    $.point = function(x,y){
      if (x.x){
        y = x.y;
        x = x.x;
      }
      ctx.beginPath();
      ctx.ellipse(x, y, 0.4, 0.4, 0, 0, Math.PI*2);
      ctx.stroke();
    }
    function rectImpl(x,y,w,h){
      if (!$._noFill){
        ctx.fillRect(x,y,w,h);
      }
      if (!$._noStroke){
        ctx.strokeRect(x,y,w,h);
      }
    }
    function roundedRectImpl(x,y,w,h,tl,tr,br,bl){
      if ($._noFill && $._noStroke){
        return;
      }
      if (tl == undefined){
        return rectImpl(x,y,w,h);
      }
      if (tr == undefined){
        return roundedRectImpl(x,y,w,h,tl,tl,tl,tl);
      }
      const hh = Math.min(Math.abs(h), Math.abs(w)) / 2;
      tl = Math.min(hh,tl);
      tr = Math.min(hh,tr);
      bl = Math.min(hh,bl);
      br = Math.min(hh,br);
      ctx.beginPath();
      ctx.moveTo(x + tl, y);
      ctx.arcTo(x + w, y, x + w, y + h, tr);
      ctx.arcTo(x + w, y + h, x, y + h, br);
      ctx.arcTo(x, y + h, x, y, bl);
      ctx.arcTo(x, y, x + w, y, tl);
      ctx.closePath();
      if (!$._noFill)ctx.fill();
      if (!$._noStroke)ctx.stroke();
    }

    $.rect = function(x,y,w,h, tl,tr,br,bl){
      if ($._rectMode == $.CENTER){
        roundedRectImpl(x-w/2,y-h/2,w,h, tl,tr,br,bl);
      }else if ($._rectMode == $.RADIUS){
        roundedRectImpl(x-w,y-h,w*2,h*2, tl,tr,br,bl);
      }else if ($._rectMode == $.CORNER){
        roundedRectImpl(x,y,w,h, tl,tr,br,bl);
      }else if ($._rectMode == $.CORNERS){
        roundedRectImpl(x,y,w-x,h-y, tl,tr,br,bl);
      }
    }
    $.square = function(x,y,s,tl,tr,br,bl){
      return $.rect(x,y,s,s,tl,tr,br,bl);
    }
    
    function clearBuff(){
      curveBuff = [];
    }

    $.beginShape = function(){
      clearBuff();
      ctx.beginPath();
      firstVertex = true;
    }
    $.beginContour = function(){
      ctx.closePath();
      clearBuff();
      firstVertex = true;
    }
    $.endContour = function(){
      clearBuff();
      firstVertex = true;
    }
    $.vertex = function(x,y){
      clearBuff();
      if (firstVertex){
        ctx.moveTo(x,y);
      }else{
        ctx.lineTo(x,y);
      }
      firstVertex = false;
    }
    $.bezierVertex = function(cp1x, cp1y, cp2x, cp2y, x, y){
      clearBuff();
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }
    $.quadraticVertex = function(cp1x, cp1y, x, y){
      clearBuff();
      ctx.quadraticCurveTo(cp1x, cp1y, x, y);
    }
    $.bezier = function(x1, y1, x2, y2, x3, y3, x4, y4){
      $.beginShape();
      $.vertex(x1,y1);
      $.bezierVertex(x2,y2,x3,y3,x4,y4);
      $.endShape();
    }
    $.triangle = function(x1, y1, x2, y2, x3, y3){
      $.beginShape();
      $.vertex(x1,y1);
      $.vertex(x2,y2);
      $.vertex(x3,y3);
      $.endShape($.CLOSE);
    }
    $.quad = function(x1, y1, x2, y2, x3, y3, x4, y4){
      $.beginShape();
      $.vertex(x1,y1);
      $.vertex(x2,y2);
      $.vertex(x3,y3);
      $.vertex(x4,y4);
      $.endShape($.CLOSE);
    }
    $.endShape = function(close){
      clearBuff();
      if (close){
        ctx.closePath();
      }
      if (!$._noFill)ctx.fill();
      if (!$._noStroke)ctx.stroke();
      if ($._noFill && $._noStroke){ // eh.
        ctx.save();
        ctx.fillStyle="none";
        ctx.fill();
        ctx.restore();
      }
    }
    function catmullRomSpline(p0x,p0y,p1x,p1y,p2x,p2y,p3x,p3y, numPts, alpha){
      //https://en.wikipedia.org/wiki/Centripetal_Catmull–Rom_spline
      function catmullromSplineGetT(t, p0x, p0y, p1x, p1y, alpha){
        let a = Math.pow((p1x-p0x), 2.0) + Math.pow((p1y-p0y), 2.0);
        let b = Math.pow(a, alpha * 0.5);
        return (b + t);
      }
      let pts = [];

      let t0 = 0.0;
      let t1 = catmullromSplineGetT(t0, p0x, p0y, p1x, p1y, alpha);
      let t2 = catmullromSplineGetT(t1, p1x, p1y, p2x, p2y, alpha);
      let t3 = catmullromSplineGetT(t2, p2x, p2y, p3x, p3y, alpha);

      for (let i=0; i<numPts; i++){ 
        let t = t1+i/(numPts-1)*(t2-t1); 
        let s = [(t1-t)/(t1-t0), (t-t0)/(t1-t0), (t2-t)/(t2-t1), (t-t1)/(t2-t1),
                 (t3-t)/(t3-t2), (t-t2)/(t3-t2), (t2-t)/(t2-t0), (t-t0)/(t2-t0),
                 (t3-t)/(t3-t1), (t-t1)/(t3-t1)];
        for (let j = 0; j < s.length; j+=2){
          if (isNaN(s[j])){
            s[j] = 1;
            s[j+1] = 0;
          }
          if (!isFinite(s[j])){
            if (s[j]>0){
              s[j] = 1;
              s[j+1] = 0;
            }else{
              s[j] = 0;
              s[j+1]=1;
            }
          }
        }
        let a1x = p0x*s[0]+p1x*s[1];
        let a1y = p0y*s[0]+p1y*s[1];
        let a2x = p1x*s[2]+p2x*s[3];
        let a2y = p1y*s[2]+p2y*s[3];
        let a3x = p2x*s[4]+p3x*s[5];
        let a3y = p2y*s[4]+p3y*s[5];
        let b1x = a1x*s[6]+a2x*s[7];
        let b1y = a1y*s[6]+a2y*s[7];
        let b2x = a2x*s[8]+a3x*s[9];
        let b2y = a2y*s[8]+a3y*s[9];
        let cx  = b1x*s[2]+b2x*s[3];
        let cy  = b1y*s[2]+b2y*s[3];
        pts.push([cx,cy]);
      }
      return pts;
    }

    $.curveVertex = function(x,y){
      curveBuff.push([x,y]);
      if (curveBuff.length < 4){
        return;
      }
      let p0 = curveBuff[curveBuff.length-4];
      let p1 = curveBuff[curveBuff.length-3];
      let p2 = curveBuff[curveBuff.length-2];
      let p3 = curveBuff[curveBuff.length-1];
      let pts = catmullRomSpline(...p0,...p1,...p2,...p3,$._curveDetail,
        $._curveAlpha,
      );
      for (let i = 0; i < pts.length; i++){
        if (firstVertex){
          ctx.moveTo(...pts[i]);
        }else{
          ctx.lineTo(...pts[i]);
        }
        firstVertex = false;
      }
    }
    $.curve = function(x1, y1, x2, y2, x3, y3, x4, y4){
      $.beginShape();
      $.curveVertex(x1,y1);
      $.curveVertex(x2,y2);
      $.curveVertex(x3,y3);
      $.curveVertex(x4,y4);
      $.endShape();
    }

    //================================================================
    // DRAWING MATRIX
    //================================================================
    $.translate = function(x,y){
      ctx.translate(x,y);
    }
    $.rotate = function(r){
      ctx.rotate(r);
    }
    $.scale = function(x,y){
      if (y == undefined){
        y = x;
      }
      ctx.scale(x,y);
    }
    $.applyMatrix = function(a,b,c,d,e,f){
      ctx.transform(a,b,c,d,e,f);
    }
    $.shearX = function(ang){
      ctx.transform(1, 0, Math.tan(ang), 1, 0, 0);
    }
    $.shearY = function(ang){
      ctx.transform(1, Math.tan(ang), 0, 1, 0, 0);
    }

    $.resetMatrix = function(){
      ctx.resetTransform();
      ctx.scale($._pixelDensity,$._pixelDensity);
    }

    $.pushMatrix = $.push = function(){
      ctx.save();
    }
    $.popMatrix = $.pop = function(){
      ctx.restore();
    }

    //================================================================
    // IMAGING
    //================================================================
    $.image = function(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight){
      let drawable = img.MAGIC == $.MAGIC ? img.canvas : img;
      function reset(){
        if (img.MAGIC != $.MAGIC || !$._tint){
          return;
        }
        let c = img.canvas.getContext('2d');
        c.save();
        c.resetTransform();
        c.clearRect(0,0,c.canvas.width,c.canvas.height);
        c.drawImage(tmpCt2.canvas,0,0);
        c.restore();
      }
      if (img.MAGIC == $.MAGIC && $._tint != null){
        makeTmpCt2(img.canvas.width,img.canvas.height);
        tmpCt2.drawImage(img.canvas,0,0);
        img.tinted($._tint);
      }
      if (!dWidth){
        if (img.MAGIC == $.MAGIC || img.width){
          ctx.drawImage(drawable,dx,dy,img.width,img.height);
        }else{
          ctx.drawImage(drawable,dx,dy,img.videoWidth,img.videoHeight);
        }
        reset();
        return;
      }
      if (!sx){
        ctx.drawImage(drawable,dx,dy,dWidth,dHeight);
        reset();
        return;
      }
      if (!sWidth){
        sWidth = drawable.width;
      }
      if (!sHeight){
        sHeight = drawable.height;
      }
      ctx.drawImage(drawable,sx,sy,sWidth,sHeight,dx,dy,dWidth,dHeight);
      reset();
    }

    $.loadPixels = function(){
      imgData = ctx.getImageData(0,0,$.canvas.width,$.canvas.height);
      $.pixels = imgData.data;
    }
    $.updatePixels = function(){
      if (imgData != null){
        ctx.putImageData(imgData,0,0);
      }
    }

    $.loadImage = function(url,callback){
      preloadCnt++;
      let g = $.createGraphics(100,100);
      let c = g.canvas.getContext('2d');
      let img = new Image();
      img.src = url;
      img.crossOrigin = "Anonymous";
      img.onload = function(){
        c.canvas.width = img.width;
        c.canvas.height = img.height;
        g.width = img.width;
        g.height = img.height;
        c.drawImage(img,0,0);
        preloadCnt--;
        if (callback){
          callback(g);
        }
      }
      return g;
    }

    let filterImpl = {};
    filterImpl[$.THRESHOLD] = function(data,thresh){
      if (thresh==undefined){
        thresh = 127.5;
      }else{
        thresh *= 255;
      }
      for (let i = 0; i < data.length; i += 4) {
        const gray = 0.2126 * data[i] + 0.7152 * data[i+1] + 0.0722 * data[i+2];
        data[i] = data[i + 1] = data[i + 2] = (gray>=thresh)?255:0;
      }
    }
    filterImpl[$.GRAY] = function(data){
      for (let i = 0; i < data.length; i += 4) {
        const gray = (0.2126 * data[i] + 0.7152 * data[i+1] + 0.0722 * data[i+2]);
        data[i] = data[i + 1] = data[i + 2] = gray;
      }
    }
    filterImpl[$.OPAQUE] = function(data){
      for (let i = 0; i < data.length; i += 4) {
        data[i+3] = 255;
      }
    }
    filterImpl[$.INVERT] = function(data){
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255-data[i];
        data[i+1] = 255-data[i+1];
        data[i+2] = 255-data[i+2];
      }
    }
    filterImpl[$.POSTERIZE] = function(data,lvl){
      let lvl1 = lvl - 1;
      for (let i = 0; i < data.length; i += 4) {
        data[i  ] = ((data[i]   * lvl) >> 8) * 255 / lvl1;
        data[i+1] = ((data[i+1] * lvl) >> 8) * 255 / lvl1;
        data[i+2] = ((data[i+2] * lvl) >> 8) * 255 / lvl1;
      }
    }

    filterImpl[$.DILATE] = function(data){
      makeTmpBuf();
      tmpBuf.set(data);
      let [w,h] = [ctx.canvas.width, ctx.canvas.height];
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let l = 4*Math.max(j-1,0);
          let r = 4*Math.min(j+1,w-1);
          let t = 4*Math.max(i-1,0)*w;
          let b = 4*Math.min(i+1,h-1)*w;
          let oi = 4*i*w;
          let oj = 4*j;
          for (let k = 0; k < 4; k++){
            let kt = k+t;
            let kb = k+b;
            let ko = k+oi;
            data[oi+oj+k] = Math.max(
              /*tmpBuf[kt+l],*/tmpBuf[kt+oj],/*tmpBuf[kt+r],*/
              tmpBuf[ko+l],tmpBuf[ko+oj],tmpBuf[ko+r],
              /*tmpBuf[kb+l],*/tmpBuf[kb+oj],/*tmpBuf[kb+r],*/
            );
          }
        }
      }
    }
    filterImpl[$.ERODE] = function(data){
      makeTmpBuf();
      tmpBuf.set(data);
      let [w,h] = [ctx.canvas.width, ctx.canvas.height];
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let l = 4*Math.max(j-1,0);
          let r = 4*Math.min(j+1,w-1);
          let t = 4*Math.max(i-1,0)*w;
          let b = 4*Math.min(i+1,h-1)*w;
          let oi = 4*i*w;
          let oj = 4*j;
          for (let k = 0; k < 4; k++){
            let kt = k+t;
            let kb = k+b;
            let ko = k+oi;
            data[oi+oj+k] = Math.min(
              /*tmpBuf[kt+l],*/tmpBuf[kt+oj],/*tmpBuf[kt+r],*/
              tmpBuf[ko+l],tmpBuf[ko+oj],tmpBuf[ko+r],
              /*tmpBuf[kb+l],*/tmpBuf[kb+oj],/*tmpBuf[kb+r],*/
            );
          }
        }
      }
    }

    
    filterImpl[$.BLUR] = function(data,rad){
      rad = rad || 1;
      rad = Math.floor(rad*$._pixelDensity);
      makeTmpBuf();
      tmpBuf.set(data);
      
      let ksize = rad*2+1;
      
      function gauss1d(ksize){
        let im = new Float32Array(ksize);
        let sigma = 0.3*rad+0.8;
        let ss2 = sigma*sigma*2;
        for (let i = 0; i < ksize; i++){
          let x = (i-ksize/2);
          let z = Math.exp(-(x*x)/(ss2))/(2.5066282746*sigma);
          im[i]=z;
        }
        return im;
      }

      let kern = gauss1d(ksize);
      let [w,h] = [ctx.canvas.width, ctx.canvas.height];
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let s0=0,s1=0,s2=0,s3=0;
          for (let k = 0; k < ksize; k++){
            let jk = Math.min(Math.max(j-rad+k,0),w-1);
            let idx = 4*(i*w+jk);
            s0 += tmpBuf[idx  ]*kern[k];
            s1 += tmpBuf[idx+1]*kern[k];
            s2 += tmpBuf[idx+2]*kern[k];
            s3 += tmpBuf[idx+3]*kern[k];
          }
          let idx = 4*(i*w+j);
          data[idx  ] = s0;
          data[idx+1] = s1;
          data[idx+2] = s2;
          data[idx+3] = s3;
        }
      }
      tmpBuf.set(data);
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let s0=0,s1=0,s2=0,s3=0;
          for (let k = 0; k < ksize; k++){
            let ik = Math.min(Math.max(i-rad+k,0),h-1);
            let idx = 4*(ik*w+j);
            s0 += tmpBuf[idx  ]*kern[k];
            s1 += tmpBuf[idx+1]*kern[k];
            s2 += tmpBuf[idx+2]*kern[k];
            s3 += tmpBuf[idx+3]*kern[k];
          }
          let idx = 4*(i*w+j);
          data[idx  ] = s0;
          data[idx+1] = s1;
          data[idx+2] = s2;
          data[idx+3] = s3;
        }
      }
    }

    function makeTmpCtx(w,h){
      if (tmpCtx == null ){
        tmpCtx = document.createElement("canvas").getContext('2d');
        // document.body.appendChild(tmpCtx.canvas)
      }
      if (w == undefined){
        w = ctx.canvas.width;
        h = ctx.canvas.height;
      }
      if (tmpCtx.canvas.width != w || tmpCtx.canvas.height != h){
        tmpCtx.canvas.width = w;
        tmpCtx.canvas.height = h;
      }
    }
    function makeTmpCt2(w,h){
      if (tmpCt2 == null ){
        tmpCt2 = document.createElement("canvas").getContext('2d');
        // document.body.appendChild(tmpCt2.canvas)
      }
      if (w == undefined){
        w = ctx.canvas.width;
        h = ctx.canvas.height;
      }
      if (tmpCt2.canvas.width != w || tmpCt2.canvas.height != h){
        tmpCt2.canvas.width = w;
        tmpCt2.canvas.height = h;
      }
    }

    function makeTmpBuf(){
      let l = ctx.canvas.width*ctx.canvas.height*4;
      if (tmpBuf == null || l != tmpBuf.length){
        tmpBuf = new Uint8ClampedArray(l);
      }
    }

    function nativeFilter(filtstr){
      tmpCtx.clearRect(0,0,tmpCtx.canvas.width,tmpCtx.canvas.height);
      tmpCtx.filter = filtstr;
      tmpCtx.drawImage(ctx.canvas,0,0);
      ctx.save();
      ctx.resetTransform();
      ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
      ctx.drawImage(tmpCtx.canvas,0,0);
      ctx.restore();
    }

    $.filter = function(typ,x){
      let support = $.HARDWARE_FILTERS && (ctx.filter != undefined);
      if (support){
        makeTmpCtx();
        if (typ == $.THRESHOLD){
          if (x == undefined){
            x = 0.5;
          }
          x = Math.max(x,0.00001);
          let b = Math.floor((0.5/x)*100);
          nativeFilter(`saturate(0%) brightness(${b}%) contrast(1000000%)`);
        }else if (typ == $.GRAY){
          nativeFilter(`saturate(0%)`);
        }else if (typ == $.OPAQUE){
          tmpCtx.fillStyle = "black";
          tmpCtx.fillRect(0,0,tmpCtx.canvas.width,tmpCtx.canvas.height);
          tmpCtx.drawImage(ctx.canvas,0,0);
          ctx.save();
          ctx.resetTransform();
          ctx.drawImage(tmpCtx.canvas,0,0);
          ctx.restore();
        }else if (typ == $.INVERT){
          nativeFilter(`invert(100%)`);
        }else if (typ == $.BLUR){
          nativeFilter(`blur(${Math.ceil(x*$._pixelDensity/1)||1}px)`);
        }else{
          let imgData = ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height);
          filterImpl[typ](imgData.data,x);
          ctx.putImageData(imgData,0,0);
        }
      }else{
        let imgData = ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height);
        filterImpl[typ](imgData.data,x);
        ctx.putImageData(imgData,0,0);
      }
    }

    $.resize = function(w,h){
      makeTmpCtx();
      tmpCtx.drawImage(ctx.canvas,0,0);
      $.width = w;
      $.height = h;
      ctx.canvas.width = w*$._pixelDensity;
      ctx.canvas.height = h*$._pixelDensity;
      ctx.save();
      ctx.resetTransform();
      ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
      ctx.drawImage(tmpCtx.canvas,0,0,ctx.canvas.width,ctx.canvas.height);
      ctx.restore();
    }

    $.get = function(x,y,w,h){
      if (x != undefined && w == undefined){
        let c = ctx.getImageData(x,y,1,1).data;
        return new $.Color(c[0],c[1],c[2],c[3]/255);
      }
      x = x || 0;
      y = y || 0;
      w = w || $.width;
      h = h || $.height;
      let g = $.createGraphics(w,h);
      g.pixelDensity($._pixelDensity);
      let imgData = ctx.getImageData(
        x*$._pixelDensity,y*$._pixelDensity,
        w*$._pixelDensity,h*$._pixelDensity);
      g.canvas.getContext('2d').putImageData(imgData,0,0);
      return g;
    }

    $.set = function(x,y,c){
      if (c.MAGIC == $.MAGIC){
        let old = $._tint;
        $._tint = null;
        $.image(c,x,y);
        $._tint = old;
        return;
      }
      let idx = 4*((y*$._pixelDensity*ctx.canvas.width)+(x*$._pixelDensity));
      $.pixels[idx  ] = c._r;
      $.pixels[idx+1] = c._g;
      $.pixels[idx+2] = c._b;
      $.pixels[idx+3] = c._a*255;
    }

    $.tinted = function(){
      let col = $.color(...Array.from(arguments));
      let alpha = col._a;
      col._a = 1;
      makeTmpCtx();
      tmpCtx.clearRect(0,0,tmpCtx.canvas.width,tmpCtx.canvas.height);
      tmpCtx.fillStyle = col;
      tmpCtx.fillRect(0,0,tmpCtx.canvas.width,tmpCtx.canvas.height);
      tmpCtx.globalCompositeOperation = "multiply";
      tmpCtx.drawImage(ctx.canvas,0,0);
      tmpCtx.globalCompositeOperation = "source-over";
      
      ctx.save();
      ctx.resetTransform();
      let old = ctx.globalCompositeOperation;
      ctx.globalCompositeOperation = "source-in";
      ctx.drawImage(tmpCtx.canvas,0,0);
      ctx.globalCompositeOperation = old;
      ctx.restore();

      tmpCtx.globalAlpha = alpha;
      tmpCtx.clearRect(0,0,tmpCtx.canvas.width,tmpCtx.canvas.height);
      tmpCtx.drawImage(ctx.canvas,0,0);
      tmpCtx.globalAlpha = 1;

      ctx.save();
      ctx.resetTransform();
      ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
      ctx.drawImage(tmpCtx.canvas,0,0);
      ctx.restore();
    }

    $.tint = function(){
      $._tint = $.color(...Array.from(arguments));
    }

    $.noTint = function(){
      $._tint = null;
    }

    $.mask = function(img){
      ctx.save();
      ctx.resetTransform();
      let old = ctx.globalCompositeOperation;
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(img.canvas,0,0);
      ctx.globalCompositeOperation = old;
      ctx.restore();
    }

    $.clearTemporaryBuffers = function(){
      tmpCtx = null;
      tmpCt2 = null;
      tmpBuf = null;
    }

    $.save = function(name,ext){
      name = name || "untitled";
      ext = ext || "png";
      var down = document.createElement('a')
      down.innerHTML = "[Download]"
      down.addEventListener('click', function() {
        this.href = ctx.canvas.toDataURL();
        this.download = name + "." + ext;
      }, false);
      document.body.appendChild(down);
      down.click()
      document.body.removeChild(down);
    }
    $.saveCanvas = function(a,b,c){
      if (a.MAGIC == $.MAGIC){
        if (c){
          a.save(b,c);
        }
        let s = b.split(".")
        return a.save(s.slice(0,-1).join("."),s[s.length-1]);
      }
      if (b){
        return $.save(a,b);
      }
      let s = a.split(".")
      return $.save(s.slice(0,-1).join("."),s[s.length-1]);
    }

    //================================================================
    // TYPOGRAPHY
    //================================================================

    $.loadFont = function(url,callback){
      let sp = url.split("/");
      let name = sp[sp.length-1].split(".")[0].replace(" ","");
      let cssStr = `@font-face {
        font-family: '${name}';
        src: url('${url}');
      }`;
      const style = document.createElement('style');
      style.textContent = cssStr;
      document.head.append(style);
      return name;
    }
    $.textFont = function(x){
      $._textFont = x;
    }
    $.textSize = function(x){
      $._textSize = x;
      $._textLeading = x;
    }
    $.textLeading = function(x){
      $._textLeading = x;
    }
    $.textStyle = function(x){
      $._textStyle = x;
    }
    $.textAlign = function(horiz,vert){
      ctx.textAlign = horiz;
      if (vert){
        ctx.textBaseline = (vert == $.CENTER) ? "middle" : vert;
      }
    }
    $.text = function(str,x,y,w){
      if (!str){
        return;
      }
      str = str.toString();
      if ($._noFill && $._noStroke){
        return;
      }
      ctx.font = `${$._textStyle} ${$._textSize}px ${$._textFont}`;
      let lines = str.split("\n");
      for (let i = 0; i < lines.length; i++){
        if (!$._noFill){ctx.fillText(lines[i],x,y,w)}
        if (!$._noStroke){ctx.strokeText(lines[i],x,y,w)}
        y += $._textLeading;
      }
    }
    $.textWidth = function(str){
      ctx.font = `${$._textStyle} ${$._textSize}px ${$._textFont}`;
      return ctx.measureText(str).width;
    }   
    $.textAscent = function(str){
      ctx.font = `${$._textStyle} ${$._textSize}px ${$._textFont}`;
      return ctx.measureText(str).actualBoundingBoxAscent;
    }
    $.textDescent = function(str){
      ctx.font = `${$._textStyle} ${$._textSize}px ${$._textFont}`;
      return ctx.measureText(str).actualBoundingBoxDescent;
    }


    //================================================================
    // RANDOM
    //================================================================

    //https://github.com/processing/p5.js/blob/1.1.9/src/math/noise.js
    var PERLIN_YWRAPB = 4; var PERLIN_YWRAP = 1<<PERLIN_YWRAPB;
    var PERLIN_ZWRAPB = 8; var PERLIN_ZWRAP = 1<<PERLIN_ZWRAPB;
    var PERLIN_SIZE = 4095;
    var perlin_octaves = 4;var perlin_amp_falloff = 0.5;
    var scaled_cosine = function(i) {return 0.5*(1.0-Math.cos(i*Math.PI));};
    var p_perlin;

    $.noise = function(x,y,z) {
      y = y || 0; z = z || 0;
      if (p_perlin == null) {
        p_perlin = new Array(PERLIN_SIZE + 1);
        for (var i = 0; i < PERLIN_SIZE + 1; i++) {
          p_perlin[i] = Math.random();
        }
      }
      if (x<0) { x=-x; } if (y<0) { y=-y; } if (z<0) { z=-z; }
      var xi=Math.floor(x), yi=Math.floor(y), zi=Math.floor(z);
      var xf = x - xi; var yf = y - yi; var zf = z - zi;
      var rxf, ryf;
      var r=0; var ampl=0.5;
      var n1,n2,n3;
      for (var o=0; o<perlin_octaves; o++) {
        var of=xi+(yi<<PERLIN_YWRAPB)+(zi<<PERLIN_ZWRAPB);
        rxf = scaled_cosine(xf); ryf = scaled_cosine(yf);
        n1  = p_perlin[of&PERLIN_SIZE];
        n1 += rxf*(p_perlin[(of+1)&PERLIN_SIZE]-n1);
        n2  = p_perlin[(of+PERLIN_YWRAP)&PERLIN_SIZE];
        n2 += rxf*(p_perlin[(of+PERLIN_YWRAP+1)&PERLIN_SIZE]-n2);
        n1 += ryf*(n2-n1);
        of += PERLIN_ZWRAP;
        n2  = p_perlin[of&PERLIN_SIZE];
        n2 += rxf*(p_perlin[(of+1)&PERLIN_SIZE]-n2);
        n3  = p_perlin[(of+PERLIN_YWRAP)&PERLIN_SIZE];
        n3 += rxf*(p_perlin[(of+PERLIN_YWRAP+1)&PERLIN_SIZE]-n3);
        n2 += ryf*(n3-n2);
        n1 += scaled_cosine(zf)*(n2-n1);
        r += n1*ampl;
        ampl *= perlin_amp_falloff;
        xi<<=1; xf*=2; yi<<=1; yf*=2; zi<<=1; zf*=2;
        if (xf>=1.0) { xi++; xf--; }
        if (yf>=1.0) { yi++; yf--; }
        if (zf>=1.0) { zi++; zf--; }
      }
      return r;
    };

    $.noiseDetail = function(lod, falloff) {
      if (lod>0)     { perlin_octaves=lod; }
      if (falloff>0) { perlin_amp_falloff=falloff; }
    };
    const Lcg = function(){
      const m = 4294967296;
      const a = 1664525;
      const c = 1013904223;
      let seed, z;
      return {
        setSeed(val) {
          z = seed = (val == null ? Math.random() * m : val) >>> 0;
        },
        getSeed() {
          return seed;
        },
        rand() {
          z = (a * z + c) % m;
          return z / m;
        }
      };
    };
    const Shr3 = function(){
      let jsr, seed;
      let m = 4294967295;
      return {
        setSeed(val){
          jsr = seed = (val == null ? Math.random() * m : val) >>> 0;
        },
        getSeed() {
          return seed;
        },
        rand() {
          jsr^=(jsr<<17);
          jsr^=(jsr>>13);
          jsr^=(jsr<<5);
          return (jsr>>>0)/m;
        }
      }
    }
    let rng1 = Shr3();
    rng1.setSeed();

    $.noiseSeed = function(seed) {
      let jsr = (seed == undefined) ? (Math.random()*4294967295) : seed;
      if (!p_perlin){
        p_perlin = new Float32Array(PERLIN_SIZE + 1);
      }
      for (var i = 0; i < PERLIN_SIZE + 1; i++) {
        jsr^=(jsr<<17);
        jsr^=(jsr>>13);
        jsr^=(jsr<<5);
        p_perlin[i] = (jsr>>>0)/4294967295;
      }
    };
    $.randomSeed = function(seed){
      rng1.setSeed(seed);
    }
    $.random = function(a,b){
      if (typeof a == 'number'){
        if (b != undefined){
          return rng1.rand()*(b-a)+a;
        }else{
          return rng1.rand()*a;
        }
      }else{
        return a[~~(a.length*rng1.rand())];
      }
    }
    $.randomGenerator = function(method){
      if (method == $.LCG){
        rng1 = Lcg();
      }else if (method == $.SHR3){
        rng1 = Shr3();
      }
      rng1.setSeed();
    }

    var ziggurat = new function() {
      //http://ziggurat.glitch.me/
      var iz;
      var jz;
      var kn = new Array(128);
      var ke = new Array(256);
      var hz;
      var wn = new Array(128);
      var fn = new Array(128);
      var we = new Array(256);
      var fe = new Array(256);
      var SHR3 = function() {
        return rng1.rand()*4294967296-2147483648;
      };
      var UNI = function() {
        return 0.5 + (SHR3()<<0) * 0.2328306e-9;
      };
    
      var RNOR = function() {
        hz = SHR3();
        iz = hz & 127;
        return Math.abs(hz) < kn[iz] ? hz * wn[iz] : nfix();
      };
      var REXP = function() {
        jz = SHR3()>>>0;
        iz = jz & 255;
        return jz < kn[iz] ? jz * we[iz] : efix();
      };
      var nfix = function() {
        var r = 3.44262;
        var x, y;
        var u1, u2;
        for (;;) {
          x = hz * wn[iz];
          if (iz == 0) {
            do {
              u1 = UNI();
              u2 = UNI();
              x = -Math.log(u1) * 0.2904764;
              y = -Math.log(u2);
            } while (y + y < x * x);
            return (hz > 0) ? (r + x) : (- r - x);
          }
    
          if (fn[iz] + UNI() * (fn[iz - 1] - fn[iz]) < Math.exp(-0.5 * x * x)) {
            return x;
          }
          hz = SHR3();
          iz = hz & 127;
          if (Math.abs(hz) < kn[iz]) {
            return hz * wn[iz];
          }
        }
        
      };
      var efix = function() {
        var x;
        for (;;) {
          if (iz == 0) {
            return 7.69711 - Math.log(UNI());
          }
          x = jz * we[iz];
          if (fe[iz] + UNI() * (fe[iz - 1] - fe[iz]) < Math.exp(-x)) {
            return x;
          }
          jz = SHR3();
          iz = jz & 255;
          if (jz < ke[iz]) {
            return jz * we[iz];
          }
        }
      };

      var zigset = function() {
        var m1 = 2147483648;
        var m2 = 4294967296;
        var dn = 3.442619855899;
        var tn = dn;
        var vn = 9.91256303526217e-3;
        var q;
        var de = 7.697117470131487;
        var te = de;
        var ve = 3.949659822581572e-3;
        var i;
        
        /* Tables for RNOR */
        q = vn / Math.exp(-0.5 * dn * dn);
        kn[0] = Math.floor((dn / q) * m1);
        kn[1] = 0;
        wn[0] = q / m1;
        wn[127] = dn / m1;
        fn[0] = 1;
        fn[127] = Math.exp(-0.5 * dn * dn);
        for (i = 126; i >= 1; i--) {
          dn = Math.sqrt(-2 * Math.log(vn / dn + Math.exp(-0.5 * dn * dn)));
          kn[i + 1] = Math.floor((dn / tn) * m1);
          tn = dn;
          fn[i] = Math.exp(-0.5 * dn * dn);
          wn[i] = dn / m1;
        }
        /*Tables for REXP */
        q = ve / Math.exp(-de);
        ke[0] = Math.floor((de / q) * m2);
        ke[1] = 0;
        we[0] = q / m2;
        we[255] = de / m2;
        fe[0] = 1;
        fe[255] = Math.exp(-de);
        for (i = 254; i >= 1; i--) {
          de = -Math.log(ve / de + Math.exp(-de));
          ke[i + 1] = Math.floor((de / te) * m2);
          te = de;
          fe[i] = Math.exp(-de);
          we[i] = de / m2;
        }
      };
      this.SHR3 = SHR3;
      this.UNI = UNI;
      this.RNOR = RNOR;
      this.REXP = REXP;
      this.zigset = zigset;
    }
    ziggurat.hasInit = false;

    $.randomGaussian = function(mean,std){
      if (!ziggurat.hasInit){
        ziggurat.zigset();
        ziggurat.hasInit = true;
      }
      return ziggurat.RNOR()*std+mean;
    }

    $.randomExponential = function(){
      if (!ziggurat.hasInit){
        ziggurat.zigset();
        ziggurat.hasInit = true;
      }
      return ziggurat.REXP();
    }


    //================================================================
    // ENVIRONMENT
    //================================================================

    $.print = console.log;
    $.cursor = function(name,x,y){
      let pfx = "";
      if (name.includes(".")){
        name = `url("${name}")`;
        pfx = ", auto";
      }
      if (x != undefined){
        name += " "+x+" "+y;
      }
      $.canvas.style.cursor = name+pfx;
    }
    $.noCursor = function(){
      $.canvas.style.cursor = "none";
    }

    //================================================================
    // DOM
    //================================================================

    $.createCapture = function(x){
      var vid = document.createElement("video");
      vid.playsinline="playsinline";
      vid.autoplay="autoplay";
      navigator.mediaDevices.getUserMedia(x).then(function(stream){
        vid.srcObject = stream;
      })
      vid.style.position="absolute";
      vid.style.opacity=0.00001;
      vid.style.zIndex =-1000;
      document.body.appendChild(vid);
      return vid;
    }

    
    //================================================================
    // EVENTS
    //================================================================


    let eventNames = [
      "setup","draw","preload",
      "mouseMoved","mousePressed","mouseReleased","mouseDragged","mouseClicked",
      "keyPressed","keyReleased","keyTyped",
      "touchStarted","touchEnded",
    ];
    for (let k of eventNames){
      let intern = "_"+k+"Fn";
      $[intern] = function(){};
      $[intern].isPlaceHolder = true;
      if ($[k]){
        $[intern] = $[k];
      }else{
        Object.defineProperty($, k, {
          set: function (fun) {$[intern] = fun;},
        });
      }
    }

    function _draw(){
      if (!$._noLoop){
        if ($._frameRate == null){
          looper = requestAnimationFrame(_draw);
        }else{
          looper = setTimeout(_draw,1000/$._frameRate);
        }
      }
      clearBuff();
      firstVertex = true;
      ctx.save();
      $._drawFn();
      ctx.restore();
      $.frameCount++;
    }
    
    $.noLoop = function(){
      $._noLoop = true;
      looper = null;
    }
    $.loop = function(){
      $._noLoop = false;
      if (looper == null){
        _draw();
      }
    }
    $.redraw = function(){
      _draw();
    }
    $.frameRate = function(fps){
      $._frameRate = fps;
    }
    
    setTimeout(function(){
      $._preloadFn();
      millisStart = window.performance.now();
      _start();
      function _start(){
        if (preloadCnt > 0){
          return setTimeout(_start,10);
        }
        // ctx.save();
        $._setupFn();
        // ctx.restore();
        _draw();
        
      };
    },1);
    
    $.canvas.onmousemove = function(event){
      
      $.pmouseX = $.mouseX;
      $.pmouseY = $.mouseY;
      $.mouseX = event.offsetX;
      $.mouseY = event.offsetY;

      if ($.mouseIsPressed){
        $._mouseDraggedFn(event);
      }else{
        $._mouseMovedFn(event);
      }
    }
    $.canvas.onmousedown = function(event){
      $.pmouseX = $.mouseX;
      $.pmouseY = $.mouseY;
      $.mouseX = event.offsetX;
      $.mouseY = event.offsetY;
      $.mouseIsPressed = true;
      $.mouseButton = [$.LEFT,$.CENTER,$.RIGHT][event.button];
      $._mousePressedFn(event);
    }
    $.canvas.onmouseup = function(event){
      $.pmouseX = $.mouseX;
      $.pmouseY = $.mouseY;
      $.mouseX = event.offsetX;
      $.mouseY = event.offsetY;
      $.mouseIsPressed = false;
      $._mouseReleasedFn(event); 
    }
    $.canvas.onclick = function(event){
      $.pmouseX = $.mouseX;
      $.pmouseY = $.mouseY;
      $.mouseX = event.offsetX;
      $.mouseY = event.offsetY;
      $.mouseIsPressed = true;
      $._mouseClickedFn(event); 
      $.mouseIsPressed = false;
    }
    window.addEventListener("keydown",function(event){
      $.keyIsPressed = true;
      $.key = event.key;
      $.keyCode = event.keyCode;
      keysHeld[$.keyCode] = true;
      $._keyPressedFn(event);
      if (event.key.length == 1){
        $._keyTypedFn(event);
      }
    })
    window.addEventListener("keyup",function(event){
      $.keyIsPressed = false;
      $.key = event.key;
      $.keyCode = event.keyCode;
      keysHeld[$.keyCode] = false;
      $._keyReleasedFn(event);
    })
    $.keyIsDown = function(x){
      return !!keysHeld[x];
    }


    function getTouchInfo(touch) {
      const rect = $.canvas.getBoundingClientRect();
      const sx = $.canvas.scrollWidth / $.width || 1;
      const sy = $.canvas.scrollHeight / $.height || 1;
      return {
        x: (touch.clientX - rect.left) / sx,
        y: (touch.clientY - rect.top) / sy,
        id: touch.identifier
      };
    }
    function isTouchUnaware(){
      return $._touchStarted.isPlaceHolder 
         &&  $._touchMoved.isPlaceHolder 
         &&  $._touchEnded.isPlaceHolder
    }
    $.canvas.ontouchstart = function(event){
      $.touches = event.touches.map(getTouchInfo);
      if (isTouchUnaware()){
        $.pmouseX = $.mouseX;
        $.pmouseY = $.mouseY;
        $.mouseX = $.touches[0].x;
        $.mouseY = $.touches[0].y;
        $.mouseIsPressed = true;
        $.mouseButton = $.LEFT;
        if (!$._mousePressedFn(event)){
          event.preventDefault();
        }
      }
      if (!$._touchStartedFn(event)){
        event.preventDefault();
      }

    }
    $.canvas.ontouchmove = function(event){
      $.touches = event.touches.map(getTouchInfo);
      if (isTouchUnaware()){
        $.pmouseX = $.mouseX;
        $.pmouseY = $.mouseY;
        $.mouseX = $.touches[0].x;
        $.mouseY = $.touches[0].y;
        $.mouseIsPressed = true;
        $.mouseButton = $.LEFT;
        if (!$._mouseDraggedFn(event)){
          event.preventDefault();
        }
      }
      if (!$._touchMovedFn(event)){
        event.preventDefault();
      }

    }
    $.canvas.ontouchend = $.canvas.ontouchcancel = function(event){
      $.touches = event.touches.map(getTouchInfo);
      if (isTouchUnaware()){
        $.pmouseX = $.mouseX;
        $.pmouseY = $.mouseY;
        $.mouseX = $.touches[0].x;
        $.mouseY = $.touches[0].y;
        $.mouseIsPressed = false;
        if (!$._mouseReleasedFn(event)){
          event.preventDefault();
        }
      }
      if (!$._touchEndedFn(event)){
        event.preventDefault();
      }
    }

    $.hasSensorPermission = ((!window.DeviceOrientationEvent) && (!window.DeviceMotionEvent)) || !(DeviceOrientationEvent.requestPermission || DeviceMotionEvent.requestPermission);
    $.requestSensorPermissions = function(){
      if (DeviceOrientationEvent.requestPermission){
        DeviceOrientationEvent.requestPermission()
        .then(response => {
          if (response == 'granted') {
            if (DeviceMotionEvent.requestPermission){
              DeviceMotionEvent.requestPermission()
              .then(response => {
                if (response == 'granted') {
                  $.hasSensorPermission = true;
                }
              })
              .catch(alert)
            }
          }
        })
        .catch(alert)
      }
    }

    //================================================================
    // SENSORS
    //================================================================

    // 3d transformation helpers
    let ROTX = a=> [1,0,0,0, 0,Math.cos(a),-Math.sin(a),0, 0,Math.sin(a),Math.cos(a),0, 0,0,0,1]
    let ROTY = a=> [Math.cos(a),0,Math.sin(a),0, 0,1,0,0, -Math.sin(a),0,Math.cos(a),0, 0,0,0,1]
    let MULT = (A,B)=> [(A)[0]*(B)[0]+(A)[1]*(B)[4]+(A)[2]*(B)[8]+(A)[3]*(B)[12],(A)[0]*(B)[1]+(A)[1]*(B)[5]+(A)[2]*(B)[9]+(A)[3]*(B)[13],(A)[0]*(B)[2]+(A)[1]*(B)[6]+(A)[2]*(B)[10]+(A)[3]*(B)[14],(A)[0]*(B)[3]+(A)[1]*(B)[7]+(A)[2]*(B)[11]+(A)[3]*(B)[15],(A)[4]*(B)[0]+(A)[5]*(B)[4]+(A)[6]*(B)[8]+(A)[7]*(B)[12],(A)[4]*(B)[1]+(A)[5]*(B)[5]+(A)[6]*(B)[9]+(A)[7]*(B)[13],(A)[4]*(B)[2]+(A)[5]*(B)[6]+(A)[6]*(B)[10]+(A)[7]*(B)[14],(A)[4]*(B)[3]+(A)[5]*(B)[7]+(A)[6]*(B)[11]+(A)[7]*(B)[15],(A)[8]*(B)[0]+(A)[9]*(B)[4]+(A)[10]*(B)[8]+(A)[11]*(B)[12],(A)[8]*(B)[1]+(A)[9]*(B)[5]+(A)[10]*(B)[9]+(A)[11]*(B)[13],(A)[8]*(B)[2]+(A)[9]*(B)[6]+(A)[10]*(B)[10]+(A)[11]*(B)[14],(A)[8]*(B)[3]+(A)[9]*(B)[7]+(A)[10]*(B)[11]+(A)[11]*(B)[15],(A)[12]*(B)[0]+(A)[13]*(B)[4]+(A)[14]*(B)[8]+(A)[15]*(B)[12],(A)[12]*(B)[1]+(A)[13]*(B)[5]+(A)[14]*(B)[9]+(A)[15]*(B)[13],(A)[12]*(B)[2]+(A)[13]*(B)[6]+(A)[14]*(B)[10]+(A)[15]*(B)[14],(A)[12]*(B)[3]+(A)[13]*(B)[7]+(A)[14]*(B)[11]+(A)[15]*(B)[15]]
    let TRFM = (A,v)=> [((A)[0]*(v)[0]+(A)[1]*(v)[1]+(A)[2]*(v)[2]+(A)[3])/((A)[12]*(v)[0]+(A)[13]*(v)[1]+(A)[14]*(v)[2]+(A)[15]),((A)[4]*(v)[0]+(A)[5]*(v)[1]+(A)[6]*(v)[2]+(A)[7])/((A)[12]*(v)[0]+(A)[13]*(v)[1]+(A)[14]*(v)[2]+(A)[15]),((A)[8]*(v)[0]+(A)[9]*(v)[1]+(A)[10]*(v)[2]+(A)[11])/((A)[12]*(v)[0]+(A)[13]*(v)[1]+(A)[14]*(v)[2]+(A)[15])]

    window.ondeviceorientation = function(event){
      $.pRotationX = $.rotationX;
      $.pRotationY = $.rotationY;
      $.pRotationZ = $.rotationZ;
      $.pRelRotationX = $.relRotationX;
      $.pRelRotationY = $.relRotationY;
      $.pRelRotationZ = $.relRotationZ;

      $.rotationX = event.beta *  (Math.PI / 180.0);
      $.rotationY = event.gamma * (Math.PI / 180.0);
      $.rotationZ = event.alpha * (Math.PI / 180.0);
      $.relRotationX = [-$.rotationY,-$.rotationX,$.rotationY][~~(window.orientation/90)+1];
      $.relRotationY = [-$.rotationX, $.rotationY,$.rotationX][~~(window.orientation/90)+1];
      $.relRotationZ = $.rotationZ;
    }
    window.ondevicemotion = function(event) {
      $.pAccelerationX = $.accelerationX
      $.pAccelerationY = $.accelerationY
      $.pAccelerationZ = $.accelerationZ
      if (!event.acceleration){ // devices that don't support plain acceleration
        // compute gravitational acceleration's component on X Y Z axes based on gyroscope
        // g = ~ 9.80665
        let grav = TRFM(MULT(
          ROTY($.rotationY),
          ROTX($.rotationX)
        ),[0,0,-9.80665]);
        $.accelerationX =  (event.accelerationIncludingGravity.x+grav[0]);
        $.accelerationY =  (event.accelerationIncludingGravity.y+grav[1]);
        $.accelerationZ =  (event.accelerationIncludingGravity.z-grav[2]);
      }
    }
    
    //================================================================
    // TIME
    //================================================================
    
    $.year = function(){
      return new Date().getFullYear();
    }
    $.day = function(){
      return new Date().getDay();
    }
    $.hour = function(){
      return new Date().getHours();
    }
    $.minute = function(){
      return new Date().getMinutes();
    }
    $.second = function(){
      return new Date().getSeconds();
    }
    $.millis = function(){
      return window.performance.now() - millisStart;
    }

  }

}
