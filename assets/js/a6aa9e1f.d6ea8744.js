(window.webpackJsonp=window.webpackJsonp||[]).push([[23,8],{101:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(16),o=t(110),i=t(121),s=t(105),c=t(106);var m=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return n.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(s.a,{className:"pagination-nav__link",to:t},n.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.a.createElement(s.a,{className:"pagination-nav__link",to:r},n.a.createElement("div",{className:"pagination-nav__label"},n.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},d=t(115);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,s=Object(l.default)().siteConfig.title,c=a.blogDescription,g=a.blogTitle,p="/"===a.permalink?s:g;return n.a.createElement(o.a,{title:p,description:c,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--3"},n.a.createElement(d.a,{sidebar:r})),n.a.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return n.a.createElement(i.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.a.createElement(a,null))})),n.a.createElement(m,{metadata:a})))))}},112:function(e,a,t){"use strict";var r=t(3),n=t(7),l=t(0),o=t.n(l),i=t(104),s=t(105),c=t(103),m=t(107),d=t(56),g=t.n(d),p=t(109);function u(e){var a=e.to,t=e.href,l=e.label,i=e.prependBaseUrlToHref,c=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),d=Object(m.a)(a),g=Object(m.a)(t,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},t?{href:i?g:t}:{to:d},c),l)}var f=function(e){var a=e.sources,t=e.alt;return o.a.createElement(p.a,{className:"footer__logo",alt:t,sources:a})};a.a=function(){var e=Object(c.useThemeConfig)().footer,a=e||{},t=a.copyright,r=a.links,n=void 0===r?[]:r,l=a.logo,d=void 0===l?{}:l,p={light:Object(m.a)(d.src),dark:Object(m.a)(d.srcDark||d.src)};return e?o.a.createElement("footer",{className:Object(i.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},n&&n.length>0&&o.a.createElement("div",{className:"row footer__links"},n.map((function(e,a){return o.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?o.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(u,e))}))):null)}))),(d||t)&&o.a.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&o.a.createElement("div",{className:"margin-bottom--sm"},d.href?o.a.createElement(s.a,{href:d.href,className:g.a.footerLogoLink},o.a.createElement(f,{alt:d.alt,sources:p})):o.a.createElement(f,{alt:d.alt,sources:p})),t?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);