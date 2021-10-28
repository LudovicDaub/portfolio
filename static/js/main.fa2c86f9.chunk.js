(this["webpackJsonpreact-cv"]=this["webpackJsonpreact-cv"]||[]).push([[0],{21:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(14),s=a.n(c),i=a(5),r=(a(21),a(2)),o=a(1),l=function(){return Object(o.jsx)("div",{className:"navigation",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)(i.b,{to:"/",exact:!0,activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"accueil"})}),Object(o.jsxs)("li",{className:"nav-portfolio",children:["portfolio",Object(o.jsxs)("ul",{className:"nav-projects",children:[Object(o.jsx)(i.b,{to:"/projet-1",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"Compagnie des Archers de la For\xeat"})}),Object(o.jsx)(i.b,{to:"/projet-2",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"100 pour gagner"})}),Object(o.jsx)(i.b,{to:"/projet-3",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"SpaceX Travel Agency"})})]})]}),Object(o.jsx)(i.b,{to:"/contact",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"contact"})})]})})},j=function(){var e=function(){document.querySelectorAll(".social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){var a=t.offsetX-20,n=t.offsetY-13;e.style.transform="translate( ".concat(a,"px, ").concat(n,"px)")})),e.addEventListener("mouseleave",(function(){e.style.transform=""}))}))};return Object(o.jsx)("div",{className:"social-network",children:Object(o.jsxs)("ul",{className:"content",children:[Object(o.jsx)("a",{href:"https://github.com/LudovicDaub",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fab fa-github-square"})})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/ludovic-daub-432392221/",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fab fa-linkedin"})})})]})})},d=function(e){return Object(o.jsx)("div",{className:"scroll-bottom",children:Object(o.jsxs)("div",{className:"sb-main",children:[e.left&&Object(o.jsx)(i.b,{to:e.left,className:"left hover",children:Object(o.jsx)("span",{children:"\u276c"})}),Object(o.jsx)("p",{className:"center",children:"scroll"}),e.right&&Object(o.jsx)(i.b,{to:e.right,className:"right hover",children:Object(o.jsx)("span",{children:"\u276d"})})]})})},m=function(){var e=["simple","clear","smart"],t=0,a=0;return Object(n.useEffect)((function(){var n=document.getElementById("text-target");!function c(){setTimeout((function(){t>=e.length?(t=0,a=0,c()):a<e[t].length?(!function(){var c=document.createElement("span");n.appendChild(c),c.classList.add("letter"),c.style.opacity="0",c.style.animation="anim 5s ease forwards",c.textContent=e[t][a],setTimeout((function(){c.remove()}),2e3)}(),a++,c()):(a=0,t++,setTimeout((function(){c()}),2e3))}),80)}()}),[]),Object(o.jsxs)("span",{className:"dynamic-text",children:[Object(o.jsx)("span",{className:"simply",children:"simply"}),Object(o.jsx)("span",{id:"text-target"})]})},b=a(6),u=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)(b.b.div,{className:"home",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:100},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.3},x:-100}},children:[Object(o.jsx)(l,{}),Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"home-main",children:Object(o.jsxs)("div",{className:"main-content",children:[Object(o.jsx)(b.b.h1,{drag:!0,onDragEnd:!0,dragConstraints:{left:-250,right:950,top:-200,bottom:250},children:"Ludovic Daub"}),Object(o.jsx)(b.b.h2,{drag:!0,onDragEnd:!0,dragConstraints:{left:-250,right:1250,top:-200,bottom:250},children:Object(o.jsx)(m,{})})]})}),Object(o.jsx)(d,{right:"/projet-1"})]})})},h=function(){return Object(o.jsx)("span",{className:"logo",children:"LD"})},p=a(7),x=[{id:1,title:"Compagnie des Archers de la For\xeat",date:"Juillet 2021",languages:["Html","Sass","Bootstrap"],infos:"Projet de site vitrine comprenant une page d'accueil et une page \xe9v\xe9nement r\xe9alis\xe9 dans le cadre de ma formation.",img:"./assets/img/compagnie des archers.png",link:"https://lesarchersdelaforet.netlify.app/"},{id:2,title:"100 pour gagner",date:"Ao\xfbt 2021",languages:["Html","Css","Bootsrap","JavaScript"],infos:"Projet de jeu de d\xe9s en JavaScript r\xe9alis\xe9 dans le cadre de ma formation.",img:"./assets/img/100 pour gagner.png",link:"https://jeu-de-des.netlify.app/"},{id:3,title:"SpaceX Travel Agency",date:"Juin 2021",languages:["Html","Sass","JavaScript"],infos:"Projet personnel pour mettre en pratique Sass et JavaScript.",img:"./assets/img/spacex.png",link:"https://spacex-travel-agency.netlify.app/"}],O=function(e){var t=Object(n.useState)(x),a=Object(p.a)(t,1)[0][e.projectNumber],c=Math.floor(200*Math.random()+700)+"px",s=Math.floor(200*Math.random()+150)+"px",i="scale("+(Math.random()+.7)+")",r=Math.random()>.4?1:-1,l={initial:{opacity:0,x:350*Math.random()*r,y:120*Math.random()*r},visible:{opacity:1,x:0,y:0}};return Object(o.jsxs)(b.b.div,{className:"project-main",initial:"initial",animate:"visible",exit:"exit",transition:{ease:[.03,.87,.73,.9],duration:.6},variants:{initial:{opacity:0,transition:{duration:.5},x:200},visible:{opacity:1,x:0},exit:{opacity:.4,transition:{duration:.35},x:-800}},children:[Object(o.jsxs)("div",{className:"project-content",children:[Object(o.jsx)("h1",{children:a.title}),Object(o.jsx)("p",{children:a.date}),Object(o.jsx)("ul",{className:"languages",children:a.languages.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]}),Object(o.jsxs)(b.b.div,{className:"img-content",initial:"initial",animate:"visible",variants:l,transition:{duration:1.2},children:[Object(o.jsxs)("div",{className:"img-container hover",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("h3",{children:a.title}),Object(o.jsx)("p",{children:a.infos})]}),Object(o.jsx)("img",{src:a.img,alt:a.title,className:"img"})]}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsx)("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(o.jsx)("span",{className:"button",children:"voir le site"})})})]}),Object(o.jsx)("span",{className:"random-circle",style:{left:c,top:s,transform:i}})]})},v=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(l,{}),Object(o.jsx)(h,{}),Object(o.jsx)(O,{projectNumber:0}),Object(o.jsx)(d,{left:"/",right:"/projet-2"})]})})},g=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(l,{}),Object(o.jsx)(h,{}),Object(o.jsx)(O,{projectNumber:1}),Object(o.jsx)(d,{left:"/projet-1",right:"/projet-3"})]})})},f=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(l,{}),Object(o.jsx)(h,{}),Object(o.jsx)(O,{projectNumber:2}),Object(o.jsx)(d,{left:"/projet-2",right:"/contact"})]})})},y=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(p.a)(s,2),r=i[0],l=i[1],j=Object(n.useState)(""),d=Object(p.a)(j,2),m=d[0],b=d[1],u=Object(n.useState)(""),h=Object(p.a)(u,2),x=h[0],O=h[1],v=Object(n.useState)(""),g=Object(p.a)(v,2),f=g[0],y=g[1],N=function(e,t){var a=document.querySelector(".form-message");window.emailjs.send("gmail",e,t).then((function(e){a.innerHTML="Message envoy\xe9 ! Nous vous recontacterons d\xe8s que possible.",a.style.background="#00c1ec",a.style.opacity="1",document.getElementById("name").classList.remove("error"),document.getElementById("email").classList.remove("error"),document.getElementById("message").classList.remove("error"),c(""),l(""),b(""),O(""),y(""),setTimeout((function(){a.style.opacity="0"}),5e3)})).catch((function(e){return a.innerHTML="Une erreur s'est produite, veuillez r\xe9essayer."}))};return Object(o.jsxs)("form",{className:"contact-form",children:[Object(o.jsx)("h2",{children:"contactez-nous"}),Object(o.jsxs)("div",{className:"form-content",children:[Object(o.jsx)("input",{type:"text",id:"name",name:"name",required:!0,onChange:function(e){return c(e.target.value)},placeholder:"nom *",value:a}),Object(o.jsx)("input",{type:"text",id:"company",name:"company",onChange:function(e){return l(e.target.value)},placeholder:"soci\xe9t\xe9",value:r}),Object(o.jsx)("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return b(e.target.value)},placeholder:"t\xe9l\xe9phone",value:m}),Object(o.jsxs)("div",{className:"email-content",children:[Object(o.jsx)("label",{id:"not-mail",children:"Email non valide"}),Object(o.jsx)("input",{type:"mail",id:"email",name:"email",required:!0,onChange:function(e){return O(e.target.value)},placeholder:"email *",value:x})]}),Object(o.jsx)("textarea",{id:"message",name:"message",onChange:function(e){return y(e.target.value)},placeholder:"message *",value:f,required:!0})]}),Object(o.jsx)("input",{className:"button hover",type:"submit",value:"envoyer",onClick:function(e){e.preventDefault();var t=document.getElementById("name"),n=document.getElementById("email"),c=document.getElementById("message"),s=document.querySelector(".form-message");if(a&&function(){var e=document.getElementById("not-mail");return x.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),1e3),!1)}()&&f){t.classList.remove("red"),n.classList.remove("red"),c.classList.remove("red"),N("template_w5930xn",{name:a,company:r,phone:m,email:x,message:f})}else s.innerHTML="Merci de remplir correctement les champs requis *",s.style.background="rgb(253, 87, 87)",s.style.opacity="1",a||t.classList.add("error"),x||n.classList.add("error"),f||c.classList.add("error")}}),Object(o.jsx)("div",{className:"form-message"})]})},N=a(13),C=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)(b.b.div,{className:"contact",exit:"out",animate:"in",initial:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:300}},transition:{ease:[.03,.87,.73,.9],duration:.6},children:[Object(o.jsx)(l,{}),Object(o.jsx)(h,{}),Object(o.jsx)(y,{}),Object(o.jsxs)("div",{className:"contact-infos",children:[Object(o.jsx)("div",{className:"address",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h4",{children:"adresse"}),Object(o.jsx)("p",{children:"R\xe9sidence la Petite Campagne"}),Object(o.jsx)("p",{children:"14400 Bayeux"})]})}),Object(o.jsx)("div",{className:"phone",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h4",{children:"t\xe9l\xe9phone"}),Object(o.jsx)(N.CopyToClipboard,{text:"0771006614",className:"hover",children:Object(o.jsx)("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("T\xe9l\xe9phone copi\xe9 !")},children:"07 71 00 66 14"})})]})}),Object(o.jsx)("div",{className:"email",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h4",{children:"email"}),Object(o.jsx)(N.CopyToClipboard,{text:"daub.ludovic@gmail.com",className:"hover",children:Object(o.jsx)("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Email copi\xe9 !")},children:"daub.ludovic@gmail.com"})})]})}),Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"credits",children:Object(o.jsx)("p",{children:"Ludovic Daub - 2021"})})]}),Object(o.jsx)(d,{left:"/projet-3"})]})})},w=function(){var e=Object(r.h)(),t=Object(r.g)();return Object(n.useEffect)((function(){window.addEventListener("wheel",(function(e){console.log(e.wheelDeltaY);var a=window.location.origin+"/",n=function(a,n){e.wheelDeltaY<0?setTimeout((function(){t.push(a)}),500):e.wheelDeltaY>0&&setTimeout((function(){t.push(n)}),500)};switch(window.location.href.toString()){case a:e.wheelDeltaY<0&&setTimeout((function(){t.push("projet-1")}),500);break;case a+"projet-1":n("projet-2","");break;case a+"projet-2":n("projet-3","projet-1");break;case a+"projet-3":n("contact","projet-2");break;case a+"contact":e.wheelDeltaY>0&&setTimeout((function(){t.push("projet-3")}),500)}}))}),[t]),Object(o.jsx)(b.a,{children:Object(o.jsxs)(r.d,{location:e,children:[Object(o.jsx)(r.b,{exact:!0,path:"/",component:u}),Object(o.jsx)(r.b,{path:"/projet-1",component:v}),Object(o.jsx)(r.b,{path:"/projet-2",component:g}),Object(o.jsx)(r.b,{path:"/projet-3",component:f}),Object(o.jsx)(r.b,{path:"/contact",component:C}),Object(o.jsx)(r.a,{to:"/"})]},e.pathname)})};s.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.fa2c86f9.chunk.js.map