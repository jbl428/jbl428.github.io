"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,y=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Fly.io\ub97c \ud65c\uc6a9\ud55c \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \ubc30\ud3ec",slug:"2022/08/27/Fly.io\ub97c-\ud65c\uc6a9\ud55c-\ub3c4\ucee4-\ucee8\ud14c\uc774\ub108-\ubc30\ud3ec",authors:"jake",tags:["fly.io","nest.js","ci/cd","docker"]},i=void 0,l={permalink:"/2022/08/27/Fly.io\ub97c-\ud65c\uc6a9\ud55c-\ub3c4\ucee4-\ucee8\ud14c\uc774\ub108-\ubc30\ud3ec",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2022-08-27-fly-io/index.mdx",source:"@site/blog/2022-08-27-fly-io/index.mdx",title:"Fly.io\ub97c \ud65c\uc6a9\ud55c \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \ubc30\ud3ec",description:"\ud638\uc2a4\ud305 \uc11c\ubc84\ub85c \uc774\uc6a9\uc911\uc778 Heroku \uac00 11\uc6d4 \uc774\ud6c4\ub85c \ub354 \uc774\uc0c1 \ubb34\ub8cc\ud50c\ub79c\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc544 \uc774\uc804\ubd80\ud130 \ub208\uc5ec\uaca8\ubcf8 Fly.io \ub85c \uc774\uc804\ud55c \uacfc\uc815\uc744 \ub2f4\uace0\uc788\ub2e4.",date:"2022-08-27T00:00:00.000Z",formattedDate:"2022\ub144 8\uc6d4 27\uc77c",tags:[{label:"fly.io",permalink:"/tags/fly-io"},{label:"nest.js",permalink:"/tags/nest-js"},{label:"ci/cd",permalink:"/tags/ci-cd"},{label:"docker",permalink:"/tags/docker"}],readingTime:10.22,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"Fly.io\ub97c \ud65c\uc6a9\ud55c \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \ubc30\ud3ec",slug:"2022/08/27/Fly.io\ub97c-\ud65c\uc6a9\ud55c-\ub3c4\ucee4-\ucee8\ud14c\uc774\ub108-\ubc30\ud3ec",authors:"jake",tags:["fly.io","nest.js","ci/cd","docker"]},prevItem:{title:"Mogenius\ub97c \ud65c\uc6a9\ud55c \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \ubc30\ud3ec",permalink:"/2022/09/09/Mogenius\ub97c-\ud65c\uc6a9\ud55c-\ub3c4\ucee4-\ucee8\ud14c\uc774\ub108-\ubc30\ud3ec"},nextItem:{title:"[Spring Data MongoDB] Atlas Search \ub97c \uc704\ud55c \ucee4\uc2a4\ud140 Kotlin DSL \ub9cc\ub4e4\uae30",permalink:"/2022/07/03/[Spring-Data-MongoDB]-Atlas-Search\ub97c-\uc704\ud55c-\ucee4\uc2a4\ud140-Kotlin-DSL-\ub9cc\ub4e4\uae30"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud638\uc2a4\ud305 \uc11c\ubc84\ub85c \uc774\uc6a9\uc911\uc778 Heroku \uac00 11\uc6d4 \uc774\ud6c4\ub85c \ub354 \uc774\uc0c1 \ubb34\ub8cc\ud50c\ub79c\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc544 \uc774\uc804\ubd80\ud130 \ub208\uc5ec\uaca8\ubcf8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Fly.io")," \ub85c \uc774\uc804\ud55c \uacfc\uc815\uc744 \ub2f4\uace0\uc788\ub2e4."))}m.isMDXComponent=!0}}]);