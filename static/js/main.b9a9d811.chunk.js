(this["webpackJsonpwa-react-2021-q4-capstone-project"]=this["webpackJsonpwa-react-2021-q4-capstone-project"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setInitialState",(function(){return W})),n.d(a,"setValues",(function(){return Z})),n.d(a,"setCurrentPage",(function(){return _})),n.d(a,"next",(function(){return V})),n.d(a,"prev",(function(){return z})),n.d(a,"first",(function(){return G})),n.d(a,"last",(function(){return Y})),n.d(a,"modifyFilter",(function(){return $})),n.d(a,"addQueryString",(function(){return ee})),n.d(a,"resetFilter",(function(){return te}));var r,c,i,s,o,u,l,d,j,g,p=n(1),f=n.n(p),b=n(22),O=n.n(b),h=(n(37),n(3)),m=(n(38),n(4)),A=n(5),x=A.a.div(r||(r=Object(m.a)(['\n  height: 100vh;\n  width: 100vw;\n\n  display: grid;\n  grid-template-rows: 1fr 5fr 1fr;\n  grid-template-columns: 6fr;\n\n  grid-template-areas:\n    "header"\n    "content"\n    "footer";\n\n  gap: 1em;\n']))),v=A.a.div(c||(c=Object(m.a)(["\n  grid-area: logo;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),P=A.a.header(i||(i=Object(m.a)(['\n  background-color: orange;\n  grid-area: header;\n  display:grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-areas:\n    "logo search shoppingcart";\n  gap: 1em;\n']))),y=A.a.div(s||(s=Object(m.a)(["\n  grid-area: search;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),w=A.a.div(o||(o=Object(m.a)(["\n  grid-area: shoppingcart;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),D=A.a.div(u||(u=Object(m.a)(["\n  background-color: gold;\n  grid-area: content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),C=A.a.div(l||(l=Object(m.a)(["\n  background-color: lavender;\n  grid-area: footer;\n  text-align: center;\n"]))),k=n(8),L=n(12),N=n.p+"static/media/left_arrow.10c703c6.svg",B=n.p+"static/media/right_arrow.b96fd818.svg",S=n(0),F=function(e){var t=e.className,n=e.moveSlide,a=e.direction;return Object(S.jsx)("button",{onClick:n,className:t,children:Object(S.jsx)("img",{src:"next"===a?B:N,alt:"rightArrow",style:{width:"25px",height:"25px",pointerEvents:"none"}})})},R=Object(A.a)(F)(d||(d=Object(m.a)(["\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background: #f1f1f1;\n    border: 1px solid rgba(34, 34, 34, 0.287);\n    cursor: pointer;\n    transform: translateY(-10%);\n    place-self: ","\n"])),(function(e){return"next"===e.direction?"center right":"center left"})),I=Object(A.a)((function(e){var t=e.className,n=e.key,a=e.url,r=e.index;return Object(S.jsx)("div",{className:t,children:Object(S.jsx)("img",{src:a,alt:"none"},n+r)},n)}))(j||(j=Object(m.a)(["\n    opacity: 1;\n    transition: opacity ease-in-out 0.4s; \n    opacity: ","    \n    }\n"])),(function(e){return e.slideIndex===e.index+1?"1; ":"0;"})),E=Object(A.a)((function(e){var t=e.className,n=e.data,a=n.parsedData,r=void 0===a?[]:a,c=n.isLoading,i=Object(p.useState)(1),s=Object(h.a)(i,2),o=s[0],u=s[1];return c?Object(S.jsx)("h1",{children:"Loading..."}):Object(S.jsxs)("div",{className:t,children:[r.map((function(e,t){var n=e.id,a=e.url;return Object(S.jsx)(I,{url:a,index:t,slideIndex:o},n)})),Object(S.jsx)(R,{moveSlide:function(){1!==o?u(o-1):1===o&&u(r.length)},direction:"prev"}),Object(S.jsx)(R,{moveSlide:function(){o!==r.length?u(o+1):o===r.length&&u(1)},direction:"next"}),Object(S.jsx)("div",{className:"container-dots",children:Array.from({length:r.length}).map((function(e,t){return Object(S.jsx)("div",{onClick:function(){return function(e){u(e)}(t+1)},className:o===t+1?"dot active":"dot"},t)}))})]})}))(g||(g=Object(m.a)(['\n    display: grid;\n    grid-template: "container" 1fr;\n    place-items: center;\n    place-content: center;\n    overflow: hidden;\n    max-height: clamp(450px, 50vh, 600px);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    \n    & > * {\n        grid-area: container;\n        max-width: 1000px;\n    }\n\n    img {\n        width: 100%;\n        height: auto;\n        aspect-ratio: 16 / 9;\n        object-fit: cover;\n    }\n\n    .container-dots {\n        place-self: end center;\n        transform: translateY(-250%);\n        display: flex;\n    }\n\n    .dot {\n        width: 20px;\n        height: 20px;\n        border-radius: 50%;\n        border: 3px solid #f1f1f1;\n        margin: 0 5px;\n        background: #f1f1f1;\n        cursor: pointer;\n      }\n      .dot.active {\n        background: rgb(32, 32, 32);\n      }\n    \n']))),K=n(7),J=n.n(K);J.a.propTypes={className:J.a.string,data:J.a.shape({parsedData:J.a.array,isLoading:J.a.bool})};var T,H,Q=function(e){var t=e.className,n=e.data,a=n.parsedData,r=void 0===a?[]:a,c=n.isLoading,i=Object(p.useState)(0),s=Object(h.a)(i,2),o=s[0],u=s[1],l=Object(p.useState)({transform:"translateX(0px)",transitionDuration:"0.5s"}),d=Object(h.a)(l,2),j=d[0],g=d[1];return Object(p.useEffect)((function(){g((function(){return{transform:"translateX(".concat(o,"px)"),transitionDuration:"0.5s"}}))}),[o]),c?Object(S.jsx)("h1",{children:"Loading..."}):Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)("div",{className:"track",style:j,children:r.map((function(e){var t=e.id,n=(e.name,e.url);return Object(S.jsx)("div",{id:t,className:"card-container",children:Object(S.jsx)(L.b,{to:"/products?category=".concat(t),children:Object(S.jsx)("img",{src:n,alt:"haha"})})},t)}))}),Object(S.jsx)(R,{moveSlide:function(){return u((function(e){return e-(o>-600?330:0)}))},direction:"prev"}),Object(S.jsx)(R,{moveSlide:function(){return u((function(e){return e+(o<600?330:0)}))},direction:"next"})]})},M=Object(A.a)(Q)(T||(T=Object(m.a)(['\n    display:grid;    \n    grid-template: "track" 1fr;\n    place-items: center;\n    place-content: center;\n    overflow: hidden;\n    max-height: clamp(450px, 30vh, 600px);\n\n    & > * {\n        grid-area: track;\n        max-width: 1000px;\n    }\n\n    .track {\n        display:grid;\n        grid-template-columns 1fr 1fr 1fr 1fr 1fr;\n        \n        gap: 0.5em;\n    }\n\n\n    .card-container {\n        justify-self: center;\n        align-self: center;\n    }\n    img {\n        width: 100%;\n        height: auto;\n        aspect-ratio: 16 / 9;\n        object-fit: cover;\n    }\n']))),q=Object(A.a)((function(e){var t=e.className,n=e.cardId,a=e.url,r=e.name,c=e.category,i=e.price;return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)(L.b,{to:"/product/".concat(n),children:Object(S.jsx)("img",{src:a,alt:"img"})}),Object(S.jsx)("span",{children:r}),Object(S.jsx)("span",{children:c}),Object(S.jsx)("span",{children:"$".concat(i)}),Object(S.jsx)("button",{children:"Add to cart"})]})}))(H||(H=Object(m.a)(["\n    display:flex;\n    flex-direction:column;\n    padding:0.5em;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n\n    img {\n        width: 100%;\n        height: auto;\n        aspect-ratio: 4 / 3;\n        object-fit: cover;\n    }\n"]))),X=n(9),U=n(13),W=function(){return function(e){e({type:"set_initial_state"})}},Z=function(e){return function(t){t({type:"set_values",payload:e})}},_=function(e){return function(t){t({type:"set_current_page",payload:e})}},V=function(){return function(e){e({type:"next"})}},z=function(){return function(e){e({type:"prev"})}},G=function(){return function(e){e({type:"first"})}},Y=function(){return function(e){e({type:"last"})}},$=function(e){return function(t){t({type:"modify_filter",payload:e})}},ee=function(e){return function(t){t({type:"add_querystring",payload:e})}},te=function(){return function(e){e({type:"reset_filter"})}},ne=function(e){var t=e.totalPages,n=Object(X.c)((function(e){return e.productList.currentPage})),r=Object(X.b)(),c=Object(U.b)(a,r),i=c.first,s=c.prev,o=c.next,u=c.last,l=c.setCurrentPage;return Object(S.jsxs)("div",{className:"grid-paginator",children:[Object(S.jsx)("button",{onClick:function(){return i()},children:"First"}),Object(S.jsx)("button",{onClick:function(){return s()},children:"Prev"}),function(e,t){for(var n=[],a=function(t){n.push(Object(S.jsx)("button",{style:e===t?{color:"red"}:{},onClick:function(){return l(t)},children:t},"number".concat(t,"}")))},r=1;r<=t;r++)a(r);return n}(n,t),Object(S.jsx)("button",{onClick:function(){return o()},children:"Next"}),Object(S.jsx)("button",{onClick:function(){return u()},children:"Last"})]})};J.a.propTypes={className:J.a.string,data:J.a.shape({totalPages:J.a.number,parsedData:J.a.array,isLoading:J.a.bool}),pagination:J.a.bool,setPageNumber:J.a.funct};var ae,re=function(e){var t=e.className,n=e.data,a=n.totalPages,r=n.parsedData,c=void 0===r?[]:r,i=n.isLoading,s=e.pagination;if(i)return Object(S.jsx)("h1",{children:"Loading..."});var o=Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"grid-container",children:c.map((function(e){var t=e.id,n=e.url,a=e.name,r=e.category,c=e.price;return Object(S.jsx)(q,{cardId:t,url:n,name:a,category:r,price:c},t)}))}),s&&a>1&&Object(S.jsx)(ne,{totalPages:a})]});return Object(S.jsx)("div",{className:t,children:c.length>0?o:Object(S.jsx)("p",{style:{textAlign:"center"},children:"Sorry! No elements."})})},ce=Object(A.a)(re)(ae||(ae=Object(m.a)(["\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n        \n    background-color: #ECC344;\n    padding: 2em;\n\n    .grid-container {\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n        gap: 2.5em;\n    }\n\n    .grid-container div {\n        background-color: white;\n        border: 2px solid black;\n        border-radius: 5px;\n    }\n\n    .grid-container span {\n        padding: 0.5em;\n    }"]))),ie=n(16),se=n.n(ie),oe=n(17),ue="https://wizeline-academy.cdn.prismic.io/api/v2",le={ref:null,isLoading:!0};function de(){var e=Object(p.useState)((function(){return le})),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(p.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(oe.a)(se.a.mark((function t(){var n,r,c,i,s,o;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(le),t.next=4,fetch(ue,{signal:e.signal});case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,c=void 0===(c=r.refs)?[]:c,i=Object(h.a)(c,1),s=i[0],o=(s=void 0===s?{}:s).ref,a({ref:o,isLoading:!1}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),a({ref:null,isLoading:!1}),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e.abort()}}),[]),n}function je(e,t){var n=e.queries,a=e.pageSize,r=void 0===a?1:a,c=e.page,i=void 0===c?"":c,s=de(),o=s.ref,u=s.isLoading,l=Object(p.useState)(i),d=Object(h.a)(l,2),j=d[0],g=d[1],f=Object(p.useState)((function(){return{page:1,totalPages:1,parsedData:[],isLoading:!0}})),b=Object(h.a)(f,2),O=b[0],m=b[1];return Object(p.useEffect)((function(){if(!o||u)return function(){};var e=new AbortController;function a(){return(a=Object(oe.a)(se.a.mark((function a(){var c,s,u,l,d,p;return se.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,m({page:1,totalPages:0,parsedData:[],isLoading:!0}),c=n.map((function(e){return"q=".concat(encodeURIComponent("[[".concat(e,"]]")))})).join("&"),a.next=5,fetch("".concat(ue,"/documents/search?ref=").concat(o,"&").concat(c,"&lang=en-us&pageSize=").concat(r).concat(i?"&page=".concat(j):""),{signal:e.signal});case 5:return s=a.sent,a.next=8,s.json();case 8:u=a.sent,l=function(e){return e.results.map(t)},d=l(u),p=u.total_pages,m({page:i,totalPages:p,parsedData:d,isLoading:!1}),g(j),a.next=21;break;case 16:a.prev=16,a.t0=a.catch(0),m({page:1,totalPages:1,parsedData:[],isLoading:!1}),g(1),console.error(a.t0);case 21:case"end":return a.stop()}}),a,null,[[0,16]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){e.abort()}}),[o,u,j]),[O,j,g]}var ge,pe=function(){var e=je({queries:['at(document.type, "category")'],pageSize:30},(function(e){var t=e.id,n=e.data;return{id:t,name:n.name,url:n.main_image.url}}));return[Object(h.a)(e,1)[0]]},fe=function(){var e=function(){var e=je({queries:['at(document.type, "product")','at(document.tags, ["Featured"])'],pageSize:16},(function(e){var t=e.id,n=e.data,a=n.name;return{id:t,url:n.mainimage.url,name:a,category:n.category.slug,price:n.price}}));return[Object(h.a)(e,1)[0]]}(),t=Object(h.a)(e,1)[0],n=function(){var e=je({queries:['at(document.type, "banner")'],pageSize:5},(function(e){return{id:e.id,url:e.data.main_image.url}}));return[Object(h.a)(e,1)[0]]}();return[t,Object(h.a)(n,1)[0]]},be=A.a.div(ge||(ge=Object(m.a)(["\n    display: grid;\n    justify-items:center;\n    gap: 2em;\n"]))),Oe=function(){var e=fe(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=pe(),c=Object(h.a)(r,1)[0];return Object(S.jsxs)(be,{children:[Object(S.jsx)(E,{data:a}),Object(S.jsx)(M,{data:c}),Object(S.jsx)(ce,{data:n})]})},he=f.a.createContext(),me=(n(51),function(e){var t=e.data,n=t.parsedData,r=void 0===n?[]:n,c=t.isLoading,i=e.title,s=Object(X.c)((function(e){return e.productList.filters})),o=Object(X.b)(),u=Object(U.b)(a,o),l=u.modifyFilter,d=u.resetFilter;return c?Object(S.jsx)("h1",{children:"Loading..."}):Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:i}),Object(S.jsx)("ul",{style:{listStyle:"none"},children:r.map((function(e){var t=e.id,n=e.name;return Object(S.jsx)("li",{className:"".concat(s.includes(t)?"enabled":"disabled"),onClick:function(){return l(t)},children:n},t)}))}),Object(S.jsx)("button",{onClick:function(){return d()},children:"Clear filters"})]})});var Ae=function(e){var t=e.pageSize,n=Object(X.c)((function(e){return e.productList.filters})),r=['at(document.type, "product")'];if(n.length>0){var c="any(my.product.category, [".concat(n.map((function(e){return'"'.concat(e,'"')})).join(","),"])");r.push(c)}var i=function(e){var t=e.queries,n=e.pageSize,r=e.mapFunction,c=Object(X.c)((function(e){return e.productList})),i=Object(U.b)(a,Object(X.b)()).setValues,s=de(),o=s.ref,u=s.isLoading,l=Object(p.useState)({parsedData:[],totalPages:1,isLoading:!0}),d=Object(h.a)(l,2),j=d[0],g=d[1];return Object(p.useEffect)((function(){if(!o||u)return function(){};var e=new AbortController;function a(){return(a=Object(oe.a)(se.a.mark((function a(){var s,u,l,d,j,p;return se.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=t.map((function(e){return"q=".concat(encodeURIComponent("[[".concat(e,"]]")))})).join("&"),a.next=4,fetch("".concat(ue,"/documents/search?ref=").concat(o,"&").concat(s,"&lang=en-us&pageSize=").concat(n,"&page=").concat(c.currentPage),{signal:e.signal});case 4:return u=a.sent,a.next=7,u.json();case 7:l=a.sent,d=function(e){return e.results.map(r)},j=d(l),p=l.total_pages,i({currentPage:c.currentPage,totalPages:p,filters:c.filters}),g({parsedData:j,totalPages:p,isLoading:!1}),a.next=19;break;case 15:a.prev=15,a.t0=a.catch(0),g({parsedData:[],totalPages:1,isLoading:!1}),console.error(a.t0);case 19:case"end":return a.stop()}}),a,null,[[0,15]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){e.abort()}}),[o,u,c.currentPage,c.filters]),[j]}({queries:r,pageSize:t,mapFunction:function(e){var t=e.id,n=e.data,a=n.name;return{id:t,url:n.mainimage.url,name:a,category:n.category.slug,price:n.price}}});return[Object(h.a)(i,1)[0]]};function xe(){var e=Object(k.g)().search;return Object(p.useMemo)((function(){return new URLSearchParams(e)}),[e])}var ve=function(e){var t=e.className,n=Object(U.b)(a,Object(X.b)()).addQueryString,r=xe(),c=r.get("category");c&&(n(c),r.delete("category"));var i=pe(),s=Object(h.a)(i,1)[0],o=Ae({pageSize:12}),u=Object(h.a)(o,1)[0],l={totalPages:u.totalPages,parsedData:u.parsedData,isLoading:u.isLoading};return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)(me,{data:s,title:"Categories"}),Object(S.jsx)(ce,{data:l,pagination:!0})]})},Pe=n(19),ye=n(2),we={currentPage:1,totalPages:1,filters:[]};function De(e,t){switch(t.type){case"set_initial_state":return we;case"set_values":return e.currentPage=t.payload.currentPage,e.totalPages=t.payload.totalPages,e.filters=t.payload.filters,e;case"set_current_page":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:t.currentPage});case"next":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:e.currentPage<e.totalPages?e.currentPage+1:e.currentPage});case"prev":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:e.currentPage>1?e.currentPage-1:e.currentPage});case"first":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:1});case"last":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:e.totalPages});case"modify_filter":return e.filters.includes(t.categoryId)?Object(ye.a)(Object(ye.a)({},e),{},{filters:e.filters.filter((function(e){return e!==t.categoryId}))}):Object(ye.a)(Object(ye.a)({},e),{},{filters:[].concat(Object(Pe.a)(e.filters),[t.categoryId])});case"add_querystring":return e.filters=[t.categoryId],e;case"add_filter":return Object(ye.a)(Object(ye.a)({},e),{},{filters:[].concat(Object(Pe.a)(e.filters),[t.payload])});case"remove_filter":return Object(ye.a)(Object(ye.a)({},e),{},{filters:e.filters.filter((function(e){return e!==t.payload}))});case"reset_filter":return{currentPage:e.currentPage,totalPages:e.totalPages,filters:[]};default:return e}}ve.propTypes={className:J.a.string};var Ce,ke,Le,Ne,Be=function(e){var t=e.className,n=Object(p.useReducer)(De,we),a=Object(h.a)(n,2),r=a[0],c=a[1];return Object(S.jsx)(he.Provider,{value:{productListState:r,productListDispatcher:c},children:Object(S.jsx)(ve,{className:t})})},Se=Object(A.a)(Be)(Ce||(Ce=Object(m.a)(["\n    display: grid;\n    grid-template-columns: 1fr 6fr;  \n    grid-template-rows: 1fr;   \n"]))),Fe=function(e){var t=je({queries:[':d = at(document.id, "'.concat(e,'")')]},(function(e){var t=e.id,n=e.tags,a=e.data,r=a.name,c=a.sku;return{id:t,name:r,description:Object(h.a)(a.description,1)[0].text,sku:c,tags:n,price:a.price,images:a.images,specs:a.specs,category:a.category.slug}}));return[Object(h.a)(t,1)[0]]},Re=function(e){var t=e.className,n=Object(k.h)().productId,a=Fe(n),r=Object(h.a)(a,1)[0],c=r.parsedData,i=r.isLoading;if(i||0===c.length)return Object(S.jsx)("h1",{children:"Loading..."});var s=c[0],o=s.id,u=void 0===o?"":o,l=s.name,d=void 0===l?"":l,j=s.price,g=void 0===j?"":j,p=s.sku,f=void 0===p?"":p,b=s.description,O=void 0===b?"":b,m=s.category,A=void 0===m?[]:m,x=s.tags,v=void 0===x?[]:x,P=s.specs,y=void 0===P?[]:P,w=s.images,D=(void 0===w?[]:w).map((function(e,t){var n=e.image.url;return{id:u+t,url:n}}));return Object(S.jsxs)("div",{className:t,children:[Object(S.jsxs)("div",{className:"product-detail-gallery",children:[Object(S.jsx)("h3",{children:d}),Object(S.jsx)(E,{data:{parsedData:D,isLoading:i}})]}),Object(S.jsxs)("div",{className:"product-detail-data",children:[Object(S.jsx)("label",{children:"Price: "}),Object(S.jsx)("label",{children:"$".concat(g)}),Object(S.jsx)("label",{children:"SKU: "}),Object(S.jsx)("label",{children:f}),Object(S.jsx)("label",{children:"Category: "}),Object(S.jsx)("label",{children:A}),Object(S.jsx)("label",{htmlFor:"quantity",children:"Qty"}),Object(S.jsx)("input",{id:"quantity",name:"addToCart"}),Object(S.jsx)("input",{className:"addToCart",type:"submit",value:"Add to Cart"})]}),Object(S.jsxs)("div",{className:"product-detail-tags",children:[Object(S.jsx)("h5",{children:"Tags"}),Object(S.jsx)("ul",{children:v.map((function(e,t){return Object(S.jsx)("li",{children:e},"".concat(e,"+").concat(t))}))})]}),Object(S.jsxs)("div",{className:"product-detail-description",children:[Object(S.jsx)("h5",{children:"Description"}),Object(S.jsx)("p",{children:O})]}),Object(S.jsx)("div",{className:"product-detail-specs",children:Object(S.jsx)("ul",{children:y.map((function(e,t){var n=e.spec_name,a=e.spec_value;return Object(S.jsx)("li",{children:"".concat(n," --- ").concat(a)},"".concat(n,"+").concat(t))}))})})]})},Ie=Object(A.a)(Re)(ke||(ke=Object(m.a)(["\ndisplay: grid;\ngrid-template-columns: 4fr 2fr;\ngrid-template-rows: 3fr 1fr 1fr;\ngap: 3em;\npadding: 2em;\n\n& > div {\n  border: 1px solid black;\n}\n\n.product-detail-tags,\n.product-detail-description,\n.product-detail-specs {\n  grid-column: 1/3;\n}\n\n.product-detail-data\n{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n}\n\n.product-detail-data\n{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n}\n\n.product-detail-data .addToCart {\n      grid-column: 1/3;\n}\n"]))),Ee=function(e){var t=e.className,n=e.data,a=(n.id,n.url),r=n.name,c=n.category,i=n.price,s=n.shortDescription;return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)("img",{src:a,alt:"haha"}),Object(S.jsxs)("div",{className:"list-card-data",children:[Object(S.jsx)("h4",{children:r}),Object(S.jsx)("span",{children:c}),Object(S.jsx)("span",{children:"$".concat(i)}),Object(S.jsx)("p",{children:s})]}),Object(S.jsx)("input",{className:"addToCart",type:"submit",value:"Add to Cart"})]})},Ke=Object(A.a)(Ee)(Le||(Le=Object(m.a)(["\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    grid-template-rows: 1fr auto;\n    gap: 1em;\n    padding: 3em;\n\n    background-color: white;\n    border: 2px solid black;\n    border-radius: 5px;\n\n    img {\n        width: 100%;\n        height: auto;\n        aspect-ratio: 4 / 3;\n        object-fit: cover;\n    }\n\n    .list-card-data {\n        display:flex;\n        flex-direction:column;\n    }\n"]))),Je=f.a.createContext(),Te=function(e){var t=e.className,n=Object(p.useContext)(Je),a=n.searchResultsState,r=n.searchResultsDispatcher;return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)("button",{onClick:function(){return r({type:"first"})},children:"First"}),Object(S.jsx)("button",{onClick:function(){return r({type:"prev"})},children:"Prev"}),function(e,t){for(var n=[],a=function(t){n.push(Object(S.jsx)("button",{style:e===t?{color:"red"}:{},onClick:function(){return r({type:"set_current_page",currentPage:t})},children:t},"number".concat(t,"}")))},c=1;c<=t;c++)a(c);return n}(a.currentPage,a.totalPages),Object(S.jsx)("button",{onClick:function(){return r({type:"next"})},children:"Next"}),Object(S.jsx)("button",{onClick:function(){return r({type:"last"})},children:"Last"})]})},He=Object(A.a)(Te)(Ne||(Ne=Object(m.a)(["\n"])));var Qe,Me=function(e){var t=e.pageSize,n=e.searchTerm,a=(e.page,function(e){var t=e.queries,n=e.pageSize,a=e.mapFunction,r=Object(p.useContext)(Je),c=r.searchResultsState,i=r.searchResultsDispatcher,s=de(),o=s.ref,u=s.isLoading,l=Object(p.useState)({parsedData:[],totalPages:1,isLoading:!0}),d=Object(h.a)(l,2),j=d[0],g=d[1];return Object(p.useEffect)((function(){if(!o||u)return function(){};var e=new AbortController;function r(){return(r=Object(oe.a)(se.a.mark((function r(){var s,u,l,d,j,p;return se.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s=t.map((function(e){return"q=".concat(encodeURIComponent("[[".concat(e,"]]")))})).join("&"),r.next=4,fetch("".concat(ue,"/documents/search?ref=").concat(o,"&").concat(s,"&lang=en-us&pageSize=").concat(n,"&page=").concat(c.currentPage),{signal:e.signal});case 4:return u=r.sent,r.next=7,u.json();case 7:l=r.sent,d=function(e){return e.results.map(a)},j=d(l),p=l.total_pages,i({type:"set_values",payload:{currentPage:c.currentPage,totalPages:p}}),g({parsedData:j,totalPages:p,isLoading:!1}),r.next=19;break;case 15:r.prev=15,r.t0=r.catch(0),g({parsedData:[],totalPages:1,isLoading:!1}),console.error(r.t0);case 19:case"end":return r.stop()}}),r,null,[[0,15]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){e.abort()}}),[o,u,c]),[j]}({queries:['at(document.type, "product")','fulltext(document, "'.concat(n,'")')],pageSize:t,mapFunction:function(e){var t=e.id,n=e.data,a=n.name,r=n.category.slug;return{id:t,name:a,url:n.mainimage.url,category:r,shortDescription:n.short_description,price:n.price}}}));return[Object(h.a)(a,1)[0]]},qe=function(e){var t=e.className,n=e.searchTerm,a=e.noElementsCustomMessage,r=Object(p.useContext)(Je).searchResultsState,c=Me({pageSize:20,searchTerm:n,page:r.currentPage}),i=Object(h.a)(c,1)[0],s=i.parsedData;return i.isLoading?Object(S.jsx)("h3",{children:"Loading..."}):0===s.length?Object(S.jsx)("h4",{style:{textAlign:"center"},children:a}):Object(S.jsxs)("div",{className:t,children:[r.totalPages>1?Object(S.jsx)(He,{}):null,Object(S.jsx)("div",{className:"list-cards",children:s.map((function(e){return Object(S.jsx)(Ke,{data:e},e.id)}))}),r.totalPages>1?Object(S.jsx)(He,{}):null]})},Xe=Object(A.a)(qe)(Qe||(Qe=Object(m.a)(["\n    display: grid;\n    grid-template-rows: 4fr auto;\n    gap: 2em;\n    justify-items: center;\n\n    .list-cards {\n        display: grid;\n        grid-template-rows: 1fr auto;\n        gap: 5em;\n    }\n\n"]))),Ue={currentPage:1,totalPages:1};function We(e,t){switch(t.type){case"set_initial_state":return Ue;case"set_values":return e.currentPage=t.payload.currentPage,e.totalPages=t.payload.totalPages,e;case"set_current_page":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:t.currentPage});case"next":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:e.currentPage<e.totalPages?e.currentPage+1:e.currentPage});case"prev":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:e.currentPage>1?e.currentPage-1:e.currentPage});case"first":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:1});case"last":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:e.totalPages});default:return e}}var Ze,_e=function(e){var t=e.className,n=Object(p.useReducer)(We,Ue),a=Object(h.a)(n,2),r=a[0],c=a[1],i=xe().get("q");return Object(S.jsx)(Je.Provider,{value:{searchResultsState:r,searchResultsDispatcher:c},children:Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)("h3",{children:"Search Results"}),Object(S.jsx)(Xe,{searchTerm:i,noElementsCustomMessage:"No hits..."})]})})},Ve=Object(A.a)(_e)(Ze||(Ze=Object(m.a)(["\n    display: grid;\n    grid-template-rows: 1fr auto;\n    gap: 2em;\n    padding: 1em;\n\n    & .list-container {\n        display: inherit;\n        grid-template-rows: 4fr auto;\n    }\n"]))),ze=function(){var e=Object(p.useState)("Home"),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(k.d,{children:[Object(S.jsx)(k.b,{exact:!0,path:"/home",component:Oe}),Object(S.jsx)(k.b,{exact:!0,path:"/products",component:Se}),Object(S.jsx)(k.b,{exact:!0,path:"/product/:productId",component:Ie}),Object(S.jsx)(k.b,{exact:!0,path:"/search",component:Ve}),Object(S.jsx)(k.b,{path:"*",children:Object(S.jsx)("span",{children:"404 Not Found."})})]}),Object(S.jsx)(L.b,{to:"Home"===n?"/products":"/home",children:Object(S.jsx)("button",{id:"btnChangePage",onClick:function(){a("Home"===n?"ProductList":"Home")},children:"View All Products"})}),Object(S.jsx)(k.a,{exact:!0,from:"/wa-react-2021-q4-internal-capstone-project",to:"/home"}),Object(S.jsx)(k.a,{exact:!0,from:"/",to:"/home"})]})},Ge=n.p+"static/media/shopping-cart.f1209183.svg",Ye=function(){var e=Object(p.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(S.jsxs)(x,{children:[Object(S.jsxs)(P,{children:[Object(S.jsx)(v,{children:Object(S.jsx)(L.b,{to:"/home",children:Object(S.jsx)("img",{src:"data:image/png;base64,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",style:{cursor:"pointer"},alt:"logo",height:"100%"})})}),Object(S.jsxs)(y,{children:[Object(S.jsx)("input",{value:n,onInput:function(e){return a(e.target.value)},type:"text",placeholder:"Search products..."}),Object(S.jsx)(L.b,{to:"/search?q=".concat(n),children:Object(S.jsx)("button",{children:"Search"})})]}),Object(S.jsx)(w,{children:Object(S.jsx)("img",{src:Ge,alt:"shoppingcart"})})]}),Object(S.jsx)(D,{children:Object(S.jsx)(ze,{})}),Object(S.jsx)(C,{children:"Ecommerce created during Wizeline\u2019s Academy React Bootcamp."})]})},$e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},et={currentPage:1,totalPages:1,filters:[]};var tt=Object(U.c)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_initial_state":return et;case"set_values":return e.currentPage=t.payload.currentPage,e.totalPages=t.payload.totalPages,e.filters=t.payload.filters,e;case"set_current_page":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:t.payload});case"next":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:e.currentPage<e.totalPages?e.currentPage+1:e.currentPage});case"prev":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:e.currentPage>1?e.currentPage-1:e.currentPage});case"first":return Object(ye.a)(Object(ye.a)({},e),{},{currentPage:1});case"last":var n=Object(ye.a)(Object(ye.a)({},e),{},{currentPage:e.totalPages});return n;case"modify_filter":return e.filters.includes(t.payload)?Object(ye.a)(Object(ye.a)({},e),{},{filters:e.filters.filter((function(e){return e!==t.payload}))}):Object(ye.a)(Object(ye.a)({},e),{},{filters:[].concat(Object(Pe.a)(e.filters),[t.payload])});case"add_querystring":return e.filters=[t.payload],e;case"add_filter":return Object(ye.a)(Object(ye.a)({},e),{},{filters:[].concat(Object(Pe.a)(e.filters),[t.payload])});case"remove_filter":return Object(ye.a)(Object(ye.a)({},e),{},{filters:e.filters.filter((function(e){return e!==t.payload}))});case"reset_filter":return{currentPage:e.currentPage,totalPages:e.totalPages,filters:[]};default:return e}}}),nt=tt,at=n(32),rt=Object(U.d)(nt,{},Object(U.a)(at.a));O.a.render(Object(S.jsx)(L.a,{children:Object(S.jsx)(X.a,{store:rt,children:Object(S.jsx)(Ye,{})})}),document.getElementById("root")),$e()}},[[52,1,2]]]);
//# sourceMappingURL=main.b9a9d811.chunk.js.map