var ST=Object.create;var Lv=Object.defineProperty;var MT=Object.getOwnPropertyDescriptor;var bT=Object.getOwnPropertyNames;var ET=Object.getPrototypeOf,TT=Object.prototype.hasOwnProperty;var ns=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var AT=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of bT(t))!TT.call(e,s)&&s!==n&&Lv(e,s,{get:()=>t[s],enumerable:!(i=MT(t,s))||i.enumerable});return e};var is=(e,t,n)=>(n=e!=null?ST(ET(e)):{},AT(t||!e||!e.__esModule?Lv(n,"default",{value:e,enumerable:!0}):n,e));var qv=ns(jt=>{"use strict";var Yp=Symbol.for("react.transitional.element"),wT=Symbol.for("react.portal"),RT=Symbol.for("react.fragment"),CT=Symbol.for("react.strict_mode"),NT=Symbol.for("react.profiler"),DT=Symbol.for("react.consumer"),UT=Symbol.for("react.context"),LT=Symbol.for("react.forward_ref"),IT=Symbol.for("react.suspense"),OT=Symbol.for("react.memo"),zv=Symbol.for("react.lazy"),PT=Symbol.for("react.activity"),BT=Symbol.for("react.view_transition"),Iv=Symbol.iterator;function zT(e){return e===null||typeof e!="object"?null:(e=Iv&&e[Iv]||e["@@iterator"],typeof e=="function"?e:null)}var Fv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hv=Object.assign,Vv={};function $r(e,t,n){this.props=e,this.context=t,this.refs=Vv,this.updater=n||Fv}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gv(){}Gv.prototype=$r.prototype;function Zp(e,t,n){this.props=e,this.context=t,this.refs=Vv,this.updater=n||Fv}var Jp=Zp.prototype=new Gv;Jp.constructor=Zp;Hv(Jp,$r.prototype);Jp.isPureReactComponent=!0;var Ov=Array.isArray;function qp(){}var ze={H:null,A:null,T:null,S:null},kv=Object.prototype.hasOwnProperty;function Kp(e,t,n){var i=n.ref;return{$$typeof:Yp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function FT(e,t){return Kp(e.type,t,e.props)}function Qp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yp}function HT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pv=/\/+/g;function Wp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?HT(""+e.key):t.toString(36)}function VT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(qp,qp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function jr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Yp:case wT:r=!0;break;case zv:return r=e._init,jr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Wp(e,0):i,Ov(s)?(n="",r!=null&&(n=r.replace(Pv,"$&/")+"/"),jr(s,t,n,"",function(c){return c})):s!=null&&(Qp(s)&&(s=FT(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Pv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Ov(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Wp(i,l),r+=jr(i,t,n,a,s);else if(l=zT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Wp(i,l++),r+=jr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return jr(VT(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function qu(e,t,n){if(e==null)return e;var i=[],s=0;return jr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function GT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Bv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Xv(e){var t=ze.T,n={};n.types=t!==null?t.types:null,ze.T=n;try{var i=e(),s=ze.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(qp,Bv)}catch(a){Bv(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),ze.T=t}}function Wv(e){var t=ze.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Xv(Wv.bind(null,e))}var kT={map:qu,forEach:function(e,t,n){qu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qu(e,function(){t++}),t},toArray:function(e){return qu(e,function(t){return t})||[]},only:function(e){if(!Qp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};jt.Activity=PT;jt.Children=kT;jt.Component=$r;jt.Fragment=RT;jt.Profiler=NT;jt.PureComponent=Zp;jt.StrictMode=CT;jt.Suspense=IT;jt.ViewTransition=BT;jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ze;jt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ze.H.useMemoCache(e)}};jt.addTransitionType=Wv;jt.cache=function(e){return function(){return e.apply(null,arguments)}};jt.cacheSignal=function(){return null};jt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Hv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!kv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Kp(e.type,s,i)};jt.createContext=function(e){return e={$$typeof:UT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:DT,_context:e},e};jt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)kv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Kp(e,a,s)};jt.createRef=function(){return{current:null}};jt.forwardRef=function(e){return{$$typeof:LT,render:e}};jt.isValidElement=Qp;jt.lazy=function(e){return{$$typeof:zv,_payload:{_status:-1,_result:e},_init:GT}};jt.memo=function(e,t){return{$$typeof:OT,type:e,compare:t===void 0?null:t}};jt.startTransition=Xv;jt.unstable_useCacheRefresh=function(){return ze.H.useCacheRefresh()};jt.use=function(e){return ze.H.use(e)};jt.useActionState=function(e,t,n){return ze.H.useActionState(e,t,n)};jt.useCallback=function(e,t){return ze.H.useCallback(e,t)};jt.useContext=function(e){return ze.H.useContext(e)};jt.useDebugValue=function(){};jt.useDeferredValue=function(e,t){return ze.H.useDeferredValue(e,t)};jt.useEffect=function(e,t){return ze.H.useEffect(e,t)};jt.useEffectEvent=function(e){return ze.H.useEffectEvent(e)};jt.useId=function(){return ze.H.useId()};jt.useImperativeHandle=function(e,t,n){return ze.H.useImperativeHandle(e,t,n)};jt.useInsertionEffect=function(e,t){return ze.H.useInsertionEffect(e,t)};jt.useLayoutEffect=function(e,t){return ze.H.useLayoutEffect(e,t)};jt.useMemo=function(e,t){return ze.H.useMemo(e,t)};jt.useOptimistic=function(e,t){return ze.H.useOptimistic(e,t)};jt.useReducer=function(e,t,n){return ze.H.useReducer(e,t,n)};jt.useRef=function(e){return ze.H.useRef(e)};jt.useState=function(e){return ze.H.useState(e)};jt.useSyncExternalStore=function(e,t,n){return ze.H.useSyncExternalStore(e,t,n)};jt.useTransition=function(){return ze.H.useTransition()};jt.version="19.3.0"});var to=ns((UL,Yv)=>{"use strict";Yv.exports=qv()});var iy=ns(Xe=>{"use strict";function em(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Yu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function ss(e){return e.length===0?null:e[0]}function Ju(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Yu(o,n))l<s&&0>Yu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Yu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Yu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Xe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Zv=performance,Xe.unstable_now=function(){return Zv.now()}):(jp=Date,Jv=jp.now(),Xe.unstable_now=function(){return jp.now()-Jv});var Zv,jp,Jv,Us=[],aa=[],XT=1,Ai=null,Dn=3,nm=!1,Yl=!1,Zl=!1,im=!1,jv=typeof setTimeout=="function"?setTimeout:null,$v=typeof clearTimeout=="function"?clearTimeout:null,Kv=typeof setImmediate<"u"?setImmediate:null;function Zu(e){for(var t=ss(aa);t!==null;){if(t.callback===null)Ju(aa);else if(t.startTime<=e)Ju(aa),t.sortIndex=t.expirationTime,em(Us,t);else break;t=ss(aa)}}function sm(e){if(Zl=!1,Zu(e),!Yl)if(ss(Us)!==null)Yl=!0,no||(no=!0,eo());else{var t=ss(aa);t!==null&&am(sm,t.startTime-e)}}var no=!1,Jl=-1,ty=5,ey=-1;function ny(){return im?!0:!(Xe.unstable_now()-ey<ty)}function $p(){if(im=!1,no){var e=Xe.unstable_now();ey=e;var t=!0;try{t:{Yl=!1,Zl&&(Zl=!1,$v(Jl),Jl=-1),nm=!0;var n=Dn;try{e:{for(Zu(e),Ai=ss(Us);Ai!==null&&!(Ai.expirationTime>e&&ny());){var i=Ai.callback;if(typeof i=="function"){Ai.callback=null,Dn=Ai.priorityLevel;var s=i(Ai.expirationTime<=e);if(e=Xe.unstable_now(),typeof s=="function"){Ai.callback=s,Zu(e),t=!0;break e}Ai===ss(Us)&&Ju(Us),Zu(e)}else Ju(Us);Ai=ss(Us)}if(Ai!==null)t=!0;else{var a=ss(aa);a!==null&&am(sm,a.startTime-e),t=!1}}break t}finally{Ai=null,Dn=n,nm=!1}t=void 0}}finally{t?eo():no=!1}}}var eo;typeof Kv=="function"?eo=function(){Kv($p)}:typeof MessageChannel<"u"?(tm=new MessageChannel,Qv=tm.port2,tm.port1.onmessage=$p,eo=function(){Qv.postMessage(null)}):eo=function(){jv($p,0)};var tm,Qv;function am(e,t){Jl=jv(function(){e(Xe.unstable_now())},t)}Xe.unstable_IdlePriority=5;Xe.unstable_ImmediatePriority=1;Xe.unstable_LowPriority=4;Xe.unstable_NormalPriority=3;Xe.unstable_Profiling=null;Xe.unstable_UserBlockingPriority=2;Xe.unstable_cancelCallback=function(e){e.callback=null};Xe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ty=0<e?Math.floor(1e3/e):5};Xe.unstable_getCurrentPriorityLevel=function(){return Dn};Xe.unstable_next=function(e){switch(Dn){case 1:case 2:case 3:var t=3;break;default:t=Dn}var n=Dn;Dn=t;try{return e()}finally{Dn=n}};Xe.unstable_requestPaint=function(){im=!0};Xe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Dn;Dn=e;try{return t()}finally{Dn=n}};Xe.unstable_scheduleCallback=function(e,t,n){var i=Xe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:XT++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,em(aa,e),ss(Us)===null&&e===ss(aa)&&(Zl?($v(Jl),Jl=-1):Zl=!0,am(sm,n-i))):(e.sortIndex=s,em(Us,e),Yl||nm||(Yl=!0,no||(no=!0,eo()))),e};Xe.unstable_shouldYield=ny;Xe.unstable_wrapCallback=function(e){var t=Dn;return function(){var n=Dn;Dn=t;try{return e.apply(this,arguments)}finally{Dn=n}}}});var ay=ns((IL,sy)=>{"use strict";sy.exports=iy()});var ly=ns(Un=>{"use strict";var WT=to();function oy(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ra(){}var Vn={d:{f:ra,r:function(){throw Error(oy(522))},D:ra,C:ra,L:ra,m:ra,X:ra,S:ra,M:ra},p:0,findDOMNode:null},qT=Symbol.for("react.portal"),YT=Symbol.for("react.recoverable"),ry=Symbol.for("react.optimistic_key");function ZT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qT,key:i==null?null:i===ry?ry:""+i,children:e,containerInfo:t,implementation:n}}var Kl=WT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ku(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Vn;Un.browser=function(e){return{$$typeof:YT,_reason:e}};Un.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(oy(299));return ZT(e,t,null,n)};Un.flushSync=function(e){var t=Kl.T,n=Vn.p;try{if(Kl.T=null,Vn.p=2,e)return e()}finally{Kl.T=t,Vn.p=n,Vn.d.f()}};Un.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Vn.d.C(e,t))};Un.prefetchDNS=function(e){typeof e=="string"&&Vn.d.D(e)};Un.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Ku(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Vn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Vn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Un.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Ku(t.as,t.crossOrigin);Vn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Vn.d.M(e)};Un.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Ku(n,t.crossOrigin);Vn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Un.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Ku(t.as,t.crossOrigin);Vn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Vn.d.m(e)};Un.requestFormReset=function(e){Vn.d.r(e)};Un.unstable_batchedUpdates=function(e,t){return e(t)};Un.useFormState=function(e,t,n){return Kl.H.useFormState(e,t,n)};Un.useFormStatus=function(){return Kl.H.useHostTransitionStatus()};Un.version="19.3.0"});var hy=ns((PL,uy)=>{"use strict";function cy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cy)}catch(e){console.error(e)}}cy(),uy.exports=ly()});var Qb=ns(Uf=>{"use strict";var hn=ay(),Kx=to(),JT=hy();function st(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Qx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function jx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fy(e){if(Bc(e)!==e)throw Error(st(188))}function KT(e){var t=e.alternate;if(!t){if(t=Bc(e),t===null)throw Error(st(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return fy(s),e;if(a===i)return fy(s),t;a=a.sibling}throw Error(st(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(st(189))}}if(n.alternate!==i)throw Error(st(190))}if(n.tag!==3)throw Error(st(188));return n.stateNode.current===n?e:t}function tS(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=tS(e),t!==null)return t;e=e.sibling}return null}function ii(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&ii(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Tr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function dy(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function eS(e){var t=[null,null],n=Tr(e);return n===null||nS(t,e,n.child,{foundSelf:!1}),t}function nS(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&nS(e,t,n.child,i))return!0;n=n.sibling}return!1}function un(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(st(559))}}var co=null,Bm=null;function QT(e,t,n){return e===n?!0:e===t?(co=e,!0):!1}function jT(e,t,n){return e===n?(Bm=e,!1):e===t?(Bm!==null&&(co=e),!0):!1}function py(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function zm(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Oe=Object.assign,$T=Symbol.for("react.element"),Qu=Symbol.for("react.transitional.element"),ic=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),iS=Symbol.for("react.strict_mode"),Fm=Symbol.for("react.profiler"),sS=Symbol.for("react.consumer"),us=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),Hm=Symbol.for("react.suspense"),Vm=Symbol.for("react.suspense_list"),J0=Symbol.for("react.memo"),ua=Symbol.for("react.lazy"),Gm=Symbol.for("react.activity"),tA=Symbol.for("react.legacy_hidden"),eA=Symbol.for("react.memo_cache_sentinel"),km=Symbol.for("react.view_transition"),nA=Symbol.for("react.recoverable"),my=Symbol.iterator;function Ql(e){return e===null||typeof e!="object"?null:(e=my&&e[my]||e["@@iterator"],typeof e=="function"?e:null)}var iA=Symbol.for("react.client.reference");function Xm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===iA?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case uo:return"Fragment";case Fm:return"Profiler";case iS:return"StrictMode";case Hm:return"Suspense";case Vm:return"SuspenseList";case Gm:return"Activity";case km:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ic:return"Portal";case us:return e.displayName||"Context";case sS:return(e._context.displayName||"Context")+".Consumer";case Z0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J0:return t=e.displayName||null,t!==null?t:Xm(e.type)||"Memo";case ua:t=e._payload,e=e._init;try{return Xm(e(t))}catch{}}return null}var sc=Array.isArray,Qt=Kx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Me=JT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fr={pending:!1,data:null,method:null,action:null},Wm=[],ho=-1;function _s(e){return{current:e}}function En(e){0>ho||(e.current=Wm[ho],Wm[ho]=null,ho--)}function Ve(e,t){ho++,Wm[ho]=e.current,e.current=t}var ps=_s(null),Sc=_s(null),ya=_s(null),Bh=_s(null);function zh(e,t){switch(Ve(ya,t),Ve(Sc,e),Ve(ps,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Cx(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Cx(t),e=Ab(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}En(ps),Ve(ps,e)}function Uo(){En(ps),En(Sc),En(ya)}function qm(e){var t=e.memoizedState;t!==null&&(Go._currentValue=t.memoizedState,Ve(Bh,e)),t=ps.current;var n=Ab(t,e.type);t!==n&&(Ve(Sc,e),Ve(ps,n))}function Fh(e){Sc.current===e&&(En(ps),En(Sc)),Bh.current===e&&(En(Bh),Go._currentValue=fr)}var rm,gy;function la(e){if(rm===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rm=t&&t[1]||"",gy=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rm+e+gy}var om=!1;function lm(e,t){if(!e||om)return"";om=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(g){var u=g}Reflect.construct(e,[],p)}else{try{p.call()}catch(g){u=g}p=!1;try{var f=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(f!==void 0?Object.defineProperty(e.prototype,"props",f):delete e.prototype.props)}}}else{try{throw Error()}catch(g){u=g}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(g){if(g&&u&&typeof g.stack=="string")return[g.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{om=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?la(n):""}function sA(e,t){switch(e.tag){case 26:case 27:case 5:return la(e.type);case 16:return la("Lazy");case 13:return e.child!==t&&t!==null?la("Suspense Fallback"):la("Suspense");case 19:return la("SuspenseList");case 0:case 15:return lm(e.type,!1);case 11:return lm(e.type.render,!1);case 1:return lm(e.type,!0);case 31:return la("Activity");case 30:return la("ViewTransition");default:return""}}function _y(e){try{var t="",n=null;do t+=sA(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ym=Object.prototype.hasOwnProperty,K0=hn.unstable_scheduleCallback,cm=hn.unstable_cancelCallback,aA=hn.unstable_shouldYield,rA=hn.unstable_requestPaint,pi=hn.unstable_now,oA=hn.unstable_getCurrentPriorityLevel,aS=hn.unstable_ImmediatePriority,rS=hn.unstable_UserBlockingPriority,Hh=hn.unstable_NormalPriority,lA=hn.unstable_LowPriority,oS=hn.unstable_IdlePriority,cA=hn.log,uA=hn.unstable_setDisableYieldValue,zc=null,mi=null;function da(e){if(typeof cA=="function"&&uA(e),mi&&typeof mi.setStrictMode=="function")try{mi.setStrictMode(zc,e)}catch{}}var gi=Math.clz32?Math.clz32:dA,hA=Math.log,fA=Math.LN2;function dA(e){return e>>>=0,e===0?32:31-(hA(e)/fA|0)|0}var ju=256,$u=262144,th=4194304;function or(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function df(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=or(i):(r&=o,r!==0?s=or(r):n||(n=o&~e,n!==0&&(s=or(n))))):(o=i&~a,o!==0?s=or(o):r!==0?s=or(r):n||(n=i&~e,n!==0&&(s=or(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Fc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lS(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-gi(n),s=1<<i;t|=e[i],n&=~s}return t}function pA(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cS(){var e=th;return th<<=1,(th&62914560)===0&&(th=4194304),e}function um(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mA(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-gi(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var f=u[h];f!==null&&(f.lane&=-536870913)}n&=~p}i!==0&&uS(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function uS(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-gi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function hS(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-gi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function fS(e,t){var n=t&-t;return n=(n&42)!==0?1:Q0(n),(n&(e.suspendedLanes|t))!==0?0:n}function Q0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function j0(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dS(){var e=Me.p;return e!==0?e:(e=window.event,e===void 0?32:Zb(e.type))}function vy(e,t){var n=Me.p;try{return Me.p=e,t()}finally{Me.p=n}}var Ws=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Ws,si="__reactProps$"+Ws,Wo="__reactContainer$"+Ws,yy="__reactEvents$"+Ws,gA="__reactListeners$"+Ws,_A="__reactHandles$"+Ws,xy="__reactResources$"+Ws,Vc="__reactMarker$"+Ws,Vh="__reactLoad$"+Ws;function pf(e){delete e[Mn],delete e[si],delete e[gA],delete e[_A]}function ur(e){var t;if(t=e[Mn])return t;for(var n=e.parentNode;n;){if(t=n[Wo]||n[Mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bx(e);e!==null;){if(n=e[Mn])return n;e=Bx(e)}return t}e=n,n=e.parentNode}return null}function qo(e){if(e=e[Mn]||e[Wo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ac(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(st(33))}function Mo(e){var t=e[xy];return t||(t=e[xy]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _n(e){e[Vc]=!0}function pS(e){e[Vh]=void 0}var mS=new Set,gS={};function Ar(e,t){Lo(e,t),Lo(e+"Capture",t)}function Lo(e,t){for(gS[e]=t,e=0;e<t.length;e++)mS.add(t[e])}var vA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sy={},My={};function yA(e){return Ym.call(My,e)?!0:Ym.call(Sy,e)?!1:vA.test(e)?My[e]=!0:(Sy[e]=!0,!1)}var xe=!1;function by(){var e=xe;return xe=!1,e}function vh(e,t,n){if(yA(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function eh(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ls(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ui(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _S(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xA(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zm(e){if(!e._valueTracker){var t=_S(e)?"checked":"value";e._valueTracker=xA(e,t,""+e[t])}}function vS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=_S(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var SA=/[\n"\\]/g;function Di(e){return e.replace(SA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ui(t)):e.value!==""+ui(t)&&(e.value=""+ui(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?hm(e,ui(e.value)):hm(e,ui(t)):n!=null?hm(e,ui(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ui(o):e.removeAttribute("name")}function yS(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Zm(e);return}n=n!=null?""+ui(n):"",t=t!=null?""+ui(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Zm(e)}function hm(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function bo(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ui(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function xS(e,t,n){if(t!=null&&(t=""+ui(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ui(n):""}function SS(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(st(92));if(sc(i)){if(1<i.length)throw Error(st(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ui(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Zm(e)}function Io(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var MA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ey(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||MA.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function MS(e,t,n){if(t!=null&&typeof t!="object")throw Error(st(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",xe=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(Ey(e,s,i),xe=!0)}else for(var a in t)t.hasOwnProperty(a)&&Ey(e,a,t[a])}function $0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),EA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yh(e){return EA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function hs(){}var Km=null;function tg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fo=null,Eo=null;function Ty(e){var t=qo(e);if(t&&(e=t.stateNode)){var n=e[si]||null;t:switch(e=t.stateNode,t.type){case"input":if(Jm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Di(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[si]||null;if(!s)throw Error(st(90));Jm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&vS(i)}break t;case"textarea":xS(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&bo(e,!!n.multiple,t,!1)}}}var fm=!1;function bS(e,t,n){if(fm)return e(t,n);fm=!0;try{var i=e(t);return i}finally{if(fm=!1,(fo!==null||Eo!==null)&&(Rf(),fo&&(t=fo,e=Eo,Eo=fo=null,Ty(t),e)))for(t=0;t<e.length;t++)Ty(e[t])}}function Mc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[si]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(st(231,t,typeof n));return n}var Fs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qm=!1;if(Fs)try{io={},Object.defineProperty(io,"passive",{get:function(){Qm=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Qm=!1}var io,pa=null,eg=null,xh=null;function ES(){if(xh)return xh;var e,t=eg,n=t.length,i,s="value"in pa?pa.value:pa.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return xh=s.slice(e,1<i?1-i:void 0)}function Sh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nh(){return!0}function Ay(){return!1}function Wn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?nh:Ay,this.isPropagationStopped=Ay,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nh)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nh)},persist:function(){},isPersistent:nh}),t}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mf=Wn(Ia),Gc=Oe({},Ia,{view:0,detail:0}),TA=Wn(Gc),dm,pm,jl,gf=Oe({},Gc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ng,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jl&&(jl&&e.type==="mousemove"?(dm=e.screenX-jl.screenX,pm=e.screenY-jl.screenY):pm=dm=0,jl=e),dm)},movementY:function(e){return"movementY"in e?e.movementY:pm}}),wy=Wn(gf),AA=Oe({},gf,{dataTransfer:0}),wA=Wn(AA),RA=Oe({},Gc,{relatedTarget:0}),mm=Wn(RA),CA=Oe({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),NA=Wn(CA),DA=Oe({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),UA=Wn(DA),LA=Oe({},Ia,{data:0}),Ry=Wn(LA),IA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=PA[e])?!!t[e]:!1}function ng(){return BA}var zA=Oe({},Gc,{key:function(e){if(e.key){var t=IA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?OA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ng,charCode:function(e){return e.type==="keypress"?Sh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),FA=Wn(zA),HA=Oe({},gf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cy=Wn(HA),VA=Oe({},Ia,{submitter:0}),GA=Wn(VA),kA=Oe({},Gc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ng}),XA=Wn(kA),WA=Oe({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),qA=Wn(WA),YA=Oe({},gf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ZA=Wn(YA),JA=Oe({},Ia,{newState:0,oldState:0,source:0}),KA=Wn(JA),QA=[9,13,27,32],ig=Fs&&"CompositionEvent"in window,lc=null;Fs&&"documentMode"in document&&(lc=document.documentMode);var jA=Fs&&"TextEvent"in window&&!lc,TS=Fs&&(!ig||lc&&8<lc&&11>=lc),Ny=" ",Dy=!1;function AS(e,t){switch(e){case"keyup":return QA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var po=!1;function $A(e,t){switch(e){case"compositionend":return wS(t);case"keypress":return t.which!==32?null:(Dy=!0,Ny);case"textInput":return e=t.data,e===Ny&&Dy?null:e;default:return null}}function tw(e,t){if(po)return e==="compositionend"||!ig&&AS(e,t)?(e=ES(),xh=eg=pa=null,po=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return TS&&t.locale!=="ko"?null:t.data;default:return null}}var ew={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ew[e.type]:t==="textarea"}function RS(e,t,n,i){fo?Eo?Eo.push(i):Eo=[i]:fo=i,t=uf(t,"onChange"),0<t.length&&(n=new mf("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var cc=null,bc=null;function nw(e){bb(e,0)}function _f(e){var t=ac(e);if(vS(t))return e}function Ly(e,t){if(e==="change")return t}var CS=!1;Fs&&(Fs?(sh="oninput"in document,sh||(gm=document.createElement("div"),gm.setAttribute("oninput","return;"),sh=typeof gm.oninput=="function"),ih=sh):ih=!1,CS=ih&&(!document.documentMode||9<document.documentMode));var ih,sh,gm;function Iy(){cc&&(cc.detachEvent("onpropertychange",NS),bc=cc=null)}function NS(e){if(e.propertyName==="value"&&_f(bc)){var t=[];RS(t,bc,e,tg(e)),bS(nw,t)}}function iw(e,t,n){e==="focusin"?(Iy(),cc=t,bc=n,cc.attachEvent("onpropertychange",NS)):e==="focusout"&&Iy()}function sw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _f(bc)}function aw(e,t){if(e==="click")return _f(t)}function rw(e,t){if(e==="input"||e==="change")return _f(t)}function ow(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vi=typeof Object.is=="function"?Object.is:ow;function Ec(e,t){if(vi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Ym.call(t,s)||!vi(e[s],t[s]))return!1}return!0}function jm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Py(e,t){var n=Oy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Oy(n)}}function DS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?DS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function US(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jm(e.document)}return t}function sg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var lw=Fs&&"documentMode"in document&&11>=document.documentMode,mo=null,$m=null,uc=null,t0=!1;function By(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;t0||mo==null||mo!==jm(i)||(i=mo,"selectionStart"in i&&sg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),uc&&Ec(uc,i)||(uc=i,i=uf($m,"onSelect"),0<i.length&&(t=new mf("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=mo)))}function ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var go={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},_m={},LS={};Fs&&(LS=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function wr(e){if(_m[e])return _m[e];if(!go[e])return e;var t=go[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in LS)return _m[e]=t[n];return e}var IS=wr("animationend"),OS=wr("animationiteration"),PS=wr("animationstart"),cw=wr("transitionrun"),uw=wr("transitionstart"),hw=wr("transitioncancel"),BS=wr("transitionend"),zS=new Map,e0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");e0.push("scrollEnd");function Xi(e,t){zS.set(e,t),Ar(t,[e])}var fw=0;function Hs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=ki.identifierPrefix;var n=fw++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function zy(e){if(e==null||typeof e=="string")return e;var t=null,n=Do;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function qs(e,t){return e=zy(e),t=zy(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Gh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ri=[],_o=0,ag=0;function vf(){for(var e=_o,t=ag=_o=0;t<e;){var n=Ri[t];Ri[t++]=null;var i=Ri[t];Ri[t++]=null;var s=Ri[t];Ri[t++]=null;var a=Ri[t];if(Ri[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&FS(n,s,a)}}function yf(e,t,n,i){Ri[_o++]=e,Ri[_o++]=t,Ri[_o++]=n,Ri[_o++]=i,ag|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function rg(e,t,n,i){return yf(e,t,n,i),kh(e)}function Rr(e,t){return yf(e,null,null,t),kh(e)}function FS(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-gi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function kh(e){if(50<xc)throw xc=0,Dh=null,Error(st(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var vo={};function dw(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,t,n,i){return new dw(e,t,n,i)}function og(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bs(e,t){var n=e.alternate;return n===null?(n=ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function HS(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mh(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")og(i)&&(r=1);else if(typeof i=="string")r=FR(e,n,ps.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Gm:return e=ei(31,n,t,s),e.elementType=Gm,e.lanes=a,e;case uo:return dr(n.children,s,a,t);case iS:r=8,s|=24;break;case Fm:return e=ei(12,n,t,s|2),e.elementType=Fm,e.lanes=a,e;case Hm:return e=ei(13,n,t,s),e.elementType=Hm,e.lanes=a,e;case Vm:return e=ei(19,n,t,s),e.elementType=Vm,e.lanes=a,e;case tA:case km:return e=s|32,e=ei(30,n,t,e),e.elementType=km,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case us:r=10;break t;case sS:r=9;break t;case Z0:r=11;break t;case J0:r=14;break t;case ua:r=16,i=null;break t}r=29,n=Error(st(130,e===null?"null":typeof e,"")),i=null}return t=ei(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function dr(e,t,n,i){return e=ei(7,e,i,t),e.lanes=n,e}function vm(e,t,n){return e=ei(6,e,null,t),e.lanes=n,e}function VS(e){var t=ei(18,null,null,0);return t.stateNode=e,t}function ym(e,t,n){return t=ei(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fy=new WeakMap;function Ui(e,t){if(typeof e=="object"&&e!==null){var n=Fy.get(e);return n!==void 0?n:(t={value:e,source:t,stack:_y(t)},Fy.set(e,t),t)}return{value:e,source:t,stack:_y(t)}}var yo=[],xo=0,Xh=null,Tc=0,Ci=[],Ni=0,Ca=null,fs=1,ds="";function Os(e,t){yo[xo++]=Tc,yo[xo++]=Xh,Xh=e,Tc=t}function GS(e,t,n){Ci[Ni++]=fs,Ci[Ni++]=ds,Ci[Ni++]=Ca,Ca=e;var i=fs;e=ds;var s=32-gi(i)-1;i&=~(1<<s),n+=1;var a=32-gi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,fs=1<<32-gi(t)+s|n<<s|i,ds=a+e}else fs=1<<a|n<<s|i,ds=e}function xf(e){e.return!==null&&(Os(e,1),GS(e,1,0))}function lg(e){for(;e===Xh;)Xh=yo[--xo],yo[xo]=null,Tc=yo[--xo],yo[xo]=null;for(;e===Ca;)Ca=Ci[--Ni],Ci[Ni]=null,ds=Ci[--Ni],Ci[Ni]=null,fs=Ci[--Ni],Ci[Ni]=null}function kS(e,t){Ci[Ni++]=fs,Ci[Ni++]=ds,Ci[Ni++]=Ca,fs=t.id,ds=t.overflow,Ca=e}var vn=null,He=null,fe=!1,xa=null,Li=!1,n0=Error(st(519));function Na(e){var t=Error(st(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ac(Ui(t,e)),n0}function Hy(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Mn]=e,t[si]=i,n){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(n=0;n<Nc.length;n++)me(Nc[n],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),yS(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),SS(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Tb(t.textContent,n)?(i.popover!=null&&(me("beforetoggle",t),me("toggle",t)),i.onScroll!=null&&me("scroll",t),i.onScrollEnd!=null&&me("scrollend",t),i.onClick!=null&&(t.onclick=hs),t=!0):t=!1,t||Na(e,!0)}function Wh(e){for(vn=e.return;vn;)switch(vn.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:vn=vn.return}}function so(e){if(e!==vn)return!1;if(!fe)return Wh(e),fe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||H0(e.type,e.memoizedProps)),n=!n),n&&He&&Na(e),Wh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(st(317));He=Px(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(st(317));He=Px(e)}else t===27?(t=He,Oa(e.type)?(e=X0,X0=null,He=e):He=t):He=vn?Ii(e.stateNode.nextSibling):null;return!0}function _r(){He=vn=null,fe=!1}function xm(){var e=xa;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),xa=null),e}function Ac(e){xa===null?xa=[e]:xa.push(e)}var i0=_s(null),Cr=null,Ps=null;function ma(e,t,n){Ve(i0,t._currentValue),t._currentValue=n}function zs(e){e._currentValue=i0.current,En(i0)}function bh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function s0(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),bh(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(st(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),bh(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),bh(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function vr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(st(387));if(r=r.memoizedProps,r!==null){var o=s.type;vi(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Bh.current){if(r=s.alternate,r===null)throw Error(st(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}s=s.return}return e!==null&&s0(t,e,n,i),t.flags|=262144,e!==null}function qh(e){for(e=e.firstContext;e!==null;){if(!vi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yr(e){Cr=e,Ps=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return XS(Cr,e)}function ah(e,t){return Cr===null&&yr(e),XS(e,t)}function XS(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ps===null){if(e===null)throw Error(st(308));Ps=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ps=Ps.next=t;return n}var pw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},mw=hn.unstable_scheduleCallback,gw=hn.unstable_NormalPriority,sn={$$typeof:us,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cg(){return{controller:new pw,data:new Map,refCount:0}}function kc(e){e.refCount--,e.refCount===0&&mw(gw,function(){e.controller.abort()})}function Vy(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var rc=null;function _w(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var hc=null,a0=0,xr=0,To=null;function vw(e,t){if(hc===null){var n=hc=[];a0=0,xr=Bg(),To={status:"pending",value:void 0,then:function(i){n.push(i)}}}return a0++,t.then(Gy,Gy),t}function Gy(){if(--a0===0&&(rc=null,hc!==null)){To!==null&&(To.status="fulfilled");var e=hc;hc=null,xr=0,To=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yw(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var ky=Qt.S;Qt.S=function(e,t){if(lb=pi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vw(e,t),rc!==null)for(var n=Fo;n!==null;)Vy(n,rc),n=n.next;if(n=e.types,n!==null){for(var i=Fo;i!==null;)Vy(i,n),i=i.next;if(xr!==0){i=rc,i===null&&(i=rc=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}ky!==null&&ky(e,t)};var pr=_s(null);function ug(){var e=pr.current;return e!==null?e:Ie.pooledCache}function Eh(e,t){t===null?Ve(pr,pr.current):Ve(pr,t.pool)}function WS(){var e=ug();return e===null?null:{parent:sn._currentValue,pool:e}}var Yo=Error(st(460)),hg=Error(st(474)),Sf=Error(st(542)),Yh={then:function(){}};function Xy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(hs,hs),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qy(e),e===void 0&&!("reason"in t)?Error(st(600)):e;default:if(typeof t.status=="string")t.then(hs,hs);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(st(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qy(e),e}throw mr=t,Yo}}function lr(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(mr=n,Yo):n}}var mr=null;function Wy(){if(mr===null)throw Error(st(459));var e=mr;return mr=null,e}function qy(e){if(e===Yo||e===Sf)throw Error(st(483))}var Ao=null,wc=0;function rh(e){var t=wc;return wc+=1,Ao===null&&(Ao=[]),qS(Ao,e,t)}function oa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function oh(e,t){throw t.$$typeof===$T?Error(st(525)):(e=Object.prototype.toString.call(t),Error(st(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function YS(e){function t(d,_){if(e){var S=d.deletions;S===null?(d.deletions=[_],d.flags|=16):S.push(_)}}function n(d,_){if(!e)return null;for(;_!==null;)t(d,_),_=_.sibling;return null}function i(d){for(var _=new Map;d!==null;)d.key===null?_.set(d.index,d):_.set(d.key,d),d=d.sibling;return _}function s(d,_){return d=Bs(d,_),d.index=0,d.sibling=null,d}function a(d,_,S){return d.index=S,e?(S=d.alternate,S!==null?(S=S.index,S<_?(d.flags|=2,_):S):(d.flags|=134217730,_)):(d.flags|=1048576,_)}function r(d){return e&&d.alternate===null&&(d.flags|=134217730),d}function o(d,_,S,v){return _===null||_.tag!==6?(_=vm(S,d.mode,v),_.return=d,_):(_=s(_,S),_.return=d,_)}function l(d,_,S,v){var E=S.type;return E===uo?(d=h(d,_,S.props.children,v,S.key),oa(d,S),d):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ua&&lr(E)===_.type)?(_=s(_,S.props),oa(_,S),_.return=d,_):(_=Mh(S.type,S.key,S.props,null,d.mode,v),oa(_,S),_.return=d,_)}function c(d,_,S,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=ym(S,d.mode,v),_.return=d,_):(_=s(_,S.children||[]),_.return=d,_)}function h(d,_,S,v,E){return _===null||_.tag!==7?(_=dr(S,d.mode,v,E),_.return=d,_):(_=s(_,S),_.return=d,_)}function p(d,_,S){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=vm(""+_,d.mode,S),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qu:return S=Mh(_.type,_.key,_.props,null,d.mode,S),oa(S,_),S.return=d,S;case ic:return _=ym(_,d.mode,S),_.return=d,_;case ua:return _=lr(_),p(d,_,S)}if(sc(_)||Ql(_))return _=dr(_,d.mode,S,null),_.return=d,_;if(typeof _.then=="function")return p(d,rh(_),S);if(_.$$typeof===us)return p(d,ah(d,_),S);oh(d,_)}return null}function u(d,_,S,v){var E=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return E!==null?null:o(d,_,""+S,v);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qu:return S.key===E?l(d,_,S,v):null;case ic:return S.key===E?c(d,_,S,v):null;case ua:return S=lr(S),u(d,_,S,v)}if(sc(S)||Ql(S))return E!==null?null:h(d,_,S,v,null);if(typeof S.then=="function")return u(d,_,rh(S),v);if(S.$$typeof===us)return u(d,_,ah(d,S),v);oh(d,S)}return null}function f(d,_,S,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return d=d.get(S)||null,o(_,d,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qu:return d=d.get(v.key===null?S:v.key)||null,l(_,d,v,E);case ic:return d=d.get(v.key===null?S:v.key)||null,c(_,d,v,E);case ua:return v=lr(v),f(d,_,S,v,E)}if(sc(v)||Ql(v))return d=d.get(S)||null,h(_,d,v,E,null);if(typeof v.then=="function")return f(d,_,S,rh(v),E);if(v.$$typeof===us)return f(d,_,S,ah(_,v),E);oh(_,v)}return null}function g(d,_,S,v){for(var E=null,A=null,C=_,x=_=0,w=null;C!==null&&x<S.length;x++){C.index>x?(w=C,C=null):w=C.sibling;var R=u(d,C,S[x],v);if(R===null){C===null&&(C=w);break}e&&C&&R.alternate===null&&t(d,C),_=a(R,_,x),A===null?E=R:A.sibling=R,A=R,C=w}if(x===S.length)return n(d,C),fe&&Os(d,x),E;if(C===null){for(;x<S.length;x++)C=p(d,S[x],v),C!==null&&(_=a(C,_,x),A===null?E=C:A.sibling=C,A=C);return fe&&Os(d,x),E}for(C=i(C);x<S.length;x++)w=f(C,d,x,S[x],v),w!==null&&(e&&(R=w.alternate,R!==null&&C.delete(R.key===null?x:R.key)),_=a(w,_,x),A===null?E=w:A.sibling=w,A=w);return e&&C.forEach(function(U){return t(d,U)}),fe&&Os(d,x),E}function M(d,_,S,v){if(S==null)throw Error(st(151));for(var E=null,A=null,C=_,x=_=0,w=null,R=S.next();C!==null&&!R.done;x++,R=S.next()){C.index>x?(w=C,C=null):w=C.sibling;var U=u(d,C,R.value,v);if(U===null){C===null&&(C=w);break}e&&C&&U.alternate===null&&t(d,C),_=a(U,_,x),A===null?E=U:A.sibling=U,A=U,C=w}if(R.done)return n(d,C),fe&&Os(d,x),E;if(C===null){for(;!R.done;x++,R=S.next())R=p(d,R.value,v),R!==null&&(_=a(R,_,x),A===null?E=R:A.sibling=R,A=R);return fe&&Os(d,x),E}for(C=i(C);!R.done;x++,R=S.next())R=f(C,d,x,R.value,v),R!==null&&(e&&(w=R.alternate,w!==null&&C.delete(w.key===null?x:w.key)),_=a(R,_,x),A===null?E=R:A.sibling=R,A=R);return e&&C.forEach(function(F){return t(d,F)}),fe&&Os(d,x),E}function m(d,_,S,v){if(typeof S=="object"&&S!==null&&S.type===uo&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Qu:t:{for(var E=S.key;_!==null;){if(_.key===E){if(E=S.type,E===uo){if(_.tag===7){n(d,_.sibling),v=s(_,S.props.children),oa(v,S),v.return=d,d=v;break t}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ua&&lr(E)===_.type){n(d,_.sibling),v=s(_,S.props),oa(v,S),v.return=d,d=v;break t}n(d,_);break}else t(d,_);_=_.sibling}S.type===uo?(v=dr(S.props.children,d.mode,v,S.key),oa(v,S),v.return=d,d=v):(v=Mh(S.type,S.key,S.props,null,d.mode,v),oa(v,S),v.return=d,d=v)}return r(d);case ic:t:{for(E=S.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(d,_.sibling),v=s(_,S.children||[]),v.return=d,d=v;break t}else{n(d,_);break}else t(d,_);_=_.sibling}v=ym(S,d.mode,v),v.return=d,d=v}return r(d);case ua:return S=lr(S),m(d,_,S,v)}if(sc(S))return g(d,_,S,v);if(Ql(S)){if(E=Ql(S),typeof E!="function")throw Error(st(150));return S=E.call(S),M(d,_,S,v)}if(typeof S.then=="function")return m(d,_,rh(S),v);if(S.$$typeof===us)return m(d,_,ah(d,S),v);oh(d,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,_!==null&&_.tag===6?(n(d,_.sibling),v=s(_,S),v.return=d,d=v):(n(d,_),v=vm(S,d.mode,v),v.return=d,d=v),r(d)):n(d,_)}return function(d,_,S,v){try{wc=0;var E=m(d,_,S,v);return Ao=null,E}catch(C){if(C===Yo||C===Sf)throw C;var A=ei(29,C,null,d.mode);return A.lanes=v,A.return=d,A}}}var Sr=YS(!0),ZS=YS(!1),ha=!1;function fg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function r0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Se&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=kh(e),FS(e,null,n),t}return yf(e,i,t,n),kh(e)}function fc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,hS(e,n)}}function Sm(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var o0=!1;function dc(){if(o0){var e=To;if(e!==null)throw e}}function pc(e,t,n,i){o0=!1;var s=e.updateQueue;ha=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,f=u!==o.lane;if(f?(_e&u)===u:(i&u)===u){u!==0&&u===xr&&(o0=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,M=o;u=t;var m=n;switch(M.tag){case 1:if(g=M.payload,typeof g=="function"){p=g.call(m,p,u);break t}p=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=M.payload,u=typeof g=="function"?g.call(m,p,u):g,u==null)break t;p=Oe({},p,u);break t;case 2:ha=!0}}u=o.callback,u!==null&&(e.flags|=64,f&&(e.flags|=8192),f=s.callbacks,f===null?s.callbacks=[u]:f.push(u))}else f={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=f,l=p):h=h.next=f,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;f=o,o=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);h===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),La|=r,e.lanes=r,e.memoizedState=p}}function JS(e,t){if(typeof e!="function")throw Error(st(191,e));e.call(t)}function KS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)JS(n[e],t)}var Da=_s(null),Zh=_s(0);function Yy(e,t){e=Xs,Ve(Zh,e),Ve(Da,t),Xs=e|t.baseLanes}function l0(){Ve(Zh,Xs),Ve(Da,Da.current)}function dg(){Xs=Zh.current,En(Da),En(Zh)}var wn=_s(null),Ln=null;function ba(e){var t=e.alternate;Ve(Tn,Tn.current&1),Ve(wn,e),Ln===null&&(t===null||Da.current!==null||t.memoizedState!==null)&&(Ln=e)}function c0(e){Ve(Tn,Tn.current),Ve(wn,e),Ln===null&&(Ln=e)}function QS(e){e.tag===22?(Ve(Tn,Tn.current),Ve(wn,e),Ln===null&&(Ln=e)):Ea()}function Ea(){Ve(Tn,Tn.current),Ve(wn,wn.current)}function hi(e){En(wn),Ln===e&&(Ln=null),En(Tn)}var Tn=_s(0);function Rc(e,t){Ve(wn,wn.current),Ve(Tn,t)}function pg(e){En(Tn),En(wn),Ln===e&&(Ln=null)}function Jh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||k0(n)||Vg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vs=0,se=null,Ue=null,nn=null,Kh=!1,wo=!1,Mr=!1,Qh=0,Cc=0,Ro=null,xw=0;function je(){throw Error(st(321))}function mg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vi(e[n],t[n]))return!1;return!0}function gg(e,t,n,i,s,a){return Vs=a,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qt.H=e===null||e.memoizedState===null?RM:CM,Mr=!1,a=n(i,s),Mr=!1,wo&&(a=$S(t,n,i,s)),jS(e),a}function jS(e){Qt.H=jh;var t=Ue!==null&&Ue.next!==null;if(Vs=0,nn=Ue=se=null,Kh=!1,Cc=0,Ro=null,t)throw Error(st(300));e===null||an||(e=e.dependencies,e!==null&&qh(e)&&(an=!0))}function $S(e,t,n,i){se=e;var s=0;do{if(wo&&(Ro=null),Cc=0,wo=!1,25<=s)throw Error(st(301));if(s+=1,nn=Ue=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Qt.H=Rw,a=t(n,i)}while(wo);return a}function Sw(){var e=Qt.H,t=e.useState()[0];return t=typeof t.then=="function"?Xc(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(se.flags|=1024),t}function _g(){var e=Qh!==0;return Qh=0,e}function vg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yg(e){if(Kh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Kh=!1}Vs=0,nn=Ue=se=null,wo=!1,Cc=Qh=0,Ro=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?se.memoizedState=nn=e:nn=nn.next=e,nn}function en(){if(Ue===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=nn===null?se.memoizedState:nn.next;if(t!==null)nn=t,Ue=e;else{if(e===null)throw se.alternate===null?Error(st(467)):Error(st(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},nn===null?se.memoizedState=nn=e:nn=nn.next=e}return nn}function Mf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xc(e){var t=Cc;return Cc+=1,Ro===null&&(Ro=[]),e=qS(Ro,e,t),t=se,(nn===null?t.memoizedState:nn.next)===null&&(t=t.alternate,Qt.H=t===null||t.memoizedState===null?RM:CM),e}function bf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xc(e);if(e.$$typeof===nA)return;if(e.$$typeof===us)return bn(e)}throw Error(st(438,String(e)))}function xg(e){var t=null,n=se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=se.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Mf(),se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=eA;return t.index++,n}function Gs(e,t){return typeof t=="function"?t(e):t}function Th(e){var t=en();return Sg(t,Ue,e)}function Sg(e,t,n){var i=e.queue;if(i===null)throw Error(st(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(_e&p)===p:(Vs&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===xr&&(h=!0);else if((Vs&u)===u){c=c.next,u===xr&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,se.lanes|=u,La|=u;p=c.action,Mr&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,se.lanes|=p,La|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!vi(a,e.memoizedState)&&(an=!0,h&&(n=To,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Mm(e){var t=en(),n=t.queue;if(n===null)throw Error(st(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);vi(a,t.memoizedState)||(an=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function tM(e,t,n){var i=se,s=en(),a=fe;if(a){if(n===void 0)throw Error(st(407));n=n()}else n=t();var r=!vi((Ue||s).memoizedState,n);if(r&&(s.memoizedState=n,an=!0),s=s.queue,Mg(iM.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||nn!==null&&(nn.memoizedState.tag&1)!==0,Oo(e?9:8,{destroy:void 0},nM.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Ie===null)throw Error(st(349));a||(Vs&127)!==0||eM(i,t,n)}return n}function eM(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t=Mf(),se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nM(e,t,n,i){t.value=n,t.getSnapshot=i,sM(t)&&aM(e)}function iM(e,t,n){return n(function(){sM(t)&&aM(e)})}function sM(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vi(e,n)}catch{return!0}}function aM(e){var t=Rr(e,2);t!==null&&ni(t,e,2)}function u0(e){var t=Xn();if(typeof e=="function"){var n=e;if(e=n(),Mr){da(!0);try{n()}finally{da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:e},t}function rM(e,t,n,i){return e.baseState=n,Sg(e,Ue,typeof i=="function"?i:Gs)}function Mw(e,t,n,i,s){if(Tf(e))throw Error(st(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Qt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,oM(t,a)):(a.next=n.next,t.pending=n.next=a)}}function oM(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Qt.T,r={};r.types=a!==null?a.types:null,Qt.T=r;try{var o=n(s,i),l=Qt.S;l!==null&&l(r,o),Zy(e,t,o)}catch(c){h0(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Qt.T=a}}else try{a=n(s,i),Zy(e,t,a)}catch(c){h0(e,t,c)}}function Zy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Jy(e,t,i)},function(i){return h0(e,t,i)}):Jy(e,t,n)}function Jy(e,t,n){t.status="fulfilled",t.value=n,lM(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,oM(e,n)))}function h0(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,lM(t),t=t.next;while(t!==i)}e.action=null}function lM(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cM(e,t){return t}function Ky(e,t){if(fe){var n=Ie.formState;if(n!==null){t:{var i=se;if(fe){if(He){e:{for(var s=He,a=Li;s.nodeType!==8;){if(!a){s=null;break e}if(s=Ii(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){He=Ii(s.nextSibling),i=s.data==="F!";break t}}Na(i)}i=!1}i&&(t=n[0])}}return n=Xn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cM,lastRenderedState:t},n.queue=i,n=TM.bind(null,se,i),i.dispatch=n,i=u0(!1),a=Ag.bind(null,se,!1,i.queue),i=Xn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=Mw.bind(null,se,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Qy(e){var t=en();return uM(t,Ue,e)}function uM(e,t,n){if(t=Sg(e,t,cM)[0],e=Th(Gs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Xc(t)}catch(r){throw r===Yo?Sf:r}else i=t;t=en();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(se.flags|=2048,Oo(9,{destroy:void 0},bw.bind(null,s,n),null)),[i,a,e]}function bw(e,t){e.action=t}function jy(e){var t=en(),n=Ue;if(n!==null)return uM(t,n,e);en(),t=t.memoizedState,n=en();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Oo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=se.updateQueue,t===null&&(t=Mf(),se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function hM(){return en().memoizedState}function Ah(e,t,n,i){var s=Xn();se.flags|=e,s.memoizedState=Oo(1|t,{destroy:void 0},n,i===void 0?null:i)}function Ef(e,t,n,i){var s=en();i=i===void 0?null:i;var a=s.memoizedState.inst;Ue!==null&&i!==null&&mg(i,Ue.memoizedState.deps)?s.memoizedState=Oo(t,a,n,i):(se.flags|=e,s.memoizedState=Oo(1|t,a,n,i))}function $y(e,t){Ah(8390656,8,e,t)}function Mg(e,t){Ef(2048,8,e,t)}function Ew(e){se.flags|=4;var t=se.updateQueue;if(t===null)t=Mf(),se.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fM(e){var t=en().memoizedState;return Ew({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(st(440));return t.impl.apply(void 0,arguments)}}function dM(e,t){return Ef(4,2,e,t)}function pM(e,t){return Ef(4,4,e,t)}function mM(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gM(e,t,n){n=n!=null?n.concat([e]):null,Ef(4,4,mM.bind(null,t,e),n)}function bg(){}function _M(e,t){var n=en();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&mg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function vM(e,t){var n=en();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&mg(t,i[1]))return i[0];if(i=e(),Mr){da(!0);try{e()}finally{da(!1)}}return n.memoizedState=[i,t],i}function Eg(e,t,n){return n===void 0||(Vs&1073741824)!==0&&(_e&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ub(),se.lanes|=e,La|=e,n)}function yM(e,t,n,i){return vi(n,t)?n:Da.current!==null?(e=Eg(e,n,i),vi(e,t)||(an=!0),e):(Vs&106)===0||(Vs&1073741824)!==0&&(_e&261930)===0?(an=!0,e.memoizedState=n):(e=ub(),se.lanes|=e,La|=e,t)}function xM(e,t,n,i,s){var a=Me.p;Me.p=a!==0&&8>a?a:8;var r=Qt.T,o={};o.types=r!==null?r.types:null,Qt.T=o,Ag(e,!1,t,n);try{var l=s(),c=Qt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=yw(l,i);mc(e,t,h,_i(e))}else mc(e,t,i,_i(e))}catch(p){mc(e,t,{then:function(){},status:"rejected",reason:p},_i())}finally{Me.p=a,r!==null&&o.types!==null&&(r.types=o.types),Qt.T=r}}function Tw(){}function f0(e,t,n,i){if(e.tag!==5)throw Error(st(476));var s=SM(e).queue;xM(e,s,t,fr,n===null?Tw:function(){return MM(e),n(i)})}function SM(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fr,baseState:fr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:fr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function MM(e){var t=SM(e);t.next===null&&(t=e.alternate.memoizedState),mc(e,t.next.queue,{},_i())}function Tg(){return bn(Go)}function bM(){return en().memoizedState}function EM(){return en().memoizedState}function Aw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_i();e=Sa(n);var i=Ma(t,e,n);i!==null&&(ni(i,t,n),fc(i,t,n)),t={cache:cg()},e.payload=t;return}t=t.return}}function ww(e,t,n){var i=_i();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Tf(e)?AM(t,n):(n=rg(e,t,n,i),n!==null&&(ni(n,e,i),wM(n,t,i)))}function TM(e,t,n){var i=_i();mc(e,t,n,i)}function mc(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tf(e))AM(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,vi(o,r))return yf(e,t,s,0),Ie===null&&vf(),!1}catch{}if(n=rg(e,t,s,i),n!==null)return ni(n,e,i),wM(n,t,i),!0}return!1}function Ag(e,t,n,i){if(i={lane:2,revertLane:Bg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Tf(e)){if(t)throw Error(st(479))}else t=rg(e,n,i,2),t!==null&&ni(t,e,2)}function Tf(e){var t=e.alternate;return e===se||t!==null&&t===se}function AM(e,t){wo=Kh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wM(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,hS(e,n)}}var jh={readContext:bn,use:bf,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je,useEffectEvent:je},RM={readContext:bn,use:bf,useCallback:function(e,t){return Xn().memoizedState=[e,t===void 0?null:t],e},useContext:bn,useEffect:$y,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ah(4194308,4,mM.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ah(4194308,4,e,t)},useInsertionEffect:function(e,t){Ah(4,2,e,t)},useMemo:function(e,t){var n=Xn();t=t===void 0?null:t;var i=e();if(Mr){da(!0);try{e()}finally{da(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Xn();if(n!==void 0){var s=n(t);if(Mr){da(!0);try{n(t)}finally{da(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=ww.bind(null,se,e),[i.memoizedState,e]},useRef:function(e){var t=Xn();return e={current:e},t.memoizedState=e},useState:function(e){e=u0(e);var t=e.queue,n=TM.bind(null,se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bg,useDeferredValue:function(e,t){var n=Xn();return Eg(n,e,t)},useTransition:function(){var e=u0(!1);return e=xM.bind(null,se,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=se,s=Xn();if(fe){if(n===void 0)throw Error(st(407));n=n()}else{if(n=t(),Ie===null)throw Error(st(349));(_e&127)!==0||eM(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,$y(iM.bind(null,i,a,e),[e]),i.flags|=2048,Oo(9,{destroy:void 0},nM.bind(null,i,a,n,t),null),n},useId:function(){var e=Xn(),t=Ie.identifierPrefix;if(fe){var n=ds,i=fs;n=(i&~(1<<32-gi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Qh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=xw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Tg,useFormState:Ky,useActionState:Ky,useOptimistic:function(e){var t=Xn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ag.bind(null,se,!0,n),n.dispatch=t,[e,t]},useMemoCache:xg,useCacheRefresh:function(){return Xn().memoizedState=Aw.bind(null,se)},useEffectEvent:function(e){var t=Xn(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error(st(440));return n.impl.apply(void 0,arguments)}}},CM={readContext:bn,use:bf,useCallback:_M,useContext:bn,useEffect:Mg,useImperativeHandle:gM,useInsertionEffect:dM,useLayoutEffect:pM,useMemo:vM,useReducer:Th,useRef:hM,useState:function(){return Th(Gs)},useDebugValue:bg,useDeferredValue:function(e,t){var n=en();return yM(n,Ue.memoizedState,e,t)},useTransition:function(){var e=Th(Gs)[0],t=en().memoizedState;return[typeof e=="boolean"?e:Xc(e),t]},useSyncExternalStore:tM,useId:bM,useHostTransitionStatus:Tg,useFormState:Qy,useActionState:Qy,useOptimistic:function(e,t){var n=en();return rM(n,Ue,e,t)},useMemoCache:xg,useCacheRefresh:EM,useEffectEvent:fM},Rw={readContext:bn,use:bf,useCallback:_M,useContext:bn,useEffect:Mg,useImperativeHandle:gM,useInsertionEffect:dM,useLayoutEffect:pM,useMemo:vM,useReducer:Mm,useRef:hM,useState:function(){return Mm(Gs)},useDebugValue:bg,useDeferredValue:function(e,t){var n=en();return Ue===null?Eg(n,e,t):yM(n,Ue.memoizedState,e,t)},useTransition:function(){var e=Mm(Gs)[0],t=en().memoizedState;return[typeof e=="boolean"?e:Xc(e),t]},useSyncExternalStore:tM,useId:bM,useHostTransitionStatus:Tg,useFormState:jy,useActionState:jy,useOptimistic:function(e,t){var n=en();return Ue!==null?rM(n,Ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:xg,useCacheRefresh:EM,useEffectEvent:fM};function bm(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var d0={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=_i(),s=Sa(i);s.payload=t,n!=null&&(s.callback=n),t=Ma(e,s,i),t!==null&&(ni(t,e,i),fc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=_i(),s=Sa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ma(e,s,i),t!==null&&(ni(t,e,i),fc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_i(),i=Sa(n);i.tag=2,t!=null&&(i.callback=t),t=Ma(e,i,n),t!==null&&(ni(t,e,n),fc(t,e,n))}};function tx(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Ec(n,i)||!Ec(s,a):!0}function ex(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&d0.enqueueReplaceState(t,t.state,null)}function br(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Oe({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function NM(e){Gh(e)}function DM(e){console.error(e)}function UM(e){Gh(e)}function $h(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function nx(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function p0(e,t,n){return n=Sa(n),n.tag=3,n.payload={element:null},n.callback=function(){$h(e,t)},n}function LM(e){return e=Sa(e),e.tag=3,e}function IM(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){nx(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){nx(t,n,i),typeof s!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Cw(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&vr(t,n,s,!0),n=wn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Ln===null?lf():n.alternate===null&&$e===0&&($e=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Yh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Nm(e,i,s)),!1;case 22:return n.flags|=65536,i===Yh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Nm(e,i,s)),!1}throw Error(st(435,n.tag))}return Nm(e,i,s),lf(),!1}if(fe)return t=wn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==n0&&(e=Error(st(422),{cause:i}),Ac(Ui(e,n)))):(i!==n0&&(t=Error(st(423),{cause:i}),Ac(Ui(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ui(i,n),s=p0(e.stateNode,i,s),Sm(e,s),$e!==4&&($e=2)),!1;var a=Error(st(520),{cause:i});if(a=Ui(a,n),yc===null?yc=[a]:yc.push(a),$e!==4&&($e=2),t===null)return!0;i=Ui(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=p0(n.stateNode,i,e),Sm(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ta===null||!Ta.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=LM(s),IM(s,e,n,i),Sm(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var wg=Error(st(461)),an=!1;function cn(e,t,n,i){t.child=e===null?ZS(t,null,n,i):Sr(t,e.child,n,i)}function ix(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return yr(t),i=gg(e,t,n,r,a,s),o=_g(),e!==null&&!an?(vg(e,t,s),ks(e,t,s)):(fe&&o&&xf(t),t.flags|=1,cn(e,t,i,s),t.child)}function sx(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!og(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,OM(e,t,a,i,s)):(e=Mh(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Cg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ec,n(r,i)&&e.ref===t.ref)return ks(e,t,s)}return t.flags|=1,e=Bs(a,i),e.ref=t.ref,e.return=t,t.child=e}function OM(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Ec(a,i)&&e.ref===t.ref)if(an=!1,t.pendingProps=i=a,Cg(e,s))(e.flags&131072)!==0&&(an=!0);else return t.lanes=e.lanes,ks(e,t,s)}return m0(e,t,n,i,s)}function PM(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return ax(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Eh(t,a!==null?a.cachePool:null),a!==null?Yy(t,a):l0(),QS(t);else return i=t.lanes=536870912,ax(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Eh(t,a.cachePool),Yy(t,a),Ea(),t.memoizedState=null):(e!==null&&Eh(t,null),l0(),Ea());return cn(e,t,s,n),t.child}function gc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ax(e,t,n,i,s){var a=ug();return a=a===null?null:{parent:sn._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Eh(t,null),l0(),QS(t),e!==null&&vr(e,t,i,!0),t.childLanes=s,null}function wh(e,t){return t=Af({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function rx(e,t,n){return Sr(t,e.child,null,n),e=wh(t,t.pendingProps),e.flags|=2,hi(t),t.memoizedState=null,e}function Nw(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(i.mode==="hidden")return e=wh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},gc(null,e);if(c0(t),(e=He)?(e=Pb(e,Li),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:fs,overflow:ds}:null,retryLane:536870912,hydrationErrors:null},n=VS(e),n.return=t,t.child=n,vn=t,He=null)):e=null,e===null)throw Na(t);return t.lanes=536870912,null}return wh(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(c0(t),s)if(t.flags&256)t.flags&=-257,t=rx(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(st(558));else if(an||vr(e,t,n,!1),s=(n&e.childLanes)!==0,an||s){if(Da.current===null){if(i=Ie,i!==null&&(r=fS(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Rr(e,r),ni(i,e,r),wg;lf()}t=rx(e,t,n)}else e=a.treeContext,He=Ii(r.nextSibling),vn=t,fe=!0,xa=null,Li=!1,e!==null&&kS(t,e),t=wh(t,i),t.flags|=134221824;return t}return e=Bs(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ro(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(st(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function m0(e,t,n,i,s){return yr(t),n=gg(e,t,n,i,void 0,s),i=_g(),e!==null&&!an?(vg(e,t,s),ks(e,t,s)):(fe&&i&&xf(t),t.flags|=1,cn(e,t,n,s),t.child)}function ox(e,t,n,i,s,a){return yr(t),t.updateQueue=null,n=$S(t,i,n,s),jS(e),i=_g(),e!==null&&!an?(vg(e,t,a),ks(e,t,a)):(fe&&i&&xf(t),t.flags|=1,cn(e,t,n,a),t.child)}function lx(e,t,n,i,s){if(yr(t),t.stateNode===null){var a=vo,r=n.contextType;typeof r=="object"&&r!==null&&(a=bn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=d0,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},fg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?bn(r):vo,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(bm(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&d0.enqueueReplaceState(a,a.state,null),pc(t,i,a,s),dc(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=br(n,o);a.props=l;var c=a.context,h=n.contextType;r=vo,typeof h=="object"&&h!==null&&(r=bn(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&ex(t,a,i,r),ha=!1;var u=t.memoizedState;a.state=u,pc(t,i,a,s),dc(),c=t.memoizedState,o||u!==c||ha?(typeof p=="function"&&(bm(t,n,p,i),c=t.memoizedState),(l=ha||tx(t,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,r0(e,t),r=t.memoizedProps,h=br(n,r),a.props=h,p=t.pendingProps,u=a.context,c=n.contextType,l=vo,typeof c=="object"&&c!==null&&(l=bn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&ex(t,a,i,l),ha=!1,u=t.memoizedState,a.state=u,pc(t,i,a,s),dc();var f=t.memoizedState;r!==p||u!==f||ha||e!==null&&e.dependencies!==null&&qh(e.dependencies)?(typeof o=="function"&&(bm(t,n,o,i),f=t.memoizedState),(h=ha||tx(t,n,h,i,u,f,l)||e!==null&&e.dependencies!==null&&qh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,f,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,f,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),a.props=i,a.state=f,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,ro(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Sr(t,e.child,null,s),t.child=Sr(t,null,n,s)):cn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ks(e,t,s),e}function cx(e,t,n,i){return _r(),t.flags|=256,cn(e,t,n,i),t.child}var g0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _0(e){return{baseLanes:e,cachePool:WS()}}function v0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=di),e}function BM(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Tn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(s?ba(t):Ea(),(e=He)?(e=Pb(e,Li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:fs,overflow:ds}:null,retryLane:536870912,hydrationErrors:null},n=VS(e),n.return=t,t.child=n,vn=t,He=null)):e=null,e===null)throw Na(t);return Vg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(Ea(),s=t.mode,a=Af({mode:"hidden",children:a},s),i=dr(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=_0(n),i.childLanes=v0(e,r,n),t.memoizedState=g0,gc(null,i)):(ba(t),Rg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return Dw(e,t,a,r,i,l,o,n)}return s?(Ea(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Bs(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Bs(l,s):(s=dr(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,gc(null,i),i=t.child,s=e.child.memoizedState,s===null?s=_0(n):(a=s.cachePool,a!==null?(o=sn._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=WS(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=v0(e,r,n),t.memoizedState=g0,gc(e.child,i)):(ba(t),n=e.child,e=n.sibling,n=Bs(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Rg(e,t){return t=Af({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Af(e,t){return e=ei(22,e,null,t),e.lanes=0,e}function lh(e,t,n){return Sr(t,e.child,null,n),e=Rg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dw(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(ba(t),t.flags&=-257,lh(e,t,o)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,null):(Ea(),a=s.fallback,r=t.mode,s=Af({mode:"visible",children:s.children},r),a=dr(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,Sr(t,e.child,null,o),s=t.child,s.memoizedState=_0(o),s.childLanes=v0(e,i,o),t.memoizedState=g0,gc(null,s));if(ba(t),Vg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(st(419)),s.stack="",s.digest=i,Ac({value:s,source:null,stack:null})),lh(e,t,o)}if(an||vr(e,t,o,!1),i=(o&e.childLanes)!==0,an||i){if(Da.current!==null)return lh(e,t,o);if(i=Ie,i!==null&&(s=fS(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Rr(e,s),ni(i,e,s),wg;return k0(a)||lf(),lh(e,t,o)}return k0(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,He=Ii(a.nextSibling),vn=t,fe=!0,xa=null,Li=!1,e!==null&&kS(t,e),t=Rg(t,s.children),t.flags|=134221824,t)}function ux(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bh(e.return,t,n)}function hx(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Jh(n)===null&&(t=e),e=e.sibling}return t}function ch(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Em(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function y0(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Tn.current;if(t.flags&128)return Rc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Rc(t,r),s==="backwards"&&e!==null?(Em(e),cn(e,t,i,n),Em(e)):cn(e,t,i,n),i=fe?Tc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ux(e,n,t);else if(e.tag===19)ux(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=hx(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Em(t)),ch(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Jh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ch(t,!0,n,null,a,i);break;case"together":ch(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=hx(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ch(t,!1,s,n,a,i)}return t.child}function fx(e,t,n){var i=t.pendingProps;return ma(t,t.type,i.value),cn(e,t,i.children,n),t.child}function ks(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),La|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(vr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(st(153));if(t.child!==null){for(e=t.child,n=Bs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&qh(e)))}function Uw(e,t,n){switch(t.tag){case 3:zh(t,t.stateNode.containerInfo),ma(t,sn,e.memoizedState.cache),_r();break;case 27:case 5:qm(t);break;case 4:zh(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,c0(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return ba(t),t.flags|=128,null;i=vr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?BM(e,t,n):(ba(t),e=ks(e,t,n),e!==null?e.sibling:null)}ba(t);break;case 19:if(t.flags&128)return y0(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(vr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return y0(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Rc(t,Tn.current),i)break;return null;case 22:return t.lanes=0,PM(e,t,n,t.pendingProps);case 24:ma(t,sn,e.memoizedState.cache)}return ks(e,t,n)}function zM(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)an=!0;else{if(!Cg(e,n)&&(t.flags&128)===0)return an=!1,Uw(e,t,n);an=(e.flags&131072)!==0}else an=!1,fe&&(t.flags&1048576)!==0&&GS(t,Tc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=lr(t.elementType),t.type=e,typeof e=="function")og(e)?(i=br(e,i),t.tag=1,t=lx(null,t,e,i,n)):(t.tag=0,t=m0(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Z0){t.tag=11,t=ix(null,t,e,i,n);break t}else if(s===J0){t.tag=14,t=sx(null,t,e,i,n);break t}else if(s===us){t.tag=10,t.type=e,t=fx(null,t,n);break t}}throw t=Xm(e)||e,Error(st(306,t,""))}}return t;case 0:return m0(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=br(i,t.pendingProps),lx(e,t,i,s,n);case 3:t:{if(zh(t,t.stateNode.containerInfo),e===null)throw Error(st(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,r0(e,t),pc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ma(t,sn,i),i!==a.cache&&s0(t,[sn],n,!0),dc(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=cx(e,t,i,n);break t}else if(i!==s){s=Ui(Error(st(424)),t),Ac(s),t=cx(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,He=Ii(e.firstChild),vn=t,fe=!0,xa=null,Li=!0,n=ZS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(_r(),i===s){t=ks(e,t,n);break t}cn(e,t,i,n)}t=t.child}return t;case 26:return ro(e,t),e===null?(n=Fx(t.type,null,t.pendingProps,null))?t.memoizedState=n:fe||(t.stateNode=wb(t.type,t.pendingProps,ya.current,t)):t.memoizedState=Fx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qm(t),e===null&&fe&&(i=t.stateNode=Bb(t.type,t.pendingProps,ya.current),vn=t,Li=!0,s=He,Oa(t.type)?(X0=s,He=Ii(i.firstChild)):He=s),cn(e,t,t.pendingProps.children,n),ro(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((s=i=He)&&(i=ER(i,t.type,t.pendingProps,Li),i!==null?(t.stateNode=i,vn=t,He=Ii(i.firstChild),Li=!1,s=!0):s=!1),s||Na(t)),qm(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,H0(s,a)?i=null:r!==null&&H0(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=gg(e,t,Sw,null,null,n),Go._currentValue=s),ro(e,t),cn(e,t,i,n),t.child;case 6:return e===null&&fe&&((e=n=He)&&(n=TR(n,t.pendingProps,Li),n!==null?(t.stateNode=n,vn=t,He=null,e=!0):e=!1),e||Na(t)),null;case 13:return BM(e,t,n);case 4:return zh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Sr(t,null,i,n):cn(e,t,i,n),t.child;case 11:return ix(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,ro(e,t),cn(e,t,i,n),t.child;case 8:return cn(e,t,t.pendingProps.children,n),t.child;case 12:return cn(e,t,t.pendingProps.children,n),t.child;case 10:return fx(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,yr(t),s=bn(s),i=i(s),t.flags|=1,cn(e,t,i,n),t.child;case 14:return sx(e,t,t.type,t.pendingProps,n);case 15:return OM(e,t,t.type,t.pendingProps,n);case 19:return y0(e,t,n);case 31:return Nw(e,t,n);case 22:return PM(e,t,n,t.pendingProps);case 24:return yr(t),i=bn(sn),e===null?(s=ug(),s===null&&(s=Ie,a=cg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},fg(t),ma(t,sn,s)):((e.lanes&n)!==0&&(r0(e,t),pc(t,null,null,n),dc()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ma(t,sn,i)):(i=a.cache,ma(t,sn,i),i!==s.cache&&s0(t,[sn],n,!0))),cn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:fe&&xf(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:ro(e,t),cn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(st(156,t.tag))}function Is(e){e.flags|=4}function Tm(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Gx(t,i):Gx(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(db())e.flags|=8192;else throw mr=Yh,hg}else e.flags&=-16777217}function dx(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vb(t))if(db())e.flags|=8192;else throw mr=Yh,hg}function uh(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?cS():536870912,e.lanes|=t,Po|=t)}function $l(e,t){if(!fe)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Lw(e,t,n){var i=t.pendingProps;switch(lg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),zs(sn),Uo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(so(t)?Is(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xm())),Fe(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Is(t),a!==null?(Fe(t),dx(t,a)):(Fe(t),Tm(t,s,null,i,n))):a?a!==e.memoizedState?(Is(t),Fe(t),dx(t,a)):(Fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Is(t),Fe(t),Tm(t,s,e,i,n)),null;case 27:if(Fh(t),n=ya.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Is(t);else{if(!i){if(t.stateNode===null)throw Error(st(166));return Fe(t),t.subtreeFlags&=-33554433,null}e=ps.current,so(t)?Hy(t,e):(e=Bb(s,i,n),t.stateNode=e,Is(t))}return Fe(t),t.subtreeFlags&=-33554433,null;case 5:if(Fh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Is(t);else{if(!i){if(t.stateNode===null)throw Error(st(166));return Fe(t),t.subtreeFlags&=-33554433,null}if(a=ps.current,so(t))Hy(t,a);else{var r=Uc(ya.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[Mn]=t,a[si]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(An(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Is(t)}}return Fe(t),t.subtreeFlags&=-33554433,Tm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Is(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(st(166));if(e=ya.current,so(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=vn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Mn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Tb(e.nodeValue,n)),e||Na(t,!0)}else e=Uc(e).createTextNode(i),e[Mn]=t,t.stateNode=e}return Fe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=so(t),n!==null){if(e===null){if(!i)throw Error(st(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(st(557));e[Mn]=t}else _r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),e=!1}else n=xm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(hi(t),t):(hi(t),null);if((t.flags&128)!==0)throw Error(st(558))}return Fe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=so(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(st(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(st(317));s[Mn]=t}else _r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),s=!1}else s=xm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(hi(t),t):(hi(t),null)}return hi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),uh(t,t.updateQueue),Fe(t),null);case 4:return Uo(),e===null&&zg(t.stateNode.containerInfo),t.flags|=67108864,Fe(t),null;case 10:return zs(t.type),Fe(t),null;case 19:if(pg(t),i=t.memoizedState,i===null)return Fe(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)$l(i,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Jh(e),a!==null){for(t.flags|=128,$l(i,!1),e=a.updateQueue,t.updateQueue=e,uh(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)HS(n,e),n=n.sibling;return Rc(t,Tn.current&1|2),fe&&Os(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&pi()>rf&&(t.flags|=128,s=!0,$l(i,!1),t.lanes=4194304)}else{if(!s)if(e=Jh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,uh(t,e),$l(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!fe)return Fe(t),null}else 2*pi()-i.renderingStartTime>rf&&n!==536870912&&(t.flags|=128,s=!0,$l(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=pi(),e.sibling=null,a=Tn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||fe?Rc(t,a):(n=a,Ve(wn,t),Ve(Tn,n),Ln===null&&(Ln=t)),fe&&Os(t,i.treeForkCount),e}return Fe(t),null;case 22:case 23:return hi(t),dg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),n=t.updateQueue,n!==null&&uh(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&En(pr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zs(sn),Fe(t),null;case 25:return null;case 30:return t.flags|=33554432,Fe(t),null}throw Error(st(156,t.tag))}function Iw(e,t){switch(lg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zs(sn),Uo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fh(t),null;case 31:if(t.memoizedState!==null){if(hi(t),t.alternate===null)throw Error(st(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(hi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(st(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Uo(),null;case 10:return zs(t.type),null;case 22:case 23:return hi(t),dg(),e!==null&&En(pr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zs(sn),null;case 25:return null;default:return null}}function FM(e,t){switch(lg(t),t.tag){case 3:zs(sn),Uo();break;case 26:case 27:case 5:Fh(t);break;case 4:Uo();break;case 31:t.memoizedState!==null&&hi(t);break;case 13:hi(t);break;case 19:pg(t);break;case 10:zs(t.type);break;case 22:case 23:hi(t),dg(),e!==null&&En(pr);break;case 24:zs(sn)}}function Wc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){we(t,t.return,o)}}function Ua(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){we(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){we(t,t.return,h)}}function HM(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{KS(t,n)}catch(i){we(e,e.return,i)}}}function VM(e,t,n){n.props=br(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){we(e,t,i)}}function ls(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Hs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=Db(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new yi(e);ii(e.child,!1,MR,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){we(e,t,o)}}function Sn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){we(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){we(e,t,s)}else n.current=null}function tf(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Ob(e.stateNode,t[n])}function px(e){for(var t=e.return;t!==null&&(Dg(t)&&Ob(e.stateNode,t.stateNode),!Ng(t));)t=t.return}function _c(e){for(var t=e.return;t!==null&&(Dg(t)&&bR(e.stateNode,t.stateNode),!Ng(t));)t=t.return}function Ng(e){return e.tag===5||e.tag===3||e.tag===27}function Dg(e){return e&&e.tag===7&&e.stateNode!==null}function x0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){we(e,e.return,s)}}function Am(e,t,n){try{var i=e.stateNode;sR(i,e.type,n,t),i[si]=t}catch(s){we(e,e.return,s)}}function GM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function wm(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||GM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function S0(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hs)),tf(e,i),xe=!0;else if(s!==4&&(s===27&&(tf(e,i),i=null,Oa(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(S0(e,t,n,i),e=e.sibling;e!==null;)S0(e,t,n,i),e=e.sibling}function ef(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),tf(e,i),xe=!0;else if(s!==4&&(s===27&&(tf(e,i),i=null,Oa(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(ef(e,t,n,i),e=e.sibling;e!==null;)ef(e,t,n,i),e=e.sibling}function kM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);An(t,i,n),t[Mn]=e,t[si]=n}catch(a){we(e,e.return,a)}}var nf=!1,fi=null;function mx(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(nf=!0)}var cs=null;function gx(){var e=cs;return cs=null,e}var ti=0;function Zo(e,t,n,i,s){return ti=0,XM(e.child,t,n,i,s)}function XM(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=V0(r);i.push(o),o.view&&(a=!0)}else a||V0(r).view&&(a=!0);nf=!0,Rb(r,ti===0?t:t+"_"+ti,n),ti++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||XM(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function gs(e,t){for(;e!==null;)e.tag===5?Cb(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||gs(e.child,t)),e=e.sibling}function Rh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Rh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(st(544));var n=t.name;t=qs(t.default,t.share),t!=="none"&&(Zo(e,n,t,null,!1)||gs(e.child,!1))}e=e.sibling}}function M0(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Hs(i,n),a=qs(i.default,n.paired?i.share:i.enter);a!=="none"?Zo(e,s,a,null,!1)?(Rh(e),n.paired||t||Bo(e,i.onEnter)):gs(e.child,!1):Rh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)M0(e,t),e=e.sibling;else Rh(e)}function b0(e){if(fi!==null&&fi.size!==0){var t=fi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=qs(n.default,n.share);if(a!=="none"&&(Zo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Bo(e,n.onShare)):gs(e.child,!1)),t.delete(i),t.size===0)break}}}b0(e)}e=e.sibling}}}function E0(e){if(e.tag===30){var t=e.memoizedProps,n=Hs(t,e.stateNode),i=fi!==null?fi.get(n):void 0,s=qs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Zo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,fi.delete(n),Bo(e,t.onShare)):Bo(e,t.onExit):gs(e.child,!1)),fi!==null&&b0(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)E0(e),e=e.sibling;else fi!==null&&b0(e)}function WM(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Hs(t,e.stateNode);t=qs(t.default,t.update),e.flags&=-5,t!=="none"&&Zo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&WM(e);e=e.sibling}}function T0(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,gs(e.child,!1))}T0(e)}e=e.sibling}}function Ch(e){if(e.tag===30)e.stateNode.paired=null,gs(e.child,!1),T0(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ch(e),e=e.sibling;else T0(e)}function qM(e){for(e=e.child;e!==null;)e.tag===30?gs(e.child,!1):(e.subtreeFlags&33554432)!==0&&qM(e),e=e.sibling}function Ug(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&ti<a.length){var c=a[ti],h=V0(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Rb(l,ti===0?n:n+"_"+ti,s),o&&(e.flags&4)!==0||(cs===null&&(cs=[]),cs.push(l,ti===0?i:i+"_"+ti,t.memoizedProps)),ti++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Ug(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function YM(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Hs(n,i),a=qs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(uR)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;ti=0,s=Ug(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Bo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&YM(e,t);e=e.sibling}}var mn=!1,be=!1,as=!1,Rm=!1,_x=typeof WeakSet=="function"?WeakSet:Set,gn=null,rs=!1,oc=!1,sf=!1,A0=!1;function Ow(e,t,n){if(e=e.containerInfo,z0=ko,e=US(e),sg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,f=null;e:for(;;){for(var g;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)f=u,u=g;for(;;){if(u===e)break e;if(f===i&&++h===a&&(l=o),f===r&&++p===s&&(c=o),(g=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(F0={focusedElem:e,selectionRange:i},ko=!1,n=(n&335544064)===n,gn=t,t=n?9270:1024;gn!==null;){if(e=gn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&E0(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&mx(e),hh(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&E0(i),hh(n);continue}else if(i!==null&&i.memoizedState!==null){n&&mx(e),hh(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,gn=i):(n&&WM(e),hh(n))}}fi=null}function hh(e){for(;gn!==null;){var t=gn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=br(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){we(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)G0(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":G0(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Hs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=qs(s.default,s.update),s!=="none"&&Zo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(st(163))}if(i=t.sibling,i!==null){i.return=t.return,gn=i;break}gn=t.return}}function ZM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:os(e,n),i&4&&Wc(5,n);break;case 1:if(os(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){we(n,n.return,r)}else{var s=br(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){we(n,n.return,r)}}i&64&&HM(n),i&512&&ls(n,n.return);break;case 3:if(os(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{KS(e,t)}catch(r){we(n,n.return,r)}}break;case 27:t===null&&i&4&&kM(n);case 26:case 5:os(e,n),t===null&&i&4&&x0(n),i&512&&ls(n,n.return);break;case 12:os(e,n);break;case 31:os(e,n),i&4&&jM(e,n);break;case 13:os(e,n),i&4&&$M(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yw.bind(null,n),AR(e,n))));break;case 22:if(i=n.memoizedState!==null||mn,!i){var a=t!==null&&t.memoizedState!==null||be;t=mn,s=be,mn=i,(be=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Hi(e,n,i)):os(e,n),mn=t,be=s}break;case 30:os(e,n),i&512&&ls(n,n.return);break;case 7:i&512&&ls(n,n.return);default:os(e,n)}}function w0(e,t){for(e=e.child;e!==null;)JM(e,t),e=e.sibling}function JM(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){we(e,e.return,l)}R0(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,xe=!0}catch(l){we(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Lx(o,!0):Lx(e.stateNode,!1)}catch(l){we(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&w0(e,t);break;default:w0(e,t)}}function R0(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:JM(n,i);break t;case 22:n.memoizedState===null&&R0(n,i);break t;default:R0(n,i)}}e=e.sibling}}function KM(e){var t=e.alternate;t!==null&&(e.alternate=null,KM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pf(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,jn=!1;function Fi(e,t,n){for(n=n.child;n!==null;)QM(e,t,n),n=n.sibling}function QM(e,t,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(zc,n)}catch{}switch(n.tag){case 26:be||Sn(n,t),Fi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!be&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:be||Sn(n,t),_c(n);var i=We,s=jn;Oa(n.type)&&(We=n.stateNode,jn=!1),Fi(e,t,n),zb(n.stateNode,n.type,n.memoizedProps),We=i,jn=s;break;case 5:be||Sn(n,t),_c(n);case 6:if(n.tag===6&&_c(n),i=We,s=jn,We=null,Fi(e,t,n),We=i,jn=s,We!==null)if(jn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode),xe=!0}catch(a){we(n,t,a)}else try{We.removeChild(n.stateNode),xe=!0}catch(a){we(n,t,a)}break;case 18:We!==null&&(jn?(e=We,Ux(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Xo(e)):Ux(We,n.stateNode));break;case 4:i=We,s=jn,We=n.stateNode.containerInfo,jn=!0,Fi(e,t,n),We=i,jn=s;break;case 0:case 11:case 14:case 15:Ua(2,n,t),be||Ua(4,n,t),Fi(e,t,n);break;case 1:be||(Sn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&VM(n,t,i)),Fi(e,t,n);break;case 21:Fi(e,t,n);break;case 22:be=(i=be)||n.memoizedState!==null,Fi(e,t,n),be=i;break;case 30:Sn(n,t),Fi(e,t,n);break;case 7:be||Sn(n,t),Fi(e,t,n);break;default:Fi(e,t,n)}}function jM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xo(e)}catch(n){we(t,t.return,n)}}}function $M(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xo(e)}catch(n){we(t,t.return,n)}}function Pw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _x),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _x),t;default:throw Error(st(435,e.tag))}}function fh(e,t){var n=Pw(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=Zw.bind(null,e,i);i.then(s,s)}})}function Gn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Oa(l.type)){We=l.stateNode,jn=!1;break t}break;case 5:We=l.stateNode,jn=!1;break t;case 3:case 4:We=l.stateNode.containerInfo,jn=!0;break t}l=l.return}if(We===null)throw Error(st(160));QM(r,o,a),We=null,jn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)tb(t,e,n),t=t.sibling}var Vi=null;function tb(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Gn(t,e,n),kn(e),s&4&&(Ua(3,e,e.return),Wc(3,e),Ua(5,e,e.return));break;case 1:Gn(t,e,n),kn(e),s&512&&(be||i===null||Sn(i,i.return)),s&64&&mn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Vi,Gn(t,e,n),kn(e),s&512&&(be||i===null||Sn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(mn)e.stateNode=wb(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Vc]||i[Mn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),An(i,t,n),i[Mn]=e,_n(i),t=i;break t;case"link":if(a=Vx("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),An(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Vx("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),An(i,t,n),s.head.appendChild(i);break;default:throw Error(st(468,t))}i[Mn]=e,_n(i),t=i}e.stateNode=t}else mn||W0(a,e.type,e.stateNode);else e.stateNode=Hx(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||be||t.parentNode.removeChild(t)):s.count--,n===null?mn||W0(a,e.type,e.stateNode):Hx(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Am(e,e.memoizedProps,i.memoizedProps);break;case 27:Gn(t,e,n),kn(e),s&512&&(be||i===null||Sn(i,i.return)),i!==null&&s&4&&Am(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=as,as=!1,Gn(t,e,n),as=a,kn(e),s&512&&(be||i===null||Sn(i,i.return)),e.flags&32){t=e.stateNode;try{Io(t,""),xe=!0}catch(h){we(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Am(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Rm=!0);break;case 6:if(Gn(t,e,n),kn(e),s&4){if(e.stateNode===null)throw Error(st(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,xe=!0}catch(h){we(e,e.return,h)}}break;case 3:if(xe=!1,Lh=null,a=Vi,Vi=Lc(t.containerInfo),Gn(t,e,n),Vi=a,kn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Xo(t.containerInfo)}catch(h){we(e,e.return,h)}Rm&&(Rm=!1,eb(e)),xe=!1;break;case 4:s=as,as=mn,i=by(),a=Vi,Vi=Lc(e.stateNode.containerInfo),Gn(t,e,n),kn(e),Vi=a,xe&&oc&&(sf=!0),xe=i,as=s;break;case 12:Gn(t,e,n),kn(e);break;case 31:Gn(t,e,n),kn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,fh(e,t)));break;case 13:Gn(t,e,n),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(wf=pi()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,fh(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=mn,l=be,c=as;mn=o||a,as=c||a,be=l||r,Gn(t,e,n),be=l,as=c,mn=o,kn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||mn||be||(t=r||be,n=mn,i=be,mn=a||mn,be=t,ca(e,2),mn=n,be=i),!a&&as||w0(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,fh(e,n))));break;case 19:Gn(t,e,n),kn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,fh(e,t)));break;case 30:s&512&&(be||i===null||Sn(i,i.return)),s=by(),a=oc,r=(n&335544064)===n,o=e.memoizedProps,oc=r&&qs(o.default,o.update)!=="none",Gn(t,e,n),kn(e),r&&i!==null&&xe&&(e.flags|=4),oc=a,xe=s;break;case 21:break;case 7:s&512&&(be||i===null||Sn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Gn(t,e,n),kn(e)}}function kn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(GM(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Dg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Ng(s))break;s=s.return}var r=i;if(n==null)throw Error(st(160));switch(n.tag){case 27:var o=n.stateNode,l=wm(e);ef(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Io(c,""),n.flags&=-33);var h=wm(e);ef(e,h,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=wm(e);S0(e,u,p,r);break;default:throw Error(st(161))}}catch(f){we(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eb(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;eb(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,ko=!0,t.reset(),ko=!1),e=e.sibling}}function ao(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)nb(t,e),t=t.sibling;else YM(t,!1)}function nb(e,t){var n=e.alternate;if(n===null)M0(e,!1);else switch(e.tag){case 3:if(A0=rs=!1,gx(),ao(t,e),!rs&&!sf){if(e=cs,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];Cb(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),A0=!0}cs=null;break;case 5:ao(t,e);break;case 4:i=rs,rs=!1,ao(t,e),rs&&(sf=!0),rs=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?M0(e,!1):ao(t,e));break;case 30:i=rs,s=gx(),rs=!1,ao(t,e),rs&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Hs(a,r),r=Hs(n.memoizedProps,r);var o=qs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ti=0,t=Ug(e,n,t,r,o,a,!0),ti!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Bo(e,e.memoizedProps.onUpdate),cs=s):s!==null&&(s.push.apply(s,cs),cs=s),rs=(e.flags&32)!==0?!0:i;break;default:ao(t,e)}}function os(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ZM(e,t.alternate,t),t=t.sibling}function ca(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),ca(n,i);break;case 1:Sn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&VM(n,n.return,s),ca(n,i);break;case 27:(i&2)!==0&&zb(n.stateNode,n.type,n.memoizedProps);case 5:Sn(n,n.return),n.tag!==5&&n.tag!==27||_c(n),ca(n,i);break;case 6:_c(n);break;case 26:Sn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||be||s.parentNode.removeChild(s),ca(n,i);break;case 22:n.memoizedState===null&&ca(n,i);break;case 30:Sn(n,n.return),ca(n,i);break;case 7:Sn(n,n.return);default:ca(n,i)}e=e.sibling}}function Hi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Hi(s,a,n),Wc(4,a);break;case 1:if(Hi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){we(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)JS(c[s],l)}catch(h){we(i,i.return,h)}}o&&r&64&&HM(a),ls(a,a.return);break;case 27:(n&2)!==0&&kM(a);case 5:a.tag!==5&&a.tag!==27||px(a),Hi(s,a,n),o&&i===null&&r&4&&x0(a),ls(a,a.return);break;case 6:px(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||mn||W0(Lc(l.ownerDocument),a.type,l),Hi(s,a,n),o&&i===null&&r&4&&x0(a),ls(a,a.return);break;case 12:Hi(s,a,n);break;case 31:Hi(s,a,n),o&&r&4&&jM(s,a);break;case 13:Hi(s,a,n),o&&r&4&&$M(s,a);break;case 22:a.memoizedState===null&&Hi(s,a,n),ls(a,a.return);break;case 30:Hi(s,a,n),ls(a,a.return);break;case 7:ls(a,a.return);default:Hi(s,a,n)}t=t.sibling}}function Lg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&kc(n))}function Ig(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kc(e))}function wi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)ib(e,t,n,i),t=t.sibling;else s&&qM(t)}function ib(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ch(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:wi(e,t,n,i),a&2048&&Wc(9,t);break;case 1:wi(e,t,n,i);break;case 3:wi(e,t,n,i),s&&A0&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&kc(a)));break;case 12:if(a&2048){wi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){we(t,t.return,c)}}else wi(e,t,n,i);break;case 31:wi(e,t,n,i);break;case 13:wi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Ch(o),r._visibility&2?wi(e,t,n,i):vc(e,t)):(s&&o!==null&&o.memoizedState!==null&&Ch(t),r._visibility&2?wi(e,t,n,i):(r._visibility|=2,oo(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Lg(o,t);break;case 24:wi(e,t,n,i),a&2048&&Ig(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(gs(a.child,!0),gs(t.child,!0))),wi(e,t,n,i);break;default:wi(e,t,n,i)}}function oo(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:oo(a,r,o,l,s),Wc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?oo(a,r,o,l,s):vc(a,r):(h._visibility|=2,oo(a,r,o,l,s)),s&&c&2048&&Lg(r.alternate,r);break;case 24:oo(a,r,o,l,s),s&&c&2048&&Ig(r.alternate,r);break;default:oo(a,r,o,l,s)}t=t.sibling}}function vc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:vc(n,i),s&2048&&Lg(i.alternate,i);break;case 24:vc(n,i),s&2048&&Ig(i.alternate,i);break;default:vc(n,i)}t=t.sibling}}var cr=8192;function rr(e,t,n){if(e.subtreeFlags&cr)for(e=e.child;e!==null;)sb(e,t,n),e=e.sibling}function sb(e,t,n){switch(e.tag){case 26:rr(e,t,n),e.flags&cr&&(e.memoizedState!==null?HR(n,Vi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&kx(n,e)));break;case 5:rr(e,t,n),e.flags&cr&&(e=e.stateNode,(t&335544128)===t&&kx(n,e));break;case 3:case 4:var i=Vi;Vi=Lc(e.stateNode.containerInfo),rr(e,t,n),Vi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=cr,cr=16777216,rr(e,t,n),cr=i):rr(e,t,n));break;case 30:if((e.flags&cr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,fi===null&&(fi=new Map),fi.set(i,s)}rr(e,t,n);break;default:rr(e,t,n)}}function ab(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function tc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];gn=i,ob(i,e)}ab(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rb(e),e=e.sibling}function rb(e){switch(e.tag){case 0:case 11:case 15:tc(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:tc(e);break;case 12:tc(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Nh(e)):tc(e);break;default:tc(e)}}function Nh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];gn=i,ob(i,e)}ab(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ua(8,t,t.return),Nh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Nh(t));break;default:Nh(t)}e=e.sibling}}function ob(e,t){for(;gn!==null;){var n=gn;switch(n.tag){case 0:case 11:case 15:Ua(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:kc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,gn=i;else t:for(n=e;gn!==null;){i=gn;var s=i.sibling,a=i.return;if(KM(i),i===n){gn=null;break t}if(s!==null){s.return=a,gn=s;break t}gn=a}}}var Bw={getCacheForType:function(e){var t=bn(sn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return bn(sn).controller.signal}},zw=typeof WeakMap=="function"?WeakMap:Map,Se=0,Ie=null,ge=null,_e=0,Te=0,ci=null,ga=!1,Jo=!1,Og=!1,Xs=0,$e=0,La=0,gr=0,af=0,di=0,Po=0,yc=null,$n=null,C0=!1,wf=0,lb=0,rf=1/0,of=null,Ta=null,Je=0,ki=null,Er=null,ms=0,N0=0,D0=null,cb=null,Co=null,No=null,Do=null,xc=0,Dh=null;function _i(){return(Se&2)!==0&&_e!==0?_e&-_e:Qt.T!==null?Bg():dS()}function ub(){if(di===0)if((_e&536870912)===0||fe){var e=$u;$u<<=1,($u&3932160)===0&&($u=262144),di=e}else di=536870912;return e=wn.current,e!==null&&(e.flags|=32),di}function Bo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=Db(Hs(e.memoizedProps,n))),No===null&&(No=[]),No.push(t.bind(null,i))}}function ni(e,t,n){(e===Ie&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(zo(e,0),_a(e,_e,di,!1)),Hc(e,n),((Se&2)===0||e!==Ie)&&(e===Ie&&((Se&2)===0&&(gr|=n),$e===4&&_a(e,_e,di,!1)),vs(e))}function hb(e,t,n){if((Se&6)!==0)throw Error(st(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Fc(e,t),s=i?Vw(e,t):Cm(e,t,!0),a=i;do{if(s===0){Jo&&!i&&_a(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!Fw(n)){s=Cm(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=yc;var l=o.current.memoizedState.isDehydrated;if(l&&(zo(o,r).flags|=256),r=Cm(o,r,!1),r!==2&&r!==6){if(Og&&!l){o.errorRecoveryDisabledLanes|=a,gr|=a,s=4;break t}a=$n,$n=s,a!==null&&($n===null?$n=a:$n.push.apply($n,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){zo(e,0),_a(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(st(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:_a(i,t,di,!ga);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(st(329))}if((t&62914560)===t&&(s=wf+300-pi(),10<s)){if(_a(i,t,di,!ga),df(i,0,!0)!==0)break t;ms=t,i.timeoutHandle=Fg(vx.bind(null,i,n,$n,of,C0,t,di,gr,Po,ga,a,"Throttled",-0,0),s);break t}vx(i,n,$n,of,C0,t,di,gr,Po,ga,a,null,-0,0)}}break}while(!0);vs(e)}function vx(e,t,n,i,s,a,r,o,l,c,h,p,u,f){e.timeoutHandle=-1;var g=t.subtreeFlags,M=(a&335544064)===a;if(p=null,(M||g&8192||(g&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hs},fi=null,sb(t,a,p),M&&(g=p,M=e.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(g.count++,g.waitingForViewTransition=!0,g=Ic.bind(g),M.finished.then(g,g))),g=(a&62914560)===a?wf-pi():(a&4194048)===a?lb-pi():0,g=VR(p,g),g!==null)){ms=a,e.cancelPendingCommit=g(xx.bind(null,e,t,a,n,i,s,r,o,l,c,h,p,null,u,f)),_a(e,a,r,!c);return}xx(e,t,a,n,i,s,r,o,l,c,h,p)}function Fw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!vi(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _a(e,t,n,i){t=lS(e,t),t&=~af,t&=~gr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-gi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&uS(e,n,t)}function Rf(){return(Se&6)===0?(qc(0,!1),!1):!0}function Pg(){if(ge!==null){if(Te===0)var e=ge.return;else e=ge,Ps=Cr=null,yg(e),Ao=null,wc=0,e=ge;for(;e!==null;)FM(e.alternate,e),e=e.return;ge=null}}function zo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,oR(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ms=0,Pg(),Ie=e,ge=n=Bs(e.current,null),_e=t,Te=0,ci=null,ga=!1,Jo=Fc(e,t),Og=!1,Po=di=af=gr=La=$e=0,$n=yc=null,C0=!1,Xs=lS(e,t),vf(),n}function fb(e,t){se=null,Qt.H=jh,t===Yo||t===Sf?(t=Wy(),Te=3):t===hg?(t=Wy(),Te=4):Te=t===wg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ci=t,ge===null&&($e=1,$h(e,Ui(t,e.current)))}function db(){var e=wn.current;return e===null?!0:(_e&4194048)===_e?Ln===null:(_e&62914560)===_e||(_e&536870912)!==0?e===Ln:!1}function pb(){var e=Qt.H;return Qt.H=jh,e===null?jh:e}function mb(){var e=Qt.A;return Qt.A=Bw,e}function lf(){$e=4,ga||(_e&4194048)!==_e&&wn.current!==null||(Jo=!0),(La&134217727)===0&&(gr&134217727)===0||Ie===null||_a(Ie,_e,di,!1)}function Cm(e,t,n){var i=Se;Se|=2;var s=pb(),a=mb();(Ie!==e||_e!==t)&&(of=null,zo(e,t)),t=!1;var r=$e;t:do try{if(Te!==0&&ge!==null){var o=ge,l=ci;switch(Te){case 8:Pg(),r=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(t=!0);var c=Te;if(Te=0,ci=null,So(e,o,l,c),n&&Jo){r=0;break t}break;default:c=Te,Te=0,ci=null,So(e,o,l,c)}}Hw(),r=$e;break}catch(h){fb(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ps=Cr=null,Se=i,Qt.H=s,Qt.A=a,ge===null&&(Ie=null,_e=0,vf()),r}function Hw(){for(;ge!==null;)gb(ge)}function Vw(e,t){var n=Se;Se|=2;var i=pb(),s=mb();Ie!==e||_e!==t?(of=null,rf=pi()+500,zo(e,t)):Jo=Fc(e,t);t:do try{if(Te!==0&&ge!==null){t=ge;var a=ci;e:switch(Te){case 1:Te=0,ci=null,So(e,t,a,1);break;case 2:case 9:if(Xy(a)){Te=0,ci=null,yx(t);break}t=function(){Te!==2&&Te!==9||Ie!==e||(Te=7),vs(e)},a.then(t,t);break t;case 3:Te=7;break t;case 4:Te=5;break t;case 7:Xy(a)?(Te=0,ci=null,yx(t)):(Te=0,ci=null,So(e,t,a,7));break;case 5:var r=null;switch(ge.tag){case 26:r=ge.memoizedState;case 5:case 27:var o=ge;if(r?Vb(r):o.stateNode.complete){Te=0,ci=null;var l=o.sibling;if(l!==null)ge=l;else{var c=o.return;c!==null?(ge=c,Cf(c)):ge=null}break e}}Te=0,ci=null,So(e,t,a,5);break;case 6:Te=0,ci=null,So(e,t,a,6);break;case 8:Pg(),$e=6;break t;default:throw Error(st(462))}}Gw();break}catch(h){fb(e,h)}while(!0);return Ps=Cr=null,Qt.H=i,Qt.A=s,Se=n,ge!==null?0:(Ie=null,_e=0,vf(),$e)}function Gw(){for(;ge!==null&&!aA();)gb(ge)}function gb(e){var t=zM(e.alternate,e,Xs);e.memoizedProps=e.pendingProps,t===null?Cf(e):ge=t}function yx(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ox(n,t,t.pendingProps,t.type,void 0,_e);break;case 11:t=ox(n,t,t.pendingProps,t.type.render,t.ref,_e);break;case 5:yg(t);var i=t;i===vn&&(fe?(Wh(i),i.tag===5&&i.stateNode!=null&&(He=i.stateNode)):(Wh(i),fe=!0));default:FM(n,t),t=ge=HS(t,Xs),t=zM(n,t,Xs)}e.memoizedProps=e.pendingProps,t===null?Cf(e):ge=t}function So(e,t,n,i){Ps=Cr=null,yg(t),Ao=null,wc=0;var s=t.return;try{if(Cw(e,s,t,n,_e)){$e=1,$h(e,Ui(n,e.current)),ge=null;return}}catch(a){if(s!==null)throw ge=s,a;$e=1,$h(e,Ui(n,e.current)),ge=null;return}t.flags&32768?(fe||i===1?e=!0:Jo||(_e&536870912)!==0?e=!1:(ga=e=!0,(i===2||i===9||i===3||i===6)&&(i=wn.current,i!==null&&i.tag===13&&(i.flags|=16384))),_b(t,e)):Cf(t)}function Cf(e){var t=e;do{if((t.flags&32768)!==0){_b(t,ga);return}e=t.return;var n=Lw(t.alternate,t,Xs);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);$e===0&&($e=5)}function _b(e,t){do{var n=Iw(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);$e=6,ge=null}function xx(e,t,n,i,s,a,r,o,l,c,h,p){e.cancelPendingCommit=null;do Nf();while(Je!==0);if((Se&6)!==0)throw Error(st(327));if(t!==null){if(t===e.current)throw Error(st(177));e===Ie&&(ge=Ie=null,_e=0),Er=t,ki=e,ms=n,D0=s,cb=i,kw(e,t,n,r,o,l,p)}}function kw(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(N0=o,o|=ag,mA(e,n,o,i,s,a),No=null,(n&335544064)===n?(Do=_w(e),i=10262):(Do=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,Jw(Hh,function(){return O0(),null})):(e.callbackNode=null,e.callbackPriority=0),nf=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Qt.T,Qt.T=null,s=Me.p,Me.p=2,a=Se,Se|=4;try{Ow(e,t,n)}finally{Se=a,Me.p=s,Qt.T=i}}Je=1,nf?Co=dR(r,e.containerInfo,Do,U0,L0,Ww,I0,O0,Xw,null,null):(U0(),L0(),I0())}function Xw(e){if(Je!==0){var t=ki.onRecoverableError;t(e,{componentStack:null})}}function Ww(){Je===3&&(Je=0,nb(Er,ki),Je=4)}function U0(){if(Je===1){Je=0;var e=ki,t=Er,n=ms,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Qt.T,Qt.T=null;var s=Me.p;Me.p=2;var a=Se;Se|=4;try{oc=sf=!1,tb(t,e,n),n=F0;var r=US(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&DS(o.ownerDocument.documentElement,o)){if(l!==null&&sg(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var f=u.getSelection(),g=o.textContent.length,M=Math.min(l.start,g),m=l.end===void 0?M:Math.min(l.end,g);!f.extend&&M>m&&(r=m,m=M,M=r);var d=Py(o,M),_=Py(o,m);if(d&&_&&(f.rangeCount!==1||f.anchorNode!==d.node||f.anchorOffset!==d.offset||f.focusNode!==_.node||f.focusOffset!==_.offset)){var S=p.createRange();S.setStart(d.node,d.offset),f.removeAllRanges(),M>m?(f.addRange(S),f.extend(_.node,_.offset)):(S.setEnd(_.node,_.offset),f.addRange(S))}}}}for(p=[],f=o;f=f.parentNode;)f.nodeType===1&&p.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var v=p[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}ko=!!z0,F0=z0=null}finally{Se=a,Me.p=s,Qt.T=i}}e.current=t,Je=2}}function L0(){if(Je===2){Je=0;var e=ki,t=Er,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Qt.T,Qt.T=null;var i=Me.p;Me.p=2;var s=Se;Se|=4;try{ZM(e,t.alternate,t)}finally{Se=s,Me.p=i,Qt.T=n}}Je=3}}function I0(){if(Je===4||Je===3){Je=0;var e=Co;Co=null,rA();var t=ki,n=Er,i=ms,s=cb,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Je=5:(Je=0,Er=ki=null,vb(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Ta=null),j0(i),n=n.stateNode,mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(zc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Qt.T,a=Me.p,Me.p=2,Qt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Qt.T=n,Me.p=a}}if(s=No,r=Do,Do=null,s!==null&&(No=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(ms&3)!==0&&Nf(),vs(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Dh?xc++:(xc=0,Dh=t):(xc=0,Dh=null),qc(0,!1)}}function vb(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,kc(t)))}function Nf(){return Co!==null&&(Co.skipTransition(),Co=null),U0(),L0(),I0(),O0()}function O0(){if(Je!==5)return!1;var e=ki,t=N0;N0=0;var n=j0(ms),i=Qt.T,s=Me.p;try{Me.p=32>n?32:n,Qt.T=null,n=D0,D0=null;var a=ki,r=ms;if(Je=0,Er=ki=null,ms=0,(Se&6)!==0)throw Error(st(331));var o=Se;if(Se|=4,rb(a.current),ib(a,a.current,r,n),Se=o,qc(0,!1),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(zc,a)}catch{}return!0}finally{Me.p=s,Qt.T=i,vb(e,t)}}function Sx(e,t,n){t=Ui(n,t),t=p0(e.stateNode,t,2),e=Ma(e,t,2),e!==null&&(Hc(e,2),vs(e))}function we(e,t,n){if(e.tag===3)Sx(e,e,n);else for(;t!==null;){if(t.tag===3){Sx(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ta===null||!Ta.has(i))){e=Ui(n,e),n=LM(2),i=Ma(t,n,2),i!==null&&(IM(n,i,t,e),Hc(i,2),vs(i));break}}t=t.return}}function Nm(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new zw;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Og=!0,s.add(n),e=qw.bind(null,e,t,n),t.then(e,e))}function qw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ie===e&&(_e&n)===n&&(($e===4||$e===3&&(_e&62914560)===_e&&300>pi()-wf)&&(Se&2)===0?zo(e,0):af|=n,Po===_e&&(Po=0)),vs(e)}function yb(e,t){t===0&&(t=cS()),e=Rr(e,t),e!==null&&(Hc(e,t),vs(e))}function Yw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yb(e,n)}function Zw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(st(314))}i!==null&&i.delete(t),yb(e,n)}function Jw(e,t){return K0(e,t)}var Fo=null,lo=null,P0=!1,cf=!1,Dm=!1,va=0;function vs(e){e!==lo&&e.next===null&&(lo===null?Fo=lo=e:lo=lo.next=e),cf=!0,P0||(P0=!0,Qw())}function qc(e,t){if(!Dm&&cf){Dm=!0;do for(var n=!1,i=Fo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-gi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mx(i,a))}else a=_e,a=df(i,i===Ie?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Fc(i,a)||(n=!0,Mx(i,a));i=i.next}while(n);Dm=!1}}function Kw(){xb()}function xb(){cf=P0=!1;var e=0;va!==0&&rR()&&(e=va);for(var t=pi(),n=null,i=Fo;i!==null;){var s=i.next,a=Sb(i,t);a===0?(i.next=null,n===null?Fo=s:n.next=s,s===null&&(lo=n)):(n=i,(e!==0||(a&3)!==0)&&(cf=!0)),i=s}Je!==0&&Je!==5||qc(e,!1),va!==0&&(va=0)}function Sb(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-gi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=pA(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ie,n=_e,n=df(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&cm(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Fc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&cm(i),j0(n)){case 2:case 8:n=rS;break;case 32:n=Hh;break;case 268435456:n=oS;break;default:n=Hh}return i=Mb.bind(null,e),n=K0(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&cm(i),e.callbackPriority=2,e.callbackNode=null,2}function Mb(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Nf()&&e.callbackNode!==n)return null;var i=_e;return i=df(e,e===Ie?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(hb(e,i,t),Sb(e,pi()),e.callbackNode!=null&&e.callbackNode===n?Mb.bind(null,e):null)}function Mx(e,t){if(Nf())return null;hb(e,t,!0)}function Qw(){lR(function(){(Se&6)!==0?K0(aS,Kw):xb()})}function Bg(){if(va===0){var e=xr;e===0&&(e=ju,ju<<=1,(ju&261888)===0&&(ju=256)),va=e}return va}function bx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yh(e)}function jw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=bx((s[si]||null).action),r=i.submitter;r&&(t=(t=r[si]||null)?bx(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new mf("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(va!==0){var l=new FormData(s,r);f0(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),f0(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(dh=0;dh<e0.length;dh++)ph=e0[dh],Ex=ph.toLowerCase(),Tx=ph[0].toUpperCase()+ph.slice(1),Xi(Ex,"on"+Tx);var ph,Ex,Tx,dh;Xi(IS,"onAnimationEnd");Xi(OS,"onAnimationIteration");Xi(PS,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(cw,"onTransitionRun");Xi(uw,"onTransitionStart");Xi(hw,"onTransitionCancel");Xi(BS,"onTransitionEnd");Lo("onMouseEnter",["mouseout","mouseover"]);Lo("onMouseLeave",["mouseout","mouseover"]);Lo("onPointerEnter",["pointerout","pointerover"]);Lo("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$w=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nc));function bb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Gh(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Gh(h)}s.currentTarget=null,a=l}}}}function me(e,t){var n=t[yy];n===void 0&&(n=t[yy]=new Set);var i=e+"__bubble";n.has(i)||(Eb(t,e,2,!1),n.add(i))}function Um(e,t,n){var i=0;t&&(i|=4),Eb(n,e,i,t)}var mh="_reactListening"+Math.random().toString(36).slice(2);function zg(e){if(!e[mh]){e[mh]=!0,mS.forEach(function(n){n!=="selectionchange"&&($w.has(n)||Um(n,!1,e),Um(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mh]||(t[mh]=!0,Um("selectionchange",!1,t))}}function Eb(e,t,n,i){switch(Zb(t)){case 2:var s=WR;break;case 8:s=qR;break;default:s=Wg}n=s.bind(null,t,n,e),s=void 0,!Qm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Lm(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=ur(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}bS(function(){var c=a,h=tg(n),p=[];t:{var u=zS.get(e);if(u!==void 0){var f=mf,g=e;switch(e){case"keypress":if(Sh(n)===0)break t;case"keydown":case"keyup":f=FA;break;case"focusin":g="focus",f=mm;break;case"focusout":g="blur",f=mm;break;case"beforeblur":case"afterblur":f=mm;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=wy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=wA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=XA;break;case IS:case OS:case PS:f=NA;break;case BS:f=qA;break;case"scroll":case"scrollend":f=TA;break;case"wheel":f=ZA;break;case"copy":case"cut":case"paste":f=UA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Cy;break;case"submit":f=GA;break;case"toggle":case"beforetoggle":f=KA}var M=(t&4)!==0,m=!M&&(e==="scroll"||e==="scrollend"),d=M?u!==null?u+"Capture":null:u;M=[];for(var _=c,S;_!==null;){var v=_;if(S=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||S===null||d===null||(v=Mc(_,d),v!=null&&M.push(Dc(_,v,S))),m)break;_=_.return}0<M.length&&(u=new f(u,g,null,n,h),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",f&&n!==Km&&(g=n.relatedTarget||n.fromElement)&&(ur(g)||g[Wo]))break t;(u||f)&&(g=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,u?(f=n.relatedTarget||n.toElement,u=c,f=f?ur(f):null,f!==null&&(m=Bc(f),M=f.tag,f!==m||M!==5&&M!==27&&M!==6)&&(f=null)):(u=null,f=c),u!==f&&(M=wy,v="onMouseLeave",d="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(M=Cy,v="onPointerLeave",d="onPointerEnter",_="pointer"),m=u==null?g:ac(u),S=f==null?g:ac(f),g=new M(v,_+"leave",u,n,h),g.target=m,g.relatedTarget=S,v=null,ur(h)===c&&(M=new M(d,_+"enter",f,n,h),M.target=S,M.relatedTarget=m,v=M),m=v,M=u&&f?zm(u,f,tR):null,u!==null&&Ax(p,g,u,M,!1),f!==null&&m!==null&&Ax(p,m,f,M,!0)))}t:{if(u=c?ac(c):window,f=u.nodeName&&u.nodeName.toLowerCase(),f==="select"||f==="input"&&u.type==="file")var E=Ly;else if(Uy(u))if(CS)E=rw;else{E=sw;var A=iw}else f=u.nodeName,!f||f.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&$0(c.elementType)&&(E=Ly):E=aw;if(E&&(E=E(e,c))){RS(p,E,n,h);break t}A&&A(e,u,c)}switch(A=c?ac(c):window,e){case"focusin":(Uy(A)||A.contentEditable==="true")&&(mo=A,$m=c,uc=null);break;case"focusout":uc=$m=mo=null;break;case"mousedown":t0=!0;break;case"contextmenu":case"mouseup":case"dragend":t0=!1,By(p,n,h);break;case"selectionchange":if(lw)break;case"keydown":case"keyup":By(p,n,h)}var C;if(ig)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else po?AS(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(TS&&n.locale!=="ko"&&(po||x!=="onCompositionStart"?x==="onCompositionEnd"&&po&&(C=ES()):(pa=h,eg="value"in pa?pa.value:pa.textContent,po=!0)),A=uf(c,x),0<A.length&&(x=new Ry(x,e,null,n,h),p.push({event:x,listeners:A}),C?x.data=C:(C=wS(n),C!==null&&(x.data=C)))),(C=jA?$A(e,n):tw(e,n))&&(x=uf(c,"onBeforeInput"),0<x.length&&(A=new Ry("onBeforeInput","beforeinput",null,n,h),p.push({event:A,listeners:x}),A.data=C)),jw(p,e,c,n,h)}bb(p,t)})}function Dc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uf(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Mc(e,n),s!=null&&i.unshift(Dc(e,s,a)),s=Mc(e,t),s!=null&&i.push(Dc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function tR(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ax(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Mc(n,a),c!=null&&r.unshift(Dc(n,c,l))):s||(c=Mc(n,a),c!=null&&r.push(Dc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var eR=/\r\n?/g,nR=/\u0000|\uFFFD/g;function wx(e){return(typeof e=="string"?e:""+e).replace(eR,`
`).replace(nR,"")}function Tb(e,t){return t=wx(t),wx(e)===t}function Ae(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Io(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Io(e,""+i);else return;break;case"className":eh(e,"class",i);break;case"tabIndex":eh(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":eh(e,n,i);break;case"style":MS(e,i,a);return;case"data":if(t!=="object"){eh(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=yh(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",s.name,s,null),Ae(e,t,"formEncType",s.formEncType,s,null),Ae(e,t,"formMethod",s.formMethod,s,null),Ae(e,t,"formTarget",s.formTarget,s,null)):(Ae(e,t,"encType",s.encType,s,null),Ae(e,t,"method",s.method,s,null),Ae(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=yh(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=hs);return;case"onScroll":i!=null&&me("scroll",e);return;case"onScrollEnd":i!=null&&me("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(st(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(st(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=yh(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":me("beforetoggle",e),me("toggle",e),vh(e,"popover",i);break;case"xlinkActuate":Ls(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ls(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ls(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ls(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ls(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ls(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ls(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ls(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ls(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":vh(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=bA.get(n)||n,vh(e,n,i);else return}xe=!0}function B0(e,t,n,i,s,a){switch(n){case"style":MS(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(st(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(st(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Io(e,i);else if(typeof i=="number"||typeof i=="bigint")Io(e,""+i);else return;break;case"onScroll":i!=null&&me("scroll",e);return;case"onScrollEnd":i!=null&&me("scrollend",e);return;case"onClick":i!=null&&(e.onclick=hs);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!gS.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[si]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}xe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):vh(e,n,i)}return}xe=!0}function An(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(st(137,t));default:Ae(e,t,a,r,n,null)}}s&&Ae(e,t,"srcSet",n.srcSet,n,null),i&&Ae(e,t,"src",n.src,n,null);return;case"input":me("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(st(137,t));break;default:Ae(e,t,i,h,n,null)}}yS(e,a,o,l,c,r,s,!1);return;case"select":me("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Ae(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?bo(e,!!i,t,!1):n!=null&&bo(e,!!i,n,!0);return;case"textarea":me("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(st(91));break;default:Ae(e,t,r,o,n,null)}SS(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ae(e,t,l,i,n,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(i=0;i<Nc.length;i++)me(Nc[i],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(st(137,t));default:Ae(e,t,c,i,n,null)}return;default:if($0(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&B0(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Ae(e,t,o,i,n,null))}var iR={};function sR(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(f in n){var p=n[f];if(n.hasOwnProperty(f)&&p!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(f)||Ae(e,t,f,null,i,p)}}for(var u in i){var f=i[u];if(p=n[u],i.hasOwnProperty(u)&&(f!=null||p!=null))switch(u){case"type":f!==p&&(xe=!0),a=f;break;case"name":f!==p&&(xe=!0),s=f;break;case"checked":f!==p&&(xe=!0),c=f;break;case"defaultChecked":f!==p&&(xe=!0),h=f;break;case"value":f!==p&&(xe=!0),r=f;break;case"defaultValue":f!==p&&(xe=!0),o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(st(137,t));break;default:f!==p&&Ae(e,t,u,f,i,p)}}Jm(e,r,o,l,c,h,a,s);return;case"select":f=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":f=l;default:i.hasOwnProperty(a)||Ae(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(xe=!0),u=a;break;case"defaultValue":a!==l&&(xe=!0),o=a;break;case"multiple":a!==l&&(xe=!0),r=a;default:a!==l&&Ae(e,t,s,a,i,l)}t=o,n=r,i=f,u!=null?bo(e,!!n,u,!1):!!i!=!!n&&(t!=null?bo(e,!!n,t,!0):bo(e,!!n,n?[]:"",!1));return;case"textarea":f=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ae(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(xe=!0),u=s;break;case"defaultValue":s!==a&&(xe=!0),f=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(st(91));break;default:s!==a&&Ae(e,t,r,s,i,a)}xS(e,u,f);return;case"option":for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!=null&&!i.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Ae(e,t,g,null,i,u));for(l in i)u=i[l],f=n[l],i.hasOwnProperty(l)&&u!==f&&(u!=null||f!=null)&&(l==="selected"?(u!==f&&(xe=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):Ae(e,t,l,u,i,f));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&Ae(e,t,M,null,i,u);for(c in i)if(u=i[c],f=n[c],i.hasOwnProperty(c)&&u!==f&&(u!=null||f!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(st(137,t));break;default:Ae(e,t,c,u,i,f)}return;default:if($0(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&B0(e,t,m,void 0,i,u);for(h in i)u=i[h],f=n[h],!i.hasOwnProperty(h)||u===f||u===void 0&&f===void 0||B0(e,t,h,u,i,f);return}}for(var d in n)u=n[d],n.hasOwnProperty(d)&&u!=null&&!i.hasOwnProperty(d)&&Ae(e,t,d,null,i,u);for(p in i)u=i[p],f=n[p],!i.hasOwnProperty(p)||u===f||u==null&&f==null||Ae(e,t,p,u,i,f)}function Rx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function aR(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Rx(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&Rx(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var z0=null,F0=null;function Uc(e){return e.nodeType===9?e:e.ownerDocument}function Cx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ab(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wb(e,t,n,i){return n=Uc(n).createElement(e),n[Mn]=i,n[si]=t,An(n,e,t),_n(n),n}function H0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Im=null;function rR(){var e=window.event;return e&&e.type==="popstate"?e===Im?!1:(Im=e,!0):(Im=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,oR=typeof clearTimeout=="function"?clearTimeout:void 0,Nx=typeof Promise=="function"?Promise:void 0,Dx=typeof requestAnimationFrame=="function"?requestAnimationFrame:Fg,lR=typeof queueMicrotask=="function"?queueMicrotask:typeof Nx<"u"?function(e){return Nx.resolve(null).then(e).catch(cR)}:Fg;function cR(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Ux(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Xo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Pm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Pm(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Vc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Pm(e.ownerDocument.body);n=s}while(n);Xo(t)}function Lx(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Rb(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Cb(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Nb(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function V0(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return Nb(t,n,e)}function uR(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Nb(t,n,e)}function hR(e){return e.documentElement.clientHeight}function fR(e){this.addEventListener("load",e),this.addEventListener("error",e)}function dR(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,f=u.navigation&&u.navigation.transition,g=c.fonts.status;i();var M=[];if(g==="loaded"&&(hR(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),g=M.length,e!==null)for(var m=e.suspenseyImages,d=0,_=0;_<m.length;_++){var S=m[_];if(!S.complete){var v=S.getBoundingClientRect();if(0<v.bottom&&0<v.right&&v.top<u.innerHeight&&v.left<u.innerWidth){if(d+=Gb(S),d>Ih){M.length=g;break}S=new Promise(fR.bind(S)),M.push(S)}}}if(0<M.length)return u=Promise.race([Promise.all(M),new Promise(function(E){return setTimeout(E,500)})]).then(s,s),(f?Promise.allSettled([f.finished,u]):u).then(a,a);if(s(),f)return f.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),f=0;f<u.length;f++){var g=u[f],M=g.effect,m=M.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(g),g=M.getKeyframes();for(var d=m=void 0,_=!0,S=0;S<g.length;S++){var v=g[S],E=v.width;if(m===void 0)m=E;else if(m!==E){_=!1;break}if(E=v.height,d===void 0)d=E;else if(d!==E){_=!1;break}delete v.width,delete v.height,v.transform==="none"&&delete v.transform}_&&m!==void 0&&d!==void 0&&(M.setKeyframes(g),_=getComputedStyle(M.target,M.pseudoElement),_.width!==m||_.height!==d)&&(_=g[0],_.width=m,_.height=d,_=g[g.length-1],_.width=m,_.height=d,M.setKeyframes(g))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function hr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}hr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Oe({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};hr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};hr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Db(e){return{name:e,group:new hr("group",e),imagePair:new hr("image-pair",e),old:new hr("old",e),new:new hr("new",e)}}function yi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}yi.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Ub(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Ho(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),ii(this._fragmentFiber.child,!1,pR,e,o,i)}this._eventListeners=a}};function pR(e,t,n,i){return un(e).addEventListener(t,n,i),!1}yi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=Ub(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Ho(s.optionsOrUseCapture),ii(this._fragmentFiber.child,!1,mR,e,n,s),i.splice(t,1),a!==null&&a()}};function mR(e,t,n,i){return un(e).removeEventListener(t,n,i),!1}function Ho(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ix(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Ub(e,t,n,i){if(e.length===0)return-1;i=Ix(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Ix(a.optionsOrUseCapture)===i)return s}return-1}yi.prototype.dispatchEvent=function(e){var t=Tr(this._fragmentFiber);if(t===null)return!0;t=un(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Ho(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Ho(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};yi.prototype.focus=function(e){ii(this._fragmentFiber.child,!0,Lb,e,void 0,void 0)};function Lb(e,t){return e.tag===6?!1:(e=un(e),wR(e,t))}yi.prototype.focusLast=function(e){var t=[];ii(this._fragmentFiber.child,!0,Hg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Lb(t[n],e);n--);};function Hg(e,t){return t.push(e),!1}yi.prototype.blur=function(){var e=Tr(this._fragmentFiber);e!==null&&(e=un(e),e=Uc(e).activeElement,e!==null&&ii(this._fragmentFiber.child,!1,gR,e,void 0,void 0))};function gR(e,t){return e.tag===6?!1:(e=un(e),e===t||e.contains(t)?(t.blur(),!0):!1)}yi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),ii(this._fragmentFiber.child,!1,_R,e,void 0,void 0)};function _R(e,t){return e.tag===6||(e=un(e),t.observe(e)),!1}yi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ii(this._fragmentFiber.child,!1,vR,e,void 0,void 0);for(var n=t=0;n<Gi.length;n++){var i=Gi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Gi[t++]=i}Gi.length=t}};function vR(e,t){return e.tag===6||(e=un(e),t.unobserve(e)),!1}var Gi=[],Om=!1;function yR(e,t,n){Gi.push({fragmentInstance:e,observer:t,instance:n}),Om||(Om=!0,RR(function(){Om=!1;var i=Gi;Gi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}yi.prototype.getClientRects=function(){var e=[];return ii(this._fragmentFiber.child,!1,xR,e,void 0,void 0),e};function xR(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=un(e),t.push.apply(t,e.getClientRects());return!1}yi.prototype.getRootNode=function(e){var t=Tr(this._fragmentFiber);return t===null?this:un(t).getRootNode(e)};yi.prototype.compareDocumentPosition=function(e){var t=Tr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ii(this._fragmentFiber.child,!1,Hg,n,void 0,void 0);var i=un(t);if(n.length===0){if(n=i,dy(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=eS(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=un(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=un(n[0]),s=un(n[n.length-1]);var a=dy(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||SR(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function SR(e,t,n,i,s){var a=ur(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Tr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=zm(n,a,py),t===null?t=!1:(ii(t,!0,QT,a,n),a=co,co=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=zm(i,a,py),t===null?t=!1:(ii(t,!0,jT,a,i),a=co,Bm=co=null,t=a!==null)),t):!1}function Ox(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}yi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(st(566));var t=[];ii(this._fragmentFiber.child,!1,Hg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=eS(this._fragmentFiber);if(i=n?i[1]||i[0]||Tr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=un(i),Ox(e,n);return}if(i=un(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=un(s),Ox(s,n)):un(s).scrollIntoView(e),i+=n?-1:1}};function MR(e,t){return e=un(e),Ib(e,t),!1}function Ib(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Ob(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Ho(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Gi.length;o++){var l=Gi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Gi[r++]=l)}Gi.length=r,a.observe(e)}),Ib(e,t))}function bR(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Ho(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?yR(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function G0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":G0(n),pf(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ER(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Vc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Ii(e.nextSibling),e===null)break}return null}function TR(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ii(e.nextSibling),e===null))return null;return e}function Pb(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ii(e.nextSibling),e===null))return null;return e}function k0(e){return e.data==="$?"||e.data==="$~"}function Vg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function AR(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var X0=null;function Px(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ii(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Bx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function wR(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function RR(e){Dx(function(){Dx(function(t){return e(t)})})}function Bb(e,t,n){switch(t=Uc(n),e){case"html":if(e=t.documentElement,!e)throw Error(st(452));return e;case"head":if(e=t.head,!e)throw Error(st(453));return e;case"body":if(e=t.body,!e)throw Error(st(454));return e;default:throw Error(st(451))}}function zb(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&Ae(e,t,i,null,iR,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===hs&&(e.onclick=null),pf(e)}function Pm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pf(e)}var Oi=new Map,zx=new Set;function Lc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ys=Me.d;Me.d={f:CR,r:NR,D:DR,C:UR,L:LR,m:IR,X:PR,S:OR,M:BR};function CR(){var e=Ys.f(),t=Rf();return e||t}function NR(e){var t=qo(e);t!==null&&t.tag===5&&t.type==="form"?MM(t):Ys.r(e)}var Ko=typeof document>"u"?null:document;function Fb(e,t,n){var i=Ko;if(i&&typeof t=="string"&&t){var s=Di(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),zx.has(s)||(zx.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),An(t,"link",e),_n(t),i.head.appendChild(t)))}}function DR(e){Ys.D(e),Fb("dns-prefetch",e,null)}function UR(e,t){Ys.C(e,t),Fb("preconnect",e,t)}function LR(e,t,n){Ys.L(e,t,n);var i=Ko;if(i&&e&&t){var s='link[rel="preload"][as="'+Di(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Di(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Di(n.imageSizes)+'"]')):s+='[href="'+Di(e)+'"]';var a=s;switch(t){case"style":a=Vo(e);break;case"script":a=Qo(e)}if(!(Oi.has(a)||(e=Oe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Oi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Yc(a))||t==="script"&&i.querySelector(Zc(a))))){var r=i.createElement("link");An(r,"link",e),t==="style"&&(r[Vh]=!0,r.onload=r.onerror=function(){pS(r)}),_n(r),i.head.appendChild(r)}}}function IR(e,t){Ys.m(e,t);var n=Ko;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Di(i)+'"][href="'+Di(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Qo(e)}if(!Oi.has(a)&&(e=Oe({rel:"modulepreload",href:e},t),Oi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Zc(a)))return}i=n.createElement("link"),An(i,"link",e),_n(i),n.head.appendChild(i)}}}function OR(e,t,n){Ys.S(e,t,n);var i=Ko;if(i&&e){var s=Mo(i).hoistableStyles,a=Vo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Yc(a)))o.loading=5;else{e=Oe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Oi.get(a))&&Gg(e,n);var l=r=i.createElement("link");_n(l),An(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Uh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function PR(e,t){Ys.X(e,t);var n=Ko;if(n&&e){var i=Mo(n).hoistableScripts,s=Qo(e),a=i.get(s);a||(a=n.querySelector(Zc(s)),a||(e=Oe({src:e,async:!0},t),(t=Oi.get(s))&&kg(e,t),a=n.createElement("script"),_n(a),An(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function BR(e,t){Ys.M(e,t);var n=Ko;if(n&&e){var i=Mo(n).hoistableScripts,s=Qo(e),a=i.get(s);a||(a=n.querySelector(Zc(s)),a||(e=Oe({src:e,async:!0,type:"module"},t),(t=Oi.get(s))&&kg(e,t),a=n.createElement("script"),_n(a),An(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Fx(e,t,n,i){var s=(s=ya.current)?Lc(s):null;if(!s)throw Error(st(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Vo(n.href),t=Mo(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Vo(n.href);var a=Mo(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Yc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Oi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Oi.set(e,a)),zR(s,e,a,r.state))),t&&i===null)throw Error(st(528,""));return r}if(t&&i!==null)throw Error(st(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Qo(n),t=Mo(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(st(444,e))}}function Vo(e){return'href="'+Di(e)+'"'}function Yc(e){return'link[rel="stylesheet"]['+e+"]"}function Hb(e){return Oe({},e,{"data-precedence":e.precedence,precedence:null})}function zR(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Vh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Vh]=!0,t.onload=t.onerror=pS.bind(null,t),An(t,"link",n),_n(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Qo(e){return'[src="'+Di(e)+'"]'}function Zc(e){return"script[async]"+e}function Hx(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Di(n.href)+'"]');if(i)return t.instance=i,_n(i),i;var s=Oe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),_n(i),An(i,"style",s),Uh(i,n.precedence,e),t.instance=i;case"stylesheet":s=Vo(n.href);var a=e.querySelector(Yc(s));if(a)return t.state.loading|=4,t.instance=a,_n(a),a;i=Hb(n),(s=Oi.get(s))&&Gg(i,s),a=(e.ownerDocument||e).createElement("link"),_n(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),An(a,"link",i),t.state.loading|=4,Uh(a,n.precedence,e),t.instance=a;case"script":return a=Qo(n.src),(s=e.querySelector(Zc(a)))?(t.instance=s,_n(s),s):(i=n,(s=Oi.get(a))&&(i=Oe({},n),kg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),_n(s),An(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(st(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Uh(i,n.precedence,e));return t.instance}function Uh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function kg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lh=null;function Vx(e,t,n){if(Lh===null){var i=new Map,s=Lh=new Map;s.set(n,i)}else s=Lh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Vc]||a[Mn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function W0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function FR(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Vb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Gb(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function kx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Gb(t),e.suspenseyImages.push(t)),e=GR.bind(e),t.decode().then(e,e))}function HR(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Vo(i.href),a=t.querySelector(Yc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ic.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,_n(a);return}a=t.ownerDocument||t,i=Hb(i),(s=Oi.get(s))&&Gg(i,s),a=a.createElement("link"),_n(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),An(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ic.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ih=0;function VR(e,t){return e.stylesheets&&e.count===0&&Oh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Oh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Ih===0&&(Ih=62500*aR());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Ih?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function kb(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Oh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Ic(){this.count--,kb(this)}function GR(){this.imgCount--,kb(this)}var hf=null;function Oh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hf=new Map,t.forEach(kR,e),hf=null,Ic.call(e))}function kR(e,t){if(!(t.state.loading&4)){var n=hf.get(e);if(n)var i=n.get(null);else{n=new Map,hf.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Ic.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Go={$$typeof:us,Provider:null,Consumer:null,_currentValue:fr,_currentValue2:fr,_threadCount:0};function XR(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=um(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=um(0),this.hiddenUpdates=um(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function Xb(e,t,n,i,s,a,r,o,l,c,h,p){return e=new XR(e,t,n,r,l,c,h,p,o),t=1,a===!0&&(t|=24),a=ei(3,null,null,t),e.current=a,a.stateNode=e,t=cg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},fg(a),e}function Wb(e){return e?(e=vo,e):vo}function qb(e,t,n,i,s,a){s=Wb(s),i.context===null?i.context=s:i.pendingContext=s,i=Sa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Ma(e,i,t),n!==null&&(ni(n,e,t),fc(n,e,t))}function Xx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xg(e,t){Xx(e,t),(e=e.alternate)&&Xx(e,t)}function Yb(e){if(e.tag===13||e.tag===31){var t=Rr(e,67108864);t!==null&&ni(t,e,67108864),Xg(e,67108864)}}function Wx(e){if(e.tag===13||e.tag===31){var t=_i();t=Q0(t);var n=Rr(e,t);n!==null&&ni(n,e,t),Xg(e,t)}}var ko=!0;function WR(e,t,n,i){var s=Qt.T;Qt.T=null;var a=Me.p;try{Me.p=2,Wg(e,t,n,i)}finally{Me.p=a,Qt.T=s}}function qR(e,t,n,i){var s=Qt.T;Qt.T=null;var a=Me.p;try{Me.p=8,Wg(e,t,n,i)}finally{Me.p=a,Qt.T=s}}function Wg(e,t,n,i){if(ko){var s=q0(i);if(s===null)Lm(e,t,i,ff,n),qx(e,i);else if(ZR(s,e,t,n,i))i.stopPropagation();else if(qx(e,i),t&4&&-1<YR.indexOf(e)){for(;s!==null;){var a=qo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=or(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-gi(r);o.entanglements[1]|=l,r&=~l}vs(a),(Se&6)===0&&(rf=pi()+500,qc(0,!1))}}break;case 31:case 13:o=Rr(a,2),o!==null&&ni(o,a,2),Rf(),Xg(a,2)}if(a=q0(i),a===null&&Lm(e,t,i,ff,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Lm(e,t,i,null,n)}}function q0(e){return e=tg(e),qg(e)}var ff=null;function qg(e){if(ff=null,e=ur(e),e!==null){var t=Bc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=jx(t),e!==null)return e;e=null}else if(n===31){if(e=$x(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ff=e,null}function Zb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oA()){case aS:return 2;case rS:return 8;case Hh:case lA:return 32;case oS:return 268435456;default:return 32}default:return 32}}var Y0=!1,Aa=null,wa=null,Ra=null,Oc=new Map,Pc=new Map,fa=[],YR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qx(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Oc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(t.pointerId)}}function ec(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=qo(t),t!==null&&Yb(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function ZR(e,t,n,i,s){switch(t){case"focusin":return Aa=ec(Aa,e,t,n,i,s),!0;case"dragenter":return wa=ec(wa,e,t,n,i,s),!0;case"mouseover":return Ra=ec(Ra,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Oc.set(a,ec(Oc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Pc.set(a,ec(Pc.get(a)||null,e,t,n,i,s)),!0}return!1}function Jb(e){var t=ur(e.target);if(t!==null){var n=Bc(t);if(n!==null){if(t=n.tag,t===13){if(t=jx(n),t!==null){e.blockedOn=t,vy(e.priority,function(){Wx(n)});return}}else if(t===31){if(t=$x(n),t!==null){e.blockedOn=t,vy(e.priority,function(){Wx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ph(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=q0(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Km=i,n.target.dispatchEvent(i),Km=null}else return t=qo(n),t!==null&&Yb(t),e.blockedOn=n,!1;t.shift()}return!0}function Yx(e,t,n){Ph(e)&&n.delete(t)}function JR(){Y0=!1,Aa!==null&&Ph(Aa)&&(Aa=null),wa!==null&&Ph(wa)&&(wa=null),Ra!==null&&Ph(Ra)&&(Ra=null),Oc.forEach(Yx),Pc.forEach(Yx)}function gh(e,t){e.blockedOn===t&&(e.blockedOn=null,Y0||(Y0=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,JR)))}var _h=null;function Zx(e){_h!==e&&(_h=e,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,function(){_h===e&&(_h=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(qg(i||n)===null)continue;break}var a=qo(n);a!==null&&(e.splice(t,3),t-=3,f0(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Xo(e){function t(l){return gh(l,e)}Aa!==null&&gh(Aa,e),wa!==null&&gh(wa,e),Ra!==null&&gh(Ra,e),Oc.forEach(t),Pc.forEach(t);for(var n=0;n<fa.length;n++){var i=fa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<fa.length&&(n=fa[0],n.blockedOn===null);)Jb(n),n.blockedOn===null&&fa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[si]||null;if(typeof a=="function")r||Zx(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[si]||null)o=r.formAction;else if(qg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Zx(n)}}}function Kb(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Yg(e){this._internalRoot=e}Df.prototype.render=Yg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(st(409));var n=t.current,i=_i();qb(n,i,e,t,null,null)};Df.prototype.unmount=Yg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qb(e.current,2,null,e,null,null),Rf(),t[Wo]=null}};function Df(e){this._internalRoot=e}Df.prototype.unstable_scheduleHydration=function(e){if(e){var t=dS();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fa.length&&t!==0&&t<fa[n].priority;n++);fa.splice(n,0,e),n===0&&Jb(e)}};var Jx=Kx.version;if(Jx!=="19.3.0")throw Error(st(527,Jx,"19.3.0"));Me.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(st(188)):(e=Object.keys(e).join(","),Error(st(268,e)));return e=KT(t),e=e!==null?tS(e):null,e=e===null?null:e.stateNode,e};var KR={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Qt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(nc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!nc.isDisabled&&nc.supportsFiber))try{zc=nc.inject(KR),mi=nc}catch{}var nc;Uf.createRoot=function(e,t){if(!Qx(e))throw Error(st(299));var n=!1,i="",s=NM,a=DM,r=UM;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Xb(e,1,!1,null,null,n,i,null,s,a,r,Kb),e[Wo]=t.current,zg(e),new Yg(t)};Uf.hydrateRoot=function(e,t,n){if(!Qx(e))throw Error(st(299));var i=!1,s="",a=NM,r=DM,o=UM,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Xb(e,1,!0,t,n??null,i,s,l,a,r,o,Kb),t.context=Wb(null),n=t.current,i=_i(),i=Q0(i),s=Sa(i),s.callback=null,Ma(n,s,i),n=i,t.current.lanes=n,Hc(t,n),vs(t),e[Wo]=t.current,zg(e),new Df(t)};Uf.version="19.3.0"});var t1=ns((zL,$b)=>{"use strict";function jb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jb)}catch(e){console.error(e)}}jb(),$b.exports=Qb()});var $E=ns(Lp=>{"use strict";var KU=Symbol.for("react.transitional.element"),QU=Symbol.for("react.fragment");function jE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:KU,type:e,key:i,ref:t!==void 0?t:null,props:n}}Lp.Fragment=QU;Lp.jsx=jE;Lp.jsxs=jE});var kr=ns((uB,tT)=>{"use strict";tT.exports=$E()});var na=is(to()),yT=is(t1());var Xr=is(to());var N1=0,U_=1,D1=2;var Eu=1,U1=2,Dl=3,Qa=0,Jn=1,Ti=2,Ts=0,Ul=1,L_=2,I_=3,O_=4,L1=5;var Fr=100,I1=101,O1=102,P1=103,B1=104,z1=200,F1=201,H1=202,V1=203,P_=204,B_=205,G1=206,k1=207,X1=208,W1=209,q1=210,Y1=211,Z1=212,J1=213,K1=214,nd=0,id=1,sd=2,fl=3,ad=4,rd=5,od=6,ld=7,z_=0,Q1=1,j1=2,Qi=0,F_=1,H_=2,V_=3,G_=4,k_=5,X_=6,Tu=7;var W_=300,ja=301,Hr=302,Fd=303,Hd=304,Au=306,Ms=1e3,Bi=1001,cd=1002,xn=1003,$1=1004;var wu=1005;var fn=1006,Vd=1007;var As=1008;var oi=1009,q_=1010,Y_=1011,Ll=1012,Gd=1013,ji=1014,$i=1015,ts=1016,kd=1017,Xd=1018,Il=1020,Z_=35902,J_=35899,K_=1021,Q_=1022,zi=1023,bs=1026,$a=1027,j_=1028,Wd=1029,tr=1030,qd=1031;var Yd=1033,Ru=33776,Cu=33777,Nu=33778,Du=33779,Zd=35840,Jd=35841,Kd=35842,Qd=35843,jd=36196,$d=37492,tp=37496,ep=37488,np=37489,Uu=37490,ip=37491,sp=37808,ap=37809,rp=37810,op=37811,lp=37812,cp=37813,up=37814,hp=37815,fp=37816,dp=37817,pp=37818,mp=37819,gp=37820,_p=37821,vp=36492,yp=36494,xp=36495,Sp=36283,Mp=36284,Lu=36285,bp=36286;var iu=2300,ud=2301,td=2302,x_=2303,S_=2400,M_=2401,b_=2402;var tE=3200;var Ep=0,eE=1,ta="",Rn="srgb",su="srgb-linear",au="linear",Ee="srgb";var ed=7680;var nE=519,iE=512,sE=513,aE=514,Tp=515,rE=516,oE=517,Ap=518,lE=519,cE=35044;var $_="300 es",Ji=2e3,dl=2001;function QR(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function jR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ru(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function uE(){let e=ru("canvas");return e.style.display="block",e}var e1={},pl=null;function tv(...e){let t="THREE."+e.shift();pl?pl("log",t,...e):console.log(t,...e)}function hE(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Zt(...e){e=hE(e);let t="THREE."+e.shift();if(pl)pl("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Yt(...e){e=hE(e);let t="THREE."+e.shift();if(pl)pl("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ir(...e){let t=e.join(" ");t in e1||(e1[t]=!0,Zt(...e))}function fE(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var dE={[nd]:id,[sd]:od,[ad]:ld,[fl]:rd,[id]:nd,[od]:sd,[ld]:ad,[rd]:fl},Es=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zg=Math.PI/180,hd=180/Math.PI;function Ol(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[e&255]+In[e>>8&255]+In[e>>16&255]+In[e>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function de(e,t,n){return Math.max(t,Math.min(n,e))}function $R(e,t){return(e%t+t)%t}function Jg(e,t,n){return(1-n)*e+n*t}function Jc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ai(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rv=class rv{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rv.prototype.isVector2=!0;var vt=rv,zn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],u=a[r+0],f=a[r+1],g=a[r+2],M=a[r+3];if(p!==M||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+p*M;m<0&&(u=-u,f=-f,g=-g,M=-M,m=-m);let d=1-o;if(m<.9995){let _=Math.acos(m),S=Math.sin(_);d=Math.sin(d*_)/S,o=Math.sin(o*_)/S,l=l*d+u*o,c=c*d+f*o,h=h*d+g*o,p=p*d+M*o}else{l=l*d+u*o,c=c*d+f*o,h=h*d+g*o,p=p*d+M*o;let _=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=_,c*=_,h*=_,p*=_}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=a[r],u=a[r+1],f=a[r+2],g=a[r+3];return t[n]=o*g+h*p+l*f-c*u,t[n+1]=l*g+h*u+c*p-o*f,t[n+2]=c*g+h*f+o*u-l*p,t[n+3]=h*g-o*p-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(a/2),u=l(i/2),f=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"YXZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"ZXY":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"ZYX":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"YZX":this._x=u*h*p+c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p-u*f*g;break;case"XZY":this._x=u*h*p-c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p+u*f*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ov=class ov{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(n1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(n1.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this.z=de(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this.z=de(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kg.copy(this).projectOnVector(t),this.sub(Kg)}reflect(t){return this.sub(Kg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ov.prototype.isVector3=!0;var D=ov,Kg=new D,n1=new zn,lv=class lv{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],f=i[5],g=i[8],M=s[0],m=s[3],d=s[6],_=s[1],S=s[4],v=s[7],E=s[2],A=s[5],C=s[8];return a[0]=r*M+o*_+l*E,a[3]=r*m+o*S+l*A,a[6]=r*d+o*v+l*C,a[1]=c*M+h*_+p*E,a[4]=c*m+h*S+p*A,a[7]=c*d+h*v+p*C,a[2]=u*M+f*_+g*E,a[5]=u*m+f*S+g*A,a[8]=u*d+f*v+g*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*a,f=c*a-r*l,g=n*p+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=p*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*r)*M,t[3]=u*M,t[4]=(h*n-s*l)*M,t[5]=(s*a-o*n)*M,t[6]=f*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*a)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qg.makeScale(t,n)),this}rotate(t){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qg.makeRotation(-t)),this}translate(t,n){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lv.prototype.isMatrix3=!0;var $t=lv,Qg=new $t,i1=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s1=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tC(){let e={enabled:!0,workingColorSpace:su,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Ee&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ee&&(s.r=hl(s.r),s.g=hl(s.g),s.b=hl(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ta?au:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[su]:{primaries:t,whitePoint:i,transfer:au,toXYZ:i1,fromXYZ:s1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:t,whitePoint:i,transfer:Ee,toXYZ:i1,fromXYZ:s1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),e}var ve=tC();function $s(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function hl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var jo,fd=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{jo===void 0&&(jo=ru("canvas")),jo.width=t.width,jo.height=t.height;let s=jo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=jo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=ru("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=$s(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($s(n[i]/255)*255):n[i]=$s(n[i]);return{data:n,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},eC=0,ml=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eC++}),this.uuid=Ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(jg(s[r].image)):a.push(jg(s[r]))}else a=jg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function jg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?fd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var nC=0,$g=new D,qn=class e extends Es{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Bi,s=Bi,a=fn,r=As,o=zi,l=oi,c=e.DEFAULT_ANISOTROPY,h=ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=Ol(),this.name="",this.source=new ml(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($g).x}get height(){return this.source.getSize($g).y}get depth(){return this.source.getSize($g).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Zt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Zt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==W_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case cd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case cd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=W_;qn.DEFAULT_ANISOTROPY=1;var cv=class cv{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],f=l[5],g=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,v=(f+1)/2,E=(d+1)/2,A=(h+u)/4,C=(p+M)/4,x=(g+m)/4;return S>v&&S>E?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=A/i,a=C/i):v>E?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=A/s,a=x/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=C/a,s=x/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(p-M)*(p-M)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(p-M)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this.z=de(this.z,t.z,n.z),this.w=de(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this.z=de(this.z,t,n),this.w=de(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cv.prototype.isVector4=!0;var qe=cv,dd=class extends Es{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new qe(0,0,t,n),this.scissorTest=!1,this.viewport=new qe(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new qn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new ml(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends dd{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},ou=class extends qn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pd=class extends qn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var zd=class zd{constructor(t,n,i,s,a,r,o,l,c,h,p,u,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,p,u,f,g,M,m)}set(t,n,i,s,a,r,o,l,c,h,p,u,f,g,M,m){let d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=g,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zd().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/$o.setFromMatrixColumn(t,0).length(),a=1/$o.setFromMatrixColumn(t,1).length(),r=1/$o.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*h,f=r*p,g=o*h,M=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=f+g*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=g+f*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,f=l*p,g=c*h,M=c*p;n[0]=u+M*o,n[4]=g*o-f,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=f*o-g,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,f=l*p,g=c*h,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=g+f*o,n[1]=f+g*o,n[5]=r*h,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,f=r*p,g=o*h,M=o*p;n[0]=l*h,n[4]=g*c-f,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=f*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,f=r*c,g=o*l,M=o*c;n[0]=l*h,n[4]=M-u*p,n[8]=g*p+f,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=f*p+g,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,f=r*c,g=o*l,M=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+M,n[5]=r*h,n[9]=f*p-g,n[2]=g*p-f,n[6]=o*h,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iC,t,sC)}lookAt(t,n,i){let s=this.elements;return xi.subVectors(t,n),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Pa.crossVectors(i,xi),Pa.lengthSq()===0&&(Math.abs(i.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Pa.crossVectors(i,xi)),Pa.normalize(),Lf.crossVectors(xi,Pa),s[0]=Pa.x,s[4]=Lf.x,s[8]=xi.x,s[1]=Pa.y,s[5]=Lf.y,s[9]=xi.y,s[2]=Pa.z,s[6]=Lf.z,s[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],f=i[13],g=i[2],M=i[6],m=i[10],d=i[14],_=i[3],S=i[7],v=i[11],E=i[15],A=s[0],C=s[4],x=s[8],w=s[12],R=s[1],U=s[5],F=s[9],q=s[13],O=s[2],B=s[6],H=s[10],z=s[14],at=s[3],Y=s[7],j=s[11],nt=s[15];return a[0]=r*A+o*R+l*O+c*at,a[4]=r*C+o*U+l*B+c*Y,a[8]=r*x+o*F+l*H+c*j,a[12]=r*w+o*q+l*z+c*nt,a[1]=h*A+p*R+u*O+f*at,a[5]=h*C+p*U+u*B+f*Y,a[9]=h*x+p*F+u*H+f*j,a[13]=h*w+p*q+u*z+f*nt,a[2]=g*A+M*R+m*O+d*at,a[6]=g*C+M*U+m*B+d*Y,a[10]=g*x+M*F+m*H+d*j,a[14]=g*w+M*q+m*z+d*nt,a[3]=_*A+S*R+v*O+E*at,a[7]=_*C+S*U+v*B+E*Y,a[11]=_*x+S*F+v*H+E*j,a[15]=_*w+S*q+v*z+E*nt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],f=t[14],g=t[3],M=t[7],m=t[11],d=t[15],_=l*f-c*u,S=o*f-c*p,v=o*u-l*p,E=r*f-c*h,A=r*u-l*h,C=r*p-o*h;return n*(M*_-m*S+d*v)-i*(g*_-m*E+d*A)+s*(g*S-M*E+d*C)-a*(g*v-M*A+m*C)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],f=t[11],g=t[12],M=t[13],m=t[14],d=t[15],_=n*o-i*r,S=n*l-s*r,v=n*c-a*r,E=i*l-s*o,A=i*c-a*o,C=s*c-a*l,x=h*M-p*g,w=h*m-u*g,R=h*d-f*g,U=p*m-u*M,F=p*d-f*M,q=u*d-f*m,O=_*q-S*F+v*U+E*R-A*w+C*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/O;return t[0]=(o*q-l*F+c*U)*B,t[1]=(s*F-i*q-a*U)*B,t[2]=(M*C-m*A+d*E)*B,t[3]=(u*A-p*C-f*E)*B,t[4]=(l*R-r*q-c*w)*B,t[5]=(n*q-s*R+a*w)*B,t[6]=(m*v-g*C-d*S)*B,t[7]=(h*C-u*v+f*S)*B,t[8]=(r*F-o*R+c*x)*B,t[9]=(i*R-n*F-a*x)*B,t[10]=(g*A-M*v+d*_)*B,t[11]=(p*v-h*A-f*_)*B,t[12]=(o*w-r*U-l*x)*B,t[13]=(n*U-i*w+s*x)*B,t[14]=(M*S-g*E-m*_)*B,t[15]=(h*E-p*S+u*_)*B,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,p=o+o,u=a*c,f=a*h,g=a*p,M=r*h,m=r*p,d=o*p,_=l*c,S=l*h,v=l*p,E=i.x,A=i.y,C=i.z;return s[0]=(1-(M+d))*E,s[1]=(f+v)*E,s[2]=(g-S)*E,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(u+d))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+S)*C,s[9]=(m-_)*C,s[10]=(1-(u+M))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=$o.set(s[0],s[1],s[2]).length(),o=$o.set(s[4],s[5],s[6]).length(),l=$o.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Wi.copy(this);let c=1/r,h=1/o,p=1/l;return Wi.elements[0]*=c,Wi.elements[1]*=c,Wi.elements[2]*=c,Wi.elements[4]*=h,Wi.elements[5]*=h,Wi.elements[6]*=h,Wi.elements[8]*=p,Wi.elements[9]*=p,Wi.elements[10]*=p,n.setFromRotationMatrix(Wi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ji,l=!1){let c=this.elements,h=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),f=(i+s)/(i-s),g,M;if(l)g=a/(r-a),M=r*a/(r-a);else if(o===Ji)g=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===dl)g=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ji,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),f=-(i+s)/(i-s),g,M;if(l)g=1/(r-a),M=r/(r-a);else if(o===Ji)g=-2/(r-a),M=-(r+a)/(r-a);else if(o===dl)g=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};zd.prototype.isMatrix4=!0;var Pe=zd,$o=new D,Wi=new Pe,iC=new D(0,0,0),sC=new D(1,1,1),Pa=new D,Lf=new D,xi=new D,a1=new Pe,r1=new zn,Ki=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-de(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-de(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return a1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(a1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return r1.setFromEuler(this),this.setFromQuaternion(r1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var gl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},aC=0,o1=new D,tl=new zn,Zs=new Pe,If=new D,Kc=new D,rC=new D,oC=new zn,l1=new D(1,0,0),c1=new D(0,1,0),u1=new D(0,0,1),h1={type:"added"},lC={type:"removed"},el={type:"childadded",child:null},t_={type:"childremoved",child:null},Yn=class e extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aC++}),this.uuid=Ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new D,n=new Ki,i=new zn,s=new D(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new $t}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return tl.setFromAxisAngle(t,n),this.quaternion.multiply(tl),this}rotateOnWorldAxis(t,n){return tl.setFromAxisAngle(t,n),this.quaternion.premultiply(tl),this}rotateX(t){return this.rotateOnAxis(l1,t)}rotateY(t){return this.rotateOnAxis(c1,t)}rotateZ(t){return this.rotateOnAxis(u1,t)}translateOnAxis(t,n){return o1.copy(t).applyQuaternion(this.quaternion),this.position.add(o1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(l1,t)}translateY(t){return this.translateOnAxis(c1,t)}translateZ(t){return this.translateOnAxis(u1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?If.copy(t):If.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Kc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zs.lookAt(Kc,If,this.up):Zs.lookAt(If,Kc,this.up),this.quaternion.setFromRotationMatrix(Zs),s&&(Zs.extractRotation(s.matrixWorld),tl.setFromRotationMatrix(Zs),this.quaternion.premultiply(tl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(h1),el.child=t,this.dispatchEvent(el),el.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(lC),t_.child=t,this.dispatchEvent(t_),t_.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(h1),el.child=t,this.dispatchEvent(el),el.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kc,t,rC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kc,oC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yn.DEFAULT_UP=new D(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xs=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},cC={type:"move"},_l=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let m=n.getJointPose(M,i),d=this._getHandJoint(c,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cC)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},pE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},Of={h:0,s:0,l:0};function e_(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ie=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ve.workingColorSpace){return this.r=t,this.g=n,this.b=i,ve.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ve.workingColorSpace){if(t=$R(t,1),n=de(n,0,1),i=de(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=e_(r,a,t+1/3),this.g=e_(r,a,t),this.b=e_(r,a,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,n=Rn){function i(a){a!==void 0&&parseFloat(a)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Rn){let i=pE[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}copyLinearToSRGB(t){return this.r=hl(t.r),this.g=hl(t.g),this.b=hl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return ve.workingToColorSpace(On.copy(this),t),Math.round(de(On.r*255,0,255))*65536+Math.round(de(On.g*255,0,255))*256+Math.round(de(On.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ve.workingColorSpace){ve.workingToColorSpace(On.copy(this),n);let i=On.r,s=On.g,a=On.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ve.workingColorSpace){return ve.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=Rn){ve.workingToColorSpace(On.copy(this),t);let n=On.r,i=On.g,s=On.b;return t!==Rn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+n,Ba.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ba),t.getHSL(Of);let i=Jg(Ba.h,Of.h,n),s=Jg(Ba.s,Of.s,n),a=Jg(Ba.l,Of.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new ie;ie.NAMES=pE;var vl=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},qi=new D,Js=new D,n_=new D,Ks=new D,nl=new D,il=new D,f1=new D,i_=new D,s_=new D,a_=new D,r_=new qe,o_=new qe,l_=new qe,Va=class e{constructor(t=new D,n=new D,i=new D){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),qi.subVectors(t,n),s.cross(qi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){qi.subVectors(s,n),Js.subVectors(i,n),n_.subVectors(t,n);let r=qi.dot(qi),o=qi.dot(Js),l=qi.dot(n_),c=Js.dot(Js),h=Js.dot(n_),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,f=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-f-g,g,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ks)===null?!1:Ks.x>=0&&Ks.y>=0&&Ks.x+Ks.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ks)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ks.x),l.addScaledVector(r,Ks.y),l.addScaledVector(o,Ks.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return r_.setScalar(0),o_.setScalar(0),l_.setScalar(0),r_.fromBufferAttribute(t,n),o_.fromBufferAttribute(t,i),l_.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(r_,a.x),r.addScaledVector(o_,a.y),r.addScaledVector(l_,a.z),r}static isFrontFacing(t,n,i,s){return qi.subVectors(i,n),Js.subVectors(t,n),qi.cross(Js).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),Js.subVectors(this.a,this.b),qi.cross(Js).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;nl.subVectors(s,i),il.subVectors(a,i),i_.subVectors(t,i);let l=nl.dot(i_),c=il.dot(i_);if(l<=0&&c<=0)return n.copy(i);s_.subVectors(t,s);let h=nl.dot(s_),p=il.dot(s_);if(h>=0&&p<=h)return n.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(nl,r);a_.subVectors(t,a);let f=nl.dot(a_),g=il.dot(a_);if(g>=0&&f<=g)return n.copy(a);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(il,o);let m=h*g-f*p;if(m<=0&&p-h>=0&&f-g>=0)return f1.subVectors(a,s),o=(p-h)/(p-h+(f-g)),n.copy(s).addScaledVector(f1,o);let d=1/(m+M+u);return r=M*d,o=u*d,n.copy(i).addScaledVector(nl,r).addScaledVector(il,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ga=class{constructor(t=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Yi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Yi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Yi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Yi):Yi.fromBufferAttribute(a,r),Yi.applyMatrix4(t.matrixWorld),this.expandByPoint(Yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pf.copy(i.boundingBox)),Pf.applyMatrix4(t.matrixWorld),this.union(Pf)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yi),Yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qc),Bf.subVectors(this.max,Qc),sl.subVectors(t.a,Qc),al.subVectors(t.b,Qc),rl.subVectors(t.c,Qc),za.subVectors(al,sl),Fa.subVectors(rl,al),Nr.subVectors(sl,rl);let n=[0,-za.z,za.y,0,-Fa.z,Fa.y,0,-Nr.z,Nr.y,za.z,0,-za.x,Fa.z,0,-Fa.x,Nr.z,0,-Nr.x,-za.y,za.x,0,-Fa.y,Fa.x,0,-Nr.y,Nr.x,0];return!c_(n,sl,al,rl,Bf)||(n=[1,0,0,0,1,0,0,0,1],!c_(n,sl,al,rl,Bf))?!1:(zf.crossVectors(za,Fa),n=[zf.x,zf.y,zf.z],c_(n,sl,al,rl,Bf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qs=[new D,new D,new D,new D,new D,new D,new D,new D],Yi=new D,Pf=new Ga,sl=new D,al=new D,rl=new D,za=new D,Fa=new D,Nr=new D,Qc=new D,Bf=new D,zf=new D,Dr=new D;function c_(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Dr.fromArray(e,a);let o=s.x*Math.abs(Dr.x)+s.y*Math.abs(Dr.y)+s.z*Math.abs(Dr.z),l=t.dot(Dr),c=n.dot(Dr),h=i.dot(Dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var rn=new D,Ff=new vt,uC=0,Bn=class extends Es{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uC++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=cE,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ff.fromBufferAttribute(this,n),Ff.applyMatrix3(t),this.setXY(n,Ff.x,Ff.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Jc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ai(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Jc(n,this.array)),n}setX(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Jc(n,this.array)),n}setY(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Jc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Jc(n,this.array)),n}setW(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),i=ai(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),i=ai(i,this.array),s=ai(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),i=ai(i,this.array),s=ai(s,this.array),a=ai(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var lu=class extends Bn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var cu=class extends Bn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var on=class extends Bn{constructor(t,n,i){super(new Float32Array(t),n,i)}},hC=new Ga,jc=new D,u_=new D,yl=class{constructor(t=new D,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):hC.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jc.subVectors(t,this.center);let n=jc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(jc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(u_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jc.copy(t.center).add(u_)),this.expandByPoint(jc.copy(t.center).sub(u_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fC=0,Pi=new Pe,h_=new Yn,ol=new D,Si=new Ga,$c=new Ga,yn=new D,Zn=class e extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fC++}),this.uuid=Ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(QR(t)?cu:lu)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new $t().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,n,i){return Pi.makeTranslation(t,n,i),this.applyMatrix4(Pi),this}scale(t,n,i){return Pi.makeScale(t,n,i),this.applyMatrix4(Pi),this}lookAt(t){return h_.lookAt(t),h_.updateMatrix(),this.applyMatrix4(h_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ol).negate(),this.translate(ol.x,ol.y,ol.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new on(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];$c.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(Si.min,$c.min),Si.expandByPoint(yn),yn.addVectors(Si.max,$c.max),Si.expandByPoint(yn)):(Si.expandByPoint($c.min),Si.expandByPoint($c.max))}Si.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)yn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(yn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yn.fromBufferAttribute(o,c),l&&(ol.fromBufferAttribute(t,c),yn.add(ol)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Bn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new D,l[x]=new D;let c=new D,h=new D,p=new D,u=new vt,f=new vt,g=new vt,M=new D,m=new D;function d(x,w,R){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,x),f.fromBufferAttribute(a,w),g.fromBufferAttribute(a,R),h.sub(c),p.sub(c),f.sub(u),g.sub(u);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(U),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),o[x].add(M),o[w].add(M),o[R].add(M),l[x].add(m),l[w].add(m),l[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let x=0,w=_.length;x<w;++x){let R=_[x],U=R.start,F=R.count;for(let q=U,O=U+F;q<O;q+=3)d(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let S=new D,v=new D,E=new D,A=new D;function C(x){E.fromBufferAttribute(s,x),A.copy(E);let w=o[x];S.copy(w),S.sub(E.multiplyScalar(E.dot(w))).normalize(),v.crossVectors(A,w);let U=v.dot(l[x])<0?-1:1;r.setXYZW(x,S.x,S.y,S.z,U)}for(let x=0,w=_.length;x<w;++x){let R=_[x],U=R.start,F=R.count;for(let q=U,O=U+F;q<O;q+=3)C(t.getX(q+0)),C(t.getX(q+1)),C(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new D,a=new D,r=new D,o=new D,l=new D,c=new D,h=new D,p=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,M),r.fromBufferAttribute(n,m),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)yn.fromBufferAttribute(t,n),yn.normalize(),t.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let d=0;d<h;d++)u[g++]=c[f++]}return new Bn(u,h,p)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],f=t(u,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],p=a[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var f_=new D,dC=new D,pC=new $t,Zi=class{constructor(t=new D(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=f_.subVectors(i,n).cross(dC.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(f_),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||pC.getNormalMatrix(t),s=this.coplanarPoint(f_).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},mC=0,ka=class extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mC++}),this.uuid=Ol(),this.name="",this.type="Material",this.blending=Ul,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=P_,this.blendDst=B_,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ed,this.stencilZFail=ed,this.stencilZPass=ed,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Zt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Zt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Zi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new vt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var js=new D,d_=new D,Hf=new D,Vf=new D,uu=class{constructor(t=new D,n=new D(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,js)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=js.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(js.copy(this.origin).addScaledVector(this.direction,n),js.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){d_.copy(t).add(n).multiplyScalar(.5),Hf.copy(n).sub(t).normalize(),Vf.copy(this.origin).sub(d_);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Hf),o=Vf.dot(this.direction),l=-Vf.dot(Hf),c=Vf.lengthSq(),h=Math.abs(1-r*r),p,u,f,g;if(h>0)if(p=r*l-o,u=r*o-l,g=a*h,p>=0)if(u>=-g)if(u<=g){let M=1/h;p*=M,u*=M,f=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(d_).addScaledVector(Hf,u),f}intersectSphere(t,n){if(t.radius<0)return null;js.subVectors(t.center,this.origin);let i=js.dot(this.direction),s=js.dot(js)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,js)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-r.x,u=t.y-r.y,f=t.z-r.z,g=n.x-r.x,M=n.y-r.y,m=n.z-r.z,d=i.x-r.x,_=i.y-r.y,S=i.z-r.z,v=Math.abs(l),E=Math.abs(c),A=Math.abs(h),C,x,w,R,U,F,q,O,B,H,z,at;if(v>=E&&v>=A?(w=l,F=p,B=g,at=d,l>=0?(C=c,x=h,R=u,U=f,q=M,O=m,H=_,z=S):(C=h,x=c,R=f,U=u,q=m,O=M,H=S,z=_)):E>=A?(w=c,F=u,B=M,at=_,c>=0?(C=h,x=l,R=f,U=p,q=m,O=g,H=S,z=d):(C=l,x=h,R=p,U=f,q=g,O=m,H=d,z=S)):(w=h,F=f,B=m,at=S,h>=0?(C=l,x=c,R=p,U=u,q=g,O=M,H=d,z=_):(C=c,x=l,R=u,U=p,q=M,O=g,H=_,z=d)),w===0)return null;let Y=C/w,j=x/w,nt=1/w,Nt=R-Y*F,At=U-j*F,ee=q-Y*B,Ot=O-j*B,qt=H-Y*at,W=z-j*at,$=qt*Ot-W*ee,_t=Nt*W-At*qt,Ft=ee*At-Ot*Nt;if(s){if($<0||_t<0||Ft<0)return null}else if(($<0||_t<0||Ft<0)&&($>0||_t>0||Ft>0))return null;let bt=$+_t+Ft;if(bt===0)return null;let Gt=nt*($*F+_t*B+Ft*at);return(bt>0?Gt<0:Gt>0)?null:this.at(Gt/bt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Or=class extends ka{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},d1=new Pe,Ur=new uu,Gf=new yl,p1=new D,kf=new D,Xf=new D,Wf=new D,p_=new D,qf=new D,m1=new D,Yf=new D,tn=class extends Yn{constructor(t=new Zn,n=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){qf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],p=a[l];h!==0&&(p_.fromBufferAttribute(p,t),r?qf.addScaledVector(p_,h):qf.addScaledVector(p_.sub(n),h))}n.add(qf)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gf.copy(i.boundingSphere),Gf.applyMatrix4(a),Ur.copy(t.ray).recast(t.near),!(Gf.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Gf,p1)===null||Ur.origin.distanceToSquared(p1)>(t.far-t.near)**2))&&(d1.copy(a).invert(),Ur.copy(t.ray).applyMatrix4(d1),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ur)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,M=u.length;g<M;g++){let m=u[g],d=r[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,E=S;v<E;v+=3){let A=o.getX(v),C=o.getX(v+1),x=o.getX(v+2);s=Zf(this,d,t,i,c,h,p,A,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,d=M;m<d;m+=3){let _=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=Zf(this,r,t,i,c,h,p,_,S,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,M=u.length;g<M;g++){let m=u[g],d=r[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,E=S;v<E;v+=3){let A=v,C=v+1,x=v+2;s=Zf(this,d,t,i,c,h,p,A,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,d=M;m<d;m+=3){let _=m,S=m+1,v=m+2;s=Zf(this,r,t,i,c,h,p,_,S,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function gC(e,t,n,i,s,a,r,o){let l;if(t.side===Jn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Qa,o),l===null)return null;Yf.copy(o),Yf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Yf);return c<n.near||c>n.far?null:{distance:c,point:Yf.clone(),object:e}}function Zf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,kf),e.getVertexPosition(l,Xf),e.getVertexPosition(c,Wf);let h=gC(e,t,n,i,kf,Xf,Wf,m1);if(h){let p=new D;Va.getBarycoord(m1,kf,Xf,Wf,p),s&&(h.uv=Va.getInterpolatedAttribute(s,o,l,c,p,new vt)),a&&(h.uv1=Va.getInterpolatedAttribute(a,o,l,c,p,new vt)),r&&(h.normal=Va.getInterpolatedAttribute(r,o,l,c,p,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Va.getNormal(kf,Xf,Wf,u.normal),h.face=u,h.barycoord=p}return h}var xl=class extends qn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=xn,h=xn,p,u){super(null,r,o,l,c,h,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lr=new yl,_C=new vt(.5,.5),Jf=new D,Sl=class{constructor(t=new Zi,n=new Zi,i=new Zi,s=new Zi,a=new Zi,r=new Zi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ji,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],f=a[7],g=a[8],M=a[9],m=a[10],d=a[11],_=a[12],S=a[13],v=a[14],E=a[15];if(s[0].setComponents(c-r,f-h,d-g,E-_).normalize(),s[1].setComponents(c+r,f+h,d+g,E+_).normalize(),s[2].setComponents(c+o,f+p,d+M,E+S).normalize(),s[3].setComponents(c-o,f-p,d-M,E-S).normalize(),i)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,d-m,E-v).normalize();else if(s[4].setComponents(c-l,f-u,d-m,E-v).normalize(),n===Ji)s[5].setComponents(c+l,f+u,d+m,E+v).normalize();else if(n===dl)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(t){Lr.center.set(0,0,0);let n=_C.distanceTo(t.center);return Lr.radius=.7071067811865476+n,Lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Jf.x=s.normal.x>0?t.max.x:t.min.x,Jf.y=s.normal.y>0?t.max.y:t.min.y,Jf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hu=class extends qn{constructor(t=[],n=ja,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pr=class extends qn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xa=class extends qn{constructor(t,n,i=ji,s,a,r,o=xn,l=xn,c,h=bs,p=1){if(h!==bs&&h!==$a)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},md=class extends Xa{constructor(t,n=ji,i=ja,s,a,r=xn,o=xn,l,c=bs){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fu=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ml=class e extends Zn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],p=[],u=0,f=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(p,2));function g(M,m,d,_,S,v,E,A,C,x,w){let R=v/C,U=E/x,F=v/2,q=E/2,O=A/2,B=C+1,H=x+1,z=0,at=0,Y=new D;for(let j=0;j<H;j++){let nt=j*U-q;for(let Nt=0;Nt<B;Nt++){let At=Nt*R-F;Y[M]=At*_,Y[m]=nt*S,Y[d]=O,c.push(Y.x,Y.y,Y.z),Y[M]=0,Y[m]=0,Y[d]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),p.push(Nt/C),p.push(1-j/x),z+=1}}for(let j=0;j<x;j++)for(let nt=0;nt<C;nt++){let Nt=u+nt+B*j,At=u+nt+B*(j+1),ee=u+(nt+1)+B*(j+1),Ot=u+(nt+1)+B*j;l.push(Nt,At,Ot),l.push(At,ee,Ot),at+=6}o.addGroup(f,at,w),f+=at,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let h=i[s],u=i[s+1]-h,f=(r-h)/u;return(s+f)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new vt:new D);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new D,s=[],a=[],r=[],o=new D,l=new Pe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}a[0]=new D,r[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(de(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(n===!0){let f=Math.acos(de(a[0].dot(a[t]),-1,1));f/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(f=-f);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},bl=class extends Mi{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new vt){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*p+this.aX,c=u*p+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gd=class extends bl{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function ev(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,p){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+p)+(l-o)/p;u*=h,f*=h,s(r,o,u,f)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var g1=new D,_1=new D,m_=new ev,g_=new ev,__=new ev,El=class extends Mi{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new D){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(_1.subVectors(s[0],s[1]).add(s[0]),c=_1);let p=s[o%a],u=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(g1.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=g1),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),M=Math.pow(p.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),m_.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,M,m),g_.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,M,m),__.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(m_.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),g_.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),__.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set(m_.calc(l),g_.calc(l),__.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function v1(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function vC(e,t){let n=1-e;return n*n*t}function yC(e,t){return 2*(1-e)*e*t}function xC(e,t){return e*e*t}function eu(e,t,n,i){return vC(e,t)+yC(e,n)+xC(e,i)}function SC(e,t){let n=1-e;return n*n*n*t}function MC(e,t){let n=1-e;return 3*n*n*e*t}function bC(e,t){return 3*(1-e)*e*e*t}function EC(e,t){return e*e*e*t}function nu(e,t,n,i,s){return SC(e,t)+MC(e,n)+bC(e,i)+EC(e,s)}var du=class extends Mi{constructor(t=new vt,n=new vt,i=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new vt){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(nu(t,s.x,a.x,r.x,o.x),nu(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_d=class extends Mi{constructor(t=new D,n=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new D){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(nu(t,s.x,a.x,r.x,o.x),nu(t,s.y,a.y,r.y,o.y),nu(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pu=class extends Mi{constructor(t=new vt,n=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new vt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new vt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vd=class extends Mi{constructor(t=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new D){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mu=class extends Mi{constructor(t=new vt,n=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new vt){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(eu(t,s.x,a.x,r.x),eu(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yd=class extends Mi{constructor(t=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new D){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(eu(t,s.x,a.x,r.x),eu(t,s.y,a.y,r.y),eu(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gu=class extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new vt){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return i.set(v1(o,l.x,c.x,h.x,p.x),v1(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new vt().fromArray(s))}return this}},E_=Object.freeze({__proto__:null,ArcCurve:gd,CatmullRomCurve3:El,CubicBezierCurve:du,CubicBezierCurve3:_d,EllipseCurve:bl,LineCurve:pu,LineCurve3:vd,QuadraticBezierCurve:mu,QuadraticBezierCurve3:yd,SplineCurve:gu}),xd=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new E_[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(new E_[s.type]().fromJSON(s))}return this}},Br=class extends xd{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new pu(this.currentPoint.clone(),new vt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){let a=new mu(this.currentPoint.clone(),new vt(t,n),new vt(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,a,r){let o=new du(this.currentPoint.clone(),new vt(t,n),new vt(i,s),new vt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new gu(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,s,a,r),this}absarc(t,n,i,s,a,r){return this.absellipse(t,n,i,i,s,a,r),this}ellipse(t,n,i,s,a,r,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,n+h,i,s,a,r,o,l),this}absellipse(t,n,i,s,a,r,o,l){let c=new bl(t,n,i,s,a,r,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Wa=class extends Br{constructor(t){super(t),this.uuid=Ol(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(new Br().fromJSON(s))}return this}};function TC(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,a=mE(e,0,s,n,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=NC(e,t,a,n)),e.length>80*n){o=e[0],l=e[1];let h=o,p=l;for(let u=n;u<s;u+=n){let f=e[u],g=e[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>p&&(p=g)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return _u(a,r,n,o,l,c,0),r}function mE(e,t,n,i,s){let a;if(s===VC(e,t,n,i)>0)for(let r=t;r<n;r+=i)a=y1(r/i|0,e[r],e[r+1],a);else for(let r=n-i;r>=t;r-=i)a=y1(r/i|0,e[r],e[r+1],a);return a&&Tl(a,a.next)&&(yu(a),a=a.next),a}function zr(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Tl(n,n.next)||Ke(n.prev,n,n.next)===0)){if(yu(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function _u(e,t,n,i,s,a,r){if(!e)return;!r&&a&&OC(e,i,s,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(a?wC(e,i,s,a):AC(e)){t.push(l.i,e.i,c.i),yu(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=RC(zr(e),t),_u(e,t,n,i,s,a,2)):r===2&&CC(e,t,n,i,s,a):_u(zr(e),t,n,i,s,a,1);break}}}function AC(e){let t=e.prev,n=e,i=e.next;if(Ke(t,n,i)>=0)return!1;let s=t.x,a=n.x,r=i.x,o=t.y,l=n.y,c=i.y,h=Math.min(s,a,r),p=Math.min(o,l,c),u=Math.max(s,a,r),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=p&&g.y<=f&&tu(s,o,a,l,r,c,g.x,g.y)&&Ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wC(e,t,n,i){let s=e.prev,a=e,r=e.next;if(Ke(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,h=s.y,p=a.y,u=r.y,f=Math.min(o,l,c),g=Math.min(h,p,u),M=Math.max(o,l,c),m=Math.max(h,p,u),d=T_(f,g,t,n,i),_=T_(M,m,t,n,i),S=e.prevZ,v=e.nextZ;for(;S&&S.z>=d&&v&&v.z<=_;){if(S.x>=f&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==r&&tu(o,h,l,p,c,u,S.x,S.y)&&Ke(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&tu(o,h,l,p,c,u,v.x,v.y)&&Ke(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=d;){if(S.x>=f&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==r&&tu(o,h,l,p,c,u,S.x,S.y)&&Ke(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&tu(o,h,l,p,c,u,v.x,v.y)&&Ke(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function RC(e,t){let n=e;do{let i=n.prev,s=n.next.next;!Tl(i,s)&&_E(i,n,n.next,s)&&vu(i,s)&&vu(s,i)&&(t.push(i.i,n.i,s.i),yu(n),yu(n.next),n=e=s),n=n.next}while(n!==e);return zr(n)}function CC(e,t,n,i,s,a){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&zC(r,o)){let l=vE(r,o);r=zr(r,r.next),l=zr(l,l.next),_u(r,t,n,i,s,a,0),_u(l,t,n,i,s,a,0);return}o=o.next}r=r.next}while(r!==e)}function NC(e,t,n,i){let s=[];for(let a=0,r=t.length;a<r;a++){let o=t[a]*i,l=a<r-1?t[a+1]*i:e.length,c=mE(e,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(BC(c))}s.sort(DC);for(let a=0;a<s.length;a++)n=UC(s[a],n);return n}function DC(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}return n}function UC(e,t){let n=LC(e,t);if(!n)return t;let i=vE(n,e);return zr(i,i.next),zr(n,n.next)}function LC(e,t){let n=t,i=e.x,s=e.y,a=-1/0,r;if(Tl(e,n))return n;do{if(Tl(e,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let p=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=i&&p>a&&(a=p,r=n.x<n.next.x?n:n.next,p===i))return r}n=n.next}while(n!==t);if(!r)return null;let o=r,l=r.x,c=r.y,h=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&gE(s<c?i:a,s,l,c,s<c?a:i,s,n.x,n.y)){let p=Math.abs(s-n.y)/(i-n.x);vu(n,e)&&(p<h||p===h&&(n.x>r.x||n.x===r.x&&IC(r,n)))&&(r=n,h=p)}n=n.next}while(n!==o);return r}function IC(e,t){return Ke(e.prev,e,t.prev)<0&&Ke(t.next,e,e.next)<0}function OC(e,t,n,i){let s=e;do s.z===0&&(s.z=T_(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,PC(s)}function PC(e){let t,n=1;do{let i=e,s;e=null;let a=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:e=s,s.prevZ=a,a=s;i=r}a.nextZ=null,n*=2}while(t>1);return e}function T_(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function BC(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function gE(e,t,n,i,s,a,r,o){return(s-r)*(t-o)>=(e-r)*(a-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(a-o)>=(s-r)*(i-o)}function tu(e,t,n,i,s,a,r,o){return!(e===r&&t===o)&&gE(e,t,n,i,s,a,r,o)}function zC(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!FC(e,t)&&(vu(e,t)&&vu(t,e)&&HC(e,t)&&(Ke(e.prev,e,t.prev)||Ke(e,t.prev,t))||Tl(e,t)&&Ke(e.prev,e,e.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Tl(e,t){return e.x===t.x&&e.y===t.y}function _E(e,t,n,i){let s=Qf(Ke(e,t,n)),a=Qf(Ke(e,t,i)),r=Qf(Ke(n,i,e)),o=Qf(Ke(n,i,t));return!!(s!==a&&r!==o||s===0&&Kf(e,n,t)||a===0&&Kf(e,i,t)||r===0&&Kf(n,e,i)||o===0&&Kf(n,t,i))}function Kf(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Qf(e){return e>0?1:e<0?-1:0}function FC(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&_E(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function vu(e,t){return Ke(e.prev,e,e.next)<0?Ke(e,t,e.next)>=0&&Ke(e,e.prev,t)>=0:Ke(e,t,e.prev)<0||Ke(e,e.next,t)<0}function HC(e,t){let n=e,i=!1,s=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&s<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function vE(e,t){let n=A_(e.i,e.x,e.y),i=A_(t.i,t.x,t.y),s=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,a.next=i,i.prev=a,i}function y1(e,t,n,i){let s=A_(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function yu(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function A_(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function VC(e,t,n,i){let s=0;for(let a=t,r=n-i;a<n;a+=i)s+=(e[r]-e[a])*(e[a+1]+e[r+1]),r=a;return s}var w_=class{static triangulate(t,n,i=2){return TC(t,n,i)}},Ss=class e{static area(t){let n=t.length,i=0;for(let s=n-1,a=0;a<n;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],s=[],a=[];x1(t),S1(i,t);let r=t.length;n.forEach(x1);for(let l=0;l<n.length;l++)s.push(r),r+=n[l].length,S1(i,n[l]);let o=w_.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function x1(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function S1(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Al=class e extends Zn{constructor(t=new Wa([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new on(s,3)),this.setAttribute("uv",new on(a,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:f-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,d=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:GC,S,v=!1,E,A,C,x;if(d){S=d.getSpacedPoints(h),v=!0,u=!1;let it=d.isCatmullRomCurve3?d.closed:!1;E=d.computeFrenetFrames(h,it),A=new D,C=new D,x=new D}u||(m=0,f=0,g=0,M=0);let w=o.extractPoints(c),R=w.shape,U=w.holes;if(!Ss.isClockWise(R)){R=R.reverse();for(let it=0,ot=U.length;it<ot;it++){let ut=U[it];Ss.isClockWise(ut)&&(U[it]=ut.reverse())}}function q(it){let ut=10000000000000001e-36,lt=it[0];for(let dt=1;dt<=it.length;dt++){let Ht=dt%it.length,Dt=it[Ht],Vt=Dt.x-lt.x,kt=Dt.y-lt.y,N=Vt*Vt+kt*kt,he=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(lt.x),Math.abs(lt.y)),mt=ut*he*he;if(N<=mt){it.splice(Ht,1),dt--;continue}lt=Dt}}q(R),U.forEach(q);let O=U.length,B=R;for(let it=0;it<O;it++){let ot=U[it];R=R.concat(ot)}function H(it,ot,ut){return ot||Yt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ot,ut)}let z=R.length;function at(it,ot,ut){let lt,dt,Ht,Dt=it.x-ot.x,Vt=it.y-ot.y,kt=ut.x-it.x,N=ut.y-it.y,he=Dt*Dt+Vt*Vt,mt=Dt*N-Vt*kt;if(Math.abs(mt)>Number.EPSILON){let T=Math.sqrt(he),y=Math.sqrt(kt*kt+N*N),I=ot.x-Vt/T,G=ot.y+Dt/T,J=ut.x-N/y,V=ut.y+kt/y,ft=((J-I)*N-(V-G)*kt)/(Dt*N-Vt*kt);lt=I+Dt*ft-it.x,dt=G+Vt*ft-it.y;let Q=lt*lt+dt*dt;if(Q<=2)return new vt(lt,dt);Ht=Math.sqrt(Q/2)}else{let T=!1;Dt>Number.EPSILON?kt>Number.EPSILON&&(T=!0):Dt<-Number.EPSILON?kt<-Number.EPSILON&&(T=!0):Math.sign(Vt)===Math.sign(N)&&(T=!0),T?(lt=-Vt,dt=Dt,Ht=Math.sqrt(he)):(lt=Dt,dt=Vt,Ht=Math.sqrt(he/2))}return new vt(lt/Ht,dt/Ht)}let Y=[];for(let it=0,ot=B.length,ut=ot-1,lt=it+1;it<ot;it++,ut++,lt++)ut===ot&&(ut=0),lt===ot&&(lt=0),Y[it]=at(B[it],B[ut],B[lt]);let j=[],nt,Nt=Y.concat();for(let it=0,ot=O;it<ot;it++){let ut=U[it];nt=[];for(let lt=0,dt=ut.length,Ht=dt-1,Dt=lt+1;lt<dt;lt++,Ht++,Dt++)Ht===dt&&(Ht=0),Dt===dt&&(Dt=0),nt[lt]=at(ut[lt],ut[Ht],ut[Dt]);j.push(nt),Nt=Nt.concat(nt)}let At;if(m===0)At=Ss.triangulateShape(B,U);else{let it=[],ot=[];for(let ut=0;ut<m;ut++){let lt=ut/m,dt=f*Math.cos(lt*Math.PI/2),Ht=g*Math.sin(lt*Math.PI/2)+M;for(let Dt=0,Vt=B.length;Dt<Vt;Dt++){let kt=H(B[Dt],Y[Dt],Ht);_t(kt.x,kt.y,-dt),lt===0&&it.push(kt)}for(let Dt=0,Vt=O;Dt<Vt;Dt++){let kt=U[Dt];nt=j[Dt];let N=[];for(let he=0,mt=kt.length;he<mt;he++){let T=H(kt[he],nt[he],Ht);_t(T.x,T.y,-dt),lt===0&&N.push(T)}lt===0&&ot.push(N)}}At=Ss.triangulateShape(it,ot)}let ee=At.length,Ot=g+M;for(let it=0;it<z;it++){let ot=u?H(R[it],Nt[it],Ot):R[it];v?(C.copy(E.normals[0]).multiplyScalar(ot.x),A.copy(E.binormals[0]).multiplyScalar(ot.y),x.copy(S[0]).add(C).add(A),_t(x.x,x.y,x.z)):_t(ot.x,ot.y,0)}for(let it=1;it<=h;it++)for(let ot=0;ot<z;ot++){let ut=u?H(R[ot],Nt[ot],Ot):R[ot];v?(C.copy(E.normals[it]).multiplyScalar(ut.x),A.copy(E.binormals[it]).multiplyScalar(ut.y),x.copy(S[it]).add(C).add(A),_t(x.x,x.y,x.z)):_t(ut.x,ut.y,p/h*it)}for(let it=m-1;it>=0;it--){let ot=it/m,ut=f*Math.cos(ot*Math.PI/2),lt=g*Math.sin(ot*Math.PI/2)+M;for(let dt=0,Ht=B.length;dt<Ht;dt++){let Dt=H(B[dt],Y[dt],lt);_t(Dt.x,Dt.y,p+ut)}for(let dt=0,Ht=U.length;dt<Ht;dt++){let Dt=U[dt];nt=j[dt];for(let Vt=0,kt=Dt.length;Vt<kt;Vt++){let N=H(Dt[Vt],nt[Vt],lt);v?_t(N.x,N.y+S[h-1].y,S[h-1].x+ut):_t(N.x,N.y,p+ut)}}}qt(),W();function qt(){let it=s.length/3;if(u){let ot=0,ut=z*ot;for(let lt=0;lt<ee;lt++){let dt=At[lt];Ft(dt[2]+ut,dt[1]+ut,dt[0]+ut)}ot=h+m*2,ut=z*ot;for(let lt=0;lt<ee;lt++){let dt=At[lt];Ft(dt[0]+ut,dt[1]+ut,dt[2]+ut)}}else{for(let ot=0;ot<ee;ot++){let ut=At[ot];Ft(ut[2],ut[1],ut[0])}for(let ot=0;ot<ee;ot++){let ut=At[ot];Ft(ut[0]+z*h,ut[1]+z*h,ut[2]+z*h)}}i.addGroup(it,s.length/3-it,0)}function W(){let it=s.length/3,ot=0;$(B,ot),ot+=B.length;for(let ut=0,lt=U.length;ut<lt;ut++){let dt=U[ut];$(dt,ot),ot+=dt.length}i.addGroup(it,s.length/3-it,1)}function $(it,ot){let ut=it.length;for(;--ut>=0;){let lt=ut,dt=ut-1;dt<0&&(dt=it.length-1);for(let Ht=0,Dt=h+m*2;Ht<Dt;Ht++){let Vt=z*Ht,kt=z*(Ht+1),N=ot+lt+Vt,he=ot+dt+Vt,mt=ot+dt+kt,T=ot+lt+kt;bt(N,he,mt,T)}}}function _t(it,ot,ut){l.push(it),l.push(ot),l.push(ut)}function Ft(it,ot,ut){Gt(it),Gt(ot),Gt(ut);let lt=s.length/3,dt=_.generateTopUV(i,s,lt-3,lt-2,lt-1);re(dt[0]),re(dt[1]),re(dt[2])}function bt(it,ot,ut,lt){Gt(it),Gt(ot),Gt(lt),Gt(ot),Gt(ut),Gt(lt);let dt=s.length/3,Ht=_.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);re(Ht[0]),re(Ht[1]),re(Ht[3]),re(Ht[1]),re(Ht[2]),re(Ht[3])}function Gt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function re(it){a.push(it.x),a.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return kC(n,i,t)}static fromJSON(t,n){let i=[];for(let a=0,r=t.shapes.length;a<r;a++){let o=n[t.shapes[a]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new E_[s.type]().fromJSON(s)),new e(i,t.options)}},GC={generateTopUV:function(e,t,n,i,s){let a=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new vt(a,r),new vt(o,l),new vt(c,h)]},generateSideWallUV:function(e,t,n,i,s,a){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],h=t[i*3+1],p=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[a*3],m=t[a*3+1],d=t[a*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new vt(r,1-l),new vt(c,1-p),new vt(u,1-g),new vt(M,1-d)]:[new vt(o,1-l),new vt(h,1-p),new vt(f,1-g),new vt(m,1-d)]}};function kC(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let a=e[i];n.shapes.push(a.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var qa=class e extends Zn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=n/l,f=[],g=[],M=[],m=[];for(let d=0;d<h;d++){let _=d*u-r;for(let S=0;S<c;S++){let v=S*p-a;g.push(v,-_,0),M.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){let S=_+c*d,v=_+c*(d+1),E=_+1+c*(d+1),A=_+1+c*d;f.push(S,v,A),f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(M,3)),this.setAttribute("uv",new on(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var xu=class e extends Zn{constructor(t=new Wa([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new on(s,3)),this.setAttribute("normal",new on(a,3)),this.setAttribute("uv",new on(r,2));function c(h){let p=s.length/3,u=h.extractPoints(n),f=u.shape,g=u.holes;Ss.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,d=g.length;m<d;m++){let _=g[m];Ss.isClockWise(_)===!0&&(g[m]=_.reverse())}let M=Ss.triangulateShape(f,g);for(let m=0,d=g.length;m<d;m++){let _=g[m];f=f.concat(_)}for(let m=0,d=f.length;m<d;m++){let _=f[m];s.push(_.x,_.y,0),a.push(0,0,1),r.push(_.x,_.y)}for(let m=0,d=M.length;m<d;m++){let _=M[m],S=_[0]+p,v=_[1]+p,E=_[2]+p;i.push(S,v,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return XC(n,t)}static fromJSON(t,n){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let r=n[t.shapes[s]];i.push(r)}return new e(i,t.curveSegments)}};function XC(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let s=e[n];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}var wl=class e extends Zn{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=new D,f=new D,g=new D;for(let M=0;M<=i;M++){let m=r+M/i*o;for(let d=0;d<=s;d++){let _=d/s*a;f.x=(t+n*Math.cos(m))*Math.cos(_),f.y=(t+n*Math.cos(m))*Math.sin(_),f.z=n*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),p.push(d/s),p.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){let d=(s+1)*M+m-1,_=(s+1)*(M-1)+m-1,S=(s+1)*(M-1)+m,v=(s+1)*M+m;l.push(d,_,v),l.push(_,S,v)}this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Vr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(M1(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(M1(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Fn(e){let t={};for(let n=0;n<e.length;n++){let i=Vr(e[n]);for(let s in i)t[s]=i[s]}return t}function M1(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function WC(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function nv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var yE={clone:Vr,merge:Fn},qC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends ka{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qC,this.fragmentShader=YC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=WC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new ie().setHex(s.value);break;case"v2":this.uniforms[i].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new qe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Pe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Sd=class extends bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rl=class extends ka{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ya=class extends Rl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Md=class extends ka{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bd=class extends ka{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ll(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function v_(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Za=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ed=class extends Za{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:S_,endingEnd:S_}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case M_:a=t,o=2*n-i;break;case b_:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case M_:r=t,l=2*i-n;break;case b_:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),M=g*g,m=M*g,d=-u*m+2*u*M-u*g,_=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,S=(-1-f)*m+(1.5+f)*M+.5*g,v=f*m-f*M;for(let E=0;E!==o;++E)a[E]=d*r[h+E]+_*r[c+E]+S*r[l+E]+v*r[p+E];return a}},Td=class extends Za{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),p=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*h;return a}},Ad=class extends Za{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wd=class extends Za{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(i-n)/(s-n),M=1-g;for(let m=0;m!==o;++m)a[m]=r[c+m]*M+r[l+m]*g;return a}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let M=r[c+g],m=r[l+g],d=f*u+g*2,_=p[d],S=p[d+1],v=t*u+g*2,E=h[v],A=h[v+1],C=JC(i,n,_,E,s);a[g]=xE(C,M,S,A,m)}return a}};function xE(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function ZC(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function JC(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=xE(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=ZC(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var Ei=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ll(n,this.TimeBufferType),this.values=ll(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ll(t.times,Array),values:ll(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),v_(t.settings)&&(i.settings={inTangents:ll(t.settings.inTangents,Array),outTangents:ll(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ad(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Td(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ed(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new wd(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case iu:n=this.InterpolantFactoryMethodDiscrete;break;case ud:n=this.InterpolantFactoryMethodLinear;break;case td:n=this.InterpolantFactoryMethodSmooth;break;case x_:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Zt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return iu;case this.InterpolantFactoryMethodLinear:return ud;case this.InterpolantFactoryMethodSmooth:return td;case this.InterpolantFactoryMethodBezier:return x_}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;v_(this.settings)&&(b1(this.settings.inTangents,t),b1(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&jR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===td,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,f=p+i;for(let g=0;g!==i;++g){let M=n[p+g];if(M!==n[u+g]||M!==n[f+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let f=0;f!==i;++f)n[u+f]=n[p+f]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,v_(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function b1(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Ei.prototype.ValueTypeName="";Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=ud;var Ja=class extends Ei{constructor(t,n,i){super(t,n,i)}};Ja.prototype.ValueTypeName="bool";Ja.prototype.ValueBufferType=Array;Ja.prototype.DefaultInterpolation=iu;Ja.prototype.InterpolantFactoryMethodLinear=void 0;Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Rd=class extends Ei{constructor(t,n,i,s){super(t,n,i,s)}};Rd.prototype.ValueTypeName="color";var Cd=class extends Ei{constructor(t,n,i,s){super(t,n,i,s)}};Cd.prototype.ValueTypeName="number";var Nd=class extends Za{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)zn.slerpFlat(a,0,r,c-o,r,c,l);return a}},Su=class extends Ei{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Nd(this.times,this.values,this.getValueSize(),t)}};Su.prototype.ValueTypeName="quaternion";Su.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Ei{constructor(t,n,i){super(t,n,i)}};Ka.prototype.ValueTypeName="string";Ka.prototype.ValueBufferType=Array;Ka.prototype.DefaultInterpolation=iu;Ka.prototype.InterpolantFactoryMethodLinear=void 0;Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Dd=class extends Ei{constructor(t,n,i,s){super(t,n,i,s)}};Dd.prototype.ValueTypeName="vector";var Ud=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},SE=new Ud,Ld=class{constructor(t){this.manager=t!==void 0?t:SE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ld.DEFAULT_MATERIAL_NAME="__DEFAULT";var Id=class extends Yn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var y_=new Pe,E1=new D,T1=new D,Od=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;E1.setFromMatrixPosition(t.matrixWorld),n.position.copy(E1),T1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(T1),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){y_.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(y_,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===dl||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(y_)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},jf=new D,$f=new zn,ys=new D,Mu=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jf,$f,ys),ys.x===1&&ys.y===1&&ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jf,$f,ys.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(jf,$f,ys),ys.x===1&&ys.y===1&&ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jf,$f,ys.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ha=new D,A1=new vt,w1=new vt,Pn=class extends Mu{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(Zg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,n){return this.getViewBounds(t,A1,w1),n.subVectors(w1,A1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Zg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Cl=class extends Mu{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},R_=class extends Od{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nl=class extends Id{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new R_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var cl=-90,ul=1,Pd=class extends Yn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pn(cl,ul,t,n);s.layers=this.layers,this.add(s);let a=new Pn(cl,ul,t,n);a.layers=this.layers,this.add(a);let r=new Pn(cl,ul,t,n);r.layers=this.layers,this.add(r);let o=new Pn(cl,ul,t,n);o.layers=this.layers,this.add(o);let l=new Pn(cl,ul,t,n);l.layers=this.layers,this.add(l);let c=new Pn(cl,ul,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Bd=class extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var iv="\\[\\]\\.:\\/",KC=new RegExp("["+iv+"]","g"),sv="[^"+iv+"]",QC="[^"+iv.replace("\\.","")+"]",jC=/((?:WC+[\/:])*)/.source.replace("WC",sv),$C=/(WCOD+)?/.source.replace("WCOD",QC),t3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sv),e3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sv),n3=new RegExp("^"+jC+$C+t3+e3+"$"),i3=["material","materials","bones","map"],C_=class{constructor(t,n,i){let s=i||ke.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},ke=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(KC,"")}static parseTrackName(t){let n=n3.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);i3.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=C_;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FL=new Float32Array(1);var R1=new Pe,bu=class{constructor(t,n,i=0,s=1/0){this.ray=new uu(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Yt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return R1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R1),this}intersectObject(t,n=!0,i=[]){return N_(t,this,i,n),i.sort(C1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)N_(t[s],this,i,n);return i.sort(C1),i}};function C1(e,t){return e.distance-t.distance}function N_(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)N_(a[r],t,n,!0)}}var uv=class uv{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};uv.prototype.isMatrix2=!0;var D_=uv;function av(e,t,n,i){let s=s3(i);switch(n){case K_:return e*t;case j_:return e*t/s.components*s.byteLength;case Wd:return e*t/s.components*s.byteLength;case tr:return e*t*2/s.components*s.byteLength;case qd:return e*t*2/s.components*s.byteLength;case Q_:return e*t*3/s.components*s.byteLength;case zi:return e*t*4/s.components*s.byteLength;case Yd:return e*t*4/s.components*s.byteLength;case Ru:case Cu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Nu:case Du:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jd:case Qd:return Math.max(e,16)*Math.max(t,8)/4;case Zd:case Kd:return Math.max(e,8)*Math.max(t,8)/2;case jd:case $d:case ep:case np:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case tp:case Uu:case ip:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case sp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ap:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case rp:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case op:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case lp:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case cp:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case up:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case hp:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fp:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case dp:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case pp:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case mp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case gp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _p:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case vp:case yp:case xp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Sp:case Mp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Lu:case bp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function s3(e){switch(e){case oi:case q_:return{byteLength:1,components:1};case Ll:case Y_:case ts:return{byteLength:2,components:1};case kd:case Xd:return{byteLength:2,components:4};case ji:case Gd:case $i:return{byteLength:4,components:1};case Z_:case J_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kE(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function r3(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<p.length;f++){let g=p[u],M=p[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,p[u]=M)}p.length=u+1;for(let f=0,g=p.length;f<g;f++){let M=p[f];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var o3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,g3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,b3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,N3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,L3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B3="gl_FragColor = linearToOutputTexel( gl_FragColor );",z3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,H3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,V3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,t2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,u2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,B2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_N=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,MN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ON=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:o3,alphahash_pars_fragment:l3,alphamap_fragment:c3,alphamap_pars_fragment:u3,alphatest_fragment:h3,alphatest_pars_fragment:f3,aomap_fragment:d3,aomap_pars_fragment:p3,batching_pars_vertex:m3,batching_vertex:g3,begin_vertex:_3,beginnormal_vertex:v3,bsdfs:y3,iridescence_fragment:x3,bumpmap_pars_fragment:S3,clipping_planes_fragment:M3,clipping_planes_pars_fragment:b3,clipping_planes_pars_vertex:E3,clipping_planes_vertex:T3,color_fragment:A3,color_pars_fragment:w3,color_pars_vertex:R3,color_vertex:C3,common:N3,cube_uv_reflection_fragment:D3,defaultnormal_vertex:U3,displacementmap_pars_vertex:L3,displacementmap_vertex:I3,emissivemap_fragment:O3,emissivemap_pars_fragment:P3,colorspace_fragment:B3,colorspace_pars_fragment:z3,envmap_fragment:F3,envmap_common_pars_fragment:H3,envmap_pars_fragment:V3,envmap_pars_vertex:G3,envmap_physical_pars_fragment:$3,envmap_vertex:k3,fog_vertex:X3,fog_pars_vertex:W3,fog_fragment:q3,fog_pars_fragment:Y3,gradientmap_pars_fragment:Z3,lightmap_pars_fragment:J3,lights_lambert_fragment:K3,lights_lambert_pars_fragment:Q3,lights_pars_begin:j3,lights_toon_fragment:t2,lights_toon_pars_fragment:e2,lights_phong_fragment:n2,lights_phong_pars_fragment:i2,lights_physical_fragment:s2,lights_physical_pars_fragment:a2,lights_fragment_begin:r2,lights_fragment_maps:o2,lights_fragment_end:l2,lightprobes_pars_fragment:c2,logdepthbuf_fragment:u2,logdepthbuf_pars_fragment:h2,logdepthbuf_pars_vertex:f2,logdepthbuf_vertex:d2,map_fragment:p2,map_pars_fragment:m2,map_particle_fragment:g2,map_particle_pars_fragment:_2,metalnessmap_fragment:v2,metalnessmap_pars_fragment:y2,morphinstance_vertex:x2,morphcolor_vertex:S2,morphnormal_vertex:M2,morphtarget_pars_vertex:b2,morphtarget_vertex:E2,normal_fragment_begin:T2,normal_fragment_maps:A2,normal_pars_fragment:w2,normal_pars_vertex:R2,normal_vertex:C2,normalmap_pars_fragment:N2,clearcoat_normal_fragment_begin:D2,clearcoat_normal_fragment_maps:U2,clearcoat_pars_fragment:L2,iridescence_pars_fragment:I2,opaque_fragment:O2,packing:P2,premultiplied_alpha_fragment:B2,project_vertex:z2,dithering_fragment:F2,dithering_pars_fragment:H2,roughnessmap_fragment:V2,roughnessmap_pars_fragment:G2,shadowmap_pars_fragment:k2,shadowmap_pars_vertex:X2,shadowmap_vertex:W2,shadowmask_pars_fragment:q2,skinbase_vertex:Y2,skinning_pars_vertex:Z2,skinning_vertex:J2,skinnormal_vertex:K2,specularmap_fragment:Q2,specularmap_pars_fragment:j2,tonemapping_fragment:$2,tonemapping_pars_fragment:tN,transmission_fragment:eN,transmission_pars_fragment:nN,uv_pars_fragment:iN,uv_pars_vertex:sN,uv_vertex:aN,worldpos_vertex:rN,background_vert:oN,background_frag:lN,backgroundCube_vert:cN,backgroundCube_frag:uN,cube_vert:hN,cube_frag:fN,depth_vert:dN,depth_frag:pN,distance_vert:mN,distance_frag:gN,equirect_vert:_N,equirect_frag:vN,linedashed_vert:yN,linedashed_frag:xN,meshbasic_vert:SN,meshbasic_frag:MN,meshlambert_vert:bN,meshlambert_frag:EN,meshmatcap_vert:TN,meshmatcap_frag:AN,meshnormal_vert:wN,meshnormal_frag:RN,meshphong_vert:CN,meshphong_frag:NN,meshphysical_vert:DN,meshphysical_frag:UN,meshtoon_vert:LN,meshtoon_frag:IN,points_vert:ON,points_frag:PN,shadow_vert:BN,shadow_frag:zN,sprite_vert:FN,sprite_frag:HN},Et={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Rs={basic:{uniforms:Fn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Fn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Fn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Fn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Fn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ie(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Fn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Fn([Et.points,Et.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Fn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Fn([Et.common,Et.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Fn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Fn([Et.sprite,Et.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Fn([Et.common,Et.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Fn([Et.lights,Et.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Rs.physical={uniforms:Fn([Rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var wp={r:0,b:0,g:0},VN=new Pe,XE=new $t;XE.set(-1,0,0,0,1,0,0,0,1);function GN(e,t,n,i,s,a){let r=new ie(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let v=_.backgroundBlurriness>0;S=t.get(S,v)}return S}function g(_){let S=!1,v=f(_);v===null?m(r,o):v&&v.isColor&&(m(v,1),S=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(_,S){let v=f(S);v&&(v.isCubeTexture||v.mapping===Au)?(c===void 0&&(c=new tn(new Ml(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Vr(Rs.backgroundCube.uniforms),vertexShader:Rs.backgroundCube.vertexShader,fragmentShader:Rs.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(VN.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(XE),c.material.toneMapped=ve.getTransfer(v.colorSpace)!==Ee,(h!==v||p!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,u=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new tn(new qa(2,2),new bi({name:"BackgroundMaterial",uniforms:Vr(Rs.background.uniforms),vertexShader:Rs.background.vertexShader,fragmentShader:Rs.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ve.getTransfer(v.colorSpace)!==Ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,u=e.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,S){_.getRGB(wp,nv(e)),n.buffers.color.setClear(wp.r,wp.g,wp.b,S,a)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,S=1){r.set(_),o=S,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(r,o)},render:g,addToRenderList:M,dispose:d}}function kN(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(U,F,q,O,B){let H=!1,z=p(U,O,q,F);a!==z&&(a=z,c(a.object)),H=f(U,O,q,B),H&&g(U,O,q,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,v(U,F,q,O),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function h(U){return e.deleteVertexArray(U)}function p(U,F,q,O){let B=O.wireframe===!0,H=i[F.id];H===void 0&&(H={},i[F.id]=H);let z=U.isInstancedMesh===!0?U.id:0,at=H[z];at===void 0&&(at={},H[z]=at);let Y=at[q.id];Y===void 0&&(Y={},at[q.id]=Y);let j=Y[B];return j===void 0&&(j=u(l()),Y[B]=j),j}function u(U){let F=[],q=[],O=[];for(let B=0;B<n;B++)F[B]=0,q[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:O,object:U,attributes:{},index:null}}function f(U,F,q,O){let B=a.attributes,H=F.attributes,z=0,at=q.getAttributes();for(let Y in at)if(at[Y].location>=0){let nt=B[Y],Nt=H[Y];if(Nt===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Nt=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Nt=U.instanceColor)),nt===void 0||nt.attribute!==Nt||Nt&&nt.data!==Nt.data)return!0;z++}return a.attributesNum!==z||a.index!==O}function g(U,F,q,O){let B={},H=F.attributes,z=0,at=q.getAttributes();for(let Y in at)if(at[Y].location>=0){let nt=H[Y];nt===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(nt=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(nt=U.instanceColor));let Nt={};Nt.attribute=nt,nt&&nt.data&&(Nt.data=nt.data),B[Y]=Nt,z++}a.attributes=B,a.attributesNum=z,a.index=O}function M(){let U=a.newAttributes;for(let F=0,q=U.length;F<q;F++)U[F]=0}function m(U){d(U,0)}function d(U,F){let q=a.newAttributes,O=a.enabledAttributes,B=a.attributeDivisors;q[U]=1,O[U]===0&&(e.enableVertexAttribArray(U),O[U]=1),B[U]!==F&&(e.vertexAttribDivisor(U,F),B[U]=F)}function _(){let U=a.newAttributes,F=a.enabledAttributes;for(let q=0,O=F.length;q<O;q++)F[q]!==U[q]&&(e.disableVertexAttribArray(q),F[q]=0)}function S(U,F,q,O,B,H,z){z===!0?e.vertexAttribIPointer(U,F,q,B,H):e.vertexAttribPointer(U,F,q,O,B,H)}function v(U,F,q,O){M();let B=O.attributes,H=q.getAttributes(),z=F.defaultAttributeValues;for(let at in H){let Y=H[at];if(Y.location>=0){let j=B[at];if(j===void 0&&(at==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),at==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){let nt=j.normalized,Nt=j.itemSize,At=t.get(j);if(At===void 0)continue;let ee=At.buffer,Ot=At.type,qt=At.bytesPerElement,W=Ot===e.INT||Ot===e.UNSIGNED_INT||j.gpuType===Gd;if(j.isInterleavedBufferAttribute){let $=j.data,_t=$.stride,Ft=j.offset;if($.isInstancedInterleavedBuffer){for(let bt=0;bt<Y.locationSize;bt++)d(Y.location+bt,$.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let bt=0;bt<Y.locationSize;bt++)m(Y.location+bt);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let bt=0;bt<Y.locationSize;bt++)S(Y.location+bt,Nt/Y.locationSize,Ot,nt,_t*qt,(Ft+Nt/Y.locationSize*bt)*qt,W)}else{if(j.isInstancedBufferAttribute){for(let $=0;$<Y.locationSize;$++)d(Y.location+$,j.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let $=0;$<Y.locationSize;$++)m(Y.location+$);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let $=0;$<Y.locationSize;$++)S(Y.location+$,Nt/Y.locationSize,Ot,nt,Nt*qt,Nt/Y.locationSize*$*qt,W)}}else if(z!==void 0){let nt=z[at];if(nt!==void 0)switch(nt.length){case 2:e.vertexAttrib2fv(Y.location,nt);break;case 3:e.vertexAttrib3fv(Y.location,nt);break;case 4:e.vertexAttrib4fv(Y.location,nt);break;default:e.vertexAttrib1fv(Y.location,nt)}}}}_()}function E(){w();for(let U in i){let F=i[U];for(let q in F){let O=F[q];for(let B in O){let H=O[B];for(let z in H)h(H[z].object),delete H[z];delete O[B]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;let F=i[U.id];for(let q in F){let O=F[q];for(let B in O){let H=O[B];for(let z in H)h(H[z].object),delete H[z];delete O[B]}}delete i[U.id]}function C(U){for(let F in i){let q=i[F];for(let O in q){let B=q[O];if(B[U.id]===void 0)continue;let H=B[U.id];for(let z in H)h(H[z].object),delete H[z];delete B[U.id]}}}function x(U){for(let F in i){let q=i[F],O=U.isInstancedMesh===!0?U.id:0,B=q[O];if(B!==void 0){for(let H in B){let z=B[H];for(let at in z)h(z[at].object),delete z[at];delete B[H]}delete q[O],Object.keys(q).length===0&&delete i[F]}}}function w(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:_}}function XN(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function WN(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==zi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==oi&&C!==$i&&!x&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,maxSamples:E,samples:A}}function qN(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Zi,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||i!==0||s;return s=u,i=p.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,f){let g=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,d=e.get(p);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{let _=a?0:i,S=_*4,v=d.clippingState||null;l.value=v,v=h(g,u,S,f);for(let E=0;E!==S;++E)v[E]=n[E];d.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,f,g){let M=p!==null?p.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let d=f+M*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,v=f;S!==M;++S,v+=4)r.copy(p[S]).applyMatrix4(_,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Bl=4,YN=6,ZN=20,JN=256,Iu=new Cl,ME=new ie,hv=null,fv=0,dv=0,pv=!1,KN=new D,Gr=new D,Fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=KN}=a;hv=this._renderer.getRenderTarget(),fv=this._renderer.getActiveCubeFace(),dv=this._renderer.getActiveMipmapLevel(),pv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=TE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=EE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hv,fv,dv),this._renderer.xr.enabled=pv,t.scissorTest=!1,Pl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ja||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hv=this._renderer.getRenderTarget(),fv=this._renderer.getActiveCubeFace(),dv=this._renderer.getActiveMipmapLevel(),pv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ts,format:zi,colorSpace:su,depthBuffer:!1},s=bE(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bE(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=QN(a)),this._blurMaterial=$N(a,t,n),this._ggxMaterial=jN(a,t,n)}return s}_compileMaterial(t){let n=new tn(new Zn,t);this._renderer.compile(n,Iu)}_sceneToCubeUV(t,n,i,s,a){let l=new Pn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(ME),p.toneMapping=Qi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tn(new Ml,new Or({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,d=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,d=!0):(m.color.copy(ME),d=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[S],a.y,a.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[S]));let E=this._cubeSize;Pl(s,v*E,S>2?E:0,E,E),p.setRenderTarget(s),d&&p.render(M,l),p.render(t,l)}p.toneMapping=f,p.autoClear=u,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===ja||t.mapping===Hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=TE()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=EE());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Iu)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,f=p*u,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-Bl?i-g+Bl:0),d=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-n,Pl(a,m,d,3*M,2*M),s.setRenderTarget(a),s.render(o,Iu),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,Pl(t,m,d,3*M,2*M),s.setRenderTarget(t),s.render(o,Iu)}_blur(t,n,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Bl?s-this._lodMax+Bl:0),u=4*(this._cubeSize-h);Pl(n,p,u,3*h,2*h),r.setRenderTarget(n),r.render(l,Iu)}};function QN(e){let t=[],n=[],i=e,s=e-Bl+1+YN;for(let a=0;a<s;a++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,f=3,g=new Float32Array(f*u*p),M=new Float32Array(f*u*p);for(let d=0;d<p;d++){let _=d%3*2/3-1,S=d>2?0:-1,v=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];g.set(v,f*u*d);for(let E=0;E<u;E++){let A=h[E*2]*2-1,C=h[E*2+1]*2-1;d===0?Gr.set(1,C,A):d===1?Gr.set(-A,1,-C):d===2?Gr.set(-A,C,1):d===3?Gr.set(-1,C,-A):d===4?Gr.set(-A,-1,C):Gr.set(A,C,-1),Gr.toArray(M,(d*u+E)*f)}}let m=new Zn;m.setAttribute("position",new Bn(g,f)),m.setAttribute("outputDirection",new Bn(M,f)),n.push(new tn(m,null)),i>Bl&&i--}return{lodMeshes:n,sizeLods:t}}function bE(e,t,n){let i=new ri(e,t,n);return i.texture.mapping=Au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function jN(e,t,n){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function $N(e,t,n){return new bi({name:"SphericalGaussianBlur",defines:{SAMPLES:ZN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function EE(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function TE(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Dp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cp=class extends ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new hu(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ml(5,5,5),a=new bi({name:"CubemapFromEquirect",uniforms:Vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Ts});a.uniforms.tEquirect.value=n;let r=new tn(s,a),o=n.minFilter;return n.minFilter===As&&(n.minFilter=fn),new Pd(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function tD(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){let f=u.mapping;if(f===Fd||f===Hd)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new Cp(g.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let f=u.mapping,g=f===Fd||f===Hd,M=f===ja||f===Hr;if(g||M){let m=n.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Fl(e)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return g&&_&&_.height>0||M&&_&&l(_)?(i===null&&(i=new Fl(e)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Fd?u.mapping=ja:f===Hd&&(u.mapping=Hr),u}function l(u){let f=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function eD(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ir("WebGLRenderer: "+i+" extension not supported."),s}}}function nD(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];let f=a.get(u);f&&(t.remove(f),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let f in u)t.update(u[f],e.ARRAY_BUFFER)}function c(p){let u=[],f=p.index,g=p.attributes.position,M=0;if(g===void 0)return;if(f!==null){let _=f.array;M=f.version;for(let S=0,v=_.length;S<v;S+=3){let E=_[S+0],A=_[S+1],C=_[S+2];u.push(E,A,A,C,C,E)}}else{let _=g.array;M=g.version;for(let S=0,v=_.length/3-1;S<v;S+=3){let E=S+0,A=S+1,C=S+2;u.push(E,A,A,C,C,E)}}let m=new(g.count>=65535?cu:lu)(u,1);m.version=M;let d=a.get(p);d&&t.remove(d),a.set(p,m)}function h(p){let u=a.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function iD(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,f){f!==0&&(e.drawElementsInstanced(i,u,a,p*r,f),n.update(u,i,f))}function h(p,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Yt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function aD(e,t,n){let i=new WeakMap,s=new qe;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let w=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),M===!0&&(S=3);let v=o.attributes.position.count*S,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*E*4*p),C=new ou(A,v,E,p);C.type=$i,C.needsUpdate=!0;let x=S*4;for(let R=0;R<p;R++){let U=m[R],F=d[R],q=_[R],O=v*E*4*R;for(let B=0;B<U.count;B++){let H=B*x;f===!0&&(s.fromBufferAttribute(U,B),A[O+H+0]=s.x,A[O+H+1]=s.y,A[O+H+2]=s.z,A[O+H+3]=0),g===!0&&(s.fromBufferAttribute(F,B),A[O+H+4]=s.x,A[O+H+5]=s.y,A[O+H+6]=s.z,A[O+H+7]=0),M===!0&&(s.fromBufferAttribute(q,B),A[O+H+8]=s.x,A[O+H+9]=s.y,A[O+H+10]=s.z,A[O+H+11]=q.itemSize===4?s.w:1)}}u={count:p,texture:C,size:new vt(v,E)},i.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function rD(e,t,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var oD={[F_]:"LINEAR_TONE_MAPPING",[H_]:"REINHARD_TONE_MAPPING",[V_]:"CINEON_TONE_MAPPING",[G_]:"ACES_FILMIC_TONE_MAPPING",[X_]:"AGX_TONE_MAPPING",[Tu]:"NEUTRAL_TONE_MAPPING",[k_]:"CUSTOM_TONE_MAPPING"};function lD(e,t,n,i,s,a){let r=new ri(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Zn;c.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new on([0,2,0,0,2,0],2));let h=new Sd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new tn(c,h),u=new Cl(-1,1,1,-1,0,1),f=null,g=null,M=!1,m,d=null,_=[],S=!1;this.setSize=function(v,E){r.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let A=0;A<_.length;A++){let C=_[A];C.setSize&&C.setSize(v,E)}},this.setEffects=function(v){_=v,S=_.length>0&&_[0].isRenderPass===!0;let E=r.width,A=r.height;_.length>0&&o===null&&(o=new ri(E,A,{type:ts,depthBuffer:!1,stencilBuffer:!1}),l=new ri(E,A,{type:ts,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let x=_[C];x.setSize&&x.setSize(E,A)}},this.begin=function(v,E){if(M||v.toneMapping===Qi&&_.length===0)return!1;if(d=E,E!==null){let A=E.width,C=E.height;(r.width!==A||r.height!==C)&&this.setSize(A,C)}return S===!1&&v.setRenderTarget(r),m=v.toneMapping,v.toneMapping=Qi,!0},this.hasRenderPass=function(){return S},this.end=function(v,E){v.toneMapping=m,M=!0;let A=r,C=o;for(let x=0;x<_.length;x++){let w=_[x];w.enabled!==!1&&(w.render(v,C,A,E),w.needsSwap!==!1&&(A=C,C=C===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},ve.getTransfer(f)===Ee&&(h.defines.SRGB_TRANSFER="");let x=oD[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(d),v.render(p,u),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var WE=new qn,_v=new Xa(1,1),qE=new ou,YE=new pd,ZE=new hu,AE=[],wE=[],RE=new Float32Array(16),CE=new Float32Array(9),NE=new Float32Array(4);function Hl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=AE[s];if(a===void 0&&(a=new Float32Array(s),AE[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function dn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function pn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Up(e,t){let n=wE[t];n===void 0&&(n=new Int32Array(t),wE[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function cD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function uD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;e.uniform2fv(this.addr,t),pn(n,t)}}function hD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(dn(n,t))return;e.uniform3fv(this.addr,t),pn(n,t)}}function fD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;e.uniform4fv(this.addr,t),pn(n,t)}}function dD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(dn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,i))return;NE.set(i),e.uniformMatrix2fv(this.addr,!1,NE),pn(n,i)}}function pD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(dn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,i))return;CE.set(i),e.uniformMatrix3fv(this.addr,!1,CE),pn(n,i)}}function mD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(dn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,i))return;RE.set(i),e.uniformMatrix4fv(this.addr,!1,RE),pn(n,i)}}function gD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function _D(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;e.uniform2iv(this.addr,t),pn(n,t)}}function vD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;e.uniform3iv(this.addr,t),pn(n,t)}}function yD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;e.uniform4iv(this.addr,t),pn(n,t)}}function xD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function SD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;e.uniform2uiv(this.addr,t),pn(n,t)}}function MD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;e.uniform3uiv(this.addr,t),pn(n,t)}}function bD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;e.uniform4uiv(this.addr,t),pn(n,t)}}function ED(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(_v.compareFunction=n.isReversedDepthBuffer()?Ap:Tp,a=_v):a=WE,n.setTexture2D(t||a,s)}function TD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||YE,s)}function AD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||ZE,s)}function wD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||qE,s)}function RD(e){switch(e){case 5126:return cD;case 35664:return uD;case 35665:return hD;case 35666:return fD;case 35674:return dD;case 35675:return pD;case 35676:return mD;case 5124:case 35670:return gD;case 35667:case 35671:return _D;case 35668:case 35672:return vD;case 35669:case 35673:return yD;case 5125:return xD;case 36294:return SD;case 36295:return MD;case 36296:return bD;case 35678:case 36198:case 36298:case 36306:case 35682:return ED;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return AD;case 36289:case 36303:case 36311:case 36292:return wD}}function CD(e,t){e.uniform1fv(this.addr,t)}function ND(e,t){let n=Hl(t,this.size,2);e.uniform2fv(this.addr,n)}function DD(e,t){let n=Hl(t,this.size,3);e.uniform3fv(this.addr,n)}function UD(e,t){let n=Hl(t,this.size,4);e.uniform4fv(this.addr,n)}function LD(e,t){let n=Hl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ID(e,t){let n=Hl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function OD(e,t){let n=Hl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function PD(e,t){e.uniform1iv(this.addr,t)}function BD(e,t){e.uniform2iv(this.addr,t)}function zD(e,t){e.uniform3iv(this.addr,t)}function FD(e,t){e.uniform4iv(this.addr,t)}function HD(e,t){e.uniform1uiv(this.addr,t)}function VD(e,t){e.uniform2uiv(this.addr,t)}function GD(e,t){e.uniform3uiv(this.addr,t)}function kD(e,t){e.uniform4uiv(this.addr,t)}function XD(e,t,n){let i=this.cache,s=t.length,a=Up(n,s);dn(i,a)||(e.uniform1iv(this.addr,a),pn(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=_v:r=WE;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function WD(e,t,n){let i=this.cache,s=t.length,a=Up(n,s);dn(i,a)||(e.uniform1iv(this.addr,a),pn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||YE,a[r])}function qD(e,t,n){let i=this.cache,s=t.length,a=Up(n,s);dn(i,a)||(e.uniform1iv(this.addr,a),pn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||ZE,a[r])}function YD(e,t,n){let i=this.cache,s=t.length,a=Up(n,s);dn(i,a)||(e.uniform1iv(this.addr,a),pn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||qE,a[r])}function ZD(e){switch(e){case 5126:return CD;case 35664:return ND;case 35665:return DD;case 35666:return UD;case 35674:return LD;case 35675:return ID;case 35676:return OD;case 5124:case 35670:return PD;case 35667:case 35671:return BD;case 35668:case 35672:return zD;case 35669:case 35673:return FD;case 5125:return HD;case 36294:return VD;case 36295:return GD;case 36296:return kD;case 35678:case 36198:case 36298:case 36306:case 35682:return XD;case 35679:case 36299:case 36307:return WD;case 35680:case 36300:case 36308:case 36293:return qD;case 36289:case 36303:case 36311:case 36292:return YD}}var vv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RD(n.type)}},yv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZD(n.type)}},xv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},mv=/(\w+)(\])?(\[|\.)?/g;function DE(e,t){e.seq.push(t),e.map[t.id]=t}function JD(e,t,n){let i=e.name,s=i.length;for(mv.lastIndex=0;;){let a=mv.exec(i),r=mv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){DE(n,c===void 0?new vv(o,e,t):new yv(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new xv(o),DE(n,p)),n=p}}}var zl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);JD(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function UE(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var KD=37297,QD=0;function jD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var LE=new $t;function $D(e){ve._getMatrix(LE,ve.workingColorSpace,e);let t=`mat3( ${LE.elements.map(n=>n.toFixed(4))} )`;switch(ve.getTransfer(e)){case au:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function IE(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+jD(e.getShaderSource(t),o)}else return a}function tU(e,t){let n=$D(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var eU={[F_]:"Linear",[H_]:"Reinhard",[V_]:"Cineon",[G_]:"ACESFilmic",[X_]:"AgX",[Tu]:"Neutral",[k_]:"Custom"};function nU(e,t){let n=eU[t];return n===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Rp=new D;function iU(){ve.getLuminanceCoefficients(Rp);let e=Rp.x.toFixed(4),t=Rp.y.toFixed(4),n=Rp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sU(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pu).join(`
`)}function aU(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function rU(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Pu(e){return e!==""}function OE(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function PE(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var oU=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sv(e){return e.replace(oU,cU)}var lU=new Map;function cU(e,t){let n=ue[t];if(n===void 0){let i=lU.get(t);if(i!==void 0)n=ue[i],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Sv(n)}var uU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function BE(e){return e.replace(uU,hU)}function hU(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function zE(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var fU={[Eu]:"SHADOWMAP_TYPE_PCF",[Dl]:"SHADOWMAP_TYPE_VSM"};function dU(e){return fU[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pU={[ja]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[Au]:"ENVMAP_TYPE_CUBE_UV"};function mU(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":pU[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var gU={[Hr]:"ENVMAP_MODE_REFRACTION"};function _U(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":gU[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vU={[z_]:"ENVMAP_BLENDING_MULTIPLY",[Q1]:"ENVMAP_BLENDING_MIX",[j1]:"ENVMAP_BLENDING_ADD"};function yU(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":vU[e.combine]||"ENVMAP_BLENDING_NONE"}function xU(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function SU(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=dU(n),c=mU(n),h=_U(n),p=yU(n),u=xU(n),f=sU(n),g=aU(a),M=s.createProgram(),m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Pu).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Pu).join(`
`),d.length>0&&(d+=`
`)):(m=[zE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pu).join(`
`),d=[zE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?ue.tonemapping_pars_fragment:"",n.toneMapping!==Qi?nU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,tU("linearToOutputTexel",n.outputColorSpace),iU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Pu).join(`
`)),r=Sv(r),r=OE(r,n),r=PE(r,n),o=Sv(o),o=OE(o,n),o=PE(o,n),r=BE(r),o=BE(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===$_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=_+m+r,v=_+d+o,E=UE(s,s.VERTEX_SHADER,S),A=UE(s,s.FRAGMENT_SHADER,v);s.attachShader(M,E),s.attachShader(M,A),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(U){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(M)||"",q=s.getShaderInfoLog(E)||"",O=s.getShaderInfoLog(A)||"",B=F.trim(),H=q.trim(),z=O.trim(),at=!0,Y=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,E,A);else{let j=IE(s,E,"vertex"),nt=IE(s,A,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+j+`
`+nt)}else B!==""?Zt("WebGLProgram: Program Info Log:",B):(H===""||z==="")&&(Y=!1);Y&&(U.diagnostics={runnable:at,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:d}})}s.deleteShader(E),s.deleteShader(A),x=new zl(s,M),w=rU(s,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,KD)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QD++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=A,this}var MU=0,Mv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new bv(t),n.set(t,i)),i}},bv=class{constructor(t){this.id=MU++,this.code=t,this.usedTimes=0}};function bU(e){return e===tr||e===Uu||e===Lu}function EU(e,t,n,i,s,a){let r=new gl,o=new Mv,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,w,R,U,F,q){let O=U.fog,B=F.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,at=t.get(x.envMap||H,z),Y=at&&at.mapping===Au?at.image.height:null,j=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let nt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Nt=nt!==void 0?nt.length:0,At=0;B.morphAttributes.position!==void 0&&(At=1),B.morphAttributes.normal!==void 0&&(At=2),B.morphAttributes.color!==void 0&&(At=3);let ee,Ot,qt,W;if(j){let pe=Rs[j];ee=pe.vertexShader,Ot=pe.fragmentShader}else{ee=x.vertexShader,Ot=x.fragmentShader;let pe=o.getVertexShaderStage(x),oe=o.getFragmentShaderStage(x);o.update(x,pe,oe),qt=pe.id,W=oe.id}let $=e.getRenderTarget(),_t=e.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,bt=F.isBatchedMesh===!0,Gt=!!x.map,re=!!x.matcap,it=!!at,ot=!!x.aoMap,ut=!!x.lightMap,lt=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,Ht=!!x.displacementMap,Dt=!!x.emissiveMap,Vt=!!x.metalnessMap,kt=!!x.roughnessMap,N=x.anisotropy>0,he=x.clearcoat>0,mt=x.dispersion>0,T=x.retroreflectivity>0,y=x.iridescence>0,I=x.sheen>0,G=x.transmission>0,J=N&&!!x.anisotropyMap,V=he&&!!x.clearcoatMap,ft=he&&!!x.clearcoatNormalMap,Q=he&&!!x.clearcoatRoughnessMap,et=y&&!!x.iridescenceMap,gt=y&&!!x.iridescenceThicknessMap,wt=I&&!!x.sheenColorMap,ht=I&&!!x.sheenRoughnessMap,pt=!!x.specularMap,It=!!x.specularColorMap,Xt=!!x.specularIntensityMap,Jt=G&&!!x.transmissionMap,P=G&&!!x.thicknessMap,St=!!x.gradientMap,tt=!!x.alphaMap,yt=x.alphaTest>0,Tt=!!x.alphaHash,rt=!!x.extensions,Rt=Qi;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Rt=e.toneMapping);let Pt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:Ot,defines:x.defines,customVertexShaderID:qt,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:bt,batchingColor:bt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,outputColorSpace:$===null?e.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:re,envMap:it,envMapMode:it&&at.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:ut,bumpMap:lt,normalMap:dt,displacementMap:Ht,emissiveMap:Dt,normalMapObjectSpace:dt&&x.normalMapType===eE,normalMapTangentSpace:dt&&x.normalMapType===Ep,packedNormalMap:dt&&x.normalMapType===Ep&&bU(x.normalMap.format),metalnessMap:Vt,roughnessMap:kt,anisotropy:N,anisotropyMap:J,clearcoat:he,clearcoatMap:V,clearcoatNormalMap:ft,clearcoatRoughnessMap:Q,dispersion:mt,retroreflection:T,iridescence:y,iridescenceMap:et,iridescenceThicknessMap:gt,sheen:I,sheenColorMap:wt,sheenRoughnessMap:ht,specularMap:pt,specularColorMap:It,specularIntensityMap:Xt,transmission:G,transmissionMap:Jt,thicknessMap:P,gradientMap:St,opaque:x.transparent===!1&&x.blending===Ul&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:yt,alphaHash:Tt,combine:x.combine,mapUv:Gt&&g(x.map.channel),aoMapUv:ot&&g(x.aoMap.channel),lightMapUv:ut&&g(x.lightMap.channel),bumpMapUv:lt&&g(x.bumpMap.channel),normalMapUv:dt&&g(x.normalMap.channel),displacementMapUv:Ht&&g(x.displacementMap.channel),emissiveMapUv:Dt&&g(x.emissiveMap.channel),metalnessMapUv:Vt&&g(x.metalnessMap.channel),roughnessMapUv:kt&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:V&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ht&&g(x.sheenRoughnessMap.channel),specularMapUv:pt&&g(x.specularMap.channel),specularColorMapUv:It&&g(x.specularColorMap.channel),specularIntensityMapUv:Xt&&g(x.specularIntensityMap.channel),transmissionMapUv:Jt&&g(x.transmissionMap.channel),thicknessMapUv:P&&g(x.thicknessMap.channel),alphaMapUv:tt&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||N),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Gt||tt),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:At,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&ve.getTransfer(x.map.colorSpace)===Ee,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&ve.getTransfer(x.emissiveMap.colorSpace)===Ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ti,flipSided:x.side===Jn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(d(w,x),_(w,x),w.push(e.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function d(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function S(x){let w=f[x.type],R;if(w){let U=Rs[w];R=yE.clone(U.uniforms)}else R=x.uniforms;return R}function v(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new SU(e,w,x,s),c.push(R),h.set(w,R)),R}function E(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:C}}function TU(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function AU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function FE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function HE(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,M,m,d){let _=e[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:g,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:d},e[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=g,_.materialVariant=r(u),_.groupOrder=M,_.renderOrder=u.renderOrder,_.z=m,_.group=d),t++,_}function l(u,f,g,M,m,d,_){_.reversedDepth===!0&&(m=-m);let S=o(u,f,g,M,m,d);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):n.push(S)}function c(u,f,g,M,m,d){let _=o(u,f,g,M,m,d);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):n.unshift(_)}function h(u,f){n.length>1&&n.sort(u||AU),i.length>1&&i.sort(f||FE),s.length>1&&s.sort(f||FE)}function p(){for(let u=t,f=e.length;u<f;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:h}}function wU(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new HE,e.set(i,[r])):s>=a.length?(r=new HE,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function RU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new D,color:new ie};break;case"SpotLight":n={position:new D,direction:new D,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":n={color:new ie,position:new D,halfWidth:new D,halfHeight:new D};break}return e[t.id]=n,n}}}function CU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var NU=0;function DU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function UU(e){let t=new RU,n=CU(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,a=new Pe,r=new Pe;function o(c){let h=0,p=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,M=0,m=0,d=0,_=0,S=0,v=0,E=0,A=0,C=0,x=0,w=0,R=0;c.sort(DU);for(let F=0,q=c.length;F<q;F++){let O=c[F],B=O.color,H=O.intensity,z=O.distance,at=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===tr?at=O.shadow.map.texture:at=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=B.r*H,p+=B.g*H,u+=B.b*H;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(O.sh.coefficients[Y],H);R++}else if(O.isSunLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let j=O.shadow,nt=n.get(O);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=nt,i.sunShadowMap[g]=at;let Nt=j.getViewportCount();for(let At=0;At<Nt;At++)i.sunShadowMatrix[M+At]=j.getMatrix(At),i.sunShadowCascade[M+At]=j._cascadeData[At];M+=Nt,g++}i.sun[f]=Y,f++}else if(O.isDirectionalLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let j=O.shadow,nt=n.get(O);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=at,i.directionalShadowMatrix[m]=O.shadow.matrix,E++}i.directional[m]=Y,m++}else if(O.isSpotLight){let Y=t.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(B).multiplyScalar(H),Y.distance=z,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,i.spot[_]=Y;let j=O.shadow;if(O.map&&(i.spotLightMap[x]=O.map,x++,j.updateMatrices(O),O.castShadow&&w++),i.spotLightMatrix[_]=j.matrix,O.castShadow){let nt=n.get(O);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,i.spotShadow[_]=nt,i.spotShadowMap[_]=at,C++}_++}else if(O.isRectAreaLight){let Y=t.get(O);Y.color.copy(B).multiplyScalar(H),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=Y,S++}else if(O.isPointLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){let j=O.shadow,nt=n.get(O);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,i.pointShadow[d]=nt,i.pointShadowMap[d]=at,i.pointShadowMatrix[d]=O.shadow.matrix,A++}i.point[d]=Y,d++}else if(O.isHemisphereLight){let Y=t.get(O);Y.skyColor.copy(O.color).multiplyScalar(H),Y.groundColor.copy(O.groundColor).multiplyScalar(H),i.hemi[v]=Y,v++}}S>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let U=i.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==d||U.spotLength!==_||U.rectAreaLength!==S||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==E||U.numPointShadows!==A||U.numSpotShadows!==C||U.numSpotMaps!==x||U.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=S,i.point.length=d,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,U.sunLength=f,U.directionalLength=m,U.pointLength=d,U.spotLength=_,U.rectAreaLength=S,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=E,U.numPointShadows=A,U.numSpotShadows=C,U.numSpotMaps=x,U.numLightProbes=R,i.version=NU++)}function l(c,h){let p=0,u=0,f=0,g=0,M=0,m=0,d=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let v=c[_];if(v.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(d),p++}else if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),u++}else if(v.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(v.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),r.identity(),a.copy(v.matrixWorld),a.premultiply(d),r.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),M++}else if(v.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:i}}function VE(e){let t=new UU(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function LU(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new VE(e),t.set(s,[o])):a>=r.length?(o=new VE(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var IU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,PU=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],BU=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],GE=new Pe,Ou=new D,gv=new D;function zU(e,t,n){let i=new Sl,s=new vt,a=new vt,r=new qe,o=new Md,l=new bd,c={},h=n.maxTextureSize,p={[Qa]:Jn,[Jn]:Qa,[Ti]:Ti},u=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:IU,fragmentShader:OU}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Zn;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new tn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let d=this.type;this.render=function(A,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===U1&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Eu);let w=e.getRenderTarget(),R=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Ts),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let q=d!==this.type;q&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(B=>B.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,B=A.length;O<B;O++){let H=A[O],z=H.shadow;if(z===void 0){Zt("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let at=z.getFrameExtents();s.multiply(at),a.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/at.x),s.x=a.x*at.x,z.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/at.y),s.y=a.y*at.y,z.mapSize.y=a.y));let Y=e.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Dl){if(H.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ri(s.x,s.y,{format:tr,type:ts,minFilter:fn,magFilter:fn,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new Xa(s.x,s.y,$i),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=bs,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=xn,z.map.depthTexture.magFilter=xn}else H.isPointLight?(z.map=new Cp(s.x),z.map.depthTexture=new md(s.x,ji)):(z.map=new ri(s.x,s.y),z.map.depthTexture=new Xa(s.x,s.y,ji)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=bs,this.type===Eu?(z.map.depthTexture.compareFunction=Y?Ap:Tp,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=xn,z.map.depthTexture.magFilter=xn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();H.isPointLight!==!0&&z.updateMatrices(H,x);for(let nt=0;nt<j;nt++){let Nt=z.getCamera(nt);if(H.isPointLight){let At=z.camera,ee=z.matrix,Ot=H.distance||At.far;Ot!==At.far&&(At.far=Ot,At.updateProjectionMatrix()),Ou.setFromMatrixPosition(H.matrixWorld),At.position.copy(Ou),gv.copy(At.position),gv.add(PU[nt]),At.up.copy(BU[nt]),At.lookAt(gv),At.updateMatrixWorld(),ee.makeTranslation(-Ou.x,-Ou.y,-Ou.z),GE.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),z._frustum.setFromProjectionMatrix(GE,At.coordinateSystem,At.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,nt),e.clear();else{nt===0&&(e.setRenderTarget(z.map),e.clear());let At=z.getViewport(nt);r.set(a.x*At.x,a.y*At.y,a.x*At.z,a.y*At.w),F.viewport(r)}i=z.getFrustum(nt),v(C,x,Nt,H,this.type)}z.isPointLightShadow!==!0&&this.type===Dl&&_(z,x),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(w,R,U)};function _(A,C){let x=t.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new ri(s.x,s.y,{format:tr,type:ts}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(C,null,x,u,M,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(C,null,x,f,M,null)}function S(A,C,x,w){let R=null,U=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)R=U;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=R.uuid,q=C.uuid,O=c[F];O===void 0&&(O={},c[F]=O);let B=O[q];B===void 0&&(B=R.clone(),O[q]=B,C.addEventListener("dispose",E)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,w===Dl?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:p[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=e.properties.get(R);F.light=x}return R}function v(A,C,x,w,R){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===Dl)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let q=t.update(A),O=A.material;if(Array.isArray(O)){let B=q.groups;for(let H=0,z=B.length;H<z;H++){let at=B[H],Y=O[at.materialIndex];if(Y&&Y.visible){let j=S(A,Y,w,R);A.onBeforeShadow(e,A,C,x,q,j,at),e.renderBufferDirect(x,null,q,j,A,at),A.onAfterShadow(e,A,C,x,q,j,at)}}}else if(O.visible){let B=S(A,O,w,R);A.onBeforeShadow(e,A,C,x,q,B,null),e.renderBufferDirect(x,null,q,B,A,null),A.onAfterShadow(e,A,C,x,q,B,null)}}let F=A.children;for(let q=0,O=F.length;q<O;q++)v(F[q],C,x,w,R)}function E(A){A.target.removeEventListener("dispose",E);for(let x in c){let w=c[x],R=A.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function FU(e,t){function n(){let P=!1,St=new qe,tt=null,yt=new qe(0,0,0,0);return{setMask:function(Tt){tt!==Tt&&!P&&(e.colorMask(Tt,Tt,Tt,Tt),tt=Tt)},setLocked:function(Tt){P=Tt},setClear:function(Tt,rt,Rt,Pt,pe){pe===!0&&(Tt*=Pt,rt*=Pt,Rt*=Pt),St.set(Tt,rt,Rt,Pt),yt.equals(St)===!1&&(e.clearColor(Tt,rt,Rt,Pt),yt.copy(St))},reset:function(){P=!1,tt=null,yt.set(-1,0,0,0)}}}function i(){let P=!1,St=!1,tt=null,yt=null,Tt=null;return{setReversed:function(rt){if(St!==rt){let Rt=t.get("EXT_clip_control");rt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),St=rt;let Pt=Tt;Tt=null,this.setClear(Pt)}},getReversed:function(){return St},setTest:function(rt){rt?$(e.DEPTH_TEST):_t(e.DEPTH_TEST)},setMask:function(rt){tt!==rt&&!P&&(e.depthMask(rt),tt=rt)},setFunc:function(rt){if(St&&(rt=dE[rt]),yt!==rt){switch(rt){case nd:e.depthFunc(e.NEVER);break;case id:e.depthFunc(e.ALWAYS);break;case sd:e.depthFunc(e.LESS);break;case fl:e.depthFunc(e.LEQUAL);break;case ad:e.depthFunc(e.EQUAL);break;case rd:e.depthFunc(e.GEQUAL);break;case od:e.depthFunc(e.GREATER);break;case ld:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}yt=rt}},setLocked:function(rt){P=rt},setClear:function(rt){Tt!==rt&&(Tt=rt,St&&(rt=1-rt),e.clearDepth(rt))},reset:function(){P=!1,tt=null,yt=null,Tt=null,St=!1}}}function s(){let P=!1,St=null,tt=null,yt=null,Tt=null,rt=null,Rt=null,Pt=null,pe=null;return{setTest:function(oe){P||(oe?$(e.STENCIL_TEST):_t(e.STENCIL_TEST))},setMask:function(oe){St!==oe&&!P&&(e.stencilMask(oe),St=oe)},setFunc:function(oe,Be,li){(tt!==oe||yt!==Be||Tt!==li)&&(e.stencilFunc(oe,Be,li),tt=oe,yt=Be,Tt=li)},setOp:function(oe,Be,li){(rt!==oe||Rt!==Be||Pt!==li)&&(e.stencilOp(oe,Be,li),rt=oe,Rt=Be,Pt=li)},setLocked:function(oe){P=oe},setClear:function(oe){pe!==oe&&(e.clearStencil(oe),pe=oe)},reset:function(){P=!1,St=null,tt=null,yt=null,Tt=null,rt=null,Rt=null,Pt=null,pe=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},f=new WeakMap,g=[],M=null,m=!1,d=null,_=null,S=null,v=null,E=null,A=null,C=null,x=new ie(0,0,0),w=0,R=!1,U=null,F=null,q=null,O=null,B=null,H=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,at=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=at>=1):Y.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=at>=2);let j=null,nt={},Nt=e.getParameter(e.SCISSOR_BOX),At=e.getParameter(e.VIEWPORT),ee=new qe().fromArray(Nt),Ot=new qe().fromArray(At);function qt(P,St,tt,yt){let Tt=new Uint8Array(4),rt=e.createTexture();e.bindTexture(P,rt),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Rt=0;Rt<tt;Rt++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(St,0,e.RGBA,1,1,yt,0,e.RGBA,e.UNSIGNED_BYTE,Tt):e.texImage2D(St+Rt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Tt);return rt}let W={};W[e.TEXTURE_2D]=qt(e.TEXTURE_2D,e.TEXTURE_2D,1),W[e.TEXTURE_CUBE_MAP]=qt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[e.TEXTURE_2D_ARRAY]=qt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),W[e.TEXTURE_3D]=qt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),$(e.DEPTH_TEST),r.setFunc(fl),lt(!1),dt(U_),$(e.CULL_FACE),ot(Ts);function $(P){h[P]!==!0&&(e.enable(P),h[P]=!0)}function _t(P){h[P]!==!1&&(e.disable(P),h[P]=!1)}function Ft(P,St){return u[P]!==St?(e.bindFramebuffer(P,St),u[P]=St,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=St),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=St),!0):!1}function bt(P,St){let tt=g,yt=!1;if(P){tt=f.get(St),tt===void 0&&(tt=[],f.set(St,tt));let Tt=P.textures;if(tt.length!==Tt.length||tt[0]!==e.COLOR_ATTACHMENT0){for(let rt=0,Rt=Tt.length;rt<Rt;rt++)tt[rt]=e.COLOR_ATTACHMENT0+rt;tt.length=Tt.length,yt=!0}}else tt[0]!==e.BACK&&(tt[0]=e.BACK,yt=!0);yt&&e.drawBuffers(tt)}function Gt(P){return M!==P?(e.useProgram(P),M=P,!0):!1}let re={[Fr]:e.FUNC_ADD,[I1]:e.FUNC_SUBTRACT,[O1]:e.FUNC_REVERSE_SUBTRACT};re[P1]=e.MIN,re[B1]=e.MAX;let it={[z1]:e.ZERO,[F1]:e.ONE,[H1]:e.SRC_COLOR,[P_]:e.SRC_ALPHA,[q1]:e.SRC_ALPHA_SATURATE,[X1]:e.DST_COLOR,[G1]:e.DST_ALPHA,[V1]:e.ONE_MINUS_SRC_COLOR,[B_]:e.ONE_MINUS_SRC_ALPHA,[W1]:e.ONE_MINUS_DST_COLOR,[k1]:e.ONE_MINUS_DST_ALPHA,[Y1]:e.CONSTANT_COLOR,[Z1]:e.ONE_MINUS_CONSTANT_COLOR,[J1]:e.CONSTANT_ALPHA,[K1]:e.ONE_MINUS_CONSTANT_ALPHA};function ot(P,St,tt,yt,Tt,rt,Rt,Pt,pe,oe){if(P===Ts){m===!0&&(_t(e.BLEND),m=!1);return}if(m===!1&&($(e.BLEND),m=!0),P!==L1){if(P!==d||oe!==R){if((_!==Fr||E!==Fr)&&(e.blendEquation(e.FUNC_ADD),_=Fr,E=Fr),oe)switch(P){case Ul:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case L_:e.blendFunc(e.ONE,e.ONE);break;case I_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case O_:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Yt("WebGLState: Invalid blending: ",P);break}else switch(P){case Ul:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case L_:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case I_:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case O_:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",P);break}S=null,v=null,A=null,C=null,x.set(0,0,0),w=0,d=P,R=oe}return}Tt=Tt||St,rt=rt||tt,Rt=Rt||yt,(St!==_||Tt!==E)&&(e.blendEquationSeparate(re[St],re[Tt]),_=St,E=Tt),(tt!==S||yt!==v||rt!==A||Rt!==C)&&(e.blendFuncSeparate(it[tt],it[yt],it[rt],it[Rt]),S=tt,v=yt,A=rt,C=Rt),(Pt.equals(x)===!1||pe!==w)&&(e.blendColor(Pt.r,Pt.g,Pt.b,pe),x.copy(Pt),w=pe),d=P,R=!1}function ut(P,St){P.side===Ti?_t(e.CULL_FACE):$(e.CULL_FACE);let tt=P.side===Jn;St&&(tt=!tt),lt(tt),P.blending===Ul&&P.transparent===!1?ot(Ts):ot(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);let yt=P.stencilWrite;o.setTest(yt),yt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Dt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(e.SAMPLE_ALPHA_TO_COVERAGE):_t(e.SAMPLE_ALPHA_TO_COVERAGE)}function lt(P){U!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),U=P)}function dt(P){P!==N1?($(e.CULL_FACE),P!==F&&(P===U_?e.cullFace(e.BACK):P===D1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):_t(e.CULL_FACE),F=P}function Ht(P){P!==q&&(z&&e.lineWidth(P),q=P)}function Dt(P,St,tt){P?($(e.POLYGON_OFFSET_FILL),(O!==St||B!==tt)&&(O=St,B=tt,r.getReversed()&&(St=-St),e.polygonOffset(St,tt))):_t(e.POLYGON_OFFSET_FILL)}function Vt(P){P?$(e.SCISSOR_TEST):_t(e.SCISSOR_TEST)}function kt(P){P===void 0&&(P=e.TEXTURE0+H-1),j!==P&&(e.activeTexture(P),j=P)}function N(P,St,tt){tt===void 0&&(j===null?tt=e.TEXTURE0+H-1:tt=j);let yt=nt[tt];yt===void 0&&(yt={type:void 0,texture:void 0},nt[tt]=yt),(yt.type!==P||yt.texture!==St)&&(j!==tt&&(e.activeTexture(tt),j=tt),e.bindTexture(P,St||W[P]),yt.type=P,yt.texture=St)}function he(){let P=nt[j];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function mt(){try{e.compressedTexImage2D(...arguments)}catch(P){Yt("WebGLState:",P)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(P){Yt("WebGLState:",P)}}function y(){try{e.texSubImage2D(...arguments)}catch(P){Yt("WebGLState:",P)}}function I(){try{e.texSubImage3D(...arguments)}catch(P){Yt("WebGLState:",P)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(P){Yt("WebGLState:",P)}}function J(){try{e.compressedTexSubImage3D(...arguments)}catch(P){Yt("WebGLState:",P)}}function V(){try{e.texStorage2D(...arguments)}catch(P){Yt("WebGLState:",P)}}function ft(){try{e.texStorage3D(...arguments)}catch(P){Yt("WebGLState:",P)}}function Q(){try{e.texImage2D(...arguments)}catch(P){Yt("WebGLState:",P)}}function et(){try{e.texImage3D(...arguments)}catch(P){Yt("WebGLState:",P)}}function gt(P){return p[P]!==void 0?p[P]:e.getParameter(P)}function wt(P,St){p[P]!==St&&(e.pixelStorei(P,St),p[P]=St)}function ht(P){ee.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function pt(P){Ot.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),Ot.copy(P))}function It(P,St){let tt=c.get(St);tt===void 0&&(tt=new WeakMap,c.set(St,tt));let yt=tt.get(P);yt===void 0&&(yt=e.getUniformBlockIndex(St,P.name),tt.set(P,yt))}function Xt(P,St){let yt=c.get(St).get(P);l.get(St)!==yt&&(e.uniformBlockBinding(St,yt,P.__bindingPointIndex),l.set(St,yt))}function Jt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},j=null,nt={},u={},f=new WeakMap,g=[],M=null,m=!1,d=null,_=null,S=null,v=null,E=null,A=null,C=null,x=new ie(0,0,0),w=0,R=!1,U=null,F=null,q=null,O=null,B=null,ee.set(0,0,e.canvas.width,e.canvas.height),Ot.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:$,disable:_t,bindFramebuffer:Ft,drawBuffers:bt,useProgram:Gt,setBlending:ot,setMaterial:ut,setFlipSided:lt,setCullFace:dt,setLineWidth:Ht,setPolygonOffset:Dt,setScissorTest:Vt,activeTexture:kt,bindTexture:N,unbindTexture:he,compressedTexImage2D:mt,compressedTexImage3D:T,texImage2D:Q,texImage3D:et,pixelStorei:wt,getParameter:gt,updateUBOMapping:It,uniformBlockBinding:Xt,texStorage2D:V,texStorage3D:ft,texSubImage2D:y,texSubImage3D:I,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:ht,viewport:pt,reset:Jt}}function HU(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,p=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,y){return g?new OffscreenCanvas(T,y):ru("canvas")}function m(T,y,I){let G=1,J=mt(T);if((J.width>I||J.height>I)&&(G=I/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let V=Math.floor(G*J.width),ft=Math.floor(G*J.height);u===void 0&&(u=M(V,ft));let Q=y?M(V,ft):u;return Q.width=V,Q.height=ft,Q.getContext("2d").drawImage(T,0,0,V,ft),Zt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+ft+")."),Q}else return"data"in T&&Zt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function d(T){return T.generateMipmaps}function _(T){e.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(T,y,I,G,J,V=!1){if(T!==null){if(e[T]!==void 0)return e[T];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ft;G&&(ft=t.get("EXT_texture_norm16"),ft||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===e.RED&&(I===e.FLOAT&&(Q=e.R32F),I===e.HALF_FLOAT&&(Q=e.R16F),I===e.UNSIGNED_BYTE&&(Q=e.R8),I===e.UNSIGNED_SHORT&&ft&&(Q=ft.R16_EXT),I===e.SHORT&&ft&&(Q=ft.R16_SNORM_EXT)),y===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(Q=e.R8UI),I===e.UNSIGNED_SHORT&&(Q=e.R16UI),I===e.UNSIGNED_INT&&(Q=e.R32UI),I===e.BYTE&&(Q=e.R8I),I===e.SHORT&&(Q=e.R16I),I===e.INT&&(Q=e.R32I)),y===e.RG&&(I===e.FLOAT&&(Q=e.RG32F),I===e.HALF_FLOAT&&(Q=e.RG16F),I===e.UNSIGNED_BYTE&&(Q=e.RG8),I===e.UNSIGNED_SHORT&&ft&&(Q=ft.RG16_EXT),I===e.SHORT&&ft&&(Q=ft.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(Q=e.RG8UI),I===e.UNSIGNED_SHORT&&(Q=e.RG16UI),I===e.UNSIGNED_INT&&(Q=e.RG32UI),I===e.BYTE&&(Q=e.RG8I),I===e.SHORT&&(Q=e.RG16I),I===e.INT&&(Q=e.RG32I)),y===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(Q=e.RGB8UI),I===e.UNSIGNED_SHORT&&(Q=e.RGB16UI),I===e.UNSIGNED_INT&&(Q=e.RGB32UI),I===e.BYTE&&(Q=e.RGB8I),I===e.SHORT&&(Q=e.RGB16I),I===e.INT&&(Q=e.RGB32I)),y===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(Q=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(Q=e.RGBA16UI),I===e.UNSIGNED_INT&&(Q=e.RGBA32UI),I===e.BYTE&&(Q=e.RGBA8I),I===e.SHORT&&(Q=e.RGBA16I),I===e.INT&&(Q=e.RGBA32I)),y===e.RGB&&(I===e.UNSIGNED_SHORT&&ft&&(Q=ft.RGB16_EXT),I===e.SHORT&&ft&&(Q=ft.RGB16_SNORM_EXT),I===e.UNSIGNED_INT_5_9_9_9_REV&&(Q=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(Q=e.R11F_G11F_B10F)),y===e.RGBA){let et=V?au:ve.getTransfer(J);I===e.FLOAT&&(Q=e.RGBA32F),I===e.HALF_FLOAT&&(Q=e.RGBA16F),I===e.UNSIGNED_BYTE&&(Q=et===Ee?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT&&ft&&(Q=ft.RGBA16_EXT),I===e.SHORT&&ft&&(Q=ft.RGBA16_SNORM_EXT),I===e.UNSIGNED_SHORT_4_4_4_4&&(Q=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(Q=e.RGB5_A1)}return(Q===e.R16F||Q===e.R32F||Q===e.RG16F||Q===e.RG32F||Q===e.RGBA16F||Q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function E(T,y){let I;return T?y===null||y===ji||y===Il?I=e.DEPTH24_STENCIL8:y===$i?I=e.DEPTH32F_STENCIL8:y===Ll&&(I=e.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ji||y===Il?I=e.DEPTH_COMPONENT24:y===$i?I=e.DEPTH_COMPONENT32F:y===Ll&&(I=e.DEPTH_COMPONENT16),I}function A(T,y){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==xn&&T.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function C(T){let y=T.target;y.removeEventListener("dispose",C),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function x(T){let y=T.target;y.removeEventListener("dispose",x),U(y)}function w(T){let y=i.get(T);if(y.__webglInit===void 0)return;let I=T.source,G=f.get(I);if(G){let J=G[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(T),Object.keys(G).length===0&&f.delete(I)}i.remove(T)}function R(T){let y=i.get(T);e.deleteTexture(y.__webglTexture);let I=T.source,G=f.get(I);delete G[y.__cacheKey],r.memory.textures--}function U(T){let y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let J=0;J<y.__webglFramebuffer[G].length;J++)e.deleteFramebuffer(y.__webglFramebuffer[G][J]);else e.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)e.deleteFramebuffer(y.__webglFramebuffer[G]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let I=T.textures;for(let G=0,J=I.length;G<J;G++){let V=i.get(I[G]);V.__webglTexture&&(e.deleteTexture(V.__webglTexture),r.memory.textures--),i.remove(I[G])}i.remove(T)}let F=0;function q(){F=0}function O(){return F}function B(T){F=T}function H(){let T=F;return T>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,T}function z(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function at(T,y){let I=i.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){let G=T.image;if(G===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(I,T,y);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+y)}function Y(T,y){let I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){_t(I,T,y);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+y)}function j(T,y){let I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){_t(I,T,y);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+y)}function nt(T,y){let I=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){Ft(I,T,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+y)}let Nt={[Ms]:e.REPEAT,[Bi]:e.CLAMP_TO_EDGE,[cd]:e.MIRRORED_REPEAT},At={[xn]:e.NEAREST,[$1]:e.NEAREST_MIPMAP_NEAREST,[wu]:e.NEAREST_MIPMAP_LINEAR,[fn]:e.LINEAR,[Vd]:e.LINEAR_MIPMAP_NEAREST,[As]:e.LINEAR_MIPMAP_LINEAR},ee={[iE]:e.NEVER,[lE]:e.ALWAYS,[sE]:e.LESS,[Tp]:e.LEQUAL,[aE]:e.EQUAL,[Ap]:e.GEQUAL,[rE]:e.GREATER,[oE]:e.NOTEQUAL};function Ot(T,y){if(y.type===$i&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===Vd||y.magFilter===wu||y.magFilter===As||y.minFilter===fn||y.minFilter===Vd||y.minFilter===wu||y.minFilter===As)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,Nt[y.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,Nt[y.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,Nt[y.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,At[y.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,At[y.minFilter]),y.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,ee[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==wu&&y.minFilter!==As||y.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function qt(T,y){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));let G=y.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let V=z(y);if(V!==T.__cacheKey){J[V]===void 0&&(J[V]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),J[V].usedTimes++;let ft=J[T.__cacheKey];ft!==void 0&&(J[T.__cacheKey].usedTimes--,ft.usedTimes===0&&R(y)),T.__cacheKey=V,T.__webglTexture=J[V].texture}return I}function W(T,y,I){return Math.floor(Math.floor(T/I)/y)}function $(T,y,I,G){let V=T.updateRanges;if(V.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,I,G,y.data);else{V.sort((wt,ht)=>wt.start-ht.start);let ft=0;for(let wt=1;wt<V.length;wt++){let ht=V[ft],pt=V[wt],It=ht.start+ht.count,Xt=W(pt.start,y.width,4),Jt=W(ht.start,y.width,4);pt.start<=It+1&&Xt===Jt&&W(pt.start+pt.count-1,y.width,4)===Xt?ht.count=Math.max(ht.count,pt.start+pt.count-ht.start):(++ft,V[ft]=pt)}V.length=ft+1;let Q=n.getParameter(e.UNPACK_ROW_LENGTH),et=n.getParameter(e.UNPACK_SKIP_PIXELS),gt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let wt=0,ht=V.length;wt<ht;wt++){let pt=V[wt],It=Math.floor(pt.start/4),Xt=Math.ceil(pt.count/4),Jt=It%y.width,P=Math.floor(It/y.width),St=Xt,tt=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Jt),n.pixelStorei(e.UNPACK_SKIP_ROWS,P),n.texSubImage2D(e.TEXTURE_2D,0,Jt,P,St,tt,I,G,y.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,et),n.pixelStorei(e.UNPACK_SKIP_ROWS,gt)}}function _t(T,y,I){let G=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=e.TEXTURE_3D);let J=qt(T,y),V=y.source;n.bindTexture(G,T.__webglTexture,e.TEXTURE0+I);let ft=i.get(V);if(V.version!==ft.__version||J===!0){if(n.activeTexture(e.TEXTURE0+I),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let tt=ve.getPrimaries(ve.workingColorSpace),yt=y.colorSpace===ta?null:ve.getPrimaries(y.colorSpace),Tt=y.colorSpace===ta||tt===yt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let et=m(y.image,!1,s.maxTextureSize);et=he(y,et);let gt=a.convert(y.format,y.colorSpace),wt=a.convert(y.type),ht=v(y.internalFormat,gt,wt,y.normalized,y.colorSpace,y.isVideoTexture);Ot(G,y);let pt,It=y.mipmaps,Xt=y.isVideoTexture!==!0,Jt=ft.__version===void 0||J===!0,P=V.dataReady,St=A(y,et);if(y.isDepthTexture)ht=E(y.format===$a,y.type),Jt&&(Xt?n.texStorage2D(e.TEXTURE_2D,1,ht,et.width,et.height):n.texImage2D(e.TEXTURE_2D,0,ht,et.width,et.height,0,gt,wt,null));else if(y.isDataTexture)if(It.length>0){Xt&&Jt&&n.texStorage2D(e.TEXTURE_2D,St,ht,It[0].width,It[0].height);for(let tt=0,yt=It.length;tt<yt;tt++)pt=It[tt],Xt?P&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,pt.width,pt.height,gt,wt,pt.data):n.texImage2D(e.TEXTURE_2D,tt,ht,pt.width,pt.height,0,gt,wt,pt.data);y.generateMipmaps=!1}else Xt?(Jt&&n.texStorage2D(e.TEXTURE_2D,St,ht,et.width,et.height),P&&$(y,et,gt,wt)):n.texImage2D(e.TEXTURE_2D,0,ht,et.width,et.height,0,gt,wt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&Jt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,St,ht,It[0].width,It[0].height,et.depth);for(let tt=0,yt=It.length;tt<yt;tt++)if(pt=It[tt],y.format!==zi)if(gt!==null)if(Xt){if(P)if(y.layerUpdates.size>0){let Tt=av(pt.width,pt.height,y.format,y.type);for(let rt of y.layerUpdates){let Rt=pt.data.subarray(rt*Tt/pt.data.BYTES_PER_ELEMENT,(rt+1)*Tt/pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,rt,pt.width,pt.height,1,gt,Rt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,et.depth,gt,pt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,tt,ht,pt.width,pt.height,et.depth,0,pt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?P&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,et.depth,gt,wt,pt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,tt,ht,pt.width,pt.height,et.depth,0,gt,wt,pt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Xt&&Jt&&n.texStorage2D(e.TEXTURE_2D,St,ht,It[0].width,It[0].height);for(let tt=0,yt=It.length;tt<yt;tt++)pt=It[tt],y.format!==zi?gt!==null?Xt?P&&n.compressedTexSubImage2D(e.TEXTURE_2D,tt,0,0,pt.width,pt.height,gt,pt.data):n.compressedTexImage2D(e.TEXTURE_2D,tt,ht,pt.width,pt.height,0,pt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?P&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,pt.width,pt.height,gt,wt,pt.data):n.texImage2D(e.TEXTURE_2D,tt,ht,pt.width,pt.height,0,gt,wt,pt.data)}else if(y.isDataArrayTexture)if(Xt){if(Jt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,St,ht,et.width,et.height,et.depth),P)if(y.layerUpdates.size>0){let tt=av(et.width,et.height,y.format,y.type);for(let yt of y.layerUpdates){let Tt=et.data.subarray(yt*tt/et.data.BYTES_PER_ELEMENT,(yt+1)*tt/et.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,yt,et.width,et.height,1,gt,wt,Tt)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,wt,et.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ht,et.width,et.height,et.depth,0,gt,wt,et.data);else if(y.isData3DTexture)Xt?(Jt&&n.texStorage3D(e.TEXTURE_3D,St,ht,et.width,et.height,et.depth),P&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,wt,et.data)):n.texImage3D(e.TEXTURE_3D,0,ht,et.width,et.height,et.depth,0,gt,wt,et.data);else if(y.isFramebufferTexture){if(Jt)if(Xt)n.texStorage2D(e.TEXTURE_2D,St,ht,et.width,et.height);else{let tt=et.width,yt=et.height;for(let Tt=0;Tt<St;Tt++)n.texImage2D(e.TEXTURE_2D,Tt,ht,tt,yt,0,gt,wt,null),tt>>=1,yt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let tt=e.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),p.add(y),tt.onpaint=yt=>{let Tt=yt.changedElements;for(let rt of p)Tt.includes(rt.image)&&(rt.needsUpdate=!0)},tt.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,et);else{let Tt=e.RGBA,rt=e.RGBA,Rt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Tt,rt,Rt,et)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(It.length>0){if(Xt&&Jt){let tt=mt(It[0]);n.texStorage2D(e.TEXTURE_2D,St,ht,tt.width,tt.height)}for(let tt=0,yt=It.length;tt<yt;tt++)pt=It[tt],Xt?P&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,gt,wt,pt):n.texImage2D(e.TEXTURE_2D,tt,ht,gt,wt,pt);y.generateMipmaps=!1}else if(Xt){if(Jt){let tt=mt(et);n.texStorage2D(e.TEXTURE_2D,St,ht,tt.width,tt.height)}P&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,gt,wt,et)}else n.texImage2D(e.TEXTURE_2D,0,ht,gt,wt,et);d(y)&&_(G),ft.__version=V.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Ft(T,y,I){if(y.image.length!==6)return;let G=qt(T,y),J=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+I);let V=i.get(J);if(J.version!==V.__version||G===!0){n.activeTexture(e.TEXTURE0+I);let ft=ve.getPrimaries(ve.workingColorSpace),Q=y.colorSpace===ta?null:ve.getPrimaries(y.colorSpace),et=y.colorSpace===ta||ft===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let gt=y.isCompressedTexture||y.image[0].isCompressedTexture,wt=y.image[0]&&y.image[0].isDataTexture,ht=[];for(let rt=0;rt<6;rt++)!gt&&!wt?ht[rt]=m(y.image[rt],!0,s.maxCubemapSize):ht[rt]=wt?y.image[rt].image:y.image[rt],ht[rt]=he(y,ht[rt]);let pt=ht[0],It=a.convert(y.format,y.colorSpace),Xt=a.convert(y.type),Jt=v(y.internalFormat,It,Xt,y.normalized,y.colorSpace),P=y.isVideoTexture!==!0,St=V.__version===void 0||G===!0,tt=J.dataReady,yt=A(y,pt);Ot(e.TEXTURE_CUBE_MAP,y);let Tt;if(gt){P&&St&&n.texStorage2D(e.TEXTURE_CUBE_MAP,yt,Jt,pt.width,pt.height);for(let rt=0;rt<6;rt++){Tt=ht[rt].mipmaps;for(let Rt=0;Rt<Tt.length;Rt++){let Pt=Tt[Rt];y.format!==zi?It!==null?P?tt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,0,0,Pt.width,Pt.height,It,Pt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,Jt,Pt.width,Pt.height,0,Pt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,0,0,Pt.width,Pt.height,It,Xt,Pt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,Jt,Pt.width,Pt.height,0,It,Xt,Pt.data)}}}else{if(Tt=y.mipmaps,P&&St){Tt.length>0&&yt++;let rt=mt(ht[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,yt,Jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(wt){P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ht[rt].width,ht[rt].height,It,Xt,ht[rt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,ht[rt].width,ht[rt].height,0,It,Xt,ht[rt].data);for(let Rt=0;Rt<Tt.length;Rt++){let pe=Tt[Rt].image[rt].image;P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,0,0,pe.width,pe.height,It,Xt,pe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,Jt,pe.width,pe.height,0,It,Xt,pe.data)}}else{P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,It,Xt,ht[rt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,It,Xt,ht[rt]);for(let Rt=0;Rt<Tt.length;Rt++){let Pt=Tt[Rt];P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,0,0,It,Xt,Pt.image[rt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,Jt,It,Xt,Pt.image[rt])}}}d(y)&&_(e.TEXTURE_CUBE_MAP),V.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function bt(T,y,I,G,J,V){let ft=a.convert(I.format,I.colorSpace),Q=a.convert(I.type),et=v(I.internalFormat,ft,Q,I.normalized,I.colorSpace),gt=i.get(y),wt=i.get(I);if(wt.__renderTarget=y,!gt.__hasExternalTextures){let ht=Math.max(1,y.width>>V),pt=Math.max(1,y.height>>V);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,V,et,ht,pt,y.depth,0,ft,Q,null):n.texImage2D(J,V,et,ht,pt,0,ft,Q,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),kt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,J,wt.__webglTexture,0,Vt(y)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,J,wt.__webglTexture,V),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Gt(T,y,I){if(e.bindRenderbuffer(e.RENDERBUFFER,T),y.depthBuffer){let G=y.depthTexture,J=G&&G.isDepthTexture?G.type:null,V=E(y.stencilBuffer,J),ft=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;kt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Vt(y),V,y.width,y.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,Vt(y),V,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,V,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ft,e.RENDERBUFFER,T)}else{let G=y.textures;for(let J=0;J<G.length;J++){let V=G[J],ft=a.convert(V.format,V.colorSpace),Q=a.convert(V.type),et=v(V.internalFormat,ft,Q,V.normalized,V.colorSpace);kt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Vt(y),et,y.width,y.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,Vt(y),et,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,et,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function re(T,y,I){let G=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),Ot(e.TEXTURE_CUBE_MAP,y.depthTexture);let gt=a.convert(y.depthTexture.format),wt=a.convert(y.depthTexture.type),ht;y.depthTexture.format===bs?ht=e.DEPTH_COMPONENT24:y.depthTexture.format===$a&&(ht=e.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ht,y.width,y.height,0,gt,wt,null)}}else at(y.depthTexture,0);let V=J.__webglTexture,ft=Vt(y),Q=G?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,et=y.depthTexture.format===$a?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===bs)kt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,et,Q,V,0,ft):e.framebufferTexture2D(e.FRAMEBUFFER,et,Q,V,0);else if(y.depthTexture.format===$a)kt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,et,Q,V,0,ft):e.framebufferTexture2D(e.FRAMEBUFFER,et,Q,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(T){let y=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let G=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=G}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(I)for(let G=0;G<6;G++)re(y.__webglFramebuffer[G],T,G);else{let G=T.texture.mipmaps;G&&G.length>0?re(y.__webglFramebuffer[0],T,0):re(y.__webglFramebuffer,T,0)}else if(I){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=e.createRenderbuffer(),Gt(y.__webglDepthbuffer[G],T,!1);else{let J=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,V)}}else{let G=T.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Gt(y.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,V)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ot(T,y,I){let G=i.get(T);y!==void 0&&bt(G.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&it(T)}function ut(T){let y=T.texture,I=i.get(T),G=i.get(y);T.addEventListener("dispose",x);let J=T.textures,V=T.isWebGLCubeRenderTarget===!0,ft=J.length>1;if(ft||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=y.version,r.memory.textures++),V){I.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[Q]=[];for(let et=0;et<y.mipmaps.length;et++)I.__webglFramebuffer[Q][et]=e.createFramebuffer()}else I.__webglFramebuffer[Q]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)I.__webglFramebuffer[Q]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(ft)for(let Q=0,et=J.length;Q<et;Q++){let gt=i.get(J[Q]);gt.__webglTexture===void 0&&(gt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&kt(T)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){let et=J[Q];I.__webglColorRenderbuffer[Q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[Q]);let gt=a.convert(et.format,et.colorSpace),wt=a.convert(et.type),ht=v(et.internalFormat,gt,wt,et.normalized,et.colorSpace,T.isXRRenderTarget===!0),pt=Vt(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,pt,ht,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,I.__webglColorRenderbuffer[Q])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Gt(I.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(V){n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Ot(e.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)bt(I.__webglFramebuffer[Q][et],T,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,et);else bt(I.__webglFramebuffer[Q],T,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);d(y)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ft){for(let Q=0,et=J.length;Q<et;Q++){let gt=J[Q],wt=i.get(gt),ht=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ht,wt.__webglTexture),Ot(ht,gt),bt(I.__webglFramebuffer,T,gt,e.COLOR_ATTACHMENT0+Q,ht,0),d(gt)&&_(ht)}n.unbindTexture()}else{let Q=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Q,G.__webglTexture),Ot(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)bt(I.__webglFramebuffer[et],T,y,e.COLOR_ATTACHMENT0,Q,et);else bt(I.__webglFramebuffer,T,y,e.COLOR_ATTACHMENT0,Q,0);d(y)&&_(Q),n.unbindTexture()}T.depthBuffer&&it(T)}function lt(T){let y=T.textures;for(let I=0,G=y.length;I<G;I++){let J=y[I];if(d(J)){let V=S(T),ft=i.get(J).__webglTexture;n.bindTexture(V,ft),_(V),n.unbindTexture()}}}let dt=[],Ht=[];function Dt(T){if(T.samples>0){if(kt(T)===!1){let y=T.textures,I=T.width,G=T.height,J=e.COLOR_BUFFER_BIT,V=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=i.get(T),Q=y.length>1;if(Q)for(let gt=0;gt<y.length;gt++)n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+gt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+gt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let et=T.texture.mipmaps;et&&et.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),Q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ft.__webglColorRenderbuffer[gt]);let wt=i.get(y[gt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,wt,0)}e.blitFramebuffer(0,0,I,G,0,0,I,G,J,e.NEAREST),l===!0&&(dt.length=0,Ht.length=0,dt.push(e.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(dt.push(V),Ht.push(V),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ht)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,dt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Q)for(let gt=0;gt<y.length;gt++){n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+gt,e.RENDERBUFFER,ft.__webglColorRenderbuffer[gt]);let wt=i.get(y[gt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+gt,e.TEXTURE_2D,wt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let y=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Vt(T){return Math.min(s.maxSamples,T.samples)}function kt(T){let y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(T){let y=r.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function he(T,y){let I=T.colorSpace,G=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==su&&I!==ta&&(ve.getTransfer(I)===Ee?(G!==zi||J!==oi)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",I)),y}function mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.getTextureUnits=O,this.setTextureUnits=B,this.setTexture2D=at,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=nt,this.rebindTextures=ot,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function VU(e,t){function n(i,s=ta){let a,r=ve.getTransfer(s);if(i===oi)return e.UNSIGNED_BYTE;if(i===kd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Xd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Z_)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===J_)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===q_)return e.BYTE;if(i===Y_)return e.SHORT;if(i===Ll)return e.UNSIGNED_SHORT;if(i===Gd)return e.INT;if(i===ji)return e.UNSIGNED_INT;if(i===$i)return e.FLOAT;if(i===ts)return e.HALF_FLOAT;if(i===K_)return e.ALPHA;if(i===Q_)return e.RGB;if(i===zi)return e.RGBA;if(i===bs)return e.DEPTH_COMPONENT;if(i===$a)return e.DEPTH_STENCIL;if(i===j_)return e.RED;if(i===Wd)return e.RED_INTEGER;if(i===tr)return e.RG;if(i===qd)return e.RG_INTEGER;if(i===Yd)return e.RGBA_INTEGER;if(i===Ru||i===Cu||i===Nu||i===Du)if(r===Ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ru)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ru)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Du)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zd||i===Jd||i===Kd||i===Qd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Zd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jd||i===$d||i===tp||i===ep||i===np||i===Uu||i===ip)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===jd||i===$d)return r===Ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===tp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===ep)return a.COMPRESSED_R11_EAC;if(i===np)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Uu)return a.COMPRESSED_RG11_EAC;if(i===ip)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sp||i===ap||i===rp||i===op||i===lp||i===cp||i===up||i===hp||i===fp||i===dp||i===pp||i===mp||i===gp||i===_p)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===sp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ap)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===op)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===up)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gp)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_p)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vp||i===yp||i===xp)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===vp)return r===Ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===Mp||i===Lu||i===bp)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Sp)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Mp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Il?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var GU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ev=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new fu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new bi({vertexShader:GU,fragmentShader:kU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tn(new qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tv=class extends Es{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,g=null,M=typeof XRWebGLBinding<"u",m=new Ev,d={},_=n.getContextAttributes(),S=null,v=null,E=[],A=[],C=new vt,x=null,w=null,R=new Pn;R.viewport=new qe;let U=new Pn;U.viewport=new qe;let F=[R,U],q=new Bd,O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=E[W];return $===void 0&&($=new _l,E[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=E[W];return $===void 0&&($=new _l,E[W]=$),$.getGripSpace()},this.getHand=function(W){let $=E[W];return $===void 0&&($=new _l,E[W]=$),$.getHandSpace()};function H(W){let $=A.indexOf(W.inputSource);if($===-1)return;let _t=E[$];_t!==void 0&&(_t.update(W.inputSource,W.frame,c||r),_t.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",at);for(let W=0;W<E.length;W++){let $=A[W];$!==null&&(A[W]=null,E[W].disconnect($))}O=null,B=null,m.reset();for(let W in d)delete d[W];if(t.setRenderTarget(S),f=null,u=null,p=null,s=null,v=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),w!==null){let W=w.camera;W.fov=w.fov,W.zoom=w.zoom,W.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",z),s.addEventListener("inputsourceschange",at),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ft=null,bt=null;_.depth&&(bt=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_t=_.stencil?$a:bs,Ft=_.stencil?Il:ji);let Gt={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ri(u.textureWidth,u.textureHeight,{format:zi,type:oi,depthTexture:new Xa(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,n,_t),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ri(f.framebufferWidth,f.framebufferHeight,{format:zi,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(W){for(let $=0;$<W.removed.length;$++){let _t=W.removed[$],Ft=A.indexOf(_t);Ft>=0&&(A[Ft]=null,E[Ft].disconnect(_t))}for(let $=0;$<W.added.length;$++){let _t=W.added[$],Ft=A.indexOf(_t);if(Ft===-1){for(let Gt=0;Gt<E.length;Gt++)if(Gt>=A.length){A.push(_t),Ft=Gt;break}else if(A[Gt]===null){A[Gt]=_t,Ft=Gt;break}if(Ft===-1)break}let bt=E[Ft];bt&&bt.connect(_t)}}let Y=new D,j=new D;function nt(W,$,_t){Y.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let Ft=Y.distanceTo(j),bt=$.projectionMatrix.elements,Gt=_t.projectionMatrix.elements,re=bt[14]/(bt[10]-1),it=bt[14]/(bt[10]+1),ot=(bt[9]+1)/bt[5],ut=(bt[9]-1)/bt[5],lt=(bt[8]-1)/bt[0],dt=(Gt[8]+1)/Gt[0],Ht=re*lt,Dt=re*dt,Vt=Ft/(-lt+dt),kt=Vt*-lt;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(kt),W.translateZ(Vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),bt[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let N=re+Vt,he=it+Vt,mt=Ht-kt,T=Dt+(Ft-kt),y=ot*it/he*N,I=ut*it/he*N;W.projectionMatrix.makePerspective(mt,T,y,I,N,he),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Nt(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let $=W.near,_t=W.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),q.near=U.near=R.near=$,q.far=U.far=R.far=_t,(O!==q.near||B!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),O=q.near,B=q.far),q.layers.mask=W.layers.mask|6,R.layers.mask=q.layers.mask&-5,U.layers.mask=q.layers.mask&-3;let Ft=W.parent,bt=q.cameras;Nt(q,Ft);for(let Gt=0;Gt<bt.length;Gt++)Nt(bt[Gt],Ft);bt.length===2?nt(q,R,U):q.projectionMatrix.copy(R.projectionMatrix),w===null&&W.isPerspectiveCamera&&(w={camera:W,fov:W.fov,zoom:W.zoom}),At(W,q,Ft)};function At(W,$,_t){_t===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(_t.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=hd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(W){return d[W]};let ee=null;function Ot(W,$){if(h=$.getViewerPose(c||r),g=$,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ft=!1;_t.length!==q.cameras.length&&(q.cameras.length=0,Ft=!0);for(let it=0;it<_t.length;it++){let ot=_t[it],ut=null;if(f!==null)ut=f.getViewport(ot);else{let dt=p.getViewSubImage(u,ot);ut=dt.viewport,it===0&&(t.setRenderTargetTextures(v,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(v))}let lt=F[it];lt===void 0&&(lt=new Pn,lt.layers.enable(it),lt.viewport=new qe,F[it]=lt),lt.matrix.fromArray(ot.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ot.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ut.x,ut.y,ut.width,ut.height),it===0&&(q.matrix.copy(lt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ft===!0&&q.cameras.push(lt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let it=p.getDepthInformation(_t[0]);it&&it.isValid&&it.texture&&m.init(it,s.renderState)}if(bt&&bt.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let it=0;it<_t.length;it++){let ot=_t[it].camera;if(ot){let ut=d[ot];ut||(ut=new fu,d[ot]=ut);let lt=p.getCameraImage(ot);ut.sourceTexture=lt}}}}for(let _t=0;_t<E.length;_t++){let Ft=A[_t],bt=E[_t];Ft!==null&&bt!==void 0&&bt.update(Ft,$,c||r)}ee&&ee(W,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let qt=new kE;qt.setAnimationLoop(Ot),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}},XU=new Pe,JE=new $t;JE.set(-1,0,0,0,1,0,0,0,1);function WU(e,t){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,nv(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,S,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?a(m,d):d.isMeshLambertMaterial?(a(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(a(m,d),p(m,d)):d.isMeshPhongMaterial?(a(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(a(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,v)):d.isMeshMatcapMaterial?(a(m,d),g(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),M(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,_,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Jn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Jn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=t.get(d),S=_.envMap,v=_.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(XU.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(JE),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=S*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){let _=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qU(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let A=E.program;i.uniformBlockBinding(v,A)}function c(v,E){let A=s[v.id];A===void 0&&(m(v),A=h(v),s[v.id]=A,v.addEventListener("dispose",_));let C=E.program;i.updateUBOMapping(v,C);let x=t.render.frame;a[v.id]!==x&&(u(v),a[v.id]=x)}function h(v){let E=p();v.__bindingPointIndex=E;let A=e.createBuffer(),C=v.__size,x=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,A),A}function p(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=s[v.id],A=v.uniforms,C=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let x=0,w=A.length;x<w;x++){let R=A[x];if(Array.isArray(R))for(let U=0,F=R.length;U<F;U++)f(R[U],x,U,C);else f(R,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,E,A,C){if(M(v,E,A,C)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let U=0;U<w.length;U++){let F=w[U],q=d(F);g(F,v.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,v.__data)}}function g(v,E,A){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,A)}function M(v,E,A,C){let x=v.value,w=E+"_"+A;if(C[w]===void 0)return typeof x=="number"||typeof x=="boolean"?C[w]=x:ArrayBuffer.isView(x)?C[w]=x.slice():C[w]=x.clone(),!0;{let R=C[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(v){let E=v.uniforms,A=0,C=16;for(let w=0,R=E.length;w<R;w++){let U=Array.isArray(E[w])?E[w]:[E[w]];for(let F=0,q=U.length;F<q;F++){let O=U[F],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,z=B.length;H<z;H++){let at=B[H],Y=d(at),j=A%C,nt=j%Y.boundary,Nt=j+nt;A+=nt,Nt!==0&&C-Nt<Y.storage&&(A+=C-Nt),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=A,A+=Y.storage}}}let x=A%C;return x>0&&(A+=C-x),v.__size=A,v.__cache={},this}function d(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),E}function _(v){let E=v.target;E.removeEventListener("dispose",_);let A=r.indexOf(E.__bindingPointIndex);r.splice(A,1),e.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function S(){for(let v in s)e.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}var YU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ws=null;function ZU(){return ws===null&&(ws=new xl(YU,16,16,tr,ts),ws.name="DFG_LUT",ws.minFilter=fn,ws.magFilter=fn,ws.wrapS=Bi,ws.wrapT=Bi,ws.generateMipmaps=!1,ws.needsUpdate=!0),ws}var Np=class{constructor(t={}){let{canvas:n=uE(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=oi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let M=f,m=new Set([Yd,qd,Wd]),d=new Set([oi,ji,Ll,Il,kd,Xd]),_=new Uint32Array(4),S=new Int32Array(4),v=new D,E=null,A=null,C=[],x=[],w=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,F=null,q=null,O=null,B=null;this._outputColorSpace=Rn;let H=0,z=0,at=null,Y=-1,j=null,nt=new qe,Nt=new qe,At=null,ee=new ie(0),Ot=0,qt=n.width,W=n.height,$=1,_t=null,Ft=null,bt=new qe(0,0,qt,W),Gt=new qe(0,0,qt,W),re=!1,it=new Sl,ot=!1,ut=!1,lt=new Pe,dt=new D,Ht=new qe,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function kt(){return at===null?$:1}let N=i;function he(b,L){return n.getContext(b,L)}let mt,T,y,I,G,J,V,ft,Q,et,gt,wt,ht,pt,It,Xt,Jt,P,St,tt,yt,Tt,rt;try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",oe,!1),n.addEventListener("webglcontextcreationerror",Be,!1),N===null){let L="webgl2";if(N=he(L,b),N===null)throw he(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(b){throw n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),Yt("WebGLRenderer: "+b.message),b}function Rt(){mt=new eD(N),mt.init(),yt=new VU(N,mt),T=new WN(N,mt,t,yt),y=new FU(N,mt),T.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),q=N.createFramebuffer(),O=N.createFramebuffer(),B=N.createFramebuffer(),I=new sD(N),G=new TU,J=new HU(N,mt,y,G,T,yt,I),V=new tD(R),ft=new r3(N),Tt=new kN(N,ft),Q=new nD(N,ft,I,Tt),et=new rD(N,Q,ft,Tt,I),P=new aD(N,T,J),It=new qN(G),gt=new EU(R,V,mt,T,Tt,It),wt=new WU(R,G),ht=new wU,pt=new LU(mt),Jt=new GN(R,V,y,et,g,l),Xt=new zU(R,et,T),rt=new qU(N,I,T,y),St=new XN(N,mt,I),tt=new iD(N,mt,I),I.programs=gt.programs,R.capabilities=T,R.extensions=mt,R.properties=G,R.renderLists=ht,R.shadowMap=Xt,R.state=y,R.info=I}M!==oi&&(w=new lD(M,n.width,n.height,o,s,a));let Pt=new Tv(R,N);this.xr=Pt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(qt,W,!1))},this.getSize=function(b){return b.set(qt,W)},this.setSize=function(b,L,Z=!0){if(Pt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=b,W=L,n.width=Math.floor(b*$),n.height=Math.floor(L*$),Z===!0&&(n.style.width=b+"px",n.style.height=L+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(qt*$,W*$).floor()},this.setDrawingBufferSize=function(b,L,Z){qt=b,W=L,$=Z,n.width=Math.floor(b*Z),n.height=Math.floor(L*Z),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(M===oi){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(nt)},this.getViewport=function(b){return b.copy(bt)},this.setViewport=function(b,L,Z,X){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,L,Z,X),y.viewport(nt.copy(bt).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,L,Z,X){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,L,Z,X),y.scissor(Nt.copy(Gt).multiplyScalar($).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(b){y.setScissorTest(re=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){Ft=b},this.getClearColor=function(b){return b.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,Z=!0){let X=0;if(b){let k=!1;if(at!==null){let Mt=at.texture.format;k=m.has(Mt)}if(k){let Mt=at.texture.type,Ct=d.has(Mt),xt=Jt.getClearColor(),Ut=Jt.getClearAlpha(),zt=xt.r,te=xt.g,le=xt.b;Ct?(_[0]=zt,_[1]=te,_[2]=le,_[3]=Ut,N.clearBufferuiv(N.COLOR,0,_)):(S[0]=zt,S[1]=te,S[2]=le,S[3]=Ut,N.clearBufferiv(N.COLOR,0,S))}else X|=N.COLOR_BUFFER_BIT}L&&(X|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),Jt.dispose(),ht.dispose(),pt.dispose(),G.dispose(),V.dispose(),et.dispose(),Tt.dispose(),rt.dispose(),gt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Xl),Pt.removeEventListener("sessionend",Wl),Ns.stop()};function pe(b){b.preventDefault(),tv("WebGLRenderer: Context Lost."),U=!0}function oe(){tv("WebGLRenderer: Context Restored."),U=!1;let b=I.autoReset,L=Xt.enabled,Z=Xt.autoUpdate,X=Xt.needsUpdate,k=Xt.type;Rt(),I.autoReset=b,Xt.enabled=L,Xt.autoUpdate=Z,Xt.needsUpdate=X,Xt.type=k}function Be(b){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function li(b){let L=b.target;L.removeEventListener("dispose",li),Wr(L)}function Wr(b){Gu(b),G.remove(b)}function Gu(b){let L=G.get(b).programs;L!==void 0&&(L.forEach(function(Z){gt.releaseProgram(Z)}),b.isShaderMaterial&&gt.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,Z,X,k,Mt){L===null&&(L=Dt);let Ct=k.isMesh&&k.matrixWorld.determinantAffine()<0,xt=Cn(b,L,Z,X,k);y.setMaterial(X,Ct);let Ut=Z.index,zt=1;if(X.wireframe===!0){if(Ut=Q.getWireframeAttribute(Z),Ut===void 0)return;zt=2}let te=Z.drawRange,le=Z.attributes.position,Lt=te.start*zt,ye=(te.start+te.count)*zt;Mt!==null&&(Lt=Math.max(Lt,Mt.start*zt),ye=Math.min(ye,(Mt.start+Mt.count)*zt)),Ut!==null?(Lt=Math.max(Lt,0),ye=Math.min(ye,Ut.count)):le!=null&&(Lt=Math.max(Lt,0),ye=Math.min(ye,le.count));let Ye=ye-Lt;if(Ye<0||Ye===1/0)return;Tt.setup(k,X,xt,Z,Ut);let Ce,K=St;if(Ut!==null&&(Ce=ft.get(Ut),K=tt,K.setIndex(Ce)),k.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*kt()),K.setMode(N.LINES)):K.setMode(N.TRIANGLES);else if(k.isLine){let Bt=X.linewidth;Bt===void 0&&(Bt=1),y.setLineWidth(Bt*kt()),k.isLineSegments?K.setMode(N.LINES):k.isLineLoop?K.setMode(N.LINE_LOOP):K.setMode(N.LINE_STRIP)}else k.isPoints?K.setMode(N.POINTS):k.isSprite&&K.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))K.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Bt=k._multiDrawStarts,ct=k._multiDrawCounts,Wt=k._multiDrawCount,Kt=Ut?ft.get(Ut).bytesPerElement:1,ae=G.get(X).currentProgram.getUniforms();for(let Qe=0;Qe<Wt;Qe++)ae.setValue(N,"_gl_DrawID",Qe),K.render(Bt[Qe]/Kt,ct[Qe])}else if(k.isInstancedMesh)K.renderInstances(Lt,Ye,k.count);else if(Z.isInstancedBufferGeometry){let Bt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ct=Math.min(Z.instanceCount,Bt);K.renderInstances(Lt,Ye,ct)}else K.render(Lt,Ye)};function Gl(b,L,Z,X){F!==null&&b.isNodeMaterial&&F.setObject(X,b),ot===!0&&It.setState(b,Z,!1),b.transparent===!0&&b.side===Ti&&b.forceSinglePass===!1?(b.side=Jn,b.needsUpdate=!0,Jr(b,L,X),b.side=Qa,b.needsUpdate=!0,Jr(b,L,X),b.side=Ti):Jr(b,L,X)}this.compile=function(b,L,Z=null){Z===null&&(Z=b),F!==null&&F.renderStart(b,L,Z),A=pt.get(Z),A.init(L),x.push(A),Z.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),b!==Z&&b.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),ut=this.localClippingEnabled,ot=It.init(this.clippingPlanes,ut),ot===!0&&It.setGlobalState(this.clippingPlanes,L),F!==null&&Xt.render(A.state.shadowsArray,Z,L);let X=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let Mt=k.material;if(Mt)if(Array.isArray(Mt))for(let Ct=0;Ct<Mt.length;Ct++){let xt=Mt[Ct];Gl(xt,Z,L,k),X.add(xt)}else Gl(Mt,Z,L,k),X.add(Mt)}),A=x.pop(),F!==null&&F.renderEnd(),X},this.compileAsync=function(b,L,Z=null){let X=this.compile(b,L,Z);return new Promise(k=>{function Mt(){if(X.forEach(function(Ct){let Ut=G.get(Ct).currentProgram;(Ut===void 0||Ut.isReady())&&X.delete(Ct)}),X.size===0){k(b);return}setTimeout(Mt,10)}mt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Cs=null;function kl(b){Cs&&Cs(b)}function Xl(){Ns.stop()}function Wl(){Ns.start()}let Ns=new kE;Ns.setAnimationLoop(kl),typeof self<"u"&&Ns.setContext(self),this.setAnimationLoop=function(b){Cs=b,Pt.setAnimationLoop(b),b===null?Ns.stop():Ns.start()},Pt.addEventListener("sessionstart",Xl),Pt.addEventListener("sessionend",Wl),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(b,L);let Z=Pt.enabled===!0&&Pt.isPresenting===!0,X=w!==null&&(at===null||Z)&&w.begin(R,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(L),L=Pt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,L,at),A=pt.get(b,x.length),A.init(L),A.state.textureUnits=J.getTextureUnits(),x.push(A),lt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),it.setFromProjectionMatrix(lt,Ji,L.reversedDepth),ut=this.localClippingEnabled,ot=It.init(this.clippingPlanes,ut),E=ht.get(b,C.length),E.init(),C.push(E),Pt.enabled===!0&&Pt.isPresenting===!0){let Ct=R.xr.getDepthSensingMesh();Ct!==null&&qr(Ct,L,-1/0,R.sortObjects)}qr(b,L,0,R.sortObjects),E.finish(),F!==null&&F.updateLights(A.state.lightsArray),R.sortObjects===!0&&E.sort(_t,Ft),Vt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Vt&&Jt.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&It.beginShadows();let k=A.state.shadowsArray;if(Xt.render(k,b,L),ot===!0&&It.endShadows(),(X&&w.hasRenderPass())===!1){let Ct=E.opaque,xt=E.transmissive;if(A.setupLights(),L.isArrayCamera){let Ut=L.cameras;if(xt.length>0)for(let zt=0,te=Ut.length;zt<te;zt++){let le=Ut[zt];Yr(Ct,xt,b,le)}Vt&&Jt.render(b);for(let zt=0,te=Ut.length;zt<te;zt++){let le=Ut[zt];ia(E,b,le,le.viewport)}}else xt.length>0&&Yr(Ct,xt,b,L),Vt&&Jt.render(b),ia(E,b,L)}at!==null&&z===0&&(J.updateMultisampleRenderTarget(at),J.updateRenderTargetMipmap(at)),X&&w.end(R),b.isScene===!0&&b.onAfterRender(R,b,L),Tt.resetDefaultState(),Y=-1,j=null,x.pop(),x.length>0?(A=x[x.length-1],J.setTextureUnits(A.state.textureUnits),ot===!0&&It.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,F!==null&&F.renderEnd()};function qr(b,L,Z,X){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(it)){X&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(lt);let Ct=et.update(b),xt=b.material;xt.visible&&E.push(b,Ct,xt,Z,Ht.z,null,L)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(it))){let Ct=et.update(b),xt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ht.copy(Ct.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(lt)),Array.isArray(xt)){let Ut=Ct.groups;for(let zt=0,te=Ut.length;zt<te;zt++){let le=Ut[zt],Lt=xt[le.materialIndex];Lt&&Lt.visible&&E.push(b,Ct,Lt,Z,Ht.z,le,L)}}else xt.visible&&E.push(b,Ct,xt,Z,Ht.z,null,L)}}let Mt=b.children;for(let Ct=0,xt=Mt.length;Ct<xt;Ct++)qr(Mt[Ct],L,Z,X)}function ia(b,L,Z,X){let{opaque:k,transmissive:Mt,transparent:Ct}=b;A.setupLightsView(Z),ot===!0&&It.setGlobalState(R.clippingPlanes,Z),X&&y.viewport(nt.copy(X)),k.length>0&&Zr(k,L,Z),Mt.length>0&&Zr(Mt,L,Z),Ct.length>0&&Zr(Ct,L,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Yr(b,L,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){let Lt=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new ri(1,1,{generateMipmaps:!0,type:Lt?ts:oi,minFilter:As,samples:Math.max(4,T.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let Mt=A.state.transmissionRenderTarget[X.id],Ct=X.viewport||nt;Mt.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);let xt=R.getRenderTarget(),Ut=R.getActiveCubeFace(),zt=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(ee),Ot=R.getClearAlpha(),Ot<1&&R.setClearColor(16777215,.5),R.clear(),Vt&&Jt.render(Z);let te=R.toneMapping;R.toneMapping=Qi;let le=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),ot===!0&&It.setGlobalState(R.clippingPlanes,X),Zr(b,Z,X),J.updateMultisampleRenderTarget(Mt),J.updateRenderTargetMipmap(Mt),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ye=0,Ye=L.length;ye<Ye;ye++){let Ce=L[ye],{object:K,geometry:Bt,material:ct,group:Wt}=Ce;if(ct.side===Ti&&K.layers.test(X.layers)){let Kt=ct.side;ct.side=Jn,ct.needsUpdate=!0,es(K,Z,X,Bt,ct,Wt),ct.side=Kt,ct.needsUpdate=!0,Lt=!0}}Lt===!0&&(J.updateMultisampleRenderTarget(Mt),J.updateRenderTargetMipmap(Mt))}R.setRenderTarget(xt,Ut,zt),R.setClearColor(ee,Ot),le!==void 0&&(X.viewport=le),R.toneMapping=te}function Zr(b,L,Z){let X=L.isScene===!0?L.overrideMaterial:null;for(let k=0,Mt=b.length;k<Mt;k++){let Ct=b[k],{object:xt,geometry:Ut,group:zt}=Ct,te=Ct.material;te.allowOverride===!0&&X!==null&&(te=X),xt.layers.test(Z.layers)&&es(xt,L,Z,Ut,te,zt)}}function es(b,L,Z,X,k,Mt){F!==null&&k.isNodeMaterial&&F.setObject(b,k),b.onBeforeRender(R,L,Z,X,k,Mt),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(R,L,Z,X,b,Mt),k.transparent===!0&&k.side===Ti&&k.forceSinglePass===!1?(k.side=Jn,k.needsUpdate=!0,R.renderBufferDirect(Z,L,X,k,b,Mt),k.side=Qa,k.needsUpdate=!0,R.renderBufferDirect(Z,L,X,k,b,Mt),k.side=Ti):R.renderBufferDirect(Z,L,X,k,b,Mt),b.onAfterRender(R,L,Z,X,k,Mt)}function Jr(b,L,Z){L.isScene!==!0&&(L=Dt);let X=G.get(b),k=A.state.lights,Mt=A.state.shadowsArray,Ct=k.state.version,xt=gt.getParameters(b,k.state,Mt,L,Z,A.state.lightProbeGridArray),Ut=gt.getProgramCacheKey(xt),zt=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,X.fog=L.fog;let te=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=V.get(b.envMap||X.environment,te),X.envMapRotation=X.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,zt===void 0&&(b.addEventListener("dispose",li),zt=new Map,X.programs=zt);let le=zt.get(Ut);if(le!==void 0){if(X.currentProgram===le&&X.lightsStateVersion===Ct)return ku(b,xt),le}else xt.uniforms=gt.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,Z,xt),b.onBeforeCompile(xt,R),le=gt.acquireProgram(xt,Ut),zt.set(Ut,le),X.uniforms=xt.uniforms;let Lt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=It.uniform),ku(b,xt),X.needsLights=Wu(b),X.lightsStateVersion=Ct,X.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.sunLights.value=k.state.sun,Lt.sunLightShadows.value=k.state.sunShadow,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.sunShadowMatrix.value=k.state.sunShadowMatrix,Lt.sunShadowCascade.value=k.state.sunShadowCascade,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.lightProbeGrid=A.state.lightProbeGridArray.length>0,X.currentProgram=le,X.uniformsList=null,le}function ql(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=zl.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function ku(b,L){let Z=G.get(b);Z.outputColorSpace=L.outputColorSpace,Z.batching=L.batching,Z.batchingColor=L.batchingColor,Z.instancing=L.instancing,Z.instancingColor=L.instancingColor,Z.instancingMorph=L.instancingMorph,Z.skinning=L.skinning,Z.morphTargets=L.morphTargets,Z.morphNormals=L.morphNormals,Z.morphColors=L.morphColors,Z.morphTargetsCount=L.morphTargetsCount,Z.numClippingPlanes=L.numClippingPlanes,Z.numIntersection=L.numClipIntersection,Z.vertexAlphas=L.vertexAlphas,Z.vertexTangents=L.vertexTangents,Z.toneMapping=L.toneMapping}function Xu(b,L){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(L.matrixWorld);for(let Z=0,X=b.length;Z<X;Z++){let k=b[Z];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function Cn(b,L,Z,X,k){L.isScene!==!0&&(L=Dt),J.resetTextureUnits();let Mt=L.fog,Ct=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?L.environment:null,xt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ve.workingColorSpace,Ut=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,zt=V.get(X.envMap||Ct,Ut),te=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,le=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!Z.morphAttributes.position,ye=!!Z.morphAttributes.normal,Ye=!!Z.morphAttributes.color,Ce=Qi;X.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ce=R.toneMapping);let K=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Bt=K!==void 0?K.length:0,ct=G.get(X),Wt=A.state.lights;if(ot===!0&&(ut===!0||b!==j)){let De=b===j&&X.id===Y;It.setState(X,b,De)}let Kt=!1;X.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Wt.state.version||ct.outputColorSpace!==xt||k.isBatchedMesh&&ct.batching===!1||!k.isBatchedMesh&&ct.batching===!0||k.isBatchedMesh&&ct.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&ct.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&ct.instancing===!1||!k.isInstancedMesh&&ct.instancing===!0||k.isSkinnedMesh&&ct.skinning===!1||!k.isSkinnedMesh&&ct.skinning===!0||k.isInstancedMesh&&ct.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ct.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ct.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ct.instancingMorph===!1&&k.morphTexture!==null||ct.envMap!==zt||X.fog===!0&&ct.fog!==Mt||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==It.numPlanes||ct.numIntersection!==It.numIntersection)||ct.vertexAlphas!==te||ct.vertexTangents!==le||ct.morphTargets!==Lt||ct.morphNormals!==ye||ct.morphColors!==Ye||ct.toneMapping!==Ce||ct.morphTargetsCount!==Bt||!!ct.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Kt=!0):(Kt=!0,ct.__version=X.version);let ae=ct.currentProgram;Kt===!0&&(ae=Jr(X,L,k),F&&X.isNodeMaterial&&F.onUpdateProgram(X,ae,ct));let Qe=!1,Ge=!1,ce=!1,ne=ae.getUniforms(),Ne=ct.uniforms;if(y.useProgram(ae.program)&&(Qe=!0,Ge=!0,ce=!0),X.id!==Y&&(Y=X.id,Ge=!0),ct.needsLights){let De=Xu(A.state.lightProbeGridArray,k);ct.lightProbeGrid!==De&&(ct.lightProbeGrid=De,Ge=!0)}if(Qe||j!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ne.setValue(N,"projectionMatrix",b.projectionMatrix),ne.setValue(N,"viewMatrix",b.matrixWorldInverse);let Nn=ne.map.cameraPosition;Nn!==void 0&&Nn.setValue(N,dt.setFromMatrixPosition(b.matrixWorld)),T.logarithmicDepthBuffer&&ne.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ne.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Ge=!0,ce=!0)}if(ct.needsLights&&(Wt.state.sunShadowMap.length>0&&ne.setValue(N,"sunShadowMap",Wt.state.sunShadowMap,J),Wt.state.directionalShadowMap.length>0&&ne.setValue(N,"directionalShadowMap",Wt.state.directionalShadowMap,J),Wt.state.spotShadowMap.length>0&&ne.setValue(N,"spotShadowMap",Wt.state.spotShadowMap,J),Wt.state.pointShadowMap.length>0&&ne.setValue(N,"pointShadowMap",Wt.state.pointShadowMap,J)),k.isSkinnedMesh){ne.setOptional(N,k,"bindMatrix"),ne.setOptional(N,k,"bindMatrixInverse");let De=k.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ne.setValue(N,"boneTexture",De.boneTexture,J))}k.isBatchedMesh&&(ne.setOptional(N,k,"batchingTexture"),ne.setValue(N,"batchingTexture",k._matricesTexture,J),ne.setOptional(N,k,"batchingIdTexture"),ne.setValue(N,"batchingIdTexture",k._indirectTexture,J),ne.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&ne.setValue(N,"batchingColorTexture",k._colorsTexture,J));let Qn=Z.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&P.update(k,Z,ae),(Ge||ct.receiveShadow!==k.receiveShadow)&&(ct.receiveShadow=k.receiveShadow,ne.setValue(N,"receiveShadow",k.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&L.environment!==null&&(Ne.envMapIntensity.value=L.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=ZU()),Ge){if(ne.setValue(N,"toneMappingExposure",R.toneMappingExposure),ct.needsLights&&Kr(Ne,ce),Mt&&X.fog===!0&&wt.refreshFogUniforms(Ne,Mt),wt.refreshMaterialUniforms(Ne,X,$,W,A.state.transmissionRenderTarget[b.id]),ct.needsLights&&ct.lightProbeGrid){let De=ct.lightProbeGrid;Ne.probesSH.value=De.texture,Ne.probesMin.value.copy(De.boundingBox.min),Ne.probesMax.value.copy(De.boundingBox.max),Ne.probesResolution.value.copy(De.resolution)}zl.upload(N,ql(ct),Ne,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(zl.upload(N,ql(ct),Ne,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ne.setValue(N,"center",k.center),ne.setValue(N,"modelViewMatrix",k.modelViewMatrix),ne.setValue(N,"normalMatrix",k.normalMatrix),ne.setValue(N,"modelMatrix",k.matrixWorld),X.uniformsGroups!==void 0){let De=X.uniformsGroups;for(let Nn=0,Ds=De.length;Nn<Ds;Nn++){let Hn=De[Nn];rt.update(Hn,ae),rt.bind(Hn,ae)}}return ae}function Kr(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function Wu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,L,Z){let X=G.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=L,G.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let Z=G.get(b);Z.__webglFramebuffer=L,Z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,Z=0){at=b,H=L,z=Z;let X=null,k=!1,Mt=!1;if(b){let xt=G.get(b);if(xt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(N.FRAMEBUFFER,xt.__webglFramebuffer),nt.copy(b.viewport),Nt.copy(b.scissor),At=b.scissorTest,y.viewport(nt),y.scissor(Nt),y.setScissorTest(At),Y=-1;return}else if(xt.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(xt.__hasExternalTextures)J.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let te=b.depthTexture;if(xt.__boundDepthTexture!==te){if(te!==null&&G.has(te)&&(b.width!==te.image.width||b.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}let Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Mt=!0);let zt=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(zt[L])?X=zt[L][Z]:X=zt[L],k=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?X=G.get(b).__webglMultisampledFramebuffer:Array.isArray(zt)?X=zt[Z]:X=zt,nt.copy(b.viewport),Nt.copy(b.scissor),At=b.scissorTest}else nt.copy(bt).multiplyScalar($).floor(),Nt.copy(Gt).multiplyScalar($).floor(),At=re;if(Z!==0&&(X=q),y.bindFramebuffer(N.FRAMEBUFFER,X)&&y.drawBuffers(b,X),y.viewport(nt),y.scissor(Nt),y.setScissorTest(At),k){let xt=G.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,xt.__webglTexture,Z)}else if(Mt){let xt=L;for(let Ut=0;Ut<b.textures.length;Ut++){let zt=G.get(b.textures[Ut]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ut,zt.__webglTexture,Z,xt)}}else if(b!==null&&Z!==0){let xt=G.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xt.__webglTexture,Z)}Y=-1};function ir(b){let L=G.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=T.textureFormatReadable(b.format),L.__typeReadable=T.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,Z,X,k,Mt,Ct,xt=0){if(!(b&&b.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){y.bindFramebuffer(N.FRAMEBUFFER,Ut);try{let zt=b.textures[xt],te=zt.format,le=zt.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xt);let Lt=ir(zt);if(Lt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-X&&Z>=0&&Z<=b.height-k&&N.readPixels(L,Z,X,k,yt.convert(te),yt.convert(le),Mt)}finally{let zt=at!==null?G.get(at).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(b,L,Z,X,k,Mt,Ct,xt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut)if(L>=0&&L<=b.width-X&&Z>=0&&Z<=b.height-k){y.bindFramebuffer(N.FRAMEBUFFER,Ut);let zt=b.textures[xt],te=zt.format,le=zt.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xt);let Lt=ir(zt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ye),N.bufferData(N.PIXEL_PACK_BUFFER,Mt.byteLength,N.STREAM_READ),N.readPixels(L,Z,X,k,yt.convert(te),yt.convert(le),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ye=at!==null?G.get(at).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,Ye);let Ce=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await fE(N,Ce,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ye),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Mt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ye),N.deleteSync(Ce),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,Z=0){let X=Math.pow(2,-Z),k=Math.floor(b.image.width*X),Mt=Math.floor(b.image.height*X),Ct=L!==null?L.x:0,xt=L!==null?L.y:0;J.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Ct,xt,k,Mt),y.unbindTexture()},this.copyTextureToTexture=function(b,L,Z=null,X=null,k=0,Mt=0){let Ct,xt,Ut,zt,te,le,Lt,ye,Ye,Ce=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(Z!==null)Ct=Z.max.x-Z.min.x,xt=Z.max.y-Z.min.y,Ut=Z.isBox3?Z.max.z-Z.min.z:1,zt=Z.min.x,te=Z.min.y,le=Z.isBox3?Z.min.z:0;else{let Ne=Math.pow(2,-k);Ct=Math.floor(Ce.width*Ne),xt=Math.floor(Ce.height*Ne),b.isDataArrayTexture?Ut=Ce.depth:b.isData3DTexture?Ut=Math.floor(Ce.depth*Ne):Ut=1,zt=0,te=0,le=0}X!==null?(Lt=X.x,ye=X.y,Ye=X.z):(Lt=0,ye=0,Ye=0);let K=yt.convert(L.format),Bt=yt.convert(L.type),ct;L.isData3DTexture?(J.setTexture3D(L,0),ct=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(J.setTexture2DArray(L,0),ct=N.TEXTURE_2D_ARRAY):(J.setTexture2D(L,0),ct=N.TEXTURE_2D),y.activeTexture(N.TEXTURE0),y.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),y.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),y.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Wt=y.getParameter(N.UNPACK_ROW_LENGTH),Kt=y.getParameter(N.UNPACK_IMAGE_HEIGHT),ae=y.getParameter(N.UNPACK_SKIP_PIXELS),Qe=y.getParameter(N.UNPACK_SKIP_ROWS),Ge=y.getParameter(N.UNPACK_SKIP_IMAGES);y.pixelStorei(N.UNPACK_ROW_LENGTH,Ce.width),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ce.height),y.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),y.pixelStorei(N.UNPACK_SKIP_ROWS,te),y.pixelStorei(N.UNPACK_SKIP_IMAGES,le);let ce=b.isDataArrayTexture||b.isData3DTexture,ne=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let Ne=G.get(b),Qn=G.get(L),De=G.get(Ne.__renderTarget),Nn=G.get(Qn.__renderTarget);y.bindFramebuffer(N.READ_FRAMEBUFFER,De.__webglFramebuffer),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Ds=0;Ds<Ut;Ds++)ce&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(b).__webglTexture,k,le+Ds),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(L).__webglTexture,Mt,Ye+Ds)),N.blitFramebuffer(zt,te,Ct,xt,Lt,ye,Ct,xt,N.DEPTH_BUFFER_BIT,N.NEAREST);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||G.has(b)){let Ne=G.get(b),Qn=G.get(L);y.bindFramebuffer(N.READ_FRAMEBUFFER,O),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let De=0;De<Ut;De++)ce?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.__webglTexture,k,le+De):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ne.__webglTexture,k),ne?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qn.__webglTexture,Mt,Ye+De):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qn.__webglTexture,Mt),k!==0?N.blitFramebuffer(zt,te,Ct,xt,Lt,ye,Ct,xt,N.COLOR_BUFFER_BIT,N.NEAREST):ne?N.copyTexSubImage3D(ct,Mt,Lt,ye,Ye+De,zt,te,Ct,xt):N.copyTexSubImage2D(ct,Mt,Lt,ye,zt,te,Ct,xt);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ne?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(ct,Mt,Lt,ye,Ye,Ct,xt,Ut,K,Bt,Ce.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(ct,Mt,Lt,ye,Ye,Ct,xt,Ut,K,Ce.data):N.texSubImage3D(ct,Mt,Lt,ye,Ye,Ct,xt,Ut,K,Bt,Ce):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Mt,Lt,ye,Ct,xt,K,Bt,Ce.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Mt,Lt,ye,Ce.width,Ce.height,K,Ce.data):N.texSubImage2D(N.TEXTURE_2D,Mt,Lt,ye,Ct,xt,K,Bt,Ce);y.pixelStorei(N.UNPACK_ROW_LENGTH,Wt),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kt),y.pixelStorei(N.UNPACK_SKIP_PIXELS,ae),y.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge),Mt===0&&L.generateMipmaps&&N.generateMipmap(ct),y.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){H=0,z=0,at=null,y.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),n.unpackColorSpace=ve._getUnpackColorSpace()}};function KE({onBreak:e,onHolding:t=()=>{},delay:n=800,setTimer:i=setTimeout,clearTimer:s=clearTimeout}){let a=null,r=!1,o=()=>{a!==null&&(s(a),a=null,t(!1))};return{update(l,c){if(!r){if(!l||!c){o();return}a===null&&(t(!0),a=i(()=>{a=null,r=!0,t(!1),e()},n))}},reset(){o(),r=!1},dispose:o}}function QE({limit:e=10}={}){let t=0,n=0,i=0,s=0,a=null;return{begin(r,o){i=r,s=o,a=null},move(r,o){let l=r-i,c=o-s;if(i=r,s=o,l===0&&c===0)return!1;let h=l!==0?l>0?"right":"left":c>0?"down":"up";return h===a?!1:(a=h,t++,t>=e)},click(){return n++,n>=e},record(r){return r?(t++,t>=e):!1},reset(){t=0,n=0,a=null}}}var mT=is(kr()),eT={portrait:[1.6,2.25],landscape:[2.25,1.6]},jU={left:.27,center:.5,right:.73},Fu=.018,Kn=.007,Le=4,nT=1/.05,$U=1/960,tL=2,ea=72,Ip=24,Op=.36,cT=.095,eL=.0135,Pp=.036,zu=.15,iT=1024,sT={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},zp=[0,.07,.93,1],nL=[-.95,-.28,.28,.95],iL=9,sL=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,aL=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,rL=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,oL=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,aT={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},er=(e,t,n)=>Math.min(n,Math.max(t,e)),Bu=(e,t,n)=>e+(t-e)*n,Av=(e,t)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return t;n.fillStyle="#000000",n.fillStyle=e;let i=n.fillStyle;if(i.startsWith("#")){let a=parseInt(i.slice(1),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}let s=i.match(/[\d.]+/g);return!s||s.length<3?t:[Number(s[0])/255,Number(s[1])/255,Number(s[2])/255]}catch{return t}},lL=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],Fp=(e,t=1)=>`rgba(${Math.round(e[0]*255)}, ${Math.round(e[1]*255)}, ${Math.round(e[2]*255)}, ${t})`,uT=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},Cv=(e,t,n,i,s,a)=>{let r=Math.max(0,Math.min(a,i/2,s/2)),o=r*.4477;e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.bezierCurveTo(t+i-o,n,t+i,n+o,t+i,n+r),e.lineTo(t+i,n+s-r),e.bezierCurveTo(t+i,n+s-o,t+i-o,n+s,t+i-r,n+s),e.lineTo(t+r,n+s),e.bezierCurveTo(t+o,n+s,t,n+s-o,t,n+s-r),e.lineTo(t,n+r),e.bezierCurveTo(t,n+o,t+o,n,t+r,n)},wv=(e,t)=>{if(!t)return Promise.resolve(null);let n=e.get(t);if(n)return n;let i=new Promise(s=>{let a=new Image;a.crossOrigin="anonymous",a.decoding="async",a.onload=()=>s(a),a.onerror=()=>s(null),a.src=t});return e.set(t,i),i},rT=(e,t)=>{let[n,i]=eT[e]||eT.portrait,s=Bu(.03,Math.min(n,i)*.2,er(t,0,1)),a={width:.34,height:.07,y:i/2-.13},r=i/2-.055;return{width:n,height:i,radius:s,slot:a,ringY:r,hangY:r+cT}},cL=e=>{let{width:t,height:n,radius:i,slot:s}=e,a=new Wa;Cv(a,-t/2+Kn,-n/2+Kn,t-Kn*2,n-Kn*2,Math.max(i-Kn,.005));let r=new Br;Cv(r,-s.width/2-Kn,s.y-s.height/2-Kn,s.width+Kn*2,s.height+Kn*2,s.height/2+Kn),a.holes.push(r);let o=new Al(a,{depth:Fu,bevelEnabled:!0,bevelThickness:Kn,bevelSize:Kn,bevelSegments:5,curveSegments:24});o.translate(0,0,-Fu/2);let l=new xu(a,24),c=l.getAttribute("position"),h=l.getAttribute("uv");for(let p=0;p<c.count;p++)h.setXY(p,(c.getX(p)+t/2)/t,(c.getY(p)+n/2)/n);return h.needsUpdate=!0,{body:o,face:l}},oT=e=>{let t=new Wa,n=e*1.16;Cv(t,-n/2+.014,-zu/2+.014,n-.028,zu-.028,.024);let i=new Al(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},uL=e=>{let t=zp.length,n=new Zn;n.setAttribute("position",new Bn(new Float32Array(e*t*3),3)),n.setAttribute("normal",new Bn(new Float32Array(e*t*3),3)),n.setAttribute("uv",new Bn(new Float32Array(e*t*2),2));let i=[];for(let s=0;s<e-1;s++)for(let a=0;a<t-1;a++){let r=s*t+a;i.push(r,r+t,r+1,r+1,r+t,r+t+1)}return n.setIndex(i),n},hL=e=>{let t=new vl;t.background=new ie(.035,.035,.04);let n=new qa(1,1),i=[],s=(o,l,c,h=0)=>{let p=new Or({color:new ie(o,o,o),side:Ti});i.push(p);let u=new tn(n,p);u.position.set(...l),u.scale.set(c[0],c[1],1),u.lookAt(0,0,0),u.rotateZ(h),t.add(u)};s(2.6,[0,4.5,8],[9,4]),s(6,[-5.5,.5,7],[.9,14]),s(4,[5,-.5,8],[.6,14]),s(3.5,[0,-1,9],[24,.35],Math.PI/3),s(2.5,[1,2.5,9],[24,.2],Math.PI/3),s(1.4,[0,6,-6],[12,4]),s(.5,[0,-7,1],[16,6]),s(.9,[8,0,-2],[4,10]);let a=new Fl(e),r=a.fromScene(t,.035);return a.dispose(),n.dispose(),i.forEach(o=>o.dispose()),r},Rv=(e,t)=>{let n=new Pr(e);return n.colorSpace=Rn,n.anisotropy=t,n},fL=()=>{let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n)return new Pr(t);let i=uT(7),s=Float32Array.from({length:16384},()=>i()),a=(l,c)=>{let h=0;for(let p=-1;p<=1;p++)for(let u=-1;u<=1;u++)h+=s[(c+p+128)%128*128+(l+u+128)%128];return h/9*1.6},r=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let h=a((c-1+128)%128,l)-a((c+1)%128,l),p=a(c,(l-1+128)%128)-a(c,(l+1)%128),u=Math.hypot(h,p,1),f=(l*128+c)*4;r.data[f]=(h/u*.5+.5)*255,r.data[f+1]=(p/u*.5+.5)*255,r.data[f+2]=(1/u*.5+.5)*255,r.data[f+3]=255}n.putImageData(r,0,0);let o=new Pr(t);return o.wrapS=Ms,o.wrapT=Ms,o.repeat.set(5,7),o},dL=()=>{let n=uT(19),i=Float32Array.from({length:16384},()=>n()),s=l=>Math.sqrt(Math.max(0,1-4*l*l)),a=(l,c)=>{let h=(l%128+128)%128,p=(c%128+128)%128,u=h/128*8,f=p/128*8,g=Math.floor(u),M=Math.floor(f),m=u-g-.5,d=f-M-.5,_=(g+M)%2===0,S=s(m)*(.55+.45*Math.cos(d*Math.PI*(_?1:.6))),v=s(d)*(.55+.45*Math.cos(m*Math.PI*(_?.6:1)));return(_?Math.max(S,v*.7):Math.max(v,S*.7))+i[p*128+h]*.08},r=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let h=(a(c-1,l)-a(c+1,l))*1.6,p=(a(c,l-1)-a(c,l+1))*1.6,u=Math.hypot(h,p,1),f=(l*128+c)*4;r[f]=(h/u*.5+.5)*255,r[f+1]=(p/u*.5+.5)*255,r[f+2]=(1/u*.5+.5)*255,r[f+3]=255}let o=new xl(r,128,128);return o.wrapS=Ms,o.wrapT=Ms,o.magFilter=fn,o.minFilter=As,o.generateMipmaps=!0,o.needsUpdate=!0,o},pL=(e,t,n,i,s)=>{let a=(s==="contain"?Math.min:Math.max)(n/t.width,i/t.height),r=t.width*a,o=t.height*a;e.drawImage(t,(n-r)/2,(i-o)/2,r,o)},lT=(e,t,n,i)=>{let s=e.getContext("2d");s&&(s.fillStyle=Fp(n),s.fillRect(0,0,e.width,e.height),t&&pL(s,t,e.width,e.height,i))},mL=(e,t,n)=>{let s=t?Math.max(64,Math.round(t.width/t.height*192)):384;e.width=192,e.height=s;let a=e.getContext("2d");if(!a)return s/192;if(a.fillStyle=Fp(n),a.fillRect(0,0,192,s),t)return a.save(),a.translate(192,0),a.rotate(Math.PI/2),a.drawImage(t,0,0,s,192),a.restore(),s/192;let r=lL(n)>.5?[0,0,0]:[1,1,1];a.fillStyle=Fp(r,.05);for(let o=0;o<s;o+=4)a.fillRect(0,o,192,1);a.fillStyle=Fp(r,.2);for(let o=0;o<s;o+=14)a.fillRect(192*.075,o,2,8),a.fillRect(192*.925-2,o,2,8);return s/192},gL=()=>{let e=()=>Array.from({length:Le+1},()=>new D);return{nodes:e(),previous:e(),velocities:e(),lengths:new Float64Array(Le),impulses:new Float64Array(Le),rest:1,anchor:new D,body:{position:new D,previous:new D,velocity:new D,quaternion:new zn,previousQuaternion:new zn,angular:new D,mass:1,inverseInertia:new D(1,1,1),hang:new D},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Re={a:new D,b:new D,c:new D,d:new D,e:new D,f:new D,g:new D,pin:new D,q:new zn,r:new zn},Nv=(e,t,n)=>(Re.r.copy(e.quaternion).invert(),n.copy(t).applyQuaternion(Re.r),n.set(n.x*e.inverseInertia.x,n.y*e.inverseInertia.y,n.z*e.inverseInertia.z),n.applyQuaternion(e.quaternion)),hT=(e,t)=>{let{x:n,y:i,z:s,w:a}=e;e.x+=.5*(t.x*a+t.y*s-t.z*i),e.y+=.5*(t.y*a+t.z*n-t.x*s),e.z+=.5*(t.z*a+t.x*i-t.y*n),e.w+=.5*(-t.x*n-t.y*i-t.z*s),e.normalize()},fT=(e,t,n)=>{let i=Re.c.crossVectors(t,n);return 1/e.mass+i.dot(Nv(e,i,Re.d))},dT=(e,t,n)=>{e.position.addScaledVector(n,1/e.mass),hT(e.quaternion,Nv(e,Re.e.crossVectors(t,n),Re.f))},_L=(e,t,n,i)=>{let{nodes:s,body:a}=e,r=s[t],o=t===0?0:nT,l=t===Le-1,c=Re.g,h=s[t+1];l&&(c.copy(a.hang).applyQuaternion(a.quaternion),h=Re.b.copy(a.position).add(c));let p=Re.a.subVectors(h,r),u=p.length(),f=u-e.rest;if(f<=0||u<1e-9)return;let g=p.divideScalar(u),M=l?fT(a,c,g):nT,m=(u-e.lengths[t])/n,_=(i.hold*Math.tanh(i.stiffness*f/i.hold)+i.spring*f+i.bandDamping*Math.max(0,m))*n*n-e.impulses[t];if(_<=0)return;let S=Math.min(f/(o+M),_);e.impulses[t]+=S,o&&r.addScaledVector(g,S*o),l?dT(a,c,g.multiplyScalar(-S)):h.addScaledVector(g,-S*M)},vL=(e,t,n)=>{let i=Re.g.copy(t.local).applyQuaternion(e.quaternion),s=Re.a.copy(n).sub(e.position).sub(i),a=s.length();if(a<1e-9)return;let r=s.divideScalar(a),o=a/fT(e,i,r);dT(e,i,r.multiplyScalar(o))},Bp=(e,t,n)=>{let{nodes:i,previous:s,velocities:a,body:r,anchor:o}=e;i[0].copy(o);for(let c=1;c<=Le;c++)i[c].copy(i[c-1]),n?i[c].x+=e.rest:i[c].y-=e.rest;r.quaternion.identity(),n&&r.quaternion.setFromAxisAngle(new D(0,0,1),Math.PI/2),r.hang.set(0,t.hangY,0);let l=Re.a.copy(r.hang).applyQuaternion(r.quaternion);r.position.copy(i[Le]).sub(l),r.previous.copy(r.position),r.previousQuaternion.copy(r.quaternion),r.velocity.set(0,0,0),r.angular.set(0,0,0);for(let c=0;c<=Le;c++)s[c].copy(i[c]),a[c].set(0,0,0);e.lengths.fill(e.rest),e.turn=0,e.twist=0,e.twistRaw=0,e.calm=0},yL=(e,t,n)=>{e.rest=n/Le;let{width:i,height:s}=t,a=e.body,r=Fu+Kn*2;a.mass=1,a.inverseInertia.set(12/(s*s+r*r),12/(i*i+r*r),12/(i*i+s*s)),a.hang.set(0,t.hangY,0)},xL=(e,t,n,i)=>{let s=Math.max(1,Math.ceil(t/$U-1e-6)),a=t/s,{nodes:r,previous:o,velocities:l,body:c}=e,h=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,p=n.breeze*Math.sin(i*.37+.6)*2,u=e.grab,f=Re.pin,g=Math.exp(-n.nodeDrag*a),M=Math.exp(-n.linearDrag*a),m=Math.exp(-n.angularDrag*a);for(let _=0;_<s;_++){for(let R=1;R<Le;R++){let U=l[R];U.y-=n.gravity*a,U.x+=h*a,U.z+=p*a,o[R].copy(r[R]),r[R].addScaledVector(U,a)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let S=c.quaternion;if(u){let R=Re.q.copy(u.rotation).multiply(Re.r.copy(S).invert());R.w<0&&R.set(-R.x,-R.y,-R.z,-R.w);let U=Re.a.set(R.x,R.y,R.z).multiplyScalar(2*n.grip);U.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(Nv(c,U,Re.b),a)}let v=Re.a.set(0,1,0).applyQuaternion(S),E=Re.b.set(-v.x*v.z,-v.y*v.z,1-v.z*v.z);if(E.lengthSq()>.001){let R=Re.d.set(0,0,1).applyQuaternion(S),U=Math.atan2(Re.e.crossVectors(E,R).dot(v),E.dot(R)),F=U-e.twistRaw;F>Math.PI?F-=Math.PI*2:F<-Math.PI&&(F+=Math.PI*2),e.twist+=F,e.twistRaw=U}if(!u){let R=c.angular.dot(v);c.angular.addScaledVector(v,(n.twist*(e.turn-e.twist)-n.twistDamping*R)*a)}c.velocity.y-=n.gravity*a,c.velocity.x+=h*.35*a,c.velocity.z+=p*.35*a,c.position.addScaledVector(c.velocity,a),hT(c.quaternion,Re.f.copy(c.angular).multiplyScalar(a)),e.impulses.fill(0),u&&f.lerpVectors(u.from,u.target,(_+1)/s);for(let R=0;R<tL;R++){for(let U=0;U<Le;U++)_L(e,U,a,n);u&&vL(c,u,f)}for(let R=1;R<Le;R++){let U=l[R].subVectors(r[R],o[R]).divideScalar(a).multiplyScalar(g);U.multiplyScalar(1/(1+n.nodeAir*U.length()*a))}c.velocity.subVectors(c.position,c.previous).divideScalar(a);let A=Re.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(A.x,A.y,A.z).multiplyScalar(2/a*(A.w<0?-1:1));let C=Re.a.set(0,0,1).applyQuaternion(c.quaternion),x=c.velocity.dot(C),w=Re.b.copy(c.velocity).addScaledVector(C,-x);w.multiplyScalar(1/(1+n.air*w.length()*a)),c.velocity.copy(w).addScaledVector(C,x/(1+n.broadside*Math.abs(x)*a)).multiplyScalar(M),c.angular.multiplyScalar(m/(1+n.spinAir*c.angular.length()*a)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),r[Le].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let R=0;R<Le;R++)e.lengths[R]=r[R].distanceTo(r[R+1])}u&&u.from.copy(u.target);let d=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let _=1;_<Le;_++)d+=l[_].lengthSq()*.05;e.calm=d<2e-4?e.calm+t:0},SL=({frontImage:e,backImage:t,imageFit:n="cover",cardColor:i="#ffffff",orientation:s="portrait",finish:a="glossy",cornerRadius:r=.3,size:o=.6,anchor:l="center",strapLength:c=.5,strapImage:h,strapColor:p="#111111",strapWidth:u=.65,metal:f="silver",gravity:g=1,damping:M=.5,elasticity:m=.5,breeze:d=.5,interactive:_=!0,intro:S=!0,className:v="",controlRef:E,onBreak:A,onRelease:C,onSnap:x,onHolding:w,style:R})=>{let U=(0,Xr.useRef)(null),F=(0,Xr.useRef)(null),q=(0,Xr.useRef)(null);return F.current={frontImage:e,backImage:t,imageFit:n==="contain"?"contain":"cover",cardColor:i,orientation:s==="landscape"?"landscape":"portrait",finish:a,cornerRadius:r,size:o,anchor:l,strapLength:c,strapImage:h,strapColor:p,strapWidth:u,metal:f,gravity:g,damping:M,elasticity:m,breeze:d,interactive:_,intro:S,onBreak:A,onRelease:C,onSnap:x,onHolding:w},(0,Xr.useEffect)(()=>{q.current?.()}),(0,Xr.useEffect)(()=>{let O=U.current;if(!O)return;let B;try{B=new Np({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{let K=document.createElement("img");return K.className="lanyard-fallback",K.src=F.current.frontImage,K.alt="JeanieChoo \u8BBE\u8BA1\u5E08 ID \u5361\u7247",O.appendChild(K),()=>K.remove()}B.setClearColor(0,0),B.outputColorSpace=Rn,B.toneMapping=Tu,B.toneMappingExposure=1;let H=B.domElement;H.className="lanyard-canvas",H.tabIndex=0,H.setAttribute("role","button"),H.setAttribute("aria-label","ID \u5361\u7247\u3002\u6309 Enter \u7FFB\u9762\uFF1B\u6309\u4F4F\u5411\u4E0B\u65B9\u5411\u952E\u8D85\u8FC7\u96F6\u70B9\u516B\u79D2\uFF0C\u89E6\u53D1\u65AD\u7EF3\u5F69\u86CB\u3002"),O.appendChild(H);let z=Math.min(8,B.capabilities.getMaxAnisotropy()),at=new vl,Y=hL(B);at.environment=Y.texture;let j=new Pn(Ip,1,.1,200),nt=new Nl(16777215,1.6);nt.position.set(-2.5,4,6);let Nt=new Nl(16777215,.35);Nt.position.set(3,-1,4),at.add(nt,Nt);let At=new Map,ee={front:null,back:null,strap:null},Ot=document.createElement("canvas"),qt=document.createElement("canvas"),W=document.createElement("canvas"),$=Rv(Ot,z),_t=Rv(qt,z),Ft=Rv(W,z);Ft.wrapS=Bi,Ft.wrapT=Ms;let bt=fL(),Gt=dL(),re={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new D},foilFill:{value:new D},foilTop:{value:new D}},it=K=>{Object.assign(K.uniforms,re),K.vertexShader=K.vertexShader.replace("#include <common>",`#include <common>
${sL}`).replace("#include <project_vertex>",`#include <project_vertex>
${aL}`),K.fragmentShader=K.fragmentShader.replace("#include <common>",`#include <common>
${rL}`).replace("#include <opaque_fragment>",`${oL}
#include <opaque_fragment>`)},ot=new Ya({map:$,normalMap:bt,normalScale:new vt(.06,.06)}),ut=new Ya({map:_t,normalMap:bt,normalScale:new vt(.06,.06)});ot.onBeforeCompile=it,ut.onBeforeCompile=it;let lt=new Ya,dt=new Rl({metalness:1}),Ht=new Ya({transparent:!0,map:Ft,normalMap:Gt,normalScale:new vt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new ie(.32,.32,.34),side:Ti}),Dt=new xs,Vt=new tn(void 0,lt),kt=new tn(void 0,ot),N=new tn(void 0,ut),he=new tn(new wl(cT,eL,18,72),dt);he.rotation.y=Math.PI/2-.7,Dt.add(Vt,kt,N,he),at.add(Dt);let mt=uL(ea),T=new tn(mt,Ht);T.frustumCulled=!1,at.add(T);let y=new xs,I=new tn(oT(Op),dt);I.position.y=Pp+zu/2-.004;let G=new tn(new wl(Pp,.0105,14,40),dt);y.add(I,G),at.add(y);let J=new tn(new qa(Op,.32),Ht);J.visible=!1,at.add(J);let V=gL(),ft=[],Q=new D,et=new D,gt=new El(ft,!1,"centripetal"),wt={width:1,height:1},ht=rT("portrait",.3),pt={},It=Op,Xt=2,Jt=0,P=performance.now(),St=0,tt=!0,yt=!0,Tt=!1,rt=!1,Rt=null,Pt=0,pe=!1,oe=0,Be="attached",li=0,Wr=new D,Gu=new D,Gl=Array.from({length:Le+1},()=>new D),Cs=QE(),kl=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Xl=()=>{let K=F.current,Bt=Av(K.cardColor,[1,1,1]),ct=iT,Wt=Math.round(iT*ht.height/ht.width);(Ot.width!==ct||Ot.height!==Wt)&&(Ot.width=ct,Ot.height=Wt,qt.width=ct,qt.height=Wt,$.dispose(),_t.dispose()),lT(Ot,ee.front,Bt,K.imageFit),lT(qt,ee.back||ee.front,Bt,K.imageFit),$.needsUpdate=!0,_t.needsUpdate=!0,Cn()},Wl=()=>{let K=F.current;Xt=mL(W,ee.strap,Av(K.strapColor,[.07,.07,.07])),Gt.repeat.set(2,2*Xt),Ft.dispose(),Ft.needsUpdate=!0,Cn()},Ns=()=>{let K=F.current,Bt=wt.width/wt.height,ct=ht.height/er(K.size,.15,.9),Wt=ht.width/.72;ct*Bt<Wt&&(ct=Wt/Bt);let Kt=ct*Bt;j.aspect=Bt,j.position.set(0,0,ct/2/Math.tan(Ip*Math.PI/360)),j.lookAt(0,0,0),j.updateProjectionMatrix(),j.updateMatrixWorld(),re.foilKey.value.set(-2.5,4,6).normalize().transformDirection(j.matrixWorldInverse),re.foilFill.value.set(3,-1,4).normalize().transformDirection(j.matrixWorldInverse),re.foilTop.value.set(.5,4.5,8).normalize().transformDirection(j.matrixWorldInverse);let ae=((jU[K.anchor]??.5)-.5)*Kt,Qe=ct/2+.2,ce=ct/2-ct*Bu(.12,.42,er(K.strapLength,0,1))+(ht.hangY-ht.height/2);V.anchor.set(ae,Qe,0),yL(V,ht,Qe-ce),V.nodes[0].copy(V.anchor),V.previous[0].copy(V.anchor)},qr=()=>{let K=F.current,Bt=`${K.orientation}|${K.cornerRadius}`;if(Bt!==pt.layoutKey){ht=rT(K.orientation,K.cornerRadius);let ce=cL(ht);Vt.geometry.dispose(),kt.geometry.dispose(),N.geometry.dispose(),Vt.geometry=ce.body,kt.geometry=ce.face,N.geometry=ce.face.clone(),kt.position.z=Fu/2+Kn+6e-4,N.rotation.y=Math.PI,N.position.z=-(Fu/2+Kn+6e-4),he.position.set(0,ht.ringY,0),pt.framingKey=""}let ct=`${Bt}|${K.size}|${K.anchor}|${K.strapLength}|${wt.width}|${wt.height}`;ct!==pt.framingKey&&(Ns(),Tt?Bt!==pt.layoutKey&&Bp(V,ht,!1):(Bp(V,ht,K.intro&&!kl),Tt=!0));let Wt=`${K.frontImage}|${K.backImage}|${K.strapImage}`;if(Wt!==pt.imageKey){let ce=++Pt;Promise.all([wv(At,K.frontImage),wv(At,K.backImage),wv(At,K.strapImage)]).then(([ne,Ne,Qn])=>{!yt||ce!==Pt||(ee.front=ne,ee.back=Ne,ee.strap=Qn,Xl(),Wl())})}let Kt=`${Bt}|${K.cardColor}|${K.imageFit}`;Kt!==pt.faceKey&&Xl(),K.strapColor!==pt.strapColor&&Wl();let ae=sT[K.finish]||sT.glossy,Qe=Av(K.cardColor,[1,1,1]);[ot,ut].forEach(ce=>{ce.roughness=ae.roughness,ce.metalness=ae.metalness,ce.clearcoat=ae.clearcoat,ce.clearcoatRoughness=ae.clearcoatRoughness,ce.anisotropy=ae.anisotropy}),re.foilStrength.value=ae.foil,re.foilAspect.value=ht.height/ht.width,lt.color.setRGB(Qe[0]*.92,Qe[1]*.92,Qe[2]*.92,Rn),lt.roughness=Math.min(ae.roughness,.35),lt.metalness=ae.metalness,lt.clearcoat=1,lt.clearcoatRoughness=.08;let Ge=aT[K.metal]||aT.silver;dt.color.set(Ge.color),dt.roughness=Ge.roughness,It=Op*er(K.strapWidth,.4,2),It!==pt.strapScale&&(I.geometry.dispose(),I.geometry=oT(It)),H.style.touchAction=K.interactive?"none":"auto",pt={layoutKey:Bt,framingKey:ct,imageKey:Wt,faceKey:Kt,strapColor:K.strapColor,strapScale:It},Cn()},ia=Array.from({length:ea},()=>new D),Yr=Array.from({length:ea},()=>new D),Zr=nL.map(K=>[Math.cos(K),Math.sin(K)]),es={tangent:new D,toCamera:new D,basis:new Pe,up:new D,across:new D,facing:new D,end:new D},Jr=()=>{let K=V.nodes[Le],Bt=Pp+zu+.05,ct=Le-1;for(;ct>0&&V.nodes[ct].distanceTo(K)<Bt*1.1;)ct--;let Wt=es.up.subVectors(V.nodes[ct],K);Wt.lengthSq()<1e-8&&Wt.set(0,1,0).applyQuaternion(V.body.quaternion),Wt.normalize(),Q.copy(K).addScaledVector(Wt,Bt),et.copy(K).addScaledVector(Wt,Pp+zu*.35),ft.length=0;for(let Ze=0;Ze<=ct;Ze++)ft.push(V.nodes[Ze]);ft.push(Q,et),gt.updateArcLengths();for(let Ze=0;Ze<ea;Ze++)gt.getPointAt(Ze/(ea-1),ia[Ze]);let Kt=gt.getLength(),ae=1-Q.distanceTo(et)/Math.max(Kt,.001),Qe=mt.getAttribute("position"),Ge=mt.getAttribute("normal"),ce=mt.getAttribute("uv"),ne=zp.length,Ne=V.rest*Le,Qn=Ne/(It*Xt),De=It/Math.pow(Math.max(1,Kt/Math.max(Ne,.001)),.35),{tangent:Nn,toCamera:Ds,across:Hn,facing:sa}=es;for(let Ze=0;Ze<ea;Ze++){Nn.subVectors(ia[Math.min(ea-1,Ze+1)],ia[Math.max(0,Ze-1)]),Nn.lengthSq()<1e-12&&Nn.set(0,-1,0),Nn.normalize(),Ds.subVectors(j.position,ia[Ze]).normalize();let sr=Yr[Ze].crossVectors(Ds,Nn);sr.lengthSq()<1e-10&&sr.copy(Ze>0?Yr[Ze-1]:Re.a.set(1,0,0)),sr.normalize(),Ze>0&&sr.dot(Yr[Ze-1])<0&&sr.negate();let Uv=-V.twist*Math.pow(Math.min(1,Ze/(ea-1)/ae),1.3);sa.crossVectors(Nn,sr),Hn.copy(sr).multiplyScalar(Math.cos(Uv)).addScaledVector(sa,Math.sin(Uv)),sa.crossVectors(Nn,Hn);let Hp=ia[Ze],xT=(1-Ze/(ea-1))*Qn;for(let Qr=0;Qr<ne;Qr++){let Vp=Ze*ne+Qr,Gp=(zp[Qr]-.5)*De,[kp,Xp]=Zr[Qr];Qe.setXYZ(Vp,Hp.x+Hn.x*Gp,Hp.y+Hn.y*Gp,Hp.z+Hn.z*Gp),Ge.setXYZ(Vp,sa.x*kp+Hn.x*Xp,sa.y*kp+Hn.y*Xp,sa.z*kp+Hn.z*Xp),ce.setXY(Vp,zp[Qr],xT)}}es.end.copy(Hn),Qe.needsUpdate=!0,Ge.needsUpdate=!0,ce.needsUpdate=!0,Hn.copy(es.end).addScaledVector(Wt,-es.end.dot(Wt)).normalize(),sa.crossVectors(Hn,Wt).normalize(),es.basis.makeBasis(Hn,Wt,sa),y.quaternion.setFromRotationMatrix(es.basis),y.position.copy(K)},ql=()=>{Dt.position.copy(V.body.position),Dt.quaternion.copy(V.body.quaternion),(!pe||["recoil","tension","snap"].includes(Be))&&Jr(),B.render(at,j)},ku=()=>{let K=F.current,Bt=40*er(K.gravity,0,3),ct=Math.max(Bt,20),Wt=er(K.elasticity,0,1),Kt=er(K.damping,0,1);return{gravity:Bt,hold:ct*Bu(2.2,5.5,Wt),stiffness:ct*10*Le,spring:ct*Bu(.1,.4,Wt)*Le,bandDamping:ct*Bu(.3,.08,Wt)*Le,linearDrag:.25*Math.pow(16,Kt),angularDrag:.5*Math.pow(12,Kt),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:kl?0:er(K.breeze,0,1)}},Xu=K=>{if(Jt=0,!yt)return;let Bt=Math.min(1/30,Math.max(1/240,(K-P)/1e3));P=K,St+=Bt;let ct=ku();if(pe){oe+=Bt;let ae=V.body,Qe=2*j.position.z*Math.tan(Ip*Math.PI/360);if(Be==="recoil"){let Ge=Math.min(oe/.42,1);ae.position.lerpVectors(Wr,Gu,1-Math.pow(1-Ge,3)),ae.position.y+=Math.sin(Ge*Math.PI)*.1;let ce=ae.hang.clone().applyQuaternion(ae.quaternion).add(ae.position);for(let ne=1;ne<=Le;ne++)V.nodes[ne].lerpVectors(V.anchor,ce,ne/Le);Ge===1&&(Be="tension",oe=0)}else if(Be==="tension"){let Ge=ae.hang.clone().applyQuaternion(ae.quaternion).add(ae.position);for(let ce=1;ce<=Le;ce++)V.nodes[ce].lerpVectors(V.anchor,Ge,ce/Le),V.nodes[ce].x+=Math.sin(oe*42)*.028*Math.sin(ce/Le*Math.PI);if(oe>=.18){let ce=V.nodes[2].clone().project(j),ne=H.getBoundingClientRect();F.current.onSnap?.({x:ne.left+(ce.x+1)*ne.width/2,y:ne.top+(1-ce.y)*ne.height/2}),V.nodes.forEach((Ne,Qn)=>Gl[Qn].copy(Ne)),Be="snap",oe=0,y.visible=!1,ae.velocity.set(0,.45,0)}}else if(Be==="snap"||Be==="fall"){if(Be==="snap"){let Ge=Math.min(oe/.3,1);for(let ce=1;ce<=Le;ce++)V.nodes[ce].lerpVectors(Gl[ce],V.anchor,1-Math.pow(1-Ge,2));Ht.opacity=1-Ge,Ge===1&&(T.visible=!1,Be="fall",oe=0)}ae.velocity.y-=12*Bt,ae.position.y+=ae.velocity.y*Bt,ae.position.x*=Math.exp(-5*Bt),ae.quaternion.slerp(new zn().setFromEuler(new Ki(0,V.turn,-.18)),1-Math.exp(-5*Bt)),ae.position.y+ht.height<-Qe/2&&(Be="gone",Dt.visible=!1,H.tabIndex=-1,H.style.visibility="hidden",H.setAttribute("aria-hidden","true"),F.current.onBreak?.())}}else xL(V,Bt,ct,St);let Wt=V.body;Number.isFinite(Wt.position.x+Wt.position.y+Wt.position.z+Wt.quaternion.w)||(V.grab=null,Bp(V,ht,!1)),ql();let Kt=pe?Be==="gone":V.calm>1.2&&!V.grab&&ct.breeze===0;tt&&!document.hidden&&!Kt&&(Jt=requestAnimationFrame(Xu))},Cn=()=>{Jt||!tt||!yt||(V.calm=0,P=performance.now(),Jt=requestAnimationFrame(Xu))},Kr=new bu,Wu=new vt,ir=K=>{let Bt=H.getBoundingClientRect();Wu.set((K.clientX-Bt.left)/Bt.width*2-1,-((K.clientY-Bt.top)/Bt.height)*2+1),Kr.setFromCamera(Wu,j)},b=()=>(Dt.updateMatrixWorld(),T.updateMatrixWorld(),T.geometry.computeBoundingSphere(),y.updateMatrixWorld(!0),Kr.intersectObjects([Vt,kt,N,T,he,I,G],!1)[0]||null),L=K=>{H.style.cursor!==K&&(H.style.cursor=K)},Z=K=>{let Bt=V.body,ct=Re.a.set(0,1,0).applyQuaternion(Bt.quaternion),Wt=V.turn>0?-1:1;if(V.turn===0){let Kt=Re.c.subVectors(K,j.position).normalize();Wt=Re.b.subVectors(K,Bt.position).cross(Kt).dot(ct)<0?-1:1}V.turn=V.turn===0?Math.PI*Wt:0,Bt.angular.addScaledVector(ct,iL*Wt)},X=()=>{if(!yt||pe||!V.grab)return;pe=!0,oe=0,Be="recoil",V.grab=null,Rt=null;let K=2*j.position.z*Math.tan(Ip*Math.PI/360);Wr.copy(V.body.position),Wr.y=Math.max(Wr.y,-K/2),Gu.set(0,V.anchor.y-V.rest*Le-ht.hangY,0),V.body.velocity.set(0,0,0),F.current.onRelease?.(),kl&&(Be="gone",Dt.visible=!1,T.visible=!1,y.visible=!1,H.tabIndex=-1,H.style.visibility="hidden",H.setAttribute("aria-hidden","true"),F.current.onBreak?.()),L(""),Cn()},k=KE({onBreak:X});E&&(E.current={flip:()=>{pe||(Z(V.body.position.clone().add(new D(.3,0,0))),Cn())},reset:()=>{k.reset(),Cs.reset(),pe=!1,Be="attached",Dt.visible=!0,T.visible=!0,Ht.opacity=1,y.visible=!0,J.visible=!1,H.tabIndex=0,H.style.visibility="visible",H.removeAttribute("aria-hidden"),V.grab=null,Rt=null,Bp(V,ht,!1),Cn()}});let Mt=K=>{if(pe||!F.current.interactive||K.button>0)return;ir(K);let Bt=b();if(!Bt)return;H.focus({preventScroll:!0});let ct=[Vt,kt,N].includes(Bt.object),Wt=ct?Bt.point:V.body.hang.clone().applyQuaternion(V.body.quaternion).add(V.body.position);if(V.grab={local:Wt.clone().sub(V.body.position).applyQuaternion(V.body.quaternion.clone().invert()),rotation:V.body.quaternion.clone(),reach:Bt.distance,from:Wt.clone(),target:Wt.clone(),pointerOffset:Wt.clone().sub(Bt.point)},Rt=ct?{x:K.clientX,y:K.clientY,time:performance.now(),point:Bt.point.clone()}:null,li=K.clientY,Cs.begin(K.clientX,K.clientY),Cs.click()){X(),K.preventDefault();return}H.setPointerCapture?.(K.pointerId),L("grabbing"),K.preventDefault(),Cn()},Ct=K=>{if(!(pe||!F.current.interactive)){if(ir(K),V.grab){if(Cs.move(K.clientX,K.clientY)){X();return}Rt&&Math.hypot(K.clientX-Rt.x,K.clientY-Rt.y)>6&&(Rt=null),Kr.ray.at(V.grab.reach,V.grab.target),V.grab.pointerOffset&&V.grab.target.add(V.grab.pointerOffset),k.update(K.clientY-li>=60,!0),Cn();return}K.pointerType!=="touch"&&(rt=!!b(),L(rt?"grab":""))}},xt=K=>{k.update(!1,!1),V.grab&&(V.grab=null,Rt&&K.type==="pointerup"&&performance.now()-Rt.time<450&&Z(Rt.point),Rt=null,H.releasePointerCapture?.(K.pointerId),L(rt&&K.pointerType!=="touch"?"grab":""),Cn())},Ut=K=>{!F.current.interactive||K.touches.length!==1||(ir(K.touches[0]),b()&&K.preventDefault())},zt=K=>{if(pe||!F.current.interactive)return;if(K.key==="Enter"||K.key===" "){K.preventDefault(),K.repeat||(Z(V.body.position.clone()),Cn());return}if(K.key!=="ArrowDown"||(K.preventDefault(),V.grab))return;let Bt=H.getBoundingClientRect();ir({clientX:Bt.left+Bt.width/2,clientY:window.innerHeight-24});let ct=Kr.ray.at(j.position.distanceTo(V.body.position),new D);if(V.grab={local:new D,rotation:V.body.quaternion.clone(),reach:j.position.distanceTo(V.body.position),from:V.body.position.clone(),target:ct},Cs.record(!0)){X();return}k.update(!0,!0),Cn()},te=()=>{k.update(!1,!1),V.grab=null,Rt=null},le=K=>{K.key==="ArrowDown"&&(te(),Cn())};H.addEventListener("pointerdown",Mt),H.addEventListener("pointermove",Ct),H.addEventListener("pointerup",xt),H.addEventListener("pointercancel",xt),H.addEventListener("lostpointercapture",xt),H.addEventListener("touchstart",Ut,{passive:!1}),H.addEventListener("keydown",zt),H.addEventListener("keyup",le),window.addEventListener("blur",te);let Lt=()=>{wt.width=Math.max(1,O.clientWidth),wt.height=Math.max(1,O.clientHeight),B.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),B.setSize(wt.width,wt.height,!1),qr(),ql()},ye=new ResizeObserver(Lt);ye.observe(O);let Ye=new IntersectionObserver(([K])=>{tt=K.isIntersecting,tt&&Cn()});Ye.observe(O);let Ce=()=>{document.hidden&&k.reset(),document.hidden||Cn()};return document.addEventListener("visibilitychange",Ce),q.current=qr,Lt(),()=>{yt=!1,k.dispose(),E&&(E.current=null),cancelAnimationFrame(Jt),q.current=null,ye.disconnect(),Ye.disconnect(),document.removeEventListener("visibilitychange",Ce),H.removeEventListener("pointerdown",Mt),H.removeEventListener("pointermove",Ct),H.removeEventListener("pointerup",xt),H.removeEventListener("pointercancel",xt),H.removeEventListener("lostpointercapture",xt),H.removeEventListener("touchstart",Ut),H.removeEventListener("keydown",zt),H.removeEventListener("keyup",le),window.removeEventListener("blur",te),[Vt,kt,N,he,I,G,T,J].forEach(K=>K.geometry?.dispose()),[ot,ut,lt,dt,Ht].forEach(K=>K.dispose()),[$,_t,Ft,bt,Gt].forEach(K=>K.dispose()),Y.dispose(),B.dispose(),H.parentNode&&H.parentNode.removeChild(H)}},[]),(0,mT.jsx)("div",{ref:U,className:`lanyard ${v}`.trim(),style:R})},pT=SL;var nr=is(to());var Vu=is(kr()),Vl=24,ML=Math.PI*2,bL=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,EL=`#version 300 es
precision highp float;
uniform vec2 uCenter;
uniform vec2 uHalf;
uniform float uRadius;
uniform float uPx;
uniform float uSpot;
uniform vec2 uEntry;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform vec2 uWindow;
uniform float uThickness;
uniform float uGlow;
out vec4 outColor;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float loopPosition(vec2 p, vec2 b, float r) {
  vec2 inner = b - r;
  float arc = 1.5707963 * r;
  float quarter = inner.x + inner.y + arc;
  vec2 a = abs(p);
  vec2 q = a - inner;
  float s = q.x > 0.0 && q.y > 0.0
    ? inner.y + atan(q.y, q.x) * r
    : (q.x > q.y ? min(a.y, inner.y) : inner.y + arc + inner.x - min(a.x, inner.x));
  if (p.x < 0.0) s = p.y >= 0.0 ? 2.0 * quarter - s : 2.0 * quarter + s;
  else if (p.y < 0.0) s = 4.0 * quarter - s;
  return s / max(4.0 * quarter, 0.0001);
}

float lobe(float position, float center) {
  float gap = abs(fract(position - center + 0.5) - 0.5);
  return 1.0 - smoothstep(uWindow.x, uWindow.x + uWindow.y, gap);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = roundedBox(p, uHalf, uRadius);
  float position = loopPosition(p, uHalf, uRadius);
  float key = lobe(position, uSpot);
  float back = lobe(position, uSpot + 0.5);
  float streak = key + back * 0.45;
  float width = max(uThickness * uPx * mix(1.0, max(key, back), 0.6), 0.35);
  float band = smoothstep(-width - 0.6, -width + 0.6, d) * (1.0 - smoothstep(-0.6, 0.6, d));
  float hair = smoothstep(-uPx - 0.6, -uPx + 0.6, d) * (1.0 - smoothstep(-0.6, 0.6, d));
  float inside = 1.0 - smoothstep(-0.6, 0.6, d);
  vec2 pool = (p - uEntry) / (uHalf.y * vec2(1.6, 1.1));
  float glow = streak * 0.2 * exp(-abs(d + width * 0.5) / (5.0 * uPx)) + inside * 0.08 * exp(-dot(pool, pool));
  float light = clamp((band * streak + glow * uGlow) * uIntensity, 0.0, 1.0);
  vec4 base = vec4(uBaseColor, 1.0) * hair * 0.6;
  outColor = vec4(uLineColor, 1.0) * light + base * (1.0 - light);
}`,TL=["uCenter","uHalf","uRadius","uPx","uSpot","uEntry","uLineColor","uBaseColor","uIntensity","uWindow","uThickness","uGlow"],Dv=(e,t,n)=>Math.min(n,Math.max(t,e)),Hu=e=>e-Math.floor(e),gT=(e,t,n,i,s)=>{let a=n-s,r=i-s,o=Math.PI/2*s,l=a+r+o,c=Math.abs(e),h=Math.abs(t),p=c-a,u=h-r,f;return p>0&&u>0?f=r+Math.atan2(u,p)*s:p>u?f=Math.min(h,r):f=r+o+a-Math.min(c,a),e<0?f=t>=0?2*l-f:2*l+f:t<0&&(f=4*l-f),Hu(f/Math.max(4*l,1e-4))},AL=(e,t,n,i)=>{let s=t-i,a=n-i,r=Math.PI/2*i,o=s+a+r,l=Hu(e)*4*o,c=1,h=1;l>3*o?(l=4*o-l,h=-1):l>2*o?(l-=2*o,c=-1,h=-1):l>o&&(l=2*o-l,c=-1);let p=s-(l-a-r),u=n;if(l<=a)p=t,u=l;else if(l<=a+r){let f=(l-a)/Math.max(i,1e-4);p=s+Math.cos(f)*i,u=a+Math.sin(f)*i}return[p*c,u*h]},_T=(e,t,n)=>{let i=e.createShader(t);return i?(e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)?i:(e.deleteShader(i),null)):null},wL=e=>{let t=_T(e,e.VERTEX_SHADER,bL),n=_T(e,e.FRAGMENT_SHADER,EL),i=e.createProgram();return!t||!n||!i?null:(e.attachShader(i,t),e.attachShader(i,n),e.bindAttribLocation(i,0,"aPosition"),e.linkProgram(i),e.deleteShader(t),e.deleteShader(n),e.getProgramParameter(i,e.LINK_STATUS)?i:(e.deleteProgram(i),null))},RL=({children:e="Get Started",size:t="lg",radius:n=18,tint:i="#ffffff",tintOpacity:s=.04,blur:a=0,textColor:r="#f5f5f5",lineColor:o="#ffffff",baseColor:l="#525252",intensity:c=1,idleIntensity:h=.35,shineSize:p=10,shineFade:u=34,thickness:f=1.2,glow:g=1,speed:M=.35,followMouse:m=!0,proximity:d=250,autoAnimate:_=!1,disabled:S=!1,onClick:v,focusRef:E,className:A="",type:C="button",style:x,...w})=>{let R=(0,nr.useRef)(null),U=(0,nr.useRef)(null),F=(0,nr.useRef)(null),q={radius:Math.max(0,n),lineColor:String(o),baseColor:String(l),intensity:Math.max(0,c),idleIntensity:Dv(h,0,1),shineSize:Math.max(0,p),shineFade:Math.max(0,u),thickness:Math.max(0,f),glow:Math.max(0,g),speed:M,followMouse:m,proximity:Math.max(1,d),autoAnimate:_,disabled:S},O=(0,nr.useRef)(q);return O.current=q,(0,nr.useEffect)(()=>{let B=R.current,H=U.current,z=H?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!B||!H||!z)return;let at=wL(z);if(!at)return;let Y={};for(let mt of TL)Y[mt]=z.getUniformLocation(at,mt);let j=z.createBuffer(),nt=z.createVertexArray();z.bindVertexArray(nt),z.bindBuffer(z.ARRAY_BUFFER,j),z.bufferData(z.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),z.STATIC_DRAW),z.enableVertexAttribArray(0),z.vertexAttribPointer(0,2,z.FLOAT,!1,0,0),z.bindVertexArray(null);let Nt=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),At=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,ee=new Map,Ot={width:1,height:1,ratio:1},qt={x:0,y:0,known:!1},W={spot:0,level:0,press:0,ready:!1},$=0,_t=0,Ft=!0,bt=mt=>{if(ee.has(mt))return ee.get(mt);let T=[1,1,1];if(Nt){Nt.clearRect(0,0,1,1),Nt.fillStyle="#000000",Nt.fillStyle=mt,Nt.fillRect(0,0,1,1);let[y,I,G]=Nt.getImageData(0,0,1,1).data;T=[y/255,I/255,G/255]}return ee.set(mt,T),T},Gt=mt=>Math.min(mt.radius,Ot.width/2,Ot.height/2),re=mt=>{let T=Gt(mt),y=T*(1-Math.SQRT1_2);return gT(y-Ot.width/2,Ot.height/2-y,Ot.width/2,Ot.height/2,T)},it=mt=>{if(!mt.followMouse||mt.disabled||!qt.known)return null;let T=B.getBoundingClientRect(),y=T.width/Ot.width||1,I=Ot.width/2,G=Ot.height/2,J=(qt.x-T.left-T.width/2)/y,V=(T.top+T.height/2-qt.y)/y,ft=Math.hypot(Math.max(Math.abs(J)-I,0),Math.max(Math.abs(V)-G,0)),Q=Dv(1-ft/mt.proximity,0,1),et=Q*Q*(3-2*Q),gt=gT(J,V,I,G,Gt(mt));if(ft>0)return{spot:gt,near:et};let wt=Dv(Math.min(I-Math.abs(J),G-Math.abs(V))/(G*.8),0,1),ht=re(mt)-J/I*.06-V/G*.02,pt=ht-gt-Math.round(ht-gt);return{spot:Hu(gt+pt*wt*wt*(3-2*wt)),near:et}},ot=mt=>{let{width:T,height:y}=Ot,I=H.width/(T+Vl*2),G=H.height/(y+Vl*2);z.viewport(0,0,H.width,H.height),z.clearColor(0,0,0,0),z.clear(z.COLOR_BUFFER_BIT),z.useProgram(at),z.uniform2f(Y.uCenter,(Vl+T/2)*I,(Vl+y/2)*G),z.uniform2f(Y.uHalf,T/2*I,y/2*G),z.uniform1f(Y.uRadius,Math.min(mt.radius,T/2,y/2)*I),z.uniform1f(Y.uPx,Ot.ratio);let J=Math.min(mt.radius,T/2,y/2),[V,ft]=AL(W.spot,T/2,y/2,J),Q=1-Math.min(.35*(y/2),Math.hypot(V,ft))/Math.max(Math.hypot(V,ft),1e-4);z.uniform1f(Y.uSpot,W.spot),z.uniform2f(Y.uEntry,V*Q*I,ft*Q*G),z.uniform3fv(Y.uLineColor,bt(mt.lineColor)),z.uniform3fv(Y.uBaseColor,bt(mt.baseColor)),z.uniform1f(Y.uIntensity,mt.intensity*(W.level+W.press*.8)),z.uniform2f(Y.uWindow,mt.shineSize/360+W.press*.06,mt.shineFade/360+1e-4),z.uniform1f(Y.uThickness,mt.thickness),z.uniform1f(Y.uGlow,mt.glow),z.bindVertexArray(nt),z.drawArrays(z.TRIANGLES,0,3),z.bindVertexArray(null)},ut=mt=>{if($=0,!Ft)return;let T=O.current,y=_t?Math.min(.05,(mt-_t)/1e3):1/60;_t=mt;let I=it(T),G=T.autoAnimate&&!At,J=!!I&&I.near>0;W.ready||(W.spot=re(T),W.level=T.autoAnimate?1:T.idleIntensity,W.ready=!0);let V=0;G&&!J?W.spot=Hu(W.spot+T.speed/ML*y):(V=(J?I.spot:re(T))-W.spot,V-=Math.round(V),W.spot=Hu(W.spot+V*(1-Math.exp(-y*8))));let ft=T.autoAnimate?1:T.idleIntensity+(1-T.idleIntensity)*(I?I.near:0);W.level+=(ft-W.level)*(1-Math.exp(-y*7)),W.press*=Math.exp(-y*5),ot(T),Math.abs(V)>2e-4||Math.abs(ft-W.level)>.001||W.press>.002||G&&!J?$=requestAnimationFrame(ut):_t=0},lt=()=>{!$&&Ft&&($=requestAnimationFrame(ut))},dt=mt=>{let T=mt?.borderBoxSize?.[0];Ot.width=Math.max(1,T?T.inlineSize:B.offsetWidth),Ot.height=Math.max(1,T?T.blockSize:B.offsetHeight),Ot.ratio=Math.min(window.devicePixelRatio||1,3),H.width=Math.max(1,Math.round((Ot.width+Vl*2)*Ot.ratio)),H.height=Math.max(1,Math.round((Ot.height+Vl*2)*Ot.ratio)),W.ready&&ot(O.current),lt()},Ht=mt=>{qt.x=mt.clientX,qt.y=mt.clientY,qt.known=!0,lt()},Dt=mt=>{qt.x=mt.clientX,qt.y=mt.clientY,qt.known=!0,O.current.disabled||(W.press=1),lt()},Vt=mt=>{mt.pointerType!=="mouse"&&(qt.known=!1,lt())},kt=()=>{qt.known=!1,lt()},N=new ResizeObserver(mt=>dt(mt[mt.length-1]));N.observe(B);let he=new IntersectionObserver(mt=>{Ft=mt.some(T=>T.isIntersecting),Ft&&(_t=0,lt())});return he.observe(B),window.addEventListener("pointermove",Ht,{passive:!0}),window.addEventListener("pointerup",Vt,{passive:!0}),window.addEventListener("pointercancel",Vt,{passive:!0}),document.documentElement.addEventListener("pointerleave",kt),B.addEventListener("pointerdown",Dt),dt(),F.current=lt,()=>{cancelAnimationFrame($),F.current=null,N.disconnect(),he.disconnect(),window.removeEventListener("pointermove",Ht),window.removeEventListener("pointerup",Vt),window.removeEventListener("pointercancel",Vt),document.documentElement.removeEventListener("pointerleave",kt),B.removeEventListener("pointerdown",Dt),z.deleteBuffer(j),z.deleteVertexArray(nt),z.deleteProgram(at),z.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,nr.useEffect)(()=>{F.current?.()}),(0,Vu.jsxs)("button",{ref:B=>{R.current=B,E&&(E.current=B)},type:C,disabled:S,onClick:v,className:`specular-button specular-button--${t}${A?` ${A}`:""}`,style:{"--sb-radius":`${n}px`,"--sb-tint":i,"--sb-tint-opacity":s,"--sb-blur":`${a}px`,"--sb-text-color":r,...x},...w,children:[(0,Vu.jsx)("canvas",{ref:U,className:"specular-button__light","aria-hidden":"true"}),(0,Vu.jsx)("span",{className:"specular-button__label",children:e})]})},vT=RL;var ln=is(kr());function CL(){let e=(0,na.useRef)(null),[t,n]=(0,na.useState)(!1),[i,s]=(0,na.useState)(!1),[a,r]=(0,na.useState)(null),o=(0,na.useRef)(null);(0,na.useEffect)(()=>{let c=document.querySelector("#about-dialog");return c?.classList.toggle("is-free",t),t&&o.current?.focus({preventScroll:!0}),()=>c?.classList.remove("is-free")},[t]);let l=()=>{e.current?.reset(),n(!1),s(!1),r(null)};return(0,ln.jsxs)(ln.Fragment,{children:[(0,ln.jsx)("div",{className:"lanyard-frame",style:{width:"100%",height:"100%"},children:(0,ln.jsx)(pT,{frontImage:"assets/card-front-composed.svg",backImage:"assets/card-back-composed.svg",strapImage:"assets/id-strap.svg",imageFit:"cover",cardColor:"#ffffff",orientation:"portrait",finish:"glossy",cornerRadius:.3,size:.56,anchor:"center",strapLength:.5,strapColor:"#000000",strapWidth:.65,metal:"silver",gravity:1,damping:.5,elasticity:.5,breeze:.5,interactive:!0,intro:!0,controlRef:e,onBreak:()=>n(!0),onRelease:()=>s(!0),onSnap:c=>r(c)})}),!t&&!i&&(0,ln.jsxs)("button",{className:"flip-card",onClick:()=>e.current?.flip(),children:["\u7FFB\u8F6C\u5361\u7247 ",(0,ln.jsx)("span",{"aria-hidden":"true",children:"\u21BB"})]}),a&&(0,ln.jsx)("div",{className:"snap-burst",style:{left:a.x,top:a.y},"aria-hidden":"true",children:Array.from({length:12},(c,h)=>(0,ln.jsx)("span",{onAnimationEnd:h===11?()=>r(null):void 0,style:{"--angle":`${h*30}deg`,"--distance":`${75+h%4*24}px`,"--rotation":`${h*19}deg`,"--star-size":`${12+h%3*5}px`,"--star-color":["#fff8e8","#f4d4eb","#8972b6"][h%3]},children:"\u2726"},h))}),t&&(0,ln.jsxs)("div",{className:"freedom-scene",children:[(0,ln.jsxs)("div",{className:"freedom-copy",role:"status",children:[(0,ln.jsx)("p",{className:"small",children:"FREE TO CREATE"}),(0,ln.jsx)("h3",{children:"\u7075\u611F \u4E0D\u53D7\u675F\u7F1A"}),(0,ln.jsx)("p",{children:"Design without limits."})]}),(0,ln.jsx)("div",{className:"freedom-reset",children:(0,ln.jsxs)(vT,{focusRef:o,className:"rehang-button",onClick:l,radius:28,textColor:"#22201f",lineColor:"#fff6ff",baseColor:"#514665",tint:"#ffffff",tintOpacity:.08,idleIntensity:.45,intensity:1.2,thickness:1.4,glow:1,autoAnimate:!1,children:["\u91CD\u65B0\u6302\u597D ",(0,ln.jsx)("span",{"aria-hidden":"true",children:"\u2197"})]})})]})]})}function MB(e){let t=(0,yT.createRoot)(e);return t.render((0,ln.jsx)(CL,{})),()=>t.unmount()}export{MB as mountAbout};
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
