(this["webpackJsonpandrew-portfolio"]=this["webpackJsonpandrew-portfolio"]||[]).push([[0],{130:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),s=c(21),n=c.n(s),r=(c(55),c(56),c(26)),o=c(7),l=c(8),j=c(9),d=c(11),b=c(10),m=(c(57),c(0)),h=(i.Component,c(50)),u=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(e){var i;return Object(l.a)(this,c),(i=t.call(this,e)).activeitem=function(e){i.state.NavItemActive.length>0&&document.getElementById(i.state.NavItemActive).classList.remove("active"),i.setState({NavItemActive:e},(function(){document.getElementById(i.state.NavItemActive).classList.add("active")}))},i.state={NavItemActive:"",menuOpen:!1},i}return Object(j.a)(c,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(m.jsx)(h.slide,{isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},children:Object(m.jsx)("div",{id:"navMenu",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("a",{onClick:function(){return e.closeMenu()},item:"Home",href:"https://audiomuse1.github.io/portfolio",className:"menu-item",activec:this.activeitem,children:"Home"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{onClick:function(){return e.closeMenu()},item:"About",href:"https://audiomuse1.github.io/about",className:"menu-item",activec:this.activeitem,children:"About"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{onClick:function(){return e.closeMenu()},item:"Education",href:"https://audiomuse1.github.io/education",className:"menu-item",activec:this.activeitem,children:"Education"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{onClick:function(){return e.closeMenu()},item:"Skills",href:"https://audiomuse1.github.io/skills",className:"menu-item",activec:this.activeitem,children:"Skills"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{onClick:function(){return e.closeMenu()},item:"Projects",href:"https://audiomuse1.github.io/projects",activec:this.activeitem,children:"Projects"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{onClick:function(){return e.closeMenu()},item:"Contact",href:"https://audiomuse1.github.io/contact",activec:this.activeitem,children:"Contact"})]})})})}}]),c}(i.Component),O=c.p+"static/media/myImg.6fba8117.jpg",x=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"social",children:[Object(m.jsx)("a",{href:"https://github.com/audiomuse1",target:"_blank",children:Object(m.jsx)("i",{className:"fab fa-github"})}),Object(m.jsx)("a",{href:"https://Instagram.com/",target:"_blank",children:Object(m.jsx)("i",{className:"fab fa-instagram"})}),Object(m.jsx)("a",{href:"https://www.facebook.com",target:"_blank",children:Object(m.jsx)("i",{className:"fab fa-facebook-f"})}),Object(m.jsx)("a",{href:"https://Linkedin.com/",target:"_blank",children:Object(m.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(m.jsx)("a",{href:"https://medium.com/",target:"_blank",children:Object(m.jsx)("i",{className:"fab fa-medium-m"})})]})}}]),c}(i.Component),p=c(16),f=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"componentDidMount",value:function(){console.log("i am so cool")}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"condiv home",children:[Object(m.jsxs)(p.Animated,{animationIn:"fadeInDown",animationOut:"fadeOut",animationInDuration:1400,animationOutDuration:1400,isVisible:!0,children:[Object(m.jsx)("h1",{className:"subtopic",children:"Andrew Hartford"}),Object(m.jsx)("p",{children:"Developer in Austin, TX"}),Object(m.jsx)("img",{src:O,alt:"ProfilePic",className:"profilepic"})]}),Object(m.jsx)(x,{})]})}}]),c}(i.Component),g=c(3),v=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"condivFull",children:[Object(m.jsx)(p.Animated,{animationIn:"fadeInDown",animationOut:"fadeOut",animationInDuration:1400,animationOutDuration:1400,isVisible:!0,children:Object(m.jsx)("h1",{className:"subtopic",children:"About Me"})}),Object(m.jsxs)(g.a,{className:"aboutMeSection",children:[Object(m.jsx)(g.a.Img,{variant:"top",className:"aboutMeImg",src:"https://th.bing.com/th/id/R6f61e827c71294d1c0a3dd5cfc24b449?rik=A6DiHS3iPGUp1w&pid=ImgRaw"}),Object(m.jsx)(g.a.Body,{children:Object(m.jsx)(g.a.Text,{children:"I was born in San Antonio, TX in 1992.  I currently live in Austin, TX and have been here since attending the University of Texas.  My passions and interests include biking, supporting local businesses, politics, mass transit, environmental issues, going on daytrips around Texas, and technology."})})]})]})}}]),c}(i.Component),k=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"widecard",children:Object(m.jsxs)("div",{className:"compdet",children:[Object(m.jsx)("h3",{children:this.props.title}),Object(m.jsx)("h4",{className:"secondtext",children:this.props.where}),Object(m.jsxs)("h4",{className:"secondtext",children:[this.props.from," - ",this.props.to]})]})})}}]),c}(i.Component),N=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"condiv",children:[Object(m.jsx)(p.Animated,{animationIn:"fadeInDown",animationOut:"fadeOut",animationInDuration:1400,animationOutDuration:1400,isVisible:!0,children:Object(m.jsx)("h1",{className:"subtopic",children:"My Education"})}),Object(m.jsx)(k,{title:"B.S. Chemistry",where:"University of Texas, Austin",from:"September 2011",to:"August 2015"}),Object(m.jsx)(k,{title:"Certificate of Completion",where:"Austin Coding Academy",from:"2016",to:"2017"})]})}}]),c}(i.Component),I=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(e){var i;return Object(l.a)(this,c),(i=t.call(this,e)).state={myskills:["HTML","CSS","JS","REACT JS","NODE JS","EXPRESS","Typescript","Boostrap","Animate.css","BigCommerce","Spanish language"]},i}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"condiv skills",children:[Object(m.jsx)(p.Animated,{animationIn:"fadeInDown",animationOut:"fadeOut",animationInDuration:1400,animationOutDuration:1400,isVisible:!0,children:Object(m.jsx)("h1",{className:"subtopic",children:"My Skills"})}),Object(m.jsx)("ul",{children:this.state.myskills.map((function(e){return Object(m.jsx)("li",{children:e})}))})]})}}]),c}(i.Component),y=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"condiv",children:[Object(m.jsx)(p.Animated,{animationIn:"fadeInDown",animationOut:"fadeOut",animationInDuration:1400,animationOutDuration:1400,isVisible:!0,children:Object(m.jsx)("h1",{className:"subtopic",children:"Contact Me"})}),Object(m.jsx)("h3",{children:"Email: andrewhartford2@gmail.com"}),Object(m.jsxs)("h3",{children:["LinkedIn: ",Object(m.jsx)("a",{class:"link",href:"linkedin.com/in/ajhartford",children:"linkedin.com/in/ajhartford"})]}),Object(m.jsxs)("h3",{children:["Github Personal: ",Object(m.jsx)("a",{class:"link",href:"https://github.com/audiomuse1",children:"github.com/audiomuse1"})]}),Object(m.jsxs)("h3",{children:["Github Work: ",Object(m.jsx)("a",{class:"link",href:"https://github.com/audiomuse1",children:"github.com/andrewhartfordbac"})]}),Object(m.jsx)(x,{})]})}}]),c}(i.Component),w=c(35),S=c(6),C=c.p+"static/media/artistsBiden2.6dc32d41.png",A=c.p+"static/media/bidenwebstore1.1a1820f7.png",T=c.p+"static/media/bidenwebstore2.8b7dfee4.png",D=c.p+"static/media/bidenwebstore3.a09b5543.png",B=c.p+"static/media/barcodeScanning1.4cbc8a79.png",M=c.p+"static/media/barcodeScanning2.d8ee0f6c.png",F=c.p+"static/media/customImage1.dfd24447.png",P=c.p+"static/media/customImage2.1d28587f.png",E=c.p+"static/media/customImage3.552a8671.png",L=c.p+"static/media/additionalDonation.75c04ae5.png",V=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"condiv skills",children:[Object(m.jsx)(p.Animated,{animationIn:"fadeInDown",animationOut:"fadeOut",animationInDuration:1400,animationOutDuration:1400,isVisible:!0,children:Object(m.jsx)("h1",{className:"subtopic",children:"My Projects"})}),Object(m.jsxs)(w.a,{children:[Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(S.a,{children:[Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:A,alt:"First slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:T,alt:"Second slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:D,alt:"Third slide"})})]}),Object(m.jsxs)(g.a.Body,{children:[Object(m.jsx)(g.a.Title,{children:"Biden Presidential Webstore"}),Object(m.jsx)(g.a.Text,{children:"Developed and styled the Biden 2020 presidential campaign webstore.  Worked with designers from the Biden campaign to make stylistic edits to the webstore periodically throughout the campaign."})]}),Object(m.jsx)(g.a.Footer,{children:Object(m.jsx)("small",{className:"text-muted"})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(S.a,{children:[Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:C,alt:"First slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:C,alt:"Second slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:C,alt:"Third slide"})})]}),Object(m.jsxs)(g.a.Body,{children:[Object(m.jsx)(g.a.Title,{children:"Artists for Biden"}),Object(m.jsxs)(g.a.Text,{children:["Worked with the David Zwirner Art Gallery team to build an online store to auction art as a fundraiser for the Biden presidential campaign."," "]})]}),Object(m.jsx)(g.a.Footer,{children:Object(m.jsx)("small",{className:"text-muted"})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(S.a,{children:[Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:B,alt:"First slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:M,alt:"Second slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:M,alt:"Third slide"})})]}),Object(m.jsxs)(g.a.Body,{children:[Object(m.jsx)(g.a.Title,{children:"Barcode Scanning Project"}),Object(m.jsx)(g.a.Text,{children:"Set up a point-of-sale (POS) system using BigCommerce's platform for Bumperactive's brick and mortar retail store.  Within the POS, I developed a barcode scanning feature to allow cashiers to scan items and have them added to cart."})]}),Object(m.jsx)(g.a.Footer,{children:Object(m.jsx)("small",{className:"text-muted"})})]})]}),Object(m.jsxs)(w.a,{children:[Object(m.jsxs)(g.a,{id:"card4",style:{width:"1rem"},children:[Object(m.jsxs)(S.a,{children:[Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:F,alt:"First slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:P,alt:"Second slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:E,alt:"Third slide"})})]}),Object(m.jsxs)(g.a.Body,{children:[Object(m.jsx)(g.a.Title,{children:"Custom Sticker Ordering App"}),Object(m.jsx)(g.a.Text,{children:"Developed several custom products on a BigCommerce webstore to allow customers to place custom sticker orders with my company."})]}),Object(m.jsx)(g.a.Footer,{children:Object(m.jsx)("small",{className:"text-muted"})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(S.a,{children:[Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:L,alt:"First slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:L,alt:"Second slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:L,alt:"Third slide"})})]}),Object(m.jsxs)(g.a.Body,{children:[Object(m.jsx)(g.a.Title,{children:"Webstore Donation Feature"}),Object(m.jsx)(g.a.Text,{children:"When customer clicks to place an order, checks if customer has made a donation or not.  If they have not already made a donation, a popup appears with a suggested donation amount proportional to their order subtotal."})]}),Object(m.jsx)(g.a.Footer,{children:Object(m.jsx)("small",{className:"text-muted"})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(S.a,{children:[Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:L,alt:"First slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:L,alt:"Second slide"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)("img",{className:"d-block w-100",src:L,alt:"Third slide"})})]}),Object(m.jsxs)(g.a.Body,{children:[Object(m.jsx)(g.a.Title,{children:"React Firebase Authentication"}),Object(m.jsx)(g.a.Text,{children:"Login and Register feature"})]}),Object(m.jsx)(g.a.Footer,{children:Object(m.jsx)("small",{className:"text-muted"})})]})]}),Object(m.jsx)("p",{class:"otherProjects",children:" Various other projects I have taken on: Moved an e-commerce app to my company's internal server"})]})}}]),c}(i.Component);var W=function(){return Object(m.jsx)(r.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u,{}),Object(m.jsx)(o.a,{exact:!0,path:"/portfolio",children:Object(m.jsx)(f,{})}),Object(m.jsx)(o.a,{path:"/about",children:Object(m.jsx)(v,{})}),Object(m.jsx)(o.a,{path:"/education",children:Object(m.jsx)(N,{})}),Object(m.jsx)(o.a,{path:"/skills",children:Object(m.jsx)(I,{})}),Object(m.jsx)(o.a,{path:"/projects",children:Object(m.jsx)(V,{})}),Object(m.jsx)(o.a,{path:"/contact",children:Object(m.jsx)(y,{})})]})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,132)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),i(e),a(e),s(e),n(e)}))};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(W,{})}),document.getElementById("root")),R()},55:function(e,t,c){},56:function(e,t,c){}},[[130,1,2]]]);
//# sourceMappingURL=main.376a9594.chunk.js.map