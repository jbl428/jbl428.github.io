"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7575],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),b=a,y=m["".concat(c,".").concat(b)]||m[b]||s[b]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8620:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],p={title:"Typescript\ub85c \ud655\ub960 Monad \uad6c\ud604\ud558\uae30 - 1",description:"Typescript\ub85c \ud655\ub960\ubd84\ud3ec\ub97c \uc704\ud55c Monad\ub97c \uad6c\ud604\ud558\ub294 \uacfc\uc815\uc744 \uc18c\uac1c\ud55c\ub2e4.",authors:"jake",tags:["probability","monad","typescript"]},c=void 0,l={permalink:"/2022/12/28/probability-monad-1",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2022-12-28-probability-monad-1/index.mdx",source:"@site/blog/2022-12-28-probability-monad-1/index.mdx",title:"Typescript\ub85c \ud655\ub960 Monad \uad6c\ud604\ud558\uae30 - 1",description:"Typescript\ub85c \ud655\ub960\ubd84\ud3ec\ub97c \uc704\ud55c Monad\ub97c \uad6c\ud604\ud558\ub294 \uacfc\uc815\uc744 \uc18c\uac1c\ud55c\ub2e4.",date:"2022-12-28T00:00:00.000Z",formattedDate:"2022\ub144 12\uc6d4 28\uc77c",tags:[{label:"probability",permalink:"/tags/probability"},{label:"monad",permalink:"/tags/monad"},{label:"typescript",permalink:"/tags/typescript"}],readingTime:13.25,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"Typescript\ub85c \ud655\ub960 Monad \uad6c\ud604\ud558\uae30 - 1",description:"Typescript\ub85c \ud655\ub960\ubd84\ud3ec\ub97c \uc704\ud55c Monad\ub97c \uad6c\ud604\ud558\ub294 \uacfc\uc815\uc744 \uc18c\uac1c\ud55c\ub2e4.",authors:"jake",tags:["probability","monad","typescript"]},prevItem:{title:"Typescript\ub85c \ud655\ub960 Monad \uad6c\ud604\ud558\uae30 - 2",permalink:"/2022/12/29/probability-monad-2"},nextItem:{title:"\ubc30\ub2ec\ube44 \ub178\ub178 \ud504\ub85c\uc81d\ud2b8\uc744 \uc9c4\ud589\ud558\uba70",permalink:"/2022/11/07/bae-no-architecture"}},u={authorsImageUrls:[void 0]},s=[],m={toc:s};function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ucd5c\uadfc\uc5d0 ",(0,o.kt)("a",{parentName:"p",href:"https://dennybritz.com/posts/probability-monads-from-scratch/"},"Probability Monads from scratch in 100 lines of Haskell")," \uae00\uc744 \uc77d\uc5b4\ubcf4\uc558\ub294\ub370 \ub0b4\uc6a9\uc774 \uaf64 \uc7ac\ubc0c\uc5b4\uc11c Typescript\ub85c \uad6c\ud604\ud55c \uacfc\uc815\uc744 \uc18c\uac1c\ud558\uace0\uc790 \ud55c\ub2e4."),(0,o.kt)("p",null,"\ud574\ub2f9 \uae00\uc740 haskell\uc744 \uc0ac\uc6a9\ud574 \ud655\ub960\ubd84\ud3ec\ub97c \ud45c\ud604\ud558\ub294 Monad\ub97c \ub9cc\ub4e4\uc5b4\uc11c \uac04\ub2e8\ud55c \ud655\ub960\uc744 \uad6c\ud558\ub294 \uacfc\uc815\uc744 \ub2f4\uace0\uc788\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ubcf4\ud1b5 \uc21c\uc218 \ud568\uc218\ud615 \uc5b8\uc5b4\uc5d0\uc11c \uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Either"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),"\uac19\uc740 Monad \ub300\uc2e0 \uc5b8\ub73b \ubcf4\uae30\uc5d0\ub294 \uad00\ub828\uc774 \uc5c6\uc5b4\ubcf4\uc774\ub294 \ud655\ub960\ubd84\ud3ec \uacc4\uc0b0\uc5d0 Monad\ub97c \ud65c\uc6a9\ud558\ub294 \uac83\uc774 \uc2e0\uae30\ud588\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uadf8\ub798\uc11c \ub098\uc5d0\uac8c \uc870\uae08 \ub354 \uc775\uc219\ud55c \uc5b8\uc5b4\uc778 Typescript\ub85c \uad6c\ud604\ud574\ubcf4\uc558\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ubaa8\ub4e0 \uad6c\ud604 \ucf54\ub4dc\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jbl428/study-note/blob/master/functional-programming/probability-monad/Distributions.ts"},"Github"),"\uc5d0 \uc62c\ub824\ub450\uc5c8\ub2e4.")))}b.isMDXComponent=!0}}]);