(function(t){function e(e){for(var s,o,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/~a71391/LAB11/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0333":function(t,e,r){},4493:function(t,e,r){"use strict";r("f3c6")},5253:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"small-container",attrs:{id:"app"}},[r("router-view")],1)},a=[],o=r("2877"),i={},c=Object(o["a"])(i,n,a,!1,null,null,null),u=c.exports,l=r("8c4f"),d=r("bb51"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),r("div",{staticClass:"container-fluid flex-wrap",staticStyle:{"margin-bottom":"3%"}},[r("div",{staticClass:"row"},[r("aside",{staticClass:"col-xs12 col-2",staticStyle:{"margin-top":"3%"}},[r("div",{staticClass:"mt-4"},[r("div",{staticClass:"card"},[r("h3",{staticClass:"text-center card-header"},[t._v("Categories")]),r("ul",{staticClass:"nav flex-column mb-2"},t._l(t.categories,(function(e){return r("div",{key:e.id,staticClass:"container d-flex justify-content-center"},[r("button",{staticClass:"btn btn-light w-100 d-flex text-lg-left",attrs:{type:"button"},on:{click:function(r){return t.showProducts(e.name)}}},[t._v(t._s(e.name))])])})),0)])])]),r("div",{staticClass:"col-xs12 col-9",staticStyle:{"margin-top":"5%"}},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"mt-2"},[r("h4",[t._v("Selected Category: "+t._s(t.currentCategory))]),t._l(t.products,(function(e){return r("div",{key:e.id},[e.cat_id===t.currentCategory||"All Products"===t.currentCategory?r("div",[r("div",{staticClass:"row justify-content-center mb-3"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card shadow-0 border rounded-3"},[r("div",{staticClass:"card-body "},[r("div",{staticClass:"row d-flex"},[r("div",{staticClass:"col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0"},[r("div",{staticClass:"bg-image hover-zoom ripple rounded ripple-surface"},[r("img",{staticClass:"w-100",attrs:{src:e.image}})])]),r("div",{staticClass:"col-md-6 col-lg-6 col-xl-6"},[r("h5",[t._v(t._s(e.name))]),r("hr",{staticClass:"bg-dark border-2 border-top border-dark"}),r("p",{staticClass:"text-truncate mb-4 mb-md-0 text-wrap",domProps:{innerHTML:t._s(e.description)}})]),r("div",{staticClass:"col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start"},[r("div",{staticClass:"d-flex flex-row align-items-center mb-1"},[r("h4",{staticClass:"mb-1 me-1"},[t._v(t._s(e.price)+"€")])]),r("div",{staticClass:"d-flex flex-column mt-4"},[r("button",{staticClass:"btn btn-primary btn-sm mt-auto",attrs:{type:"button"},on:{click:function(r){return t.addProductBasket(e.id)}}},[t._v("Add do Basket")])])])])])])])])]):t._e()])}))],2)])])])]),r("Footer")],1)},m=[],g=r("1da1"),f=(r("96cf"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer bg-secondary  text-dark fixed-bottom"},[r("div",{staticClass:"text-center p-2 bg-light"},[t._v("made by Francisco ©")])])}],h={},b=Object(o["a"])(h,f,v,!1,null,"4b4b2379",null),w=b.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed-top"},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light sticky-top"},[r("div",{staticClass:"container-fluid"},[r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link active mx-2",attrs:{to:"/"}},[t._v("Car Shop")])],1)]),t._m(0),r("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavDropdown"}},[r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link active",attrs:{"aria-current":"page",to:"/products"}},[t._v(t._s(t.menu1))])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link active",attrs:{to:"/basket"}},[r("svg",{staticClass:"bi bi-cart ",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]),r("span",{staticClass:"badge bg-secondary"},[t._v(t._s(t.getQuantidade()))])])],1),t.userLoggedIn?r("li",{staticClass:"navbar-nav"},[r("router-link",{staticClass:"nav-link active",attrs:{"aria-current":"page",to:"/orders"}},[t._v(t._s(t.menu6))])],1):r("li",{staticClass:"navbar-nav"},[r("router-link",{staticClass:"nav-link active",attrs:{"aria-current":"page",to:"/login"}},[t._v(t._s(t.menu2))])],1),t.userLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link active",attrs:{to:"/logout"}},[t._v(t._s(t.menu4))])],1):r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link active",attrs:{to:"/register"}},[t._v(t._s(t.menu3))])],1),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active"},[t._v(t._s(t.welcome))])])])])])])])},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],k=r("b85c"),y=(r("99af"),r("b0c0"),{data:function(){return{menu1:"Products",menu2:"Login",menu3:"Register",menu4:"Logout",menu5:"Basket",menu6:"Orders",welcome:"Welcome",user:{id:"",name:"",email:"",session_id:""},basket:[]}},mounted:function(){this.helloUser(),this.getBasket()},methods:{helloUser:function(){this.userLoggedIn&&(this.welcome=this.welcome.concat(" "+this.user.name))},getUser:function(){this.user=this.$store.getters["user/getUser"]},getBasket:function(){this.basket=this.$store.getters["basket/getProducts"]},getQuantidade:function(){this.getBasket();var t,e=0,r=Object(k["a"])(this.basket);try{for(r.s();!(t=r.n()).done;){var s=t.value;e+=s.quantity}}catch(n){r.e(n)}finally{r.f()}return e}},computed:{userLoggedIn:function(){for(var t in this.getUser(),this.user)return!0;return!1}}}),_=y,O=Object(o["a"])(_,x,C,!1,null,null,null),$=O.exports,P={showModal:!0,components:{Footer:w,Header:$},data:function(){return{products:[],categories:[],basket:[],currentCategory:"All Products"}},mounted:function(){this.getProduct(),this.getCategories()},methods:{getProduct:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("products/getProductsFromDB");case 2:if(!e.sent){e.next=4;break}t.products=t.$store.getters["products/getProducts"];case 4:case"end":return e.stop()}}),e)})))()},getCategories:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("categories/getCategoriesFromDB");case 2:if(!e.sent){e.next=4;break}t.categories=t.$store.getters["categories/getCategories"];case 4:case"end":return e.stop()}}),e)})))()},showProducts:function(t){this.currentCategory=t},addProductBasket:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.commit("basket/incrementProduct",t);case 2:return r.next=4,e.$store.getters["basket/getProducts"];case 4:e.basket.items=r.sent;case 5:case"end":return r.stop()}}),r)})))()}},computed:{}},j=P,S=Object(o["a"])(j,p,m,!1,null,"448a017c",null),R=S.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),0!==t.basket.length?r("div",{staticClass:"w-75 container-fluid justify-content-center",staticStyle:{"margin-top":"5%","margin-bottom":"5%"}},[t._l(t.products,(function(e){return r("div",{key:e.id},[r("ul",{staticClass:"list-group"},[r("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center"},[r("strong",[t._v(t._s(e.name)+": "+t._s(e.price))]),r("span",{staticClass:"badge rounded-pill",staticStyle:{"background-color":"#4A5859"}},[r("button",{staticClass:"btn rounded-pill",staticStyle:{"background-color":"#4A5859"},on:{click:function(r){return t.decrementProductBasket(e.id)}}},[r("svg",{staticClass:"bi bi-dash-lg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}})])]),t._v(" "+t._s(t.getQuantity(e.id))+" "),r("button",{staticClass:"btn rounded-pill",staticStyle:{"background-color":"#4A5859"},on:{click:function(r){return t.incrementProductBasket(e.id)}}},[r("svg",{staticClass:"bi bi-plus-lg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"}})])])])])])])})),r("ul",{staticClass:"list-group"},[r("li",{staticClass:"list-group-item"},[r("strong",[t._v("Total:")]),r("strong",{staticStyle:{float:"right"}},[t._v(t._s(t.amount))])])]),r("div",{staticClass:"mt-3",staticStyle:{"margin-bottom":"10%"}},[r("button",{staticClass:"btn btn-primary btn-warning btn-sm mt-auto",staticStyle:{float:"left"},attrs:{type:"button"},on:{click:function(e){return t.eliminateBasket()}}},[t._v("Clear Basket")]),r("span",{staticClass:"container justify-content-center"},[t._v(t._s(t.price))]),t.userLoggedIn?r("div",{staticStyle:{float:"right"}},[r("button",{staticClass:"btn btn-primary btn-sm mt-auto",on:{click:function(e){return t.addOrder()}}},[t._v("Checkout")])]):r("div",{staticStyle:{float:"right"}},[r("router-link",{staticClass:"text-white btn btn-primary btn-sm",attrs:{type:"button",to:"/login"}},[t._v("Login to Place Order")])],1)])],2):r("div",{staticClass:"w-50",staticStyle:{"margin-top":"5%","margin-left":"25%"}},[t._m(0)]),r("Footer")],1)},L=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card shadow-0 border rounded-3 mb-3"},[r("div",{staticClass:"card-body"},[r("h1",{staticClass:"text-center"},[t._v("Please Select an Item to Buy")])])])}],E=(r("4de4"),r("d3b7"),r("caad"),r("2532"),r("7db0"),{name:"products",components:{Footer:w,Header:$},data:function(){return{basket:[],products:[]}},mounted:function(){this.getBasket(),this.getProduct()},methods:{getProduct:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("products/getProductsFromDB");case 2:if(!e.sent){e.next=4;break}t.products=t.$store.getters["products/getProducts"];case 4:for(r=[],s=0;s<t.basket.length;s++)r.push(t.basket[s].id);t.products=t.products.filter((function(t){return r.includes(t.id)}));case 7:case"end":return e.stop()}}),e)})))()},getBasket:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var r,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.basket=t.$store.getters["basket/getProducts"],r=Object(k["a"])(t.basket),e.prev=2,r.s();case 4:if((s=r.n()).done){e.next=13;break}return n=s.value,e.t0=t.products,e.next=9,t.$store.getters["products/getProduct"](n.id);case 9:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t2=e["catch"](2),r.e(e.t2);case 18:return e.prev=18,r.f(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})))()},incrementProductBasket:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.commit("basket/incrementProduct",t);case 2:return r.next=4,e.$store.getters["basket/getProducts"];case 4:e.basket.items=r.sent;case 5:case"end":return r.stop()}}),r)})))()},decrementProductBasket:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.commit("basket/decrementProduct",t);case 2:return r.next=4,e.$store.getters["basket/getProducts"];case 4:e.basket.items=r.sent,e.getProduct();case 6:case"end":return r.stop()}}),r)})))()},eliminateBasket:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("basket/clearBasket");case 2:return e.next=4,t.$store.getters["basket/getProducts"];case 4:return t.basket=e.sent,e.next=7,t.$router.push("/message/2");case 7:case"end":return e.stop()}}),e)})))()},getQuantity:function(t){var e=this.basket.find((function(e){return e.id==t}));return"undefined"===typeof e?0:e.quantity},getTotalPrice:function(t){var e=this.getQuantity(t),r=this.products.find((function(e){return e.id==t}));return e*r.price},addOrder:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={status_id:3,totalAmount:t.amount,items:t.basket},e.next=3,t.$store.dispatch("orders/addOrder",r);case 3:if(!e.sent){e.next=12;break}return alert("The amount of "+t.amount+"€ will be cherged from your bank account!"),e.next=7,t.$store.commit("basket/clearBasket");case 7:return e.next=9,t.$store.getters["basket/getProducts"];case 9:return t.basket=e.sent,e.next=12,t.$router.push("/message/1");case 12:case"end":return e.stop()}}),e)})))()}},computed:{amount:function(){for(var t=0,e=0;e<this.products.length;e++)t+=this.getTotalPrice(this.products[e].id);return t},userLoggedIn:function(){var t=this.$store.getters["user/getUser"];for(var e in t)return!0;return!1}}}),U=E,A=Object(o["a"])(U,B,L,!1,null,"296b7222",null),F=A.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"background"},[r("Header"),r("section",{staticClass:"vh-100"},[r("div",{staticClass:"container py-5 h-100",staticStyle:{width:"50%"}},[r("div",{staticClass:"row d-flex align-items-center justify-content-center h-100"},[r("div",{staticClass:"justify-content-center ms-auto btn btn-lg shadow border-dark"},[t.userLoggedIn?r("div",[r("h3",{staticClass:"text-danger",staticStyle:{"text-align":"center","margin-top":"100px"}},[t._v("Login first ")])]):r("div",{staticClass:"container",attrs:{id:"register-form"}},[r("h1",{staticClass:"text-center ms-auto"},[t._v("Register")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-outline mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control form-control-lg shadow",attrs:{type:"text",id:"form1Example13",name:"username",placeholder:"Your Name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),r("div",{staticClass:"form-outline mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg shadow",attrs:{type:"email",id:"form1Example23",name:"email",placeholder:"Email address"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),r("div",{staticClass:"form-outline mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg shadow",attrs:{type:"password",id:"form1Example33",name:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),r("div",{staticClass:"form-outline mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"form-control form-control-lg shadow",attrs:{type:"password",id:"form1Example43",name:"repeatpass",placeholder:"Repeat Password"},domProps:{value:t.passwordConfirmation},on:{input:function(e){e.target.composing||(t.passwordConfirmation=e.target.value)}}})]),t._m(0)])])])])])]),r("Footer")],1)},H=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticStyle:{"align-content":"center"}},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])])}],M={components:{Footer:w,Header:$},data:function(){return{user:{name:"",email:"",password:""},passwordConfirmation:"",submitting:!0,error:!0}},methods:{handleSubmit:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.submitting=!0,""!==t.user.name&&""!==t.user.email&&""!==t.user.password&&""!==t.passwordConfirmation){e.next=5;break}alert("Todos os campos devem ser preenchidos"),e.next=18;break;case 5:if(t.user.password===t.passwordConfirmation){e.next=9;break}alert("Passwords não coincidem"),e.next=18;break;case 9:if(e.t0=t.user.password===t.passwordConfirmation,!e.t0){e.next=14;break}return e.next=13,t.$store.dispatch("user/userExists",t.user);case 13:e.t0=!e.sent;case 14:if(!e.t0){e.next=18;break}return e.next=17,t.$store.dispatch("user/addUser");case 17:t.changeRouter();case 18:case"end":return e.stop()}}),e)})))()},changeRouter:function(){this.$router.push("/message/4")}},computed:{userLoggedIn:function(){var t=this.$store.getters["user/getUser"];for(var e in t)return!0;return!1}},directives:{},created:function(){}},T=M,D=(r("ec79"),Object(o["a"])(T,I,H,!1,null,"2a4bbbe4",null)),N=D.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"background"},[r("Header"),r("section",{staticClass:"vh-100"},[r("div",{staticClass:"container py-5 h-100",staticStyle:{width:"50%"}},[r("div",{staticClass:"row d-flex align-items-center justify-content-center h-100"},[r("div",{staticClass:"justify-content-center ms-auto btn btn-lg shadow border-dark"},[t.userLoggedIn?r("div",[r("h3",{staticStyle:{"text-align":"center"}},[t._v("Logout first ")])]):r("div",{staticClass:"container",attrs:{id:"login-form"}},[r("h1",{staticStyle:{"text-align":"center"}},[t._v("Login")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-outline mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",id:"form1Example13",name:"email",placeholder:"Email address"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),r("div",{staticClass:"form-outline mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"form1Example23",name:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._m(0)])])])])])]),r("Footer")],1)},q=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticStyle:{"align-content":"center"}},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")])])}],Q={components:{Footer:w,Header:$},data:function(){return{user:{email:"",password:""},submitting:!1,error:!1}},methods:{handleSubmit:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.submitting=!0,""!==t.user.email&&""!==t.user.password){e.next=5;break}alert("Todos os campos devem ser preenchidos"),e.next=12;break;case 5:return e.next=7,t.$store.dispatch("user/loginUser",t.user);case 7:if(!e.sent){e.next=11;break}t.changeRouter(),e.next=12;break;case 11:alert("Login failed: wrong email or password");case 12:case"end":return e.stop()}}),e)})))()},changeRouter:function(){this.$router.push("/message/5")}},computed:{userLoggedIn:function(){var t=this.$store.getters["user/getUser"];for(var e in t)return!0;return!1}},directives:{},created:function(){}},J=Q,W=(r("e400"),Object(o["a"])(J,z,q,!1,null,"22524415",null)),G=W.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),r("section",{staticClass:"vh-100"},[t.userLoggedIn?r("div",{staticClass:"container",staticStyle:{"margin-top":"2%"},attrs:{id:"login-form"}},[r("div",{staticClass:"container flex-wrap py-5 h-100",staticStyle:{width:"50%"}},[r("div",{staticClass:"row d-flex align-items-center justify-content-center h-100"},[r("div",{staticClass:"ms-auto btn btn-lg shadow border-dark"},[t.checkOrder?r("div",[r("strong",[t._v("My Orders")]),t._l(t.orders,(function(e){return r("div",{key:e.id},[r("ul",{staticClass:"list-group"},[r("li",{staticClass:"list-group-item mb-2"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-9"},[r("span",{staticStyle:{"font-size":"small"}},[r("strong",[t._v("Order Created at: ")]),t._v(t._s(e.created_at)+" ")])]),r("div",{staticClass:"col-3"},[r("button",{staticClass:"btn btn-primary btn-sm mt-auto",staticStyle:{float:"right"},attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsible"+e.id,"aria-expanded":"false","aria-controls":"collapseExample"}},[r("svg",{staticClass:"bi bi-caret-down-square-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"}})])])])]),r("div",{staticClass:"collapse multi-collapse",attrs:{id:"collapsible"+e.id}},[t._l(e.items,(function(e){return r("div",{key:e.product_id},[r("ul",{staticClass:"list-group"},[r("li",{staticClass:"list-group-item"},[r("strong",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),r("span",{staticStyle:{float:"right"}},[t._v(t._s(e.quantity)+" x "+t._s(e.price)+"€ ")])])])])})),r("strong",{staticClass:"ms-3",staticStyle:{float:"left"}},[t._v("Total: "+t._s(e.total)+"€")])],2)])])])}))],2):r("div",[t._v(" You have no orders, go check some of our cars! ")])])])])]):r("div",[r("h3",{staticStyle:{"text-align":"center"}},[t._v("Login first")])])]),r("Footer")],1)},Z=[],V={components:{Footer:w,Header:$},data:function(){return{isHidden:!1,id:0,orders:[]}},mounted:function(){this.getOrders()},methods:{getOrders:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.userLoggedIn){e.next=5;break}return e.next=3,t.$store.dispatch("orders/getMyOrdersFromDB");case 3:if(!e.sent){e.next=5;break}t.orders=t.$store.getters["orders/getOrders"];case 5:case"end":return e.stop()}}),e)})))()}},computed:{checkOrder:function(){return 0!==this.orders.length},userLoggedIn:function(){var t=this.$store.getters["user/getUser"];for(var e in t)return!0;return!1}}},K=V,X=Object(o["a"])(K,Y,Z,!1,null,"5e5c5d58",null),tt=X.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logout"},[r("h1",{staticClass:"success-message",staticStyle:{"text-align":"center"}},[t._v(t._s(t.message))])])},rt=[],st={data:function(){return{message:""}},mounted:function(){this.setMessage()},methods:{setMessage:function(){var t=this;1==this.$route.params.id&&(this.message="Products Bought Succesfully"),2==this.$route.params.id&&(this.message="Basket cleaned Successfully, getting redirected to Product Page"),4==this.$route.params.id&&(this.message="Welcome! You can now login"),5==this.$route.params.id&&(this.message="Welcome back "+this.$store.getters["user/getUser"].name+"!"),6==this.$route.params.id&&(this.message="Bye, come back soon!");var e=2,r=setInterval((function(){e<=0&&(clearInterval(r),t.$router.push("/products")),e-=1}),1e3)}}},nt=st,at=(r("5b13"),Object(o["a"])(nt,et,rt,!1,null,"19f25444",null)),ot=at.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.success?r("div",{staticClass:"logout"},[r("h3",{staticStyle:{"text-align":"center"}},[t._v("Not logged in ")]),r("p",{staticStyle:{"text-align":"center"}},[r("button",{staticStyle:{background:"green"},on:{click:function(e){return t.logout()}}},[t._v("Return")])])]):r("div",{staticClass:"logout"},[r("h1",{staticStyle:{"text-align":"center"}},[t._v("Logout ?")]),r("p",{staticStyle:{"text-align":"center"}},[r("button",{staticStyle:{background:"orange"},on:{click:function(e){return t.cancel()}}},[t._v("Cancel")]),t._v("    "),r("button",{staticStyle:{background:"green"},on:{click:function(e){return t.logout()}}},[t._v("Logout")])])])])},ct=[],ut={data:function(){return{success:!1,user:{}}},methods:{logout:function(){this.userLoggedIn?(this.$store.dispatch("user/logoutUser",this.user),this.logoutUser(this.user.session_id)):(this.success=!0,this.$router.push("/"))},logoutUser:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("user/logoutUser",t);case 2:if(!r.sent){r.next=4;break}e.changeRouter();case 4:case"end":return r.stop()}}),r)})))()},getUser:function(){this.user=this.$store.getters["user/getUser"]},cancel:function(){this.$router.push("/")},changeRouter:function(){this.$router.push("/message/6")}},created:function(){this.userLoggedIn?this.success=!1:this.success=!0},computed:{userLoggedIn:function(){for(var t in this.getUser(),this.user)return!0;return!1}}},lt=ut,dt=Object(o["a"])(lt,it,ct,!1,null,"12f8ad0a",null),pt=dt.exports;s["a"].use(l["a"]);var mt=[{path:"/",component:d["default"]},{path:"/products",component:R},{path:"/basket",component:F},{path:"/register",component:N},{path:"/login",component:G},{path:"/orders",component:tt},{path:"/message/:id",component:ot},{path:"/logout",component:pt}],gt=new l["a"]({mode:"history",base:"/~a71391/LAB11/dist/",routes:mt}),ft=gt,vt=r("2f62"),ht=(r("c740"),{namespaced:!0,state:{products:[]},getters:{getProducts:function(t){return t.products},getProduct:function(t){return function(e){var r=t.products.findIndex((function(t){return t.id==e}));return t.products[r]}}},mutations:{addProducts:function(t,e){t.products=e}},actions:{getProductsFromDB:function(t){return Object(g["a"])(regeneratorRuntime.mark((function e(){var r,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71391/LAB11/api/products.php");case 4:return s=e.sent,e.next=7,s.json();case 7:return n=e.sent,r("addProducts",n),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](1),console.log("error: ",e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()}},modules:{}}),bt=ht,wt={namespaced:!0,state:{categories:[]},getters:{getCategories:function(t){return t.categories}},mutations:{addCategories:function(t,e){t.categories=e}},actions:{getCategoriesFromDB:function(t){return Object(g["a"])(regeneratorRuntime.mark((function e(){var r,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71391/LAB11/api/categories.php");case 4:return s=e.sent,e.next=7,s.json();case 7:return n=e.sent,console.log("received data:",n),r("addCategories",n),e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e["catch"](1),console.log("error: ",e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))()}},modules:{}},xt=wt,Ct=(r("e9c4"),{namespaced:!0,state:{user:{},tmp_user:{}},getters:{getUser:function(t){return t.user}},mutations:{loginUser:function(t,e){t.user=e},logoutUser:function(t){t.user={}},tmpUser:function(t,e){t.tmp_user=e}},actions:{userExists:function(t,e){return Object(g["a"])(regeneratorRuntime.mark((function r(){var s,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.commit,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71391/LAB11/api/users.php?email=".concat(e.email),{method:"GET"});case 4:return n=r.sent,r.next=7,n.json();case 7:if(a=r.sent,console.log("userExists",a),null===a){r.next=14;break}return alert("Email already exists"),r.abrupt("return",!0);case 14:return s("tmpUser",e),r.abrupt("return",!1);case 16:r.next=23;break;case 18:return r.prev=18,r.t0=r["catch"](1),console.error(r.t0),alert("Error: Database connection failed in phase 1"),r.abrupt("return",!1);case 23:case"end":return r.stop()}}),r,null,[[1,18]])})))()},addUser:function(t){return Object(g["a"])(regeneratorRuntime.mark((function e(){var r,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,e.prev=1,e.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71391/LAB11/api/users.php",{method:"POST",body:JSON.stringify(r.tmp_user),headers:{"Content-type":"text/html; charset=UTF-8"}});case 4:return s=e.sent,e.next=7,s.json();case 7:return n=e.sent,console.log("received data:",n),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](1),console.error(e.t0),alert("Error: Database connection failed in phase 2"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})))()},loginUser:function(t,e){return Object(g["a"])(regeneratorRuntime.mark((function r(){var s,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.commit,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71391/LAB11/api/users.php?email=".concat(e.email,"&password=").concat(e.password));case 4:return n=r.sent,r.next=7,n.json();case 7:if(a=r.sent,null!=a){r.next=13;break}return alert("Error: Wrong credentials"),r.abrupt("return",!1);case 13:return console.log("received data:",a),s("loginUser",a),r.abrupt("return",!0);case 16:r.next=23;break;case 18:return r.prev=18,r.t0=r["catch"](1),console.error(r.t0),alert("Error: Database connection failed"),r.abrupt("return",!1);case 23:case"end":return r.stop()}}),r,null,[[1,18]])})))()},logoutUser:function(t,e){return Object(g["a"])(regeneratorRuntime.mark((function r(){var s,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.commit,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71391/LAB11/api/users.php?session_id=".concat(e));case 4:return n=r.sent,r.next=7,n.json();case 7:return a=r.sent,console.log("received data:",a),s("logoutUser"),r.abrupt("return",!0);case 13:return r.prev=13,r.t0=r["catch"](1),console.error(r.t0),r.abrupt("return",!1);case 17:case"end":return r.stop()}}),r,null,[[1,13]])})))()}}}),kt=Ct,yt=r("2909"),_t={namespaced:!0,state:{orders:[]},getters:{getOrders:function(t){return t.orders}},mutations:{addOrders:function(t,e){t.orders=e},addOrder:function(t,e){t.orders=[].concat(Object(yt["a"])(t.orders),[e])}},actions:{getMyOrdersFromDB:function(t){return Object(g["a"])(regeneratorRuntime.mark((function e(){var r,s,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,s=t.rootGetters,e.prev=1,e.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71391/LAB11/api/orders.php?session_id=".concat(s["user/getUser"].session_id));case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,r("addOrders",a),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](1),console.log("error: ",e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()},addOrder:function(t,e){return Object(g["a"])(regeneratorRuntime.mark((function r(){var s,n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.commit,n=t.rootGetters,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71391/LAB11/api/orders.php?session_id=".concat(n["user/getUser"].session_id),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 4:return a=r.sent,r.next=7,a.json();case 7:return o=r.sent,console.log("received data:",o),s("addOrder",o),r.abrupt("return",!0);case 13:return r.prev=13,r.t0=r["catch"](1),console.error(r.t0),r.abrupt("return",!1);case 17:case"end":return r.stop()}}),r,null,[[1,13]])})))()}},modules:{}},Ot=_t,$t=(r("159b"),r("a434"),{namespaced:!0,state:{products:[]},getters:{getProducts:function(t){return t.products}},mutations:{clearBasket:function(t){t.products=[]},incrementProduct:function(t,e){var r=t.products.some((function(t){return t.id==e}));r||t.products.push({id:e,quantity:0}),t.products.forEach((function(t){t.id==e&&t.quantity++}))},decrementProduct:function(t,e){t.products.forEach((function(r,s){r.id==e&&r.quantity>=1&&r.quantity--,0==r.quantity&&t.products.splice(s,1)}))}},actions:{},modules:{}}),Pt=$t;s["a"].use(vt["a"]);var jt=new vt["a"].Store({modules:{products:bt,user:kt,orders:Ot,basket:Pt,categories:xt}});s["a"].config.productionTip=!1,new s["a"]({router:ft,store:jt,render:function(t){return t(u)}}).$mount("#app")},5997:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"background d-flex justify-content-center align-items-center",staticStyle:{height:"100vh"}},[r("div",{staticStyle:{height:"50vh"}},[r("router-link",{staticClass:"btn btn-primary",attrs:{type:"btn","aria-current":"page",to:"/products"}},[t._v("Open Shop")])],1)])},n=[]},"5b13":function(t,e,r){"use strict";r("5253")},"7ad4":function(t,e,r){"use strict";var s=r("9cae"),n=r.n(s);e["default"]=n.a},"8f4b":function(t,e,r){},"9cae":function(t,e){},bb51:function(t,e,r){"use strict";var s=r("5997"),n=r("7ad4"),a=(r("4493"),r("2877")),o=Object(a["a"])(n["default"],s["a"],s["b"],!1,null,"79ee1512",null);e["default"]=o.exports},e400:function(t,e,r){"use strict";r("0333")},ec79:function(t,e,r){"use strict";r("8f4b")},f3c6:function(t,e,r){}});
//# sourceMappingURL=app.381aca64.js.map