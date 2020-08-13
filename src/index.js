'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function _CustomElement(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(_CustomElement.prototype,HTMLElement.prototype),Object.setPrototypeOf(_CustomElement,HTMLElement);var React=require('react'),ReactDOM=require('react-dom'),retargetEvents=require('react-shadow-dom-retarget-events'),getStyleElementsFromReactWebComponentStyleLoader=require('./getStyleElementsFromReactWebComponentStyleLoader'),camelCasedAttribute=require('./camelCasedAttribute'),extractAttributes=require('./extractAttributes');require('@webcomponents/shadydom'),require('@webcomponents/custom-elements'),module.exports={create:function create(a,b){function c(a){h.webComponentConstructed&&h.webComponentConstructed.apply(h,[a])}function d(a,b){var c=i[a];c&&h&&h[c]&&h[c].apply(h,b||[])}var e=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2],f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:[],g=4<arguments.length&&arguments[4]!==void 0?arguments[4]:[],h=void 0,i={attachedCallback:'webComponentAttached',connectedCallback:'webComponentConnected',disconnectedCallback:'webComponentDisconnected',attributeChangedCallback:'webComponentAttributeChanged',adoptedCallback:'webComponentAdopted'},j=function(b){function i(){return _classCallCheck(this,i),_possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return _inherits(i,b),_createClass(i,[{key:'connectedCallback',value:function connectedCallback(){var b=this,f=b;if(e){var i=b.attachShadow({mode:'open'});f=document.createElement('div');var j=getStyleElementsFromReactWebComponentStyleLoader();j.forEach(function(a){i.appendChild(a.cloneNode(i))}),g.forEach(function(a){var b=document.createElement('link');b.rel='stylesheet',b.type='text/css',b.href=a,b.media='all',i.appendChild(b)}),i.appendChild(f),retargetEvents(i)}ReactDOM.render(React.cloneElement(a,extractAttributes(b)),f,function(){h=this,c(b),d('connectedCallback')})}},{key:'disconnectedCallback',value:function disconnectedCallback(){d('disconnectedCallback')}},{key:'attributeChangedCallback',value:function attributeChangedCallback(a,b,c,e){d('attributeChangedCallback',[camelCasedAttribute(a),b,c,e])}},{key:'adoptedCallback',value:function adoptedCallback(a,b){d('adoptedCallback',[a,b])}}],[{key:'observedAttributes',get:function get(){return f}}]),i}(_CustomElement);customElements.define(b,j)}};