"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8235],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,k=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},167:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),l=["components"],p={title:"MongoDB Atlas Search\ub85c \uceec\ub7fc\uae30\ubc18 \uc815\ub82c\ud558\uae30",slug:"2022/09/12/MongoDB-Atlas-Search\ub85c-\uceec\ub7fc\uae30\ubc18-\uc815\ub82c\ud558\uae30",authors:"jake",tags:["mongodb","atlas","sort"]},o=void 0,s={permalink:"/2022/09/12/MongoDB-Atlas-Search\ub85c-\uceec\ub7fc\uae30\ubc18-\uc815\ub82c\ud558\uae30",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2022-09-12-mongodb-atlas-sort/index.mdx",source:"@site/blog/2022-09-12-mongodb-atlas-sort/index.mdx",title:"MongoDB Atlas Search\ub85c \uceec\ub7fc\uae30\ubc18 \uc815\ub82c\ud558\uae30",description:"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\ub294 MongoDB Atlas \ub97c \ud65c\uc6a9\ud574 \ud398\uc774\uc9c0\ub124\uc774\uc158\uc744 \uad6c\ud604\ud560 \ub54c \uc815\ub82c\uc744 relevance \uae30\ubc18\uc774 \uc544\ub2cc \uceec\ub7fc\uc744 \uae30\uc900\uc73c\ub85c \ud560 \ub54c\uc758 \ubb38\uc81c\uc640 \uac1c\uc120\uc810\uc744 \ub2e4\ub8ec\ub2e4.",date:"2022-09-12T00:00:00.000Z",formattedDate:"2022\ub144 9\uc6d4 12\uc77c",tags:[{label:"mongodb",permalink:"/tags/mongodb"},{label:"atlas",permalink:"/tags/atlas"},{label:"sort",permalink:"/tags/sort"}],readingTime:14.765,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"MongoDB Atlas Search\ub85c \uceec\ub7fc\uae30\ubc18 \uc815\ub82c\ud558\uae30",slug:"2022/09/12/MongoDB-Atlas-Search\ub85c-\uceec\ub7fc\uae30\ubc18-\uc815\ub82c\ud558\uae30",authors:"jake",tags:["mongodb","atlas","sort"]},prevItem:{title:"\ubc30\ub2ec\ube44 \ub178\ub178 \ud504\ub85c\uc81d\ud2b8\uc744 \uc9c4\ud589\ud558\uba70",permalink:"/2022/11/07/\ubc30\ub2ec\ube44-\ub178\ub178-\ud504\ub85c\uc81d\ud2b8\uc744-\uc9c4\ud589\ud558\uba70"},nextItem:{title:"Mogenius\ub97c \ud65c\uc6a9\ud55c \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \ubc30\ud3ec",permalink:"/2022/09/09/Mogenius\ub97c-\ud65c\uc6a9\ud55c-\ub3c4\ucee4-\ucee8\ud14c\uc774\ub108-\ubc30\ud3ec"}},m={authorsImageUrls:[void 0]},c=[{value:"\uc608\uc81c \ub370\uc774\ud130",id:"\uc608\uc81c-\ub370\uc774\ud130",level:2},{value:"Search Index \uc0dd\uc131",id:"search-index-\uc0dd\uc131",level:2},{value:"Relevance \uae30\ubc18 \uc815\ub82c",id:"relevance-\uae30\ubc18-\uc815\ub82c",level:2},{value:"\uceec\ub7fc\uae30\ubc18 \uc815\ub82c",id:"\uceec\ub7fc\uae30\ubc18-\uc815\ub82c",level:2},{value:"Atlas Search",id:"atlas-search",level:2},{value:"Score \ub97c \ud65c\uc6a9\ud558\ub294 \ud544\ub4dc\uae30\ubc18 \uc815\ub82c",id:"score-\ub97c-\ud65c\uc6a9\ud558\ub294-\ud544\ub4dc\uae30\ubc18-\uc815\ub82c",level:2},{value:"path score function",id:"path-score-function",level:3},{value:"near operator",id:"near-operator",level:3},{value:"2\ucc28 \uc815\ub82c",id:"2\ucc28-\uc815\ub82c",level:2},{value:"\ucc38\uace0\uc790\ub8cc",id:"\ucc38\uace0\uc790\ub8cc",level:2}],d={toc:c};function u(e){var n=e.components,p=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\ub294 MongoDB Atlas \ub97c \ud65c\uc6a9\ud574 \ud398\uc774\uc9c0\ub124\uc774\uc158\uc744 \uad6c\ud604\ud560 \ub54c \uc815\ub82c\uc744 relevance \uae30\ubc18\uc774 \uc544\ub2cc \uceec\ub7fc\uc744 \uae30\uc900\uc73c\ub85c \ud560 \ub54c\uc758 \ubb38\uc81c\uc640 \uac1c\uc120\uc810\uc744 \ub2e4\ub8ec\ub2e4."),(0,i.kt)("h2",{id:"\uc608\uc81c-\ub370\uc774\ud130"},"\uc608\uc81c \ub370\uc774\ud130"),(0,i.kt)("p",null,"\uba3c\uc800 \uc608\uc81c\ub85c \ud65c\uc6a9\ud560 \ub370\uc774\ud130\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790.",(0,i.kt)("br",{parentName:"p"}),"\n","Atlas \uc5d0\uc11c\ub294 \uc0d8\ud50c \ub370\uc774\ud130\ub97c \uc81c\uacf5\ud558\uace0 \uc27d\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc774\ub97c \ud65c\uc6a9\ud574\ubcf4\uc790.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Database Deployments")," \ud398\uc774\uc9c0\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," \uc744 \uc120\ud0dd\ud558\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Load Sample Dataset")," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc0d8\ud50c \ub370\uc774\ud130\uac00 \uc0dd\uc131\ub41c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc5ec\ub7ec \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc0dd\uc131\ub418\ub294\ub370 \uadf8 \uc911 ",(0,i.kt)("inlineCode",{parentName:"p"},"sample_mflix")," \uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"movies")," \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"MongoDB Atlas \uc5d0\uc11c\ub294 \ud68c\uc6d0\uac00\uc785\ub9cc \ud574\ub3c4 \ubb34\ub8cc \ud074\ub7ec\uc2a4\ud130\ub97c \uc81c\uacf5\ud558\ubbc0\ub85c \ube44\uc6a9\uac71\uc815\uc5c6\uc774 \ud14c\uc2a4\ud2b8 \ud658\uacbd\uc744 \uad6c\ucd95\ud560 \uc218 \uc788\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"load-sample",src:t(8902).Z,width:"1482",height:"646"})),(0,i.kt)("p",null,"\ud574\ub2f9 \uceec\ub809\uc158\uc740 \uc601\ud654\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ub2f4\uace0\uc788\uc73c\uba70 \ub300\ub7b5 23000 \uac1c\uc758 \ubb38\uc11c\uac00 \uc874\uc7ac\ud55c\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"movies",src:t(8773).Z,width:"1992",height:"776"})),(0,i.kt)("h2",{id:"search-index-\uc0dd\uc131"},"Search Index \uc0dd\uc131"),(0,i.kt)("p",null,"Atlas Search \ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \uba3c\uc800 \uac80\uc0c9\uc6a9 \uc778\ub371\uc2a4\ub97c \uc0dd\uc131\ud574\uc57c\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uba3c\uc800 ",(0,i.kt)("inlineCode",{parentName:"p"},"Search")," \ud398\uc774\uc9c0\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Search Index")," \ubc84\ud2bc\uc744 \uc120\ud0dd\ud55c\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-index",src:t(9375).Z,width:"1366",height:"1108"})),(0,i.kt)("p",null,"\uc778\ub371\uc2a4 \uc124\uc815\ubc29\ubc95\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"Visual Editor")," \uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON Editor")," \uac00 \uc788\ub294\ub370 ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON Editor")," \ub97c \uc120\ud0dd\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Database and Collection")," \uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"sample_mflix.movies")," \ub97c \uc120\ud0dd\ud558\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Index Name")," \uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," \ub85c \uc124\uc815\ud55c\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"search-index",src:t(3316).Z,width:"1540",height:"932"})),(0,i.kt)("p",null,"\uc5d0\ub514\ud130 \ud56d\ubaa9\uc5d0\ub294 \uc544\ub798\uc640 \uac19\uc740 \ub0b4\uc6a9\uc744 \ub123\uc5b4\uc900\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ucd1d 4\uac1c\uc758 \ud544\ub4dc\uc5d0 \ub300\ud55c \uc778\ub371\uc2a4\ub97c \uc0dd\uc131\ud558\uac8c \ub41c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mappings": {\n    "dynamic": false,\n    "fields": {\n      "fullplot": {\n        "type": "string"\n      },\n      "released": {\n        "type": "date"\n      },\n      "runtime": {\n        "representation": "int64",\n        "type": "number"\n      },\n      "title": {\n        "type": "string"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"relevance-\uae30\ubc18-\uc815\ub82c"},"Relevance \uae30\ubc18 \uc815\ub82c"),(0,i.kt)("p",null,"\uac80\uc0c9\uc5d4\uc9c4\uc744 \uc0ac\uc6a9\ud560 \ub54c\uc5d0\ub294 \uc815\ub82c\uc744 \uac80\uc0c9\uc5b4\uc640 \uad00\ub828\uc131\uc774 \ub192\uc740 \uc21c\uc11c\ub85c \uc815\ub82c\ud558\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc774\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","Atlas Search \uc5d0\uc11c\ub294 \uc774\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"relevance")," \ub77c\uace0 \ubd80\ub974\uba70 \uc790\ub3d9\uc73c\ub85c \uc774\ub97c \uae30\uc900\uc73c\ub85c score \ub97c \uacc4\uc0b0\ud574 \ub0b4\ub9bc\ucc28\uc21c \uc815\ub82c\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c\ub4e4\uc5b4 ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," \uceec\ub7fc\uc5d0 \ub300\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"star wars")," \uac80\uc0c9\uc5b4\uc5d0 \ub9e4\uce6d\ub418\ub294 \ubb38\uc11c \uc0c1\uc704 10\uac1c\ub97c \uac00\uc838\uc628\ub2e4\uace0 \ud574\ubcf4\uc790."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.movies.aggregate([\n  {\n    $search: {\n      text: {\n        path: "title",\n        query: "star wars",\n      },\n    },\n  },\n  { $skip: 0 },\n  { $limit: 10 },\n  {\n    $project: {\n      title: 1,\n      score: { $meta: "searchScore" }, // score \ub97c \uacb0\uacfc\uc5d0 \ud3ec\ud568\n    },\n  },\n]);\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"star-wars-search",src:t(7397).Z,width:"1574",height:"676"})),(0,i.kt)("p",null,"\uacb0\uacfc\uc758 score \ub97c \ubcf4\uba74 \ub0b4\ub9bc\ucc28\uc21c\uc73c\ub85c \uc815\ub82c\ub418\uc5b4 \uc788\ub294\uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uac80\uc0c9\uc5b4\uc5d0 \ub9e4\uce6d\ub418\ub294 \uac1c\uc218\uac00 \ub9ce\uc740 \uacbd\uc6b0 \ud398\uc774\uc9c0 \ubc88\ud638\ub97c \ud06c\uac8c \ud55c \uacbd\uc6b0\ub97c \uac00\uc815\ud574\ubcf4\uc790.",(0,i.kt)("br",{parentName:"p"}),"\n","\ub2e4\uc74c\uc740 \uac80\uc0c9\uc5b4\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"the")," \ub85c \uc124\uc815\ud55c \uacbd\uc6b0 \ub9e4\uce6d\ub418\ub294 \ubb38\uc11c\ub294 5500 \uac1c \uc815\ub3c4\uc778\ub370 5000 \ubc88\uc9f8 \uc774\ud6c4 \ub370\uc774\ud130 10\uac1c\ub97c \uc694\uccad\ud558\ub294 \uc0c1\ud669\uc774\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.movies.aggregate([\n  {\n    $search: {\n      text: {\n        path: "title",\n        query: "the",\n      },\n    },\n  },\n  { $skip: 5000 },\n  { $limit: 10 },\n  {\n    $project: {\n      _id: 0,\n      title: 1,\n      score: { $meta: "searchScore" },\n    },\n  },\n]);\n')),(0,i.kt)("p",null,"\ub300\ub7b5 400ms \uc815\ub3c4 \uac78\ub9ac\ub294\ub370 \ud658\uacbd\uc5d0 \ub530\ub77c \ub2e4\ub974\uaca0\uc9c0\ub9cc \ubcf4\ud1b5\uc740 \ud06c\uac8c \ubb38\uc81c\uac00 \ub418\uc9c0 \uc54a\ub294 \uc2dc\uac04\uc774\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ucc98\ub7fc \uc77c\ubc18\uc801\uc778 ",(0,i.kt)("inlineCode",{parentName:"p"},"relevance")," \uae30\ubc18 \uc815\ub82c\uc5d0\uc11c\ub294 \ud070 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,i.kt)("h2",{id:"\uceec\ub7fc\uae30\ubc18-\uc815\ub82c"},"\uceec\ub7fc\uae30\ubc18 \uc815\ub82c"),(0,i.kt)("p",null,"\uc774\uc81c \ud2b9\uc815 \uceec\ub7fc\uc744 \uae30\uc900\uc73c\ub85c \uc815\ub82c\ud558\ub294 \uc0c1\ud669\uc744 \uac00\uc815\ud574\ubcf4\uc790.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"fullplot")," \uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"the")," \uac80\uc0c9\uc5b4\uc5d0 \ub9e4\uce6d\ub418\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," \uceec\ub7fc\uc744 \uae30\uc900\uc73c\ub85c \ub0b4\ub9bc\ucc28\uc21c \uc815\ub82c\ud558\ub294 \uc0c1\ud669\uc774\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.movies.aggregate([\n  { $search: { text: { path: "fullplot", query: "the" } } },\n  { $sort: { runtime: -1 } }, // runtime \ub0b4\ub9bc\ucc28\uc21c \uc815\ub82c\n  { $skip: 0 },\n  { $limit: 10 },\n  { $project: { _id: 0, title: 1, runtime: 1 } },\n]);\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"runtime-sort",src:t(1063).Z,width:"956",height:"666"})),(0,i.kt)("p",null,"\uccab \ud398\uc774\uc9c0\ub97c \uc694\uccad\ud558\ub294 \uacbd\uc6b0\uc774\uc9c0\ub9cc 1.4\ucd08 \uc815\ub3c4\uc758 \uc2dc\uac04\uc774 \uac78\ub9b0\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ud558\ub098 \ub208\uc5ec\uaca8 \ubcfc \uc810\uc740 ",(0,i.kt)("strong",{parentName:"p"},"skip \uc758 \uac12\uc5d0 \uad00\uacc4\uc5c6\uc774 \uc77c\uc815\ud55c \uc2dc\uac04\uc774 \uac78\ub9b0\ub2e4\ub294 \uac83"),"\uc774\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 skip \uc5d0 \uad00\uacc4\uc5c6\uc774 ",(0,i.kt)("strong",{parentName:"p"},"\ud56d\uc0c1 \uac80\uc0c9\uc5b4\uc5d0 \ub9e4\uce6d\ub418\ub294 \ubaa8\ub4e0 \ubb38\uc11c\ub97c \uac00\uc838\uc640 \uc815\ub82c"),"\uc744 \ud55c\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"skip"),(0,i.kt)("th",{parentName:"tr",align:null},"time"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"1.457")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"100"),(0,i.kt)("td",{parentName:"tr",align:null},"1.403")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"1.322")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10000"),(0,i.kt)("td",{parentName:"tr",align:null},"1.435")))),(0,i.kt)("h2",{id:"atlas-search"},"Atlas Search"),(0,i.kt)("p",null,"\uc55e\uc11c \uc815\uc758\ud55c Search Index \uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," \uceec\ub7fc\uc744 \ucd94\uac00\ud588\uc74c\uc5d0\ub3c4 \uc815\ub82c\uc18d\ub3c4\uac00 \ub290\ub9ac\ub2e4\ub294 \uc810\uc774 \uc774\uc0c1\ud558\uac8c \ub290\uaef4\uc9c8 \uc218 \uc788\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 Search Index \uc758 \ud2b9\uc131\uacfc Atlas Search \uc758 \ub0b4\ubd80\uad6c\uc870\ub85c \uc778\ud574 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc774\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","Atlas Search \ud074\ub7ec\uc2a4\ud130\uc758 \uac01 \ub178\ub4dc\uc5d0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"mongot")," \uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"mogond")," \ub77c \ubd88\ub9ac\ub294 \ub450 \uac1c\uc758 \ud504\ub85c\uc138\uc2a4\uac00 \uc874\uc7ac\ud55c\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mongot"),": Apache Lucene \uae30\ubc18\uc758 \uac80\uc0c9\uc5d4\uc9c4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mongond"),": NoSQL \ub370\uc774\ud130\ubca0\uc774\uc2a4")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"atlas-architecture",src:t(340).Z,width:"695",height:"442"})),(0,i.kt)("p",null,"\ub450 \ud504\ub85c\uc138\uc2a4\uac00 \ub2e4\ub8e8\ub294 \ub370\uc774\ud130\ub294 \uc11c\ub85c \ub2e4\ub974\uace0 \uc800\uc7a5\ud558\ub294 \ud615\ud0dc\ub3c4 \ub2e4\ub974\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mongot"),": Search Index"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mongond"),": Document, B-Tree Index")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mongot")," \ub294 \uac80\uc0c9\uc744 \uc704\ud55c \uc5ed\uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 Search Index \ub97c \ub2e4\ub8e8\uba70 ",(0,i.kt)("inlineCode",{parentName:"p"},"mongond")," \ub294 \uceec\ub809\uc158 \ub370\uc774\ud130\uc640 B-Tree \uc778\ub371\uc2a4\ub97c \ub2e4\ub8ec\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc55e\uc11c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\ub294 aggregation \uc744 \uc218\ud589\ud560 \ub54c ",(0,i.kt)("inlineCode",{parentName:"p"},"$search")," \ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"mongot")," \uc5d0\uac8c \ucc98\ub9ac\ud558\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"$sort")," \uc774\ud6c4\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"mongond")," \uc5d0\uac8c \ucc98\ub9ac\ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.movies.aggregate([\n  // mongot \uc5d0\uc11c \uc218\ud589\n  /* highlight-next-line */\n  { $search: { text: { path: "fullplot", query: "the" } } },\n  // mongond \uc5d0\uc11c \uc218\ud589\n  /* highlight-start */\n  { $sort: { runtime: -1 } },\n  { $skip: 0 },\n  { $limit: 10 },\n  { $project: { _id: 0, title: 1, runtime: 1 } },\n  /* highlight-end */\n]);\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$search")," stage \uc5d0\uc11c\ub294 \uc5ed\uc778\ub371\uc2a4\ub97c \ucc38\uc870\ud574\uc11c \uac80\uc0c9\uc744 \uc218\ud589\ud558\uae30\uc5d0 ",(0,i.kt)("strong",{parentName:"p"},"\uacb0\uacfc\ub85c \ubb38\uc11c\uc804\uccb4\uac00 \uc544\ub2cc \uc624\uc9c1 ",(0,i.kt)("inlineCode",{parentName:"strong"},"object id")," \uc640 ",(0,i.kt)("inlineCode",{parentName:"strong"},"score")," \uac19\uc740 \uba54\ud0c0\uc815\ubcf4"),"\ub97c \ubc18\ud658\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"mongod")," \uac00 \ubc1b\uc544\uc11c \uceec\ub809\uc158\uc744 \uc870\ud68c\ud55c \ud6c4 \uc774\ud6c4 stage \ub97c \uc218\ud589\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ub85c\uc778\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"fullplot")," \uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"the")," \uc5d0 \ub9e4\uce6d\ub418\ub294 id \uac00 20000 \uac1c\ub77c\uace0 \uac00\uc815\ud558\uba74 \ud574\ub2f9\ud558\ub294 \ubaa8\ub4e0 \ubb38\uc11c\ub97c \uc870\ud68c\ud55c\ud6c4 \uc815\ub82c\uc744 \uc218\ud589\ud55c\ub2e4."),(0,i.kt)("p",null,"\uacb0\ub860\uc801\uc73c\ub85c ",(0,i.kt)("strong",{parentName:"p"},"\ub370\uc774\ud130\uc758 \ud544\ud130\ub9c1\uacfc \uc815\ub82c\uc744 \uc218\ud589\ud558\ub294 \ud504\ub85c\uc138\uc2a4\uac00 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd"),"\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c\ub4e4\uc5b4 \ub2e4\uc74c\ucffc\ub9ac\ub294 \uc624\uc9c1 ",(0,i.kt)("inlineCode",{parentName:"p"},"mongod")," \ub9cc \uc0ac\uc6a9\ud558\ub294\ub370 \uc774 \uacbd\uc6b0 \uc131\ub2a5\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"db.movies.createIndex({ runtime: 1 }); // B-Tree Index\ndb.movies.find({ fullplot: /the/ }).sort({ runtime: -1 }).skip(20000).limit(10); // 100~200ms\n")),(0,i.kt)("h2",{id:"score-\ub97c-\ud65c\uc6a9\ud558\ub294-\ud544\ub4dc\uae30\ubc18-\uc815\ub82c"},"Score \ub97c \ud65c\uc6a9\ud558\ub294 \ud544\ub4dc\uae30\ubc18 \uc815\ub82c"),(0,i.kt)("p",null,"\ub450 \ud504\ub85c\uc138\uc2a4\uac00 \ubaa8\ub450 \uc0ac\uc6a9\ud558\ub294 \ucffc\ub9ac\uc758 \uc18d\ub3c4\ub97c \uac1c\uc120\ud558\ub824\uba74 \uc815\ub82c\uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},"mongot")," \uc5d0\uc11c \uc218\ud589\ud574\uc57c\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"mongot")," \ub294 \uc624\uc9c1 ",(0,i.kt)("inlineCode",{parentName:"p"},"score")," \ub97c \uae30\ubc18\uc73c\ub85c \uc815\ub82c\uc744 \uc218\ud589\ud558\uae30\uc5d0 \uc815\ub82c\ud558\uace0\uc790 \ud558\ub294 \ud544\ub4dc\uc758 \uac12\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"score")," \uc5d0 \ubc18\uc601\ub418\ub3c4\ub85d \ud574\uc57c\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ub97c \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"path score function")," \ub610\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"near operator")," \ub97c \uc0ac\uc6a9\ud574 \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("h3",{id:"path-score-function"},"path score function"),(0,i.kt)("p",null,"Atlas search \uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"relevance")," \uae30\ubc18\uc73c\ub85c \uacc4\uc0b0\ub41c score \ub97c \uc870\uc791\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\ub4e4\uc744 \uc81c\uacf5\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uadf8 \uc911 \ud558\ub098\uac00 ",(0,i.kt)("inlineCode",{parentName:"p"},"path score function")," \uc73c\ub85c score \ub97c \ubb38\uc11c\uc758 \ud2b9\uc815\ud544\ub4dc\uc758 \uac12\uc73c\ub85c \ubc14\uafd4\uc900\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","score \ub294 \uc22b\uc790\ud0c0\uc785\uc774\ubbc0\ub85c path \uc5d0 \uc0ac\uc6a9\ud560 \ud544\ub4dc\ub3c4 \uc22b\uc790\ud0c0\uc785\uc774\uc5b4\uc57c\ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.movies.aggregate([\n  {\n    $search: {\n      text: {\n        path: "fullplot",\n        query: "the",\n        /* highlight-start */\n        score: {\n          function: {\n            path: {\n              value: "runtime", // runtime \uc744 score \ub85c \uc0ac\uc6a9\n              undefined: 0, // runtime \uc774 null \uc774\uac70\ub098 \uac12\uc774\uc5c6\uc73c\uba74 0\uc73c\ub85c \uc124\uc815\n            },\n          },\n        },\n        /* highlight-end */\n      },\n    },\n  },\n  { $skip: 0 },\n  { $limit: 10 },\n  {\n    $project: {\n      _id: 0,\n      title: 1,\n      runtime: 1,\n      score: { $meta: "searchScore" }, // score \ub97c \uacb0\uacfc\uc5d0 \ud3ec\ud568\n    },\n  },\n]);\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"path-score",src:t(554).Z,width:"1246",height:"664"})),(0,i.kt)("p",null,"\uacb0\uacfc\ub97c \ubcf4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"score")," \uac00 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," \uacfc \ub3d9\uc77c\ud558\ub2e4\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ucc98\ub7fc ",(0,i.kt)("inlineCode",{parentName:"p"},"path score function")," \uc740 ",(0,i.kt)("strong",{parentName:"p"},"\uc22b\uc790\ud0c0\uc785\uc758 \ud544\ub4dc\ub97c \ub0b4\ub9bc\ucc28\uc21c \uc815\ub82c"),"\ud560 \ub54c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc \uadf8 \uc678\uc758 \uc870\uac74\uc5d0\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4\ub294 \ub2e8\uc810\uc774\uc788\ub2e4."),(0,i.kt)("h3",{id:"near-operator"},"near operator"),(0,i.kt)("p",null,"near operator \ub294 \uc22b\uc790, \ub0a0\uc9dc, \uc88c\ud45c\ub370\uc774\ud130\ub97c \ud65c\uc6a9\ud574 score \ub97c \uacc4\uc0b0\ud558\ub294 operator \ub85c \uacc4\uc0b0\uc2dd\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"near-score",src:t(3181).Z,width:"462",height:"186"})),(0,i.kt)("p",null,"\uc5ec\uae30\uc11c \uac01 \ud56d\ubaa9\uc758 \uc758\ubbf8\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pivot")," : \uc784\uc758\uc758 \uc22b\uc790"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"distance")," : \ud2b9\uc815 \ud544\ub4dc\uc640 ",(0,i.kt)("inlineCode",{parentName:"li"},"origin")," \uc0ac\uc774\uc758 \uac70\ub9ac"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin")," : \uae30\uc900\uac12")),(0,i.kt)("p",null,"\uacc4\uc0b0\uc2dd\uc744 \uc798\ubcf4\uba74 \ubd84\uc790\uc640 \ubd84\ubaa8\uc5d0 \ubaa8\ub450 ",(0,i.kt)("inlineCode",{parentName:"p"},"pivot")," \uc774 \uc874\uc7ac\ud558\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"distance")," \ub294 0 \uc774\uc0c1\uc758 \uc218\uc774\uae30 \ub54c\ubb38\uc5d0 score \ub294 0 \ubcf4\ub2e4\ud06c\uace0 1 \ubcf4\ub2e4 \uac19\uac70\ub098 \uc791\uc740 \uac12\uc744 \uac00\uc9c4\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"pivot")," \uc740 \uc0ac\uc2e4 \uc815\ub82c\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\ub294 \ud56d\ubaa9\uc774\uba70 ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," \uc744 \uc5b4\ub5bb\uac8c \uc124\uc815\ud558\ub290\ub0d0\uc5d0 \ub530\ub77c \uc815\ub82c\uc21c\uc11c\uac00 \uacb0\uc815\ub41c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," \uc744 \uc624\ub984\ucc28\uc21c\uc73c\ub85c \uc815\ub82c\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," \uc744 0 \uc73c\ub85c \uc124\uc815\ud558\uba74 \ub41c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.movies.aggregate([\n  {\n    $search: {\n      compound: {\n        /* highlight-start */\n        // near operator \ub85c \uacc4\uc0b0\ud55c score \ub294 \ucd5c\uc885 score \uc5d0 \ubc18\uc601\n        must: [\n          {\n            near: {\n              origin: 0, // runtime \uc774 0 \uc5d0 \uac00\uae4c\uc6b8 \uc218\ub85d \ub192\uc740 score \ub97c \uac00\uc9c4\ub2e4\n              pivot: 1,\n              path: "runtime",\n            },\n          },\n        ],\n        // text operator \ub85c \uacc4\uc0b0\ub41c score \ub97c \ubb34\uc2dc\ud558\uae30 \uc704\ud574 filter \ub97c \uc0ac\uc6a9\n        filter: [{ text: { path: "fullplot", query: "the" } }],\n        /* highlight-end */\n      },\n    },\n  },\n  { $skip: 0 },\n  { $limit: 10 },\n  {\n    $project: {\n      _id: 0,\n      title: 1,\n      runtime: 1,\n      score: { $meta: "searchScore" }, // score \ub97c \uacb0\uacfc\uc5d0 \ud3ec\ud568\n    },\n  },\n]);\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"near-runtime-asc",src:t(9777).Z,width:"1670",height:"672"})),(0,i.kt)("p",null,"near \ub85c \ub0a0\uc9dc\ud0c0\uc785\uc73c\ub85c \uc815\ub82c\ud560 \uc218\ub3c4 \uc788\uace0 \ub2e4\uc74c\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"released")," \ub97c \ucd5c\uc2e0\uc21c\uc73c\ub85c \uc815\ub82c\ud558\ub294 \ucffc\ub9ac\uc774\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.movies.aggregate([\n  {\n    $search: {\n      compound: {\n        must: [\n          {\n            near: {\n              /* highlight-start */\n              origin: ISODate("2030-01-01T00:00:00.000+00:00"),\n              pivot: 10000000,\n              path: "released",\n              /* highlight-end */\n            },\n          },\n        ],\n        filter: [{ text: { path: "fullplot", query: "the" } }],\n      },\n    },\n  },\n  { $skip: 0 },\n  { $limit: 10 },\n  {\n    $project: {\n      _id: 0,\n      title: 1,\n      released: 1,\n      score: { $meta: "searchScore" }, // score \ub97c \uacb0\uacfc\uc5d0 \ud3ec\ud568\n    },\n  },\n]);\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"near-date-result",src:t(3978).Z,width:"1850",height:"674"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\ub0b4\ub9bc\ucc28\uc21c \uc815\ub82c\uc5d0\uc11c\ub294 origin \uac12\uc744 \uc815\ub82c\ud544\ub4dc\uac00 \ub3c4\ub2ec\ud560 \uc218 \uc5c6\ub294 \ud070 \uac12\uc73c\ub85c \uc124\uc815\ud574\uc57c\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"movices")," \uceec\ub809\uc158\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"released")," \uac12\uc774 '2016-03-23' \uc774\ud6c4 \ub370\uc774\ud130\ub294 \uc5c6\uae30\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," \uc744 \uc801\ub2f9\ud788 \ud070 2030 \ub144\uc73c\ub85c \uc124\uc815\ud588\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ucd94\ud6c4\uc5d0 2030 \ub144 \uc774\ud6c4 \ub370\uc774\ud130\uac00 \ucd94\uac00\ub418\ub294 \uc0c1\ud669\uc744 \uac00\uc815\ud55c\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," \uc744 \ub354 \ud070 \uac12\uc73c\ub85c \uc124\uc815\ud574\uc57c \ud560\uac83\uc774\ub2e4."),(0,i.kt)("p",{parentName:"admonition"},"\ub2e4\ub9cc ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," \uc744 \ub108\ubb34 \ud070 \uac12\uc73c\ub85c \uc124\uc815\ud558\ub294 \uacbd\uc6b0 score \uac00 double \ud615\uc5d0 \ub2f4\uc744 \uc218 \uc5c6\uc744\uc815\ub3c4\ub85c \uc791\uc544\uc838\uc11c \uc81c\ub300\ub85c \uacc4\uc0b0\uc774 \ub418\uc9c0\uc54a\ub294 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ub7f0 \uacbd\uc6b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"pivot")," \uac12 \ub610\ud55c \ud070 \uac12\uc73c\ub85c \ub123\uc5b4\uc8fc\uc5b4\uc11c score \uac00 \ucee4\uc9c8 \uc218 \uc788\ub3c4\ub85d \ud574\uc57c\ud55c\ub2e4.")),(0,i.kt)("h2",{id:"2\ucc28-\uc815\ub82c"},"2\ucc28 \uc815\ub82c"),(0,i.kt)("p",null,"\ud2b9\uc815 \ud544\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc815\ub82c \uc2dc \uac19\uc740 \uac12\uc744 \uac00\uc9c0\ub294 \ubb38\uc11c\ub07c\ub9ac\ub294 \uc0c8\ub85c\uc6b4 \ud544\ub4dc\ub85c \uc815\ub82c\uc774 \ud544\uc694\ud55c \uc0c1\ud669\uc774 \uc0dd\uae38 \uc218 \uc788\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c\ub4e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"movies")," \uceec\ub809\uc158\uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," \uc73c\ub85c \uc815\ub82c\ud558\uace0 \uac19\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," \uc744 \uac00\uc9c0\ub294 \ubb38\uc11c\ub4e4\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"released")," \ub97c \uae30\uc900\uc73c\ub85c \uc815\ub82c\ud558\ub294 \uacbd\uc6b0\uc774\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"mongot")," \uc5d0\uc11c \uc218\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 \uac01 \ud544\ub4dc\ubcc4\ub85c score \uc758 \uac00\uc911\uce58\ub97c \ub2e4\ub974\uac8c \uc8fc\ub294 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"path score function")," \uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"near operator")," \ub97c \ubaa8\ub450 \uc0ac\uc6a9\ud558\uc5ec \uad6c\ud604\ud558\ub294\ub370 \ub2e8 1\ucc28 \uc815\ub82c\ud544\ub4dc\uac00 \uc790\uc5f0\uc218\uc5b4\uc57c \ud55c\ub2e4."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uc790\uc5f0\uc218\uac00 \uc544\ub2c8\uc9c0\ub9cc \ud2b9\uc815 \uc18c\uc218\uc810 \uc790\ub9ac \ubc11\uc73c\ub85c\ub294 \ud56d\uc0c1 0 \uc774\ub77c\ub294 \uac83\uc774 \ubcf4\uc7a5\ub41c\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"multiply score function")," \uc744 \uc801\uc6a9\ud574\uc11c \uc790\uc5f0\uc218\ub85c \ub9cc\ub4e4\uc5b4 \uc801\uc6a9\ud558\uba74 \ub41c\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"path score function")," \uc73c\ub85c 1\ucc28 \uc815\ub82c \ud544\ub4dc\ub97c \uc9c0\uc815\ud574 \uc790\uc5f0\uc218 score \ub97c \uc5bb\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"near operator")," \ub85c 2\ucc28 \uc815\ub82c \ud544\ub4dc\ub97c \uc9c0\uc815\ud574 \ud569\uc0b0\ud558\uba74 \ub41c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"near operator")," \ub85c \uacc4\uc0b0\ub41c score \ub294 1\ubcf4\ub2e4 \ud074 \uc218 \uc5c6\uae30\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"path score function")," \uc73c\ub85c \uacc4\uc0b0\ub41c score \uac00 5\uc778 \ubb38\uc11c\ub294 \uc544\ubb34\ub9ac near \uac12\uc774 \ub192\uc544\ub3c4 6\uc778 \ubb38\uc11c\ubcf4\ub2e4 score \uac00 \ud074 \uc218 \uc5c6\uac8c\ub41c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.movies.aggregate([\n  {\n    $search: {\n      compound: {\n        must: [\n          {\n            near: {\n              /* highlight-start */\n              // 2\ucc28 \uc815\ub82c \ud544\ub4dc\uc5d0 near operator \ub97c \uc0ac\uc6a9\n              origin: ISODate("2020-01-01T00:00:00.000+00:00"),\n              pivot: 1000000000,\n              path: "released",\n              score: {\n                function: {\n                  // \ub450 \uac1c\uc758 score \ub97c \ud569\uc0b0\n                  add: [\n                    // runtime \uac12\uc744 score \ub85c \uc0ac\uc6a9\n                    { path: { value: "runtime", undefined: 0 } },\n                    // near \ub85c \uacc4\uc0b0\ud55c score \ub97c \uc758\ubbf8\n                    { score: "relevance" },\n                  ],\n                },\n              },\n              /* highlight-end */\n            },\n          },\n        ],\n        filter: [{ text: { path: "fullplot", query: "the" } }],\n      },\n    },\n  },\n  { $skip: 1025 },\n  { $limit: 10 },\n  {\n    $project: {\n      _id: 0,\n      title: 1,\n      runtime: 1,\n      released: 1,\n      score: { $meta: "searchScore" }, // score \ub97c \uacb0\uacfc\uc5d0 \ud3ec\ud568\n    },\n  },\n]);\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"path-and-near",src:t(2682).Z,width:"2470",height:"666"})),(0,i.kt)("p",null,"\uacb0\uacfc\ub97c \ubcf4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," \uc774 \ud070 \ud56d\ubaa9\uc774 \uba3c\uc800 \ub098\uc624\uba70 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," \uc774 \uac19\uc740 \ubb38\uc11c\ub4e4\uc740 released \uae30\uc900\uc73c\ub85c \ucd5c\uc2e0\uc21c\uc73c\ub85c \uc815\ub82c\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("h2",{id:"\ucc38\uace0\uc790\ub8cc"},"\ucc38\uace0\uc790\ub8cc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mongodb.com/docs/atlas/atlas-search/atlas-search-overview/#fts-architecture"},"Atlas Search Architecture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mongodb.com/docs/atlas/atlas-search/scoring"},"Atlas Search Scoring"))))}u.isMDXComponent=!0},340:function(e,n,t){n.Z=t.p+"assets/images/atlas-architecture-9627ba38b8d123f92ca3f83aab6a4314.png"},9375:function(e,n,t){n.Z=t.p+"assets/images/create-index-b0b5106426a47cf44ac67e6fd9c28fca.png"},8902:function(e,n,t){n.Z=t.p+"assets/images/load-sample-523f1e94d7b260130be86089ecff27cd.png"},8773:function(e,n,t){n.Z=t.p+"assets/images/movies-071d3185dc45481169f1ded5da42aae3.png"},3978:function(e,n,t){n.Z=t.p+"assets/images/near-date-result-54b9c7c35be8e7a2e0ae171bf05a2fa7.png"},9777:function(e,n,t){n.Z=t.p+"assets/images/near-runtime-asc-b0229d4c5c321aefec9cd7cd8417027e.png"},3181:function(e,n,t){n.Z=t.p+"assets/images/near-score-cae1052382af06f457cbb068b04e6300.png"},2682:function(e,n,t){n.Z=t.p+"assets/images/path-and-near-80b662cfaac640dce098c892a16ee963.png"},554:function(e,n,t){n.Z=t.p+"assets/images/path-score-44584f0908acaee3f1c70e10670016a8.png"},1063:function(e,n,t){n.Z=t.p+"assets/images/runtime-sort-4461da31a629640e94e401baa74ed148.png"},3316:function(e,n,t){n.Z=t.p+"assets/images/search-index-25e4cc870370689815366ffa8a4bdf8c.png"},7397:function(e,n,t){n.Z=t.p+"assets/images/star-wars-search-eb2dcdc9d97c788d35b136c8869a43ff.png"}}]);