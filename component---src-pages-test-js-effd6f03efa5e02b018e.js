"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[672],{163:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(7294);r(1597);var i=r(181);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,u=[],a=!0,o=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(s){o=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return u}}(e,t)||(0,i.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=r(2982);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){return function(e){for(var t=2166136261,r=e.length,n=0;n<r;n++)t^=e.charCodeAt(n),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24);return t>>>0}(e)%1e3/1e3}function f(e){return e<=0?[]:new Array(e).fill(1/e)}var h={};function v(e,t){if("$or"in t)return p(e,t.$or);if("$nor"in t)return!p(e,t.$nor);if("$and"in t)return function(e,t){for(var r=0;r<t.length;r++)if(!v(e,t[r]))return!1;return!0}(e,t.$and);if("$not"in t)return!v(e,t.$not);for(var r=0,n=Object.entries(t);r<n.length;r++){var i=u(n[r],2),a=i[0];if(!g(i[1],d(e,a)))return!1}return!0}function d(e,t){for(var r=t.split("."),n=e,i=0;i<r.length;i++){if(!n||"object"!=typeof n||!(r[i]in n))return null;n=n[r[i]]}return n}function g(e,t){if("string"==typeof e)return t+""===e;if("number"==typeof e)return 1*t===e;if("boolean"==typeof e)return!!t===e;if(Array.isArray(e)||!y(e))return JSON.stringify(t)===JSON.stringify(e);for(var r in e)if(!b(r,t,e[r]))return!1;return!0}function y(e){var t=Object.keys(e);return t.length>0&&t.filter((function(e){return"$"===e[0]})).length===t.length}function b(e,t,r){switch(e){case"$eq":return t===r;case"$ne":return t!==r;case"$lt":return t<r;case"$lte":return t<=r;case"$gt":return t>r;case"$gte":return t>=r;case"$exists":return r?null!==t:null===t;case"$in":return r.includes(t);case"$nin":return!r.includes(t);case"$not":return!g(r,t);case"$size":return!!Array.isArray(t)&&g(r,t.length);case"$elemMatch":return function(e,t){if(!Array.isArray(e))return!1;for(var r=y(t)?function(e){return g(t,e)}:function(e){return v(e,t)},n=0;n<e.length;n++)if(e[n]&&r(e[n]))return!0;return!1}(t,r);case"$all":if(!Array.isArray(t))return!1;for(var n=0;n<r.length;n++){for(var i=!1,u=0;u<t.length;u++)if(g(r[n],t[u])){i=!0;break}if(!i)return!1}return!0;case"$regex":try{return(a=r,h[a]||(h[a]=new RegExp(a.replace(/([^\\])\//g,"$1\\/"))),h[a]).test(t)}catch(o){return!1}case"$type":return function(e){if(null===e)return"null";if(Array.isArray(e))return"array";var t=typeof e;return["string","number","boolean","object","undefined"].includes(t)?t:"unknown"}(t)===r;default:return console.error("Unknown operator: "+e),!1}var a}function p(e,t){if(!t.length)return!0;for(var r=0;r<t.length;r++)if(v(e,t[r]))return!0;return!1}function k(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,u=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw u}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O="undefined"!=typeof window&&"undefined"!=typeof document,A=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),_(this,"_renderer",null),_(this,"_trackedExperiments",new Set),_(this,"_trackedFeatures",{}),_(this,"debug",!1),_(this,"subscriptions",new Set),_(this,"_rtQueue",[]),_(this,"_rtTimer",0),_(this,"assigned",new Map),_(this,"_forcedFeatureValues",new Map),_(this,"_attributeOverrides",{}),this.context=t,O&&!t.disableDevTools&&(window._growthbook=this,document.dispatchEvent(new Event("gbloaded")))}var t,r,n;return t=e,r=[{key:"render",value:function(){this._renderer&&this._renderer()}},{key:"setFeatures",value:function(e){this.context.features=e,this.render()}},{key:"setAttributes",value:function(e){this.context.attributes=e,this.render()}},{key:"setAttributeOverrides",value:function(e){this._attributeOverrides=e,this.render()}},{key:"setForcedVariations",value:function(e){this.context.forcedVariations=e||{},this.render()}},{key:"setForcedFeatures",value:function(e){this._forcedFeatureValues=e,this.render()}},{key:"getAttributes",value:function(){return x(x({},this.context.attributes),this._attributeOverrides)}},{key:"getFeatures",value:function(){return this.context.features||{}}},{key:"subscribe",value:function(e){var t=this;return this.subscriptions.add(e),function(){t.subscriptions.delete(e)}}},{key:"getAllResults",value:function(){return new Map(this.assigned)}},{key:"destroy",value:function(){this.subscriptions.clear(),this.assigned.clear(),this._trackedExperiments.clear(),this._trackedFeatures={},this._rtQueue=[],this._rtTimer&&clearTimeout(this._rtTimer),O&&window._growthbook===this&&delete window._growthbook}},{key:"setRenderer",value:function(e){this._renderer=e}},{key:"forceVariation",value:function(e,t){this.context.forcedVariations=this.context.forcedVariations||{},this.context.forcedVariations[e]=t,this.render()}},{key:"run",value:function(e){var t=this._run(e,null);return this.fireSubscriptions(e,t),t}},{key:"fireSubscriptions",value:function(e,t){var r=e.key,n=this.assigned.get(r);n&&n.result.inExperiment===t.inExperiment&&n.result.variationId===t.variationId||(this.assigned.set(r,{experiment:e,result:t}),this.subscriptions.forEach((function(r){try{r(e,t)}catch(n){console.error(n)}})))}},{key:"trackFeatureUsage",value:function(e,t){var r=this;if("override"!==t.source){var n=JSON.stringify(t.value);if(this._trackedFeatures[e]!==n){if(this._trackedFeatures[e]=n,this.context.onFeatureUsage)try{this.context.onFeatureUsage(e,t)}catch(i){}O&&window.fetch&&(this._rtQueue.push({key:e,on:t.on}),this._rtTimer||(this._rtTimer=window.setTimeout((function(){r._rtTimer=0;var e=(0,a.Z)(r._rtQueue);r._rtQueue=[],r.context.realtimeKey&&window.fetch("https://rt.growthbook.io/?key=".concat(r.context.realtimeKey,"&events=").concat(encodeURIComponent(JSON.stringify(e))),{cache:"no-cache",mode:"no-cors"}).catch((function(){}))}),this.context.realtimeInterval||2e3)))}}}},{key:"getFeatureResult",value:function(e,t,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a={value:t,on:!!t,off:!t,source:r,ruleId:n||""};return i&&(a.experiment=i),u&&(a.experimentResult=u),this.trackFeatureUsage(e,a),a}},{key:"isOn",value:function(e){return this.evalFeature(e).on}},{key:"isOff",value:function(e){return this.evalFeature(e).off}},{key:"getFeatureValue",value:function(e,t){var r;return null!==(r=this.evalFeature(e).value)&&void 0!==r?r:t}},{key:"feature",value:function(e){return this.evalFeature(e)}},{key:"evalFeature",value:function(e){var t;if(this._forcedFeatureValues.has(e))return this.getFeatureResult(e,this._forcedFeatureValues.get(e),"override");if(!this.context.features||!this.context.features[e])return this.getFeatureResult(e,null,"unknownFeature");var r=this.context.features[e];if(r.rules){var n,i=k(r.rules);try{for(i.s();!(n=i.n()).done;){var u=n.value;if(!u.condition||this.conditionPasses(u.condition)){if("force"in u){if("coverage"in u){var a=this.getHashAttribute(u.hashAttribute).hashValue;if(!a)continue;if(l(a+e)>u.coverage)continue}return this.getFeatureResult(e,u.force,"force",u.id)}if(u.variations){var o={variations:u.variations,key:u.key||e};"coverage"in u&&(o.coverage=u.coverage),u.weights&&(o.weights=u.weights),u.hashAttribute&&(o.hashAttribute=u.hashAttribute),u.namespace&&(o.namespace=u.namespace);var s=this._run(o,e);if(this.fireSubscriptions(o,s),s.inExperiment)return this.getFeatureResult(e,s.value,"experiment",u.id,o,s)}}}}catch(c){i.e(c)}finally{i.f()}}return this.getFeatureResult(e,null!==(t=r.defaultValue)&&void 0!==t?t:null,"defaultValue")}},{key:"conditionPasses",value:function(e){return v(this.getAttributes(),e)}},{key:"_run",value:function(e,t){var r=e.key,n=e.variations.length;if(n<2)return this.getResult(e,-1,!1,t);if(!1===this.context.enabled)return this.getResult(e,-1,!1,t);e=this.mergeOverrides(e);var i=function(e,t,r){if(!t)return null;var n=t.split("?")[1];if(!n)return null;var i=n.replace(/#.*/,"").split("&").map((function(e){return e.split("=",2)})).filter((function(t){return u(t,1)[0]===e})).map((function(e){var t=u(e,2)[1];return parseInt(t)}));return i.length>0&&i[0]>=0&&i[0]<r?i[0]:null}(r,this.getContextUrl(),n);if(null!==i)return this.getResult(e,i,!1,t);if(this.context.forcedVariations&&r in this.context.forcedVariations){var a=this.context.forcedVariations[r];return this.getResult(e,a,!1,t)}if("draft"===e.status||!1===e.active)return this.getResult(e,-1,!1,t);var o=this.getHashAttribute(e.hashAttribute).hashValue;if(!o)return this.getResult(e,-1,!1,t);if(e.namespace&&!function(e,t){var r=l(e+"__"+t[0]);return r>=t[1]&&r<t[2]}(o,e.namespace))return this.getResult(e,-1,!1,t);if(e.include&&!function(e){try{return e()}catch(t){return console.error(t),!1}}(e.include))return this.getResult(e,-1,!1,t);if(e.condition&&!this.conditionPasses(e.condition))return this.getResult(e,-1,!1,t);if(e.groups&&!this.hasGroupOverlap(e.groups))return this.getResult(e,-1,!1,t);if(e.url&&!this.urlIsValid(e.url))return this.getResult(e,-1,!1,t);var s,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2?arguments[2]:void 0;t<0?t=0:t>1&&(t=1);var n=f(e);(r=r||n).length!==e&&(r=n);var i=r.reduce((function(e,t){return t+e}),0);(i<.99||i>1.01)&&(r=n);var u=0;return r.map((function(e){var r=u;return u+=e,[r,r+t*e]}))}(n,e.coverage||1,e.weights),h=function(e,t){for(var r=0;r<t.length;r++)if(e>=t[r][0]&&e<t[r][1])return r;return-1}(l(o+r),c);if(h<0)return this.getResult(e,-1,!1,t);if("force"in e)return this.getResult(e,null!==(s=e.force)&&void 0!==s?s:-1,!1,t);if(this.context.qaMode)return this.getResult(e,-1,!1,t);if("stopped"===e.status)return this.getResult(e,-1,!1,t);var v=this.getResult(e,h,!0,t);return this.track(e,v),v}},{key:"log",value:function(e,t){this.debug&&(this.context.log?this.context.log(e,t):console.log(e,t))}},{key:"track",value:function(e,t){if(this.context.trackingCallback){var r=e.key,n=t.hashAttribute+t.hashValue+r+t.variationId;if(!this._trackedExperiments.has(n)){this._trackedExperiments.add(n);try{this.context.trackingCallback(e,t)}catch(i){console.error(i)}}}}},{key:"mergeOverrides",value:function(e){var t=e.key,r=this.context.overrides;return r&&r[t]&&"string"==typeof(e=Object.assign({},e,r[t])).url&&(e.url=function(e){try{var t=e.replace(/([^\\])\//g,"$1\\/");return new RegExp(t)}catch(r){return void console.error(r)}}(e.url)),e}},{key:"getHashAttribute",value:function(e){var t=e||"id",r="";return this._attributeOverrides[t]?r=this._attributeOverrides[t]:this.context.attributes?r=this.context.attributes[t]||"":this.context.user&&(r=this.context.user[t]||""),{hashAttribute:t,hashValue:r}}},{key:"getResult",value:function(e,t,r,n){var i=!0;(t<0||t>=e.variations.length)&&(t=0,i=!1);var u=this.getHashAttribute(e.hashAttribute),a=u.hashAttribute,o=u.hashValue;return{featureId:n,inExperiment:i,hashUsed:r,variationId:t,value:e.variations[t],hashAttribute:a,hashValue:o}}},{key:"getContextUrl",value:function(){return this.context.url||(O?window.location.href:"")}},{key:"urlIsValid",value:function(e){var t=this.getContextUrl();if(!t)return!1;var r=t.replace(/^https?:\/\//,"").replace(/^[^/]*\//,"/");return!!e.test(t)||!!e.test(r)}},{key:"hasGroupOverlap",value:function(e){for(var t=this.context.groups||{},r=0;r<e.length;r++)if(t[e[r]])return!0;return!1}}],r&&c(t.prototype,r),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var R=n.createContext({});var F=function(e){var t=e.children,r=e.growthbook,i=u(n.useState(0),2),a=(i[0],i[1]);return n.useEffect((function(){if(r&&r.setRenderer)return r.setRenderer((function(){a((function(e){return e+1}))})),function(){r.setRenderer((function(){}))}}),[r]),n.createElement(R.Provider,{value:{growthbook:r}},t)},$=function(){var e=n.useContext(R).growthbook;console.log(e);var t=e.getFeatureValue("h1-title","fallback value").template;return n.createElement("div",null,t,"  ")},V="undefined"!=typeof window,j=V?localStorage.getItem("visitor_id"):null;!j&&V&&(j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}(),localStorage.setItem("visitor_id",j));var E=function(){var e=new A({attributes:{id:j},trackingCallback:function(e,t){console.log({experimentId:e.key,variationId:t.variationId})}});return(0,n.useEffect)((function(){fetch("https://cdn.growthbook.io/api/features/key_prod_44d484e96e728eca").then((function(e){return e.json()})).then((function(t){console.log(t),e.setFeatures(t.features)}))}),[]),n.createElement(F,{growthbook:e},n.createElement("div",null,n.createElement($,null)))}}}]);
//# sourceMappingURL=component---src-pages-test-js-effd6f03efa5e02b018e.js.map