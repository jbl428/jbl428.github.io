"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"Kotlin\uc73c\ub85c \ub3c4\uba54\uc778 \ubaa8\ub378\ub9c1\ud558\uae30",slug:"kotlin\uc73c\ub85c-\ub3c4\uba54\uc778-\ubaa8\ub378\ub9c1\ud558\uae30",description:"Kotlin\uacfc Arrow\ub97c \ud65c\uc6a9\ud574 \ud6a8\uacfc\uc801\uc778 \ub3c4\uba54\uc778 \ubaa8\ub378\ub9c1\uc744 \ud558\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.",authors:"jake",tags:["kotlin","ddd","domain-modeling"]},a=void 0,l={permalink:"/kotlin\uc73c\ub85c-\ub3c4\uba54\uc778-\ubaa8\ub378\ub9c1\ud558\uae30",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2023-07-01-domain-modeling-in-kotlin/index.mdx",source:"@site/blog/2023-07-01-domain-modeling-in-kotlin/index.mdx",title:"Kotlin\uc73c\ub85c \ub3c4\uba54\uc778 \ubaa8\ub378\ub9c1\ud558\uae30",description:"Kotlin\uacfc Arrow\ub97c \ud65c\uc6a9\ud574 \ud6a8\uacfc\uc801\uc778 \ub3c4\uba54\uc778 \ubaa8\ub378\ub9c1\uc744 \ud558\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.",date:"2023-07-01T00:00:00.000Z",formattedDate:"2023\ub144 7\uc6d4 1\uc77c",tags:[{label:"kotlin",permalink:"/tags/kotlin"},{label:"ddd",permalink:"/tags/ddd"},{label:"domain-modeling",permalink:"/tags/domain-modeling"}],readingTime:13.84,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"Kotlin\uc73c\ub85c \ub3c4\uba54\uc778 \ubaa8\ub378\ub9c1\ud558\uae30",slug:"kotlin\uc73c\ub85c-\ub3c4\uba54\uc778-\ubaa8\ub378\ub9c1\ud558\uae30",description:"Kotlin\uacfc Arrow\ub97c \ud65c\uc6a9\ud574 \ud6a8\uacfc\uc801\uc778 \ub3c4\uba54\uc778 \ubaa8\ub378\ub9c1\uc744 \ud558\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.",authors:"jake",tags:["kotlin","ddd","domain-modeling"]},nextItem:{title:"Nest.js\ub294 \uc5b4\ub5bb\uac8c \uc21c\ud658 \ucc38\uc870 \ubb38\uc81c\ub97c \ud574\uacb0\ud560\uae4c?",permalink:"/2023/05/01/nest-js\ub294-\uc5b4\ub5bb\uac8c-\uc21c\ud658-\ucc38\uc870-\ubb38\uc81c\ub97c-\ud574\uacb0\ud560\uae4c"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Kotlin\uc6a9 \ud568\uc218\ud615 \ub77c\uc774\ube0c\ub7ec\ub9ac Arrow\uc758 \uacf5\uc2dd\ubb38\uc11c\uc5d0 \uc788\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://arrow-kt.io/learn/design/domain-modeling/"},"Domain modeling")," \ube14\ub85c\uadf8 \uae00\uc744 \ubc88\uc5ed\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4.")))}u.isMDXComponent=!0}}]);