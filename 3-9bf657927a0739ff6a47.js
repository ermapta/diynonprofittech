(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(e,t,a){"use strict";a.d(t,"b",function(){return g});var n=a(0),r=a.n(n),i=a(10),s=a.n(i),o=a(58),l=a.n(o);a.d(t,"a",function(){return l.a});a(185);var c=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,s=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,s&&i(s),!s&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var g=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||i,staticQueryData:e})})};g.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},182:function(e,t){e.exports={siteUrl:"https://gatsby.ghost.org",postsPerPage:12,siteTitleMeta:"Ghost Gatsby Starter",siteDescriptionMeta:"A starter template to build amazing static websites with Ghost and Gatsby",shareImageWidth:1e3,shareImageHeight:523,shortTitle:"Ghost",siteIcon:"favicon.png",backgroundColor:"#e9e9e9",themeColor:"#15171A"}},184:function(e,t,a){"use strict";a(21),a(190),a(15);var n=a(191),r=a(0),i=a.n(r),s=a(10),o=a.n(s),l=a(183),c=a.n(l),m=a(181),g=a(195),p=a.n(g),u=a(182),d=a.n(u),h=(a(196),function(e){var t=e.data,a=e.children,n=e.bodyClass,r=e.isHome,s=t.allGhostSettings.edges[0].node,o=s.twitter?"https://twitter.com/"+s.twitter.replace(/^@/,""):null,l=s.facebook?"https://www.facebook.com/"+s.facebook.replace(/^\//,""):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("html",{lang:s.lang}),i.a.createElement("style",{type:"text/css"},""+s.codeinjection_styles),i.a.createElement("body",{className:n})),i.a.createElement("div",{className:"viewport"},i.a.createElement("div",{className:"viewport-top"},i.a.createElement("header",{className:"site-head"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-mast"},i.a.createElement("div",{className:"site-mast-left"},i.a.createElement(m.a,{to:"/"},s.logo?i.a.createElement("img",{className:"site-logo",src:s.logo,alt:s.title}):i.a.createElement(p.a,{fixed:t.file.childImageSharp.fixed,alt:s.title}))),i.a.createElement("div",{className:"site-mast-right"},s.twitter&&i.a.createElement("a",{href:o,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/twitter.svg",alt:"Twitter"})),s.facebook&&i.a.createElement("a",{href:l,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/facebook.svg",alt:"Facebook"})),i.a.createElement("a",{className:"site-nav-item",href:"https://feedly.com/i/subscription/feed/"+d.a.siteUrl+"/rss/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/rss.svg",alt:"RSS Feed"})))),r?i.a.createElement("div",{className:"site-banner"},i.a.createElement("h1",{className:"site-banner-title"},s.title),i.a.createElement("p",{className:"site-banner-desc"},s.description)):null,i.a.createElement("nav",{className:"site-nav"},i.a.createElement("div",{className:"site-nav-left"},i.a.createElement(R,{data:s.navigation,navClass:"site-nav-item"})),i.a.createElement("div",{className:"site-nav-right"},i.a.createElement(m.a,{className:"site-nav-button",to:"/about"},"About"))))),i.a.createElement("main",{className:"site-main"},a)),i.a.createElement("div",{className:"viewport-bottom"},i.a.createElement("footer",{className:"site-foot"},i.a.createElement("div",{className:"site-foot-nav container"},i.a.createElement("div",{className:"site-foot-nav-left"},i.a.createElement(m.a,{to:"/"},s.title)," © 2019 — Published with ",i.a.createElement("a",{className:"site-foot-nav-item",href:"https://ghost.org",target:"_blank",rel:"noopener noreferrer"},"Ghost")),i.a.createElement("div",{className:"site-foot-nav-right"},i.a.createElement(R,{data:s.navigation,navClass:"site-foot-nav-item"})))))))});h.propTypes={children:o.a.node.isRequired,bodyClass:o.a.string,isHome:o.a.bool,data:o.a.shape({allGhostSettings:o.a.object.isRequired}).isRequired};var f=function(e){return i.a.createElement(m.b,{query:"2417764204",render:function(t){return i.a.createElement(h,Object.assign({data:t},e))},data:n})},E=(a(34),a(197)),b=a(186),v=function(e){var t=e.post,a="/"+t.slug+"/",n=Object(b.readingTime)(t);return i.a.createElement(m.a,{to:a,className:"post-card"},i.a.createElement("header",{className:"post-card-header"},t.feature_image&&i.a.createElement("div",{className:"post-card-image",style:{backgroundImage:"url("+t.feature_image+")"}}),t.tags&&i.a.createElement("div",{className:"post-card-tags"}," ",i.a.createElement(E.Tags,{post:t,visibility:"public",autolink:!1})),t.featured&&i.a.createElement("span",null,"Featured"),i.a.createElement("h2",{className:"post-card-title"},t.title)),i.a.createElement("section",{className:"post-card-excerpt"},t.excerpt),i.a.createElement("footer",{className:"post-card-footer"},i.a.createElement("div",{className:"post-card-footer-left"},i.a.createElement("div",{className:"post-card-avatar"},t.primary_author.profile_image?i.a.createElement("img",{className:"author-profile-image",src:t.primary_author.profile_image,alt:t.primary_author.name}):i.a.createElement("img",{className:"default-avatar",src:"/images/icons/avatar.svg",alt:t.primary_author.name})),i.a.createElement("span",null,t.primary_author.name)),i.a.createElement("div",{className:"post-card-footer-right"},i.a.createElement("div",null,n))))};v.propTypes={post:o.a.shape({title:o.a.string.isRequired,feature_image:o.a.string,featured:o.a.bool,tags:o.a.arrayOf(o.a.shape({name:o.a.string})),excerpt:o.a.string.isRequired,primary_author:o.a.shape({name:o.a.string.isRequired,profile_image:o.a.string}).isRequired}).isRequired};var y=v,w=function(e){var t=e.pageContext,a=t.previousPagePath,n=t.nextPagePath,r=t.humanPageNumber,s=t.numberOfPages;return i.a.createElement("nav",{className:"pagination",role:"navigation"},i.a.createElement("div",null,a&&i.a.createElement(m.a,{to:a,rel:"prev"},"Previous")),s>1&&i.a.createElement("div",{className:"pagination-location"},"Page ",r," of ",s),i.a.createElement("div",null,n&&i.a.createElement(m.a,{to:n,rel:"next"},"Next")))};w.propTypes={pageContext:o.a.object.isRequired};var _=w,A=(a(118),function(e){var t=e.data,a=e.navClass;return i.a.createElement(i.a.Fragment,null,t.map(function(e,t){return e.url.match(/^\s?http(s?)/gi)?i.a.createElement("a",{className:a,href:e.url,key:t,target:"_blank",rel:"noopener noreferrer"},e.label):i.a.createElement(m.a,{className:a,to:e.url,key:t},e.label)}))});A.defaultProps={navClass:"site-nav-item"},A.propTypes={data:o.a.arrayOf(o.a.shape({label:o.a.string.isRequired,url:o.a.string.isRequired}).isRequired).isRequired,navClass:o.a.string};var R=A;a.d(t,"a",function(){return f}),a.d(t,"d",function(){return y}),a.d(t,"c",function(){return _}),a.d(t,"b",function(){return R})},185:function(e,t,a){var n;e.exports=(n=a(192))&&n.default||n},188:function(e,t,a){"use strict";a(21);var n=a(211),r=a(0),i=a.n(r),s=a(10),o=a.n(s),l=a(181),c=a(193),m=a.n(c),g=a(182),p=a.n(g),u=(a(15),a(34),a(217)),d=a(183),h=a.n(d),f=a(187),E=a.n(f),b=function(e){var t=[];return t.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+e.twitter.replace(/^@/,"")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook.replace(/^\//,"")+"/":null),t=E.a.compact(t),{name:e.name||null,sameAsArray:t.length?'["'+E.a.join(t,'", "')+'"]':null,image:e.profile_image||null,facebookUrl:e.facebook?"https://www.facebook.com/"+e.facebook.replace(/^\//,"")+"/":null}};b.defaultProps={fetchAuthorData:!1},b.PropTypes={primaryAuthor:o.a.shape({name:o.a.string.isRequired,profile_image:o.a.string,website:o.a.string,twitter:o.a.string,facebook:o.a.string}).isRequired};var v=b,y=function(e){var t=e.image;return t?i.a.createElement(h.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:p.a.shareImageWidth}),i.a.createElement("meta",{property:"og:image:height",content:p.a.shareImageHeight})):null};y.propTypes={image:o.a.string};var w=y,_=a(186),A=function(e){var t=e.data,a=e.settings,n=e.canonical,r=t;a=a.allGhostSettings.edges[0].node;var s=v(r.primary_author),o=E.a.map(Object(_.tags)(r,{visibility:"public",fn:function(e){return e}}),"name"),l=o[0]||"",c=r.feature_image?r.feature_image:E.a.get(a,"cover_image",null),g=a.logo||p.a.siteIcon?m.a.resolve(p.a.siteUrl,a.logo||p.a.siteIcon):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||r.excerpt}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:r.og_title||r.meta_title||r.title}),i.a.createElement("meta",{property:"og:description",content:r.og_description||r.excerpt||r.meta_description}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{property:"article:published_time",content:r.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:r.updated_at}),o.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}),s.facebookUrl&&i.a.createElement("meta",{property:"article:author",content:s.facebookUrl}),i.a.createElement("meta",{name:"twitter:title",content:r.twitter_title||r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.twitter_description||r.excerpt||r.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:n}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:s.name}),l&&i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),l&&i.a.createElement("meta",{name:"twitter:data2",content:l}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+s.name+'",\n                            '+(s.image?s.sameAsArray?'"image": "'+s.image+'",':'"image": "'+s.image+'"':"")+"\n                            "+(s.sameAsArray?'"sameAs": '+s.sameAsArray:"")+"\n                        },\n                        "+(o.length?'"keywords": "'+E.a.join(o,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+n+'",\n                        "datePublished": "'+r.published_at+'",\n                        "dateModified": "'+r.updated_at+'",\n                        '+(c?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+c+'",\n                                "width": "'+p.a.shareImageWidth+'",\n                                "height": "'+p.a.shareImageHeight+'"\n                            },':"")+'\n                        "publisher": {\n                            "@type": "Organization",\n                            "name": "'+a.title+'",\n                            "logo": {\n                                "@type": "ImageObject",\n                                "url": "'+g+'",\n                                "width": 60,\n                                "height": 60\n                            }\n                        },\n                        "description": "'+(r.meta_description||r.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+p.a.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(w,{image:c}))};A.propTypes={data:o.a.shape({title:o.a.string.isRequired,published_at:o.a.string.isRequired,updated_at:o.a.string.isRequired,meta_title:o.a.string,meta_description:o.a.string,primary_author:o.a.object.isRequired,feature_image:o.a.string,tags:o.a.arrayOf(o.a.shape({name:o.a.string,slug:o.a.string,visibility:o.a.string})),primaryTag:o.a.shape({name:o.a.string}),og_title:o.a.string,og_description:o.a.string,twitter_title:o.a.string,twitter_description:o.a.string,excerpt:o.a.string.isRequired}).isRequired,settings:o.a.shape({allGhostSettings:o.a.object.isRequired}).isRequired,canonical:o.a.string.isRequired};var R=function(e){return i.a.createElement(l.b,{query:"1004981455",render:function(t){return i.a.createElement(A,Object.assign({settings:t},e))},data:u})},q=a(230),N=function(e){var t=e.data,a=e.settings,n=e.canonical,r=e.title,s=e.description,o=e.image,l=e.type;a=a.allGhostSettings.edges[0].node;var c=m.a.resolve(p.a.siteUrl,a.logo||p.a.siteIcon),g=o||t.feature_image||E.a.get(a,"cover_image",null);return g=g?m.a.resolve(p.a.siteUrl,g):null,s=s||t.meta_description||t.description||p.a.siteDescriptionMeta||a.description,r=(r||t.meta_title||t.name||t.title)+" - "+a.title,i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,null,i.a.createElement("title",null,r),i.a.createElement("meta",{name:"description",content:s}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:r}),i.a.createElement("meta",{property:"og:description",content:s}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{name:"twitter:title",content:r}),i.a.createElement("meta",{name:"twitter:description",content:s}),i.a.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "'+l+'",\n                        "url": "'+n+'",\n                        '+(g?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+g+'",\n                                "width": "'+p.a.shareImageWidth+'",\n                                "height": "'+p.a.shareImageHeight+'"\n                            },':"")+'\n                        "publisher": {\n                            "@type": "Organization",\n                            "name": "'+a.title+'",\n                            "logo": {\n                                "@type": "ImageObject",\n                                "url": "'+c+'",\n                                "width": 60,\n                                "height": 60\n                            }\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+p.a.siteUrl+'"\n                        },\n                        "description": "'+s+'"\n                    }\n                ')),i.a.createElement(w,{image:g}))};N.propTypes={data:o.a.shape({title:o.a.string,feature_image:o.a.string,description:o.a.string,bio:o.a.string,profile_image:o.a.string}).isRequired,settings:o.a.shape({allGhostSettings:o.a.object.isRequired}).isRequired,canonical:o.a.string.isRequired,title:o.a.string,description:o.a.string,image:o.a.string,type:o.a.oneOf(["WebSite","Series"]).isRequired};var j=function(e){return i.a.createElement(l.b,{query:"3093436507",render:function(t){return i.a.createElement(N,Object.assign({settings:t},e))},data:q})},S=a(231),k=function(e){var t=e.data,a=e.settings,n=e.canonical;a=a.allGhostSettings.edges[0].node;var r=v(t),s=r.image||E.a.get(a,"cover_image",null),o=t.name+" - "+a.title,l=t.bio||p.a.siteDescriptionMeta||a.description;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,null,i.a.createElement("title",null,o),i.a.createElement("meta",{name:"description",content:l}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"profile"}),i.a.createElement("meta",{property:"og:title",content:o}),i.a.createElement("meta",{property:"og:description",content:l}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{name:"twitter:title",content:o}),i.a.createElement("meta",{name:"twitter:description",content:l}),i.a.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Person",\n                        "name": "'+t.name+'",\n                        '+(r.sameAsArray?'"sameAs": '+r.sameAsArray+",":"")+'\n                        "url": "'+n+'",\n                        '+(s?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+s+'",\n                                "width": "'+p.a.shareImageWidth+'",\n                                "height": "'+p.a.shareImageHeight+'"\n                            },':"")+'\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+p.a.siteUrl+'"\n                        },\n                        "description": "'+l+'"\n                    }\n                ')),i.a.createElement(w,{image:s}))};k.propTypes={data:o.a.shape({name:o.a.string,bio:o.a.string,profile_image:o.a.string,website:o.a.string,twitter:o.a.string,facebook:o.a.string}).isRequired,settings:o.a.shape({allGhostSettings:o.a.object.isRequired}).isRequired,canonical:o.a.string.isRequired};var I=function(e){return i.a.createElement(l.b,{query:"4112685740",render:function(t){return i.a.createElement(k,Object.assign({settings:t},e))},data:S})},T=function(e){var t=e.data,a=e.settings,n=e.title,r=e.description,s=e.image,o=e.location,l=m.a.resolve(p.a.siteUrl,o.pathname),c=t.ghostPost,g=t.ghostTag,u=t.ghostAuthor,d=t.ghostPage;return a=a.allGhostSettings.edges[0].node,c?i.a.createElement(R,{data:c,canonical:l}):g?i.a.createElement(j,{data:g,canonical:l,type:"Series"}):u?i.a.createElement(I,{data:u,canonical:l}):d?i.a.createElement(j,{data:d,canonical:l,type:"WebSite"}):(n=n||p.a.siteTitleMeta||a.title,r=r||p.a.siteDescriptionMeta||a.description,s=(s=s||a.cover_image||null)?m.a.resolve(p.a.siteUrl,s):null,i.a.createElement(j,{data:{},canonical:l,title:n,description:r,image:s,type:"WebSite"}))};T.defaultProps={data:{}},T.propTypes={data:o.a.shape({ghostPost:o.a.object,ghostTag:o.a.object,ghostAuthor:o.a.object,ghostPage:o.a.object}).isRequired,settings:o.a.shape({allGhostSettings:o.a.object.isRequired}).isRequired,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired,title:o.a.string,description:o.a.string,image:o.a.string};var G=function(e){return i.a.createElement(l.b,{query:"2233248733",render:function(t){return i.a.createElement(T,Object.assign({settings:t},e))},data:n})};a.d(t,"a",function(){return G})},191:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"DIY Nonprofit Tech",description:"Snappy slogan here.",logo:"https://static.ghost.org/v1.0.0/images/ghost-logo.svg",icon:null,cover_image:"https://static.ghost.org/v1.0.0/images/blog-cover.jpg",facebook:null,twitter:null,lang:"en",timezone:"America/Los_Angeles",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"},{label:"Tag",url:"/tag/getting-started/"},{label:"Author",url:"/author/ghost/"},{label:"Help",url:"https://docs.ghost.org"}]}}]},file:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoElEQVQ4y61V6UpCQRj1dYLUSqP06r2WV8slC1fELW2RDHqPFqJFRYmw5RGCsCQtBSl6pLTTzHiviEV61R+HmWFmzpz5vjPfqPSC2Cb4nhBaKr1gpR1MBta2SmLGWMp4SRQv/iIcVZ28929CHW9l7bzF1oU8J/flNQMJ5YVz5mWoF81daDkLm1MbeDbXR/q/QrrBIDrgiyXhj6cQTGxj1Rti6nzRJDi7q0s6kJBu0hgFrIWiKL+84qn6hnrzA0fnOQgODx4rVQQSW0x1TyiGiyFndzI1phU3G0/pDTAS5ZRo6BhSzJB4iR4fDs+yOL7IE3VZnFzmcZorEhTI9YNsjSJC+0YA2asS8te3KJTuGHJkXLy5h9MfhpaERbFtaGLolekBGoMAzuZkV1ZkGxofero7GMFDuYLG+yeSmQOWiFqjiedaHd7oJrPP0EmhljASNeFUGvH0PiyudZhJYmK7GUR29kiSFNim19jTxBrTCybMmpY6Y9KnUGzs/qfX++wUP71JF4eRoOOlcHUKrDi5AsvqIS+2pG9gHLRIkSWt9esHk33LmVXII3sAAAAASUVORK5CYII=",width:30,height:30,src:"/static/1f5512e171759c8fa66fde174ad5e09e/5d6f9/ghost-icon.png",srcSet:"/static/1f5512e171759c8fa66fde174ad5e09e/5d6f9/ghost-icon.png 1x,\n/static/1f5512e171759c8fa66fde174ad5e09e/bbdf9/ghost-icon.png 1.5x,\n/static/1f5512e171759c8fa66fde174ad5e09e/43244/ghost-icon.png 2x"}}}}}},192:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),r=a.n(n),i=a(10),s=a.n(i),o=a(91),l=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},211:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"DIY Nonprofit Tech",description:"Snappy slogan here."}}]}}}},217:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"DIY Nonprofit Tech",description:"Snappy slogan here.",logo:"https://static.ghost.org/v1.0.0/images/ghost-logo.svg",icon:null,cover_image:"https://static.ghost.org/v1.0.0/images/blog-cover.jpg",facebook:null,twitter:null,lang:"en",timezone:"America/Los_Angeles",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"},{label:"Tag",url:"/tag/getting-started/"},{label:"Author",url:"/author/ghost/"},{label:"Help",url:"https://docs.ghost.org"}]}}]}}}},230:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"DIY Nonprofit Tech",description:"Snappy slogan here.",logo:"https://static.ghost.org/v1.0.0/images/ghost-logo.svg",icon:null,cover_image:"https://static.ghost.org/v1.0.0/images/blog-cover.jpg",facebook:null,twitter:null,lang:"en",timezone:"America/Los_Angeles",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"},{label:"Tag",url:"/tag/getting-started/"},{label:"Author",url:"/author/ghost/"},{label:"Help",url:"https://docs.ghost.org"}]}}]}}}},231:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"DIY Nonprofit Tech",description:"Snappy slogan here.",logo:"https://static.ghost.org/v1.0.0/images/ghost-logo.svg",icon:null,cover_image:"https://static.ghost.org/v1.0.0/images/blog-cover.jpg",facebook:null,twitter:null,lang:"en",timezone:"America/Los_Angeles",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"},{label:"Tag",url:"/tag/getting-started/"},{label:"Author",url:"/author/ghost/"},{label:"Help",url:"https://docs.ghost.org"}]}}]}}}}}]);
//# sourceMappingURL=3-9bf657927a0739ff6a47.js.map