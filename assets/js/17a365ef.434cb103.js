"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2098],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5929:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={title:"fly.io \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 redis \uc0ac\uc6a9\ud558\uae30",slug:"2023/01/21/fly.io-\uc5d0\uc11c-\uc81c\uacf5\ud558\ub294-redis-\uc0ac\uc6a9\ud558\uae30",description:"fly.io\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 redis \ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc18c\uac1c\uc640 ioredis\ub85c \uc811\uadfc\ud558\ub294 \uacbd\uc6b0 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc0c1\ud669 \ud574\uacb0\ubc29\uc548 \uacf5\uc720",authors:"jake",tags:["redis","ioredis","fly.io"]},s=void 0,p={permalink:"/2023/01/21/fly.io-\uc5d0\uc11c-\uc81c\uacf5\ud558\ub294-redis-\uc0ac\uc6a9\ud558\uae30",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2023-01-21-fly-io-redis/index.mdx",source:"@site/blog/2023-01-21-fly-io-redis/index.mdx",title:"fly.io \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 redis \uc0ac\uc6a9\ud558\uae30",description:"fly.io\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 redis \ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc18c\uac1c\uc640 ioredis\ub85c \uc811\uadfc\ud558\ub294 \uacbd\uc6b0 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc0c1\ud669 \ud574\uacb0\ubc29\uc548 \uacf5\uc720",date:"2023-01-21T00:00:00.000Z",formattedDate:"2023\ub144 1\uc6d4 21\uc77c",tags:[{label:"redis",permalink:"/tags/redis"},{label:"ioredis",permalink:"/tags/ioredis"},{label:"fly.io",permalink:"/tags/fly-io"}],readingTime:4.375,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"fly.io \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 redis \uc0ac\uc6a9\ud558\uae30",slug:"2023/01/21/fly.io-\uc5d0\uc11c-\uc81c\uacf5\ud558\ub294-redis-\uc0ac\uc6a9\ud558\uae30",description:"fly.io\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 redis \ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc18c\uac1c\uc640 ioredis\ub85c \uc811\uadfc\ud558\ub294 \uacbd\uc6b0 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc0c1\ud669 \ud574\uacb0\ubc29\uc548 \uacf5\uc720",authors:"jake",tags:["redis","ioredis","fly.io"]},prevItem:{title:"Effect-TS\ub85c \ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud558\uace0 \ud6a8\uc728\uc801\uc778 \ucf54\ub4dc \uc791\uc131\ud558\uae30",permalink:"/2023/02/11/Effect-TS\ub85c-\ud14c\uc2a4\ud2b8-\uac00\ub2a5\ud558\uace0-\ud6a8\uc728\uc801\uc778-\ucf54\ub4dc-\uc791\uc131\ud558\uae30"},nextItem:{title:"Typescript\ub85c \ud655\ub960 Monad \uad6c\ud604\ud558\uae30 - 2",permalink:"/2022/12/29/Typescript\ub85c-\ud655\ub960-Monad-\uad6c\ud604\ud558\uae30-2"}},c={authorsImageUrls:[void 0]},d=[{value:"\uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131",id:"\uc778\uc2a4\ud134\uc2a4-\uc0dd\uc131",level:2},{value:"\uc811\uc18d\uc815\ubcf4 \ud655\uc778",id:"\uc811\uc18d\uc815\ubcf4-\ud655\uc778",level:2},{value:"redis-cli\ub85c \uc811\uc18d\ud558\uae30",id:"redis-cli\ub85c-\uc811\uc18d\ud558\uae30",level:2},{value:"ioredis\ub85c \uc811\uc18d\ud558\uae30",id:"ioredis\ub85c-\uc811\uc18d\ud558\uae30",level:2}],u={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://fly.io"},"fly.io")," \uc5d0\uc11c\ub294 \uc6f9 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 redis \uc778\uc2a4\ud134\uc2a4\ub97c \uc81c\uacf5\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ubb34\ub8cc\ud50c\ub79c\ub3c4 \uc9c0\uc6d0\ud558\uae30 \ub54c\ubb38\uc5d0 \ud544\uc694\ud55c \uc0c1\ud669\uc5d0\uc11c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 redis \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131 \ubc29\ubc95\uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"ioredis")," \ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \ubc1c\uc0dd\ud558\ub294 \uc811\uc18d\ubb38\uc81c \ud574\uacb0\ubc29\uc548\uc744 \uacf5\uc720\ud558\uace0\uc790 \ud55c\ub2e4."),(0,i.kt)("h2",{id:"\uc778\uc2a4\ud134\uc2a4-\uc0dd\uc131"},"\uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131"),(0,i.kt)("p",null,"fly.io\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 redis\ub294 \uc0ac\uc2e4 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.upstash.com/redis"},"upstash"),"\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ud558\uc9c0\ub9cc \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 \ub530\ub85c \ud574\ub2f9 \uc0ac\uc774\ud2b8\uc5d0 \uac00\uc785\ud560 \ud544\uc694\uc5c6\uc73c\uba70 flycli\ub97c \uc0ac\uc6a9\ud574 \uc27d\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\uc0dd\uc131\ud55c redis\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uac19\uc740 Organization\uc5d0 \uc18d\ud55c \uc11c\ubc84\ub4e4\uc5d0\uc11c\ub9cc \uc811\uc18d\ud560 \uc218 \uc788\ub2e4.\nfly.io\ub97c \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uc81d\ud2b8(fly.toml \ud30c\uc77c\uc774 \uc788\ub294 \uacf3)\ub85c \uc774\ub3d9\ud55c \ud6c4 \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc218\ud589\ud558\uc5ec redis\ub97c \uc0dd\uc131\ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"flyctl redis create\n")),(0,i.kt)("p",null,"\ubcf8\uc778\uc758 \uacc4\uc815\uc5d0 Organization\uc774 \uc5ec\ub7ec\uac1c \uc874\uc7ac\ud55c\ub2e4\uba74 \uc5b4\ub5a4 \ud56d\ubaa9\uc5d0 \uc0dd\uc131\ud560 \uac83\uc778\uc9c0 \ubb3c\uc5b4\ubcf4\uba70 \uc6d0\ud558\ub294 \uac83\uc744 \uc120\ud0dd\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ud6c4 \uc778\uc2a4\ud134\uc2a4 \uc774\ub984\uc744 \ubb3c\uc5b4\ubcf4\ub294\ub370 \uc801\uc808\ud55c \uac12\uc744 \ub123\uc5b4\uc900\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ub2e4\uc74c\uc73c\ub85c redis \uc778\uc2a4\ud134\uc2a4\uc758 \uc9c0\uc5ed\uc744 \uc120\ud0dd\ud558\uac8c \ub418\ub294\ub370 \uc811\uc18d\ud558\ub824\ub294 \uc11c\ubc84\uc640 \uac19\uc740 \uc9c0\uc5ed\uc744 \uc120\ud0dd\ud558\ub3c4\ub85d \ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ucd94\uac00\ub85c replica \uc9c0\uc5ed\uc740 \uc120\ud0dd\uc0ac\ud56d\uc73c\ub85c \uc6d0\ud558\ub294 \ud56d\ubaa9\uc744 \uc120\ud0dd\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ub9c8\uc9c0\ub9c9\uc73c\ub85c plan\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"? Choose a Redis database name (leave blank to generate one): bae-no\n? Choose a primary region (can't be changed later) Tokyo, Japan (nrt)\n\nUpstash Redis can evict objects when memory is full. This is useful when caching in Redis. This setting can be changed later.\nLearn more at https://fly.io/docs/reference/redis/#memory-limits-and-object-eviction-policies\n? Would you like to enable eviction? Yes\n? Optionally, choose one or more replica regions (can be changed later): Paris, France (cdg)\n? Select an Upstash Redis plan  [Use arrows to move, type to filter]\n> Free: 100 MB Max Data Size\n  200M: 200 MB Max Data Size\n  3G: 3 GB Max Data Size\n")),(0,i.kt)("h2",{id:"\uc811\uc18d\uc815\ubcf4-\ud655\uc778"},"\uc811\uc18d\uc815\ubcf4 \ud655\uc778"),(0,i.kt)("p",null,"\uc811\uc18d\uc815\ubcf4\ub294 \ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ucd9c\ub825\ub418\ub294 \uc815\ubcf4 \uc911 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private URL"),"\uc740 \uc811\uc18d\uc815\ubcf4\ub85c \ud65c\uc6a9\ub418\ub2c8 \ubcf5\uc0ac\ud574\ub450\ub85d \ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"flyctl redis status bae-no\n\nRedis\n  ID             = 9Xaqy10XJanPjuYlgV1\n  Name           = bae-no\n  Plan           = Free\n  Primary Region = nrt\n  Read Regions   =\n  Private URL    = redis://default:xxxxxxxx@fly-bae-no.upstash.io\n")),(0,i.kt)("h2",{id:"redis-cli\ub85c-\uc811\uc18d\ud558\uae30"},"redis-cli\ub85c \uc811\uc18d\ud558\uae30"),(0,i.kt)("p",null,"\ub9cc\uc57d \uc678\ubd80\uc5d0\uc11c redis\uc5d0 \uc9c1\uc811 \uc811\uc18d\ud574\uc11c \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub97c \ud65c\uc6a9\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","redis-cli\ub97c \uc0ac\uc6a9\ud558\ubbc0\ub85c \uba3c\uc800 \ub85c\uceec\uc5d0 \ud574\ub2f9 \ud504\ub85c\uadf8\ub7a8\uc744 \uc124\uce58\ud574\uc57c \ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"flyctl redis connect\n? Select a database to connect to bae-no (nrt) personal\nProxying local port 16379 to remote [fdaa:0:8b80:0:1::4]:6379\n127.0.0.1:16379> ping\nPONG\n")),(0,i.kt)("h2",{id:"ioredis\ub85c-\uc811\uc18d\ud558\uae30"},"ioredis\ub85c \uc811\uc18d\ud558\uae30"),(0,i.kt)("p",null,"Node.js\ud658\uacbd\uc5d0\uc11c redis\ub97c \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"ioredis"),"\uac00 \uc788\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","fly.io\uc11c\ubc84\uc5d0\uc11c \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub9ac\ub97c \ud65c\uc6a9\ud574 redis\ub97c \uc811\uc18d\ud558\ub824\ub294 \uacbd\uc6b0 \uc544\ub798\uc640 \uac19\uc740 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2023-01-21T13:18:12.613 app[6c7fb858] nrt [info] Error: getaddrinfo ENOTFOUND fly-bae-no.upstash.io\n2023-01-21T13:18:12.613 app[6c7fb858] nrt [info] at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:107:26) {\n2023-01-21T13:18:12.613 app[6c7fb858] nrt [info] errno: -3007,\n2023-01-21T13:18:12.613 app[6c7fb858] nrt [info] code: 'ENOTFOUND',\n2023-01-21T13:18:12.613 app[6c7fb858] nrt [info] syscall: 'getaddrinfo',\n2023-01-21T13:18:12.613 app[6c7fb858] nrt [info] hostname: 'fly-bae-no.upstash.io'\n2023-01-21T13:18:12.613 app[6c7fb858] nrt [info] }\n")),(0,i.kt)("p",null,"\uc774\ub7f4 \ub54c\uc5d0\ub294 \uc811\uc18d\uc815\ubcf4\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private URL"),"\uc744 \uc81c\uacf5\ud558\uace0 \ub05d\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"?family=6"),"\uac12\uc744 \ucd94\uac00\ud558\uba74 \ud574\uacb0\ub41c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const Redis = require("ioredis");\n\nconst client = new Redis(\n  "redis://default:********@fly-bae-no.upstash.io:6379?family=6"\n);\n')),(0,i.kt)("p",null,"\ub9cc\uc57d ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-redis-subscriptions"),"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ub123\uc5b4\uc8fc\ub3c4\ub85d \ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { RedisPubSub } from "graphql-redis-subscriptions";\n\nconst pubsub = new RedisPubSub({\n  connection: "redis://default:********@fly-bae-no.upstash.io:6379?family=6",\n});\n')))}f.isMDXComponent=!0}}]);