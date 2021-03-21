(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],{114:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(11),c=a.n(i),r=a(24),l=a(12),o=(a(114),a(9)),j=a(101),d=a.n(j),u=a(33),b=a(55),h=a(25),m=a(272),p=a(268),O=a(2),v=function(e){var t=e.username,a=e.checkLoginStatus,s=e.setCheckLoginStatus,n=e.history;return Object(O.jsxs)("div",{className:"login-content",children:[Object(O.jsxs)("p",{children:["Name: ",t]}),Object(O.jsxs)("p",{children:["Status: ",Object(O.jsx)("span",{children:"Online"})]}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),s(!a),n.push("/login")},children:a?"Sing out":"Login"})]})},x=h.a().shape({email:h.b().required().email().max(255),password:h.b().required().min(8)}),g=Object(p.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}})),f=function(e){var t,a,s=e.email,n=e.setEmail,i=e.password,c=e.setPassword,r=e.setApiToken,l=e.instance,j=e.setUserImage,d=e.checkLoginStatus,h=e.setCheckLoginStatus,p=e.username,f=g(),w=Object(o.f)(),k=Object(u.b)({mode:"onBlur",resolver:Object(b.yupResolver)(x)}),S=k.register,N=k.handleSubmit,C=k.errors;return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:N((function(e){h(!d),d?w.push("/login"):(w.push("/answers"),l.post("/auth/login",{email:s,password:i}).then((function(e){console.log("\u042f \u043f\u043e\u043b\u0443\u0447\u0438\u043b:",e.data),j(e.data.user.avatar),r(e.data.token.access_token)})).catch((function(e){console.log(e.response.data)})))})),className:f.root,children:[Object(O.jsx)("div",{className:"btn-title",children:Object(O.jsx)("h3",{children:d?"Sing out":"Login"})}),d?Object(O.jsx)(v,{username:p,checkLoginStatus:d,setCheckLoginStatus:h,history:w}):Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:null===(t=C.email)||void 0===t?void 0:t.message}),Object(O.jsx)(m.a,{inputRef:S,id:"outlined-email-input",label:"Email",variant:"outlined",placeholder:"Enter your email.",name:"email",type:"email",autoComplete:"email",value:s,onChange:function(e){return n(e.target.value)}}),Object(O.jsx)("p",{children:null===(a=C.password)||void 0===a?void 0:a.message}),Object(O.jsx)(m.a,{inputRef:S,id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",name:"password",value:i,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("div",{className:"btn-wrapper",children:Object(O.jsx)("button",{type:"submit",children:d?"Sing out":"Login"})})]})]})})},w=h.a().shape({name:h.b().min(2).max(255).required(),email:h.b().required().email(),password:h.b().required().min(8).max(255)}),k=function(e){var t,a,s,n=e.email,i=e.setEmail,c=e.password,r=e.setPassword,l=(e.setApiToken,e.instance),j=e.username,d=e.setUsername,h=e.avatarFile,p=(e.setAvatarFile,Object(o.f)()),v=Object(u.b)({mode:"onBlur",resolver:Object(b.yupResolver)(w)}),x=v.register,g=v.handleSubmit,f=v.errors;return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:g((function(e){var t=new FormData;h&&t.append("avatar",h,h.name),t.append("email",n),t.append("name",j),t.append("password",c),t.append("password_confirmation",c),console.log(e),l.post("/auth/register",t,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){console.log("\u042f \u043f\u043e\u043b\u0443\u0447\u0438\u043b:",e.data)})).catch((function(e){console.log(e.response.data)})),p.push("/login")})),method:"post",children:[Object(O.jsx)("div",{className:"btn-title",children:Object(O.jsx)("h3",{children:"Registration"})}),Object(O.jsx)("p",{children:null===(t=f.email)||void 0===t?void 0:t.message}),Object(O.jsx)(m.a,{inputRef:x,id:"outlined-email-input",label:"Email",variant:"outlined",placeholder:"Enter your email.",name:"email",type:"email",autoComplete:"email",value:n,onChange:function(e){return i(e.target.value)}}),Object(O.jsx)("p",{children:null===(a=f.name)||void 0===a?void 0:a.message}),Object(O.jsx)(m.a,{inputRef:x,id:"outlined-password-input",label:"Name",type:"text",variant:"outlined",name:"name",value:j,onChange:function(e){return d(e.target.value)}}),Object(O.jsx)("p",{children:null===(s=f.password)||void 0===s?void 0:s.message}),Object(O.jsx)(m.a,{inputRef:x,id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",name:"password",value:c,onChange:function(e){return r(e.target.value)}}),Object(O.jsx)("input",{type:"file",name:"avatar",multiple:!0,accept:".bmp, .jpeg, .png",label:"Avatar",ref:x}),Object(O.jsx)("div",{className:"btn-wrapper",children:Object(O.jsx)("button",{type:"submit",children:"Submit"})})]})})},S=a(273),N=Object(p.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}})),C=function(e){var t=e.answers,a=e.instance,s=e.getApiToken,n=e.setAnswers,i=e.userImage,c=e.username,r=N();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:"answers-h",children:"Answers"}),Object(O.jsxs)("div",{className:"answers-block",children:[Object(O.jsxs)("div",{className:"answers-block-info",children:[Object(O.jsx)("div",{className:r.root,children:Object(O.jsx)(S.a,{src:i,alt:"user"})}),Object(O.jsx)("p",{children:c})]}),Object(O.jsxs)("div",{className:"columm",children:[Object(O.jsx)("div",{className:"wrapper-answers",children:t}),Object(O.jsx)("div",{className:"btn-wrapper",children:Object(O.jsx)("button",{onClick:function(){console.log("I can't use avatar link from your data ".concat(i)),a.get("/posts/1/answers",{headers:{Authorization:"Bearer "+s()}}).then((function(e){console.log(e),n(e.data.data.map((function(e){return Object(O.jsxs)("div",{className:"answer",children:[Object(O.jsx)("div",{className:"user",children:Object(O.jsx)("p",{children:e.user.name})}),Object(O.jsxs)("div",{className:"message",children:[Object(O.jsx)("h4",{children:e.title}),Object(O.jsx)("p",{children:e.message})]})]},e.id)})))})).catch((function(e){console.log(e.response.data)}))},type:"submit",children:"List Answers"})})]})]})]})},y=function(e){var t=e.checkLoginStatus;return Object(O.jsxs)("nav",{children:[Object(O.jsxs)("div",{className:"person-info",children:[Object(O.jsx)("h2",{children:"Zakharov Aleksandr"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"tel:+375256265876",children:"+375(25)6265876"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"mailto:Zakharov.faur@gmail.com",children:"Zakharov.faur@gmail.com"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://github.com/ZakharovOwl",children:"GitHub: ZakharovOwl"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://zakharovowl.github.io/Portfolio/",children:"My Portfolio"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://t.me/zakharov_faur",children:"Telegram"})})]})]}),Object(O.jsxs)("ul",{className:"navigation",children:[Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/",exact:!0,activeClassName:"link_active",className:"list__link",children:"Registration"})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/login",exact:!0,activeClassName:"link_active",className:"list__link",children:t?"Sing out":"Login"})}),Object(O.jsx)("li",{className:t?"":"answers-link-active",children:Object(O.jsx)(r.b,{to:"/answers",exact:!0,activeClassName:"link_active",className:"list__link",children:"Answers"})})]})]})};var L=function(){var e="token",t=Object(s.useState)(""),a=Object(l.a)(t,2),n=a[0],i=a[1],c=Object(s.useState)(""),r=Object(l.a)(c,2),j=r[0],u=r[1],b=Object(s.useState)(""),h=Object(l.a)(b,2),m=h[0],p=h[1],v=Object(s.useState)(void 0),x=Object(l.a)(v,2),g=x[0],w=x[1],S=Object(s.useState)(void 0),N=Object(l.a)(S,2),L=N[0],A=N[1],_=Object(s.useState)(void 0),E=Object(l.a)(_,2),F=E[0],I=E[1],P=Object(s.useState)(!1),R=Object(l.a)(P,2),T=R[0],q=R[1],B=d.a.create({baseURL:"https://guest-book.naveksoft.com/api/v1"}),U=function(t){localStorage.setItem(e,t),console.log("token is working")};return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(y,{checkLoginStatus:T}),Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",children:Object(O.jsx)(k,{email:n,setEmail:i,password:m,setPassword:p,instance:B,setApiToken:U,username:j,setUsername:u,avatarFile:L,setAvatarFile:A})}),Object(O.jsx)(o.a,{path:"/login",children:Object(O.jsx)(f,{email:n,setEmail:i,password:m,setPassword:p,instance:B,setApiToken:U,setUserImage:I,checkLoginStatus:T,setCheckLoginStatus:q,username:j})}),Object(O.jsx)(o.a,{path:"/answers",children:Object(O.jsx)(C,{instance:B,getApiToken:function(){if(!localStorage.getItem(e))throw new Error("No token");return console.log("use token"),localStorage.getItem(e)},setAnswers:w,userImage:F,answers:g,username:j})})]})})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,275)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};c.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(r.a,{children:Object(O.jsx)(L,{})})}),document.getElementById("root")),A()}},[[238,1,2]]]);
//# sourceMappingURL=main.e6f56f9f.chunk.js.map