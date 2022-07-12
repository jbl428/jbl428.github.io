"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5528],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=s(n),u=r,k=g["".concat(p,".").concat(u)]||g[u]||c[u]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2304:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],i={title:"[Spring Data MongoDB] Atlas Search \ub97c \uc704\ud55c \ucee4\uc2a4\ud140 Kotlin DSL \ub9cc\ub4e4\uae30",authors:"jake",tags:["spring","mongodb","atlas","dsl"]},p=void 0,s={permalink:"/2022/07/03/atlas-search-kotlin-dsl",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2022-07-03-atlas-search-kotlin-dsl/index.mdx",source:"@site/blog/2022-07-03-atlas-search-kotlin-dsl/index.mdx",title:"[Spring Data MongoDB] Atlas Search \ub97c \uc704\ud55c \ucee4\uc2a4\ud140 Kotlin DSL \ub9cc\ub4e4\uae30",description:"MongoDB Atlas Search \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc804\ubb38 \uac80\uc0c9 \uae30\ub2a5\uc744 Spring Data MongoDB \uc73c\ub85c \uc870\ud68c\ud558\uae30 \uc704\ud55c dsl \uc744 \ub9cc\ub4dc\ub294 \uacfc\uc815\uc744 \ub2f4\uace0\uc788\ub2e4.",date:"2022-07-03T00:00:00.000Z",formattedDate:"2022\ub144 7\uc6d4 3\uc77c",tags:[{label:"spring",permalink:"/tags/spring"},{label:"mongodb",permalink:"/tags/mongodb"},{label:"atlas",permalink:"/tags/atlas"},{label:"dsl",permalink:"/tags/dsl"}],readingTime:4.865,hasTruncateMarker:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"[Spring Data MongoDB] Atlas Search \ub97c \uc704\ud55c \ucee4\uc2a4\ud140 Kotlin DSL \ub9cc\ub4e4\uae30",authors:"jake",tags:["spring","mongodb","atlas","dsl"]},nextItem:{title:"Kotlin + Spring GraphQL + Spring Security \uc0ac\uc6a9\ud558\uae30",permalink:"/2022/06/06/spring-graphql"}},m={authorsImageUrls:[void 0]},c=[{value:"MongoDB CLI",id:"mongodb-cli",level:2},{value:"MongoTemplate",id:"mongotemplate",level:2},{value:"Kotlin DSL",id:"kotlin-dsl",level:2},{value:"Custom DSL",id:"custom-dsl",level:2}],g={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/ko-kr/atlas/search"},"MongoDB Atlas Search")," \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc804\ubb38 \uac80\uc0c9 \uae30\ub2a5\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Data MongoDB")," \uc73c\ub85c \uc870\ud68c\ud558\uae30 \uc704\ud55c dsl \uc744 \ub9cc\ub4dc\ub294 \uacfc\uc815\uc744 \ub2f4\uace0\uc788\ub2e4."),(0,o.kt)("h2",{id:"mongodb-cli"},"MongoDB CLI"),(0,o.kt)("p",null,"\uba3c\uc800 MongoDB \ucf58\uc194\uc5d0\uc11c Atlas Search \ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc790.",(0,o.kt)("br",{parentName:"p"}),"\n","\uacf5\uc2dd\ubb38\uc11c\ub97c \ud655\uc778\ud574\ubcf4\uba74 ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/atlas-search/query-syntax/"},"$search aggregation")," \ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uc54c \uc218 \uc788\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c\ub4e4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"movies")," \ub77c\ub294 \uceec\ub809\uc158\uc5d0\uc11c \uc788\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"released")," \ud544\ub4dc\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"keyword")," \ub85c \uac80\uc0c9\ud55c \uacb0\uacfc\ub97c 10\uac1c \uac00\uc838\uc624\ub294 \uc791\uc5c5\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \uc774\ub8e8\uc5b4\uc9c4\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'db.movies.aggregate([\n  {\n    $search: {\n      text: {\n        path: "released",\n        query: "keyword",\n      },\n    },\n  },\n  {\n    $limit: 10,\n  },\n  {\n    $project: {\n      title: 1,\n      released: 1,\n    },\n  },\n]);\n')),(0,o.kt)("h2",{id:"mongotemplate"},"MongoTemplate"),(0,o.kt)("p",null,"\uc704 \uc791\uc5c5\uc744 Spring Data MongoDB \ub97c \ud1b5\ud574 \uc870\ud68c\ud558\ub294 \uc0c1\ud669\uc744 \uac00\uc815\ud574\ubcf4\uc790.",(0,o.kt)("br",{parentName:"p"}),"\n","repository \ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Query")," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ud65c\uc6a9\ud558\uac70\ub098 \ubcf5\uc7a1\ud55c \ucffc\ub9ac\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 mongoTemplate \ub97c \ud65c\uc6a9\ud558\uac8c \ub41c\ub2e4."),(0,o.kt)("p",null,"\ubcf5\uc7a1\ud55c \ucffc\ub9ac\ub97c \uc218\ud589\ud558\ub294 \uc0c1\ud669\uc744 \uac00\uc815\ud574 mongoTemplate \uc758 aggregate \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud574\ubcf4\uc790.",(0,o.kt)("br",{parentName:"p"}),"\n","\uccab \ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub85c \uac01 pipeline \uc744 \ub2f4\ub294 \ud558\ub098\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"Aggregation")," \uc778\uc2a4\ud134\uc2a4\ud2c0 \uc81c\uacf5\ud574\uc57c \ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","Spring Data MongoDB \uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"$limit")," \uacfc ",(0,o.kt)("inlineCode",{parentName:"p"},"$project")," \uc744 \uc704\ud55c aggregation \uc744 \uc81c\uacf5\ud558\uc9c0\ub9cc ",(0,o.kt)("inlineCode",{parentName:"p"},"$search")," \ub294 \uadf8\ub807\uc9c0 \uc54a\uae30\uc5d0 \uc9c1\uc811 \uc0dd\uc131\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kt"},'data class Movie(\n    val title: String,\n    val released: String,\n)\n\nmongoTemplate.aggregate(\n    Aggregation.newAggregation(\n        // highlight-start\n        AggregationOperation {\n            Document(\n                "\\$search",\n                Document(\n                    "text",\n                    Document("path", "released").append("query", "keyword")\n                )\n            )\n        },\n        // highlight-end\n        Aggregation.limit(10),\n        Aggregation.project("title", "released"),\n    ),\n    Movie::class.java,\n    Movie::class.java,\n)\n')),(0,o.kt)("p",null,"\ud558\uc774\ub77c\uc774\ud305 \ub41c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uba74 Json \uc5d0 \ub9e4\uce6d\ub418\ub294 Document \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4\uace0 key \uc640 value \ub97c \ud615\ud0dc\uc5d0 \ub9de\uac8c \ub123\uc5b4\uc900 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc704\uc640 \uac19\uc740 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud560\ub54c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ubd88\ud3b8\ud568\uc774 \uc874\uc7ac\ud55c\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uac00\ub3c5\uc131")),(0,o.kt)("p",null,"json \uad6c\uc870\ub97c \ud45c\ud604\ud558\uae30 \uc704\ud574 Document \ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\ub370 \ubcf5\uc7a1\ud55c \uad6c\uc870\ub97c \ub9cc\ub4dc\ub824\uba74 \ub9ce\uc740 Document \ud0a4\uc6cc\ub4dc\uac00 \ucf54\ub4dc\uc0c1\uc5d0 \uc874\uc7ac\ud558\uac8c \ub41c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774\ub85c\uc778\ud574 \ucf54\ub4dc\ub97c \ud1b5\ud574 \uc5b4\ub5a4 json \uc774 \ub9cc\ub4e4\uc5b4\uc9c0\ub294\uc9c0 \ud30c\uc545\ud558\uae30 \uc5b4\ub824\uc6b8 \uc218 \uc788\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"typesafe")),(0,o.kt)("p",null,"\uc704 \ucf54\ub4dc\uc5d0\uc11c Document \uac00 \uc0ac\uc6a9\ub41c \uacf3\uc758 key \ubd80\ubd84\ub9cc \uc0b4\ud3b4\ubcf4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"$search")," \uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," \uc640 \uac19\uc740 \ubb38\uc790\uc5f4\uc774 \ubcf4\uc778\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc704\uc640\uac19\uc740 \ubb38\uc790\uc5f4\uc740 \uc798\ubabb \uc785\ub825\ud574\ub3c4 \ucef4\ud30c\uc77c \uc2dc\uc810\uc5d0\ub294 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uace0 \uc2e4\uc81c \ucffc\ub9ac\ub97c \uc218\ud589\ud560 \ub54c \ubc1c\uc0dd\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ub610\ud55c \uac01 key \uc758 value \uc5b4\ub294 \uc5b4\ub5a4 \ud0c0\uc785\uc758 \uac12\uc744 \uc8fc\uc5b4\uc57c \ud558\ub294\uc9c0 \ub2e8\uc11c\ub97c \uc81c\uacf5\ud558\uc9c0 \ubabb\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," \uc544\ub798\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," \uac12\uc740 \ud544\uc218\ub85c \uc8fc\uc5b4\uc57c \ud558\ub294\ub370 \uc81c\uacf5\ud558\uc9c0 \uc54a\ub294\uacbd\uc6b0 \ub7f0\ud0c0\uc784 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4."),(0,o.kt)("h2",{id:"kotlin-dsl"},"Kotlin DSL"),(0,o.kt)("p",null,"Kotlin DSL \uc740 json \uacfc \uac19\uc740 \ud2b8\ub9ac\uad6c\uc870\ub97c \uac00\ub3c5\uc131 \uc788\ub294 \ucf54\ub4dc\ub85c \ud45c\ud604\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud574\uc900\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kotlin/kotlinx.html"},"kotlin-html")," \uacfc \uac19\uc740 \ud328\ud0a4\uc9c0\ub97c \uc0b4\ud3b4\ubcf4\uba74 html \uad6c\uc870\ub97c \ucf54\ud2c0\ub9b0 \ucf54\ub4dc\ub85c \ud45c\ud604\ud55c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kt"},'import kotlinx.browser.*\nimport kotlinx.html.*\nimport kotlinx.html.dom.*\n\nfun main() {\n    document.body!!.append.div {\n        h1 {\n            +"Welcome to Kotlin/JS!"\n        }\n        p {\n            +"Fancy joining this year\'s "\n            a("https://kotlinconf.com/") {\n                +"KotlinConf"\n            }\n            +"?"\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"custom-dsl"},"Custom DSL"),(0,o.kt)("p",null,"\uc704\uc640 \uac19\uc740 DSL \uc740 \ucf54\ud2c0\ub9b0\uc758 ",(0,o.kt)("strong",{parentName:"p"},"\uc218\uc2e0 \uac1d\uccb4 \uc9c0\uc815 \ub78c\ub2e4"),"\ub97c \ud65c\uc6a9\ud574\uc11c \uc9c1\uc811 \ub9cc\ub4e4 \uc218 \uc788\ub2e4."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"DSL \uc5d0 \ub300\ud55c \ub0b4\uc6a9\uacfc \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc774\ud574\ub294 \ub2e4\ub978 \ube14\ub85c\uadf8\ub098 \uc11c\uc801\uc744 \ucc38\uc870\ud558\ub3c4\ub85d \ud55c\ub2e4.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ub2e4\uc74c \uc800\uc7a5\uc18c\uc5d0 \ubaa8\ub4e0 \ucf54\ub4dc\uac00 \uc874\uc7ac\ud55c\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jbl428/study-note/tree/master/kotlin/spring-graphql/src/main/kotlin/com/graphql/sample/aggregation"},"\ub9c1\ud06c"))),(0,o.kt)("p",null,"\uc9c1\uc811 \ub9cc\ub4e0 DSL \uc744 \ud65c\uc6a9\ud574 \uae30\uc874 \ucf54\ub4dc\ub97c \uc544\ub798\uc640 \uac19\uc774 \ubc14\uafc0 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kt"},'mongoTemplate.aggregate(\n    aggregation {\n        search {\n            text {\n                path { +Movie::released }\n                query("keyword")\n            }\n        }\n        limit(10)\n        project {\n            // KProperty \ub97c \ud65c\uc6a9\ud574\uc11c \ud074\ub798\uc2a4\uc758 \ud544\ub4dc\uba85\uc73c\ub85c \ucc38\uc870\ud560 \uc218 \uc788\uac8c\ud558\uc600\ub2e4.\n            // \uc774\ub807\uac8c \ud558\uba74 \ucd94\ud6c4\uc5d0 Movie \uc758 title \ud544\ub4dc\uba85\uc744 \ubc14\uafd4\ub3c4 \uc544\ub798 \ucf54\ub4dc\ub3c4 \uac19\uc774 \ubc14\ub014\uac83\uc774\ub2e4.\n            +Movie::title\n            +Movie::released\n        }\n    },\n    Movie::class.java,\n    Movie::class.java,\n)\n')),(0,o.kt)("p",null,"\uc774\uc804\ubcf4\ub2e4 \ub354 \uac00\ub3c5\uc131 \uc788\uace0 \uc548\uc804\ud55c \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."))}u.isMDXComponent=!0}}]);