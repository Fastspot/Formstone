/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});


/*! formstone v1.4.13-1 [core.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/**
 * @plugin
 * @name Core
 * @description Formstone Library core. Required for all plugins.
 */

/* global define */
/* global ga */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define(["jquery"], factory);
    } else {
      factory(jQuery);
    }
  }(function($) {

    "use strict";

    // Namespace

    var Core = function() {
        this.Version = '1.4.13-1';
        this.Plugins = {};

        this.DontConflict = false;
        this.Conflicts = {
          fn: {}
        };
        this.ResizeHandlers = [];
        this.RAFHandlers = [];

        // Globals

        this.window = window;
        this.document = document;

        this.windowWidth = 0;
        this.windowHeight = 0;
        this.fallbackWidth = 1024;
        this.fallbackHeight = 768;
        this.userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
        this.transform = null;
        this.transition = null;

        this.support = {
          history: !!(window.history && window.history.pushState && window.history.replaceState),
          matchMedia: !!(window.matchMedia || window.msMatchMedia),
          pointer: !!(window.PointerEvent),
          raf: !!(window.requestAnimationFrame && window.cancelAnimationFrame),
          touch: !!(("ontouchstart" in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
          transition: false,
          transform: false
        };
      },

      Functions = {

        /**
         * @method private
         * @name killEvent
         * @description Stops event action and bubble.
         * @param e [object] "Event data"
         */

        killEvent: function(e, immediate) {
          try {
            e.preventDefault();
            e.stopPropagation();

            if (immediate) {
              e.stopImmediatePropagation();
            }
          } catch (error) {
            //
          }
        },

        /**
         * @method private
         * @name killGesture
         * @description Stops gesture event action.
         * @param e [object] "Event data"
         */

        killGesture: function(e) {
          try {
            e.preventDefault();
          } catch (error) {
            //
          }
        },

        /**
         * @method private
         * @name lockViewport
         * @description Unlocks the viewport, preventing getsures.
         */

        lockViewport: function(plugin_namespace) {
          ViewportLocks[plugin_namespace] = true;

          if (Object.keys(ViewportLocks).length > 0 && !ViewportLocked) {
            if (ViewportMeta.length) {
              ViewportMeta.setAttribute("content", ViewportMetaLocked);
            } else {
              var ViewportMetaMarkup = document.createElement('meta');
              ViewportMetaMarkup.setAttribute('name', 'viewport');
              ViewportMetaMarkup.setAttribute('content', ViewportMetaLocked);
              ViewportMeta = Document.head.appendChild(ViewportMetaMarkup);
            }

            Formstone.body.addEventListener(Events.gestureChange, Functions.killGesture)
            Formstone.body.addEventListener(Events.gestureStart, Functions.killGesture)
            Formstone.body.addEventListener(Events.gestureEnd, Functions.killGesture);

            ViewportLocked = true;
          }
        },

        /**
         * @method private
         * @name unlockViewport
         * @description Unlocks the viewport, allowing getsures.
         */

        unlockViewport: function(plugin_namespace) {
          if ($.type(ViewportLocks[plugin_namespace]) !== 'undefined') {
            delete ViewportLocks[plugin_namespace];
          }

          if ($.isEmptyObject(ViewportLocks) && ViewportLocked) {
            if (ViewportMeta.length) {
              if (ViewportMetaOriginal) {
                ViewportMeta.setAttribute("content", ViewportMetaOriginal);
              } else {
                ViewportMeta.remove();
              }
            }

            Formstone.body.off(Events.gestureChange)
              .off(Events.gestureStart)
              .off(Events.gestureEnd);

            ViewportLocked = false;
          }
        },

        /**
         * @method private
         * @name startTimer
         * @description Starts an internal timer.
         * @param timer [int] "Timer ID"
         * @param time [int] "Time until execution"
         * @param callback [function] "Function to execute"
         * @return [int] "Timer ID"
         */

        startTimer: function(timer, time, callback, interval) {
          Functions.clearTimer(timer);

          return (interval) ? setInterval(callback, time) : setTimeout(callback, time);
        },

        /**
         * @method private
         * @name clearTimer
         * @description Clears an internal timer.
         * @param timer [int] "Timer ID"
         */

        clearTimer: function(timer, interval) {
          if (timer) {
            if (interval) {
              clearInterval(timer);
            } else {
              clearTimeout(timer);
            }

            timer = null;
          }
        },

        /**
         * @method private
         * @name sortAsc
         * @description Sorts an array (ascending).
         * @param a [mixed] "First value"
         * @param b [mixed] "Second value"
         * @return Difference between second and first values
         */

        sortAsc: function(a, b) {
          return (parseInt(a, 10) - parseInt(b, 10));
        },

        /**
         * @method private
         * @name sortDesc
         * @description Sorts an array (descending).
         * @param a [mixed] "First value"
         * @param b [mixed] "Second value"
         * @return Difference between second and first values
         */

        sortDesc: function(a, b) {
          return (parseInt(b, 10) - parseInt(a, 10));
        },

        /**
         * @method private
         * @name decodeEntities
         * @description Decodes HTML.
         * @param string [string] "String to decode"
         * @return Decoded string
         */

        decodeEntities: function(string) {
          // http://stackoverflow.com/a/1395954
          var el = Formstone.document.createElement("textarea");
          el.innerHTML = string;

          return el.value;
        },

        /**
         * @method private
         * @name parseGetParams
         * @description Returns keyed object containing all GET query parameters
         * @param url [string] "URL to parse"
         * @return [object] "Keyed query params"
         */

        parseQueryString: function(url) {
          var params = {},
            parts = url.slice(url.indexOf("?") + 1).split("&");

          for (var i = 0; i < parts.length; i++) {
            var part = parts[i].split("=");
            params[part[0]] = part[1];
          }

          return params;
        }
      },

      Formstone = new Core(),

      // Deferred ready

      $Ready = $.Deferred(),

      // Classes

      Classes = {
        base: "{ns}",
        element: "{ns}-element"
      },

      // Events

      Events = {
        namespace: ".{ns}",
        beforeUnload: "beforeunload.{ns}",
        blur: "blur.{ns}",
        change: "change.{ns}",
        click: "click.{ns}",
        dblClick: "dblclick.{ns}",
        drag: "drag.{ns}",
        dragEnd: "dragend.{ns}",
        dragEnter: "dragenter.{ns}",
        dragLeave: "dragleave.{ns}",
        dragOver: "dragover.{ns}",
        dragStart: "dragstart.{ns}",
        drop: "drop.{ns}",
        error: "error.{ns}",
        focus: "focus.{ns}",
        focusIn: "focusin.{ns}",
        focusOut: "focusout.{ns}",
        gestureChange: "gesturechange.{ns}",
        gestureStart: "gesturestart.{ns}",
        gestureEnd: "gestureend.{ns}",
        input: "input.{ns}",
        keyDown: "keydown.{ns}",
        keyPress: "keypress.{ns}",
        keyUp: "keyup.{ns}",
        load: "load.{ns}",
        mouseDown: "mousedown.{ns}",
        mouseEnter: "mouseenter.{ns}",
        mouseLeave: "mouseleave.{ns}",
        mouseMove: "mousemove.{ns}",
        mouseOut: "mouseout.{ns}",
        mouseOver: "mouseover.{ns}",
        mouseUp: "mouseup.{ns}",
        panStart: "panstart.{ns}",
        pan: "pan.{ns}",
        panEnd: "panend.{ns}",
        resize: "resize.{ns}",
        scaleStart: "scalestart.{ns}",
        scaleEnd: "scaleend.{ns}",
        scale: "scale.{ns}",
        scroll: "scroll.{ns}",
        select: "select.{ns}",
        swipe: "swipe.{ns}",
        touchCancel: "touchcancel.{ns}",
        touchEnd: "touchend.{ns}",
        touchLeave: "touchleave.{ns}",
        touchMove: "touchmove.{ns}",
        touchStart: "touchstart.{ns}"
      },

      ResizeTimer = null,
      Debounce = 20,

      ViewportMeta,
      ViewportMetaOriginal,
      ViewportMetaLocked,
      ViewportLocks = [],
      ViewportLocked = false;

    /**
     * @method
     * @name NoConflict
     * @description Resolves plugin namespace conflicts
     * @example Formstone.NoConflict();
     */

    Core.prototype.NoConflict = function() {
      Formstone.DontConflict = true;

      for (var i in Formstone.Plugins) {
        if (Formstone.Plugins.hasOwnProperty(i)) {
          $[i] = Formstone.Conflicts[i];
          $.fn[i] = Formstone.Conflicts.fn[i];
        }
      }
    };

    /**
     * @method
     * @name Ready
     * @description Replacement for jQuery ready
     * @param e [object] "Event data"
     */

    Core.prototype.Ready = function(fn) {
      if (
        Formstone.document.readyState === "complete" ||
        (Formstone.document.readyState !== "loading" && !Formstone.document.documentElement.doScroll)
      ) {
        fn();
      } else {
        Formstone.document.addEventListener("DOMContentLoaded", fn);
      }
    };

    /**
     * @method
     * @name Plugin
     * @description Builds a plugin and registers it with jQuery.
     * @param namespace [string] "Plugin namespace"
     * @param settings [object] "Plugin settings"
     * @return [object] "Plugin properties. Includes `defaults`, `classes`, `events`, `functions`, `methods` and `utilities` keys"
     * @example Formstone.Plugin("namespace", { ... });
     */

    Core.prototype.Plugin = function(namespace, settings) {
      Formstone.Plugins[namespace] = (function(namespace, settings) {

        var namespaceDash = "fs-" + namespace,
          namespaceDot = "fs." + namespace,
          namespaceClean = "fs" + namespace.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
            return p1 + p2.toUpperCase();
          });

        /**
         * @method private
         * @name initialize
         * @description Creates plugin instance by adding base classname, creating data and scoping a _construct call.
         * @param options [object] <{}> "Instance options"
         */

        function initialize(options) {
          // Maintain Chain

          var hasOptions = $.type(options) === "object",
            args = Array.prototype.slice.call(arguments, (hasOptions ? 1 : 0)),
            $targets = this,
            $postTargets = $(),
            $element,
            i,
            count;

          // Extend Defaults

          options = $.extend(true, {}, settings.defaults || {}, (hasOptions ? options : {}));

          // All targets

          for (i = 0, count = $targets.length; i < count; i++) {
            $element = $targets.eq(i);

            // Gaurd Against Exiting Instances

            if (!getData($element)) {

              // Extend w/ Local Options

              settings.guid++;

              var guid = "__" + settings.guid,
                rawGuid = settings.classes.raw.base + guid,
                locals = $element.data(namespace + "-options"),
                data = $.extend(true, {
                  $el: $element,
                  guid: guid,
                  numGuid: settings.guid,
                  rawGuid: rawGuid,
                  dotGuid: "." + rawGuid
                }, options, ($.type(locals) === "object" ? locals : {}));

              // Cache Instance

              $element.addClass(settings.classes.raw.element)
                .data(namespaceClean, data);

              // Constructor

              settings.methods._construct.apply($element, [data].concat(args));

              // Post Constructor

              $postTargets = $postTargets.add($element);
            }

          }

          // Post targets

          for (i = 0, count = $postTargets.length; i < count; i++) {
            $element = $postTargets.eq(i);

            // Post Constructor

            settings.methods._postConstruct.apply($element, [getData($element)]);
          }

          return $targets;
        }

        /**
         * @method private
         * @name destroy
         * @description Removes plugin instance by scoping a _destruct call, and removing the base classname and data.
         * @param data [object] <{}> "Instance data"
         */

        /**
         * @method widget
         * @name destroy
         * @description Removes plugin instance.
         * @example $(".target").{ns}("destroy");
         */

        function destroy(data) {
          settings.functions.iterate.apply(this, [settings.methods._destruct].concat(Array.prototype.slice.call(arguments, 1)));

          this.removeClass(settings.classes.raw.element)
            .removeData(namespaceClean);
        }

        /**
         * @method private
         * @name getData
         * @description Creates class selector from text.
         * @param $element [jQuery] "Target jQuery object"
         * @return [object] "Instance data"
         */

        function getData($el) {
          return $el.data(namespaceClean);
        }

        /**
         * @method private
         * @name delegateWidget
         * @description Delegates public methods.
         * @param method [string] "Method to execute"
         * @return [jQuery] "jQuery object"
         */

        function delegateWidget(method) {

          // If jQuery object

          if (this instanceof $) {

            var _method = settings.methods[method];

            // Public method OR false

            if ($.type(method) === "object" || !method) {

              // Initialize

              return initialize.apply(this, arguments);
            } else if (_method && method.indexOf("_") !== 0) {

              // Wrap Public Methods

              var args = [_method].concat(Array.prototype.slice.call(arguments, 1));

              return settings.functions.iterate.apply(this, args);
            }

            return this;
          }
        }

        /**
         * @method private
         * @name delegateUtility
         * @description Delegates utility methods.
         * @param method [string] "Method to execute"
         */

        function delegateUtility(method) {

          // public utility OR utility init OR false

          var _method = settings.utilities[method] || settings.utilities._initialize || false;

          if (_method) {

            // Wrap Utility Methods

            var args = Array.prototype.slice.call(arguments, ($.type(method) === "object" ? 0 : 1));

            return _method.apply(window, args);
          }
        }

        /**
         * @method utility
         * @name defaults
         * @description Extends plugin default settings; effects instances created hereafter.
         * @param options [object] <{}> "New plugin defaults"
         * @example $.{ns}("defaults", { ... });
         */

        function defaults(options) {
          settings.defaults = $.extend(true, settings.defaults, options || {});
        }

        /**
         * @method private
         * @name iterate
         * @description Loops scoped function calls over jQuery object with instance data as first parameter.
         * @param func [function] "Function to execute"
         * @return [jQuery] "jQuery object"
         */

        function iterate(fn) {
          var $targets = this,
            args = Array.prototype.slice.call(arguments, 1);

          for (var i = 0, count = $targets.length; i < count; i++) {
            var $element = $targets.eq(i),
              data = getData($element) || {};

            if ($.type(data.$el) !== "undefined") {
              fn.apply($element, [data].concat(args));
            }
          }

          return $targets;
        }

        // Locals

        settings.initialized = false;
        settings.priority = settings.priority || 10;

        // Namespace Classes & Events

        settings.classes = namespaceProperties("classes", namespaceDash, Classes, settings.classes);
        settings.events = namespaceProperties("events", namespace, Events, settings.events);

        // Extend Functions

        settings.functions = $.extend({
          getData: getData,
          iterate: iterate
        }, Functions, settings.functions);

        // Extend Methods

        settings.methods = $.extend(true, {

          // Private Methods

          _construct: $.noop, // Constructor
          _postConstruct: $.noop, // Post Constructor
          _destruct: $.noop, // Destructor
          _resize: false, // Window resize

          // Public Methods

          destroy: destroy

        }, settings.methods);

        // Extend Utilities

        settings.utilities = $.extend(true, {

          // Private Utilities

          _initialize: false, // First Run
          _delegate: false, // Custom Delegation

          // Public Utilities

          defaults: defaults

        }, settings.utilities);

        // Register Plugin

        // Widget

        if (settings.widget) {

          // Store conflicting namesapaces
          Formstone.Conflicts.fn[namespace] = $.fn[namespace];

          // Widget Delegation: $(".target").fsPlugin("method", ...);
          $.fn[namespaceClean] = delegateWidget;

          if (!Formstone.DontConflict) {

            // $(".target").plugin("method", ...);
            $.fn[namespace] = $.fn[namespaceClean];
          }
        }

        // Utility

        Formstone.Conflicts[namespace] = $[namespace];

        // Utility Delegation: $.fsPlugin("method", ... );
        $[namespaceClean] = settings.utilities._delegate || delegateUtility;

        if (!Formstone.DontConflict) {

          // $.plugin("method", ... );
          $[namespace] = $[namespaceClean];
        }

        // Run Setup

        settings.namespace = namespace;
        settings.namespaceClean = namespaceClean;

        settings.guid = 0;

        // Resize handler

        if (settings.methods._resize) {
          Formstone.ResizeHandlers.push({
            namespace: namespace,
            priority: settings.priority,
            callback: settings.methods._resize
          });

          // Sort handlers on push
          Formstone.ResizeHandlers.sort(sortPriority);
        }

        // RAF handler

        if (settings.methods._raf) {
          Formstone.RAFHandlers.push({
            namespace: namespace,
            priority: settings.priority,
            callback: settings.methods._raf
          });

          // Sort handlers on push
          Formstone.RAFHandlers.sort(sortPriority);
        }

        return settings;
      })(namespace, settings);

      return Formstone.Plugins[namespace];
    };

    // Namespace Properties

    function namespaceProperties(type, namespace, globalProps, customProps) {
      var _props = {
          raw: {}
        },
        i;

      customProps = customProps || {};

      for (i in customProps) {
        if (customProps.hasOwnProperty(i)) {
          if (type === "classes") {

            // Custom classes
            _props.raw[customProps[i]] = namespace + "-" + customProps[i];
            _props[customProps[i]] = "." + namespace + "-" + customProps[i];
          } else {
            // Custom events
            _props.raw[i] = customProps[i];
            _props[i] = customProps[i] + "." + namespace;
          }
        }
      }

      for (i in globalProps) {
        if (globalProps.hasOwnProperty(i)) {
          if (type === "classes") {

            // Global classes
            _props.raw[i] = globalProps[i].replace(/{ns}/g, namespace);
            _props[i] = globalProps[i].replace(/{ns}/g, "." + namespace);
          } else {
            // Global events
            _props.raw[i] = globalProps[i].replace(/.{ns}/g, "");
            _props[i] = globalProps[i].replace(/{ns}/g, namespace);
          }
        }
      }

      return _props;
    }

    // Set Browser Prefixes

    function setBrowserPrefixes() {
      var transitionEvents = {
          "WebkitTransition": "webkitTransitionEnd",
          "MozTransition": "transitionend",
          "OTransition": "otransitionend",
          "transition": "transitionend"
        },
        transitionProperties = [
          "transition",
          "-webkit-transition"
        ],
        transformProperties = {
          'transform': 'transform',
          'MozTransform': '-moz-transform',
          'OTransform': '-o-transform',
          'msTransform': '-ms-transform',
          'webkitTransform': '-webkit-transform'
        },
        transitionEvent = "transitionend",
        transitionProperty = "",
        transformProperty = "",
        testDiv = document.createElement("div"),
        i;

      for (i in transitionEvents) {
        if (transitionEvents.hasOwnProperty(i) && i in testDiv.style) {
          transitionEvent = transitionEvents[i];
          Formstone.support.transition = true;
          break;
        }
      }

      Events.transitionEnd = transitionEvent + ".{ns}";

      for (i in transitionProperties) {
        if (transitionProperties.hasOwnProperty(i) && transitionProperties[i] in testDiv.style) {
          transitionProperty = transitionProperties[i];
          break;
        }
      }

      Formstone.transition = transitionProperty;

      for (i in transformProperties) {
        if (transformProperties.hasOwnProperty(i) && transformProperties[i] in testDiv.style) {
          Formstone.support.transform = true;
          transformProperty = transformProperties[i];
          break;
        }
      }

      Formstone.transform = transformProperty;
    }

    // Window resize

    function onWindowResize() {
      Formstone.windowWidth = Formstone.window.innerWidth;
      Formstone.windowHeight = Formstone.window.innerHeight;

      ResizeTimer = Functions.startTimer(ResizeTimer, Debounce, handleWindowResize);
    }

    function handleWindowResize() {
      for (var i in Formstone.ResizeHandlers) {
        if (Formstone.ResizeHandlers.hasOwnProperty(i)) {
          Formstone.ResizeHandlers[i].callback.call(window, Formstone.windowWidth, Formstone.windowHeight);
        }
      }
    }

    Formstone.window.addEventListener("resize.fs", onWindowResize);
    onWindowResize();

    // RAF

    function handleRAF() {
      if (Formstone.support.raf) {
        Formstone.window.requestAnimationFrame(handleRAF);

        for (var i in Formstone.RAFHandlers) {
          if (Formstone.RAFHandlers.hasOwnProperty(i)) {
            Formstone.RAFHandlers[i].callback.call(window);
          }
        }
      }
    }

    handleRAF();

    // Sort Priority

    function sortPriority(a, b) {
      return (parseInt(a.priority) - parseInt(b.priority));
    }

    // Document Ready

    Formstone.Ready(function() {
      Formstone.body = Document.body;

      document.documentElement.classList.add((Formstone.support.touch) ? "touchevents" : "no-touchevents" );

      // Viewport
      ViewportMeta = document.querySelector('meta[name="viewport"]');
      ViewportMetaOriginal = (ViewportMeta.length) ? ViewportMeta.getAttribute("content") : false;
      ViewportMetaLocked = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';

      $Ready.resolve();
    });

    // Custom Events

    Events.clickTouchStart = Events.click + " " + Events.touchStart;

    // Browser Prefixes

    setBrowserPrefixes();

    window.Formstone = Formstone;

    return Formstone;

  })

);

/*! formstone v1.4.13-1 [analytics.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      $Body = Formstone.$body;
    }

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function resize() {
      if (Defaults.scrollDepth) {
        setScrollDepths();
      }
    }

    /**
     * @method private
     * @name delegate
     */

    function delegate() {
      if (arguments.length && $.type(arguments[0]) !== "object") {
        if (arguments[0] === "destroy") {
          destroy.apply(this);
        } else {
          var args = Array.prototype.slice.call(arguments, 1);

          switch (arguments[0]) {
            case "pageview":
              pushPageView.apply(this, args);
              break;
            case "event":
              pushEvent.apply(this, args);
              break;
            default:
              break;
          }
        }
      } else {
        init.apply(this, arguments);
      }

      return null;
    }

    /**
     * @method private
     * @name init
     * @description Initializes plugin
     * @param opts [object] "Initialization options"
     */

    function init(options) {
      // Attach Analytics events
      if (!Initialized && $Body && $Body.length) {
        Initialized = true;

        Defaults = $.extend(Defaults, options || {});

        if (Defaults.autoEvents) {
          $Body.find("a").not("[" + DataKeyFull + "]").each(buildEvent);
        }

        if (Defaults.scrollDepth) {
          setScrollDepths();
          $Window.on(Events.scroll, trackScroll)
            .one(Events.load, resize);
        }

        $Body.on(Events.click, "*[" + DataKeyFull + "]", trackEvent);
      }
    }

    /**
     * @method private
     * @name destroy
     * @description Destroys plugin
     */

    function destroy() {
      if (Initialized && $Body && $Body.length) {
        $Window.off(Events.namespace);
        $Body.off(Events.namespace);

        Initialized = false;
      }
    }

    /**
     * @method private
     * @name buildEvent
     * @description Build events for email, phone, file types & external links
     */

    function buildEvent() {
      var $target = $(this),
        href = ($.type($target[0].href) !== "undefined") ? $target[0].href : "",
        domain = document.domain.split(".").reverse(),
        internal = href.match(domain[1] + "." + domain[0]) !== null,
        eventData;

      if (href.match(/^mailto\:/i)) {
        // Email
        eventData = "Email, Click, " + href.replace(/^mailto\:/i, "");
      } else if (href.match(/^tel\:/i)) {
        // Action
        eventData = "Telephone, Click, " + href.replace(/^tel\:/i, "");
      } else if (href.match(Defaults.fileTypes)) {
        // Files
        var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
        eventData = "File, Download:" + extension[0] + ", " + href.replace(/ /g, "-");
      } else if (!internal) {
        // External Link
        eventData = "ExternalLink, Click, " + href;
      }

      if (eventData) {
        $target.attr(DataKeyFull, eventData);
      }
    }

    /**
     * @method private
     * @name trackScroll
     * @description Debounces scroll tracking
     */

    function trackScroll(e) {
      Functions.startTimer(ScrollTimer, 250, doTrackScroll);
    }

    /**
     * @method private
     * @name doTrackScroll
     * @description Handle scroll tracking
     */

    function doTrackScroll() {
      var scrollTop = Window.scrollY + Formstone.windowHeight,
        step = (1 / Defaults.scrollStops),
        depth = step,
        key;

      for (var i = 1; i <= Defaults.scrollStops; i++) {
        key = (Math.round(100 * depth)).toString();

        if (!ScrollDepths[ScrollWidth][key].passed && scrollTop > ScrollDepths[ScrollWidth][key].edge) {
          ScrollDepths[ScrollWidth][key].passed = true;

          // Push data
          var eventData = $.extend(Defaults.scrollFields, {
            eventCategory: "ScrollDepth",
            eventAction: ScrollWidth,
            eventLabel: key,
            nonInteraction: true
          });

          pushEvent(eventData);
        }

        depth += step;
      }
    }

    /**
     * @method private
     * @name setScrollDepths
     * @description Sets scroll depths at specific widths
     */

    function setScrollDepths() {
      var mqState = $.mediaquery("state"),
        bodyHeight = $Body.outerHeight(),
        newDepths = {},
        step = (1 / Defaults.scrollStops),
        depth = step,
        top = 0,
        key;

      if (mqState.minWidth) {
        ScrollWidth = "MinWidth:" + mqState.minWidth + "px";
      }

      for (var i = 1; i <= Defaults.scrollStops; i++) {
        top = parseInt(bodyHeight * depth);
        key = (Math.round(100 * depth)).toString();

        newDepths[key] = {
          edge: (key === "100") ? top - 10 : top,
          passsed: (ScrollDepths[ScrollWidth] && ScrollDepths[ScrollWidth][key]) ? ScrollDepths[ScrollWidth][key].passed : false
        };

        depth += step;
      }

      ScrollDepths[ScrollWidth] = newDepths;
    }

    /**
     * @method private
     * @name trackEvent
     * @description Tracks event
     * @param e [object] "Event data"
     */

    function trackEvent(e) {
      var $target = $(this),
        url = $target.attr("href"),
        data = $target.data(DataKey).split(",");

      if (Defaults.eventCallback) {
        e.preventDefault();
      }

      // Trim data
      for (var i in data) {
        if (data.hasOwnProperty(i)) {
          data[i] = $.trim(data[i]);
        }
      }

      // Push data
      pushEvent({
        eventCategory: data[0],
        eventAction: data[1],
        eventLabel: (data[2] || url),
        eventValue: data[3],
        nonInteraction: data[4],
      }, $target);
    }

    /**
     * @method private
     * @name pushEvent
     * @description Push event to Universal Analytics
     */

    function pushEvent(data, $target) {
      // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference
      var loc = Window.location,
        evt = $.extend({
          hitType: "event"
        }, data);

      // If active link, launch that ish!
      if ($.type($target) !== "undefined" && !$target.attr("data-analytics-stop")) {
        var href = ($.type($target[0].href) !== "undefined") ? $target[0].href : "",
          url = (!href.match(/^mailto\:/i) && !href.match(/^tel\:/i) && href.indexOf(":") < 0) ? Window.location.protocol + "//" + Window.location.hostname + "/" + href : href;

        if (url !== "") {
          // Check Window target
          var target = $target.attr("target");
          if (target) {
            Window.open(url, target);
          } else if (Defaults.eventCallback) {
            var callbackType = "hitCallback"; // GUA ? "hitCallback" : "eventCallback";

            evt[callbackType] = function() {
              if (LinkTimer) {
                Functions.clearTimer(LinkTimer);

                openURL(url);
              }
            };

            // Event timeout
            LinkTimer = Functions.startTimer(LinkTimer, Defaults.eventTimeout, evt[callbackType]);
          }
        }
      }

      push(evt);
    }

    /**
     * @method private
     * @name pushPageView
     * @description Push page view to Universal Analytics
     */

    function pushPageView(data) {
      var pageView = $.extend({
        hitType: "pageview"
      }, data);

      push(pageView);
    }

    /**
     * @method private
     * @name push
     * @description Push data to Universal Analytics
     */

    function push(data) {
      if ($.type(Window.ga) === "function" && $.type(Window.ga.getAll) === "function") {
        var trackers = Window.ga.getAll();

        for (var i = 0, count = trackers.length; i < count; i++) {
          Window.ga(trackers[i].get("name") + ".send", data);
        }
      }
    }

    /**
     * @method private
     * @name openURL
     * @description Launch a url
     */
    function openURL(url) {
      document.location = url;
    }

    /**
     * @plugin
     * @name Analytics
     * @description A jQuery plugin for Google Universal Analytics Events.
     * @type utility
     * @main analytics.js
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     */

    var Plugin = Formstone.Plugin("analytics", {
        methods: {
          _resize: resize
        },
        utilities: {
          _delegate: delegate
        }
      }),

      /**
       * @options
       * @param autoEvents [boolean] <false> "Flag to bind auto-events to mailto, tel, files and external links"
       * @param fileTypes [regex] <> "File types for binding auto-events"
       * @param eventCallback [boolean] <false> "Flag to use event callbacks when navigating"
       * @param eventTimeout [int] <1000> "Event failure timeout"
       * @param scrollDepth [boolean] <false> "Flag to track scroll depth events"
       * @param scrollStops [int] <5> "Number of scroll increments to track"
       * @param scrollFields [object] <{}> "Additional event fields for scroll depth events"
       */

      Defaults = {
        autoEvents: false,
        fileTypes: /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,
        eventCallback: false,
        eventTimeout: 1000,
        scrollDepth: false,
        scrollStops: 5,
        scrollFields: {}
      },

      // Localize References

      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body = null,

      Functions = Plugin.functions,
      Events = Plugin.events,

      // Internal

      Initialized = false,
      DataKey = "analytics-event",
      DataKeyFull = "data-" + DataKey,

      ScrollDepths = {},
      ScrollTimer = null,
      ScrollWidth = "Site", // default value, non-responsive
      LinkTimer = null;

    // Setup

    Formstone.Ready(setup);

  })

);

/*! formstone v1.4.13-1 [background.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./transition"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      scroll();
      Window.addEventListener("scroll", scroll);
    }

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      Functions.iterate.call($Instances, resizeInstance);
      Functions.iterate.call($LazyInstances, cacheScrollPosition);
      Functions.iterate.call($LazyInstances, checkScrollPosition);
    }

    /**
     * @method private
     * @name scroll
     * @description Handles window scroll
     */

    function scroll() {
      ScrollTop = Window.scrollY + Formstone.windowHeight;

      if (ScrollTop < 0) {
        ScrollTop = 0;
      }

      Functions.iterate.call($LazyInstances, checkScrollPosition);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);
      $LazyInstances = $(Classes.lazy);

      Functions.iterate.call($LazyInstances, cacheScrollPosition);
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      // guid
      data.youTubeGuid = 0;

      data.$container = $('<div class="' + RawClasses.container + '"></div>').appendTo(this);

      data.thisClasses = [RawClasses.base, data.customClass];
      data.visible = true;

      if (data.lazy) {
        data.visible = false;
        data.thisClasses.push(RawClasses.lazy);
      }

      this.addClass(data.thisClasses.join(" "));

      cacheInstances();

      if (data.lazy) {
        cacheScrollPosition(data);
        checkScrollPosition(data);
      } else {
        loadInitialSource(data);
      }
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$container.remove();

      this.removeClass(data.thisClasses.join(" "))
        .off(Events.namespace);

      cacheInstances();
    }

    /**
     * @method private
     * @name loadInitialSource
     * @description Loads initial source.
     * @param data [object] "Instance data"
     */

    function loadInitialSource(data) {
      if (data.visible) {
        var source = data.source;
        data.source = null;

        loadMedia(data, source, true);
      }
    }

    /**
     * @method
     * @name load
     * @description Loads source media
     * @param source [string OR object] "Source image (string or object) or video (object)"
     * @example $(".target").background("load", "path/to/image.jpg");
     * @example $(".target").background("load", { "0px": "path/to/image-small.jpg", "980px": "path/to/image-large.jpg" });
     * @example $(".target").background("load", { "poster": "path/to/image.jpg", "webm": "path/to/video.webm", "mp4": "path/to/video.mp4", "ogg": "path/to/video.ogv" });
     */

    /**
     * @method private
     * @name loadMedia
     * @description Determines how to handle source media
     * @param data [object] "Instance data"
     * @param source [string OR object] "Source image (string) or video (object)"
     * @param firstLoad [boolean] "Flag for first load"
     */

    function loadMedia(data, source, firstLoad) {
      // Check if the source is new
      if (source !== data.source && data.visible) {
        data.source = source;
        data.responsive = false;
        data.isYouTube = false;

        // Check YouTube
        if ($.type(source) === "object" && $.type(source.video) === "string") {
          var parts = source.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);

          if (parts && parts.length >= 1) {
            data.isYouTube = true;
            data.videoId = parts[1];
          }
        }

        var isVideo = !data.isYouTube && ($.type(source) === "object" &&
          (source.hasOwnProperty("mp4") || source.hasOwnProperty("ogg") || source.hasOwnProperty("webm"))
        );

        data.video = data.isYouTube || isVideo;
        data.playing = false;

        if (data.isYouTube) {
          // youtube video
          data.playerReady = false;
          data.posterLoaded = false;

          loadYouTube(data, source, firstLoad);
        } else if ($.type(source) === "object" && source.hasOwnProperty("poster")) {
          // html5 video
          loadVideo(data, source, firstLoad);
        } else {
          var newSource = source;

          // Responsive image handling
          if ($.type(source) === "object") {
            var cache = [],
              keys = [],
              i;

            for (i in source) {
              if (source.hasOwnProperty(i)) {
                keys.push(i);
              }
            }

            keys.sort(Functions.sortAsc);

            for (i in keys) {
              if (keys.hasOwnProperty(i)) {
                cache.push({
                  width: parseInt(keys[i]),
                  url: source[keys[i]],
                  mq: Window.matchMedia("(min-width: " + parseInt(keys[i]) + "px)")
                });
              }
            }

            data.responsive = true;
            data.sources = cache;

            newSource = calculateSource(data);
          }

          loadImage(data, newSource, false, firstLoad);
        }
      } else {
        data.$el.trigger(Events.loaded);
      }
    }

    /**
     * @method private
     * @name calculateSource
     * @description Determines responsive source
     * @param data [object] "Instance data"
     * @return [string] "New source url"
     */

    function calculateSource(data) {
      var source = data.source;

      if (data.responsive) {
        source = data.sources[0].url;

        for (var i in data.sources) {
          if (data.sources.hasOwnProperty(i)) {
            if (Formstone.support.matchMedia) {
              if (data.sources[i].mq.matches) {
                source = data.sources[i].url;
              }
            } else {
              // Fallback, grab the first breakpoint that's large enough
              if (data.sources[i].width < Formstone.fallbackWidth) {
                source = data.sources[i].url;
              }
            }
          }
        }
      }

      return source;
    }

    /**
     * @method private
     * @name loadImage
     * @description Loads source image
     * @param data [object] "Instance data",
     * @param source [string] "Source image"
     * @param poster [boolean] "Flag for video poster"
     * @param firstLoad [boolean] "Flag for first load"
     */

    function loadImage(data, source, poster, firstLoad) {
      var imageClasses = [RawClasses.media, RawClasses.image, (firstLoad !== true ? RawClasses.animated : '')].join(" "),
        $media = $('<div class="' + imageClasses + '" aria-hidden="true"><img alt="' + data.alt + '"></div>'),
        $img = $media.find("img"),
        newSource = source;

      // Load image
      $img.one(Events.load, function() {
        if (BGSupport) {
          $media.addClass(RawClasses.native)
            .css({
              backgroundImage: "url('" + newSource + "')"
            });
        }

        // YTransition in
        $media.fsTransition({
          property: "opacity"
        },
        function() {
          if (!poster) {
            cleanMedia(data);
          }
        }).css({
          opacity: 1
        });

        doResizeInstance(data);

        if (!poster || firstLoad) {
          data.$el.trigger(Events.loaded);
        }
      }).one(Events.error, data, loadError)
        .attr("src", newSource);

      if (data.responsive) {
        $media.addClass(RawClasses.responsive);
      }

      data.$container.append($media);

      // Check if image is cached
      if ($img[0].complete || $img[0].readyState === 4) {
        $img.trigger(Events.load);
      }

      data.currentSource = newSource;
    }

    /**
     * @method private
     * @name loadVideo
     * @description Loads source video
     * @param data [object] "Instance data"
     * @param source [object] "Source video"
     * @param firstLoad [boolean] "Flag for first load"
     */

    function loadVideo(data, source, firstLoad) {
      if (data.source && data.source.poster) {
        loadImage(data, data.source.poster, true, true);

        firstLoad = false;
      }

      // if (!Formstone.isMobile) {
        var videoClasses = [RawClasses.media, RawClasses.video, (firstLoad !== true ? RawClasses.animated : '')].join(" "),
          html = '<div class="' + videoClasses + '" aria-hidden="true">';

        html += '<video playsinline';
        if (data.loop) {
          html += ' loop';
        }
        if (data.mute) {
          html += ' muted';
        }
        if (data.autoPlay) {
          html += ' autoplay';
        }
        html += '>';
        if (data.source.webm) {
          html += '<source src="' + data.source.webm + '" type="video/webm" />';
        }
        if (data.source.mp4) {
          html += '<source src="' + data.source.mp4 + '" type="video/mp4" />';
        }
        if (data.source.ogg) {
          html += '<source src="' + data.source.ogg + '" type="video/ogg" />';
        }
        html += '</video>';
        html += '</div>';

        var $media = $(html),
          $video = $media.find("video");

        $video.one(Events.loadedMetaData, function(e) {
          $media.fsTransition({
            property: "opacity"
          },
          function() {
            cleanMedia(data);
          }).css({
            opacity: 1
          });

          doResizeInstance(data);

          data.$el.trigger(Events.loaded);

          // Events
          if (data.autoPlay) {
            playVideo(data);
          }
        });

        data.$container.append($media);
      // }
    }

    /**
     * @method private
     * @name loadYouTube
     * @description Loads YouTube video
     * @param data [object] "Instance data"
     * @param source [string] "YouTube URL"
     */

    function loadYouTube(data, source, firstLoad) {
      if (!data.videoId) {
        var parts = source.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
        data.videoId = parts[1];
      }

      if (!data.posterLoaded) {
        if (!data.source.poster) {
          data.source.poster = "//img.youtube.com/vi/" + data.videoId + "/0.jpg";
        }

        data.posterLoaded = true;
        loadImage(data, data.source.poster, true, firstLoad);

        firstLoad = false;
      }

      // if (!Formstone.isMobile) {
        if (!$("script[src*='youtube.com/iframe_api']").length) {
          $("head").append('<script src="//www.youtube.com/iframe_api"></script>');
        }

        if (!YouTubeReady) {
          YouTubeQueue.push({
            data: data,
            source: source
          });
        } else {
          var guid = data.guid + "_" + (data.youTubeGuid++),
            youTubeClasses = [RawClasses.media, RawClasses.embed, (firstLoad !== true ? RawClasses.animated : '')].join(" "),
            html = '<div class="' + youTubeClasses + '" aria-hidden="true">';

          html += '<div id="' + guid + '"></div>';
          html += '</div>';

          var $media = $(html),
            ytOptions = $.extend(true, {}, {
              controls: 0,
              rel: 0,
              showinfo: 0,
              wmode: "transparent",
              enablejsapi: 1,
              version: 3,
              playerapiid: guid,
              loop: (data.loop) ? 1 : 0,
              autoplay: 1,
              origin: Window.location.protocol + "//" + Window.location.host
            }, data.youtubeOptions);

          // For youtube auto so events fire, disabled by plugin
          ytOptions.autoplay = 1;

          data.$container.append($media);

          if (data.player) {
            data.oldPlayer = data.player;
            data.player = null;
          }

          data.player = new Window.YT.Player(guid, {
            videoId: data.videoId,
            playerVars: ytOptions,
            events: {
              onReady: function(e) {
                /* console.log("onReady", e); */

                data.playerReady = true;
                /* data.player.setPlaybackQuality("highres"); */

                if (data.mute) {
                  data.player.mute();
                }

                if (!data.autoPlay) {
                  // make sure the video plays
                  data.player.pauseVideo();
                }
              },
              onStateChange: function(e) {
                /* console.log("onStateChange", e); */

                // -1 = unstarted
                //  0 = ended
                //  1 = playing
                //  2 = paused
                //  3 = buffering
                //  4 =
                //  5 = cued

                if (!data.playing && e.data === Window.YT.PlayerState.PLAYING) {
                  data.playing = true;

                  $media.fsTransition({
                    property: "opacity"
                  },
                  function() {
                    cleanMedia(data);
                  }).css({
                    opacity: 1
                  });

                  doResizeInstance(data);

                  data.$el.trigger(Events.loaded);
                } else if (data.loop && data.playing && e.data === Window.YT.PlayerState.ENDED) {
                  // fix looping option
                  data.player.playVideo();
                }

                // Fix for Safari's overly secure security settings...
                data.$el.find(Classes.embed)
                  .addClass(RawClasses.ready);
              },
              onPlaybackQualityChange: function(e) {
                /* console.log("onPlaybackQualityChange", e); */
              },
              onPlaybackRateChange: function(e) {
                /* console.log("onPlaybackRateChange", e); */
              },
              onError: function(e) {
                /* console.log("onError", e); */
                loadError({
                  data: data
                });
              },
              onApiChange: function(e) {
                /* console.log("onApiChange", e); */
              }
            }
          });

          // Resize
          doResizeInstance(data);
        }
      // }
    }

    /**
     * @method private
     * @name cleanMedia
     * @description Cleans up old media
     * @param data [object] "Instance data"
     */

    function cleanMedia(data) {
      var $media = data.$container.find(Classes.media);

      if ($media.length >= 1) {
        $media.not(":last").remove();
        data.oldPlayer = null;
      }
    }

    /**
     * @method private
     * @name loadError
     * @description Error when resource fails to load.
     */

    function loadError(e) {
      var data = e.data;

      data.$el.trigger(Events.error);
    }

    /**
     * @method
     * @name unload
     * @description Unloads current media
     * @example $(".target").background("unload");
     */

    /**
     * @method private
     * @name uploadMedia
     * @description Unloads current media
     * @param data [object] "Instance data"
     */

    function unloadMedia(data) {
      var $media = data.$container.find(Classes.media);

      if ($media.length >= 1) {
        $media.fsTransition({
          property: "opacity"
        },
        function() {
          $media.remove();
          delete data.source;
        }).css({
          opacity: 0
        });
      }
    }

    /**
     * @method private
     * @name pauseVideo
     * @description Pauses target video
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name pause
     * @description Pauses target video
     * @example $(".target").background("pause");
     */

    function pauseVideo(data) {
      if (data.video && data.playing) {
        if (data.isYouTube) {
          if (data.playerReady) {
            data.player.pauseVideo();
          } else {
            data.autoPlay = false;
          }
        } else {
          var $video = data.$container.find("video");

          if ($video.length) {
            $video[0].pause();
          }
        }

        data.playing = false;
      }
    }

    /**
     * @method private
     * @name playVideo
     * @description Plays target video
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name play
     * @description Plays target video
     * @example $(".target").background("play");
     */

    function playVideo(data) {
      if (data.video && !data.playing) {
        if (data.isYouTube) {
          if (data.playerReady) {
            data.player.playVideo();
          } else {
            data.autoPlay = true;
          }
        } else {
          var $video = data.$container.find("video");

          if ($video.length) {
            $video[0].play();
          }

          data.playing = true;
        }
      }
    }

    /**
     * @method private
     * @name muteVideo
     * @description Mutes target video
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name mute
     * @description Mutes target video
     * @example $(".target").background("mute");
     */

    function muteVideo(data) {
      if (data.video) {
        if (data.isYouTube && data.playerReady) {
          data.player.mute();
        } else {
          var $video = data.$container.find("video");

          if ($video.length) {
            $video[0].muted = true;
          }
        }
      }

      data.mute = true;
    }

    /**
     * @method private
     * @name unmuteVideo
     * @description Unmutes target video
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name unmute
     * @description Unmutes target video
     * @example $(".target").background("unmute");
     */

    function unmuteVideo(data) {
      if (data.video) {
        if (data.isYouTube && data.playerReady) {
          data.player.unMute();
        } else {
          var $video = data.$container.find("video");

          if ($video.length) {
            $video[0].muted = false;
          }
        }

        data.playing = true;
      }

      data.mute = false;
    }

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      if (data.visible) {
        if (data.responsive) {
          var newSource = calculateSource(data);

          if (newSource !== data.currentSource) {
            loadImage(data, newSource, false, true);
          } else {
            doResizeInstance(data);
          }
        } else {
          doResizeInstance(data);
        }
      }
    }

    /**
     * @method private
     * @name resize
     * @description Resize target instance
     * @example $(".target").background("resize");
     */

    /**
     * @method private
     * @name doResizeInstance
     * @description Resize target instance
     * @param data [object] "Instance data"
     */

    function doResizeInstance(data) {
      // Target all media
      var $all = data.$container.find(Classes.media);

      for (var i = 0, count = $all.length; i < count; i++) {
        var $m = $all.eq(i),
          type = (data.isYouTube) ? "iframe" : ($m.find("video").length ? "video" : "img"),
          $media = $m.find(type);

        // If media found and scaling is not natively support
        if ($media.length && !(type === "img" && BGSupport)) {
          var frameWidth = data.$el.outerWidth(),
            frameHeight = data.$el.outerHeight(),
            frameRatio = frameWidth / frameHeight,
            nSize = naturalSize(data, $media);

          data.width = nSize.width;
          data.height = nSize.height;
          data.left = 0;
          data.top = 0;

          var mediaRatio = (data.isYouTube) ? data.embedRatio : (data.width / data.height);

          // First check the height
          data.height = frameHeight;
          data.width = data.height * mediaRatio;

          // Next check the width
          if (data.width < frameWidth) {
            data.width = frameWidth;
            data.height = data.width / mediaRatio;
          }

          // Position the media
          data.left = -(data.width - frameWidth) / 2;
          data.top = -(data.height - frameHeight) / 2;

          $m.css({
            height: data.height,
            width: data.width,
            left: data.left,
            top: data.top
          });
        }
      }
    }

    /**
     * @method private
     * @name cacheScrollPosition
     * @description Cahce target scroll position
     * @param data [object] "Instance data"
     */

    function cacheScrollPosition(data) {
      data.scrollTop = data.$el.offset().top;
    }

    /**
     * @method private
     * @name checkScrollPosition
     * @description Check target scroll position against window
     * @param data [object] "Instance data"
     */

    function checkScrollPosition(data) {
      if (!data.visible && data.scrollTop < ScrollTop + data.lazyEdge) {
        data.visible = true;
        loadInitialSource(data);
      }
    }

    /**
     * @method private
     * @name naturalSize
     * @description Determines natural size of target media
     * @param data [object] "Instance data"
     * @param $media [jQuery object] "Source media object"
     * @return [object OR boolean] "Object containing natural height and width values or false"
     */

    function naturalSize(data, $media) {
      if (data.isYouTube) {
        return {
          height: 500,
          width: 500 / data.embedRatio
        };
      } else if ($media.is("img")) {
        var node = $media[0];

        if ($.type(node.naturalHeight) !== "undefined") {
          return {
            height: node.naturalHeight,
            width: node.naturalWidth
          };
        } else {
          var img = new Image();
          img.src = node.src;
          return {
            height: img.height,
            width: img.width
          };
        }
      } else {
        return {
          height: $media[0].videoHeight,
          width: $media[0].videoWidth
        };
      }
      return false;
    }

    /**
     * @plugin
     * @name Background
     * @description A jQuery plugin for full-frame image and video backgrounds.
     * @type widget
     * @main background.js
     * @main background.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency transition.js
     */

    var Plugin = Formstone.Plugin("background", {
        widget: true,

        /**
         * @options
         * @param alt [string] <''> "Image `alt` attribute"
         * @param autoPlay [boolean] <true> "Autoplay video"
         * @param customClass [string] <''> "Class applied to instance"
         * @param embedRatio [number] <1.777777> "Video / embed ratio (16/9)"
         * @param lazy [boolean] <false> "Lazy load with scroll"
         * @param lazyEdge [int] <100> "Lazy load edge"
         * @param loop [boolean] <true> "Loop video"
         * @param mute [boolean] <true> "Mute video"
         * @param source [string OR object] <null> "Source image (string or object) or video (object)"
         */
        defaults: {
          alt: "",
          autoPlay: true,
          customClass: "",
          embedRatio: 1.777777,
          lazy: false,
          lazyEdge: 100,
          loop: true,
          mute: true,
          source: null,
          youtubeOptions: {}
        },

        classes: [
          "container",
          "media",
          "animated",
          "responsive",
          "native",
          "fixed",
          "ready",
          "lazy"
        ],

        /**
         * @events
         * @event loaded.background "Background media loaded"
         * @event ready.background "Background media ready"
         * @event error.background "Background media error"
         */

        events: {
          loaded: "loaded",
          ready: "ready",
          loadedMetaData: "loadedmetadata"
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,

          play: playVideo,
          pause: pauseVideo,
          mute: muteVideo,
          unmute: unmuteVideo,
          resize: doResizeInstance,
          load: loadMedia,
          unload: unloadMedia
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window,
      $Window = Formstone.$window,
      ScrollTop = 0,
      $Instances = [],
      $LazyInstances = [],

      BGSupport = ("backgroundSize" in Formstone.document.documentElement.style),
      YouTubeReady = false,
      YouTubeQueue = [];

    // Setup

    Formstone.Ready(setup);

    /**
     * @method private global
     * @name window.onYouTubeIframeAPIReady
     * @description Attaches YouTube players to active instances
     */
    Window.onYouTubeIframeAPIReady = function() {
      YouTubeReady = true;

      for (var i in YouTubeQueue) {
        if (YouTubeQueue.hasOwnProperty(i)) {
          loadYouTube(YouTubeQueue[i].data, YouTubeQueue[i].source);
        }
      }

      YouTubeQueue = [];
    };

  })

);

/*! formstone v1.4.13-1 [carousel.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery",
        "./touch"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize(windowWidth) {
      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      var i;

      data.didPan = false;

      data.carouselClasses = [
        RawClasses.base,
        data.theme,
        data.customClass,
        (data.rtl ? RawClasses.rtl : RawClasses.ltr)
      ];

      data.maxWidth = (data.maxWidth === Infinity ? "100000px" : data.maxWidth);
      data.mq = "(min-width:" + data.minWidth + ") and (max-width:" + data.maxWidth + ")";

      data.customControls = ($.type(data.controls) === "object" && data.controls.previous && data.controls.next);
      data.customPagination = ($.type(data.pagination) === "string");

      data.id = this.attr("id");

      if (data.id) {
        data.ariaId = data.id;
      } else {
        data.ariaId = data.rawGuid;
        this.attr("id", data.ariaId);
      }

      // Legacy browser support
      if (!Formstone.support.transform) {
        data.useMargin = true;
      }

      // Build controls and pagination
      var controlsHtml = '',
        paginationHtml = '',
        controlPrevClasses = [RawClasses.control, RawClasses.control_previous].join(" "),
        controlNextClasses = [RawClasses.control, RawClasses.control_next].join(" ");

      if (data.controls && !data.customControls) {
        data.labels.controls = data.labels.controls.replace('{guid}', data.numGuid);

        controlsHtml += '<div class="' + RawClasses.controls + '" aria-label="' + data.labels.controls + '" aria-controls="' + data.ariaId + '">';
        controlsHtml += '<button type="button" class="' + controlPrevClasses + '" aria-label="' + data.labels.previous + '">' + data.labels.previous + '</button>';
        controlsHtml += '<button type="button" class="' + controlNextClasses + '" aria-label="' + data.labels.next + '">' + data.labels.next + '</button>';
        controlsHtml += '</div>';
      }

      if (data.pagination && !data.customPagination) {
        data.labels.pagination = data.labels.pagination.replace('{guid}', data.numGuid);

        paginationHtml += '<div class="' + RawClasses.pagination + '" aria-label="' + data.labels.pagination + '" aria-controls="' + data.ariaId + '" role="navigation">';
        paginationHtml += '</div>';
      }

      if (data.autoHeight) {
        data.carouselClasses.push(RawClasses.auto_height);
      }

      if (data.contained) {
        data.carouselClasses.push(RawClasses.contained);
      }

      if (data.single) {
        data.carouselClasses.push(RawClasses.single);
      }

      // Modify dom
      this.addClass(data.carouselClasses.join(" "))
        .wrapInner('<div class="' + RawClasses.wrapper + '" aria-live="polite"><div class="' + RawClasses.container + '"><div class="' + RawClasses.canister + '"></div></div></div>')
        .append(controlsHtml)
        .wrapInner('<div class="' + RawClasses.viewport + '"></div>')
        .append(paginationHtml);

      data.$viewport = this.find(Classes.viewport).eq(0);
      data.$container = this.find(Classes.container).eq(0);
      data.$canister = this.find(Classes.canister).eq(0);
      data.$pagination = this.find(Classes.pagination).eq(0);

      data.$controlPrevious = data.$controlNext = $('');

      if (data.customControls) {
        data.$controls = $(data.controls.container).addClass([RawClasses.controls, RawClasses.controls_custom].join(" "));
        data.$controlPrevious = $(data.controls.previous).addClass(controlPrevClasses);
        data.$controlNext = $(data.controls.next).addClass(controlNextClasses);
      } else {
        data.$controls = this.find(Classes.controls).eq(0);
        data.$controlPrevious = data.$controls.find(Classes.control_previous);
        data.$controlNext = data.$controls.find(Classes.control_next);
      }

      data.$controlItems = data.$controlPrevious.add(data.$controlNext);

      if (data.customPagination) {
        data.$pagination = $(data.pagination).addClass([RawClasses.pagination]);
      }

      data.$paginationItems = data.$pagination.find(Classes.page);

      data.index = 0;
      data.enabled = false;
      data.leftPosition = 0;
      data.autoTimer = null;
      data.resizeTimer = null;

      // live query for linked to avoid missing new elements
      var linked = this.data(Namespace + "-linked");
      data.linked = linked ? '[data-' + Namespace + '-linked="' + linked + '"]' : false;

      // force paged if linked, keeps counts accurate
      if (data.linked) {
        data.paged = true;
      }

      // live query for controlled to avoid missing new elements
      var subordinate = this.data(Namespace + "-controller-for") || '';
      data.$subordinate = $(subordinate);

      if (data.$subordinate.length) {
        data.controller = true;
      }

      // Responsive count handling
      if ($.type(data.show) === "object") {
        var show = data.show,
          cache = [],
          keys = [];

        for (i in show) {
          if (show.hasOwnProperty(i)) {
            keys.push(i);
          }
        }

        keys.sort(Functions.sortAsc);

        for (i in keys) {
          if (keys.hasOwnProperty(i)) {
            cache.push({
              width: parseInt(keys[i]),
              count: show[keys[i]],
              mq: window.matchMedia("(min-width: " + parseInt(keys[i]) + "px)")
            });
          }
        }

        data.show = cache;
      }

      cacheValues(data);

      // Media Query support
      $.fsMediaquery("bind", data.rawGuid, data.mq, {
        enter: function() {
          enable.call(data.$el, data);
        },
        leave: function() {
          disable.call(data.$el, data);
        }
      });

      cacheInstances();

      data.carouselClasses.push(RawClasses.enabled);
      data.carouselClasses.push(RawClasses.animated);
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      Functions.clearTimer(data.autoTimer);
      Functions.clearTimer(data.resizeTimer);

      disable.call(this, data);

      $.fsMediaquery("unbind", data.rawGuid);

      if (data.id !== data.ariaId) {
        this.removeAttr("id");
      }

      data.$controlItems.removeClass([Classes.control, RawClasses.control_previous, Classes.control_next, Classes.visible].join(" "))
        .off(Events.namespace);

      data.$images.off(Events.namespace);
      data.$canister.fsTouch("destroy");

      data.$items.removeClass([RawClasses.item, RawClasses.visible, Classes.item_previous, Classes.item_next].join(" "))
        .unwrap()
        .unwrap()
        .unwrap()
        .unwrap();

      if (data.controls && !data.customControls) {
        data.$controls.remove();
      }

      if (data.customControls) {
        data.$controls.removeClass([RawClasses.controls, RawClasses.controls_custom, RawClasses.visible].join(" "));
      }

      if (data.pagination && !data.customPagination) {
        data.$pagination.remove();
      }

      if (data.customPagination) {
        data.$pagination.html("").removeClass([RawClasses.pagination, RawClasses.visible].join(" "));
      }

      this.removeClass(data.carouselClasses.join(" "));

      cacheInstances();
    }

    /**
     * @method
     * @name disable
     * @description Disables instance of plugin
     * @example $(".target").carousel("disable");
     */

    function disable(data) {
      if (data.enabled) {
        Functions.clearTimer(data.autoTimer);

        data.enabled = false;

        data.$subordinate.off(Events.update);

        this.removeClass([RawClasses.enabled, RawClasses.animated].join(" "))
          .off(Events.namespace);

        data.$canister.fsTouch("destroy")
          .off(Events.namespace)
          .attr("style", "")
          .css(TransitionProperty, "none");

        data.$items.css({
          width: "",
          height: ""
        }).removeClass([RawClasses.visible, Classes.item_previous, Classes.item_next].join(" "));

        data.$images.off(Events.namespace);
        data.$controlItems.off(Events.namespace);
        data.$pagination.html("").off(Events.namespace);

        hideControls(data);

        if (data.useMargin) {
          data.$canister.css({
            marginLeft: ""
          });
        } else {
          data.$canister.css(TransformProperty, "");
        }

        data.index = 0;
      }
    }

    /**
     * @method
     * @name enable
     * @description Enables instance of plugin
     * @example $(".target").carousel("enable");
     */

    function enable(data) {
      if (!data.enabled) {
        data.enabled = true;

        this.addClass(RawClasses.enabled);

        data.$controlItems.on(Events.click, data, onAdvance);
        data.$pagination.on(Events.click, Classes.page, data, onSelect);

        data.$items.on(Events.click, data, onItemClick);
        data.$subordinate.on(Events.update, data, onSubordinateUpdate);

        onSubordinateUpdate({
          data: data
        }, 0);

        data.$canister.fsTouch({
            axis: "x",
            pan: true,
            swipe: true
          }).on(Events.panStart, data, onPanStart)
          .on(Events.pan, data, onPan)
          .on(Events.panEnd, data, onPanEnd)
          .on(Events.swipe, data, onSwipe)
          .on(Events.focusIn, data, onItemFocus)
          .css(TransitionProperty, "");

        cacheValues(data);

        // Watch Images
        data.$images.on(Events.load, data, onImageLoad);

        // Auto timer
        if (data.autoAdvance) {
          data.autoTimer = Functions.startTimer(data.autoTimer, data.autoTime, function() {
            autoAdvance(data);
          }, true);
        }

        resizeInstance.call(this, data);
      }
    }

    /**
     * @method
     * @name resize
     * @description Resizes instance
     * @example $(".target").carousel("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Resizes each instance
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      if (data.enabled) {
        var h, i, j, k, w,
          $items,
          $first,
          width,
          height,
          left;

        data.count = data.$items.length;

        if (data.count < 1) { // avoid empty carousels
          hideControls(data);
          data.$canister.css({
            height: ""
          });

          return;
        }

        this.removeClass(RawClasses.animated);

        data.containerWidth = data.$container.outerWidth(false);

        data.visible = calculateVisible(data);
        data.perPage = data.paged ? 1 : data.visible;

        data.itemMarginLeft = parseInt(data.$items.eq(0).css("marginLeft"));
        data.itemMarginRight = parseInt(data.$items.eq(0).css("marginRight"));

        data.itemMargin = data.itemMarginLeft + data.itemMarginRight;

        if (isNaN(data.itemMargin)) {
          data.itemMargin = 0;
        }

        data.itemWidth = (data.containerWidth - (data.itemMargin * (data.visible - 1))) / data.visible;
        data.itemHeight = 0;

        data.pageWidth = data.paged ? data.itemWidth : data.containerWidth;

        if (data.matchWidth) {
          data.canisterWidth = data.single ? data.containerWidth : ((data.itemWidth + data.itemMargin) * data.count);
        } else {
          data.canisterWidth = 0;
          data.$canister.css({
            width: 1000000
          });

          for (i = 0; i < data.count; i++) {
            data.canisterWidth += data.$items.eq(i).outerWidth(true);
          }
        }

        data.$canister.css({
          width: data.canisterWidth,
          height: ""
        });

        data.$items.css({
          width: (data.matchWidth) ? data.itemWidth : "",
          height: ""
        }).removeClass([RawClasses.visible, RawClasses.item_previous, RawClasses.item_next].join(" "));

        // initial pages
        data.pages = [];
        data.items = [];
        // data.pagesReverse = [];
        // data.pagesVisible = [];

        var $item,
          iWidth = 0,
          iHeight = 0,
          tWidth = 0,
          iLeft = 0;

        width = 0;
        height = 0;
        $items = $();

        // Pages forward
        for (i = 0; i < data.count; i++) {
          $item = data.$items.eq(i);
          iWidth = data.matchWidth ? (data.itemWidth + data.itemMargin) : $item.outerWidth(true);
          iHeight = $item.outerHeight();
          iLeft = $item.position().left;

          data.items.push({
            $el: $item,
            width: iWidth,
            left: data.rtl ? iLeft - (data.canisterWidth - iWidth) : iLeft
          });

          // Too far / Paged
          if ( ($items.length && width + iWidth > data.containerWidth + data.itemMargin) || (data.paged && i > 0) ) {
            $first = data.rtl ? $items.eq($items.length - 1) : $items.eq(0);
            left = $first.position().left;

            data.pages.push({
              left: data.rtl ? left - (data.canisterWidth - width) : left,
              // left: data.rtl ? left - (data.canisterWidth - (data.containerWidth - width)) : left,
              height: height,
              width: width,
              $items: $items
            });

            // Reset counters
            $items = $();
            height = 0;
            width = 0;
          }

          $items = $items.add($item);
          width += iWidth;
          tWidth += iWidth;

          if (iHeight > height) {
            height = iHeight;
          }
          if (height > data.itemHeight) {
            data.itemHeight = height;
          }
        }

        // // Last page

        // if (data.matchWidth) {
        //   iWidth = 0;
        //   iHeight = 0;
        //   tWidth = 0;
        //
        //   width = 0;
        //   height = 0;
        //   $items = $();
        //
        //   // Pages reverse
        //   for (i = data.count - 1; i >= 0; i--) {
        //     $item = data.$items.eq(i);
        //     iWidth = data.matchWidth ? (data.itemWidth + data.itemMargin) : $item.outerWidth(true);
        //     iHeight = $item.outerHeight();
        //
        //     // Too far / Paged
        //     if ( ($items.length && width + iWidth > data.containerWidth + data.itemMargin) || (data.paged && i < data.count - 1) ) {
        //       $first = data.rtl ? $items.eq($items.length - 1) : $items.eq(0);
        //       left = $first.position().left;
        //
        //       data.pagesReverse.push({
        //         left: data.rtl ? left - (data.canisterWidth - width) : left,
        //         // left: data.rtl ? left - (data.canisterWidth - (data.containerWidth - width)) : left,
        //         height: height,
        //         width: width,
        //         $items: $items
        //       });
        //
        //       // Reset counters
        //       $items = $();
        //       height = 0;
        //       width = 0;
        //     }
        //
        //     $items = $items.add($item);
        //     width += iWidth;
        //     tWidth += iWidth;
        //
        //     if (iHeight > height) {
        //       height = iHeight;
        //     }
        //     if (height > data.itemHeight) {
        //       data.itemHeight = height;
        //     }
        //   }
        //
        //   // Final page
        //   data.pages.push( data.pagesReverse[0] );
        // } else {
          $first = data.rtl ? $items.eq($items.length - 1) : $items.eq(0);
          left = data.canisterWidth - data.containerWidth - (data.rtl ? data.itemMarginLeft : data.itemMarginRight);

          data.pages.push({
            left: data.rtl ? -left : left,
            height: height,
            width: width,
            $items: $items
          });
        // }

        data.pageCount = data.pages.length;

        // Random Config

        if (data.paged) {
          data.pageCount -= (data.count % data.visible);
        }

        if (data.pageCount <= 0) {
          data.pageCount = 1;
        }

        data.maxMove = -data.pages[data.pageCount - 1].left;

        // auto / match height
        if (data.autoHeight) {
          data.$canister.css({
            height: data.pages[0].height
          });
        } else if (data.matchHeight) {
          data.$items.css({
            height: data.itemHeight
          });
        }

        // Reset Page Count
        var html = '';
        for (i = 0; i < data.pageCount; i++) {
          html += '<button type="button" class="' + RawClasses.page + '">' + (i + 1) + '</button>';
        }
        data.$pagination.html(html);

        // update pagination
        if (data.pageCount <= 1) {
          hideControls(data);
        } else {
          showControls(data);
        }
        data.$paginationItems = data.$pagination.find(Classes.page);

        positionCanister(data, data.index, false);

        setTimeout(function() {
          data.$el.addClass(RawClasses.animated);
        }, 5);
      }
    }

    /**
     * @method private
     * @name cacheValues
     * @description Caches internal values after item change
     * @param data [object] "Instance data"
     */

    function cacheValues(data) {
      // Cache vaules
      data.$items = data.$canister.children().not(":hidden").addClass(RawClasses.item);
      data.$images = data.$canister.find("img");

      data.totalImages = data.$images.length;
    }

    /**
     * @method
     * @name reset
     * @description Resets instance after item change
     * @example $(".target").carousel("reset");
     */

    /**
     * @method private
     * @name resetInstance
     * @description Resets instance after item change
     * @param data [object] "Instance data"
     */

    function resetInstance(data) {
      if (data.enabled) {
        updateItems.call(this, data, false);
      }
    }

    /**
     * @method
     * @name update
     * @description Updates carousel items
     * @example $(".target").carousel("update", "...");
     */

    /**
     * @method private
     * @name updateItems
     * @description Updates carousel items for each instance
     * @param data [object] "Instance data"
     * @param html [string] "New carousel contents"
     */

    function updateItems(data, html) {
      data.$images.off(Events.namespace);

      if (html !== false) {
        data.$canister.html(html);
      }

      data.index = 0;

      cacheValues(data);

      resizeInstance.call(this, data);
    }

    /**
     * @method
     * @name jumpPage
     * @description Jump instance of plugin to specific page
     * @example $(".target").carousel("jumpPage", 1);
     * @param index [int] "New index"
     * @param silent [boolean] "Flag to prevent triggering update event"
     */
    /**
     * @method
     * @name jump
     * @description Jump instance of plugin to specific page; Alias of `jumpPage`
     * @example $(".target").carousel("jump", 1);
     * @param index [int] "New index"
     * @param silent [boolean] "Flag to prevent triggering update event"
     */

    /**
     * @method private
     * @name jumpPage
     * @description Jump instance of plugin to specific page
     * @param data [object] "Instance data"
     * @param index [int] "New index"
     * @param silent [boolean] ""
     * @param animated [boolean] ""
     */

    function jumpPage(data, index, silent, fromLinked, animated) {
      if (data.enabled) {
        Functions.clearTimer(data.autoTimer);

        if (typeof animated === "undefined") {
          animated = true;
        }

        positionCanister(data, index - 1, animated, silent, fromLinked);
      }
    }

    /**
     * @method
     * @name previousPage
     * @description Move to the previous page
     * @example $(".target").carousel("previousPage");
     */
    /**
     * @method
     * @name previous
     * @description Move to the previous page; Alias of `previousPage`
     * @example $(".target").carousel("previous");
     */

    /**
     * @method private
     * @name previousPage
     * @description Move to previous page
     * @param data [object] "Instance data"
     */

    function previousPage(data) {
      var index = data.index - 1;

      if (data.infinite && index < 0) {
        index = data.pageCount - 1;
      }

      positionCanister(data, index);
    }

    /**
     * @method
     * @name nextPage
     * @description Move to next page
     * @example $(".target").carousel("nextPage");
     */
    /**
     * @method
     * @name next
     * @description Move to next page; Alias of `nextPage`
     * @example $(".target").carousel("next");
     */

    /**
     * @method private
     * @name nextPage
     * @description Move to next page
     * @param data [object] "Instance data"
     */

    function nextPage(data) {
      var index = data.index + 1;

      if (data.infinite && index >= data.pageCount) {
        index = 0;
      }

      positionCanister(data, index);
    }


    /**
     * @method
     * @name jumpItem
     * @description Jump instance of plugin to specific item
     * @example $(".target").carousel("jumpItem", 1);
     * @param index [int] "New item index"
     * @param silent [boolean] "Flag to prevent triggering update event"
     */

    /**
     * @method private
     * @name jumpItem
     * @description Jump instance of plugin to specific page
     * @param data [object] "Instance data"
     * @param index [int] "New index"
     * @param silent [boolean] ""
     * @param animated [boolean] ""
     */

    function jumpItem(data, index, silent, fromLinked, animated) {
      if (data.enabled) {
        Functions.clearTimer(data.autoTimer);

        var $active = data.$items.eq(index - 1);

        if (typeof animated === "undefined") {
          animated = true;
        }

        for (var i = 0; i < data.pageCount; i++) {
          if (data.pages[i].$items.is($active)) {
            positionCanister(data, i, animated, silent, fromLinked);
            break;
          }
        }
      }
    }

    /**
     * @method private
     * @name onImageLoad
     * @description Handles child image load
     * @param e [object] "Event data"
     */

    function onImageLoad(e) {
      var data = e.data;

      data.resizeTimer = Functions.startTimer(data.resizeTimer, 1, function() {
        resizeInstance.call(data.$el, data);
      });
    }

    /**
     * @method private
     * @name autoAdvance
     * @description Handles auto advancement
     * @param data [object] "Instance data"
     */

    function autoAdvance(data) {
      var index = data.index + 1;

      if (index >= data.pageCount) {
        index = 0;
      }

      positionCanister(data, index);
    }

    /**
     * @method private
     * @name onAdvance
     * @description Handles item advancement
     * @param e [object] "Event data"
     */

    function onAdvance(e) {
      Functions.killEvent(e);

      var data = e.data,
        index = data.index + ($(e.currentTarget).hasClass(RawClasses.control_next) ? 1 : -1);

      Functions.clearTimer(data.autoTimer);
      positionCanister(data, index);
    }

    /**
     * @method private
     * @name onSelect
     * @description Handles item select
     * @param e [object] "Event data"
     */

    function onSelect(e) {
      Functions.killEvent(e);

      var data = e.data,
        index = data.$paginationItems.index($(e.currentTarget));

      Functions.clearTimer(data.autoTimer);
      positionCanister(data, index);
    }

    /**
     * @method private
     * @name position
     * @description Handles updating instance position
     * @param data [object] "Instance data"
     * @param index [int] "Item index"
     */

    function positionCanister(data, index, animate, silent, fromLinked) {
      if (index < 0) {
        index = (data.infinite) ? data.pageCount - 1 : 0;
      }
      if (index >= data.pageCount) {
        index = (data.infinite) ? 0 : data.pageCount - 1;
      }

      if (data.count < 1) {
        return;
      }

      if (data.pages[index]) {
        data.leftPosition = -data.pages[index].left;
      }

      data.leftPosition = checkPosition(data, data.leftPosition);

      if (data.useMargin) {
        data.$canister.css({
          marginLeft: data.leftPosition
        });
      } else {
        if (animate === false) {
          data.$canister.css(TransitionProperty, "none")
            .css(TransformProperty, "translateX(" + data.leftPosition + "px)");

          // Slight delay before adding transitions back
          setTimeout(function() {
            data.$canister.css(TransitionProperty, "");
          }, 5);
        } else {
          data.$canister.css(TransformProperty, "translateX(" + data.leftPosition + "px)");
        }
      }

      // Update classes
      data.$items.removeClass([RawClasses.visible, RawClasses.item_previous, RawClasses.item_next].join(" "));

      if (data.single) {
        for (var i = 0, count = data.pages.length; i < count; i++) {
          if (i === index) {
            data.pages[i].$items.addClass(RawClasses.visible).attr("aria-hidden", "false");
          } else {
            data.pages[i].$items.not(data.pages[index].$items).addClass((i < index) ? RawClasses.item_previous : RawClasses.item_next).attr("aria-hidden", "true");
          }
        }
      } else {
        for (var i = 0; i < data.count; i++) {
          var multiplier = (data.rtl ? -1 : 1),
            posLeft = (data.leftPosition * multiplier) + (data.items[i].left * multiplier),
            posWidth = posLeft + data.items[i].width,
            edge = data.containerWidth + data.itemMargin + 1;

          if ( posLeft >= -1 && posWidth <= edge ) {
            data.items[i].$el.addClass(RawClasses.visible).attr("aria-hidden", "false");
          } else {
            if ( posLeft < 0 ) {
              data.items[i].$el.addClass(RawClasses.item_previous).attr("aria-hidden", "false");
            } else {
              data.items[i].$el.addClass(RawClasses.item_next).attr("aria-hidden", "false");
            }
          }
        }
      }

      // Auto Height
      if (data.autoHeight) {
        data.$canister.css({
          height: data.pages[index].height
        });
      }

      if (animate !== false && silent !== true && index !== data.index && (data.infinite || (index > -1 && index < data.pageCount))) {
        data.$el.trigger(Events.update, [index]);
      }

      data.index = index;

      // Linked
      if (data.linked && fromLinked !== true) {
        $(data.linked).not(data.$el)[NamespaceClean]("jumpPage", data.index + 1, true, true);
      }

      updateControls(data);
    }

    /**
     * @method private
     * @name hideControls
     * @description Hides instance controls
     * @param data [object] "Instance data"
     */

    function hideControls(data) {
      data.$controls.removeClass(RawClasses.visible);
      data.$controlItems.removeClass(RawClasses.visible);
      data.$pagination.removeClass(RawClasses.visible);
    }

    /**
     * @method private
     * @name showControls
     * @description Shows instance controls
     * @param data [object] "Instance data"
     */

    function showControls(data) {
      data.$controls.addClass(RawClasses.visible);
      data.$controlItems.addClass(RawClasses.visible);
      data.$pagination.addClass(RawClasses.visible);
    }

    /**
     * @method private
     * @name updateControls
     * @description Handles updating instance controls
     * @param data [object] "Instance data"
     */

    function updateControls(data) {
      data.$paginationItems.removeClass(RawClasses.active)
        .eq(data.index)
        .addClass(RawClasses.active);

      if (data.infinite) {
        data.$controlItems.addClass(RawClasses.visible);
      } else if (data.pageCount < 1) {
        data.$controlItems.removeClass(RawClasses.visible);
      } else {
        data.$controlItems.addClass(RawClasses.visible);

        if (data.index <= 0) {
          data.$controlPrevious.removeClass(RawClasses.visible);
        } else if (data.index >= data.pageCount - 1 || (!data.single && data.leftPosition === data.maxMove)) {
          data.$controlNext.removeClass(RawClasses.visible);
        }
      }
    }

    /**
     * @method private
     * @name calculateVisible
     * @description Determines how many items should show at screen width
     * @param data [object] "Instance data"
     * @return [int] "New visible count"
     */

    function calculateVisible(data) {
      var show = 1;

      if (data.single) {
        return show;
      } else if ($.type(data.show) === "array") {
        for (var i in data.show) {
          if (data.show.hasOwnProperty(i)) {
            if (Formstone.support.matchMedia) {
              if (data.show[i].mq.matches) {
                show = data.show[i].count;
              }
            } else {
              // Fallback, grab the first breakpoint that's large enough
              if (data.show[i].width < Formstone.fallbackWidth) {
                show = data.show[i].count;
              }
            }
          }
        }
      } else {
        show = data.show;
      }

      return (data.fill && data.count < show) ? data.count : show;
    }

    /**
     * @method private
     * @name onPanStart
     * @description Handles pan start event
     * @param e [object] "Event data"
     */

    function onPanStart(e, fromLinked) {
      var data = e.data;

      Functions.clearTimer(data.autoTimer);

      if (!data.single) {
        if (data.useMargin) {
          data.leftPosition = parseInt(data.$canister.css("marginLeft"));
        } else {
          var matrix = data.$canister.css(TransformProperty).split(",");
          data.leftPosition = parseInt(matrix[4]); // ?
        }

        data.$canister.css(TransitionProperty, "none")
          .css("will-change", "transform");

        onPan(e);

        // Linked
        if (data.linked && fromLinked !== true) {
          var percent = e.deltaX / data.pageWidth;

          if (data.rtl) {
            percent *= -1;
          }

          $(data.linked).not(data.$el)[NamespaceClean]("panStart", percent);
        }
      }

      data.isTouching = true;
    }

    /**
     * @method private
     * @name onPan
     * @description Handles pan event
     * @param e [object] "Event data"
     */

    function onPan(e, fromLinked) {
      var data = e.data;

      if (!data.single) {
        data.touchLeft = checkPosition(data, data.leftPosition + e.deltaX);

        if (data.useMargin) {
          data.$canister.css({
            marginLeft: data.touchLeft
          });
        } else {
          data.$canister.css(TransformProperty, "translateX(" + data.touchLeft + "px)");
        }

        // Linked
        if (data.linked && fromLinked !== true) {
          var percent = e.deltaX / data.pageWidth;

          if (data.rtl) {
            percent *= -1;
          }

          $(data.linked).not(data.$el)[NamespaceClean]("pan", percent);
        }
      }
    }

    /**
     * @method private
     * @name onPanEnd
     * @description Handles pan end event
     * @param e [object] "Event data"
     */

    function onPanEnd(e, fromLinked) {
      var data = e.data,
        delta = Math.abs(e.deltaX),
        increment = getIncrement(data, e),
        index = false;

      data.didPan = false;

      if (increment == 0) {
        index = data.index;
      } else {
        if (!data.single) {
          var i, count,
            left = Math.abs(data.touchLeft),
            page = false,
            dir = (data.rtl) ? "right" : "left";

          if (e.directionX === dir) {
            // Left (RTL Right)
            for (i = 0, count = data.pages.length; i < count; i++) {
              page = data.pages[i];

              if (left > Math.abs(page.left) + 20) {
                index = i + 1;
              }
            }
          } else {
            // Right (RTL Left)
            for (i = data.pages.length - 1, count = 0; i >= count; i--) {
              page = data.pages[i];

              if (left < Math.abs(page.left)) {
                index = i - 1;
              }
            }
          }
        }

        if (index === false) {
          index = (delta < 50) ? data.index : data.index + increment;
        }
      }

      if (index !== data.index) {
        data.didPan = true;
      }

      // Linked
      if (data.linked && fromLinked !== true) {
        $(data.linked).not(data.$el)[NamespaceClean]("panEnd", index);
      }

      endTouch(data, index);
    }

    /**
     * @method private
     * @name linkedPanStart
     * @description Handles linked pan start
     * @param data [object] "Instance data"
     * @param percent [float] "Percentage moved"
     */

    function linkedPanStart(data, percent) {
      Functions.clearTimer(data.autoTimer);

      if (!data.single) {
        if (data.rtl) {
          percent *= -1;
        }

        if (data.useMargin) {
          data.leftPosition = parseInt(data.$canister.css("marginLeft"));
        } else {
          var matrix = data.$canister.css(TransformProperty).split(",");
          data.leftPosition = parseInt(matrix[4]); // ?
        }

        data.$canister.css(TransitionProperty, "none");

        var e = {
          data: data,
          deltaX: (data.pageWidth * percent)
        };

        onPan(e, true);
      }

      data.isTouching = true;
    }

    /**
     * @method private
     * @name linkedPan
     * @description Handles linked pan
     * @param data [object] "Instance data"
     * @param percent [float] "Percentage moved"
     */

    function linkedPan(data, percent) {
      if (!data.single) {
        if (data.rtl) {
          percent *= -1;
        }

        var delta = (data.pageWidth * percent);

        data.touchLeft = checkPosition(data, data.leftPosition + delta);

        if (data.useMargin) {
          data.$canister.css({
            marginLeft: data.touchLeft
          });
        } else {
          data.$canister.css(TransformProperty, "translateX(" + data.touchLeft + "px)");
        }
      }
    }

    /**
     * @method private
     * @name linkedPanEnd
     * @description Handles linked pan end
     * @param data [object] "Instance data"
     * @param index [int] "New Index"
     */

    function linkedPanEnd(data, index) {
      endTouch(data, index, true);
    }

    /**
     * @method private
     * @name onSwipe
     * @description Handles swipe event
     * @param e [object] "Event data"
     */

    function onSwipe(e, fromLinked) {
      var data = e.data,
        increment = getIncrement(data, e),
        index = data.index + increment;

      // Linked
      if (data.linked && fromLinked !== true) {
        $(data.linked).not(data.$el)[NamespaceClean]("swipe", e.directionX);
      }

      endTouch(data, index);
    }

    /**
     * @method private
     * @name linkedSwipe
     * @description Handles swipe event
     * @param data [object] "Instance data"
     * @param direction [string] "Swipe direction"
     */

    function linkedSwipe(data, direction) {
      var e = {
        data: data,
        directionX: direction
      };

      onSwipe(e, true);
    }

    /**
     * @method private
     * @name endTouch
     * @description Cleans up touch interactions
     * @param data [object] "Instance data"
     * @param index [object] "New index"
     */

    function endTouch(data, index) {
      data.$canister.css(TransitionProperty, "")
        .css("will-change", "");

      positionCanister(data, index);

      data.isTouching = false;
    }

    /**
     * @method private
     * @name onItemClick
     * @description Handles click to item
     * @param e [object] "Event data"
     */

    function onItemClick(e) {
      var data = e.data,
        $target = $(e.currentTarget);

      if (!data.didPan) {
        $target.trigger(Events.itemClick);

        if (data.controller) {
          var index = data.$items.index($target);

          onSubordinateUpdate(e, index);

          data.$subordinate[NamespaceClean]("jumpPage", index + 1, true);
        }
      }
    }

    /**
     * @method private
     * @name onItemFocus
     * @description Handles focus to item/element in item
     * @param e [object] "Event data"
     */

    function onItemFocus(e) {
      var data = e.data;

      if (data.enabled && !data.isTouching) {
        Functions.clearTimer(data.autoTimer);

        data.$container.scrollLeft(0);

        var $target = $(e.target),
          $active;

        if ($target.hasClass(RawClasses.item)) {
          $active = $target;
        } else if ($target.parents(Classes.item).length) {
          $active = $target.parents(Classes.item).eq(0);
        }

        for (var i = 0; i < data.pageCount; i++) {
          if (data.pages[i].$items.is($active)) {
            positionCanister(data, i);
            break;
          }
        }
      }
    }

    /**
     * @method private
     * @name onSubordinateUpdate
     * @description Handles update from subordinate
     * @param e [object] "Event data"
     * @param index [int] "Index"
     */

    function onSubordinateUpdate(e, index) {
      var data = e.data;

      if (data.controller) {
        var $active = data.$items.eq(index);

        data.$items.removeClass(RawClasses.active);
        $active.addClass(RawClasses.active);

        for (var i = 0; i < data.pageCount; i++) {
          if (data.pages[i].$items.is($active)) {
            positionCanister(data, i, true, true);
            break;
          }
        }
      }
    }

    /**
     * @method private
     * @name checkPosition
     * @description Checks if left pos is in range
     * @param data [object] "Event data"
     * @param e [object] "Event data"
     * @return [int] "Corrected left position"
     */

    function checkPosition(data, pos) {
      if (isNaN(pos)) {
        pos = 0;
      } else if (data.rtl) {
        if (pos > data.maxMove) {
          pos = data.maxMove;
        }
        if (pos < 0) {
          pos = 0;
        }
      } else {
        if (pos < data.maxMove) {
          pos = data.maxMove;
        }
        if (pos > 0) {
          pos = 0;
        }
      }

      return pos;
    }

    /**
     * @method private
     * @name getIncrement
     * @description Returns touch increment
     * @param data [object] "Instance data"
     * @param e [object] "Event data"
     * @return [int] "Target direction"
     */

    function getIncrement(data, e) {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        return 0;
      }

      return data.rtl ? ((e.directionX === "right") ? 1 : -1) : ((e.directionX === "left") ? 1 : -1);
    }

    /**
     * @plugin
     * @name Carousel
     * @description A jQuery plugin for simple content carousels.
     * @type widget
     * @main carousel.js
     * @main carousel.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     * @dependency touch.js
     */

    var Plugin = Formstone.Plugin("carousel", {
        widget: true,

        /**
         * @options
         * @param autoAdvance [boolean] <false> "Flag to auto advance items"
         * @param autoHeight [boolean] <false> "Flag to adjust carousel height to visible item(s)"
         * @param autoTime [int] <8000> "Auto advance time"
         * @param contained [boolean] <true> "Flag for 'overflow: visible'"
         * @param controls [boolean or object] <true> "Flag to draw controls OR object containing container, next and previous control selectors (Must be fully qualified selectors)"
         * @param customClass [string] <''> "Class applied to instance"
         * @param fill [boolean] <false> "Flag to fill viewport if item count is less then show count"
         * @param infinite [boolean] <false> "Flag for looping items"
         * @param labels.next [string] <'Next'> "Control text"
         * @param labels.previous [string] <'Previous'> "Control text"
         * @param labels.controls [string] <'Carousel {guid} Controls'> "Controls aria label; {guid} replaced with instance GUID"
         * @param labels.pagination [string] <'Carousel {guid} Pagination'> "Pagination aria label; {guid} replaced with instance GUID"
         * @param matchHeight [boolean] <false> "Flag to match item heights"
         * @param matchWidth [boolean] <true> "Flag to match item widths; Requires CSS widths if false"
         * @param maxWidth [string] <'Infinity'> "Width at which to auto-disable plugin"
         * @param minWidth [string] <'0'> "Width at which to auto-disable plugin"
         * @param paged [boolean] <false> "Flag for paged items"
         * @param pagination [boolean or string] <true> "Flag to draw pagination OR string containing pagination target selector (Must be fully qualified selector)"
         * @param rtl [boolean] <false> "Right to Left display"
         * @param show [int / object] <1> "Items visible per page; Object for responsive counts"
         * @param single [boolean] <false> "Flag to display single item at a time"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param useMargin [boolean] <false> "Use margins instead of css transitions (legacy browser support)"
         */

        defaults: {
          autoAdvance: false,
          autoHeight: false,
          autoTime: 8000,
          contained: true,
          controls: true,
          customClass: "",
          fill: false,
          infinite: false,
          labels: {
            next: "Next",
            previous: "Previous",
            controls: "Carousel {guid} Controls",
            pagination: "Carousel {guid} Pagination"
          },
          matchHeight: false,
          matchWidth: true,
          maxWidth: Infinity,
          minWidth: '0px',
          paged: false,
          pagination: true,
          rtl: false,
          show: 1,
          single: false,
          theme: "fs-light",
          useMargin: false
        },

        classes: [
          "ltr",
          "rtl",

          "viewport",
          "wrapper",
          "container",
          "canister",

          "item",
          "item_previous",
          "item_next",

          "controls",
          "controls_custom",

          "control",
          "control_previous",
          "control_next",

          "pagination",
          "page",

          "animated",
          "enabled",
          "visible",
          "active",
          "auto_height",
          "contained",
          "single"
        ],

        /**
         * @events
         * @event itemClick.carousel "Item clicked; Triggered on carousel item"
         * @event update.carousel "Carousel position updated"
         */

        events: {
          itemClick: "itemClick",
          update: "update"
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,

          disable: disable,
          enable: enable,

          // Backwards compat?
          jump: jumpPage,
          previous: previousPage,
          next: nextPage,
          // Pages
          jumpPage: jumpPage,
          previousPage: previousPage,
          nextPage: nextPage,
          // Items
          jumpItem: jumpItem,

          reset: resetInstance,
          resize: resizeInstance,
          update: updateItems,

          panStart: linkedPanStart,
          pan: linkedPan,
          panEnd: linkedPanEnd,
          swipe: linkedSwipe
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      NamespaceClean = Plugin.namespaceClean,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      $Instances = [],

      TransformProperty = Formstone.transform,
      TransitionProperty = Formstone.transition;

  })

);

/*! formstone v1.4.13-1 [checkpoint.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      WindowHeight = Window.innerHeight;

      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name raf
     * @description Handles request animation frame
     */

    function raf() {
      ScrollTop = Window.scrollY;

      if (ScrollTop < 0) {
        ScrollTop = 0;
      }

      if (ScrollTop !== OldScrollTop) {
        renderRAF();

        OldScrollTop = ScrollTop;
      }

      Functions.iterate.call($Instances, scrollInstance);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);

      resize();
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.initialized = false;

      var $parent    = $(data.$el.data("checkpoint-parent")),
          $container = $(data.$el.data("checkpoint-container")),
          intersect  = data.$el.data("checkpoint-intersect"),
          offset     = data.$el.data("checkpoint-offset");

      if (intersect) {
        data.intersect = intersect;
      }
      if (offset) {
        data.offset = offset;
      }

      var intersectParts = data.intersect.split("-");

      data.windowIntersect = intersectParts[0];
      data.elIntersect = intersectParts[1];
      data.visible = false;

      data.$target = ($container.length) ? $container : data.$el;

      data.hasParent = ($parent.length > 0);
      data.$parent   = $parent;

      var $images = data.$target.find("img");

      if ($images.length) {
        $images.on(Events.load, data, resizeInstance);
      }

      data.$el.addClass(RawClasses.base);

      data.initialized = true;
    }

    /**
     * @method private
     * @name postConstruct
     * @description Run post build.
     * @param data [object] "Instance data"
     */

    function postConstruct(data) {
      cacheInstances();
      resize();
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$el.removeClass(RawClasses.base);

      cacheInstances();
    }

    /**
     * @method private
     * @name renderRAF
     * @description Updates DOM based on animation values
     */

    function renderRAF() {
      Functions.iterate.call($Instances, checkInstance);
    }

    function scrollInstance(data) {
      if (!data.hasParent) {
        return;
      }

      var parentScroll = data.$parent.scrollTop();

      if (parentScroll !== data.parentScroll) {
        checkInstance(data);

        data.parentScroll = parentScroll;
      }
    }

    /**
     * @method
     * @name resize
     * @description Updates instance.
     * @example $(".target").checkpoint("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      if (!data.initialized) {
        return;
      }

      data.parentHeight = (data.hasParent) ? data.$parent.outerHeight(false) : WindowHeight;

      switch (data.windowIntersect) {
        case "top":
          data.windowCheck = 0 - data.offset;
          break;
        case "middle":
        case "center":
          data.windowCheck = (data.parentHeight / 2) - data.offset;
          break;
        case "bottom":
          data.windowCheck = data.parentHeight - data.offset;
          break;
        default:
          break;
      }

      data.elOffset = data.$target.offset();

      switch (data.elIntersect) {
        case "top":
          data.elCheck = data.elOffset.top;
          break;
        case "middle":
          data.elCheck = data.elOffset.top + (data.$target.outerHeight() / 2);
          break;
        case "bottom":
          data.elCheck = data.elOffset.top + data.$target.outerHeight();
          break;
        default:
          break;
      }

      if (data.hasParent) {
        var parentOffset = data.$parent.offset();
        data.elCheck -= parentOffset.top;
      }

      checkInstance(data);
    }

    /**
     * @method private
     * @name checkInstance
     * @description Handle window scroll event
     * @param data [object] "Instance data"
     */

    function checkInstance(data) {
      if (!data.initialized) {
        return;
      }

      var check = data.windowCheck + ((data.hasParent) ? data.parentScroll : ScrollTop);

      if (check >= data.elCheck) {
        if (!data.active) {
          data.$el.trigger(Events.activate);
        }

        data.active = true;
        data.$el.addClass(RawClasses.active);
      } else {
        if (data.reverse) {
          if (data.active) {
            data.$el.trigger(Events.deactivate);
          }

          data.active = false;
          data.$el.removeClass(RawClasses.active);
        }
      }
    }

    /**
     * @plugin
     * @name Checkpoint
     * @description A jQuery plugin for animating visible elements.
     * @type widget
     * @main checkpoint.js
     * @main checkpoint.css
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("checkpoint", {
        widget: true,

        /**
         * @options
         * @param intersect [string] <'bottom-top'> "Position of intersection"
         * @param offset [int] <0> "Element offset for activating animation"
         * @param reverse [boolean] <false> "Deactivate animation when scrolling back"
         */

        defaults: {
          intersect: 'bottom-top',
          offset: 0,
          reverse: false,
        },

        classes: [
          "active"
        ],

        /**
         * @events
         * @event activate.checkpoint "Checkpoint activated"
         * @event deactivate.checkpoint "Checkpoint deactivated"
         */

        events: {
          activate: "activate",
          deactivate: "deactivate"
        },

        methods: {
          _construct: construct,
          _postConstruct: postConstruct,
          _destruct: destruct,
          _resize: resize,
          _raf: raf,

          resize: resizeInstance
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body,
      WindowHeight = 0,
      ScrollTop = 0,
      OldScrollTop = 0,
      $Instances = [];

  })

);

/*! formstone v1.4.13-1 [cookie.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name delegate
     * @param key [string] "Cookie key"
     * @param value [string] "Cookie value"
     * @param options [object] "Options object"
     * @return [null || string] "Cookie value, if 'read'"
     */

    function delegate(key, value, options) {
      if ($.type(key) === "object") {

        // Set defaults

        Defaults = $.extend(Defaults, key);
      } else {

        // Delegate intent

        options = $.extend({}, Defaults, options || {});

        if ($.type(key) !== "undefined") {
          if ($.type(value) !== "undefined") {
            if (value === null) {
              eraseCookie(key, options);
            } else {
              createCookie(key, value, options);
            }
          } else {
            return readCookie(key);
          }
        }
      }

      return null;
    }

    /**
     * @method
     * @name create
     * @description Creates a cookie.
     * @param key [string] "Cookie key"
     * @param value [string] "Cookie value"
     * @param options [object] "Options object"
     * @example $.cookie(key, value, options);
     */

    function createCookie(key, value, options) {
      var expiration = false,
        date = new Date();

      // Check Expiration Date

      if (options.expires && $.type(options.expires) === "number") {
        date.setTime(date.getTime() + options.expires);
        expiration = date.toGMTString();
      }

      var domain = (options.domain) ? "; domain=" + options.domain : "",
        expires = (expiration) ? "; expires=" + expiration : "",
        maxAge = (expiration) ? "; max-age=" + (options.expires / 1000) : "", // to seconds
        path = (options.path) ? "; path=" + options.path : "",
        secure = (options.secure) ? "; secure" : "";

      // Set Cookie

      Document.cookie = key + "=" + value + expires + maxAge + domain + path + secure;
    }

    /**
     * @method
     * @name read
     * @description Returns a cookie's value, or null.
     * @param key [string] "Cookie key"
     * @return [string | null] "Cookie's value, or null"
     * @example var value = $.cookie(key);
     */

    function readCookie(key) {
      var keyString = key + "=",
        cookies = Document.cookie.split(';');

      // Loop Cookies

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];

        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
        }

        // Return Match

        if (cookie.indexOf(keyString) === 0) {
          return cookie.substring(keyString.length, cookie.length);
        }
      }

      return null;
    }

    /**
     * @method
     * @name erase
     * @description Deletes a cookie.
     * @param key [string] "Cookie key"
     * @example $.cookie(key, null);
     */

    function eraseCookie(key, options) {
      createCookie(key, "", $.extend({}, options, {
        expires: -604800000 // -7 days
      }));
    }

    /**
     * @plugin
     * @name Cookie
     * @description A jQuery plugin for simple access to browser cookies.
     * @type utility
     * @main cookie.js
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("cookie", {
        utilities: {
          _delegate: delegate
        }
      }),

      /**
       * @options
       * @param domain [string] "Cookie domain"
       * @param expires [int] <604800000> "Time until cookie expires"
       * @param path [string] "Cookie path"
       */

      Defaults = {
        domain: null,
        expires: 604800000, // 7 days
        path: null,
        secure: null
      },

      // Localize References

      Document = Formstone.document;

  })

);

/*! formstone v1.4.13-1 [equalize.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize(windowWidth) {
      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.element);
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance Data"
     */

    function construct(data) {
      data.maxWidth = (data.maxWidth === Infinity ? "100000px" : data.maxWidth);
      data.mq = "(min-width:" + data.minWidth + ") and (max-width:" + data.maxWidth + ")";
      data.type = (data.property === "height") ? "outerHeight" : "outerWidth";

      if (data.target) {
        if (!Array.isArray(data.target)) {
          data.target = [data.target];
        }
      } else {
        data.target = ["> *"];
      }

      cacheInstances();

      $.fsMediaquery("bind", data.rawGuid, data.mq, {
        enter: function() {
          enable.call(data.$el, data);
        },
        leave: function() {
          disable.call(data.$el, data);
        }
      });
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      tearDown(data);

      $.fsMediaquery("unbind", data.rawGuid);

      cacheInstances();
    }

    /**
     * @method
     * @name resize
     * @description Resizes instance
     * @example $(".target").equalize("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      if (data.data) {
        data = data.data; // normalize image resize events
      }

      if (data.enabled) {
        var value,
          check,
          $target;

        for (var i = 0; i < data.target.length; i++) {
          value = 0;
          check = 0;
          $target = data.$el.find(data.target[i]);

          $target.css(data.property, "");

          for (var j = 0; j < $target.length; j++) {
            check = $target.eq(j)[data.type]();

            if (check > value) {
              value = check;
            }
          }

          $target.css(data.property, value);
        }
      }
    }

    /**
     * @method
     * @name disable
     * @description Disables instance of plugin
     * @example $(".target").equalize("disable");
     */

    function disable(data) {
      if (data.enabled) {
        data.enabled = false;

        tearDown(data);
      }
    }

    /**
     * @method
     * @name enable
     * @description Enables instance of plugin
     * @example $(".target").equalize("enable");
     */

    function enable(data) {
      if (!data.enabled) {
        data.enabled = true;

        var $images = data.$el.find("img");

        if ($images.length) {
          $images.on(Events.load, data, resizeInstance);
        }

        resizeInstance(data);
      }
    }

    /**
     * @method private
     * @name tearDown
     * @description Removes styling from elements
     * @param data [object] "Instance data"
     */

    function tearDown(data) {
      for (var i = 0; i < data.target.length; i++) {
        data.$el.find(data.target[i]).css(data.property, "");
      }

      data.$el.find("img").off(Events.namespace);
    }

    /**
     * @plugin
     * @name Equalize
     * @description A jQuery plugin for equal dimensions.
     * @type widget
     * @main equalize.js
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     */

    var Plugin = Formstone.Plugin("equalize", {
        widget: true,
        priority: 5,

        /**
         * @options
         * @param maxWidth [string] <'Infinity'> "Width at which to auto-disable plugin"
         * @param minWidth [string] <'0'> "Width at which to auto-disable plugin"
         * @param property [string] <"height"> "Property to size; 'height' or 'width'"
         * @param target [string OR array] <null> "Target child selector(s); Defaults to direct descendants"
         */

        defaults: {
          maxWidth: Infinity,
          minWidth: "0px",
          property: "height",
          target: null
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,

          resize: resizeInstance
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      $Instances = [];

  })

);

/*! formstone v1.4.13-1 [lightbox.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./touch",
        "./transition",
        "./viewer"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      $Body = Formstone.$body;
      $Locks = $("html, body");

      OnLoad = Formstone.window.location.hash.replace("#", "");
    }

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      if (Instance) {
        resizeLightbox();
      }
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      this.on(Events.click, data, buildLightbox);

      var gallery = this.data(Namespace + "-gallery");

      if (!OnLoaded && OnLoad && gallery === OnLoad) {
        OnLoaded = true;

        this.trigger(Events.click);
      }
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      closeLightbox();

      this.off(Events.namespace);
    }

    /**
     * @method private
     * @name initialize
     * @description Builds instance from $target.
     * @param $target [jQuery] "Target jQuery object"
     */

    function initialize($target, options) {
      if ($target instanceof $) {

        // Emulate event

        buildLightbox.apply(Window, [{
          data: $.extend(true, {}, {
            $object: $target
          }, Defaults, options || {})
        }]);
      }
    }

    /**
     * @method private
     * @name buildLightbox
     * @description Builds new lightbox.
     * @param e [object] "Event data"
     */

    function buildLightbox(e) {
      if (!Instance) {
        var data = e.data;

        if (data.overlay === true) {
          data.mobile = true; // Backwards compatibility
        }

        // Cache internal data
        Instance = $.extend({}, {
          visible: false,
          gallery: {
            active: false
          },
          isMobile: (Formstone.isMobile || data.mobile),
          isTouch: Formstone.support.touch,
          isAnimating: true,
          isZooming: false,
          oldContentHeight: 0,
          oldContentWidth: 0,
          metaHeight: 0,
          thumbnailHeight: 0,
          captionOpen: false,
          thumbnailsOpen: false,
          tapTimer: null
        }, data);

        Instance.isViewer = (Instance.isMobile && data.viewer && typeof $.fn.fsViewer !== "undefined");

        // Check target type
        var $el = data.$el,
          $object = data.$object,
          source = ($el && $el[0].href) ? $el[0].href || "" : "",
          hash = ($el && $el[0].hash) ? $el[0].hash || "" : "",
          sourceParts = source.toLowerCase().split(".").pop().split(/\#|\?/),
          type = ($el) ? $el.data(Namespace + "-type") : "",
          isImage = ((type === "image") || (source.match(data.fileTypes) || source.substr(0, 10) === "data:image")),
          isVideo = checkVideo(source),
          isUrl = ((type === "url") || (!isImage && !isVideo && source.substr(0, 4) === "http" && !hash)),
          isElement = ((type === "element") || (!isImage && !isVideo && !isUrl && (hash.substr(0, 1) === "#"))),
          isObject = ((typeof $object !== "undefined"));

        if (isElement) {
          source = hash;
        }

        // Retain default click
        if (!(isImage || isVideo || isUrl || isElement || isObject)) {
          Instance = null;

          return;
        }

        // Kill event
        Functions.killEvent(e);

        // Double the margin
        Instance.margin *= 2;

        if (isImage) {
          Instance.type = "image";
        } else if (isVideo) {
          Instance.type = "video";
        } else {
          Instance.type = "element";
        }

        if (isImage || isVideo) {
          // Check for gallery
          var id = $el.data(Namespace + "-gallery");

          if (id) {
            Instance.gallery.active = true;
            Instance.gallery.id = id;
            Instance.gallery.$items = $("a[data-lightbox-gallery= " + Instance.gallery.id + "], a[rel= " + Instance.gallery.id + "]"); // backwards compatibility
            Instance.gallery.index = Instance.gallery.$items.index(Instance.$el);
            Instance.gallery.total = Instance.gallery.$items.length - 1;
          }
        }

        // Thumbnails support
        if (!(Instance.thumbnails && (isImage || isVideo) && Instance.gallery.active)) {
          Instance.thumbnails = false;
        }

        // Assemble HTML
        var html = '';
        if (!Instance.isMobile) {
          html += '<div class="' + [RawClasses.overlay, Instance.theme, Instance.customClass].join(" ") + '"></div>';
        }
        var lightboxClasses = [
          RawClasses.base,
          RawClasses.loading,
          RawClasses.animating,
          Instance.theme,
          Instance.customClass
        ];

        if (Instance.fixed) {
          lightboxClasses.push(RawClasses.fixed);
        }
        if (Instance.isMobile) {
          lightboxClasses.push(RawClasses.mobile);
        }
        if (Instance.isTouch) {
          lightboxClasses.push(RawClasses.touch);
        }
        if (isUrl) {
          lightboxClasses.push(RawClasses.iframed);
        }
        if (isElement || isObject) {
          lightboxClasses.push(RawClasses.inline);
        }
        if (Instance.thumbnails) {
          lightboxClasses.push(RawClasses.thumbnailed);
        }

        Instance.labels.lightbox = Instance.labels.lightbox.replace('{guid}', data.numGuid);

        html += '<div class="' + lightboxClasses.join(" ") + '" role="dialog" aria-label="' + Instance.labels.lightbox + '" tabindex="-1">';
        html += '<button type="button" class="' + RawClasses.close + '">' + Instance.labels.close + '</button>';
        html += '<span class="' + RawClasses.loading_icon + '"></span>';
        html += '<div class="' + RawClasses.container + '">';

        // Thumbnails
        if (Instance.gallery.active && Instance.thumbnails) {
          html += '<div class="' + [RawClasses.thumbnails] + '">';
          html += '<div class="' + [RawClasses.thumbnail_container] + '">';

          var $item,
            thumb;

          for (var i = 0, count = Instance.gallery.$items.length; i < count; i++) {
            $item = Instance.gallery.$items.eq(i);
            thumb = $item.data("lightbox-thumbnail");

            if (!thumb) {
              thumb = $item.find("img").attr("src");
            }

            html += '<button class="' + [RawClasses.thumbnail_item] + '">';
            html += '<img src="' + thumb + '" alt="">';
            html += '</button>';
          }

          html += '</div></div>';
        }

        html += '<div class="' + RawClasses.content + '"></div>';

        if (isImage || isVideo) {

          html += '<div class="' + RawClasses.tools + '">';

          html += '<div class="' + RawClasses.controls + '">';
          if (Instance.gallery.active) {
            html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_previous].join(" ") + '">' + Instance.labels.previous + '</button>';
            html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_next].join(" ") + '">' + Instance.labels.next + '</button>';
          }
          if (Instance.isMobile && Instance.isTouch) {
            html += '<button type="button" class="' + [RawClasses.toggle, RawClasses.caption_toggle].join(" ") + '">' + Instance.labels.captionClosed + '</button>';

            if (Instance.gallery.active && Instance.thumbnails) {
              html += '<button type="button" class="' + [RawClasses.toggle, RawClasses.thumbnail_toggle].join(" ") + '">' + Instance.labels.thumbnailsClosed + '</button>';
            }
          }
          html += '</div>'; // controls

          html += '<div class="' + RawClasses.meta + '">';
          html += '<div class="' + RawClasses.meta_content + '">';
          if (Instance.gallery.active) {
            html += '<p class="' + RawClasses.position + '"';
            if (Instance.gallery.total < 1) {
              html += ' style="display: none;"';
            }
            html += '>';
            html += '<span class="' + RawClasses.position_current + '">' + (Instance.gallery.index + 1) + '</span> ';
            html += Instance.labels.count;
            html += ' <span class="' + RawClasses.position_total + '">' + (Instance.gallery.total + 1) + '</span>';
            html += '</p>';
          }
          html += '<div class="' + RawClasses.caption + '">';
          html += Instance.formatter.call($el, data);
          html += '</div></div></div>'; // caption, meta_content, meta

          html += '</div>'; // tools
        }
        html += '</div></div>'; //container, content, lightbox

        // Modify Dom
        $Body.append(html);

        // Cache jquery objects
        Instance.$overlay = $(Classes.overlay);
        Instance.$lightbox = $(Classes.base);
        Instance.$close = $(Classes.close);
        Instance.$container = $(Classes.container);
        Instance.$content = $(Classes.content);
        Instance.$tools = $(Classes.tools);
        Instance.$meta = $(Classes.meta);
        Instance.$metaContent = $(Classes.meta_content);
        Instance.$position = $(Classes.position);
        Instance.$caption = $(Classes.caption);
        Instance.$controlBox = $(Classes.controls);
        Instance.$controls = $(Classes.control);
        Instance.$thumbnails = $(Classes.thumbnails);
        Instance.$thumbnailContainer = $(Classes.thumbnail_container);
        Instance.$thumbnailItems = $(Classes.thumbnail_item);

        if (Instance.isMobile) {
          Instance.paddingVertical = Instance.$close.outerHeight();
          Instance.paddingHorizontal = 0;

          Instance.mobilePaddingVertical = parseInt(Instance.$content.css("paddingTop"), 10) + parseInt(Instance.$content.css("paddingBottom"), 10);
          Instance.mobilePaddingHorizontal = parseInt(Instance.$content.css("paddingLeft"), 10) + parseInt(Instance.$content.css("paddingRight"), 10);
        } else {
          Instance.paddingVertical = parseInt(Instance.$lightbox.css("paddingTop"), 10) + parseInt(Instance.$lightbox.css("paddingBottom"), 10);
          Instance.paddingHorizontal = parseInt(Instance.$lightbox.css("paddingLeft"), 10) + parseInt(Instance.$lightbox.css("paddingRight"), 10);

          Instance.mobilePaddingVertical = 0;
          Instance.mobilePaddingHorizontal = 0;
        }

        Instance.contentHeight = Instance.$lightbox.outerHeight() - Instance.paddingVertical;
        Instance.contentWidth = Instance.$lightbox.outerWidth() - Instance.paddingHorizontal;
        Instance.controlHeight = Instance.$controls.outerHeight();

        // Center
        centerLightbox();

        // Update gallery
        if (Instance.gallery.active) {
          Instance.$lightbox.addClass(RawClasses.has_controls);
          updateGalleryControls();
        }

        // Bind events
        $Window.on(Events.keyDown, onKeyDown);
        $Body.on(Events.click, [Classes.overlay, Classes.close].join(", "), closeLightbox)
          .on([Events.focus, Events.focusIn].join(" "), onDocumentFocus);

        if (Instance.gallery.active) {
          Instance.$lightbox.on(Events.click, Classes.control, advanceGallery);
        }

        if (Instance.thumbnails) {
          Instance.$lightbox.on(Events.click, Classes.thumbnail_item, jumpGallery);
        }

        if (Instance.isMobile && Instance.isTouch) {
          Instance.$lightbox.on(Events.click, Classes.caption_toggle, toggleCaption)
            .on(Events.click, Classes.thumbnail_toggle, toggleThumbnails);
        }

        Instance.$lightbox.fsTransition({
            property: "opacity"
          },
          function() {
            if (isImage) {
              loadImage(source);
            } else if (isVideo) {
              loadVideo(source);
            } else if (isUrl) {
              loadURL(source);
            } else if (isElement) {
              appendContents(source);
            } else if (isObject) {
              appendObject(Instance.$object);
            }
          }).addClass(RawClasses.open);

        Instance.$overlay.addClass(RawClasses.open);
      }
    }

    /**
     * @method
     * @name resize
     * @description Resizes lightbox.
     * @example $.lightbox("resize");
     * @param height [int | false] "Target height or false to auto size"
     * @param width [int | false] "Target width or false to auto size"
     */

    /**
     * @method private
     * @name resizeLightbox
     * @description Triggers resize of instance.
     */

    function resizeLightbox(e) {
      if (typeof e !== "object") {
        Instance.targetHeight = arguments[0];
        Instance.targetWidth = arguments[1];
      }

      if (Instance.type === "element") {
        sizeContent(Instance.$content.find("> :first-child"));
      } else if (Instance.type === "image") {
        sizeImage();
      } else if (Instance.type === "video") {
        sizeVideo();
      }

      sizeLightbox();
    }

    /**
     * @method
     * @name close
     * @description Closes active instance.
     * @example $.lightbox("close");
     */

    /**
     * @method private
     * @name closeLightbox
     * @description Closes active instance.
     * @param e [object] "Event data"
     */

    function closeLightbox(e) {
      Functions.killEvent(e);

      if (Instance) {
        Instance.$lightbox.fsTransition("destroy");
        Instance.$content.fsTransition("destroy");

        Instance.$lightbox.addClass(RawClasses.animating).fsTransition({
            property: "opacity"
          },
          function(e) {
            // Clean up
            if (typeof Instance.$inlineTarget !== 'undefined' && Instance.$inlineTarget.length) {
              restoreContents();
            }

            if (Instance.isViewer && Instance.$imageContainer && Instance.$imageContainer.length) {
              Instance.$imageContainer.fsViewer("destroy");
            }

            Instance.$lightbox.off(Events.namespace);
            Instance.$container.off(Events.namespace);
            $Window.off(Events.keyDown);
            $Body.off(Events.namespace);
            $Body.off(Events.namespace);

            Instance.$overlay.remove();
            Instance.$lightbox.remove();

            if (typeof Instance.$el !== "undefined" && Instance.$el && Instance.$el.length) {
              Instance.$el.focus();
            }

            // Reset Instance
            Instance = null;

            $Window.trigger(Events.close);
          });

        Instance.$lightbox.removeClass(RawClasses.open);
        Instance.$overlay.removeClass(RawClasses.open);

        if (Instance.isMobile) {
          $Locks.removeClass(RawClasses.lock);

          Functions.unlockViewport(Namespace);
        }
      }
    }

    /**
     * @method private
     * @name openLightbox
     * @description Opens active instance.
     */

    function openLightbox() {
      var position = calculatePosition(),
        durration = Instance.isMobile ? 0 : Instance.duration;

      if (Instance.isMobile) {
        Functions.lockViewport(Namespace);
      } else {
        Instance.$controls.css({
          marginTop: ((Instance.contentHeight - Instance.controlHeight - Instance.metaHeight + Instance.thumbnailHeight) / 2)
        });
      }

      if (Instance.$caption.html() === "") {
        Instance.$caption.hide();
        Instance.$lightbox.removeClass(RawClasses.has_caption);

        if (!Instance.gallery.active) {
          Instance.$tools.hide();
        }
      } else {
        Instance.$caption.show();
        Instance.$lightbox.addClass(RawClasses.has_caption);
      }

      Instance.$lightbox.fsTransition({
          property: (Instance.contentHeight !== Instance.oldContentHeight) ? "height" : "width"
        },
        function() {
          Instance.$content.fsTransition({
              property: "opacity"
            },
            function() {
              Instance.$lightbox.removeClass(RawClasses.animating);
              Instance.isAnimating = false;
            });

          Instance.$lightbox.removeClass(RawClasses.loading)
            .addClass(RawClasses.ready);

          Instance.visible = true;

          // Fire open event
          $Window.trigger(Events.open);

          // Start preloading
          if (Instance.gallery.active) {
            preloadGallery();
            updateThumbnails();
            positionThumbnails();
          }

          // Focus
          Instance.$lightbox.focus();
        });

      if (!Instance.isMobile) {
        Instance.$lightbox.css({
          height: Instance.contentHeight + Instance.paddingVertical,
          width: Instance.contentWidth + Instance.paddingHorizontal,
          top: (!Instance.fixed) ? position.top : 0
        });
      }

      // Trigger event in case the content size hasn't changed
      var contentHasChanged = (Instance.oldContentHeight !== Instance.contentHeight || Instance.oldContentWidth !== Instance.contentWidth);

      if (Instance.isMobile || !contentHasChanged) {
        Instance.$lightbox.fsTransition("resolve");
      }

      // Track content size changes
      Instance.oldContentHeight = Instance.contentHeight;
      Instance.oldContentWidth = Instance.contentWidth;

      if (Instance.isMobile) {
        $Locks.addClass(RawClasses.lock);
      }
    }

    /**
     * @method private
     * @name sizeLightbox
     * @description Sizes active instance.
     */

    function sizeLightbox() {
      if (Instance.visible && !Instance.isMobile) {
        var position = calculatePosition();

        Instance.$controls.css({
          marginTop: ((Instance.contentHeight - Instance.controlHeight - Instance.metaHeight + Instance.thumbnailHeight) / 2)
        });

        Instance.$lightbox.css({
          height: Instance.contentHeight + Instance.paddingVertical,
          width: Instance.contentWidth + Instance.paddingHorizontal,
          top: (!Instance.fixed) ? position.top : 0
        });

        Instance.oldContentHeight = Instance.contentHeight;
        Instance.oldContentWidth = Instance.contentWidth;
      }
    }

    /**
     * @method private
     * @name centerLightbox
     * @description Centers instance.
     */

    function centerLightbox() {
      var position = calculatePosition();

      Instance.$lightbox.css({
        top: (!Instance.fixed) ? position.top : 0
      });
    }

    /**
     * @method private
     * @name calculatePosition
     * @description Calculates positions.
     * @return [object] "Object containing top and left positions"
     */

    function calculatePosition() {
      if (Instance.isMobile) {
        return {
          left: 0,
          top: 0
        };
      }

      var pos = {
        left: (Formstone.windowWidth - Instance.contentWidth - Instance.paddingHorizontal) / 2,
        top: (Instance.top <= 0) ? ((Formstone.windowHeight - Instance.contentHeight - Instance.paddingVertical) / 2) : Instance.top
      };

      if (Instance.fixed !== true) {
        pos.top += Window.scrollY;
      }

      return pos;
    }


    /**
     * @method private
     * @name toggleCaption
     * @description Toggle caption.
     */

    function toggleCaption(e) {
      Functions.killEvent(e);

      if (Instance.captionOpen) {
        closeCaption();
      } else {
        closeThumbnails();

        var height = parseInt(Instance.$metaContent.outerHeight(true));
        height += parseInt(Instance.$meta.css("padding-top"));
        height += parseInt(Instance.$meta.css("padding-bottom"));

        Instance.$meta.css({
          height: height
        });

        Instance.$lightbox.addClass(RawClasses.caption_open)
          .find(Classes.caption_toggle).text(Instance.labels.captionOpen);

        Instance.captionOpen = true;
      }
    }

    /**
     * @method private
     * @name closeCaption
     * @description Close caption.
     */

    function closeCaption() {
      Instance.$lightbox.removeClass(RawClasses.caption_open)
        .find(Classes.caption_toggle).text(Instance.labels.captionClosed);
      Instance.captionOpen = false;
    }

    /**
     * @method private
     * @name formatCaption
     * @description Formats caption.
     * @param $target [jQuery object] "Target element"
     */

    function formatCaption() {
      var title = this.attr("title"),
        t = (title !== undefined && title) ? title.replace(/^\s+|\s+$/g, '') : false;

      return t ? '<p class="caption">' + t + '</p>' : "";
    }

    /**
     * @method private
     * @name toggleThumbnails
     * @description Toggle thumbnails.
     */

    function toggleThumbnails(e) {
      Functions.killEvent(e);

      if (Instance.thumbnailsOpen) {
        closeThumbnails();
      } else {
        closeCaption();

        Instance.$lightbox.addClass(RawClasses.thumbnails_open)
          .find(Classes.thumbnail_toggle).text(Instance.labels.thumbnailsOpen);

        Instance.thumbnailsOpen = true;
      }
    }

    /**
     * @method private
     * @name closeThumbnails
     * @description Close thumbnails.
     */

    function closeThumbnails() {
      Instance.$lightbox.removeClass(RawClasses.thumbnails_open)
        .find(Classes.thumbnail_toggle).text(Instance.labels.thumbnailsClosed);
      Instance.thumbnailsOpen = false;
    }

    /**
     * @method private
     * @name loadImage
     * @description Loads source image.
     * @param source [string] "Source image URL"
     */

    function loadImage(source) {
      if (Instance.isViewer) {
        Instance.$imageContainer = $('<div class="' + RawClasses.image_container + '"><img></div>');
        Instance.$image = Instance.$imageContainer.find("img");

        Instance.$image.attr("src", source)
          .addClass(RawClasses.image);

        Instance.$content.prepend(Instance.$imageContainer);

        sizeImage();

        Instance.$imageContainer.one("loaded.viewer", function() {
          openLightbox();
        }).fsViewer({
          theme: Instance.theme
        });
      } else {
        // Cache current image
        Instance.$imageContainer = $('<div class="' + RawClasses.image_container + '"><img></div>');
        Instance.$image = Instance.$imageContainer.find("img");

        Instance.$image.one(Events.load, function() {
            var naturalSize = calculateNaturalSize(Instance.$image);

            Instance.naturalHeight = naturalSize.naturalHeight;
            Instance.naturalWidth = naturalSize.naturalWidth;

            if (Instance.retina) {
              Instance.naturalHeight /= 2;
              Instance.naturalWidth /= 2;
            }

            Instance.$content.prepend(Instance.$imageContainer);

            // Size content to be sure it fits the viewport
            sizeImage();

            openLightbox();
          }).on(Events.error, loadError)
          .attr("src", source)
          .addClass(RawClasses.image);

        // If image has already loaded into cache, trigger load event
        if (Instance.$image[0].complete || Instance.$image[0].readyState === 4) {
          Instance.$image.trigger(Events.load);
        }
      }
    }

    /**
     * @method private
     * @name sizeImage
     * @description Sizes image to fit in viewport.
     * @param count [int] "Number of resize attempts"
     */

    function sizeImage() {
      if (Instance.$image) {
        var count = 0;

        Instance.windowHeight = Instance.viewportHeight = Formstone.windowHeight - Instance.mobilePaddingVertical - Instance.paddingVertical;
        Instance.windowWidth = Instance.viewportWidth = Formstone.windowWidth - Instance.mobilePaddingHorizontal - Instance.paddingHorizontal;

        Instance.contentHeight = Infinity;
        Instance.contentWidth = Infinity;

        Instance.imageMarginTop = 0;
        Instance.imageMarginLeft = 0;

        while (Instance.contentHeight > Instance.viewportHeight && count < 2) {
          Instance.imageHeight = (count === 0) ? Instance.naturalHeight : Instance.$image.outerHeight();
          Instance.imageWidth = (count === 0) ? Instance.naturalWidth : Instance.$image.outerWidth();
          Instance.metaHeight = (count === 0) ? 0 : Instance.metaHeight;
          Instance.spacerHeight = (count === 0) ? 0 : Instance.spacerHeight;
          Instance.thumbnailHeight = (count === 0) ? 0 : Instance.thumbnailHeight;

          if (count === 0) {
            Instance.ratioHorizontal = Instance.imageHeight / Instance.imageWidth;
            Instance.ratioVertical = Instance.imageWidth / Instance.imageHeight;

            Instance.isWide = (Instance.imageWidth > Instance.imageHeight);
          }

          // Double check min and max
          if (Instance.imageHeight < Instance.minHeight) {
            Instance.minHeight = Instance.imageHeight;
          }
          if (Instance.imageWidth < Instance.minWidth) {
            Instance.minWidth = Instance.imageWidth;
          }

          if (Instance.isMobile) {
            if (Instance.isTouch) {
              Instance.$controlBox.css({
                width: Formstone.windowWidth
              });
              Instance.spacerHeight = Instance.$controls.outerHeight(true);
            } else {
              Instance.$tools.css({
                width: Formstone.windowWidth
              });
              Instance.spacerHeight = Instance.$tools.outerHeight(true);
            }

            // Content match viewport
            Instance.contentHeight = Instance.viewportHeight;
            Instance.contentWidth = Instance.viewportWidth;

            if (!Instance.isTouch) {
              Instance.$content.css({
                height: Instance.contentHeight - Instance.spacerHeight // - 10
              });
            }

            if (Instance.$thumbnails.length) {
              Instance.spacerHeight += Instance.$thumbnails.outerHeight(true);
            }
            Instance.spacerHeight += 10;

            fitImage();

            Instance.imageMarginTop = (Instance.contentHeight - Instance.targetImageHeight - Instance.spacerHeight) / 2;
            Instance.imageMarginLeft = (Instance.contentWidth - Instance.targetImageWidth) / 2;
          } else {
            // Viewport should match window, less margin, padding and meta
            if (count === 0) {
              Instance.viewportHeight -= (Instance.margin + Instance.paddingVertical);
              Instance.viewportWidth -= (Instance.margin + Instance.paddingHorizontal);
            }
            Instance.viewportHeight -= Instance.metaHeight;

            if (Instance.thumbnails) {
              Instance.viewportHeight -= Instance.thumbnailHeight;
            }

            fitImage();

            Instance.contentHeight = Instance.targetImageHeight;
            Instance.contentWidth = Instance.targetImageWidth;
          }

          // Modify DOM
          if (!Instance.isMobile && !Instance.isTouch) {
            Instance.$meta.css({
              width: Instance.contentWidth
            });
          }

          Instance.$image.css({
            height: Instance.targetImageHeight,
            width: Instance.targetImageWidth,
            marginTop: Instance.imageMarginTop,
            marginLeft: Instance.imageMarginLeft
          });

          if (!Instance.isMobile) {
            Instance.metaHeight = Instance.$meta.outerHeight(true);
            Instance.contentHeight += Instance.metaHeight;
          }

          if (Instance.thumbnails) {
            Instance.thumbnailHeight = Instance.$thumbnails.outerHeight(true);
            Instance.contentHeight += Instance.thumbnailHeight;
          }

          count++;
        }
      }
    }

    /**
     * @method private
     * @name fitImage
     * @description Calculates target image size.
     */

    function fitImage() {
      var height = (!Instance.isMobile) ? Instance.viewportHeight : Instance.contentHeight - Instance.spacerHeight,
        width = (!Instance.isMobile) ? Instance.viewportWidth : Instance.contentWidth;

      if (Instance.isWide) {
        // WIDE
        Instance.targetImageWidth = width;
        Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;

        if (Instance.targetImageHeight > height) {
          Instance.targetImageHeight = height;
          Instance.targetImageWidth = Instance.targetImageHeight * Instance.ratioVertical;
        }
      } else {
        // TALL
        Instance.targetImageHeight = height;
        Instance.targetImageWidth = Instance.targetImageHeight * Instance.ratioVertical;

        if (Instance.targetImageWidth > width) {
          Instance.targetImageWidth = width;
          Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;
        }
      }

      // MAX
      if (Instance.targetImageWidth > Instance.imageWidth || Instance.targetImageHeight > Instance.imageHeight) {
        Instance.targetImageHeight = Instance.imageHeight;
        Instance.targetImageWidth = Instance.imageWidth;
      }

      // MIN
      if (Instance.targetImageWidth < Instance.minWidth || Instance.targetImageHeight < Instance.minHeight) {
        if (Instance.targetImageWidth < Instance.minWidth) {
          Instance.targetImageWidth = Instance.minWidth;
          Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;
        } else {
          Instance.targetImageHeight = Instance.minHeight;
          Instance.targetImageWidth = Instance.targetImageHeight * Instance.ratioVertical;
        }
      }
    }

    /**
     * @method private
     * @name loadVideo
     * @description Loads source video.
     * @param source [string] "Source video URL"
     */

    function formatYouTube(parts) {
      return "//www.youtube.com/embed/" + parts[1];
    }

    function formatVimeo(parts) {
      return "//player.vimeo.com/video/" + parts[3];
    }

    function loadVideo(source) {
      var parts,
        url = checkVideo(source),
        queryString = source.split("?"),
        origin = '&origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.hostname);

      if (url) {
        // if we have a query string
        if (queryString.length >= 2) {
          url += "?" + queryString.slice(1)[0].trim();
        }

        Instance.$videoWrapper = $('<div class="' + RawClasses.video_wrapper + '"></div>');
        Instance.$video = $('<iframe class="' + RawClasses.video + '" frameborder="0" seamless="seamless" allowfullscreen></iframe>');

        Instance.$video.attr("src", url + '&enablejsapi=1' + origin)
          .addClass(RawClasses.video)
          .prependTo(Instance.$videoWrapper);

        Instance.$content.prepend(Instance.$videoWrapper);

        sizeVideo();
        openLightbox();
      } else {
        loadError();
      }
    }

    /**
     * @method private
     * @name sizeVideo
     * @description Sizes video to fit in viewport.
     */

    function sizeVideo() {
      // Set initial vars
      Instance.windowHeight = Instance.viewportHeight = Formstone.windowHeight - Instance.mobilePaddingVertical - Instance.paddingVertical;
      Instance.windowWidth = Instance.viewportWidth = Formstone.windowWidth - Instance.mobilePaddingHorizontal - Instance.paddingHorizontal;
      Instance.videoMarginTop = 0;
      Instance.videoMarginLeft = 0;

      if (Instance.isMobile) {
        if (Instance.isTouch) {
          Instance.$controlBox.css({
            width: Formstone.windowWidth
          });
          Instance.spacerHeight = Instance.$controls.outerHeight(true) + 10;
        } else {
          Instance.$tools.css({
            width: Formstone.windowWidth
          });
          Instance.spacerHeight = Instance.$tools.outerHeight(true);
          Instance.spacerHeight += Instance.$thumbnails.outerHeight(true) + 10;
        }

        Instance.viewportHeight -= Instance.spacerHeight;

        Instance.targetVideoWidth = Instance.viewportWidth;
        Instance.targetVideoHeight = Instance.targetVideoWidth * Instance.videoRatio;

        if (Instance.targetVideoHeight > Instance.viewportHeight) {
          Instance.targetVideoHeight = Instance.viewportHeight;
          Instance.targetVideoWidth = Instance.targetVideoHeight / Instance.videoRatio;
        }

        Instance.videoMarginTop = (Instance.viewportHeight - Instance.targetVideoHeight) / 2;
        Instance.videoMarginLeft = (Instance.viewportWidth - Instance.targetVideoWidth) / 2;
      } else {
        Instance.viewportHeight = Instance.windowHeight - Instance.margin;
        Instance.viewportWidth = Instance.windowWidth - Instance.margin;

        Instance.targetVideoWidth = (Instance.videoWidth > Instance.viewportWidth) ? Instance.viewportWidth : Instance.videoWidth;
        if (Instance.targetVideoWidth < Instance.minWidth) {
          Instance.targetVideoWidth = Instance.minWidth;
        }
        Instance.targetVideoHeight = Instance.targetVideoWidth * Instance.videoRatio;

        Instance.contentHeight = Instance.targetVideoHeight;
        Instance.contentWidth = Instance.targetVideoWidth;
      }

      // Update dom
      if (!Instance.isMobile && !Instance.isTouch) {
        Instance.$meta.css({
          width: Instance.contentWidth
        });
      }

      Instance.$videoWrapper.css({
        height: Instance.targetVideoHeight,
        width: Instance.targetVideoWidth,
        marginTop: Instance.videoMarginTop,
        marginLeft: Instance.videoMarginLeft
      });

      if (!Instance.isMobile) {
        Instance.metaHeight = Instance.$meta.outerHeight(true);
        Instance.contentHeight += Instance.metaHeight;
      }

      if (Instance.thumbnails) {
        Instance.thumbnailHeight = Instance.$thumbnails.outerHeight(true);
        Instance.contentHeight += Instance.thumbnailHeight;
      }
    }

    /**
     * @method private
     * @name preloadGallery
     * @description Preloads previous and next images in gallery for faster rendering.
     * @param e [object] "Event Data"
     */

    function preloadGallery(e) {
      var source = '';

      if (Instance.gallery.index > 0) {
        source = Instance.gallery.$items.eq(Instance.gallery.index - 1).attr("href");
        if (!checkVideo(source)) {
          $('<img src="' + source + '">');
        }
      }
      if (Instance.gallery.index < Instance.gallery.total) {
        source = Instance.gallery.$items.eq(Instance.gallery.index + 1).attr("href");
        if (!checkVideo(source)) {
          $('<img src="' + source + '">');
        }
      }
    }

    /**
     * @method private
     * @name advanceGallery
     * @description Advances gallery base on direction.
     * @param e [object] "Event Data"
     */

    function advanceGallery(e) {
      Functions.killEvent(e);

      var $control = $(e.currentTarget);

      if (!Instance.isAnimating && !$control.hasClass(RawClasses.control_disabled)) {
        Instance.isAnimating = true;

        closeCaption();

        Instance.gallery.index += ($control.hasClass(RawClasses.control_next)) ? 1 : -1;
        if (Instance.gallery.index > Instance.gallery.total) {
          Instance.gallery.index = (Instance.infinite) ? 0 : Instance.gallery.total;
        }
        if (Instance.gallery.index < 0) {
          Instance.gallery.index = (Instance.infinite) ? Instance.gallery.total : 0;
        }

        updateThumbnails();

        Instance.$lightbox.addClass(RawClasses.animating);

        Instance.$content.fsTransition({
          property: "opacity"
        }, cleanGallery);

        Instance.$lightbox.addClass(RawClasses.loading);
      }
    }

    /**
     * @method private
     * @name jumpGallery
     * @description Jumps gallery base on thumbnail click.
     * @param e [object] "Event Data"
     */

    function jumpGallery(e) {
      Functions.killEvent(e);

      var $thumbnail = $(e.currentTarget);

      if (!Instance.isAnimating && !$thumbnail.hasClass(RawClasses.active)) {
        Instance.isAnimating = true;

        closeCaption();

        Instance.gallery.index = Instance.$thumbnailItems.index($thumbnail);

        updateThumbnails();

        Instance.$lightbox.addClass(RawClasses.animating);

        Instance.$content.fsTransition({
          property: "opacity"
        }, cleanGallery);

        Instance.$lightbox.addClass(RawClasses.loading);
      }
    }

    /**
     * @method private
     * @name jumpGallery
     * @description
     */

    function updateThumbnails() {
      // Thumbnails
      if (Instance.thumbnails) {
        var $thumb = Instance.$thumbnailItems.eq(Instance.gallery.index);

        Instance.$thumbnailItems.removeClass(RawClasses.active);
        $thumb.addClass(RawClasses.active);
      }
    }

    /**
     * @method private
     * @name jumpGallery
     * @description
     */

    function positionThumbnails() {
      // Thumbnails
      if (Instance.thumbnails) {
        var $thumb = Instance.$thumbnailItems.eq(Instance.gallery.index),
          scrollLeft = $thumb.position().left + ($thumb.outerWidth(false) / 2) - (Instance.$thumbnailContainer.outerWidth(true) / 2);

        Instance.$thumbnailContainer.stop().animate({
          scrollLeft: scrollLeft
        }, 200, "linear");
      }
    }

    /**
     * @method private
     * @name cleanGallery
     * @description Cleans gallery.
     */

    function cleanGallery() {
      if (typeof Instance.$imageContainer !== 'undefined') {
        if (Instance.isViewer) {
          Instance.$imageContainer.fsViewer("destroy");
        }
        Instance.$imageContainer.remove();
      }
      if (typeof Instance.$videoWrapper !== 'undefined') {
        Instance.$videoWrapper.remove();
      }
      Instance.$el = Instance.gallery.$items.eq(Instance.gallery.index);

      Instance.$caption.html(Instance.formatter.call(Instance.$el, Instance));
      Instance.$position.find(Classes.position_current).html(Instance.gallery.index + 1);

      var source = Instance.$el.attr("href"),
        isVideo = checkVideo(source);

      if (isVideo) {
        Instance.type = "video";

        loadVideo(source);
      } else {
        Instance.type = "image";

        loadImage(source);
      }

      updateGalleryControls();
    }

    /**
     * @method private
     * @name updateGalleryControls
     * @description Updates gallery control states.
     */

    function updateGalleryControls() {
      Instance.$controls.removeClass(RawClasses.control_disabled);

      if (!Instance.infinite) {
        if (Instance.gallery.index === 0) {
          Instance.$controls.filter(Classes.control_previous).addClass(RawClasses.control_disabled);
        }
        if (Instance.gallery.index === Instance.gallery.total) {
          Instance.$controls.filter(Classes.control_next).addClass(RawClasses.control_disabled);
        }
      }
    }

    /**
     * @method private
     * @name onKeyDown
     * @description Handles keypress in gallery.
     * @param e [object] "Event data"
     */

    function onKeyDown(e) {
      if (Instance.gallery.active && (e.keyCode === 37 || e.keyCode === 39)) {
        Functions.killEvent(e);

        Instance.$controls.filter((e.keyCode === 37) ? Classes.control_previous : Classes.control_next).trigger(Events.click);
      } else if (e.keyCode === 27) {
        Instance.$close.trigger(Events.click);
      }
    }

    /**
     * @method private
     * @name appendContents
     * @description Moves target inline element.
     * @param id [string] "Target element id"
     */

    function appendContents(id) {
      Instance.$inlineTarget = $(id);
      Instance.$inlineContents = Instance.$inlineTarget.children().detach();

      appendObject(Instance.$inlineContents);
    }

    /**
     * @method private
     * @name restoreContents
     * @description Restores inline element.
     */

    function restoreContents() {
      Instance.$inlineTarget.append(Instance.$inlineContents.detach());
    }

    /**
     * @method private
     * @name loadURL
     * @description Load URL into iframe.
     * @param source [string] "Target URL"
     */

    function loadURL(source) {
      source = source + ((source.indexOf("?") > -1) ? "&" + Instance.requestKey + "=true" : "?" + Instance.requestKey + "=true");
      var $iframe = $('<iframe class="' + RawClasses.iframe + '" src="' + source + '"></iframe>');
      appendObject($iframe);
    }

    /**
     * @method private
     * @name appendObject
     * @description Appends and sizes object.
     * @param $object [jQuery Object] "Object to append"
     */

    function appendObject($object) {
      Instance.$content.append($object);
      sizeContent($object);
      openLightbox();
    }

    /**
     * @method private
     * @name sizeContent
     * @description Sizes jQuery object to fir in viewport.
     * @param $object [jQuery Object] "Object to size"
     */

    function sizeContent($object) {
      Instance.windowHeight = Formstone.windowHeight - Instance.mobilePaddingVertical - Instance.paddingVertical;
      Instance.windowWidth = Formstone.windowWidth - Instance.mobilePaddingHorizontal - Instance.paddingHorizontal;

      Instance.objectHeight = $object.outerHeight(true);
      Instance.objectWidth = $object.outerWidth(true);
      Instance.targetHeight = Instance.targetHeight || (Instance.$el ? Instance.$el.data(Namespace + "-height") : null);
      Instance.targetWidth = Instance.targetWidth || (Instance.$el ? Instance.$el.data(Namespace + "-width") : null);
      Instance.maxHeight = (Instance.windowHeight < 0) ? Instance.minHeight : Instance.windowHeight;
      Instance.isIframe = $object.is("iframe");
      Instance.objectMarginTop = 0;
      Instance.objectMarginLeft = 0;

      if (!Instance.isMobile) {
        Instance.windowHeight -= Instance.margin;
        Instance.windowWidth -= Instance.margin;
      }

      Instance.contentHeight = (Instance.targetHeight) ? Instance.targetHeight : (Instance.isIframe || Instance.isMobile) ? Instance.windowHeight : Instance.objectHeight;
      Instance.contentWidth = (Instance.targetWidth) ? Instance.targetWidth : (Instance.isIframe || Instance.isMobile) ? Instance.windowWidth : Instance.objectWidth;

      if ((Instance.isIframe || Instance.isObject) && Instance.isMobile) {
        Instance.contentHeight = Instance.windowHeight;
        Instance.contentWidth = Instance.windowWidth;
      } else if (Instance.isObject) {
        Instance.contentHeight = (Instance.contentHeight > Instance.windowHeight) ? Instance.windowHeight : Instance.contentHeight;
        Instance.contentWidth = (Instance.contentWidth > Instance.windowWidth) ? Instance.windowWidth : Instance.contentWidth;
      }

      if (!Instance.isMobile) {
        if (Instance.contentHeight > Instance.maxHeight) {
          Instance.contentHeight = Instance.maxHeight;
        }
        if (Instance.contentWidth > Instance.maxWidth) {
          Instance.contentWidth = Instance.maxWidth;
        }
      }
    }

    /**
     * @method private
     * @name loadError
     * @description Error when resource fails to load.
     */

    function loadError() {
      var $error = $('<div class="' + RawClasses.error + '"><p>Error Loading Resource</p></div>');

      // Clean up
      Instance.type = "element";
      Instance.$tools.remove();

      Instance.$image.off(Events.namespace);

      appendObject($error);

      $Window.trigger(Events.error);
    }

    /**
     * @method private
     * @name calculateNaturalSize
     * @description Determines natural size of target image.
     * @param $img [jQuery object] "Source image object"
     * @return [object | boolean] "Object containing natural height and width values or false"
     */

    function calculateNaturalSize($img) {
      var node = $img[0],
        img = new Image();

      if (typeof node.naturalHeight !== "undefined") {
        return {
          naturalHeight: node.naturalHeight,
          naturalWidth: node.naturalWidth
        };
      } else {
        if (node.tagName.toLowerCase() === 'img') {
          img.src = node.src;
          return {
            naturalHeight: img.height,
            naturalWidth: img.width
          };
        }
      }

      return false;
    }

    /**
     * @method private
     * @name checkVideo
     * @description Determines if url is a YouTube or Vimeo url.
     * @param source [string] "Source url"
     * @return [boolean] "True if YouTube or Vimeo url"
     */

    function checkVideo(source) {
      var formats = Instance.videoFormatter,
        parts;

      for (var i in formats) {
        if (formats.hasOwnProperty(i)) {
          parts = source.match(formats[i].pattern);

          if (parts !== null) {
            return formats[i].format.call(Instance, parts);
          }
        }
      }

      return false;
    }

    /**
     * @method private
     * @name onDocumentFocus
     * @description Hanle document focus
     * @param e [object] "Event data"
     */

    function onDocumentFocus(e) {
      var target = e.target;

      if (!$.contains(Instance.$lightbox[0], target) && target !== Instance.$lightbox[0] && target !== Instance.$overlay[0]) {
        Functions.killEvent(e);

        Instance.$lightbox.focus();
      }
    }

    /**
     * @plugin
     * @name Lightbox
     * @description A jQuery plugin for simple modals.
     * @type widget
     * @main lightbox.js
     * @main lightbox.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency touch.js
     * @dependency transition.js
     * @dependency viewer.js (optional)
     */

    var Plugin = Formstone.Plugin("lightbox", {
        widget: true,

        /**
         * @options
         * @param customClass [string] <''> "Class applied to instance"
         * @param fileTypes [regex] <> "Image file types"
         * @param fixed [boolean] <false> "Flag for fixed positioning"
         * @param formatter [function] <$.noop> "Caption format function"
         * @param infinite [boolean] <false> "Flag for infinite galleries"
         * @param labels.close [string] <'Close'> "Close button text"
         * @param labels.count [string] <'of'> "Gallery count separator text"
         * @param labels.next [string] <'Next'> "Gallery control text"
         * @param labels.previous [string] <'Previous'> "Gallery control text"
         * @param labels.captionClosed [string] <'Close Caption'> "Mobile caption toggle text, closed state"
         * @param labels.captionOpen [string] <'View Caption'> "Mobile caption toggle text, open state"
         * @param labels.thumbnailsClosed [string] <'Close Thumbnails'> "Mobile thumbnails toggle text, closed state"
         * @param labels.thumbnailsOpen [string] <'View Thumbnails'> "Mobile thumbnails toggle text, open state"
         * @param labels.lightbox [string] <'Lightbox {guid}'> "Lightbox aria label; {guid} replaced with instance GUID"
         * @param margin [int] <50> "Margin used when sizing (single side)"
         * @param maxHeight [int] <10000> "Maximum height of element modal"
         * @param maxWidth [int] <10000> "Maximum width of element modal"
         * @param minHeight [int] <100> "Minimum height of modal"
         * @param minWidth [int] <100> "Minimum width of modal"
         * @param overlay [boolean] <false> "Flag to force 'overlay' ('mobile') rendering"
         * @param retina [boolean] <false> "Flag to use 'retina' sizing (halves natural sizes)"
         * @param requestKey [string] <'fs-lightbox'> "GET variable for ajax / iframe requests"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param thumbnails [boolean] <false> "Flag to display thumbnail strip"
         * @param top [int] <0> "Target top position; over-rides centering"
         * @param videoFormatter [array] <[]> "Object of video formatter objects containing a 'pattern' regex and 'format' callback"
         * @param videoRatio [number] <0.5625> "Video height / width ratio (9 / 16 = 0.5625)"
         * @param videoWidth [int] <800> "Video max width"
         * @param viewer [boolean] <false> "Flag to force 'Viewer' rendering, if available"
         */

        defaults: {
          customClass: "",
          fileTypes: /\.(jpg|sjpg|jpeg|png|gif)/i,
          fixed: false,
          formatter: formatCaption,
          infinite: false,
          labels: {
            close: "Close",
            count: "of",
            next: "Next",
            previous: "Previous",
            captionClosed: "View Caption",
            captionOpen: "Close Caption",
            thumbnailsClosed: "View Thumbnails",
            thumbnailsOpen: "Close Thumbnails",
            lightbox: "Lightbox {guid}"
          },
          margin: 50,
          maxHeight: 10000,
          maxWidth: 10000,
          minHeight: 100,
          minWidth: 100,
          mobile: false,
          overlay: false,
          retina: false,
          requestKey: "fs-lightbox",
          theme: "fs-light",
          thumbnails: false,
          top: 0,
          videoFormatter: {
            "youtube": {
              pattern: /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,
              format: formatYouTube
            },
            "vimeo": {
              pattern: /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
              format: formatVimeo
            }
          },
          videoRatio: 0.5625,
          videoWidth: 800,
          viewer: true
        },

        classes: [
          "loading",
          "animating",
          // "scaling",
          // "zooming",
          "fixed",
          "mobile",
          "touch",
          "inline",
          "iframed",
          "open",
          "ready",
          "overlay",
          "close",
          "loading_icon",
          "container",
          "content",
          "image",
          "image_container",
          "video",
          "video_wrapper",
          "tools",
          "meta",
          "meta_content",
          "controls",
          "control",
          "control_previous",
          "control_next",
          "control_disabled",
          "position",
          "position_current",
          "position_total",
          "toggle",
          "caption_toggle",
          "caption",
          "caption_open",
          "thumbnailed",
          "thumbnails_open",
          "thumbnail_toggle",
          "thumbnails",
          "thumbnail_container",
          "thumbnail_item",
          "active",
          "has_controls",
          "has_caption",
          "iframe",
          "error",
          "active",
          "lock"
        ],

        /**
         * @events
         * @event open.lightbox "Lightbox opened; Triggered on window"
         * @event close.lightbox "Lightbox closed; Triggered on window"
         * @event error.lightbox "Lightbox error; Triggered on window"
         */

        events: {
          open: "open",
          close: "close"
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,

          resize: resizeLightbox
        },

        utilities: {
          _initialize: initialize,

          close: closeLightbox
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Defaults = Plugin.defaults,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,
      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body = null,

      // Internal

      $Locks = null,
      OnLoad = false,
      OnLoaded = false,

      // Singleton

      Instance = null;

    // Setup

    Formstone.Ready(setup);

  })

);

/*! formstone v1.4.13-1 [mediaquery.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name initialize
     * @description Initializes plugin.
     * @param opts [object] "Plugin options"
     */

    function initialize(options) {
      options = options || {};

      // Build Media Queries

      for (var i in MQStrings) {
        if (MQStrings.hasOwnProperty(i)) {
          Defaults[i] = (options[i]) ? $.merge(options[i], Defaults[i]) : Defaults[i];
        }
      }

      Defaults = $.extend(Defaults, options);

      // Sort

      Defaults.minWidth.sort(Functions.sortDesc);
      Defaults.maxWidth.sort(Functions.sortAsc);
      Defaults.minHeight.sort(Functions.sortDesc);
      Defaults.maxHeight.sort(Functions.sortAsc);

      // Bind Media Query Matches

      for (var j in MQStrings) {
        if (MQStrings.hasOwnProperty(j)) {
          MQMatches[j] = {};
          for (var k in Defaults[j]) {
            if (Defaults[j].hasOwnProperty(k)) {
              var mq = window.matchMedia("(" + MQStrings[j] + ": " + (Defaults[j][k] === Infinity ? 100000 : Defaults[j][k]) + Defaults.unit + ")");
              mq.addListener(onStateChange);
              MQMatches[j][Defaults[j][k]] = mq;
            }
          }
        }
      }

      // Initial Trigger

      onStateChange();
    }

    /**
     * @method
     * @name bind
     * @description Binds callbacks to media query matching.
     * @param key [string] "Instance key"
     * @param media [string] "Media query to match"
     * @param data [object] "Object containing 'enter' and 'leave' callbacks"
     * @example $.mediaquery("bind", "key", "(min-width: 500px)", { ... });
     */

    function bind(key, media, data) {
      var mq = Window.matchMedia(media),
        mqKey = createKey(mq.media);

      if (!Bindings[mqKey]) {
        Bindings[mqKey] = {
          mq: mq,
          active: true,
          enter: {},
          leave: {}
        };

        Bindings[mqKey].mq.addListener(onBindingChange);
      }

      for (var i in data) {
        if (data.hasOwnProperty(i) && Bindings[mqKey].hasOwnProperty(i)) {
          Bindings[mqKey][i][key] = data[i];
        }
      }

      var binding = Bindings[mqKey],
        matches = mq.matches;

      if (matches && binding[Events.enter].hasOwnProperty(key)) {
        binding[Events.enter][key].apply(mq);
        binding.active = true;
      } else if (!matches && binding[Events.leave].hasOwnProperty(key)) {
        binding[Events.leave][key].apply(mq);
        binding.active = false;
      }
    }

    /**
     * @method
     * @name unbind
     * @description Unbinds all callbacks from media query.
     * @param key [string] "Instance key"
     * @param media [string] "Media query to unbind; defaults to all"
     * @example $.mediaquery("unbind", "key");
     */

    function unbind(key, media) {
      if (!key) {
        return;
      }

      if (media) {
        // unbind specific query
        var mqKey = createKey(media);

        if (Bindings[mqKey]) {
          if (Bindings[mqKey].enter[key]) {
            delete Bindings[mqKey].enter[key];
          }

          if (Bindings[mqKey].leave[key]) {
            delete Bindings[mqKey].leave[key];
          }
        }
      } else {
        // unbind all
        for (var i in Bindings) {
          if (Bindings.hasOwnProperty(i)) {
            if (Bindings[i].enter[key]) {
              delete Bindings[i].enter[key];
            }

            if (Bindings[i].leave[key]) {
              delete Bindings[i].leave[key];
            }
          }
        }
      }
    }

    /**
     * @method private
     * @name setState
     * @description Sets current media query match state.
     */

    function setState() {
      State = {
        unit: Defaults.unit
      };

      for (var i in MQStrings) {
        if (MQStrings.hasOwnProperty(i)) {

          for (var j in MQMatches[i]) {
            if (MQMatches[i].hasOwnProperty(j)) {
              var state = (j === "Infinity") ? Infinity : parseInt(j, 10),
                isMax = i.indexOf("max") > -1;

              if (MQMatches[i][j].matches) {
                if (isMax) {
                  if (!State[i] || state < State[i]) {
                    State[i] = state;
                  }
                } else {
                  if (!State[i] || state > State[i]) {
                    State[i] = state;
                  }
                }
              }

            }
          }

        }
      }
    }

    /**
     * @method private
     * @name onStateChange
     * @description Handles media query changes.
     */

    function onStateChange() {
      setState();

      $("window").trigger(Events.mqChange, [State]);
    }

    /**
     * @method private
     * @name onBindingChange
     * @description Handles a binding's media query change.
     */

    function onBindingChange(mq) {
      var mqkey = createKey(mq.media),
        binding = Bindings[mqkey],
        matches = mq.matches,
        event = matches ? Events.enter : Events.leave;

      if (binding && (binding.active || (!binding.active && matches))) {
        for (var i in binding[event]) {
          if (binding[event].hasOwnProperty(i)) {
            binding[event][i].apply(binding.mq);
          }
        }

        binding.active = true;
      }
    }

    /**
     * @method private
     * @name createKey
     * @description Creates valid object key from string.
     * @param text [String] "String to create key from"
     * @return [string] Valid object key
     */

    function createKey(text) {
      return text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').replace(/^\s+|\s+$/g, '');
    }

    /**
     * @method
     * @name state
     * @description Returns the current state.
     * @return [object] "Current state object"
     * @example var state = $.mediaquery("state");
     */

    /**
     * @method private
     * @name getState
     * @description Returns the current state.
     * @return [object] "Current state object"
     */

    function getState() {
      return State;
    }

    /**
     * @plugin
     * @name Media Query
     * @description A jQuery plugin for responsive media query events.
     * @type utility
     * @main mediaquery.js
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("mediaquery", {
        utilities: {
          _initialize: initialize,
          state: getState,
          bind: bind,
          unbind: unbind
        },

        /**
         * @events
         * @event mqchange.mediaquery "Change to a media query match; Triggered on window"
         */

        events: {
          mqChange: "mqchange"
        }
      }),

      /**
       * @options
       * @param minWidth [array] <[ 0 ]> "Array of min-widths"
       * @param maxWidth [array] <[ Infinity ]> "Array of max-widths"
       * @param minHeight [array] <[ 0 ]> "Array of min-heights"
       * @param maxHeight [array] <[ Infinity ]> "Array of max-heights"
       * @param unit [string] <'px'> "Unit to use when matching widths and heights"
       */

      Defaults = {
        minWidth: [0],
        maxWidth: [Infinity],
        minHeight: [0],
        maxHeight: [Infinity],
        unit: "px"
      },

      // Raw events for switch
      Events = $.extend(Plugin.events, {
        enter: "enter",
        leave: "leave"
      }),

      // Localize References

      Window = Formstone.window,
      Window = Window,

      Functions = Plugin.functions,

      // Internal

      State = null,
      Bindings = [],
      MQMatches = {},
      MQStrings = {
        minWidth: "min-width",
        maxWidth: "max-width",
        minHeight: "min-height",
        maxHeight: "max-height"
      };

  })

);

/*! formstone v1.4.13-1 [sticky.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery",
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name raf
     * @description Handles request animation frame
     */

    function raf() {
      ScrollTop = Window.scrollY;

      if (ScrollTop < 0) {
        ScrollTop = 0;
      }

      if (ScrollTop !== OldScrollTop) {
        renderRAF();

        OldScrollTop = ScrollTop;
      }
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);

      resize();
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.enabled = false;
      data.stuck   = false;
      data.passed  = true;
      data.$clone  = data.$el.clone();

      data.container = data.$el.data("sticky-container");
      data.$container = $(data.container);

      data.$el.addClass(RawClasses.base);
      data.$clone.removeClass(RawClasses.element)
        .addClass(RawClasses.clone);
      data.$container.addClass(RawClasses.container);

      data.$stickys = $().add(data.$el).add(data.$clone);

      data.$el.after(data.$clone);

      var $images = $().add( data.$el.find("img") ).add( data.$container.find("img") );

      if ($images.length) {
        $images.on(Events.load, data, resizeInstance);
      }

      data.maxWidth = (data.maxWidth === Infinity ? "100000px" : data.maxWidth);
      data.mq = "(min-width:" + data.minWidth + ") and (max-width:" + data.maxWidth + ")";

      // Media Query support
      $.fsMediaquery("bind", data.rawGuid, data.mq, {
        enter: function() {
          enable.call(data.$el, data);
        },
        leave: function() {
          disable.call(data.$el, data);
        }
      });
    }

    /**
     * @method private
     * @name postConstruct
     * @description Run post build.
     * @param data [object] "Instance data"
     */

    function postConstruct(data) {
      cacheInstances();
      resize();
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$clone.remove();
      data.$container.removeClass(RawClasses.container);

      data.$el.css({
        height: '',
        width: '',
        top: '',
        bottom: '',
        marginBottom: ''
      }).removeClass(RawClasses.base);

      cacheInstances();
    }

    /**
     * @method
     * @name enable
     * @description Enables instance.
     * @example $(".target").sticky("enable");
     */

    function enable(data) {
      data.enabled = true;

      data.$el.addClass(RawClasses.enabled);

      resizeInstance(data);
    }

    /**
     * @method
     * @name disable
     * @description Disables instance.
     * @example $(".target").sticky("disable");
     */

    function disable(data) {
      data.enabled = false;

      data.$el.css({
        height: '',
        width: '',
        top: '',
        bottom: '',
        marginBottom: ''
      }).removeClass(RawClasses.enabled);

      data.$stickys.removeClass([RawClasses.passed, RawClasses.stuck].join(" "));
    }

    /**
     * @method private
     * @name renderRAF
     * @description Updates DOM based on animation values
     */

    function renderRAF() {
      Functions.iterate.call($Instances, checkInstance);
    }

    /**
     * @method
     * @name resize
     * @description Updates instance.
     * @example $(".target").sticky("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      if (data.enabled) {
        cacheProps(data);

        if (data.$container.length) {
          var containerPos = data.$container.offset();

          data.min = containerPos.top - data.margin;
          data.max = data.min + data.$container.outerHeight(false) - data.height;
        } else {
          var $el;

          if (data.stuck) {
            $el = data.$clone;
          } else {
            $el = data.$el;
          }

          var elPos = $el.offset();

          data.min = elPos.top - data.margin;
          data.max = false;
        }

        checkInstance(data);
      }
    }

    /**
     * @method private
     * @name cacheProps
     * @description Cache instance props
     * @param data [object] "Instance data"
     */

    function cacheProps(data) {
      var $el;

      if (data.stuck) {
        $el = data.$clone;
      } else {
        $el = data.$el;
      }

      data.margin = parseInt($el.css("margin-top"), 10);

      if (data.$container.length) {
        data.containerMargin = parseInt(data.$container.css("margin-top"), 10);
      } else {
        data.containerMargin = 0;
      }

      data.height = $el.outerHeight();
      data.width = $el.outerWidth();
    }

    /**
     * @method private
     * @name checkInstance
     * @description Handle window scroll event
     * @param data [object] "Instance data"
     */

    function checkInstance(data) {
      if (data.enabled) {
        var check = (ScrollTop + data.offset);

        if (check >= data.min) {
          data.stuck = true;
          data.$stickys.addClass(RawClasses.stuck);

          if (!data.stuck) {
            data.$el.trigger(Events.stuck);

            cacheProps(data);
          }

          var top = data.offset;
          var bottom = '';

          if (data.max && check > data.max) {
            if (!data.passed) {
              data.$el.trigger(Events.passed);
            }

            data.passed = true;
            data.$stickys.addClass(RawClasses.passed);

            top = '';
            bottom = 0;
          } else {
            data.passed = false;
            data.$stickys.removeClass(RawClasses.passed);
          }

          data.$el.css({
            height: data.height,
            width: data.width,
            top: top,
            bottom: bottom,
            marginBottom: 0
          });
        } else {
          data.stuck = false;
          data.$stickys.removeClass(RawClasses.stuck).removeClass(RawClasses.passed);

          if (data.stuck) {
            data.$el.trigger(Events.unstuck);

            // cacheProps(data);
          }

          data.$el.css({
            height: '',
            width: '',
            top: '',
            bottom: '',
            marginBottom: ''
          });
        }
      }
    }

    /**
     * @plugin
     * @name Sticky
     * @description A jQuery plugin for sticky elements.
     * @type widget
     * @main sticky.js
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("sticky", {
        widget: true,

        /**
         * @options
         * @param maxWidth [string] <'Infinity'> "Width at which to auto-disable plugin"
         * @param minWidth [string] <'0'> "Width at which to auto-disable plugin"
         * @param offset [int] <0> "Element offset for activating sticky position"
         */

        defaults: {
          maxWidth: Infinity,
          minWidth: '0px',
          offset: 0
        },

        classes: [
          "enabled",
          "sticky",
          "stuck",
          "clone",
          "container",
          "passed"
        ],

        /**
         * @events
         * @event passed.sticky "Element passed"
         * @event stuck.sticky "Element stuck"
         * @event unstuck.sticky "Element unstuck"
         */

        events: {
          passed: "passed",
          stuck: "stuck",
          unstuck: "unstuck"
        },

        methods: {
          _construct: construct,
          _postConstruct: postConstruct,
          _destruct: destruct,
          _resize: resize,
          _raf: raf,

          disable: disable,
          enable: enable,

          reset: resizeInstance,
          resize: resizeInstance
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body,
      ScrollTop = 0,
      OldScrollTop = 0,
      $Instances = [];

  })

);

/*! formstone v1.4.13-1 [swap.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.enabled = false;
      data.active = false;

      data.classes = $.extend(true, {}, Classes, data.classes);

      data.target = this.data(Namespace + "-target");
      data.$target = $(data.target).addClass(data.classes.raw.target);

      data.mq = "(max-width:" + (data.maxWidth === Infinity ? "100000px" : data.maxWidth) + ")";

      // live query for linked to avoid missing new elements
      var linked = this.data(Namespace + "-linked");
      data.linked = linked ? '[data-' + Namespace + '-linked="' + linked + '"]' : false;

      // live query for the group to avoid missing new elements
      var group = this.data(Namespace + "-group");
      data.group = group ? '[data-' + Namespace + '-group="' + group + '"]' : false;

      data.$swaps = $().add(this).add(data.$target);

      this.on(Events.click + data.dotGuid, data, onClick);
    }

    /**
     * @method private
     * @name postConstruct
     * @description Run post build.
     * @param data [object] "Instance data"
     */

    function postConstruct(data) {
      if (!data.collapse && data.group && !$(data.group).filter("[data-" + Namespace + "-active]").length) {
        $(data.group).eq(0).attr("data-" + Namespace + "-active", "true");
      }

      // Should be activate when enabled
      data.onEnable = this.data(Namespace + "-active") || false;

      // Media Query support
      $.fsMediaquery("bind", data.rawGuid, data.mq, {
        enter: function() {
          enable.call(data.$el, data, true);
        },
        leave: function() {
          disable.call(data.$el, data, true);
        }
      });
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      $.fsMediaquery("unbind", data.rawGuid);

      data.$swaps.removeClass([data.classes.raw.enabled, data.classes.raw.active].join(" "))
        .off(Events.namespace);
    }

    /**
     * @method
     * @name activate
     * @description Activate instance.
     * @example $(".target").swap("activate");
     */

    function activate(data, fromLinked) {
      if (data.enabled && !data.active) {
        if (data.group && !fromLinked) {
          // Deactivates grouped instances
          $(data.group).not(data.$el).not(data.linked)[Plugin.namespaceClean]("deactivate", true);
        }

        // index in group
        var index = (data.group) ? $(data.group).index(data.$el) : null;

        data.$swaps.addClass(data.classes.raw.active);

        if (!fromLinked) {
          if (data.linked) {
            // Linked handles
            $(data.linked).not(data.$el)[Plugin.namespaceClean]("activate", true);
          }
        }

        this.trigger(Events.activate, [index]);

        data.active = true;
      }
    }

    /**
     * @method
     * @name deactivate
     * @description Deactivates instance.
     * @example $(".target").swap("deactivate");
     */

    function deactivate(data, fromLinked) {
      if (data.enabled && data.active) {
        data.$swaps.removeClass(data.classes.raw.active);

        if (!fromLinked) {
          if (data.linked) {
            // Linked handles
            $(data.linked).not(data.$el)[Plugin.namespaceClean]("deactivate", true);
          }
        }

        this.trigger(Events.deactivate);

        data.active = false;
      }
    }

    /**
     * @method
     * @name enable
     * @description Enables instance.
     * @example $(".target").swap("enable");
     */

    function enable(data, fromLinked) {
      if (!data.enabled) {
        data.enabled = true;

        data.$swaps.addClass(data.classes.raw.enabled);

        if (!fromLinked) {
          // Linked handles
          $(data.linked).not(data.$el)[Plugin.namespaceClean]("enable");
        }

        this.trigger(Events.enable);

        if (data.onEnable) {
          data.active = false;
          activate.call(this, data);
        } else {
          data.active = true;
          deactivate.call(this, data);
        }
      }
    }

    /**
     * @method
     * @name disable
     * @description Disables instance.
     * @example $(".target").swap("disable");
     */

    function disable(data, fromLinked) {
      if (data.enabled) {
        data.enabled = false;

        data.$swaps.removeClass([data.classes.raw.enabled, data.classes.raw.active].join(" "));

        if (!fromLinked) {
          // Linked handles
          $(data.linked).not(data.$el)[Plugin.namespaceClean]("disable");
        }

        this.trigger(Events.disable);
      }
    }

    /**
     * @method private
     * @name onClick
     * @description Handles click nav click.
     * @param e [object] "Event data"
     */

    function onClick(e) {
      Functions.killEvent(e);

      var data = e.data;

      if (data.active && data.collapse) {
        deactivate.call(data.$el, data);
      } else {
        activate.call(data.$el, data);
      }
    }

    /**
     * @plugin
     * @name Swap
     * @description A jQuery plugin for toggling states.
     * @type widget
     * @main swap.js
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     */

    var Plugin = Formstone.Plugin("swap", {
        widget: true,

        /**
         * @options
         * @param collapse [boolean] <true> "Allow swap to collapse it's target"
         * @param maxWidth [string] <Infinity> "Width at which to auto-disable plugin"
         */

        defaults: {
          collapse: true,
          maxWidth: Infinity
        },

        classes: [
          "target",
          "enabled",
          "active"
        ],

        /**
         * @events
         * @event activate.swap "Swap activated"
         * @event deactivate.swap "Swap deactivated"
         * @event enable.swap "Swap enabled"
         * @event disable.swap "Swap diabled"
         */

        events: {
          activate: "activate",
          deactivate: "deactivate",
          enable: "enable",
          disable: "disable"
        },

        methods: {
          _construct: construct,
          _postConstruct: postConstruct,
          _destruct: destruct,

          // Public Methods

          activate: activate,
          deactivate: deactivate,
          enable: enable,
          disable: disable
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      Events = Plugin.events,
      Functions = Plugin.functions;

  })

);

/*! formstone v1.4.13-1 [touch.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.touches = [];
      data.touching = false;

      this.on(Events.dragStart, Functions.killEvent);

      if (data.swipe) {
        data.pan = true;
      }

      if (data.scale) {
        data.axis = false;
      }

      data.axisX = data.axis === "x";
      data.axisY = data.axis === "y";

      if (Formstone.support.pointer) {
        var action = "";

        if (!data.axis || (data.axisX && data.axisY)) {
          action = "none";
        } else {
          if (data.axisX) {
            action += " pan-y";
          }
          if (data.axisY) {
            action += " pan-x";
          }
        }

        touchAction(this, action);

        this.on(Events.pointerDown, data, onTouch);
      } else {
        this.on(Events.touchStart, data, onTouch)
          .on(Events.mouseDown, data, onPointerStart);
      }
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      this.off(Events.namespace);

      touchAction(this, "");
    }

    /**
     * @method private
     * @name onTouch
     * @description Delegates touch events.
     * @param e [object] "Event data"
     */

    function onTouch(e) {
      // Stop panning and zooming
      if (e.preventManipulation) {
        e.preventManipulation();
      }

      var data = e.data,
        oe = e.originalEvent;

      if (oe.type.match(/(up|end|cancel)$/i)) {
        onPointerEnd(e);
        return;
      }

      if (oe.pointerId) {
        // Normalize MS pointer events back to standard touches
        var activeTouch = false;
        for (var i in data.touches) {
          if (data.touches[i].id === oe.pointerId) {
            activeTouch = true;
            data.touches[i].pageX = oe.pageX;
            data.touches[i].pageY = oe.pageY;
          }
        }
        if (!activeTouch) {
          data.touches.push({
            id: oe.pointerId,
            pageX: oe.pageX,
            pageY: oe.pageY
          });
        }
      } else {
        // Alias normal touches
        data.touches = oe.touches;
      }

      // Delegate touch actions
      if (oe.type.match(/(down|start)$/i)) {
        onPointerStart(e);
      } else if (oe.type.match(/move$/i)) {
        onPointerMove(e);
      }
    }

    /**
     * @method private
     * @name onPointerStart
     * @description Handles pointer start.
     * @param e [object] "Event data"
     */

    function onPointerStart(e) {
      var data = e.data,
        touch = ($.type(data.touches) !== "undefined" && data.touches.length) ? data.touches[0] : null;

      if (touch) {
        data.$el.off(Events.mouseDown);
      }

      if (!data.touching) {
        data.startE = e.originalEvent;
        data.startX = (touch) ? touch.pageX : e.pageX;
        data.startY = (touch) ? touch.pageY : e.pageY;
        data.startT = new Date().getTime();
        data.scaleD = 1;
        data.passedAxis = false;
      }

      // Clear old click events

      if (data.$links) {
        data.$links.off(Events.click);
      }

      // Pan / Scale

      var newE = buildEvent(data.scale ? Events.scaleStart : Events.panStart, e, data.startX, data.startY, data.scaleD, 0, 0, "", "");

      if (data.scale && data.touches && data.touches.length >= 2) {
        var t = data.touches;

        data.pinch = {
          startX: midpoint(t[0].pageX, t[1].pageX),
          startY: midpoint(t[0].pageY, t[1].pageY),
          startD: pythagorus((t[1].pageX - t[0].pageX), (t[1].pageY - t[0].pageY))
        };

        newE.pageX = data.startX = data.pinch.startX;
        newE.pageY = data.startY = data.pinch.startY;
      }

      // Only bind at first touch
      if (!data.touching) {
        data.touching = true;

        if (data.pan && !touch) {
          $Window.on(Events.mouseMove, data, onPointerMove)
            .on(Events.mouseUp, data, onPointerEnd);
        }

        if (Formstone.support.pointer) {
          $Window.on([
            Events.pointerMove,
            Events.pointerUp,
            Events.pointerCancel
          ].join(" "), data, onTouch);
        } else {
          $Window.on([
            Events.touchMove,
            Events.touchEnd,
            Events.touchCancel
          ].join(" "), data, onTouch);
        }

        data.$el.trigger(newE);
      }
    }

    /**
     * @method private
     * @name onPointerMove
     * @description Handles pointer move.
     * @param e [object] "Event data"
     */

    function onPointerMove(e) {
      var data = e.data,
        touch = ($.type(data.touches) !== "undefined" && data.touches.length) ? data.touches[0] : null,
        newX = (touch) ? touch.pageX : e.pageX,
        newY = (touch) ? touch.pageY : e.pageY,
        deltaX = newX - data.startX,
        deltaY = newY - data.startY,
        dirX = (deltaX > 0) ? "right" : "left",
        dirY = (deltaY > 0) ? "down" : "up",
        movedX = Math.abs(deltaX) > data.threshold,
        movedY = Math.abs(deltaY) > data.threshold;

      if (!data.passedAxis && data.axis && ((data.axisX && movedY) || (data.axisY && movedX))) {
        // if axis and moved in opposite direction
        onPointerEnd(e);
      } else {
        if (!data.passedAxis && (!data.axis || (data.axis && (data.axisX && movedX) || (data.axisY && movedY)))) {
          // if has axis and moved in same direction
          data.passedAxis = true;
        }

        if (data.passedAxis) {
          Functions.killEvent(e);
          Functions.killEvent(data.startE);
        }

        // Pan / Scale

        var fire = true,
          newE = buildEvent(data.scale ? Events.scale : Events.pan, e, newX, newY, data.scaleD, deltaX, deltaY, dirX, dirY);

        if (data.scale) {
          if (data.touches && data.touches.length >= 2) {
            var t = data.touches;

            data.pinch.endX = midpoint(t[0].pageX, t[1].pageX);
            data.pinch.endY = midpoint(t[0].pageY, t[1].pageY);
            data.pinch.endD = pythagorus((t[1].pageX - t[0].pageX), (t[1].pageY - t[0].pageY));
            data.scaleD = (data.pinch.endD / data.pinch.startD);
            newE.pageX = data.pinch.endX;
            newE.pageY = data.pinch.endY;
            newE.scale = data.scaleD;
            newE.deltaX = data.pinch.endX - data.pinch.startX;
            newE.deltaY = data.pinch.endY - data.pinch.startY;
          } else if (!data.pan) {
            fire = false;
          }
        }

        if (fire) {
          data.$el.trigger(newE);
        }
      }
    }

    /**
     * @method private
     * @name onPointerEnd
     * @description Handles pointer end / cancel.
     * @param e [object] "Event data"
     */

    function onPointerEnd(e) {
      var data = e.data;

      // Pan / Swipe / Scale

      var touch = ($.type(data.touches) !== "undefined" && data.touches.length) ? data.touches[0] : null,
        newX = (touch) ? touch.pageX : e.pageX,
        newY = (touch) ? touch.pageY : e.pageY,
        deltaX = newX - data.startX,
        deltaY = newY - data.startY,
        endT = new Date().getTime(),
        eType = data.scale ? Events.scaleEnd : Events.panEnd,
        dirX = (deltaX > 0) ? "right" : "left",
        dirY = (deltaY > 0) ? "down" : "up",
        movedX = Math.abs(deltaX) > 1,
        movedY = Math.abs(deltaY) > 1;

      // Swipe
      if ( data.swipe && (endT - data.startT) < data.time && Math.abs(deltaX) > data.threshold) {
        eType = Events.swipe;
      }

      // Kill clicks to internal links

      if ((data.axis && ((data.axisX && movedY) || (data.axisY && movedX))) || (movedX || movedY)) {
        data.$links = data.$el.find("a");

        for (var i = 0, count = data.$links.length; i < count; i++) {
          bindLink(data.$links.eq(i), data);
        }
      }

      var newE = buildEvent(eType, e, newX, newY, data.scaleD, deltaX, deltaY, dirX, dirY);

      $Window.off([
        Events.touchMove,
        Events.touchEnd,
        Events.touchCancel,
        Events.mouseMove,
        Events.mouseUp,
        Events.pointerMove,
        Events.pointerUp,
        Events.pointerCancel
      ].join(" "));

      data.$el.trigger(newE);

      data.touches = [];

      if (data.scale) {
        /*
        if (e.originalEvent.pointerId) {
          for (var i in data.touches) {
            if (data.touches[i].id === e.originalEvent.pointerId) {
              data.touches.splice(i, 1);
            }
          }
        } else {
          data.touches = e.originalEvent.touches;
        }
        */

        /*
        if (data.touches.length) {
          onPointerStart($.extend(e, {
            data: data,
            originalEvent: {
              touches: data.touches
            }
          }));
        }
        */
      }

      if (touch) {
        data.touchTimer = Functions.startTimer(data.touchTimer, 5, function() {
          data.$el.on(Events.mouseDown, data, onPointerStart);
        });
      }

      data.touching = false;
    }

    /**
     * @method private
     * @name bindLink
     * @description Bind events to internal links
     * @param $link [object] "Object to bind"
     * @param data [object] "Instance data"
     */

    function bindLink($link, data) {
      $link.on(Events.click, data, onLinkClick);

      // http://www.elijahmanor.com/how-to-access-jquerys-internal-data/
      var events = $._data($link[0], "events")["click"];
      events.unshift(events.pop());
    }

    /**
     * @method private
     * @name onLinkClick
     * @description Handles clicks to internal links
     * @param e [object] "Event data"
     */

    function onLinkClick(e) {
      Functions.killEvent(e, true);
      e.data.$links.off(Events.click);
    }

    /**
     * @method private
     * @name buildEvents
     * @description Builds new event.
     * @param type [type] "Event type"
     * @param oe [object] "Original event"
     * @param x [int] "X value"
     * @param y [int] "Y value"
     * @param scale [float] "Scale value"
     * @param dx [float] "Delta X value"
     * @param dy [float] "Delta Y value"
     */

    function buildEvent(type, oe, px, py, s, dx, dy, dirx, diry) {
      return $.Event(type, {
        originalEvent: oe,
        bubbles: true,
        pageX: px,
        pageY: py,
        scale: s,
        deltaX: dx,
        deltaY: dy,
        directionX: dirx,
        directionY: diry
      });
    }

    /**
     * @method private
     * @name midpoint
     * @description Calculates midpoint.
     * @param a [float] "Value 1"
     * @param b [float] "Value 2"
     */

    function midpoint(a, b) {
      return (a + b) / 2.0;
    }

    /**
     * @method private
     * @name pythagorus
     * @description Pythagorean theorem.
     * @param a [float] "Value 1"
     * @param b [float] "Value 2"
     */

    function pythagorus(a, b) {
      return Math.sqrt((a * a) + (b * b));
    }

    /**
     * @method private
     * @name touchAction
     * @description Set ms touch action on target.
     * @param action [string] "Touch action value"
     */

    function touchAction($target, action) {
      $target.css({
        "-ms-touch-action": action,
        "touch-action": action
      });
    }

    /**
     * @plugin
     * @name Touch
     * @description A jQuery plugin for multi-touch events.
     * @type widget
     * @main touch.js
     * @dependency jQuery
     * @dependency core.js
     */

    var legacyPointer = !(Formstone.window.PointerEvent),
      Plugin = Formstone.Plugin("touch", {
        widget: true,

        /**
         * @options
         * @param axis [string] <null> "Limit axis for pan and swipe; 'x' or 'y'"
         * @param pan [boolean] <false> "Pan events"
         * @param scale [boolean] <false> "Scale events"
         * @param swipe [boolean] <false> "Swipe events"
         * @param threshold [int] <10> "Touch threshold for single axis"
         * @param time [int] <50> "Touch time limit for single axis"
         */

        defaults: {
          axis: false,
          pan: false,
          scale: false,
          swipe: false,
          threshold: 10,
          time: 50
        },

        methods: {
          _construct: construct,
          _destruct: destruct
        },

        events: {
          pointerDown: legacyPointer ? "MSPointerDown" : "pointerdown",
          pointerUp: legacyPointer ? "MSPointerUp" : "pointerup",
          pointerMove: legacyPointer ? "MSPointerMove" : "pointermove",
          pointerCancel: legacyPointer ? "MSPointerCancel" : "pointercancel"
        }
      }),

      // Localize References

      Events = Plugin.events,
      Functions = Plugin.functions,

      // Local

      $Window = Formstone.$window;

    /**
     * @events
     * @event panstart "Panning started"
     * @event pan "Panning"
     * @event panend "Panning ended"
     * @event scalestart "Scaling started"
     * @event scale "Scaling"
     * @event scaleend "Scaling ended"
     * @event swipe "Swipe"
     */

    Events.pan = "pan";
    Events.panStart = "panstart";
    Events.panEnd = "panend";
    Events.scale = "scale";
    Events.scaleStart = "scalestart";
    Events.scaleEnd = "scaleend";
    Events.swipe = "swipe";

  })

);

/*! formstone v1.4.13-1 [transition.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance Data"
     * @param callback [object] "Function to call"
     */

    function construct(data, callback) {
      if (callback) {
        // Target child element, for event delegation

        data.$target = this.find(data.target);
        data.$check = data.target ? data.$target : this;
        data.callback = callback;
        data.styles = getStyles(data.$check);
        data.timer = null;

        var duration = data.$check.css(Formstone.transition + "-duration"),
          durationValue = parseFloat(duration);

        if (Formstone.support.transition && duration && durationValue) {
          // If transitions supported and active

          this.on(Events.transitionEnd, data, onTranistionEnd);
        } else {
          data.timer = Functions.startTimer(data.timer, 50, function() {
            checkStyles(data);
          }, true);
        }
      }
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      Functions.clearTimer(data.timer, true);

      this.off(Events.namespace);
    }

    /**
     * @method private
     * @name onTransitionEnd
     * @description Handles transition end events.
     * @param e [object] "Event data"
     */

    function onTranistionEnd(e) {
      e.stopPropagation();
      e.preventDefault();

      var data = e.data,
        oe = e.originalEvent,
        $target = data.target ? data.$target : data.$el;

      // Check property and target
      if ((!data.property || oe.propertyName === data.property) && $(oe.target).is($target)) {
        resolve(data);
      }
    }

    /**
     * @method private
     * @name resolve
     * @description Resolves transition end events.
     * @param e [object] "Event data"
     */
    /**
     * @method
     * @name resolve
     * @description Resolves current transition end events.
     * @example $(".target").transition("resolve");
     */

    function resolve(data) {
      if (!data.always) {
        // Unbind events, clear timers, similiar to .one()

        data.$el[Plugin.namespaceClean]("destroy"); // clean up old data?
      }

      // fire callback

      data.callback.apply(data.$el);
    }

    /**
     * @method private
     * @name checkStyles
     * @description Compares current CSS to previous styles.
     * @param data [object] "Instance data"
     */

    function checkStyles(data) {
      var styles = getStyles(data.$check);

      if (!isEqual(data.styles, styles)) {
        resolve(data);
      }

      data.styles = styles;
    }

    /**
     * @method private
     * @name getStyles
     * @description Returns element's styles.
     * @param el [DOM] "Element to check"
     */

    function getStyles(el) {
      var computed,
        styles = {},
        prop,
        val;

      if (el instanceof $) {
        el = el[0];
      }

      if (Window.getComputedStyle) {
        // FireFox, Chrome, Safari

        computed = Window.getComputedStyle(el, null);

        for (var i = 0, count = computed.length; i < count; i++) {
          prop = computed[i];
          val = computed.getPropertyValue(prop);

          styles[prop] = val;
        }
      } else if (el.currentStyle) {
        // IE, Opera

        computed = el.currentStyle;

        for (prop in computed) {
          styles[prop] = computed[prop];
        }
      }

      return styles;
    }

    /**
     * @method private
     * @name isEqual
     * @description Compares two obejcts.
     * @param a [object] "Object to compare"
     * @param b [object] "Object to compare"
     */

    function isEqual(a, b) {
      if ($.type(a) !== $.type(b)) {
        return false;
      }

      for (var i in a) {

        if (a.hasOwnProperty(i)) {
          if (!(a.hasOwnProperty(i) && b.hasOwnProperty(i) && a[i] === b[i])) {
            return false;
          }
        } else {
          return false;
        }
      }

      return true;
    }

    /**
     * @plugin
     * @name Transition
     * @description A jQuery plugin for CSS transition events.
     * @type widget
     * @main transition.js
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("transition", {
        widget: true,

        /**
         * @options
         * @param always [boolean] <False> "Flag to always react to transition end (.on vs .one)"
         * @param property [string] <null> "Property to react to"
         * @param target [string] <null> "Target child selector"
         */

        defaults: {
          always: false,
          property: null,
          target: null
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          resolve: resolve
        }
      }),

      // Localize References

      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window;

  })

);

/*! formstone v1.4.13-1 [viewer.js] 2019-04-26 | GPL-3.0 License | formstone.it */
/* global define */

// TODO: external controls like carousel?
// TODO: Add swipe next/previous when zoomed out?

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./transition"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      scroll();
      Window.addEventListener("scroll", scroll);
      $Body = Formstone.$body;
    }

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      Functions.iterate.call($Instances, resizeInstance);
      // Functions.iterate.call($LazyInstances, cacheScrollPosition);
      // Functions.iterate.call($LazyInstances, checkScrollPosition);
    }

    /**
     * @method private
     * @name scroll
     * @description Handles window scroll
     */

    function scroll() {
      ScrollTop = Window.scrollY + Formstone.windowHeight;

      if (ScrollTop < 0) {
        ScrollTop = 0;
      }

      // Functions.iterate.call($LazyInstances, checkScrollPosition);
    }

    /**
     * @method private
     * @name raf
     * @description Handles request animation frame
     */

    function raf() {
      Functions.iterate.call($Instances, renderRAF);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);
      // $LazyInstances = $(Classes.lazy);

      // Functions.iterate.call($LazyInstances, cacheScrollPosition);

      if ($Instances.length) {
        Functions.lockViewport(Namespace);
      } else {
        Functions.unlockViewport(Namespace);
      }
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      var $image,
        imageData,
        html = '',
        controlPrevClasses = [RawClasses.control, RawClasses.control_previous].join(" "),
        controlNextClasses = [RawClasses.control, RawClasses.control_next].join(" "),
        controlZoomInClasses = [RawClasses.control, RawClasses.control_zoom_in].join(" "),
        controlZoomOutClasses = [RawClasses.control, RawClasses.control_zoom_out].join(" ");

      data.thisClasses = [RawClasses.base, RawClasses.loading, data.customClass, data.theme];
      data.images = [];
      data.source = false;
      data.gallery = false;
      data.tapTimer = null;
      data.action = false;
      data.isRendering = false;
      data.isZooming = false;
      data.isAnimating = false;

      data.keyDownTime = 1;

      data.$images = this.find("img").addClass(RawClasses.source);
      data.index = 0;
      data.total = data.$images.length - 1;

      // Check custom controls
      data.customControls = ($.type(data.controls) === "object" && data.controls.zoom_in && data.controls.zoom_out);

      if (data.$images.length > 1) {
        data.gallery = true;
        data.thisClasses.push(RawClasses.gallery);

        // Requie zoom for gallery custom controls
        if (data.customControls && (!data.controls.previous || !data.controls.next)) {
          data.customControls = false;
        }
      }

      for (var i = 0; i < data.$images.length; i++) {
        $image = data.$images.eq(i);
        data.images.push($image.attr("src"));
      }

      html += '<div class="' + RawClasses.wrapper + '">';
      html += '<div class="' + RawClasses.loading_icon + '"></div>';
      html += '<div class="' + RawClasses.viewport + '"></div>';
      html += '</div>'; // wrapper

      if (data.controls && !data.customControls) {
        html += '<div class="' + RawClasses.controls + '">';
        html += '<button type="button" class="' + controlPrevClasses + '">' + data.labels.previous + '</button>';
        html += '<button type="button" class="' + controlZoomOutClasses + '">' + data.labels.zoom_out + '</button>';
        html += '<button type="button" class="' + controlZoomInClasses + '">' + data.labels.zoom_in + '</button>';
        html += '<button type="button" class="' + controlNextClasses + '">' + data.labels.next + '</button>';
        html += '</div>'; // controls
      }

      this.addClass(data.thisClasses.join(" "))
        .prepend(html);

      data.$wrapper = this.find(Classes.wrapper);
      data.$viewport = this.find(Classes.viewport);

      if (data.customControls) {
        data.$controls = $(data.controls.container).addClass([RawClasses.controls, RawClasses.controls_custom].join(" "));
        data.$controlPrevious = $(data.controls.previous).addClass(controlPrevClasses);
        data.$controlNext = $(data.controls.next).addClass(controlNextClasses);
        data.$controlZoomIn = $(data.controls.zoom_in).addClass(controlZoomInClasses);
        data.$controlZoomOut = $(data.controls.zoom_out).addClass(controlZoomOutClasses);
      } else {
        data.$controls = this.find(Classes.controls);
        data.$controlPrevious = this.find(Classes.control_previous);
        data.$controlNext = this.find(Classes.control_next);
        data.$controlZoomIn = this.find(Classes.control_zoom_in);
        data.$controlZoomOut = this.find(Classes.control_zoom_out);
      }

      data.$controlItems = data.$controlPrevious.add(data.$controlNext);
      data.$controlZooms = data.$controlZoomIn.add(data.$controlZoomOut);

      cacheInstances();

      data.$controlItems.on(Events.click, data, advanceGallery);
      data.$controlZooms.on([Events.touchStart, Events.mouseDown].join(" "), data, onZoomStart)
        .on([Events.touchEnd, Events.mouseUp].join(" "), data, onClearZoom);

      // if (data.lazy) {
      //  checkScrollPosition(data);
      // } else {
      loadImage(data, data.images[data.index], true);
      // }

      updateControls(data);
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$wrapper.remove();

      data.$image.removeClass(RawClasses.source);

      if (data.controls && !data.customControls) {
        data.$controls.remove();
      }

      if (data.customControls) {
        data.$controls.removeClass([RawClasses.controls, RawClasses.controls_custom].join(" "));
        data.$controlItems.off(Events.click).removeClass([RawClasses.control, RawClasses.control_previous, RawClasses.control_next].join(" "));
        data.$controlZooms.off([Events.touchStart, Events.mouseDown].join(" "))
          .off([Events.touchStart, Events.mouseDown].join(" "))
          .off([Events.touchEnd, Events.mouseUp].join(" "))
          .removeClass([RawClasses.control, RawClasses.control_zoom_in, RawClasses.control_zoom_out].join(" "));
      }

      this.removeClass(data.thisClasses.join(" "))
        .off(Events.namespace);

      cacheInstances();
    }

    /**
     * @method
     * @name load
     * @description Loads source image
     * @param source [string OR array] "Source image (string) or array of images (array)"
     * @example $(".target").viewer("load", "path/to/image.jpg");
     * @example $(".target").viewer("load", ["path/to/image-1.jpg","path/to/image-2.jpg"]);
     */

    function load(data, source) {
      data.index = 0;

      if (typeof source === "string") {
        data.total = 0;
        data.images = [source];
        data.gallery = false;

        data.$el.removeClass(RawClasses.gallery);
      } else {
        data.total = source.length - 1;
        data.images = source;

        if (source.length > 1) {
          data.gallery = true;
          data.$el.addClass(RawClasses.gallery);
        }

        source = data.images[data.index];
      }

      unloadImage(data, function() {
        loadImage(data, source);
      });
    }

    /**
     * @method private
     * @name loadInitialImage
     * @description Loads first source image
     * @param data [object] "Instance data"
     */

    function loadInitialImage(data) {
      loadImage(data, data.images[data.index]);
    }

    /**
     * @method private
     * @name loadImage
     * @description Loads source image
     * @param data [object] "Instance data"
     * @param source [string] "Source image"
     * @param initialLoad [boolean] "Is initial load"
     */

    function loadImage(data, source, initialLoad) {
      if (!data.isAnimating) {
        data.isAnimating = true;

        data.$container = $('<div class="' + RawClasses.container + '"><img></div>');
        data.$image = data.$container.find("img");

        data.$viewport.append(data.$container);

        // Load image
        data.$image.one(Events.load, function() {
            onImageReady(data);

            data.isAnimating = false;

            // Transition in
            data.$container.fsTransition({
                property: "opacity"
              },
              function() {
                // Loaded
              });

            data.$el.removeClass(RawClasses.loading);

            data.$container.fsTouch({
                pan: true,
                scale: true
              }).on(Events.scaleStart, data, onScaleStart)
              .on(Events.scaleEnd, data, onScaleEnd)
              .on(Events.scale, data, onScale);

            data.$el.trigger(Events.loaded);
          }).one(Events.error, data, loadError)
          .attr("src", source)
          .addClass(RawClasses.image);

        // Check if image is cached
        if (data.$image[0].complete || data.$image[0].readyState === 4) {
          data.$image.trigger(Events.load);
        }

        data.source = source;
      }
    }

    /**
     * @method private
     * @name loadError
     * @description Error when resource fails to load.
     */

    function loadError(e) {
      var data = e.data;

      data.$el.trigger(Events.error);
    }

    /**
     * @method private
     * @name onImageReady
     * @description Sets up image data
     * @param data [object] "Instance data"
     */

    // on initial load
    function onImageReady(data) {
      // Cache image properties
      // First for container
      cacheImageProps(data);

      // Cache viewport properties
      cacheViewportProps(data);

      // Set initial container position
      data.containerTop = (data.viewportHeight / 2);
      data.containerLeft = (data.viewportWidth / 2);

      // Cache image min max
      cacheImageMinMax(data);

      // Set initial image size
      data.imageHeight = data.naturalHeight;
      data.imageWidth = data.naturalWidth;

      // Size the image to fit into the viewport
      fitToViewport(data);

      // Cache container min max
      cacheContainerMinMax(data);

      // Cache image top left
      cacheImageTopLeft(data);

      // Cache last props
      cacheLastProps(data);

      // Cache render props
      cacheRenderProps(data);

      // Update dom
      var props = {
        containerTop: data.containerTop,
        containerLeft: data.containerLeft,
        imageHeight: data.imageHeight,
        imageWidth: data.imageWidth,
        imageTop: data.imageTop,
        imageLeft: data.imageLeft,
      };

      setSizeAndPosition(data, props);

      data.isRendering = true;
    }

    /**
     * @method private
     * @name cacheImageProps
     * @description Caches image properties
     * @param data [object] "Instance data"
     */

    function cacheImageProps(data) {
      var naturalSize = calculateNaturalSize(data.$image);

      data.naturalHeight = naturalSize.naturalHeight;
      data.naturalWidth = naturalSize.naturalWidth;

      data.ratioHorizontal = data.naturalHeight / data.naturalWidth;
      data.ratioVertical = data.naturalWidth / data.naturalHeight;

      data.isWide = (data.naturalWidth > data.naturalHeight);
    }

    /**
     * @method private
     * @name cacheViewportProps
     * @description Caches viewport properties
     * @param data [object] "Instance data"
     */

    function cacheViewportProps(data) {
      data.viewportHeight = data.$viewport.outerHeight();
      data.viewportWidth = data.$viewport.outerWidth();
    }

    /**
     * @method private
     * @name cacheContainerProps
     * @description Caches container properties
     * @param data [object] "Instance data"
     */

    function cacheContainerMinMax(data) {
      if (data.imageHeight <= data.viewportHeight) {
        data.containerMinTop = (data.viewportHeight / 2);
        data.containerMaxTop = (data.viewportHeight / 2);
      } else {
        data.containerMinTop = data.viewportHeight - (data.imageHeight / 2);
        data.containerMaxTop = (data.imageHeight / 2);
      }

      if (data.imageWidth <= data.viewportWidth) {
        data.containerMinLeft = (data.viewportWidth / 2);
        data.containerMaxLeft = (data.viewportWidth / 2);
      } else {
        data.containerMinLeft = data.viewportWidth - (data.imageWidth / 2);
        data.containerMaxLeft = (data.imageWidth / 2);
      }
    }

    /**
     * @method private
     * @name cacheImageMinMax
     * @description Caches image min and max based on viewport and size
     * @param data [object] "Instance data"
     */

    function cacheImageMinMax(data) {
      // Set min
      if (data.isWide) {
        //WIDE
        data.imageMinWidth = data.viewportWidth;
        data.imageMinHeight = data.imageMinWidth * data.ratioHorizontal;

        if (data.imageMinHeight > data.viewportHeight) {
          data.imageMinHeight = data.viewportHeight;
          data.imageMinWidth = data.imageMinHeight * data.ratioVertical;
        }
      } else {
        //TALL
        data.imageMinHeight = data.viewportHeight;
        data.imageMinWidth = data.imageMinHeight * data.ratioVertical;

        if (data.imageMinWidth > data.viewportWidth) {
          data.imageMinWidth = data.viewportWidth;
          data.imageMinHeight = data.imageMinWidth * data.ratioHorizontal;
        }
      }

      // Check natural max against new min
      if (data.imageMinWidth > data.naturalWidth || data.imageMinHeight > data.naturalHeight) {
        data.imageMinHeight = data.naturalHeight;
        data.imageMinWidth = data.naturalWidth;
      }

      // Set max
      data.imageMaxHeight = data.naturalHeight;
      data.imageMaxWidth = data.naturalWidth;
    }

    /**
     * @method private
     * @name cacheImageTopLeft
     * @description Caches image top and left based on viewport and size
     * @param data [object] "Instance data"
     */

    function cacheImageTopLeft(data) {
      data.imageTop = -(data.imageHeight / 2);
      data.imageLeft = -(data.imageWidth / 2);
    }

    /**
     * @method private
     * @name cacheLastProps
     * @description Caches last container and image properties
     * @param data [object] "Instance data"
     */

    function cacheLastProps(data) {
      data.lastContainerTop = data.containerTop;
      data.lastContainerLeft = data.containerLeft;

      data.lastImageHeight = data.imageHeight;
      data.lastImageWidth = data.imageWidth;

      data.lastImageTop = data.imageTop;
      data.lastImageLeft = data.imageLeft;
    }

    /**
     * @method private
     * @name cacheRenderProps
     * @description Caches container and image render properties
     * @param data [object] "Instance data"
     */

    function cacheRenderProps(data) {
      data.renderContainerTop = data.lastContainerTop;
      data.renderContainerLeft = data.lastContainerLeft;

      data.renderImageTop = data.lastImageTop;
      data.renderImageLeft = data.lastImageLeft;

      data.renderImageHeight = data.lastImageHeight;
      data.renderImageWidth = data.lastImageWidth;
    }

    /**
     * @method private
     * @name fitToViewport
     * @description Fits image to viewport size
     * @param data [object] "Instance data"
     */

    function fitToViewport(data) {
      data.imageHeight = data.imageMinHeight;
      data.imageWidth = data.imageMinWidth;
    }

    /**
     * @method private
     * @name checkImageMinMax
     * @description Checks image properties against min and max
     * @param data [object] "Instance data"
     */

    // on scale
    function checkImageMinMax(data) {
      if (data.imageHeight < data.imageMinHeight) {
        data.imageHeight = data.imageMinHeight;
      }
      if (data.imageHeight > data.imageMaxHeight) {
        data.imageHeight = data.imageMaxHeight;
      }

      if (data.imageWidth < data.imageMinWidth) {
        data.imageWidth = data.imageMinWidth;
      }
      if (data.imageWidth > data.imageMaxWidth) {
        data.imageWidth = data.imageMaxWidth;
      }
    }

    /**
     * @method private
     * @name checkContainerTopLeft
     * @description Checks container properties against top and left
     * @param data [object] "Instance data"
     */

    function checkContainerTopLeft(data) {
      if (data.containerTop < data.containerMinTop) {
        data.containerTop = data.containerMinTop;
      }
      if (data.containerTop > data.containerMaxTop) {
        data.containerTop = data.containerMaxTop;
      }

      if (data.containerLeft < data.containerMinLeft) {
        data.containerLeft = data.containerMinLeft;
      }
      if (data.containerLeft > data.containerMaxLeft) {
        data.containerLeft = data.containerMaxLeft;
      }
    }

    /**
     * @method private
     * @name checkDoubleTap
     * @description Checks is double tapping
     * @param data [object] "Instance data"
     */

    function checkDoubleTap(data) {
      if (data.tapTimer === null) {
        data.tapTimer = Functions.startTimer(data.tapTimer, 500, function() {
          clearDoubleTap(data);
        });
      } else {
        clearDoubleTap(data);
        onImageZoom(data);
      }
    }

    /**
     * @method private
     * @name clearDoubleTap
     * @description Clears double tap timer
     * @param data [object] "Instance data"
     */

    function clearDoubleTap(data) {
      Functions.clearTimer(data.tapTimer);
      data.tapTimer = null;
    }

    /**
     * @method private
     * @name setSizeAndPosition
     * @description Updates image and container DOM
     * @param data [object] "Instance data"
     */

    function setSizeAndPosition(data, props) {
      if (Formstone.transform) {
        var scaleX = props.imageWidth / data.naturalWidth,
          scaleY = props.imageHeight / data.naturalHeight;

        data.$container.css(Formstone.transform, "translate3d(" + props.containerLeft + "px, " + props.containerTop + "px, 0)");
        data.$image.css(Formstone.transform, "translate3d(-50%, -50%, 0) scale(" + scaleX + "," + scaleY + ")");
      } else {
        data.$container.css({
          top: props.containerTop,
          left: props.containerLeft
        });

        data.$image.css({
          height: props.imageHeight,
          width: props.imageWidth,
          top: props.imageTop,
          left: props.imageLeft
        });
      }
    }

    /**
     * @method private
     * @name onScaleStart
     * @description Handles scale start event
     * @param e [object] "Event data"
     */

    function onScaleStart(e) {
      var data = e.data;

      // Check double tap
      checkDoubleTap(data);

      // Cache previous values
      cacheLastProps(data);
    }

    /**
     * @method private
     * @name onScale
     * @description Handles scale event
     * @param e [object] "Event data"
     */

    function onScale(e) {
      var data = e.data;

      // Clear double tap
      clearDoubleTap(data);

      data.isRendering = false;
      data.isZooming = false;

      var zoomed = (data.imageHeight > data.imageMinHeight + 1);

      // Change container position
      data.containerTop = data.lastContainerTop + e.deltaY;
      data.containerLeft = data.lastContainerLeft + e.deltaX;

      /*
          var diffX  = data.lastContainerLeft - data.containerLeft,
            diffY  = data.lastContainerTop - data.containerTop;

          data.containerLeft -= diffX;
          data.containerTop  -= diffY;
      */

      // Change image size
      data.imageHeight = data.lastImageHeight * e.scale;
      data.imageWidth = data.lastImageWidth * e.scale;

      // Cache container min max
      cacheContainerMinMax(data);

      // Check container top left
      checkContainerTopLeft(data);

      // Check image min max
      checkImageMinMax(data);

      // Cache image top left
      cacheImageTopLeft(data);

      // Update dom
      var props = {
        containerTop: data.containerTop,
        containerLeft: data.containerLeft,
        imageHeight: data.imageHeight,
        imageWidth: data.imageWidth,
        imageTop: data.imageTop,
        imageLeft: data.imageLeft,
      };

      setSizeAndPosition(data, props);
    }

    /**
     * @method private
     * @name onScaleEnd
     * @description Handles scale end event
     * @param e [object] "Event data"
     */

    function onScaleEnd(e) {
      var data = e.data;

      if (!data.isZooming) {
        // Cache last properties
        cacheLastProps(data);

        // Cache rander properties
        cacheRenderProps(data);

        data.isRendering = true;
      }
    }

    /**
     * @method private
     * @name onImageZoom
     * @description Zooms image in or out depending on current size
     * @param data [object] "Instance data"
     */

    function onImageZoom(data) {
      var zoomed = (data.imageHeight > data.imageMinHeight + 1);

      data.isZooming = true;

      // Cache last properties
      cacheLastProps(data);

      // Cache rander properties
      cacheRenderProps(data);

      if (zoomed) {
        // zoomed in (go to min)
        data.imageHeight = data.imageMinHeight;
        data.imageWidth = data.imageMinWidth;
      } else {
        // zoomed out (go to max)
        data.imageHeight = data.imageMaxHeight;
        data.imageWidth = data.imageMaxWidth;
      }

      // Cache container min max
      cacheContainerMinMax(data);

      // Check container top left
      checkContainerTopLeft(data);

      // Cache image top left
      cacheImageTopLeft(data);

      data.isRendering = true;
    }

    /**
     * @method private
     * @name onZoomStart
     * @description Handle zoom start
     * @param e [object] "Event data"
     */

    function onZoomStart(e) {
      Functions.killEvent(e);

      var $target = $(e.currentTarget),
        data = e.data,
        direction = ($target.hasClass(RawClasses.control_zoom_out)) ? 'out' : 'in';

      if (direction === 'out') {
        onZoomOut(data);
      } else {
        onZoomIn(data);
      }
    }

    /**
     * @method private
     * @name onZoomIn
     * @description Handle zoom in
     * @param data [object] "Instance data"
     */

    function onZoomIn(data) {
      data.keyDownTime = 1;
      data.action = 'zoom_in';
    }

    /**
     * @method private
     * @name onZoomOut
     * @description Handle zoom out
     * @param data [object] "Instance data"
     */

    function onZoomOut(data) {
      data.keyDownTime = 1;
      data.action = 'zoom_out';
    }

    /**
     * @method private
     * @name onClearZoom
     * @description Handle clear zoom
     * @param e [object] "Event data"
     */

    function onClearZoom(e) {
      var data = e.data;

      data.action = false;
    }

    /**
     * @method private
     * @name renderRAF
     * @description Updates DOM based on animation values
     * @param data [object] "Instance data"
     */

    function renderRAF(data) {
      if (data.isRendering) {
        if (data.action) {
          data.keyDownTime += data.zoomIncrement;

          var delta = ((data.action === "zoom_out") ? -1 : 1) * Math.round((data.imageWidth * data.keyDownTime) - data.imageWidth);

          if (delta > data.zoomDelta) {
            delta = data.zoomDelta;
          }

          if (data.isWide) {
            data.imageWidth += delta;
            data.imageHeight = Math.round(data.imageWidth / data.ratioVertical);
          } else {
            data.imageHeight += delta;
            data.imageWidth = Math.round(data.imageHeight / data.ratioHorizontal);
          }

          // Check image min max
          checkImageMinMax(data);

          // Cache image top left
          cacheImageTopLeft(data);

          // Cache container min max
          cacheContainerMinMax(data);

          // Check container top left
          checkContainerTopLeft(data);
        }

        data.renderContainerTop += Math.round((data.containerTop - data.renderContainerTop) * data.zoomEnertia);
        data.renderContainerLeft += Math.round((data.containerLeft - data.renderContainerLeft) * data.zoomEnertia);

        data.renderImageTop += Math.round((data.imageTop - data.renderImageTop) * data.zoomEnertia);
        data.renderImageLeft += Math.round((data.imageLeft - data.renderImageLeft) * data.zoomEnertia);

        data.renderImageHeight += Math.round((data.imageHeight - data.renderImageHeight) * data.zoomEnertia);
        data.renderImageWidth += Math.round((data.imageWidth - data.renderImageWidth) * data.zoomEnertia);

        // Update DOM

        var props = {
          containerTop: data.renderContainerTop,
          containerLeft: data.renderContainerLeft,
          imageHeight: data.renderImageHeight,
          imageWidth: data.renderImageWidth,
          imageTop: data.renderImageTop,
          imageLeft: data.renderImageLeft,
        };

        setSizeAndPosition(data, props);
      }
    }

    /**
     * @method
     * @name unload
     * @description Unloads current image
     * @example $(".target").viewer("unload");
     */

    function unload(data) {
      unloadImage(data);
    }

    /**
     * @method private
     * @name unloadImage
     * @description Unloads current image
     * @param data [object] "Instance data"
     * @param callback [function] "Callback function"
     */

    function unloadImage(data, callback) {
      if (!data.isAnimating) {
        clearDoubleTap(data);

        data.isAnimating = true;
        data.isRendering = false;
        data.isZooming = false;

        clearTouch(data);

        data.$container.fsTransition({
            property: "opacity"
          },
          function() {
            data.isAnimating = false;

            data.$container.remove();

            if (typeof callback === "function") {
              callback.call(window, data);
            }
          });

        data.$el.addClass(RawClasses.loading);
      }
    }

    /**
     * @method private
     * @name advanceGallery
     * @description Advances gallery
     * @param e [object] "Event data"
     */

    function advanceGallery(e) {
      Functions.killEvent(e);

      var $target = $(e.currentTarget),
        data = e.data,
        index = data.index + (($target.hasClass(RawClasses.control_next)) ? 1 : -1);

      if (!data.isAnimating) {
        if (index < 0) {
          index = 0;
        }

        if (index > data.total) {
          index = data.total;
        }

        if (index !== data.index) {
          data.index = index;

          unloadImage(data, function() {
            loadImage(data, data.images[data.index]);
          });
        }

        updateControls(data);
      }
    }

    /**
     * @method private
     * @name updateControls
     * @description Update control states
     * @param data [object] Instance data
     */

    function updateControls(data) {
      data.$controlItems.removeClass(RawClasses.control_disabled);

      if (data.index === 0) {
        data.$controlPrevious.addClass(RawClasses.control_disabled);
      }
      if (data.index === data.images.length - 1) {
        data.$controlNext.addClass(RawClasses.control_disabled);
      }
    }

    /**
     * @method private
     * @name resize
     * @description Resize target instance
     * @example $(".target").viewer("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      cacheViewportProps(data);

      cacheContainerMinMax(data);

      cacheImageMinMax(data);

      cacheImageTopLeft(data);

      cacheContainerMinMax(data);

      checkContainerTopLeft(data);

      checkImageMinMax(data);
    }

    /**
     * @method private
     * @name clearTouch
     * @description Clears current touch action.
     */

    function clearTouch(data) {
      if (data.$container && data.$container.length) {
        data.$container.fsTouch("destroy")
          .off(Events.scaleStart, onScaleStart)
          .off(Events.scaleEnd, onScaleEnd)
          .off(Events.scale, onScale);
      }
    }

    /**
     * @method private
     * @name cacheScrollPosition
     * @description Cahce target scroll position
     * @param data [object] "Instance data"
     */

    function cacheScrollPosition(data) {
      data.scrollTop = data.$el.offset().top;
    }

    // /**
    //  * @method private
    //  * @name checkScrollPosition
    //  * @description Check target scroll position against window
    //  * @param data [object] "Instance data"
    //  */
    //
    // function checkScrollPosition(data) {
    //   if (!data.visible && data.scrollTop < ScrollTop + data.lazyEdge) {
    //     data.visible = true;
    //     loadInitialImage(data);
    //   }
    // }

    /**
     * @method private
     * @name calculateNaturalSize
     * @description Determines natural size of target image.
     * @param $img [jQuery object] "Source image object"
     * @return [object | boolean] "Object containing natural height and width values or false"
     */

    function calculateNaturalSize($img) {
      var node = $img[0],
        img = new Image();

      if (typeof node.naturalHeight !== "undefined") {
        return {
          naturalHeight: node.naturalHeight,
          naturalWidth: node.naturalWidth
        };
      } else {
        if (node.tagName.toLowerCase() === 'img') {
          img.src = node.src;
          return {
            naturalHeight: img.height,
            naturalWidth: img.width
          };
        }
      }

      return false;
    }

    /**
     * @plugin
     * @name Viewer
     * @description A jQuery plugin for image exploration.
     * @type widget
     * @main viewer.js
     * @main viewer.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency touch.js
     * @dependency transition.js
     */

    var Plugin = Formstone.Plugin("viewer", {
        widget: true,

        /**
         * @options
         * @param controls [boolean or object] <true> "Flag to draw controls OR object containing container, next, previous, zoom_in and zoom_out control selectors (Must be fully qualified selectors)"
         * @param customClass [string] <''> "Class applied to instance"
         // param lazy [boolean] <false> "Lazy load with scroll"
         // param lazyEdge [int] <100> "Lazy load edge"
         * @param labels.count [string] <'of'> "Gallery count separator text"
         * @param labels.next [string] <'Next'> "Gallery control text"
         * @param labels.previous [string] <'Previous'> "Gallery control text"
         * @param labels.zoom_in [string] <'Zoom In'> "Image zoom text"
         * @param labels.zoom_out [string] <'Zoom Out'> "Image zoom text"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param zoomDelta [int] <100> "Max zoom change"
         * @param zoomEnertia [float] <0.2> "Enertia for zoom"
         * @param zoomIncrement [float] <0.01> "Increment for zoom buttons"
         */

        defaults: {
          controls: true,
          customClass: "",
          // lazy           : false,
          // lazyEdge       : 100,
          labels: {
            count: "of",
            next: "Next",
            previous: "Previous",
            zoom_in: "Zoom In",
            zoom_out: "Zoom Out"
          },
          theme: "fs-light",
          zoomDelta: 100,
          zoomEnertia: 0.2,
          zoomIncrement: 0.01
        },

        classes: [
          "source",
          "wrapper",
          "viewport",
          "container",
          "image",
          "gallery",
          "loading_icon",

          "controls",
          "controls_custom",
          "control",
          "control_previous",
          "control_next",
          "control_zoom_in",
          "control_zoom_out",
          "control_disabled",
          // "lazy"
          "loading"
        ],

        /**
         * @events
         * @event loaded.viewer "Image loaded"
         * @event ready.viewer "Image ready"
         */

        events: {
          loaded: "loaded",
          ready: "ready"
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,
          _raf: raf,

          resize: resizeInstance,
          load: load,
          unload: unload
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body,
      ScrollTop = 0,
      $Instances = [],
      ViewportSetup = false;

    // Setup

    Formstone.Ready(setup);

  })

);


/* ==========================================================================
  Demo
============================================================================= */

  (function($, Formstone) {
    var $window,
        $body,
        opts = {};

    opts.minXS = parseInt("320", 10);
    opts.minSM = parseInt("500", 10);
    opts.minMD = parseInt("740", 10);
    opts.minLG = parseInt("980", 10);
    opts.minXL = parseInt("1220", 10);

    opts.maxXS = opts.minXS - 1;
    opts.maxSM = opts.minSM - 1;
    opts.maxMD = opts.minMD - 1;
    opts.maxLG = opts.minLG - 1;
    opts.maxXL = opts.minXL - 1;

    opts.minHTsm = parseInt("500", 10);
    opts.minHT   = parseInt("800", 10);

    opts.maxHTsm = opts.minHTsm - 1;
    opts.maxHT   = opts.minHT - 1;

    function init() {
      $window = $(window);
      $body   = $("body");

      if ($.mediaquery) {
        $.mediaquery({
          minWidth: [ opts.minXS, opts.minSM, opts.minMD, opts.minLG, opts.minXL ],
          maxWidth: [ opts.maxXL, opts.maxLG, opts.maxMD, opts.maxSM, opts.maxXS ],
          minHeight: [ opts.minHTsm, opts.minHT ],
          maxHeight: [ opts.maxHT, opts.maxHTsm ]
        });
      }

      if ($.cookie) {
        $.cookie({
          path: "/"
        });
      }

      buildDemoTabs();
      buildPlugins("fs-light");
    }

    function buildDemoTabs() {
      $(".demo_container").each(function(index) {
        var html     = "",
            $demo    = $(this),
            $example = $demo.find(".demo_example"),
            $code    = $demo.find(".demo_code");

        $example.attr("id", "example-" + index);
        $code.attr("id", "code-" + index);

        html += '<div class="demo_tabs contain">';
        html += '<a href="#example-' + index + '" class="demo_tab js-demo_tabs" data-tabs-group="demo-' + index + '">Demo</a>';
        html += '<a href="#code-' + index +    '" class="demo_tab js-demo_tabs" data-tabs-group="demo-' + index + '">Code</a>';
        html += '</div>';

        $demo.prepend(html);
      });
    }

    function buildPlugins(theme) {
      var options = {
        theme: theme
      };

      // Move the demo navs out

      $(".js-navigation_elements").appendTo("body");

      // Destroy

      $body.find(".js-background").background("destroy");
      $body.find(".js-carousel").carousel("destroy");
      $body.find(".js-checkpoint").checkpoint("destroy");
      $body.find(".js-equalize").equalize("destroy");
      $body.find(".js-lightbox").lightbox("destroy");
      $body.find(".js-sticky").sticky("destroy");
      $body.find(".js-swap").swap("destroy");
      $body.find(".js-viewer").viewer("destroy");

      // Init

      $body.find(".js-background").background(options);
      $body.find(".js-carousel").carousel(options);
      $body.find(".js-checkpoint").checkpoint();
      $body.find(".js-equalize").equalize(options);
      $body.find(".js-lightbox").lightbox(options);
      $body.find(".js-sticky").sticky(options);
      $body.find(".js-swap").swap(options);
      $body.find(".js-viewer").viewer(options);
    }

    function resetPlugins() {
      var $tab     = $(this),
          $content = $( $tab.attr("href") );

      $content.find(".js-background").background("resize");
      $content.find(".js-carousel").carousel("resize");
      $content.find(".js-equalize").equalize("resize");

      $body.find(".js-checkpoint").checkpoint("resize");
      $body.find(".js-sticky").sticky("resize");
    }

    // Ready

    Formstone.Ready(init);

  })(jQuery, Formstone);



/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o, visited) {
			var type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = {};
					visited[_.util.objId(o)] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = [];
					visited[_.util.objId(o)] = clone;

					o.forEach(function (v, i) {
						clone[i] = _.util.clone(v, visited);
					});

					return clone;
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /(^|[^\\])["']/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\s\S]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css',
			greedy: true
		}
	});

	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
		alias: 'function'
	},
	'constant': /\b[A-Z][A-Z\d_]*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript',
			greedy: true
		}
	});
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-(?!\*)([\w-]+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			if (pre.hasAttribute('data-download-link') && Prism.plugins.toolbar) {
				Prism.plugins.toolbar.registerButton('download-file', function () {
					var a = document.createElement('a');
					a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
					a.setAttribute('download', '');
					a.href = src;
					return a;
				});
			}

			xhr.send(null);
		});

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();

