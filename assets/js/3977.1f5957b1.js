(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3977],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9058:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(102),a=n(7294),l=n(6010),o=n(6287),i=n(7524),c=n(9960),s=n(5999),u="sidebar_re4s",m="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",p="sidebarItem__DBe",f="sidebarItemLink_mo7H",g="sidebarItemLinkActive_I1ZP";function v(e){var t=e.sidebar;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,l.Z)(u,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:p},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:g},e.title))})))))}var h=n(3102);function b(e){var t=e.sidebar;return a.createElement("ul",{className:"menu__list"},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function y(e){return a.createElement(h.Zo,{component:b,props:e})}function E(e){var t=e.sidebar,n=(0,i.i)();return null!=t&&t.items.length?"mobile"===n?a.createElement(y,{sidebar:t}):a.createElement(v,{sidebar:t}):null}var k=["sidebar","toc","children"];function N(e){var t=e.sidebar,n=e.toc,i=e.children,c=(0,r.Z)(e,k),s=t&&t.items.length>0;return a.createElement(o.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(E,{sidebar:t}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&a.createElement("div",{className:"col col--2"},n))))}},7477:function(e,t,n){"use strict";n.d(t,{Z:function(){return it}});var r=n(7294),a=n(6010),l=n(9460),o=n(4996);function i(e){var t,n=e.children,a=e.className,i=(0,l.C)(),c=i.frontMatter,s=i.assets,u=(0,o.C)().withBaseUrl,m=null!=(t=s.image)?t:c.image;return r.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&r.createElement("meta",{itemProp:"image",content:u(m,{absolute:!0})}),n)}var c=n(9960),s="title_f1Hy";function u(e){var t=e.className,n=(0,l.C)(),o=n.metadata,i=n.isBlogPostPage,u=o.permalink,m=o.title,d=i?"h1":"h2";return r.createElement(d,{className:(0,a.Z)(s,t),itemProp:"headline"},i?m:r.createElement(c.Z,{itemProp:"url",to:u},m))}var m=n(5999),d=n(8824),p="container_mt6G";function f(e){var t,n=e.readingTime,a=(t=(0,d.c)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,m.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))});return r.createElement(r.Fragment,null,a(n))}function g(e){var t=e.date,n=e.formattedDate;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function v(){return r.createElement(r.Fragment,null," \xb7 ")}function h(e){var t=e.className,n=(0,l.C)().metadata,o=n.date,i=n.formattedDate,c=n.readingTime;return r.createElement("div",{className:(0,a.Z)(p,"margin-vert--md",t)},r.createElement(g,{date:o,formattedDate:i}),void 0!==c&&r.createElement(r.Fragment,null,r.createElement(v,null),r.createElement(f,{readingTime:c})))}function b(e){return e.href?r.createElement(c.Z,e):r.createElement(r.Fragment,null,e.children)}function y(e){var t=e.author,n=e.className,l=t.name,o=t.title,i=t.url,c=t.imageURL,s=t.email,u=i||s&&"mailto:"+s||void 0;return r.createElement("div",{className:(0,a.Z)("avatar margin-bottom--sm",n)},c&&r.createElement(b,{href:u,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:c,alt:l})),l&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(b,{href:u,itemProp:"url"},r.createElement("span",{itemProp:"name"},l))),o&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}var E="authorCol_Hf19",k="imageOnlyAuthorRow_pa_O",N="imageOnlyAuthorCol_G86a";function C(e){var t=e.className,n=(0,l.C)(),o=n.metadata.authors,i=n.assets;if(0===o.length)return null;var c=o.every((function(e){return!e.name}));return r.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",c?k:"row",t)},o.map((function(e,t){var n;return r.createElement("div",{className:(0,a.Z)(!c&&"col col--6",c?N:E),key:t},r.createElement(y,{author:Object.assign({},e,{imageURL:null!=(n=i.authorsImageUrls[t])?n:e.imageURL})}))})))}function Z(){return r.createElement("header",null,r.createElement(u,null),r.createElement(h,null),r.createElement(C,null))}var _=n(8780),w=n(3905),T=n(3117),B=n(102),P=n(5742),L=["mdxType","originalType"];var j=n(2389),x=n(2949),O=n(6668);function S(){var e=(0,O.L)().prism,t=(0,x.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var I=n(5281),M=n(8900),A=n(7594),z=n.n(A),D=(0,M.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),R=(0,M.Z)(/\{([\d,-]+)\}/,{range:1}),H={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function F(e,t){var n=e.map((function(e){var n=H[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function V(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,l=t.metastring;if(l&&R.test(l)){var o=l.match(R).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+l+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var i=a[0].className,c=z()(o).filter((function(e){return e>0})).map((function(e){return[e-1,[i]]}));return{lineClassNames:Object.fromEntries(c),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return F(["js","jsBlock"],t);case"jsx":case"tsx":return F(["js","jsBlock","jsx"],t);case"html":return F(["js","jsBlock","html"],t);case"python":case"py":case"bash":return F(["bash"],t);case"markdown":case"md":return F(["html","jsx","bash"],t);default:return F(Object.keys(H),t)}}(r,a),u=n.split("\n"),m=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),g=0;g<u.length;){var v=u[g].match(s);if(v){var h=v.slice(1).find((function(e){return void 0!==e}));d[h]?m[d[h]].range+=g+",":p[h]?m[p[h]].start=g:f[h]&&(m[f[h]].range+=m[f[h]].start+"-"+(g-1)+","),u.splice(g,1)}else g+=1}n=u.join("\n");var b={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;z()(n).forEach((function(e){null!=b[e]||(b[e]=[]),b[e].push(t)}))})),{lineClassNames:b,code:n}}var W="codeBlockContainer_Ckt0",U=["as"];function q(e){var t=e.as,n=(0,B.Z)(e,U),l=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],l=t[r];l&&"string"==typeof a&&(n[l]=a)})),n}(S());return r.createElement(t,(0,T.Z)({},n,{style:l,className:(0,a.Z)(n.className,W,I.k.common.codeBlock)}))}var G={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Y(e){var t=e.children,n=e.className;return r.createElement(q,{as:"pre",tabIndex:0,className:(0,a.Z)(G.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:G.codeBlockLines},t))}var $=n(4700),Q={attributes:!0,characterData:!0,childList:!0,subtree:!0};function X(e,t){var n=(0,r.useState)(),a=n[0],l=n[1],o=(0,r.useCallback)((function(){var t;l(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,l]);(0,r.useEffect)((function(){o()}),[o]),function(e,t,n){void 0===n&&(n=Q);var a=(0,$.zX)(t),l=(0,$.Ql)(n);(0,r.useEffect)((function(){var t=new MutationObserver(a);return e&&t.observe(e,l),function(){return t.disconnect()}}),[e,a,l])}(a,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var J={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},K={Prism:n(7410).Z,theme:J};function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}var ne=/\r\n|\r|\n/,re=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},ae=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},le=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=te({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=te({},n,{backgroundColor:null}),a};function oe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var ie=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),ee(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?le(e.theme,e.language):void 0;return t.themeDict=n})),ee(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,l=te({},oe(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==a&&(l.style=void 0!==l.style?te({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),ee(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return l[n[0]];var o=r?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),ee(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,l=e.token,o=te({},oe(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?te({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),ee(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=r[o]++)<a[o];){var s=void 0,u=t[o],m=n[o][l];if("string"==typeof m?(u=o>0?u:["plain"],s=m):(u=ae(u,m.type),m.alias&&(u=ae(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(ne),p=d.length;i.push({types:u,content:d[0]});for(var f=1;f<p;f++)re(i),c.push(i=[]),i.push({types:u,content:d[f]})}else o++,t.push(u),n.push(s),r.push(0),a.push(s.length)}o--,t.pop(),n.pop(),r.pop(),a.pop()}return re(i),c}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),ce=ie,se="codeLine_lJS_",ue="codeLineNumber_Tfdd",me="codeLineContent_feaV";function de(e){var t=e.line,n=e.classNames,l=e.showLineNumbers,o=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var c=o({line:t,className:(0,a.Z)(n,l&&se)}),s=t.map((function(e,t){return r.createElement("span",(0,T.Z)({key:t},i({token:e,key:t})))}));return r.createElement("span",c,l?r.createElement(r.Fragment,null,r.createElement("span",{className:ue}),r.createElement("span",{className:me},s)):s,r.createElement("br",null))}var pe={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function fe(e){var t=e.code,n=e.className,l=(0,r.useState)(!1),o=l[0],i=l[1],c=(0,r.useRef)(void 0),s=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus()}(t),i(!0),c.current=window.setTimeout((function(){i(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),r.createElement("button",{type:"button","aria-label":o?(0,m.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,m.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,pe.copyButton,o&&pe.copyButtonCopied),onClick:s},r.createElement("span",{className:pe.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:pe.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:pe.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var ge="wordWrapButtonIcon_Bwma",ve="wordWrapButtonEnabled_EoeP";function he(e){var t=e.className,n=e.onClick,l=e.isEnabled,o=(0,m.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,l&&ve),"aria-label":o,title:o},r.createElement("svg",{className:ge,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function be(e){var t,n,l,o,i,c,s,u,m,d,p,f=e.children,g=e.className,v=void 0===g?"":g,h=e.metastring,b=e.title,y=e.showLineNumbers,E=e.language,k=(0,O.L)().prism,N=k.defaultLanguage,C=k.magicComments,Z=null!=(t=null!=E?E:null==(n=v.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:N,_=S(),w=(l=(0,r.useState)(!1),o=l[0],i=l[1],c=(0,r.useState)(!1),s=c[0],u=c[1],m=(0,r.useRef)(null),d=(0,r.useCallback)((function(){var e=m.current.querySelector("code");o?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),i((function(e){return!e}))}),[m,o]),p=(0,r.useCallback)((function(){var e=m.current,t=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");u(t)}),[m]),X(m,p),(0,r.useEffect)((function(){p()}),[o,p]),(0,r.useEffect)((function(){return window.addEventListener("resize",p,{passive:!0}),function(){window.removeEventListener("resize",p)}}),[p]),{codeBlockRef:m,isEnabled:o,isCodeScrollable:s,toggle:d}),B=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(D))?void 0:n.groups.title)?t:""}(h)||b,P=V(f,{metastring:h,language:Z,magicComments:C}),L=P.lineClassNames,j=P.code,x=null!=y?y:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(h);return r.createElement(q,{as:"div",className:(0,a.Z)(v,Z&&!v.includes("language-"+Z)&&"language-"+Z)},B&&r.createElement("div",{className:G.codeBlockTitle},B),r.createElement("div",{className:G.codeBlockContent},r.createElement(ce,(0,T.Z)({},K,{theme:_,code:j,language:null!=Z?Z:"text"}),(function(e){var t=e.className,n=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.createElement("pre",{tabIndex:0,ref:w.codeBlockRef,className:(0,a.Z)(t,G.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,a.Z)(G.codeBlockLines,x&&G.codeBlockLinesWithNumbering)},n.map((function(e,t){return r.createElement(de,{key:t,line:e,getLineProps:l,getTokenProps:o,classNames:L[t],showLineNumbers:x})}))))})),r.createElement("div",{className:G.buttonGroup},(w.isEnabled||w.isCodeScrollable)&&r.createElement(he,{className:G.codeButton,onClick:function(){return w.toggle()},isEnabled:w.isEnabled}),r.createElement(fe,{className:G.codeButton,code:j}))))}var ye=["children"];function Ee(e){var t=e.children,n=(0,B.Z)(e,ye),a=(0,j.Z)(),l=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof l?be:Y;return r.createElement(o,(0,T.Z)({key:String(a)},n),l)}var ke=n(6043),Ne="details_lb9f",Ce="isBrowser_bmU9",Ze="collapsibleContent_i85q",_e=["summary","children"];function we(e){return!!e&&("SUMMARY"===e.tagName||we(e.parentElement))}function Te(e,t){return!!e&&(e===t||Te(e.parentElement,t))}function Be(e){var t=e.summary,n=e.children,l=(0,B.Z)(e,_e),o=(0,j.Z)(),i=(0,r.useRef)(null),c=(0,ke.u)({initialState:!l.open}),s=c.collapsed,u=c.setCollapsed,m=(0,r.useState)(l.open),d=m[0],p=m[1];return r.createElement("details",(0,T.Z)({},l,{ref:i,open:d,"data-collapsed":s,className:(0,a.Z)(Ne,o&&Ce,l.className),onMouseDown:function(e){we(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;we(t)&&Te(t,i.current)&&(e.preventDefault(),s?(u(!1),p(!0)):u(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(ke.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){u(e),p(!e)}},r.createElement("div",{className:Ze},n)))}var Pe="details_b_Ee";function Le(e){var t=Object.assign({},e);return r.createElement(Be,(0,T.Z)({},t,{className:(0,a.Z)("alert alert--info",Pe,t.className)}))}var je="anchorWithStickyNavbar_LWe7",xe="anchorWithHideOnScrollNavbar_WYt5",Oe=["as","id"];function Se(e){var t=e.as,n=e.id,l=(0,B.Z)(e,Oe),o=(0,O.L)().navbar.hideOnScroll;return"h1"!==t&&n?r.createElement(t,(0,T.Z)({},l,{className:(0,a.Z)("anchor",o?xe:je),id:n}),l.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,m.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,T.Z)({},l,{id:void 0}))}function Ie(e){return r.createElement(Se,e)}var Me="containsTaskList_mC6p";var Ae="img_ev3q";var ze="admonition_LlT9",De="admonitionHeading_tbUL",Re="admonitionIcon_kALy",He="admonitionContent_S0QG";var Fe={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(m.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(m.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(m.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(m.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(m.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Ve={secondary:"note",important:"info",success:"tip",warning:"danger"};function We(e){var t,n=function(e){var t=r.Children.toArray(e),n=t.find((function(e){var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:a}}(e.children),a=n.mdxAdmonitionTitle,l=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:a,children:l})}var Ue={head:function(e){var t=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,a=(n.mdxType,n.originalType,(0,B.Z)(n,L));return r.createElement(e.props.originalType,a)}return e}(e):e}));return r.createElement(P.Z,e,t)},code:function(e){var t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((function(e){var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",e):r.createElement(Ee,e)},a:function(e){return r.createElement(c.Z,e)},pre:function(e){var t;return r.createElement(Ee,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(Le,(0,T.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,T.Z)({},e,{className:(t=e.className,(0,a.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Me))}));var t},img:function(e){return r.createElement("img",(0,T.Z)({loading:"lazy"},e,{className:(t=e.className,(0,a.Z)(t,Ae))}));var t},h1:function(e){return r.createElement(Ie,(0,T.Z)({as:"h1"},e))},h2:function(e){return r.createElement(Ie,(0,T.Z)({as:"h2"},e))},h3:function(e){return r.createElement(Ie,(0,T.Z)({as:"h3"},e))},h4:function(e){return r.createElement(Ie,(0,T.Z)({as:"h4"},e))},h5:function(e){return r.createElement(Ie,(0,T.Z)({as:"h5"},e))},h6:function(e){return r.createElement(Ie,(0,T.Z)({as:"h6"},e))},admonition:function(e){var t=We(e),n=t.children,l=t.type,o=t.title,i=t.icon,c=function(e){var t,n=null!=(t=Ve[e])?t:e;return Fe[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),Fe.info)}(l),s=null!=o?o:c.label,u=c.iconComponent,m=null!=i?i:r.createElement(u,null);return r.createElement("div",{className:(0,a.Z)(I.k.common.admonition,I.k.common.admonitionType(e.type),"alert","alert--"+c.infimaClassName,ze)},r.createElement("div",{className:De},r.createElement("span",{className:Re},m),s),r.createElement("div",{className:He},n))},mermaid:function(){return null}};function qe(e){var t=e.children;return r.createElement(w.Zo,{components:Ue},t)}function Ge(e){var t=e.children,n=e.className,o=(0,l.C)().isBlogPostPage;return r.createElement("div",{id:o?_.blogPostContainerID:void 0,className:(0,a.Z)("markdown",n),itemProp:"articleBody"},r.createElement(qe,null,t))}var Ye="iconEdit_Z9Sw",$e=["className"];function Qe(e){var t=e.className,n=(0,B.Z)(e,$e);return r.createElement("svg",(0,T.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(Ye,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function Xe(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:I.k.common.editThisPage},r.createElement(Qe,null),r.createElement(m.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var Je=n(3008),Ke="tags_jXut",et="tag_QGVx";function tt(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(m.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(Ke,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:et},r.createElement(Je.Z,{label:t,permalink:n}))}))))}var nt=["blogPostTitle"];function rt(){return r.createElement("b",null,r.createElement(m.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function at(e){var t=e.blogPostTitle,n=(0,B.Z)(e,nt);return r.createElement(c.Z,(0,T.Z)({"aria-label":(0,m.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),r.createElement(rt,null))}var lt="blogPostFooterDetailsFull_mRVl";function ot(){var e=(0,l.C)(),t=e.metadata,n=e.isBlogPostPage,o=t.tags,i=t.title,c=t.editUrl,s=t.hasTruncateMarker,u=!n&&s,m=o.length>0;return m||u||c?r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",n&&lt)},m&&r.createElement("div",{className:(0,a.Z)("col",{"col--9":u})},r.createElement(tt,{tags:o})),n&&c&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(Xe,{editUrl:c})),u&&r.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":m})},r.createElement(at,{blogPostTitle:i,to:t.permalink}))):null}function it(e){var t=e.children,n=e.className,o=(0,l.C)().isBlogPostPage?void 0:"margin-bottom--xl";return r.createElement(i,{className:(0,a.Z)(o,n)},r.createElement(Z,null),r.createElement(Ge,null,t),r.createElement(ot,null))}},2244:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l=n(9960);function o(e){var t=e.permalink,n=e.title,o=e.subLabel,i=e.isNext;return r.createElement(l.Z,{className:(0,a.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},n))}},3008:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),l=n(9960),o="tag_zVej",i="tagRegular_sFm0",c="tagWithCount_h2kH";function s(e){var t=e.permalink,n=e.label,s=e.count;return r.createElement(l.Z,{href:t,className:(0,a.Z)(o,s?c:i)},n,s&&r.createElement("span",null,s))}},9460:function(e,t,n){"use strict";n.d(t,{C:function(){return i},n:function(){return o}});var r=n(7294),a=n(4700),l=r.createContext(null);function o(e){var t=e.children,n=e.content,a=e.isBlogPostPage,o=function(e){var t=e.content,n=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n}}),[t,n])}({content:n,isBlogPostPage:void 0!==a&&a});return r.createElement(l.Provider,{value:o},t)}function i(){var e=(0,r.useContext)(l);if(null===e)throw new a.i6("BlogPostProvider");return e}},8824:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var r=n(7294),a=n(2263),l=["zero","one","two","few","many","other"];function o(e){return l.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,a.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:o(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),i}var t,n}),[e])}function s(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);