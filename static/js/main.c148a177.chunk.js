(this.webpackJsonpbeender=this.webpackJsonpbeender||[]).push([[0],{13:function(e,t,n){},26:function(e,t,n){e.exports=n(37)},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),l=n(11),u=n(10),i=n(21),s=window.Cypress&&window.initialState||[{id:"1",status:"unknown"},{id:"2",status:"unknown"},{id:"3",status:"unknown"},{id:"4",status:"unknown"},{id:"5",status:"unknown"},{id:"6",status:"unknown"},{id:"7",status:"unknown"}];var d=Object(u.b)({gallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOVE":return e.map((function(e){return e.id===t.id?Object(i.a)({},e,{status:"Love"}):e}));case"HATE":return e.map((function(e){return e.id===t.id?Object(i.a)({},e,{status:"Hate"}):e}));default:return e}}}),m=(n(35),n(13),n(8)),p=n(9);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Some welcome text about where you are"),r.a.createElement(p.b,{to:"/beender/gallery",className:"App-link"},"Goto Gallery")))},b=n(16),f=Object(l.b)((function(e){return{beerPic:e.gallery}}),(function(e,t){return{onLove:function(t){return e(function(e){return console.log({type:"LOVE",id:e}),{type:"LOVE",id:e}}(t))},onHate:function(t){return e(function(e){return console.log({type:"HATE",id:e}),{type:"HATE",id:e}}(t))}}}))((function(e){var t=e.onHate,n=e.beerPic,c=e.onLove,o=n.map((function(e,t){return t})),l=Object(a.useState)(o[0]),u=Object(b.a)(l,2),i=u[0],s=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"You are in the Gallery"),r.a.createElement("div",{id:"gallery"},i>=7?r.a.createElement("div",{onLoad:console.log(n)},r.a.createElement(p.b,{to:"/beender/choice"},"Goto Choice")):r.a.createElement("div",null,r.a.createElement("button",{id:"hateButton",onClick:function(){return e=n[i].id,s(i+1),void t(e);var e}}," Hate "),r.a.createElement("span",{id:"beerPic"}," ",n[i].id," : ",n[i].status," "),r.a.createElement("button",{id:"loveButton",onClick:function(){return e=n[i].id,s(i+1),void c(e);var e}}," Love "),r.a.createElement("div",{id:"beerPicLog"},o.map((function(e){return e===i?"+ ":"- "})))))))})),v=Object(l.b)((function(e){return{choice:e.gallery.filter((function(e){return"Love"===e.status}))}}))((function(e){var t=e.choice,n=Object(a.useState)(""),c=Object(b.a)(n,2),o=c[0],l=c[1],u=function(e){var t=e.num;return r.a.createElement("span",{onClick:function(){l(o=t),console.log("beerId :",o)}},"#",t,r.a.createElement("br",null))};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"You love: "),r.a.createElement("div",{id:"choice"},t.map((function(e){return r.a.createElement(u,{num:e.id})}))),r.a.createElement("p",null,"You are in a world of chosen cards")))}));var h=function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/beender",component:E,exact:!0}),r.a.createElement(m.a,{path:"/beender/gallery",component:f,exact:!0}),r.a.createElement(m.a,{path:"/beender/choice",component:v,exact:!0}))},w=Object(u.c)(d);o.a.render(r.a.createElement(l.a,{store:w},r.a.createElement(p.a,null,r.a.createElement(h,null))),document.getElementById("root")),window.Cypress&&(window.store=w)}},[[26,1,2]]]);
//# sourceMappingURL=main.c148a177.chunk.js.map