"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8226],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,g=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7067:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],p={title:"graphql \uc7a5\uc810",authors:"jake",tags:["graphql","codegen"]},c=void 0,l={permalink:"/2022/02/16/graphql-restapi",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2022-02-16-graphql-restapi/index.mdx",source:"@site/blog/2022-02-16-graphql-restapi/index.mdx",title:"graphql \uc7a5\uc810",description:"\uc774\ubc88 \uae00\uc5d0\uc11c\ub294 Node.js \ud658\uacbd\uc5d0\uc11c REST API \uc640 GraphQL \uc744 \uc0ac\uc6a9\ud574\ubcf4\uba74\uc11c \ub290\ub080\uc810\uacfc GraphQL \uc744 \uc120\ud638\ud558\ub294 \uc774\uc720\ub97c \uc791\uc131\ud558\ub824\uace0 \ud55c\ub2e4.",date:"2022-02-16T00:00:00.000Z",formattedDate:"2022\ub144 2\uc6d4 16\uc77c",tags:[{label:"graphql",permalink:"/tags/graphql"},{label:"codegen",permalink:"/tags/codegen"}],readingTime:7.13,truncated:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"graphql \uc7a5\uc810",authors:"jake",tags:["graphql","codegen"]},nextItem:{title:"MikroORM \uacfc TypeORM \ube44\uad50",permalink:"/2022/02/16/mikroorm-vs-typeorm"}},u={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc774\ubc88 \uae00\uc5d0\uc11c\ub294 Node.js \ud658\uacbd\uc5d0\uc11c REST API \uc640 GraphQL \uc744 \uc0ac\uc6a9\ud574\ubcf4\uba74\uc11c \ub290\ub080\uc810\uacfc GraphQL \uc744 \uc120\ud638\ud558\ub294 \uc774\uc720\ub97c \uc791\uc131\ud558\ub824\uace0 \ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uba3c\uc800 \ub098\uc758 \uc774\uc57c\uae30\ub97c \ud574\ubcf4\uc790\uba74 \uac1c\ubc1c\uc790\ub85c \uc804\uc9c1 \ud6c4 \uccab \uc9c1\uc7a5\uc5d0\uc11c\ub294 GraphQL \uc744 \uc0ac\uc6a9\ud558\ub2e4\uac00 REST \ub97c \uc0ac\uc6a9\ud558\ub294 \uacf3\uc73c\ub85c \uc774\uc9c1\ud558\uc600\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","GraphQL \uc0ac\uc6a9 \uacbd\ud5d8\uc774 \uc88b\uc558\uae30\uc5d0 \ub2e4\uc2dc REST \ub97c \ud55c\ub2e4\ub294 \uc810\uc5d0\ub294 \uc544\uc26c\uc6e0\uace0 \uc2e4\uc81c\ub85c \uc5ec\ub7ec \ubd88\ud3b8\ud55c\uc810\uc744 \uacaa\uc5c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uadf8\ub54c\ub9c8\ub2e4 GraphQL \uc744 \uc0ac\uc6a9\ud588\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ubd88\ud3b8\ud55c\uc810\uc774 \ud574\uacb0\ub418\uc5c8\uc744\uae4c \uc0dd\uac01\ud558\uace4 \ud588\uc5c8\uace0 \uc774\ubc88\uc5d0 \uadf8 \ub0b4\uc6a9\uc744 \uc801\uc5b4\ubcf4\ub824\uace0 \ud55c\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uae30\uc220\uc5d0 \ub300\ud55c \uc120\ud638\ub294 \uc0ac\ub78c\ub9c8\ub2e4 \ub2e4\ub974\uae30\uc5d0 \uc774\ubc88 \uae00\uc744 \uc8fc\uad00\uc801\uc778 \ub0b4\uc6a9\uc744 \ub2f4\uace0\uc788\uc2b5\ub2c8\ub2e4.")))}m.isMDXComponent=!0}}]);