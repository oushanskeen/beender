(this.webpackJsonpbeender=this.webpackJsonpbeender||[]).push([[0],{14:function(e,t,n){},37:function(e,t,n){e.exports=n(67)},64:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(15),c=n.n(a),l=n(6),i=n(12),u=n(33),d=(n(46),function(){return function(e){return e((console.log({type:"FETCH_GALLERY_REQUEST"}),{type:"FETCH_GALLERY_REQUEST"})),fetch("http://localhost:3001/gallery").then((function(e){return e.json()})).then((function(t){return e(function(e){return console.log({type:"FETCH_GALLERY_RESPONSE",body:e}),{type:"FETCH_GALLERY_RESPONSE",body:e}}(t))})).then((function(t){return e(function(e){return console.log({type:"FETCH_GALLERY_FAILURE",ex:e}),{type:"FETCH_GALLERY_FAILURE",ex:e}}(t))}))}}),s=n(34),E=n.n(s),m=function(){return function(e){E.a.get("http://localhost:5000/hello").then((function(e){return e.data})).then((function(t){var n;console.log("message after fetch : ",t),e((n=t,console.log({type:"FETCH_HELLO_RESPONSE"}),{type:"FETCH_HELLO_RESPONSE",data:n}))}))}},p=window.Cypress&&window.initialState||{message:"simple hello"};var f=n(21),h=window.Cypress&&window.initialState||[{id:"1",status:"unknown"},{id:"2",status:"unknown"},{id:"3",status:"unknown"},{id:"4",status:"unknown"},{id:"5",status:"unknown"},{id:"6",status:"unknown"},{id:"7",status:"unknown"}];var y=window.Cypress&&window.initialState||{isSelected:" "};var v=window.Cypress&&window.initialState||{outcome:" "};var b=Object(i.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_HELLO_RESPONSE":return{welcome:t.data};case"FETCH_HELLO_REQUEST":R.dispatch(m());default:return e}},gallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOVE":return e.map((function(e){return e.id===t.id?Object(f.a)({},e,{status:"Love"}):e}));case"HATE":return e.map((function(e){return e.id===t.id?Object(f.a)({},e,{status:"Hate"}):e}));case"FETCH_GALLERY_RESPONSE":return t.body;default:return e}},choice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT":return[{isSelected:t.id}];default:return e}},selection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OUTCOME":return[{outcome:t.id}];default:return e}}}),L=function(e,t){return"HOME"===t.type&&(e=void 0),b(e,t)},O=(n(64),n(11)),w=(n(65),n(2)),g=Object(l.b)((function(e){return{hello:e.home,store:e}}),(function(e){return{onHello:e((console.log({type:"FETCH_HELLO_REQUEST"}),{type:"FETCH_HELLO_REQUEST"}))}}))((function(e){e.hello,e.store;return r.a.createElement("div",{class:"HomeBox"},r.a.createElement("div",{class:"HomeWelcomeText cell"},r.a.createElement("p",null,"Some welcome text about where you are")),r.a.createElement("div",{class:"HomeGoToGalleryBox"},r.a.createElement(w.b,{to:"/beender/gallery",class:"HomeGoToGalleryButton cell"},"Go To Gallery ",r.a.createElement("pre",null," >>> "))))})),H=n(36),S=(n(14),Object(l.b)((function(e){return{beerPic:e.gallery}}),(function(e,t){return{onLove:function(t){return e(function(e){return console.log({type:"LOVE",id:e}),{type:"LOVE",id:e}}(t))},onHate:function(t){return e(function(e){return console.log({type:"HATE",id:e}),{type:"HATE",id:e}}(t))},onFetchGallery:e(d())}}))((function(e){var t=e.onHate,n=e.beerPic,a=e.onLove,c=n.map((function(e,t){return t})),l=Object(o.useState)(c[0]),i=Object(H.a)(l,2),u=i[0],d=i[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"You are in the Gallery"),r.a.createElement("div",{id:"gallery"},u>=n.length?r.a.createElement("div",null,r.a.createElement(w.b,{to:"/beender/choice"},"Goto Choice")):r.a.createElement("div",null,r.a.createElement("button",{id:"hateButton",onClick:function(){return e=n[u].id,d(u+1),void t(e);var e}}," Hate "),r.a.createElement("span",{id:"beerPic"}," ",n[u].id," : ",n[u].status," "),r.a.createElement("button",{id:"loveButton",onClick:function(){return e=n[u].id,d(u+1),void a(e);var e}}," Love "),r.a.createElement("div",{id:"beerPicLog"},c.map((function(e){return e===u?"+ ":"- "})))))))}))),C=Object(l.b)((function(e){return{isLoved:e.gallery.filter((function(e){return"Love"===e.status})),isSelected:e.choice}}),(function(e,t){return{onSelect:function(t){return e(function(e){return console.log({type:"SELECT",id:e}),{type:"SELECT",id:e}}(t))}}}))((function(e){var t=e.isLoved,n=(e.isSelected,e.onSelect);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"You love: "),r.a.createElement("div",{id:"choice"},t.map((function(e){return r.a.createElement(w.b,{to:"/beender/choice/:".concat(e.id),onClick:function(){return n(e.id)}},r.a.createElement("p",null,e.id))}))),r.a.createElement("p",null," You are in a world of chosen cards ")))})),T=Object(l.b)((function(e){return{selection:e.choice,info:e.gallery}}),(function(e,t){return{onNo:function(){return e((console.log({type:"DESELECT"}),{type:"DESELECT"}))},onYes:function(){return e(function(e){return console.log({type:"OUTCOME",id:e}),{type:"OUTCOME",id:e}}(t))}}}))((function(e){e.selection;var t=e.info,n=void 0===t?[{id:"1",status:"unknown"}]:t,o=e.onNo,a=e.onYes,c=Object(O.f)().beerId,l=n.filter((function(e){return e.id===c[1]}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"You are in a world of your selections"),r.a.createElement("div",{id:"selection"},r.a.createElement("p",{id:"selectedCard"},"id: ",l[0].id,", status: ",l[0].status),r.a.createElement(w.b,{to:"/beender/choice",id:"noButton",onClick:function(){return o()}},"NO"),r.a.createElement("span",null," "),r.a.createElement(w.b,{to:"/beender/order",id:"yesButton",onClick:function(){return a(c[1])}},"YES"))))})),_=Object(l.b)((function(e){return{gallery:e.gallery,outcome:e.choice[0]}}),(function(e,t){return{onHome:function(){return e((console.log({type:"HOME"}),{type:"HOME"}))}}}))((function(e){var t=e.gallery,n=e.outcome,o=void 0===n?{isSelected:""}:n,a=e.onHome,c=t.filter((function(e){return e.id===o.isSelected}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{id:"beerOrder"},"You seem ready to order",void 0===c[0]?r.a.createElement("p",null,"Pardon, you chose nothing"):r.a.createElement("p",null,"Your order:",c[0].id),r.a.createElement(w.b,{to:"/beender",id:"homeButton",onClick:a},"HOME"))))}));var A=function(){return r.a.createElement("main",null,r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/beender/",component:g}),r.a.createElement(O.a,{exact:!0,path:"/beender/gallery",component:S}),r.a.createElement(O.a,{exact:!0,path:"/beender/choice",component:C}),r.a.createElement(O.a,{exact:!0,path:"/beender/choice/:beerId",component:T}),r.a.createElement(O.a,{exact:!0,path:"/beender/order",component:_})))};n.d(t,"store",(function(){return R}));var R=Object(i.d)(L,Object(i.a)(u.a));c.a.render(r.a.createElement(l.a,{store:R},r.a.createElement(w.a,null,r.a.createElement(A,null))),document.getElementById("root")),window.Cypress&&(window.store=R)}},[[37,1,2]]]);
//# sourceMappingURL=main.a79fa654.chunk.js.map