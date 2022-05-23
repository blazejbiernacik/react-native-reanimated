"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6383],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7082:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i={id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},l=void 0,s={unversionedId:"api/nativeMethods/scrollTo",id:"version-2.2.x/api/nativeMethods/scrollTo",isDocsHomePage:!1,title:"scrollTo",description:"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags(which might occur when it would be asynchronous and based on a lot of events).",source:"@site/versioned_docs/version-2.2.x/api/nativeMethods/scrollTo.md",sourceDirName:"api/nativeMethods",slug:"/api/nativeMethods/scrollTo",permalink:"/react-native-reanimated/docs/2.2.x/api/nativeMethods/scrollTo",version:"2.2.x",frontMatter:{id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},sidebar:"version-2.2.x/docs",previous:{title:"measure",permalink:"/react-native-reanimated/docs/2.2.x/api/nativeMethods/measure"},next:{title:"runOnJS",permalink:"/react-native-reanimated/docs/2.2.x/api/miscellaneous/runOnJS"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags(which might occur when it would be asynchronous and based on a lot of events)."),(0,a.kt)("p",null,"This function is implemented on native platforms only. On the web it's sufficient to use a standard version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"scrollTo")," which comes with a ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," component(it's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/aebccd3f923c920bd85fb9e5fbdd2a8a75d3ad3d/Libraries/Components/ScrollView/ScrollView.js#L834"},"here"),"). In such a case it should be invoked in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const aref = useAnimatedRef();\naref.current.scrollTo({ x, y });\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"animatedref"},(0,a.kt)("inlineCode",{parentName:"h4"},"animatedRef")),(0,a.kt)("p",null,"The product of ",(0,a.kt)("a",{parentName:"p",href:"../useAnimatedRef"},(0,a.kt)("inlineCode",{parentName:"a"},"useAnimatedRef"))," which is a Reanimated's extension of a standard React's ref(delivers view tag on the UI thread)."),(0,a.kt)("h4",{id:"x-cord-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"x-cord")," ","[Float]"),(0,a.kt)("p",null,"Corresponds to the pixel along the horizontal axis of the element that you want displayed in the upper left."),(0,a.kt)("h4",{id:"y-cord-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"y-cord")," ","[Float]"),(0,a.kt)("p",null,"Corresponds to the pixel along the vertical axis of the element that you want displayed in the upper left."),(0,a.kt)("h4",{id:"animated-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"animated")," ","[Boolean]"),(0,a.kt)("p",null,"Indicates whether the scroll should be smooth."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"void"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef();\n  const scroll = useSharedValue(0);\n\n  useDerivedValue(() => {\n    scrollTo(aref, 0, scroll.value * 100, true);\n  });\n\n  const items = Array.from(Array(10).keys());\n\n  return (\n    <View>\n      <Button\n        title=\"scroll down\"\n        onPress={() => {\n          scroll.value = scroll.value + 1;\n          if (scroll.value >= 10) scroll.value = 0;\n        }}\n      />\n      <View style={{ width: 120, height: 200, backgroundColor: 'green' }}>\n        <ScrollView\n          ref={aref}\n          style={{ backgroundColor: 'orange', width: 120 }}>\n          {items.map((_, i) => (\n            <View\n              key={i}\n              style={{\n                backgroundColor: 'white',\n                width: 100,\n                height: 100,\n                margin: 10,\n              }}\n            />\n          ))}\n        </ScrollView>\n      </View>\n    </View>\n  );\n};\n")))}d.isMDXComponent=!0}}]);