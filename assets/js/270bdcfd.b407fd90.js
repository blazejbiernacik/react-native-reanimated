"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5033],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9261:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o={id:"useDerivedValue",title:"useDerivedValue",sidebar_label:"useDerivedValue"},l=void 0,s={unversionedId:"api/useDerivedValue",id:"version-2.2.x/api/useDerivedValue",isDocsHomePage:!1,title:"useDerivedValue",description:"This hook allows for creating shared value reference that can change in response to updating of one or more other shared values.",source:"@site/versioned_docs/version-2.2.x/api/useDerivedValue.md",sourceDirName:"api",slug:"/api/useDerivedValue",permalink:"/react-native-reanimated/docs/2.2.x/api/useDerivedValue",version:"2.2.x",frontMatter:{id:"useDerivedValue",title:"useDerivedValue",sidebar_label:"useDerivedValue"},sidebar:"version-2.2.x/docs",previous:{title:"useAnimatedStyle",permalink:"/react-native-reanimated/docs/2.2.x/api/useAnimatedStyle"},next:{title:"useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/2.2.x/api/useAnimatedScrollHandler"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This hook allows for creating shared value reference that can change in response to updating of one or more other shared values."),(0,i.kt)("p",null,"The hook returns the same type of a shared value reference instance as ",(0,i.kt)("a",{parentName:"p",href:"useSharedValue"},(0,i.kt)("inlineCode",{parentName:"a"},"useSharedValue"))," hook."),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"updaterworklet-worklet"},(0,i.kt)("inlineCode",{parentName:"h4"},"updaterWorklet")," ","[worklet]"),(0,i.kt)("p",null,"The first argument is a worklet that gets triggered whenever at least one of the shared values used in that worklet changes.\nIt is expected that the worklet return a new JS value (number, string, bool, Object, Array) that will be assigned to the shared value reference the hook returns.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"updaterWorklet")," will be triggered immediately upon use of this hook in order to calculate the initial payload for the returned shared value."),(0,i.kt)("h4",{id:"dependencies-array"},(0,i.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,i.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{7}","{7}":!0},"const App = () => {\n  const [state, setState] = useState(0);\n  const sv = useSharedValue(state);\n\n  const derived = useDerivedValue(() => {\n    return sv.value * state;\n  }, dependencies);\n  //...\n  return <></>\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in it's body or any values from it's closure(variables from outer scope used in worklet),"),(0,i.kt)("li",{parentName:"ul"},"empty array(",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if it's body changes,"),(0,i.kt)("li",{parentName:"ul"},"array of values(",(0,i.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in it's body or any values from the given array.")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"The hook returns a reference to a shared value initialized with the provided data.\nThe reference is an object with ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," property, that can be accessed and modified from worklets, but also updated directly from the main JS thread."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In the below example we define a shared value named ",(0,i.kt)("inlineCode",{parentName:"p"},"progress")," that can go from 0 to 1.\nThen defined a derived shared value ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," that will respond to progress changes.\nWe calculate ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),"'s value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"useDerivedValue")," worklet as a product of ",(0,i.kt)("inlineCode",{parentName:"p"},"progress"),"'s value times 250.\nAs a result ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),"'s value will always stay in sync with changes made to ",(0,i.kt)("inlineCode",{parentName:"p"},"progress")," shared value and will be equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"progress"),"s value times 250."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6}","{6}":!0},"import { Button } from 'react-native';\nimport { useSharedValue, useDerivedValue } from 'react-native-reanimated';\n\nfunction App() {\n  const progress = useSharedValue(0);\n  const width = useDerivedValue(() => {\n    return progress.value * 250;\n  });\n\n  return (\n    <View>\n      <SomeComponent width={width} />\n      <Button onPress={() => (progress.value = Math.random())} />\n    </View>\n  );\n}\n")))}p.isMDXComponent=!0}}]);