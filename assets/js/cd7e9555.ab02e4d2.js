"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5892],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,j=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(j,i(i({ref:t},p),{},{components:n})):r.createElement(j,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2849:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={title:"Nest.js\uc758 injector\ub294 \uc5b4\ub5bb\uac8c \uc0dd\uc131\uc790\uc5d0 \uc9c0\uc815\ud55c \uc758\uc874\uc131 \ub300\uc0c1\uc744 \uc54c\uc544\ub0bc\uae4c?",slug:"2023/05/01/nest-js\uc758-injector\ub294-\uc5b4\ub5bb\uac8c-\uc0dd\uc131\uc790\uc5d0-\uc9c0\uc815\ud55c-\uc758\uc874\uc131-\ub300\uc0c1\uc744-\uc54c\uc544\ub0bc\uae4c",description:"Nest.js\uc758 injector\uac00 \uc0dd\uc131\uc790\uc5d0 \uc9c0\uc815\ud55c \uc8fc\uc785\ub300\uc0c1\uc744 \ucc3e\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4",authors:"jake",tags:["nest.js","injector"]},s=void 0,l={permalink:"/2023/05/01/nest-js\uc758-injector\ub294-\uc5b4\ub5bb\uac8c-\uc0dd\uc131\uc790\uc5d0-\uc9c0\uc815\ud55c-\uc758\uc874\uc131-\ub300\uc0c1\uc744-\uc54c\uc544\ub0bc\uae4c",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2023-05-01-nest-js-injector/index.mdx",source:"@site/blog/2023-05-01-nest-js-injector/index.mdx",title:"Nest.js\uc758 injector\ub294 \uc5b4\ub5bb\uac8c \uc0dd\uc131\uc790\uc5d0 \uc9c0\uc815\ud55c \uc758\uc874\uc131 \ub300\uc0c1\uc744 \uc54c\uc544\ub0bc\uae4c?",description:"Nest.js\uc758 injector\uac00 \uc0dd\uc131\uc790\uc5d0 \uc9c0\uc815\ud55c \uc8fc\uc785\ub300\uc0c1\uc744 \ucc3e\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4",date:"2023-05-01T00:00:00.000Z",formattedDate:"2023\ub144 5\uc6d4 1\uc77c",tags:[{label:"nest.js",permalink:"/tags/nest-js"},{label:"injector",permalink:"/tags/injector"}],readingTime:22.295,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"Nest.js\uc758 injector\ub294 \uc5b4\ub5bb\uac8c \uc0dd\uc131\uc790\uc5d0 \uc9c0\uc815\ud55c \uc758\uc874\uc131 \ub300\uc0c1\uc744 \uc54c\uc544\ub0bc\uae4c?",slug:"2023/05/01/nest-js\uc758-injector\ub294-\uc5b4\ub5bb\uac8c-\uc0dd\uc131\uc790\uc5d0-\uc9c0\uc815\ud55c-\uc758\uc874\uc131-\ub300\uc0c1\uc744-\uc54c\uc544\ub0bc\uae4c",description:"Nest.js\uc758 injector\uac00 \uc0dd\uc131\uc790\uc5d0 \uc9c0\uc815\ud55c \uc8fc\uc785\ub300\uc0c1\uc744 \ucc3e\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4",authors:"jake",tags:["nest.js","injector"]},nextItem:{title:"Open Telemetry\uc640 Effect-TS\ub85c Nest.js \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubaa8\ub2c8\ud130\ub9c1\ud558\uae30",permalink:"/2023/03/01/Open-Telemetry\uc640-Effect-TS\ub85c-Nest.js-\uc560\ud50c\ub9ac\ucf00\uc774\uc158-\ubaa8\ub2c8\ud130\ub9c1\ud558\uae30"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ucd5c\uadfc Nest.js\uc758 \uae30\ubcf8 \uae30\ub2a5\uc744 \uc9c1\uc811 \uad6c\ud604\ud574\ubcf4\ub294 \uc2a4\ud130\ub514\ub97c \uc9c4\ud589\ud558\uc600\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc2a4\ud130\ub514 \ubaa9\ud45c\ub294 Nest.js\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Controller"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@Injectable"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@Module")," \ub4f1\uc758 \ub370\ucf54\ub808\uc774\ud130\ub97c \ub9cc\ub4e4\uace0, DI\ub97c \uad6c\ud604\ud574 \uac04\ub2e8\ud55c API \uc11c\ubc84\ub97c \uc62c\ub9ac\ub294 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\ub294 \uac83\uc774\uc5c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub610\ud55c \ucd5c\ub300\ud55c Nest.js\uc758 \ucf54\ub4dc\ub97c \ucc38\uace0\ud558\uc9c0 \uc54a\uace0 \uc9c1\uc811 \uad6c\ud604\ud574\ubcf4\ub824\uace0 \ub178\ub825\ud588\ub2e4."),(0,a.kt)("p",null,"\uc774 \uacfc\uc815\uc5d0\uc11c \uc758\uc874\uc131 \uc8fc\uc785\uc744 \uc704\ud55c Injector\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud574 \ud2b9\uc815 \ud074\ub798\uc2a4\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \uc758\uc874\uc131\uc744 \ud30c\uc545\ud558\ub294 \ubc29\ubc95\uc744 \ucc3e\uc544\uc57c\ud588\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub610\ud55c \uad6c\ud604 \uacfc\uc815\uc5d0\uc11c \uc21c\ud658\ucc38\uc870 \ubb38\uc81c\ub97c \ud574\uacb0\ud574\uc57c\ud588\uace0, \uc774\ub97c \uc704\ud574 Nest.js\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"forwardRef"),"\uac00 \uc5b4\ub5a4 \uc6d0\ub9ac\ub3c4 \ub3d9\uc791\ud558\ub294\uc9c0 \uc54c\uc544\ubcf4\uc558\ub2e4."),(0,a.kt)("p",null,"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 \uadf8 \uc911\uc5d0\uc11c Injector\uc758 \uc758\uc874\uc131 \uc8fc\uc785 \ub300\uc0c1\uc744 \ucc3e\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud55c\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc2a4\ud130\ub514 \uc800\uc7a5\uc18c: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/joyfulprogrammers/nest-clone"},"https://github.com/joyfulprogrammers/nest-clone"))))}f.isMDXComponent=!0}}]);