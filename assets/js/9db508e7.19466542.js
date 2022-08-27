"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1391],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"[Spring Data MongoDB] Atlas Search \ub97c \uc704\ud55c \ucee4\uc2a4\ud140 Kotlin DSL \ub9cc\ub4e4\uae30",authors:"jake",tags:["spring","mongodb","atlas","dsl"]},c=void 0,s={permalink:"/2022/07/03/atlas-search-kotlin-dsl",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2022-07-03-atlas-search-kotlin-dsl/index.mdx",source:"@site/blog/2022-07-03-atlas-search-kotlin-dsl/index.mdx",title:"[Spring Data MongoDB] Atlas Search \ub97c \uc704\ud55c \ucee4\uc2a4\ud140 Kotlin DSL \ub9cc\ub4e4\uae30",description:"MongoDB Atlas Search \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc804\ubb38 \uac80\uc0c9 \uae30\ub2a5\uc744 Spring Data MongoDB \uc73c\ub85c \uc870\ud68c\ud558\uae30 \uc704\ud55c dsl \uc744 \ub9cc\ub4dc\ub294 \uacfc\uc815\uc744 \ub2f4\uace0\uc788\ub2e4.",date:"2022-07-03T00:00:00.000Z",formattedDate:"2022\ub144 7\uc6d4 3\uc77c",tags:[{label:"spring",permalink:"/tags/spring"},{label:"mongodb",permalink:"/tags/mongodb"},{label:"atlas",permalink:"/tags/atlas"},{label:"dsl",permalink:"/tags/dsl"}],readingTime:4.865,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"[Spring Data MongoDB] Atlas Search \ub97c \uc704\ud55c \ucee4\uc2a4\ud140 Kotlin DSL \ub9cc\ub4e4\uae30",authors:"jake",tags:["spring","mongodb","atlas","dsl"]},nextItem:{title:"Kotlin + Spring GraphQL + Spring Security \uc0ac\uc6a9\ud558\uae30",permalink:"/2022/06/06/spring-graphql"}},p={authorsImageUrls:[void 0]},u=[],g={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/ko-kr/atlas/search"},"MongoDB Atlas Search")," \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc804\ubb38 \uac80\uc0c9 \uae30\ub2a5\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Data MongoDB")," \uc73c\ub85c \uc870\ud68c\ud558\uae30 \uc704\ud55c dsl \uc744 \ub9cc\ub4dc\ub294 \uacfc\uc815\uc744 \ub2f4\uace0\uc788\ub2e4."))}m.isMDXComponent=!0}}]);