import{a as c}from"./_getAllKeys.4291a623.js";import{S as a,i as p,g as m}from"./isArrayLikeObject.10b615a9.js";var u=a?a.isConcatSpreadable:void 0;function _(n){return p(n)||m(n)||!!(u&&n&&n[u])}function l(n,t,r,s,o){var e=-1,f=n.length;for(r||(r=_),o||(o=[]);++e<f;){var i=n[e];t>0&&r(i)?t>1?l(i,t-1,r,s,o):c(o,i):s||(o[o.length]=i)}return o}function b(n){var t=n==null?0:n.length;return t?l(n,1):[]}function h(n){return n===void 0}export{l as b,b as f,h as i};