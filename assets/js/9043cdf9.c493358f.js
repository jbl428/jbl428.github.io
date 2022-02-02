"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[316],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6042:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return l},toc:function(){return m},default:function(){return f}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],c={title:"Promise \uc640 Monad - 2",authors:"jake",tags:["monad","promise"]},u=void 0,p={permalink:"/2021/11/28/promise-and-monad-2",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2021-11-28-promise-and-monad-2/index.mdx",source:"@site/blog/2021-11-28-promise-and-monad-2/index.mdx",title:"Promise \uc640 Monad - 2",description:"\uc774\uc804 \uae00\uc5d0\uc11c\ub294 promise \ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\ub4e4\uc744 then \uc744 \uc774\uc6a9\ud574 \ud569\uc131\ud558\ub294 \uacfc\uc815\uc744 \uc0b4\ud3b4\ubcf4\uc558\ub2e4.",date:"2021-11-28T00:00:00.000Z",formattedDate:"2021\ub144 11\uc6d4 28\uc77c",tags:[{label:"monad",permalink:"/tags/monad"},{label:"promise",permalink:"/tags/promise"}],readingTime:5.79,truncated:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"Promise \uc640 Monad - 2",authors:"jake",tags:["monad","promise"]},prevItem:{title:"TypeORM CreateDateColumn \ub370\ucf54\ub808\uc774\ud130\uc640 value transformer \ubb38\uc81c",permalink:"/2021/12/09/typeorm-transformer"},nextItem:{title:"Promise \uc640 Monad - 1",permalink:"/2021/11/07/promise-and-monad-1"}},l={authorsImageUrls:[void 0]},m=[],s={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc774\uc804 \uae00\uc5d0\uc11c\ub294 promise \ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\ub4e4\uc744 then \uc744 \uc774\uc6a9\ud574 \ud569\uc131\ud558\ub294 \uacfc\uc815\uc744 \uc0b4\ud3b4\ubcf4\uc558\ub2e4.\n\uc774\uc81c \ud30c\ub77c\ubbf8\ud130\ub97c 2\uac1c \uc774\uc0c1 \uc694\uad6c\ud558\ub294 \ud568\uc218\uac00 \uc788\ub294 \uacbd\uc6b0\ub97c \uc0b4\ud3b4\ubcf4\uc790."))}f.isMDXComponent=!0}}]);