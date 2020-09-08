// p5 addon compatibility layer (p5acl)
window.addons = {Element:function(a){this.elt=a},_elements:[],Color:Function}
window.p5 = window.addons;
window.p5.prototype=window.addons;
window.p5.prototype.registerMethod=function(){}
window.p5.prototype.registerPreloadMethod=function(){}
window.p5._validateParameters=function(){return true}