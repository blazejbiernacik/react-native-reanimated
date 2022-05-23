"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4886],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7854:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={id:"installation",title:"Installation",sidebar_label:"Installation"},l=void 0,s={unversionedId:"fundamentals/installation",id:"version-2.5.x/fundamentals/installation",isDocsHomePage:!1,title:"Installation",description:"Installing Reanimated requires a couple of additional steps compared to installing most of the popular react-naitve packages.",source:"@site/versioned_docs/version-2.5.x/fundamentals/installation.md",sourceDirName:"fundamentals",slug:"/fundamentals/installation",permalink:"/react-native-reanimated/docs/fundamentals/installation",version:"2.5.x",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"version-2.5.x/docs",previous:{title:"About",permalink:"/react-native-reanimated/docs/"},next:{title:"Worklets",permalink:"/react-native-reanimated/docs/fundamentals/worklets"}},c=[{value:"Installing the package",id:"installing-the-package",children:[]},{value:"Babel plugin",id:"babel-plugin",children:[]},{value:"Android",id:"android",children:[{value:"Proguard",id:"proguard",children:[]}]},{value:"iOS",id:"ios",children:[]},{value:"Sample React-Native project configured with Reanimated",id:"sample-react-native-project-configured-with-reanimated",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Installing Reanimated requires a couple of additional steps compared to installing most of the popular react-naitve packages.\nSpecifically on Android the setup consist of adding additional code to the main application class.\nThe steps needed to get reanimated properly configured are listed in the below paragraphs."),(0,i.kt)("h2",{id:"installing-the-package"},"Installing the package"),(0,i.kt)("p",null,"First step is to install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," alpha as a dependency in your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-reanimated\n")),(0,i.kt)("h2",{id:"babel-plugin"},"Babel plugin"),(0,i.kt)("p",null,"Add Reanimated's babel plugin to your ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"  module.exports = {\n      ...\n      plugins: [\n          ...\n          'react-native-reanimated/plugin',\n      ],\n  };\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Reanimated plugin has to be listed last."))),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("p",null,"No additional steps are necessary."),(0,i.kt)("h3",{id:"proguard"},"Proguard"),(0,i.kt)("p",null,"If you're using Proguard, make sure to add rule preventing it from optimizing Turbomodule classes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-keep class com.swmansion.reanimated.** { *; }\n-keep class com.facebook.react.turbomodule.** { *; }\n")),(0,i.kt)("h2",{id:"ios"},"iOS"),(0,i.kt)("p",null,"As reanimated is setup to configure and install automatically, the only thing you have to do is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"pod install")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ios/")," directory. Note that the auto-installation setup works for the standard React Naitve apps, if you have problems setting it up with a custom setup (e.g. brownfield) please start a new issue where we can find a way to guide you through that process."),(0,i.kt)("h2",{id:"sample-react-native-project-configured-with-reanimated"},"Sample React-Native project configured with Reanimated"),(0,i.kt)("p",null,"If you have troubles configuring Reanimated in your project, or just want to try the library without the need of setting it up ion a fresh project we recommend checking our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"Reanimated Playground")," repo, which is essentially a fresh React-Native app with Reanimated library installed and configured properly.\n","[Visit the Playground repo here]"," or copy the command below to do a git clone:"))}p.isMDXComponent=!0}}]);