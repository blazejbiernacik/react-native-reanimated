"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6417],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6729:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i={id:"troubleshooting",title:"Troubleshooting common problems",sidebar_label:"Troubleshooting"},l=void 0,c={unversionedId:"fundamentals/troubleshooting",id:"fundamentals/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting common problems",description:"TypeError: Cannot convert undefined value to object on someVariable._closure",source:"@site/docs/fundamentals/troubleshooting.md",sourceDirName:"fundamentals",slug:"/fundamentals/troubleshooting",permalink:"/react-native-reanimated/docs/next/fundamentals/troubleshooting",version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting common problems",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Web Support",permalink:"/react-native-reanimated/docs/next/fundamentals/web-support"},next:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/next/api/hooks/useSharedValue"}},u=[{value:"<code>TypeError: Cannot convert undefined value to object</code> on <code>someVariable._closure</code>",id:"typeerror-cannot-convert-undefined-value-to-object-on-somevariable_closure",children:[]},{value:"<code>undefined is not an object (evaluating &#39;_toConsumableArray(Array(length)).map&#39;)</code>",id:"undefined-is-not-an-object-evaluating-_toconsumablearrayarraylengthmap",children:[]}],s={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"typeerror-cannot-convert-undefined-value-to-object-on-somevariable_closure"},(0,a.kt)("inlineCode",{parentName:"h3"},"TypeError: Cannot convert undefined value to object")," on ",(0,a.kt)("inlineCode",{parentName:"h3"},"someVariable._closure")),(0,a.kt)("p",null,"This error frequently happens when metro cache is not updated. Clear it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"watchman watch-del-all\nyarn start --reset-cache\n")),(0,a.kt)("p",null,"Also, make sure that you installed the babel plugin."),(0,a.kt)("h3",{id:"undefined-is-not-an-object-evaluating-_toconsumablearrayarraylengthmap"},(0,a.kt)("inlineCode",{parentName:"h3"},"undefined is not an object (evaluating '_toConsumableArray(Array(length)).map')")),(0,a.kt)("p",null,"This error shows when you use spread (",(0,a.kt)("inlineCode",{parentName:"p"},"...array"),") inside worklets. See ",(0,a.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/next/#known-problems-and-limitations"},"Known problems and limitations")," section for more information about spread support.\nDepending on how spread is used you may try one of the following alternatives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"copying array: ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"},(0,a.kt)("inlineCode",{parentName:"a"},"array.slice()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[...Array(length)].map")," idiom: ",(0,a.kt)("inlineCode",{parentName:"li"},"Array(length).fill().map()")),(0,a.kt)("li",{parentName:"ul"},"merging objects: ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},(0,a.kt)("inlineCode",{parentName:"a"},"Object.assign()"))),(0,a.kt)("li",{parentName:"ul"},"spreading args in function: ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"},(0,a.kt)("inlineCode",{parentName:"a"},"func.apply()")))))}p.isMDXComponent=!0}}]);