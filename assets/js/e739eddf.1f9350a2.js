"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8868],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,g=k["".concat(p,".").concat(m)]||k[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Kotlin + Spring GraphQL + Spring Security \uc0ac\uc6a9\ud558\uae30",authors:"jake",tags:["string","graphql","security","jwt"]},p=void 0,s={permalink:"/2022/06/06/spring-graphql",editUrl:"https://github.com/jbl428/jbl428.github.io/edit/main/blog/2022-06-06-spring-graphql/index.mdx",source:"@site/blog/2022-06-06-spring-graphql/index.mdx",title:"Kotlin + Spring GraphQL + Spring Security \uc0ac\uc6a9\ud558\uae30",description:"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 Spring for GraphQL \ud504\ub85c\uc81d\ud2b8\uac00 GA \ub418\uc5b4 \uc0d8\ud50c \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uacfc\uc815\uc744 \uae30\uc220\ud558\ub824\uace0 \ud55c\ub2e4.",date:"2022-06-06T00:00:00.000Z",formattedDate:"2022\ub144 6\uc6d4 6\uc77c",tags:[{label:"string",permalink:"/tags/string"},{label:"graphql",permalink:"/tags/graphql"},{label:"security",permalink:"/tags/security"},{label:"jwt",permalink:"/tags/jwt"}],readingTime:6.52,truncated:!0,authors:[{name:"Jake Son",title:"Backend Developer",url:"https://github.com/jbl428",imageURL:"https://avatars.githubusercontent.com/u/22140938?v=4",key:"jake"}],frontMatter:{title:"Kotlin + Spring GraphQL + Spring Security \uc0ac\uc6a9\ud558\uae30",authors:"jake",tags:["string","graphql","security","jwt"]},nextItem:{title:"Github Page \ub97c GraphQL \uc2a4\ud0a4\ub9c8 \uc11c\ubc84\ub85c \ub9cc\ub4e4\uae30",permalink:"/2022/05/18/graphql-server-by-github-page"}},u={authorsImageUrls:[void 0]},c=[{value:"\ucd08\uae30 \ud504\ub85c\uc81d\ud2b8 \uc138\ud305",id:"\ucd08\uae30-\ud504\ub85c\uc81d\ud2b8-\uc138\ud305",level:2},{value:"MongoDB \uc124\uc815",id:"mongodb-\uc124\uc815",level:2},{value:"Repository",id:"repository",level:2},{value:"Service",id:"service",level:2},{value:"Controller",id:"controller",level:2},{value:"Security",id:"security",level:2}],k={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring for GraphQL")," \ud504\ub85c\uc81d\ud2b8\uac00 GA \ub418\uc5b4 \uc0d8\ud50c \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uacfc\uc815\uc744 \uae30\uc220\ud558\ub824\uace0 \ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ub2e4\uc74c\uacfc \uac19\uc740 \uae30\uc220\uc744 \uc0ac\uc6a9\ud574\uc11c \uad6c\ud604\ud558\uc600\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org"},"Kotlin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot"},"Spring Boot (WebFlux)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-security"},"Spring Security")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-data-mongodb"},"Spring Data MongoDB (Reactive)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gradle.org"},"Gradle"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc0d8\ud50c \ud504\ub85c\uc81d\ud2b8 \ucf54\ub4dc\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jbl428/study-note/tree/master/kotlin/spring-graphql"},"github")," \uc5d0\uc11c \ubcfc \uc218 \uc788\ub2e4.")),(0,o.kt)("h2",{id:"\ucd08\uae30-\ud504\ub85c\uc81d\ud2b8-\uc138\ud305"},"\ucd08\uae30 \ud504\ub85c\uc81d\ud2b8 \uc138\ud305"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://start.spring.io"},"Spring Initializr")," \uc5d0 \uc811\uc18d\ud574\uc11c \ucd08\uae30 \uc2a4\ud504\ub9c1 \ud504\ub85c\uc81d\ud2b8 \uc138\ud305\uc744 \uc2dc\uc791\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Gradle Project")," \ub97c \uc120\ud0dd\ud558\uace0 Language \ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Kotlin")," \uc744 \uc120\ud0dd\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc758\uc874\uc131\uc740 \uc544\ub798 \ud654\uba74\uc5d0 \ubcf4\uc774\ub294 \uac83\uc744 \uc120\ud0dd\ud558\uba74 \ub41c\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"spring-initializr",src:n(3184).Z,width:"1482",height:"986"})),(0,o.kt)("h2",{id:"mongodb-\uc124\uc815"},"MongoDB \uc124\uc815"),(0,o.kt)("p",null,"\ubcf4\ud1b5 \uc2a4\ud504\ub9c1 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-data-jpa"},"Spring Data JPA")," \ub97c \ud65c\uc6a9\ud558\ub294 \uc608\uc81c\uac00 \ub9ce\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ud558\uc9c0\ub9cc \ucf54\ud2c0\ub9b0\uc5d0\uc11c\ub294 \uc5d4\ud2f0\ud2f0 \uc120\uc5b8\uc2dc ",(0,o.kt)("inlineCode",{parentName:"p"},"data class")," \ub97c \uc0ac\uc6a9\ud558\uc9c0 \ubabb\ud558\uace0 \ud544\ub4dc\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," \ub85c \uc120\uc5b8\ud574\uc57c \ud558\ub294 \ub4f1 \uc5ec\ub7ec \ubb38\uc81c\uac00 \uc788\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uadf8\ub798\uc11c \uc774\ubc88\uc5d0\ub294 \ucf54\ud2c0\ub9b0\uc744 \uc798 \uc9c0\uc6d0\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Data MongoDB")," \ub97c \uc0ac\uc6a9\ud558\uba70 reactive \uae30\ubc18\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\ub824\uace0 \ud55c\ub2e4."),(0,o.kt)("p",null,"\uba3c\uc800 docker-compose.yml \ud30c\uc77c\uc744 \uc0dd\uc131\ud574 \uc544\ub798\uc640 \uac19\uc740 \ub0b4\uc6a9\uc744 \ub123\uc5b4\uc900\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'services:\n  mongo:\n    image: mongo:5.0.6\n    restart: always\n    ports:\n      - "27017:27017"\n    environment:\n      MONGO_INITDB_DATABASE: test\n      MONGO_INITDB_ROOT_USERNAME: test\n      MONGO_INITDB_ROOT_PASSWORD: test\n')),(0,o.kt)("p",null,"\uc774\uc81c ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up")," \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uba74 27017 \ud3ec\ud2b8\uc5d0 MongoDB \uc11c\ubc84\uac00 \uc2e4\ud589\ub41c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ud504\ub85c\uc81d\ud2b8 \ud658\uacbd\ubcc0\uc218 \ud30c\uc77c\uc744 \ud1b5\ud574 \ub514\ube44 \uc811\uc18d\uc815\ubcf4\ub97c \ub123\uc5b4\uc900\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="src/main/resources/application.yml"',title:'"src/main/resources/application.yml"'},"spring:\n  data:\n    mongodb:\n      host: localhost\n      port: 27017\n      database: test\n      username: test\n      password: test\n      authentication-database: admin\n")),(0,o.kt)("p",null,"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc5d0\uc11c\ub294 \uc2e4\uc81c \ud574\ub2f9 \uc11c\ubc84\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Embedded MongoDB")," \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc544\ub798\uc640 \uac19\uc774 version \uc5d0 \uc6d0\ud558\ub294 \ubc84\uc804\uc744 \ub123\uc5b4\uc8fc\uba74 \ud574\ub2f9\ubc84\uc804\uc73c\ub85c \ub3d9\uc791\ud558\ub294 \ub0b4\uc7a5 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\uc704\uc640 \uac19\uc740 \ub0b4\uc7a5 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub85c \ud558\ub294 \ud14c\uc2a4\ud2b8\uac00 \uc2e4\uc81c \uc11c\ubc84\uc5d0\uc11c \ud558\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc644\uc804\ud788 \ub300\uccb4\ud560 \uc218 \uc5c6\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","Embedded \uc5d0\uc11c \ud2b9\uc815 \uae30\ub2a5\uc774 \uc81c\ub300\ub85c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0\ub098 \ub354 \uc5c4\uaca9\ud55c \ud14c\uc2a4\ud2b8\ub97c \uc6d0\ud55c\ub2e4\uba74 \uc2e4\uc81c \ub514\ube44\uc11c\ubc84\ub85c \ud14c\uc2a4\ud2b8 \ud574\uc57c\ud55c\ub2e4."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="src/test/resources/application.yml"',title:'"src/test/resources/application.yml"'},"spring:\n  mongodb:\n    embedded:\n      version: '5.0.6'\n")),(0,o.kt)("h2",{id:"repository"},"Repository"),(0,o.kt)("p",null,"\ub2e8\uc21c\ud55c \uc608\uc81c\ub97c \uc704\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," document \ub97c \uc758\ubbf8\ud558\ub294 \ud074\ub798\uc2a4\ub97c \uc0dd\uc131\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","JPA \uc640 \ub2ec\ub9ac ",(0,o.kt)("inlineCode",{parentName:"p"},"data class")," \ub85c \uc120\uc5b8\ud560 \uc218 \uc788\uc73c\uba70 \ud544\uc694\ud55c annotation \uac1c\uc218\ub3c4 \uc801\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kt",metastring:'title="Book.kt"',title:'"Book.kt"'},"data class Book(\n    val title: String,\n    val author: String,\n    val isbn: String,\n    val publishers: List<Publisher> = emptyList(),\n    val info: Info? = null\n) {\n    // \uc774 \ud544\ub4dc\ub294 _id \ub97c \uc758\ubbf8\ud558\uba70 insert \uc2dc \uc790\ub3d9 \ud560\ub2f9\ub418\ubbc0\ub85c lateinit \uc73c\ub85c \uc120\uc5b8\ud588\ub2e4\n    @Id\n    lateinit var id: String\n}\n\ndata class Publisher(\n    val name: String,\n    val email: String,\n)\n\ndata class Info(\n    val preface: String,\n)\n")),(0,o.kt)("p",null,"\uae30\ubcf8\uc801\uc778 CRUD \ub97c \ub2f4\ub2f9\ud560 repository \ub97c \uc0dd\uc131\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kt",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"import org.springframework.data.mongodb.repository.ReactiveMongoRepository\n\ninterface BookRepository : ReactiveMongoRepository<Book, String>\n")),(0,o.kt)("h2",{id:"service"},"Service"),(0,o.kt)("p",null,"\uc774\ubc88 \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," \ub97c \uc0dd\uc131\ud558\uace0 \uc870\ud68c\ud558\ub294 \ub85c\uc9c1\ub9cc \uad6c\ud604\ud558\ub824\uace0 \ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"BookService")," \ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"BookRepository")," \ub97c \uc774\uc6a9\ud558\uc5ec ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," \ub97c \uc0dd\uc131\ud558\uace0 \uc870\ud68c\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","Kotlin \uc758 suspend \ud568\uc218\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"kotlinx-coroutines-reactor")," \ud328\ud0a4\uc9c0\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud655\uc7a5\ud568\uc218\ub97c \ud65c\uc6a9\ud558\uba74 \uae30\uc874 reactive \uae30\ubc18\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Mono"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Flux")," \uc0ac\uc6a9\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kt",metastring:'title="BookService.kt"',title:'"BookService.kt"'},"@Service\nclass BookService(private val bookRepository: BookRepository) {\n\n    // java \ub97c \uc0ac\uc6a9\ud588\ub2e4\uba74 \uc774 \uba54\uc18c\ub4dc\ub294 Flux<Book> \uc744 \ubc18\ud658\ud560 \uac83\uc774\ub2e4\n    suspend fun find(): List<Book> =\n        bookRepository\n            .findAll()     // reactive \uae30\ubc18\uc5d0\uc11c\ub294 Flux \ub97c \ubc18\ud658\ud55c\ub2e4\n            .collectList() // Flux \ub97c Mono \ub85c \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \uba54\uc18c\ub4dc\n            .awaitSingle() // \uc774 \ud655\uc7a5\ud568\uc218 \ub355\ubd84\uc5d0 \ubc18\ud658\uac12\uc740 List<Book> \uc774 \ub420 \uc218 \uc788\ub2e4\n\n    // Book \uc744 \uc0dd\uc131\ud558\uace0 \ubc18\ud658\ud55c\ub2e4 id \ud544\ub4dc\ub294 \uc790\ub3d9\uc73c\ub85c \uc124\uc815\ub41c\ub2e4\n    suspend fun create(input: CreateBookInput): Book =\n        Book(\n            title = input.title,\n            author = input.author,\n            isbn = input.isbn,\n        ).run {\n            bookRepository.save(this)\n        }.awaitSingle()\n}\n")),(0,o.kt)("p",null,"\uc704 \uc11c\ube44\uc2a4 \ub85c\uc9c1\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"Embedded MongoDb")," \ub97c \ud65c\uc6a9\ud574 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud574\ubcf4\uc790.",(0,o.kt)("br",{parentName:"p"}),"\n","\ud14c\uc2a4\ud2b8 \ud504\ub808\uc784\uc6cc\ud06c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Junit")," \ub300\uc2e0 \ucf54\ud2c0\ub9b0 dsl \uc744 \ud65c\uc6a9\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest")," \ub97c \uc0ac\uc6a9\ud588\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","junit \uc5d0\uc11c\ub294 suspend \ud568\uc218\ub97c \ud14c\uc2a4\ud2b8\ud558\ub824\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"runBlocking")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \ub4f1 \ubc88\uac70\ub85c\uc6b4 \uc791\uc5c5\uc774 \ud544\uc694\ud55c\uc9c0\ub9cc kotest \ub294 test scope \uc790\uccb4\uac00 suspend \ud568\uc218\ub97c \uc9c0\uc6d0\ud558\uae30\uc5d0 \ub354 \uac04\uacb0\ud55c \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("p",null,"\uba3c\uc800 \ub2e4\uc74c \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kts",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'dependencies {\n    testImplementation("io.kotest:kotest-runner-junit5:5.3.0")\n    testImplementation("io.kotest.extensions:kotest-extensions-spring:1.1.1")\n}\n')),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 kotest \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc5ec\ub7ec spec \uc911 ",(0,o.kt)("inlineCode",{parentName:"p"},"FreeSpec")," \uc744 \ud65c\uc6a9\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc774\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kt",metastring:'title="BookServiceTest.kt"',title:'"BookServiceTest.kt"'},'@DataMongoTest\ninternal class BookServiceTest(\n    private val bookRepository: BookRepository,\n) : FreeSpec({\n    val bookService = BookService(bookRepository)\n\n    beforeSpec {\n        // \uac01 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\uac04\uc758 \ub3c5\ub9bd\uc131\uc744 \uc704\ud574 book \uceec\ub809\uc158\uc758 \ub370\uc774\ud130\ub97c \ubaa8\ub450 \uc0ad\uc81c\ud55c\ub2e4\n        // block \uc744 \uc0ac\uc6a9\ud574 \uc0ad\uc81c \uc791\uc5c5\uc774 \ub05d\ub0a0\ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9b0\ub2e4\n        // \ub9cc\uc57d awaitSingle \uc744 \uc0ac\uc6a9\ud558\uba74 \uc544\uc9c1 \uc0ad\uc81c\uac00 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\ub294\ub370\ub3c4 \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc8fc\uc758\n        bookRepository.deleteAll().block()\n    }\n\n    "find" {\n        // given\n        val book = Book(\n            title = "The Lord of the Rings",\n            author = "J.R.R. Tolkien",\n            isbn = "0-395-07477-1",\n        )\n        // awaitSingle \ud655\uc7a5\ud568\uc218\ub294 suspend \ud568\uc218\uc5d0\uc11c\ub9cc \ud638\ucd9c\ud560 \uc218 \uc788\ub2e4\n        bookRepository.save(book).awaitSingle()\n\n        // when\n        val foundBook = bookService.find()\n\n        // then\n        foundBook shouldBe listOf(book)\n    }\n\n    "create" {\n        // given\n        val input = CreateBookInput(\n            title = "The Lord of the Rings",\n            author = "J.R.R. Tolkien",\n            isbn = "0-395-07477-1",\n        )\n\n        // when\n        val result = bookService.create(input)\n\n        // then\n        assertSoftly(result) {\n            title shouldBe input.title\n            author shouldBe input.author\n            isbn shouldBe input.isbn\n        }\n    }\n})\n')),(0,o.kt)("h2",{id:"controller"},"Controller"),(0,o.kt)("p",null,"\uc791\uc131\uc911"),(0,o.kt)("h2",{id:"security"},"Security"),(0,o.kt)("p",null,"\uc791\uc131\uc911"))}m.isMDXComponent=!0},3184:function(e,t,n){t.Z=n.p+"assets/images/spring-initializr-c524e9698f8a57952f284b77c0271afe.png"}}]);