"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,b=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={title:"Promise\uc640 Monad - 1",slug:"2021/11/07/Promise\uc640-Monad-1",authors:"jake",tags:["monad","promise"]},i=void 0,p={permalink:"/2021/11/07/Promise\uc640-Monad-1",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2021-11-07-promise-and-monad-1/index.mdx",source:"@site/blog/2021-11-07-promise-and-monad-1/index.mdx",title:"Promise\uc640 Monad - 1",description:"\uc608\uc804 node.js \uc758 \ub9ce\uc740 \ube44\ub3d9\uae30 \ud568\uc218\ub294 \uacb0\uacfc\ub97c \ud568\uc218\ub85c \ubc1b\ub294 \ucf5c\ubc31\ud615\ud0dc\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc5c8\ub2e4.",date:"2021-11-07T00:00:00.000Z",formattedDate:"2021\ub144 11\uc6d4 7\uc77c",tags:[{label:"monad",permalink:"/tags/monad"},{label:"promise",permalink:"/tags/promise"}],readingTime:9.635,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"Promise\uc640 Monad - 1",slug:"2021/11/07/Promise\uc640-Monad-1",authors:"jake",tags:["monad","promise"]},prevItem:{title:"Promise\uc640 Monad - 2",permalink:"/2021/11/28/Promise\uc640-Monad-2"},nextItem:{title:"Localstack\uc744 \ud65c\uc6a9\ud55c AWS SES \ud1b5\ud569\ud14c\uc2a4\ud2b8",permalink:"/2021/10/31/Localstack\uc744-\ud65c\uc6a9\ud55c-AWS-SES-\ud1b5\ud569\ud14c\uc2a4\ud2b8"}},l={authorsImageUrls:[void 0]},m=[],s={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc608\uc804 ",(0,a.kt)("inlineCode",{parentName:"p"},"node.js")," \uc758 \ub9ce\uc740 \ube44\ub3d9\uae30 \ud568\uc218\ub294 \uacb0\uacfc\ub97c \ud568\uc218\ub85c \ubc1b\ub294 \ucf5c\ubc31\ud615\ud0dc\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc5c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\ub85c\uc778\ud574 \uc5ec\ub7ec \ube44\ub3d9\uae30 \ub85c\uc9c1\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ud558\ub294 \ucf54\ub4dc\ub97c \ubcf4\uba74 \uc77c\uba85 ",(0,a.kt)("inlineCode",{parentName:"p"},"Callback Hell")," \uc774\ub77c\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"asyncA((a) => {\n  asyncB((b) => {\n    asyncC((c) => {\n      asyncD((d) => {\n        return a + b + c + d;\n      });\n    });\n  });\n});\n")),(0,a.kt)("p",null,"\uc774\ud6c4 \uc774\ub97c \ud574\uacb0\ud558\ub294 \ubc29\uc548\uc73c\ub85c \uc5ec\ub7ec \ub77c\uc774\ube0c\ub7ec\ub9ac\ub098 \uae30\uc220\ub4e4\uc774 \ub098\uc654\uc73c\ub098 \uc9c0\uae08\uc740 \uc8fc\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," \uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"async/await")," \ub97c \ud65c\uc6a9\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc0ac\uc2e4 \ub098\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"angular")," \ub97c \ud1b5\ud574 js \ub97c \ubcf8\uaca9\uc801\uc73c\ub85c \uc0ac\uc6a9\ud588\uae30\uc5d0 \ube44\ub3d9\uae30 \ucc98\ub9ac\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"rxjs")," \uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"observable")," \uc744 \uc0ac\uc6a9\ud574\uc654\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud558\uc9c0\ub9cc \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790\uac00 \ub41c \uc774\ud6c4\ub85c api \ub97c \uac1c\ubc1c\ud558\ub294\ub370 \uc0ac\uc6a9\ud558\ub294 \ub300\ubd80\ubd84\uc758 \ud568\uc218\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," \ub97c \ubc18\ud658\ud558\ub2e4\ubcf4\ub2c8 ",(0,a.kt)("inlineCode",{parentName:"p"},"observable")," \uc744 \ud65c\uc6a9\ud558\uc9c0 \uc54a\uac8c\ub418\uc5c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"promise")," \ub97c \ubcf8\uaca9\uc801\uc73c\ub85c \uc0ac\uc6a9\ud588\uc744 \ub54c\uc5d0\ub294 \uc774\ubbf8 ",(0,a.kt)("inlineCode",{parentName:"p"},"async/await")," \uac00 \ub3c4\uc785\ub41c \uc774\ud6c4\uc600\uace0 \ub3d9\uae30\uc801\uc73c\ub85c \ubcf4\uc774\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294\ub370 \ud070 \uc5b4\ub824\uc6c0 \uc5c6\uc5c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uadf8\ub798\uc11c \uad73\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," \uc774\ub098 ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," \uad6c\ubb38\uc744 \uc0ac\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4\uace0 \uc0dd\uac01\ud588\uc5c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uadf8\ub7ec\ub098 \ud568\uc218\ud615 \ud328\ub7ec\ub2e4\uc784\uc744 \uacf5\ubd80\ud558\uba74\uc11c \ud568\uc218\uc758 \ud569\uc131, \uc120\uc5b8\uc801\uc778 \ucf54\ub4dc, pointfree \uc5d0 \ub300\ud55c \ub9e4\ub825\uc744 \ub290\uaf08\uace0 \uc774\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"then chaining")," \uc744 \ud1b5\ud574 \uc774\ub8f0 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uae68\ub2ec\uc558\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud568\uc218\ud615 \ud328\ub7ec\ub2e4\uc784 \uc911 \ub09c\ud574\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"monad")," \ub3c4 ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," \uc640 \ube44\uad50\ud558\uba74\uc11c \uc0dd\uac01\ud558\ub2c8 \uc774\ud574\ud558\ub294\ub370 \ub9ce\uc740 \ub3c4\uc6c0\uc744 \ubc1b\uc558\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uadf8\ub798\uc11c \uc774\uc640 \uad00\ub828\ud55c \uae00\uc744 \uc791\uc131\ud558\ub824\uace0 \ud55c\ub2e4."))}d.isMDXComponent=!0}}]);