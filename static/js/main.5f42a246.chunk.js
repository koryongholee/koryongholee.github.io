(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n,i,s=c(25),r=c(0),a=c.n(r),j=c(14),d=c.n(j),o=(c(69),c(17)),l=c(106),b=c(104),h=c(107),u=c(105),O=(c(70),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),x=c(42),p=c(7),f=c(43),v=(c(71),c(108)),m=c(18),g=c(2),k=f.a.div(n||(n=Object(x.a)(["\n    padding : 20px;\n"]))),y=f.a.h4(i||(i=Object(x.a)(["\n    font-size:25px;\n    color: ",";\n"])),(function(e){return e.color}));function N(e){return Object(r.useEffect)((function(){e.chgSw(!0)})),0===e.tab?Object(g.jsx)("div",{children:"0\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4."}):1===e.tab?Object(g.jsx)("div",{children:"1\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4."}):2===e.tab?Object(g.jsx)("div",{children:"2\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4."}):void 0}function C(e){return Object(g.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock[0]]})}function S(){return Object(g.jsx)("div",{className:"my-alert2",children:Object(g.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})})}var w=Object(m.b)((function(e){return{state:e.reducer,alert:e.reducer2}}))((function(e){var t=Object(r.useContext)(L),c=Object(r.useState)(!0),n=Object(o.a)(c,2),i=n[0],s=n[1],a=Object(r.useState)(""),j=Object(o.a)(a,2),d=(j[0],j[1],Object(r.useState)(0)),l=Object(o.a)(d,2),b=l[0],u=l[1],O=Object(r.useState)(!1),x=Object(o.a)(O,2),f=x[0],m=x[1];Object(r.useEffect)((function(){var e=setTimeout((function(){s(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var w=Object(p.g)().id,B=Object(p.f)(),F=e.shoes.find((function(e){return e.id==w}));return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(k,{children:Object(g.jsx)(y,{className:"red",children:"\uc0c1\uc138\ud398\uc774\uc9c0"})}),!0===i?Object(g.jsx)(S,{}):null,Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-md-6",children:Object(g.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(F.id+1)+".jpg",width:"100%"})}),Object(g.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(g.jsxs)("h4",{className:"pt-5",children:[" ",F.title," "]}),Object(g.jsx)("p",{children:F.content}),Object(g.jsx)("p",{children:F.price}),Object(g.jsx)(C,{stock:t}),Object(g.jsx)("button",{className:"btn btn-danger",onClick:function(){e.dispatch({type:"goodsAdd",payload:{id:F.id,name:F.title,quan:1}}),B.push("/cart")},children:"\uc8fc\ubb38\ud558\uae30"})," \xa0",Object(g.jsx)("button",{className:"btn btn-danger",onClick:function(){B.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]}),Object(g.jsxs)(h.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"/home",children:[Object(g.jsx)(h.a.Item,{children:Object(g.jsx)(h.a.Link,{eventKey:"link-0",onClick:function(){u(0),m(!1)},children:"Active"})}),Object(g.jsx)(h.a.Item,{children:Object(g.jsx)(h.a.Link,{eventKey:"link-1",onClick:function(){u(1),m(!1)},children:"Option 2"})})]}),Object(g.jsx)(v.a,{in:f,classNames:"wow",timeout:500,children:Object(g.jsx)(N,{tab:b,chgSw:m})})]})})),B=c(61),F=c.n(B),q=c(103);function I(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.v.id}),Object(g.jsx)("td",{children:e.v.name}),Object(g.jsx)("td",{children:e.v.quan}),Object(g.jsxs)("td",{children:[Object(g.jsx)("button",{onClick:function(){e.p.dispatch({type:"plus",id:e.v.id})},children:" + "}),Object(g.jsx)("button",{onClick:function(){e.p.dispatch({type:"minus",id:e.v.id})},children:" - "})]})]})}var A=Object(m.b)((function(e){return{state:e.reducer,alert:e.reducer2}}))((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(q.a,{responsive:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(g.jsx)("th",{children:"\uc218\ub7c9"}),Object(g.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(g.jsx)("tbody",{children:e.state.map((function(t,c){return Object(g.jsx)(I,{v:t,p:e},c)}))})]}),!0===e.alert?Object(g.jsxs)("div",{className:"my-alert2",children:[Object(g.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%"}),Object(g.jsx)("button",{onClick:function(){e.dispatch({type:"close"})},children:"\ub2eb\uae30"})]}):null]})})),T=c(28),L=a.a.createContext();function D(e){var t=Object(p.f)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.shoes.id)},children:[Object(g.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(g.jsxs)("h4",{children:[" ",e.shoes.title," "]}),Object(g.jsxs)("p",{children:[" ",e.shoes.content," & ",e.shoes.price]}),Object(g.jsx)(K,{i:e.i})]})})}function K(e){var t=e.i,c=Object(r.useContext)(L);return Object(g.jsxs)("p",{children:["\uc7ac\uace0 : ",c[t]," "]})}var P=Object(m.b)((function(e){return{reduxVal:e.reducer}}))((function(e){var t=Object(r.useState)(O),c=Object(o.a)(t,2),n=c[0],i=c[1],a=Object(r.useState)([10,11,12,4,5,9]),j=Object(o.a)(a,2),d=j[0],x=j[1],f=Object(r.useState)(1),v=Object(o.a)(f,2),m=v[0],k=v[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(l.a,{bg:"light",expand:"lg",children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(l.a.Brand,{href:"/",children:"20% Season OFF"}),Object(g.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(h.a,{className:"me-auto",children:[Object(g.jsx)(h.a.Link,{as:T.b,to:"/",children:"Home "}),Object(g.jsx)(h.a.Link,{as:T.b,to:"/Cart",children:"Cart"}),Object(g.jsxs)(u.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(g.jsx)(u.a.Item,{href:"#action/3.1",children:"Action"}),Object(g.jsx)(u.a.Item,{href:"#action/3.2",children:"Another action"}),Object(g.jsx)(u.a.Item,{href:"#action/3.3",children:"Something"}),Object(g.jsx)(u.a.Divider,{}),Object(g.jsx)(u.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(g.jsxs)(p.c,{children:[Object(g.jsxs)(p.a,{exact:!0,path:"/",children:[Object(g.jsxs)("div",{className:"background",children:[Object(g.jsx)("h1",{children:" DragonTiger \uc1fc\ud551\ubab0 "}),Object(g.jsx)("p",{children:"\uc548\ub155\ud558\uc138\uc694 DragonTiger \uc1fc\ud551\ubab0 \uc785\ub2c8\ub2e4. React \uc5f0\uc2b5\uc6a9 \uc1fc\ud551\ubab0 \uc785\ub2c8\ub2e4. \uac10\uc0ac\ud569\ub2c8\ub2e4."})]}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(L.Provider,{value:d,children:Object(g.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(g.jsx)(D,{shoes:e,i:t},t)}))})}),m<2?Object(g.jsx)("button",{className:"btn btn-primary",onClick:function(){F.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){i([].concat(Object(s.a)(n),Object(s.a)(e.data))),k(++m)})).catch((function(){console.log("failed")}))},children:"\ub354\ubcf4\uae30"}):null]})]}),Object(g.jsx)(p.a,{path:"/detail/:id",children:Object(g.jsx)(L.Provider,{value:d,children:Object(g.jsx)(w,{shoes:n,stock:d,chgStock:x})})}),Object(g.jsx)(p.a,{path:"/cart",children:Object(g.jsx)(A,{})})]})]})})),E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,109)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))},J=c(46),R=!0;var W=[{id:0,name:"White and Black",quan:1}];var z=Object(J.b)(Object(J.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;if("goodsAdd"===t.type){var c=Object(s.a)(e),n=c.find((function(e){return e.id===t.payload.id}));return n?c[t.payload.id].quan++:c.push(t.payload),c}if("plus"===t.type){var i=Object(s.a)(e),r=i.find((function(e){return e.id===t.id}));return r.quan++,i}if("minus"===t.type){var a=Object(s.a)(e),j=a.find((function(e){return e.id===t.id}));return j.quan=j.quan>0?--j.quan:0,a}return e},reducer2:function(){var e=arguments.length>1?arguments[1]:void 0;return"close"==e.type?R=!1:R}}));d.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(T.a,{children:Object(g.jsx)(m.a,{store:z,children:Object(g.jsx)(P,{})})})}),document.getElementById("root")),E()}},[[98,1,2]]]);
//# sourceMappingURL=main.5f42a246.chunk.js.map