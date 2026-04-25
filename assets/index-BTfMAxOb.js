(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=typeof window<`u`&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,t=(e,t,n=null)=>{for(;t!==n;){let n=t.nextSibling;e.removeChild(t),t=n}},n=`{{lit-${String(Math.random()).slice(2)}}}`,r=`<!--${n}-->`,i=RegExp(`${n}|${r}`),a=`$lit$`,o=class{constructor(e,t){this.parts=[],this.element=t;let r=[],o=[],c=document.createTreeWalker(t.content,133,null,!1),d=0,f=-1,p=0,{strings:m,values:{length:h}}=e;for(;p<h;){let e=c.nextNode();if(e===null){c.currentNode=o.pop();continue}if(f++,e.nodeType===1){if(e.hasAttributes()){let t=e.attributes,{length:n}=t,r=0;for(let e=0;e<n;e++)s(t[e].name,`$lit$`)&&r++;for(;r-- >0;){let t=m[p],n=u.exec(t)[2],r=n.toLowerCase()+a,o=e.getAttribute(r);e.removeAttribute(r);let s=o.split(i);this.parts.push({type:`attribute`,index:f,name:n,strings:s}),p+=s.length-1}}e.tagName===`TEMPLATE`&&(o.push(e),c.currentNode=e.content)}else if(e.nodeType===3){let t=e.data;if(t.indexOf(n)>=0){let n=e.parentNode,a=t.split(i),o=a.length-1;for(let t=0;t<o;t++){let r,i=a[t];if(i===``)r=l();else{let e=u.exec(i);e!==null&&s(e[2],`$lit$`)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-5)+e[3]),r=document.createTextNode(i)}n.insertBefore(r,e),this.parts.push({type:`node`,index:++f})}a[o]===``?(n.insertBefore(l(),e),r.push(e)):e.data=a[o],p+=o}}else if(e.nodeType===8)if(e.data===n){let t=e.parentNode;(e.previousSibling===null||f===d)&&(f++,t.insertBefore(l(),e)),d=f,this.parts.push({type:`node`,index:f}),e.nextSibling===null?e.data=``:(r.push(e),f--),p++}else{let t=-1;for(;(t=e.data.indexOf(n,t+1))!==-1;)this.parts.push({type:`node`,index:-1}),p++}}for(let e of r)e.parentNode.removeChild(e)}},s=(e,t)=>{let n=e.length-t.length;return n>=0&&e.slice(n)===t},c=e=>e.index!==-1,l=()=>document.createComment(``),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,d=133;function f(e,t){let{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,d,null,!1),a=m(r),o=r[a],s=-1,c=0,l=[],u=null;for(;i.nextNode();){s++;let e=i.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),u===null&&(u=e)),u!==null&&c++;o!==void 0&&o.index===s;)o.index=u===null?o.index-c:-1,a=m(r,a),o=r[a]}l.forEach(e=>e.parentNode.removeChild(e))}var p=e=>{let t=e.nodeType===11?0:1,n=document.createTreeWalker(e,d,null,!1);for(;n.nextNode();)t++;return t},m=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){let t=e[n];if(c(t))return n}return-1};function h(e,t,n=null){let{element:{content:r},parts:i}=e;if(n==null){r.appendChild(t);return}let a=document.createTreeWalker(r,d,null,!1),o=m(i),s=0,c=-1;for(;a.nextNode();)for(c++,a.currentNode===n&&(s=p(t),n.parentNode.insertBefore(t,n));o!==-1&&i[o].index===c;){if(s>0){for(;o!==-1;)i[o].index+=s,o=m(i,o);return}o=m(i,o)}}var g=new WeakMap,_=e=>typeof e==`function`&&g.has(e),v={},y={},b=class{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(let n of this.__parts)n!==void 0&&n.setValue(e[t]),t++;for(let e of this.__parts)e!==void 0&&e.commit()}_clone(){let t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1),a=0,o=0,s,l=i.nextNode();for(;a<r.length;){if(s=r[a],!c(s)){this.__parts.push(void 0),a++;continue}for(;o<s.index;)o++,l.nodeName===`TEMPLATE`&&(n.push(l),i.currentNode=l.content),(l=i.nextNode())===null&&(i.currentNode=n.pop(),l=i.nextNode());if(s.type===`node`){let e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));a++}return e&&(document.adoptNode(t),customElements.upgrade(t)),t}},x=window.trustedTypes&&trustedTypes.createPolicy(`lit-html`,{createHTML:e=>e}),ee=` ${n} `,S=class{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){let e=this.strings.length-1,t=``,i=!1;for(let o=0;o<e;o++){let e=this.strings[o],s=e.lastIndexOf(`<!--`);i=(s>-1||i)&&e.indexOf(`-->`,s+1)===-1;let c=u.exec(e);c===null?t+=e+(i?ee:r):t+=e.substr(0,c.index)+c[1]+c[2]+a+c[3]+n}return t+=this.strings[e],t}getTemplateElement(){let e=document.createElement(`template`),t=this.getHTML();return x!==void 0&&(t=x.createHTML(t)),e.innerHTML=t,e}},C=e=>e===null||!(typeof e==`object`||typeof e==`function`),w=e=>Array.isArray(e)||!!(e&&e[Symbol.iterator]),T=class{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new E(this)}_getValue(){let e=this.strings,t=e.length-1,n=this.parts;if(t===1&&e[0]===``&&e[1]===``){let e=n[0].value;if(typeof e==`symbol`)return String(e);if(typeof e==`string`||!w(e))return e}let r=``;for(let i=0;i<t;i++){r+=e[i];let t=n[i];if(t!==void 0){let e=t.value;if(C(e)||!w(e))r+=typeof e==`string`?e:String(e);else for(let t of e)r+=typeof t==`string`?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},E=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==v&&(!C(e)||e!==this.value)&&(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){let e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}},D=class e{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;_(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=v,e(this)}let e=this.__pendingValue;e!==v&&(C(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):w(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let t=this.startNode.nextSibling;e??=``;let n=typeof e==`string`?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){let t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{let n=new b(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());let n=this.value,r=0,i;for(let a of t)i=n[r],i===void 0&&(i=new e(this.options),n.push(i),r===0?i.appendIntoPart(this):i.insertAfterPart(n[r-1])),i.setValue(a),i.commit(),r++;r<n.length&&(n.length=r,this.clear(i&&i.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}},te=class{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==``||n[1]!==``)throw Error(`Boolean attributes can only contain a single expression`);this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,``):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}},ne=class extends T{constructor(e,t,n){super(e,t,n),this.single=n.length===2&&n[0]===``&&n[1]===``}_createPart(){return new re(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},re=class extends E{},O=!1;(()=>{try{let e={get capture(){return O=!0,!1}};window.addEventListener(`test`,e,e),window.removeEventListener(`test`,e,e)}catch{}})();var ie=class{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;let e=this.__pendingValue,t=this.value,n=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=e!=null&&(t==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=ae(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){typeof this.value==`function`?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}},ae=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function oe(e){let t=k.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},k.set(e.type,t));let r=t.stringsArray.get(e.strings);if(r!==void 0)return r;let i=e.strings.join(n);return r=t.keyString.get(i),r===void 0&&(r=new o(e,e.getTemplateElement()),t.keyString.set(i,r)),t.stringsArray.set(e.strings,r),r}var k=new Map,A=new WeakMap,j=(e,n,r)=>{let i=A.get(n);i===void 0&&(t(n,n.firstChild),A.set(n,i=new D(Object.assign({templateFactory:oe},r))),i.appendInto(n)),i.setValue(e),i.commit()},M=new class{handleAttributeExpressions(e,t,n,r){let i=t[0];return i===`.`?new ne(e,t.slice(1),n).parts:i===`@`?[new ie(e,t.slice(1),r.eventContext)]:i===`?`?[new te(e,t.slice(1),n)]:new T(e,t,n).parts}handleTextExpression(e){return new D(e)}};typeof window<`u`&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push(`1.4.1`);var N=(e,...t)=>new S(e,t,`html`,M),P=(e,t)=>`${e}--${t}`,F=!0;window.ShadyCSS===void 0?F=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn(`Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.`),F=!1);var se=e=>t=>{let r=P(t.type,e),i=k.get(r);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},k.set(r,i));let a=i.stringsArray.get(t.strings);if(a!==void 0)return a;let s=t.strings.join(n);if(a=i.keyString.get(s),a===void 0){let n=t.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(n,e),a=new o(t,n),i.keyString.set(s,a)}return i.stringsArray.set(t.strings,a),a},ce=[`html`,`svg`],le=e=>{ce.forEach(t=>{let n=k.get(P(t,e));n!==void 0&&n.keyString.forEach(e=>{let{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll(`style`)).forEach(e=>{n.add(e)}),f(e,n)})})},I=new Set,ue=(e,t,n)=>{I.add(e);let r=n?n.element:document.createElement(`template`),i=t.querySelectorAll(`style`),{length:a}=i;if(a===0){window.ShadyCSS.prepareTemplateStyles(r,e);return}let o=document.createElement(`style`);for(let e=0;e<a;e++){let t=i[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}le(e);let s=r.content;n?h(n,o,s.firstChild):s.insertBefore(o,s.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);let c=s.querySelector(`style`);if(window.ShadyCSS.nativeShadow&&c!==null)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){s.insertBefore(o,s.firstChild);let e=new Set;e.add(o),f(n,e)}},de=(e,n,r)=>{if(!r||typeof r!=`object`||!r.scopeName)throw Error("The `scopeName` option is required.");let i=r.scopeName,a=A.has(n),o=F&&n.nodeType===11&&!!n.host,s=o&&!I.has(i),c=s?document.createDocumentFragment():n;if(j(e,c,Object.assign({templateFactory:se(i)},r)),s){let e=A.get(c);A.delete(c),ue(i,c,e.value instanceof b?e.value.template:void 0),t(n,n.firstChild),n.appendChild(c),A.set(n,e)}!a&&o&&window.ShadyCSS.styleElement(n.host)},L;window.JSCompiler_renameProperty=(e,t)=>e;var R={toAttribute(e,t){switch(t){case Boolean:return e?``:null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},z=(e,t)=>t!==e&&(t===t||e===e),B={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:z},V=1,H=4,U=8,W=16,G=`finalized`,K=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let e=[];return this._classProperties.forEach((t,n)=>{let r=this._attributeNameForProperty(n,t);r!==void 0&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_classProperties`,this))){this._classProperties=new Map;let e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=B){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;let n=typeof e==`symbol`?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){let i=this[e];this[t]=r,this.requestUpdateInternal(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||B}static finalize(){let e=Object.getPrototypeOf(this);if(e.hasOwnProperty(G)||e.finalize(),this[G]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty(`properties`,this))){let e=this.properties,t=[...Object.getOwnPropertyNames(e),...typeof Object.getOwnPropertySymbols==`function`?Object.getOwnPropertySymbols(e):[]];for(let n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){let n=t.attribute;return n===!1?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=z){return n(e,t)}static _propertyValueFromAttribute(e,t){let n=t.type,r=t.converter||R,i=typeof r==`function`?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;let n=t.type,r=t.converter;return(r&&r.toAttribute||R.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){let e=this[t];delete this[t],this._instanceProperties||=new Map,this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=B){let r=this.constructor,i=r._attributeNameForProperty(e,n);if(i!==void 0){let e=r._propertyValueToAttribute(t,n);if(e===void 0)return;this._updateState|=U,e==null?this.removeAttribute(i):this.setAttribute(i,e),this._updateState&=~U}}_attributeToProperty(e,t){if(this._updateState&U)return;let n=this.constructor,r=n._attributeToPropertyMap.get(e);if(r!==void 0){let e=n.getPropertyOptions(r);this._updateState|=W,this[r]=n._propertyValueFromAttribute(t,e),this._updateState&=~W}}requestUpdateInternal(e,t,n){let r=!0;if(e!==void 0){let i=this.constructor;n||=i.getPropertyOptions(e),i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),n.reflect===!0&&!(this._updateState&W)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState|=H;try{await this._updatePromise}catch{}let e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&H}get hasUpdated(){return this._updateState&V}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1,t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(this._updateState&V||(this._updateState|=V,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState&=~H}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}};L=G,K[L]=!0;var q=Element.prototype;q.msMatchesSelector||q.webkitMatchesSelector;var J=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Y=Symbol(),X=class{constructor(e,t){if(t!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(J?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}},fe=e=>new X(String(e),Y),pe=e=>{if(e instanceof X)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},Z=(e,...t)=>new X(t.reduce((t,n,r)=>t+pe(n)+e[r+1],e[0]),Y);(window.litElementVersions||(window.litElementVersions=[])).push(`2.5.1`);var Q={},$=class extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty(`_styles`,this)))return;let e=this.getStyles();if(Array.isArray(e)){let t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(e=>e instanceof CSSStyleSheet&&!J?fe(Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,``)):e)}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){let e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName):J?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){let t=this.render();super.update(e),t!==Q&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{let t=document.createElement(`style`);t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return Q}};$.finalized=!0,$.render=de,$.shadowRootOptions={mode:`open`};var me=`/assets/foto-BCAXGiz8.jpeg`,he={es:{nav:{inicio:`Inicio`,about:`Sobre Mi`,experience:`Experiencia`,skills:`Habilidades`,education:`Educacion`,contact:`Contacto`},hero:{badge:`Disponible para nuevos proyectos`,subtitle:`Ingeniera en Computacion • Full Stack Developer`,description:`Desarrolladora full stack con experiencia en React, Next.js, Angular, Django, Node.js, Python y mas. Apasionada por crear soluciones tecnologicas de impacto.`,cta:`Contactame`,statYears:`Anos exp.`,statTech:`Tecnologias`,statProjects:`Proyectos`},about:{label:`Conoceme`,title:`Sobre Mi`,p1:`Ingeniera en Ciencias de la Computacion con itinerario en Desarrollo de Software por la Universidad Nacional de Loja. Cuento con experiencia en proyectos academicos, de vinculacion y profesionales.`,p2:`Me caracterizo por mi responsabilidad, pensamiento logico, adaptabilidad y capacidad para trabajar en equipo. Siempre estoy en busqueda de nuevos desafios que me permitan crecer profesionalmente.`,location:`Ubicacion`,phone:`Telefono`,languages:`Idiomas`,langValue:`Espanol (Nativo), Ingles (Basico)`,cardFullstack:`Desarrollo frontend y backend con tecnologias modernas`,cardMobile:`Apps moviles con Flutter y React Native`,cardQA:`Pruebas funcionales, de regresion y gestion de calidad`,cardManagement:`Gestion`,cardManagementDesc:`Scrum, planificacion agil y coordinacion de proyectos`},experience:{label:`Trayectoria`,title:`Experiencia Profesional`,job1Role:`Programadora Junior de Software`,job1Date:`Ene 2026 – Abr 2026`,job1Company:`Dataglov S.A.S. • Presencial, jornada completa`,job1Desc:[`Desarrollo y mantenimiento de Sudial, plataforma de gestion de chatbots de WhatsApp, en backend y frontend.`,`Implementacion de modulos completos, correccion de errores y optimizacion de funcionalidades.`,`Desarrollo de aplicacion movil con React Native para agentes de atencion al cliente.`],job2Role:`Gestora de Proyectos | QA | Frontend Dev`,job2Date:`Sep 2025 – Ene 2026`,job2Desc:[`Desarrollo frontend en Angular para ANA, sistema de gestion de inventarios, facturacion y firmas electronicas.`,`Gestion y coordinacion de proyectos con Jira, planificacion agil y control de incidencias.`,`Aseguramiento de calidad mediante pruebas funcionales y de regresion.`],job3Role:`Desarrolladora Junior – Node.js`,job3Date:`Feb 2024 – Ago 2025`,job3Company:`ARAnet • Pangui, Ecuador (Remoto)`,job3Desc:[`Desarrollo y mantenimiento de sistema de gestion interna: registro de clientes, planes de internet, facturacion.`,`Colaboracion en equipo remoto para implementacion de funcionalidades y mejoras.`],job4Role:`Desarrolladora Full Stack – Titulacion`,job4Date:`Mar 2024 – Ago 2025`,job4Company:`Universidad Nacional de Loja • Proyecto de Vinculacion`,job4Desc:[`Desarrollo de aplicacion web para gestion sostenible del ruido vehicular en la ciudad de Loja.`,`Backend en Jakarta EE y frontend en Flutter.`],job5Role:`Practicas Preprofesionales`,job5Date:`Nov 2023 – Ene 2024`,job5Company:`Direccion de TI • Universidad Nacional de Loja`,job5Desc:[`Desarrollo del Visor Climatico de la Universidad Nacional de Loja con Django (backend y frontend).`]},skills:{label:`Competencias`,title:`Habilidades Tecnicas`,languages:`Lenguajes`,frontend:`Frontend`,backend:`Backend`,databases:`Bases de Datos`,tools:`Herramientas`,qa:`QA / Testing`,qaItems:[`Pruebas funcionales`,`Pruebas de regresion`,`Gestion de pruebas`],creativity:`Creatividad`,leadership:`Liderazgo`,problemSolving:`Resolucion de problemas`,teamwork:`Trabajo en equipo`,communication:`Comunicacion efectiva`,fastLearning:`Aprendizaje rapido`},education:{label:`Formacion`,title:`Educacion`,degree:`Ingenieria en Ciencias de la Computacion`,school:`Universidad Nacional de Loja`,track:`Itinerario: Desarrollo de Software`,date:`Abr 2021 – Oct 2025`,certsLabel:`Formacion complementaria`,certsTitle:`Certificaciones`},contact:{label:`Hablemos`,title:`Contacto`,phone:`Telefono`},footer:`Todos los derechos reservados.`},en:{nav:{inicio:`Home`,about:`About`,experience:`Experience`,skills:`Skills`,education:`Education`,contact:`Contact`},hero:{badge:`Available for new projects`,subtitle:`Computer Science Engineer • Full Stack Developer`,description:`Full stack developer experienced in React, Next.js, Angular, Django, Node.js, Python and more. Passionate about building impactful tech solutions.`,cta:`Contact me`,statYears:`Years exp.`,statTech:`Technologies`,statProjects:`Projects`},about:{label:`Get to know me`,title:`About Me`,p1:`Computer Science Engineer with a Software Development track from Universidad Nacional de Loja. Experienced in academic, outreach and professional projects.`,p2:`I stand out for my responsibility, logical thinking, adaptability and teamwork skills. I am always looking for new challenges that allow me to grow professionally.`,location:`Location`,phone:`Phone`,languages:`Languages`,langValue:`Spanish (Native), English (Basic)`,cardFullstack:`Frontend and backend development with modern technologies`,cardMobile:`Mobile apps with Flutter and React Native`,cardQA:`Functional testing, regression testing and quality management`,cardManagement:`Management`,cardManagementDesc:`Scrum, agile planning and project coordination`},experience:{label:`Career path`,title:`Professional Experience`,job1Role:`Junior Software Developer`,job1Date:`Jan 2026 – Apr 2026`,job1Company:`Dataglov S.A.S. • On-site, full-time`,job1Desc:[`Development and maintenance of Sudial, a WhatsApp chatbot management platform, working on backend and frontend.`,`Implementation of complete modules, bug fixes and feature optimization.`,`Mobile app development with React Native for customer service agents.`],job2Role:`Project Manager | QA | Frontend Dev`,job2Date:`Sep 2025 – Jan 2026`,job2Desc:[`Frontend development in Angular for ANA, an inventory management, billing and electronic signature system.`,`Project management and coordination with Jira, agile planning and issue tracking.`,`Quality assurance through functional and regression testing.`],job3Role:`Junior Developer – Node.js`,job3Date:`Feb 2024 – Aug 2025`,job3Company:`ARAnet • Pangui, Ecuador (Remote)`,job3Desc:[`Development and maintenance of an internal management system: client registration, internet plans, billing.`,`Remote team collaboration for feature implementation and system improvements.`],job4Role:`Full Stack Developer – Thesis Project`,job4Date:`Mar 2024 – Aug 2025`,job4Company:`Universidad Nacional de Loja • Outreach Project`,job4Desc:[`Web application development for sustainable vehicle noise management in Loja city.`,`Backend in Jakarta EE and frontend in Flutter.`],job5Role:`Pre-professional Internship`,job5Date:`Nov 2023 – Jan 2024`,job5Company:`IT Department • Universidad Nacional de Loja`,job5Desc:[`Development of the Climate Viewer for Universidad Nacional de Loja using Django (backend and frontend).`]},skills:{label:`Competencies`,title:`Technical Skills`,languages:`Languages`,frontend:`Frontend`,backend:`Backend`,databases:`Databases`,tools:`Tools`,qa:`QA / Testing`,qaItems:[`Functional testing`,`Regression testing`,`Test management`],creativity:`Creativity`,leadership:`Leadership`,problemSolving:`Problem solving`,teamwork:`Teamwork`,communication:`Effective communication`,fastLearning:`Fast learner`},education:{label:`Background`,title:`Education`,degree:`Computer Science Engineering`,school:`Universidad Nacional de Loja`,track:`Track: Software Development`,date:`Apr 2021 – Oct 2025`,certsLabel:`Continuing education`,certsTitle:`Certifications`},contact:{label:`Let's talk`,title:`Contact`,phone:`Phone`},footer:`All rights reserved.`}},ge=class extends ${static get properties(){return{activeSection:{type:String},menuOpen:{type:Boolean},headerScrolled:{type:Boolean},lang:{type:String},typedText:{type:String},typedRole:{type:Number},cursorBlink:{type:Boolean},consoleLines:{type:Array},uptimeSec:{type:Number},cpuLoad:{type:Number}}}constructor(){super(),this.activeSection=`inicio`,this.menuOpen=!1,this.headerScrolled=!1,this.lang=`es`,this.typedText=``,this.typedRole=0,this.cursorBlink=!0,this.consoleLines=[],this.uptimeSec=0,this.cpuLoad=42,this._roles=[`Full Stack Developer`,`React + Next.js`,`Python + Django`,`Node.js + TypeScript`,`Mobile Developer`,`QA Engineer`],this._gitLog=[{hash:`a3f2c91`,msg:`feat(portfolio): ship dark theme + animations`,branch:`main`},{hash:`8e1b774`,msg:`feat(sudial): WhatsApp bot management module`,branch:`develop`},{hash:`5d9a02c`,msg:`feat(ana): inventory + e-signature flow`,branch:`feature/ana`},{hash:`21fc4e8`,msg:`fix(api): retry policy on rate-limit 429s`,branch:`hotfix`},{hash:`c70f156`,msg:`refactor: migrate legacy Node 16 -> 20`,branch:`main`},{hash:`f02ab9d`,msg:`test: regression suite for billing module`,branch:`qa`}]}get t(){return he[this.lang]}_toggleLang(){this.lang=this.lang===`es`?`en`:`es`}connectedCallback(){super.connectedCallback(),this._boundScroll=this._handleScroll.bind(this),window.addEventListener(`scroll`,this._boundScroll),this._startTyping(),this._startConsole(),this._startStatusBar()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`scroll`,this._boundScroll),this._typeTimer&&clearTimeout(this._typeTimer),this._consoleTimer&&clearTimeout(this._consoleTimer),this._cursorTimer&&clearInterval(this._cursorTimer),this._statusTimer&&clearInterval(this._statusTimer),this._revealObs&&this._revealObs.disconnect()}firstUpdated(){this._setupReveal()}updated(e){e.has(`lang`)&&this._setupReveal()}_setupReveal(){this._revealObs&&this._revealObs.disconnect();let e=this.shadowRoot.querySelectorAll(`.reveal`);this._revealObs=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`in-view`),this._revealObs.unobserve(e.target))})},{threshold:.12}),e.forEach(e=>this._revealObs.observe(e))}_startTyping(){let e=0,t=()=>{let n=this._roles[this.typedRole];e<=n.length?(this.typedText=n.slice(0,e),e+=1,this._typeTimer=setTimeout(t,80)):this._typeTimer=setTimeout(()=>{let n=()=>{this.typedText.length>0?(this.typedText=this.typedText.slice(0,-1),this._typeTimer=setTimeout(n,35)):(this.typedRole=(this.typedRole+1)%this._roles.length,e=0,this._typeTimer=setTimeout(t,250))};n()},1600)};t(),this._cursorTimer=setInterval(()=>{this.cursorBlink=!this.cursorBlink},530)}_startConsole(){let e=[{type:`cmd`,text:`npm run dev`},{type:`out`,text:`> portafolio@1.0.0 dev`},{type:`out`,text:`> vite`},{type:`info`,text:`VITE v5.0.0  ready in 312 ms`},{type:`ok`,text:`→ Local:   http://localhost:5173/`},{type:`ok`,text:`→ Network: ready`},{type:`cmd`,text:`git status`},{type:`out`,text:`On branch main`},{type:`out`,text:`nothing to commit, working tree clean`},{type:`cmd`,text:`curl /api/portfolio.json`},{type:`json`,text:`{ "name": "Karen Gonzaga", "stack": ["React","Node","Python"] }`},{type:`cmd`,text:`docker ps`},{type:`ok`,text:`CONTAINER  STATUS         IMAGE`},{type:`out`,text:`a1b2c3d4   Up 2 hours     portfolio:latest`}],t=0,n=()=>{this.consoleLines=[...this.consoleLines,e[t%e.length]].slice(-9),t+=1,this._consoleTimer=setTimeout(n,1100)};n()}_startStatusBar(){this._statusTimer=setInterval(()=>{this.uptimeSec+=1,this.cpuLoad=30+Math.floor(Math.random()*45)},1e3)}_fmtUptime(){let e=Math.floor(this.uptimeSec/60),t=this.uptimeSec%60;return`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`}_handleScroll(){this.headerScrolled=window.scrollY>50;let e=this.shadowRoot.querySelectorAll(`section[id]`),t=`inicio`;e.forEach(e=>{let n=e.offsetTop-100;window.scrollY>=n&&(t=e.getAttribute(`id`))}),this.activeSection=t}_toggleMenu(){this.menuOpen=!this.menuOpen}_closeMenu(){this.menuOpen=!1}_scrollTo(e){this._closeMenu();let t=this.shadowRoot.querySelector(`#${e}`);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}static get styles(){return Z`
      :host {
        display: block;
        --purple-50: #faf5ff;
        --purple-100: #f3e8ff;
        --purple-200: #e9d5ff;
        --purple-300: #d8b4fe;
        --purple-400: #c084fc;
        --purple-500: #a855f7;
        --purple-600: #9333ea;
        --purple-700: #7c3aed;
        --purple-800: #6d28d9;
        --purple-900: #5b21b6;
        --black-900: #0a0a0f;
        --black-800: #111118;
        --black-700: #1a1a2e;
        --black-600: #24243e;
        --black-500: #2e2e4a;
        --gray-100: #f1f5f9;
        --gray-200: #e2e8f0;
        --gray-300: #cbd5e1;
        --gray-400: #94a3b8;
        --gray-500: #64748b;
        --text-primary: #f1f5f9;
        --text-secondary: #cbd5e1;
        --text-muted: #94a3b8;
        --glow-sm: 0 0 15px rgba(139, 92, 246, 0.15);
        --glow-md: 0 0 30px rgba(139, 92, 246, 0.2);
        --glow-lg: 0 0 60px rgba(139, 92, 246, 0.15);
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* ===================== NAV ===================== */
      nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: var(--transition);
        background: transparent;
      }

      nav.scrolled {
        background: rgba(10, 10, 15, 0.92);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(139, 92, 246, 0.15);
        padding: 0.7rem 2rem;
      }

      .nav-logo {
        font-size: 1.5rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--purple-400), var(--purple-600));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: -0.5px;
        cursor: pointer;
      }

      .nav-right {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .nav-links {
        display: flex;
        gap: 0.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .nav-links a {
        color: var(--gray-300);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        transition: var(--transition);
        cursor: pointer;
      }

      .nav-links a:hover,
      .nav-links a.active {
        color: var(--purple-400);
        background: rgba(139, 92, 246, 0.1);
      }

      .lang-btn {
        background: rgba(139, 92, 246, 0.1);
        border: 1px solid rgba(139, 92, 246, 0.25);
        color: var(--purple-400);
        font-size: 0.8rem;
        font-weight: 700;
        padding: 5px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: var(--transition);
        font-family: inherit;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .lang-btn:hover {
        background: rgba(139, 92, 246, 0.2);
        border-color: var(--purple-400);
      }

      .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        background: none;
        border: none;
        padding: 5px;
        z-index: 1001;
      }

      .hamburger span {
        width: 25px;
        height: 2px;
        background: var(--purple-400);
        transition: var(--transition);
        border-radius: 2px;
        display: block;
      }

      .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
      .hamburger.open span:nth-child(2) { opacity: 0; }
      .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

      /* ===================== REVEAL ANIMATIONS ===================== */
      .reveal {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .reveal.in-view { opacity: 1; transform: none; }
      .reveal.delay-1 { transition-delay: 0.08s; }
      .reveal.delay-2 { transition-delay: 0.16s; }
      .reveal.delay-3 { transition-delay: 0.24s; }
      .reveal.delay-4 { transition-delay: 0.32s; }
      .reveal.delay-5 { transition-delay: 0.40s; }

      /* ===================== CODE RAIN (matrix) ===================== */
      .code-rain {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
        opacity: 0.18;
      }

      .code-rain span {
        position: absolute;
        top: -10%;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 13px;
        color: var(--purple-400);
        white-space: nowrap;
        text-shadow: 0 0 8px rgba(139, 92, 246, 0.7);
        animation: rainDrop linear infinite;
        writing-mode: vertical-rl;
        letter-spacing: 2px;
      }

      @keyframes rainDrop {
        0% { transform: translateY(-100%); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(110vh); opacity: 0; }
      }

      /* ===================== FLOATING CODE SNIPPETS ===================== */
      .floating-snippets {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
      }

      .float-snip {
        position: absolute;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 12px;
        color: rgba(168, 85, 247, 0.35);
        background: rgba(139, 92, 246, 0.05);
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid rgba(139, 92, 246, 0.12);
        backdrop-filter: blur(4px);
        animation: floatY 12s ease-in-out infinite;
        white-space: nowrap;
      }

      @keyframes floatY {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
        50% { transform: translateY(-25px) translateX(10px); opacity: 0.8; }
      }

      /* ===================== TERMINAL / CONSOLES ===================== */
      .terminal {
        background: rgba(10, 10, 15, 0.92);
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 12px;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(139, 92, 246, 0.15);
        backdrop-filter: blur(10px);
        overflow: hidden;
        font-size: 0.78rem;
        max-width: 100%;
      }

      .terminal-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        background: linear-gradient(180deg, rgba(36, 36, 62, 0.9), rgba(26, 26, 46, 0.9));
        border-bottom: 1px solid rgba(139, 92, 246, 0.18);
      }

      .term-dot {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        display: inline-block;
      }
      .term-dot.r { background: #ff5f57; }
      .term-dot.y { background: #febc2e; }
      .term-dot.g { background: #28c840; }

      .terminal-title {
        margin-left: 8px;
        color: var(--text-muted);
        font-size: 0.72rem;
        letter-spacing: 0.5px;
        flex: 1;
        text-align: center;
        padding-right: 50px;
      }

      .terminal-body {
        padding: 14px 16px;
        color: #d1d5db;
        line-height: 1.65;
        min-height: 200px;
        max-height: 240px;
        overflow: hidden;
      }

      .term-line { display: block; animation: termIn 0.25s ease; }
      .term-line.cmd::before { content: '$ '; color: #22c55e; font-weight: 700; }
      .term-line.cmd { color: #f1f5f9; }
      .term-line.out { color: #94a3b8; }
      .term-line.info { color: var(--purple-300); }
      .term-line.ok { color: #4ade80; }
      .term-line.json { color: #fbbf24; }

      @keyframes termIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: none; }
      }

      .term-prompt {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 4px;
      }

      .term-prompt .arrow { color: var(--purple-400); font-weight: 700; }
      .term-prompt .branch { color: #4ade80; }
      .term-prompt .cursor {
        display: inline-block;
        width: 8px;
        height: 14px;
        background: var(--purple-400);
        margin-left: 2px;
        vertical-align: middle;
      }
      .term-prompt .cursor.off { opacity: 0; }

      /* ===================== TYPED TEXT ===================== */
      .typed-wrap {
        display: inline-flex;
        align-items: center;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        color: var(--purple-300);
      }
      .typed-wrap .prefix { color: #22c55e; margin-right: 6px; }
      .typed-cursor {
        display: inline-block;
        width: 9px;
        height: 1.05rem;
        background: var(--purple-400);
        margin-left: 3px;
        vertical-align: middle;
        box-shadow: 0 0 8px rgba(139, 92, 246, 0.6);
      }
      .typed-cursor.off { opacity: 0; }

      /* ===================== GIT LOG TERMINAL ===================== */
      .gitlog-terminal {
        margin-top: 3rem;
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
      }

      .gitlog-line {
        display: flex;
        gap: 10px;
        align-items: baseline;
        padding: 3px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        animation: termIn 0.4s ease both;
      }
      .gitlog-line .hash { color: #fbbf24; font-weight: 700; }
      .gitlog-line .branch {
        color: #4ade80;
        background: rgba(34, 197, 94, 0.1);
        padding: 1px 8px;
        border-radius: 4px;
        font-size: 0.7rem;
      }
      .gitlog-line .msg { color: #cbd5e1; flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }

      /* ===================== STATUS BAR ===================== */
      .status-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 26px;
        background: linear-gradient(90deg, var(--purple-700), var(--purple-600));
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 14px;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 0.72rem;
        z-index: 999;
        box-shadow: 0 -4px 20px rgba(139, 92, 246, 0.3);
      }

      .status-left, .status-right { display: flex; gap: 14px; align-items: center; }

      .status-item {
        display: flex;
        align-items: center;
        gap: 5px;
        opacity: 0.95;
      }

      .status-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #22c55e;
        box-shadow: 0 0 6px #22c55e;
        animation: blink 1.6s ease-in-out infinite;
      }

      /* offset content for status bar */
      footer { padding-bottom: 3.5rem; }

      /* ===================== HERO ===================== */
      #inicio {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        padding: 6rem 2rem 4rem;
        max-width: 100%;
      }

      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.18), transparent),
          radial-gradient(ellipse 60% 40% at 80% 50%, rgba(109, 40, 217, 0.1), transparent),
          radial-gradient(ellipse 60% 40% at 20% 80%, rgba(139, 92, 246, 0.06), transparent);
      }

      .hero-grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px);
        background-size: 60px 60px;
      }

      .hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 4rem;
        max-width: 1100px;
        width: 100%;
      }

      .hero-photo-wrapper { flex-shrink: 0; position: relative; }

      .hero-photo-ring {
        width: 280px;
        height: 280px;
        border-radius: 50%;
        padding: 4px;
        background: linear-gradient(135deg, var(--purple-500), var(--purple-800), var(--purple-500));
        box-shadow: var(--glow-lg);
        animation: ringPulse 4s ease-in-out infinite;
      }

      @keyframes ringPulse {
        0%, 100% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.2); }
        50% { box-shadow: 0 0 60px rgba(139, 92, 246, 0.35); }
      }

      .hero-photo {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--black-900);
        display: block;
      }

      .hero-text { flex: 1; }

      .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px;
        background: rgba(139, 92, 246, 0.1);
        border: 1px solid rgba(139, 92, 246, 0.25);
        border-radius: 50px;
        font-size: 0.85rem;
        color: var(--purple-300);
        margin-bottom: 1.5rem;
        font-weight: 500;
      }

      .hero-badge .dot {
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
        animation: blink 2s ease-in-out infinite;
        display: inline-block;
      }

      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }

      .hero-title {
        font-size: 3.2rem;
        font-weight: 900;
        line-height: 1.1;
        margin: 0 0 0.5rem 0;
        color: var(--text-primary);
        letter-spacing: -1px;
      }

      .hero-title .purple {
        background: linear-gradient(135deg, var(--purple-400), var(--purple-600));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero-subtitle {
        font-size: 1.3rem;
        color: var(--purple-400);
        font-weight: 600;
        margin: 0 0 1.2rem 0;
      }

      .hero-description {
        font-size: 1.05rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin: 0 0 2rem 0;
        max-width: 520px;
      }

      .hero-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 28px;
        border-radius: 12px;
        font-size: 0.95rem;
        font-weight: 600;
        text-decoration: none;
        transition: var(--transition);
        cursor: pointer;
        border: none;
        font-family: inherit;
      }

      .btn-primary {
        background: linear-gradient(135deg, var(--purple-700), var(--purple-600));
        color: white;
        box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.45);
      }

      .btn-outline {
        background: transparent;
        color: var(--purple-400);
        border: 1.5px solid rgba(139, 92, 246, 0.4);
      }

      .btn-outline:hover {
        background: rgba(139, 92, 246, 0.1);
        border-color: var(--purple-400);
        transform: translateY(-2px);
      }

      .hero-stats {
        display: flex;
        gap: 2.5rem;
        margin-top: 2.5rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(139, 92, 246, 0.12);
      }

      .stat-item { text-align: center; }

      .stat-number {
        font-size: 1.8rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--purple-400), var(--purple-300));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .stat-label {
        font-size: 0.78rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 500;
      }

      /* ===================== SECTIONS ===================== */
      section {
        padding: 5rem 2rem;
        max-width: 1100px;
        margin: 0 auto;
      }

      .section-header {
        text-align: center;
        margin-bottom: 3.5rem;
      }

      .section-label {
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: var(--purple-400);
        margin: 0 0 0.8rem 0;
      }

      .section-title {
        font-size: 2.4rem;
        font-weight: 800;
        color: var(--text-primary);
        letter-spacing: -0.5px;
        margin: 0;
      }

      .section-line {
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, var(--purple-600), var(--purple-400));
        margin: 1rem auto 0;
        border-radius: 3px;
      }

      /* ===================== ABOUT ===================== */
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: start;
      }

      .about-text p {
        color: var(--text-secondary);
        line-height: 1.8;
        margin: 0 0 1.2rem 0;
        font-size: 1.02rem;
      }

      .about-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
        margin-top: 1.5rem;
      }

      .info-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .info-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--purple-400);
        font-weight: 600;
      }

      .info-value {
        color: var(--text-primary);
        font-weight: 500;
        font-size: 0.92rem;
      }

      .about-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      .about-card {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 16px;
        padding: 1.5rem;
        transition: var(--transition);
      }

      .about-card:hover {
        border-color: rgba(139, 92, 246, 0.35);
        transform: translateY(-4px);
        box-shadow: var(--glow-sm);
      }

      .about-card-icon {
        width: 40px;
        height: 40px;
        margin-bottom: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 10px;
        padding: 8px;
      }

      .about-card-icon svg,
      .skill-category-icon svg,
      .edu-icon svg,
      .cert-icon svg,
      .contact-icon svg,
      .soft-skill svg {
        width: 100%;
        height: 100%;
        stroke: var(--purple-400);
        fill: none;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .about-card h4 {
        font-size: 1rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 0.4rem 0;
      }

      .about-card p {
        font-size: 0.85rem;
        color: var(--text-muted);
        line-height: 1.5;
        margin: 0;
      }

      /* ===================== EXPERIENCE ===================== */
      .timeline {
        position: relative;
        padding-left: 2rem;
      }

      .timeline::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(180deg, var(--purple-600), var(--purple-900), transparent);
      }

      .timeline-item {
        position: relative;
        margin-bottom: 2.5rem;
        padding-left: 2rem;
      }

      .timeline-item::before {
        content: '';
        position: absolute;
        left: -2.35rem;
        top: 8px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--purple-600);
        border: 3px solid var(--black-900);
        box-shadow: 0 0 12px rgba(139, 92, 246, 0.5);
      }

      .timeline-card {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 16px;
        padding: 1.8rem;
        transition: var(--transition);
      }

      .timeline-card:hover {
        border-color: rgba(139, 92, 246, 0.3);
        box-shadow: var(--glow-sm);
      }

      .timeline-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .timeline-role {
        font-size: 1.12rem;
        font-weight: 700;
        color: var(--text-primary);
      }

      .timeline-date {
        font-size: 0.8rem;
        color: var(--purple-400);
        font-weight: 600;
        padding: 4px 14px;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 20px;
        white-space: nowrap;
      }

      .timeline-company {
        font-size: 0.9rem;
        color: var(--purple-300);
        font-weight: 500;
        margin-bottom: 0.8rem;
        font-style: italic;
      }

      .timeline-desc {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .timeline-desc li {
        position: relative;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
        line-height: 1.65;
      }

      .timeline-desc li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 5px;
        height: 5px;
        background: var(--purple-500);
        border-radius: 50%;
      }

      .timeline-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 1rem;
      }

      .tech-pill {
        font-size: 0.73rem;
        padding: 4px 10px;
        background: rgba(139, 92, 246, 0.1);
        color: var(--purple-300);
        border-radius: 6px;
        border: 1px solid rgba(139, 92, 246, 0.15);
        font-weight: 500;
      }

      /* ===================== SKILLS ===================== */
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }

      .skill-category {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 16px;
        padding: 1.8rem;
        transition: var(--transition);
      }

      .skill-category:hover {
        border-color: rgba(139, 92, 246, 0.35);
        box-shadow: var(--glow-sm);
        transform: translateY(-3px);
      }

      .skill-category-icon {
        width: 38px;
        height: 38px;
        margin-bottom: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 10px;
        padding: 8px;
      }

      .skill-category h3 {
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 1rem 0;
      }

      .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .skill-tag {
        font-size: 0.82rem;
        padding: 6px 12px;
        background: rgba(139, 92, 246, 0.08);
        color: var(--text-secondary);
        border-radius: 8px;
        border: 1px solid rgba(139, 92, 246, 0.12);
        font-weight: 500;
        transition: var(--transition);
      }

      .skill-tag:hover {
        background: rgba(139, 92, 246, 0.18);
        color: var(--purple-300);
        border-color: rgba(139, 92, 246, 0.3);
      }

      /* ===================== SOFT SKILLS ===================== */
      .soft-skill svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }

      .soft-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-top: 3rem;
      }

      .soft-skill {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.12);
        border-radius: 50px;
        font-size: 0.9rem;
        color: var(--text-secondary);
        font-weight: 500;
        transition: var(--transition);
      }

      .soft-skill:hover {
        border-color: rgba(139, 92, 246, 0.35);
        color: var(--purple-300);
        transform: translateY(-2px);
        box-shadow: var(--glow-sm);
      }

      /* ===================== EDUCATION ===================== */
      .edu-card {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 16px;
        padding: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        transition: var(--transition);
      }

      .edu-card:hover {
        border-color: rgba(139, 92, 246, 0.3);
        box-shadow: var(--glow-sm);
      }

      .edu-icon {
        width: 52px;
        height: 52px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 14px;
        padding: 12px;
      }

      .edu-info h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 0.3rem 0;
      }

      .edu-school {
        font-size: 1rem;
        color: var(--purple-300);
        font-weight: 500;
        margin: 0 0 0.3rem 0;
      }

      .edu-detail {
        font-size: 0.9rem;
        color: var(--text-muted);
        margin: 0;
      }

      .edu-date-badge {
        margin-left: auto;
        flex-shrink: 0;
        font-size: 0.82rem;
        color: var(--purple-400);
        font-weight: 600;
        padding: 6px 14px;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 20px;
        white-space: nowrap;
      }

      /* ===================== CERTIFICATIONS ===================== */
      .certs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
      }

      .cert-card {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 14px;
        padding: 1.3rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: var(--transition);
      }

      .cert-card:hover {
        border-color: rgba(139, 92, 246, 0.3);
        box-shadow: var(--glow-sm);
        transform: translateY(-2px);
      }

      .cert-icon {
        width: 36px;
        height: 36px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 8px;
        padding: 7px;
      }

      .cert-info h4 {
        font-size: 0.92rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0 0 2px 0;
      }

      .cert-info p {
        font-size: 0.8rem;
        color: var(--text-muted);
        margin: 0;
      }

      /* ===================== CONTACT ===================== */
      #contacto { padding-bottom: 3rem; }

      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.2rem;
      }

      .contact-card {
        background: var(--black-700);
        border: 1px solid rgba(139, 92, 246, 0.1);
        border-radius: 14px;
        padding: 1.8rem 1.5rem;
        text-align: center;
        text-decoration: none;
        transition: var(--transition);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.7rem;
      }

      .contact-card:hover {
        border-color: rgba(139, 92, 246, 0.4);
        transform: translateY(-5px);
        box-shadow: var(--glow-md);
      }

      .contact-icon {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 12px;
        padding: 9px;
      }

      .contact-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--purple-400);
        font-weight: 600;
      }

      .contact-value {
        font-size: 0.9rem;
        color: var(--text-primary);
        font-weight: 500;
        word-break: break-all;
      }

      /* ===================== FOOTER ===================== */
      footer {
        text-align: center;
        padding: 2.5rem 2rem;
        border-top: 1px solid rgba(139, 92, 246, 0.1);
      }

      footer p {
        color: var(--text-muted);
        font-size: 0.85rem;
        margin: 0;
      }

      /* ===================== RESPONSIVE ===================== */
      @media (max-width: 900px) {
        .hero-content {
          flex-direction: column;
          text-align: center;
        }
        .hero-title { font-size: 2.5rem; }
        .hero-description { margin-left: auto; margin-right: auto; }
        .hero-actions { justify-content: center; }
        .hero-stats { justify-content: center; }
        .about-grid { grid-template-columns: 1fr; }
        .skills-grid { grid-template-columns: 1fr 1fr; }
        .section-title { font-size: 2rem; }
        .edu-card { flex-direction: column; text-align: center; }
        .edu-date-badge { margin-left: 0; }
      }

      @media (max-width: 640px) {
        nav { padding: 0.8rem 1.2rem; }

        .nav-links {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 15, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          z-index: 999;
          margin: 0;
          padding: 0;
        }

        .nav-links.open { display: flex; }

        .nav-links a { font-size: 1.2rem; padding: 0.8rem 2rem; }

        .hamburger { display: flex; }

        .hero-title { font-size: 2rem; }
        .hero-photo-ring { width: 210px; height: 210px; }
        .hero-stats { gap: 1.5rem; }

        .skills-grid { grid-template-columns: 1fr; }
        .about-cards { grid-template-columns: 1fr; }
        .certs-grid { grid-template-columns: 1fr; }
        .about-info { grid-template-columns: 1fr; }
        .contact-grid { grid-template-columns: 1fr; }

        section { padding: 3.5rem 1.2rem; }
      }
    `}_icon(e){return{code:N`<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,smartphone:N`<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,search:N`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,clipboard:N`<svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,terminal:N`<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,layers:N`<svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,server:N`<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,database:N`<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,tool:N`<svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,checkCircle:N`<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,zap:N`<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,lightbulb:N`<svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>`,puzzle:N`<svg viewBox="0 0 24 24"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.98.98 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.98.98 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02z"/></svg>`,users:N`<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,messageCircle:N`<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,graduationCap:N`<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/></svg>`,award:N`<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,mail:N`<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,phone:N`<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,linkedin:N`<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,github:N`<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,rocket:N`<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`}[e]||N``}_navItem(e,t){return N`
      <li>
        <a
          class="${this.activeSection===e?`active`:``}"
          @click="${()=>this._scrollTo(e)}"
        >${t}</a>
      </li>
    `}_techPills(e){return e.map(e=>N`<span class="tech-pill">${e}</span>`)}_skillTags(e){return e.map(e=>N`<span class="skill-tag">${e}</span>`)}_timelineItem(e,t,n,r,i){return N`
      <div class="timeline-item reveal">
        <div class="timeline-card">
          <div class="timeline-header">
            <span class="timeline-role">${e}</span>
            <span class="timeline-date">${t}</span>
          </div>
          <div class="timeline-company">${n}</div>
          <ul class="timeline-desc">
            ${r.map(e=>N`<li>${e}</li>`)}
          </ul>
          <div class="timeline-tech">
            ${this._techPills(i)}
          </div>
        </div>
      </div>
    `}_renderCodeRain(){let e=[`const dev = "Karen";`,`function() { }`,`<App />`,`await fetch()`,`git push`,`npm run`,`docker up`,`export default`,`return <div/>`,`useState()`,`0xDEADBEEF`,`() => {}`,`SELECT *`,`POST /api`,`try { } catch`,`import React`,`while(true)`,`class Dev {}`],t=[];for(let n=0;n<18;n+=1){let r=n/18*100+Math.random()*4,i=8+Math.random()*10,a=-Math.random()*i,o=e[n%e.length];t.push(N`<span style="left:${r}%; animation-duration:${i}s; animation-delay:${a}s;">${o}</span>`)}return N`<div class="code-rain">${t}</div>`}_renderFloatingSnippets(){return N`
      <div class="floating-snippets">
        ${[{txt:`{ stack: "fullstack" }`,top:`12%`,left:`6%`,dur:11},{txt:`await ship()`,top:`70%`,left:`4%`,dur:9},{txt:`<Component />`,top:`20%`,left:`85%`,dur:13},{txt:`return success;`,top:`65%`,left:`88%`,dur:10},{txt:`// TODO: deploy`,top:`40%`,left:`92%`,dur:14}].map(e=>N`<div class="float-snip" style="top:${e.top}; left:${e.left}; animation-duration:${e.dur}s;">${e.txt}</div>`)}
      </div>
    `}_renderTerminal(){return N`
      <div class="terminal">
        <div class="terminal-bar">
          <span class="term-dot r"></span>
          <span class="term-dot y"></span>
          <span class="term-dot g"></span>
          <span class="terminal-title">karen@dev: ~/portfolio</span>
        </div>
        <div class="terminal-body">
          ${this.consoleLines.map(e=>N`<span class="term-line ${e.type}">${e.text}</span>`)}
          <div class="term-prompt">
            <span class="branch">main</span>
            <span class="arrow">❯</span>
            <span class="cursor ${this.cursorBlink?``:`off`}"></span>
          </div>
        </div>
      </div>
    `}_renderGitLog(){return N`
      <div class="terminal gitlog-terminal reveal">
        <div class="terminal-bar">
          <span class="term-dot r"></span>
          <span class="term-dot y"></span>
          <span class="term-dot g"></span>
          <span class="terminal-title">git log --oneline --graph</span>
        </div>
        <div class="terminal-body" style="max-height: none;">
          <span class="term-line cmd">git log --oneline --decorate</span>
          ${this._gitLog.map((e,t)=>N`
              <div class="gitlog-line" style="animation-delay:${t*.08}s">
                <span class="hash">${e.hash}</span>
                <span class="branch">${e.branch}</span>
                <span class="msg">${e.msg}</span>
              </div>
            `)}
          <div class="term-prompt">
            <span class="branch">main</span>
            <span class="arrow">❯</span>
            <span class="cursor ${this.cursorBlink?``:`off`}"></span>
          </div>
        </div>
      </div>
    `}_renderStatusBar(){return N`
      <div class="status-bar">
        <div class="status-left">
          <span class="status-item"><span class="status-dot"></span> main</span>
          <span class="status-item">⎇ ${this._roles[this.typedRole]}</span>
          <span class="status-item">UTF-8</span>
          <span class="status-item">LF</span>
        </div>
        <div class="status-right">
          <span class="status-item">CPU ${this.cpuLoad}%</span>
          <span class="status-item">⏱ ${this._fmtUptime()}</span>
          <span class="status-item">v1.0.0</span>
          <span class="status-item">🟢 Online</span>
        </div>
      </div>
    `}render(){let e=this.t;return N`
      ${this._renderCodeRain()}
      <!-- NAVIGATION -->
      <nav class="${this.headerScrolled?`scrolled`:``}">
        <div class="nav-logo" @click="${()=>this._scrollTo(`inicio`)}">KG</div>
        <div class="nav-right">
          <ul class="nav-links ${this.menuOpen?`open`:``}">
            ${this._navItem(`inicio`,e.nav.inicio)}
            ${this._navItem(`sobre-mi`,e.nav.about)}
            ${this._navItem(`experiencia`,e.nav.experience)}
            ${this._navItem(`habilidades`,e.nav.skills)}
            ${this._navItem(`educacion`,e.nav.education)}
            ${this._navItem(`contacto`,e.nav.contact)}
          </ul>
          <button class="lang-btn" @click="${this._toggleLang}">
            ${this.lang===`es`?`EN`:`ES`}
          </button>
          <button
            class="hamburger ${this.menuOpen?`open`:``}"
            @click="${this._toggleMenu}"
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <!-- ==================== HERO ==================== -->
      <section id="inicio">
        <div class="hero-bg"></div>
        <div class="hero-grid"></div>
        ${this._renderFloatingSnippets()}
        <div class="hero-content">
          <div class="hero-photo-wrapper">
            <div class="hero-photo-ring">
              <img class="hero-photo" src="${me}" alt="Karen Brigith Gonzaga Rivas" />
            </div>
          </div>
          <div class="hero-text">
            <div class="hero-badge">
              <span class="dot"></span> ${e.hero.badge}
            </div>
            <h1 class="hero-title">
              Karen Brigith<br /><span class="purple">Gonzaga Rivas</span>
            </h1>
            <p class="hero-subtitle">
              <span class="typed-wrap">
                <span class="prefix">$</span>
                <span>${this.typedText}</span>
                <span class="typed-cursor ${this.cursorBlink?``:`off`}"></span>
              </span>
            </p>
            <p class="hero-description">${e.hero.description}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="mailto:brigithgonzaga501@gmail.com">${e.hero.cta}</a>
              <a class="btn btn-outline" href="https://github.com/KBGR55" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-number">+2</div>
                <div class="stat-label">${e.hero.statYears}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">+8</div>
                <div class="stat-label">${e.hero.statTech}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">+5</div>
                <div class="stat-label">${e.hero.statProjects}</div>
              </div>
            </div>
            <div style="margin-top: 2rem;">
              ${this._renderTerminal()}
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== SOBRE MI ==================== -->
      <section id="sobre-mi">
        <div class="section-header">
          <p class="section-label">${e.about.label}</p>
          <h2 class="section-title">${e.about.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="about-grid">
          <div class="about-text">
            <p>${e.about.p1}</p>
            <p>${e.about.p2}</p>
            <div class="about-info">
              <div class="info-item">
                <span class="info-label">${e.about.location}</span>
                <span class="info-value">Loja, Ecuador</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email</span>
                <span class="info-value">brigithgonzaga501@gmail.com</span>
              </div>
              <div class="info-item">
                <span class="info-label">${e.about.phone}</span>
                <span class="info-value">+593 98 073 5353</span>
              </div>
              <div class="info-item">
                <span class="info-label">${e.about.languages}</span>
                <span class="info-value">${e.about.langValue}</span>
              </div>
            </div>
          </div>
          <div class="about-cards">
            <div class="about-card reveal">
              <div class="about-card-icon">${this._icon(`code`)}</div>
              <h4>Full Stack</h4>
              <p>${e.about.cardFullstack}</p>
            </div>
            <div class="about-card reveal delay-1">
              <div class="about-card-icon">${this._icon(`smartphone`)}</div>
              <h4>Mobile</h4>
              <p>${e.about.cardMobile}</p>
            </div>
            <div class="about-card reveal delay-2">
              <div class="about-card-icon">${this._icon(`checkCircle`)}</div>
              <h4>QA Testing</h4>
              <p>${e.about.cardQA}</p>
            </div>
            <div class="about-card reveal delay-3">
              <div class="about-card-icon">${this._icon(`clipboard`)}</div>
              <h4>${e.about.cardManagement}</h4>
              <p>${e.about.cardManagementDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== EXPERIENCIA ==================== -->
      <section id="experiencia">
        <div class="section-header">
          <p class="section-label">${e.experience.label}</p>
          <h2 class="section-title">${e.experience.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="timeline">
          ${this._timelineItem(e.experience.job1Role,e.experience.job1Date,e.experience.job1Company,e.experience.job1Desc,[`Python`,`Pyramid`,`SQLAlchemy`,`PostgreSQL`,`Redis`,`TypeScript`,`Next.js`,`React`,`Tailwind CSS`,`React Native`])}
          ${this._timelineItem(e.experience.job2Role,e.experience.job2Date,`ISBEN SOLUTION`,e.experience.job2Desc,[`Angular`,`Jira`,`Scrum`,`QA Testing`])}
          ${this._timelineItem(e.experience.job3Role,e.experience.job3Date,e.experience.job3Company,e.experience.job3Desc,[`Node.js`,`JavaScript`])}
          ${this._timelineItem(e.experience.job4Role,e.experience.job4Date,e.experience.job4Company,e.experience.job4Desc,[`Jakarta EE`,`Flutter`,`Dart`,`Java`])}
          ${this._timelineItem(e.experience.job5Role,e.experience.job5Date,e.experience.job5Company,e.experience.job5Desc,[`Django`,`Python`])}
        </div>
        ${this._renderGitLog()}
      </section>

      <!-- ==================== HABILIDADES ==================== -->
      <section id="habilidades">
        <div class="section-header">
          <p class="section-label">${e.skills.label}</p>
          <h2 class="section-title">${e.skills.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="skills-grid">
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon(`terminal`)}</div>
            <h3>${e.skills.languages}</h3>
            <div class="skill-tags">
              ${this._skillTags([`JavaScript`,`TypeScript`,`Python`,`Java`,`Dart`])}
            </div>
          </div>
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon(`layers`)}</div>
            <h3>${e.skills.frontend}</h3>
            <div class="skill-tags">
              ${this._skillTags([`React`,`Next.js`,`Angular`,`Flutter`,`React Native`,`Tailwind CSS`,`HTML5`,`CSS3`])}
            </div>
          </div>
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon(`server`)}</div>
            <h3>${e.skills.backend}</h3>
            <div class="skill-tags">
              ${this._skillTags([`Pyramid`,`Cornice`,`SQLAlchemy`,`Node.js`,`Django`,`Jakarta EE`])}
            </div>
          </div>
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon(`database`)}</div>
            <h3>${e.skills.databases}</h3>
            <div class="skill-tags">
              ${this._skillTags([`PostgreSQL`,`Redis`,`MySQL`])}
            </div>
          </div>
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon(`tool`)}</div>
            <h3>${e.skills.tools}</h3>
            <div class="skill-tags">
              ${this._skillTags([`Git`,`GitHub`,`GitLab`,`Jira`,`Scrum`,`VS Code`,`PyCharm`,`DataGrip`,`Claude Code`])}
            </div>
          </div>
          <div class="skill-category reveal">
            <div class="skill-category-icon">${this._icon(`search`)}</div>
            <h3>${e.skills.qa}</h3>
            <div class="skill-tags">
              ${this._skillTags(e.skills.qaItems)}
            </div>
          </div>
        </div>

        <div class="soft-skills">
          <div class="soft-skill">${this._icon(`zap`)} ${e.skills.creativity}</div>
          <div class="soft-skill">${this._icon(`lightbulb`)} ${e.skills.leadership}</div>
          <div class="soft-skill">${this._icon(`puzzle`)} ${e.skills.problemSolving}</div>
          <div class="soft-skill">${this._icon(`users`)} ${e.skills.teamwork}</div>
          <div class="soft-skill">${this._icon(`messageCircle`)} ${e.skills.communication}</div>
          <div class="soft-skill">${this._icon(`rocket`)} ${e.skills.fastLearning}</div>
        </div>
      </section>

      <!-- ==================== EDUCACION ==================== -->
      <section id="educacion">
        <div class="section-header">
          <p class="section-label">${e.education.label}</p>
          <h2 class="section-title">${e.education.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="edu-card">
          <div class="edu-icon">${this._icon(`graduationCap`)}</div>
          <div class="edu-info">
            <h3>${e.education.degree}</h3>
            <p class="edu-school">${e.education.school}</p>
            <p class="edu-detail">${e.education.track}</p>
          </div>
          <span class="edu-date-badge">${e.education.date}</span>
        </div>

        <div class="section-header" style="margin-top: 4rem;">
          <p class="section-label">${e.education.certsLabel}</p>
          <h2 class="section-title">${e.education.certsTitle}</h2>
          <div class="section-line"></div>
        </div>
        <div class="certs-grid">
          ${[{name:`Gestion Agil de Proyectos con Scrum`,org:`Udemy`,date:`Ago. 2025`},{name:`C++ Essentials 1`,org:`Cisco Networking Academy`,date:`Ago. 2025`},{name:`GitHub Actions`,org:`Codigo Facilito`,date:`Jul. 2025`},{name:`Curso Profesional de Flutter`,org:`Codigo Facilito`,date:`Jul. 2025`},{name:`Fundamentos de Python 1`,org:`Cisco Networking Academy`,date:`May. 2023`}].map(e=>N`
              <div class="cert-card reveal">
                <div class="cert-icon">${this._icon(`award`)}</div>
                <div class="cert-info">
                  <h4>${e.name}</h4>
                  <p>${e.org} \u2022 ${e.date}</p>
                </div>
              </div>
            `)}
        </div>
      </section>

      <!-- ==================== CONTACTO ==================== -->
      <section id="contacto">
        <div class="section-header">
          <p class="section-label">${e.contact.label}</p>
          <h2 class="section-title">${e.contact.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="contact-grid">
          <a class="contact-card reveal" href="mailto:brigithgonzaga501@gmail.com">
            <div class="contact-icon">${this._icon(`mail`)}</div>
            <span class="contact-label">Email</span>
            <span class="contact-value">brigithgonzaga501@gmail.com</span>
          </a>
          <a class="contact-card reveal" href="tel:+593980735353">
            <div class="contact-icon">${this._icon(`phone`)}</div>
            <span class="contact-label">${e.contact.phone}</span>
            <span class="contact-value">+593 98 073 5353</span>
          </a>
          <a class="contact-card reveal" href="https://linkedin.com/in/kbgr55" target="_blank" rel="noopener noreferrer">
            <div class="contact-icon">${this._icon(`linkedin`)}</div>
            <span class="contact-label">LinkedIn</span>
            <span class="contact-value">linkedin.com/in/kbgr55</span>
          </a>
          <a class="contact-card reveal" href="https://github.com/KBGR55" target="_blank" rel="noopener noreferrer">
            <div class="contact-icon">${this._icon(`github`)}</div>
            <span class="contact-label">GitHub</span>
            <span class="contact-value">github.com/KBGR55</span>
          </a>
        </div>
      </section>

      <!-- FOOTER -->
      <footer>
        <p>&copy; 2026 Karen Brigith Gonzaga Rivas. ${e.footer}</p>
      </footer>

      ${this._renderStatusBar()}
    `}};customElements.define(`app-root`,ge);