(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{107:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,g=p["".concat(u,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(g,i(i({ref:t},l),{},{components:r})):o.a.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(107)),u={title:"Create a Blog Post"},i={unversionedId:"docusaurus-tutorial/create-a-blog-post",id:"docusaurus-tutorial/create-a-blog-post",isDocsHomePage:!1,title:"Create a Blog Post",description:"This page will help you on how to create blog posts in Docusaurus.",source:"@site/docs/docusaurus-tutorial/create-a-blog-post.md",slug:"/docusaurus-tutorial/create-a-blog-post",permalink:"/spield/docs/docusaurus-tutorial/create-a-blog-post",editUrl:"https://github.com/azorimor/docusaurus/edit/develop/site/docs/docusaurus-tutorial/create-a-blog-post.md",version:"current",sidebar:"docs",previous:{title:"Create a Document",permalink:"/spield/docs/docusaurus-tutorial/create-a-document"},next:{title:"Markdown Features",permalink:"/spield/docs/docusaurus-tutorial/markdown-features"}},c=[{value:"Create a Blog Post",id:"create-a-blog-post",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This page will help you on how to create blog posts in Docusaurus."),Object(a.b)("h2",{id:"create-a-blog-post"},"Create a Blog Post"),Object(a.b)("p",null,"Create a file at ",Object(a.b)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\ntitle: Greetings!\nauthor: Steven Hansel\nauthor_title: Docusaurus Contributor\nauthor_url: https://github.com/ShinteiMai\nauthor_image_url: https://github.com/ShinteiMai.png\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),Object(a.b)("p",null,"A new blog post is now available at ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3000/blog/greetings"),"."))}s.isMDXComponent=!0}}]);