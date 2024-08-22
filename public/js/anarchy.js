/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t=new Map,e={set(e,i,n){t.has(e)||t.set(e,new Map);const s=t.get(e);s.has(i)||0===s.size?s.set(i,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(e,i)=>t.has(e)&&t.get(e).get(i)||null,remove(e,i){if(!t.has(e))return;const n=t.get(e);n.delete(i),0===n.size&&t.delete(e)}},i="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),s=t=>{t.dispatchEvent(new Event(i))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(n(t)):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,m=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},g=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,_=(t,e,n=!0)=>{if(!n)return void g(t);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let r=!1;const a=({target:n})=>{n===e&&(r=!0,e.removeEventListener(i,a),g(t))};e.addEventListener(i,a),setTimeout((()=>{r||s(e)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=I(t);return C.has(o)||(o=t),[n,s,o]}function S(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return P(s,{delegateTarget:r}),n.oneOff&&N.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return P(n,{delegateTarget:t}),i.oneOff&&N.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function D(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function $(t,e,i,n){const s=e[i]||{};for(const[o,r]of Object.entries(s))o.includes(n)&&D(t,e,i,r.callable,r.delegationSelector)}function I(t){return t=t.replace(y,""),T[t]||t}const N={on(t,e,i,n){S(t,e,i,n,!1)},one(t,e,i,n){S(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))$(t,l,i,e.slice(1));for(const[i,n]of Object.entries(c)){const s=i.replace(w,"");a&&!e.includes(s)||D(t,l,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;D(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==I(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());const l=P(new Event(e,{bubbles:o,cancelable:!0}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function P(t,e={}){for(const[i,n]of Object.entries(e))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}function M(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function j(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const F={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${j(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${j(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=M(t.dataset[n])}return e},getDataAttribute:(t,e)=>M(t.getAttribute(`data-bs-${j(e)}`))};class H{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?F.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?F.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,s]of Object.entries(e)){const e=t[n],r=o(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)}var i}}class W extends H{constructor(t,i){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(i),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return e.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const B=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?n(i.trim()):null}return e},z={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))},getSelectorFromElement(t){const e=B(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=B(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=B(t);return e?z.find(e):[]}},R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;N.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const s=z.getElementFromSelector(this)||this.closest(`.${n}`);t.getOrCreateInstance(s)[e]()}))},q=".bs.alert",V=`close${q}`,K=`closed${q}`;class Q extends W{static get NAME(){return"alert"}close(){if(N.trigger(this._element,V).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),N.trigger(this._element,K),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(Q,"close"),m(Q);const X='[data-bs-toggle="button"]';class Y extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}N.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),m(Y);const U=".bs.swipe",G=`touchstart${U}`,J=`touchmove${U}`,Z=`touchend${U}`,tt=`pointerdown${U}`,et=`pointerup${U}`,it={endCallback:null,leftCallback:null,rightCallback:null},nt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class st extends H{constructor(t,e){super(),this._element=t,t&&st.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return it}static get DefaultType(){return nt}static get NAME(){return"swipe"}dispose(){N.off(this._element,U)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&g(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,tt,(t=>this._start(t))),N.on(this._element,et,(t=>this._end(t))),this._element.classList.add("pointer-event")):(N.on(this._element,G,(t=>this._start(t))),N.on(this._element,J,(t=>this._move(t))),N.on(this._element,Z,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ot=".bs.carousel",rt=".data-api",at="next",lt="prev",ct="left",ht="right",dt=`slide${ot}`,ut=`slid${ot}`,ft=`keydown${ot}`,pt=`mouseenter${ot}`,mt=`mouseleave${ot}`,gt=`dragstart${ot}`,_t=`load${ot}${rt}`,bt=`click${ot}${rt}`,vt="carousel",yt="active",wt=".active",At=".carousel-item",Et=wt+At,Tt={ArrowLeft:ht,ArrowRight:ct},Ct={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ot={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class xt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===vt&&this.cycle()}static get Default(){return Ct}static get DefaultType(){return Ot}static get NAME(){return"carousel"}next(){this._slide(at)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(lt)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?N.one(this._element,ut,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,ut,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?at:lt;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,ft,(t=>this._keydown(t))),"hover"===this._config.pause&&(N.on(this._element,pt,(()=>this.pause())),N.on(this._element,mt,(()=>this._maybeEnableCycle()))),this._config.touch&&st.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of z.find(".carousel-item img",this._element))N.on(t,gt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(ct)),rightCallback:()=>this._slide(this._directionToOrder(ht)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new st(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Tt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=z.findOne(wt,this._indicatorsElement);e.classList.remove(yt),e.removeAttribute("aria-current");const i=z.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(yt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===at,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>N.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(dt).defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(yt),i.classList.remove(yt,c,l),this._isSliding=!1,r(ut)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return z.findOne(Et,this._element)}_getItems(){return z.find(At,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===ct?lt:at:t===ct?at:lt}_orderToDirection(t){return p()?t===lt?ct:ht:t===lt?ht:ct}static jQueryInterface(t){return this.each((function(){const e=xt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}N.on(document,bt,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(vt))return;t.preventDefault();const i=xt.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===F.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),N.on(window,_t,(()=>{const t=z.find('[data-bs-ride="carousel"]');for(const e of t)xt.getOrCreateInstance(e)})),m(xt);const kt=".bs.collapse",Lt=`show${kt}`,St=`shown${kt}`,Dt=`hide${kt}`,$t=`hidden${kt}`,It=`click${kt}.data-api`,Nt="show",Pt="collapse",Mt="collapsing",jt=`:scope .${Pt} .${Pt}`,Ft='[data-bs-toggle="collapse"]',Ht={parent:null,toggle:!0},Wt={parent:"(null|element)",toggle:"boolean"};class Bt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=z.find(Ft);for(const t of i){const e=z.getSelectorFromElement(t),i=z.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ht}static get DefaultType(){return Wt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Bt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(N.trigger(this._element,Lt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Pt),this._element.classList.add(Mt),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Mt),this._element.classList.add(Pt,Nt),this._element.style[e]="",N.trigger(this._element,St)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(N.trigger(this._element,Dt).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(Mt),this._element.classList.remove(Pt,Nt);for(const t of this._triggerArray){const e=z.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Mt),this._element.classList.add(Pt),N.trigger(this._element,$t)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(Nt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Ft);for(const e of t){const t=z.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=z.find(jt,this._config.parent);return z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Bt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}N.on(document,It,Ft,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of z.getMultipleElementsFromSelector(this))Bt.getOrCreateInstance(t,{toggle:!1}).toggle()})),m(Bt);var zt="top",Rt="bottom",qt="right",Vt="left",Kt="auto",Qt=[zt,Rt,qt,Vt],Xt="start",Yt="end",Ut="clippingParents",Gt="viewport",Jt="popper",Zt="reference",te=Qt.reduce((function(t,e){return t.concat([e+"-"+Xt,e+"-"+Yt])}),[]),ee=[].concat(Qt,[Kt]).reduce((function(t,e){return t.concat([e,e+"-"+Xt,e+"-"+Yt])}),[]),ie="beforeRead",ne="read",se="afterRead",oe="beforeMain",re="main",ae="afterMain",le="beforeWrite",ce="write",he="afterWrite",de=[ie,ne,se,oe,re,ae,le,ce,he];function ue(t){return t?(t.nodeName||"").toLowerCase():null}function fe(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function pe(t){return t instanceof fe(t).Element||t instanceof Element}function me(t){return t instanceof fe(t).HTMLElement||t instanceof HTMLElement}function ge(t){return"undefined"!=typeof ShadowRoot&&(t instanceof fe(t).ShadowRoot||t instanceof ShadowRoot)}const _e={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];me(s)&&ue(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});me(n)&&ue(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function be(t){return t.split("-")[0]}var ve=Math.max,ye=Math.min,we=Math.round;function Ae(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ee(){return!/^((?!chrome|android).)*safari/i.test(Ae())}function Te(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&me(t)&&(s=t.offsetWidth>0&&we(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&we(n.height)/t.offsetHeight||1);var r=(pe(t)?fe(t):window).visualViewport,a=!Ee()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Ce(t){var e=Te(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Oe(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&ge(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function xe(t){return fe(t).getComputedStyle(t)}function ke(t){return["table","td","th"].indexOf(ue(t))>=0}function Le(t){return((pe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Se(t){return"html"===ue(t)?t:t.assignedSlot||t.parentNode||(ge(t)?t.host:null)||Le(t)}function De(t){return me(t)&&"fixed"!==xe(t).position?t.offsetParent:null}function $e(t){for(var e=fe(t),i=De(t);i&&ke(i)&&"static"===xe(i).position;)i=De(i);return i&&("html"===ue(i)||"body"===ue(i)&&"static"===xe(i).position)?e:i||function(t){var e=/firefox/i.test(Ae());if(/Trident/i.test(Ae())&&me(t)&&"fixed"===xe(t).position)return null;var i=Se(t);for(ge(i)&&(i=i.host);me(i)&&["html","body"].indexOf(ue(i))<0;){var n=xe(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Ie(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ne(t,e,i){return ve(t,ye(e,i))}function Pe(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Me(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const je={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=be(i.placement),l=Ie(a),c=[Vt,qt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return Pe("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Me(t,Qt))}(s.padding,i),d=Ce(o),u="y"===l?zt:Vt,f="y"===l?Rt:qt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=$e(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=Ne(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Oe(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Fe(t){return t.split("-")[1]}var He={top:"auto",right:"auto",bottom:"auto",left:"auto"};function We(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,m=void 0===p?0:p,g="function"==typeof h?h({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=Vt,y=zt,w=window;if(c){var A=$e(i),E="clientHeight",T="clientWidth";A===fe(i)&&"static"!==xe(A=Le(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===zt||(s===Vt||s===qt)&&o===Yt)&&(y=Rt,m-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,m*=l?1:-1),s!==Vt&&(s!==zt&&s!==Rt||o!==Yt)||(v=qt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&He),x=!0===h?function(t,e){var i=t.x,n=t.y,s=e.devicePixelRatio||1;return{x:we(i*s)/s||0,y:we(n*s)/s||0}}({x:f,y:m},fe(i)):{x:f,y:m};return f=x.x,m=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?m+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const Be={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:be(e.placement),variation:Fe(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,We(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,We(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ze={passive:!0};const Re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=fe(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,ze)})),a&&l.addEventListener("resize",i.update,ze),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,ze)})),a&&l.removeEventListener("resize",i.update,ze)}},data:{}};var qe={left:"right",right:"left",bottom:"top",top:"bottom"};function Ve(t){return t.replace(/left|right|bottom|top/g,(function(t){return qe[t]}))}var Ke={start:"end",end:"start"};function Qe(t){return t.replace(/start|end/g,(function(t){return Ke[t]}))}function Xe(t){var e=fe(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ye(t){return Te(Le(t)).left+Xe(t).scrollLeft}function Ue(t){var e=xe(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ge(t){return["html","body","#document"].indexOf(ue(t))>=0?t.ownerDocument.body:me(t)&&Ue(t)?t:Ge(Se(t))}function Je(t,e){var i;void 0===e&&(e=[]);var n=Ge(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=fe(n),r=s?[o].concat(o.visualViewport||[],Ue(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Je(Se(r)))}function Ze(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ti(t,e,i){return e===Gt?Ze(function(t,e){var i=fe(t),n=Le(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ee();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ye(t),y:l}}(t,i)):pe(e)?function(t,e){var i=Te(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):Ze(function(t){var e,i=Le(t),n=Xe(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=ve(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=ve(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ye(t),l=-n.scrollTop;return"rtl"===xe(s||i).direction&&(a+=ve(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Le(t)))}function ei(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?be(s):null,r=s?Fe(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case zt:e={x:a,y:i.y-n.height};break;case Rt:e={x:a,y:i.y+i.height};break;case qt:e={x:i.x+i.width,y:l};break;case Vt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Ie(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case Xt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case Yt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function ii(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Ut:a,c=i.rootBoundary,h=void 0===c?Gt:c,d=i.elementContext,u=void 0===d?Jt:d,f=i.altBoundary,p=void 0!==f&&f,m=i.padding,g=void 0===m?0:m,_=Pe("number"!=typeof g?g:Me(g,Qt)),b=u===Jt?Zt:Jt,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=Je(Se(t)),i=["absolute","fixed"].indexOf(xe(t).position)>=0&&me(t)?$e(t):t;return pe(i)?e.filter((function(t){return pe(t)&&Oe(t,i)&&"body"!==ue(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=ti(t,i,n);return e.top=ve(s.top,e.top),e.right=ye(s.right,e.right),e.bottom=ye(s.bottom,e.bottom),e.left=ve(s.left,e.left),e}),ti(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(pe(y)?y:y.contextElement||Le(t.elements.popper),l,h,r),A=Te(t.elements.reference),E=ei({reference:A,element:v,strategy:"absolute",placement:s}),T=Ze(Object.assign({},v,E)),C=u===Jt?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===Jt&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[qt,Rt].indexOf(t)>=0?1:-1,i=[zt,Rt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function ni(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?ee:l,h=Fe(n),d=h?a?te:te.filter((function(t){return Fe(t)===h})):Qt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=ii(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[be(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const si={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=be(g),b=l||(_!==g&&p?function(t){if(be(t)===Kt)return[];var e=Ve(t);return[Qe(t),e,Qe(e)]}(g):[Ve(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(be(i)===Kt?ni(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=be(O),k=Fe(O)===Xt,L=[zt,Rt].indexOf(x)>=0,S=L?"width":"height",D=ii(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),$=L?k?qt:Vt:k?Rt:zt;y[S]>w[S]&&($=Ve($));var I=Ve($),N=[];if(o&&N.push(D[x]<=0),a&&N.push(D[$]<=0,D[I]<=0),N.every((function(t){return t}))){T=O,E=!1;break}A.set(O,N)}if(E)for(var P=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==P(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function oi(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ri(t){return[zt,qt,Rt,Vt].some((function(e){return t[e]>=0}))}const ai={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=ii(e,{elementContext:"reference"}),a=ii(e,{altBoundary:!0}),l=oi(r,n),c=oi(a,s,o),h=ri(l),d=ri(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},li={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=ee.reduce((function(t,i){return t[i]=function(t,e,i){var n=be(t),s=[Vt,zt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[Vt,qt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},ci={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ei({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},hi={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=ii(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=be(e.placement),b=Fe(e.placement),v=!b,y=Ie(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,S="y"===y?zt:Vt,D="y"===y?Rt:qt,$="y"===y?"height":"width",I=A[y],N=I+g[S],P=I-g[D],M=f?-T[$]/2:0,j=b===Xt?E[$]:T[$],F=b===Xt?-T[$]:-E[$],H=e.elements.arrow,W=f&&H?Ce(H):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=B[S],R=B[D],q=Ne(0,E[$],W[$]),V=v?E[$]/2-M-q-z-O.mainAxis:j-q-z-O.mainAxis,K=v?-E[$]/2+M+q+R+O.mainAxis:F+q+R+O.mainAxis,Q=e.elements.arrow&&$e(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=I+K-Y,G=Ne(f?ye(N,I+V-Y-X):N,I,f?ve(P,U):P);A[y]=G,k[y]=G-I}if(a){var J,Z="x"===y?zt:Vt,tt="x"===y?Rt:qt,et=A[w],it="y"===w?"height":"width",nt=et+g[Z],st=et-g[tt],ot=-1!==[zt,Vt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=Ne(t,e,i);return n>i?i:n}(at,et,lt):Ne(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function di(t,e,i){void 0===i&&(i=!1);var n,s,o=me(e),r=me(e)&&function(t){var e=t.getBoundingClientRect(),i=we(e.width)/t.offsetWidth||1,n=we(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=Le(e),l=Te(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==ue(e)||Ue(a))&&(c=(n=e)!==fe(n)&&me(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:Xe(n)),me(e)?((h=Te(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ye(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function ui(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var fi={placement:"bottom",modifiers:[],strategy:"absolute"};function pi(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function mi(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?fi:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},fi,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:pe(t)?Je(t):t.contextElement?Je(t.contextElement):[],popper:Je(e)};var r,c,u=function(t){var e=ui(t);return de.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(pi(e,i)){a.rects={reference:di(e,$e(i),"fixed"===a.options.strategy),popper:Ce(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!pi(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var gi=mi(),_i=mi({defaultModifiers:[Re,ci,Be,_e]}),bi=mi({defaultModifiers:[Re,ci,Be,_e,li,si,hi,je,ai]});const vi=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ae,afterRead:se,afterWrite:he,applyStyles:_e,arrow:je,auto:Kt,basePlacements:Qt,beforeMain:oe,beforeRead:ie,beforeWrite:le,bottom:Rt,clippingParents:Ut,computeStyles:Be,createPopper:bi,createPopperBase:gi,createPopperLite:_i,detectOverflow:ii,end:Yt,eventListeners:Re,flip:si,hide:ai,left:Vt,main:re,modifierPhases:de,offset:li,placements:ee,popper:Jt,popperGenerator:mi,popperOffsets:ci,preventOverflow:hi,read:ne,reference:Zt,right:qt,start:Xt,top:zt,variationPlacements:te,viewport:Gt,write:ce},Symbol.toStringTag,{value:"Module"})),yi="dropdown",wi=".bs.dropdown",Ai=".data-api",Ei="ArrowUp",Ti="ArrowDown",Ci=`hide${wi}`,Oi=`hidden${wi}`,xi=`show${wi}`,ki=`shown${wi}`,Li=`click${wi}${Ai}`,Si=`keydown${wi}${Ai}`,Di=`keyup${wi}${Ai}`,$i="show",Ii='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ni=`${Ii}.${$i}`,Pi=".dropdown-menu",Mi=p()?"top-end":"top-start",ji=p()?"top-start":"top-end",Fi=p()?"bottom-end":"bottom-start",Hi=p()?"bottom-start":"bottom-end",Wi=p()?"left-start":"right-start",Bi=p()?"right-start":"left-start",zi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ri={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class qi extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,Pi)[0]||z.prev(this._element,Pi)[0]||z.findOne(Pi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return zi}static get DefaultType(){return Ri}static get NAME(){return yi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,xi,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add($i),this._element.classList.add($i),N.trigger(this._element,ki,t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,Ci,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove($i),this._element.classList.remove($i),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,Oi,t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===vi)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=bi(t,this._menu,e)}_isShown(){return this._menu.classList.contains($i)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return Wi;if(t.classList.contains("dropstart"))return Bi;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ji:Mi:e?Hi:Fi}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(F.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...g(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Ti,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=qi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=z.find(Ni);for(const i of e){const e=qi.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ei,Ti].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Ii)?this:z.prev(this,Ii)[0]||z.next(this,Ii)[0]||z.findOne(Ii,t.delegateTarget.parentNode),o=qi.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}N.on(document,Si,Ii,qi.dataApiKeydownHandler),N.on(document,Si,Pi,qi.dataApiKeydownHandler),N.on(document,Li,qi.clearMenus),N.on(document,Di,qi.clearMenus),N.on(document,Li,Ii,(function(t){t.preventDefault(),qi.getOrCreateInstance(this).toggle()})),m(qi);const Vi="backdrop",Ki="show",Qi=`mousedown.bs.${Vi}`,Xi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Yi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ui extends H{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Xi}static get DefaultType(){return Yi}static get NAME(){return Vi}show(t){if(!this._config.isVisible)return void g(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(Ki),this._emulateAnimation((()=>{g(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(Ki),this._emulateAnimation((()=>{this.dispose(),g(t)}))):g(t)}dispose(){this._isAppended&&(N.off(this._element,Qi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,Qi,(()=>{g(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const Gi=".bs.focustrap",Ji=`focusin${Gi}`,Zi=`keydown.tab${Gi}`,tn="backward",en={autofocus:!0,trapElement:null},nn={autofocus:"boolean",trapElement:"element"};class sn extends H{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return en}static get DefaultType(){return nn}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,Gi),N.on(document,Ji,(t=>this._handleFocusin(t))),N.on(document,Zi,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,Gi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=z.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===tn?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?tn:"forward")}}const on=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",rn=".sticky-top",an="padding-right",ln="margin-right";class cn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,an,(e=>e+t)),this._setElementAttributes(on,an,(e=>e+t)),this._setElementAttributes(rn,ln,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,an),this._resetElementAttributes(on,an),this._resetElementAttributes(rn,ln)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&F.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=F.getDataAttribute(t,e);null!==i?(F.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of z.find(t,this._element))e(i)}}const hn=".bs.modal",dn=`hide${hn}`,un=`hidePrevented${hn}`,fn=`hidden${hn}`,pn=`show${hn}`,mn=`shown${hn}`,gn=`resize${hn}`,_n=`click.dismiss${hn}`,bn=`mousedown.dismiss${hn}`,vn=`keydown.dismiss${hn}`,yn=`click${hn}.data-api`,wn="modal-open",An="show",En="modal-static",Tn={backdrop:!0,focus:!0,keyboard:!0},Cn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class On extends W{constructor(t,e){super(t,e),this._dialog=z.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new cn,this._addEventListeners()}static get Default(){return Tn}static get DefaultType(){return Cn}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,pn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wn),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(N.trigger(this._element,dn).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(An),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){N.off(window,hn),N.off(this._dialog,hn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ui({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new sn({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=z.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(An),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,mn,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,vn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),N.on(window,gn,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),N.on(this._element,bn,(t=>{N.one(this._element,_n,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(wn),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,fn)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,un).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(En)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(En),this._queueCallback((()=>{this._element.classList.remove(En),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=On.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,yn,'[data-bs-toggle="modal"]',(function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),N.one(e,pn,(t=>{t.defaultPrevented||N.one(e,fn,(()=>{a(this)&&this.focus()}))}));const i=z.findOne(".modal.show");i&&On.getInstance(i).hide(),On.getOrCreateInstance(e).toggle(this)})),R(On),m(On);const xn=".bs.offcanvas",kn=".data-api",Ln=`load${xn}${kn}`,Sn="show",Dn="showing",$n="hiding",In=".offcanvas.show",Nn=`show${xn}`,Pn=`shown${xn}`,Mn=`hide${xn}`,jn=`hidePrevented${xn}`,Fn=`hidden${xn}`,Hn=`resize${xn}`,Wn=`click${xn}${kn}`,Bn=`keydown.dismiss${xn}`,zn={backdrop:!0,keyboard:!0,scroll:!1},Rn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class qn extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return zn}static get DefaultType(){return Rn}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,Nn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new cn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Dn),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Sn),this._element.classList.remove(Dn),N.trigger(this._element,Pn,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(N.trigger(this._element,Mn).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add($n),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Sn,$n),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new cn).reset(),N.trigger(this._element,Fn)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Ui({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():N.trigger(this._element,jn)}:null})}_initializeFocusTrap(){return new sn({trapElement:this._element})}_addEventListeners(){N.on(this._element,Bn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():N.trigger(this._element,jn))}))}static jQueryInterface(t){return this.each((function(){const e=qn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,Wn,'[data-bs-toggle="offcanvas"]',(function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;N.one(e,Fn,(()=>{a(this)&&this.focus()}));const i=z.findOne(In);i&&i!==e&&qn.getInstance(i).hide(),qn.getOrCreateInstance(e).toggle(this)})),N.on(window,Ln,(()=>{for(const t of z.find(In))qn.getOrCreateInstance(t).show()})),N.on(window,Hn,(()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&qn.getOrCreateInstance(t).hide()})),R(qn),m(qn);const Vn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Kn=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Qn=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Xn=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Kn.has(i)||Boolean(Qn.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Yn={allowList:Vn,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Un={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Gn={entry:"(string|element|function|null)",selector:"(string|element)"};class Jn extends H{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Yn}static get DefaultType(){return Un}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Gn)}_setContent(t,e,i){const n=z.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Xn(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return g(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Zn=new Set(["sanitize","allowList","sanitizeFn"]),ts="fade",es="show",is=".modal",ns="hide.bs.modal",ss="hover",os="focus",rs={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},as={allowList:Vn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ls={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class cs extends W{constructor(t,e){if(void 0===vi)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return as}static get DefaultType(){return ls}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(is),ns,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=N.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),N.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(es),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._queueCallback((()=>{N.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!N.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(es),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[os]=!1,this._activeTrigger[ss]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ts,es),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(ts),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Jn({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ts)}_isShown(){return this.tip&&this.tip.classList.contains(es)}_createPopper(t){const e=g(this._config.placement,[this,t,this._element]),i=rs[e.toUpperCase()];return bi(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return g(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...g(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)N.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===ss?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===ss?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");N.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?os:ss]=!0,e._enter()})),N.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?os:ss]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(is),ns,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=F.getDataAttributes(this._element);for(const t of Object.keys(e))Zn.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=cs.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(cs);const hs={...cs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ds={...cs.DefaultType,content:"(null|string|element|function)"};class us extends cs{static get Default(){return hs}static get DefaultType(){return ds}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=us.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(us);const fs=".bs.scrollspy",ps=`activate${fs}`,ms=`click${fs}`,gs=`load${fs}.data-api`,_s="active",bs="[href]",vs=".nav-link",ys=`${vs}, .nav-item > ${vs}, .list-group-item`,ws={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},As={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Es extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ws}static get DefaultType(){return As}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,ms),N.on(this._config.target,ms,bs,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=z.find(bs,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=z.findOne(decodeURI(e.hash),this._element);a(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(_s),this._activateParents(t),N.trigger(this._element,ps,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))z.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(_s);else for(const e of z.parents(t,".nav, .list-group"))for(const t of z.prev(e,ys))t.classList.add(_s)}_clearActiveClass(t){t.classList.remove(_s);const e=z.find(`${bs}.${_s}`,t);for(const t of e)t.classList.remove(_s)}static jQueryInterface(t){return this.each((function(){const e=Es.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,gs,(()=>{for(const t of z.find('[data-bs-spy="scroll"]'))Es.getOrCreateInstance(t)})),m(Es);const Ts=".bs.tab",Cs=`hide${Ts}`,Os=`hidden${Ts}`,xs=`show${Ts}`,ks=`shown${Ts}`,Ls=`click${Ts}`,Ss=`keydown${Ts}`,Ds=`load${Ts}`,$s="ArrowLeft",Is="ArrowRight",Ns="ArrowUp",Ps="ArrowDown",Ms="Home",js="End",Fs="active",Hs="fade",Ws="show",Bs=".dropdown-toggle",zs=`:not(${Bs})`,Rs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',qs=`.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,Vs=`.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;class Ks extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,Ss,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?N.trigger(e,Cs,{relatedTarget:t}):null;N.trigger(t,xs,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Fs),this._activate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,ks,{relatedTarget:e})):t.classList.add(Ws)}),t,t.classList.contains(Hs)))}_deactivate(t,e){t&&(t.classList.remove(Fs),t.blur(),this._deactivate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,Os,{relatedTarget:e})):t.classList.remove(Ws)}),t,t.classList.contains(Hs)))}_keydown(t){if(![$s,Is,Ns,Ps,Ms,js].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!l(t)));let i;if([Ms,js].includes(t.key))i=e[t.key===Ms?0:e.length-1];else{const n=[Is,Ps].includes(t.key);i=b(e,t.target,n,!0)}i&&(i.focus({preventScroll:!0}),Ks.getOrCreateInstance(i).show())}_getChildren(){return z.find(qs,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=z.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=z.findOne(t,i);s&&s.classList.toggle(n,e)};n(Bs,Fs),n(".dropdown-menu",Ws),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Fs)}_getInnerElement(t){return t.matches(qs)?t:z.findOne(qs,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Ks.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,Ls,Rs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||Ks.getOrCreateInstance(this).show()})),N.on(window,Ds,(()=>{for(const t of z.find(Vs))Ks.getOrCreateInstance(t)})),m(Ks);const Qs=".bs.toast",Xs=`mouseover${Qs}`,Ys=`mouseout${Qs}`,Us=`focusin${Qs}`,Gs=`focusout${Qs}`,Js=`hide${Qs}`,Zs=`hidden${Qs}`,to=`show${Qs}`,eo=`shown${Qs}`,io="hide",no="show",so="showing",oo={animation:"boolean",autohide:"boolean",delay:"number"},ro={animation:!0,autohide:!0,delay:5e3};class ao extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ro}static get DefaultType(){return oo}static get NAME(){return"toast"}show(){N.trigger(this._element,to).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(io),d(this._element),this._element.classList.add(no,so),this._queueCallback((()=>{this._element.classList.remove(so),N.trigger(this._element,eo),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(N.trigger(this._element,Js).defaultPrevented||(this._element.classList.add(so),this._queueCallback((()=>{this._element.classList.add(io),this._element.classList.remove(so,no),N.trigger(this._element,Zs)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(no),super.dispose()}isShown(){return this._element.classList.contains(no)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,Xs,(t=>this._onInteraction(t,!0))),N.on(this._element,Ys,(t=>this._onInteraction(t,!1))),N.on(this._element,Us,(t=>this._onInteraction(t,!0))),N.on(this._element,Gs,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ao.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(ao),m(ao),{Alert:Q,Button:Y,Carousel:xt,Collapse:Bt,Dropdown:qi,Modal:On,Offcanvas:qn,Popover:us,ScrollSpy:Es,Tab:Ks,Toast:ao,Tooltip:cs}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t,e){"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,(function(){function t(){}let e=t.prototype;return e.on=function(t,e){if(!t||!e)return this;let i=this._events=this._events||{},s=i[t]=i[t]||[];return s.includes(e)||s.push(e),this},e.once=function(t,e){if(!t||!e)return this;this.on(t,e);let i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this},e.off=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;let s=i.indexOf(e);return-1!=s&&i.splice(s,1),this},e.emitEvent=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;i=i.slice(0),e=e||[];let s=this._onceEvents&&this._onceEvents[t];for(let n of i){s&&s[n]&&(this.off(t,n),delete s[n]),n.apply(this,e)}return this},e.allOff=function(){return delete this._events,delete this._onceEvents,this},t})),
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,(function(t,e){let i=t.jQuery,s=t.console;function n(t,e,o){if(!(this instanceof n))return new n(t,e,o);let r=t;var h;("string"==typeof t&&(r=document.querySelectorAll(t)),r)?(this.elements=(h=r,Array.isArray(h)?h:"object"==typeof h&&"number"==typeof h.length?[...h]:[h]),this.options={},"function"==typeof e?o=e:Object.assign(this.options,e),o&&this.on("always",o),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):s.error(`Bad element for imagesLoaded ${r||t}`)}n.prototype=Object.create(e.prototype),n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const o=[1,9,11];n.prototype.addElementImages=function(t){"IMG"===t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);let{nodeType:e}=t;if(!e||!o.includes(e))return;let i=t.querySelectorAll("img");for(let t of i)this.addImage(t);if("string"==typeof this.options.background){let e=t.querySelectorAll(this.options.background);for(let t of e)this.addElementBackgroundImages(t)}};const r=/url\((['"])?(.*?)\1\)/gi;function h(t){this.img=t}function d(t,e){this.url=t,this.element=e,this.img=new Image}return n.prototype.addElementBackgroundImages=function(t){let e=getComputedStyle(t);if(!e)return;let i=r.exec(e.backgroundImage);for(;null!==i;){let s=i&&i[2];s&&this.addBackground(s,t),i=r.exec(e.backgroundImage)}},n.prototype.addImage=function(t){let e=new h(t);this.images.push(e)},n.prototype.addBackground=function(t,e){let i=new d(t,e);this.images.push(i)},n.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();let t=(t,e,i)=>{setTimeout((()=>{this.progress(t,e,i)}))};this.images.forEach((function(e){e.once("progress",t),e.check()}))},n.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${i}`,t,e)},n.prototype.complete=function(){let t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){let t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},h.prototype=Object.create(e.prototype),h.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src)},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(t,e){this.isLoaded=t;let{parentNode:i}=this.img,s="PICTURE"===i.nodeName?i:this.img;this.emitEvent("progress",[this,s,e])},h.prototype.handleEvent=function(t){let e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype=Object.create(h.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},n.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&(i=e,i.fn.imagesLoaded=function(t,e){return new n(this,t,e).jqDeferred.promise(i(this))})},n.makeJQueryPlugin(),n}));/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});;(function($) {

  var pluginName = "emojiPicker",
      defaults = {
        width: '200',
        height: '350',
        position: 'right',
        fadeTime: 100,
        iconColor: 'black',
        iconBackgroundColor: '#eee',
        recentCount: 36,
        emojiSet: 'apple',
        container: 'body',
        button: true
      };

  var MIN_WIDTH = 280,
      MAX_WIDTH = 600,
      MIN_HEIGHT = 100,
      MAX_HEIGHT = 350,
      MAX_ICON_HEIGHT = 50;

  var categories = [
    { name: 'people', label: 'People' },
    { name: 'nature', label: 'Nature' },
    { name: 'food', label: 'Food' },
    { name: 'activity', label: 'Activities' },
    { name: 'travel', label: 'Travel & Places' },
    { name: 'object', label: 'Objects' },
    { name: 'symbol', label: 'Symbols' },
    { name: 'flag', label: 'Flags' }
  ];

  function EmojiPicker( element, options ) {

    this.element = element;
    this.$el = $(element);

    this.settings = $.extend( {}, defaults, options );

    this.$container = $(this.settings.container);

    // (type) Safety first
    this.settings.width = parseInt(this.settings.width);
    this.settings.height = parseInt(this.settings.height);

    // Check for valid width/height
    if(this.settings.width >= MAX_WIDTH) {
      this.settings.width = MAX_WIDTH;
    } else if (this.settings.width < MIN_WIDTH) {
      this.settings.width = MIN_WIDTH;
    }
    if (this.settings.height >= MAX_HEIGHT) {
      this.settings.height = MAX_HEIGHT;
    } else if (this.settings.height < MIN_HEIGHT) {
      this.settings.height = MIN_HEIGHT;
    }

    var possiblePositions = [ 'left',
                              'right'
                              /*,'top',
                              'bottom'*/];
    if($.inArray(this.settings.position,possiblePositions) == -1) {
      this.settings.position = defaults.position; //current default
    }

    // Do not enable if on mobile device (emojis already present)
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.init();
    } else {
      this.isMobile = true;
    }

  }

  $.extend(EmojiPicker.prototype, {

    init: function() {
      this.active = false;
      this.addPickerIcon();
      this.createPicker();
      this.listen();
    },

    addPickerIcon: function() {
      // The wrapper is not needed if they have chosen to not use a button
      if (this.settings.button) {
        var elementHeight = this.$el.outerHeight();
        var iconHeight = elementHeight > MAX_ICON_HEIGHT ?
          MAX_ICON_HEIGHT :
          elementHeight;

        // This can cause issues if the element is not visible when it is initiated
        var objectWidth = this.$el.width();

        this.$el.width(objectWidth);

        this.$wrapper = this.$el
          .wrap("<div class='emojiPickerIconWrap'></div>")
          .parent();

        this.$icon = $('<div class="emojiPickerIcon"></div>')
          .height(iconHeight)
          .width(iconHeight)
          .addClass(this.settings.iconColor)
          .css('backgroundColor', this.settings.iconBackgroundColor);
          this.$wrapper.append( this.$icon );
      }

    },

    createPicker: function() {

      // Show template
      this.$picker = $( getPickerHTML() )
        .appendTo( this.$container )
        .width(this.settings.width)
        .height(this.settings.height)
        .css('z-index',10000);

      // Picker height
      this.$picker.find('.sections')
        .height(parseInt(this.settings.height) - 40); // 40 is height of the tabs

      // Tab size based on width
      if (this.settings.width < 240) {
        this.$picker.find('.emoji').css({'width':'1em', 'height':'1em'});
      }

    },

    destroyPicker: function() {
      if (this.isMobile) return this;

      this.$picker.unbind('mouseover');
      this.$picker.unbind('mouseout');
      this.$picker.unbind('click');
      this.$picker.remove();

      $.removeData(this.$el.get(0), 'emojiPicker');

      return this;
    },

    listen: function() {
      // If the button is being used, wrapper has not been set,
      //    and will not need a listener
      if (this.settings.button){
        // Clicking on the picker icon
        this.$wrapper.find('.emojiPickerIcon')
          .click( $.proxy(this.iconClicked, this) );
      }

      // Click event for emoji
      this.$picker.on('click', 'em', $.proxy(this.emojiClicked, this));

      // Hover event for emoji
      this.$picker.on('mouseover', 'em', $.proxy(this.emojiMouseover, this) );
      this.$picker.on('mouseout',  'em', $.proxy(this.emojiMouseout, this) );

      // Click event for active tab
      this.$picker.find('nav .tab')
        .click( $.proxy(this.emojiCategoryClicked, this) )
        .mouseover( $.proxy(this.emojiTabMouseover, this) )
        .mouseout( $.proxy(this.emojiMouseout, this) );

      // Scroll event for active tab
      this.$picker.find('.sections')
        .scroll( $.proxy(this.emojiScroll, this) );

      this.$picker.click( $.proxy(this.pickerClicked, this) );

      // Key events for search
      this.$picker.find('section.search input')
        .on('keyup search', $.proxy(this.searchCharEntered, this) );

      // Shortcode hover
      this.$picker.find('.shortcode').mouseover(function(e) { e.stopPropagation(); });

      $(document.body).click( $.proxy(this.clickOutside, this) );

      // Resize events forces a reposition, which may or may not actually be required
      $(window).resize( $.proxy(this.updatePosition, this) );
    },

    updatePosition: function() {

      /*  Process:
          1. Find the nearest positioned element by crawling up the ancestors, record it's offset
          2. Find the bottom left or right of the input element, record this (Account for position setting of left or right)
          3. Find the difference between the two, as this will become our new position
          4. Magic.

          N.B. The removed code had a reference to top/bottom positioning, but I don't see the use case for this..
      */

      // Step 1
      // Luckily jquery already does this...
      var positionedParent = this.$picker.offsetParent();
      var parentOffset = positionedParent.offset(); // now have a top/left object

      // Step 2
      var elOffset = this.$el.offset();
      if(this.settings.position == 'right'){
        elOffset.left += this.$el.outerWidth() - this.settings.width;
      }
      elOffset.top += this.$el.outerHeight();

      // Step 3
      var diffOffset = {
        top: (elOffset.top - parentOffset.top),
        left: (elOffset.left - parentOffset.top)
      };

      this.$picker.css({
        top: diffOffset.top,
        left: diffOffset.left
      });

      return this;
    },

    hide: function() {
      this.$picker.hide(this.settings.fadeTime, 'linear', function() {
        this.active = false;
        if (this.settings.onHide) {
          this.settings.onHide( this.$picker, this.settings, this.active );
        }
      }.bind(this));
    },

    show: function() {
      this.$el.focus();
      this.updatePosition();
      this.$picker.show(this.settings.fadeTime, 'linear', function() {
        this.active = true;
        if (this.settings.onShow) {
          this.settings.onShow( this.$picker, this.settings, this.active );
        }
      }.bind(this));
    },

    /************
     *  EVENTS  *
     ************/

    iconClicked : function() {
      if ( this.$picker.is(':hidden') ) {
        this.show();
        if( this.$picker.find('.search input').length > 0 ) {
          this.$picker.find('.search input').focus();
        }
      } else {
        this.hide();
      }
    },

    emojiClicked: function(e) { var clickTarget = $(e.target);
      var emojiSpan;
      if (clickTarget.is('em')) {
        emojiSpan = clickTarget.find('span');
      } else {
        emojiSpan = clickTarget.parent().find('.emoji');
      }

      var emojiShortcode = emojiSpan.attr('class').split('emoji-')[1];
      var emojiUnicode = toUnicode(findEmoji(emojiShortcode).unicode[defaults.emojiSet]);

      insertAtCaret(this.element, emojiUnicode);
      addToLocalStorage(emojiShortcode);
      updateRecentlyUsed(emojiShortcode);

      // For anyone who is relying on the keyup event
      $(this.element).trigger("keyup");

      // trigger change event on input
      var event = document.createEvent("HTMLEvents");
      event.initEvent("input", true, true);
      this.element.dispatchEvent(event);
    },

    emojiMouseover: function(e) {
      var emojiShortcode = $(e.target).parent().find('.emoji').attr('class').split('emoji-')[1];
      var $shortcode = $(e.target).parents('.emojiPicker').find('.shortcode');
      $shortcode.find('.random').hide();
      $shortcode.find('.info').show().html('<div class="emoji emoji-' + emojiShortcode + '"></div><em>' + emojiShortcode + '</em>');
    },

    emojiMouseout: function(e) {
      $(e.target).parents('.emojiPicker').find('.shortcode .info').empty().hide();
      $(e.target).parents('.emojiPicker').find('.shortcode .random').show();
    },

    emojiCategoryClicked: function(e) {
      var section = '';

      // Update tab
      this.$picker.find('nav .tab').removeClass('active');
      if ($(e.target).parent().hasClass('tab')) {
        section = $(e.target).parent().attr('data-tab');
        $(e.target).parent('.tab').addClass('active');
      }
      else {
        section = $(e.target).attr('data-tab');
        $(e.target).addClass('active');
      }

      var $section = this.$picker.find('section.' + section);

      var heightOfSectionsHidden = $section.parent().scrollTop();
      var heightOfSectionToPageTop = $section.offset().top;
      var heightOfSectionsToPageTop = $section.parent().offset().top;

      var scrollDistance = heightOfSectionsHidden
                           + heightOfSectionToPageTop
                           - heightOfSectionsToPageTop;

      $('.sections').off('scroll'); // Disable scroll event until animation finishes

      var that = this;
      $('.sections').animate({
        scrollTop: scrollDistance
      }, 250, function() {
        that.$picker.find('.sections').on('scroll', $.proxy(that.emojiScroll, that) ); // Enable scroll event
      });
    },

    emojiTabMouseover: function(e) {
      var section = '';
      if ($(e.target).parent().hasClass('tab')) {
        section = $(e.target).parent().attr('data-tab');
      }
      else {
        section = $(e.target).attr('data-tab');
      }

      var categoryTitle = '';
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].name == section) { categoryTitle = categories[i].label; }
      }
      if (categoryTitle == '') { categoryTitle = 'Recently Used'; }

      var categoryCount = $('section.' + section).attr('data-count');
      var categoryHtml = '<em class="tabTitle">' + categoryTitle + ' <span class="count">(' + categoryCount + ' emojis)</span></em>';

      var $shortcode = $(e.target).parents('.emojiPicker').find('.shortcode');
      $shortcode.find('.random').hide();
      $shortcode.find('.info').show().html(categoryHtml);
    },

    emojiScroll: function(e) {
      var sections = $('section');
      $.each(sections, function(key, value) {
        var section = sections[key];
        var offsetFromTop = $(section).position().top;

        if (section.className == 'search' || (section.className == 'people' && offsetFromTop > 0)) {
          $(section).parents('.emojiPicker').find('nav tab.recent').addClass('active');
          return;
        }

        if (offsetFromTop <= 0) {
          $(section).parents('.emojiPicker').find('nav .tab').removeClass('active');
          $(section).parents('.emojiPicker').find('nav .tab[data-tab=' + section.className + ']').addClass('active');
        }
      });
    },

    pickerClicked: function(e) {
      e.stopPropagation();
    },

    clickOutside: function(e) {
      if ( this.active ) {
        this.hide();
      }
    },

    searchCharEntered: function(e) {
      var searchTerm = $(e.target).val();
      var searchEmojis = $(e.target).parents('.sections').find('section.search');
      var searchEmojiWrap = searchEmojis.find('.wrap');
      var sections = $(e.target).parents('.sections').find('section');

      // Clear if X is clicked within input
      if (searchTerm == '') {
        sections.show();
        searchEmojiWrap.hide();
      }

      if (searchTerm.length > 0) {
        sections.hide();
        searchEmojis.show();
        searchEmojiWrap.show();

        var results = [];
        searchEmojiWrap.find('em').remove();

        $.each($.fn.emojiPicker.emojis, function(i, emoji) {
          var shortcode = emoji.shortcode;
          if ( shortcode.indexOf(searchTerm) > -1 ) {
            results.push('<em><div class="emoji emoji-' + shortcode + '"></div></em>');
          }
        });
        searchEmojiWrap.append(results.join(''));
      } else {
        sections.show();
        searchEmojiWrap.hide();
      }
    }
  });

  $.fn[ pluginName ] = function ( options ) {

    // Calling a function
    if (typeof options === 'string') {
      this.each(function() {
        var plugin = $.data( this, pluginName );
        switch(options) {
          case 'toggle':
            plugin.iconClicked();
            break;
          case 'destroy':
            plugin.destroyPicker();
            break;
        }
      });
      return this;
    }

    this.each(function() {
      // Don't attach to the same element twice
      if ( !$.data( this, pluginName ) ) {
        $.data( this, pluginName, new EmojiPicker( this, options ) );
      }
    });
    return this;
  };

  /* ---------------------------------------------------------------------- */

  function getPickerHTML() {
    var nodes = [];
    var aliases = {
      'undefined': 'object'
    }
    var items = {};
    var localStorageSupport = (typeof(Storage) !== 'undefined') ? true : false;

    // Re-Sort Emoji table
    $.each($.fn.emojiPicker.emojis, function(i, emoji) {
      var category = aliases[ emoji.category ] || emoji.category;
      items[ category ] = items[ category ] || [];
      items[ category ].push( emoji );
    });

    nodes.push('<div class="emojiPicker">');
    nodes.push('<nav>');

    // Recent Tab, if localstorage support
    if (localStorageSupport) {
      nodes.push('<div class="tab active" data-tab="recent"><div class="emoji emoji-tab-recent"></div></div>');
    }

    // Emoji category tabs
    var categories_length = categories.length;
    for (var i = 0; i < categories_length; i++) {
      nodes.push('<div class="tab' +
      ( !localStorageSupport && i == 0 ? ' active' : '' ) +
      '" data-tab="' +
      categories[i].name +
      '"><div class="emoji emoji-tab-' +
      categories[i].name +
      '"></div></div>');
    }
    nodes.push('</nav>');
    nodes.push('<div class="sections">');

    // Search
    nodes.push('<section class="search">');
    nodes.push('<input type="search" placeholder="Search...">');
    nodes.push('<div class="wrap" style="display:none;"><h1>Search Results</h1></div>');
    nodes.push('</section>');

    // Recent Section, if localstorage support
    if (localStorageSupport) {
      var recentlyUsedEmojis = [];
      var recentlyUsedCount = 0;
      var displayRecentlyUsed = ' style="display:none;"';

      if (localStorage.emojis) {
        recentlyUsedEmojis = JSON.parse(localStorage.emojis);
        recentlyUsedCount = recentlyUsedEmojis.length;
        displayRecentlyUsed = ' style="display:block;"';
      }

      nodes.push('<section class="recent" data-count="' + recentlyUsedEmojis.length + '"' + displayRecentlyUsed + '>');
      nodes.push('<h1>Recently Used</h1><div class="wrap">');

      for (var i = recentlyUsedEmojis.length-1; i > -1 ; i--) {
        nodes.push('<em><span class="emoji emoji-' + recentlyUsedEmojis[i] + '"></span></em>');
      }
      nodes.push('</div></section>');
    }

    // Emoji sections
    for (var i = 0; i < categories_length; i++) {
      var category_length = items[ categories[i].name ].length;
      nodes.push('<section class="' + categories[i].name + '" data-count="' + category_length + '">');
      nodes.push('<h1>' + categories[i].label + '</h1><div class="wrap">');
      for (var j = 0; j < category_length; j++) {
        var emoji = items[ categories[i].name ][ j ];
        nodes.push('<em><span class="emoji emoji-' + emoji.shortcode + '"></span></em>');
      }
      nodes.push('</div></section>');
    }
    nodes.push('</div>');

    // Shortcode section
    nodes.push('<div class="shortcode"><span class="random">');
    nodes.push('<em class="tabTitle">' + generateEmojiOfDay() + '</em>');
    nodes.push('</span><span class="info"></span></div>');

    nodes.push('</div>');
    return nodes.join("\n");
  }

  function generateEmojiOfDay() {
    var emojis = $.fn.emojiPicker.emojis;
    var i = Math.floor(Math.random() * (364 - 0) + 0);
    var emoji = emojis[i];
    return 'Daily Emoji: <span class="eod"><span class="emoji emoji-' + emoji.name + '"></span> <span class="emojiName">' + emoji.name + '</span></span>';
  }

  function findEmoji(emojiShortcode) {
    var emojis = $.fn.emojiPicker.emojis;
    for (var i = 0; i < emojis.length; i++) {
      if (emojis[i].shortcode == emojiShortcode) {
        return emojis[i];
      }
    }
  }

  function insertAtCaret(inputField, myValue) {
    if (document.selection) {
      //For browsers like Internet Explorer
      inputField.focus();
      var sel = document.selection.createRange();
      sel.text = myValue;
      inputField.focus();
    }
    else if (inputField.selectionStart || inputField.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = inputField.selectionStart;
      var endPos = inputField.selectionEnd;
      var scrollTop = inputField.scrollTop;
      inputField.value = inputField.value.substring(0, startPos)+myValue+inputField.value.substring(endPos,inputField.value.length);
      inputField.focus();
      inputField.selectionStart = startPos + myValue.length;
      inputField.selectionEnd = startPos + myValue.length;
      inputField.scrollTop = scrollTop;
    } else {
      inputField.focus();
      inputField.value += myValue;
    }
  }

  function toUnicode(code) {
    var codes = code.split('-').map(function(value, index) {
      return parseInt(value, 16);
    });
    return String.fromCodePoint.apply(null, codes);
  }

  function addToLocalStorage(emoji) {
    var recentlyUsedEmojis = [];
    if (localStorage.emojis) {
      recentlyUsedEmojis = JSON.parse(localStorage.emojis);
    }

    // If already in recently used, move to front
    var index = recentlyUsedEmojis.indexOf(emoji);
    if (index > -1) {
      recentlyUsedEmojis.splice(index, 1);
    }
    recentlyUsedEmojis.push(emoji);

    if (recentlyUsedEmojis.length > defaults.recentCount) {
      recentlyUsedEmojis.shift();
    }

    localStorage.emojis = JSON.stringify(recentlyUsedEmojis);
  }

  function updateRecentlyUsed(emoji) {
    var recentlyUsedEmojis = JSON.parse(localStorage.emojis);
    var emojis = [];
    var recent = $('section.recent');

    for (var i = recentlyUsedEmojis.length-1; i >= 0; i--) {
      emojis.push('<em><span class="emoji emoji-' + recentlyUsedEmojis[i] + '"></span></em>');
    }

    // Fix height as emojis are added
    var prevHeight = recent.outerHeight();
    $('section.recent .wrap').html(emojis.join(''));
    var currentScrollTop = $('.sections').scrollTop();
    var newHeight = recent.outerHeight();
    var newScrollToHeight = 0;

    if (!$('section.recent').is(':visible')) {
      recent.show();
      newScrollToHeight = newHeight;
    } else if (prevHeight != newHeight) {
      newScrollToHeight = newHeight - prevHeight;
    }

    $('.sections').animate({
      scrollTop: currentScrollTop + newScrollToHeight
    }, 0);
  }

  if (!String.fromCodePoint) {
    // ES6 Unicode Shims 0.1 , © 2012 Steven Levithan http://slevithan.com/ , MIT License
    String.fromCodePoint = function fromCodePoint () {
        var chars = [], point, offset, units, i;
        for (i = 0; i < arguments.length; ++i) {
            point = arguments[i];
            offset = point - 0x10000;
            units = point > 0xFFFF ? [0xD800 + (offset >> 10), 0xDC00 + (offset & 0x3FF)] : [point];
            chars.push(String.fromCharCode.apply(null, units));
        }
        return chars.join("");
    }
  }

})(jQuery);
$(function() {
$.fn.emojiPicker.emojis = [
  {
    "name": "grinning",
    "unicode": {"apple":"1F600", "google":"1F600", "twitter":"1F600"},
    "shortcode": "grinning",
    "description": "GRINNING FACE",
    "category": "people"
  },
  {
    "name": "grin",
    "unicode": {"apple":"1F601", "google":"1F601", "twitter":"1F601"},
    "shortcode": "grin",
    "description": "GRINNING FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "grimacing",
    "unicode": {"apple":"1F62C", "google":"1F62C", "twitter":"1F62C"},
    "shortcode": "grimacing",
    "description": "GRIMACING FACE",
    "category": "people"
  },
  {
    "name": "joy",
    "unicode": {"apple":"1F602", "google":"1F602", "twitter":"1F602"},
    "shortcode": "joy",
    "description": "FACE WITH TEARS OF JOY",
    "category": "people"
  },
  {
    "name": "smiley",
    "unicode": {"apple":"1F603", "google":"1F603", "twitter":"1F603"},
    "shortcode": "smiley",
    "description": "SMILING FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "smile",
    "unicode": {"apple":"1F604", "google":"1F604", "twitter":"1F604"},
    "shortcode": "smile",
    "description": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES",
    "category": "people"
  },
  {
    "name": "sweat_smile",
    "unicode": {"apple":"1F605", "google":"1F605", "twitter":"1F605"},
    "shortcode": "sweat_smile",
    "description": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT",
    "category": "people"
  },
  {
    "name": "laughing",
    "unicode": {"apple":"1F606", "google":"1F606", "twitter":"1F606"},
    "shortcode": "laughing",
    "description": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",
    "category": "people"
  },
  {
    "name": "innocent",
    "unicode": {"apple":"1F607", "google":"1F607", "twitter":"1F607"},
    "shortcode": "innocent",
    "description": "SMILING FACE WITH HALO",
    "category": "people"
  },
  {
    "name": "wink",
    "unicode": {"apple":"1F609", "google":"1F609", "twitter":"1F609"},
    "shortcode": "wink",
    "description": "WINKING FACE",
    "category": "people"
  },
  {
    "name": "blush",
    "unicode": {"apple":"1F60A", "google":"1F60A", "twitter":"1F60A"},
    "shortcode": "blush",
    "description": "SMILING FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "slightly_smiling_face",
    "unicode": {"apple":"1F642", "google":"1F642", "twitter":"1F642"},
    "shortcode": "slightly_smiling_face",
    "description": "slightly smiling face",
    "category": "people"
  },
  {
    "name": "upside_down_face",
    "unicode": {"apple":"1F643", "google":"1F643", "twitter":"1F643"},
    "shortcode": "upside_down_face",
    "description": "upside-down face",
    "category": "people"
  },
  {
    "name": "relaxed",
    "unicode": {"apple":"263A", "google":"263A", "twitter":"263A"},
    "shortcode": "relaxed",
    "description": "WHITE SMILING FACE",
    "category": "people"
  },
  {
    "name": "yum",
    "unicode": {"apple":"1F60B", "google":"1F60B", "twitter":"1F60B"},
    "shortcode": "yum",
    "description": "FACE SAVOURING DELICIOUS FOOD",
    "category": "people"
  },
  {
    "name": "relieved",
    "unicode": {"apple":"1F60C", "google":"1F60C", "twitter":"1F60C"},
    "shortcode": "relieved",
    "description": "RELIEVED FACE",
    "category": "people"
  },
  {
    "name": "heart_eyes",
    "unicode": {"apple":"1F60D", "google":"1F60D", "twitter":"1F60D"},
    "shortcode": "heart_eyes",
    "description": "SMILING FACE WITH HEART-SHAPED EYES",
    "category": "people"
  },
  {
    "name": "kissing_heart",
    "unicode": {"apple":"1F618", "google":"1F618", "twitter":"1F618"},
    "shortcode": "kissing_heart",
    "description": "FACE THROWING A KISS",
    "category": "people"
  },
  {
    "name": "kissing",
    "unicode": {"apple":"1F617", "google":"1F617", "twitter":"1F617"},
    "shortcode": "kissing",
    "description": "KISSING FACE",
    "category": "people"
  },
  {
    "name": "kissing_smiling_eyes",
    "unicode": {"apple":"1F619", "google":"1F619", "twitter":"1F619"},
    "shortcode": "kissing_smiling_eyes",
    "description": "KISSING FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "kissing_closed_eyes",
    "unicode": {"apple":"1F61A", "google":"1F61A", "twitter":"1F61A"},
    "shortcode": "kissing_closed_eyes",
    "description": "KISSING FACE WITH CLOSED EYES",
    "category": "people"
  },
  {
    "name": "stuck_out_tongue_winking_eye",
    "unicode": {"apple":"1F61C", "google":"1F61C", "twitter":"1F61C"},
    "shortcode": "stuck_out_tongue_winking_eye",
    "description": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE",
    "category": "people"
  },
  {
    "name": "stuck_out_tongue_closed_eyes",
    "unicode": {"apple":"1F61D", "google":"1F61D", "twitter":"1F61D"},
    "shortcode": "stuck_out_tongue_closed_eyes",
    "description": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES",
    "category": "people"
  },
  {
    "name": "stuck_out_tongue",
    "unicode": {"apple":"1F61B", "google":"1F61B", "twitter":"1F61B"},
    "shortcode": "stuck_out_tongue",
    "description": "FACE WITH STUCK-OUT TONGUE",
    "category": "people"
  },
  {
    "name": "money_mouth_face",
    "unicode": {"apple":"1F911", "google":"1F911", "twitter":"1F911"},
    "shortcode": "money_mouth_face",
    "description": "Money-Mouth Face",
    "category": "people"
  },
  {
    "name": "nerd_face",
    "unicode": {"apple":"1F913", "google":"1F913", "twitter":"1F913"},
    "shortcode": "nerd_face",
    "description": "Nerd Face",
    "category": "people"
  },
  {
    "name": "sunglasses",
    "unicode": {"apple":"", "google":"", "twitter":"1F60E"},
    "shortcode": "sunglasses",
    "description": "SMILING FACE WITH SUNGLASSES",
    "category": "people"
  },
  {
    "name": "hugging_face",
    "unicode": {"apple":"1F917", "google":"1F917", "twitter":"1F917"},
    "shortcode": "hugging_face",
    "description": "Hugging Face",
    "category": "people"
  },
  {
    "name": "smirk",
    "unicode": {"apple":"1F60F", "google":"1F60F", "twitter":"1F60F"},
    "shortcode": "smirk",
    "description": "SMIRKING FACE",
    "category": "people"
  },
  {
    "name": "no_mouth",
    "unicode": {"apple":"1F636", "google":"1F636", "twitter":"1F636"},
    "shortcode": "no_mouth",
    "description": "FACE WITHOUT MOUTH",
    "category": "people"
  },
  {
    "name": "neutral_face",
    "unicode": {"apple":"1F610", "google":"1F610", "twitter":"1F610"},
    "shortcode": "neutral_face",
    "description": "NEUTRAL FACE",
    "category": "people"
  },
  {
    "name": "expressionless",
    "unicode": {"apple":"1F611", "google":"1F611", "twitter":"1F611"},
    "shortcode": "expressionless",
    "description": "EXPRESSIONLESS FACE",
    "category": "people"
  },
  {
    "name": "unamused",
    "unicode": {"apple":"1F612", "google":"1F612", "twitter":"1F612"},
    "shortcode": "unamused",
    "description": "UNAMUSED FACE",
    "category": "people"
  },
  {
    "name": "face_with_rolling_eyes",
    "unicode": {"apple":"1F644", "google":"1F644", "twitter":"1F644"},
    "shortcode": "face_with_rolling_eyes",
    "description": "Face With Rolling Eyes",
    "category": "people"
  },
  {
    "name": "thinking_face",
    "unicode": {"apple":"1F914", "google":"1F914", "twitter":"1F914"},
    "shortcode": "thinking_face",
    "description": "Thinking Face",
    "category": "people"
  },
  {
    "name": "flushed",
    "unicode": {"apple":"1F633", "google":"1F633", "twitter":"1F633"},
    "shortcode": "flushed",
    "description": "FLUSHED FACE",
    "category": "people"
  },
  {
    "name": "disappointed",
    "unicode": {"apple":"1F61E", "google":"1F61E", "twitter":"1F61E"},
    "shortcode": "disappointed",
    "description": "DISAPPOINTED FACE",
    "category": "people"
  },
  {
    "name": "worried",
    "unicode": {"apple":"1F61F", "google":"1F61F", "twitter":"1F61F"},
    "shortcode": "worried",
    "description": "WORRIED FACE",
    "category": "people"
  },
  {
    "name": "angry",
    "unicode": {"apple":"1F620", "google":"1F620", "twitter":"1F620"},
    "shortcode": "angry",
    "description": "ANGRY FACE",
    "category": "people"
  },
  {
    "name": "rage",
    "unicode": {"apple":"1F621", "google":"1F621", "twitter":"1F621"},
    "shortcode": "rage",
    "description": "POUTING FACE",
    "category": "people"
  },
  {
    "name": "pensive",
    "unicode": {"apple":"1F614", "google":"1F614", "twitter":"1F614"},
    "shortcode": "pensive",
    "description": "PENSIVE FACE",
    "category": "people"
  },
  {
    "name": "confused",
    "unicode": {"apple":"1F615", "google":"1F615", "twitter":"1F615"},
    "shortcode": "confused",
    "description": "CONFUSED FACE",
    "category": "people"
  },
  {
    "name": "slightly_frowning_face",
    "unicode": {"apple":"1F641", "google":"1F641", "twitter":"1F641"},
    "shortcode": "slightly_frowning_face",
    "description": "slightly frowning face",
    "category": "people"
  },
  {
    "name": "white_frowning_face",
    "unicode": {"apple":"2639", "google":"2639", "twitter":"2639"},
    "shortcode": "white_frowning_face",
    "description": "white frowning face",
    "category": "people"
  },
  {
    "name": "persevere",
    "unicode": {"apple":"1F623", "google":"1F623", "twitter":"1F623"},
    "shortcode": "persevere",
    "description": "PERSEVERING FACE",
    "category": "people"
  },
  {
    "name": "confounded",
    "unicode": {"apple":"1F616", "google":"1F616", "twitter":"1F616"},
    "shortcode": "confounded",
    "description": "CONFOUNDED FACE",
    "category": "people"
  },
  {
    "name": "tired_face",
    "unicode": {"apple":"1F62B", "google":"1F62B", "twitter":"1F62B"},
    "shortcode": "tired_face",
    "description": "TIRED FACE",
    "category": "people"
  },
  {
    "name": "weary",
    "unicode": {"apple":"1F629", "google":"1F629", "twitter":"1F629"},
    "shortcode": "weary",
    "description": "WEARY FACE",
    "category": "people"
  },
  {
    "name": "triumph",
    "unicode": {"apple":"1F624", "google":"1F624", "twitter":"1F624"},
    "shortcode": "triumph",
    "description": "FACE WITH LOOK OF TRIUMPH",
    "category": "people"
  },
  {
    "name": "open_mouth",
    "unicode": {"apple":"1F62E", "google":"1F62E", "twitter":"1F62E"},
    "shortcode": "open_mouth",
    "description": "FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "scream",
    "unicode": {"apple":"1F631", "google":"1F631", "twitter":"1F631"},
    "shortcode": "scream",
    "description": "FACE SCREAMING IN FEAR",
    "category": "people"
  },
  {
    "name": "fearful",
    "unicode": {"apple":"1F628", "google":"1F628", "twitter":"1F628"},
    "shortcode": "fearful",
    "description": "FEARFUL FACE",
    "category": "people"
  },
  {
    "name": "cold_sweat",
    "unicode": {"apple":"1F630", "google":"1F630", "twitter":"1F630"},
    "shortcode": "cold_sweat",
    "description": "FACE WITH OPEN MOUTH AND COLD SWEAT",
    "category": "people"
  },
  {
    "name": "hushed",
    "unicode": {"apple":"1F62F", "google":"1F62F", "twitter":"1F62F"},
    "shortcode": "hushed",
    "description": "HUSHED FACE",
    "category": "people"
  },
  {
    "name": "frowning",
    "unicode": {"apple":"1F626", "google":"1F626", "twitter":"1F626"},
    "shortcode": "frowning",
    "description": "FROWNING FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "anguished",
    "unicode": {"apple":"1F627", "google":"1F627", "twitter":"1F627"},
    "shortcode": "anguished",
    "description": "ANGUISHED FACE",
    "category": "people"
  },
  {
    "name": "cry",
    "unicode": {"apple":"1F622", "google":"1F622", "twitter":"1F622"},
    "shortcode": "cry",
    "description": "CRYING FACE",
    "category": "people"
  },
  {
    "name": "disappointed_relieved",
    "unicode": {"apple":"1F625", "google":"1F625", "twitter":"1F625"},
    "shortcode": "disappointed_relieved",
    "description": "DISAPPOINTED BUT RELIEVED FACE",
    "category": "people"
  },
  {
    "name": "sleepy",
    "unicode": {"apple":"1F62A", "google":"1F62A", "twitter":"1F62A"},
    "shortcode": "sleepy",
    "description": "SLEEPY FACE",
    "category": "people"
  },
  {
    "name": "sweat",
    "unicode": {"apple":"1F613", "google":"1F613", "twitter":"1F613"},
    "shortcode": "sweat",
    "description": "FACE WITH COLD SWEAT",
    "category": "people"
  },
  {
    "name": "sob",
    "unicode": {"apple":"1F62D", "google":"1F62D", "twitter":"1F62D"},
    "shortcode": "sob",
    "description": "LOUDLY CRYING FACE",
    "category": "people"
  },
  {
    "name": "dizzy_face",
    "unicode": {"apple":"1F635", "google":"1F635", "twitter":"1F635"},
    "shortcode": "dizzy_face",
    "description": "DIZZY FACE",
    "category": "people"
  },
  {
    "name": "astonished",
    "unicode": {"apple":"1F632", "google":"1F632", "twitter":"1F632"},
    "shortcode": "astonished",
    "description": "ASTONISHED FACE",
    "category": "people"
  },
  {
    "name": "zipper_mouth_face",
    "unicode": {"apple":"1F910", "google":"1F910", "twitter":"1F910"},
    "shortcode": "zipper_mouth_face",
    "description": "Zipper-Mouth Face",
    "category": "people"
  },
  {
    "name": "mask",
    "unicode": {"apple":"1F637", "google":"1F637", "twitter":"1F637"},
    "shortcode": "mask",
    "description": "FACE WITH MEDICAL MASK",
    "category": "people"
  },
  {
    "name": "face_with_thermometer",
    "unicode": {"apple":"1F912", "google":"1F912", "twitter":"1F912"},
    "shortcode": "face_with_thermometer",
    "description": "Face With Thermometer",
    "category": "people"
  },
  {
    "name": "face_with_head_bandage",
    "unicode": {"apple":"1F915", "google":"1F915", "twitter":"1F915"},
    "shortcode": "face_with_head_bandage",
    "description": "Face With Head-Bandage",
    "category": "people"
  },
  {
    "name": "sleeping",
    "unicode": {"apple":"1F634", "google":"1F634", "twitter":"1F634"},
    "shortcode": "sleeping",
    "description": "SLEEPING FACE",
    "category": "people"
  },
  {
    "name": "zzz",
    "unicode": {"apple":"1F4A4", "google":"1F4A4", "twitter":"1F4A4"},
    "shortcode": "zzz",
    "description": "SLEEPING SYMBOL",
    "category": "people"
  },
  {
    "name": "hankey",
    "keywords": ["poop", "poo"],
    "unicode": {"apple":"1F4A9", "google":"1F4A9", "twitter":"1F4A9"},
    "shortcode": "hankey",
    "description": "PILE OF POO",
    "category": "people"
  },
  {
    "name": "smiling_imp",
    "unicode": {"apple":"1F608", "google":"1F608", "twitter":"1F608"},
    "shortcode": "smiling_imp",
    "description": "SMILING FACE WITH HORNS",
    "category": "people"
  },
  {
    "name": "imp",
    "unicode": {"apple":"1F47F", "google":"1F47F", "twitter":"1F47F"},
    "shortcode": "imp",
    "description": "IMP",
    "category": "people"
  },
  {
    "name": "japanese_ogre",
    "unicode": {"apple":"1F479", "google":"1F479", "twitter":"1F479"},
    "shortcode": "japanese_ogre",
    "description": "JAPANESE OGRE",
    "category": "people"
  },
  {
    "name": "japanese_goblin",
    "unicode": {"apple":"1F47A", "google":"1F47A", "twitter":"1F47A"},
    "shortcode": "japanese_goblin",
    "description": "JAPANESE GOBLIN",
    "category": "people"
  },
  {
    "name": "skull",
    "unicode": {"apple":"1F480", "google":"1F480", "twitter":"1F480"},
    "shortcode": "skull",
    "description": "SKULL",
    "category": "people"
  },
  {
    "name": "ghost",
    "unicode": {"apple":"1F47B", "google":"1F47B", "twitter":"1F47B"},
    "shortcode": "ghost",
    "description": "GHOST",
    "category": "people"
  },
  {
    "name": "alien",
    "unicode": {"apple":"1F47D", "google":"1F47D", "twitter":"1F47D"},
    "shortcode": "alien",
    "description": "EXTRATERRESTRIAL ALIEN",
    "category": "people"
  },
  {
    "name": "robot_face",
    "unicode": {"apple":"1F916", "google":"1F916", "twitter":"1F916"},
    "shortcode": "robot_face",
    "description": "Robot Face",
    "category": "people"
  },
  {
    "name": "smiley_cat",
    "unicode": {"apple":"1F63A", "google":"1F63A", "twitter":"1F63A"},
    "shortcode": "smiley_cat",
    "description": "SMILING CAT FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "smile_cat",
    "unicode": {"apple":"1F638", "google":"1F638", "twitter":"1F638"},
    "shortcode": "smile_cat",
    "description": "GRINNING CAT FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "joy_cat",
    "unicode": {"apple":"1F639", "google":"1F639", "twitter":"1F639"},
    "shortcode": "joy_cat",
    "description": "CAT FACE WITH TEARS OF JOY",
    "category": "people"
  },
  {
    "name": "heart_eyes_cat",
    "unicode": {"apple":"1F63B", "google":"1F63B", "twitter":"1F63B"},
    "shortcode": "heart_eyes_cat",
    "description": "SMILING CAT FACE WITH HEART-SHAPED EYES",
    "category": "people"
  },
  {
    "name": "smirk_cat",
    "unicode": {"apple":"1F63C", "google":"1F63C", "twitter":"1F63C"},
    "shortcode": "smirk_cat",
    "description": "CAT FACE WITH WRY SMILE",
    "category": "people"
  },
  {
    "name": "kissing_cat",
    "unicode": {"apple":"1F63D", "google":"1F63D", "twitter":"1F63D"},
    "shortcode": "kissing_cat",
    "description": "KISSING CAT FACE WITH CLOSED EYES",
    "category": "people"
  },
  {
    "name": "scream_cat",
    "unicode": {"apple":"1F640", "google":"1F640", "twitter":"1F640"},
    "shortcode": "scream_cat",
    "description": "WEARY CAT FACE",
    "category": "people"
  },
  {
    "name": "crying_cat_face",
    "unicode": {"apple":"1F63F", "google":"1F63F", "twitter":"1F63F"},
    "shortcode": "crying_cat_face",
    "description": "CRYING CAT FACE",
    "category": "people"
  },
  {
    "name": "pouting_cat",
    "unicode": {"apple":"1F63E", "google":"1F63E", "twitter":"1F63E"},
    "shortcode": "pouting_cat",
    "description": "POUTING CAT FACE",
    "category": "people"
  },
  {
    "name": "raised_hands",
    "unicode": {"apple":"1F64C", "google":"1F64C", "twitter":"1F64C"},
    "shortcode": "raised_hands",
    "description": "PERSON RAISING BOTH HANDS IN CELEBRATION",
    "category": "people"
  },
  {
    "name": "clap",
    "unicode": {"apple":"1F44F", "google":"1F44F", "twitter":"1F44F"},
    "shortcode": "clap",
    "description": "CLAPPING HANDS SIGN",
    "category": "people"
  },
  {
    "name": "wave",
    "unicode": {"apple":"1F44B", "google":"1F44B", "twitter":"1F44B"},
    "shortcode": "wave",
    "description": "WAVING HAND SIGN",
    "category": "people"
  },
  {
    "name": "+1",
    "keywords": ["thumbsup"],
    "unicode": {"apple":"1F44D", "google":"1F44D", "twitter":"1F44D"},
    "shortcode": "plus1",
    "description": "THUMBS UP SIGN",
    "category": "people"
  },
  {
    "name": "-1",
    "keywords": ["thumbsdown"],
    "unicode": {"apple":"1F44E", "google":"1F44E", "twitter":"1F44E"},
    "shortcode": "-1",
    "description": "THUMBS DOWN SIGN",
    "category": "people"
  },
  {
    "name": "facepunch",
    "unicode": {"apple":"1F44A", "google":"1F44A", "twitter":"1F44A"},
    "shortcode": "facepunch",
    "description": "FISTED HAND SIGN",
    "category": "people"
  },
  {
    "name": "fist",
    "unicode": {"apple":"270A", "google":"270A", "twitter":"270A"},
    "shortcode": "fist",
    "description": "RAISED FIST",
    "category": "people"
  },
  {
    "name": "v",
    "unicode": {"apple":"270C", "google":"270C", "twitter":"270C"},
    "shortcode": "v",
    "description": "VICTORY HAND",
    "category": "people"
  },
  {
    "name": "ok_hand",
    "unicode": {"apple":"1F44C", "google":"1F44C", "twitter":"1F44C"},
    "shortcode": "ok_hand",
    "description": "OK HAND SIGN",
    "category": "people"
  },
  {
    "name": "hand",
    "unicode": {"apple":"270B", "google":"270B", "twitter":"270B"},
    "shortcode": "hand",
    "description": "RAISED HAND",
    "category": "people"
  },
  {
    "name": "open_hands",
    "unicode": {"apple":"1F450", "google":"1F450", "twitter":"1F450"},
    "shortcode": "open_hands",
    "description": "OPEN HANDS SIGN",
    "category": "people"
  },
  {
    "name": "muscle",
    "unicode": {"apple":"1F4AA", "google":"1F4AA", "twitter":"1F4AA"},
    "shortcode": "muscle",
    "description": "FLEXED BICEPS",
    "category": "people"
  },
  {
    "name": "pray",
    "unicode": {"apple":"1F64F", "google":"1F64F", "twitter":"1F64F"},
    "shortcode": "pray",
    "description": "PERSON WITH FOLDED HANDS",
    "category": "people"
  },
  {
    "name": "point_up",
    "unicode": {"apple":"261D", "google":"261D", "twitter":"261D"},
    "shortcode": "point_up",
    "description": "WHITE UP POINTING INDEX",
    "category": "people"
  },
  {
    "name": "point_up_2",
    "unicode": {"apple":"1F446", "google":"1F446", "twitter":"1F446"},
    "shortcode": "point_up_2",
    "description": "WHITE UP POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "point_down",
    "unicode": {"apple":"1F447", "google":"1F447", "twitter":"1F447"},
    "shortcode": "point_down",
    "description": "WHITE DOWN POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "point_left",
    "unicode": {"apple":"1F448", "google":"1F448", "twitter":"1F448"},
    "shortcode": "point_left",
    "description": "WHITE LEFT POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "point_right",
    "unicode": {"apple":"1F449", "google":"1F449", "twitter":"1F449"},
    "shortcode": "point_right",
    "description": "WHITE RIGHT POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "middle_finger",
    "keywords": ["reversed_hand_with_middle_finger_extended"],
    "unicode": {"apple":"1F595", "google":"1F595", "twitter":"1F595"},
    "shortcode": "middle_finger",
    "description": "Reversed Hand With Middle Finger Extended",
    "category": "people"
  },
  {
    "name": "raised_hand_with_fingers_splayed",
    "unicode": {"apple":"1F590", "google":"1F590", "twitter":"1F590"},
    "shortcode": "raised_hand_with_fingers_splayed",
    "description": "Raised Hand With Fingers Splayed",
    "category": "people"
  },
  {
    "name": "the_horns",
    "keywords": ["sign_of_the_horns"],
    "unicode": {"apple":"1F918", "google":"1F918", "twitter":"1F918"},
    "shortcode": "the_horns",
    "description": "Sign of the Horns",
    "category": "people"
  },
  {
    "name": "spock-hand",
    "unicode": {"apple":"1F596", "google":"1F596", "twitter":"1F596"},
    "shortcode": "spock-hand",
    "description": "Raised Hand With Part Between Middle and Ring Fingers",
    "category": "people"
  },
  {
    "name": "writing_hand",
    "unicode": {"apple":"270D", "google":"270D", "twitter":"270D"},
    "shortcode": "writing_hand",
    "description": "Writing Hand",
    "category": "people"
  },
  {
    "name": "nail_care",
    "unicode": {"apple":"1F485", "google":"1F485", "twitter":"1F485"},
    "shortcode": "nail_care",
    "description": "NAIL POLISH",
    "category": "people"
  },
  {
    "name": "lips",
    "unicode": {"apple":"1F444", "google":"1F444", "twitter":"1F444"},
    "shortcode": "lips",
    "description": "MOUTH",
    "category": "people"
  },
  {
    "name": "tongue",
    "unicode": {"apple":"1F445", "google":"1F445", "twitter":"1F445"},
    "shortcode": "tongue",
    "description": "TONGUE",
    "category": "people"
  },
  {
    "name": "ear",
    "unicode": {"apple":"1F442", "google":"1F442", "twitter":"1F442"},
    "shortcode": "ear",
    "description": "EAR",
    "category": "people"
  },
  {
    "name": "nose",
    "unicode": {"apple":"1F443", "google":"1F443", "twitter":"1F443"},
    "shortcode": "nose",
    "description": "NOSE",
    "category": "people"
  },
  {
    "name": "eye",
    "unicode": {"apple":"1F441", "google":"1F441", "twitter":"1F441"},
    "shortcode": "eye",
    "description": "EYE",
    "category": "people"
  },
  {
    "name": "eyes",
    "unicode": {"apple":"", "google":"", "twitter":"1F440"},
    "shortcode": "eyes",
    "description": "EYES",
    "category": "people"
  },
  {
    "name": "bust_in_silhouette",
    "unicode": {"apple":"1F464", "google":"1F464", "twitter":"1F464"},
    "shortcode": "bust_in_silhouette",
    "description": "BUST IN SILHOUETTE",
    "category": "people"
  },
  {
    "name": "busts_in_silhouette",
    "unicode": {"apple":"1F465", "google":"1F465", "twitter":"1F465"},
    "shortcode": "busts_in_silhouette",
    "description": "BUSTS IN SILHOUETTE",
    "category": "people"
  },
  {
    "name": "speaking_head_in_silhouette",
    "unicode": {"apple":"1F5E3", "google":"1F5E3", "twitter":"1F5E3"},
    "shortcode": "speaking_head_in_silhouette",
    "description": " Speaking Head in Silhouette",
    "category": "people"
  },
  {
    "name": "baby",
    "unicode": {"apple":"1F476", "google":"1F476", "twitter":"1F476"},
    "shortcode": "baby",
    "description": "BABY",
    "category": "people"
  },
  {
    "name": "boy",
    "unicode": {"apple":"1F466", "google":"1F466", "twitter":"1F466"},
    "shortcode": "boy",
    "description": "BOY",
    "category": "people"
  },
  {
    "name": "girl",
    "unicode": {"apple":"1F467", "google":"1F467", "twitter":"1F467"},
    "shortcode": "girl",
    "description": "GIRL",
    "category": "people"
  },
  {
    "name": "man",
    "unicode": {"apple":"1F468", "google":"1F468", "twitter":"1F468"},
    "shortcode": "man",
    "description": "MAN",
    "category": "people"
  },
  {
    "name": "woman",
    "unicode": {"apple":"1F469", "google":"1F469", "twitter":"1F469"},
    "shortcode": "woman",
    "description": "WOMAN",
    "category": "people"
  },
  {
    "name": "person_with_blond_hair",
    "unicode": {"apple":"1F471", "google":"1F471", "twitter":"1F471"},
    "shortcode": "person_with_blond_hair",
    "description": "PERSON WITH BLOND HAIR",
    "category": "people"
  },
  {
    "name": "older_man",
    "unicode": {"apple":"1F474", "google":"1F474", "twitter":"1F474"},
    "shortcode": "older_man",
    "description": "OLDER MAN",
    "category": "people"
  },
  {
    "name": "older_woman",
    "unicode": {"apple":"1F475", "google":"1F475", "twitter":"1F475"},
    "shortcode": "older_woman",
    "description": "OLDER WOMAN",
    "category": "people"
  },
  {
    "name": "man_with_gua_pi_mao",
    "unicode": {"apple":"1F472", "google":"1F472", "twitter":"1F472"},
    "shortcode": "man_with_gua_pi_mao",
    "description": "MAN WITH GUA PI MAO",
    "category": "people"
  },
  {
    "name": "man_with_turban",
    "unicode": {"apple":"1F473", "google":"1F473", "twitter":"1F473"},
    "shortcode": "man_with_turban",
    "description": "MAN WITH TURBAN",
    "category": "people"
  },
  {
    "name": "cop",
    "unicode": {"apple":"1F46E", "google":"1F46E", "twitter":"1F46E"},
    "shortcode": "cop",
    "description": "POLICE OFFICER",
    "category": "people"
  },
  {
    "name": "construction_worker",
    "unicode": {"apple":"1F477", "google":"1F477", "twitter":"1F477"},
    "shortcode": "construction_worker",
    "description": "CONSTRUCTION WORKER",
    "category": "people"
  },
  {
    "name": "guardsman",
    "unicode": {"apple":"1F482", "google":"1F482", "twitter":"1F482"},
    "shortcode": "guardsman",
    "description": "GUARDSMAN",
    "category": "people"
  },
  {
    "name": "sleuth_or_spy",
    "unicode": {"apple":"1F575", "google":"1F575", "twitter":"1F575"},
    "shortcode": "sleuth_or_spy",
    "description": "Sleuth Or Spy",
    "category": "people"
  },
  {
    "name": "santa",
    "unicode": {"apple":"1F385", "google":"1F385", "twitter":"1F385"},
    "shortcode": "santa",
    "description": "FATHER CHRISTMAS",
    "category": "people"
  },
  {
    "name": "angel",
    "unicode": {"apple":"1F47C", "google":"1F47C", "twitter":"1F47C"},
    "shortcode": "angel",
    "description": "BABY ANGEL",
    "category": "people"
  },
  {
    "name": "princess",
    "unicode": {"apple":"1F478", "google":"1F478", "twitter":"1F478"},
    "shortcode": "princess",
    "description": "PRINCESS",
    "category": "people"
  },
  {
    "name": "bride_with_veil",
    "unicode": {"apple":"1F470", "google":"1F470", "twitter":"1F470"},
    "shortcode": "bride_with_veil",
    "description": "BRIDE WITH VEIL",
    "category": "people"
  },
  {
    "name": "walking",
    "unicode": {"apple":"1F6B6", "google":"1F6B6", "twitter":"1F6B6"},
    "shortcode": "walking",
    "description": "PEDESTRIAN",
    "category": "people"
  },
  {
    "name": "runner",
    "unicode": {"apple":"1F3C3", "google":"1F3C3", "twitter":"1F3C3"},
    "shortcode": "runner",
    "description": "RUNNER",
    "category": "people"
  },
  {
    "name": "dancer",
    "unicode": {"apple":"1F483", "google":"1F483", "twitter":"1F483"},
    "shortcode": "dancer",
    "description": "DANCER",
    "category": "people"
  },
  {
    "name": "dancers",
    "unicode": {"apple":"1F46F", "google":"1F46F", "twitter":"1F46F"},
    "shortcode": "dancers",
    "description": "WOMAN WITH BUNNY EARS",
    "category": "people"
  },
  {
    "name": "couple",
    "unicode": {"apple":"1F46B", "google":"1F46B", "twitter":"1F46B"},
    "shortcode": "couple",
    "description": "MAN AND WOMAN HOLDING HANDS",
    "category": "people"
  },
  {
    "name": "two_men_holding_hands",
    "unicode": {"apple":"1F46C", "google":"1F46C", "twitter":"1F46C"},
    "shortcode": "two_men_holding_hands",
    "description": "TWO MEN HOLDING HANDS",
    "category": "people"
  },
  {
    "name": "two_women_holding_hands",
    "unicode": {"apple":"1F46D", "google":"1F46D", "twitter":"1F46D"},
    "shortcode": "two_women_holding_hands",
    "description": "TWO WOMEN HOLDING HANDS",
    "category": "people"
  },
  {
    "name": "bow",
    "unicode": {"apple":"1F647", "google":"1F647", "twitter":"1F647"},
    "shortcode": "bow",
    "description": "PERSON BOWING DEEPLY",
    "category": "people"
  },
  {
    "name": "information_desk_person",
    "unicode": {"apple":"1F481", "google":"1F481", "twitter":"1F481"},
    "shortcode": "information_desk_person",
    "description": "INFORMATION DESK PERSON",
    "category": "people"
  },
  {
    "name": "no_good",
    "unicode": {"apple":"1F645", "google":"1F645", "twitter":"1F645"},
    "shortcode": "no_good",
    "description": "FACE WITH NO GOOD GESTURE",
    "category": "people"
  },
  {
    "name": "ok_woman",
    "unicode": {"apple":"1F646", "google":"1F646", "twitter":"1F646"},
    "shortcode": "ok_woman",
    "description": "FACE WITH OK GESTURE",
    "category": "people"
  },
  {
    "name": "raising_hand",
    "unicode": {"apple":"1F64B", "google":"1F64B", "twitter":"1F64B"},
    "shortcode": "raising_hand",
    "description": "HAPPY PERSON RAISING ONE HAND",
    "category": "people"
  },
  {
    "name": "person_with_pouting_face",
    "unicode": {"apple":"1F64E", "google":"1F64E", "twitter":"1F64E"},
    "shortcode": "person_with_pouting_face",
    "description": "PERSON WITH POUTING FACE",
    "category": "people"
  },
  {
    "name": "person_frowning",
    "unicode": {"apple":"1F64D", "google":"1F64D", "twitter":"1F64D"},
    "shortcode": "person_frowning",
    "description": "PERSON FROWNING",
    "category": "people"
  },
  {
    "name": "haircut",
    "unicode": {"apple":"1F487", "google":"1F487", "twitter":"1F487"},
    "shortcode": "haircut",
    "description": "HAIRCUT",
    "category": "people"
  },
  {
    "name": "massage",
    "unicode": {"apple":"1F486", "google":"1F486", "twitter":"1F486"},
    "shortcode": "massage",
    "description": "FACE MASSAGE",
    "category": "people"
  },
  {
    "name": "couple_with_heart",
    "unicode": {"apple":"1F491", "google":"1F491", "twitter":"1F491"},
    "shortcode": "couple_with_heart",
    "description": "COUPLE WITH HEART",
    "category": "people"
  },
  // {
  //   "name": "woman-heart-woman",
  //   "unicode": {"apple":"1F469-200D-2764-FE0F-200D-1F469", "google":"1F469-200D-2764-FE0F-200D-1F469", "twitter":"1F469-200D-2764-FE0F-200D-1F469"},
  //   "shortcode": "woman-heart-woman",
  //   "description": "Couple With Heart (Woman, Woman)",
  //   "category": "people"
  // },
  // {
  //   "name": "man-heart-man",
  //   "unicode": {"apple":"1F468-200D-2764-FE0F-200D-1F468", "google":"1F468-200D-2764-FE0F-200D-1F468", "twitter":"1F468-200D-2764-FE0F-200D-1F468"},
  //   "shortcode": "man-heart-man",
  //   "description": "COUPLE WITH HEART",
  //   "category": "people"
  // },
  {
    "name": "couplekiss",
    "unicode": {"apple":"1F48F", "google":"1F48F", "twitter":"1F48F"},
    "shortcode": "couplekiss",
    "description": "KISS",
    "category": "people"
  },
  // {
  //   "name": "woman-kiss-woman",
  //   "unicode": {"apple":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469", "google":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469", "twitter":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469"},
  //   "shortcode": "woman-kiss-woman",
  //   "description": "KISS",
  //   "category": "people"
  // },
  // {
  //   "name": "man-kiss-man",
  //   "unicode": {"apple":"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468", "google":"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468", "twitter":"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468"},
  //   "shortcode": "man-kiss-man",
  //   "description": "KISS",
  //   "category": "people"
  // },
  {
    "name": "family",
    "unicode": {"apple":"1F46A", "google":"1F46A", "twitter":"1F46A"},
    "shortcode": "family",
    "description": "FAMILY",
    "category": "people"
  },
  // {
  //   "name": "man-woman-girl",
  //   "unicode": {"apple":"1F468-200D-1F469-200D-1F467", "google":"1F468-200D-1F469-200D-1F467", "twitter":"1F468-200D-1F469-200D-1F467"},
  //   "shortcode": "man-woman-girl",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "man-woman-girl-boy",
  //   "unicode": {"apple":"1F469-200D-1F469-200D-1F467-200D-1F466", "google":"1F469-200D-1F469-200D-1F467-200D-1F466", "twitter":"1F469-200D-1F469-200D-1F467-200D-1F466"},
  //   "shortcode": "man-woman-girl-boy",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "man-woman-boy-boy",
  //   "unicode": {"apple":"1F468-200D-1F469-200D-1F466-200D-1F466", "google":"1F468-200D-1F469-200D-1F466-200D-1F466", "twitter":"1F468-200D-1F469-200D-1F466-200D-1F466"},
  //   "shortcode": "man-woman-boy-boy",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "man-woman-girl-girl",
  //   "unicode": {"apple":"1F468-200D-1F469-200D-1F467-200D-1F467", "google":"1F468-200D-1F469-200D-1F467-200D-1F467", "twitter":"1F468-200D-1F469-200D-1F467-200D-1F467"},
  //   "shortcode": "man-woman-girl-girl",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "woman-woman-boy",
  //   "unicode": {"apple":"1F469-200D-1F469-200D-1F466", "google":"1F469-200D-1F469-200D-1F466", "twitter":"1F469-200D-1F469-200D-1F466"},
  //   "shortcode": "woman-woman-boy",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "woman-woman-girl",
  //   "unicode": {"apple":"1F469-200D-1F469-200D-1F467", "google":"1F469-200D-1F469-200D-1F467", "twitter":"1F469-200D-1F469-200D-1F467"},
  //   "shortcode": "woman-woman-girl",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "woman-woman-girl-boy",
  //   "unicode": {"apple":"1F469-200D-1F469-200D-1F467-200D-1F466", "google":"1F469-200D-1F469-200D-1F467-200D-1F466", "twitter":"1F469-200D-1F469-200D-1F467-200D-1F466"},
  //   "shortcode": "woman-woman-girl-boy",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "woman-woman-boy-boy",
  //   "unicode": {"apple":"1F469-200D-1F469-200D-1F466-200D-1F466", "google":"1F469-200D-1F469-200D-1F466-200D-1F466", "twitter":"1F469-200D-1F469-200D-1F466-200D-1F466"},
  //   "shortcode": "woman-woman-boy-boy",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "woman-woman-girl-girl",
  //   "unicode": {"apple":"1F469-200D-1F469-200D-1F467-200D-1F467", "google":"1F469-200D-1F469-200D-1F467-200D-1F467", "twitter":"1F469-200D-1F469-200D-1F467-200D-1F467"},
  //   "shortcode": "woman-woman-girl-girl",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "man-man-boy",
  //   "unicode": {"apple":"1F468-200D-1F468-200D-1F466", "google":"1F468-200D-1F468-200D-1F466", "twitter":"1F468-200D-1F468-200D-1F466"},
  //   "shortcode": "man-man-boy",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "man-man-girl",
  //   "unicode": {"apple":"1F468-200D-1F468-200D-1F467", "google":"1F468-200D-1F468-200D-1F467", "twitter":"1F468-200D-1F468-200D-1F467"},
  //   "shortcode": "man-man-girl",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "man-man-girl-boy",
  //   "unicode": {"apple":"1F468-200D-1F468-200D-1F467-200D-1F466", "google":"1F468-200D-1F468-200D-1F467-200D-1F466", "twitter":"1F468-200D-1F468-200D-1F467-200D-1F466"},
  //   "shortcode": "man-man-girl-boy",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "man-man-boy-boy",
  //   "unicode": {"apple":"1F468-200D-1F468-200D-1F466-200D-1F466", "google":"1F468-200D-1F468-200D-1F466-200D-1F466", "twitter":"1F468-200D-1F468-200D-1F466-200D-1F466"},
  //   "shortcode": "man-man-boy-boy",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  // {
  //   "name": "man-man-girl-girl",
  //   "unicode": {"apple":"1F468-200D-1F468-200D-1F467-200D-1F467", "google":"1F468-200D-1F468-200D-1F467-200D-1F467", "twitter":"1F468-200D-1F468-200D-1F467-200D-1F467"},
  //   "shortcode": "man-man-girl-girl",
  //   "description": "FAMILY",
  //   "category": "people"
  // },
  {
    "name": "womans_clothes",
    "unicode": {"apple":"1F45A", "google":"1F45A", "twitter":"1F45A"},
    "shortcode": "womans_clothes",
    "description": "WOMANS CLOTHES",
    "category": "people"
  },
  {
    "name": "shirt",
    "unicode": {"apple":"1F455", "google":"1F455", "twitter":"1F455"},
    "shortcode": "shirt",
    "description": "T-SHIRT",
    "category": "people"
  },
  {
    "name": "jeans",
    "unicode": {"apple":"1F456", "google":"1F456", "twitter":"1F456"},
    "shortcode": "jeans",
    "description": "JEANS",
    "category": "people"
  },
  {
    "name": "necktie",
    "unicode": {"apple":"1F454", "google":"1F454", "twitter":"1F454"},
    "shortcode": "necktie",
    "description": "NECKTIE",
    "category": "people"
  },
  {
    "name": "dress",
    "unicode": {"apple":"1F457", "google":"1F457", "twitter":"1F457"},
    "shortcode": "dress",
    "description": "DRESS",
    "category": "people"
  },
  {
    "name": "bikini",
    "unicode": {"apple":"1F459", "google":"1F459", "twitter":"1F459"},
    "shortcode": "bikini",
    "description": "BIKINI",
    "category": "people"
  },
  {
    "name": "kimono",
    "unicode": {"apple":"1F458", "google":"1F458", "twitter":"1F458"},
    "shortcode": "kimono",
    "description": "KIMONO",
    "category": "people"
  },
  {
    "name": "lipstick",
    "unicode": {"apple":"1F484", "google":"1F484", "twitter":"1F484"},
    "shortcode": "lipstick",
    "description": "LIPSTICK",
    "category": "people"
  },
  {
    "name": "kiss",
    "unicode": {"apple":"1F48B", "google":"1F48B", "twitter":"1F48B"},
    "shortcode": "kiss",
    "description": "KISS MARK",
    "category": "people"
  },
  {
    "name": "footprints",
    "unicode": {"apple":"1F463", "google":"1F463", "twitter":"1F463"},
    "shortcode": "footprints",
    "description": "FOOTPRINTS",
    "category": "people"
  },
  {
    "name": "high_heel",
    "unicode": {"apple":"1F460", "google":"1F460", "twitter":"1F460"},
    "shortcode": "high_heel",
    "description": "HIGH-HEELED SHOE",
    "category": "people"
  },
  {
    "name": "sandal",
    "unicode": {"apple":"1F461", "google":"1F461", "twitter":"1F461"},
    "shortcode": "sandal",
    "description": "WOMANS SANDAL",
    "category": "people"
  },
  {
    "name": "boot",
    "unicode": {"apple":"1F462", "google":"1F462", "twitter":"1F462"},
    "shortcode": "boot",
    "description": "WOMANS BOOTS",
    "category": "people"
  },
  {
    "name": "mans_shoe",
    "unicode": {"apple":"1F45E", "google":"1F45E", "twitter":"1F45E"},
    "shortcode": "mans_shoe",
    "description": "MANS SHOE",
    "category": "people"
  },
  {
    "name": "athletic_shoe",
    "unicode": {"apple":"1F45F", "google":"1F45F", "twitter":"1F45F"},
    "shortcode": "athletic_shoe",
    "description": "ATHLETIC SHOE",
    "category": "people"
  },
  {
    "name": "womans_hat",
    "unicode": {"apple":"1F452", "google":"1F452", "twitter":"1F452"},
    "shortcode": "womans_hat",
    "description": "WOMANS HAT",
    "category": "people"
  },
  {
    "name": "tophat",
    "unicode": {"apple":"1F3A9", "google":"1F3A9", "twitter":"1F3A9"},
    "shortcode": "tophat",
    "description": "TOP HAT",
    "category": "people"
  },
  {
    "name": "helmet_with_white_cross",
    "unicode": {"apple":"26D1", "google":"26D1", "twitter":"26D1"},
    "shortcode": "helmet_with_white_cross",
    "description": "Helmet With White Cross",
    "category": "people"
  },
  {
    "name": "mortar_board",
    "unicode": {"apple":"1F393", "google":"1F393", "twitter":"1F393"},
    "shortcode": "mortar_board",
    "description": "GRADUATION CAP",
    "category": "people"
  },
  {
    "name": "crown",
    "unicode": {"apple":"1F451", "google":"1F451", "twitter":"1F451"},
    "shortcode": "crown",
    "description": "CROWN",
    "category": "people"
  },
  {
    "name": "school_satchel",
    "unicode": {"apple":"1F392", "google":"1F392", "twitter":"1F392"},
    "shortcode": "school_satchel",
    "description": "SCHOOL SATCHEL",
    "category": "people"
  },
  {
    "name": "pouch",
    "unicode": {"apple":"1F45D", "google":"1F45D", "twitter":"1F45D"},
    "shortcode": "pouch",
    "description": "POUCH",
    "category": "people"
  },
  {
    "name": "purse",
    "unicode": {"apple":"1F45B", "google":"1F45B", "twitter":"1F45B"},
    "shortcode": "purse",
    "description": "PURSE",
    "category": "people"
  },
  {
    "name": "handbag",
    "unicode": {"apple":"1F45C", "google":"1F45C", "twitter":"1F45C"},
    "shortcode": "handbag",
    "description": "HANDBAG",
    "category": "people"
  },
  {
    "name": "briefcase",
    "unicode": {"apple":"1F4BC", "google":"1F4BC", "twitter":"1F4BC"},
    "shortcode": "briefcase",
    "description": "BRIEFCASE",
    "category": "people"
  },
  {
    "name": "eyeglasses",
    "unicode": {"apple":"1F453", "google":"1F453", "twitter":"1F453"},
    "shortcode": "eyeglasses",
    "description": "EYEGLASSES",
    "category": "people"
  },
  {
    "name": "dark_sunglasses",
    "unicode": {"apple":"1F576", "google":"1F576", "twitter":"1F576"},
    "shortcode": "dark_sunglasses",
    "description": "Dark Sunglasses",
    "category": "people"
  },
  {
    "name": "ring",
    "unicode": {"apple":"1F48D", "google":"1F48D", "twitter":"1F48D"},
    "shortcode": "ring",
    "description": "RING",
    "category": "people"
  },
  {
    "name": "closed_umbrella",
    "unicode": {"apple":"1F302", "google":"1F302", "twitter":"1F302"},
    "shortcode": "closed_umbrella",
    "description": "CLOSED UMBRELLA",
    "category": "people"
  },
  {
    "name": "dog",
    "unicode": {"apple":"1F436", "google":"1F436", "twitter":"1F436"},
    "shortcode": "dog",
    "description": "DOG FACE",
    "category": "animal"
  },
  {
    "name": "cat",
    "unicode": {"apple":"1F431", "google":"1F431", "twitter":"1F431"},
    "shortcode": "cat",
    "description": "CAT FACE",
    "category": "animal"
  },
  {
    "name": "mouse",
    "unicode": {"apple":"1F42D", "google":"1F42D", "twitter":"1F42D"},
    "shortcode": "mouse",
    "description": "MOUSE FACE",
    "category": "animal"
  },
  {
    "name": "hamster",
    "unicode": {"apple":"1F439", "google":"1F439", "twitter":"1F439"},
    "shortcode": "hamster",
    "description": "HAMSTER FACE",
    "category": "animal"
  },
  {
    "name": "rabbit",
    "unicode": {"apple":"1F430", "google":"1F430", "twitter":"1F430"},
    "shortcode": "rabbit",
    "description": "RABBIT FACE",
    "category": "animal"
  },
  {
    "name": "bear",
    "unicode": {"apple":"1F43B", "google":"1F43B", "twitter":"1F43B"},
    "shortcode": "bear",
    "description": "BEAR FACE",
    "category": "animal"
  },
  {
    "name": "panda_face",
    "unicode": {"apple":"1F43C", "google":"1F43C", "twitter":"1F43C"},
    "shortcode": "panda_face",
    "description": "PANDA FACE",
    "category": "animal"
  },
  {
    "name": "koala",
    "unicode": {"apple":"1F428", "google":"1F428", "twitter":"1F428"},
    "shortcode": "koala",
    "description": "KOALA",
    "category": "animal"
  },
  {
    "name": "tiger",
    "unicode": {"apple":"1F42F", "google":"1F42F", "twitter":"1F42F"},
    "shortcode": "tiger",
    "description": "TIGER FACE",
    "category": "animal"
  },
  {
    "name": "lion",
    "keywords": ["lion_face"],
    "unicode": {"apple":"1F981", "google":"1F981", "twitter":"1F981"},
    "shortcode": "lion",
    "description": "Lion Face",
    "category": "animal"
  },
  {
    "name": "cow",
    "unicode": {"apple":"1F42E", "google":"1F42E", "twitter":"1F42E"},
    "shortcode": "cow",
    "description": "COW FACE",
    "category": "animal"
  },
  {
    "name": "pig",
    "unicode": {"apple":"1F437", "google":"1F437", "twitter":"1F437"},
    "shortcode": "pig",
    "description": "PIG FACE",
    "category": "animal"
  },
  {
    "name": "pig_nose",
    "unicode": {"apple":"1F43D", "google":"1F43D", "twitter":"1F43D"},
    "shortcode": "pig_nose",
    "description": "PIG NOSE",
    "category": "animal"
  },
  {
    "name": "frog",
    "unicode": {"apple":"1F438", "google":"1F438", "twitter":"1F438"},
    "shortcode": "frog",
    "description": "FROG FACE",
    "category": "animal"
  },
  {
    "name": "octopus",
    "unicode": {"apple":"1F419", "google":"1F419", "twitter":"1F419"},
    "shortcode": "octopus",
    "description": "OCTOPUS",
    "category": "animal"
  },
  {
    "name": "monkey_face",
    "unicode": {"apple":"1F435", "google":"1F435", "twitter":"1F435"},
    "shortcode": "monkey_face",
    "description": "MONKEY FACE",
    "category": "animal"
  },
  {
    "name": "see_no_evil",
    "unicode": {"apple":"1F648", "google":"1F648", "twitter":"1F648"},
    "shortcode": "see_no_evil",
    "description": "SEE-NO-EVIL MONKEY",
    "category": "nature"
  },
  {
    "name": "hear_no_evil",
    "unicode": {"apple":"1F649", "google":"1F649", "twitter":"1F649"},
    "shortcode": "hear_no_evil",
    "description": "HEAR-NO-EVIL MONKEY",
    "category": "nature"
  },
  {
    "name": "speak_no_evil",
    "unicode": {"apple":"1F64A", "google":"1F64A", "twitter":"1F64A"},
    "shortcode": "speak_no_evil",
    "description": "SPEAK-NO-EVIL MONKEY",
    "category": "nature"
  },
  {
    "name": "monkey",
    "unicode": {"apple":"1F412", "google":"1F412", "twitter":"1F412"},
    "shortcode": "monkey",
    "description": "MONKEY",
    "category": "animal"
  },
  {
    "name": "chicken",
    "unicode": {"apple":"1F414", "google":"1F414", "twitter":"1F414"},
    "shortcode": "chicken",
    "description": "CHICKEN",
    "category": "animal"
  },
  {
    "name": "penguin",
    "unicode": {"apple":"1F427", "google":"1F427", "twitter":"1F427"},
    "shortcode": "penguin",
    "description": "PENGUIN",
    "category": "animal"
  },
  {
    "name": "bird",
    "unicode": {"apple":"1F426", "google":"1F426", "twitter":"1F426"},
    "shortcode": "bird",
    "description": "BIRD",
    "category": "animal"
  },
  {
    "name": "baby_chick",
    "unicode": {"apple":"1F424", "google":"1F424", "twitter":"1F424"},
    "shortcode": "baby_chick",
    "description": "BABY CHICK",
    "category": "animal"
  },
  {
    "name": "hatching_chick",
    "unicode": {"apple":"1F423", "google":"1F423", "twitter":"1F423"},
    "shortcode": "hatching_chick",
    "description": "HATCHING CHICK",
    "category": "animal"
  },
  {
    "name": "hatched_chick",
    "unicode": {"apple":"1F425", "google":"1F425", "twitter":"1F425"},
    "shortcode": "hatched_chick",
    "description": "FRONT-FACING BABY CHICK",
    "category": "animal"
  },
  {
    "name": "wolf",
    "unicode": {"apple":"1F43A", "google":"1F43A", "twitter":"1F43A"},
    "shortcode": "wolf",
    "description": "WOLF FACE",
    "category": "animal"
  },
  {
    "name": "boar",
    "unicode": {"apple":"1F417", "google":"1F417", "twitter":"1F417"},
    "shortcode": "boar",
    "description": "BOAR",
    "category": "animal"
  },
  {
    "name": "horse",
    "unicode": {"apple":"1F434", "google":"1F434", "twitter":"1F434"},
    "shortcode": "horse",
    "description": "HORSE FACE",
    "category": "animal"
  },
  {
    "name": "unicorn",
    "unicode": {"apple":"1F984", "google":"1F984", "twitter":"1F984"},
    "shortcode": "unicorn",
    "description": "Unicorn Face",
    "category": "animal"
  },
  {
    "name": "bee",
    "unicode": {"apple":"1F41D", "google":"1F41D", "twitter":"1F41D"},
    "shortcode": "bee",
    "description": "HONEYBEE",
    "category": "animal"
  },
  {
    "name": "bug",
    "unicode": {"apple":"1F41B", "google":"1F41B", "twitter":"1F41B"},
    "shortcode": "bug",
    "description": "BUG",
    "category": "animal"
  },
  {
    "name": "snail",
    "unicode": {"apple":"1F40C", "google":"1F40C", "twitter":"1F40C"},
    "shortcode": "snail",
    "description": "SNAIL",
    "category": "animal"
  },
  {
    "name": "beetle",
    "unicode": {"apple":"1F41E", "google":"1F41E", "twitter":"1F41E"},
    "shortcode": "beetle",
    "description": "LADY BEETLE",
    "category": "animal"
  },
  {
    "name": "ant",
    "unicode": {"apple":"1F41C", "google":"1F41C", "twitter":"1F41C"},
    "shortcode": "ant",
    "description": "ANT",
    "category": "animal"
  },
  {
    "name": "spider",
    "unicode": {"apple":"1F577", "google":"1F577", "twitter":"1F577"},
    "shortcode": "spider",
    "description": "Spider",
    "category": "animal"
  },
  {
    "name": "scorpion",
    "unicode": {"apple":"1F982", "google":"1F982", "twitter":"1F982"},
    "shortcode": "scorpion",
    "description": "Scorpion",
    "category": "animal"
  },
  {
    "name": "crab",
    "unicode": {"apple":"1F980", "google":"1F980", "twitter":"1F980"},
    "shortcode": "crab",
    "description": "Crab",
    "category": "animal"
  },
  {
    "name": "snake",
    "unicode": {"apple":"1F40D", "google":"1F40D", "twitter":"1F40D"},
    "shortcode": "snake",
    "description": "SNAKE",
    "category": "animal"
  },
  {
    "name": "turtle",
    "unicode": {"apple":"1F422", "google":"1F422", "twitter":"1F422"},
    "shortcode": "turtle",
    "description": "TURTLE",
    "category": "animal"
  },
  {
    "name": "tropical_fish",
    "unicode": {"apple":"1F420", "google":"1F420", "twitter":"1F420"},
    "shortcode": "tropical_fish",
    "description": "TROPICAL FISH",
    "category": "animal"
  },
  {
    "name": "fish",
    "unicode": {"apple":"1F41F", "google":"1F41F", "twitter":"1F41F"},
    "shortcode": "fish",
    "description": "FISH",
    "category": "animal"
  },

  {
    "name": "blowfish",
    "unicode": {"apple":"1F421", "google":"1F421", "twitter":"1F421"},
    "shortcode": "blowfish",
    "description": "BLOWFISH",
    "category": "animal"
  },
  {
    "name": "dolphin",
    "unicode": {"apple":"1F42C", "google":"1F42C", "twitter":"1F42C"},
    "shortcode": "dolphin",
    "description": "DOLPHIN",
    "category": "animal"
  },
  {
    "name": "whale",
    "unicode": {"apple":"1F433", "google":"1F433", "twitter":"1F433"},
    "shortcode": "whale",
    "description": "SPOUTING WHALE",
    "category": "animal"
  },
  {
    "name": "whale2",
    "unicode": {"apple":"1F40B", "google":"1F40B", "twitter":"1F40B"},
    "shortcode": "whale2",
    "description": "WHALE",
    "category": "animal"
  },
  {
    "name": "crocodile",
    "unicode": {"apple":"1F40A", "google":"1F40A", "twitter":"1F40A"},
    "shortcode": "crocodile",
    "description": "CROCODILE",
    "category": "animal"
  },
  {
    "name": "leopard",
    "unicode": {"apple":"1F406", "google":"1F406", "twitter":"1F406"},
    "shortcode": "leopard",
    "description": "LEOPARD",
    "category": "animal"
  },
  {
    "name": "tiger2",
    "unicode": {"apple":"1F405", "google":"1F405", "twitter":"1F405"},
    "shortcode": "tiger2",
    "description": "TIGER",
    "category": "animal"
  },
  {
    "name": "water_buffalo",
    "unicode": {"apple":"1F403", "google":"1F403", "twitter":"1F403"},
    "shortcode": "water_buffalo",
    "description": "WATER BUFFALO",
    "category": "animal"
  },
  {
    "name": "ox",
    "unicode": {"apple":"1F402", "google":"1F402", "twitter":"1F402"},
    "shortcode": "ox",
    "description": "OX",
    "category": "animal"
  },
  {
    "name": "cow2",
    "unicode": {"apple":"1F404", "google":"1F404", "twitter":"1F404"},
    "shortcode": "cow2",
    "description": "COW",
    "category": "animal"
  },
  {
    "name": "dromedary_camel",
    "unicode": {"apple":"1F42A", "google":"1F42A", "twitter":"1F42A"},
    "shortcode": "dromedary_camel",
    "description": "DROMEDARY CAMEL",
    "category": "animal"
  },
  {
    "name": "camel",
    "unicode": {"apple":"1F42B", "google":"1F42B", "twitter":"1F42B"},
    "shortcode": "camel",
    "description": "BACTRIAN CAMEL",
    "category": "animal"
  },
  {
    "name": "elephant",
    "unicode": {"apple":"1F418", "google":"1F418", "twitter":"1F418"},
    "shortcode": "elephant",
    "description": "ELEPHANT",
    "category": "animal"
  },
  {
    "name": "goat",
    "unicode": {"apple":"1F410", "google":"1F410", "twitter":"1F410"},
    "shortcode": "goat",
    "description": "GOAT",
    "category": "animal"
  },
  {
    "name": "ram",
    "unicode": {"apple":"1F40F", "google":"1F40F", "twitter":"1F40F"},
    "shortcode": "ram",
    "description": "RAM",
    "category": "animal"
  },
  {
    "name": "sheep",
    "unicode": {"apple":"1F411", "google":"1F411", "twitter":"1F411"},
    "shortcode": "sheep",
    "description": "SHEEP",
    "category": "animal"
  },
  {
    "name": "racehorse",
    "unicode": {"apple":"1F40E", "google":"1F40E", "twitter":"1F40E"},
    "shortcode": "racehorse",
    "description": "HORSE",
    "category": "animal"
  },
  {
    "name": "pig2",
    "unicode": {"apple":"1F416", "google":"1F416", "twitter":"1F416"},
    "shortcode": "pig2",
    "description": "PIG",
    "category": "animal"
  },
  {
    "name": "rat",
    "unicode": {"apple":"1F400", "google":"1F400", "twitter":"1F400"},
    "shortcode": "rat",
    "description": "RAT",
    "category": "animal"
  },
  {
    "name": "mouse2",
    "unicode": {"apple":"1F401", "google":"1F401", "twitter":"1F401"},
    "shortcode": "mouse2",
    "description": "MOUSE",
    "category": "animal"
  },
  {
    "name": "rooster",
    "unicode": {"apple":"1F413", "google":"1F413", "twitter":"1F413"},
    "shortcode": "rooster",
    "description": "ROOSTER",
    "category": "animal"
  },
  {
    "name": "turkey",
    "unicode": {"apple":"1F983", "google":"1F983", "twitter":"1F983"},
    "shortcode": "turkey",
    "description": "Turkey",
    "category": "animal"
  },
  {
    "name": "dove_of_peace",
    "unicode": {"apple":"1F54A", "google":"1F54A", "twitter":"1F54A"},
    "shortcode": "dove_of_peace",
    "description": "Dove Of Peace",
    "category": "animal"
  },
  {
    "name": "dog2",
    "unicode": {"apple":"1F415", "google":"1F415", "twitter":"1F415"},
    "shortcode": "dog2",
    "description": "DOG",
    "category": "animal"
  },
  {
    "name": "poodle",
    "unicode": {"apple":"1F429", "google":"1F429", "twitter":"1F429"},
    "shortcode": "poodle",
    "description": "POODLE",
    "category": "animal"
  },
  {
    "name": "cat2",
    "unicode": {"apple":"1F408", "google":"1F408", "twitter":"1F408"},
    "shortcode": "cat2",
    "description": "CAT",
    "category": "animal"
  },
  {
    "name": "rabbit2",
    "unicode": {"apple":"1F407", "google":"1F407", "twitter":"1F407"},
    "shortcode": "rabbit2",
    "description": "RABBIT",
    "category": "animal"
  },
  {
    "name": "chipmunk",
    "unicode": {"apple":"1F43F", "google":"1F43F", "twitter":"1F43F"},
    "shortcode": "chipmunk",
    "description": "Chipmunk",
    "category": "animal"
  },
  {
    "name": "feet",
    "unicode": {"apple":"1F43E", "google":"1F43E", "twitter":"1F43E"},
    "shortcode": "feet",
    "description": "PAW PRINTS",
    "category": "animal"
  },
  {
    "name": "dragon",
    "unicode": {"apple":"1F409", "google":"1F409", "twitter":"1F409"},
    "shortcode": "dragon",
    "description": "DRAGON",
    "category": "animal"
  },
  {
    "name": "dragon_face",
    "unicode": {"apple":"1F432", "google":"1F432", "twitter":"1F432"},
    "shortcode": "dragon_face",
    "description": "DRAGON FACE",
    "category": "animal"
  },
  {
    "name": "cactus",
    "unicode": {"apple":"1F335", "google":"1F335", "twitter":"1F335"},
    "shortcode": "cactus",
    "description": "CACTUS",
    "category": "animal"
  },
  {
    "name": "christmas_tree",
    "unicode": {"apple":"1F384", "google":"1F384", "twitter":"1F384"},
    "shortcode": "christmas_tree",
    "description": "CHRISTMAS TREE",
    "category": "nature"
  },
  {
    "name": "evergreen_tree",
    "unicode": {"apple":"1F332", "google":"1F332", "twitter":"1F332"},
    "shortcode": "evergreen_tree",
    "description": "EVERGREEN TREE",
    "category": "nature"
  },
  {
    "name": "deciduous_tree",
    "unicode": {"apple":"1F333", "google":"1F333", "twitter":"1F333"},
    "shortcode": "deciduous_tree",
    "description": "DECIDUOUS TREE",
    "category": "nature"
  },
  {
    "name": "palm_tree",
    "unicode": {"apple":"1F334", "google":"1F334", "twitter":"1F334"},
    "shortcode": "palm_tree",
    "description": "PALM TREE",
    "category": "nature"
  },
  {
    "name": "seedling",
    "unicode": {"apple":"1F331", "google":"1F331", "twitter":"1F331"},
    "shortcode": "seedling",
    "description": "SEEDLING",
    "category": "nature"
  },
  {
    "name": "herb",
    "unicode": {"apple":"1F33F", "google":"1F33F", "twitter":"1F33F"},
    "shortcode": "herb",
    "description": "HERB",
    "category": "nature"
  },
  {
    "name": "shamrock",
    "unicode": {"apple":"2618", "google":"2618", "twitter":"2618"},
    "shortcode": "shamrock",
    "description": "Shamrock",
    "category": "nature"
  },
  {
    "name": "four_leaf_clover",
    "unicode": {"apple":"1F340", "google":"1F340", "twitter":"1F340"},
    "shortcode": "four_leaf_clover",
    "description": "FOUR LEAF CLOVER",
    "category": "nature"
  },
  {
    "name": "bamboo",
    "unicode": {"apple":"1F38D", "google":"1F38D", "twitter":"1F38D"},
    "shortcode": "bamboo",
    "description": "PINE DECORATION",
    "category": "nature"
  },
  {
    "name": "tanabata_tree",
    "unicode": {"apple":"1F38B", "google":"1F38B", "twitter":"1F38B"},
    "shortcode": "tanabata_tree",
    "description": "TANABATA TREE",
    "category": "nature"
  },
  {
    "name": "leaves",
    "unicode": {"apple":"1F343", "google":"1F343", "twitter":"1F343"},
    "shortcode": "leaves",
    "description": "LEAF FLUTTERING IN WIND",
    "category": "nature"
  },
  {
    "name": "fallen_leaf",
    "unicode": {"apple":"1F342", "google":"1F342", "twitter":"1F342"},
    "shortcode": "fallen_leaf",
    "description": "FALLEN LEAF",
    "category": "nature"
  },
  {
    "name": "maple_leaf",
    "unicode": {"apple":"1F341", "google":"1F341", "twitter":"1F341"},
    "shortcode": "maple_leaf",
    "description": "MAPLE LEAF",
    "category": "nature"
  },
  {
    "name": "ear_of_rice",
    "unicode": {"apple":"1F33E", "google":"1F33E", "twitter":"1F33E"},
    "shortcode": "ear_of_rice",
    "description": "EAR OF RICE",
    "category": "nature"
  },
  {
    "name": "hibiscus",
    "unicode": {"apple":"1F33A", "google":"1F33A", "twitter":"1F33A"},
    "shortcode": "hibiscus",
    "description": "HIBISCUS",
    "category": "nature"
  },
  {
    "name": "sunflower",
    "unicode": {"apple":"1F33B", "google":"1F33B", "twitter":"1F33B"},
    "shortcode": "sunflower",
    "description": "SUNFLOWER",
    "category": "nature"
  },
  {
    "name": "rose",
    "unicode": {"apple":"1F339", "google":"1F339", "twitter":"1F339"},
    "shortcode": "rose",
    "description": "ROSE",
    "category": "nature"
  },
  {
    "name": "tulip",
    "unicode": {"apple":"1F337", "google":"1F337", "twitter":"1F337"},
    "shortcode": "tulip",
    "description": "TULIP",
    "category": "nature"
  },
  {
    "name": "blossom",
    "unicode": {"apple":"1F33C", "google":"1F33C", "twitter":"1F33C"},
    "shortcode": "blossom",
    "description": "BLOSSOM",
    "category": "nature"
  },
  {
    "name": "cherry_blossom",
    "unicode": {"apple":"1F338", "google":"1F338", "twitter":"1F338"},
    "shortcode": "cherry_blossom",
    "description": "CHERRY BLOSSOM",
    "category": "nature"
  },
  {
    "name": "bouquet",
    "unicode": {"apple":"1F490", "google":"1F490", "twitter":"1F490"},
    "shortcode": "bouquet",
    "description": "BOUQUET",
    "category": "nature"
  },
  {
    "name": "mushroom",
    "unicode": {"apple":"1F344", "google":"1F344", "twitter":"1F344"},
    "shortcode": "mushroom",
    "description": "MUSHROOM",
    "category": "nature"
  },
  {
    "name": "chestnut",
    "unicode": {"apple":"1F330", "google":"1F330", "twitter":"1F330"},
    "shortcode": "chestnut",
    "description": "CHESTNUT",
    "category": "nature"
  },
  {
    "name": "jack_o_lantern",
    "unicode": {"apple":"1F383", "google":"1F383", "twitter":"1F383"},
    "shortcode": "jack_o_lantern",
    "description": "JACK-O-LANTERN",
    "category": "nature"
  },
  {
    "name": "shell",
    "unicode": {"apple":"1F41A", "google":"1F41A", "twitter":"1F41A"},
    "shortcode": "shell",
    "description": "SPIRAL SHELL",
    "category": "nature"
  },
  {
    "name": "spider_web",
    "unicode": {"apple":"1F578", "google":"1F578", "twitter":"1F578"},
    "shortcode": "spider_web",
    "description": "Spider Web",
    "category": "nature"
  },
  {
    "name": "earth_americas",
    "unicode": {"apple":"1F30E", "google":"1F30E", "twitter":"1F30E"},
    "shortcode": "earth_americas",
    "description": "EARTH GLOBE AMERICAS",
    "category": "nature"
  },
  {
    "name": "earth_africa",
    "unicode": {"apple":"1F30D", "google":"1F30D", "twitter":"1F30D"},
    "shortcode": "earth_africa",
    "description": "EARTH GLOBE EUROPE-AFRICA",
    "category": "nature"
  },
  {
    "name": "earth_asia",
    "unicode": {"apple":"1F30F", "google":"1F30F", "twitter":"1F30F"},
    "shortcode": "earth_asia",
    "description": "EARTH GLOBE ASIA-AUSTRALIA",
    "category": "nature"
  },
  {
    "name": "full_moon",
    "unicode": {"apple":"1F315", "google":"1F315", "twitter":"1F315"},
    "shortcode": "full_moon",
    "description": "FULL MOON SYMBOL",
    "category": "nature"
  },
  {
    "name": "waning_gibbous_moon",
    "unicode": {"apple":"1F316", "google":"1F316", "twitter":"1F316"},
    "shortcode": "waning_gibbous_moon",
    "description": "WANING GIBBOUS MOON SYMBOL",
    "category": "nature"
  },
  {
    "name": "last_quarter_moon",
    "unicode": {"apple":"1F317", "google":"1F317", "twitter":"1F317"},
    "shortcode": "last_quarter_moon",
    "description": "LAST QUARTER MOON SYMBOL",
    "category": "nature"
  },
  {
    "name": "waning_crescent_moon",
    "unicode": {"apple":"1F318", "google":"1F318", "twitter":"1F318"},
    "shortcode": "waning_crescent_moon",
    "description": "WANING CRESCENT MOON SYMBOL",
    "category": "nature"
  },
 {
    "name": "new_moon",
    "unicode": {"apple":"1F311", "google":"1F311", "twitter":"1F311"},
    "shortcode": "new_moon",
    "description": "NEW MOON SYMBOL",
    "category": "nature"
  },
  {
    "name": "waxing_crescent_moon",
    "unicode": {"apple":"1F312", "google":"1F312", "twitter":"1F312"},
    "shortcode": "waxing_crescent_moon",
    "description": "WAXING CRESCENT MOON SYMBOL",
    "category": "nature"
  },
  {
    "name": "first_quarter_moon",
    "unicode": {"apple":"1F313", "google":"1F313", "twitter":"1F313"},
    "shortcode": "first_quarter_moon",
    "description": "FIRST QUARTER MOON SYMBOL",
    "category": "nature"
  },
  {
    "name": "moon",
    "unicode": {"apple":"1F314", "google":"1F314", "twitter":"1F314"},
    "shortcode": "moon",
    "description": "WAXING GIBBOUS MOON SYMBOL",
    "category": "nature"
  },
  {
    "name": "new_moon_with_face",
    "unicode": {"apple":"", "google":"1F31A", "twitter":"1F31A"},
    "shortcode": "new_moon_with_face",
    "description": "NEW MOON WITH FACE",
    "category": "nature"
  },
  {
    "name": "first_quarter_moon_with_face",
    "unicode": {"apple":"1F31B", "google":"1F31B", "twitter":"1F31B"},
    "shortcode": "first_quarter_moon_with_face",
    "description": "FIRST QUARTER MOON WITH FACE",
    "category": "nature"
  },
  {
    "name": "last_quarter_moon_with_face",
    "unicode": {"apple":"1F31C", "google":"1F31C", "twitter":"1F31C"},
    "shortcode": "last_quarter_moon_with_face",
    "description": "LAST QUARTER MOON WITH FACE",
    "category": "nature"
  },
  {
    "name": "full_moon_with_face",
    "unicode": {"apple":"1F31D", "google":"1F31D", "twitter":"1F31D"},
    "shortcode": "full_moon_with_face",
    "description": "FULL MOON WITH FACE",
    "category": "nature"
  },
  {
    "name": "crescent_moon",
    "unicode": {"apple":"1F319", "google":"1F319", "twitter":"1F319"},
    "shortcode": "crescent_moon",
    "description": "CRESCENT MOON",
    "category": "nature"
  },

  {
    "name": "sun_with_face",
    "unicode": {"apple":"1F31E", "google":"1F31E", "twitter":"1F31E"},
    "shortcode": "sun_with_face",
    "description": "SUN WITH FACE",
    "category": "nature"
  },
  {
    "name": "star",
    "unicode": {"apple":"2B50", "google":"2B50", "twitter":"2B50"},
    "shortcode": "star",
    "description": "WHITE MEDIUM STAR",
    "category": "nature"
  },
  {
    "name": "star2",
    "unicode": {"apple":"1F31F", "google":"1F31F", "twitter":"1F31F"},
    "shortcode": "star2",
    "description": "GLOWING STAR",
    "category": "nature"
  },
  {
    "name": "dizzy",
    "unicode": {"apple":"1F4AB", "google":"1F4AB", "twitter":"1F4AB"},
    "shortcode": "dizzy",
    "description": "DIZZY SYMBOL",
    "category": "nature"
  },
  {
    "name": "sparkles",
    "unicode": {"apple":"2728", "google":"2728", "twitter":"2728"},
    "shortcode": "sparkles",
    "description": "SPARKLES",
    "category": "nature"
  },
  {
    "name": "comet",
    "unicode": {"apple":"2604", "google":"2604", "twitter":"2604"},
    "shortcode": "comet",
    "description": "Comet",
    "category": "nature"
  },
  {
    "name": "sunny",
    "unicode": {"apple":"2600", "google":"2600", "twitter":"2600"},
    "shortcode": "sunny",
    "description": "BLACK SUN WITH RAYS",
    "category": "nature"
  },
  {
    "name": "mostly_sunny",
    "unicode": {"apple":"1F324", "google":"1F324", "twitter":"1F324"},
    "shortcode": "mostly_sunny",
    "description": "White Sun With Small Cloud",
    "category": "nature"
  },
  {
    "name": "partly_sunny",
    "unicode": {"apple":"26C5", "google":"26C5", "twitter":"26C5"},
    "shortcode": "partly_sunny",
    "description": "SUN BEHIND CLOUD",
    "category": "nature"
  },
  {
    "name": "barely_sunny",
    "unicode": {"apple":"1F325", "google":"1F325", "twitter":"1F325"},
    "shortcode": "barely_sunny",
    "description": "White Sun Behind Cloud",
    "category": "nature"
  },
  {
    "name": "partly_sunny_rain",
    "unicode": {"apple":"1F326", "google":"1F326", "twitter":"1F326"},
    "shortcode": "partly_sunny_rain",
    "description": "White Sun Behind Cloud With Rain",
    "category": "nature"
  },
  {
    "name": "cloud",
    "unicode": {"apple":"2601", "google":"2601", "twitter":"2601"},
    "shortcode": "cloud",
    "description": "CLOUD",
    "category": "nature"
  },
  {
    "name": "rain_cloud",
    "unicode": {"apple":"1F327", "google":"1F327", "twitter":"1F327"},
    "shortcode": "rain_cloud",
    "description": "Cloud With Rain",
    "category": "nature"
  },
  {
    "name": "thunder_cloud_and_rain",
    "unicode": {"apple":"26C8", "google":"26C8", "twitter":"26C8"},
    "shortcode": "thunder_cloud_and_rain",
    "description": "Thunder Cloud and Rain",
    "category": "nature"
  },
  {
    "name": "lightning",
    "unicode": {"apple":"1F329", "google":"1F329", "twitter":"1F329"},
    "shortcode": "lightning",
    "description": "Cloud With Lightning",
    "category": "nature"
  },
  {
    "name": "zap",
    "unicode": {"apple":"26A1", "google":"26A1", "twitter":"26A1"},
    "shortcode": "zap",
    "description": "HIGH VOLTAGE SIGN",
    "category": "nature"
  },
  {
    "name": "fire",
    "unicode": {"apple":"1F525", "google":"1F525", "twitter":"1F525"},
    "shortcode": "fire",
    "description": "FIRE",
    "category": "nature"
  },
  {
    "name": "boom",
    "unicode": {"apple":"1F4A5", "google":"1F4A5", "twitter":"1F4A5"},
    "shortcode": "boom",
    "description": "COLLISION SYMBOL",
    "category": "nature"
  },
  {
    "name": "snowflake",
    "unicode": {"apple":"2744", "google":"2744", "twitter":"2744"},
    "shortcode": "snowflake",
    "description": "SNOWFLAKE",
    "category": "nature"
  },
  {
    "name": "snow_cloud",
    "unicode": {"apple":"1F328", "google":"1F328", "twitter":"1F328"},
    "shortcode": "snow_cloud",
    "description": "Cloud With Snow",
    "category": "nature"
  },
  {
    "name": "snowman",
    "unicode": {"apple":"26C4", "google":"26C4", "twitter":"26C4"},
    "shortcode": "snowman",
    "description": "SNOWMAN WITHOUT SNOW",
    "category": "nature"
  },
  {
    "name": "wind_blowing_face",
    "unicode": {"apple":"1F32C", "google":"1F32C", "twitter":"1F32C"},
    "shortcode": "wind_blowing_face",
    "description": "Wind Blowing Face",
    "category": "nature"
  },
  {
    "name": "dash",
    "unicode": {"apple":"1F4A8", "google":"1F4A8", "twitter":"1F4A8"},
    "shortcode": "dash",
    "description": "DASH SYMBOL",
    "category": "nature"
  },
  {
    "name": "tornado",
    "unicode": {"apple":"1F32A", "google":"1F32A", "twitter":"1F32A"},
    "shortcode": "tornado",
    "description": "Cloud With Tornado",
    "category": "nature"
  },
  {
    "name": "fog",
    "unicode": {"apple":"1F32B", "google":"1F32B", "twitter":"1F32B"},
    "shortcode": "fog",
    "description": "Fog",
    "category": "nature"
  },
  {
    "name": "umbrella",
    "unicode": {"apple":"2614", "google":"2614", "twitter":"2614"},
    "shortcode": "umbrella",
    "description": "UMBRELLA WITH RAIN DROPS",
    "category": "nature"
  },
  {
    "name": "droplet",
    "unicode": {"apple":"1F4A7", "google":"1F4A7", "twitter":"1F4A7"},
    "shortcode": "droplet",
    "description": "DROPLET",
    "category": "nature"
  },
  {
    "name": "sweat_drops",
    "unicode": {"apple":"1F4A6", "google":"1F4A6", "twitter":"1F4A6"},
    "shortcode": "sweat_drops",
    "description": "SPLASHING SWEAT SYMBOL",
    "category": "nature"
  },
  {
    "name": "ocean",
    "unicode": {"apple":"1F30A", "google":"1F30A", "twitter":"1F30A"},
    "shortcode": "ocean",
    "description": "WATER WAVE",
    "category": "nature"
  },
  {
    "name": "green_apple",
    "unicode": {"apple":"1F34F", "google":"1F34F", "twitter":"1F34F"},
    "shortcode": "green_apple",
    "description": "GREEN APPLE",
    "category": "food"
  },
  {
    "name": "apple",
    "unicode": {"apple":"1F34E", "google":"1F34E", "twitter":"1F34E"},
    "shortcode": "apple",
    "description": "RED APPLE",
    "category": "food"
  },
  {
    "name": "pear",
    "unicode": {"apple":"1F350", "google":"1F350", "twitter":"1F350"},
    "shortcode": "pear",
    "description": "PEAR",
    "category": "food"
  },
  {
    "name": "tangerine",
    "unicode": {"apple":"1F34A", "google":"1F34A", "twitter":"1F34A"},
    "shortcode": "tangerine",
    "description": "TANGERINE",
    "category": "food"
  },
  {
    "name": "lemon",
    "unicode": {"apple":"1F34B", "google":"1F34B", "twitter":"1F34B"},
    "shortcode": "lemon",
    "description": "LEMON",
    "category": "food"
  },
  {
    "name": "banana",
    "unicode": {"apple":"1F34C", "google":"1F34C", "twitter":"1F34C"},
    "shortcode": "banana",
    "description": "BANANA",
    "category": "food"
  },
  {
    "name": "watermelon",
    "unicode": {"apple":"1F349", "google":"1F349", "twitter":"1F349"},
    "shortcode": "watermelon",
    "description": "WATERMELON",
    "category": "food"
  },
  {
    "name": "grapes",
    "unicode": {"apple":"1F347", "google":"1F347", "twitter":"1F347"},
    "shortcode": "grapes",
    "description": "GRAPES",
    "category": "food"
  },
  {
    "name": "strawberry",
    "unicode": {"apple":"1F353", "google":"1F353", "twitter":"1F353"},
    "shortcode": "strawberry",
    "description": "STRAWBERRY",
    "category": "food"
  },
  {
    "name": "melon",
    "unicode": {"apple":"1F348", "google":"1F348", "twitter":"1F348"},
    "shortcode": "melon",
    "description": "MELON",
    "category": "food"
  },
  {
    "name": "cherries",
    "unicode": {"apple":"1F352", "google":"1F352", "twitter":"1F352"},
    "shortcode": "cherries",
    "description": "CHERRIES",
    "category": "food"
  },
  {
    "name": "peach",
    "unicode": {"apple":"1F351", "google":"1F351", "twitter":"1F351"},
    "shortcode": "peach",
    "description": "PEACH",
    "category": "food"
  },
  {
    "name": "pineapple",
    "unicode": {"apple":"1F34D", "google":"1F34D", "twitter":"1F34D"},
    "shortcode": "pineapple",
    "description": "PINEAPPLE",
    "category": "food"
  },
  {
    "name": "tomato",
    "unicode": {"apple":"1F345", "google":"1F345", "twitter":"1F345"},
    "shortcode": "tomato",
    "description": "TOMATO",
    "category": "food"
  },
  {
    "name": "eggplant",
    "unicode": {"apple":"1F346", "google":"1F346", "twitter":"1F346"},
    "shortcode": "eggplant",
    "description": "AUBERGINE",
    "category": "food"
  },
  {
    "name": "hot_pepper",
    "unicode": {"apple":"1F336", "google":"1F336", "twitter":"1F336"},
    "shortcode": "hot_pepper",
    "description": "Hot Pepper",
    "category": "food"
  },
  {
    "name": "corn",
    "unicode": {"apple":"1F33D", "google":"1F33D", "twitter":"1F33D"},
    "shortcode": "corn",
    "description": "EAR OF MAIZE",
    "category": "thing"
  },
  {
    "name": "sweet_potato",
    "unicode": {"apple":"1F360", "google":"1F360", "twitter":"1F360"},
    "shortcode": "sweet_potato",
    "description": "ROASTED SWEET POTATO",
    "category": "food"
  },
  {
    "name": "honey_pot",
    "unicode": {"apple":"1F36F", "google":"1F36F", "twitter":"1F36F"},
    "shortcode": "honey_pot",
    "description": "HONEY POT",
    "category": "food"
  },
  {
    "name": "bread",
    "unicode": {"apple":"1F35E", "google":"1F35E", "twitter":"1F35E"},
    "shortcode": "bread",
    "description": "BREAD",
    "category": "food"
  },
  {
    "name": "cheese_wedge",
    "unicode": {"apple":"1F9C0", "google":"1F9C0", "twitter":"1F9C0"},
    "shortcode": "cheese_wedge",
    "description": "Cheese Wedge",
    "category": "food"
  },
  {
    "name": "poultry_leg",
    "unicode": {"apple":"1F357", "google":"1F357", "twitter":"1F357"},
    "shortcode": "poultry_leg",
    "description": "POULTRY LEG",
    "category": "food"
  },
  {
    "name": "meat_on_bone",
    "unicode": {"apple":"1F356", "google":"1F356", "twitter":"1F356"},
    "shortcode": "meat_on_bone",
    "description": "MEAT ON BONE",
    "category": "food"
  },
  {
    "name": "fried_shrimp",
    "unicode": {"apple":"1F364", "google":"1F364", "twitter":"1F364"},
    "shortcode": "fried_shrimp",
    "description": "FRIED SHRIMP",
    "category": "food"
  },
  {
    "name": "egg",
    "unicode": {"apple":"1F373", "google":"1F373", "twitter":"1F373"},
    "shortcode": "egg",
    "description": "COOKING",
    "category": "food"
  },
  {
    "name": "hamburger",
    "unicode": {"apple":"1F354", "google":"1F354", "twitter":"1F354"},
    "shortcode": "hamburger",
    "description": "HAMBURGER",
    "category": "food"
  },
  {
    "name": "fries",
    "unicode": {"apple":"1F35F", "google":"1F35F", "twitter":"1F35F"},
    "shortcode": "fries",
    "description": "FRENCH FRIES",
    "category": "food"
  },
  {
    "name": "hotdog",
    "unicode": {"apple":"1F32D", "google":"1F32D", "twitter":"1F32D"},
    "shortcode": "hotdog",
    "description": "Hot Dog",
    "category": "food"
  },
  {
    "name": "pizza",
    "unicode": {"apple":"1F355", "google":"1F355", "twitter":"1F355"},
    "shortcode": "pizza",
    "description": "SLICE OF PIZZA",
    "category": "food"
  },
  {
    "name": "spaghetti",
    "unicode": {"apple":"1F35D", "google":"1F35D", "twitter":"1F35D"},
    "shortcode": "spaghetti",
    "description": "SPAGHETTI",
    "category": "food"
  },
  {
    "name": "taco",
    "unicode": {"apple":"1F32E", "google":"1F32E", "twitter":"1F32E"},
    "shortcode": "taco",
    "description": "Taco",
    "category": "food"
  },
  {
    "name": "burrito",
    "unicode": {"apple":"1F32F", "google":"1F32F", "twitter":"1F32F"},
    "shortcode": "burrito",
    "description": "Burrito",
    "category": "food"
  },
  {
    "name": "ramen",
    "unicode": {"apple":"1F35C", "google":"1F35C", "twitter":"1F35C"},
    "shortcode": "ramen",
    "description": "STEAMING BOWL",
    "category": "food"
  },
  {
    "name": "stew",
    "unicode": {"apple":"1F372", "google":"1F372", "twitter":"1F372"},
    "shortcode": "stew",
    "description": "POT OF FOOD",
    "category": "food"
  },
  {
    "name": "fish_cake",
    "unicode": {"apple":"1F365", "google":"1F365", "twitter":"1F365"},
    "shortcode": "fish_cake",
    "description": "FISH CAKE WITH SWIRL DESIGN",
    "category": "food"
  },
  {
    "name": "sushi",
    "unicode": {"apple":"1F363", "google":"1F363", "twitter":"1F363"},
    "shortcode": "sushi",
    "description": "SUSHI",
    "category": "food"
  },
  {
    "name": "bento",
    "unicode": {"apple":"1F371", "google":"1F371", "twitter":"1F371"},
    "shortcode": "bento",
    "description": "BENTO BOX",
    "category": "food"
  },
  {
    "name": "curry",
    "unicode": {"apple":"1F35B", "google":"1F35B", "twitter":"1F35B"},
    "shortcode": "curry",
    "description": "CURRY AND RICE",
    "category": "food"
  },
  {
    "name": "rice_ball",
    "unicode": {"apple":"1F359", "google":"1F359", "twitter":"1F359"},
    "shortcode": "rice_ball",
    "description": "RICE BALL",
    "category": "food"
  },
  {
    "name": "rice",
    "unicode": {"apple":"1F35A", "google":"1F35A", "twitter":"1F35A"},
    "shortcode": "rice",
    "description": "COOKED RICE",
    "category": "food"
  },
  {
    "name": "rice_cracker",
    "unicode": {"apple":"1F358", "google":"1F358", "twitter":"1F358"},
    "shortcode": "rice_cracker",
    "description": "RICE CRACKER",
    "category": "food"
  },
  {
    "name": "oden",
    "unicode": {"apple":"1F362", "google":"1F362", "twitter":"1F362"},
    "shortcode": "oden",
    "description": "ODEN",
    "category": "food"
  },
  {
    "name": "dango",
    "unicode": {"apple":"1F361", "google":"1F361", "twitter":"1F361"},
    "shortcode": "dango",
    "description": "DANGO",
    "category": "food"
  },
  {
    "name": "shaved_ice",
    "unicode": {"apple":"1F367", "google":"1F367", "twitter":"1F367"},
    "shortcode": "shaved_ice",
    "description": "SHAVED ICE",
    "category": "food"
  },
  {
    "name": "ice_cream",
    "unicode": {"apple":"1F368", "google":"1F368", "twitter":"1F368"},
    "shortcode": "ice_cream",
    "description": "ICE CREAM",
    "category": "food"
  },
  {
    "name": "icecream",
    "unicode": {"apple":"1F366", "google":"1F366", "twitter":"1F366"},
    "shortcode": "icecream",
    "description": "SOFT ICE CREAM",
    "category": "food"
  },
  {
    "name": "cake",
    "unicode": {"apple":"1F370", "google":"1F370", "twitter":"1F370"},
    "shortcode": "cake",
    "description": "SHORTCAKE",
    "category": "food"
  },
  {
    "name": "birthday",
    "unicode": {"apple":"1F382", "google":"1F382", "twitter":"1F382"},
    "shortcode": "birthday",
    "description": "BIRTHDAY CAKE",
    "category": "food"
  },
  {
    "name": "custard",
    "unicode": {"apple":"1F36E", "google":"1F36E", "twitter":"1F36E"},
    "shortcode": "custard",
    "description": "CUSTARD",
    "category": "food"
  },
  {
    "name": "candy",
    "unicode": {"apple":"1F36C", "google":"1F36C", "twitter":"1F36C"},
    "shortcode": "candy",
    "description": "CANDY",
    "category": "food"
  },
  {
    "name": "lollipop",
    "unicode": {"apple":"1F36D", "google":"1F36D", "twitter":"1F36D"},
    "shortcode": "lollipop",
    "description": "LOLLIPOP",
    "category": "food"
  },
  {
    "name": "chocolate_bar",
    "unicode": {"apple":"1F36B", "google":"1F36B", "twitter":"1F36B"},
    "shortcode": "chocolate_bar",
    "description": "CHOCOLATE BAR",
    "category": "food"
  },
  {
    "name": "popcorn",
    "unicode": {"apple":"1F37F", "google":"1F37F", "twitter":"1F37F"},
    "shortcode": "popcorn",
    "description": "Popcorn",
    "category": "food"
  },
  {
    "name": "cookie",
    "unicode": {"apple":"1F36A", "google":"1F36A", "twitter":"1F36A"},
    "shortcode": "cookie",
    "description": "COOKIE",
    "category": "food"
  },
  {
    "name": "doughnut",
    "unicode": {"apple":"1F369", "google":"1F369", "twitter":"1F369"},
    "shortcode": "doughnut",
    "description": "DOUGHNUT",
    "category": "food"
  },
  {
    "name": "beer",
    "unicode": {"apple":"1F37A", "google":"1F37A", "twitter":"1F37A"},
    "shortcode": "beer",
    "description": "BEER MUG",
    "category": "food"
  },
  {
    "name": "beers",
    "unicode": {"apple":"1F37B", "google":"1F37B", "twitter":"1F37B"},
    "shortcode": "beers",
    "description": "CLINKING BEER MUGS",
    "category": "food"
  },
  {
    "name": "wine_glass",
    "unicode": {"apple":"1F377", "google":"1F377", "twitter":"1F377"},
    "shortcode": "wine_glass",
    "description": "WINE GLASS",
    "category": "food"
  },
  {
    "name": "cocktail",
    "unicode": {"apple":"1F378", "google":"1F378", "twitter":"1F378"},
    "shortcode": "cocktail",
    "description": "COCKTAIL GLASS",
    "category": "food"
  },
  {
    "name": "champagne",
    "unicode": {"apple":"1F379", "google":"1F379", "twitter":"1F379"},
    "shortcode": "tropical_drink",
    "description": "TROPICAL DRINK",
    "category": "food"
  },
  {
    "name": "champagne",
    "unicode": {"apple":"1F37E", "google":"1F37E", "twitter":"1F37E"},
    "shortcode": "champagne",
    "description": "Bottle With Popping Cork",
    "category": "food"
  },
  {
    "name": "sake",
    "unicode": {"apple":"1F376", "google":"1F376", "twitter":"1F376"},
    "shortcode": "sake",
    "description": "SAKE BOTTLE AND CUP",
    "category": "food"
  },
  {
    "name": "tea",
    "unicode": {"apple":"1F375", "google":"1F375", "twitter":"1F375"},
    "shortcode": "tea",
    "description": "TEACUP WITHOUT HANDLE",
    "category": "food"
  },
  {
    "name": "coffee",
    "unicode": {"apple":"2615", "google":"2615", "twitter":"2615"},
    "shortcode": "coffee",
    "description": "HOT BEVERAGE",
    "category": "food"
  },
  {
    "name": "baby_bottle",
    "unicode": {"apple":"1F37C", "google":"1F37C", "twitter":"1F37C"},
    "shortcode": "baby_bottle",
    "description": "BABY BOTTLE",
    "category": "food"
  },
  {
    "name": "fork_and_knife",
    "unicode": {"apple":"1F374", "google":"1F374", "twitter":"1F374"},
    "shortcode": "fork_and_knife",
    "description": "FORK AND KNIFE",
    "category": "food"
  },
  {
    "name": "knife_fork_plate",
    "unicode": {"apple":"1F37D", "google":"1F37D", "twitter":"1F37D"},
    "shortcode": "knife_fork_plate",
    "description": "Fork and Knife With Plate",
    "category": "food"
  },
  {
    "name": "soccer",
    "unicode": {"apple":"26BD", "google":"26BD", "twitter":"26BD"},
    "shortcode": "soccer",
    "description": "SOCCER BALL",
    "category": "activity"
  },
  {
    "name": "basketball",
    "unicode": {"apple":"1F3C0", "google":"1F3C0", "twitter":"1F3C0"},
    "shortcode": "basketball",
    "description": "BASKETBALL AND HOOP",
    "category": "activity"
  },
  {
    "name": "football",
    "unicode": {"apple":"1F3C8", "google":"1F3C8", "twitter":"1F3C8"},
    "shortcode": "football",
    "description": "AMERICAN FOOTBALL",
    "category": "activity"
  },
  {
    "name": "baseball",
    "unicode": {"apple":"26BE", "google":"26BE", "twitter":"26BE"},
    "shortcode": "baseball",
    "description": "BASEBALL",
    "category": "activity"
  },
  {
    "name": "tennis",
    "unicode": {"apple":"1F3BE", "google":"1F3BE", "twitter":"1F3BE"},
    "shortcode": "tennis",
    "description": "TENNIS RACQUET AND BALL",
    "category": "activity"
  },
  {
    "name": "volleyball",
    "unicode": {"apple":"1F3D0", "google":"1F3D0", "twitter":"1F3D0"},
    "shortcode": "volleyball",
    "description": "Volleyball",
    "category": "activity"
  },
  {
    "name": "rugby_football",
    "unicode": {"apple":"1F3C9", "google":"1F3C9", "twitter":"1F3C9"},
    "shortcode": "rugby_football",
    "description": "RUGBY FOOTBALL",
    "category": "activity"
  },
  {
    "name": "8ball",
    "unicode": {"apple":"1F3B1", "google":"1F3B1", "twitter":"1F3B1"},
    "shortcode": "8ball",
    "description": "BILLIARDS",
    "category": "activity"
  },
  {
    "name": "golf",
    "unicode": {"apple":"26F3", "google":"26F3", "twitter":"26F3"},
    "shortcode": "golf",
    "description": "FLAG IN HOLE",
    "category": "activity"
  },
  {
    "name": "golfer",
    "unicode": {"apple":"1F3CC", "google":"1F3CC", "twitter":"1F3CC"},
    "shortcode": "golfer",
    "description": "Golfer",
    "category": "activity"
  },
  {
    "name": "table_tennis_paddle_and_ball",
    "unicode": {"apple":"1F3D3", "google":"1F3D3", "twitter":"1F3D3"},
    "shortcode": "table_tennis_paddle_and_ball",
    "description": "Table Tennis Paddle and Ball",
    "category": "activity"
  },
  {
    "name": "badminton_racquet_and_shuttlecock",
    "unicode": {"apple":"1F3F8", "google":"1F3F8", "twitter":"1F3F8"},
    "shortcode": "badminton_racquet_and_shuttlecock",
    "description": "Badminton Racquet and Shuttlecock",
    "category": "activity"
  },
  {
    "name": "ice_hockey_stick_and_puck",
    "unicode": {"apple":"1F3D2", "google":"1F3D2", "twitter":"1F3D2"},
    "shortcode": "ice_hockey_stick_and_puck",
    "description": "Ice Hockey Stick and Puck",
    "category": "activity"
  },
  {
    "name": "field_hockey_stick_and_ball",
    "unicode": {"apple":"1F3D1", "google":"1F3D1", "twitter":"1F3D1"},
    "shortcode": "field_hockey_stick_and_ball",
    "description": "Field Hockey Stick and Ball",
    "category": "activity"
  },
  {
    "name": "cricket_bat_and_ball",
    "unicode": {"apple":"1F3CF", "google":"1F3CF", "twitter":"1F3CF"},
    "shortcode": "cricket_bat_and_ball",
    "description": "Cricket Bat and Ball",
    "category": "activity"
  },
  {
    "name": "ski",
    "unicode": {"apple":"1F3BF", "google":"1F3BF", "twitter":"1F3BF"},
    "shortcode": "ski",
    "description": "SKI AND SKI BOOT",
    "category": "activity"
  },
  {
    "name": "skier",
    "unicode": {"apple":"26F7", "google":"26F7", "twitter":"26F7"},
    "shortcode": "skier",
    "description": "Skier",
    "category": "activity"
  },
  {
    "name": "snowboarder",
    "unicode": {"apple":"1F3C2", "google":"1F3C2", "twitter":"1F3C2"},
    "shortcode": "snowboarder",
    "description": "SNOWBOARDER",
    "category": "activity"
  },
  {
    "name": "ice_skate",
    "unicode": {"apple":"26F8", "google":"26F8", "twitter":"26F8"},
    "shortcode": "ice_skate",
    "description": "Ice Skate",
    "category": "activity"
  },
  {
    "name": "bow_and_arrow",
    "unicode": {"apple":"1F3F9", "google":"1F3F9", "twitter":"1F3F9"},
    "shortcode": "bow_and_arrow",
    "description": "Bow and Arrow",
    "category": "activity"
  },
  {
    "name": "fishing_pole_and_fish",
    "unicode": {"apple":"1F3A3", "google":"1F3A3", "twitter":"1F3A3"},
    "shortcode": "fishing_pole_and_fish",
    "description": "FISHING POLE AND FISH",
    "category": "activity"
  },
  {
    "name": "rowboat",
    "unicode": {"apple":"1F6A3", "google":"1F6A3", "twitter":"1F6A3"},
    "shortcode": "rowboat",
    "description": "ROWBOAT",
    "category": "activity"
  },
  {
    "name": "swimmer",
    "unicode": {"apple":"1F3CA", "google":"1F3CA", "twitter":"1F3CA"},
    "shortcode": "swimmer",
    "description": "SWIMMER",
    "category": "activity"
  },
  {
    "name": "surfer",
    "unicode": {"apple":"1F3C4", "google":"1F3C4", "twitter":"1F3C4"},
    "shortcode": "surfer",
    "description": "SURFER",
    "category": "activity"
  },
  {
    "name": "bath",
    "unicode": {"apple":"1F6C0", "google":"1F6C0", "twitter":"1F6C0"},
    "shortcode": "bath",
    "description": "BATH",
    "category": "activity"
  },
  {
    "name": "person_with_ball",
    "unicode": {"apple":"26F9", "google":"26F9", "twitter":"26F9"},
    "shortcode": "person_with_ball",
    "description": "Person With Ball",
    "category": "activity"
  },
  {
    "name": "weight_lifter",
    "unicode": {"apple":"1F3CB", "google":"1F3CB", "twitter":"1F3CB"},
    "shortcode": "weight_lifter",
    "description": "Weight Lifter",
    "category": "activity"
  },
  {
    "name": "bicyclist",
    "unicode": {"apple":"1F6B4", "google":"1F6B4", "twitter":"1F6B4"},
    "shortcode": "bicyclist",
    "description": "BICYCLIST",
    "category": "activity"
  },
  {
    "name": "mountain_bicyclist",
    "unicode": {"apple":"1F6B5", "google":"1F6B5", "twitter":"1F6B5"},
    "shortcode": "mountain_bicyclist",
    "description": "MOUNTAIN BICYCLIST",
    "category": "activity"
  },
  {
    "name": "horse_racing",
    "unicode": {"apple":"1F3C7", "google":"1F3C7", "twitter":"1F3C7"},
    "shortcode": "horse_racing",
    "description": "HORSE RACING",
    "category": "activity"
  },
  {
    "name": "man_in_business_suit_levitating",
    "unicode": {"apple":"1F574", "google":"1F574", "twitter":"1F574"},
    "shortcode": "man_in_business_suit_levitating",
    "description": "Man in Business Suit Levitating",
    "category": "activity"
  },
  {
    "name": "trophy",
    "unicode": {"apple":"1F3C6", "google":"1F3C6", "twitter":"1F3C6"},
    "shortcode": "trophy",
    "description": "TROPHY",
    "category": "activity"
  },
  {
    "name": "running_shirt_with_sash",
    "unicode": {"apple":"1F3BD", "google":"1F3BD", "twitter":"1F3BD"},
    "shortcode": "running_shirt_with_sash",
    "description": "RUNNING SHIRT WITH SASH",
    "category": "activity"
  },
  {
    "name": "sports_medal",
    "unicode": {"apple":"1F3C5", "google":"1F3C5", "twitter":"1F3C5"},
    "shortcode": "sports_medal",
    "description": "Sports Medal",
    "category": "activity"
  },
  {
    "name": "medal",
    "unicode": {"apple":"1F396", "google":"1F396", "twitter":"1F396"},
    "shortcode": "medal",
    "description": "Military Medal",
    "category": "activity"
  },
  {
    "name": "reminder_ribbon",
    "unicode": {"apple":"1F397", "google":"1F397", "twitter":"1F397"},
    "shortcode": "reminder_ribbon",
    "description": "Reminder Ribbon",
    "category": "activity"
  },
  {
    "name": "rosette",
    "unicode": {"apple":"1F3F5", "google":"1F3F5", "twitter":"1F3F5"},
    "shortcode": "rosette",
    "description": "Rosette",
    "category": "activity"
  },
  {
    "name": "ticket",
    "unicode": {"apple":"1F3AB", "google":"1F3AB", "twitter":"1F3AB"},
    "shortcode": "ticket",
    "description": "TICKET",
    "category": "activity"
  },
  {
    "name": "admission_tickets",
    "unicode": {"apple":"1F39F", "google":"1F39F", "twitter":"1F39F"},
    "shortcode": "admission_tickets",
    "description": "Admission Tickets",
    "category": "activity"
  },
  {
    "name": "performing_arts",
    "unicode": {"apple":"1F3AD", "google":"1F3AD", "twitter":"1F3AD"},
    "shortcode": "performing_arts",
    "description": "PERFORMING ARTS",
    "category": "activity"
  },
  {
    "name": "art",
    "unicode": {"apple":"1F3A8", "google":"1F3A8", "twitter":"1F3A8"},
    "shortcode": "art",
    "description": "ARTIST PALETTE",
    "category": "activity"
  },
  {
    "name": "circus_tent",
    "unicode": {"apple":"1F3AA", "google":"1F3AA", "twitter":"1F3AA"},
    "shortcode": "circus_tent",
    "description": "CIRCUS TENT",
    "category": "activity"
  },
  {
    "name": "microphone",
    "unicode": {"apple":"1F3A4", "google":"1F3A4", "twitter":"1F3A4"},
    "shortcode": "microphone",
    "description": "MICROPHONE",
    "category": "activity"
  },
  {
    "name": "headphones",
    "unicode": {"apple":"1F3A7", "google":"1F3A7", "twitter":"1F3A7"},
    "shortcode": "headphones",
    "description": "HEADPHONE",
    "category": "activity"
  },
  {
    "name": "musical_score",
    "unicode": {"apple":"1F3BC", "google":"1F3BC", "twitter":"1F3BC"},
    "shortcode": "musical_score",
    "description": "MUSICAL SCORE",
    "category": "activity"
  },
  {
    "name": "musical_keyboard",
    "unicode": {"apple":"1F3B9", "google":"1F3B9", "twitter":"1F3B9"},
    "shortcode": "musical_keyboard",
    "description": "MUSICAL KEYBOARD",
    "category": "activity"
  },
  {
    "name": "saxophone",
    "unicode": {"apple":"1F3B7", "google":"1F3B7", "twitter":"1F3B7"},
    "shortcode": "saxophone",
    "description": "SAXOPHONE",
    "category": "activity"
  },
  {
    "name": "trumpet",
    "unicode": {"apple":"1F3BA", "google":"1F3BA", "twitter":"1F3BA"},
    "shortcode": "trumpet",
    "description": "TRUMPET",
    "category": "activity"
  },
  {
    "name": "guitar",
    "unicode": {"apple":"1F3B8", "google":"1F3B8", "twitter":"1F3B8"},
    "shortcode": "guitar",
    "description": "GUITAR",
    "category": "activity"
  },
  {
    "name": "violin",
    "unicode": {"apple":"1F3BB", "google":"1F3BB", "twitter":"1F3BB"},
    "shortcode": "violin",
    "description": "VIOLIN",
    "category": "activity"
  },
  {
    "name": "clapper",
    "unicode": {"apple":"1F3AC", "google":"1F3AC", "twitter":"1F3AC"},
    "shortcode": "clapper",
    "description": "CLAPPER BOARD",
    "category": "activity"
  },
  {
    "name": "video_game",
    "unicode": {"apple":"1F3AE", "google":"1F3AE", "twitter":"1F3AE"},
    "shortcode": "video_game",
    "description": "VIDEO GAME",
    "category": "activity"
  },
  {
    "name": "space_invader",
    "unicode": {"apple":"1F47E", "google":"1F47E", "twitter":"1F47E"},
    "shortcode": "space_invader",
    "description": "ALIEN MONSTER",
    "category": "activity"
  },
  {
    "name": "dart",
    "unicode": {"apple":"1F3AF", "google":"1F3AF", "twitter":"1F3AF"},
    "shortcode": "dart",
    "description": "DIRECT HIT",
    "category": "activity"
  },
  {
    "name": "game_die",
    "unicode": {"apple":"1F3B2", "google":"1F3B2", "twitter":"1F3B2"},
    "shortcode": "game_die",
    "description": "GAME DIE",
    "category": "activity"
  },
  {
    "name": "slot_machine",
    "unicode": {"apple":"1F3B0", "google":"1F3B0", "twitter":"1F3B0"},
    "shortcode": "slot_machine",
    "description": "SLOT MACHINE",
    "category": "activity"
  },
  {
    "name": "bowling",
    "unicode": {"apple":"1F3B3", "google":"1F3B3", "twitter":"1F3B3"},
    "shortcode": "bowling",
    "description": "BOWLING",
    "category": "activity"
  },
  {
    "name": "car",
    "unicode": {"apple":"1F697", "google":"1F697", "twitter":"1F697"},
    "shortcode": "car",
    "description": "AUTOMOBILE",
    "category": "travel"
  },
  {
    "name": "taxi",
    "unicode": {"apple":"1F695", "google":"1F695", "twitter":"1F695"},
    "shortcode": "taxi",
    "description": "TAXI",
    "category": "travel"
  },
  {
    "name": "blue_car",
    "unicode": {"apple":"1F699", "google":"1F699", "twitter":"1F699"},
    "shortcode": "blue_car",
    "description": "RECREATIONAL VEHICLE",
    "category": "travel"
  },
  {
    "name": "bus",
    "unicode": {"apple":"1F68C", "google":"1F68C", "twitter":"1F68C"},
    "shortcode": "bus",
    "description": "BUS",
    "category": "travel"
  },
  {
    "name": "trolleybus",
    "unicode": {"apple":"1F68E", "google":"1F68E", "twitter":"1F68E"},
    "shortcode": "trolleybus",
    "description": "TROLLEYBUS",
    "category": "travel"
  },
  {
    "name": "racing_car",
    "unicode": {"apple":"1F3CE", "google":"1F3CE", "twitter":"1F3CE"},
    "shortcode": "racing_car",
    "description": "Racing Car",
    "category": "travel"
  },
  {
    "name": "police_car",
    "unicode": {"apple":"1F693", "google":"1F693", "twitter":"1F693"},
    "shortcode": "police_car",
    "description": "POLICE CAR",
    "category": "travel"
  },
  {
    "name": "ambulance",
    "unicode": {"apple":"1F691", "google":"1F691", "twitter":"1F691"},
    "shortcode": "ambulance",
    "description": "AMBULANCE",
    "category": "travel"
  },
  {
    "name": "fire_engine",
    "unicode": {"apple":"1F692", "google":"1F692", "twitter":"1F692"},
    "shortcode": "fire_engine",
    "description": "FIRE ENGINE",
    "category": "travel"
  },
  {
    "name": "minibus",
    "unicode": {"apple":"1F690", "google":"1F690", "twitter":"1F690"},
    "shortcode": "minibus",
    "description": "MINIBUS",
    "category": "travel"
  },
  {
    "name": "truck",
    "unicode": {"apple":"1F69A", "google":"1F69A", "twitter":"1F69A"},
    "shortcode": "truck",
    "description": "DELIVERY TRUCK",
    "category": "travel"
  },
  {
    "name": "articulated_lorry",
    "unicode": {"apple":"1F69B", "google":"1F69B", "twitter":"1F69B"},
    "shortcode": "articulated_lorry",
    "description": "ARTICULATED LORRY",
    "category": "travel"
  },
  {
    "name": "tractor",
    "unicode": {"apple":"1F69C", "google":"1F69C", "twitter":"1F69C"},
    "shortcode": "tractor",
    "description": "TRACTOR",
    "category": "travel"
  },
  {
    "name": "racing_motorcycle",
    "unicode": {"apple":"1F3CD", "google":"1F3CD", "twitter":"1F3CD"},
    "shortcode": "racing_motorcycle",
    "description": "Racing Motorcycle",
    "category": "travel"
  },
  {
    "name": "bike",
    "unicode": {"apple":"1F6B2", "google":"1F6B2", "twitter":"1F6B2"},
    "shortcode": "bike",
    "description": "BICYCLE",
    "category": "travel"
  },
  {
    "name": "rotating_light",
    "unicode": {"apple":"1F6A8", "google":"1F6A8", "twitter":"1F6A8"},
    "shortcode": "rotating_light",
    "description": "POLICE CARS REVOLVING LIGHT",
    "category": "travel"
  },
  {
    "name": "oncoming_police_car",
    "unicode": {"apple":"1F694", "google":"1F694", "twitter":"1F694"},
    "shortcode": "oncoming_police_car",
    "description": "ONCOMING POLICE CAR",
    "category": "travel"
  },
  {
    "name": "oncoming_bus",
    "unicode": {"apple":"1F68D", "google":"1F68D", "twitter":"1F68D"},
    "shortcode": "oncoming_bus",
    "description": "ONCOMING BUS",
    "category": "travel"
  },
  {
    "name": "oncoming_automobile",
    "unicode": {"apple":"1F698", "google":"1F698", "twitter":"1F698"},
    "shortcode": "oncoming_automobile",
    "description": "ONCOMING AUTOMOBILE",
    "category": "travel"
  },
  {
    "name": "oncoming_taxi",
    "unicode": {"apple":"1F696", "google":"1F696", "twitter":"1F696"},
    "shortcode": "oncoming_taxi",
    "description": "ONCOMING TAXI",
    "category": "travel"
  },
  {
    "name": "aerial_tramway",
    "unicode": {"apple":"1F6A1", "google":"1F6A1", "twitter":"1F6A1"},
    "shortcode": "aerial_tramway",
    "description": "AERIAL TRAMWAY",
    "category": "travel"
  },
  {
    "name": "mountain_cableway",
    "unicode": {"apple":"1F6A0", "google":"1F6A0", "twitter":"1F6A0"},
    "shortcode": "mountain_cableway",
    "description": "MOUNTAIN CABLEWAY",
    "category": "travel"
  },
  {
    "name": "suspension_railway",
    "unicode": {"apple":"1F69F", "google":"1F69F", "twitter":"1F69F"},
    "shortcode": "suspension_railway",
    "description": "SUSPENSION RAILWAY",
    "category": "travel"
  },
  {
    "name": "railway_car",
    "unicode": {"apple":"1F683", "google":"1F683", "twitter":"1F683"},
    "shortcode": "railway_car",
    "description": "RAILWAY CAR",
    "category": "travel"
  },
  {
    "name": "train",
    "unicode": {"apple":"1F68B", "google":"1F68B", "twitter":"1F68B"},
    "shortcode": "train",
    "description": "TRAM CAR",
    "category": "travel"
  },
  {
    "name": "monorail",
    "unicode": {"apple":"1F69D", "google":"1F69D", "twitter":"1F69D"},
    "shortcode": "monorail",
    "description": "MONORAIL",
    "category": "travel"
  },
  {
    "name": "bullettrain_side",
    "unicode": {"apple":"1F684", "google":"1F684", "twitter":"1F684"},
    "shortcode": "bullettrain_side",
    "description": "HIGH-SPEED TRAIN",
    "category": "travel"
  },
  {
    "name": "bullettrain_front",
    "unicode": {"apple":"1F685", "google":"1F685", "twitter":"1F685"},
    "shortcode": "bullettrain_front",
    "description": "HIGH-SPEED TRAIN WITH BULLET NOSE",
    "category": "travel"
  },
  {
    "name": "light_rail",
    "unicode": {"apple":"1F688", "google":"1F688", "twitter":"1F688"},
    "shortcode": "light_rail",
    "description": "LIGHT RAIL",
    "category": "travel"
  },
  {
    "name": "mountain_railway",
    "unicode": {"apple":"1F69E", "google":"1F69E", "twitter":"1F69E"},
    "shortcode": "mountain_railway",
    "description": "MOUNTAIN RAILWAY",
    "category": "travel"
  },
  {
    "name": "steam_locomotive",
    "unicode": {"apple":"1F682", "google":"1F682", "twitter":"1F682"},
    "shortcode": "steam_locomotive",
    "description": "STEAM LOCOMOTIVE",
    "category": "travel"
  },
  {
    "name": "train2",
    "unicode": {"apple":"1F686", "google":"1F686", "twitter":"1F686"},
    "shortcode": "train2",
    "description": "TRAIN",
    "category": "travel"
  },
  {
    "name": "metro",
    "unicode": {"apple":"1F687", "google":"1F687", "twitter":"1F687"},
    "shortcode": "metro",
    "description": "METRO",
    "category": "travel"
  },
  {
    "name": "tram",
    "unicode": {"apple":"1F68A", "google":"1F68A", "twitter":"1F68A"},
    "shortcode": "tram",
    "description": "TRAM",
    "category": "travel"
  },
  {
    "name": "station",
    "unicode": {"apple":"1F689", "google":"1F689", "twitter":"1F689"},
    "shortcode": "station",
    "description": "STATION",
    "category": "travel"
  },
  {
    "name": "helicopter",
    "unicode": {"apple":"1F681", "google":"1F681", "twitter":"1F681"},
    "shortcode": "helicopter",
    "description": "HELICOPTER",
    "category": "travel"
  },
  {
    "name": "small_airplane",
    "unicode": {"apple":"1F6E9", "google":"1F6E9", "twitter":"1F6E9"},
    "shortcode": "small_airplane",
    "description": "Small Airplane",
    "category": "travel"
  },
  {
    "name": "airplane",
    "unicode": {"apple":"2708", "google":"2708", "twitter":"2708"},
    "shortcode": "airplane",
    "description": "AIRPLANE",
    "category": "travel"
  },
  {
    "name": "airplane_departure",
    "unicode": {"apple":"1F6EB", "google":"1F6EB", "twitter":"1F6EB"},
    "shortcode": "airplane_departure",
    "description": "Airplane Departure",
    "category": "travel"
  },
  {
    "name": "airplane_arriving",
    "unicode": {"apple":"1F6EC", "google":"1F6EC", "twitter":"1F6EC"},
    "shortcode": "airplane_arriving",
    "description": "Airplane Arriving",
    "category": "travel"
  },
  {
    "name": "boat",
    "unicode": {"apple":"26F5", "google":"26F5", "twitter":"26F5"},
    "shortcode": "boat",
    "description": "SAILBOAT",
    "category": "travel"
  },
  {
    "name": "motor_boat",
    "unicode": {"apple":"1F6E5", "google":"1F6E5", "twitter":"1F6E5"},
    "shortcode": "motor_boat",
    "description": "Motor Boat",
    "category": "travel"
  },
  {
    "name": "speedboat",
    "unicode": {"apple":"1F6A4", "google":"1F6A4", "twitter":"1F6A4"},
    "shortcode": "speedboat",
    "description": "SPEEDBOAT",
    "category": "travel"
  },
  {
    "name": "ferry",
    "unicode": {"apple":"26F4", "google":"26F4", "twitter":"26F4"},
    "shortcode": "ferry",
    "description": "Ferry",
    "category": "travel"
  },
  {
    "name": "passenger_ship",
    "unicode": {"apple":"1F6F3", "google":"1F6F3", "twitter":"1F6F3"},
    "shortcode": "passenger_ship",
    "description": "Passenger Ship",
    "category": "travel"
  },
  {
    "name": "rocket",
    "unicode": {"apple":"1F680", "google":"1F680", "twitter":"1F680"},
    "shortcode": "rocket",
    "description": "ROCKET",
    "category": "travel"
  },
  {
    "name": "satellite",
    "unicode": {"apple":"1F4E1", "google":"1F4E1", "twitter":"1F4E1"},
    "shortcode": "satellite",
    "description": "SATELLITE ANTENNA",
    "category": "travel"
  },
  {
    "name": "seat",
    "unicode": {"apple":"1F4BA", "google":"1F4BA", "twitter":"1F4BA"},
    "shortcode": "seat",
    "description": "SEAT",
    "category": "travel"
  },
  {
    "name": "anchor",
    "unicode": {"apple":"2693", "google":"2693", "twitter":"2693"},
    "shortcode": "anchor",
    "description": "ANCHOR",
    "category": "travel"
  },
  {
    "name": "construction",
    "unicode": {"apple":"1F6A7", "google":"1F6A7", "twitter":"1F6A7"},
    "shortcode": "construction",
    "description": "CONSTRUCTION SIGN",
    "category": "travel"
  },
  {
    "name": "fuelpump",
    "unicode": {"apple":"26FD", "google":"26FD", "twitter":"26FD"},
    "shortcode": "fuelpump",
    "description": "FUEL PUMP",
    "category": "travel"
  },
  {
    "name": "busstop",
    "unicode": {"apple":"1F68F", "google":"1F68F", "twitter":"1F68F"},
    "shortcode": "busstop",
    "description": "BUS STOP",
    "category": "travel"
  },
  {
    "name": "vertical_traffic_light",
    "unicode": {"apple":"1F6A6", "google":"1F6A6", "twitter":"1F6A6"},
    "shortcode": "vertical_traffic_light",
    "description": "VERTICAL TRAFFIC LIGHT",
    "category": "travel"
  },
  {
    "name": "traffic_light",
    "unicode": {"apple":"1F6A5", "google":"1F6A5", "twitter":"1F6A5"},
    "shortcode": "traffic_light",
    "description": "HORIZONTAL TRAFFIC LIGHT",
    "category": "travel"
  },
  {
    "name": "checkered_flag",
    "unicode": {"apple":"1F3C1", "google":"1F3C1", "twitter":"1F3C1"},
    "shortcode": "checkered_flag",
    "description": "CHEQUERED FLAG",
    "category": "travel"
  },
  {
    "name": "ship",
    "unicode": {"apple":"1F6A2", "google":"1F6A2", "twitter":"1F6A2"},
    "shortcode": "ship",
    "description": "SHIP",
    "category": "travel"
  },
  {
    "name": "ferris_wheel",
    "unicode": {"apple":"1F3A1", "google":"1F3A1", "twitter":"1F3A1"},
    "shortcode": "ferris_wheel",
    "description": "FERRIS WHEEL",
    "category": "travel"
  },
  {
    "name": "roller_coaster",
    "unicode": {"apple":"1F3A2", "google":"1F3A2", "twitter":"1F3A2"},
    "shortcode": "roller_coaster",
    "description": "ROLLER COASTER",
    "category": "travel"
  },
  {
    "name": "carousel_horse",
    "unicode": {"apple":"1F3A0", "google":"1F3A0", "twitter":"1F3A0"},
    "shortcode": "carousel_horse",
    "description": "CAROUSEL HORSE",
    "category": "travel"
  },
  {
    "name": "building_construction",
    "unicode": {"apple":"1F3D7", "google":"1F3D7", "twitter":"1F3D7"},
    "shortcode": "building_construction",
    "description": "Building Construction",
    "category": "travel"
  },
  {
    "name": "foggy",
    "unicode": {"apple":"1F301", "google":"1F301", "twitter":"1F301"},
    "shortcode": "foggy",
    "description": "FOGGY",
    "category": "travel"
  },
  {
    "name": "tokyo_tower",
    "unicode": {"apple":"1F5FC", "google":"1F5FC", "twitter":"1F5FC"},
    "shortcode": "tokyo_tower",
    "description": "TOKYO TOWER",
    "category": "travel"
  },
  {
    "name": "factory",
    "unicode": {"apple":"1F3ED", "google":"1F3ED", "twitter":"1F3ED"},
    "shortcode": "factory",
    "description": "FACTORY",
    "category": "travel"
  },
  {
    "name": "fountain",
    "unicode": {"apple":"26F2", "google":"26F2", "twitter":"26F2"},
    "shortcode": "fountain",
    "description": "FOUNTAIN",
    "category": "travel"
  },
  {
    "name": "rice_scene",
    "unicode": {"apple":"1F391", "google":"1F391", "twitter":"1F391"},
    "shortcode": "rice_scene",
    "description": "MOON VIEWING CEREMONY",
    "category": "travel"
  },
  {
    "name": "mountain",
    "unicode": {"apple":"26F0", "google":"26F0", "twitter":"26F0"},
    "shortcode": "mountain",
    "description": "Mountain",
    "category": "travel"
  },
  {
    "name": "snow_capped_mountain",
    "unicode": {"apple":"1F3D4", "google":"1F3D4", "twitter":"1F3D4"},
    "shortcode": "snow_capped_mountain",
    "description": "Snow Capped Mountain",
    "category": "travel"
  },
  {
    "name": "mount_fuji",
    "unicode": {"apple":"1F5FB", "google":"1F5FB", "twitter":"1F5FB"},
    "shortcode": "mount_fuji",
    "description": "MOUNT FUJI",
    "category": "travel"
  },
  {
    "name": "volcano",
    "unicode": {"apple":"1F30B", "google":"1F30B", "twitter":"1F30B"},
    "shortcode": "volcano",
    "description": "VOLCANO",
    "category": "travel"
  },
  {
    "name": "japan",
    "unicode": {"apple":"1F5FE", "google":"1F5FE", "twitter":"1F5FE"},
    "shortcode": "japan",
    "description": "SILHOUETTE OF JAPAN",
    "category": "travel"
  },
  {
    "name": "camping",
    "unicode": {"apple":"1F3D5", "google":"1F3D5", "twitter":"1F3D5"},
    "shortcode": "camping",
    "description": "Camping",
    "category": "travel"
  },
  {
    "name": "tent",
    "unicode": {"apple":"26FA", "google":"26FA", "twitter":"26FA"},
    "shortcode": "tent",
    "description": "TENT",
    "category": "travel"
  },
  {
    "name": "national_park",
    "unicode": {"apple":"1F3DE", "google":"1F3DE", "twitter":"1F3DE"},
    "shortcode": "national_park",
    "description": "National Park",
    "category": "travel"
  },
  {
    "name": "motorway",
    "unicode": {"apple":"1F6E3", "google":"1F6E3", "twitter":"1F6E3"},
    "shortcode": "motorway",
    "description": "Motorway",
    "category": "travel"
  },
  {
    "name": "railway_track",
    "unicode": {"apple":"1F6E4", "google":"1F6E4", "twitter":"1F6E4"},
    "shortcode": "railway_track",
    "description": "Railway Track",
    "category": "travel"
  },
  {
    "name": "sunrise",
    "unicode": {"apple":"1F305", "google":"1F305", "twitter":"1F305"},
    "shortcode": "sunrise",
    "description": "SUNRISE",
    "category": "travel"
  },
  {
    "name": "sunrise_over_mountains",
    "unicode": {"apple":"1F304", "google":"1F304", "twitter":"1F304"},
    "shortcode": "sunrise_over_mountains",
    "description": "SUNRISE OVER MOUNTAINS",
    "category": "travel"
  },
  {
    "name": "desert",
    "unicode": {"apple":"1F3DC", "google":"1F3DC", "twitter":"1F3DC"},
    "shortcode": "desert",
    "description": "Desert",
    "category": "travel"
  },
  {
    "name": "beach_with_umbrella",
    "unicode": {"apple":"1F3D6", "google":"1F3D6", "twitter":"1F3D6"},
    "shortcode": "beach_with_umbrella",
    "description": "Beach With Umbrella",
    "category": "travel"
  },
  {
    "name": "desert_island",
    "unicode": {"apple":"1F3DD", "google":"1F3DD", "twitter":"1F3DD"},
    "shortcode": "desert_island",
    "description": "Desert Island",
    "category": "travel"
  },
  {
    "name": "city_sunrise",
    "unicode": {"apple":"1F307", "google":"1F307", "twitter":"1F307"},
    "shortcode": "city_sunrise",
    "description": "SUNSET OVER BUILDINGS",
    "category": "travel"
  },
  {
    "name": "city_sunset",
    "unicode": {"apple":"1F306", "google":"1F306", "twitter":"1F306"},
    "shortcode": "city_sunset",
    "description": "CITYSCAPE AT DUSK",
    "category": "travel"
  },
  {
    "name": "cityscape",
    "unicode": {"apple":"1F3D9", "google":"1F3D9", "twitter":"1F3D9"},
    "shortcode": "cityscape",
    "description": "CITYSCAPE",
    "category": "travel"
  },
  {
    "name": "night_with_stars",
    "unicode": {"apple":"1F303", "google":"1F303", "twitter":"1F303"},
    "shortcode": "night_with_stars",
    "description": "NIGHT WITH STARS",
    "category": "travel"
  },
  {
    "name": "bridge_at_night",
    "unicode": {"apple":"1F309", "google":"1F309", "twitter":"1F309"},
    "shortcode": "bridge_at_night",
    "description": "BRIDGE AT NIGHT",
    "category": "travel"
  },
  {
    "name": "milky_way",
    "unicode": {"apple":"1F30C", "google":"1F30C", "twitter":"1F30C"},
    "shortcode": "milky_way",
    "description": "MILKY WAY",
    "category": "travel"
  },
  {
    "name": "stars",
    "unicode": {"apple":"1F320", "google":"1F320", "twitter":"1F320"},
    "shortcode": "stars",
    "description": "SHOOTING STAR",
    "category": "travel"
  },
  {
    "name": "sparkler",
    "unicode": {"apple":"1F387", "google":"1F387", "twitter":"1F387"},
    "shortcode": "sparkler",
    "description": "FIREWORK SPARKLER",
    "category": "travel"
  },
  {
    "name": "fireworks",
    "unicode": {"apple":"1F386", "google":"1F386", "twitter":"1F386"},
    "shortcode": "fireworks",
    "description": "FIREWORKS",
    "category": "travel"
  },
  {
    "name": "rainbow",
    "unicode": {"apple":"1F308", "google":"1F308", "twitter":"1F308"},
    "shortcode": "rainbow",
    "description": "RAINBOW",
    "category": "travel"
  },
  {
    "name": "house_buildings",
    "unicode": {"apple":"1F3D8", "google":"1F3D8", "twitter":"1F3D8"},
    "shortcode": "house_buildings",
    "description": "EUROPEAN CASTLE",
    "category": "travel"
  },
  {
    "name": "european_castle",
    "unicode": {"apple":"1F3F0", "google":"1F3F0", "twitter":"1F3F0"},
    "shortcode": "european_castle",
    "description": "EUROPEAN CASTLE",
    "category": "travel"
  },
  {
    "name": "japanese_castle",
    "unicode": {"apple":"1F3EF", "google":"1F3EF", "twitter":"1F3EF"},
    "shortcode": "japanese_castle",
    "description": "JAPANESE CASTLE",
    "category": "travel"
  },
  {
    "name": "stadium",
    "unicode": {"apple":"1F3DF", "google":"1F3DF", "twitter":"1F3DF"},
    "shortcode": "stadium",
    "description": "Stadium",
    "category": "travel"
  },
  {
    "name": "statue_of_liberty",
    "unicode": {"apple":"1F5FD", "google":"1F5FD", "twitter":"1F5FD"},
    "shortcode": "statue_of_liberty",
    "description": "STATUE OF LIBERTY",
    "category": "travel"
  },
  {
    "name": "house",
    "unicode": {"apple":"1F3E0", "google":"1F3E0", "twitter":"1F3E0"},
    "shortcode": "house",
    "description": "HOUSE BUILDING",
    "category": "travel"
  },
  {
    "name": "house_with_garden",
    "unicode": {"apple":"1F3E1", "google":"1F3E1", "twitter":"1F3E1"},
    "shortcode": "house_with_garden",
    "description": "HOUSE WITH GARDEN",
    "category": "travel"
  },
  {
    "name": "derelict_house_building",
    "unicode": {"apple":"1F3DA", "google":"1F3DA", "twitter":"1F3DA"},
    "shortcode": "derelict_house_building",
    "description": "Derelict House Building",
    "category": "travel"
  },
  {
    "name": "office",
    "unicode": {"apple":"1F3E2", "google":"1F3E2", "twitter":"1F3E2"},
    "shortcode": "office",
    "description": "OFFICE BUILDING",
    "category": "travel"
  },
  {
    "name": "department_store",
    "unicode": {"apple":"1F3EC", "google":"1F3EC", "twitter":"1F3EC"},
    "shortcode": "department_store",
    "description": "DEPARTMENT STORE",
    "category": "travel"
  },
  {
    "name": "post_office",
    "unicode": {"apple":"1F3E3", "google":"1F3E3", "twitter":"1F3E3"},
    "shortcode": "post_office",
    "description": "JAPANESE POST OFFICE",
    "category": "travel"
  },
  {
    "name": "european_post_office",
    "unicode": {"apple":"1F3E4", "google":"1F3E4", "twitter":"1F3E4"},
    "shortcode": "european_post_office",
    "description": "EUROPEAN POST OFFICE",
    "category": "travel"
  },
  {
    "name": "hospital",
    "unicode": {"apple":"1F3E5", "google":"1F3E5", "twitter":"1F3E5"},
    "shortcode": "hospital",
    "description": "HOSPITAL",
    "category": "travel"
  },
  {
    "name": "bank",
    "unicode": {"apple":"1F3E6", "google":"1F3E6", "twitter":"1F3E6"},
    "shortcode": "bank",
    "description": "BANK",
    "category": "travel"
  },
  {
    "name": "hotel",
    "unicode": {"apple":"1F3E8", "google":"1F3E8", "twitter":"1F3E8"},
    "shortcode": "hotel",
    "description": "HOTEL",
    "category": "travel"
  },
  {
    "name": "convenience_store",
    "unicode": {"apple":"1F3EA", "google":"1F3EA", "twitter":"1F3EA"},
    "shortcode": "convenience_store",
    "description": "CONVENIENCE STORE",
    "category": "travel"
  },
  {
    "name": "school",
    "unicode": {"apple":"1F3EB", "google":"1F3EB", "twitter":"1F3EB"},
    "shortcode": "school",
    "description": "SCHOOL",
    "category": "travel"
  },
  {
    "name": "love_hotel",
    "unicode": {"apple":"1F3E9", "google":"1F3E9", "twitter":"1F3E9"},
    "shortcode": "love_hotel",
    "description": "LOVE HOTEL",
    "category": "travel"
  },
  {
    "name": "wedding",
    "unicode": {"apple":"1F492", "google":"1F492", "twitter":"1F492"},
    "shortcode": "wedding",
    "description": "WEDDING",
    "category": "travel"
  },
  {
    "name": "classical_building",
    "unicode": {"apple":"1F3DB", "google":"1F3DB", "twitter":"1F3DB"},
    "shortcode": "classical_building",
    "description": "Classical Building",
    "category": "travel"
  },
  {
    "name": "church",
    "unicode": {"apple":"26EA", "google":"26EA", "twitter":"26EA"},
    "shortcode": "church",
    "description": "CHURCH",
    "category": "travel"
  },
  {
    "name": "mosque",
    "unicode": {"apple":"1F54C", "google":"1F54C", "twitter":"1F54C"},
    "shortcode": "mosque",
    "description": "Mosque",
    "category": "travel"
  },
  {
    "name": "synagogue",
    "unicode": {"apple":"1F54D", "google":"1F54D", "twitter":"1F54D"},
    "shortcode": "synagogue",
    "description": "Synagogue",
    "category": "travel"
  },
  {
    "name": "kaaba",
    "unicode": {"apple":"1F54B", "google":"1F54B", "twitter":"1F54B"},
    "shortcode": "kaaba",
    "description": "Kaaba",
    "category": "travel"
  },
  {
    "name": "shinto_shrine",
    "unicode": {"apple":"26E9", "google":"26E9", "twitter":"26E9"},
    "shortcode": "shinto_shrine",
    "description": "Shinto Shrine",
    "category": "travel"
  },
  {
    "name": "watch",
    "unicode": {"apple":"231A", "google":"231A", "twitter":"231A"},
    "shortcode": "watch",
    "description": "WATCH",
    "category": "object"
  },
  {
    "name": "iphone",
    "unicode": {"apple":"1F4F1", "google":"1F4F1", "twitter":"1F4F1"},
    "shortcode": "iphone",
    "description": "MOBILE PHONE",
    "category": "object"
  },
  {
    "name": "calling",
    "unicode": {"apple":"1F4F2", "google":"1F4F2", "twitter":"1F4F2"},
    "shortcode": "calling",
    "description": "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT",
    "category": "object"
  },
  {
    "name": "computer",
    "unicode": {"apple":"1F4BB", "google":"1F4BB", "twitter":"1F4BB"},
    "shortcode": "computer",
    "description": "PERSONAL COMPUTER",
    "category": "object"
  },
  {
    "name": "keyboard",
    "unicode": {"apple":"2328", "google":"2328", "twitter":"2328"},
    "shortcode": "keyboard",
    "description": "KEYBOARD",
    "category": "object"
  },
  {
    "name": "desktop_computer",
    "unicode": {"apple":"1F5A5", "google":"1F5A5", "twitter":"1F5A5"},
    "shortcode": "desktop_computer",
    "description": "DESKTOP COMPUTER",
    "category": "object"
  },
  {
    "name": "printer",
    "unicode": {"apple":"1F5A8", "google":"1F5A8", "twitter":"1F5A8"},
    "shortcode": "printer",
    "description": "PRINTER",
    "category": "object"
  },
  {
    "name": "three_button_mouse",
    "unicode": {"apple":"1F5B1", "google":"1F5B1", "twitter":"1F5B1"},
    "shortcode": "three_button_mouse",
    "description": "THREE BUTTON MOUSE",
    "category": "object"
  },
  {
    "name": "trackball",
    "unicode": {"apple":"1F5B2", "google":"1F5B2", "twitter":"1F5B2"},
    "shortcode": "trackball",
    "description": "TRACKBALL",
    "category": "object"
  },
  {
    "name": "joystick",
    "unicode": {"apple":"1F579", "google":"1F579", "twitter":"1F579"},
    "shortcode": "joystick",
    "description": "JOYSTICK",
    "category": "object"
  },
  {
    "name": "compression",
    "unicode": {"apple":"1F5DC", "google":"1F5DC", "twitter":"1F5DC"},
    "shortcode": "compression",
    "description": "COMPRESSION",
    "category": "object"
  },
  {
    "name": "minidisc",
    "unicode": {"apple":"1F4BD", "google":"1F4BD", "twitter":"1F4BD"},
    "shortcode": "minidisc",
    "description": "MINIDISC",
    "category": "object"
  },
  {
    "name": "floppy_disk",
    "unicode": {"apple":"1F4BE", "google":"1F4BE", "twitter":"1F4BE"},
    "shortcode": "floppy_disk",
    "description": "FLOPPY DISK",
    "category": "object"
  },
  {
    "name": "cd",
    "unicode": {"apple":"1F4BF", "google":"1F4BF", "twitter":"1F4BF"},
    "shortcode": "cd",
    "description": "OPTICAL DISC",
    "category": "object"
  },
  {
    "name": "dvd",
    "unicode": {"apple":"1F4C0", "google":"1F4C0", "twitter":"1F4C0"},
    "shortcode": "dvd",
    "description": "DVD",
    "category": "object"
  },
  {
    "name": "vhs",
    "unicode": {"apple":"1F4FC", "google":"1F4FC", "twitter":"1F4FC"},
    "shortcode": "vhs",
    "description": "VIDEOCASSETTE",
    "category": "object"
  },
  {
    "name": "camera",
    "unicode": {"apple":"1F4F7", "google":"1F4F7", "twitter":"1F4F7"},
    "shortcode": "camera",
    "description": "CAMERA",
    "category": "object"
  },
  {
    "name": "camera_with_flash",
    "unicode": {"apple":"1F4F8", "google":"1F4F8", "twitter":"1F4F8"},
    "shortcode": "camera_with_flash",
    "description": "CAMERA WITH FLASH",
    "category": "object"
  },
  {
    "name": "video_camera",
    "unicode": {"apple":"1F4F9", "google":"1F4F9", "twitter":"1F4F9"},
    "shortcode": "video_camera",
    "description": "VIDEO CAMERA",
    "category": "object"
  },
  {
    "name": "movie_camera",
    "unicode": {"apple":"1F3A5", "google":"1F3A5", "twitter":"1F3A5"},
    "shortcode": "movie_camera",
    "description": "MOVIE CAMERA",
    "category": "object"
  },
  {
    "name": "film_projector",
    "unicode": {"apple":"1F4FD", "google":"1F4FD", "twitter":"1F4FD"},
    "shortcode": "film_projector",
    "description": "FILM PROJECTOR",
    "category": "object"
  },
  {
    "name": "film_frames",
    "unicode": {"apple":"1F39E", "google":"1F39E", "twitter":"1F39E"},
    "shortcode": "film_frames",
    "description": "FILM FRAMES",
    "category": "object"
  },
  {
    "name": "telephone_receiver",
    "unicode": {"apple":"1F4DE", "google":"1F4DE", "twitter":"1F4DE"},
    "shortcode": "telephone_receiver",
    "description": "TELEPHONE RECEIVER",
    "category": "object"
  },
  {
    "name": "phone",
    "unicode": {"apple":"260E", "google":"260E", "twitter":"260E"},
    "shortcode": "phone",
    "description": "BLACK TELEPHONE",
    "category": "object"
  },
  {
    "name": "pager",
    "unicode": {"apple":"1F4DF", "google":"1F4DF", "twitter":"1F4DF"},
    "shortcode": "pager",
    "description": "PAGER",
    "category": "object"
  },
  {
    "name": "fax",
    "unicode": {"apple":"1F4E0", "google":"1F4E0", "twitter":"1F4E0"},
    "shortcode": "fax",
    "description": "FAX MACHINE",
    "category": "object"
  },
  {
    "name": "tv",
    "unicode": {"apple":"1F4FA", "google":"1F4FA", "twitter":"1F4FA"},
    "shortcode": "tv",
    "description": "TELEVISION",
    "category": "object"
  },
  {
    "name": "radio",
    "unicode": {"apple":"1F4FB", "google":"1F4FB", "twitter":"1F4FB"},
    "shortcode": "radio",
    "description": "RADIO",
    "category": "object"
  },
  {
    "name": "studio_microphone",
    "unicode": {"apple":"1F399", "google":"1F399", "twitter":"1F399"},
    "shortcode": "studio_microphone",
    "description": "STUDIO MICROPHONE",
    "category": "object"
  },
  {
    "name": "level_slider",
    "unicode": {"apple":"1F39A", "google":"1F39A", "twitter":"1F39A"},
    "shortcode": "level_slider",
    "description": "LEVEL SLIDER",
    "category": "object"
  },
  {
    "name": "control_knobs",
    "unicode": {"apple":"1F39B", "google":"1F39B", "twitter":"1F39B"},
    "shortcode": "control_knobs",
    "description": "CONTROL KNOBS",
    "category": "object"
  },
  {
    "name": "stopwatch",
    "unicode": {"apple":"23F1", "google":"23F1", "twitter":"23F1"},
    "shortcode": "stopwatch",
    "description": "STOPWATCH",
    "category": "object"
  },
  {
    "name": "timer_clock",
    "unicode": {"apple":"23F2", "google":"23F2", "twitter":"23F2"},
    "shortcode": "timer_clock",
    "description": "TIMER CLOCK",
    "category": "object"
  },
  {
    "name": "alarm_clock",
    "unicode": {"apple":"23F0", "google":"23F0", "twitter":"23F0"},
    "shortcode": "alarm_clock",
    "description": "ALARM CLOCK",
    "category": "object"
  },
  {
    "name": "mantelpiece_clock",
    "unicode": {"apple":"1F570", "google":"1F570", "twitter":"1F570"},
    "shortcode": "mantelpiece_clock",
    "description": "MANTELPIECE CLOCK",
    "category": "object"
  },
  {
    "name": "hourglass_flowing_sand",
    "unicode": {"apple":"23F3", "google":"23F3", "twitter":"23F3"},
    "shortcode": "hourglass_flowing_sand",
    "description": "HOURGLASS WITH FLOWING SAND",
    "category": "object"
  },
  {
    "name": "hourglass",
    "unicode": {"apple":"231B", "google":"231B", "twitter":"231B"},
    "shortcode": "hourglass",
    "description": "HOURGLASS",
    "category": "object"
  },
  {
    "name": "satellite",
    "unicode": {"apple":"1F6F0", "google":"1F6F0", "twitter":"1F6F0"},
    "shortcode": "satellite",
    "description": "SATELLITE",
    "category": "object"
  },
  {
    "name": "battery",
    "unicode": {"apple":"1F50B", "google":"1F50B", "twitter":"1F50B"},
    "shortcode": "battery",
    "description": "BATTERY",
    "category": "object"
  },
  {
    "name": "electric_plug",
    "unicode": {"apple":"1F50C", "google":"1F50C", "twitter":"1F50C"},
    "shortcode": "electric_plug",
    "description": "ELECTRIC PLUG",
    "category": "object"
  },
  {
    "name": "bulb",
    "unicode": {"apple":"1F4A1", "google":"1F4A1", "twitter":"1F4A1"},
    "shortcode": "bulb",
    "description": "ELECTRIC LIGHT BULB",
    "category": "object"
  },
  {
    "name": "flashlight",
    "unicode": {"apple":"1F526", "google":"1F526", "twitter":"1F526"},
    "shortcode": "flashlight",
    "description": "ELECTRIC TORCH",
    "category": "object"
  },
  {
    "name": "candle",
    "unicode": {"apple":"1F56F", "google":"1F56F", "twitter":"1F56F"},
    "shortcode": "candle",
    "description": "CANDLE",
    "category": "object"
  },
  {
    "name": "wastebasket",
    "unicode": {"apple":"1F5D1", "google":"1F5D1", "twitter":"1F5D1"},
    "shortcode": "wastebasket",
    "description": "WASTEBASKET",
    "category": "object"
  },
  {
    "name": "oil_drum",
    "unicode": {"apple":"1F6E2", "google":"1F6E2", "twitter":"1F6E2"},
    "shortcode": "oil_drum",
    "description": "OIL DRUM",
    "category": "object"
  },
  {
    "name": "money_with_wings",
    "unicode": {"apple":"1F4B8", "google":"1F4B8", "twitter":"1F4B8"},
    "shortcode": "money_with_wings",
    "description": "MONEY WITH WINGS",
    "category": "object"
  },
  {
    "name": "dollar",
    "unicode": {"apple":"1F4B5", "google":"1F4B5", "twitter":"1F4B5"},
    "shortcode": "dollar",
    "description": "BANKNOTE WITH DOLLAR SIGN",
    "category": "object"
  },
  {
    "name": "yen",
    "unicode": {"apple":"1F4B4", "google":"1F4B4", "twitter":"1F4B4"},
    "shortcode": "yen",
    "description": "BANKNOTE WITH YEN SIGN",
    "category": "object"
  },
  {
    "name": "euro",
    "unicode": {"apple":"1F4B6", "google":"1F4B6", "twitter":"1F4B6"},
    "shortcode": "euro",
    "description": "BANKNOTE WITH EURO SIGN",
    "category": "object"
  },
  {
    "name": "pound",
    "unicode": {"apple":"1F4B7", "google":"1F4B7", "twitter":"1F4B7"},
    "shortcode": "pound",
    "description": "BANKNOTE WITH POUND SIGN",
    "category": "object"
  },
  {
    "name": "moneybag",
    "unicode": {"apple":"1F4B0", "google":"1F4B0", "twitter":"1F4B0"},
    "shortcode": "moneybag",
    "description": "MONEY BAG",
    "category": "object"
  },
  {
    "name": "credit_card",
    "unicode": {"apple":"1F4B3", "google":"1F4B3", "twitter":"1F4B3"},
    "shortcode": "credit_card",
    "description": "CREDIT CARD",
    "category": "object"
  },
  {
    "name": "gem",
    "unicode": {"apple":"1F48E", "google":"1F48E", "twitter":"1F48E"},
    "shortcode": "gem",
    "description": "GEM STONE",
    "category": "object"
  },
  {
    "name": "scales",
    "unicode": {"apple":"2696", "google":"2696", "twitter":"2696"},
    "shortcode": "scales",
    "description": "SCALES",
    "category": "object"
  },
  {
    "name": "wrench",
    "unicode": {"apple":"1F527", "google":"1F527", "twitter":"1F527"},
    "shortcode": "wrench",
    "description": "WRENCH",
    "category": "object"
  },
  {
    "name": "hammer",
    "unicode": {"apple":"1F528", "google":"1F528", "twitter":"1F528"},
    "shortcode": "hammer",
    "description": "HAMMER",
    "category": "object"
  },
  {
    "name": "hammer_and_pick",
    "unicode": {"apple":"2692", "google":"2692", "twitter":"2692"},
    "shortcode": "hammer_and_pick",
    "description": "HAMMER AND PICK",
    "category": "object"
  },
  {
    "name": "hammer_and_wrench",
    "unicode": {"apple":"1F6E0", "google":"1F6E0", "twitter":"1F6E0"},
    "shortcode": "hammer_and_wrench",
    "description": "HAMMER AND WRENCH",
    "category": "object"
  },
  {
    "name": "pick",
    "unicode": {"apple":"26CF", "google":"26CF", "twitter":"26CF"},
    "shortcode": "pick",
    "description": "PICK",
    "category": "object"
  },
  {
    "name": "nut_and_bolt",
    "unicode": {"apple":"1F529", "google":"1F529", "twitter":"1F529"},
    "shortcode": "nut_and_bolt",
    "description": "NUT AND BOLT",
    "category": "object"
  },
  {
    "name": "gear",
    "unicode": {"apple":"2699", "google":"2699", "twitter":"2699"},
    "shortcode": "gear",
    "description": "GEAR",
    "category": "object"
  },
  {
    "name": "chains",
    "unicode": {"apple":"26D3", "google":"26D3", "twitter":"26D3"},
    "shortcode": "chains",
    "description": "CHAINS",
    "category": "object"
  },
  {
    "name": "gun",
    "unicode": {"apple":"1F52B", "google":"1F52B", "twitter":"1F52B"},
    "shortcode": "gun",
    "description": "PISTOL",
    "category": "object"
  },
  {
    "name": "bomb",
    "unicode": {"apple":"1F4A3", "google":"1F4A3", "twitter":"1F4A3"},
    "shortcode": "bomb",
    "description": "BOMB",
    "category": "object"
  },
  {
    "name": "hocho",
    "unicode": {"apple":"1F52A", "google":"1F52A", "twitter":"1F52A"},
    "shortcode": "hocho",
    "description": "HOCHO",
    "category": "object"
  },
  {
    "name": "dagger_knife",
    "unicode": {"apple":"1F5E1", "google":"1F5E1", "twitter":"1F5E1"},
    "shortcode": "dagger_knife",
    "description": "DAGGER KNIFE",
    "category": "object"
  },
  {
    "name": "crossed_swords",
    "unicode": {"apple":"2694", "google":"2694", "twitter":"2694"},
    "shortcode": "crossed_swords",
    "description": "CROSSED SWORDS",
    "category": "object"
  },
  {
    "name": "shield",
    "unicode": {"apple":"1F6E1", "google":"1F6E1", "twitter":"1F6E1"},
    "shortcode": "shield",
    "description": "SHIELD",
    "category": "object"
  },
  {
    "name": "smoking",
    "unicode": {"apple":"1F6AC", "google":"1F6AC", "twitter":"1F6AC"},
    "shortcode": "smoking",
    "description": "SMOKING SYMBOL",
    "category": "object"
  },
  {
    "name": "skull_and_crossbones",
    "unicode": {"apple":"2620", "google":"2620", "twitter":"2620"},
    "shortcode": "skull_and_crossbones",
    "description": "SKULL AND CROSSBONES",
    "category": "object"
  },
  {
    "name": "coffin",
    "unicode": {"apple":"26B0", "google":"26B0", "twitter":"26B0"},
    "shortcode": "coffin",
    "description": "COFFIN",
    "category": "object"
  },
  {
    "name": "funeral_urn",
    "unicode": {"apple":"26B1", "google":"26B1", "twitter":"26B1"},
    "shortcode": "funeral_urn",
    "description": "FUNERAL URN",
    "category": "object"
  },
  {
    "name": "amphora",
    "unicode": {"apple":"1F3FA", "google":"1F3FA", "twitter":"1F3FA"},
    "shortcode": "amphora",
    "description": "AMPHORA",
    "category": "object"
  },
  {
    "name": "crystal_ball",
    "unicode": {"apple":"1F52E", "google":"1F52E", "twitter":"1F52E"},
    "shortcode": "crystal_ball",
    "description": "CRYSTAL BALL",
    "category": "object"
  },
  {
    "name": "prayer_beads",
    "unicode": {"apple":"1F4FF", "google":"1F4FF", "twitter":"1F4FF"},
    "shortcode": "prayer_beads",
    "description": "PRAYER BEADS",
    "category": "object"
  },
  {
    "name": "barber",
    "unicode": {"apple":"1F488", "google":"1F488", "twitter":"1F488"},
    "shortcode": "barber",
    "description": "BARBER POLE",
    "category": "object"
  },
  {
    "name": "alembic",
    "unicode": {"apple":"2697", "google":"2697", "twitter":"2697"},
    "shortcode": "alembic",
    "description": "ALEMBIC",
    "category": "object"
  },
  {
    "name": "telescope",
    "unicode": {"apple":"1F52D", "google":"1F52D", "twitter":"1F52D"},
    "shortcode": "telescope",
    "description": "TELESCOPE",
    "category": "object"
  },
  {
    "name": "microscope",
    "unicode": {"apple":"1F52C", "google":"1F52C", "twitter":"1F52C"},
    "shortcode": "microscope",
    "description": "MICROSCOPE",
    "category": "object"
  },
  {
    "name": "hole",
    "unicode": {"apple":"1F573", "google":"1F573", "twitter":"1F573"},
    "shortcode": "hole",
    "description": "HOLE",
    "category": "object"
  },
  {
    "name": "pill",
    "unicode": {"apple":"1F48A", "google":"1F48A", "twitter":"1F48A"},
    "shortcode": "pill",
    "description": "PILL",
    "category": "object"
  },
  {
    "name": "syringe",
    "unicode": {"apple":"1F489", "google":"1F489", "twitter":"1F489"},
    "shortcode": "syringe",
    "description": "SYRINGE",
    "category": "object"
  },
  {
    "name": "thermometer",
    "unicode": {"apple":"1F321", "google":"1F321", "twitter":"1F321"},
    "shortcode": "thermometer",
    "description": "THERMOMETER",
    "category": "object"
  },
  {
    "name": "label",
    "unicode": {"apple":"1F3F7", "google":"1F3F7", "twitter":"1F3F7"},
    "shortcode": "label",
    "description": "LABEL",
    "category": "object"
  },
  {
    "name": "bookmark",
    "unicode": {"apple":"1F516", "google":"1F516", "twitter":"1F516"},
    "shortcode": "bookmark",
    "description": "BOOKMARK",
    "category": "object"
  },
  {
    "name": "toilet",
    "unicode": {"apple":"1F6BD", "google":"1F6BD", "twitter":"1F6BD"},
    "shortcode": "toilet",
    "description": "TOILET",
    "category": "object"
  },
  {
    "name": "shower",
    "unicode": {"apple":"1F6BF", "google":"1F6BF", "twitter":"1F6BF"},
    "shortcode": "shower",
    "description": "SHOWER",
    "category": "object"
  },
  {
    "name": "bathtub",
    "unicode": {"apple":"1F6C1", "google":"1F6C1", "twitter":"1F6C1"},
    "shortcode": "bathtub",
    "description": "BATHTUB",
    "category": "object"
  },
  {
    "name": "key",
    "unicode": {"apple":"1F511", "google":"1F511", "twitter":"1F511"},
    "shortcode": "key",
    "description": "KEY",
    "category": "object"
  },
  {
    "name": "old_key",
    "unicode": {"apple":"1F5DD", "google":"1F5DD", "twitter":"1F5DD"},
    "shortcode": "old_key",
    "description": "OLD KEY",
    "category": "object"
  },
  {
    "name": "couch_and_lamp",
    "unicode": {"apple":"1F6CB", "google":"1F6CB", "twitter":"1F6CB"},
    "shortcode": "couch_and_lamp",
    "description": "COUCH AND LAMP",
    "category": "object"
  },
  {
    "name": "sleeping_accommodation",
    "unicode": {"apple":"1F6CC", "google":"1F6CC", "twitter":"1F6CC"},
    "shortcode": "sleeping_accommodation",
    "description": "SLEEPING ACCOMMODATION",
    "category": "object"
  },
  {
    "name": "bed",
    "unicode": {"apple":"1F6CF", "google":"1F6CF", "twitter":"1F6CF"},
    "shortcode": "bed",
    "description": "BED",
    "category": "object"
  },
  {
    "name": "door",
    "unicode": {"apple":"1F6AA", "google":"1F6AA", "twitter":"1F6AA"},
    "shortcode": "door",
    "description": "DOOR",
    "category": "object"
  },
  {
    "name": "bellhop_bell",
    "unicode": {"apple":"1F6CE", "google":"1F6CE", "twitter":"1F6CE"},
    "shortcode": "bellhop_bell",
    "description": "BELLHOP BELL",
    "category": "object"
  },
  {
    "name": "frame_with_picture",
    "unicode": {"apple":"1F5BC", "google":"1F5BC", "twitter":"1F5BC"},
    "shortcode": "frame_with_picture",
    "description": "FRAME WITH PICTURE",
    "category": "object"
  },
  {
    "name": "world_map",
    "unicode": {"apple":"1F5FA", "google":"1F5FA", "twitter":"1F5FA"},
    "shortcode": "world_map",
    "description": "WORLD MAP",
    "category": "object"
  },
  {
    "name": "umbrella_on_ground",
    "unicode": {"apple":"26F1", "google":"26F1", "twitter":"26F1"},
    "shortcode": "umbrella_on_ground",
    "description": "UMBRELLA ON GROUND",
    "category": "object"
  },
  {
    "name": "moyai",
    "unicode": {"apple":"1F5FF", "google":"1F5FF", "twitter":"1F5FF"},
    "shortcode": "moyai",
    "description": "MOYAI",
    "category": "object"
  },
  {
    "name": "shopping_bags",
    "unicode": {"apple":"1F6CD", "google":"1F6CD", "twitter":"1F6CD"},
    "shortcode": "shopping_bags",
    "description": "SHOPPING BAGS",
    "category": "object"
  },
  {
    "name": "balloon",
    "unicode": {"apple":"1F388", "google":"1F388", "twitter":"1F388"},
    "shortcode": "balloon",
    "description": "BALLOON",
    "category": "object"
  },
  {
    "name": "flags",
    "unicode": {"apple":"1F38F", "google":"1F38F", "twitter":"1F38F"},
    "shortcode": "flags",
    "description": "CARP STREAMER",
    "category": "object"
  },
  {
    "name": "ribbon",
    "unicode": {"apple":"1F380", "google":"1F380", "twitter":"1F380"},
    "shortcode": "ribbon",
    "description": "RIBBON",
    "category": "object"
  },
  {
    "name": "gift",
    "unicode": {"apple":"1F381", "google":"1F381", "twitter":"1F381"},
    "shortcode": "gift",
    "description": "WRAPPED PRESENT",
    "category": "object"
  },
{
    "name": "confetti_ball",
    "unicode": {"apple":"1F38A", "google":"1F38A", "twitter":"1F38A"},
    "shortcode": "confetti_ball",
    "description": "CONFETTI BALL",
    "category": "object"
  },
  {
    "name": "tada",
    "unicode": {"apple":"1F389", "google":"1F389", "twitter":"1F389"},
    "shortcode": "tada",
    "description": "PARTY POPPER",
    "category": "object"
  },
  {
    "name": "dolls",
    "unicode": {"apple":"1F38E", "google":"1F38E", "twitter":"1F38E"},
    "shortcode": "dolls",
    "description": "JAPANESE DOLLS",
    "category": "object"
  },
  {
    "name": "wind_chime",
    "unicode": {"apple":"1F390", "google":"1F390", "twitter":"1F390"},
    "shortcode": "wind_chime",
    "description": "WIND CHIME",
    "category": "object"
  },
  {
    "name": "crossed_flags",
    "unicode": {"apple":"1F38C", "google":"1F38C", "twitter":"1F38C"},
    "shortcode": "crossed_flags",
    "description": "CROSSED FLAGS",
    "category": "object"
  },
  {
    "name": "izakaya_lantern",
    "unicode": {"apple":"1F3EE", "google":"1F3EE", "twitter":"1F3EE"},
    "shortcode": "izakaya_lantern",
    "description": "IZAKAYA LANTERN",
    "category": "object"
  },
  {
    "name": "email",
    "unicode": {"apple":"2709", "google":"2709", "twitter":"2709"},
    "shortcode": "email",
    "description": "ENVELOPE",
    "category": "object"
  },
  {
    "name": "envelope_with_arrow",
    "unicode": {"apple":"1F4E9", "google":"1F4E9", "twitter":"1F4E9"},
    "shortcode": "envelope_with_arrow",
    "description": "ENVELOPE WITH DOWNWARDS ARROW ABOVE",
    "category": "object"
  },
  {
    "name": "incoming_envelope",
    "unicode": {"apple":"1F4E8", "google":"1F4E8", "twitter":"1F4E8"},
    "shortcode": "incoming_envelope",
    "description": "INCOMING ENVELOPE",
    "category": "object"
  },
  {
    "name": "e-mail",
    "unicode": {"apple":"1F4E7", "google":"1F4E7", "twitter":"1F4E7"},
    "shortcode": "e-mail",
    "description": "E-MAIL SYMBOL",
    "category": "object"
  },
  {
    "name": "love_letter",
    "unicode": {"apple":"1F48C", "google":"1F48C", "twitter":"1F48C"},
    "shortcode": "love_letter",
    "description": "LOVE LETTER",
    "category": "object"
  },
  {
    "name": "postbox",
    "unicode": {"apple":"1F4EE", "google":"1F4EE", "twitter":"1F4EE"},
    "shortcode": "postbox",
    "description": "POSTBOX",
    "category": "object"
  },
  {
    "name": "mailbox_closed",
    "unicode": {"apple":"1F4EA", "google":"1F4EA", "twitter":"1F4EA"},
    "shortcode": "mailbox_closed",
    "description": "CLOSED MAILBOX WITH LOWERED FLAG",
    "category": "object"
  },
  {
    "name": "mailbox",
    "unicode": {"apple":"1F4EB", "google":"1F4EB", "twitter":"1F4EB"},
    "shortcode": "mailbox",
    "description": "CLOSED MAILBOX WITH RAISED FLAG",
    "category": "object"
  },
  {
    "name": "mailbox_with_mail",
    "unicode": {"apple":"1F4EC", "google":"1F4EC", "twitter":"1F4EC"},
    "shortcode": "mailbox_with_mail",
    "description": "OPEN MAILBOX WITH RAISED FLAG",
    "category": "object"
  },
  {
    "name": "mailbox_with_no_mail",
    "unicode": {"apple":"1F4ED", "google":"1F4ED", "twitter":"1F4ED"},
    "shortcode": "mailbox_with_no_mail",
    "description": "OPEN MAILBOX WITH LOWERED FLAG",
    "category": "object"
  },
  {
    "name": "package",
    "unicode": {"apple":"1F4E6", "google":"1F4E6", "twitter":"1F4E6"},
    "shortcode": "package",
    "description": "PACKAGE",
    "category": "object"
  },
  {
    "name": "postal_horn",
    "unicode": {"apple":"1F4EF", "google":"1F4EF", "twitter":"1F4EF"},
    "shortcode": "postal_horn",
    "description": "POSTAL HORN",
    "category": "object"
  },
  {
    "name": "inbox_tray",
    "unicode": {"apple":"1F4E5", "google":"1F4E5", "twitter":"1F4E5"},
    "shortcode": "inbox_tray",
    "description": "INBOX TRAY",
    "category": "object"
  },
  {
    "name": "outbox_tray",
    "unicode": {"apple":"1F4E4", "google":"1F4E4", "twitter":"1F4E4"},
    "shortcode": "outbox_tray",
    "description": "OUTBOX TRAY",
    "category": "object"
  },
  {
    "name": "scroll",
    "unicode": {"apple":"1F4DC", "google":"1F4DC", "twitter":"1F4DC"},
    "shortcode": "scroll",
    "description": "SCROLL",
    "category": "object"
  },
  {
    "name": "page_with_curl",
    "unicode": {"apple":"1F4C3", "google":"1F4C3", "twitter":"1F4C3"},
    "shortcode": "page_with_curl",
    "description": "PAGE WITH CURL",
    "category": "object"
  },
  {
    "name": "bookmark_tabs",
    "unicode": {"apple":"1F4D1", "google":"1F4D1", "twitter":"1F4D1"},
    "shortcode": "bookmark_tabs",
    "description": "BOOKMARK TABS",
    "category": "object"
  },
  {
    "name": "bar_chart",
    "unicode": {"apple":"1F4CA", "google":"1F4CA", "twitter":"1F4CA"},
    "shortcode": "bar_chart",
    "description": "BAR CHART",
    "category": "object"
  },
  {
    "name": "chart_with_upwards_trend",
    "unicode": {"apple":"1F4C8", "google":"1F4C8", "twitter":"1F4C8"},
    "shortcode": "chart_with_upwards_trend",
    "description": "CHART WITH UPWARDS TREND",
    "category": "object"
  },
  {
    "name": "chart_with_downwards_trend",
    "unicode": {"apple":"1F4C9", "google":"1F4C9", "twitter":"1F4C9"},
    "shortcode": "chart_with_downwards_trend",
    "description": "CHART WITH DOWNWARDS TREND",
    "category": "object"
  },
  {
    "name": "page_facing_up",
    "unicode": {"apple":"1F4C4", "google":"1F4C4", "twitter":"1F4C4"},
    "shortcode": "page_facing_up",
    "description": "PAGE FACING UP",
    "category": "object"
  },
  {
    "name": "date",
    "unicode": {"apple":"1F4C5", "google":"1F4C5", "twitter":"1F4C5"},
    "shortcode": "date",
    "description": "CALENDAR",
    "category": "object"
  },
  {
    "name": "calendar",
    "unicode": {"apple":"1F4C6", "google":"1F4C6", "twitter":"1F4C6"},
    "shortcode": "calendar",
    "description": "TEAR-OFF CALENDAR",
    "category": "object"
  },
  {
    "name": "spiral_calendar_pad",
    "unicode": {"apple":"1F5D3", "google":"1F5D3", "twitter":"1F5D3"},
    "shortcode": "spiral_calendar_pad",
    "description": "SPIRAL CALENDAR PAD",
    "category": "object"
  },
  {
    "name": "card_index",
    "unicode": {"apple":"1F4C7", "google":"1F4C7", "twitter":"1F4C7"},
    "shortcode": "card_index",
    "description": "CARD INDEX",
    "category": "object"
  },
  {
    "name": "card_file_box",
    "unicode": {"apple":"1F5C3", "google":"1F5C3", "twitter":"1F5C3"},
    "shortcode": "card_file_box",
    "description": "CARD FILE BOX",
    "category": "object"
  },
  {
    "name": "ballot_box_with_check",
    "unicode": {"apple":"2611-FE0F", "google":"2611-FE0F", "twitter":"2611-FE0F"},
    "shortcode": "ballot_box_with_check",
    "description": "BALLOT BOX WITH CHECK",
    "category": "object"
  },
  {
    "name": "file_cabinet",
    "unicode": {"apple":"1F5C4", "google":"1F5C4", "twitter":"1F5C4"},
    "shortcode": "file_cabinet",
    "description": "FILE CABINET",
    "category": "object"
  },
  {
    "name": "clipboard",
    "unicode": {"apple":"1F4CB", "google":"1F4CB", "twitter":"1F4CB"},
    "shortcode": "clipboard",
    "description": "CLIPBOARD",
    "category": "object"
  },
  {
    "name": "spiral_note_pad",
    "unicode": {"apple":"1F5D2", "google":"1F5D2", "twitter":"1F5D2"},
    "shortcode": "spiral_note_pad",
    "description": "SPIRAL NOTE PAD",
    "category": "object"
  },
  {
    "name": "file_folder",
    "unicode": {"apple":"1F4C1", "google":"1F4C1", "twitter":"1F4C1"},
    "shortcode": "file_folder",
    "description": "FILE FOLDER",
    "category": "object"
  },
  {
    "name": "open_file_folder",
    "unicode": {"apple":"1F4C2", "google":"1F4C2", "twitter":"1F4C2"},
    "shortcode": "open_file_folder",
    "description": "OPEN FILE FOLDER",
    "category": "object"
  },
  {
    "name": "card_index_dividers",
    "unicode": {"apple":"1F5C2", "google":"1F5C2", "twitter":"1F5C2"},
    "shortcode": "card_index_dividers",
    "description": "CARD INDEX DIVIDERS",
    "category": "object"
  },
  {
    "name": "rolled_up_newspaper",
    "unicode": {"apple":"1F5DE", "google":"1F5DE", "twitter":"1F5DE"},
    "shortcode": "rolled_up_newspaper",
    "description": "ROLLED-UP NEWSPAPER",
    "category": "object"
  },
  {
    "name": "newspaper",
    "unicode": {"apple":"1F4F0", "google":"1F4F0", "twitter":"1F4F0"},
    "shortcode": "newspaper",
    "description": "NEWSPAPER",
    "category": "object"
  },
  {
    "name": "notebook",
    "unicode": {"apple":"1F4D3", "google":"1F4D3", "twitter":"1F4D3"},
    "shortcode": "notebook",
    "description": "NOTEBOOK",
    "category": "object"
  },
  {
    "name": "closed_book",
    "unicode": {"apple":"1F4D5", "google":"1F4D5", "twitter":"1F4D5"},
    "shortcode": "closed_book",
    "description": "CLOSED BOOK",
    "category": "object"
  },
  {
    "name": "green_book",
    "unicode": {"apple":"1F4D7", "google":"1F4D7", "twitter":"1F4D7"},
    "shortcode": "green_book",
    "description": "GREEN BOOK",
    "category": "object"
  },
  {
    "name": "blue_book",
    "unicode": {"apple":"1F4D8", "google":"1F4D8", "twitter":"1F4D8"},
    "shortcode": "blue_book",
    "description": "BLUE BOOK",
    "category": "object"
  },
  {
    "name": "orange_book",
    "unicode": {"apple":"1F4D9", "google":"1F4D9", "twitter":"1F4D9"},
    "shortcode": "orange_book",
    "description": "ORANGE BOOK",
    "category": "object"
  },
  {
    "name": "notebook_with_decorative_cover",
    "unicode": {"apple":"1F4D4", "google":"1F4D4", "twitter":"1F4D4"},
    "shortcode": "notebook_with_decorative_cover",
    "description": "NOTEBOOK WITH DECORATIVE COVER",
    "category": "object"
  },
  {
    "name": "ledger",
    "unicode": {"apple":"1F4D2", "google":"1F4D2", "twitter":"1F4D2"},
    "shortcode": "ledger",
    "description": "LEDGER",
    "category": "object"
  },
  {
    "name": "books",
    "unicode": {"apple":"1F4DA", "google":"1F4DA", "twitter":"1F4DA"},
    "shortcode": "books",
    "description": "BOOKS",
    "category": "object"
  },
  {
    "name": "book",
    "unicode": {"apple":"1F4D6", "google":"1F4D6", "twitter":"1F4D6"},
    "shortcode": "book",
    "description": "OPEN BOOK",
    "category": "object"
  },
  {
    "name": "link",
    "unicode": {"apple":"1F517", "google":"1F517", "twitter":"1F517"},
    "shortcode": "link",
    "description": "LINK SYMBOL",
    "category": "object"
  },
  {
    "name": "paperclip",
    "unicode": {"apple":"1F4CE", "google":"1F4CE", "twitter":"1F4CE"},
    "shortcode": "paperclip",
    "description": "PAPERCLIP",
    "category": "object"
  },
  {
    "name": "linked_paperclips",
    "unicode": {"apple":"1F587", "google":"1F587", "twitter":"1F587"},
    "shortcode": "linked_paperclips",
    "description": "LINKED PAPERCLIPS",
    "category": "object"
  },
  {
    "name": "scissors",
    "unicode": {"apple":"2702", "google":"2702", "twitter":"2702"},
    "shortcode": "scissors",
    "description": "BLACK SCISSORS",
    "category": "object"
  },
  {
    "name": "triangular_ruler",
    "unicode": {"apple":"1F4D0", "google":"1F4D0", "twitter":"1F4D0"},
    "shortcode": "triangular_ruler",
    "description": "TRIANGULAR RULER",
    "category": "object"
  },
  {
    "name": "straight_ruler",
    "unicode": {"apple":"1F4CF", "google":"1F4CF", "twitter":"1F4CF"},
    "shortcode": "straight_ruler",
    "description": "STRAIGHT RULER",
    "category": "object"
  },
  {
    "name": "pushpin",
    "unicode": {"apple":"1F4CC", "google":"1F4CC", "twitter":"1F4CC"},
    "shortcode": "pushpin",
    "description": "PUSHPIN",
    "category": "object"
  },
  {
    "name": "round_pushpin",
    "unicode": {"apple":"1F4CD", "google":"1F4CD", "twitter":"1F4CD"},
    "shortcode": "round_pushpin",
    "description": "ROUND PUSHPIN",
    "category": "object"
  },
  {
    "name": "triangular_flag_on_post",
    "unicode": {"apple":"1F6A9", "google":"1F6A9", "twitter":"1F6A9"},
    "shortcode": "triangular_flag_on_post",
    "description": "TRIANGULAR FLAG ON POST",
    "category": "object"
  },
  {
    "name": "waving_white_flag",
    "unicode": {"apple":"1F3F3", "google":"1F3F3", "twitter":"1F3F3"},
    "shortcode": "waving_white_flag",
    "description": "WAVING WHITE FLAG",
    "category": "object"
  },
  {
    "name": "waving_black_flag",
    "unicode": {"apple":"1F3F4", "google":"1F3F4", "twitter":"1F3F4"},
    "shortcode": "waving_black_flag",
    "description": "WAVING BLACK FLAG",
    "category": "object"
  },
  {
    "name": "closed_lock_with_key",
    "unicode": {"apple":"1F510", "google":"1F510", "twitter":"1F510"},
    "shortcode": "closed_lock_with_key",
    "description": "CLOSED LOCK WITH KEY",
    "category": "object"
  },
  {
    "name": "lock",
    "unicode": {"apple":"1F512", "google":"1F512", "twitter":"1F512"},
    "shortcode": "lock",
    "description": "LOCK",
    "category": "object"
  },
  {
    "name": "unlock",
    "unicode": {"apple":"1F513", "google":"1F513", "twitter":"1F513"},
    "shortcode": "unlock",
    "description": "OPEN LOCK",
    "category": "object"
  },
  {
    "name": "lock_with_ink_pen",
    "unicode": {"apple":"1F50F", "google":"1F50F", "twitter":"1F50F"},
    "shortcode": "lock_with_ink_pen",
    "description": "LOCK WITH INK PEN",
    "category": "object"
  },
  {
    "name": "lower_left_ballpoint_pen",
    "unicode": {"apple":"1F58A", "google":"1F58A", "twitter":"1F58A"},
    "shortcode": "lower_left_ballpoint_pen",
    "description": "LOWER LEFT BALLPOINT PEN",
    "category": "object"
  },
  {
    "name": "lower_left_fountain_pen",
    "unicode": {"apple":"1F58B", "google":"1F58B", "twitter":"1F58B"},
    "shortcode": "lower_left_fountain_pen",
    "description": "LOWER LEFT FOUNTAIN PEN",
    "category": "object"
  },
  {
    "name": "black_nib",
    "unicode": {"apple":"2712", "google":"2712", "twitter":"2712"},
    "shortcode": "black_nib",
    "description": "BLACK NIB",
    "category": "folderol"
  },
  {
    "name": "memo",
    "unicode": {"apple":"1F4DD", "google":"1F4DD", "twitter":"1F4DD"},
    "shortcode": "memo",
    "description": "MEMO",
    "category": "object"
  },
  {
    "name": "pencil2",
    "unicode": {"apple":"270F-FE0F", "google":"270F-FE0F", "twitter":"270F-FE0F"},
    "shortcode": "pencil2",
    "description": "PENCIL",
    "category": "object"
  },
  {
    "name": "lower_left_crayon",
    "unicode": {"apple":"1F58D", "google":"1F58D", "twitter":"1F58D"},
    "shortcode": "lower_left_crayon",
    "description": "LOWER LEFT CRAYON",
    "category": "object"
  },
  {
    "name": "lower_left_paintbrush",
    "unicode": {"apple":"1F58C", "google":"1F58C", "twitter":"1F58C"},
    "shortcode": "lower_left_paintbrush",
    "description": "LOWER LEFT PAINTBRUSH",
    "category": "object"
  },
  {
    "name": "mag",
    "unicode": {"apple":"1F50D", "google":"1F50D", "twitter":"1F50D"},
    "shortcode": "mag",
    "description": "LEFT-POINTING MAGNIFYING GLASS",
    "category": "object"
  },
  {
    "name": "mag_right",
    "unicode": {"apple":"1F50E", "google":"1F50E", "twitter":"1F50E"},
    "shortcode": "mag_right",
    "description": "RIGHT-POINTING MAGNIFYING GLASS",
    "category": "object"
  },
  {
    "name": "heart",
    "unicode": {"apple":"2764", "google":"2764", "twitter":"2764"},
    "shortcode": "heart",
    "description": "HEAVY BLACK HEART",
    "category": "symbol"
  },
  {
    "name": "yellow_heart",
    "unicode": {"apple":"1F49B", "google":"1F49B", "twitter":"1F49B"},
    "shortcode": "yellow_heart",
    "description": "YELLOW HEART",
    "category": "symbol"
  },
  {
    "name": "green_heart",
    "unicode": {"apple":"1F49A", "google":"1F49A", "twitter":"1F49A"},
    "shortcode": "green_heart",
    "description": "GREEN HEART",
    "category": "symbol"
  },
  {
    "name": "blue_heart",
    "unicode": {"apple":"1F499", "google":"1F499", "twitter":"1F499"},
    "shortcode": "blue_heart",
    "description": "BLUE HEART",
    "category": "symbol"
  },
  {
    "name": "purple_heart",
    "unicode": {"apple":"1F49C", "google":"1F49C", "twitter":"1F49C"},
    "shortcode": "purple_heart",
    "description": "PURPLE HEART",
    "category": "symbol"
  },
  {
    "name": "broken_heart",
    "unicode": {"apple":"1F494", "google":"1F494", "twitter":"1F494"},
    "shortcode": "broken_heart",
    "description": "BROKEN HEART",
    "category": "symbol"
  },
  {
    "name": "heavy_heart_exclamation_mark_ornament",
    "unicode": {"apple":"2763", "google":"2763", "twitter":"2763"},
    "shortcode": "heavy_heart_exclamation_mark_ornament",
    "description": "HEAVY HEART EXCLAMATION MARK ORNAMENT",
    "category": "symbol"
  },
  {
    "name": "two_hearts",
    "unicode": {"apple":"1F495", "google":"1F495", "twitter":"1F495"},
    "shortcode": "two_hearts",
    "description": "TWO HEARTS",
    "category": "symbol"
  },
  {
    "name": "revolving_hearts",
    "unicode": {"apple":"1F49E", "google":"1F49E", "twitter":"1F49E"},
    "shortcode": "revolving_hearts",
    "description": "REVOLVING HEARTS",
    "category": "symbol"
  },
  {
    "name": "heartbeat",
    "unicode": {"apple":"1F493", "google":"1F493", "twitter":"1F493"},
    "shortcode": "heartbeat",
    "description": "BEATING HEART",
    "category": "symbol"
  },
  {
    "name": "heartpulse",
    "unicode": {"apple":"1F497", "google":"1F497", "twitter":"1F497"},
    "shortcode": "heartpulse",
    "description": "GROWING HEART",
    "category": "symbol"
  },
  {
    "name": "sparkling_heart",
    "unicode": {"apple":"1F496", "google":"1F496", "twitter":"1F496"},
    "shortcode": "sparkling_heart",
    "description": "SPARKLING HEART",
    "category": "symbol"
  },
  {
    "name": "cupid",
    "unicode": {"apple":"1F498", "google":"1F498", "twitter":"1F498"},
    "shortcode": "cupid",
    "description": "HEART WITH ARROW",
    "category": "symbol"
  },
  {
    "name": "gift_heart",
    "unicode": {"apple":"1F49D", "google":"1F49D", "twitter":"1F49D"},
    "shortcode": "gift_heart",
    "description": "HEART WITH RIBBON",
    "category": "symbol"
  },
  {
    "name": "heart_decoration",
    "unicode": {"apple":"1F49F", "google":"1F49F", "twitter":"1F49F"},
    "shortcode": "heart_decoration",
    "description": "HEART DECORATION",
    "category": "symbol"
  },
  {
    "name": "peace_symbol",
    "unicode": {"apple":"262E", "google":"262E", "twitter":"262E"},
    "shortcode": "peace_symbol",
    "description": "PEACE SYMBOL",
    "category": "symbol"
  },
  {
    "name": "latin_cross",
    "unicode": {"apple":"271D", "google":"271D", "twitter":"271D"},
    "shortcode": "latin_cross",
    "description": "LATIN CROSS",
    "category": "symbol"
  },
  {
    "name": "star_and_crescent",
    "unicode": {"apple":"262A", "google":"262A", "twitter":"262A"},
    "shortcode": "star_and_crescent",
    "description": "STAR AND CRESCENT",
    "category": "symbol"
  },
  {
    "name": "om_symbol",
    "unicode": {"apple":"1F549", "google":"1F549", "twitter":"1F549"},
    "shortcode": "om_symbol",
    "description": "OM SYMBOL",
    "category": "symbol"
  },
  {
    "name": "wheel_of_dharma",
    "unicode": {"apple":"2638", "google":"2638", "twitter":"2638"},
    "shortcode": "wheel_of_dharma",
    "description": "WHEEL OF DHARMA",
    "category": "symbol"
  },
  {
    "name": "star_of_david",
    "unicode": {"apple":"2721", "google":"2721", "twitter":"2721"},
    "shortcode": "star_of_david",
    "description": "STAR OF DAVID",
    "category": "symbol"
  },
  {
    "name": "six_pointed_star",
    "unicode": {"apple":"1F52F", "google":"1F52F", "twitter":"1F52F"},
    "shortcode": "six_pointed_star",
    "description": "SIX POINTED STAR WITH MIDDLE DOT",
    "category": "symbol"
  },
  {
    "name": "menorah_with_nine_branches",
    "unicode": {"apple":"1F54E", "google":"1F54E", "twitter":"1F54E"},
    "shortcode": "menorah_with_nine_branches",
    "description": "MENORAH WITH NINE BRANCHES",
    "category": "symbol"
  },
  {
    "name": "yin_yang",
    "unicode": {"apple":"262F", "google":"262F", "twitter":"262F"},
    "shortcode": "yin_yang",
    "description": "YIN YANG",
    "category": "symbol"
  },
  {
    "name": "orthodox_cross",
    "unicode": {"apple":"2626", "google":"2626", "twitter":"2626"},
    "shortcode": "orthodox_cross",
    "description": "ORTHODOX CROSS",
    "category": "symbol"
  },
  {
    "name": "place_of_worship",
    "unicode": {"apple":"1F6D0", "google":"1F6D0", "twitter":"1F6D0"},
    "shortcode": "place_of_worship",
    "description": "PLACE OF WORSHIP",
    "category": "symbol"
  },
  {
    "name": "ophiuchus",
    "unicode": {"apple":"26CE", "google":"26CE", "twitter":"26CE"},
    "shortcode": "ophiuchus",
    "description": "OPHIUCHUS",
    "category": "symbol"
  },
  {
    "name": "aries",
    "unicode": {"apple":"2648", "google":"2648", "twitter":"2648"},
    "shortcode": "aries",
    "description": "ARIES",
    "category": "symbol"
  },
  {
    "name": "taurus",
    "unicode": {"apple":"2649", "google":"2649", "twitter":"2649"},
    "shortcode": "taurus",
    "description": "TAURUS",
    "category": "symbol"
  },
  {
    "name": "gemini",
    "unicode": {"apple":"264A", "google":"264A", "twitter":"264A"},
    "shortcode": "gemini",
    "description": "GEMINI",
    "category": "symbol"
  },
  {
    "name": "cancer",
    "unicode": {"apple":"264B", "google":"264B", "twitter":"264B"},
    "shortcode": "cancer",
    "description": "CANCER",
    "category": "symbol"
  },
  {
    "name": "leo",
    "unicode": {"apple":"264C", "google":"264C", "twitter":"264C"},
    "shortcode": "leo",
    "description": "LEO",
    "category": "symbol"
  },
  {
    "name": "virgo",
    "unicode": {"apple":"264D", "google":"264D", "twitter":"264D"},
    "shortcode": "virgo",
    "description": "VIRGO",
    "category": "symbol"
  },
  {
    "name": "libra",
    "unicode": {"apple":"264E", "google":"264E", "twitter":"264E"},
    "shortcode": "libra",
    "description": "LIBRA",
    "category": "symbol"
  },
  {
    "name": "scorpius",
    "unicode": {"apple":"264F", "google":"264F", "twitter":"264F"},
    "shortcode": "scorpius",
    "description": "SCORPIUS",
    "category": "symbol"
  },
  {
    "name": "sagittarius",
    "unicode": {"apple":"2650", "google":"2650", "twitter":"2650"},
    "shortcode": "sagittarius",
    "description": "SAGITTARIUS",
    "category": "symbol"
  },
  {
    "name": "capricorn",
    "unicode": {"apple":"2651", "google":"2651", "twitter":"2651"},
    "shortcode": "capricorn",
    "description": "CAPRICORN",
    "category": "symbol"
  },
  {
    "name": "aquarius",
    "unicode": {"apple":"2652", "google":"2652", "twitter":"2652"},
    "shortcode": "aquarius",
    "description": "AQUARIUS",
    "category": "symbol"
  },
  {
    "name": "pisces",
    "unicode": {"apple":"2653", "google":"2653", "twitter":"2653"},
    "shortcode": "pisces",
    "description": "PISCES",
    "category": "symbol"
  },
  {
    "name": "id",
    "unicode": {"apple":"1F194", "google":"1F194", "twitter":"1F194"},
    "shortcode": "id",
    "description": "SQUARED ID",
    "category": "symbol"
  },
  {
    "name": "atom_symbol",
    "unicode": {"apple":"269B", "google":"269B", "twitter":"269B"},
    "shortcode": "atom_symbol",
    "description": "ATOM SYMBOL",
    "category": "symbol"
  },
  {
    "name": "u7a7a",
    "unicode": {"apple":"1F233", "google":"1F233", "twitter":"1F233"},
    "shortcode": "u7a7a",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7A7A",
    "category": "symbol"
  },
  {
    "name": "u5272",
    "unicode": {"apple":"1F239", "google":"1F239", "twitter":"1F239"},
    "shortcode": "u5272",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-5272",
    "category": "symbol"
  },
  {
    "name": "radioactive_sign",
    "unicode": {"apple":"2622", "google":"2622", "twitter":"2622"},
    "shortcode": "radioactive_sign",
    "description": "RADIOACTIVE SIGN",
    "category": "symbol"
  },
  {
    "name": "biohazard_sign",
    "unicode": {"apple":"2623", "google":"2623", "twitter":"2623"},
    "shortcode": "biohazard_sign",
    "description": "BIOHAZARD SIGN",
    "category": "symbol"
  },
  {
    "name": "mobile_phone_off",
    "unicode": {"apple":"1F4F4", "google":"1F4F4", "twitter":"1F4F4"},
    "shortcode": "mobile_phone_off",
    "description": "MOBILE PHONE OFF",
    "category": "symbol"
  },
  {
    "name": "vibration_mode",
    "unicode": {"apple":"1F4F3", "google":"1F4F3", "twitter":"1F4F3"},
    "shortcode": "vibration_mode",
    "description": "VIBRATION MODE",
    "category": "symbol"
  },
  {
    "name": "u6709",
    "unicode": {"apple":"1F236", "google":"1F236", "twitter":"1F236"},
    "shortcode": "u6709",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6709",
    "category": "symbol"
  },
  {
    "name": "u7121",
    "unicode": {"apple":"1F21A", "google":"1F21A", "twitter":"1F21A"},
    "shortcode": "u7121",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7121",
    "category": "symbol"
  },
  {
    "name": "u7533",
    "unicode": {"apple":"1F238", "google":"1F238", "twitter":"1F238"},
    "shortcode": "u7533",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7533",
    "category": "symbol"
  },
  {
    "name": "u55b6",
    "unicode": {"apple":"1F23A", "google":"1F23A", "twitter":"1F23A"},
    "shortcode": "u55b6",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-55B6",
    "category": "symbol"
  },
  {
    "name": "u6708",
    "unicode": {"apple":"1F237", "google":"1F237", "twitter":"1F237"},
    "shortcode": "u6708",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6708",
    "category": "symbol"
  },
  {
    "name": "eight_pointed_black_star",
    "unicode": {"apple":"2734", "google":"2734", "twitter":"2734"},
    "shortcode": "eight_pointed_black_star",
    "description": "EIGHT POINTED BLACK STAR",
    "category": "symbol"
  },
  {
    "name": "vs",
    "unicode": {"apple":"1F19A", "google":"1F19A", "twitter":"1F19A"},
    "shortcode": "vs",
    "description": "SQUARED VS",
    "category": "symbol"
  },
  {
    "name": "accept",
    "unicode": {"apple":"1F251", "google":"1F251", "twitter":"1F251"},
    "shortcode": "accept",
    "description": "CIRCLED IDEOGRAPH ACCEPT",
    "category": "symbol"
  },
  {
    "name": "white_flower",
    "unicode": {"apple":"1F4AE", "google":"1F4AE", "twitter":"1F4AE"},
    "shortcode": "white_flower",
    "description": "WHITE FLOWER",
    "category": "symbol"
  },
  {
    "name": "ideograph_advantage",
    "unicode": {"apple":"1F250", "google":"1F250", "twitter":"1F250"},
    "shortcode": "ideograph_advantage",
    "description": "CIRCLED IDEOGRAPH ADVANTAGE",
    "category": "symbol"
  },
  {
    "name": "secret",
    "unicode": {"apple":"3299", "google":"3299", "twitter":"3299"},
    "shortcode": "secret",
    "description": "CIRCLED IDEOGRAPH SECRET",
    "category": "symbol"
  },
  {
    "name": "congratulations",
    "unicode": {"apple":"3297", "google":"3297", "twitter":"3297"},
    "shortcode": "congratulations",
    "description": "CIRCLED IDEOGRAPH CONGRATULATION",
    "category": "symbol"
  },
  {
    "name": "u5408",
    "unicode": {"apple":"1F234", "google":"1F234", "twitter":"1F234"},
    "shortcode": "u5408",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-5408",
    "category": "symbol"
  },
  {
    "name": "u6e80",
    "unicode": {"apple":"1F235", "google":"1F235", "twitter":"1F235"},
    "shortcode": "u6e80",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6E80",
    "category": "symbol"
  },
  {
    "name": "u7981",
    "unicode": {"apple":"1F232", "google":"1F232", "twitter":"1F232"},
    "shortcode": "u7981",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7981",
    "category": "symbol"
  },
  {
    "name": "a",
    "unicode": {"apple":"1F170", "google":"1F170", "twitter":"1F170"},
    "shortcode": "a",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER A",
    "category": "symbol"
  },
  {
    "name": "b",
    "unicode": {"apple":"1F171", "google":"1F171", "twitter":"1F171"},
    "shortcode": "b",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER B",
    "category": "symbol"
  },
  {
    "name": "ab",
    "unicode": {"apple":"1F18E", "google":"1F18E", "twitter":"1F18E"},
    "shortcode": "ab",
    "description": "NEGATIVE SQUARED AB",
    "category": "symbol"
  },
  {
    "name": "cl",
    "unicode": {"apple":"1F191", "google":"1F191", "twitter":"1F191"},
    "shortcode": "cl",
    "description": "SQUARED CL",
    "category": "symbol"
  },
  {
    "name": "o2",
    "unicode": {"apple":"1F17E", "google":"1F17E", "twitter":"1F17E"},
    "shortcode": "o2",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER O",
    "category": "symbol"
  },
  {
    "name": "sos",
    "unicode": {"apple":"1F198", "google":"1F198", "twitter":"1F198"},
    "shortcode": "sos",
    "description": "SQUARED SOS",
    "category": "symbol"
  },
  {
    "name": "no_entry",
    "unicode": {"apple":"26D4", "google":"26D4", "twitter":"26D4"},
    "shortcode": "no_entry",
    "description": "NO ENTRY",
    "category": "symbol"
  },
    {
    "name": "name_badge",
    "unicode": {"apple":"1F4DB", "google":"1F4DB", "twitter":"1F4DB"},
    "shortcode": "name_badge",
    "description": "NAME BADGE",
    "category": "symbol"
  },
  {
    "name": "no_entry_sign",
    "unicode": {"apple":"1F6AB", "google":"1F6AB", "twitter":"1F6AB"},
    "shortcode": "no_entry_sign",
    "description": "NO ENTRY SIGN",
    "category": "symbol"
  },
  {
    "name": "x",
    "unicode": {"apple":"274C", "google":"274C", "twitter":"274C"},
    "shortcode": "x",
    "description": "CROSS MARK",
    "category": "symbol"
  },
  {
    "name": "o",
    "unicode": {"apple":"2B55", "google":"2B55", "twitter":"2B55"},
    "shortcode": "o",
    "description": "HEAVY LARGE CIRCLE",
    "category": "symbol"
  },
  {
    "name": "anger",
    "unicode": {"apple":"1F4A2", "google":"1F4A2", "twitter":"1F4A2"},
    "shortcode": "anger",
    "description": "ANGER SYMBOL",
    "category": "symbol"
  },
  {
    "name": "hotsprings",
    "unicode": {"apple":"2668", "google":"2668", "twitter":"2668"},
    "shortcode": "hotsprings",
    "description": "HOT SPRINGS",
    "category": "symbol"
  },
  {
    "name": "no_pedestrians",
    "unicode": {"apple":"1F6B7", "google":"1F6B7", "twitter":"1F6B7"},
    "shortcode": "no_pedestrians",
    "description": "NO PEDESTRIANS",
    "category": "symbol"
  },
  {
    "name": "do_not_litter",
    "unicode": {"apple":"1F6AF", "google":"1F6AF", "twitter":"1F6AF"},
    "shortcode": "do_not_litter",
    "description": "DO NOT LITTER SYMBOL",
    "category": "symbol"
  },
  {
    "name": "no_bicycles",
    "unicode": {"apple":"1F6B3", "google":"1F6B3", "twitter":"1F6B3"},
    "shortcode": "no_bicycles",
    "description": "NO BICYCLES",
    "category": "symbol"
  },
  {
    "name": "non-potable_water",
    "unicode": {"apple":"1F6B1", "google":"1F6B1", "twitter":"1F6B1"},
    "shortcode": "non-potable_water",
    "description": "NON-POTABLE WATER SYMBOL",
    "category": "symbol"
  },
  {
    "name": "underage",
    "unicode": {"apple":"1F51E", "google":"1F51E", "twitter":"1F51E"},
    "shortcode": "underage",
    "description": "NO ONE UNDER EIGHTEEN SYMBOL",
    "category": "symbol"
  },
  {
    "name": "no_mobile_phones",
    "unicode": {"apple":"1F4F5", "google":"1F4F5", "twitter":"1F4F5"},
    "shortcode": "no_mobile_phones",
    "description": "NO MOBILE PHONES",
    "category": "symbol"
  },
  {
    "name": "no_smoking",
    "unicode": {"apple":"1F6AD", "google":"1F6AD", "twitter":"1F6AD"},
    "shortcode": "no_smoking",
    "description": "NO SMOKING SYMBOL",
    "category": "symbol"
  },
  {
    "name": "exclamation",
    "unicode": {"apple":"2757", "google":"2757", "twitter":"2757"},
    "shortcode": "exclamation",
    "description": "HEAVY EXCLAMATION MARK SYMBOL",
    "category": "symbol"
  },
  {
    "name": "grey_exclamation",
    "unicode": {"apple":"2755", "google":"2755", "twitter":"2755"},
    "shortcode": "grey_exclamation",
    "description": "WHITE EXCLAMATION MARK ORNAMENT",
    "category": "symbol"
  },
  {
    "name": "question",
    "unicode": {"apple":"2753", "google":"2753", "twitter":"2753"},
    "shortcode": "question",
    "description": "BLACK QUESTION MARK ORNAMENT",
    "category": "symbol"
  },
  {
    "name": "grey_question",
    "unicode": {"apple":"2754", "google":"2754", "twitter":"2754"},
    "shortcode": "grey_question",
    "description": "WHITE QUESTION MARK ORNAMENT",
    "category": "symbol"
  },
  {
    "name": "bangbang",
    "unicode": {"apple":"203C", "google":"203C", "twitter":"203C"},
    "shortcode": "bangbang",
    "description": "DOUBLE EXCLAMATION MARK",
    "category": "symbol"
  },
  {
    "name": "interrobang",
    "unicode": {"apple":"2049", "google":"2049", "twitter":"2049"},
    "shortcode": "interrobang",
    "description": "EXCLAMATION QUESTION MARK",
    "category": "symbol"
  },
  {
    "name": "100",
    "unicode": {"apple":"1F4AF", "google":"1F4AF", "twitter":"1F4AF"},
    "shortcode": "100",
    "description": "HUNDRED POINTS SYMBOL",
    "category": "symbol"
  },
  {
    "name": "low_brightness",
    "unicode": {"apple":"1F505", "google":"1F505", "twitter":"1F505"},
    "shortcode": "low_brightness",
    "description": "LOW BRIGHTNESS SYMBOL",
    "category": "symbol"
  },
  {
    "name": "high_brightness",
    "unicode": {"apple":"1F506", "google":"1F506", "twitter":"1F506"},
    "shortcode": "high_brightness",
    "description": "HIGH BRIGHTNESS SYMBOL",
    "category": "symbol"
  },
  {
    "name": "trident",
    "unicode": {"apple":"1F531", "google":"1F531", "twitter":"1F531"},
    "shortcode": "trident",
    "description": "TRIDENT EMBLEM",
    "category": "symbol"
  },
  {
    "name": "fleur_de_lis",
    "unicode": {"apple":"269C", "google":"269C", "twitter":"269C"},
    "shortcode": "fleur_de_lis",
    "description": "FLEUR-DE-LIS",
    "category": "symbol"
  },
  {
    "name": "part_alternation_mark",
    "unicode": {"apple":"303D", "google":"303D", "twitter":"303D"},
    "shortcode": "part_alternation_mark",
    "description": "PART ALTERNATION MARK",
    "category": "symbol"
  },
  {
    "name": "warning",
    "unicode": {"apple":"26A0", "google":"26A0", "twitter":"26A0"},
    "shortcode": "warning",
    "description": "WARNING SIGN",
    "category": "symbol"
  },
  {
    "name": "children_crossing",
    "unicode": {"apple":"1F6B8", "google":"1F6B8", "twitter":"1F6B8"},
    "shortcode": "children_crossing",
    "description": "CHILDREN CROSSING",
    "category": "symbol"
  },
  {
    "name": "beginner",
    "unicode": {"apple":"1F530", "google":"1F530", "twitter":"1F530"},
    "shortcode": "beginner",
    "description": "JAPANESE SYMBOL FOR BEGINNER",
    "category": "symbol"
  },
  {
    "name": "recycle",
    "unicode": {"apple":"267B", "google":"267B", "twitter":"267B"},
    "shortcode": "recycle",
    "description": "BLACK UNIVERSAL RECYCLING SYMBOL",
    "category": "symbol"
  },
  {
    "name": "u6307",
    "unicode": {"apple":"1F22F", "google":"1F22F", "twitter":"1F22F"},
    "shortcode": "u6307",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6307",
    "category": "symbol"
  },
  {
    "name": "chart",
    "unicode": {"apple":"1F4B9", "google":"1F4B9", "twitter":"1F4B9"},
    "shortcode": "chart",
    "description": "CHART WITH UPWARDS TREND AND YEN SIGN",
    "category": "symbol"
  },
  {
    "name": "sparkle",
    "unicode": {"apple":"2747", "google":"2747", "twitter":"2747"},
    "shortcode": "sparkle",
    "description": "SPARKLE",
    "category": "symbol"
  },
  {
    "name": "eight_spoked_asterisk",
    "unicode": {"apple":"2733-FE0F", "google":"2733-FE0F", "twitter":"2733-FE0F"},
    "shortcode": "eight_spoked_asterisk",
    "description": "EIGHT SPOKED ASTERISK",
    "category": "symbol"
  },
  {
    "name": "negative_squared_cross_mark",
    "unicode": {"apple":"274E", "google":"274E", "twitter":"274E"},
    "shortcode": "negative_squared_cross_mark",
    "description": "NEGATIVE SQUARED CROSS MARK",
    "category": "symbol"
  },
  {
    "name": "white_check_mark",
    "unicode": {"apple":"2705", "google":"2705", "twitter":"2705"},
    "shortcode": "white_check_mark",
    "description": "WHITE HEAVY CHECK MARK",
    "category": "symbol"
  },
  {
    "name": "diamond_shape_with_a_dot_inside",
    "unicode": {"apple":"1F4A0", "google":"1F4A0", "twitter":"1F4A0"},
    "shortcode": "diamond_shape_with_a_dot_inside",
    "description": "DIAMOND SHAPE WITH A DOT INSIDE",
    "category": "symbol"
  },
  {
    "name": "cyclone",
    "unicode": {"apple":"1F300", "google":"1F300", "twitter":"1F300"},
    "shortcode": "cyclone",
    "description": "CYCLONE",
    "category": "symbol"
  },
  {
    "name": "loop",
    "unicode": {"apple":"27BF", "google":"27BF", "twitter":"27BF"},
    "shortcode": "loop",
    "description": "DOUBLE CURLY LOOP",
    "category": "symbol"
  },
  {
    "name": "globe_with_meridians",
    "unicode": {"apple":"1F310", "google":"1F310", "twitter":"1F310"},
    "shortcode": "globe_with_meridians",
    "description": "GLOBE WITH MERIDIANS",
    "category": "symbol"
  },
  {
    "name": "m",
    "unicode": {"apple":"24C2", "google":"24C2", "twitter":"24C2"},
    "shortcode": "m",
    "description": "CIRCLED LATIN CAPITAL LETTER M",
    "category": "symbol"
  },
  {
    "name": "atm",
    "unicode": {"apple":"1F3E7", "google":"1F3E7", "twitter":"1F3E7"},
    "shortcode": "atm",
    "description": "AUTOMATED TELLER MACHINE",
    "category": "symbol"
  },
  {
    "name": "sa",
    "unicode": {"apple":"1F202", "google":"1F202", "twitter":"1F202"},
    "shortcode": "sa",
    "description": "SQUARED KATAKANA SA",
    "category": "symbol"
  },
  {
    "name": "passport_control",
    "unicode": {"apple":"1F6C2", "google":"1F6C2", "twitter":"1F6C2"},
    "shortcode": "passport_control",
    "description": "PASSPORT CONTROL",
    "category": "symbol"
  },
  {
    "name": "customs",
    "unicode": {"apple":"1F6C3", "google":"1F6C3", "twitter":"1F6C3"},
    "shortcode": "customs",
    "description": "CUSTOMS",
    "category": "symbol"
  },
  {
    "name": "baggage_claim",
    "unicode": {"apple":"1F6C4", "google":"1F6C4", "twitter":"1F6C4"},
    "shortcode": "baggage_claim",
    "description": "BAGGAGE CLAIM",
    "category": "symbol"
  },
  {
    "name": "left_luggage",
    "unicode": {"apple":"1F6C5", "google":"1F6C5", "twitter":"1F6C5"},
    "shortcode": "left_luggage",
    "description": "LEFT LUGGAGE",
    "category": "symbol"
  },
    {
    "name": "wheelchair",
    "unicode": {"apple":"267F", "google":"267F", "twitter":"267F"},
    "shortcode": "wheelchair",
    "description": "WHEELCHAIR SYMBOL",
    "category": "symbol"
  },
  {
    "name": "wc",
    "unicode": {"apple":"1F6BE", "google":"1F6BE", "twitter":"1F6BE"},
    "shortcode": "wc",
    "description": "WATER CLOSET",
    "category": "symbol"
  },
  {
    "name": "parking",
    "unicode": {"apple":"1F17F", "google":"1F17F", "twitter":"1F17F"},
    "shortcode": "parking",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER P",
    "category": "symbol"
  },
  {
    "name": "potable_water",
    "unicode": {"apple":"1F6B0", "google":"1F6B0", "twitter":"1F6B0"},
    "shortcode": "potable_water",
    "description": "POTABLE WATER SYMBOL",
    "category": "symbol"
  },
  {
    "name": "mens",
    "unicode": {"apple":"1F6B9", "google":"1F6B9", "twitter":"1F6B9"},
    "shortcode": "mens",
    "description": "MENS SYMBOL",
    "category": "symbol"
  },
  {
    "name": "womens",
    "unicode": {"apple":"1F6BA", "google":"1F6BA", "twitter":"1F6BA"},
    "shortcode": "womens",
    "description": "WOMENS SYMBOL",
    "category": "symbol"
  },
  {
    "name": "baby_symbol",
    "unicode": {"apple":"1F6BC", "google":"1F6BC", "twitter":"1F6BC"},
    "shortcode": "baby_symbol",
    "description": "BABY SYMBOL",
    "category": "symbol"
  },
  {
    "name": "restroom",
    "unicode": {"apple":"", "google":"1F6BB", "twitter":"1F6BB"},
    "shortcode": "restroom",
    "description": "RESTROOM",
    "category": "symbol"
  },
  {
    "name": "put_litter_in_its_place",
    "unicode": {"apple":"1F6AE", "google":"1F6AE", "twitter":"1F6AE"},
    "shortcode": "put_litter_in_its_place",
    "description": "PUT LITTER IN ITS PLACE SYMBOL",
    "category": "symbol"
  },
  {
    "name": "cinema",
    "unicode": {"apple":"1F3A6", "google":"1F3A6", "twitter":"1F3A6"},
    "shortcode": "cinema",
    "description": "CINEMA",
    "category": "symbol"
  },
  {
    "name": "signal_strength",
    "unicode": {"apple":"1F4F6", "google":"1F4F6", "twitter":"1F4F6"},
    "shortcode": "signal_strength",
    "description": "ANTENNA WITH BARS",
    "category": "symbol"
  },
  {
    "name": "koko",
    "unicode": {"apple":"", "google":"1F201", "twitter":"1F201"},
    "shortcode": "koko",
    "description": "SQUARED KATAKANA KOKO",
    "category": "symbol"
  },
  {
    "name": "ng",
    "unicode": {"apple":"1F196", "google":"1F196", "twitter":"1F196"},
    "shortcode": "ng",
    "description": "SQUARED NG",
    "category": "symbol"
  },
  {
    "name": "ok",
    "unicode": {"apple":"1F197", "google":"1F197", "twitter":"1F197"},
    "shortcode": "ok",
    "description": "SQUARED OK",
    "category": "symbol"
  },
  {
    "name": "up",
    "unicode": {"apple":"1F199", "google":"1F199", "twitter":"1F199"},
    "shortcode": "up",
    "description": "SQUARED UP WITH EXCLAMATION MARK",
    "category": "symbol"
  },
  {
    "name": "cool",
    "unicode": {"apple":"1F192", "google":"1F192", "twitter":"1F192"},
    "shortcode": "cool",
    "description": "SQUARED COOL",
    "category": "symbol"
  },
  {
    "name": "new",
    "unicode": {"apple":"1F195", "google":"1F195", "twitter":"1F195"},
    "shortcode": "new",
    "description": "SQUARED NEW",
    "category": "symbol"
  },
  {
    "name": "free",
    "unicode": {"apple":"1F193", "google":"1F193", "twitter":"1F193"},
    "shortcode": "free",
    "description": "SQUARED FREE",
    "category": "symbol"
  },
  {
    "name": "zero",
    "unicode": {"apple":"0030-20E3", "google":"0030-20E3", "twitter":"0030-20E3"},
    "shortcode": "zero",
    "description": "KEYCAP 0",
    "category": "symbol"
  },
  {
    "name": "one",
    "unicode": {"apple":"0031-20E3", "google":"0031-20E3", "twitter":"0031-20E3"},
    "shortcode": "one",
    "description": "KEYCAP 1",
    "category": "symbol"
  },
  {
    "name": "two",
    "unicode": {"apple":"0032-20E3", "google":"0032-20E3", "twitter":"0032-20E3"},
    "shortcode": "two",
    "description": "KEYCAP 2",
    "category": "symbol"
  },
  {
    "name": "three",
    "unicode": {"apple":"0033-20E3", "google":"0033-20E3", "twitter":"0033-20E3"},
    "shortcode": "three",
    "description": "KEYCAP 3",
    "category": "symbol"
  },
  {
    "name": "four",
    "unicode": {"apple":"0034-20E3", "google":"0034-20E3", "twitter":"0034-20E3"},
    "shortcode": "four",
    "description": "KEYCAP 4",
    "category": "symbol"
  },
  {
    "name": "five",
    "unicode": {"apple":"0035-20E3", "google":"0035-20E3", "twitter":"0035-20E3"},
    "shortcode": "five",
    "description": "KEYCAP 5",
    "category": "symbol"
  },
  {
    "name": "six",
    "unicode": {"apple":"0036-20E3", "google":"0036-20E3", "twitter":"0036-20E3"},
    "shortcode": "six",
    "description": "KEYCAP 6",
    "category": "symbol"
  },
  {
    "name": "seven",
    "unicode": {"apple":"0037-20E3", "google":"0037-20E3", "twitter":"0037-20E3"},
    "shortcode": "seven",
    "description": "KEYCAP 7",
    "category": "symbol"
  },
  {
    "name": "eight",
    "unicode": {"apple":"0038-20E3", "google":"0038-20E3", "twitter":"0038-20E3"},
    "shortcode": "eight",
    "description": "KEYCAP 8",
    "category": "symbol"
  },
  {
    "name": "nine",
    "unicode": {"apple":"0039-20E3", "google":"0039-20E3", "twitter":"0039-20E3"},
    "shortcode": "nine",
    "description": "KEYCAP 9",
    "category": "symbol"
  },
  {
    "name": "keycap_ten",
    "unicode": {"apple":"1F51F", "google":"1F51F", "twitter":"1F51F"},
    "shortcode": "keycap_ten",
    "description": "KEYCAP TEN",
    "category": "symbol"
  },
  {
    "name": "1234",
    "unicode": {"apple":"1F522", "google":"1F522", "twitter":"1F522"},
    "shortcode": "1234",
    "description": "INPUT SYMBOL FOR NUMBERS",
    "category": "symbol"
  },
  {
    "name": "arrow_forward",
    "unicode": {"apple":"25B6", "google":"25B6", "twitter":"25B6"},
    "shortcode": "arrow_forward",
    "description": "BLACK RIGHT-POINTING TRIANGLE",
    "category": "symbol"
  },
  {
    "name": "double_vertical_bar",
    "unicode": {"apple":"23F8", "google":"23F8", "twitter":"23F8"},
    "shortcode": "double_vertical_bar",
    "description": "DOUBLE VERTICAL BAR"
  },
  {
    "name": "black_right_pointing_triangle_with_double_vertical_bar",
    "unicode": {"apple":"23EF", "google":"23EF", "twitter":"23EF"},
    "shortcode": "black_right_pointing_triangle_with_double_vertical_bar",
    "description": "BLACK RIGHT-POINTING TRIANGLE WITH DOUBLE VERTICAL BAR"
  },
  {
    "name": "black_square_for_stop",
    "unicode": {"apple":"23F9", "google":"23F9", "twitter":"23F9"},
    "shortcode": "black_square_for_stop",
    "description": "BLACK SQUARE FOR STOP"
  },
  {
    "name": "black_circle_for_record",
    "unicode": {"apple":"23FA", "google":"23FA", "twitter":"23FA"},
    "shortcode": "black_circle_for_record",
    "description": "BLACK CIRCLE FOR RECORD"
  },
  {
    "name": "black_right_pointing_double_triangle_with_vertical_bar",
    "unicode": {"apple":"23ED", "google":"23ED", "twitter":"23ED"},
    "shortcode": "black_right_pointing_double_triangle_with_vertical_bar",
    "description": "BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR"
  },
  {
    "name": "black_left_pointing_double_triangle_with_vertical_bar",
    "unicode": {"apple":"23EE", "google":"23EE", "twitter":"23EE"},
    "shortcode": "black_left_pointing_double_triangle_with_vertical_bar",
    "description": "BLACK LEFT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR"
  },
  {
    "name": "fast_forward",
    "unicode": {"apple":"23E9", "google":"23E9", "twitter":"23E9"},
    "shortcode": "fast_forward",
    "description": "BLACK RIGHT-POINTING DOUBLE TRIANGLE"
  },
  {
    "name": "rewind",
    "unicode": {"apple":"23EA", "google":"23EA", "twitter":"23EA"},
    "shortcode": "rewind",
    "description": "BLACK LEFT-POINTING DOUBLE TRIANGLE",
    "category": "symbol"
  },
  {
    "name": "twisted_rightwards_arrows",
    "unicode": {"apple":"1F500", "google":"1F500", "twitter":"1F500"},
    "shortcode": "twisted_rightwards_arrows",
    "description": "TWISTED RIGHTWARDS ARROWS",
    "category": "symbol"
  },
  {
    "name": "repeat",
    "unicode": {"apple":"1F501", "google":"1F501", "twitter":"1F501"},
    "shortcode": "repeat",
    "description": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS",
    "category": "symbol"
  },
  {
    "name": "repeat_one",
    "unicode": {"apple":"1F502", "google":"1F502", "twitter":"1F502"},
    "shortcode": "repeat_one",
    "description": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY",
    "category": "symbol"
  },
  {
    "name": "arrow_backward",
    "unicode": {"apple":"25C0", "google":"25C0", "twitter":"25C0"},
    "shortcode": "arrow_backward",
    "description": "BLACK LEFT-POINTING TRIANGLE",
    "category": "symbol"
  },
  {
    "name": "arrow_up_small",
    "unicode": {"apple":"1F53C", "google":"1F53C", "twitter":"1F53C"},
    "shortcode": "arrow_up_small",
    "description": "UP-POINTING SMALL RED TRIANGLE",
    "category": "symbol"
  },
  {
    "name": "arrow_down_small",
    "unicode": {"apple":"1F53D", "google":"1F53D", "twitter":"1F53D"},
    "shortcode": "arrow_down_small",
    "description": "DOWN-POINTING SMALL RED TRIANGLE",
    "category": "symbol"
  },
  {
    "name": "arrow_double_up",
    "unicode": {"apple":"23EB", "google":"23EB", "twitter":"23EB"},
    "shortcode": "arrow_double_up",
    "description": "BLACK UP-POINTING DOUBLE TRIANGLE",
    "category": "symbol"
  },
  {
    "name": "arrow_double_down",
    "unicode": {"apple":"23EC", "google":"23EC", "twitter":"23EC"},
    "shortcode": "arrow_double_down",
    "description": "BLACK DOWN-POINTING DOUBLE TRIANGLE",
    "category": "symbol"
  },
  {
    "name": "arrow_right",
    "unicode": {"apple":"27A1", "google":"27A1", "twitter":"27A1"},
    "shortcode": "arrow_right",
    "description": "BLACK RIGHTWARDS ARROW",
    "category": "symbol"
  },
  {
    "name": "arrow_left",
    "unicode": {"apple":"2B05", "google":"2B05", "twitter":"2B05"},
    "shortcode": "arrow_left",
    "description": "LEFTWARDS BLACK ARROW",
    "category": "symbol"
  },
  {
    "name": "arrow_up",
    "unicode": {"apple":"2B06", "google":"2B06", "twitter":"2B06"},
    "shortcode": "arrow_up",
    "description": "UPWARDS BLACK ARROW",
    "category": "symbol"
  },
  {
    "name": "arrow_down",
    "unicode": {"apple":"2B07", "google":"2B07", "twitter":"2B07"},
    "shortcode": "arrow_down",
    "description": "DOWNWARDS BLACK ARROW",
    "category": "symbol"
  },
  {
    "name": "arrow_upper_right",
    "unicode": {"apple":"2197", "google":"2197", "twitter":"2197"},
    "shortcode": "arrow_upper_right",
    "description": "NORTH EAST ARROW",
    "category": "symbol"
  },
  {
    "name": "arrow_lower_right",
    "unicode": {"apple":"2198", "google":"2198", "twitter":"2198"},
    "shortcode": "arrow_lower_right",
    "description": "SOUTH EAST ARROW",
    "category": "symbol"
  },
  {
    "name": "arrow_lower_left",
    "unicode": {"apple":"2199", "google":"2199", "twitter":"2199"},
    "shortcode": "arrow_lower_left",
    "description": "SOUTH WEST ARROW",
    "category": "symbol"
  },
  {
    "name": "arrow_upper_left",
    "unicode": {"apple":"2196", "google":"2196", "twitter":"2196"},
    "shortcode": "arrow_upper_left",
    "description": "NORTH WEST ARROW",
    "category": "symbol"
  },
  {
    "name": "arrow_up_down",
    "unicode": {"apple":"2195", "google":"2195", "twitter":"2195"},
    "shortcode": "arrow_up_down",
    "description": "UP DOWN ARROW",
    "category": "symbol"
  },
  {
    "name": "left_right_arrow",
    "unicode": {"apple":"2194", "google":"2194", "twitter":"2194"},
    "shortcode": "left_right_arrow",
    "description": "LEFT RIGHT ARROW",
    "category": "symbol"
  },
  {
    "name": "arrows_counterclockwise",
    "unicode": {"apple":"1F504", "google":"1F504", "twitter":"1F504"},
    "shortcode": "arrows_counterclockwise",
    "description": "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
    "category": "symbol"
  },
  {
    "name": "arrow_right_hook",
    "unicode": {"apple":"21AA", "google":"21AA", "twitter":"21AA"},
    "shortcode": "arrow_right_hook",
    "description": "RIGHTWARDS ARROW WITH HOOK",
    "category": "symbol"
  },
  {
    "name": "leftwards_arrow_with_hook",
    "unicode": {"apple":"21A9", "google":"21A9", "twitter":"21A9"},
    "shortcode": "leftwards_arrow_with_hook",
    "description": "LEFTWARDS ARROW WITH HOOK",
    "category": "symbol"
  },
  {
    "name": "arrow_heading_up",
    "unicode": {"apple":"2934", "google":"2934", "twitter":"2934"},
    "shortcode": "arrow_heading_up",
    "description": "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS",
    "category": "symbol"
  },
  {
    "name": "arrow_heading_down",
    "unicode": {"apple":"2935", "google":"2935", "twitter":"2935"},
    "shortcode": "arrow_heading_down",
    "description": "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS",
    "category": "symbol"
  },
  {
    "name": "arrows_clockwise",
    "unicode": {"apple":"1F503", "google":"1F503", "twitter":"1F503"},
    "shortcode": "arrows_clockwise",
    "description": "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
    "category": "symbol"
  },
  {
    "name": "hash",
    "unicode": {"apple":"0023-20E3", "google":"0023-20E3", "twitter":"0023-20E3"},
    "shortcode": "hash",
    "description": "HASH KEY",
    "category": "symbol"
  },
  {
    "name": "information_source",
    "unicode": {"apple":"2139", "google":"2139", "twitter":"2139"},
    "shortcode": "information_source",
    "description": "INFORMATION SOURCE",
    "category": "symbol"
  },
  {
    "name": "abc",
    "unicode": {"apple":"1F524", "google":"1F524", "twitter":"1F524"},
    "shortcode": "abc",
    "description": "INPUT SYMBOL FOR LATIN LETTERS",
    "category": "symbol"
  },
  {
    "name": "abcd",
    "unicode": {"apple":"1F521", "google":"1F521", "twitter":"1F521"},
    "shortcode": "abcd",
    "description": "INPUT SYMBOL FOR LATIN SMALL LETTERS",
    "category": "symbol"
  },
  {
    "name": "capital_abcd",
    "unicode": {"apple":"1F520", "google":"1F520", "twitter":"1F520"},
    "shortcode": "capital_abcd",
    "description": "INPUT SYMBOL FOR LATIN CAPITAL LETTERS",
    "category": "symbol"
  },
  {
    "name": "symbols",
    "unicode": {"apple":"1F523", "google":"1F523", "twitter":"1F523"},
    "shortcode": "symbols",
    "description": "INPUT SYMBOL FOR SYMBOLS",
    "category": "symbol"
  },
  {
    "name": "musical_note",
    "unicode": {"apple":"1F3B5", "google":"1F3B5", "twitter":"1F3B5"},
    "shortcode": "musical_note",
    "description": "MUSICAL NOTE",
    "category": "symbol"
  },
  {
    "name": "notes",
    "unicode": {"apple":"1F3B6", "google":"1F3B6", "twitter":"1F3B6"},
    "shortcode": "notes",
    "description": "MULTIPLE MUSICAL NOTES",
    "category": "symbol"
  },
  {
    "name": "wavy_dash",
    "unicode": {"apple":"3030", "google":"3030", "twitter":"3030"},
    "shortcode": "wavy_dash",
    "description": "WAVY DASH",
    "category": "symbol"
  },
  {
    "name": "curly_loop",
    "unicode": {"apple":"27B0", "google":"27B0", "twitter":"27B0"},
    "shortcode": "curly_loop",
    "description": "CURLY LOOP",
    "category": "symbol"
  },
  {
    "name": "heavy_check_mark",
    "unicode": {"apple":"2714", "google":"2714", "twitter":"2714"},
    "shortcode": "heavy_check_mark",
    "description": "HEAVY CHECK MARK",
    "category": "symbol"
  },
  {
    "name": "heavy_plus_sign",
    "unicode": {"apple":"2795", "google":"2795", "twitter":"2795"},
    "shortcode": "heavy_plus_sign",
    "description": "HEAVY PLUS SIGN",
    "category": "symbol"
  },
  {
    "name": "heavy_minus_sign",
    "unicode": {"apple":"2796", "google":"2796", "twitter":"2796"},
    "shortcode": "heavy_minus_sign",
    "description": "HEAVY MINUS SIGN",
    "category": "symbol"
  },
  {
    "name": "heavy_multiplication_x",
    "unicode": {"apple":"2716", "google":"2716", "twitter":"2716"},
    "shortcode": "heavy_multiplication_x",
    "description": "HEAVY MULTIPLICATION X",
    "category": "symbol"
  },
  {
    "name": "heavy_division_sign",
    "unicode": {"apple":"2797", "google":"2797", "twitter":"2797"},
    "shortcode": "heavy_division_sign",
    "description": "HEAVY DIVISION SIGN",
    "category": "symbol"
  },
  {
    "name": "heavy_dollar_sign",
    "unicode": {"apple":"1F4B2", "google":"1F4B2", "twitter":"1F4B2"},
    "shortcode": "heavy_dollar_sign",
    "description": "HEAVY DOLLAR SIGN",
    "category": "symbol"
  },
  {
    "name": "copyright",
    "unicode": {"apple":"00A9", "google":"00A9-FE0F", "twitter":"00A9-FE0F"},
    "shortcode": "copyright",
    "description": "COPYRIGHT SIGN",
    "category": "symbol"
  },
  {
    "name": "registered",
    "unicode": {"apple":"00AE", "google":"00AE-FE0F", "twitter":"00AE-FE0F"},
    "shortcode": "registered",
    "description": "REGISTERED SIGN",
    "category": "symbol"
  },
  {
    "name": "tm",
    "unicode": {"apple":"2122", "google":"2122", "twitter":"2122"},
    "shortcode": "tm",
    "description": "TRADE MARK SIGN",
    "category": "symbol"
  },
  {
    "name": "end",
    "unicode": {"apple":"1F51A", "google":"1F51A", "twitter":"1F51A"},
    "shortcode": "end",
    "description": "END WITH LEFTWARDS ARROW ABOVE",
    "category": "symbol"
  },
  {
    "name": "back",
    "unicode": {"apple":"1F519", "google":"1F519", "twitter":"1F519"},
    "shortcode": "back",
    "description": "BACK WITH LEFTWARDS ARROW ABOVE",
    "category": "symbol"
  },
  {
    "name": "on",
    "unicode": {"apple":"1F51B", "google":"1F51B", "twitter":"1F51B"},
    "shortcode": "on",
    "description": "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE",
    "category": "symbol"
  },
  {
    "name": "top",
    "unicode": {"apple":"1F51D", "google":"1F51D", "twitter":"1F51D"},
    "shortcode": "top",
    "description": "TOP WITH UPWARDS ARROW ABOVE",
    "category": "symbol"
  },
  {
    "name": "soon",
    "unicode": {"apple":"1F51C", "google":"1F51C", "twitter":"1F51C"},
    "shortcode": "soon",
    "description": "SOON WITH RIGHTWARDS ARROW ABOVE",
    "category": "symbol"
  },
  {
    "name": "ballot_box_with_check",
    "unicode": {"apple":"2611", "google":"2611", "twitter":"2611"},
    "shortcode": "ballot_box_with_check",
    "description": "BALLOT BOX WITH CHECK",
    "category": "symbol"
  },
  {
    "name": "radio_button",
    "unicode": {"apple":"1F518", "google":"1F518", "twitter":"1F518"},
    "shortcode": "radio_button",
    "description": "RADIO BUTTON",
    "category": "symbol"
  },
  {
    "name": "white_circle",
    "unicode": {"apple":"26AA", "google":"26AA", "twitter":"26AA"},
    "shortcode": "white_circle",
    "description": "MEDIUM WHITE CIRCLE",
    "category": "symbol"
  },
  {
    "name": "black_circle",
    "unicode": {"apple":"26AB", "google":"26AB", "twitter":"26AB"},
    "shortcode": "black_circle",
    "description": "MEDIUM BLACK CIRCLE",
    "category": "symbol"
  },
  {
    "name": "red_circle",
    "unicode": {"apple":"1F534", "google":"1F534", "twitter":"1F534"},
    "shortcode": "red_circle",
    "description": "LARGE RED CIRCLE",
    "category": "symbol"
  },
  {
    "name": "large_blue_circle",
    "unicode": {"apple":"1F535", "google":"1F535", "twitter":"1F535"},
    "shortcode": "large_blue_circle",
    "description": "LARGE BLUE CIRCLE",
    "category": "symbol"
  },
  {
    "name": "small_orange_diamond",
    "unicode": {"apple":"1F538", "google":"1F538", "twitter":"1F538"},
    "shortcode": "small_orange_diamond",
    "description": "SMALL ORANGE DIAMOND",
    "category": "symbol"
  },
  {
    "name": "small_blue_diamond",
    "unicode": {"apple":"1F539", "google":"1F539", "twitter":"1F539"},
    "shortcode": "small_blue_diamond",
    "description": "SMALL BLUE DIAMOND",
    "category": "symbol"
  },
  {
    "name": "large_orange_diamond",
    "unicode": {"apple":"1F536", "google":"1F536", "twitter":"1F536"},
    "shortcode": "large_orange_diamond",
    "description": "LARGE ORANGE DIAMOND",
    "category": "symbol"
  },
  {
    "name": "large_blue_diamond",
    "unicode": {"apple":"1F537", "google":"1F537", "twitter":"1F537"},
    "shortcode": "large_blue_diamond",
    "description": "LARGE BLUE DIAMOND",
    "category": "symbol"
  },
  {
    "name": "small_red_triangle",
    "unicode": {"apple":"1F53A", "google":"1F53A", "twitter":"1F53A"},
    "shortcode": "small_red_triangle",
    "description": "UP-POINTING RED TRIANGLE",
    "category": "symbol"
  },
  {
    "name": "black_small_square",
    "unicode": {"apple":"25AA", "google":"25AA", "twitter":"25AA"},
    "shortcode": "black_small_square",
    "description": "BLACK SMALL SQUARE",
    "category": "symbol"
  },
  {
    "name": "white_small_square",
    "unicode": {"apple":"25AB", "google":"25AB", "twitter":"25AB"},
    "shortcode": "white_small_square",
    "description": "WHITE SMALL SQUARE",
    "category": "symbol"
  },
  {
    "name": "black_large_square",
    "unicode": {"apple":"2B1B", "google":"2B1B", "twitter":"2B1B"},
    "shortcode": "black_large_square",
    "description": "BLACK LARGE SQUARE",
    "category": "symbol"
  },
  {
    "name": "white_large_square",
    "unicode": {"apple":"2B1C", "google":"2B1C", "twitter":"2B1C"},
    "shortcode": "white_large_square",
    "description": "WHITE LARGE SQUARE",
    "category": "symbol"
  },
  {
    "name": "small_red_triangle_down",
    "unicode": {"apple":"1F53B", "google":"1F53B", "twitter":"1F53B"},
    "shortcode": "small_red_triangle_down",
    "description": "DOWN-POINTING RED TRIANGLE",
    "category": "symbol"
  },
  {
    "name": "black_medium_square",
    "unicode": {"apple":"25FC", "google":"25FC", "twitter":"25FC"},
    "shortcode": "black_medium_square",
    "description": "BLACK MEDIUM SQUARE",
    "category": "symbol"
  },
  {
    "name": "white_medium_square",
    "unicode": {"apple":"25FB", "google":"25FB", "twitter":"25FB"},
    "shortcode": "white_medium_square",
    "description": "WHITE MEDIUM SQUARE",
    "category": "symbol"
  },
  {
    "name": "black_medium_small_square",
    "unicode": {"apple":"25FE", "google":"25FE", "twitter":"25FE"},
    "shortcode": "black_medium_small_square",
    "description": "BLACK MEDIUM SMALL SQUARE",
    "category": "symbol"
  },
  {
    "name": "white_medium_small_square",
    "unicode": {"apple":"25FD", "google":"25FD", "twitter":"25FD"},
    "shortcode": "white_medium_small_square",
    "description": "WHITE MEDIUM SMALL SQUARE",
    "category": "symbol"
  },
  {
    "name": "black_square_button",
    "unicode": {"apple":"1F532", "google":"1F532", "twitter":"1F532"},
    "shortcode": "black_square_button",
    "description": "BLACK SQUARE BUTTON",
    "category": "symbol"
  },
  {
    "name": "white_square_button",
    "unicode": {"apple":"1F533", "google":"1F533", "twitter":"1F533"},
    "shortcode": "white_square_button",
    "description": "WHITE SQUARE BUTTON",
    "category": "symbol"
  },
  {
    "name": "speaker",
    "unicode": {"apple":"1F508", "google":"1F508", "twitter":"1F508"},
    "shortcode": "speaker",
    "description": "SPEAKER",
    "category": "symbol"
  },
  {
    "name": "sound",
    "unicode": {"apple":"1F509", "google":"1F509", "twitter":"1F509"},
    "shortcode": "sound",
    "description": "SPEAKER WITH ONE SOUND WAVE",
    "category": "symbol"
  },
  {
    "name": "loud_sound",
    "unicode": {"apple":"1F50A", "google":"1F50A", "twitter":"1F50A"},
    "shortcode": "loud_sound",
    "description": "SPEAKER WITH THREE SOUND WAVES",
    "category": "symbol"
  },
  {
    "name": "mute",
    "unicode": {"apple":"1F507", "google":"1F507", "twitter":"1F507"},
    "shortcode": "mute",
    "description": "SPEAKER WITH CANCELLATION STROKE",
    "category": "symbol"
  },
  {
    "name": "mega",
    "unicode": {"apple":"1F4E3", "google":"1F4E3", "twitter":"1F4E3"},
    "shortcode": "mega",
    "description": "CHEERING MEGAPHONE",
    "category": "symbol"
  },
  {
    "name": "loudspeaker",
    "unicode": {"apple":"1F4E2", "google":"1F4E2", "twitter":"1F4E2"},
    "shortcode": "loudspeaker",
    "description": "PUBLIC ADDRESS LOUDSPEAKER",
    "category": "symbol"
  },
  {
    "name": "bell",
    "unicode": {"apple":"1F514", "google":"1F514", "twitter":"1F514"},
    "shortcode": "bell",
    "description": "BELL",
    "category": "symbol"
  },
  {
    "name": "no_bell",
    "unicode": {"apple":"1F515", "google":"1F515", "twitter":"1F515"},
    "shortcode": "no_bell",
    "description": "BELL WITH CANCELLATION STROKE",
    "category": "symbol"
  },
  {
    "name": "black_joker",
    "unicode": {"apple":"1F0CF", "google":"1F0CF", "twitter":"1F0CF"},
    "shortcode": "black_joker",
    "description": "PLAYING CARD BLACK JOKER",
    "category": "symbol"
  },
  {
    "name": "mahjong",
    "unicode": {"apple":"1F004", "google":"1F004", "twitter":"1F004"},
    "shortcode": "mahjong",
    "description": "MAHJONG TILE RED DRAGON",
    "category": "symbol"
  },
  {
    "name": "spades",
    "unicode": {"apple":"2660", "google":"2660", "twitter":"2660"},
    "shortcode": "spades",
    "description": "BLACK SPADE SUIT",
    "category": "symbol"
  },
  {
    "name": "clubs",
    "unicode": {"apple":"2663", "google":"2663", "twitter":"2663"},
    "shortcode": "clubs",
    "description": "BLACK CLUB SUIT",
    "category": "symbol"
  },
  {
    "name": "hearts",
    "unicode": {"apple":"2665", "google":"2665", "twitter":"2665"},
    "shortcode": "hearts",
    "description": "BLACK HEART SUIT",
    "category": "symbol"
  },
  {
    "name": "diamonds",
    "unicode": {"apple":"2666", "google":"2666", "twitter":"2666"},
    "shortcode": "diamonds",
    "description": "BLACK DIAMOND SUIT",
    "category": "symbol"
  },
  {
    "name": "flower_playing_cards",
    "unicode": {"apple":"1F3B4", "google":"1F3B4", "twitter":"1F3B4"},
    "shortcode": "flower_playing_cards",
    "description": "FLOWER PLAYING CARDS",
    "category": "symbol"
  },
  {
    "name": "thought_balloon",
    "unicode": {"apple":"1F4AD", "google":"1F4AD", "twitter":"1F4AD"},
    "shortcode": "thought_balloon",
    "description": "THOUGHT BALLOON",
    "category": "symbol"
  },
  {
    "name": "right_anger_bubble",
    "unicode": {"apple":"1F5EF", "google":"1F5EF", "twitter":"1F5EF"},
    "shortcode": "right_anger_bubble",
    "description": "RIGHT ANGER BUBBLE"
  },
  {
    "name": "speech_balloon",
    "unicode": {"apple":"1F4AC", "google":"1F4AC", "twitter":"1F4AC"},
    "shortcode": "speech_balloon",
    "description": "SPEECH BALLOON",
    "category": "symbol"
  },
  {
    "name": "left_speech_bubble",
    "unicode": {"apple":"1F5E8", "google":"1F5E8", "twitter":"1F5E8"},
    "shortcode": "left_speech_bubble",
    "description": "LEFT SPEECH BUBBLE"
  },
  {
    "name": "clock1",
    "unicode": {"apple":"1F550", "google":"1F550", "twitter":"1F550"},
    "shortcode": "clock1",
    "description": "CLOCK FACE ONE OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock2",
    "unicode": {"apple":"1F551", "google":"1F551", "twitter":"1F551"},
    "shortcode": "clock2",
    "description": "CLOCK FACE TWO OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock3",
    "unicode": {"apple":"1F552", "google":"1F552", "twitter":"1F552"},
    "shortcode": "clock3",
    "description": "CLOCK FACE THREE OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock4",
    "unicode": {"apple":"1F553", "google":"1F553", "twitter":"1F553"},
    "shortcode": "clock4",
    "description": "CLOCK FACE FOUR OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock5",
    "unicode": {"apple":"1F554", "google":"1F554", "twitter":"1F554"},
    "shortcode": "clock5",
    "description": "CLOCK FACE FIVE OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock6",
    "unicode": {"apple":"1F555", "google":"1F555", "twitter":"1F555"},
    "shortcode": "clock6",
    "description": "CLOCK FACE SIX OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock7",
    "unicode": {"apple":"1F556", "google":"1F556", "twitter":"1F556"},
    "shortcode": "clock7",
    "description": "CLOCK FACE SEVEN OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock8",
    "unicode": {"apple":"1F557", "google":"1F557", "twitter":"1F557"},
    "shortcode": "clock8",
    "description": "CLOCK FACE EIGHT OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock9",
    "unicode": {"apple":"1F558", "google":"1F558", "twitter":"1F558"},
    "shortcode": "clock9",
    "description": "CLOCK FACE NINE OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock10",
    "unicode": {"apple":"1F559", "google":"1F559", "twitter":"1F559"},
    "shortcode": "clock10",
    "description": "CLOCK FACE TEN OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock11",
    "unicode": {"apple":"1F55A", "google":"1F55A", "twitter":"1F55A"},
    "shortcode": "clock11",
    "description": "CLOCK FACE ELEVEN OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock12",
    "unicode": {"apple":"1F55B", "google":"1F55B", "twitter":"1F55B"},
    "shortcode": "clock12",
    "description": "CLOCK FACE TWELVE OCLOCK",
    "category": "symbol"
  },
  {
    "name": "clock130",
    "unicode": {"apple":"1F55C", "google":"1F55C", "twitter":"1F55C"},
    "shortcode": "clock130",
    "description": "CLOCK FACE ONE-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock230",
    "unicode": {"apple":"1F55D", "google":"1F55D", "twitter":"1F55D"},
    "shortcode": "clock230",
    "description": "CLOCK FACE TWO-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock330",
    "unicode": {"apple":"1F55E", "google":"1F55E", "twitter":"1F55E"},
    "shortcode": "clock330",
    "description": "CLOCK FACE THREE-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock430",
    "unicode": {"apple":"1F55F", "google":"1F55F", "twitter":"1F55F"},
    "shortcode": "clock430",
    "description": "CLOCK FACE FOUR-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock530",
    "unicode": {"apple":"1F560", "google":"1F560", "twitter":"1F560"},
    "shortcode": "clock530",
    "description": "CLOCK FACE FIVE-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock630",
    "unicode": {"apple":"1F561", "google":"1F561", "twitter":"1F561"},
    "shortcode": "clock630",
    "description": "CLOCK FACE SIX-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock730",
    "unicode": {"apple":"1F562", "google":"1F562", "twitter":"1F562"},
    "shortcode": "clock730",
    "description": "CLOCK FACE SEVEN-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock830",
    "unicode": {"apple":"1F563", "google":"1F563", "twitter":"1F563"},
    "shortcode": "clock830",
    "description": "CLOCK FACE EIGHT-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock930",
    "unicode": {"apple":"1F564", "google":"1F564", "twitter":"1F564"},
    "shortcode": "clock930",
    "description": "CLOCK FACE NINE-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock1030",
    "unicode": {"apple":"1F565", "google":"1F565", "twitter":"1F565"},
    "shortcode": "clock1030",
    "description": "CLOCK FACE TEN-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock1130",
    "unicode": {"apple":"1F566", "google":"1F566", "twitter":"1F566"},
    "shortcode": "clock1130",
    "description": "CLOCK FACE ELEVEN-THIRTY",
    "category": "symbol"
  },
  {
    "name": "clock1230",
    "unicode": {"apple":"1F567", "google":"1F567", "twitter":"1F567"},
    "shortcode": "clock1230",
    "description": "CLOCK FACE TWELVE-THIRTY",
    "category": "symbol"
  },
  {
    "name": "flag-ac",
    "unicode": {"apple":"1F1E6-1F1E8", "google":"1F1E6-1F1E8", "twitter":"1F1E6-1F1E8"},
    "shortcode": "flag-ac",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AC",
    "category": "flag"
  },
  {
    "name": "flag-ad",
    "unicode": {"apple":"1F1E6-1F1E9", "google":"1F1E6-1F1E9", "twitter":"1F1E6-1F1E9"},
    "shortcode": "flag-ad",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AD",
    "category": "flag"
  },
  {
    "name": "flag-ae",
    "unicode": {"apple":"1F1E6-1F1EA", "google":"1F1E6-1F1EA", "twitter":"1F1E6-1F1EA"},
    "shortcode": "flag-ae",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AE",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-af",
    "unicode": {"apple":"1F1E6-1F1EB", "google":"1F1E6-1F1EB", "twitter":"1F1E6-1F1EB"},
    "shortcode": "flag-af",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AF",
    "category": "flag"
  },
  {
    "name": "flag-ag",
    "unicode": {"apple":"1F1E6-1F1EC", "google":"1F1E6-1F1EC", "twitter":"1F1E6-1F1EC"},
    "shortcode": "flag-ag",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AG",
    "category": "flag"
  },
  {
    "name": "flag-ai",
    "unicode": {"apple":"1F1E6-1F1EE", "google":"1F1E6-1F1EE", "twitter":"1F1E6-1F1EE"},
    "shortcode": "flag-ai",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AI",
    "category": "flag"
  },
  {
    "name": "flag-al",
    "unicode": {"apple":"1F1E6-1F1F1", "google":"1F1E6-1F1F1", "twitter":"1F1E6-1F1F1"},
    "shortcode": "flag-al",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AL",
    "category": "flag"
  },
  {
    "name": "flag-am",
    "unicode": {"apple":"1F1E6-1F1F2", "google":"1F1E6-1F1F2", "twitter":"1F1E6-1F1F2"},
    "shortcode": "flag-am",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AM",
    "category": "flag"
  },
  {
    "name": "flag-ao",
    "unicode": {"apple":"1F1E6-1F1F4", "google":"1F1E6-1F1F4", "twitter":"1F1E6-1F1F4"},
    "shortcode": "flag-ao",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AO",
    "category": "flag"
  },
  {
    "name": "flag-aq",
    "unicode": {"apple":"1F1E6-1F1F6", "google":"1F1E6-1F1F6", "twitter":"1F1E6-1F1F6"},
    "shortcode": "flag-aq",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AQ",
    "category": "flag"
  },
  {
    "name": "flag-ar",
    "unicode": {"apple":"1F1E6-1F1F7", "google":"1F1E6-1F1F7", "twitter":"1F1E6-1F1F7"},
    "shortcode": "flag-ar",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AR",
    "category": "flag"
  },
  {
    "name": "flag-as",
    "unicode": {"apple":"1F1E6-1F1F8", "google":"1F1E6-1F1F8", "twitter":"1F1E6-1F1F8"},
    "shortcode": "flag-as",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AS",
    "category": "flag"
  },
  {
    "name": "flag-at",
    "unicode": {"apple":"1F1E6-1F1F9", "google":"1F1E6-1F1F9", "twitter":"1F1E6-1F1F9"},
    "shortcode": "flag-at",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AT",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-au",
    "unicode": {"apple":"1F1E6-1F1FA", "google":"1F1E6-1F1FA", "twitter":"1F1E6-1F1FA"},
    "shortcode": "flag-au",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AU",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-aw",
    "unicode": {"apple":"1F1E6-1F1FC", "google":"1F1E6-1F1FC", "twitter":"1F1E6-1F1FC"},
    "shortcode": "flag-aw",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AW",
    "category": "flag"
  },
  {
    "name": "flag-ax",
    "unicode": {"apple":"1F1E6-1F1FD", "google":"1F1E6-1F1FD", "twitter":"1F1E6-1F1FD"},
    "shortcode": "flag-ax",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AX",
    "category": "flag"
  },
  {
    "name": "flag-az",
    "unicode": {"apple":"1F1E6-1F1FF", "google":"1F1E6-1F1FF", "twitter":"1F1E6-1F1FF"},
    "shortcode": "flag-az",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AZ",
    "category": "flag"
  },
  {
    "name": "flag-ba",
    "unicode": {"apple":"1F1E7-1F1E6", "google":"1F1E7-1F1E6", "twitter":"1F1E7-1F1E6"},
    "shortcode": "flag-ba",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BA",
    "category": "flag"
  },
  {
    "name": "flag-bb",
    "unicode": {"apple":"1F1E7-1F1E7", "google":"1F1E7-1F1E7", "twitter":"1F1E7-1F1E7"},
    "shortcode": "flag-bb",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BB",
    "category": "flag"
  },
  {
    "name": "flag-bd",
    "unicode": {"apple":"1F1E7-1F1E9", "google":"1F1E7-1F1E9", "twitter":"1F1E7-1F1E9"},
    "shortcode": "flag-bd",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BD",
    "category": "flag"
  },
  {
    "name": "flag-be",
    "unicode": {"apple":"1F1E7-1F1EA", "google":"1F1E7-1F1EA", "twitter":"1F1E7-1F1EA"},
    "shortcode": "flag-be",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BE",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-bf",
    "unicode": {"apple":"1F1E7-1F1EB", "google":"1F1E7-1F1EB", "twitter":"1F1E7-1F1EB"},
    "shortcode": "flag-bf",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BF",
    "category": "flag"
  },
  {
    "name": "flag-bg",
    "unicode": {"apple":"1F1E7-1F1EC", "google":"1F1E7-1F1EC", "twitter":"1F1E7-1F1EC"},
    "shortcode": "flag-bg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BG",
    "category": "flag"
  },
  {
    "name": "flag-bh",
    "unicode": {"apple":"1F1E7-1F1ED", "google":"1F1E7-1F1ED", "twitter":"1F1E7-1F1ED"},
    "shortcode": "flag-bh",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BH",
    "category": "flag"
  },
  {
    "name": "flag-bi",
    "unicode": {"apple":"1F1E7-1F1EE", "google":"1F1E7-1F1EE", "twitter":"1F1E7-1F1EE"},
    "shortcode": "flag-bi",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BI",
    "category": "flag"
  },
  {
    "name": "flag-bj",
    "unicode": {"apple":"1F1E7-1F1EF", "google":"1F1E7-1F1EF", "twitter":"1F1E7-1F1EF"},
    "shortcode": "flag-bj",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BJ",
    "category": "flag"
  },
  {
    "name": "flag-bl",
    "unicode": {"apple":"1F1E7-1F1F1", "google":"1F1E7-1F1F1", "twitter":"1F1E7-1F1F1"},
    "shortcode": "flag-bl",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BL",
    "category": "flag"
  },
  {
    "name": "flag-bm",
    "unicode": {"apple":"1F1E7-1F1F2", "google":"1F1E7-1F1F2", "twitter":"1F1E7-1F1F2"},
    "shortcode": "flag-bm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BM",
    "category": "flag"
  },
  {
    "name": "flag-bn",
    "unicode": {"apple":"1F1E7-1F1F3", "google":"1F1E7-1F1F3", "twitter":"1F1E7-1F1F3"},
    "shortcode": "flag-bn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BN",
    "category": "flag"
  },
  {
    "name": "flag-bo",
    "unicode": {"apple":"1F1E7-1F1F4", "google":"1F1E7-1F1F4", "twitter":"1F1E7-1F1F4"},
    "shortcode": "flag-bo",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BO",
    "category": "flag"
  },
  {
    "name": "flag-bq",
    "unicode": {"apple":"1F1E7-1F1F6", "google":"1F1E7-1F1F6", "twitter":"1F1E7-1F1F6"},
    "shortcode": "flag-bq",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BQ",
    "category": "flag"
  },
  {
    "name": "flag-br",
    "unicode": {"apple":"1F1E7-1F1F7", "google":"1F1E7-1F1F7", "twitter":"1F1E7-1F1F7"},
    "shortcode": "flag-br",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BR",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-bs",
    "unicode": {"apple":"1F1E7-1F1F8", "google":"1F1E7-1F1F8", "twitter":"1F1E7-1F1F8"},
    "shortcode": "flag-bs",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BS",
    "category": "flag"
  },
  {
    "name": "flag-bt",
    "unicode": {"apple":"1F1E7-1F1F9", "google":"1F1E7-1F1F9", "twitter":"1F1E7-1F1F9"},
    "shortcode": "flag-bt",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BT",
    "category": "flag"
  },
  {
    "name": "flag-bv",
    "unicode": {"apple":"1F1E7-1F1FB", "google":"1F1E7-1F1FB", "twitter":"1F1E7-1F1FB"},
    "shortcode": "flag-bv",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BV",
    "category": "flag"
  },
  {
    "name": "flag-bw",
    "unicode": {"apple":"1F1E7-1F1FC", "google":"1F1E7-1F1FC", "twitter":"1F1E7-1F1FC"},
    "shortcode": "flag-bw",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BW",
    "category": "flag"
  },
  {
    "name": "flag-by",
    "unicode": {"apple":"1F1E7-1F1FE", "google":"1F1E7-1F1FE", "twitter":"1F1E7-1F1FE"},
    "shortcode": "flag-by",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BY",
    "category": "flag"
  },
  {
    "name": "flag-bz",
    "unicode": {"apple":"1F1E7-1F1FF", "google":"1F1E7-1F1FF", "twitter":"1F1E7-1F1FF"},
    "shortcode": "flag-bz",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BZ",
    "category": "flag"
  },
  {
    "name": "flag-ca",
    "unicode": {"apple":"1F1E8-1F1E6", "google":"1F1E8-1F1E6", "twitter":"1F1E8-1F1E6"},
    "shortcode": "flag-ca",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CA",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-cc",
    "unicode": {"apple":"1F1E8-1F1E8", "google":"1F1E8-1F1E8", "twitter":"1F1E8-1F1E8"},
    "shortcode": "flag-cc",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CC",
    "category": "flag"
  },
  {
    "name": "flag-cd",
    "unicode": {"apple":"1F1E8-1F1E9", "google":"1F1E8-1F1E9", "twitter":"1F1E8-1F1E9"},
    "shortcode": "flag-cd",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CD",
    "category": "flag"
  },
  {
    "name": "flag-cf",
    "unicode": {"apple":"1F1E8-1F1EB", "google":"1F1E8-1F1EB", "twitter":"1F1E8-1F1EB"},
    "shortcode": "flag-cf",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CF",
    "category": "flag"
  },
  {
    "name": "flag-cg",
    "unicode": {"apple":"1F1E8-1F1EC", "google":"1F1E8-1F1EC", "twitter":"1F1E8-1F1EC"},
    "shortcode": "flag-cg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CG",
    "category": "flag"
  },
  {
    "name": "flag-ch",
    "unicode": {"apple":"1F1E8-1F1ED", "google":"1F1E8-1F1ED", "twitter":"1F1E8-1F1ED"},
    "shortcode": "flag-ch",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CH",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-ci",
    "unicode": {"apple":"1F1E8-1F1EE", "google":"1F1E8-1F1EE", "twitter":"1F1E8-1F1EE"},
    "shortcode": "flag-ci",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CI",
    "category": "flag"
  },
  {
    "name": "flag-ck",
    "unicode": {"apple":"1F1E8-1F1F0", "google":"1F1E8-1F1F0", "twitter":"1F1E8-1F1F0"},
    "shortcode": "flag-ck",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CK",
    "category": "flag"
  },
  {
    "name": "flag-cl",
    "unicode": {"apple":"1F1E8-1F1F1", "google":"1F1E8-1F1F1", "twitter":"1F1E8-1F1F1"},
    "shortcode": "flag-cl",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CL",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-cm",
    "unicode": {"apple":"1F1E8-1F1F2", "google":"1F1E8-1F1F2", "twitter":"1F1E8-1F1F2"},
    "shortcode": "flag-cm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CM",
    "category": "flag"
  },
  {
    "name": "flag-cn",
    "unicode": {"apple":"1F1E8-1F1F3", "google":"1F1E8-1F1F3", "twitter":"1F1E8-1F1F3"},
    "shortcode": "flag-cn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CN",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-co",
    "unicode": {"apple":"1F1E8-1F1F4", "google":"1F1E8-1F1F4", "twitter":"1F1E8-1F1F4"},
    "shortcode": "flag-co",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CO",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-cp",
    "unicode": {"apple":"1F1E8-1F1F5", "google":"1F1E8-1F1F5", "twitter":"1F1E8-1F1F5"},
    "shortcode": "flag-cp",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CP",
    "category": "flag"
  },
  {
    "name": "flag-cr",
    "unicode": {"apple":"1F1E8-1F1F7", "google":"1F1E8-1F1F7", "twitter":"1F1E8-1F1F7"},
    "shortcode": "flag-cr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CR",
    "category": "flag"
  },
  {
    "name": "flag-cu",
    "unicode": {"apple":"1F1E8-1F1FA", "google":"1F1E8-1F1FA", "twitter":"1F1E8-1F1FA"},
    "shortcode": "flag-cu",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CU",
    "category": "flag"
  },
  {
    "name": "flag-cv",
    "unicode": {"apple":"1F1E8-1F1FB", "google":"1F1E8-1F1FB", "twitter":"1F1E8-1F1FB"},
    "shortcode": "flag-cv",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CV",
    "category": "flag"
  },
  {
    "name": "flag-cw",
    "unicode": {"apple":"1F1E8-1F1FC", "google":"1F1E8-1F1FC", "twitter":"1F1E8-1F1FC"},
    "shortcode": "flag-cw",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CW",
    "category": "flag"
  },
  {
    "name": "flag-cx",
    "unicode": {"apple":"1F1E8-1F1FD", "google":"1F1E8-1F1FD", "twitter":"1F1E8-1F1FD"},
    "shortcode": "flag-cx",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CX",
    "category": "flag"
  },
  {
    "name": "flag-cy",
    "unicode": {"apple":"1F1E8-1F1FE", "google":"1F1E8-1F1FE", "twitter":"1F1E8-1F1FE"},
    "shortcode": "flag-cy",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CY",
    "category": "flag"
  },
  {
    "name": "flag-cz",
    "unicode": {"apple":"1F1E8-1F1FF", "google":"1F1E8-1F1FF", "twitter":"1F1E8-1F1FF"},
    "shortcode": "flag-cz",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CZ",
    "category": "flag"
  },
  {
    "name": "flag-de",
    "unicode": {"apple":"1F1E9-1F1EA", "google":"1F1E9-1F1EA", "twitter":"1F1E9-1F1EA"},
    "shortcode": "flag-de",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS DE",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-dg",
    "unicode": {"apple":"1F1E9-1F1EC", "google":"1F1E9-1F1EC", "twitter":"1F1E9-1F1EC"},
    "shortcode": "flag-dg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS DG",
    "category": "flag"
  },
  {
    "name": "flag-dj",
    "unicode": {"apple":"1F1E9-1F1EF", "google":"1F1E9-1F1EF", "twitter":"1F1E9-1F1EF"},
    "shortcode": "flag-dj",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS DJ",
    "category": "flag"
  },
  {
    "name": "flag-dk",
    "unicode": {"apple":"1F1E9-1F1F0", "google":"1F1E9-1F1F0", "twitter":"1F1E9-1F1F0"},
    "shortcode": "flag-dk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS DK",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-dm",
    "unicode": {"apple":"1F1E9-1F1F2", "google":"1F1E9-1F1F2", "twitter":"1F1E9-1F1F2"},
    "shortcode": "flag-dm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS DM",
    "category": "flag"
  },
  {
    "name": "flag-do",
    "unicode": {"apple":"1F1E9-1F1F4", "google":"1F1E9-1F1F4", "twitter":"1F1E9-1F1F4"},
    "shortcode": "flag-do",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS DO",
    "category": "flag"
  },
  {
    "name": "flag-dz",
    "unicode": {"apple":"1F1E9-1F1FF", "google":"1F1E9-1F1FF", "twitter":"1F1E9-1F1FF"},
    "shortcode": "flag-dz",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS DZ",
    "category": "flag"
  },
  {
    "name": "flag-ea",
    "unicode": {"apple":"1F1EA-1F1E6", "google":"1F1EA-1F1E6", "twitter":"1F1EA-1F1E6"},
    "shortcode": "flag-ea",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS EA",
    "category": "flag"
  },
  {
    "name": "flag-ec",
    "unicode": {"apple":"1F1EA-1F1E8", "google":"1F1EA-1F1E8", "twitter":"1F1EA-1F1E8"},
    "shortcode": "flag-ec",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS EC",
    "category": "flag"
  },
  {
    "name": "flag-ee",
    "unicode": {"apple":"1F1EA-1F1EA", "google":"1F1EA-1F1EA", "twitter":"1F1EA-1F1EA"},
    "shortcode": "flag-ee",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS EE",
    "category": "flag"
  },
  {
    "name": "flag-eg",
    "unicode": {"apple":"1F1EA-1F1EC", "google":"1F1EA-1F1EC", "twitter":"1F1EA-1F1EC"},
    "shortcode": "flag-eg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS EG",
    "category": "flag"
  },
  {
    "name": "flag-eh",
    "unicode": {"apple":"1F1EA-1F1ED", "google":"1F1EA-1F1ED", "twitter":"1F1EA-1F1ED"},
    "shortcode": "flag-eh",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS EH",
    "category": "flag"
  },
  {
    "name": "flag-er",
    "unicode": {"apple":"1F1EA-1F1F7", "google":"1F1EA-1F1F7", "twitter":"1F1EA-1F1F7"},
    "shortcode": "flag-er",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ER",
    "category": "flag"
  },
  {
    "name": "flag-es",
    "unicode": {"apple":"1F1EA-1F1F8", "google":"1F1EA-1F1F8", "twitter":"1F1EA-1F1F8"},
    "shortcode": "flag-es",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ES",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-et",
    "unicode": {"apple":"1F1EA-1F1F9", "google":"1F1EA-1F1F9", "twitter":"1F1EA-1F1F9"},
    "shortcode": "flag-et",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ET",
    "category": "flag"
  },
  {
    "name": "flag-eu",
    "unicode": {"apple":"1F1EA-1F1FA", "google":"1F1EA-1F1FA", "twitter":"1F1EA-1F1FA"},
    "shortcode": "flag-eu",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS EU",
    "category": "flag"
  },
  {
    "name": "flag-fi",
    "unicode": {"apple":"1F1EB-1F1EE", "google":"1F1EB-1F1EE", "twitter":"1F1EB-1F1EE"},
    "shortcode": "flag-fi",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS FI",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-fj",
    "unicode": {"apple":"1F1EB-1F1EF", "google":"1F1EB-1F1EF", "twitter":"1F1EB-1F1EF"},
    "shortcode": "flag-fj",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS FJ",
    "category": "flag"
  },
  {
    "name": "flag-fk",
    "unicode": {"apple":"1F1EB-1F1F0", "google":"1F1EB-1F1F0", "twitter":"1F1EB-1F1F0"},
    "shortcode": "flag-fk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS FK",
    "category": "flag"
  },
  {
    "name": "flag-fm",
    "unicode": {"apple":"1F1EB-1F1F2", "google":"1F1EB-1F1F2", "twitter":"1F1EB-1F1F2"},
    "shortcode": "flag-fm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS FM",
    "category": "flag"
  },
  {
    "name": "flag-fo",
    "unicode": {"apple":"1F1EB-1F1F4", "google":"1F1EB-1F1F4", "twitter":"1F1EB-1F1F4"},
    "shortcode": "flag-fo",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS FO",
    "category": "flag"
  },
  {
    "name": "flag-fr",
    "unicode": {"apple":"1F1EB-1F1F7", "google":"1F1EB-1F1F7", "twitter":"1F1EB-1F1F7"},
    "shortcode": "flag-fr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS FR",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-ga",
    "unicode": {"apple":"1F1EC-1F1E6", "google":"1F1EC-1F1E6", "twitter":"1F1EC-1F1E6"},
    "shortcode": "flag-ga",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GA",
    "category": "flag"
  },
  {
    "name": "flag-gb",
    "unicode": {"apple":"1F1EC-1F1E7", "google":"1F1EC-1F1E7", "twitter":"1F1EC-1F1E7"},
    "shortcode": "flag-gb",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GB",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-gd",
    "unicode": {"apple":"1F1EC-1F1E9", "google":"1F1EC-1F1E9", "twitter":"1F1EC-1F1E9"},
    "shortcode": "flag-gd",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GD",
    "category": "flag"
  },
  {
    "name": "flag-ge",
    "unicode": {"apple":"1F1EC-1F1EA", "google":"1F1EC-1F1EA", "twitter":"1F1EC-1F1EA"},
    "shortcode": "flag-ge",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GE",
    "category": "flag"
  },
  {
    "name": "flag-gf",
    "unicode": {"apple":"1F1EC-1F1EB", "google":"1F1EC-1F1EB", "twitter":"1F1EC-1F1EB"},
    "shortcode": "flag-gf",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GF",
    "category": "flag"
  },
  {
    "name": "flag-gg",
    "unicode": {"apple":"1F1EC-1F1EC", "google":"1F1EC-1F1EC", "twitter":"1F1EC-1F1EC"},
    "shortcode": "flag-gg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GG",
    "category": "flag"
  },
  {
    "name": "flag-gh",
    "unicode": {"apple":"1F1EC-1F1ED", "google":"1F1EC-1F1ED", "twitter":"1F1EC-1F1ED"},
    "shortcode": "flag-gh",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GH",
    "category": "flag"
  },
  {
    "name": "flag-gi",
    "unicode": {"apple":"1F1EC-1F1EE", "google":"1F1EC-1F1EE", "twitter":"1F1EC-1F1EE"},
    "shortcode": "flag-gi",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GI",
    "category": "flag"
  },
  {
    "name": "flag-gl",
    "unicode": {"apple":"1F1EC-1F1F1", "google":"1F1EC-1F1F1", "twitter":"1F1EC-1F1F1"},
    "shortcode": "flag-gl",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GL",
    "category": "flag"
  },
  {
    "name": "flag-gm",
    "unicode": {"apple":"1F1EC-1F1F2", "google":"1F1EC-1F1F2", "twitter":"1F1EC-1F1F2"},
    "shortcode": "flag-gm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GM",
    "category": "flag"
  },
  {
    "name": "flag-gn",
    "unicode": {"apple":"1F1EC-1F1F3", "google":"1F1EC-1F1F3", "twitter":"1F1EC-1F1F3"},
    "shortcode": "flag-gn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GN",
    "category": "flag"
  },
  {
    "name": "flag-gp",
    "unicode": {"apple":"1F1EC-1F1F5", "google":"1F1EC-1F1F5", "twitter":"1F1EC-1F1F5"},
    "shortcode": "flag-gp",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GP",
    "category": "flag"
  },
  {
    "name": "flag-gq",
    "unicode": {"apple":"1F1EC-1F1F6", "google":"1F1EC-1F1F6", "twitter":"1F1EC-1F1F6"},
    "shortcode": "flag-gq",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GQ",
    "category": "flag"
  },
  {
    "name": "flag-gr",
    "unicode": {"apple":"1F1EC-1F1F7", "google":"1F1EC-1F1F7", "twitter":"1F1EC-1F1F7"},
    "shortcode": "flag-gr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GR",
    "category": "flag"
  },
  {
    "name": "flag-gs",
    "unicode": {"apple":"1F1EC-1F1F8", "google":"1F1EC-1F1F8", "twitter":"1F1EC-1F1F8"},
    "shortcode": "flag-gs",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GS",
    "category": "flag"
  },
  {
    "name": "flag-gt",
    "unicode": {"apple":"1F1EC-1F1F9", "google":"1F1EC-1F1F9", "twitter":"1F1EC-1F1F9"},
    "shortcode": "flag-gt",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GT",
    "category": "flag"
  },
  {
    "name": "flag-gu",
    "unicode": {"apple":"1F1EC-1F1FA", "google":"1F1EC-1F1FA", "twitter":"1F1EC-1F1FA"},
    "shortcode": "flag-gu",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GU",
    "category": "flag"
  },
  {
    "name": "flag-gw",
    "unicode": {"apple":"1F1EC-1F1FC", "google":"1F1EC-1F1FC", "twitter":"1F1EC-1F1FC"},
    "shortcode": "flag-gw",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GW",
    "category": "flag"
  },
  {
    "name": "flag-gy",
    "unicode": {"apple":"1F1EC-1F1FE", "google":"1F1EC-1F1FE", "twitter":"1F1EC-1F1FE"},
    "shortcode": "flag-gy",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GY",
    "category": "flag"
  },
  {
    "name": "flag-hk",
    "unicode": {"apple":"1F1ED-1F1F0", "google":"1F1ED-1F1F0", "twitter":"1F1ED-1F1F0"},
    "shortcode": "flag-hk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS HK",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-hm",
    "unicode": {"apple":"1F1ED-1F1F2", "google":"1F1ED-1F1F2", "twitter":"1F1ED-1F1F2"},
    "shortcode": "flag-hm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS HM",
    "category": "flag"
  },
  {
    "name": "flag-hn",
    "unicode": {"apple":"1F1ED-1F1F3", "google":"1F1ED-1F1F3", "twitter":"1F1ED-1F1F3"},
    "shortcode": "flag-hn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS HN",
    "category": "flag"
  },
  {
    "name": "flag-hr",
    "unicode": {"apple":"1F1ED-1F1F7", "google":"1F1ED-1F1F7", "twitter":"1F1ED-1F1F7"},
    "shortcode": "flag-hr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS HR",
    "category": "flag"
  },
  {
    "name": "flag-ht",
    "unicode": {"apple":"1F1ED-1F1F9", "google":"1F1ED-1F1F9", "twitter":"1F1ED-1F1F9"},
    "shortcode": "flag-ht",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS HT",
    "category": "flag"
  },
  {
    "name": "flag-hu",
    "unicode": {"apple":"1F1ED-1F1FA", "google":"1F1ED-1F1FA", "twitter":"1F1ED-1F1FA"},
    "shortcode": "flag-hu",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS HU",
    "category": "flag"
  },
  {
    "name": "flag-ic",
    "unicode": {"apple":"1F1EE-1F1E8", "google":"1F1EE-1F1E8", "twitter":"1F1EE-1F1E8"},
    "shortcode": "flag-ic",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IC",
    "category": "flag"
  },
  {
    "name": "flag-id",
    "unicode": {"apple":"1F1EE-1F1E9", "google":"1F1EE-1F1E9", "twitter":"1F1EE-1F1E9"},
    "shortcode": "flag-id",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ID",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-ie",
    "unicode": {"apple":"1F1EE-1F1EA", "google":"1F1EE-1F1EA", "twitter":"1F1EE-1F1EA"},
    "shortcode": "flag-ie",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IE",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-il",
    "unicode": {"apple":"1F1EE-1F1F1", "google":"1F1EE-1F1F1", "twitter":"1F1EE-1F1F1"},
    "shortcode": "flag-il",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IL",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-im",
    "unicode": {"apple":"1F1EE-1F1F2", "google":"1F1EE-1F1F2", "twitter":"1F1EE-1F1F2"},
    "shortcode": "flag-im",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IM",
    "category": "flag"
  },
  {
    "name": "flag-in",
    "unicode": {"apple":"1F1EE-1F1F3", "google":"1F1EE-1F1F3", "twitter":"1F1EE-1F1F3"},
    "shortcode": "flag-in",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IN",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-io",
    "unicode": {"apple":"1F1EE-1F1F4", "google":"1F1EE-1F1F4", "twitter":"1F1EE-1F1F4"},
    "shortcode": "flag-io",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IO",
    "category": "flag"
  },
  {
    "name": "flag-iq",
    "unicode": {"apple":"1F1EE-1F1F6", "google":"1F1EE-1F1F6", "twitter":"1F1EE-1F1F6"},
    "shortcode": "flag-iq",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IQ",
    "category": "flag"
  },
  {
    "name": "flag-ir",
    "unicode": {"apple":"1F1EE-1F1F7", "google":"1F1EE-1F1F7", "twitter":"1F1EE-1F1F7"},
    "shortcode": "flag-ir",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IR",
    "category": "flag"
  },
  {
    "name": "flag-is",
    "unicode": {"apple":"1F1EE-1F1F8", "google":"1F1EE-1F1F8", "twitter":"1F1EE-1F1F8"},
    "shortcode": "flag-is",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IS",
    "category": "flag"
  },
  {
    "name": "flag-it",
    "unicode": {"apple":"1F1EE-1F1F9", "google":"1F1EE-1F1F9", "twitter":"1F1EE-1F1F9"},
    "shortcode": "flag-it",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IT",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-je",
    "unicode": {"apple":"1F1EF-1F1EA", "google":"1F1EF-1F1EA", "twitter":"1F1EF-1F1EA"},
    "shortcode": "flag-je",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS JE",
    "category": "flag"
  },
  {
    "name": "flag-jm",
    "unicode": {"apple":"1F1EF-1F1F2", "google":"1F1EF-1F1F2", "twitter":"1F1EF-1F1F2"},
    "shortcode": "flag-jm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS JM",
    "category": "flag"
  },
  {
    "name": "flag-jo",
    "unicode": {"apple":"1F1EF-1F1F4", "google":"1F1EF-1F1F4", "twitter":"1F1EF-1F1F4"},
    "shortcode": "flag-jo",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS JO",
    "category": "flag"
  },
  {
    "name": "flag-jp",
    "unicode": {"apple":"1F1EF-1F1F5", "google":"1F1EF-1F1F5", "twitter":"1F1EF-1F1F5"},
    "shortcode": "flag-jp",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS JP",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-ke",
    "unicode": {"apple":"1F1F0-1F1EA", "google":"1F1F0-1F1EA", "twitter":"1F1F0-1F1EA"},
    "shortcode": "flag-ke",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KE",
    "category": "flag"
  },
  {
    "name": "flag-kg",
    "unicode": {"apple":"1F1F0-1F1EC", "google":"1F1F0-1F1EC", "twitter":"1F1F0-1F1EC"},
    "shortcode": "flag-kg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KG",
    "category": "flag"
  },
  {
    "name": "flag-kh",
    "unicode": {"apple":"1F1F0-1F1ED", "google":"1F1F0-1F1ED", "twitter":"1F1F0-1F1ED"},
    "shortcode": "flag-kh",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KH",
    "category": "flag"
  },
  {
    "name": "flag-ki",
    "unicode": {"apple":"1F1F0-1F1EE", "google":"1F1F0-1F1EE", "twitter":"1F1F0-1F1EE"},
    "shortcode": "flag-ki",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KI",
    "category": "flag"
  },
  {
    "name": "flag-km",
    "unicode": {"apple":"1F1F0-1F1F2", "google":"1F1F0-1F1F2", "twitter":"1F1F0-1F1F2"},
    "shortcode": "flag-km",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KM",
    "category": "flag"
  },
  {
    "name": "flag-kn",
    "unicode": {"apple":"1F1F0-1F1F3", "google":"1F1F0-1F1F3", "twitter":"1F1F0-1F1F3"},
    "shortcode": "flag-kn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KN",
    "category": "flag"
  },
  {
    "name": "flag-kp",
    "unicode": {"apple":"1F1F0-1F1F5", "google":"1F1F0-1F1F5", "twitter":"1F1F0-1F1F5"},
    "shortcode": "flag-kp",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KP",
    "category": "flag"
  },
  {
    "name": "flag-kr",
    "unicode": {"apple":"1F1F0-1F1F7", "google":"1F1F0-1F1F7", "twitter":"1F1F0-1F1F7"},
    "shortcode": "flag-kr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KR",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-kw",
    "unicode": {"apple":"1F1F0-1F1FC", "google":"1F1F0-1F1FC", "twitter":"1F1F0-1F1FC"},
    "shortcode": "flag-kw",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KW",
    "category": "flag"
  },
  {
    "name": "flag-ky",
    "unicode": {"apple":"1F1F0-1F1FE", "google":"1F1F0-1F1FE", "twitter":"1F1F0-1F1FE"},
    "shortcode": "flag-ky",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KY",
    "category": "flag"
  },
  {
    "name": "flag-kz",
    "unicode": {"apple":"1F1F0-1F1FF", "google":"1F1F0-1F1FF", "twitter":"1F1F0-1F1FF"},
    "shortcode": "flag-kz",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KZ",
    "category": "flag"
  },
  {
    "name": "flag-la",
    "unicode": {"apple":"1F1F1-1F1E6", "google":"1F1F1-1F1E6", "twitter":"1F1F1-1F1E6"},
    "shortcode": "flag-la",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LA",
    "category": "flag"
  },
  {
    "name": "flag-lb",
    "unicode": {"apple":"1F1F1-1F1E7", "google":"1F1F1-1F1E7", "twitter":"1F1F1-1F1E7"},
    "shortcode": "flag-lb",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LB",
    "category": "flag"
  },
  {
    "name": "flag-lc",
    "unicode": {"apple":"1F1F1-1F1E8", "google":"1F1F1-1F1E8", "twitter":"1F1F1-1F1E8"},
    "shortcode": "flag-lc",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LC",
    "category": "flag"
  },
  {
    "name": "flag-li",
    "unicode": {"apple":"1F1F1-1F1EE", "google":"1F1F1-1F1EE", "twitter":"1F1F1-1F1EE"},
    "shortcode": "flag-li",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LI",
    "category": "flag"
  },
  {
    "name": "flag-lk",
    "unicode": {"apple":"1F1F1-1F1F0", "google":"1F1F1-1F1F0", "twitter":"1F1F1-1F1F0"},
    "shortcode": "flag-lk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LK",
    "category": "flag"
  },
  {
    "name": "flag-lr",
    "unicode": {"apple":"1F1F1-1F1F7", "google":"1F1F1-1F1F7", "twitter":"1F1F1-1F1F7"},
    "shortcode": "flag-lr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LR",
    "category": "flag"
  },
  {
    "name": "flag-ls",
    "unicode": {"apple":"1F1F1-1F1F8", "google":"1F1F1-1F1F8", "twitter":"1F1F1-1F1F8"},
    "shortcode": "flag-ls",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LS",
    "category": "flag"
  },
  {
    "name": "flag-lt",
    "unicode": {"apple":"1F1F1-1F1F9", "google":"1F1F1-1F1F9", "twitter":"1F1F1-1F1F9"},
    "shortcode": "flag-lt",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LT",
    "category": "flag"
  },
  {
    "name": "flag-lu",
    "unicode": {"apple":"1F1F1-1F1FA", "google":"1F1F1-1F1FA", "twitter":"1F1F1-1F1FA"},
    "shortcode": "flag-lu",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LU",
    "category": "flag"
  },
  {
    "name": "flag-lv",
    "unicode": {"apple":"1F1F1-1F1FB", "google":"1F1F1-1F1FB", "twitter":"1F1F1-1F1FB"},
    "shortcode": "flag-lv",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LV",
    "category": "flag"
  },
  {
    "name": "flag-ly",
    "unicode": {"apple":"1F1F1-1F1FE", "google":"1F1F1-1F1FE", "twitter":"1F1F1-1F1FE"},
    "shortcode": "flag-ly",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS LY",
    "category": "flag"
  },
  {
    "name": "flag-ma",
    "unicode": {"apple":"1F1F2-1F1E6", "google":"1F1F2-1F1E6", "twitter":"1F1F2-1F1E6"},
    "shortcode": "flag-ma",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MA",
    "category": "flag"
  },
  {
    "name": "flag-mc",
    "unicode": {"apple":"1F1F2-1F1E8", "google":"1F1F2-1F1E8", "twitter":"1F1F2-1F1E8"},
    "shortcode": "flag-mc",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MC",
    "category": "flag"
  },
  {
    "name": "flag-md",
    "unicode": {"apple":"1F1F2-1F1E9", "google":"1F1F2-1F1E9", "twitter":"1F1F2-1F1E9"},
    "shortcode": "flag-md",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MD",
    "category": "flag"
  },
  {
    "name": "flag-me",
    "unicode": {"apple":"1F1F2-1F1EA", "google":"1F1F2-1F1EA", "twitter":"1F1F2-1F1EA"},
    "shortcode": "flag-me",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ME",
    "category": "flag"
  },
  {
    "name": "flag-mf",
    "unicode": {"apple":"1F1F2-1F1EB", "google":"1F1F2-1F1EB", "twitter":"1F1F2-1F1EB"},
    "shortcode": "flag-mf",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MF",
    "category": "flag"
  },
  {
    "name": "flag-mg",
    "unicode": {"apple":"1F1F2-1F1EC", "google":"1F1F2-1F1EC", "twitter":"1F1F2-1F1EC"},
    "shortcode": "flag-mg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MG",
    "category": "flag"
  },
  {
    "name": "flag-mh",
    "unicode": {"apple":"1F1F2-1F1ED", "google":"1F1F2-1F1ED", "twitter":"1F1F2-1F1ED"},
    "shortcode": "flag-mh",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MH",
    "category": "flag"
  },
  {
    "name": "flag-mk",
    "unicode": {"apple":"1F1F2-1F1F0", "google":"1F1F2-1F1F0", "twitter":"1F1F2-1F1F0"},
    "shortcode": "flag-mk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MK",
    "category": "flag"
  },
  {
    "name": "flag-ml",
    "unicode": {"apple":"1F1F2-1F1F1", "google":"1F1F2-1F1F1", "twitter":"1F1F2-1F1F1"},
    "shortcode": "flag-ml",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ML",
    "category": "flag"
  },
  {
    "name": "flag-mm",
    "unicode": {"apple":"1F1F2-1F1F2", "google":"1F1F2-1F1F2", "twitter":"1F1F2-1F1F2"},
    "shortcode": "flag-mm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MM",
    "category": "flag"
  },
  {
    "name": "flag-mn",
    "unicode": {"apple":"1F1F2-1F1F3", "google":"1F1F2-1F1F3", "twitter":"1F1F2-1F1F3"},
    "shortcode": "flag-mn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MN",
    "category": "flag"
  },
  {
    "name": "flag-mo",
    "unicode": {"apple":"1F1F2-1F1F4", "google":"1F1F2-1F1F4", "twitter":"1F1F2-1F1F4"},
    "shortcode": "flag-mo",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MO",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-mp",
    "unicode": {"apple":"1F1F2-1F1F5", "google":"1F1F2-1F1F5", "twitter":"1F1F2-1F1F5"},
    "shortcode": "flag-mp",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MP",
    "category": "flag"
  },
  {
    "name": "flag-mq",
    "unicode": {"apple":"1F1F2-1F1F6", "google":"1F1F2-1F1F6", "twitter":"1F1F2-1F1F6"},
    "shortcode": "flag-mq",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MQ",
    "category": "flag"
  },
  {
    "name": "flag-mr",
    "unicode": {"apple":"1F1F2-1F1F7", "google":"1F1F2-1F1F7", "twitter":"1F1F2-1F1F7"},
    "shortcode": "flag-mr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MR",
    "category": "flag"
  },
  {
    "name": "flag-ms",
    "unicode": {"apple":"1F1F2-1F1F8", "google":"1F1F2-1F1F8", "twitter":"1F1F2-1F1F8"},
    "shortcode": "flag-ms",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MS",
    "category": "flag"
  },
  {
    "name": "flag-mt",
    "unicode": {"apple":"1F1F2-1F1F9", "google":"1F1F2-1F1F9", "twitter":"1F1F2-1F1F9"},
    "shortcode": "flag-mt",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MT",
    "category": "flag"
  },
  {
    "name": "flag-mu",
    "unicode": {"apple":"1F1F2-1F1FA", "google":"1F1F2-1F1FA", "twitter":"1F1F2-1F1FA"},
    "shortcode": "flag-mu",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MU",
    "category": "flag"
  },
  {
    "name": "flag-mv",
    "unicode": {"apple":"1F1F2-1F1FB", "google":"1F1F2-1F1FB", "twitter":"1F1F2-1F1FB"},
    "shortcode": "flag-mv",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MV",
    "category": "flag"
  },
  {
    "name": "flag-mw",
    "unicode": {"apple":"1F1F2-1F1FC", "google":"1F1F2-1F1FC", "twitter":"1F1F2-1F1FC"},
    "shortcode": "flag-mw",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MW",
    "category": "flag"
  },
  {
    "name": "flag-mx",
    "unicode": {"apple":"1F1F2-1F1FD", "google":"1F1F2-1F1FD", "twitter":"1F1F2-1F1FD"},
    "shortcode": "flag-mx",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MX",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-my",
    "unicode": {"apple":"1F1F2-1F1FE", "google":"1F1F2-1F1FE", "twitter":"1F1F2-1F1FE"},
    "shortcode": "flag-my",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MY",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-mz",
    "unicode": {"apple":"1F1F2-1F1FF", "google":"1F1F2-1F1FF", "twitter":"1F1F2-1F1FF"},
    "shortcode": "flag-mz",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MZ",
    "category": "flag"
  },
  {
    "name": "flag-na",
    "unicode": {"apple":"1F1F3-1F1E6", "google":"1F1F3-1F1E6", "twitter":"1F1F3-1F1E6"},
    "shortcode": "flag-na",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NA",
    "category": "flag"
  },
  {
    "name": "flag-nc",
    "unicode": {"apple":"1F1F3-1F1E8", "google":"1F1F3-1F1E8", "twitter":"1F1F3-1F1E8"},
    "shortcode": "flag-nc",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NC",
    "category": "flag"
  },
  {
    "name": "flag-ne",
    "unicode": {"apple":"1F1F3-1F1EA", "google":"1F1F3-1F1EA", "twitter":"1F1F3-1F1EA"},
    "shortcode": "flag-ne",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NE",
    "category": "flag"
  },
  {
    "name": "flag-nf",
    "unicode": {"apple":"1F1F3-1F1EB", "google":"1F1F3-1F1EB", "twitter":"1F1F3-1F1EB"},
    "shortcode": "flag-nf",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NF",
    "category": "flag"
  },
  {
    "name": "flag-ng",
    "unicode": {"apple":"1F1F3-1F1EC", "google":"1F1F3-1F1EC", "twitter":"1F1F3-1F1EC"},
    "shortcode": "flag-ng",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NG",
    "category": "flag"
  },
  {
    "name": "flag-ni",
    "unicode": {"apple":"1F1F3-1F1EE", "google":"1F1F3-1F1EE", "twitter":"1F1F3-1F1EE"},
    "shortcode": "flag-ni",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NI",
    "category": "flag"
  },
  {
    "name": "flag-nl",
    "unicode": {"apple":"1F1F3-1F1F1", "google":"1F1F3-1F1F1", "twitter":"1F1F3-1F1F1"},
    "shortcode": "flag-nl",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NL",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-no",
    "unicode": {"apple":"1F1F3-1F1F4", "google":"1F1F3-1F1F4", "twitter":"1F1F3-1F1F4"},
    "shortcode": "flag-no",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NO",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-np",
    "unicode": {"apple":"1F1F3-1F1F5", "google":"1F1F3-1F1F5", "twitter":"1F1F3-1F1F5"},
    "shortcode": "flag-np",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NP",
    "category": "flag"
  },
  {
    "name": "flag-nr",
    "unicode": {"apple":"1F1F3-1F1F7", "google":"1F1F3-1F1F7", "twitter":"1F1F3-1F1F7"},
    "shortcode": "flag-nr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NR",
    "category": "flag"
  },
  {
    "name": "flag-nu",
    "unicode": {"apple":"1F1F3-1F1FA", "google":"1F1F3-1F1FA", "twitter":"1F1F3-1F1FA"},
    "shortcode": "flag-nu",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NU",
    "category": "flag"
  },
  {
    "name": "flag-nz",
    "unicode": {"apple":"1F1F3-1F1FF", "google":"1F1F3-1F1FF", "twitter":"1F1F3-1F1FF"},
    "shortcode": "flag-nz",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NZ",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-om",
    "unicode": {"apple":"1F1F4-1F1F2", "google":"1F1F4-1F1F2", "twitter":"1F1F4-1F1F2"},
    "shortcode": "flag-om",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS OM",
    "category": "flag"
  },
  {
    "name": "flag-pa",
    "unicode": {"apple":"1F1F5-1F1E6", "google":"1F1F5-1F1E6", "twitter":"1F1F5-1F1E6"},
    "shortcode": "flag-pa",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PA",
    "category": "flag"
  },
  {
    "name": "flag-pe",
    "unicode": {"apple":"1F1F5-1F1EA", "google":"1F1F5-1F1EA", "twitter":"1F1F5-1F1EA"},
    "shortcode": "flag-pe",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PE",
    "category": "flag"
  },
  {
    "name": "flag-pf",
    "unicode": {"apple":"1F1F5-1F1EB", "google":"1F1F5-1F1EB", "twitter":"1F1F5-1F1EB"},
    "shortcode": "flag-pf",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PF",
    "category": "flag"
  },
  {
    "name": "flag-pg",
    "unicode": {"apple":"1F1F5-1F1EC", "google":"1F1F5-1F1EC", "twitter":"1F1F5-1F1EC"},
    "shortcode": "flag-pg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PG",
    "category": "flag"
  },
  {
    "name": "flag-ph",
    "unicode": {"apple":"1F1F5-1F1ED", "google":"1F1F5-1F1ED", "twitter":"1F1F5-1F1ED"},
    "shortcode": "flag-ph",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PH",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-pk",
    "unicode": {"apple":"1F1F5-1F1F0", "google":"1F1F5-1F1F0", "twitter":"1F1F5-1F1F0"},
    "shortcode": "flag-pk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PK",
    "category": "flag"
  },
  {
    "name": "flag-pl",
    "unicode": {"apple":"1F1F5-1F1F1", "google":"1F1F5-1F1F1", "twitter":"1F1F5-1F1F1"},
    "shortcode": "flag-pl",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PL",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-pm",
    "unicode": {"apple":"1F1F5-1F1F2", "google":"1F1F5-1F1F2", "twitter":"1F1F5-1F1F2"},
    "shortcode": "flag-pm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PM",
    "category": "flag"
  },
  {
    "name": "flag-pn",
    "unicode": {"apple":"1F1F5-1F1F3", "google":"1F1F5-1F1F3", "twitter":"1F1F5-1F1F3"},
    "shortcode": "flag-pn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PN",
    "category": "flag"
  },
  {
    "name": "flag-pr",
    "unicode": {"apple":"1F1F5-1F1F7", "google":"1F1F5-1F1F7", "twitter":"1F1F5-1F1F7"},
    "shortcode": "flag-pr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PR",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-ps",
    "unicode": {"apple":"1F1F5-1F1F8", "google":"1F1F5-1F1F8", "twitter":"1F1F5-1F1F8"},
    "shortcode": "flag-ps",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PS",
    "category": "flag"
  },
  {
    "name": "flag-pt",
    "unicode": {"apple":"1F1F5-1F1F9", "google":"1F1F5-1F1F9", "twitter":"1F1F5-1F1F9"},
    "shortcode": "flag-pt",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PT",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-pw",
    "unicode": {"apple":"1F1F5-1F1FC", "google":"1F1F5-1F1FC", "twitter":"1F1F5-1F1FC"},
    "shortcode": "flag-pw",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PW",
    "category": "flag"
  },
  {
    "name": "flag-py",
    "unicode": {"apple":"1F1F5-1F1FE", "google":"1F1F5-1F1FE", "twitter":"1F1F5-1F1FE"},
    "shortcode": "flag-py",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PY",
    "category": "flag"
  },
  {
    "name": "flag-qa",
    "unicode": {"apple":"1F1F6-1F1E6", "google":"1F1F6-1F1E6", "twitter":"1F1F6-1F1E6"},
    "shortcode": "flag-qa",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS QA",
    "category": "flag"
  },
  {
    "name": "flag-re",
    "unicode": {"apple":"1F1F7-1F1EA", "google":"1F1F7-1F1EA", "twitter":"1F1F7-1F1EA"},
    "shortcode": "flag-re",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS RE",
    "category": "flag"
  },
  {
    "name": "flag-ro",
    "unicode": {"apple":"1F1F7-1F1F4", "google":"1F1F7-1F1F4", "twitter":"1F1F7-1F1F4"},
    "shortcode": "flag-ro",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS RO",
    "category": "flag"
  },
  {
    "name": "flag-rs",
    "unicode": {"apple":"1F1F7-1F1F8", "google":"1F1F7-1F1F8", "twitter":"1F1F7-1F1F8"},
    "shortcode": "flag-rs",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS RS",
    "category": "flag"
  },
  {
    "name": "flag-ru",
    "unicode": {"apple":"1F1F7-1F1FA", "google":"1F1F7-1F1FA", "twitter":"1F1F7-1F1FA"},
    "shortcode": "flag-ru",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS RU",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-rw",
    "unicode": {"apple":"1F1F7-1F1FC", "google":"1F1F7-1F1FC", "twitter":"1F1F7-1F1FC"},
    "shortcode": "flag-rw",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS RW",
    "category": "flag"
  },
  {
    "name": "flag-sa",
    "unicode": {"apple":"1F1F8-1F1E6", "google":"1F1F8-1F1E6", "twitter":"1F1F8-1F1E6"},
    "shortcode": "flag-sa",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SA",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-sb",
    "unicode": {"apple":"1F1F8-1F1E7", "google":"1F1F8-1F1E7", "twitter":"1F1F8-1F1E7"},
    "shortcode": "flag-sb",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SB",
    "category": "flag"
  },
  {
    "name": "flag-sc",
    "unicode": {"apple":"1F1F8-1F1E8", "google":"1F1F8-1F1E8", "twitter":"1F1F8-1F1E8"},
    "shortcode": "flag-sc",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SC",
    "category": "flag"
  },
  {
    "name": "flag-sd",
    "unicode": {"apple":"1F1F8-1F1E9", "google":"1F1F8-1F1E9", "twitter":"1F1F8-1F1E9"},
    "shortcode": "flag-sd",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SD",
    "category": "flag"
  },
  {
    "name": "flag-se",
    "unicode": {"apple":"1F1F8-1F1EA", "google":"1F1F8-1F1EA", "twitter":"1F1F8-1F1EA"},
    "shortcode": "flag-se",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SE",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-sg",
    "unicode": {"apple":"1F1F8-1F1EC", "google":"1F1F8-1F1EC", "twitter":"1F1F8-1F1EC"},
    "shortcode": "flag-sg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SG",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-sh",
    "unicode": {"apple":"1F1F8-1F1ED", "google":"1F1F8-1F1ED", "twitter":"1F1F8-1F1ED"},
    "shortcode": "flag-sh",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SH",
    "category": "flag"
  },
  {
    "name": "flag-si",
    "unicode": {"apple":"1F1F8-1F1EE", "google":"1F1F8-1F1EE", "twitter":"1F1F8-1F1EE"},
    "shortcode": "flag-si",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SI",
    "category": "flag"
  },
  {
    "name": "flag-sj",
    "unicode": {"apple":"1F1F8-1F1EF", "google":"1F1F8-1F1EF", "twitter":"1F1F8-1F1EF"},
    "shortcode": "flag-sj",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SJ",
    "category": "flag"
  },
  {
    "name": "flag-sk",
    "unicode": {"apple":"1F1F8-1F1F0", "google":"1F1F8-1F1F0", "twitter":"1F1F8-1F1F0"},
    "shortcode": "flag-sk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SK",
    "category": "flag"
  },
  {
    "name": "flag-sl",
    "unicode": {"apple":"1F1F8-1F1F1", "google":"1F1F8-1F1F1", "twitter":"1F1F8-1F1F1"},
    "shortcode": "flag-sl",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SL",
    "category": "flag"
  },
  {
    "name": "flag-sm",
    "unicode": {"apple":"1F1F8-1F1F2", "google":"1F1F8-1F1F2", "twitter":"1F1F8-1F1F2"},
    "shortcode": "flag-sm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SM",
    "category": "flag"
  },
  {
    "name": "flag-sn",
    "unicode": {"apple":"1F1F8-1F1F3", "google":"1F1F8-1F1F3", "twitter":"1F1F8-1F1F3"},
    "shortcode": "flag-sn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SN",
    "category": "flag"
  },
  {
    "name": "flag-so",
    "unicode": {"apple":"1F1F8-1F1F4", "google":"1F1F8-1F1F4", "twitter":"1F1F8-1F1F4"},
    "shortcode": "flag-so",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SO",
    "category": "flag"
  },
  {
    "name": "flag-sr",
    "unicode": {"apple":"1F1F8-1F1F7", "google":"1F1F8-1F1F7", "twitter":"1F1F8-1F1F7"},
    "shortcode": "flag-sr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SR",
    "category": "flag"
  },
  {
    "name": "flag-ss",
    "unicode": {"apple":"1F1F8-1F1F8", "google":"1F1F8-1F1F8", "twitter":"1F1F8-1F1F8"},
    "shortcode": "flag-ss",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SS",
    "category": "flag"
  },
  {
    "name": "flag-st",
    "unicode": {"apple":"1F1F8-1F1F9", "google":"1F1F8-1F1F9", "twitter":"1F1F8-1F1F9"},
    "shortcode": "flag-st",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ST",
    "category": "flag"
  },
  {
    "name": "flag-sv",
    "unicode": {"apple":"1F1F8-1F1FB", "google":"1F1F8-1F1FB", "twitter":"1F1F8-1F1FB"},
    "shortcode": "flag-sv",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SV",
    "category": "flag"
  },
  {
    "name": "flag-sx",
    "unicode": {"apple":"1F1F8-1F1FD", "google":"1F1F8-1F1FD", "twitter":"1F1F8-1F1FD"},
    "shortcode": "flag-sx",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SX",
    "category": "flag"
  },
  {
    "name": "flag-sy",
    "unicode": {"apple":"1F1F8-1F1FE", "google":"1F1F8-1F1FE", "twitter":"1F1F8-1F1FE"},
    "shortcode": "flag-sy",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SY",
    "category": "flag"
  },
  {
    "name": "flag-sz",
    "unicode": {"apple":"1F1F8-1F1FF", "google":"1F1F8-1F1FF", "twitter":"1F1F8-1F1FF"},
    "shortcode": "flag-sz",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SZ",
    "category": "flag"
  },
  {
    "name": "flag-ta",
    "unicode": {"apple":"1F1F9-1F1E6", "google":"1F1F9-1F1E6", "twitter":"1F1F9-1F1E6"},
    "shortcode": "flag-ta",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TA",
    "category": "flag"
  },
  {
    "name": "flag-tc",
    "unicode": {"apple":"1F1F9-1F1E8", "google":"1F1F9-1F1E8", "twitter":"1F1F9-1F1E8"},
    "shortcode": "flag-tc",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TC",
    "category": "flag"
  },
  {
    "name": "flag-td",
    "unicode": {"apple":"1F1F9-1F1E9", "google":"1F1F9-1F1E9", "twitter":"1F1F9-1F1E9"},
    "shortcode": "flag-td",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TD",
    "category": "flag"
  },
  {
    "name": "flag-tf",
    "unicode": {"apple":"1F1F9-1F1EB", "google":"1F1F9-1F1EB", "twitter":"1F1F9-1F1EB"},
    "shortcode": "flag-tf",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TF",
    "category": "flag"
  },
  {
    "name": "flag-tg",
    "unicode": {"apple":"1F1F9-1F1EC", "google":"1F1F9-1F1EC", "twitter":"1F1F9-1F1EC"},
    "shortcode": "flag-tg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TG",
    "category": "flag"
  },
  {
    "name": "flag-th",
    "unicode": {"apple":"1F1F9-1F1ED", "google":"1F1F9-1F1ED", "twitter":"1F1F9-1F1ED"},
    "shortcode": "flag-th",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TH",
    "category": "flag"
  },
  {
    "name": "flag-tj",
    "unicode": {"apple":"1F1F9-1F1EF", "google":"1F1F9-1F1EF", "twitter":"1F1F9-1F1EF"},
    "shortcode": "flag-tj",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TJ",
    "category": "flag"
  },
  {
    "name": "flag-tk",
    "unicode": {"apple":"1F1F9-1F1F0", "google":"1F1F9-1F1F0", "twitter":"1F1F9-1F1F0"},
    "shortcode": "flag-tk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TK",
    "category": "flag"
  },
  {
    "name": "flag-tl",
    "unicode": {"apple":"1F1F9-1F1F1", "google":"1F1F9-1F1F1", "twitter":"1F1F9-1F1F1"},
    "shortcode": "flag-tl",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TL",
    "category": "flag"
  },
  {
    "name": "flag-tm",
    "unicode": {"apple":"1F1F9-1F1F2", "google":"1F1F9-1F1F2", "twitter":"1F1F9-1F1F2"},
    "shortcode": "flag-tm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TM",
    "category": "flag"
  },
  {
    "name": "flag-tn",
    "unicode": {"apple":"1F1F9-1F1F3", "google":"1F1F9-1F1F3", "twitter":"1F1F9-1F1F3"},
    "shortcode": "flag-tn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TN",
    "category": "flag"
  },
  {
    "name": "flag-to",
    "unicode": {"apple":"1F1F9-1F1F4", "google":"1F1F9-1F1F4", "twitter":"1F1F9-1F1F4"},
    "shortcode": "flag-to",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TO",
    "category": "flag"
  },
  {
    "name": "flag-tr",
    "unicode": {"apple":"1F1F9-1F1F7", "google":"1F1F9-1F1F7", "twitter":"1F1F9-1F1F7"},
    "shortcode": "flag-tr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TR",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-tt",
    "unicode": {"apple":"1F1F9-1F1F9", "google":"1F1F9-1F1F9", "twitter":"1F1F9-1F1F9"},
    "shortcode": "flag-tt",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TT",
    "category": "flag"
  },
  {
    "name": "flag-tv",
    "unicode": {"apple":"1F1F9-1F1FB", "google":"1F1F9-1F1FB", "twitter":"1F1F9-1F1FB"},
    "shortcode": "flag-tv",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TV",
    "category": "flag"
  },
  {
    "name": "flag-tw",
    "unicode": {"apple":"1F1F9-1F1FC", "google":"1F1F9-1F1FC", "twitter":"1F1F9-1F1FC"},
    "shortcode": "flag-tw",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TW",
    "category": "flag"
  },
  {
    "name": "flag-tz",
    "unicode": {"apple":"1F1F9-1F1FF", "google":"1F1F9-1F1FF", "twitter":"1F1F9-1F1FF"},
    "shortcode": "flag-tz",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TZ",
    "category": "flag"
  },
  {
    "name": "flag-ua",
    "unicode": {"apple":"1F1FA-1F1E6", "google":"1F1FA-1F1E6", "twitter":"1F1FA-1F1E6"},
    "shortcode": "flag-ua",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS UA",
    "category": "flag"
  },
  {
    "name": "flag-ug",
    "unicode": {"apple":"1F1FA-1F1EC", "google":"1F1FA-1F1EC", "twitter":"1F1FA-1F1EC"},
    "shortcode": "flag-ug",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS UG",
    "category": "flag"
  },
  {
    "name": "flag-um",
    "unicode": {"apple":"1F1FA-1F1F2", "google":"1F1FA-1F1F2", "twitter":"1F1FA-1F1F2"},
    "shortcode": "flag-um",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS UM",
    "category": "flag"
  },
  {
    "name": "flag-us",
    "unicode": {"apple":"1F1FA-1F1F8", "google":"1F1FA-1F1F8", "twitter":"1F1FA-1F1F8"},
    "shortcode": "flag-us",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS US",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-uy",
    "unicode": {"apple":"1F1FA-1F1FE", "google":"1F1FA-1F1FE", "twitter":"1F1FA-1F1FE"},
    "shortcode": "flag-uy",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS UY",
    "category": "flag"
  },
  {
    "name": "flag-uz",
    "unicode": {"apple":"1F1FA-1F1FF", "google":"1F1FA-1F1FF", "twitter":"1F1FA-1F1FF"},
    "shortcode": "flag-uz",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS UZ",
    "category": "flag"
  },
  {
    "name": "flag-va",
    "unicode": {"apple":"1F1FB-1F1E6", "google":"1F1FB-1F1E6", "twitter":"1F1FB-1F1E6"},
    "shortcode": "flag-va",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS VA",
    "category": "flag"
  },
  {
    "name": "flag-vc",
    "unicode": {"apple":"1F1FB-1F1E8", "google":"1F1FB-1F1E8", "twitter":"1F1FB-1F1E8"},
    "shortcode": "flag-vc",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS VC",
    "category": "flag"
  },
  {
    "name": "flag-ve",
    "unicode": {"apple":"1F1FB-1F1EA", "google":"1F1FB-1F1EA", "twitter":"1F1FB-1F1EA"},
    "shortcode": "flag-ve",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS VE",
    "category": "flag"
  },
  {
    "name": "flag-vg",
    "unicode": {"apple":"1F1FB-1F1EC", "google":"1F1FB-1F1EC", "twitter":"1F1FB-1F1EC"},
    "shortcode": "flag-vg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS VG",
    "category": "flag"
  },
  {
    "name": "flag-vi",
    "unicode": {"apple":"1F1FB-1F1EE", "google":"1F1FB-1F1EE", "twitter":"1F1FB-1F1EE"},
    "shortcode": "flag-vi",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS VI",
    "category": "flag"
  },
  {
    "name": "flag-vn",
    "unicode": {"apple":"1F1FB-1F1F3", "google":"1F1FB-1F1F3", "twitter":"1F1FB-1F1F3"},
    "shortcode": "flag-vn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS VN",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-vu",
    "unicode": {"apple":"1F1FB-1F1FA", "google":"1F1FB-1F1FA", "twitter":"1F1FB-1F1FA"},
    "shortcode": "flag-vu",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS VU",
    "category": "flag"
  },
  {
    "name": "flag-wf",
    "unicode": {"apple":"1F1FC-1F1EB", "google":"1F1FC-1F1EB", "twitter":"1F1FC-1F1EB"},
    "shortcode": "flag-wf",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS WF",
    "category": "flag"
  },
  {
    "name": "flag-ws",
    "unicode": {"apple":"1F1FC-1F1F8", "google":"1F1FC-1F1F8", "twitter":"1F1FC-1F1F8"},
    "shortcode": "flag-ws",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS WS",
    "category": "flag"
  },
  {
    "name": "flag-xk",
    "unicode": {"apple":"1F1FD-1F1F0", "google":"1F1FD-1F1F0", "twitter":"1F1FD-1F1F0"},
    "shortcode": "flag-xk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS XK",
    "category": "flag"
  },
  {
    "name": "flag-ye",
    "unicode": {"apple":"1F1FE-1F1EA", "google":"1F1FE-1F1EA", "twitter":"1F1FE-1F1EA"},
    "shortcode": "flag-ye",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS YE",
    "category": "flag"
  },
  {
    "name": "flag-yt",
    "unicode": {"apple":"1F1FE-1F1F9", "google":"1F1FE-1F1F9", "twitter":"1F1FE-1F1F9"},
    "shortcode": "flag-yt",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS YT",
    "category": "flag"
  },
  {
    "name": "flag-za",
    "unicode": {"apple":"1F1FF-1F1E6", "google":"1F1FF-1F1E6", "twitter":"1F1FF-1F1E6"},
    "shortcode": "flag-za",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ZA",
    "category": "folderol",
    "category": "flag"
  },
  {
    "name": "flag-zm",
    "unicode": {"apple":"1F1FF-1F1F2", "google":"1F1FF-1F1F2", "twitter":"1F1FF-1F1F2"},
    "shortcode": "flag-zm",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ZM",
    "category": "flag"
  },
  {
    "name": "flag-zw",
    "unicode": {"apple":"1F1FF-1F1FC", "google":"1F1FF-1F1FC", "twitter":"1F1FF-1F1FC"},
    "shortcode": "flag-zw",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ZW",
    "category": "flag"
  }
]
});
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a,b,c){c=c||ia;var d,e,f=c.createElement("script");if(f.text=a,b)for(d in wa)(e=b[d]||b.getAttribute&&b.getAttribute(d))&&f.setAttribute(d,e);c.head.appendChild(f).parentNode.removeChild(f)}function d(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?oa[pa.call(a)]||"object":typeof a}function e(a){var b=!!a&&"length"in a&&a.length,c=d(a);return!ua(a)&&!va(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}function f(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}function g(a,b,c){return ua(b)?ya.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?ya.grep(a,function(a){return a===b!==c}):"string"!=typeof b?ya.grep(a,function(a){return na.call(b,a)>-1!==c}):ya.filter(b,a,c)}function h(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function i(a){var b={};return ya.each(a.match(Ja)||[],function(a,c){b[c]=!0}),b}function j(a){return a}function k(a){throw a}function l(a,b,c,d){var e;try{a&&ua(e=a.promise)?e.call(a).done(b).fail(c):a&&ua(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}function m(){ia.removeEventListener("DOMContentLoaded",m),a.removeEventListener("load",m),ya.ready()}function n(a,b){return b.toUpperCase()}function o(a){return a.replace(Na,"ms-").replace(Oa,n)}function p(){this.expando=ya.expando+p.uid++}function q(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Sa.test(a)?JSON.parse(a):a)}function r(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Ta,"-$&").toLowerCase(),"string"==typeof(c=a.getAttribute(d))){try{c=q(c)}catch(a){}Ra.set(a,b,c)}else c=void 0;return c}function s(a,b,c,d){var e,f,g=20,h=d?function(){return d.cur()}:function(){return ya.css(a,b,"")},i=h(),j=c&&c[3]||(ya.cssNumber[b]?"":"px"),k=a.nodeType&&(ya.cssNumber[b]||"px"!==j&&+i)&&Va.exec(ya.css(a,b));if(k&&k[3]!==j){for(i/=2,j=j||k[3],k=+i||1;g--;)ya.style(a,b,k+j),(1-f)*(1-(f=h()/i||.5))<=0&&(g=0),k/=f;k*=2,ya.style(a,b,k+j),c=c||[]}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}function t(a){var b,c=a.ownerDocument,d=a.nodeName,e=ab[d];return e||(b=c.body.appendChild(c.createElement(d)),e=ya.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ab[d]=e,e)}function u(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=Qa.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&$a(d)&&(e[f]=t(d))):"none"!==c&&(e[f]="none",Qa.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}function v(a,b){var c;return c=void 0!==a.getElementsByTagName?a.getElementsByTagName(b||"*"):void 0!==a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&f(a,b)?ya.merge([a],c):c}function w(a,b){for(var c=0,d=a.length;c<d;c++)Qa.set(a[c],"globalEval",!b||Qa.get(b[c],"globalEval"))}function x(a,b,c,e,f){for(var g,h,i,j,k,l,m=b.createDocumentFragment(),n=[],o=0,p=a.length;o<p;o++)if((g=a[o])||0===g)if("object"===d(g))ya.merge(n,g.nodeType?[g]:g);else if(fb.test(g)){for(h=h||m.appendChild(b.createElement("div")),i=(cb.exec(g)||["",""])[1].toLowerCase(),j=eb[i]||eb._default,h.innerHTML=j[1]+ya.htmlPrefilter(g)+j[2],l=j[0];l--;)h=h.lastChild;ya.merge(n,h.childNodes),h=m.firstChild,h.textContent=""}else n.push(b.createTextNode(g));for(m.textContent="",o=0;g=n[o++];)if(e&&ya.inArray(g,e)>-1)f&&f.push(g);else if(k=Ya(g),h=v(m.appendChild(g),"script"),k&&w(h),c)for(l=0;g=h[l++];)db.test(g.type||"")&&c.push(g);return m}function y(){return!0}function z(){return!1}function A(a,b){return a===B()==("focus"===b)}function B(){try{return ia.activeElement}catch(a){}}function C(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)C(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),!1===e)e=z;else if(!e)return a;return 1===f&&(g=e,e=function(a){return ya().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=ya.guid++)),a.each(function(){ya.event.add(this,b,e,d,c)})}function D(a,b,c){if(!c)return void(void 0===Qa.get(a,b)&&ya.event.add(a,b,y));Qa.set(a,b,!1),ya.event.add(a,b,{namespace:!1,handler:function(a){var d,e,f=Qa.get(this,b);if(1&a.isTrigger&&this[b]){if(f.length)(ya.event.special[b]||{}).delegateType&&a.stopPropagation();else if(f=ka.call(arguments),Qa.set(this,b,f),d=c(this,b),this[b](),e=Qa.get(this,b),f!==e||d?Qa.set(this,b,!1):e={},f!==e)return a.stopImmediatePropagation(),a.preventDefault(),e.value}else f.length&&(Qa.set(this,b,{value:ya.event.trigger(ya.extend(f[0],ya.Event.prototype),f.slice(1),this)}),a.stopImmediatePropagation())}})}function E(a,b){return f(a,"table")&&f(11!==b.nodeType?b:b.firstChild,"tr")?ya(a).children("tbody")[0]||a:a}function F(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function G(a){return"true/"===(a.type||"").slice(0,5)?a.type=a.type.slice(5):a.removeAttribute("type"),a}function H(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(Qa.hasData(a)&&(f=Qa.access(a),g=Qa.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)ya.event.add(b,e,j[e][c])}Ra.hasData(a)&&(h=Ra.access(a),i=ya.extend({},h),Ra.set(b,i))}}function I(a,b){var c=b.nodeName.toLowerCase();"input"===c&&bb.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function J(a,b,d,e){b=la.apply([],b);var f,g,h,i,j,k,l=0,m=a.length,n=m-1,o=b[0],p=ua(o);if(p||m>1&&"string"==typeof o&&!ta.checkClone&&lb.test(o))return a.each(function(c){var f=a.eq(c);p&&(b[0]=o.call(this,c,f.html())),J(f,b,d,e)});if(m&&(f=x(b,a[0].ownerDocument,!1,a,e),g=f.firstChild,1===f.childNodes.length&&(f=g),g||e)){for(h=ya.map(v(f,"script"),F),i=h.length;l<m;l++)j=f,l!==n&&(j=ya.clone(j,!0,!0),i&&ya.merge(h,v(j,"script"))),d.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,ya.map(h,G),l=0;l<i;l++)j=h[l],db.test(j.type||"")&&!Qa.access(j,"globalEval")&&ya.contains(k,j)&&(j.src&&"module"!==(j.type||"").toLowerCase()?ya._evalUrl&&!j.noModule&&ya._evalUrl(j.src,{nonce:j.nonce||j.getAttribute("nonce")}):c(j.textContent.replace(mb,""),j,k))}return a}function K(a,b,c){for(var d,e=b?ya.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||ya.cleanData(v(d)),d.parentNode&&(c&&Ya(d)&&w(v(d,"script")),d.parentNode.removeChild(d));return a}function L(a,b,c){var d,e,f,g,h=a.style;return c=c||ob(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||Ya(a)||(g=ya.style(a,b)),!ta.pixelBoxStyles()&&nb.test(g)&&pb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function M(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function N(a){for(var b=a[0].toUpperCase()+a.slice(1),c=qb.length;c--;)if((a=qb[c]+b)in rb)return a}function O(a){var b=ya.cssProps[a]||sb[a];return b||(a in rb?a:sb[a]=N(a)||a)}function P(a,b,c){var d=Va.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Q(a,b,c,d,e,f){var g="width"===b?1:0,h=0,i=0;if(c===(d?"border":"content"))return 0;for(;g<4;g+=2)"margin"===c&&(i+=ya.css(a,c+Wa[g],!0,e)),d?("content"===c&&(i-=ya.css(a,"padding"+Wa[g],!0,e)),"margin"!==c&&(i-=ya.css(a,"border"+Wa[g]+"Width",!0,e))):(i+=ya.css(a,"padding"+Wa[g],!0,e),"padding"!==c?i+=ya.css(a,"border"+Wa[g]+"Width",!0,e):h+=ya.css(a,"border"+Wa[g]+"Width",!0,e));return!d&&f>=0&&(i+=Math.max(0,Math.ceil(a["offset"+b[0].toUpperCase()+b.slice(1)]-f-i-h-.5))||0),i}function R(a,b,c){var d=ob(a),e=!ta.boxSizingReliable()||c,f=e&&"border-box"===ya.css(a,"boxSizing",!1,d),g=f,h=L(a,b,d),i="offset"+b[0].toUpperCase()+b.slice(1);if(nb.test(h)){if(!c)return h;h="auto"}return(!ta.boxSizingReliable()&&f||"auto"===h||!parseFloat(h)&&"inline"===ya.css(a,"display",!1,d))&&a.getClientRects().length&&(f="border-box"===ya.css(a,"boxSizing",!1,d),(g=i in a)&&(h=a[i])),(h=parseFloat(h)||0)+Q(a,b,c||(f?"border":"content"),g,d,h)+"px"}function S(a,b,c,d,e){return new S.prototype.init(a,b,c,d,e)}function T(){yb&&(!1===ia.hidden&&a.requestAnimationFrame?a.requestAnimationFrame(T):a.setTimeout(T,ya.fx.interval),ya.fx.tick())}function U(){return a.setTimeout(function(){xb=void 0}),xb=Date.now()}function V(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=Wa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function W(a,b,c){for(var d,e=(Z.tweeners[b]||[]).concat(Z.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function X(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&$a(a),q=Qa.get(a,"fxshow");c.queue||(g=ya._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,ya.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],zb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||ya.style(a,d)}if((i=!ya.isEmptyObject(b))||!ya.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=Qa.get(a,"display")),k=ya.css(a,"display"),"none"===k&&(j?k=j:(u([a],!0),j=a.style.display||j,k=ya.css(a,"display"),u([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===ya.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=Qa.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&u([a],!0),m.done(function(){p||u([a]),Qa.remove(a,"fxshow");for(d in n)ya.style(a,d,n[d])})),i=W(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function Y(a,b){var c,d,e,f,g;for(c in a)if(d=o(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=ya.cssHooks[d])&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Z(a,b,c){var d,e,f=0,g=Z.prefilters.length,h=ya.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=xb||U(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:ya.extend({},b),opts:ya.extend(!0,{specialEasing:{},easing:ya.easing._default},c),originalProperties:b,originalOptions:c,startTime:xb||U(),duration:c.duration,tweens:[],createTween:function(b,c){var d=ya.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Y(k,j.opts.specialEasing);f<g;f++)if(d=Z.prefilters[f].call(j,a,k,j.opts))return ua(d.stop)&&(ya._queueHooks(j.elem,j.opts.queue).stop=d.stop.bind(d)),d;return ya.map(k,W,j),ua(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),ya.fx.timer(ya.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}function $(a){return(a.match(Ja)||[]).join(" ")}function _(a){return a.getAttribute&&a.getAttribute("class")||""}function aa(a){return Array.isArray(a)?a:"string"==typeof a?a.match(Ja)||[]:[]}function ba(a,b,c,e){var f;if(Array.isArray(b))ya.each(b,function(b,d){c||Lb.test(a)?e(a,d):ba(a+"["+("object"==typeof d&&null!=d?b:"")+"]",d,c,e)});else if(c||"object"!==d(b))e(a,b);else for(f in b)ba(a+"["+f+"]",b[f],c,e)}function ca(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(Ja)||[];if(ua(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function da(a,b,c,d){function e(h){var i;return f[h]=!0,ya.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Xb;return e(b.dataTypes[0])||!f["*"]&&e("*")}function ea(a,b){var c,d,e=ya.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&ya.extend(!0,a,d),a}function fa(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function ga(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(!(g=j[i+" "+f]||j["* "+f]))for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}if(!0!==g)if(g&&a.throws)b=g(b);else try{b=g(b)}catch(a){return{state:"parsererror",error:g?a:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}var ha=[],ia=a.document,ja=Object.getPrototypeOf,ka=ha.slice,la=ha.concat,ma=ha.push,na=ha.indexOf,oa={},pa=oa.toString,qa=oa.hasOwnProperty,ra=qa.toString,sa=ra.call(Object),ta={},ua=function(a){return"function"==typeof a&&"number"!=typeof a.nodeType},va=function(a){return null!=a&&a===a.window},wa={type:!0,src:!0,nonce:!0,noModule:!0},xa="3.4.1",ya=function(a,b){return new ya.fn.init(a,b)},za=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;ya.fn=ya.prototype={jquery:xa,constructor:ya,length:0,toArray:function(){return ka.call(this)},get:function(a){return null==a?ka.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=ya.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return ya.each(this,a)},map:function(a){return this.pushStack(ya.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(ka.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:ma,sort:ha.sort,splice:ha.splice},ya.extend=ya.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||ua(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)d=a[b],"__proto__"!==b&&g!==d&&(j&&d&&(ya.isPlainObject(d)||(e=Array.isArray(d)))?(c=g[b],f=e&&!Array.isArray(c)?[]:e||ya.isPlainObject(c)?c:{},e=!1,g[b]=ya.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},ya.extend({expando:"jQuery"+(xa+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==pa.call(a))&&(!(b=ja(a))||"function"==typeof(c=qa.call(b,"constructor")&&b.constructor)&&ra.call(c)===sa)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},globalEval:function(a,b){c(a,{nonce:b&&b.nonce})},each:function(a,b){var c,d=0;if(e(a))for(c=a.length;d<c&&!1!==b.call(a[d],d,a[d]);d++);else for(d in a)if(!1===b.call(a[d],d,a[d]))break;return a},trim:function(a){return null==a?"":(a+"").replace(za,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(e(Object(a))?ya.merge(c,"string"==typeof a?[a]:a):ma.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:na.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d=[],e=0,f=a.length,g=!c;e<f;e++)!b(a[e],e)!==g&&d.push(a[e]);return d},map:function(a,b,c){var d,f,g=0,h=[];if(e(a))for(d=a.length;g<d;g++)null!=(f=b(a[g],g,c))&&h.push(f);else for(g in a)null!=(f=b(a[g],g,c))&&h.push(f);return la.apply([],h)},guid:1,support:ta}),"function"==typeof Symbol&&(ya.fn[Symbol.iterator]=ha[Symbol.iterator]),ya.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){oa["[object "+b+"]"]=b.toLowerCase()});var Aa=function(a){function b(a,b,c,d){var e,f,g,h,i,j,k,m=b&&b.ownerDocument,o=b?b.nodeType:9;if(c=c||[],"string"!=typeof a||!a||1!==o&&9!==o&&11!==o)return c;if(!d&&((b?b.ownerDocument||b:P)!==H&&G(b),b=b||H,J)){if(11!==o&&(i=ta.exec(a)))if(e=i[1]){if(9===o){if(!(g=b.getElementById(e)))return c;if(g.id===e)return c.push(g),c}else if(m&&(g=m.getElementById(e))&&N(b,g)&&g.id===e)return c.push(g),c}else{if(i[2])return _.apply(c,b.getElementsByTagName(a)),c;if((e=i[3])&&w.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(e)),c}if(w.qsa&&!V[a+" "]&&(!K||!K.test(a))&&(1!==o||"object"!==b.nodeName.toLowerCase())){if(k=a,m=b,1===o&&la.test(a)){for((h=b.getAttribute("id"))?h=h.replace(xa,ya):b.setAttribute("id",h=O),j=A(a),f=j.length;f--;)j[f]="#"+h+" "+n(j[f]);k=j.join(","),m=ua.test(a)&&l(b.parentNode)||b}try{return _.apply(c,m.querySelectorAll(k)),c}catch(b){V(a,!0)}finally{h===O&&b.removeAttribute("id")}}}return C(a.replace(ia,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>x.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[O]=!0,a}function e(a){var b=H.createElement("fieldset");try{return!!a(b)}catch(a){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=c.length;d--;)x.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return function(b){return"form"in b?b.parentNode&&!1===b.disabled?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&Aa(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function k(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function l(a){return a&&void 0!==a.getElementsByTagName&&a}function m(){}function n(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function o(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=R++;return b.first?function(b,c,e){for(;b=b[d];)if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[Q,h];if(i){for(;b=b[d];)if((1===b.nodeType||g)&&a(b,c,i))return!0}else for(;b=b[d];)if(1===b.nodeType||g)if(l=b[O]||(b[O]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===Q&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function p(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,c,d){for(var e=0,f=c.length;e<f;e++)b(a,c[e],d);return d}function r(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function s(a,b,c,e,f,g){return e&&!e[O]&&(e=s(e)),f&&!f[O]&&(f=s(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=d||q(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?p:r(p,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=r(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?ba(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=r(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):_.apply(g,t)})}function t(a){for(var b,c,d,e=a.length,f=x.relative[a[0].type],g=f||x.relative[" "],h=f?1:0,i=o(function(a){return a===b},g,!0),j=o(function(a){return ba(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==D)||((b=c).nodeType?i(a,c,d):j(a,c,d));return b=null,e}];h<e;h++)if(c=x.relative[a[h].type])k=[o(p(k),c)];else{if(c=x.filter[a[h].type].apply(null,a[h].matches),c[O]){for(d=++h;d<e&&!x.relative[a[d].type];d++);return s(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ia,"$1"),c,h<d&&t(a.slice(h,d)),d<e&&t(a=a.slice(d)),d<e&&n(a))}k.push(c)}return p(k)}function u(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],q=[],s=D,t=d||f&&x.find.TAG("*",j),u=Q+=null==s?1:Math.random()||.1,v=t.length;for(j&&(D=g===H||g||j);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0,g||k.ownerDocument===H||(G(k),h=!J);m=a[l++];)if(m(k,g||H,h)){i.push(k);break}j&&(Q=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,q,g,h);if(d){if(n>0)for(;o--;)p[o]||q[o]||(q[o]=Z.call(i));q=r(q)}_.apply(i,q),j&&!d&&q.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(Q=u,D=s),p};return e?d(g):g}var v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O="sizzle"+1*new Date,P=a.document,Q=0,R=0,S=c(),T=c(),U=c(),V=c(),W=function(a,b){return a===b&&(F=!0),0},X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,aa=Y.slice,ba=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},ca="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",da="[\\x20\\t\\r\\n\\f]",ea="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",fa="\\["+da+"*("+ea+")(?:"+da+"*([*^$|!~]?=)"+da+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ea+"))|)"+da+"*\\]",ga=":("+ea+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+fa+")*)|.*)\\)|)",ha=new RegExp(da+"+","g"),ia=new RegExp("^"+da+"+|((?:^|[^\\\\])(?:\\\\.)*)"+da+"+$","g"),ja=new RegExp("^"+da+"*,"+da+"*"),ka=new RegExp("^"+da+"*([>+~]|"+da+")"+da+"*"),la=new RegExp(da+"|>"),ma=new RegExp(ga),na=new RegExp("^"+ea+"$"),oa={ID:new RegExp("^#("+ea+")"),CLASS:new RegExp("^\\.("+ea+")"),TAG:new RegExp("^("+ea+"|[*])"),ATTR:new RegExp("^"+fa),PSEUDO:new RegExp("^"+ga),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+da+"*(even|odd|(([+-]|)(\\d*)n|)"+da+"*(?:([+-]|)"+da+"*(\\d+)|))"+da+"*\\)|)","i"),bool:new RegExp("^(?:"+ca+")$","i"),needsContext:new RegExp("^"+da+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+da+"*((?:-\\d)?\\d*)"+da+"*\\)|)(?=[^-]|$)","i")},pa=/HTML$/i,qa=/^(?:input|select|textarea|button)$/i,ra=/^h\d$/i,sa=/^[^{]+\{\s*\[native \w/,ta=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ua=/[+~]/,va=new RegExp("\\\\([\\da-f]{1,6}"+da+"?|("+da+")|.)","ig"),wa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},xa=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ya=function(a,b){return b?"\0"===a?"�":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},za=function(){G()},Aa=o(function(a){return!0===a.disabled&&"fieldset"===a.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{_.apply(Y=aa.call(P.childNodes),P.childNodes),Y[P.childNodes.length].nodeType}catch(a){_={apply:Y.length?function(a,b){$.apply(a,aa.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}w=b.support={},z=b.isXML=function(a){var b=a.namespaceURI,c=(a.ownerDocument||a).documentElement;return!pa.test(b||c&&c.nodeName||"HTML")},G=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:P;return d!==H&&9===d.nodeType&&d.documentElement?(H=d,I=H.documentElement,J=!z(H),P!==H&&(c=H.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",za,!1):c.attachEvent&&c.attachEvent("onunload",za)),w.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),w.getElementsByTagName=e(function(a){return a.appendChild(H.createComment("")),!a.getElementsByTagName("*").length}),w.getElementsByClassName=sa.test(H.getElementsByClassName),w.getById=e(function(a){return I.appendChild(a).id=O,!H.getElementsByName||!H.getElementsByName(O).length}),w.getById?(x.filter.ID=function(a){var b=a.replace(va,wa);return function(a){return a.getAttribute("id")===b}},x.find.ID=function(a,b){if(void 0!==b.getElementById&&J){var c=b.getElementById(a);return c?[c]:[]}}):(x.filter.ID=function(a){var b=a.replace(va,wa);return function(a){var c=void 0!==a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},x.find.ID=function(a,b){if(void 0!==b.getElementById&&J){var c,d,e,f=b.getElementById(a);if(f){if((c=f.getAttributeNode("id"))&&c.value===a)return[f];for(e=b.getElementsByName(a),d=0;f=e[d++];)if((c=f.getAttributeNode("id"))&&c.value===a)return[f]}return[]}}),x.find.TAG=w.getElementsByTagName?function(a,b){return void 0!==b.getElementsByTagName?b.getElementsByTagName(a):w.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},x.find.CLASS=w.getElementsByClassName&&function(a,b){if(void 0!==b.getElementsByClassName&&J)return b.getElementsByClassName(a)},L=[],K=[],(w.qsa=sa.test(H.querySelectorAll))&&(e(function(a){I.appendChild(a).innerHTML="<a id='"+O+"'></a><select id='"+O+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&K.push("[*^$]="+da+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||K.push("\\["+da+"*(?:value|"+ca+")"),a.querySelectorAll("[id~="+O+"-]").length||K.push("~="),a.querySelectorAll(":checked").length||K.push(":checked"),a.querySelectorAll("a#"+O+"+*").length||K.push(".#.+[+~]")}),e(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=H.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&K.push("name"+da+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&K.push(":enabled",":disabled"),I.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&K.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),K.push(",.*:")})),(w.matchesSelector=sa.test(M=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&e(function(a){w.disconnectedMatch=M.call(a,"*"),M.call(a,"[s!='']:x"),L.push("!=",ga)}),K=K.length&&new RegExp(K.join("|")),L=L.length&&new RegExp(L.join("|")),b=sa.test(I.compareDocumentPosition),N=b||sa.test(I.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},W=b?function(a,b){if(a===b)return F=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c||(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!w.sortDetached&&b.compareDocumentPosition(a)===c?a===H||a.ownerDocument===P&&N(P,a)?-1:b===H||b.ownerDocument===P&&N(P,b)?1:E?ba(E,a)-ba(E,b):0:4&c?-1:1)}:function(a,b){if(a===b)return F=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===H?-1:b===H?1:e?-1:f?1:E?ba(E,a)-ba(E,b):0;if(e===f)return g(a,b);for(c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);for(;h[d]===i[d];)d++;return d?g(h[d],i[d]):h[d]===P?-1:i[d]===P?1:0},H):H},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==H&&G(a),w.matchesSelector&&J&&!V[c+" "]&&(!L||!L.test(c))&&(!K||!K.test(c)))try{var d=M.call(a,c);if(d||w.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(a){V(c,!0)}return b(c,H,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==H&&G(a),N(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==H&&G(a);var c=x.attrHandle[b.toLowerCase()],d=c&&X.call(x.attrHandle,b.toLowerCase())?c(a,b,!J):void 0;return void 0!==d?d:w.attributes||!J?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.escape=function(a){return(a+"").replace(xa,ya)},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(F=!w.detectDuplicates,E=!w.sortStable&&a.slice(0),a.sort(W),F){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return E=null,a},y=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=y(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=y(b);return c},x=b.selectors={cacheLength:50,createPseudo:d,match:oa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(va,wa),a[3]=(a[3]||a[4]||a[5]||"").replace(va,wa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return oa.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&ma.test(c)&&(b=A(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(va,wa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=S[a+" "];return b||(b=new RegExp("(^|"+da+")"+a+"("+da+"|$)"))&&S(a,function(a){return b.test("string"==typeof a.className&&a.className||void 0!==a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ha," ")+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(m=q,l=m[O]||(m[O]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===Q&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(t=n=0)||o.pop();)if(1===m.nodeType&&++t&&m===b){k[a]=[Q,n,t];break}}else if(s&&(m=b,l=m[O]||(m[O]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===Q&&j[1],t=n),!1===t)for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(s&&(l=m[O]||(m[O]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[Q,t]),m!==b)););return(t-=e)===d||t%d==0&&t/d>=0}}},PSEUDO:function(a,c){var e,f=x.pseudos[a]||x.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[O]?f(c):f.length>1?(e=[a,a,"",c],x.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=ba(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=B(a.replace(ia,"$1"));return e[O]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(va,wa),function(b){return(b.textContent||y(b)).indexOf(a)>-1}}),lang:d(function(a){return na.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(va,wa).toLowerCase(),function(b){var c;do{if(c=J?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===I},focus:function(a){return a===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:j(!1),disabled:j(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!x.pseudos.empty(a)},header:function(a){return ra.test(a.nodeName)},input:function(a){return qa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:k(function(){return[0]}),last:k(function(a,b){return[b-1]}),eq:k(function(a,b,c){return[c<0?c+b:c]}),even:k(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:k(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:k(function(a,b,c){for(var d=c<0?c+b:c>b?b:c;--d>=0;)a.push(d);return a}),gt:k(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},x.pseudos.nth=x.pseudos.eq;for(v in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[v]=h(v);for(v in{submit:!0,reset:!0})x.pseudos[v]=i(v);return m.prototype=x.filters=x.pseudos,x.setFilters=new m,A=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=T[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=x.preFilter;h;){d&&!(e=ja.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ka.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ia," ")}),h=h.slice(d.length));for(g in x.filter)!(e=oa[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):T(a,i).slice(0)},B=b.compile=function(a,b){var c,d=[],e=[],f=U[a+" "];if(!f){for(b||(b=A(a)),c=b.length;c--;)f=t(b[c]),f[O]?d.push(f):e.push(f);f=U(a,u(e,d)),f.selector=a}return f},C=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,k=!d&&A(a=j.selector||a);if(c=c||[],1===k.length){if(f=k[0]=k[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&9===b.nodeType&&J&&x.relative[f[1].type]){if(!(b=(x.find.ID(g.matches[0].replace(va,wa),b)||[])[0]))return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=oa.needsContext.test(a)?0:f.length;e--&&(g=f[e],!x.relative[h=g.type]);)if((i=x.find[h])&&(d=i(g.matches[0].replace(va,wa),ua.test(f[0].type)&&l(b.parentNode)||b))){if(f.splice(e,1),!(a=d.length&&n(f)))return _.apply(c,d),c;break}}return(j||B(a,k))(d,b,!J,c,!b||ua.test(a)&&l(b.parentNode)||b),c},w.sortStable=O.split("").sort(W).join("")===O,w.detectDuplicates=!!F,G(),w.sortDetached=e(function(a){return 1&a.compareDocumentPosition(H.createElement("fieldset"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),w.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ca,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);ya.find=Aa,ya.expr=Aa.selectors,ya.expr[":"]=ya.expr.pseudos,ya.uniqueSort=ya.unique=Aa.uniqueSort,ya.text=Aa.getText,ya.isXMLDoc=Aa.isXML,ya.contains=Aa.contains,ya.escapeSelector=Aa.escape;var Ba=function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&ya(a).is(c))break;d.push(a)}return d},Ca=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},Da=ya.expr.match.needsContext,Ea=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;ya.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?ya.find.matchesSelector(d,a)?[d]:[]:ya.find.matches(a,ya.grep(b,function(a){return 1===a.nodeType}))},ya.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(ya(a).filter(function(){for(b=0;b<d;b++)if(ya.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)ya.find(a,e[b],c);return d>1?ya.uniqueSort(c):c},filter:function(a){return this.pushStack(g(this,a||[],!1))},not:function(a){return this.pushStack(g(this,a||[],!0))},is:function(a){return!!g(this,"string"==typeof a&&Da.test(a)?ya(a):a||[],!1).length}});var Fa,Ga=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ya.fn.init=function(a,b,c){var d,e;if(!a)return this;if(c=c||Fa,"string"==typeof a){if(!(d="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:Ga.exec(a))||!d[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(d[1]){if(b=b instanceof ya?b[0]:b,ya.merge(this,ya.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:ia,!0)),Ea.test(d[1])&&ya.isPlainObject(b))for(d in b)ua(this[d])?this[d](b[d]):this.attr(d,b[d]);return this}return e=ia.getElementById(d[2]),e&&(this[0]=e,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):ua(a)?void 0!==c.ready?c.ready(a):a(ya):ya.makeArray(a,this)}).prototype=ya.fn,Fa=ya(ia);var Ha=/^(?:parents|prev(?:Until|All))/,Ia={children:!0,contents:!0,next:!0,prev:!0};ya.fn.extend({has:function(a){var b=ya(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(ya.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&ya(a);if(!Da.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&ya.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?ya.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?na.call(ya(a),this[0]):na.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(ya.uniqueSort(ya.merge(this.get(),ya(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),ya.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return Ba(a,"parentNode")},parentsUntil:function(a,b,c){return Ba(a,"parentNode",c)},next:function(a){return h(a,"nextSibling")},prev:function(a){return h(a,"previousSibling")},nextAll:function(a){return Ba(a,"nextSibling")},prevAll:function(a){return Ba(a,"previousSibling")},nextUntil:function(a,b,c){return Ba(a,"nextSibling",c)},prevUntil:function(a,b,c){return Ba(a,"previousSibling",c)},siblings:function(a){return Ca((a.parentNode||{}).firstChild,a)},children:function(a){return Ca(a.firstChild)},contents:function(a){return void 0!==a.contentDocument?a.contentDocument:(f(a,"template")&&(a=a.content||a),ya.merge([],a.childNodes))}},function(a,b){ya.fn[a]=function(c,d){var e=ya.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=ya.filter(d,e)),this.length>1&&(Ia[a]||ya.uniqueSort(e),Ha.test(a)&&e.reverse()),this.pushStack(e)}});var Ja=/[^\x20\t\r\n\f]+/g;ya.Callbacks=function(a){a="string"==typeof a?i(a):ya.extend({},a);var b,c,e,f,g=[],h=[],j=-1,k=function(){for(f=f||a.once,e=b=!0;h.length;j=-1)for(c=h.shift();++j<g.length;)!1===g[j].apply(c[0],c[1])&&a.stopOnFalse&&(j=g.length,c=!1);a.memory||(c=!1),b=!1,f&&(g=c?[]:"")},l={add:function(){return g&&(c&&!b&&(j=g.length-1,h.push(c)),function b(c){ya.each(c,function(c,e){ua(e)?a.unique&&l.has(e)||g.push(e):e&&e.length&&"string"!==d(e)&&b(e)})}(arguments),c&&!b&&k()),this},remove:function(){return ya.each(arguments,function(a,b){for(var c;(c=ya.inArray(b,g,c))>-1;)g.splice(c,1),c<=j&&j--}),this},has:function(a){return a?ya.inArray(a,g)>-1:g.length>0},empty:function(){return g&&(g=[]),this},disable:function(){return f=h=[],g=c="",this},disabled:function(){return!g},lock:function(){return f=h=[],c||b||(g=c=""),this},locked:function(){return!!f},fireWith:function(a,c){return f||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||k()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!e}};return l},ya.extend({Deferred:function(b){var c=[["notify","progress",ya.Callbacks("memory"),ya.Callbacks("memory"),2],["resolve","done",ya.Callbacks("once memory"),ya.Callbacks("once memory"),0,"resolved"],["reject","fail",ya.Callbacks("once memory"),ya.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},catch:function(a){return e.then(null,a)},pipe:function(){var a=arguments;return ya.Deferred(function(b){ya.each(c,function(c,d){var e=ua(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&ua(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){function f(b,c,d,e){return function(){var h=this,i=arguments,l=function(){var a,l;if(!(b<g)){if((a=d.apply(h,i))===c.promise())throw new TypeError("Thenable self-resolution");l=a&&("object"==typeof a||"function"==typeof a)&&a.then,ua(l)?e?l.call(a,f(g,c,j,e),f(g,c,k,e)):(g++,l.call(a,f(g,c,j,e),f(g,c,k,e),f(g,c,j,c.notifyWith))):(d!==j&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},m=e?l:function(){try{l()}catch(a){ya.Deferred.exceptionHook&&ya.Deferred.exceptionHook(a,m.stackTrace),b+1>=g&&(d!==k&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?m():(ya.Deferred.getStackHook&&(m.stackTrace=ya.Deferred.getStackHook()),a.setTimeout(m))}}var g=0;return ya.Deferred(function(a){c[0][3].add(f(0,a,ua(e)?e:j,a.notifyWith)),c[1][3].add(f(0,a,ua(b)?b:j)),c[2][3].add(f(0,a,ua(d)?d:k))}).promise()},promise:function(a){return null!=a?ya.extend(a,e):e}},f={};return ya.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[3-a][3].disable,c[0][2].lock,c[0][3].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=ka.call(arguments),f=ya.Deferred(),g=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?ka.call(arguments):c,--b||f.resolveWith(d,e)}};if(b<=1&&(l(a,f.done(g(c)).resolve,f.reject,!b),"pending"===f.state()||ua(e[c]&&e[c].then)))return f.then();for(;c--;)l(e[c],g(c),f.reject);return f.promise()}});var Ka=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ya.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Ka.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},ya.readyException=function(b){a.setTimeout(function(){throw b})};var La=ya.Deferred();ya.fn.ready=function(a){return La.then(a).catch(function(a){ya.readyException(a)}),this},ya.extend({isReady:!1,readyWait:1,ready:function(a){(!0===a?--ya.readyWait:ya.isReady)||(ya.isReady=!0,!0!==a&&--ya.readyWait>0||La.resolveWith(ia,[ya]))}}),ya.ready.then=La.then,"complete"===ia.readyState||"loading"!==ia.readyState&&!ia.documentElement.doScroll?a.setTimeout(ya.ready):(ia.addEventListener("DOMContentLoaded",m),a.addEventListener("load",m));var Ma=function(a,b,c,e,f,g,h){var i=0,j=a.length,k=null==c;if("object"===d(c)){f=!0;for(i in c)Ma(a,b,i,c[i],!0,g,h)}else if(void 0!==e&&(f=!0,ua(e)||(h=!0),k&&(h?(b.call(a,e),b=null):(k=b,b=function(a,b,c){return k.call(ya(a),c)})),b))for(;i<j;i++)b(a[i],c,h?e:e.call(a[i],i,b(a[i],c)));return f?a:k?b.call(a):j?b(a[0],c):g},Na=/^-ms-/,Oa=/-([a-z])/g,Pa=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};p.uid=1,p.prototype={cache:function(a){var b=a[this.expando];return b||(b={},Pa(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[o(b)]=c;else for(d in b)e[o(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][o(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(o):(b=o(b),b=b in d?[b]:b.match(Ja)||[]),c=b.length;for(;c--;)delete d[b[c]]}(void 0===b||ya.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!ya.isEmptyObject(b)}};var Qa=new p,Ra=new p,Sa=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ta=/[A-Z]/g;ya.extend({hasData:function(a){return Ra.hasData(a)||Qa.hasData(a)},data:function(a,b,c){return Ra.access(a,b,c)},removeData:function(a,b){Ra.remove(a,b)},_data:function(a,b,c){return Qa.access(a,b,c)},_removeData:function(a,b){Qa.remove(a,b)}}),ya.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=Ra.get(f),1===f.nodeType&&!Qa.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=o(d.slice(5)),r(f,d,e[d])));Qa.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){Ra.set(this,a)}):Ma(this,function(b){var c;if(f&&void 0===b){if(void 0!==(c=Ra.get(f,a)))return c;if(void 0!==(c=r(f,a)))return c}else this.each(function(){Ra.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){Ra.remove(this,a)})}}),ya.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=Qa.get(a,b),c&&(!d||Array.isArray(c)?d=Qa.access(a,b,ya.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=ya.queue(a,b),d=c.length,e=c.shift(),f=ya._queueHooks(a,b),g=function(){ya.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return Qa.get(a,c)||Qa.access(a,c,{empty:ya.Callbacks("once memory").add(function(){Qa.remove(a,[b+"queue",c])})})}}),ya.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?ya.queue(this[0],a):void 0===b?this:this.each(function(){var c=ya.queue(this,a,b);ya._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&ya.dequeue(this,a)})},dequeue:function(a){return this.each(function(){ya.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=ya.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)(c=Qa.get(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Ua=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Va=new RegExp("^(?:([+-])=|)("+Ua+")([a-z%]*)$","i"),Wa=["Top","Right","Bottom","Left"],Xa=ia.documentElement,Ya=function(a){return ya.contains(a.ownerDocument,a)},Za={composed:!0};Xa.getRootNode&&(Ya=function(a){return ya.contains(a.ownerDocument,a)||a.getRootNode(Za)===a.ownerDocument});var $a=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&Ya(a)&&"none"===ya.css(a,"display")},_a=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},ab={};ya.fn.extend({show:function(){return u(this,!0)},hide:function(){return u(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){$a(this)?ya(this).show():ya(this).hide()})}});var bb=/^(?:checkbox|radio)$/i,cb=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,db=/^$|^module$|\/(?:java|ecma)script/i,eb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};eb.optgroup=eb.option,eb.tbody=eb.tfoot=eb.colgroup=eb.caption=eb.thead,eb.th=eb.td;var fb=/<|&#?\w+;/;!function(){var a=ia.createDocumentFragment(),b=a.appendChild(ia.createElement("div")),c=ia.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),ta.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",ta.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var gb=/^key/,hb=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ib=/^([^.]*)(?:\.(.+)|)/;ya.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=Qa.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),e&&ya.find.matchesSelector(Xa,e),c.guid||(c.guid=ya.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return void 0!==ya&&ya.event.triggered!==b.type?ya.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(Ja)||[""],j=b.length;j--;)h=ib.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=ya.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=ya.event.special[n]||{},k=ya.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&ya.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&!1!==l.setup.call(a,d,o,g)||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),ya.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=Qa.hasData(a)&&Qa.get(a);if(q&&(i=q.events)){for(b=(b||"").match(Ja)||[""],j=b.length;j--;)if(h=ib.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=ya.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,o,q.handle)||ya.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)ya.event.remove(a,n+b[j],c,d,!0);ya.isEmptyObject(i)&&Qa.remove(a,"handle events")}},dispatch:function(a){var b,c,d,e,f,g,h=ya.event.fix(a),i=new Array(arguments.length),j=(Qa.get(this,"events")||{})[h.type]||[],k=ya.event.special[h.type]||{};for(i[0]=h,b=1;b<arguments.length;b++)i[b]=arguments[b];if(h.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,h)){for(g=ya.event.handlers.call(this,h,j),b=0;(e=g[b++])&&!h.isPropagationStopped();)for(h.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!h.isImmediatePropagationStopped();)h.rnamespace&&!1!==f.namespace&&!h.rnamespace.test(f.namespace)||(h.handleObj=f,h.data=f.data,void 0!==(d=((ya.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,i))&&!1===(h.result=d)&&(h.preventDefault(),h.stopPropagation()));return k.postDispatch&&k.postDispatch.call(this,h),h.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||!0!==j.disabled)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?ya(e,this).index(j)>-1:ya.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(ya.Event.prototype,a,{enumerable:!0,configurable:!0,get:ua(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[ya.expando]?a:new ya.Event(a)},special:{load:{noBubble:!0},click:{setup:function(a){var b=this||a;return bb.test(b.type)&&b.click&&f(b,"input")&&D(b,"click",y),!1},trigger:function(a){var b=this||a;return bb.test(b.type)&&b.click&&f(b,"input")&&D(b,"click"),!0},_default:function(a){var b=a.target;return bb.test(b.type)&&b.click&&f(b,"input")&&Qa.get(b,"click")||f(b,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},ya.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},ya.Event=function(a,b){if(!(this instanceof ya.Event))return new ya.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?y:z,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&ya.extend(this,b),this.timeStamp=a&&a.timeStamp||Date.now(),this[ya.expando]=!0},ya.Event.prototype={constructor:ya.Event,isDefaultPrevented:z,isPropagationStopped:z,isImmediatePropagationStopped:z,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=y,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=y,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=y,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},ya.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&gb.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&hb.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},ya.event.addProp),ya.each({focus:"focusin",blur:"focusout"},function(a,b){ya.event.special[a]={setup:function(){return D(this,a,A),!1},trigger:function(){return D(this,a),!0},delegateType:b}}),ya.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){ya.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||ya.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),ya.fn.extend({on:function(a,b,c,d){return C(this,a,b,c,d)},one:function(a,b,c,d){return C(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,ya(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=z),this.each(function(){ya.event.remove(this,a,c,b)})}});var jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,kb=/<script|<style|<link/i,lb=/checked\s*(?:[^=]|=\s*.checked.)/i,mb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ya.extend({htmlPrefilter:function(a){return a.replace(jb,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=Ya(a);if(!(ta.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||ya.isXMLDoc(a)))for(g=v(h),f=v(a),d=0,e=f.length;d<e;d++)I(f[d],g[d]);if(b)if(c)for(f=f||v(a),g=g||v(h),d=0,e=f.length;d<e;d++)H(f[d],g[d]);else H(a,h);return g=v(h,"script"),g.length>0&&w(g,!i&&v(a,"script")),h},cleanData:function(a){for(var b,c,d,e=ya.event.special,f=0;void 0!==(c=a[f]);f++)if(Pa(c)){if(b=c[Qa.expando]){if(b.events)for(d in b.events)e[d]?ya.event.remove(c,d):ya.removeEvent(c,d,b.handle);c[Qa.expando]=void 0}c[Ra.expando]&&(c[Ra.expando]=void 0)}}}),ya.fn.extend({detach:function(a){return K(this,a,!0)},remove:function(a){return K(this,a)},text:function(a){return Ma(this,function(a){return void 0===a?ya.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return J(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){E(this,a).appendChild(a)}})},prepend:function(){return J(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=E(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return J(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return J(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(ya.cleanData(v(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return ya.clone(this,a,b)})},html:function(a){return Ma(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!kb.test(a)&&!eb[(cb.exec(a)||["",""])[1].toLowerCase()]){a=ya.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(ya.cleanData(v(b,!1)),b.innerHTML=a);b=0}catch(a){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return J(this,arguments,function(b){var c=this.parentNode;ya.inArray(this,a)<0&&(ya.cleanData(v(this)),c&&c.replaceChild(b,this))},a)}}),ya.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){ya.fn[a]=function(a){for(var c,d=[],e=ya(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),ya(e[g])[b](c),ma.apply(d,c.get());return this.pushStack(d)}});var nb=new RegExp("^("+Ua+")(?!px)[a-z%]+$","i"),ob=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},pb=new RegExp(Wa.join("|"),"i");!function(){function b(){if(j){i.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",j.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Xa.appendChild(i).appendChild(j);var b=a.getComputedStyle(j);d="1%"!==b.top,h=12===c(b.marginLeft),j.style.right="60%",g=36===c(b.right),e=36===c(b.width),j.style.position="absolute",f=12===c(j.offsetWidth/3),Xa.removeChild(i),j=null}}function c(a){return Math.round(parseFloat(a))}var d,e,f,g,h,i=ia.createElement("div"),j=ia.createElement("div");j.style&&(j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",ta.clearCloneStyle="content-box"===j.style.backgroundClip,ya.extend(ta,{boxSizingReliable:function(){return b(),e},pixelBoxStyles:function(){return b(),g},pixelPosition:function(){return b(),d},reliableMarginLeft:function(){return b(),h},scrollboxSize:function(){return b(),f}}))}();var qb=["Webkit","Moz","ms"],rb=ia.createElement("div").style,sb={},tb=/^(none|table(?!-c[ea]).+)/,ub=/^--/,vb={position:"absolute",visibility:"hidden",display:"block"},wb={letterSpacing:"0",fontWeight:"400"};ya.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=L(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o(b),i=ub.test(b),j=a.style;if(i||(b=O(h)),g=ya.cssHooks[b]||ya.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b];f=typeof c,"string"===f&&(e=Va.exec(c))&&e[1]&&(c=s(a,b,e),f="number"),null!=c&&c===c&&("number"!==f||i||(c+=e&&e[3]||(ya.cssNumber[h]?"":"px")),ta.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c))}},css:function(a,b,c,d){var e,f,g,h=o(b);return ub.test(b)||(b=O(h)),g=ya.cssHooks[b]||ya.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=L(a,b,d)),"normal"===e&&b in wb&&(e=wb[b]),""===c||c?(f=parseFloat(e),!0===c||isFinite(f)?f||0:e):e}}),ya.each(["height","width"],function(a,b){ya.cssHooks[b]={get:function(a,c,d){if(c)return!tb.test(ya.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?R(a,b,d):_a(a,vb,function(){return R(a,b,d)})},set:function(a,c,d){var e,f=ob(a),g=!ta.scrollboxSize()&&"absolute"===f.position,h=g||d,i=h&&"border-box"===ya.css(a,"boxSizing",!1,f),j=d?Q(a,b,d,i,f):0;return i&&g&&(j-=Math.ceil(a["offset"+b[0].toUpperCase()+b.slice(1)]-parseFloat(f[b])-Q(a,b,"border",!1,f)-.5)),j&&(e=Va.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=ya.css(a,b)),P(a,c,j)}}}),ya.cssHooks.marginLeft=M(ta.reliableMarginLeft,function(a,b){if(b)return(parseFloat(L(a,"marginLeft"))||a.getBoundingClientRect().left-_a(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),ya.each({margin:"",padding:"",border:"Width"},function(a,b){ya.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+Wa[d]+b]=f[d]||f[d-2]||f[0];return e}},"margin"!==a&&(ya.cssHooks[a+b].set=P)}),ya.fn.extend({css:function(a,b){return Ma(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=ob(a),e=b.length;g<e;g++)f[b[g]]=ya.css(a,b[g],!1,d);return f}return void 0!==c?ya.style(a,b,c):ya.css(a,b)},a,b,arguments.length>1)}}),ya.Tween=S,S.prototype={constructor:S,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||ya.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(ya.cssNumber[c]?"":"px")},cur:function(){var a=S.propHooks[this.prop];return a&&a.get?a.get(this):S.propHooks._default.get(this)},run:function(a){var b,c=S.propHooks[this.prop];return this.options.duration?this.pos=b=ya.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):S.propHooks._default.set(this),this}},S.prototype.init.prototype=S.prototype,S.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=ya.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){ya.fx.step[a.prop]?ya.fx.step[a.prop](a):1!==a.elem.nodeType||!ya.cssHooks[a.prop]&&null==a.elem.style[O(a.prop)]?a.elem[a.prop]=a.now:ya.style(a.elem,a.prop,a.now+a.unit)}}},S.propHooks.scrollTop=S.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},ya.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},ya.fx=S.prototype.init,ya.fx.step={};var xb,yb,zb=/^(?:toggle|show|hide)$/,Ab=/queueHooks$/;ya.Animation=ya.extend(Z,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return s(c.elem,a,Va.exec(b),c),c}]},tweener:function(a,b){ua(a)?(b=a,a=["*"]):a=a.match(Ja);for(var c,d=0,e=a.length;d<e;d++)c=a[d],Z.tweeners[c]=Z.tweeners[c]||[],Z.tweeners[c].unshift(b)},prefilters:[X],prefilter:function(a,b){b?Z.prefilters.unshift(a):Z.prefilters.push(a)}}),ya.speed=function(a,b,c){var d=a&&"object"==typeof a?ya.extend({},a):{complete:c||!c&&b||ua(a)&&a,duration:a,easing:c&&b||b&&!ua(b)&&b};return ya.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in ya.fx.speeds?d.duration=ya.fx.speeds[d.duration]:d.duration=ya.fx.speeds._default),null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){ua(d.old)&&d.old.call(this),d.queue&&ya.dequeue(this,d.queue)},d},ya.fn.extend({fadeTo:function(a,b,c,d){return this.filter($a).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=ya.isEmptyObject(a),f=ya.speed(b,c,d),g=function(){var b=Z(this,ya.extend({},a),f);(e||Qa.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=ya.timers,g=Qa.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||ya.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=Qa.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=ya.timers,g=d?d.length:0;for(c.finish=!0,ya.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),ya.each(["toggle","show","hide"],function(a,b){var c=ya.fn[b];ya.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(V(b,!0),a,d,e)}}),ya.each({slideDown:V("show"),slideUp:V("hide"),slideToggle:V("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){ya.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),ya.timers=[],ya.fx.tick=function(){var a,b=0,c=ya.timers;for(xb=Date.now();b<c.length;b++)(a=c[b])()||c[b]!==a||c.splice(b--,1);c.length||ya.fx.stop(),xb=void 0},ya.fx.timer=function(a){ya.timers.push(a),ya.fx.start()},ya.fx.interval=13,ya.fx.start=function(){yb||(yb=!0,T())},ya.fx.stop=function(){yb=null},ya.fx.speeds={slow:600,fast:200,_default:400},ya.fn.delay=function(b,c){return b=ya.fx?ya.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=ia.createElement("input"),b=ia.createElement("select"),c=b.appendChild(ia.createElement("option"));a.type="checkbox",ta.checkOn=""!==a.value,ta.optSelected=c.selected,a=ia.createElement("input"),a.value="t",a.type="radio",ta.radioValue="t"===a.value}();var Bb,Cb=ya.expr.attrHandle;ya.fn.extend({attr:function(a,b){return Ma(this,ya.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){ya.removeAttr(this,a)})}}),ya.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return void 0===a.getAttribute?ya.prop(a,b,c):(1===f&&ya.isXMLDoc(a)||(e=ya.attrHooks[b.toLowerCase()]||(ya.expr.match.bool.test(b)?Bb:void 0)),void 0!==c?null===c?void ya.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=ya.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!ta.radioValue&&"radio"===b&&f(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(Ja);if(e&&1===a.nodeType)for(;c=e[d++];)a.removeAttribute(c)}}),Bb={set:function(a,b,c){return!1===b?ya.removeAttr(a,c):a.setAttribute(c,c),c}},ya.each(ya.expr.match.bool.source.match(/\w+/g),function(a,b){var c=Cb[b]||ya.find.attr;Cb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=Cb[g],Cb[g]=e,e=null!=c(a,b,d)?g:null,Cb[g]=f),e}});var Db=/^(?:input|select|textarea|button)$/i,Eb=/^(?:a|area)$/i;ya.fn.extend({prop:function(a,b){return Ma(this,ya.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[ya.propFix[a]||a]})}}),ya.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&ya.isXMLDoc(a)||(b=ya.propFix[b]||b,e=ya.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=ya.find.attr(a,"tabindex");return b?parseInt(b,10):Db.test(a.nodeName)||Eb.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ta.optSelected||(ya.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),ya.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ya.propFix[this.toLowerCase()]=this}),ya.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(ua(a))return this.each(function(b){ya(this).addClass(a.call(this,b,_(this)))});if(b=aa(a),b.length)for(;c=this[i++];)if(e=_(c),d=1===c.nodeType&&" "+$(e)+" "){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=$(d),e!==h&&c.setAttribute("class",h)}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(ua(a))return this.each(function(b){ya(this).removeClass(a.call(this,b,_(this)))});if(!arguments.length)return this.attr("class","");if(b=aa(a),b.length)for(;c=this[i++];)if(e=_(c),d=1===c.nodeType&&" "+$(e)+" "){for(g=0;f=b[g++];)for(;d.indexOf(" "+f+" ")>-1;)d=d.replace(" "+f+" "," ");h=$(d),e!==h&&c.setAttribute("class",h)}return this},toggleClass:function(a,b){var c=typeof a,d="string"===c||Array.isArray(a);return"boolean"==typeof b&&d?b?this.addClass(a):this.removeClass(a):ua(a)?this.each(function(c){ya(this).toggleClass(a.call(this,c,_(this),b),b)}):this.each(function(){var b,e,f,g;if(d)for(e=0,f=ya(this),g=aa(a);b=g[e++];)f.hasClass(b)?f.removeClass(b):f.addClass(b);else void 0!==a&&"boolean"!==c||(b=_(this),b&&Qa.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||!1===a?"":Qa.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" "+a+" ";c=this[d++];)if(1===c.nodeType&&(" "+$(_(c))+" ").indexOf(b)>-1)return!0;return!1}});var Fb=/\r/g;ya.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=ua(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,ya(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=ya.map(e,function(a){return null==a?"":a+""})),(b=ya.valHooks[this.type]||ya.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return(b=ya.valHooks[e.type]||ya.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(Fb,""):null==c?"":c)}}}),ya.extend({valHooks:{option:{get:function(a){var b=ya.find.attr(a,"value");return null!=b?b:$(ya.text(a))}},select:{get:function(a){var b,c,d,e=a.options,g=a.selectedIndex,h="select-one"===a.type,i=h?null:[],j=h?g+1:e.length;for(d=g<0?j:h?g:0;d<j;d++)if(c=e[d],(c.selected||d===g)&&!c.disabled&&(!c.parentNode.disabled||!f(c.parentNode,"optgroup"))){if(b=ya(c).val(),h)return b;i.push(b)}return i},set:function(a,b){for(var c,d,e=a.options,f=ya.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=ya.inArray(ya.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),ya.each(["radio","checkbox"],function(){ya.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=ya.inArray(ya(a).val(),b)>-1}},ta.checkOn||(ya.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),ta.focusin="onfocusin"in a;var Gb=/^(?:focusinfocus|focusoutblur)$/,Hb=function(a){a.stopPropagation()};ya.extend(ya.event,{trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m,n=[d||ia],o=qa.call(b,"type")?b.type:b,p=qa.call(b,"namespace")?b.namespace.split("."):[];if(g=m=h=d=d||ia,3!==d.nodeType&&8!==d.nodeType&&!Gb.test(o+ya.event.triggered)&&(o.indexOf(".")>-1&&(p=o.split("."),o=p.shift(),p.sort()),j=o.indexOf(":")<0&&"on"+o,b=b[ya.expando]?b:new ya.Event(o,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=p.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:ya.makeArray(c,[b]),l=ya.event.special[o]||{},e||!l.trigger||!1!==l.trigger.apply(d,c))){if(!e&&!l.noBubble&&!va(d)){for(i=l.delegateType||o,Gb.test(i+o)||(g=g.parentNode);g;g=g.parentNode)n.push(g),h=g;h===(d.ownerDocument||ia)&&n.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=n[f++])&&!b.isPropagationStopped();)m=g,b.type=f>1?i:l.bindType||o,k=(Qa.get(g,"events")||{})[b.type]&&Qa.get(g,"handle"),k&&k.apply(g,c),(k=j&&g[j])&&k.apply&&Pa(g)&&(b.result=k.apply(g,c),!1===b.result&&b.preventDefault());return b.type=o,e||b.isDefaultPrevented()||l._default&&!1!==l._default.apply(n.pop(),c)||!Pa(d)||j&&ua(d[o])&&!va(d)&&(h=d[j],h&&(d[j]=null),ya.event.triggered=o,b.isPropagationStopped()&&m.addEventListener(o,Hb),d[o](),b.isPropagationStopped()&&m.removeEventListener(o,Hb),ya.event.triggered=void 0,h&&(d[j]=h)),b.result}},simulate:function(a,b,c){var d=ya.extend(new ya.Event,c,{type:a,isSimulated:!0});ya.event.trigger(d,null,b)}}),ya.fn.extend({trigger:function(a,b){return this.each(function(){ya.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return ya.event.trigger(a,b,c,!0)}}),ta.focusin||ya.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){ya.event.simulate(b,a.target,ya.event.fix(a))};ya.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=Qa.access(d,b);e||d.addEventListener(a,c,!0),Qa.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=Qa.access(d,b)-1;e?Qa.access(d,b,e):(d.removeEventListener(a,c,!0),Qa.remove(d,b))}}});var Ib=a.location,Jb=Date.now(),Kb=/\?/;ya.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(a){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||ya.error("Invalid XML: "+b),c};var Lb=/\[\]$/,Mb=/\r?\n/g,Nb=/^(?:submit|button|image|reset|file)$/i,Ob=/^(?:input|select|textarea|keygen)/i;ya.param=function(a,b){var c,d=[],e=function(a,b){var c=ua(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(null==a)return"";if(Array.isArray(a)||a.jquery&&!ya.isPlainObject(a))ya.each(a,function(){e(this.name,this.value)});else for(c in a)ba(c,a[c],b,e);return d.join("&")},ya.fn.extend({serialize:function(){return ya.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=ya.prop(this,"elements");return a?ya.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!ya(this).is(":disabled")&&Ob.test(this.nodeName)&&!Nb.test(a)&&(this.checked||!bb.test(a))}).map(function(a,b){var c=ya(this).val();return null==c?null:Array.isArray(c)?ya.map(c,function(a){return{name:b.name,value:a.replace(Mb,"\r\n")}}):{name:b.name,value:c.replace(Mb,"\r\n")}}).get()}});var Pb=/%20/g,Qb=/#.*$/,Rb=/([?&])_=[^&]*/,Sb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Tb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ub=/^(?:GET|HEAD)$/,Vb=/^\/\//,Wb={},Xb={},Yb="*/".concat("*"),Zb=ia.createElement("a");Zb.href=Ib.href,ya.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ib.href,type:"GET",isLocal:Tb.test(Ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Yb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ya.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?ea(ea(a,ya.ajaxSettings),b):ea(ya.ajaxSettings,a)},ajaxPrefilter:ca(Wb),ajaxTransport:ca(Xb),ajax:function(b,c){function d(b,c,d,h){var j,m,n,u,v,w=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(u=fa(o,x,d)),u=ga(o,u,x,j),j?(o.ifModified&&(v=x.getResponseHeader("Last-Modified"),v&&(ya.lastModified[f]=v),(v=x.getResponseHeader("etag"))&&(ya.etag[f]=v)),204===b||"HEAD"===o.type?w="nocontent":304===b?w="notmodified":(w=u.state,m=u.data,n=u.error,j=!n)):(n=w,!b&&w||(w="error",b<0&&(b=0))),x.status=b,x.statusText=(c||w)+"",j?r.resolveWith(p,[m,w,x]):r.rejectWith(p,[x,w,n]),x.statusCode(t),t=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[x,o,j?m:n]),s.fireWith(p,[x,w]),l&&(q.trigger("ajaxComplete",[x,o]),--ya.active||ya.event.trigger("ajaxStop")))}"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=ya.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?ya(p):ya.event,r=ya.Deferred(),s=ya.Callbacks("once memory"),t=o.statusCode||{},u={},v={},w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h)for(h={};b=Sb.exec(g);)h[b[1].toLowerCase()+" "]=(h[b[1].toLowerCase()+" "]||[]).concat(b[2]);b=h[a.toLowerCase()+" "]}return null==b?null:b.join(", ")},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=v[a.toLowerCase()]=v[a.toLowerCase()]||a,u[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)x.always(a[x.status]);else for(b in a)t[b]=[t[b],a[b]];return this},abort:function(a){var b=a||w;return e&&e.abort(b),d(0,b),this}};if(r.promise(x),o.url=((b||o.url||Ib.href)+"").replace(Vb,Ib.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(Ja)||[""],null==o.crossDomain){j=ia.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Zb.protocol+"//"+Zb.host!=j.protocol+"//"+j.host}catch(a){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=ya.param(o.data,o.traditional)),da(Wb,o,c,x),k)return x;l=ya.event&&o.global,l&&0==ya.active++&&ya.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Ub.test(o.type),f=o.url.replace(Qb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Pb,"+")):(n=o.url.slice(f.length),o.data&&(o.processData||"string"==typeof o.data)&&(f+=(Kb.test(f)?"&":"?")+o.data,delete o.data),!1===o.cache&&(f=f.replace(Rb,"$1"),n=(Kb.test(f)?"&":"?")+"_="+Jb+++n),o.url=f+n),o.ifModified&&(ya.lastModified[f]&&x.setRequestHeader("If-Modified-Since",ya.lastModified[f]),ya.etag[f]&&x.setRequestHeader("If-None-Match",ya.etag[f])),(o.data&&o.hasContent&&!1!==o.contentType||c.contentType)&&x.setRequestHeader("Content-Type",o.contentType),x.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Yb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)x.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(!1===o.beforeSend.call(p,x,o)||k))return x.abort();if(w="abort",s.add(o.complete),x.done(o.success),x.fail(o.error),e=da(Xb,o,c,x)){if(x.readyState=1,l&&q.trigger("ajaxSend",[x,o]),k)return x;o.async&&o.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},o.timeout));try{k=!1,e.send(u,d)}catch(a){if(k)throw a;d(-1,a)}}else d(-1,"No Transport");return x},getJSON:function(a,b,c){return ya.get(a,b,c,"json")},getScript:function(a,b){return ya.get(a,void 0,b,"script")}}),ya.each(["get","post"],function(a,b){ya[b]=function(a,c,d,e){return ua(c)&&(e=e||d,d=c,c=void 0),ya.ajax(ya.extend({url:a,type:b,dataType:e,data:c,success:d},ya.isPlainObject(a)&&a))}}),ya._evalUrl=function(a,b){return ya.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(a){ya.globalEval(a,b)}})},ya.fn.extend({wrapAll:function(a){var b;return this[0]&&(ua(a)&&(a=a.call(this[0])),b=ya(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return ua(a)?this.each(function(b){ya(this).wrapInner(a.call(this,b))}):this.each(function(){var b=ya(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=ua(a);return this.each(function(c){ya(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){ya(this).replaceWith(this.childNodes)}),this}}),ya.expr.pseudos.hidden=function(a){return!ya.expr.pseudos.visible(a)},ya.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},ya.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(a){}};var $b={0:200,1223:204},_b=ya.ajaxSettings.xhr();ta.cors=!!_b&&"withCredentials"in _b,ta.ajax=_b=!!_b,ya.ajaxTransport(function(b){var c,d;if(ta.cors||_b&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.ontimeout=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f($b[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=h.ontimeout=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(a){if(c)throw a}},abort:function(){c&&c()}}}),ya.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),ya.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return ya.globalEval(a),a}}}),ya.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),ya.ajaxTransport("script",function(a){if(a.crossDomain||a.scriptAttrs){var b,c;return{send:function(d,e){b=ya("<script>").attr(a.scriptAttrs||{}).prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),ia.head.appendChild(b[0])},abort:function(){c&&c()}}}});var ac=[],bc=/(=)\?(?=&|$)|\?\?/;ya.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ac.pop()||ya.expando+"_"+Jb++;return this[a]=!0,a}}),ya.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(bc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bc.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=ua(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bc,"$1"+e):!1!==b.jsonp&&(b.url+=(Kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||ya.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?ya(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ac.push(e)),g&&ua(f)&&f(g[0]),g=f=void 0}),"script"}),ta.createHTMLDocument=function(){var a=ia.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),ya.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var d,e,f;return b||(ta.createHTMLDocument?(b=ia.implementation.createHTMLDocument(""),d=b.createElement("base"),d.href=ia.location.href,b.head.appendChild(d)):b=ia),e=Ea.exec(a),f=!c&&[],e?[b.createElement(e[1])]:(e=x([a],b,f),f&&f.length&&ya(f).remove(),ya.merge([],e.childNodes))},ya.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=$(a.slice(h)),a=a.slice(0,h)),ua(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&ya.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?ya("<div>").append(ya.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},ya.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){ya.fn[b]=function(a){return this.on(b,a)}}),ya.expr.pseudos.animated=function(a){return ya.grep(ya.timers,function(b){return a===b.elem}).length},ya.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=ya.css(a,"position"),l=ya(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=ya.css(a,"top"),i=ya.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),ua(b)&&(b=b.call(a,c,ya.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},ya.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){ya.offset.setOffset(this,a,b)});var b,c,d=this[0];if(d)return d.getClientRects().length?(b=d.getBoundingClientRect(),c=d.ownerDocument.defaultView,{top:b.top+c.pageYOffset,left:b.left+c.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c,d=this[0],e={top:0,left:0};if("fixed"===ya.css(d,"position"))b=d.getBoundingClientRect();else{for(b=this.offset(),c=d.ownerDocument,a=d.offsetParent||c.documentElement;a&&(a===c.body||a===c.documentElement)&&"static"===ya.css(a,"position");)a=a.parentNode;a&&a!==d&&1===a.nodeType&&(e=ya(a).offset(),e.top+=ya.css(a,"borderTopWidth",!0),e.left+=ya.css(a,"borderLeftWidth",!0))}return{top:b.top-e.top-ya.css(d,"marginTop",!0),left:b.left-e.left-ya.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&"static"===ya.css(a,"position");)a=a.offsetParent;return a||Xa})}}),ya.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;ya.fn[a]=function(d){return Ma(this,function(a,d,e){var f;if(va(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e)return f?f[b]:a[d];f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e},a,d,arguments.length)}}),ya.each(["top","left"],function(a,b){ya.cssHooks[b]=M(ta.pixelPosition,function(a,c){if(c)return c=L(a,b),nb.test(c)?ya(a).position()[b]+"px":c})}),ya.each({Height:"height",Width:"width"},function(a,b){ya.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){ya.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(!0===e||!0===f?"margin":"border");return Ma(this,function(b,c,e){var f;return va(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?ya.css(b,c,h):ya.style(b,c,e,h)},b,g?e:void 0,g)}})}),ya.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){ya.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),ya.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),ya.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),ya.proxy=function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),ua(a))return d=ka.call(arguments,2),e=function(){return a.apply(b||this,d.concat(ka.call(arguments)))},e.guid=a.guid=a.guid||ya.guid++,e},ya.holdReady=function(a){a?ya.readyWait++:ya.ready(!0)},ya.isArray=Array.isArray,ya.parseJSON=JSON.parse,ya.nodeName=f,ya.isFunction=ua,ya.isWindow=va,ya.camelCase=o,ya.type=d,ya.now=Date.now,ya.isNumeric=function(a){var b=ya.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ya});var cc=a.jQuery,dc=a.$;return ya.noConflict=function(b){return a.$===ya&&(a.$=dc),b&&a.jQuery===ya&&(a.jQuery=cc),ya},b||(a.jQuery=a.$=ya),ya}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.lightbox=b(a.jQuery)}(this,function(a){function b(b){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=a.extend({},this.constructor.defaults),this.option(b)}return b.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},b.prototype.option=function(b){a.extend(this.options,b)},b.prototype.imageCountLabel=function(a,b){return this.options.albumLabel.replace(/%1/g,a).replace(/%2/g,b)},b.prototype.init=function(){var b=this;a(document).ready(function(){b.enable(),b.build()})},b.prototype.enable=function(){var b=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){return b.start(a(c.currentTarget)),!1})},b.prototype.build=function(){if(!(a("#lightbox").length>0)){var b=this;a('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")),this.$lightbox=a("#lightbox"),this.$overlay=a("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",function(){return b.end(),!1}),this.$lightbox.hide().on("click",function(c){"lightbox"===a(c.target).attr("id")&&b.end()}),this.$outerContainer.on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===b.currentImageIndex?b.changeImage(b.album.length-1):b.changeImage(b.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return b.currentImageIndex===b.album.length-1?b.changeImage(0):b.changeImage(b.currentImageIndex+1),!1}),this.$nav.on("mousedown",function(a){3===a.which&&(b.$nav.css("pointer-events","none"),b.$lightbox.one("contextmenu",function(){setTimeout(function(){this.$nav.css("pointer-events","auto")}.bind(b),0)}))}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return b.end(),!1})}},b.prototype.start=function(b){function c(a){d.album.push({alt:a.attr("data-alt"),link:a.attr("href"),title:a.attr("data-title")||a.attr("title")})}var d=this,e=a(window);e.on("resize",a.proxy(this.sizeOverlay,this)),this.sizeOverlay(),this.album=[];var f,g=0,h=b.attr("data-lightbox");if(h){f=a(b.prop("tagName")+'[data-lightbox="'+h+'"]');for(var i=0;i<f.length;i=++i)c(a(f[i])),f[i]===b[0]&&(g=i)}else if("lightbox"===b.attr("rel"))c(b);else{f=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(var j=0;j<f.length;j=++j)c(a(f[j])),f[j]===b[0]&&(g=j)}var k=e.scrollTop()+this.options.positionFromTop,l=e.scrollLeft();this.$lightbox.css({top:k+"px",left:l+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&a("body").addClass("lb-disable-scrolling"),this.changeImage(g)},b.prototype.changeImage=function(b){var c=this,d=this.album[b].link,e=d.split(".").slice(-1)[0],f=this.$lightbox.find(".lb-image");this.disableKeyboardNav(),this.$overlay.fadeIn(this.options.fadeDuration),a(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var g=new Image;g.onload=function(){var h,i,j,k,l,m;f.attr({alt:c.album[b].alt,src:d}),a(g),f.width(g.width),f.height(g.height),m=a(window).width(),l=a(window).height(),k=m-c.containerPadding.left-c.containerPadding.right-c.imageBorderWidth.left-c.imageBorderWidth.right-20,j=l-c.containerPadding.top-c.containerPadding.bottom-c.imageBorderWidth.top-c.imageBorderWidth.bottom-c.options.positionFromTop-70,"svg"===e&&(0!==g.width&&0!==g.height||(f.width(k),f.height(j))),c.options.fitImagesInViewport?(c.options.maxWidth&&c.options.maxWidth<k&&(k=c.options.maxWidth),c.options.maxHeight&&c.options.maxHeight<j&&(j=c.options.maxHeight)):(k=c.options.maxWidth||g.width||k,j=c.options.maxHeight||g.height||j),(g.width>k||g.height>j)&&(g.width/k>g.height/j?(i=k,h=parseInt(g.height/(g.width/i),10),f.width(i),f.height(h)):(h=j,i=parseInt(g.width/(g.height/h),10),f.width(i),f.height(h))),c.sizeContainer(f.width(),f.height())},g.src=this.album[b].link,this.currentImageIndex=b},b.prototype.sizeOverlay=function(){var b=this;setTimeout(function(){b.$overlay.width(a(document).width()).height(a(document).height())},0)},b.prototype.sizeContainer=function(a,b){function c(){d.$lightbox.find(".lb-dataContainer").width(g),d.$lightbox.find(".lb-prevLink").height(h),d.$lightbox.find(".lb-nextLink").height(h),d.$overlay.focus(),d.showImage()}var d=this,e=this.$outerContainer.outerWidth(),f=this.$outerContainer.outerHeight(),g=a+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right,h=b+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;e!==g||f!==h?this.$outerContainer.animate({width:g,height:h},this.options.resizeDuration,"swing",function(){c()}):c()},b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},b.prototype.updateNav=function(){var a=!1;try{document.createEvent("TouchEvent"),a=!!this.options.alwaysShowNavOnTouchDevices}catch(a){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(a&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),a&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),a&&this.$lightbox.find(".lb-next").css("opacity","1"))))},b.prototype.updateDetails=function(){var a=this;if(void 0!==this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title){var b=this.$lightbox.find(".lb-caption");this.options.sanitizeTitle?b.text(this.album[this.currentImageIndex].title):b.html(this.album[this.currentImageIndex].title),b.fadeIn("fast")}if(this.album.length>1&&this.options.showImageNumberLabel){var c=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(c).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return a.sizeOverlay()})},b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){(new Image).src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){(new Image).src=this.album[this.currentImageIndex-1].link}},b.prototype.enableKeyboardNav=function(){this.$lightbox.on("keyup.keyboard",a.proxy(this.keyboardAction,this)),this.$overlay.on("keyup.keyboard",a.proxy(this.keyboardAction,this))},b.prototype.disableKeyboardNav=function(){this.$lightbox.off(".keyboard"),this.$overlay.off(".keyboard")},b.prototype.keyboardAction=function(a){var b=a.keyCode;27===b?(a.stopPropagation(),this.end()):37===b?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):39===b&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},b.prototype.end=function(){this.disableKeyboardNav(),a(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),this.options.disableScrolling&&a("body").removeClass("lb-disable-scrolling")},new b});!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


$(function() {
	var $n = $('#news').masonry({});
	$n.imagesLoaded().progress(function() {
		$n.masonry('layout');
	});
});

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});$(function() {
	var $n = $('#news').masonry({});
	$n.imagesLoaded().progress(function() {
		$n.masonry('layout');
	});
});

  $(document).ready(function() {
	$('img.img-thumbnail').each(function() {
			var i = $(this);
			i.wrap('<a href="' + i.attr('src') + '" data-lightbox="gallery"></a>');
	});
});
