"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3089],{2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),r=a(2263),i=a(8665),s=a(995),l=a(5999),o=a(1750);var m=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(o.Z,{permalink:r,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))},c=a(5773);var g=function(e){var t=e.metadata,a=e.items,l=e.sidebar,o=(0,r.Z)().siteConfig.title,g=t.blogDescription,p=t.blogTitle,u="/"===t.permalink?o:p;return n.createElement(i.Z,{title:u,description:g,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:l},a.map((function(e){var t=e.content;return n.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(m,{metadata:t}))}},1750:function(e,t,a){var n=a(7294),r=a(9960);t.Z=function(e){var t=e.permalink,a=e.title,i=e.subLabel;return n.createElement(r.Z,{className:"pagination-nav__link",to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},995:function(e,t,a){var n=a(7294),r=a(6048),i=a(5773);t.Z=function(e){var t=(0,i.If)().isDarkTheme?"github-dark":"github-light",a=(0,n.useRef)(null);return(0,n.useEffect)((function(){if(e.isBlogPostPage){var n,r,i=a.current.querySelector("iframe.utterances-frame");i?(r={type:"set-theme",theme:t},i.contentWindow.postMessage(r,"https://utteranc.es")):((n=document.createElement("script")).src="https://utteranc.es/client.js",n.setAttribute("repo","jbl428/jbl428.github.io"),n.setAttribute("issue-term","pathname"),n.setAttribute("label","comment"),n.setAttribute("theme",t),n.crossOrigin="anonymous",n.async=!0,a.current.appendChild(n))}}),[t]),n.createElement(n.Fragment,null,n.createElement(r.Z,e),e.isBlogPostPage&&n.createElement("div",{ref:a}))}}}]);