"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3089],{7329:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(2263),i=a(4118),l=a(995),s=a(6299),o=a(833),c=a(5281),m=a(4739),u=a(6010);function g(e){var t=e.metadata,a=(0,r.Z)().siteConfig.title,i=t.blogDescription,l=t.blogTitle,s="/"===t.permalink?a:l;return n.createElement(n.Fragment,null,n.createElement(o.d,{title:s,description:i}),n.createElement(m.Z,{tag:"blog_posts_list"}))}function p(e){var t=e.metadata,a=e.items,r=e.sidebar;return n.createElement(i.Z,{sidebar:r},a.map((function(e){var t=e.content;return n.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s.Z,{metadata:t}))}function d(e){return n.createElement(o.FG,{className:(0,u.Z)(c.k.wrapper.blogPages,c.k.page.blogListPage)},n.createElement(g,e),n.createElement(p,e))}},6299:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(5999),i=a(1750);function l(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(i.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(i.Z,{permalink:l,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},995:function(e,t,a){var n=a(7294),r=a(1702),i=a(2949);t.Z=function(e){var t=(0,i.I)().isDarkTheme?"github-dark":"github-light",a=(0,n.useRef)(null);return(0,n.useEffect)((function(){if(e.isBlogPostPage){var n,r,i=a.current.querySelector("iframe.utterances-frame");i?(r={type:"set-theme",theme:t},i.contentWindow.postMessage(r,"https://utteranc.es")):((n=document.createElement("script")).src="https://utteranc.es/client.js",n.setAttribute("repo","jbl428/jbl428.github.io"),n.setAttribute("issue-term","pathname"),n.setAttribute("label","comment"),n.setAttribute("theme",t),n.crossOrigin="anonymous",n.async=!0,a.current.appendChild(n))}}),[t]),n.createElement(n.Fragment,null,n.createElement(r.Z,e),e.isBlogPostPage&&n.createElement("div",{ref:a}))}}}]);