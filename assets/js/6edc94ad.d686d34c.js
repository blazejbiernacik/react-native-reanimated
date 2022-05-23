"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2574],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9593:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o={id:"value",title:"Value",sidebar_label:"Value"},l=void 0,c={unversionedId:"value",id:"version-1.x.x/value",isDocsHomePage:!1,title:"Value",description:"Animated.Value is a container for storing values. It's is initialized with new Value(0) constructor. For backward compatibility there are provided API for setting value after it has been initialized:",source:"@site/versioned_docs/version-1.x.x/value.md",sourceDirName:".",slug:"/value",permalink:"/react-native-reanimated/docs/1.x.x/value",version:"1.x.x",frontMatter:{id:"value",title:"Value",sidebar_label:"Value"},sidebar:"version-1.x.x/docs",previous:{title:"Additional configuration",permalink:"/react-native-reanimated/docs/1.x.x/config"},next:{title:"Clock",permalink:"/react-native-reanimated/docs/1.x.x/clock"}},u=[],s={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Animated.Value")," is a container for storing values. It's is initialized with ",(0,i.kt)("inlineCode",{parentName:"p"},"new Value(0)")," constructor. For backward compatibility there are provided API for setting value after it has been initialized:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const v = new Value(0);\n/// ...\nv.setValue(100);\n")),(0,i.kt)("p",null,"While using ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated.Value")," in functional components it's recommended that one should wrap instantiation with ",(0,i.kt)("inlineCode",{parentName:"p"},"useRef(...)")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"useMemo(...)")," to use the same instance on re-render, or just simply use ",(0,i.kt)("inlineCode",{parentName:"p"},"useValue")," hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const v = useValue(0);\n/// ...\nv.setValue(100);\n")))}p.isMDXComponent=!0}}]);