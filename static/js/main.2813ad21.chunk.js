(this.webpackJsonpmillioner=this.webpackJsonpmillioner||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"questions":[{"id":1,"quest":"Which US President wrote his own story about Sherlock Holmes?","answer":["Franklin Roosevelt"],"options":["John F. Kennedy","Franklin Roosevelt","Ronald Reagan","Bill Clinton"]},{"id":2,"quest":"Tourists coming to Mallorca are required to pay tax ...","answer":["In the sun"],"options":["For swimming trunks","On the palms","In the sun","On the sand"]},{"id":3,"quest":"The Oscar-winning Russian cartoon is ...","answer":["The Old Man and the Sea"],"options":["Prostokvashino","Winnie the Pooh","The Old Man and the Sea","Well, wait a minute!"]},{"id":4,"quest":"What was the clothing equivalent of money in the Russian Empire?","answer":["Skins of fur animals"],"options":["Skins of fur animals","Cattle","Tobacco","Women\'s earrings"]},{"id":5,"quest":"What is the shape of the fire bucket?","answer":["Cone"],"options":["Cube","Cone","Cylinder","Ball"]},{"id":6,"quest":"Which of these countries does the Czech Republic not border on?","answer":["Hungary"],"options":["Germany","Austria","Hungary","Poland"]},{"id":7,"quest":"What, according to a Russian proverb, cannot be hidden in a bag?","answer":["Awl"],"options":["Car","Knife","Human","Awl"]},{"id":8,"quest":"Which of these countries is the largest?","answer":["Japan"],"options":["Italy","Germany","Japan","Finland"]},{"id":9,"quest":"Which of these rivers flows into the Sea of Azov?","answer":["Don"],"options":["Dnieper","Dniester","Southern Bug","Don"]},{"id":10,"quest":"Which of the following countries has the largest land area?","answer":["Russia"],"options":["America","Russia","Japan","China"]},{"id":11,"quest":"Who is Arina Rodionovna?","answer":["Nanny Pushkin"],"options":["Singer 80s","Nanny Pushkin","Writer","Actress"]},{"id":12,"quest":"What tree do acorns come from?","answer":["Oak"],"options":["Oak","Chestnut","Ash","Maple"]}],"variants":["A","B","C","D"],"money":[500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000]}')},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),i=n.n(s),o=n(21),c=n.n(o),r=(n(28),n(7)),l=n(8),h=n(2),j=(n(29),n.p+"static/media/Logo.3ad94fce.svg"),d=function(){return Object(a.jsx)("section",{className:"main-page",children:Object(a.jsxs)("div",{className:"main-page__inner",children:[Object(a.jsx)("div",{className:"main-page__images",children:Object(a.jsx)("img",{className:"main-page__logo",src:j,alt:"Logo"})}),Object(a.jsxs)("div",{className:"main-page__play",children:[Object(a.jsx)("h1",{children:"Who wants to be a\xa0millionaire?"}),Object(a.jsx)(l.b,{to:"/game",className:"main-page__play-btn",children:"Start"})]})]})})},m=n(19),u=n(12),g=n.n(u),b=(n(35),n(13)),p=function(e){var t=e.updateTotal,n=Object(h.f)(),i=Object(s.useState)(0),o=Object(r.a)(i,2),c=o[0],l=o[1],j=Object(s.useState)(!1),d=Object(r.a)(j,2),u=d[0],p=d[1],O=Object(s.useState)(""),x=Object(r.a)(O,2),f=x[0],v=x[1],w=Object(s.useState)(""),_=Object(r.a)(w,2),N=_[0],y=_[1],k=Object(s.useState)(""),D=Object(r.a)(k,2),C=D[0],S=D[1],q=Object(m.a)(b.money),L=Object(m.a)(b.questions),T=L[c].quest,W=L[c].options;return Object(a.jsxs)("section",{className:"game-page",children:[Object(a.jsxs)("div",{className:"game-page__container-game",children:[Object(a.jsx)("div",{className:"game-page__inner-menu",children:Object(a.jsx)("button",{className:g()("menu",{"menu--active":u}),onClick:function(){return p(!u)},children:Object(a.jsx)("span",{})})}),Object(a.jsx)("div",{className:"game-page__question",children:Object(a.jsx)("p",{children:T})}),Object(a.jsx)("div",{className:"game-page__answer",children:W.map((function(e,s){return Object(a.jsxs)("svg",{viewBox:"0 0 405 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:e,onClick:function(e){!function(e){v(e.id),setTimeout((function(){L[c].answer.includes(e.id)?(y(e.id),setTimeout((function(){t(q[c]),c<b.questions.length-1?l(c+1):(l(0),n.push("/game-over"))}),1e3)):(S(e.id),setTimeout((function(){l(0),n.push("/game-over")}),1e3))}),1e3)}(e.currentTarget)},className:g()({"game-page__answer--select":f===e},{"game-page__answer--correct":N===e},{"game-page__answer--wrong":C===e}),children:[Object(a.jsx)("path",{d:"M388 36L405 36",stroke:"#D0D0D8"}),Object(a.jsx)("path",{d:"M0 36L17 36",stroke:"#D0D0D8"}),Object(a.jsx)("path",{d:"M48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5Z",fill:"white",stroke:"#D0D0D8"}),Object(a.jsx)("text",{x:"15%",y:"50%",fill:"#FF8B37",dominantBaseline:"central",children:b.variants[s]}),Object(a.jsx)("text",{x:"25%",y:"50%",viewBox:"0 0 405 72",fill:"#000",dominantBaseline:"central",children:e})]},s)}))})]}),Object(a.jsx)("div",{className:g()("game-page__container-total",{"game-page__container-total--active":u}),children:q.map((function(e,t){return Object(a.jsxs)("svg",{viewBox:"0 0 376 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:t,className:g()("game-page__container-total-".concat(q.length-t),{"game-page__container-total--current-money":c-1===t},{"game-page__container-total--finished-money":t<c-1}),children:[Object(a.jsx)("path",{d:"M69 20H0",stroke:"#D0D0D8"}),Object(a.jsx)("path",{d:"M376 20H307",stroke:"#D0D0D8"}),Object(a.jsx)("path",{d:"M90.2872 0.5H285.713C289.126 0.5 292.362 2.01596 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6375 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5Z",fill:"white",stroke:"#D0D0D8"}),Object(a.jsx)("text",{x:"50%",y:"50%",fill:"#000",textAnchor:"middle",dominantBaseline:"central",children:"$".concat(e.toLocaleString("en-EN"))})]},t)}))})]})},O=(n(36),function(e){var t=e.total,n=e.zeroingTotal;return Object(a.jsx)("section",{className:"game-over",children:Object(a.jsxs)("div",{className:"game-over__inner",children:[Object(a.jsx)("div",{className:"game-over__images",children:Object(a.jsx)("img",{className:"game-over__logo",src:j,alt:"Logo"})}),Object(a.jsxs)("div",{className:"game-over__play",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Total score:"}),Object(a.jsx)("h1",{children:"$".concat(t.toLocaleString("en-EN")," earned")})]}),Object(a.jsx)(l.b,{to:"/",className:"game-over__play-btn",onClick:function(){return n()},children:"Try again"})]})]})})});var x=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{path:"/",exact:!0,component:d}),Object(a.jsx)(h.a,{path:"/game",exact:!0,children:Object(a.jsx)(p,{updateTotal:function(e){i(e)}})}),Object(a.jsx)(h.a,{path:"/game-over",exact:!0,children:Object(a.jsx)(O,{total:n,zeroingTotal:function(){i(0)}})})]})})})};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2813ad21.chunk.js.map