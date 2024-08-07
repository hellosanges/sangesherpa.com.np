/*! For license information please see component---src-templates-portfolio-page-js-15b7dbc23f0c5d1359f4.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_wordpress_blog=self.webpackChunkgatsby_starter_wordpress_blog||[]).push([[235],{4184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},214:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var o=n(7294),r=n(3935),l=n(4184),i=n.n(l);var a=!1;if("undefined"!=typeof window){var u={get passive(){a=!0}};window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}var c="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),s=[],d=!1,f=-1,v=void 0,m=void 0,p=function(e){return s.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},y=function(e){var t=e||window.event;return!!p(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},g=function(){void 0!==m&&(document.body.style.paddingRight=m,m=void 0),void 0!==v&&(document.body.style.overflow=v,v=void 0)},h=function(e,t){if(e){if(!s.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};s=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(s),[n]),c?(e.ontouchstart=function(e){1===e.targetTouches.length&&(f=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-f;!p(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?y(e):e.stopPropagation())}(t,e)},d||(document.addEventListener("touchmove",y,a?{passive:!1}:void 0),d=!0)):function(e){if(void 0===m){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(m=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===v&&(v=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")};function b(e,t={isStateful:!0}){const n=function(e=null){let[t,n]=o.useState(e);const{current:r}=o.useRef({current:t});return Object.defineProperty(r,"current",{get:()=>t,set:e=>{Object.is(t,e)||(t=e,n(e))}}),r}(null),r=(0,o.useRef)(null),l=t.isStateful?n:r;return o.useEffect((()=>{!e||("function"==typeof e?e(l.current):e.current=l.current)})),l}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}var E=function(e){var t=e.classes,n=e.classNames,r=e.styles,l=e.id,a=e.closeIcon,u=e.onClick;return o.createElement("button",{id:l,className:i()(t.closeButton,null==n?void 0:n.closeButton),style:null==r?void 0:r.closeButton,onClick:u,"data-testid":"close-button"},a||o.createElement("svg",{className:null==n?void 0:n.closeIcon,style:null==r?void 0:r.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon"},o.createElement("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})))},C="undefined"!=typeof window,A=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function I(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}function S(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!0;var t=(e.form||e.ownerDocument).querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return n===e||void 0===n&&t[0]===e}function k(e){for(var t=document.activeElement,n=e.querySelectorAll(A.join(",")),o=[],r=0;r<n.length;r++){var l=n[r];(t===l||!l.disabled&&O(l)>-1&&!I(l)&&S(l))&&o.push(l)}return o}function O(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return e.getAttribute("contentEditable")}(e)?0:e.tabIndex:t}var P=function(e){var t=e.container,n=e.initialFocusRef,r=(0,o.useRef)();return(0,o.useEffect)((function(){var e=function(e){(null==t?void 0:t.current)&&function(e,t){if(e&&"Tab"===e.key){if(!t||!t.contains)return process,!1;if(!t.contains(e.target))return!1;var n=k(t),o=n[0],r=n[n.length-1];e.shiftKey&&e.target===o?(r.focus(),e.preventDefault()):!e.shiftKey&&e.target===r&&(o.focus(),e.preventDefault())}}(e,t.current)};if(C&&document.addEventListener("keydown",e),C&&(null==t?void 0:t.current)){var o=function(){-1!==A.findIndex((function(e){var t;return null==(t=document.activeElement)?void 0:t.matches(e)}))&&(r.current=document.activeElement)};if(n)o(),requestAnimationFrame((function(){var e;null==(e=n.current)||e.focus()}));else{var l=k(t.current);l[0]&&(o(),l[0].focus())}}return function(){var t;C&&(document.removeEventListener("keydown",e),null==(t=r.current)||t.focus())}}),[t,n]),null},N=[],R=function(e){N.push(e)},x=function(e){N=N.filter((function(t){return t!==e}))},B=function(e){return!!N.length&&N[N.length-1]===e};var L=function(e,t,n,r,l){var i=(0,o.useRef)(null);(0,o.useEffect)((function(){return t&&e.current&&r&&(i.current=e.current,h(e.current,{reserveScrollBarGap:l})),function(){var e;i.current&&((e=i.current)?(s=s.filter((function(t){return t.targetElement!==e})),c?(e.ontouchstart=null,e.ontouchmove=null,d&&0===s.length&&(document.removeEventListener("touchmove",y,a?{passive:!1}:void 0),d=!1)):s.length||g()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."),i.current=null)}}),[t,n,e,r,l])},T={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},_=o.forwardRef((function(e,t){var n,l,a,u,c=e.open,s=e.center,d=e.blockScroll,f=void 0===d||d,v=e.closeOnEsc,m=void 0===v||v,p=e.closeOnOverlayClick,y=void 0===p||p,g=e.container,h=e.showCloseIcon,A=void 0===h||h,I=e.closeIconId,S=e.closeIcon,k=e.focusTrapped,O=void 0===k||k,N=e.initialFocusRef,_=void 0===N?void 0:N,D=e.animationDuration,j=void 0===D?300:D,M=e.classNames,F=e.styles,G=e.role,q=void 0===G?"dialog":G,H=e.ariaDescribedby,K=e.ariaLabelledby,U=e.containerId,W=e.modalId,Y=e.onClose,z=e.onEscKeyDown,Z=e.onOverlayClick,J=e.onAnimationEnd,Q=e.children,V=e.reserveScrollBarGap,X=b(t),$=(0,o.useRef)(null),ee=(0,o.useRef)(null),te=(0,o.useRef)(null);null===te.current&&C&&(te.current=document.createElement("div"));var ne=(0,o.useState)(!1),oe=ne[0],re=ne[1];!function(e,t){(0,o.useEffect)((function(){return t&&R(e),function(){x(e)}}),[t,e])}($,c),L($,c,oe,f,V);var le=function(e){27===e.keyCode&&B($)&&(null==z||z(e),m&&Y())};(0,o.useEffect)((function(){return function(){oe&&(te.current&&!g&&document.body.contains(te.current)&&document.body.removeChild(te.current),document.removeEventListener("keydown",le))}}),[oe]),(0,o.useEffect)((function(){c&&!oe&&(re(!0),!te.current||g||document.body.contains(te.current)||document.body.appendChild(te.current),document.addEventListener("keydown",le))}),[c]);var ie=function(){ee.current=!1},ae=g||te.current,ue=c?null!=(n=null==M?void 0:M.overlayAnimationIn)?n:T.overlayAnimationIn:null!=(l=null==M?void 0:M.overlayAnimationOut)?l:T.overlayAnimationOut,ce=c?null!=(a=null==M?void 0:M.modalAnimationIn)?a:T.modalAnimationIn:null!=(u=null==M?void 0:M.modalAnimationOut)?u:T.modalAnimationOut;return oe&&ae?r.createPortal(o.createElement("div",{className:i()(T.root,null==M?void 0:M.root),style:null==F?void 0:F.root,"data-testid":"root"},o.createElement("div",{className:i()(T.overlay,null==M?void 0:M.overlay),"data-testid":"overlay","aria-hidden":!0,style:w({animation:ue+" "+j+"ms"},null==F?void 0:F.overlay)}),o.createElement("div",{ref:$,id:U,className:i()(T.modalContainer,s&&T.modalContainerCenter,null==M?void 0:M.modalContainer),style:null==F?void 0:F.modalContainer,"data-testid":"modal-container",onClick:function(e){null===ee.current&&(ee.current=!0),ee.current?(null==Z||Z(e),y&&Y(),ee.current=null):ee.current=null}},o.createElement("div",{ref:X,className:i()(T.modal,null==M?void 0:M.modal),style:w({animation:ce+" "+j+"ms"},null==F?void 0:F.modal),onMouseDown:ie,onMouseUp:ie,onClick:ie,onAnimationEnd:function(){c||re(!1),null==J||J()},id:W,role:q,"aria-modal":"true","aria-labelledby":K,"aria-describedby":H,"data-testid":"modal",tabIndex:-1},O&&o.createElement(P,{container:X,initialFocusRef:_}),Q,A&&o.createElement(E,{classes:T,classNames:M,styles:F,closeIcon:S,onClick:Y,id:I})))),ae):null})),D=n(8032),j=n(2741);var M=e=>{let{pageContext:{node:t}}=e;const n=[t.portfolioimage.editor,t.portfolioimage.port2,t.portfolioimage.port3,t.portfolioimage.port4,t.portfolioimage.port5,t.portfolioimage.port6,t.portfolioimage.port7,t.portfolioimage.port8,t.portfolioimage.port9],{0:r,1:l}=(0,o.useState)(!1),{0:i,1:a}=(0,o.useState)(null);return o.createElement(j.Z,null,o.createElement("div",{className:"PortfolioPage-module--portfolio_outer--15b31"},o.createElement("h2",null,t.title),o.createElement("div",{className:"PortfolioPage-module--portfolio_img_container--53268"},n.map(((e,n)=>{if(e&&e.node.localFile){const r=(0,D.c)(e.node.localFile);return o.createElement("div",{key:n,className:"PortfolioPage-module--portfolio_img--1cef1",onClick:()=>(e=>{a(e),l(!0)})(r)},o.createElement(D.G,{image:r,alt:t.title}))}return null}))),o.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}})),o.createElement(_,{open:r,onClose:()=>{a(null),l(!1)},center:!0},i&&o.createElement(D.G,{image:i,alt:t.title})))}}}]);
//# sourceMappingURL=component---src-templates-portfolio-page-js-15b7dbc23f0c5d1359f4.js.map