!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){!function(t,n){n(e)}(this,function(t){function e(t,e,n){this.nodeName=t,this.attributes=e,this.children=n,this.key=e&&e.key}function n(t,n){var o,r,i,a,s=[];for(a=arguments.length;a-- >2;)B.push(arguments[a]);for(n&&n.children&&(B.length||B.push(n.children),delete n.children);B.length;)if((r=B.pop())instanceof Array)for(a=r.length;a--;)B.push(r[a]);else null!=r&&r!==!1&&("number"!=typeof r&&r!==!0||(r=String(r)),i="string"==typeof r,i&&o?s[s.length-1]+=r:(s.push(r),o=i));var u=new e(t,n||void 0,s);return M.vnode&&M.vnode(u),u}function o(t,e){if(e)for(var n in e)t[n]=e[n];return t}function r(t){return o({},t)}function i(t,e){for(var n=e.split("."),o=0;o<n.length&&t;o++)t=t[n[o]];return t}function a(t){return"function"==typeof t}function s(t){return"string"==typeof t}function u(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function c(t,e){return n(t.nodeName,o(r(t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function l(t,e,n){var o=e.split(".");return function(e){for(var r=e&&e.target||this,a={},u=a,c=s(n)?i(e,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:e,l=0;l<o.length-1;l++)u=u[o[l]]||(u[o[l]]=!l&&t.state[o[l]]||{});u[o[l]]=c,t.setState(a)}}function p(t){!t._dirty&&(t._dirty=!0)&&1==J.push(t)&&(M.debounceRendering||H)(f)}function f(){var t,e=J;for(J=[];t=e.pop();)t._dirty&&T(t)}function h(t){var e=t&&t.nodeName;return e&&a(e)&&!(e.prototype&&e.prototype.render)}function d(t,e){return t.nodeName(m(t),e||G)}function v(t,e){return s(e)?t instanceof Text:s(e.nodeName)?!t._componentConstructor&&y(t,e.nodeName):a(e.nodeName)?!t._componentConstructor||t._componentConstructor===e.nodeName||h(e):void 0}function y(t,e){return t.normalizedNodeName===e||F(t.nodeName)===F(e)}function m(t){var e=r(t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function g(t){var e=t.parentNode;e&&e.removeChild(t)}function b(t,e,n,o,r){if("className"===e&&(e="class"),"class"===e&&o&&"object"==typeof o&&(o=u(o)),"key"===e);else if("class"!==e||r)if("style"===e){if((!o||s(o)||s(n))&&(t.style.cssText=o||""),o&&"object"==typeof o){if(!s(n))for(var i in n)i in o||(t.style[i]="");for(var i in o)t.style[i]="number"!=typeof o[i]||K[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===e)t.innerHTML=o&&o.__html||"";else if("o"==e[0]&&"n"==e[1]){var c=t._listeners||(t._listeners={});e=F(e.substring(2)),o?c[e]||t.addEventListener(e,_,!!$[e]):c[e]&&t.removeEventListener(e,_,!!$[e]),c[e]=o}else if("list"!==e&&"type"!==e&&!r&&e in t)k(t,e,null==o?"":o),null!=o&&o!==!1||t.removeAttribute(e);else{var l=r&&e.match(/^xlink\:?(.+)/);null==o||o===!1?l?t.removeAttributeNS("http://www.w3.org/1999/xlink",F(l[1])):t.removeAttribute(e):"object"==typeof o||a(o)||(l?t.setAttributeNS("http://www.w3.org/1999/xlink",F(l[1]),o):t.setAttribute(e,o))}else t.className=o||""}function k(t,e,n){try{t[e]=n}catch(t){}}function _(t){return this._listeners[t.type](M.event&&M.event(t)||t)}function w(t){if(g(t),t instanceof Element){t._component=t._componentConstructor=null;var e=t.normalizedNodeName||F(t.nodeName);(q[e]||(q[e]=[])).push(t)}}function C(t,e){var n=F(t),o=q[n]&&q[n].pop()||(e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t));return o.normalizedNodeName=n,o}function P(){for(var t;t=X.pop();)M.afterMount&&M.afterMount(t),t.componentDidMount&&t.componentDidMount()}function S(t,e,n,o,r,i){Q++||(Y=r instanceof SVGElement,Z=t&&!(V in t));var a=x(t,e,n,o);return r&&a.parentNode!==r&&r.appendChild(a),--Q||(Z=!1,i||P()),a}function x(t,e,n,o){for(var r=e&&e.attributes;h(e);)e=d(e,n);if(null==e&&(e=""),s(e))return t&&t instanceof Text?t.nodeValue!=e&&(t.nodeValue=e):(t&&O(t),t=document.createTextNode(e)),t[V]=!0,t;if(a(e.nodeName))return L(t,e,n,o);var i=t,u=String(e.nodeName),c=Y,l=e.children;if(Y="svg"===u||"foreignObject"!==u&&Y,t){if(!y(t,u)){for(i=C(u,Y);t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),O(t)}}else i=C(u,Y);var p=i.firstChild,f=i[V];if(!f){i[V]=f={};for(var v=i.attributes,m=v.length;m--;)f[v[m].name]=v[m].value}return j(i,e.attributes,f),!Z&&l&&1===l.length&&"string"==typeof l[0]&&p&&p instanceof Text&&!p.nextSibling?p.nodeValue!=l[0]&&(p.nodeValue=l[0]):(l&&l.length||p)&&E(i,l,n,o),r&&"function"==typeof r.ref&&(f.ref=r.ref)(i),Y=c,i}function E(t,e,n,o){var r,i,a,s,u=t.childNodes,c=[],l={},p=0,f=0,h=u.length,d=0,y=e&&e.length;if(h)for(var m=0;m<h;m++){var b=u[m],k=b[V],_=y?(i=b._component)?i.__key:k?k.key:null:null;null!=_?(p++,l[_]=b):(Z||k)&&(c[d++]=b)}if(y)for(var m=0;m<y;m++){a=e[m],s=null;var _=a.key;if(null!=_)p&&_ in l&&(s=l[_],l[_]=void 0,p--);else if(!s&&f<d)for(r=f;r<d;r++)if(i=c[r],i&&v(i,a)){s=i,c[r]=void 0,r===d-1&&d--,r===f&&f++;break}s=x(s,a,n,o),s&&s!==t&&(m>=h?t.appendChild(s):s!==u[m]&&(s===u[m+1]&&g(u[m]),t.insertBefore(s,u[m]||null)))}if(p)for(var m in l)l[m]&&O(l[m]);for(;f<=d;)s=c[d--],s&&O(s)}function O(t,e){var n=t._component;if(n)I(n,!e);else{t[V]&&t[V].ref&&t[V].ref(null),e||w(t);for(var o;o=t.lastChild;)O(o,e)}}function j(t,e,n){for(var o in n)e&&o in e||null==n[o]||b(t,o,n[o],n[o]=void 0,Y);if(e)for(var r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||b(t,r,n[r],n[r]=e[r],Y)}function U(t){var e=t.constructor.name,n=tt[e];n?n.push(t):tt[e]=[t]}function N(t,e,n){var o=new t(e,n),r=tt[t.name];if(R.call(o,e,n),r)for(var i=r.length;i--;)if(r[i].constructor===t){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function A(t,e,n,o,r){t._disable||(t._disable=!0,(t.__ref=e.ref)&&delete e.ref,(t.__key=e.key)&&delete e.key,!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o),o&&o!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=o),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&M.syncComponentUpdates===!1&&t.base?p(t):T(t,1,r)),t.__ref&&t.__ref(t))}function T(t,e,n,i){if(!t._disable){var s,u,c,l,p=t.props,f=t.state,v=t.context,y=t.prevProps||p,g=t.prevState||f,b=t.prevContext||v,k=t.base,_=t.nextBase,w=k||_,C=t._component;if(k&&(t.props=y,t.state=g,t.context=b,2!==e&&t.shouldComponentUpdate&&t.shouldComponentUpdate(p,f,v)===!1?s=!0:t.componentWillUpdate&&t.componentWillUpdate(p,f,v),t.props=p,t.state=f,t.context=v),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!s){for(t.render&&(u=t.render(p,f,v)),t.getChildContext&&(v=o(r(v),t.getChildContext()));h(u);)u=d(u,v);var x,E,j=u&&u.nodeName;if(a(j)){var U=m(u);c=C,c&&c.constructor===j&&U.key==c.__key?A(c,U,1,v):(x=c,c=N(j,U,v),c.nextBase=c.nextBase||_,c._parentComponent=t,t._component=c,A(c,U,0,v),T(c,1,n,!0)),E=c.base}else l=w,x=C,x&&(l=t._component=null),(w||1===e)&&(l&&(l._component=null),E=S(l,u,v,n||!k,w&&w.parentNode,!0));if(w&&E!==w&&c!==C){var L=w.parentNode;L&&E!==L&&(L.replaceChild(E,w),x||(w._component=null,O(w)))}if(x&&I(x,E!==w),t.base=E,E&&!i){for(var R=t,D=t;D=D._parentComponent;)(R=D).base=E;E._component=R,E._componentConstructor=R.constructor}}!k||n?X.unshift(t):s||(t.componentDidUpdate&&t.componentDidUpdate(y,g,b),M.afterUpdate&&M.afterUpdate(t));var B,W=t._renderCallbacks;if(W)for(;B=W.pop();)B.call(t);Q||i||P()}}function L(t,e,n,o){for(var r=t&&t._component,i=t,a=r&&t._componentConstructor===e.nodeName,s=a,u=m(e);r&&!s&&(r=r._parentComponent);)s=r.constructor===e.nodeName;return r&&s&&(!o||r._component)?(A(r,u,3,n,o),t=r.base):(r&&!a&&(I(r,!0),t=i=null),r=N(e.nodeName,u,n),t&&!r.nextBase&&(r.nextBase=t,i=null),A(r,u,1,n,o),t=r.base,i&&t!==i&&(i._component=null,O(i))),t}function I(t,e){M.beforeUnmount&&M.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;if(o)I(o,e);else if(n){n[V]&&n[V].ref&&n[V].ref(null),t.nextBase=n,e&&(g(n),U(t));for(var r;r=n.lastChild;)O(r,!e)}t.__ref&&t.__ref(null),t.componentDidUnmount&&t.componentDidUnmount()}function R(t,e){this._dirty=!0,this.context=e,this.props=t,this.state||(this.state={})}function D(t,e,n){return S(n,t,{},!1,e)}var M={},B=[],W={},F=function(t){return W[t]||(W[t]=t.toLowerCase())},z="undefined"!=typeof Promise&&Promise.resolve(),H=z?function(t){z.then(t)}:setTimeout,G={},V="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",K={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},$={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},J=[],q={},X=[],Q=0,Y=!1,Z=!1,tt={};o(R.prototype,{linkState:function(t,e){var n=this._linkedStates||(this._linkedStates={});return n[t+e]||(n[t+e]=l(this,t,e))},setState:function(t,e){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,a(t)?t(n,this.props):t),e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),p(this)},forceUpdate:function(){T(this,2)},render:function(){}}),t.h=n,t.cloneElement=c,t.Component=R,t.render=D,t.rerender=f,t.options=M})},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var n=localStorage.getItem("authToken");if(n)return fetch("/sync/store/"+t,{method:"POST",headers:{Authorization:"Bearer "+n},body:e}).then(u)}function s(t){var e=localStorage.getItem("authToken");if(e)return fetch("/sync/get/"+t,{headers:{Authorization:"Bearer "+e}}).then(u)}function u(t){return t.ok?t.text():null}var c=n(0);n.n(c);e.b=a,e.c=s;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={token:null,status:null},n.createSyncProfile=n.createSyncProfile.bind(n),n.syncAnotherDevice=n.syncAnotherDevice.bind(n),n.attachToExisting=n.attachToExisting.bind(n),n}return i(e,t),l(e,[{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(t,e){var o=this,r=e.token,i=e.status,a=null;a=r?n.i(c.h)("button",{onClick:this.syncAnotherDevice},"Sync Another Device"):n.i(c.h)("button",{onClick:this.createSyncProfile},"Create Sync Profile");var s="N/A";return r&&(s=JSON.parse(atob(r.split(".")[1])).data),n.i(c.h)("div",{class:"sync"},n.i(c.h)("div",null,s),a,n.i(c.h)("input",{class:"code-in",placeholder:"Access Code"}),n.i(c.h)("button",{onClick:function(t){return o.attachToExisting(t.target.previousSibling.value)}},"Attach to Existing Profile"),n.i(c.h)("span",{class:"status"},i))}},{key:"load",value:function(){try{var t=localStorage.getItem("authToken");this.setState({token:t})}catch(t){}}},{key:"save",value:function(t){t||(t=this.state.token),t&&localStorage.setItem("authToken",t)}},{key:"createSyncProfile",value:function(){var t=this;fetch("/sync/create",{method:"POST"}).then(u).then(function(e){e?(t.setState({token:e,status:"Created new profile"}),t.save(e)):t.setState({status:"Unable to create profile"})})}},{key:"syncAnotherDevice",value:function(){var t=this;fetch("/sync/authorize",{method:"POST",headers:{Authorization:"Bearer "+this.state.token}}).then(u).then(function(e){e?t.setState({status:"Enter code on other device: "+e}):t.setState({status:"Unable to get access code"})})}},{key:"attachToExisting",value:function(t){var e=this;fetch("/sync/join",{method:"POST",body:t}).then(u).then(function(t){t?(e.setState({token:t,status:"Successfully joined profile"}),e.save(t)):e.setState({status:"Unable to join profile"})})}}]),e}(c.Component);e.a=p},function(t,e,n){"use strict";function o(t,e){return new Promise(function(n,o){var r=new XMLHttpRequest;r.responseType="arraybuffer",e&&(r.onprogress=function(t){return e(Math.floor(t.loaded/t.total))}),r.onerror=o,r.onload=function(){200===r.status?n(r.response):o(new Error("Got "+r.status+" from "+t))},r.open("GET",t,!0),r.send()})}function r(t){return t&&t.ok?t.blob():null}e.b=o,e.a=r},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=Math.floor(t/60);e<10&&(e="0"+e);var n=Math.floor(t%60);return n<10&&(n="0"+n),e+":"+n}function s(t){return fetch("/p/"+t+"/list").then(function(t){return t.json()})}function u(t,e,o,r){var i=c(t,e),a=l(t,e);return Promise.all([caches.open("episodes"),n.i(h.b)(i),n.i(h.b)(a,r)]).then(function(t){var e=g(t,3),n=e[0],o=e[1],r=e[2];n.put(i,new Response(o)),n.put(a,new Response(r))})}function c(t,e){return"/p/"+t+"/episodes/"+e+"/image"}function l(t,e){return"/p/"+t+"/episodes/"+e+"/audio"}function p(t,e,n){return Math.max(Math.min(t,n),e)}var f=n(0),h=(n.n(f),n(2)),d=n(7),v=n(6),y=n(1),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},g=function(){function t(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),k=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={currentImageUrl:"",currentAudioUrl:"",episodes:[],index:0,playing:!1,actualPlaying:!1,playFromPosition:0,actualPosition:0,duration:0,autoplay:!0},n.lastUserActivity=0,n.keyListener=n.keyListener.bind(n),n.userActivity=n.userActivity.bind(n),n.unloadListener=n.unloadListener.bind(n),n.visibilityChange=n.visibilityChange.bind(n),n.episodeEnded=n.episodeEnded.bind(n),n.audioPlayingChange=n.audioPlayingChange.bind(n),n.audioPositionChange=n.audioPositionChange.bind(n),n.audioDurationChange=n.audioDurationChange.bind(n),n}return i(e,t),b(e,[{key:"componentDidMount",value:function(){var t=this;s(this.props.podcast).then(function(e){t.setState({episodes:e}),t.load()}),window.addEventListener("beforeunload",this.unloadListener),window.addEventListener("keyup",this.keyListener),window.addEventListener("mousemove",this.userActivity),window.addEventListener("pointermove",this.userActivity),window.addEventListener("visibilitychange",this.visibilityChange),this.saveInterval=setInterval(function(){t.state.actualPlaying&&t.save()},1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.saveInterval),window.removeEventListener("beforeunload",this.unloadListener),window.removeEventListener("keyup",this.keyListener),window.removeEventListener("mousemove",this.userActivity),window.removeEventListener("pointermove",this.userActivity),window.removeEventListener("visibilitychange",this.visibilityChange)}},{key:"render",value:function(t,e){var o=this,r=e.currentImageUrl,i=e.currentAudioUrl,s=e.index,u=e.episodes,c=e.autoplay,l=e.playing,p=e.actualPlaying,h=e.actualPosition,y=e.duration,m=e.playFromPosition,g=u[s]||{},b=g.title,k=(g.imageUrl,g.audioUrl,g.status),_="icon-download",w="Download for Offline Listening";return"downloading"===k?(_="icon-spin",w="Downloading..."):"downloaded"===k&&(_="icon-ok",w="Downloaded to Device"),n.i(f.h)("div",{class:"player"},n.i(f.h)("div",{class:"titlebar"},n.i(f.h)("a",{class:"back button",href:"/"},n.i(f.h)("span",{class:"icon-play"})),n.i(f.h)("h1",{class:"title"},b)),n.i(f.h)(d.a,{src:r}),n.i(f.h)(v.a,{src:i,playing:l,position:m,onPositionChange:this.audioPositionChange,onDurationChange:this.audioDurationChange,onPlayingChange:this.audioPlayingChange,onEnded:this.episodeEnded}),n.i(f.h)("div",{class:"seek_scrub"},n.i(f.h)("button",{class:"toggle-playing",onClick:function(){return o.togglePlaying()},title:p?"Pause":"Play"},n.i(f.h)("span",{class:p?"icon-pause":"icon-play"})),n.i(f.h)("input",{class:"scrubber",type:"range",min:"0",max:Math.round(y),value:Math.round(h),onInput:function(t){return o.seekTo(parseInt(t.target.value))}}),n.i(f.h)("div",{class:"time"},a(h)+" / "+a(y))),n.i(f.h)("div",{class:"seek"},n.i(f.h)("button",{onClick:function(){return o.seekBackward(30)},title:"Back 30 Seconds"},n.i(f.h)("span",{class:"icon-fast-bw"})," 30"),n.i(f.h)("button",{onClick:function(){return o.seekBackward(5)},title:"Back 5 Seconds"},n.i(f.h)("span",{class:"icon-fast-bw"})," 5"),n.i(f.h)("button",{onClick:function(){return o.seekForward(5)},title:"Forward 5 Seconds"},"5 ",n.i(f.h)("span",{class:"icon-fast-fw"})),n.i(f.h)("button",{onClick:function(){return o.seekForward(30)},title:"Forward 30 Seconds"},"30 ",n.i(f.h)("span",{class:"icon-fast-fw"}))),n.i(f.h)("div",{class:"nav"},n.i(f.h)("button",{onClick:function(){return o.previousEpisode()},title:"Previous Episode"},n.i(f.h)("span",{class:"icon-to-start-alt"})),n.i(f.h)("input",{type:"number",onKeyUp:function(t){return o.gotoIndexOnEnter(t)},onInput:function(t){return o.gotoIndex(t)},value:s+1}),n.i(f.h)("button",{onClick:function(){return o.nextEpisode()},title:"Next Episode"},n.i(f.h)("span",{class:"icon-to-end-alt"})),n.i(f.h)("button",{onClick:function(){return o.cacheEpisode()},title:w},n.i(f.h)("span",{class:_}))),n.i(f.h)("div",{class:"options"},n.i(f.h)("span",null,n.i(f.h)("input",{type:"checkbox",id:"autoplay_opt",checked:c,onChange:function(t){return o.setAutoplay(t.target.checked)}}),n.i(f.h)("label",{for:"autoplay_opt"},"Autoplay"))))}},{key:"audioPlayingChange",value:function(t){if(this.setState({actualPlaying:t}),!t){this.save();var e=this.props.podcast;n.i(y.b)(e,localStorage.getItem(e+"_place"))}}},{key:"audioPositionChange",value:function(t){this.setState({actualPosition:t})}},{key:"episodeEnded",value:function(){var t=this.state,e=t.index,n=t.episodes,o=t.autoplay;e<n.length-1&&o&&this.selectEpisode(e+1)}},{key:"audioDurationChange",value:function(t){this.setState({duration:t})}},{key:"keyListener",value:function(t){"Space"===t.code&&(t.preventDefault(),this.togglePlaying()),userActivity()}},{key:"visibilityChange",value:function(){"visible"===document.visibilityState&&userActivity()}},{key:"userActivity",value:function(){var t=this.state,e=t.playing,n=t.actualPlaying;if(!e&&!n){var o=Date.now();o-this.lastUserActivity>6e4&&(this.lastUserActivity=o,this.loadRemotePlace())}}},{key:"unloadListener",value:function(){var t=this.props.podcast;this.save(),n.i(y.b)(t,localStorage.getItem(t+"_place"))}},{key:"loadRemotePlace",value:function(){var t=this,e=this.props.podcast;n.i(y.c)(e).then(function(n){n&&(localStorage.setItem(e+"_place",n),t.load())})}},{key:"previousEpisode",value:function(){var t=this.state.index;this.selectEpisode(Math.max(t-1,0))}},{key:"nextEpisode",value:function(){var t=this.state,e=t.index,n=t.episodes;this.selectEpisode(Math.min(e+1,n.length-1))}},{key:"selectEpisode",value:function(t){var e=this,n=this.props.podcast,o=this.state,r=o.episodes,i=o.currentImageUrl,a=o.currentAudioUrl,s=c(n,t),u=l(n,t);caches.open("episodes").then(function(t){return Promise.all([t.match(s).then(h.a),t.match(u).then(h.a)])}).then(function(n){var o=g(n,2),c=o[0],l=o[1];i&&URL.revokeObjectURL(i),a&&URL.revokeObjectURL(a),e.setEpisodeStatus(t,l?"downloaded":null),e.setState({index:t,currentImageUrl:c?URL.createObjectURL(c):s,currentAudioUrl:l?URL.createObjectURL(l):u}),r[t]&&(document.title=r[t].title)})}},{key:"seekTo",value:function(t){this.setState({playFromPosition:t})}},{key:"seekBackward",value:function(t){var e=this.state.actualPosition;this.setState({playFromPosition:e-t})}},{key:"seekForward",value:function(t){var e=this.state.actualPosition;this.setState({playFromPosition:e+t})}},{key:"togglePlaying",value:function(){this.setState({playing:!this.state.actualPlaying})}},{key:"setAutoplay",value:function(t){this.setState({autoplay:t})}},{key:"gotoIndexOnEnter",value:function(t){"Enter"===t.key&&this.gotoIndex(t)}},{key:"gotoIndex",value:function(t){var e=this.state.episodes,n=parseInt(t.target.value);"number"!=typeof n||isNaN(n)||this.selectEpisode(p(n-1,0,e.length-1))}},{key:"save",value:function(){var t=this.props.podcast,e=this.state,n=e.index,o=e.actualPlaying,r=e.actualPosition,i=e.autoplay,a=JSON.stringify({index:n,playing:o,position:r,autoplay:i});localStorage.setItem(t+"_place",a)}},{key:"load",value:function(){var t=this.props.podcast;try{var e=JSON.parse(localStorage.getItem(t+"_place")),n=e.index,o=e.playing,r=e.position,i=e.autoplay;this.setState({playFromPosition:r,playing:o,autoplay:i}),this.selectEpisode(n)}catch(t){console.log("Invalid saved JSON"),this.selectEpisode(0)}}},{key:"cacheEpisode",value:function(){var t=this,e=this.props.podcast,n=this.state,o=n.index,r=n.episodes,i=r[o];i.status||(this.setEpisodeStatus(o,"downloading"),u(e,o,i.size).then(function(){t.setEpisodeStatus(o,"downloaded")}))}},{key:"setEpisodeStatus",value:function(t,e){var n=this.state.episodes,o=n[t];n.splice(t,1,m({},o,{status:e})),this.setState({episodes:n.slice()})}}]),e}(f.Component);e.a=k},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=(n.n(a),function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()),u=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={podcasts:[]},n}return i(e,t),s(e,[{key:"componentDidMount",value:function(){var t=this;fetch("/list").then(function(t){return t.json()}).then(function(e){t.setState({podcasts:e})})}},{key:"render",value:function(t,e){var o=e.podcasts;return n.i(a.h)("div",null,n.i(a.h)("div",{class:"syncbar"},n.i(a.h)("a",{class:"syncbtn button",href:"/sync"},"Sync")),n.i(a.h)("div",{class:"podcasts"},o.map(function(t){return n.i(a.h)(c,{podcast:t})})))}}]),e}(a.Component);e.a=u;var c=function(t){var e=t.podcast,o=e.name,r=e.humanName;return n.i(a.h)("section",{class:"podcast-card"},n.i(a.h)("a",{href:"/p/"+o},n.i(a.h)("img",{class:"card-image",src:"/p/"+o+"/icon"}),n.i(a.h)("h1",{class:"card-title"},r)))}},function(t,e,n){!function(e,o){t.exports=o(n(0))}(this,function(t){"use strict";function e(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),a={},s=void 0;if(i&&i[1])for(var u=i[1].split("&"),c=0;c<u.length;c++){var l=u[c].split("=");a[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=o(t.replace(r,"")),e=o(e||"");for(var p=Math.max(t.length,e.length),f=0;f<p;f++)if(e[f]&&":"===e[f].charAt(0)){var h=e[f].replace(/(^\:|[+*?]+$)/g,""),d=(e[f].match(/[+*?]+$/)||b)[0]||"",v=~d.indexOf("+"),y=~d.indexOf("*"),m=t[f]||"";if(!m&&!y&&(d.indexOf("?")<0||v)){s=!1;break}if(a[h]=decodeURIComponent(m),v||y){a[h]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){s=!1;break}return(n.default===!0||s!==!1)&&a}function n(t,e){var n=t.attributes||b,o=e.attributes||b;if(n.default)return 1;if(o.default)return-1;var i=r(n.path)-r(o.path);return i||n.path.length-o.path.length}function o(t){return i(t).split("/")}function r(t){return(i(t).match(/\/+/g)||"").length}function i(t){return t.replace(/(^\/+|\/+$)/g,"")}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t){return P in t}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"push";_&&_[e]?_[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function p(){var t=void 0;return t=_&&_.location?_.location:_&&_.getCurrentLocation?_.getCurrentLocation():"undefined"!=typeof location?location:C,""+(t.pathname||"")+(t.search||"")}function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),h(t)&&l(t,e?"replace":"push"),d(t)}function h(t){for(var e=w.length;e--;)if(w[e].canRoute(t))return!0;return!1}function d(t){for(var e=!1,n=0;n<w.length;n++)w[n].routeTo(t)===!0&&(e=!0);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return f(e)}}function y(t){if(0===t.button)return v(t.currentTarget||t.target||this),m(t)}function m(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey)){var e=t.target;do if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&c(e)){if(0!==t.button)return;if(v(e))return m(t)}while(e=e.parentNode)}}var b={},k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_=null,w=[],C={},P="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_";"function"==typeof addEventListener&&(addEventListener("popstate",function(){return d(p())}),addEventListener("click",g));var S=function(e){return t.h("a",k({},e,{onClick:y}))},x=function(t){function o(e){a(this,o);var n=s(this,t.call(this,e));return e.history&&(_=e.history),n.state={url:n.props.url||p()},n}return u(o,t),o.prototype.shouldComponentUpdate=function(t){return t.static!==!0||(t.url!==this.props.url||t.onChange!==this.props.onChange)},o.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},o.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},o.prototype.componentWillMount=function(){w.push(this),this.updating=!0},o.prototype.componentDidMount=function(){this.updating=!1},o.prototype.componentWillUnmount=function(){w.splice(w.indexOf(this),1)},o.prototype.componentWillUpdate=function(){this.updating=!0},o.prototype.componentDidUpdate=function(){this.updating=!1},o.prototype.getMatchingChildren=function(t,o,r){return t.slice().sort(n).filter(function(t){var n=t.attributes,i=n.path,a=e(o,i,n);if(a){if(r!==!1){n.url=o,n.matches=a;for(var s in a)a.hasOwnProperty(s)&&(n[s]=a[s])}return!0}})},o.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(n,r,!0),a=i[0]||null;this._didRoute=!!a;var s=this.previousUrl;return r!==s&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:s,active:i,current:a})),a},o}(t.Component),E=function(e){var n=e.component,o=e.url,r=e.matches;return t.h(n,{url:o,matches:r})};return x.route=f,x.Router=x,x.Route=E,x.Link=S,x})},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){t.readyState===t.HAVE_ENOUGH_DATA?t.play():t.addEventListener("canplay",function(){t.play()},{once:!0})}var s=n(0),u=(n.n(s),function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()),c=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.el=new Audio,n.el.preload="auto",n}return i(e,t),u(e,[{key:"componentDidMount",value:function(){var t=this.el,e=this.props,n=e.src,o=e.playing,r=e.position,i=e.onPositionChange,s=e.onDurationChange,u=e.onPlayingChange,c=e.onEnded;t.src=n,t.currentTime=r||0,o&&a(t),i&&(t.ontimeupdate=function(){return i(t.currentTime)}),s&&(t.ondurationchange=function(){return s(t.duration)}),u&&(t.onplaying=t.onpause=function(){return u(!t.paused)}),c&&(t.onended=function(){return c()})}},{key:"componentWillReceiveProps",value:function(t){var e=t.src,n=t.playing,o=t.position,r=this.el,i=this.props;if(e&&e!==i.src){try{r.pause()}catch(t){console.log("src change error",t)}r.src=e,n&&a(r)}n===!i.playing&&(r.paused?a(r):r.pause()),null!=o&&o!==i.position&&(r.currentTime=o)}},{key:"render",value:function(t,e){return null}}]),e}(s.Component);e.a=c},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=(n.n(a),n(2),function(){function t(t,e){
for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()),u=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={src:t.src},n}return i(e,t),s(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({src:t.src})}},{key:"render",value:function(t,e){var o=this,r=e.src;return n.i(a.h)("div",{class:"podcast-image"},n.i(a.h)("img",{src:r,onError:function(t){return o.setState({src:"/images/podcast_300.png"})}}))}}]),e}(a.Component);e.a=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=(n.n(o),n(5)),i=n.n(r),a=n(4),s=n(1),u=n(3);navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js"),n.i(o.render)(n.i(o.h)(i.a,null,n.i(o.h)(a.a,{path:"/"}),n.i(o.h)(s.a,{path:"/sync"}),n.i(o.h)(u.a,{path:"/p/:podcast"})),document.getElementById("mount"))}]);