# q5.js


q5.js is a small and fast alternative (experimental) implementation of [p5.js](https://p5js.org), the client-side JS platform for creative expression on the web. q5.js is mostly code-compatible with p5.js, meaning you can simply swap out the library link in an existing sketch and expect it to work with minimal modification. It inherits most of its good stuff from p5.js, though it puts more emphasis on following aspects:

- **lightweight**: 33KB minified (p5.min.js 1.1.9 is 800+KB). ([Smaller libraries have smaller carbon footprint!](https://observablehq.com/@mrchrisadams/carbon-footprint-of-sending-data-around))
- **fast**: It does so by being a thinner wrapper on Canvas/Web API, skipping parameter validation, and using faster algorithms wherever possible.

Currently, q5.js supports almost all of p5.js's 2D drawing API's, most of its math functionality, and other utilities. It does not support 3D yet; 3D support will likely come as an extension to keep the main library lightweight. It excludes DOM and sound functionalities, though it is mostly compatible with p5.sound.js and p5.dom.js.

To explore supported functionalities, check out these q5 renditions of the standard p5 examples on [this page](https://q5xjs.netlify.app).

q5.js can also be used with the p5 online Web Editor (editor.p5js.org). [Example](https://editor.p5js.org/lingdong/sketches/xrT2VF08P).

Here's a quick sampling of q5.js usage (in case you're not familiar with p5):

```js
new Q5("global"); //initialize q5
// alternatively use `const q=new Q5()` to contain all q5 functions inside a namespace.

// the rest just looks like a regular p5.js sketch:

function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
  } else {
    rect(25, 25, 50, 50);
  }
};

```

q5.js is currently experimental; Feel free to point out any issues.

## Download

| ⬇︎<br>[&nbsp;&nbsp;&nbsp;&nbsp;q5.js&nbsp;&nbsp;&nbsp;&nbsp;<br>](https://cdn.jsdelivr.net/gh/LingDong-/q5xjs/q5.js)<sub>65KB</sub>  |  ⬇︎<br>[q5.min.js<br>](https://cdn.jsdelivr.net/gh/LingDong-/q5xjs/q5.min.js)<sub>33KB</sub> |
|---|---|

To use, put this line in your HTML:

```html
<script src="q5.min.js"></script>
```

or via CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/LingDong-/q5xjs/q5.min.js"></script>
```

## Table of Contents

- [Download](#download)
- [Motivation](#motivation)
- [Key Differences with p5](#key-differences-with-p5)
- [Extra Features](#extra-features)
- [Using p5 Addons](#using-p5-addons)
- [Benchmarks](#benchmarks)

## Motivation

After having used many graphics libraries across many different languages, I have found that the Processing/p5.js/Openframeworks system has one huge advantage over others: 

It gets stuff drawn onto the screen quick and easy! 

This might sound silly, but it actually means a lot for people concerned with creative expression. The easier it is to try different things, the more possibilities you can try (before time and/or patience run out), and the greater the chance that you'll get something nice in the end. Therefore, although you can theoretically achieve the exact same result in any decent graphics system, the tool does matter in practice: You want more time to spend actually working on how your piece looks, instead of spending it on wondering why the computer doesn't work as you intend.


[Where](https://www.cmu.edu/cfa/studio/index.html) I studied computational art, p5.js is taught as "the" framework for the web, and it's been a great introduction. However, due to some of the ways in which p5.js is implemented, I find myself using it less and less as I make more and more projects. Instead I reach directly for the JavaScript/Web API's (which are also well designed enough). I sometimes think of this as shedding the "baby" wheels on the bicycle. But then I miss the artist-centered logic of the p5 interface! I'm now thinking: is there a better way?

To clarify: I think the official p5.js implementation is perfectly justified for its philosophy and suitability for its intended purpose, but my own needs are different enough that I think they justify another implementation instead of pull requests to the official one.


In fact, it is not uncommon for successful software systems to have multiple implementations under one spec (think: compilers of C, implementations of SQL, and engines of JavaScript): The user can choose a backend that best suits their goals or needs. The distinction between the "spec" and the "implementation" is a good idea: when one is using p5.js (or Processing or OpenFrameworks), what one is really using is the same set of commands, the intuitive way of describing drawings, that empowers creative expression. The actual way these commands are implemented internally is incidental; it should be possible to swap internal implementations as necessary.


q5.js aims to:

- ✅ be mostly code-compatible with p5.js.
- ✅ keep being very simple and lightweight.
- ✅ be a very thin wrapper around Canvas/Web API: think of it as a collection of syntactic sugars.
- ✅ be fast.

q5.js does NOT not aim to:

- ❌ replace p5.js.
- ❌ be beginner friendly.
- ❌ simulate completely identical behavior for current and future versions of p5.js.


## Key Differences with p5


### I. "Namespaced Mode" 🏷️

#### p5

In **p5.js**, all p5 functions are in the global namespace, unless you use "instance" mode, like this:

```js

let sketch = function(p) {
  p.setup = function() {
    p.createCanvas(100,100);
  };
  p.draw = function(){
    p.background(0);
  }
};

let myp5 = new p5(sketch);

```

This does solve the problem of global namespace pollution, but there're still some inconveniences:

- The extra wrapping of the `sketch` function makes code look complex. (Flat is better than nested!)
- Variables inside `sketch` can no longer be accessed via browser console, which makes it less convenient for debugging.


#### q5

**q5** introduces "namespace" mode in place of global/instance mode:

```js
let q5 = new Q5();

q5.setup = function(){
  q5.createCanvas(100,100);
}

q5.draw = function(){
  q5.background(0);
}

```

You can call the namespace whatever you like. You can even get multiple instances of q5 running on the same page easily.

```js
let q5 = new Q5();
let q6 = new Q5();

q5.setup = function(){
  q5.background(255);
}

q6.setup = function(){
  q6.background(0);
}

```

Of course, you can still have the good old global namespacing via `Q5("global")`, making q5.js mostly code-compatible with existing p5 sketches:

```js

new Q5("global");

function setup(){
  background(0);
}

function draw(){
  
}

```

### II. q5 Functions Anywhere 🌏

#### p5

In **p5.js**, most functions can only be used inside `setup()`, `draw()` etc. Otherwise, you might see something like this:

```
Did you just try to use p5.js's stroke() function? If so, you may want to move it 
into your sketch's setup() function.

```

#### q5

**q5.js** functions can be used anywhere, it doesn't really matter!

In fact, you can do away with the setup function all together. Just write your initialization routines at the top level.

For example, you can now directly run examples on [p5js.org/reference](https://p5js.org/reference) without wrapping them in setup manually:

```js
new Q5("global");

noStroke();
let c = color(0, 126, 255, 102);
fill(c);
rect(15, 15, 35, 70);

```

You can even roll out your own animation loop in place of `draw()`. Good for mixing with other libraries too.

```js

new Q5("global");

fill(255,0,0);

function myLoop(){
  requestAnimationFrame(myLoop);
  rect(15, 15, 35, 70);
}
myLoop();


```

Though of course the `setup()` and `draw()` functions are still there if you need them.


### III. HES 🐞

#### p5

**p5.js** has a nice feature called Friendly Error System (FES). It makes guesses about what you might have done wrong and put it to you via friendly language. 

#### q5

**q5.js** does not help with your bad code. It WILL break and/or crash if you feed it the wrong stuff. 

### IV. No Magic 🎩

#### p5

**p5.js** has some pretty smart features. For example, it can parse out a color from your strings like `color('hsl(160, 100%, 50%)')` or `color("lightblue")`. Functions behave sightly differently when under different "modes" (e.g. `hue`), and some have secret default settings. (e.g. `arc` and `text`)

#### q5

**q5.js** is pretty dumb. It will only do things when you communicate the command to it in the simplest way, and executes them in the most unimaginative way. This means that functions mainly just take numeric inputs (except `text()` of course), and any behavior needs to be explicitly triggered. You can expect q5 to have almost no overhead between digesting your parameters and putting them into use.


## Extra Features

q5.js provides following features that are not in p5.js:

- `randomExponential()` in addition to `randomGaussian()`: a random distribution that resembles exponential decay.
- `curveAlpha()`: manipulate the `α` parameter of Catmull-Rom curves.
- `relRotationX`, `relRotationY` and `relRotationZ`: Similar to `rotationX/Y/Z`, but are relative to the orientation of the mobile device.


## Using p5 Addons

q5.js is mostly compatible with p5 addons. The only issue is that the addons usually expect a global object called `p5` for them to append methods to (among a couple other things), which `q5` naturally does not provide.

As a solution, q5 provides a special file called `q5.p5acl.js` (p5 addon compatibility layer) which you can link to in your HTML before any p5 addons. For example:

```html
<script src="q5.min.js"></script>
<script src="q5.p5acl.js"></script>

<!-- followed by p5 addons -->
<script src="p5.sound.js"></script>
<script src="p5.xyz.js"></script>
```

After which you'll be able to access functionalities from p5 addons under a global `addons` object, for example:

```js
let sfx = addons.loadSound("music.mp3");
```


## Benchmarks

q5.js has significant speed advantage in imaging operations because it uses hardware accelerated Canvas API directly whenever possible, instead of going over pixel by pixel. Most other functionalities have very marginal speed improvements (or none at all when parameter validation overhead is negligible). The operations with important performance differences are listed below.

The following benchmarks are generated with Google Chrome 84, on an old-ish Macbook Pro 2015 (with lots of apps and tabs running); Performance varies depending on software and hardware.

p5.js version used is **1.1.9**.


| Operation on 1024x1024 image | p5.js | q5.js |
|---|---|---|
| tinting | 20FPS | 35FPS |
| blurring(11px) | 0FPS | 40FPS * |
| thresholding | 10FPS | 40FPS * |
| grayscaling | 10FPS | 50FPS * |
| inverting | 10FPS | 50FPS * |
| opaque | 20FPS | 60FPS |
| erode/dilate | 5FPS | 9FPS |


| Misc | p5.js | q5.js |
|---|---|---|
| Generating 10,000 `randomGaussian()` sample | 10FPS | 20FPS|
| Calling `noiseSeed()` 1,000 times | 10FPS | 60FPS |
| Generate 10,000 (random) colors with `color(r,g,b)` | 5FPS | 60FPS |
| Rotate a `Vector` 1,000,000 times | 13FPS | 60FPS |

<sub>\* Only for browsers that support CanvasRenderingContext2D.filter ([75% of all](https://caniuse.com/#feat=mdn-api_canvasrenderingcontext2d_filter) as of Aug 2020, including Chrome, Firefox and Edge). For those that don't, performance is similar to p5.js, as identical implementations are usually used as fallbacks.</sub>

Speed is a goal for q5.js, and we would very much like to see the above list grow. If you know how to make something faster, advice/pull requests are very welcome.

