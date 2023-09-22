"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[867],{9613:function(e,n,r){r.d(n,{Z:function(){return c}});var a=r.p+"static/media/error.42292aa12b6bc303ce99.gif",t=r(184);function c(){return(0,t.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error Gif"})}},8371:function(e,n,r){r.r(n),r.d(n,{default:function(){return D}});var a=r(885),t=r(2791),c=r(4270),s=r(4304),i=r(1145),l=r(9613),o=r.p+"static/media/mjolnir.61f31e1809f12183a524.png",u=r(184),d=function(e){var n=e.char,r=(0,s.Z)().checkAvailableImage,a=n.name,t=n.description,c=n.homepage,i=n.wiki,l=n.thumbnail,o=r(l);return(0,u.jsxs)("div",{className:"randomchar__block",children:[(0,u.jsx)("img",{src:l,alt:"Random character",className:"randomchar__img",style:o}),(0,u.jsxs)("div",{className:"randomchar__info",children:[(0,u.jsx)("p",{className:"randomchar__name",children:a}),(0,u.jsx)("p",{className:"randomchar__descr",children:t}),(0,u.jsxs)("div",{className:"randomchar__btns",children:[(0,u.jsx)("a",{href:c,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:i,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=(0,t.useState)({}),n=(0,a.Z)(e,2),r=n[0],c=n[1],h=(0,s.Z)(),m=h.loading,f=h.error,x=h.getSingleMarvelData,p=h.clearError,v=function(e){c(e)},_=function(){var e=Math.floor(400*Math.random()+1011e3);p(),x("characters",e).then(v)};(0,t.useEffect)((function(){_()}),[]);var j=f?(0,u.jsx)(l.Z,{}):null,b=m?(0,u.jsx)(i.Z,{}):null,g=m||f?null:(0,u.jsx)(d,{char:r});return(0,u.jsxs)("div",{className:"randomchar",children:[j,b,g,(0,u.jsxs)("div",{className:"randomchar__static",children:[(0,u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,u.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,u.jsx)("button",{className:"button button__main",onClick:_,children:(0,u.jsx)("div",{className:"inner",children:"try it"})}),(0,u.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=r(1413),f=r(2982),x=r(6752),p=r(5660),v={transition:"opacity ".concat(500,"ms ease-in-out"),opacity:0},_={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},j=function(e){var n=e.onCharSelected,r=(0,t.useState)([]),c=(0,a.Z)(r,2),o=c[0],d=c[1],h=(0,t.useState)(!1),j=(0,a.Z)(h,2),b=j[0],g=j[1],N=(0,t.useState)(215),Z=(0,a.Z)(N,2),k=Z[0],y=Z[1],w=(0,t.useState)(!1),C=(0,a.Z)(w,2),E=C[0],S=C[1];(0,t.useEffect)((function(){D(k,!0)}),[]);var M=(0,s.Z)(),A=M.loading,F=M.error,I=M.getMarvelData,T=M.checkAvailableImage,D=function(e,n){g(!n),I("characters",9,e).then(q)},q=function(e){var n=!1;e.length<9&&(n=!0),d((function(n){return[].concat((0,f.Z)(n),(0,f.Z)(e))})),y((function(e){return e+9})),g(!1),S(n)},L=(0,t.useRef)([]),O=function(e){L.current.forEach((function(e){return e.classList.remove("char__item_selected")})),L.current[e].classList.add("char__item_selected"),L.current[e].focus()},R=function(e){var r=e.map((function(e,r){var a=e.name,t=e.thumbnail,c=e.id,s=T(t);return(0,u.jsx)(x.ZP,{timeout:500,mountOnEnter:!0,children:function(e){return(0,u.jsxs)("li",{ref:function(e){return L.current[r]=e},tabIndex:0,className:"char__item",onClick:function(){n(c),O(r)},onKeyPress:function(e){" "!==e.key&&"Enter"!==e.key||(n(c),O(r))},style:(0,m.Z)((0,m.Z)({},v),_[e]),children:[(0,u.jsx)("img",{src:t,alt:a,style:s}),(0,u.jsx)("div",{className:"char__name",children:a})]})}},c)}));return(0,u.jsx)("ul",{className:"char__grid",children:(0,u.jsx)(p.Z,{component:null,children:r})})}(o),B=F?(0,u.jsx)(l.Z,{}):null,P=A&&!b?(0,u.jsx)(i.Z,{}):null;return(0,u.jsxs)("div",{className:"char__list",children:[R,P,B,(0,u.jsx)("button",{className:"button button__main button__long",disabled:b,style:{display:E?"none":"block"},onClick:function(){return D(k,!1)},children:(0,u.jsx)("div",{className:"inner",children:"Load More"})})]})},b=r(1523),g=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,u.jsxs)("div",{className:"skeleton",children:[(0,u.jsxs)("div",{className:"pulse skeleton__header",children:[(0,u.jsx)("div",{className:"pulse skeleton__circle"}),(0,u.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,u.jsx)("div",{className:"pulse skeleton__block"}),(0,u.jsx)("div",{className:"pulse skeleton__block"}),(0,u.jsx)("div",{className:"pulse skeleton__block"})]})]})},N=function(e){var n=e.char,r=n.name,a=n.description,t=n.thumbnail,c=n.homepage,i=n.wiki,l=n.comics,o=(0,(0,s.Z)().checkAvailableImage)(t),d=l.map((function(e,n){var r=e.resourceURI.split("/"),a=r[r.length-1];if(!(n>9))return(0,u.jsx)("li",{className:"char__comics-item",children:(0,u.jsx)(b.rU,{to:"/comics/".concat(a),children:e.name})},n)}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"char__basics",children:[(0,u.jsx)("img",{src:t,alt:r,style:o}),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"char__info-name",children:r}),(0,u.jsxs)("div",{className:"char__btns",children:[(0,u.jsx)("a",{href:c,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:i,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,u.jsx)("div",{className:"char__descr",children:a}),(0,u.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,u.jsx)("ul",{className:"char__comics-list",children:0===d.length?"Comics not found":d})]})},Z=function(e){var n=e.charId,r=(0,t.useState)(null),c=(0,a.Z)(r,2),o=c[0],d=c[1],h=(0,s.Z)(),m=h.loading,f=h.error,x=h.getSingleMarvelData,p=h.clearError;(0,t.useEffect)((function(){v()}),[n]);var v=function(){n&&(p(),x("characters",n).then(d))},_=o||m||f?null:(0,u.jsx)(g,{}),j=f?(0,u.jsx)(l.Z,{}):null,b=m?(0,u.jsx)(i.Z,{}):null,Z=m||f||!o?null:(0,u.jsx)(N,{char:o});return(0,u.jsxs)("div",{className:"char__info",children:[_,j,Z,b]})},k=r(5705),y=r(8796),w=function(e){var n=e.char,r=e.loading,a=e.error,t=null!==n&!r?"There is! Visit ".concat(n.name," page?"):a?"The character was not found. Check the name and try again":null,c=null!==n?"find__succes":"find__error";return null===n?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:c,children:t})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:c,children:t}),(0,u.jsx)(C,{name:n.name})]})},C=function(e){var n=e.name;return(0,u.jsx)(b.rU,{to:"/marvel_info/characters/".concat(n),className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"To page"})})},E=function(){var e,n=(0,t.useState)(null),r=(0,a.Z)(n,2),c=r[0],i=r[1],l=(0,s.Z)(),o=l.findCharByName,d=l.loading,h=l.error,m=l.clearError;return e=!h&d?null:(0,u.jsx)(w,{char:c,loading:d,error:h}),(0,u.jsx)(k.J9,{initialValues:{name:""},validationSchema:y.Ry({name:y.Z_().min(3,"At least 3 symbols...").required("This field is required")}),onSubmit:function(e){return n=e.name,m(),i((function(e){return null})),void o(n).then((function(e){return i((function(n){return e}))})).catch((function(e){return i(null)}));var n},children:(0,u.jsx)(k.l0,{children:(0,u.jsxs)("div",{className:"find__box",children:[(0,u.jsx)("div",{className:"find__title",children:"Or find a character by name:"}),(0,u.jsxs)("div",{className:"find__inner-container",children:[(0,u.jsx)(k.gN,{name:"name",placeholder:"Enter name",className:"find__input"}),(0,u.jsx)("button",{type:"submit",className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"Find"})}),(0,u.jsx)(k.Bc,{name:"name",component:"div",className:"find__error"}),e]})]})})})},S=r(5671),M=r(3144),A=r(136),F=r(7277),I=function(e){(0,A.Z)(r,e);var n=(0,F.Z)(r);function r(){var e;(0,S.Z)(this,r);for(var a=arguments.length,t=new Array(a),c=0;c<a;c++)t[c]=arguments[c];return(e=n.call.apply(n,[this].concat(t))).state={error:!1},e}return(0,M.Z)(r,[{key:"componentDidCatch",value:function(e,n){console.log(e,n),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,u.jsx)(l.Z,{}):this.props.children}}]),r}(t.Component),T=r.p+"static/media/vision.067d4ae1936d64a577ce.png",D=function(){var e=(0,t.useState)(null),n=(0,a.Z)(e,2),r=n[0],s=n[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.q,{children:[(0,u.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,u.jsx)("title",{children:"Marvel information portal"})]}),(0,u.jsx)(I,{children:(0,u.jsx)(h,{})}),(0,u.jsxs)("div",{className:"char__content",children:[(0,u.jsx)(I,{children:(0,u.jsx)(j,{onCharSelected:function(e){s(e)}})}),(0,u.jsx)(I,{children:(0,u.jsxs)("div",{className:"char__section",children:[(0,u.jsx)(Z,{charId:r}),(0,u.jsx)(E,{})]})})]}),(0,u.jsx)("img",{className:"bg-decoration",src:T,alt:"vision"})]})}},4304:function(e,n,r){r.d(n,{Z:function(){return i}});var a=r(4165),t=r(5861),c=r(885),s=r(2791),i=function(){var e="https://gateway.marvel.com:443/v1/public/",n="apikey=df45cf660f835fae11e3961d7b9575b8",r=function(){var e=(0,s.useState)(!1),n=(0,c.Z)(e,2),r=n[0],i=n[1],l=(0,s.useState)(null),o=(0,c.Z)(l,2),u=o[0],d=o[1],h=(0,s.useCallback)(function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n){var r,t,c,s,l,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"GET",t=o.length>2&&void 0!==o[2]?o[2]:null,c=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},i(!0),e.prev=4,e.next=7,fetch(n,{method:r,body:t,headers:c});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(n,", status: ").concat(s.state));case 10:return e.next=12,s.json();case 12:if(l=e.sent,i(!1),0!==l.data.results.length){e.next=16;break}throw new Error("No matches found");case 16:return e.abrupt("return",l);case 19:throw e.prev=19,e.t0=e.catch(4),i(!1),d(e.t0.message),e.t0;case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{loading:r,error:u,request:h,clearError:(0,s.useCallback)((function(){d(null)}),[])}}(),i=r.loading,l=r.request,o=r.error,u=r.clearError,d=function(){var r=(0,t.Z)((0,a.Z)().mark((function r(t,c){var s,i,o=arguments;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=o.length>2&&void 0!==o[2]?o[2]:215,r.next=3,l("".concat(e).concat(t,"?limit=").concat(c,"&offset=").concat(s,"&").concat(n));case 3:if(i=r.sent,"characters"!==t){r.next=8;break}return r.next=7,i.data.results.map(f);case 7:case 10:return r.abrupt("return",r.sent);case 8:return r.next=10,i.data.results.map(x);case 11:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),h=function(){var r=(0,t.Z)((0,a.Z)().mark((function r(t,c){var s;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l("".concat(e).concat(t,"/").concat(c,"?").concat(n));case 2:if(s=r.sent,"characters"!==t){r.next=5;break}return r.abrupt("return",f(s.data.results[0]));case 5:return r.abrupt("return",x(s.data.results[0]));case 6:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),m=function(){var r=(0,t.Z)((0,a.Z)().mark((function r(t){var c;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l("".concat(e,"characters?name=").concat(t,"&").concat(n));case 2:return c=r.sent,r.abrupt("return",f(c.data.results[0]));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(e){var n=e.description;return n.length<=0&&(n="There is no information about this character"),n.length>150&&(n=n.slice(0,150)+"..."),{id:e.id,name:e.name,description:n,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},x=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",price:0===e.prices[0].price?"NOT AVAILABLE":e.prices[0].price+"$",language:e.textObjects.language||"en-us",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,url:e.urls[0].url}};return{loading:i,error:o,getMarvelData:d,getSingleMarvelData:h,checkAvailableImage:function(e){var n={objectFit:"fill"};return/image_not_available/gi.test(e)&&(n.objectFit="unset"),n},clearError:u,findCharByName:m}}}}]);
//# sourceMappingURL=867.8115db4a.chunk.js.map