(this["webpackJsonpwa-react-2021-q4-capstone-project"]=this["webpackJsonpwa-react-2021-q4-capstone-project"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"setInitialState",(function(){return z})),n.d(r,"setValues",(function(){return G})),n.d(r,"setCurrentPage",(function(){return Y})),n.d(r,"next",(function(){return $})),n.d(r,"prev",(function(){return ee})),n.d(r,"first",(function(){return te})),n.d(r,"last",(function(){return ne})),n.d(r,"modifyFilter",(function(){return re})),n.d(r,"addQueryString",(function(){return ae})),n.d(r,"resetFilter",(function(){return ce}));var a={};n.r(a),n.d(a,"setInitialState",(function(){return ie})),n.d(a,"setValues",(function(){return se})),n.d(a,"setCurrentPage",(function(){return oe})),n.d(a,"next",(function(){return ue})),n.d(a,"prev",(function(){return le})),n.d(a,"first",(function(){return de})),n.d(a,"last",(function(){return je}));var c={};n.r(c),n.d(c,"addToCart",(function(){return fe})),n.d(c,"removeFromCart",(function(){return pe})),n.d(c,"checkout",(function(){return be})),n.d(c,"clearCart",(function(){return ge}));var i,s,o,u,l,d,j,f,p,b,g=n(1),O=n.n(g),m=n(22),h=n.n(m),x=(n(37),n(3)),A=(n(38),n(4)),v=n(5),y=v.a.div(i||(i=Object(A.a)(['\n  height: 100vh;\n  width: 100vw;\n\n  display: grid;\n  grid-template-rows: 1fr 5fr 1fr;\n  grid-template-columns: 6fr;\n\n  grid-template-areas:\n    "header"\n    "content"\n    "footer";\n\n  gap: 1em;\n']))),P=v.a.div(s||(s=Object(A.a)(["\n  grid-area: logo;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),w=v.a.header(o||(o=Object(A.a)(['\n  background-color: orange;\n  grid-area: header;\n  display:grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-areas:\n    "logo search shoppingcart";\n  gap: 1em;\n']))),D=v.a.div(u||(u=Object(A.a)(["\n  grid-area: search;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),C=v.a.div(l||(l=Object(A.a)(["\n  background-color: gold;\n  grid-area: content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=v.a.div(d||(d=Object(A.a)(["\n  background-color: lavender;\n  grid-area: footer;\n  text-align: center;\n"]))),N=n.p+"static/media/shopping-cart.f1209183.svg",L=n(7),B=n(11),S=n(0),F=v.a.div(j||(j=Object(A.a)(["\n  grid-area: shoppingcart;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  span {\n    width: 20px;\n    height: 20px;\n    background: red;\n    border-radius: 50%;\n    color: white;\n    font-weight: bold;\n    transform: translate(-1em, +1em);\n  }\n"]))),I=function(){var e=Object(L.c)((function(e){return e.shoppingCart.amountItems}));return Object(S.jsxs)(F,{children:[Object(S.jsx)(B.b,{to:"/cart",children:Object(S.jsx)("img",{src:N,alt:"shoppingcart"})}),e>0?Object(S.jsx)("span",{style:{textAlign:"center"},children:e}):null]})},R=n(9),E=n.p+"static/media/left_arrow.10c703c6.svg",_=n.p+"static/media/right_arrow.b96fd818.svg",K=function(e){var t=e.className,n=e.moveSlide,r=e.direction;return Object(S.jsx)("button",{onClick:n,className:t,children:Object(S.jsx)("img",{src:"next"===r?_:E,alt:"rightArrow",style:{width:"25px",height:"25px",pointerEvents:"none"}})})},T=Object(v.a)(K)(f||(f=Object(A.a)(["\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background: #f1f1f1;\n    border: 1px solid rgba(34, 34, 34, 0.287);\n    cursor: pointer;\n    transform: translateY(-10%);\n    place-self: ","\n"])),(function(e){return"next"===e.direction?"center right":"center left"})),q=Object(v.a)((function(e){var t=e.className,n=e.key,r=e.url,a=e.index;return Object(S.jsx)("div",{className:t,children:Object(S.jsx)("img",{src:r,alt:"none"},n+a)},n)}))(p||(p=Object(A.a)(["\n    opacity: 1;\n    transition: opacity ease-in-out 0.4s; \n    opacity: ","    \n    }\n"])),(function(e){return e.slideIndex===e.index+1?"1; ":"0;"})),J=Object(v.a)((function(e){var t=e.className,n=e.data,r=n.parsedData,a=void 0===r?[]:r,c=n.isLoading,i=Object(g.useState)(1),s=Object(x.a)(i,2),o=s[0],u=s[1];return c?Object(S.jsx)("h1",{children:"Loading..."}):Object(S.jsxs)("div",{className:t,children:[a.map((function(e,t){var n=e.id,r=e.url;return Object(S.jsx)(q,{url:r,index:t,slideIndex:o},n)})),Object(S.jsx)(T,{moveSlide:function(){1!==o?u(o-1):1===o&&u(a.length)},direction:"prev"}),Object(S.jsx)(T,{moveSlide:function(){o!==a.length?u(o+1):o===a.length&&u(1)},direction:"next"}),Object(S.jsx)("div",{className:"container-dots",children:Array.from({length:a.length}).map((function(e,t){return Object(S.jsx)("div",{onClick:function(){return function(e){u(e)}(t+1)},className:o===t+1?"dot active":"dot"},t)}))})]})}))(b||(b=Object(A.a)(['\n    display: grid;\n    grid-template: "container" 1fr;\n    place-items: center;\n    place-content: center;\n    overflow: hidden;\n    max-height: clamp(450px, 50vh, 600px);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    \n    & > * {\n        grid-area: container;\n        max-width: 1000px;\n    }\n\n    img {\n        width: 100%;\n        height: auto;\n        aspect-ratio: 16 / 9;\n        object-fit: cover;\n    }\n\n    .container-dots {\n        place-self: end center;\n        transform: translateY(-250%);\n        display: flex;\n    }\n\n    .dot {\n        width: 20px;\n        height: 20px;\n        border-radius: 50%;\n        border: 3px solid #f1f1f1;\n        margin: 0 5px;\n        background: #f1f1f1;\n        cursor: pointer;\n      }\n      .dot.active {\n        background: rgb(32, 32, 32);\n      }\n    \n']))),H=n(8),Q=n.n(H);Q.a.propTypes={className:Q.a.string,data:Q.a.shape({parsedData:Q.a.array,isLoading:Q.a.bool})};var M,X,U=function(e){var t=e.className,n=e.data,r=n.parsedData,a=void 0===r?[]:r,c=n.isLoading,i=Object(g.useState)(0),s=Object(x.a)(i,2),o=s[0],u=s[1],l=Object(g.useState)({transform:"translateX(0px)",transitionDuration:"0.5s"}),d=Object(x.a)(l,2),j=d[0],f=d[1];return Object(g.useEffect)((function(){f((function(){return{transform:"translateX(".concat(o,"px)"),transitionDuration:"0.5s"}}))}),[o]),c?Object(S.jsx)("h1",{children:"Loading..."}):Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)("div",{className:"track",style:j,children:a.map((function(e){var t=e.id,n=(e.name,e.url);return Object(S.jsx)("div",{id:t,className:"card-container",children:Object(S.jsx)(B.b,{to:"/products?category=".concat(t),children:Object(S.jsx)("img",{src:n,alt:"haha"})})},t)}))}),Object(S.jsx)(T,{moveSlide:function(){return u((function(e){return e-(o>-600?330:0)}))},direction:"prev"}),Object(S.jsx)(T,{moveSlide:function(){return u((function(e){return e+(o<600?330:0)}))},direction:"next"})]})},W=Object(v.a)(U)(M||(M=Object(A.a)(['\n    display:grid;    \n    grid-template: "track" 1fr;\n    place-items: center;\n    place-content: center;\n    overflow: hidden;\n    max-height: clamp(450px, 30vh, 600px);\n\n    & > * {\n        grid-area: track;\n        max-width: 1000px;\n    }\n\n    .track {\n        display:grid;\n        grid-template-columns 1fr 1fr 1fr 1fr 1fr;\n        \n        gap: 0.5em;\n    }\n\n\n    .card-container {\n        justify-self: center;\n        align-self: center;\n    }\n    img {\n        width: 100%;\n        height: auto;\n        aspect-ratio: 16 / 9;\n        object-fit: cover;\n    }\n']))),Z=Object(v.a)((function(e){var t=e.className,n=e.cardId,r=e.url,a=e.name,c=e.category,i=e.price;return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)(B.b,{to:"/product/".concat(n),children:Object(S.jsx)("img",{src:r,alt:"img"})}),Object(S.jsx)("span",{children:a}),Object(S.jsx)("span",{children:c}),Object(S.jsx)("span",{children:"$".concat(i)}),Object(S.jsx)("button",{children:"Add to cart"})]})}))(X||(X=Object(A.a)(["\n    display:flex;\n    flex-direction:column;\n    padding:0.5em;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n\n    img {\n        width: 100%;\n        height: auto;\n        aspect-ratio: 4 / 3;\n        object-fit: cover;\n    }\n"]))),V=n(10),z=function(){return function(e){e({type:"set_initial_state"})}},G=function(e){return function(t){t({type:"set_values",payload:e})}},Y=function(e){return function(t){t({type:"set_current_page",payload:e})}},$=function(){return function(e){e({type:"next"})}},ee=function(){return function(e){e({type:"prev"})}},te=function(){return function(e){e({type:"first"})}},ne=function(){return function(e){e({type:"last"})}},re=function(e){return function(t){t({type:"modify_filter",payload:e})}},ae=function(e){return function(t){t({type:"add_querystring",payload:e})}},ce=function(){return function(e){e({type:"reset_filter"})}},ie=function(){return function(e){e({type:"sr_set_initial_state"})}},se=function(e){return function(t){t({type:"sr_set_values",payload:e})}},oe=function(e){return function(t){t({type:"sr_set_current_page",payload:e})}},ue=function(){return function(e){e({type:"sr_next"})}},le=function(){return function(e){e({type:"sr_prev"})}},de=function(){return function(e){e({type:"sr_first"})}},je=function(){return function(e){e({type:"sr_last"})}},fe=function(e){return function(t){t({type:"add_cart",payload:e})}},pe=function(e){return function(t){t({type:"remove_cart",payload:e})}},be=function(){return function(e){e({type:"checkout"})}},ge=function(){return function(e){e({type:"clear_cart"})}},Oe=function(e){var t=e.totalPages,n=Object(L.c)((function(e){return e.productList.currentPage})),a=Object(L.b)(),c=Object(V.b)(r,a),i=c.first,s=c.prev,o=c.next,u=c.last,l=c.setCurrentPage;return Object(S.jsxs)("div",{className:"grid-paginator",children:[Object(S.jsx)("button",{onClick:function(){return i()},children:"First"}),Object(S.jsx)("button",{onClick:function(){return s()},children:"Prev"}),function(e,t){for(var n=[],r=function(t){n.push(Object(S.jsx)("button",{style:e===t?{color:"red"}:{},onClick:function(){return l(t)},children:t},"number".concat(t,"}")))},a=1;a<=t;a++)r(a);return n}(n,t),Object(S.jsx)("button",{onClick:function(){return o()},children:"Next"}),Object(S.jsx)("button",{onClick:function(){return u()},children:"Last"})]})};Q.a.propTypes={className:Q.a.string,data:Q.a.shape({totalPages:Q.a.number,parsedData:Q.a.array,isLoading:Q.a.bool}),pagination:Q.a.bool,setPageNumber:Q.a.funct};var me,he=function(e){var t=e.className,n=e.data,r=n.totalPages,a=n.parsedData,c=void 0===a?[]:a,i=n.isLoading,s=e.pagination;if(i)return Object(S.jsx)("h1",{children:"Loading..."});var o=Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"grid-container",children:c.map((function(e){var t=e.id,n=e.url,r=e.name,a=e.category,c=e.price;return Object(S.jsx)(Z,{cardId:t,url:n,name:r,category:a,price:c},t)}))}),s&&r>1&&Object(S.jsx)(Oe,{totalPages:r})]});return Object(S.jsx)("div",{className:t,children:c.length>0?o:Object(S.jsx)("p",{style:{textAlign:"center"},children:"Sorry! No elements."})})},xe=Object(v.a)(he)(me||(me=Object(A.a)(["\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n        \n    background-color: #ECC344;\n    padding: 2em;\n\n    .grid-container {\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n        gap: 2.5em;\n    }\n\n    .grid-container div {\n        background-color: white;\n        border: 2px solid black;\n        border-radius: 5px;\n    }\n\n    .grid-container span {\n        padding: 0.5em;\n    }"]))),Ae=n(16),ve=n.n(Ae),ye=n(18),Pe="https://wizeline-academy.cdn.prismic.io/api/v2",we={ref:null,isLoading:!0};function De(){var e=Object(g.useState)((function(){return we})),t=Object(x.a)(e,2),n=t[0],r=t[1];return Object(g.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(ye.a)(ve.a.mark((function t(){var n,a,c,i,s,o;return ve.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(we),t.next=4,fetch(Pe,{signal:e.signal});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c=void 0===(c=a.refs)?[]:c,i=Object(x.a)(c,1),s=i[0],o=(s=void 0===s?{}:s).ref,r({ref:o,isLoading:!1}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),r({ref:null,isLoading:!1}),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e.abort()}}),[]),n}function Ce(e,t){var n=e.queries,r=e.pageSize,a=void 0===r?1:r,c=e.page,i=void 0===c?"":c,s=De(),o=s.ref,u=s.isLoading,l=Object(g.useState)(i),d=Object(x.a)(l,2),j=d[0],f=d[1],p=Object(g.useState)((function(){return{page:1,totalPages:1,parsedData:[],isLoading:!0}})),b=Object(x.a)(p,2),O=b[0],m=b[1];return Object(g.useEffect)((function(){if(!o||u)return function(){};var e=new AbortController;function r(){return(r=Object(ye.a)(ve.a.mark((function r(){var c,s,u,l,d,p;return ve.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m({page:1,totalPages:0,parsedData:[],isLoading:!0}),c=n.map((function(e){return"q=".concat(encodeURIComponent("[[".concat(e,"]]")))})).join("&"),r.next=5,fetch("".concat(Pe,"/documents/search?ref=").concat(o,"&").concat(c,"&lang=en-us&pageSize=").concat(a).concat(i?"&page=".concat(j):""),{signal:e.signal});case 5:return s=r.sent,r.next=8,s.json();case 8:u=r.sent,l=function(e){return e.results.map(t)},d=l(u),p=u.total_pages,m({page:i,totalPages:p,parsedData:d,isLoading:!1}),f(j),r.next=21;break;case 16:r.prev=16,r.t0=r.catch(0),m({page:1,totalPages:1,parsedData:[],isLoading:!1}),f(1),console.error(r.t0);case 21:case"end":return r.stop()}}),r,null,[[0,16]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){e.abort()}}),[o,u,j]),[O,j,f]}var ke,Ne=function(){var e=Ce({queries:['at(document.type, "category")'],pageSize:30},(function(e){var t=e.id,n=e.data;return{id:t,name:n.name,url:n.main_image.url}}));return[Object(x.a)(e,1)[0]]},Le=function(){var e=function(){var e=Ce({queries:['at(document.type, "product")','at(document.tags, ["Featured"])'],pageSize:16},(function(e){var t=e.id,n=e.data,r=n.name;return{id:t,url:n.mainimage.url,name:r,category:n.category.slug,price:n.price}}));return[Object(x.a)(e,1)[0]]}(),t=Object(x.a)(e,1)[0],n=function(){var e=Ce({queries:['at(document.type, "banner")'],pageSize:5},(function(e){return{id:e.id,url:e.data.main_image.url}}));return[Object(x.a)(e,1)[0]]}();return[t,Object(x.a)(n,1)[0]]},Be=v.a.div(ke||(ke=Object(A.a)(["\n    display: grid;\n    justify-items:center;\n    gap: 2em;\n"]))),Se=function(){var e=Le(),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Ne(),c=Object(x.a)(a,1)[0];return Object(S.jsxs)(Be,{children:[Object(S.jsx)(J,{data:r}),Object(S.jsx)(W,{data:c}),Object(S.jsx)(xe,{data:n})]})},Fe=O.a.createContext(),Ie=(n(51),function(e){var t=e.data,n=t.parsedData,a=void 0===n?[]:n,c=t.isLoading,i=e.title,s=Object(L.c)((function(e){return e.productList.filters})),o=Object(L.b)(),u=Object(V.b)(r,o),l=u.modifyFilter,d=u.resetFilter;return c?Object(S.jsx)("h1",{children:"Loading..."}):Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:i}),Object(S.jsx)("ul",{style:{listStyle:"none"},children:a.map((function(e){var t=e.id,n=e.name;return Object(S.jsx)("li",{className:"".concat(s.includes(t)?"enabled":"disabled"),onClick:function(){return l(t)},children:n},t)}))}),Object(S.jsx)("button",{onClick:function(){return d()},children:"Clear filters"})]})});var Re=function(e){var t=e.pageSize,n=Object(L.c)((function(e){return e.productList.filters})),a=['at(document.type, "product")'];if(n.length>0){var c="any(my.product.category, [".concat(n.map((function(e){return'"'.concat(e,'"')})).join(","),"])");a.push(c)}var i=function(e){var t=e.queries,n=e.pageSize,a=e.mapFunction,c=Object(L.c)((function(e){return e.productList})),i=Object(V.b)(r,Object(L.b)()).setValues,s=De(),o=s.ref,u=s.isLoading,l=Object(g.useState)({parsedData:[],totalPages:1,isLoading:!0}),d=Object(x.a)(l,2),j=d[0],f=d[1];return Object(g.useEffect)((function(){if(!o||u)return function(){};var e=new AbortController;function r(){return(r=Object(ye.a)(ve.a.mark((function r(){var s,u,l,d,j,p;return ve.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s=t.map((function(e){return"q=".concat(encodeURIComponent("[[".concat(e,"]]")))})).join("&"),r.next=4,fetch("".concat(Pe,"/documents/search?ref=").concat(o,"&").concat(s,"&lang=en-us&pageSize=").concat(n,"&page=").concat(c.currentPage),{signal:e.signal});case 4:return u=r.sent,r.next=7,u.json();case 7:l=r.sent,d=function(e){return e.results.map(a)},j=d(l),p=l.total_pages,i({currentPage:c.currentPage,totalPages:p,filters:c.filters}),f({parsedData:j,totalPages:p,isLoading:!1}),r.next=19;break;case 15:r.prev=15,r.t0=r.catch(0),f({parsedData:[],totalPages:1,isLoading:!1}),console.error(r.t0);case 19:case"end":return r.stop()}}),r,null,[[0,15]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){e.abort()}}),[o,u,c.currentPage,c.filters]),[j]}({queries:a,pageSize:t,mapFunction:function(e){var t=e.id,n=e.data,r=n.name;return{id:t,url:n.mainimage.url,name:r,category:n.category.slug,price:n.price}}});return[Object(x.a)(i,1)[0]]};function Ee(){var e=Object(R.g)().search;return Object(g.useMemo)((function(){return new URLSearchParams(e)}),[e])}var _e=function(e){var t=e.className,n=Object(V.b)(r,Object(L.b)()).addQueryString,a=Ee(),c=a.get("category");c&&(n(c),a.delete("category"));var i=Ne(),s=Object(x.a)(i,1)[0],o=Re({pageSize:12}),u=Object(x.a)(o,1)[0],l={totalPages:u.totalPages,parsedData:u.parsedData,isLoading:u.isLoading};return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)(Ie,{data:s,title:"Categories"}),Object(S.jsx)(xe,{data:l,pagination:!0})]})},Ke=n(17),Te=n(2),qe={currentPage:1,totalPages:1,filters:[]};function Je(e,t){switch(t.type){case"set_initial_state":return qe;case"set_values":return e.currentPage=t.payload.currentPage,e.totalPages=t.payload.totalPages,e.filters=t.payload.filters,e;case"set_current_page":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:t.currentPage});case"next":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:e.currentPage<e.totalPages?e.currentPage+1:e.currentPage});case"prev":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:e.currentPage>1?e.currentPage-1:e.currentPage});case"first":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:1});case"last":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:e.totalPages});case"modify_filter":return e.filters.includes(t.categoryId)?Object(Te.a)(Object(Te.a)({},e),{},{filters:e.filters.filter((function(e){return e!==t.categoryId}))}):Object(Te.a)(Object(Te.a)({},e),{},{filters:[].concat(Object(Ke.a)(e.filters),[t.categoryId])});case"add_querystring":return e.filters=[t.categoryId],e;case"add_filter":return Object(Te.a)(Object(Te.a)({},e),{},{filters:[].concat(Object(Ke.a)(e.filters),[t.payload])});case"remove_filter":return Object(Te.a)(Object(Te.a)({},e),{},{filters:e.filters.filter((function(e){return e!==t.payload}))});case"reset_filter":return{currentPage:e.currentPage,totalPages:e.totalPages,filters:[]};default:return e}}_e.propTypes={className:Q.a.string};var He,Qe,Me,Xe,Ue=function(e){var t=e.className,n=Object(g.useReducer)(Je,qe),r=Object(x.a)(n,2),a=r[0],c=r[1];return Object(S.jsx)(Fe.Provider,{value:{productListState:a,productListDispatcher:c},children:Object(S.jsx)(_e,{className:t})})},We=Object(v.a)(Ue)(He||(He=Object(A.a)(["\n    display: grid;\n    grid-template-columns: 1fr 6fr;  \n    grid-template-rows: 1fr;   \n"]))),Ze=function(e){var t=Ce({queries:[':d = at(document.id, "'.concat(e,'")')]},(function(e){var t=e.id,n=e.tags,r=e.data,a=r.name,c=r.sku;return{id:t,name:a,description:Object(x.a)(r.description,1)[0].text,sku:c,tags:n,price:r.price,images:r.images,specs:r.specs,category:r.category.slug,stock:r.stock}}));return[Object(x.a)(t,1)[0]]},Ve=function(e){var t=e.className,n=Object(R.h)().productId,r=Ze(n),a=Object(x.a)(r,1)[0],i=a.parsedData,s=a.isLoading,o=Object(L.b)(),u=Object(V.b)(c,o).addToCart,l=Object(g.useState)(0),d=Object(x.a)(l,2),j=d[0],f=d[1];if(s||0===i.length)return Object(S.jsx)("h1",{children:"Loading..."});var p=i[0],b=p.id,O=void 0===b?"":b,m=p.name,h=void 0===m?"":m,A=p.price,v=void 0===A?"":A,y=p.sku,P=void 0===y?"":y,w=p.description,D=void 0===w?"":w,C=p.category,k=void 0===C?[]:C,N=p.tags,B=void 0===N?[]:N,F=p.specs,I=void 0===F?[]:F,E=p.images,_=void 0===E?[]:E,K=p.stock,T=void 0===K?"":K,q=_.map((function(e,t){var n=e.image.url;return{id:O+t,url:n}}));return Object(S.jsxs)("div",{className:t,children:[Object(S.jsxs)("div",{className:"product-detail-gallery",children:[Object(S.jsx)("h3",{children:h}),Object(S.jsx)(J,{data:{parsedData:q,isLoading:s}})]}),Object(S.jsxs)("div",{className:"product-detail-data",children:[Object(S.jsx)("label",{children:"Price: "}),Object(S.jsx)("label",{children:"$".concat(v)}),Object(S.jsx)("label",{children:"SKU: "}),Object(S.jsx)("label",{children:P}),Object(S.jsx)("label",{children:"Category: "}),Object(S.jsx)("label",{children:k}),Object(S.jsx)("label",{children:"In Stock: "}),Object(S.jsx)("label",{children:T}),Object(S.jsx)("label",{htmlFor:"quantity",children:"Qty"}),Object(S.jsx)("input",{id:"quantity",name:"addToCart",value:j,onInput:function(e){return f(e.target.value)},placeholder:"1"}),Object(S.jsx)("input",{className:"addToCart",type:"submit",value:"Add to Cart",disabled:0===T,onClick:function(){u({id:O,quantity:parseInt(j),stock:parseInt(T)})}})]}),Object(S.jsxs)("div",{className:"product-detail-tags",children:[Object(S.jsx)("h5",{children:"Tags"}),Object(S.jsx)("ul",{children:B.map((function(e,t){return Object(S.jsx)("li",{children:e},"".concat(e,"+").concat(t))}))})]}),Object(S.jsxs)("div",{className:"product-detail-description",children:[Object(S.jsx)("h5",{children:"Description"}),Object(S.jsx)("p",{children:D})]}),Object(S.jsx)("div",{className:"product-detail-specs",children:Object(S.jsx)("ul",{children:I.map((function(e,t){var n=e.spec_name,r=e.spec_value;return Object(S.jsx)("li",{children:"".concat(n," --- ").concat(r)},"".concat(n,"+").concat(t))}))})})]})},ze=Object(v.a)(Ve)(Qe||(Qe=Object(A.a)(["\ndisplay: grid;\ngrid-template-columns: 4fr 2fr;\ngrid-template-rows: 3fr 1fr 1fr;\ngap: 3em;\npadding: 2em;\n\n& > div {\n  border: 1px solid black;\n}\n\n.product-detail-tags,\n.product-detail-description,\n.product-detail-specs {\n  grid-column: 1/3;\n}\n\n.product-detail-data\n{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n}\n\n.product-detail-data\n{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n}\n\n.product-detail-data .addToCart {\n      grid-column: 1/3;\n}\n"]))),Ge=function(e){var t=e.className,n=e.data,r=(n.id,n.url),a=n.name,c=n.category,i=n.price,s=n.shortDescription;return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)("img",{src:r,alt:"haha"}),Object(S.jsxs)("div",{className:"list-card-data",children:[Object(S.jsx)("h4",{children:a}),Object(S.jsx)("span",{children:c}),Object(S.jsx)("span",{children:"$".concat(i)}),Object(S.jsx)("p",{children:s})]}),Object(S.jsx)("input",{className:"addToCart",type:"submit",value:"Add to Cart"})]})},Ye=Object(v.a)(Ge)(Me||(Me=Object(A.a)(["\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    grid-template-rows: 1fr auto;\n    gap: 1em;\n    padding: 3em;\n\n    background-color: white;\n    border: 2px solid black;\n    border-radius: 5px;\n\n    img {\n        width: 100%;\n        height: auto;\n        aspect-ratio: 4 / 3;\n        object-fit: cover;\n    }\n\n    .list-card-data {\n        display:flex;\n        flex-direction:column;\n    }\n"]))),$e=function(e){var t=e.className,n=Object(L.c)((function(e){return e.searchResults})),r=n.currentPage,c=n.totalPages,i=Object(L.b)(),s=Object(V.b)(a,i),o=s.first,u=s.prev,l=s.next,d=s.last,j=s.setCurrentPage;return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)("button",{onClick:function(){return o()},children:"First"}),Object(S.jsx)("button",{onClick:function(){return u()},children:"Prev"}),function(e,t){for(var n=[],r=function(t){n.push(Object(S.jsx)("button",{style:e===t?{color:"red"}:{},onClick:function(){return j(t)},children:t},"number".concat(t,"}")))},a=1;a<=t;a++)r(a);return n}(r,c),Object(S.jsx)("button",{onClick:function(){return l()},children:"Next"}),Object(S.jsx)("button",{onClick:function(){return d()},children:"Last"})]})},et=Object(v.a)($e)(Xe||(Xe=Object(A.a)(["\n"])));var tt,nt,rt,at,ct,it=function(e){var t=e.pageSize,n=e.searchTerm,r=function(e){var t=e.queries,n=e.pageSize,r=e.mapFunction,c=Object(L.c)((function(e){return e.searchResults})),i=Object(V.b)(a,Object(L.b)()).setValues,s=De(),o=s.ref,u=s.isLoading,l=Object(g.useState)({parsedData:[],totalPages:1,isLoading:!0}),d=Object(x.a)(l,2),j=d[0],f=d[1];return Object(g.useEffect)((function(){if(!o||u)return function(){};var e=new AbortController;function a(){return(a=Object(ye.a)(ve.a.mark((function a(){var s,u,l,d,j,p;return ve.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=t.map((function(e){return"q=".concat(encodeURIComponent("[[".concat(e,"]]")))})).join("&"),a.next=4,fetch("".concat(Pe,"/documents/search?ref=").concat(o,"&").concat(s,"&lang=en-us&pageSize=").concat(n,"&page=").concat(c.currentPage),{signal:e.signal});case 4:return u=a.sent,a.next=7,u.json();case 7:l=a.sent,d=function(e){return e.results.map(r)},j=d(l),p=l.total_pages,i({currentPage:c.currentPage,totalPages:p}),f({parsedData:j,totalPages:p,isLoading:!1}),a.next=19;break;case 15:a.prev=15,a.t0=a.catch(0),f({parsedData:[],totalPages:1,isLoading:!1}),console.error(a.t0);case 19:case"end":return a.stop()}}),a,null,[[0,15]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){e.abort()}}),[o,u,c]),[j]}({queries:['at(document.type, "product")','fulltext(document, "'.concat(n,'")')],pageSize:t,mapFunction:function(e){var t=e.id,n=e.data,r=n.name,a=n.category.slug;return{id:t,name:r,url:n.mainimage.url,category:a,shortDescription:n.short_description,price:n.price}}});return[Object(x.a)(r,1)[0]]},st=function(e){var t=e.className,n=e.searchTerm,r=e.noElementsCustomMessage,a=Object(L.c)((function(e){return e.searchResults})),c=a.currentPage,i=a.totalPages,s=it({pageSize:20,searchTerm:n,page:c}),o=Object(x.a)(s,1)[0],u=o.parsedData;return o.isLoading?Object(S.jsx)("h3",{children:"Loading..."}):0===u.length?Object(S.jsx)("h4",{style:{textAlign:"center"},children:r}):Object(S.jsxs)("div",{className:t,children:[i>1?Object(S.jsx)(et,{}):null,Object(S.jsx)("div",{className:"list-cards",children:u.map((function(e){return Object(S.jsx)(Ye,{data:e},e.id)}))}),i>1?Object(S.jsx)(et,{}):null]})},ot=Object(v.a)(st)(tt||(tt=Object(A.a)(["\n    display: grid;\n    grid-template-rows: 4fr auto;\n    gap: 2em;\n    justify-items: center;\n\n    .list-cards {\n        display: grid;\n        grid-template-rows: 1fr auto;\n        gap: 5em;\n    }\n\n"]))),ut=function(e){var t=e.className,n=Ee().get("q");return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)("h3",{children:"Search Results"}),Object(S.jsx)(ot,{searchTerm:n,noElementsCustomMessage:"No hits..."})]})},lt=Object(v.a)(ut)(nt||(nt=Object(A.a)(["\n    display: grid;\n    grid-template-rows: 1fr auto;\n    gap: 2em;\n    padding: 1em;\n\n    & .list-container {\n        display: inherit;\n        grid-template-rows: 4fr auto;\n    }\n"]))),dt=function(e){var t=e.className;return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)("img",{src:"",alt:"caca"}),Object(S.jsx)("span",{children:"Name"}),Object(S.jsx)("span",{children:"Name"}),Object(S.jsxs)("span",{children:["Qty: ",Object(S.jsx)("select",{children:Object(S.jsx)("option",{value:"1",children:"1"})})]}),Object(S.jsx)("div",{children:"Subtotal"}),Object(S.jsx)("button",{children:"Remove from Cart"})]})},jt=Object(v.a)(dt)(rt||(rt=Object(A.a)(["\n    display: flex;\n    flex-direction: row;\n    gap:13em;\n    align-items: center;\n"]))),ft=function(e){var t=e.className;return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)(jt,{}),Object(S.jsx)(jt,{})]})},pt=Object(v.a)(ft)(at||(at=Object(A.a)(["\n    display: grid;\n    grid-auto-rows: 5em;\n    padding:1em;\n    gap: 1em;\n\n    & > div {\n        background-color: white;\n        border: 2px solid black;\n        border-radius: 5px;\n    }\n"]))),bt=function(e){var t=e.className;return Object(S.jsxs)("div",{className:t,children:[Object(S.jsx)("h4",{children:"Shopping Cart"}),Object(S.jsx)("div",{}),Object(S.jsx)(pt,{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{className:"shoppingCart-total",children:"Total: $1000"}),Object(S.jsx)("div",{className:"shoppingCart-checkout",children:Object(S.jsx)("button",{children:"Checkout"})})]})},gt=Object(v.a)(bt)(ct||(ct=Object(A.a)(["\n    display: grid;\n    grid-template-rows: 1fr 8fr 1fr;\n    grid-template-columns: 5fr 1fr;\n    gap: 2em;\n    padding: 2em;\n\n    & > div {\n        border: 1px solid black;\n    }\n\n    .shoppingCart-checkout {\n        display:grid;\n        align-items: center;\n        justify-items: center;\n    }\n\n    .shoppingCart-total{\n        display:grid;\n        align-items: right;\n        justify-items: right;\n    }\n"]))),Ot=function(){var e=Object(g.useState)("Home"),t=Object(x.a)(e,2),n=t[0],r=t[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(R.d,{children:[Object(S.jsx)(R.b,{exact:!0,path:"/home",component:Se}),Object(S.jsx)(R.b,{exact:!0,path:"/products",component:We}),Object(S.jsx)(R.b,{exact:!0,path:"/product/:productId",component:ze}),Object(S.jsx)(R.b,{exact:!0,path:"/search",component:lt}),Object(S.jsx)(R.b,{exact:!0,path:"/cart",component:gt}),Object(S.jsx)(R.b,{path:"*",children:Object(S.jsx)("span",{children:"404 Not Found."})})]}),Object(S.jsx)(B.b,{to:"Home"===n?"/products":"/home",children:Object(S.jsx)("button",{id:"btnChangePage",onClick:function(){r("Home"===n?"ProductList":"Home")},children:"View All Products"})}),Object(S.jsx)(R.a,{exact:!0,from:"/wa-react-2021-q4-internal-capstone-project",to:"/home"}),Object(S.jsx)(R.a,{exact:!0,from:"/",to:"/home"})]})},mt=function(){var e=Object(g.useState)(""),t=Object(x.a)(e,2),n=t[0],r=t[1];return Object(S.jsxs)(y,{children:[Object(S.jsxs)(w,{children:[Object(S.jsx)(P,{children:Object(S.jsx)(B.b,{to:"/home",children:Object(S.jsx)("img",{src:"data:image/png;base64,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",style:{cursor:"pointer"},alt:"logo",height:"100%"})})}),Object(S.jsxs)(D,{children:[Object(S.jsx)("input",{value:n,onInput:function(e){return r(e.target.value)},type:"text",placeholder:"Search products..."}),Object(S.jsx)(B.b,{to:"/search?q=".concat(n),children:Object(S.jsx)("button",{children:"Search"})})]}),Object(S.jsx)(I,{})]}),Object(S.jsx)(C,{children:Object(S.jsx)(Ot,{})}),Object(S.jsx)(k,{children:"Ecommerce created during Wizeline\u2019s Academy React Bootcamp."})]})},ht=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},xt={currentPage:1,totalPages:1,filters:[]};var At={currentPage:1,totalPages:1};var vt={amountItems:0,items:[]};var yt=Object(V.c)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_initial_state":return xt;case"set_values":return e.currentPage=t.payload.currentPage,e.totalPages=t.payload.totalPages,e.filters=t.payload.filters,e;case"set_current_page":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:t.payload});case"next":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:e.currentPage<e.totalPages?e.currentPage+1:e.currentPage});case"prev":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:e.currentPage>1?e.currentPage-1:e.currentPage});case"first":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:1});case"last":var n=Object(Te.a)(Object(Te.a)({},e),{},{currentPage:e.totalPages});return n;case"modify_filter":return e.filters.includes(t.payload)?Object(Te.a)(Object(Te.a)({},e),{},{filters:e.filters.filter((function(e){return e!==t.payload}))}):Object(Te.a)(Object(Te.a)({},e),{},{filters:[].concat(Object(Ke.a)(e.filters),[t.payload])});case"add_querystring":return e.filters=[t.payload],e;case"add_filter":return Object(Te.a)(Object(Te.a)({},e),{},{filters:[].concat(Object(Ke.a)(e.filters),[t.payload])});case"remove_filter":return Object(Te.a)(Object(Te.a)({},e),{},{filters:e.filters.filter((function(e){return e!==t.payload}))});case"reset_filter":return{currentPage:e.currentPage,totalPages:e.totalPages,filters:[]};default:return e}},searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sr_set_initial_state":return At;case"sr_set_values":return e.currentPage=t.payload.currentPage,e.totalPages=t.payload.totalPages,e;case"sr_set_current_page":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:t.payload});case"sr_next":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:e.currentPage<e.totalPages?e.currentPage+1:e.currentPage});case"sr_prev":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:e.currentPage>1?e.currentPage-1:e.currentPage});case"sr_first":return Object(Te.a)(Object(Te.a)({},e),{},{currentPage:1});case"sr_last":var n=Object(Te.a)(Object(Te.a)({},e),{},{currentPage:e.totalPages});return n;default:return e}},shoppingCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_cart":if(e.items.some((function(e){return e.id===t.payload.id}))){var n=e.items.findIndex((function(e){return e.id===t.payload.id})),r=Object(Ke.a)(e.items);return r[n]=Object(Te.a)(Object(Te.a)({},r[n]),{},{quantity:r[n].quantity+t.payload.quantity<=r[n].stock?r[n].quantity+t.payload.quantity:r[n].quantity}),{amountItems:e.amountItems,items:r}}return{amountItems:e.amountItems+1,items:[].concat(Object(Ke.a)(e.items),[t.payload])};case"remove_cart":return e.amountItems>0?{amountItems:e.amountItems-1,items:e.filters.filter((function(e){return e.id!==t.payload}))}:e;case"checkout":case"clear_cart":return vt;default:return e}}}),Pt=yt,wt=n(32),Dt=Object(V.d)(Pt,{},Object(V.a)(wt.a));h.a.render(Object(S.jsx)(B.a,{children:Object(S.jsx)(L.a,{store:Dt,children:Object(S.jsx)(mt,{})})}),document.getElementById("root")),ht()}},[[52,1,2]]]);
//# sourceMappingURL=main.8c5d7dc5.chunk.js.map