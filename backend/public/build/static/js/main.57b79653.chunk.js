(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(20),s=c.n(r),i=c(22),o=c(3),l=c(0);var j=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"HOME"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{height:"300",width:"500",src:"/images/chia-fruit-drink.jpg",alt:"Chia Fruit Shake"}),Object(l.jsxs)("div",{children:["Photo by ",Object(l.jsx)("a",{href:"AUTHOR_LINK",children:"Brenda Godinez"})," on"," ",Object(l.jsx)("a",{href:"UNSPLASH_LINK",children:"Unsplash"})]})]}),Object(l.jsx)("a",{href:"/places",children:Object(l.jsx)("button",{className:"btn-primary",children:"Places Page"})})]})},u=c(4),m=c.n(u),b=c(7),d=c(6);var h=function(e){var t=Object(o.f)(),c=Object(n.useState)([]),a=Object(d.a)(c,2),r=a[0],s=a[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","places"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=r.map((function(e){return Object(l.jsxs)("div",{className:"col-sm-6",children:[Object(l.jsx)("h2",{children:Object(l.jsx)("a",{href:"#",onClick:function(){return t.push("/places/".concat(e.placeId))},children:e.name})}),Object(l.jsx)("p",{className:"text-center",children:e.cuisines}),Object(l.jsx)("img",{style:{maxWidth:200},src:e.pic,alt:e.name}),Object(l.jsxs)("p",{className:"text-center",children:["Located in ",e.city,", ",e.state]})]},e.placeId)}));return Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"Places to Rant or Rave About"}),Object(l.jsx)("div",{className:"row",children:i})]})},O=c(23),p=c(2);var f=function(e){var t=e.comment,c=e.onDelete;return Object(l.jsxs)("div",{className:"border col-sm-4",children:[Object(l.jsx)("h2",{className:"rant",children:t.rant?"Rant! \ud83d\ude21":"Rave! \ud83d\ude3b"}),Object(l.jsx)("h4",{children:t.content}),Object(l.jsx)("h3",{children:Object(l.jsxs)("strong",{children:["- ",t.author.firstName," ",t.author.lastName]})}),Object(l.jsxs)("h4",{children:["Rating: ",t.stars]}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:c,children:"Delete Comment"})]})};var x=function(e){var t=e.place,c=e.onSubmit,a=Object(n.useState)([]),r=Object(d.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)({content:"",stars:3,rant:!1,authorId:""}),j=Object(d.a)(o,2),u=j[0],h=j[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var t,c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","users"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,h(Object(p.a)(Object(p.a)({},u),{},{authorId:null===(t=n[0])||void 0===t?void 0:t.userId})),i(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=s.map((function(e){return Object(l.jsxs)("option",{value:e.userId,children:[e.firstName," ",e.lastName]},e.userId)}));return Object(l.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),c(u),h({content:"",stars:3,rant:!1,authorId:null===(t=s[0])||void 0===t?void 0:t.userId})},children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"form-group col-sm-12",children:[Object(l.jsx)("label",{htmlFor:"content",children:"Content"}),Object(l.jsx)("textarea",{required:!0,value:u.content,onChange:function(e){return h(Object(p.a)(Object(p.a)({},u),{},{content:e.target.value}))},className:"form-control",id:"content",name:"content"})]})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"form-group col-sm-4",children:[Object(l.jsx)("label",{htmlFor:"state",children:"Author"}),Object(l.jsx)("select",{className:"form-control",value:u.authorId,onChange:function(e){return h(Object(p.a)(Object(p.a)({},u),{},{authorId:e.target.value}))},children:O})]}),Object(l.jsxs)("div",{className:"form-group col-sm-4",children:[Object(l.jsx)("label",{htmlFor:"stars",children:"Star Rating"}),Object(l.jsx)("input",{value:u.stars,onChange:function(e){return h(Object(p.a)(Object(p.a)({},u),{},{stars:e.target.value}))},type:"range",step:"0.5",min:"1",max:"5",id:"stars",name:"stars",className:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group col-sm-4",children:[Object(l.jsx)("label",{htmlFor:"rand",children:"Rant"}),Object(l.jsx)("input",{checked:t.rant,onClick:function(e){return h(Object(p.a)(Object(p.a)({},u),{},{rant:e.target.checked}))},type:"checkbox",id:"rant",name:"rant",className:"form-control"})]})]}),Object(l.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Add Comment"})]})};var v=function(){var e=Object(o.g)().placeId,t=Object(o.f)(),c=Object(n.useState)(null),a=Object(d.a)(c,2),r=a[0],s=a[1];if(Object(n.useEffect)((function(){(function(){var t=Object(b.a)(m.a.mark((function t(){var c,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("/","places/").concat(e));case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,s(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),null===r)return Object(l.jsx)("h1",{children:"Loading"});function i(){return(i=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","places/").concat(r.placeId),{method:"DELETE"});case 2:t.push("/places");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(b.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","places/").concat(r.placeId,"/comments/").concat(t.commentId),{method:"DELETE"});case 2:s(Object(p.a)(Object(p.a)({},r),{},{comments:r.comments.filter((function(e){return e.commentId!==t.commentId}))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(b.a)(m.a.mark((function e(t){var c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","places/").concat(r.placeId,"/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(Object(p.a)(Object(p.a)({},r),{},{comments:[].concat(Object(O.a)(r.comments),[n])}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=Object(l.jsx)("h3",{className:"inactive",children:"No comments yet!"}),v=Object(l.jsx)("h3",{className:"inactive",children:"Not yet rated"});if(r.comments.length){for(var g=r.comments.reduce((function(e,t){return e+t.stars}),0),N=Math.round(g/r.comments.length),y="",w=0;w<N;w++)y+="\u2b50\ufe0f";v=Object(l.jsxs)("h3",{children:[y," stars"]}),h=r.comments.map((function(e){return Object(l.jsx)(f,{comment:e,onDelete:function(){return function(e){return j.apply(this,arguments)}(e)}},e.commentId)}))}return Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-sm-6",children:[Object(l.jsx)("img",{style:{maxWidth:200},src:r.pic,alt:r.name}),Object(l.jsxs)("h3",{children:["Located in ",r.city,", ",r.state]})]}),Object(l.jsxs)("div",{className:"col-sm-6",children:[Object(l.jsx)("h1",{children:r.name}),Object(l.jsx)("h2",{children:"Rating"}),v,Object(l.jsx)("br",{}),Object(l.jsx)("h2",{children:"Description"}),Object(l.jsxs)("h3",{children:[r.name," has been serving ",r.city,", ",r.state," since"," ",r.founded,"."]}),Object(l.jsxs)("h4",{children:["Serving ",r.cuisines,"."]}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{className:"btn btn-warning",onClick:function(){t.push("/places/".concat(r.placeId,"/edit"))},children:"Edit"})," ",Object(l.jsx)("button",{type:"submit",className:"btn btn-danger",onClick:function(){return i.apply(this,arguments)},children:"Delete"})]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h2",{children:"Comments"}),Object(l.jsx)("div",{className:"row",children:h}),Object(l.jsx)("hr",{}),Object(l.jsx)("h2",{children:"Got Your Own Rant or Rave?"}),Object(l.jsx)(x,{place:r,onSubmit:function(e){return u.apply(this,arguments)}})]})},g=Object(n.createContext)();var N=function(e){var t=e.children,c=Object(n.useState)(null),a=Object(d.a)(c,2),r=a[0],s=a[1];return window.setCurrentUser=s,Object(l.jsx)(g.Provider,{value:{currentUser:r,setCurrentUser:s},children:t})};var y=function(){var e=Object(o.f)(),t=Object(n.useContext)(g).currentUser,c=Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("li",{style:{float:"right"},children:Object(l.jsx)("a",{href:"#",onClick:function(){return e.push("/sign-up")},children:"Sign Up"})}),Object(l.jsx)("li",{style:{float:"right"},children:Object(l.jsx)("a",{href:"#",onClick:function(){return e.push("/login")},children:"Login"})})]});return t&&(c=Object(l.jsxs)("li",{style:{float:"right"},children:["Logged in as ",t.firstName," ",t.lastName]})),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",onClick:function(){return e.push("/")},children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",onClick:function(){return e.push("/places")},children:"Places"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",onClick:function(){return e.push("/places/new")},children:"Add Place"})}),c]})})};var w=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"404: PAGE NOT FOUND"}),Object(l.jsx)("p",{children:"Oops, sorry, we can't find this page!"}),Object(l.jsx)("img",{src:"".concat("/","images/kittykat.jpeg"),alt:"cute cat pic"})]})};var C=function(){var e=Object(o.f)(),t=Object(n.useState)({name:"",pic:"",city:"",state:"",cuisines:""}),c=Object(d.a)(t,2),a=c[0],r=c[1];function s(){return(s=Object(b.a)(m.a.mark((function t(c){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,fetch("".concat("/","places"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:e.push("/places");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"Add a New Place"}),Object(l.jsxs)("form",{onSubmit:function(e){return s.apply(this,arguments)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Place Name"}),Object(l.jsx)("input",{required:!0,value:a.name,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{name:e.target.value}))},className:"form-control",id:"name",name:"name"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"founded",children:"Year Founded"}),Object(l.jsx)("input",{required:!0,value:a.founded,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{founded:e.target.value}))},className:"form-control",id:"founded",name:"founded"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"pic",children:"Place Picture"}),Object(l.jsx)("input",{value:a.pic,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{pic:e.target.value}))},className:"form-control",id:"pic",name:"pic"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"city",children:"City"}),Object(l.jsx)("input",{value:a.city,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{city:e.target.value}))},className:"form-control",id:"city",name:"city"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"state",children:"State"}),Object(l.jsx)("input",{value:a.state,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{state:e.target.value}))},className:"form-control",id:"state",name:"state"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"cuisines",children:"Cuisines"}),Object(l.jsx)("input",{value:a.cuisines,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{cuisines:e.target.value}))},className:"form-control",id:"cuisines",name:"cuisines",required:!0})]}),Object(l.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Add Place"})]})]})};var S=function(){var e=Object(o.f)(),t=Object(o.g)().placeId,c=Object(n.useState)({name:"",pic:"",city:"",state:"",cuisines:""}),a=Object(d.a)(c,2),r=a[0],s=a[1];function i(){return(i=Object(b.a)(m.a.mark((function t(c){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,fetch("".concat("/","places/").concat(r.placeId),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:e.push("/places/".concat(r.placeId));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","places/").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"Edit Place"}),Object(l.jsxs)("form",{onSubmit:function(e){return i.apply(this,arguments)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Place Name"}),Object(l.jsx)("input",{required:!0,value:r.name,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{name:e.target.value}))},className:"form-control",id:"name",name:"name"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"founded",children:"Year Founded"}),Object(l.jsx)("input",{required:!0,value:r.founded,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{founded:e.target.value}))},className:"form-control",id:"founded",name:"founded"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"pic",children:"Place Picture"}),Object(l.jsx)("input",{value:r.pic,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{pic:e.target.value}))},className:"form-control",id:"pic",name:"pic"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"city",children:"City"}),Object(l.jsx)("input",{value:r.city,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{city:e.target.value}))},className:"form-control",id:"city",name:"city"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"state",children:"State"}),Object(l.jsx)("input",{value:r.state,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{state:e.target.value}))},className:"form-control",id:"state",name:"state"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"cuisines",children:"Cuisines"}),Object(l.jsx)("input",{value:r.cuisines,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{cuisines:e.target.value}))},className:"form-control",id:"cuisines",name:"cuisines",required:!0})]}),Object(l.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Save"})]})]})};var k=function(){var e=Object(o.f)(),t=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),c=Object(d.a)(t,2),a=c[0],r=c[1];function s(){return(s=Object(b.a)(m.a.mark((function t(c){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,fetch("".concat("/","users/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"Sign Up"}),Object(l.jsxs)("form",{onSubmit:function(e){return s.apply(this,arguments)},children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(l.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(l.jsx)("input",{required:!0,value:a.firstName,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{firstName:e.target.value}))},className:"form-control",id:"firstName",name:"firstName"})]}),Object(l.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(l.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(l.jsx)("input",{required:!0,value:a.lastName,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{lastName:e.target.value}))},className:"form-control",id:"lastName",name:"lastName"})]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email"}),Object(l.jsx)("input",{type:"email",required:!0,value:a.email,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{email:e.target.value}))},className:"form-control",id:"email",name:"email"})]}),Object(l.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",required:!0,value:a.password,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{password:e.target.value}))},className:"form-control",id:"password",name:"password"})]})]}),Object(l.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Sign Up"})]})]})};var F=function(){var e=Object(o.f)(),t=Object(n.useContext)(g).setCurrentUser,c=Object(n.useState)({email:"",password:""}),a=Object(d.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(null),j=Object(d.a)(i,2),u=j[0],h=j[1];function O(){return(O=Object(b.a)(m.a.mark((function c(n){var a,s;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.next=3,fetch("".concat("/","authentication/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:return a=c.sent,c.next=6,a.json();case 6:s=c.sent,200===a.status?(t(s.user),e.push("/")):h(s.message);case 8:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"Login"}),null!==u?Object(l.jsx)("div",{className:"alert alert-danger",role:"alert",children:u}):null,Object(l.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email"}),Object(l.jsx)("input",{type:"email",required:!0,value:r.email,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{email:e.target.value}))},className:"form-control",id:"email",name:"email"})]}),Object(l.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",required:!0,value:r.password,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{password:e.target.value}))},className:"form-control",id:"password",name:"password"})]})]}),Object(l.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Login"})]})]})};var I=function(){return Object(l.jsx)(N,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(y,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(o.a,{exact:!0,path:"/sign-up",component:k}),Object(l.jsx)(o.a,{exact:!0,path:"/login",component:F}),Object(l.jsx)(o.a,{exact:!0,path:"/places",component:h}),Object(l.jsx)(o.a,{exact:!0,path:"/places/new",component:C}),Object(l.jsx)(o.a,{exact:!0,path:"/places/:placeId",component:v}),Object(l.jsx)(o.a,{exact:!0,path:"/places/:placeId/edit",component:S}),Object(l.jsx)(o.a,{path:"/",component:w})]})]})})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.57b79653.chunk.js.map