!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);const i=o()("ul",{id:"list"},[o()("li",{class:"item"},["Item 1"]),o()("li",{class:"item"},["Item 2"]),o()("li",{class:"item"},["Item 3"])]).render();document.body.appendChild(i)},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(3),i=n(6);r.default.diff=o.default,r.default.patch=i.default,t.default=r.default},function(e,t,n){"use strict";n.r(t);var r=n(2);class o{constructor(e,t,n){r.default.isArray(t)&&(n=t,t={}),this.tagName=e,this.attrs=t,this.children=n,this.key=t?t.key:""}render(){const e=document.createElement(this.tagName),t=this.attrs;for(const n in t)r.default.setAttr(e,n,t[n]);return(this.children||[]).forEach(t=>{const n=t instanceof o?t.render():document.createTextNode(t);e.appendChild(n)}),e}}t.default=(e,t,n)=>new o(e,t,n)},function(e,t,n){"use strict";n.r(t);const r={setAttr(e,t,n){switch(t){case"style":e.style.cssText=n;break;case"value":{let r=e.TagName||"";"input"===(r=r.toLowerCase())||"textarea"===r?e.value=n:e.setAttribute(t,n);break}default:e.setAttribute(t,n)}},slice:(e,t)=>Array.prototype.slice.call(e,t),type:e=>Object.prototype.toString.call(e).replace(/\[object\s|\]/,""),isArray:e=>"Array"===r.type(e),toArray:e=>e?Array.from(e):[],isString:e=>"String"===r.type(e),isElementNode:e=>1===e.nodeType};t.default=r},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(4),i=n(5);let u=0;t.default=function(e,t){let n={};return function e(t,n,c,l){const s=[];null==t||(r.default.isString(t)&&r.default.isString(n)?t!==n&&s.push({type:i.TEXT,content:n}):t.tagName===n.tagName&&t.key===n.key?(function(e,t){let n,r=0,o=e.attrs,i=t.attrs,u={};for(const e in o)n=o[e],i[e]!==n&&(r++,u[e]=i[e]);for(const e in i)n=i[e],o.hasOwnProperty(e)||(r++,u[e]=n);return 0===r?null:u}(t,n)&&s.push({type:i.ATTRS,attrs:attrPatches}),function(t,n,r,c,l){let s=Object(o.default)(t,n,"key");if(n=s.children,s.moves.length){let e={type:i.REORDER,moves:s.moves};l.push(e)}let a=r;t.forEach((t,r)=>{u++,e(t,n[r],a=u,c)})}(t.children,n.children,c,l,s)):s.push({type:i.REPLACE,node:n})),s.length&&(l[c]=s)}(e,t,0,n),n}},function(e,t,n){"use strict";function r(e,t){let n={},r=[];for(let i=0,u=e.length;i<u;i++){let u=e[i],c=o(u,t);c?n[c]=i:r.push(u)}return{keyIndexMap:n,free:r}}function o(e,t){if(e&&t)return"string"==typeof t?e[t]:t(e)}n.r(t),t.default=function(e,t,n){const i=r(e,n),u=r(t,n),c=u.free,l=i.keyIndexMap,s=u.keyIndexMap,a=[],f=[];let d,p=0;for(;p<e.length;){const r=o(e[p],n);if(r)if(l.hasOwnProperty(r)){const e=s[r];f.push(t[e])}else f.push(null);else{const e=c[d++];f.push(e||null)}p++}const y=f.slice(0);for(p=0;p<y.length;)null===y[p]?(m(p),E(p)):p++;let h=p=0;for(;p<t.length;){item=t[p],itemKey=o(item,n);let e=y[h],r=o(e,n);e?itemKey===r?h++:o(y[h+1],n)===itemKey?(m(p),E(h),h++):b(p,item):b(p,item),p++}function m(e){const t={index:e,type:0};a.push(t)}function b(e,t){let n={index:e,item:t,type:1};a.push(n)}function E(e){y.splice(e,1)}return{moves:a,children:f}}},function(e,t,n){"use strict";n.r(t),n.d(t,"REPLACE",function(){return r}),n.d(t,"ATTRS",function(){return o}),n.d(t,"TEXT",function(){return i}),n.d(t,"REORDER",function(){return u});const r=0,o=1,i=2,u=3},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(5);function i(e,t){!function e(t,n,i){const u=i[n.index];(r.default.isArray(t.childNodes)?t.childNodes:[]).forEach(t=>{n.index++,e(t,n,i)}),function(e,t){console.log(t,"currentPatches"),t.forEach(t=>{switch(t.type){case o.REPLACE:{let n;n="string"==typeof t.node?document.createTextNode(t.node):t.render(),e.parentNode.replaceChild(n,e);break}case o.REORDER:!function(e,t){const n=r.default.toArray(e.childNodes),o={};n.forEach(e=>{if(r.default.isElementNode(e)){const t=e.getAttribute("key");t&&(o[t]=e)}}),t.forEach(t=>{const r=t.index;if(0===t.type)n[r]===e.childNodes[r]&&e.removeChild(e.childNodes[r]),n.splice(r,1);else if(1===t.type){let i=o[t.item.key]?o[t.item.key]:"object"==typeof t.item?t.item.render():document.createTextNode(t.item);n.splice(r,0,i),e.insertBefore(i,e.childNodes[r]||null)}})}(e,t.moves);break;case o.ATTRS:!function(e,t){for(const n in t)void 0===t[n]?e.removeAttribute(n):(value=t[n],r.default.setAttr(e,n,value))}(e,t.attrs);break;case o.TEXT:e.textContent?e.textContent=t.content:e.nodeValue=t.content;break;default:throw new Error("Unknown patch type "+currentPatch.type)}})}(t,u)}(e,{index:0},t)}i.REPLACE=o.REPLACE,i.ATTRS=o.ATTRS,i.TEXT=o.TEXT,i.REORDER=o.REORDER,t.default=i}]).default}]);