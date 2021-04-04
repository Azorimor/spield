(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(107)),c={title:"Create a Document"},u={unversionedId:"docusaurus-tutorial/create-a-document",id:"docusaurus-tutorial/create-a-document",isDocsHomePage:!1,title:"Create a Document",description:"Documents are pages with a sidebar, a previous/next navigation and many other useful features.",source:"@site/docs/docusaurus-tutorial/create-a-document.md",slug:"/docusaurus-tutorial/create-a-document",permalink:"/spield/docs/docusaurus-tutorial/create-a-document",editUrl:"https://github.com/azorimor/docusaurus/edit/develop/site/docs/docusaurus-tutorial/create-a-document.md",version:"current",sidebar:"docs",previous:{title:"Create a Page",permalink:"/spield/docs/docusaurus-tutorial/create-a-page"},next:{title:"Create a Blog Post",permalink:"/spield/docs/docusaurus-tutorial/create-a-blog-post"}},i=[{value:"Create a Document",id:"create-a-document",children:[]},{value:"Add your document to the sidebar",id:"add-your-document-to-the-sidebar",children:[]}],l={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Documents are pages with a ",Object(o.b)("strong",{parentName:"p"},"sidebar"),", a ",Object(o.b)("strong",{parentName:"p"},"previous/next navigation")," and many other useful features."),Object(o.b)("h2",{id:"create-a-document"},"Create a Document"),Object(o.b)("p",null,"Create a markdown file at ",Object(o.b)("inlineCode",{parentName:"p"},"docs/my-doc.md"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"---\ntitle: Hello, World!\n---\n\n## Hello, World!\n\nThis is your first document in **Docusaurus**, Congratulations!\n")),Object(o.b)("p",null,"A new document is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/hello"),"."),Object(o.b)("h2",{id:"add-your-document-to-the-sidebar"},"Add your document to the sidebar"),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"hello")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Docusaurus Tutorial',\n-     items: ['getting-started', 'create-a-doc', ...],\n+     items: ['getting-started', 'create-a-doc', 'hello', ...],\n    },\n  ],\n};\n")))}s.isMDXComponent=!0},107:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?a.a.createElement(b,u(u({ref:t},l),{},{components:r})):a.a.createElement(b,u({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);