"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8610],{6299:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(5999),s=a(1750);function l(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.createElement(s.Z,{permalink:l,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(9960),s=a(8665),l=a(995),i=a(5999),o=a(742),c=a(6299),g=a(4739),m=a(6010);function u(e){var t,a=e.metadata,u=e.items,p=e.sidebar,d=e.listMetadata,h=a.allTagsPath,b=a.name,f=a.count,E=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),v=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:E(f),tagName:b});return n.createElement(o.FG,{className:(0,m.Z)(o.kM.wrapper.blogPages,o.kM.page.blogTagPostListPage)},n.createElement(o.d,{title:v}),n.createElement(g.Z,{tag:"blog_tags_posts"}),n.createElement(s.Z,{sidebar:p},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,v),n.createElement(r.Z,{href:h},n.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),u.map((function(e){var t=e.content;return n.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})),n.createElement(c.Z,{metadata:d})))}},995:function(e,t,a){var n=a(7294),r=a(1116),s=a(742);t.Z=function(e){var t=(0,s.If)().isDarkTheme?"github-dark":"github-light",a=(0,n.useRef)(null);return(0,n.useEffect)((function(){if(e.isBlogPostPage){var n,r,s=a.current.querySelector("iframe.utterances-frame");s?(r={type:"set-theme",theme:t},s.contentWindow.postMessage(r,"https://utteranc.es")):((n=document.createElement("script")).src="https://utteranc.es/client.js",n.setAttribute("repo","jbl428/jbl428.github.io"),n.setAttribute("issue-term","pathname"),n.setAttribute("label","comment"),n.setAttribute("theme",t),n.crossOrigin="anonymous",n.async=!0,a.current.appendChild(n))}}),[t]),n.createElement(n.Fragment,null,n.createElement(r.Z,e),e.isBlogPostPage&&n.createElement("div",{ref:a}))}}}]);