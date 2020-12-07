(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},38:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i(0),c=i.n(a),n=i(19),r=i.n(n),l=i(8),d=i(2),h=i(13),j=i(10),o=i(11),b=(i(28),i(20)),u=i.n(b),m=i(7);function x(){Object(a.useEffect)((function(){var e,t=function(){function e(){Object(j.a)(this,e)}return Object(o.a)(e,null,[{key:"randomNumber",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}}]),e}(),i=function(){function e(t){Object(j.a)(this,e),this.a=t,this.rad=this.a*Math.PI/180}return Object(o.a)(e,[{key:"incDec",value:function(e){return this.a+=e,this.rad=this.a*Math.PI/180,this.rad}}]),e}(),s=function(){function e(t){Object(j.a)(this,e),this.startTime=t,this.lastTime=0,this.elapsedTime=0}return Object(o.a)(e,[{key:"getElapsedTime",value:function(){return this.lastTime=Date.now(),this.elapsedTime=-1*(this.startTime-this.lastTime),this.elapsedTime}}]),e}(),a=new u.a,c=function(){function t(e){Object(j.a)(this,t),this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width=window.innerWidth,this.height=this.canvas.height=window.innerHeight,this.mouseX=null,this.mouseY=this.height-this.height/10,this.shapeNum=1,this.shapes=[],this.time=new s(Date.now())}return Object(o.a)(t,[{key:"init",value:function(){for(var e=0;e<this.shapeNum;e++){var t=new n(this.ctx,0,this.height/2);this.shapes.push(t)}}},{key:"render",value:function(){this.ctx.clearRect(0,0,e.width,e.height);for(var t=0;t<this.shapes.length;t++)this.shapes[t].render(t)}},{key:"resize",value:function(){this.width=this.canvas.width=window.innerWidth,this.height=this.canvas.height=window.innerHeight,this.init()}}]),t}(),n=function(){function s(e,t,i){Object(j.a)(this,s),this.ctx=e,this.init(t,i)}return Object(o.a)(s,[{key:"init",value:function(s,a){this.x=s,this.y=a,this.a=new i(t.randomNumber(0,240)),this.step=e.width/360,this.t=4e3}},{key:"draw",value:function(){this.y=e.mouseY;var t=this.ctx;t.save(),t.fillStyle="black",t.lineJoin="bevel",t.lineWidth=1,t.beginPath(),t.moveTo(this.x,this.y);for(var i=0;i<e.width;i+=this.step){var s=a.noise3D(i/200,200,this.a.rad)*((e.height-e.mouseY)/4);t.strokeStyle="white";var c=t.createLinearGradient(0,0,0,1.2*e.height);c.addColorStop(0,"#e4f4f50a"),c.addColorStop(1,"rgb(3, 144, 232)"),t.fillStyle=c;var n=Math.sin(i*Math.PI/180/2)*s+this.y;t.lineTo(i*this.step,n)}t.lineTo(e.width,e.height),t.lineTo(0,e.height),t.closePath(),t.fill(),t.restore()}},{key:"updateParams",value:function(){this.a.incDec(1)}},{key:"render",value:function(){this.draw(),this.updateParams()}}]),s}();(e=new c(!0)).init(),function t(){window.requestAnimationFrame((function(){e.render(),t()}))}(),window.addEventListener("resize",(function(){e.resize()}),!1),window.addEventListener("mousemove",(function(t){e.mouseY=t.clientY}),!1)}));var e={hidden:{opacity:0,x:"100vw"},visible:{x:0,opacity:1,transition:{duration:1.5}},exit:{y:-2.1*window.innerHeight,scale:10.5,opacity:.4,transition:{duration:2.9}}},t=Object(a.useState)("#48b4a5"),i=Object(h.a)(t,2),c=i[0],n=i[1],r=Object(a.useState)(""),d=Object(h.a)(r,2),b=d[0],x=d[1],O=Object(a.useState)("1"),v=Object(h.a)(O,2),p=v[0],f=v[1];return Object(s.jsx)(m.b.div,{className:"home",variants:e,initial:"hidden",animate:"visible",exit:"exit",children:Object(s.jsx)("div",{className:"Home",children:Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)("canvas",{id:"canvas",style:{opacity:p}}),Object(s.jsxs)("div",{className:"me container",children:[Object(s.jsxs)("div",{className:"name",children:[Object(s.jsx)("h1",{children:"RAED "}),Object(s.jsx)("h1",{children:"TAYYEM"})]}),Object(s.jsx)(l.b,{to:"/aboutMe",children:Object(s.jsx)("div",{className:"button ".concat(b),style:{color:c},onClick:function(){n("transparent"),x("buttonBackground"),f("0")},children:Object(s.jsx)("span",{children:"About me"})})}),Object(s.jsx)("div",{className:"aboutLink",children:Object(s.jsx)("h2",{children:"a full-stack web developer"})})]})]})})})}i(34);function O(){setTimeout((function(){document.querySelectorAll(".bar").forEach((function(e){var t=0,i=e.dataset.size,s=setInterval((function(){t>=i?clearInterval(s):(t++,e.style.width="".concat(i,"%"),e.firstElementChild.innerText="".concat(t,"%"))}),20)}))}),3400);return Object(s.jsx)(m.b.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:4}},exit:{x:"-100vw",transition:{duration:1.5}}},initial:"hidden",animate:"visible",exit:"exit",children:Object(s.jsxs)("div",{className:"about",children:[Object(s.jsx)("div",{className:"meInfo ",children:Object(s.jsxs)("div",{className:"aboutSectionContainer",children:[Object(s.jsxs)("div",{className:"summary",children:[Object(s.jsx)("div",{className:"octaWrap",children:Object(s.jsx)("div",{className:"profileImage"})}),Object(s.jsx)("div",{className:"aboutName",children:Object(s.jsx)("h3",{children:"Raed Tayyem"})})]}),Object(s.jsxs)("ul",{className:"info",children:[Object(s.jsx)("li",{children:" A Full Stack / Frontend Web Developer,And a very"}),Object(s.jsx)("li",{children:"curious individual who is always looking for his"}),Object(s.jsx)("li",{children:"next challenge,With a passion for desgining and"}),Object(s.jsx)("li",{children:"staying up to date with technology."})]})]})}),Object(s.jsx)(l.b,{to:"/contact",children:Object(s.jsx)("div",{className:"ContactMe",children:Object(s.jsx)("span",{children:"Contact me"})})}),Object(s.jsx)("div",{className:"skills",children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsxs)("div",{className:"skillWrap",children:[Object(s.jsx)("h3",{children:"Html5"}),Object(s.jsx)("div",{className:"progress-bar",children:Object(s.jsx)("div",{className:"bar","data-size":"90",children:Object(s.jsx)("span",{className:"perc"})})})]}),Object(s.jsxs)("div",{className:"skillWrap",children:[Object(s.jsx)("h3",{children:"Css3"}),Object(s.jsx)("div",{className:"progress-bar",children:Object(s.jsx)("div",{className:"bar","data-size":"75",children:Object(s.jsx)("span",{className:"perc"})})})]}),Object(s.jsxs)("div",{className:"skillWrap",children:[Object(s.jsx)("h3",{children:"Sass"}),Object(s.jsx)("div",{className:"progress-bar",children:Object(s.jsx)("div",{className:"bar","data-size":"65",children:Object(s.jsx)("span",{className:"perc"})})})]}),Object(s.jsxs)("div",{className:"skillWrap",children:[Object(s.jsx)("h3",{children:"JavaScript (ES6)"}),Object(s.jsx)("div",{className:"progress-bar",children:Object(s.jsx)("div",{className:"bar","data-size":"60",children:Object(s.jsx)("span",{className:"perc"})})})]}),Object(s.jsxs)("div",{className:"skillWrap",children:[Object(s.jsx)("h3",{children:"React.js"}),Object(s.jsx)("div",{className:"progress-bar",children:Object(s.jsx)("div",{className:"bar","data-size":"65",children:Object(s.jsx)("span",{className:"perc"})})})]}),Object(s.jsxs)("div",{className:"skillWrap",children:[Object(s.jsx)("h3",{children:"Angular"}),Object(s.jsx)("div",{className:"progress-bar",children:Object(s.jsx)("div",{className:"bar","data-size":"40",children:Object(s.jsx)("span",{className:"perc"})})})]}),Object(s.jsxs)("div",{className:"skillWrap",children:[Object(s.jsx)("h3",{children:"Vue"}),Object(s.jsx)("div",{className:"progress-bar",children:Object(s.jsx)("div",{className:"bar","data-size":"30",children:Object(s.jsx)("span",{className:"perc"})})})]}),Object(s.jsxs)("div",{className:"skillWrap",children:[Object(s.jsx)("h3",{children:"MongoDB"}),Object(s.jsx)("div",{className:"progress-bar",children:Object(s.jsx)("div",{className:"bar","data-size":"70",children:Object(s.jsx)("span",{className:"perc"})})})]})]})})]})})}i(35);var v=i(22),p=i.n(v);function f(){return Object(s.jsx)(m.b.div,{transition:{type:"tween",ease:"anticipate",duration:1.5},variants:{initial:{x:"100vw",scale:1},in:{opacity:1,x:0,scale:1,transition:{duration:1.5}},exit:{opacity:0,scale:1.2,transition:{duration:3}}},initial:"initial",animate:"in",exit:"exit",children:Object(s.jsxs)("div",{className:"contact",children:[Object(s.jsx)("div",{className:"left-col"}),Object(s.jsxs)("div",{className:"right-col",children:[Object(s.jsxs)("div",{className:"theme-switch-wrapper",children:[Object(s.jsxs)("label",{className:"theme-switch",onChange:function(e){e.target.checked?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")},children:[Object(s.jsx)("input",{type:"checkbox",id:"checkbox"}),Object(s.jsx)("div",{className:"slider round"})]}),Object(s.jsx)("div",{className:"description",children:"Dark Mode"})]}),Object(s.jsx)("h1",{children:"Contact me"}),Object(s.jsx)("p",{children:"Searching for a Full-Stack or Front-End developer? you want your next website to look the best."}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p.a.sendForm("service_g17ced5","template_6vdvo69",e.target,"user_CPOFn2xQoacgRIQh8SzEG").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),setTimeout((function(){e.target.reset()}),6e3)},children:[Object(s.jsx)("label",{children:"Subject"}),Object(s.jsx)("input",{type:"subject",id:"subject",name:"subject",placeholder:"Subject",required:!0}),Object(s.jsx)("label",{children:"Full name"}),Object(s.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Your Full Name",required:!0}),Object(s.jsx)("label",{children:"Email Address"}),Object(s.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Your Email Address",required:!0}),Object(s.jsx)("label",{children:"Message"}),Object(s.jsx)("textarea",{rows:"6",placeholder:"Your Message",id:"message",name:"message",required:!0}),Object(s.jsx)("button",{type:"submit",id:"submit",name:"submit",children:"Send"})]}),Object(s.jsx)("div",{id:"error"}),Object(s.jsx)("div",{id:"success-msg"})]})]})})}var N=function(){var e=Object(d.f)();return Object(s.jsx)(m.a,{children:Object(s.jsxs)(d.c,{location:e,children:[Object(s.jsx)(d.a,{exact:!0,path:"/",component:x}),Object(s.jsx)(d.a,{exact:!0,path:"/aboutMe",component:O}),Object(s.jsx)(d.a,{exact:!0,path:"/contact",component:f})]},e.key)})},g=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,40)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),s(e),a(e),c(e),n(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)(N,{})})}),document.getElementById("root")),g()}},[[38,1,2]]]);
//# sourceMappingURL=main.549150f5.chunk.js.map