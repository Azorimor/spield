(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{115:function(e,a,t){"use strict";var r=t(3),l=t(7),n=t(0),s=t.n(n),m=t(106),c=t(109),o=t(108),i=t(111),u=t(56),d=t.n(u),g=t(112);function h(e){var a=e.to,t=e.href,n=e.label,m=e.prependBaseUrlToHref,o=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(i.a)(a),d=Object(i.a)(t,{forcePrependBaseUrl:!0});return s.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},t?{href:m?d:t}:{to:u},o),n)}var p=function(e){var a=e.sources,t=e.alt;return s.a.createElement(g.a,{className:"footer__logo",alt:t,sources:a})};a.a=function(){var e=Object(o.useThemeConfig)().footer,a=e||{},t=a.copyright,r=a.links,l=void 0===r?[]:r,n=a.logo,u=void 0===n?{}:n,g={light:Object(i.a)(u.src),dark:Object(i.a)(u.srcDark||u.src)};return e?s.a.createElement("footer",{className:Object(m.a)("footer",{"footer--dark":"dark"===e.style})},s.a.createElement("div",{className:"container"},l&&l.length>0&&s.a.createElement("div",{className:"row footer__links"},l.map((function(e,a){return s.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?s.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?s.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?s.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):s.a.createElement("li",{key:e.href||e.to,className:"footer__item"},s.a.createElement(h,e))}))):null)}))),(u||t)&&s.a.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&s.a.createElement("div",{className:"margin-bottom--sm"},u.href?s.a.createElement(c.a,{href:u.href,className:d.a.footerLogoLink},s.a.createElement(p,{alt:u.alt,sources:g})):s.a.createElement(p,{alt:u.alt,sources:g})),t?s.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},116:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(0),l=t.n(r),n=t(106),s=t(109),m=t(57),c=t.n(m);function o(e){var a=e.sidebar;return 0===a.items.length?null:l.a.createElement("div",{className:Object(n.a)(c.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:c.a.sidebarItemTitle},a.title),l.a.createElement("ul",{className:c.a.sidebarItemList},a.items.map((function(e){return l.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},l.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))}))))}},119:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(106),s=t(107),m=t(110),c=t(109),o=t(120),i=t(118),u=t(59),d=t.n(u),g=t(108);a.a=function(e){var a,t,r=(a=Object(g.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(m.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),u=e.children,h=e.frontMatter,p=e.metadata,E=e.truncated,f=e.isBlogPostPage,b=void 0!==f&&f,v=p.date,N=p.formattedDate,_=p.permalink,k=p.tags,T=p.readingTime,w=h.author,y=h.title,O=h.image,j=h.keywords,P=h.author_url||h.authorURL,L=h.author_title||h.authorTitle,M=h.author_image_url||h.authorImageURL;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{keywords:j,image:O}),l.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(t=b?"h1":"h2",l.a.createElement("header",null,l.a.createElement(t,{className:Object(n.a)("margin-bottom--sm",d.a.blogPostTitle)},b?y:l.a.createElement(c.a,{to:_},y)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:v,className:d.a.blogPostDate},N,T&&l.a.createElement(l.a.Fragment,null," \xb7 ",r(T)))),l.a.createElement("div",{className:"avatar margin-vert--md"},M&&l.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:P},l.a.createElement("img",{src:M,alt:w})),l.a.createElement("div",{className:"avatar__intro"},w&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement(c.a,{href:P},w)),l.a.createElement("small",{className:"avatar__subtitle"},L)))))),l.a.createElement("div",{className:"markdown"},l.a.createElement(s.a,{components:o.a},u)),(k.length>0||E)&&l.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement(m.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return l.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(c.a,{to:p.permalink,"aria-label":"Read more about "+y},l.a.createElement("strong",null,l.a.createElement(m.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},86:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(113),s=t(119),m=t(109),c=t(116),o=t(110),i=t(108);function u(e){var a,t=e.tagName,r=e.count,n=(a=Object(i.usePluralForm)().selectMessage,function(e){return a(e,Object(o.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return l.a.createElement(o.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(r),tagName:t}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,i=a.allTagsPath,d=a.name,g=a.count;return l.a.createElement(n.a,{title:'Posts tagged "'+d+'"',description:'Blog | Tagged "'+d+'"',wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(c.a,{sidebar:r})),l.a.createElement("main",{className:"col col--7"},l.a.createElement("h1",null,l.a.createElement(u,{count:g,tagName:d})),l.a.createElement(m.a,{href:i},l.a.createElement(o.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return l.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},l.a.createElement(a,null))})))))))}}}]);