"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[682],{3957:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",a=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",c=n(184),i=function(){return(0,c.jsxs)("div",{className:"app__banner",children:[(0,c.jsx)("img",{src:r,alt:"Avengers"}),(0,c.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,c.jsx)("br",{}),"Stay tuned!"]}),(0,c.jsx)("img",{src:a,alt:"Avengers logo"})]})}},9613:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n.p+"static/media/error.42292aa12b6bc303ce99.gif",a=n(184);function c(){return(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error Gif"})}},1748:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(4270),a=n(2982),c=n(885),i=n(2791),s=n(1523),o=n(4304),u=n(9613),l=n(1145),f=n(3957),m=n(184),d=function(){var t=(0,i.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],d=(0,i.useState)(!1),p=(0,c.Z)(d,2),h=p[0],v=p[1],b=(0,i.useState)(0),g=(0,c.Z)(b,2),x=g[0],j=g[1],Z=(0,i.useState)(!1),y=(0,c.Z)(Z,2),_=y[0],w=y[1],k=(0,o.Z)(),N=k.loading,C=k.error,A=k.getMarvelData;(0,i.useEffect)((function(){S(x,!0)}),[]);var S=function(t,e){v(!e),A("comics",8,t).then(E)},E=function(t){var e=!1;t.length<8&&(e=!0),r((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(t))})),j((function(t){return t+8})),v(!1),w(e)},T=function(t){var e=t.map((function(t,e){var n=t.title,r=t.price,a=(t.url,t.thumbnail),c=t.id;return(0,m.jsx)("li",{className:"comics__item",children:(0,m.jsxs)(s.rU,{to:"/marvel_info/comics/".concat(c),children:[(0,m.jsx)("img",{src:a,alt:n,className:"comics__item-img"}),(0,m.jsx)("div",{className:"comics__item-name",children:n}),(0,m.jsx)("div",{className:"comics__item-price",children:r})]})},e)}));return(0,m.jsx)("ul",{className:"comics__grid",children:e})}(n),F=C?(0,m.jsx)(u.Z,{}):null,I=N&&!h?(0,m.jsx)(l.Z,{}):null;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f.Z,{}),(0,m.jsxs)("div",{className:"comics__list",children:[T,I,F,(0,m.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:_?"none":"block"},onClick:function(){return S(x,!1)},children:(0,m.jsx)("div",{className:"inner",children:"Load More"})})]})]})},p=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(r.q,{children:[(0,m.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,m.jsx)("title",{children:"Comics page"})]}),(0,m.jsx)(d,{})]})}},4304:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(4165),a=n(5861),c=n(885),i=n(2791),s=function(){var t="https://gateway.marvel.com:443/v1/public/",e="apikey=df45cf660f835fae11e3961d7b9575b8",n=function(){var t=(0,i.useState)(!1),e=(0,c.Z)(t,2),n=e[0],s=e[1],o=(0,i.useState)(null),u=(0,c.Z)(o,2),l=u[0],f=u[1],m=(0,i.useCallback)(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,c,i,o,u=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},s(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:c});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.state));case 10:return t.next=12,i.json();case 12:if(o=t.sent,s(!1),0!==o.data.results.length){t.next=16;break}throw new Error("No matches found");case 16:return t.abrupt("return",o);case 19:throw t.prev=19,t.t0=t.catch(4),s(!1),f(t.t0.message),t.t0;case 24:case"end":return t.stop()}}),t,null,[[4,19]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:n,error:l,request:m,clearError:(0,i.useCallback)((function(){f(null)}),[])}}(),s=n.loading,o=n.request,u=n.error,l=n.clearError,f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,c){var i,s,u=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=u.length>2&&void 0!==u[2]?u[2]:215,n.next=3,o("".concat(t).concat(a,"?limit=").concat(c,"&offset=").concat(i,"&").concat(e));case 3:if(s=n.sent,"characters"!==a){n.next=8;break}return n.next=7,s.data.results.map(p);case 7:case 10:return n.abrupt("return",n.sent);case 8:return n.next=10,s.data.results.map(h);case 11:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),m=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,c){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(t).concat(a,"/").concat(c,"?").concat(e));case 2:if(i=n.sent,"characters"!==a){n.next=5;break}return n.abrupt("return",p(i.data.results[0]));case 5:return n.abrupt("return",h(i.data.results[0]));case 6:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){var c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(t,"characters?name=").concat(a,"&").concat(e));case 2:return c=n.sent,n.abrupt("return",p(c.data.results[0]));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(t){var e=t.description;return e.length<=0&&(e="There is no information about this character"),e.length>150&&(e=e.slice(0,150)+"..."),{id:t.id,name:t.name,description:e,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},h=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",price:0===t.prices[0].price?"NOT AVAILABLE":t.prices[0].price+"$",language:t.textObjects.language||"en-us",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,url:t.urls[0].url}};return{loading:s,error:u,getMarvelData:f,getSingleMarvelData:m,checkAvailableImage:function(t){var e={objectFit:"fill"};return/image_not_available/gi.test(t)&&(e.objectFit="unset"),e},clearError:l,findCharByName:d}}},2982:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(907);var a=n(181);function c(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=682.aeabc0f5.chunk.js.map