"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[432],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||l;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5048:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=t(3117),a=t(102),l=(t(7294),t(3905)),o=["components"],i={title:"Effect-TS\ub85c \ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud558\uace0 \ud6a8\uc728\uc801\uc778 \ucf54\ub4dc \uc791\uc131\ud558\uae30",description:"\ubd80\uc791\uc6a9\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \ub2e4\ub8e8\uae30 \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 Effect-TS\uc758 \uba54\uc778\ud14c\uc774\ub108\uc758 \ubc1c\ud45c\uc601\uc0c1 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\ub2e4.",authors:"jake",tags:["effect-ts","fp-ts"]},p=void 0,s={permalink:"/2023/02/11/write-testable-efficient-code-with-effect-ts",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2023-02-11-write-testable-efficient-code-with-effect-ts/index.mdx",source:"@site/blog/2023-02-11-write-testable-efficient-code-with-effect-ts/index.mdx",title:"Effect-TS\ub85c \ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud558\uace0 \ud6a8\uc728\uc801\uc778 \ucf54\ub4dc \uc791\uc131\ud558\uae30",description:"\ubd80\uc791\uc6a9\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \ub2e4\ub8e8\uae30 \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 Effect-TS\uc758 \uba54\uc778\ud14c\uc774\ub108\uc758 \ubc1c\ud45c\uc601\uc0c1 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\ub2e4.",date:"2023-02-11T00:00:00.000Z",formattedDate:"2023\ub144 2\uc6d4 11\uc77c",tags:[{label:"effect-ts",permalink:"/tags/effect-ts"},{label:"fp-ts",permalink:"/tags/fp-ts"}],readingTime:17.61,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"Effect-TS\ub85c \ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud558\uace0 \ud6a8\uc728\uc801\uc778 \ucf54\ub4dc \uc791\uc131\ud558\uae30",description:"\ubd80\uc791\uc6a9\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \ub2e4\ub8e8\uae30 \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 Effect-TS\uc758 \uba54\uc778\ud14c\uc774\ub108\uc758 \ubc1c\ud45c\uc601\uc0c1 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\ub2e4.",authors:"jake",tags:["effect-ts","fp-ts"]},nextItem:{title:"fly.io \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 redis \uc0ac\uc6a9\ud558\uae30",permalink:"/2023/01/21/fly-io-redis"}},c={authorsImageUrls:[void 0]},m=[{value:"\ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud55c \ucf54\ub4dc",id:"\ud14c\uc2a4\ud2b8-\uac00\ub2a5\ud55c-\ucf54\ub4dc",level:2},{value:"\uc21c\uc218\ud558\uc9c0 \uc54a\uc740 \ud568\uc218",id:"\uc21c\uc218\ud558\uc9c0-\uc54a\uc740-\ud568\uc218",level:2},{value:"\uac1c\uc120\ud558\uae30",id:"\uac1c\uc120\ud558\uae30",level:2},{value:"\uc720\uc758\ubbf8\ud55c \uac12\uc744 \ubc18\ud658\ud558\uae30",id:"\uc720\uc758\ubbf8\ud55c-\uac12\uc744-\ubc18\ud658\ud558\uae30",level:3},{value:"\uc5d0\ub7ec \ubc1c\uc0dd \uac00\ub2a5\uc131\uc744 \uba85\uc2dc\uc801\uc73c\ub85c \ud45c\ud604\ud558\uae30",id:"\uc5d0\ub7ec-\ubc1c\uc0dd-\uac00\ub2a5\uc131\uc744-\uba85\uc2dc\uc801\uc73c\ub85c-\ud45c\ud604\ud558\uae30",level:3},{value:"console \uc758\uc874\uc131 \uc81c\uac70\ud558\uae30",id:"console-\uc758\uc874\uc131-\uc81c\uac70\ud558\uae30",level:3},{value:"Effect-TS \ud65c\uc6a9\ud558\uae30",id:"effect-ts-\ud65c\uc6a9\ud558\uae30",level:2},{value:"\uc758\uc874\uc131\uacfc \uc5d0\ub7ec \ud0c0\uc785\uc744 \ud558\ub098\uc758 \ubc18\ud658\uac12\uc73c\ub85c \ud569\uce58\uae30",id:"\uc758\uc874\uc131\uacfc-\uc5d0\ub7ec-\ud0c0\uc785\uc744-\ud558\ub098\uc758-\ubc18\ud658\uac12\uc73c\ub85c-\ud569\uce58\uae30",level:3},{value:"\ud6a8\uacfc \uc2e4\ud589\ud558\uae30",id:"\ud6a8\uacfc-\uc2e4\ud589\ud558\uae30",level:3},{value:"\ud6a8\uacfc \ud569\uc131",id:"\ud6a8\uacfc-\ud569\uc131",level:3},{value:"\uc608\uc81c",id:"\uc608\uc81c",level:2},{value:"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc",id:"\ud14c\uc2a4\ud2b8-\ucf54\ub4dc",level:2},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],u={toc:m};function f(e){var n=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ub300\uc218\uc801 \uc790\ub8cc\ud615\uc744 \uc81c\uacf5\ud558\ub294 Typescript \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 fp-ts\uc758 \uba54\uc778\ud14c\uc774\ub108 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/gcanti"},"Giulio Canti"),"\uc758 \ucd5c\uadfc \ud65c\ub3d9\uc744 \ubcf4\uba74 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fp-ts"},"fp-ts"),"\uadf8\ub8f9 \ub0b4\uc758 \uc800\uc7a5\uc18c\uc5d0 \uc791\uc5c5\uc744 \ud558\ub294\uac83\uc744 \ubcfc \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"gcanti-profile",src:t(2041).Z,width:"1842",height:"1208"})),(0,l.kt)("p",null,"\uadf8 \uc911\uc5d0\uc11c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fp-ts/core"},"core")," \uc800\uc7a5\uc18c\ub97c \ubcf4\uba74 \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc758 \ubaa9\uc801\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"@effect")," \uc0dd\ud0dc\uacc4\uc640\uc758 \ud1b5\ud569\uc744 \uc704\ud55c \uac83\uc774\ub77c\uace0 \ud55c\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","core \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ub300\uc218\uc801 \uc790\ub8cc\ud615\uc744 \uc704\ud55c \uc778\ud130\ud398\uc774\uc2a4\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"Option"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Either"),"\uc640 \uac19\uc740 \uae30\ubcf8 \uc790\ub8cc\ud615\uc744 \uc81c\uacf5\ud558\uba70 \ud6a8\uacfc\ub97c \ub2e4\ub8e8\uae30 \uc704\ud574 \uae30\uc874\uc5d0 \uc0ac\uc6a9\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"Task"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"TaskEither"),"\ub294 effect\ub97c \uc0ac\uc6a9\ud560 \uac83\uc744 \uad8c\uc7a5\ud558\uace0 \uc788\ub2e4."),(0,l.kt)("p",null,"\ud574\ub2f9 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \uad00\uc2ec\uc774 \uc0dd\uaca8 \uad00\ub828 \ubb38\uc11c\ub97c \ucc3e\uc544\ubcf4\uc558\uc9c0\ub9cc \uc790\ub8cc\uac00 \ub9ce\uc9c0 \uc54a\uc558\uace0 \uacf5\uc2dd\ubb38\uc11c\uc870\ucc28 \ub9e4\uc6b0 \ubd80\uc2e4\ud55c \uc0c1\ud0dc\uc774\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub2e4\ud589\ud788 \ud504\ub85c\uc81d\ud2b8\uc758 \uc8fc\uc694 \uba54\uc778\ud14c\uc774\ub108\uc778 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikearnaldi"},"mikearnaldi"),"\uac00 \ubc1c\ud45c\ud55c \uc5ec\ub7ec \uc601\uc0c1\uc774 \uc788\uc5b4 \uc774\ub97c \ud65c\uc6a9\ud558\uc600\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\ubc88 \uae00\uc5d0\uc11c\ub294 \ubc1c\ud45c \uc601\uc0c1\uc911 \ud558\ub098\uc778 ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Oy7fr2_WBFI"},"Write Efficient & Testable code with effect-ts"),"\uc758 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\ub2e4."),(0,l.kt)("h2",{id:"\ud14c\uc2a4\ud2b8-\uac00\ub2a5\ud55c-\ucf54\ub4dc"},"\ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud55c \ucf54\ub4dc"),(0,l.kt)("p",null,"\ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud55c \ucf54\ub4dc\ub294 \ubcf4\ud1b5 \ub2e4\uc74c\uacfc \uac19\uc740 \uc131\uc9c8\uc774 \uc788\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub4c8\uc131"),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc77c \ubaa9\uc801"),(0,l.kt)("li",{parentName:"ul"},"\uba85\uc2dc\uc801"),(0,l.kt)("li",{parentName:"ul"},"\ub0ae\uc740 \uacb0\ud569\ub3c4"),(0,l.kt)("li",{parentName:"ul"},"\uc21c\uc218\uc640 \ube44\uc21c\uc218\uc758 \ubd84\ub9ac"),(0,l.kt)("li",{parentName:"ul"},"\uac04\uacb0\ud568")),(0,l.kt)("p",null,"\ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc740 \ubcf4\ud1b5 \ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud55c \ucf54\ub4dc\ub97c \uc791\uc131\uc744 \uc27d\uac8c \ub9cc\ub4e4\uc5b4\uc8fc\uc9c0\ub9cc \ud56d\uc0c1 \uadf8\ub7f0\uac83\uc740 \uc544\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc798\ubabb \uc124\uacc4\ub41c \ud568\uc218\ud615 \ucf54\ub4dc\ub294 \uc5ec\uc804\ud788 \ub2e4\ub978 \ud328\ub7ec\ub2e4\uc784\uc73c\ub85c \ub9cc\ub4e0 \ucf54\ub4dc\ub9cc\ud07c\uc774\ub098 \uc5b4\ub824\uc6b8 \uc218 \uc788\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Effect-TS"),"\ub294 \ucc98\uc74c\ubd80\ud130 \ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud55c \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uae30 \uc704\ud574 \uc124\uacc4\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc774\uba70, \uc2a4\uce7c\ub77c \uc5b8\uc5b4\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://zio.dev/"},"ZIO"),"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c TypeScript\ub85c \ud3ec\ud305\ud55c \uac83\uc774\ub2e4."),(0,l.kt)("h2",{id:"\uc21c\uc218\ud558\uc9c0-\uc54a\uc740-\ud568\uc218"},"\uc21c\uc218\ud558\uc9c0 \uc54a\uc740 \ud568\uc218"),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc774\ub984\uc744 \ucd9c\ub825\ud558\ub294 \uac04\ub2e8\ud55c hello world \ud568\uc218\ub97c \uc0dd\uac01\ud574\ubcf4\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function helloWorld(name: string) {\n  console.log(`hello world: ${name}!`);\n}\n")),(0,l.kt)("p",null,"\uc704\uc640 \uac19\uc740 \ud568\uc218\ub294 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c \ub9d0\ud558\ub294 \uc21c\uc218\ud568\uc218\uac00 \uc544\ub2c8\uba70 \ub2e4\uc74c\uacfc \uac19\uc740 \ubb38\uc81c\uac00 \uc788\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc804\uc5ed \uc0c1\ud0dc\uc778 ",(0,l.kt)("inlineCode",{parentName:"li"},"console"),"\uc744 \ubcc0\uacbd\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc720\uc758\ubbf8\ud55c \uac12\uc744 \ubc18\ud658\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uad6c\ud604\ubd80\ub97c \ubcf4\uc9c0 \uc54a\uace0\ub294 \ud568\uc218\uac00 \uc5d0\ub7ec\ub97c \ub358\uc9c8 \uac00\ub2a5\uc131\uc774 \uc788\ub294\uc9c0 \uc54c \uc218 \uc5c6\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub0b4\ubd80\uc801\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"console"),"\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc744 \ub0b4\ubd80 \uad6c\ud604\uc744 \ubcf4\uc9c0 \uc54a\uace0\ub294 \uc54c \uc218 \uc5c6\ub2e4.")),(0,l.kt)("p",null,"\uc704\uc640 \uac19\uc740 \uc131\uc9c8\ub85c \uc778\ud574 \uc774 \ud568\uc218\ub294 \ud14c\uc2a4\ud2b8 \ud558\uae30 \uc5b4\ub835\ub2e4."),(0,l.kt)("h2",{id:"\uac1c\uc120\ud558\uae30"},"\uac1c\uc120\ud558\uae30"),(0,l.kt)("p",null,"\uc774 \ud568\uc218\uc758 \ubb38\uc81c\uc810\ub4e4\uc744 \ud558\ub098\uc529 \uac1c\uc120\ud574\ubcf4\uc790."),(0,l.kt)("h3",{id:"\uc720\uc758\ubbf8\ud55c-\uac12\uc744-\ubc18\ud658\ud558\uae30"},"\uc720\uc758\ubbf8\ud55c \uac12\uc744 \ubc18\ud658\ud558\uae30"),(0,l.kt)("p",null,"\uc6b0\uc120 \uc774 \ud568\uc218\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \uc218\uc815\ud558\uba74 \uc720\uc758\ubbf8\ud55c \ubc18\ud658\uac12\uc744 \uac00\uc9c0\ub3c4\ub85d \ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function helloWorld(name: string) {\n  return () => {\n    console.log(`Hello world: ${name}!`);\n  };\n}\n")),(0,l.kt)("p",null,"\uc774\uc81c helloWorld \ud568\uc218\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ucf58\uc194\uc5d0 \ubb38\uc790\uc5f4\uc744 \ucd9c\ub825\ud558\ub294 \ud6a8\uacfc\ub97c \uac00\uc9c4 \ud568\uc218"),"\ub97c \ubc18\ud658\ud55c\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ucf58\uc194\uc5d0 \ubb38\uc790\uc5f4\uc744 \ucd9c\ub825\ud558\uae30 \uc704\ud574\uc11c\ub294 helloWorld\uac00 \ubc18\ud658\ud55c \ud568\uc218\ub97c \uc2e4\ud589\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const call = helloWorld("Mike");\n\ncall(); // Hello world: Mike!\n')),(0,l.kt)("p",null,"\ud568\uc218\ub97c \uac12\uc73c\ub85c \uc0dd\uac01\ud55c\ub2e4\uba74 \uc774 \ud568\uc218\ub294 \ub3d9\uc77c\ud55c name\uc744 \uc8fc\uba74 \ud56d\uc0c1 \ub3d9\uc77c\ud55c \ud6a8\uacfc\ub97c \uac00\uc9c4 \ud568\uc218\ub97c \ubc18\ud658\ud558\ubbc0\ub85c \uc21c\uc218\ud568\uc218\ub77c\uace0 \ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("h3",{id:"\uc5d0\ub7ec-\ubc1c\uc0dd-\uac00\ub2a5\uc131\uc744-\uba85\uc2dc\uc801\uc73c\ub85c-\ud45c\ud604\ud558\uae30"},"\uc5d0\ub7ec \ubc1c\uc0dd \uac00\ub2a5\uc131\uc744 \uba85\uc2dc\uc801\uc73c\ub85c \ud45c\ud604\ud558\uae30"),(0,l.kt)("p",null,"helloWorld \ud568\uc218\ub294 \uc5d0\ub7ec\ub97c \ub358\uc9c8 \uac00\ub2a5\uc131\uc774 \uc5c6\uc73c\uba70 Either\ub97c \uc0ac\uc6a9\ud574 \uba85\uc2dc\uc801\uc73c\ub85c \ud45c\ud604\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'// effect-ts\uc758 Either \ubaa8\ub4c8\uc744 import\ud55c\ub2e4.\nimport * as E from "@effect-ts/core/Either";\n\nfunction helloWorld(name: string) {\n  return (): E.Either<never, void> => {\n    console.log(`Hello world: ${name}!`);\n    return E.right(undefined); // \ud56d\uc0c1 \uc131\uacf5\ud558\ubbc0\ub85c right\ub97c \ubc18\ud658\ud55c\ub2e4.\n  };\n}\n')),(0,l.kt)("p",null,"helloWorld\uac00 \ubc18\ud658\ud558\ub294 \ud6a8\uacfc\uc758 \ud0c0\uc785\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"Either<never, void>"),"\uc778\ub370 generic type\uc758 \uccab\ubc88\uc9f8 \uc778\uc790\ub294 \uc5d0\ub7ec \ud0c0\uc785\uc744 \uc758\ubbf8\ud558\uba70 \ub450\ubc88\uc9f8 \uc778\uc790\ub294 \uc131\uacf5 \ud0c0\uc785\uc744 \uc758\ubbf8\ud55c\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc5d0\ub7ec\uc758 \ud0c0\uc785\uc774 never\uc774\uba74 \uc5d0\ub7ec\ub97c \ub358\uc9c0\uc9c0 \uc54a\ub294\uac83\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,l.kt)("h3",{id:"console-\uc758\uc874\uc131-\uc81c\uac70\ud558\uae30"},"console \uc758\uc874\uc131 \uc81c\uac70\ud558\uae30"),(0,l.kt)("p",null,"console\uacfc \uac19\uc740 \uc678\ubd80 \uc758\uc874\uc131\uc744 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c \uc9c1\uc811 \uc0ac\uc6a9\ud558\uae30 \ubcf4\ub2e4 \ud568\uc218\uc758 \uc778\uc790\ub85c \ubc1b\uc544\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import * as E from "@effect-ts/core/Either";\n\n// IO \ud6a8\uacfc\ub97c \ud45c\ud604\ud558\uae30 \uc704\ud55c \ud0c0\uc785\ntype IO<A> = () => A;\n\n// console \uc758\uc874\uc131\uc5d0 \ub300\ud55c \uc778\ud130\ud398\uc774\uc2a4\ninterface ConsoleService {\n  Console: {\n    log: (message: string) => IO<E.Either<never, void>>;\n  };\n}\n\nfunction helloWorld(name: string) {\n  return ({ Console }: ConsoleService) => Console.log(`Hello world: ${name}!`);\n}\n\nconst program = helloWorld("Mike");\n\n// \uc758\uc874\uc131 \uc8fc\uc785\nconst call = program({\n  Console: {\n    log: (message: string) => () => {\n      console.log(message);\n      return E.right(undefined);\n    },\n  },\n});\n\n// \ud6a8\uacfc \uc2e4\ud589\ncall(); // Hello world: Mike!\n')),(0,l.kt)("p",null,"\uc774\uc81c helloWorld \ud568\uc218\ub294 \uc678\ubd80 \uc758\uc874\uc131\uc744 \uc778\uc790\ub85c \ubc1b\uc544\uc11c \uc0ac\uc6a9\ud558\ubbc0\ub85c \ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud55c \ucf54\ub4dc\uac00 \ub41c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'it("test hello world", () => {\n  // given\n  const program = helloWorld("Mike");\n  const messages = [];\n  const call = program({\n    Console: {\n      log: (message: string) => () => {\n        messages.push(message);\n        return E.right(undefined);\n      },\n    },\n  });\n\n  // when\n  call();\n\n  // then\n  expect(messages).toEqual(["Hello world: Mike!"]);\n});\n')),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774 \ud568\uc218\ub294 \uc758\uc874\uc131 \uc8fc\uc785\uacfc \ud6a8\uacfc \uc2e4\ud589\uc744 \uc704\ud574 \ub450 \ubc88\uc758 \uc5f0\uc18d\uc801\uc778 \ud568\uc218 \ud638\ucd9c\uc774 \ud544\uc694\ud558\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub610\ud55c \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c \uc8fc\ub85c \ud65c\uc6a9\ud558\ub294 \ud568\uc218\uc758 \ud569\uc131\uc744 \ud65c\uc6a9\ud558\uae30 \uc5b4\ub824\uc6b4 \uad6c\uc870\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4."),(0,l.kt)("h2",{id:"effect-ts-\ud65c\uc6a9\ud558\uae30"},"Effect-TS \ud65c\uc6a9\ud558\uae30"),(0,l.kt)("p",null,"\uc774\uc81c \ubcf8\uaca9\uc801\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"Effect-TS"),"\ub97c \ud65c\uc6a9\ud574 helloWorld \ud568\uc218\ub97c \ub354 \uac1c\uc120\ud574\ubcf4\uc790."),(0,l.kt)("h3",{id:"\uc758\uc874\uc131\uacfc-\uc5d0\ub7ec-\ud0c0\uc785\uc744-\ud558\ub098\uc758-\ubc18\ud658\uac12\uc73c\ub85c-\ud569\uce58\uae30"},"\uc758\uc874\uc131\uacfc \uc5d0\ub7ec \ud0c0\uc785\uc744 \ud558\ub098\uc758 \ubc18\ud658\uac12\uc73c\ub85c \ud569\uce58\uae30"),(0,l.kt)("p",null,"\uc6b0\uc120 helloWorld \ud568\uc218\uc758 \uc758\uc874\uc131\uacfc \uc5d0\ub7ec \ud0c0\uc785\uc744 \ud558\ub098\uc758 \ubc18\ud658\uac12\uc73c\ub85c \ud569\uce58\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc790.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Effect-TS"),"\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"Effect<R, E, A>"),"\ub77c\ub294 \ud0c0\uc785\uc744 \uc81c\uacf5\ud558\uba70 \uac01 generic type\uc758 \uc758\ubbf8\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"R")," : \uc758\uc874\uc131 \ud0c0\uc785"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"E")," : \uc5d0\ub7ec \ud0c0\uc785"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"A")," : \uc131\uacf5 \ud0c0\uc785")),(0,l.kt)("p",null,"\uc774\ub294 fp-ts\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReaderTaskEither<R, E, A>"),"\ud0c0\uc785\uacfc \uc720\uc0ac\ud558\uc9c0\ub9cc \ub354 type-safe\ud558\uba70 \ub2e4\uc591\ud55c combinator\ub97c \uc81c\uacf5\ud55c\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\uc81c \uae30\uc874\uc5d0 \uc815\uc758\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"ConsoleService")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc218\uc815\ud574\ubcf4\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import * as T from "@effect-ts/core/Effect";\n\ninterface ConsoleService {\n  log: (message: string) => T.Effect<unknown, never, void>;\n}\n')),(0,l.kt)("p",null,"log\uc758 \ubc18\ud658\ud0c0\uc785\uc774 Effect\ub85c \ubcc0\uacbd\ub418\uc5c8\uace0 \uc758\uc874\uc131 \ud0c0\uc785\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"unknown"),"\uc774\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 \ud6a8\uacfc\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud574 \uc5b4\ub5a0\ud55c \uc758\uc874\uc131\ub3c4 \uc694\uad6c\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc758\ubbf8\uc774\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","console\uc5d0 \uc758\uc874\ud558\ub294 Effect\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574\uc11c\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ucd94\uac00\uc801\uc778 \ubaa8\ub4c8\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import * as T from "@effect-ts/core/Effect";\nimport { tag } from "@effect-ts/core/Has";\n\ninterface ConsoleService {\n  log: (message: string) => T.Effect<unknown, never, void>;\n}\n\n// \uc11c\ube44\uc2a4 \ud0dc\uadf8 \ub9cc\ub4e4\uae30\nconst ConsoleService = tag<ConsoleService>();\n\n// \uc11c\ube44\uc2a4 \ud0dc\uadf8\ub97c \ud1b5\ud574 Effect \uc0dd\uc131\ud558\ub294 \ud568\uc218 \uad6c\ud604\nconst log = (message: string) =>\n  T.accessServiceM(ConsoleService)((service) => service.log(message));\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tag"),"\ud568\uc218\ub294 \ud504\ub85c\uadf8\ub7a8 \ud658\uacbd\uc5d0\uc11c \ud544\uc694\ud55c \uc5ec\ub7ec \uc758\uc874\uc131(\uc11c\ube44\uc2a4)\ub4e4\uc744 \uad6c\ubd84\ud558\uae30 \uc704\ud55c \ud0dc\uadf8\ub97c \ub9cc\ub4e4\uc5b4\uc900\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"accessServiceM"),"\uc758 \uc6a9\ub3c4\uac00 \uc774\ud574\ud558\uae30 \uc5b4\ub824\uc6b8 \uc218 \uc788\ub294\ub370 \uac04\ub2e8\ud788 \ub9d0\ud558\uba74 \uc778\uc790\ub85c \ubc1b\ub294 \uc11c\ube44\uc2a4 \ud0dc\uadf8\ub97c \ud65c\uc6a9\ud574 \uc0c8\ub85c\uc6b4 Effect\ub97c \uc0dd\uc131\ud558\ub294 \ud568\uc218\uc774\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc55e\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"tag \uc0dd\uc131")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"accessServiceM \ud638\ucd9c")," \uacfc\uc815\uc774 \ubc18\ubcf5\ub418\uae30 \ub54c\ubb38\uc5d0 Effect\ub97c \ub9cc\ub4e4\uae30 \uc704\ud55c boilerplate \ucf54\ub4dc\ub77c\uace0 \uc0dd\uac01\ud574\ub3c4 \ub41c\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"log")," \ud568\uc218\uc758 \ud0c0\uc785\uc744 \uc0b4\ud3b4\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const log: (message: stirng) => Effect<Has<ConsoleService>, never, void>;\n")),(0,l.kt)("p",null,"\ud568\uc218\uc758 \ubc18\ud658\ud0c0\uc785\uc758 \uc758\uc874\uc131\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"Has<ConsoleService>"),"\ub85c \ubcc0\uacbd\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Has"),"\ud0c0\uc785\uc740 \uc5ec\ub7ec \uc758\uc874\uc131\uc774 \ube44\uc2b7\ud55c \ud568\uc218\ub97c \uac00\uc9c8 \ub54c \ud0c0\uc785\uc774 \uc81c\ub300\ub85c \ucd94\ub860\ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub41c\ub2e4."),(0,l.kt)("h3",{id:"\ud6a8\uacfc-\uc2e4\ud589\ud558\uae30"},"\ud6a8\uacfc \uc2e4\ud589\ud558\uae30"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Effect-TS"),"\ub294 \uc0dd\uc131\ud55c \ud6a8\uacfc\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud55c \ud568\uc218\ub97c \uc81c\uacf5\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { pipe } from "@effect-ts/core";\nimport * as T from "@effect-ts/core/Effect";\n\nconst ConsoleService = tag<ConsoleService>();\n\nfunction helloWorld(name: string) {\n  return log(`Hello world: ${name}!`);\n}\n\n// T.Effect<Has<ConsoleService>, never, void>\nconst program = helloWorld("Mike");\n\npipe(\n  program,\n  // \uc758\uc874\uc131 \uc81c\uacf5\ud558\uae30\n  T.provideService(ConsoleService)({\n    log: (message: string) => T.succeedWith(() => console.log(message)),\n  }),\n  // promise\ub85c \ubcc0\ud658\n  T.runPromise\n);\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"provideService"),"\ub294 \uc8fc\uc5b4\uc9c4 \ud6a8\uacfc\uc5d0 \uc758\uc874\uc131\uc744 \uc81c\uacf5\ud558\ub294 \ud568\uc218\uc774\uba70, ",(0,l.kt)("inlineCode",{parentName:"p"},"runPromise"),"\ub294 \uc8fc\uc5b4\uc9c4 \ud6a8\uacfc\ub97c \uc2e4\ud589\ud558\ub294 Promise\ub97c \uc0dd\uc131\ud55c\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d \uc758\uc874\uc131\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"runPromise"),"\ub97c \uc0ac\uc6a9\ud560 \uc2dc \ud0c0\uc785\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uac8c \ub41c\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"type-error",src:t(3844).Z,width:"2320",height:"446"})),(0,l.kt)("h3",{id:"\ud6a8\uacfc-\ud569\uc131"},"\ud6a8\uacfc \ud569\uc131"),(0,l.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 \ub2e8\uc77c \ud6a8\uacfc\ub97c \uc0dd\uc131\ud558\uace0 \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\ub294\ub370 \uc77c\ubc18\uc801\uc778 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c\ub294 \uc5ec\ub7ec \ud6a8\uacfc\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \ub9ce\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\ub7f0 \uacbd\uc6b0\uc5d0\ub294 \uc5ec\ub7ec \ud6a8\uacfc\ub97c \ud569\uc131\ud558\uc5ec \ucd5c\uc885\uc801\uc73c\ub85c \ud558\ub098\uc758 \ud6a8\uacfc\ub97c \ub9cc\ub4e4\uc5b4 \uc2e4\ud589\ud558\uac8c \ub41c\ub2e4."),(0,l.kt)("p",null,"\uc815\uc801 \ud0c0\uc785\uae30\ubc18 \ud568\uc218\ud615 \uc5b8\uc5b4\uc5d0\uc11c\ub294 \ubcf4\ud1b5 \ud6a8\uacfc\ub97c \ud3ec\ud568\ud558\ub294 \ud568\uc218\ub4e4 \uac04\uc758 \ud569\uc131\uc744 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"Monad"),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Effect"),"\ud0c0\uc785 \ub610\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"Monad"),"\uad6c\ud604\uccb4\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"chain"),"\ud568\uc218\ub97c \uc0ac\uc6a9\ud574 \ud569\uc131\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { pipe } from "@effect-ts/core";\nimport * as T from "@effect-ts/core/Effect";\n\n// Mike\uc640 John\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \ucd9c\ub825\ud558\ub294 \ud6a8\uacfc\ub97c \ud569\uc131\nconst program = pipe(\n  helloWorld("Mike"),\n  T.chain(() => helloWorld("John"))\n);\n\npipe(\n  program,\n  T.provideService(ConsoleService)({\n    log: (message: string) => T.succeedWith(() => console.log(message)),\n  }),\n  T.runPromise\n);\n// Hello world: Mike!\n// Hello world: John!\n')),(0,l.kt)("p",null,"\ud568\uc218\ud615 \ud328\ub7ec\ub2e4\uc784\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\ub294 \uc0ac\ub78c\uc5d0\uac8c\ub294 \uc704\uc640\uac19\uc740 \ud569\uc131\ud615\ud0dc\uac00 \uc774\ud574\ud558\uae30 \uc5b4\ub824\uc6b8 \uc218 \uc788\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\ub97c \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"Effect-TS"),"\uc5d0\uc11c\ub294 generator \ud568\uc218\ub97c \ud65c\uc6a9\ud574 \uba85\ub839\ud615 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud55c\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub9c8\uce58 Promise\ub97c \uc0ac\uc6a9\ud560 \ub54c ",(0,l.kt)("inlineCode",{parentName:"p"},"async/await"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uacfc \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import * as T from "@effect-ts/core/Effect";\nimport { pipe } from "@effect-ts/core";\n\nconst program = T.gen(function* (_) {\n  yield* _(helloWorld("Mike"));\n  yield* _(helloWorld("John"));\n  yield* _(helloWorld("sam"));\n});\n\n// Effect\ub97c Promise\ub85c \uc0dd\uac01\ud55c\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\uac00 \ub41c\ub2e4.\nasync function program() {\n  await helloWorld("Mike");\n  await helloWorld("John");\n  await helloWorld("sam");\n}\n\npipe(\n  program,\n  T.provideService(ConsoleService)({\n    log: (message: string) => T.succeedWith(() => console.log(message)),\n  }),\n  T.runPromise\n);\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"async/await"),"\ubcf4\ub2e4\ub294 \uc0ac\uc6a9\ubc29\ubc95\uc774 \ub2e4\uc18c \ubcf5\uc7a1\ud574 \ubcf4\uc774\uc9c0\ub9cc ",(0,l.kt)("inlineCode",{parentName:"p"},"if, for, while")," \ub4f1\uc758 \uc81c\uc5b4\ubb38\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc7a5\uc810\uc774 \uc788\ub2e4."),(0,l.kt)("h2",{id:"\uc608\uc81c"},"\uc608\uc81c"),(0,l.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 \uc18c\uac1c\ud55c \ub0b4\uc6a9\uc744 \ubc14\ud0d5\uc73c\ub85c \ub2e4\uc74c\uacfc \uac19\uc740 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud574\ubcf4\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0\uc5d0\uc11c 1\uc0ac\uc774\uc758 \ub79c\ub364\ud55c \uc22b\uc790\ub97c \uac00\uc838\uc640 0.5\ubcf4\ub2e4 \ud06c\uba74 \uc5d0\ub7ec\ub97c \ubc18\ud658\ud558\uace0 \uc544\ub2c8\uba74 \uc22b\uc790\ub97c \ucd9c\ub825\ud55c\ub2e4.\n")),(0,l.kt)("p",null,"\uba3c\uc800 \ub79c\ub364\ud55c \uc22b\uc790\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"Math.random"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uc0dd\uac01\ud560 \uc218 \uc788\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ud558\uc9c0\ub9cc \uc774\ub7ec\ud55c \ubb34\uc791\uc704\uc131\uc740 \ud14c\uc2a4\ud2b8\ub97c \uc5b4\ub7fd\uac8c \ub9cc\ub4dc\ub294 \uc694\uc18c\uc774\ubbc0\ub85c \uc758\uc874\uc131\uc73c\ub85c \ubd84\ub9ac\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface RandomService {\n  rand: T.Effect<unknown, never, number>;\n}\n\nconst RandomService = tag<RandomService>();\n\n// Effect<Has<RandomService>, never, number>\nconst rand = T.accessServiceM(RandomService)((service) => service.rand);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rand"),"\ubcc0\uc218\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"RandomService"),"\ub97c \uc758\uc874\uc131\uc73c\ub85c \uac00\uc9c0\uace0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc73c\uba70 number\ub97c \ubc18\ud658\ud558\ub294 \ud6a8\uacfc\uc774\ub2e4."),(0,l.kt)("p",null,"\uc774\uc81c \ub79c\ub364\ud55c \uac12\uc774 0.5\ubcf4\ub2e4 \ud070 \uacbd\uc6b0 \ubc1c\uc0dd\ud558\ub294 \uc5d0\ub7ec \ud074\ub798\uc2a4\ub97c \uc9c1\uc811 \uc815\uc758\ud574\ubcf4\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Tagged } from "@effect-ts/system/Case";\n\nexport class BadRandomValue extends Tagged("BadRandomValue")<{\n  readonly value: number;\n}> {}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Tagged"),"\ud568\uc218\ub97c \uc0ac\uc6a9\ud574 \ucee4\uc2a4\ud140 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uace0 \uc788\ub294\ub370 \uc774\ub294 \ud558\ub098\uc758 \ud6a8\uacfc\uac00 \uc5ec\ub7ec \uc720\ud615\uc758 \uc5d0\ub7ec\ub97c \uac00\uc9c8 \ub54c \uc774\ub97c type-safe\ud558\uac8c \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud55c\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","Typescript\uc758 tagged union\uacfc \uac19\uc740 \ube44\uc2b7\ud55c \uc5ed\ud560\uc744 \ud55c\ub2e4\uace0 \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc5d0\ub7ec \ud074\ub798\uc2a4\ub97c \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"Tagged"),"\ub97c \ubc18\ub4dc\uc2dc \uc0ac\uc6a9\ud560 \ud544\uc694\ub294 \uc5c6\uc73c\uba70 \uc21c\uc218 \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud574\ub3c4 \ub41c\ub2e4."),(0,l.kt)("p",null,"\uae30\uc874\uc5d0 \uc791\uc131\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"log"),"\ud568\uc218\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"T.gen"),"\uc744 \uc0ac\uc6a9\ud574 \ub2e4\uc74c\uacfc \uac19\uc774 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Effect<Has<ConsoleService> & Has<RandomService>, BadRandomValue, void>\nconst program = T.gen(function* (_) {\n  // \ub79c\ub364\ud55c \uc22b\uc790\ub97c \uac00\uc838\uc628\ub2e4.\n  const value = yield* _(rand);\n\n  if (value > 0.5) {\n    // \uc870\uac74\uc5d0 \ub9de\uc9c0 \uc54a\uc73c\uba74 BadRandomValue \uc5d0\ub7ec\ud6a8\uacfc\ub97c \ubc18\ud658\ud55c\ub2e4.\n    return yield* _(T.fail(new BadRandomValue({ value })));\n  }\n\n  // \uc870\uac74\uc5d0 \ub9de\uc73c\uba74 \uac12\uc744 \ucd9c\ub825\ud55c\ub2e4.\n  yield* _(log(`got: ${value}`));\n});\n\n// pipe\uc640 chain\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc791\uc131\ud560 \uc218 \uc788\ub2e4.\nconst program = pipe(\n  rand,\n  T.chain((value) =>\n    value <= 0.5 ? log(`got: ${value}`) : T.fail(new BadRandomValue({ value }))\n  )\n);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"program"),"\uc758 \ucd5c\uc885 \ud0c0\uc785\uc744 \ubcf4\uba74 \uc758\uc874\uc131\uc5d0 \uc790\ub3d9\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"ConsoleService"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"RandomService"),"\uac00 \ucd94\uac00\ub418\uc5c8\uc74c\uc744 \ud655\uc778 \ud560 \uc218 \uc788\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 fp-ts\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReaderTaskEither"),"\uc5d0\uc11c\ub294 \uc81c\uacf5\ud558\uc9c0 \uc54a\ub294 \uae30\ub2a5\uc73c\ub85c \ubcf4\ub2e4 \ub354 type-safe\ud55c \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud560 \uc218 \uc788\uac8c \ud574\uc900\ub2e4."),(0,l.kt)("h2",{id:"\ud14c\uc2a4\ud2b8-\ucf54\ub4dc"},"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc"),(0,l.kt)("p",null,"\uc774\uc81c \uc704 \ud504\ub85c\uadf8\ub7a8\uc744 \ud14c\uc2a4\ud2b8\ud574\ubcf4\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Exit, pipe } from "@effect-ts/core";\nimport * as T from "@effect-ts/core/Effect";\n\nit("0.5 \ubcf4\ub2e4 \ud06c\uba74 \uc5d0\ub7ec\ub97c \ubc18\ud658\ud55c\ub2e4", async () => {\n  // given\n  const fakeRandom = T.provideService(RandomService)({\n    rand: T.succeed(0.6), // 0.6\uc744 \ud56d\uc0c1 \ubc18\ud658\ud558\uac8c \uace0\uc815\n  });\n  const fakeConsole = T.provideService(ConsoleService)({\n    log: (message: string) => T.succeedWith(() => console.log(message)),\n  });\n\n  // when\n  const result = await pipe(program, fakeRandom, fakeConsole, T.runPromiseExit);\n\n  // then\n  expect(Exit.untraced(result)).toEqual(\n    Exit.fail(new BadRandomValue({ value: 0.6 }))\n  );\n});\n')),(0,l.kt)("p",null,"\uc774 \ucf54\ub4dc\ub294 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0\uc5d0 \ub300\ud55c \ud14c\uc2a4\ud2b8\ub85c \uac01 \uc758\uc874\uc131\ub4e4\uc744 fake\ub85c \ub300\uccb4\ud55c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\ub97c \ud1b5\ud574 \ud14c\uc2a4\ud2b8\ud558\uae30 \uc5b4\ub824\uc6e0\ub358 \uc601\uc5ed\uc744 \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \ud560 \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4."),(0,l.kt)("p",null,"\uc131\uacf5\ud558\ub294 \ucf00\uc774\uc2a4\ub3c4 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'it("0.5 \ubcf4\ub2e4 \uc791\uc73c\uba74 \ud654\uba74\uc5d0 \ucd9c\ub825\ud55c\ub2e4", async () => {\n  // given\n  const fakeRandom = T.provideService(RandomService)({\n    rand: T.succeed(0.3),\n  });\n  const messages: string[] = [];\n  const fakeConsole = T.provideService(ConsoleService)({\n    log: (message: string) => T.succeedWith(() => messages.push(message)),\n  });\n\n  // when\n  const result = await pipe(program, fakeRandom, fakeConsole, T.runPromiseExit);\n\n  // then\n  expect(result).toEqual(Exit.succeed(undefined));\n  expect(messages).toEqual(["got: 0.3"]);\n});\n')),(0,l.kt)("p",null,"fakeConsole\uc740 \uc8fc\uc5b4\uc9c4 \uba54\uc2dc\uc9c0\ub97c \uc2e4\uc81c \ucf58\uc194\uc5d0 \ucd9c\ub825\ud558\ub294 \ub300\uc2e0 \ubc30\uc5f4\uc5d0 \uc800\uc7a5\ud558\ub3c4\ub85d \ud558\uc5ec \ucd9c\ub825 \uba54\uc2dc\uc9c0\ub97c \uac80\uc99d\ud560 \uc218 \uc788\uac8c \ub9cc\ub4e4\uc5b4\uc900\ub2e4."),(0,l.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,l.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 Effect-TS\uc758 \uc18c\uac1c\uc640 \uc774\ub97c \ud65c\uc6a9\ud55c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uc558\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"fp-ts"),"\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"TaskEither"),"\ub97c \uc0ac\uc6a9\ud558\ub358 \uac83\uacfc \ube44\uad50\ud574\ubcf4\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"Effect"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub354\uc6b1 type-safe\ud558\uace0 \ud14c\uc2a4\ud2b8\ud558\uae30 \uc26c\uc6b4 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub610\ud55c \uc774\ubc88 \uae00\uc5d0\uc11c\ub294 \uc18c\uac1c\ud558\uc9c0 \uc54a\uc558\uc9c0\ub9cc \uc5d0\ub7ec\uc758 \uc2a4\ud0dd\ud2b8\ub808\uc774\uc2a4\uac00 \uc790\uc138\ud558\uac8c \ucd9c\ub825\ub418\ub294 \uc810\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry"),"\uc640\uc758 \uc5f0\ub3d9\uc744 \ud1b5\ud574 \ubaa8\ub2c8\ud130\ub9c1\uc5d0 \ub300\ud55c \uc9c0\uc6d0\ub3c4 \uc81c\uacf5\ud55c\ub2e4\ub294 \uc810\ub3c4 \uc7a5\uc810\uc73c\ub85c \uaf3d\uc744 \uc218 \uc788\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ubb38\uc11c\ud654\uac00 \ubd80\uc871\ud55c \uc810\uc740 \uc544\uc27d\uc9c0\ub9cc, ZIO\ub97c \uc0ac\uc6a9\ud574\ubcf8 \uacbd\ud5d8\uc774 \uc788\ub294 \uc0ac\ub78c\uc774\ub77c\uba74 \uc27d\uac8c \uc801\uc751\ud560 \uc218 \uc788\uc744 \uac83 \uac19\ub2e4."))}f.isMDXComponent=!0},2041:function(e,n,t){n.Z=t.p+"assets/images/gcanti-profile-049f0ba8c0e071de16c6cfb5620bb53f.png"},3844:function(e,n,t){n.Z=t.p+"assets/images/type-error-da8aa08907a792c79667f50f4ed2117c.png"}}]);