"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3076],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||g[m]||i;return r?n.createElement(h,p(p({ref:t},s),{},{components:r})):n.createElement(h,p({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"Kotlin + Spring GraphQL + Spring Security \uc0ac\uc6a9\ud558\uae30",slug:"2022/06/06/Kotlin-Spring-GraphQL-Spring-Security-\uc0ac\uc6a9\ud558\uae30",authors:"jake",tags:["spring","graphql","security","jwt"]},p=void 0,o={permalink:"/2022/06/06/Kotlin-Spring-GraphQL-Spring-Security-\uc0ac\uc6a9\ud558\uae30",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2022-06-06-spring-graphql/index.mdx",source:"@site/blog/2022-06-06-spring-graphql/index.mdx",title:"Kotlin + Spring GraphQL + Spring Security \uc0ac\uc6a9\ud558\uae30",description:"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 Spring for GraphQL \ud504\ub85c\uc81d\ud2b8\uac00 GA \ub418\uc5b4 \uc0d8\ud50c \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uacfc\uc815\uc744 \uae30\uc220\ud558\ub824\uace0 \ud55c\ub2e4.",date:"2022-06-06T00:00:00.000Z",formattedDate:"2022\ub144 6\uc6d4 6\uc77c",tags:[{label:"spring",permalink:"/tags/spring"},{label:"graphql",permalink:"/tags/graphql"},{label:"security",permalink:"/tags/security"},{label:"jwt",permalink:"/tags/jwt"}],readingTime:16.69,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"Kotlin + Spring GraphQL + Spring Security \uc0ac\uc6a9\ud558\uae30",slug:"2022/06/06/Kotlin-Spring-GraphQL-Spring-Security-\uc0ac\uc6a9\ud558\uae30",authors:"jake",tags:["spring","graphql","security","jwt"]},prevItem:{title:"[Spring Data MongoDB] Atlas Search \ub97c \uc704\ud55c \ucee4\uc2a4\ud140 Kotlin DSL \ub9cc\ub4e4\uae30",permalink:"/2022/07/03/[Spring-Data-MongoDB]-Atlas-Search\ub97c-\uc704\ud55c-\ucee4\uc2a4\ud140-Kotlin-DSL-\ub9cc\ub4e4\uae30"},nextItem:{title:"Github Page\ub97c GraphQL \uc2a4\ud0a4\ub9c8 \uc11c\ubc84\ub85c \ub9cc\ub4e4\uae30",permalink:"/2022/05/18/Github-Page\ub97c-GraphQL-\uc2a4\ud0a4\ub9c8-\uc11c\ubc84\ub85c-\ub9cc\ub4e4\uae30"}},l={authorsImageUrls:[void 0]},c=[],s={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring for GraphQL")," \ud504\ub85c\uc81d\ud2b8\uac00 GA \ub418\uc5b4 \uc0d8\ud50c \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uacfc\uc815\uc744 \uae30\uc220\ud558\ub824\uace0 \ud55c\ub2e4.\n\ub2e4\uc74c\uacfc \uac19\uc740 \uae30\uc220\uc744 \uc0ac\uc6a9\ud574\uc11c \uad6c\ud604\ud558\uc600\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kotlinlang.org"},"Kotlin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot"},"Spring Boot (WebFlux)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-security"},"Spring Security")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-data-mongodb"},"Spring Data MongoDB (Reactive)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gradle.org"},"Gradle"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc0d8\ud50c \ud504\ub85c\uc81d\ud2b8 \ucf54\ub4dc\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jbl428/study-note/tree/master/kotlin/spring-graphql"},"github")," \uc5d0\uc11c \ubcfc \uc218 \uc788\ub2e4.")))}g.isMDXComponent=!0}}]);