module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r){e.exports=function(e){if("string"!=typeof e)throw new TypeError("PlayString wants a string!");return e.replace(/\s/g,"")}},function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n);function u(e){if("string"!=typeof e)throw new TypeError("This function requires a string parameter");return[...e.replace(/[\W\d_]/g,"")].map(e=>e===e.toUpperCase()?`-${e.toLowerCase()}`:e).join("")}function i(e){return e.replace(/([A-Z])/g,e=>` ${e}`).replace(/^./,e=>e.toUpperCase()).trim()}t.d(r,"playstring",(function(){return o.a})),t.d(r,"spaceCase",(function(){return u})),t.d(r,"titleCase",(function(){return i}))}]);