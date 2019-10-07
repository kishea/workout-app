(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({admin:"admin",exercises:"exercises",login:"login",profile:"profile",search:"search",start:"start",workouts:"workouts"}[e]||e)+"."+{admin:"85fbad93",exercises:"334d6704",login:"d0080c67",profile:"7eaa1f94",search:"8654df50",start:"e2b737e4",workouts:"25cd47d7"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={admin:1,exercises:1,profile:1,search:1,start:1,workouts:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({admin:"admin",exercises:"exercises",login:"login",profile:"profile",search:"search",start:"start",workouts:"workouts"}[e]||e)+"."+{admin:"50aca2a1",exercises:"41f7941c",login:"31d6cfe0",profile:"c12a7600",search:"41f7941c",start:"c33ddfbd",workouts:"41f7941c"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02d2":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",["short"===e.variant?a("span",[e._v("Thorkout")]):e._e(),"short"!==e.variant?a("span",[e._v("Workout like Thor")]):e._e(),e.image?a("img",{staticClass:"d-inline-block align-top logo",attrs:{alt:"Workout like Thor logo",src:n("9b19")}}):e._e()])},r=[],o={name:"siteName",props:{variant:{type:String,default:"short"},image:{type:Boolean,default:!0}},data:function(){return{}}},i=o,s=n("2877"),c=Object(s["a"])(i,a,r,!1,null,null,null);t["a"]=c.exports},"145b":function(e,t,n){"use strict";var a=n("46ef"),r=n.n(a);r.a},"17e1":function(e,t,n){"use strict";var a=n("59ca"),r=(n("66ce"),n("ea7b"),a["initializeApp"]({apiKey:"AIzaSyDrVA6EHDFZEEWS-V1LrWwdIkFV-Vk6Z3A",authDomain:"workout-app-6ffb8.firebaseapp.com",databaseURL:"https://workout-app-6ffb8.firebaseio.com",projectId:"workout-app-6ffb8",storageBucket:"",messagingSenderId:"730908948143",appId:"1:730908948143:web:5225955573c5db34"}));t["a"]=r.database()},"46ef":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("ecee"),r=n("b702"),o=n("c074"),i=n("ad3d"),s=n("59ca"),c=n.n(s),u=n("2b0e"),l=n("0ff2"),d=n("51c2"),f=n("5fda"),m=n("1bbb"),p=n("a15b"),b=n("b28b"),h=n("d0b9"),v=n("8f77"),g=n("11a5"),k=n("042b"),w=n("4711"),y=n("50a6"),x=n("1947"),_=n("11de"),C=n("8226"),U=n("4797"),B=n("9c7d"),D=n("c3e6"),E=n("3b99"),S=n("5843"),j=n("205f"),A=n("d6e4"),O=n("2812"),T=n("4918"),N=n("3010"),P=n("5b4c"),q=n("e98b"),L=n("6190"),W=n("f902"),$=n("29a1"),H=n("8361"),I=n("49f5"),z=n("2616"),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[e.currentUser&&e.currentUser.uid?n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark",sticky:""}},[n("b-container",[n("b-navbar-brand",{attrs:{to:"/"},on:{click:function(t){return e.hideNavigation()}}},[n("siteName",{attrs:{variant:"short",image:!0}})],1),n("b-navbar-nav",{staticClass:"d-block d-md-none ml-auto mr-3"},[n("b-nav-item",{attrs:{to:"/profile/"+e.currentDBUser.id,title:e.currentDBUser.name+" "+e.currentDBUser.lastname+" Profile"},on:{click:function(t){return e.hideNavigation()}}},[n("b-img",{staticClass:"nav-avatar",attrs:{thumbnail:"",fluid:"",rounded:"circle",src:"https://www.gravatar.com/avatar/"+e.currentDBUser.gravatar+"?s=200",alt:e.currentDBUser.name+" "+e.currentDBUser.lastname+" Profile"}})],1)],1),n("b-navbar-toggle",{attrs:{target:"mobile-navigation"}}),n("b-collapse",{ref:"mobileNavigation",attrs:{id:"mobile-navigation","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{staticClass:"d-none d-lg-block",attrs:{to:"/"}},[e._v("Home")]),n("b-nav-item",{attrs:{to:"/workouts"}},[e._v("Workouts")]),n("b-nav-item",{attrs:{to:"/exercises"}},[e._v("Exercises")]),n("b-nav-item",{staticClass:"d-none d-md-block",attrs:{to:"/admin"}},[e._v("Admin")])],1),n("b-navbar-nav",{staticClass:"mt-2 mt-md-0 ml-auto"},[n("b-nav-form",{staticClass:"mr-4",attrs:{inline:""},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search",required:""},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("b-button",{staticClass:"d-none d-md-block my-2 my-sm-0",attrs:{size:"sm",type:"submit",variant:"primary"}},[n("font-awesome-icon",{attrs:{icon:["fas","search"]}})],1)],1),n("b-nav-item",{staticClass:"d-none d-md-block",attrs:{to:"/profile/"+e.currentDBUser.id,title:e.currentDBUser.name+" "+e.currentDBUser.lastname+" Profile"}},[n("b-img",{staticClass:"nav-avatar",attrs:{thumbnail:"",fluid:"",rounded:"circle",src:"https://www.gravatar.com/avatar/"+e.currentDBUser.gravatar+"?s=200",alt:e.currentDBUser.name+" "+e.currentDBUser.lastname+" Profile"}})],1),n("b-nav-item",{on:{click:e.logout}},[n("span",{staticClass:"d-none d-md-block"},[n("font-awesome-icon",{staticClass:"mt-2",attrs:{icon:["fas","sign-out-alt"],size:"lg",title:"Logout"}})],1),n("span",{staticClass:"d-md-none"},[e._v("Logout")])])],1)],1)],1)],1):e._e(),n("section",{staticClass:"pt-4"},[n("router-view",{key:e.$route.fullPath})],1),n("footer",{staticClass:"container-fluid p-5 mt-5"},[n("b-row",[n("b-col",{staticClass:"text-center"},[n("a",{attrs:{href:"https://github.com/quicoto/workout-app",title:"Thorkout on Github"}},[n("small",[e._v("v1.0.0")])])])],1)],1)],1)},M=[],V=(n("a481"),n("7514"),n("02d2")),G=n("940c"),J={components:{siteName:V["a"]},data:function(){return{currentUser:c.a.auth().currentUser,currentDBUser:{},query:""}},mounted:function(){var e=this;c.a.auth().onAuthStateChanged(function(t){t&&(e.currentUser=t,e.updateCurrentDBUser())}),this.updateCurrentDBUser()},methods:{hideNavigation:function(){this.$refs.mobileNavigation.show=!1},updateCurrentDBUser:function(){var e=this;c.a.database().ref(G["a"].users).once("value").then(function(t){e.currentDBUser=t.val().find(function(t){return t.email===e.currentUser.email})})},onSubmit:function(){"search"===this.$router.history.current.path||this.$router.push({name:"search",query:{query:this.query}})},logout:function(){var e=this;c.a.auth().signOut().then(function(){e.currentUser={},e.$router.replace({path:"/login"})}).catch(function(e){console.log(e)})}}},K=J,Z=(n("5c0b"),n("2877")),R=Object(Z["a"])(K,F,M,!1,null,null,null),Q=R.exports,X=n("9483");Object(X["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("7f7f");var Y=n("8c4f"),ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("b-container",[n("h1",{staticClass:"text-center"},[e._v("Workout like Thor")]),n("HelloWorld")],1)],1)},te=[],ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("p",[e._v("Current database users:")]),n("ul",e._l(e.users,function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:"/profile/"+t.id}},[e._v("\n        "+e._s(t.name)+"\n      ")])],1)}),0)])},ae=[],re=n("17e1"),oe={name:"HelloWorld",data:function(){return{users:[]}},firebase:{users:re["a"].ref(G["a"].users)}},ie=oe,se=(n("145b"),Object(Z["a"])(ie,ne,ae,!1,null,"71c62e6a",null)),ce=se.exports,ue={components:{HelloWorld:ce}},le=ue,de=Object(Z["a"])(le,ee,te,!1,null,null,null),fe=de.exports;u["default"].use(Y["a"]);var me=new Y["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"home",component:fe,meta:{title:"Thorkout"}},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},meta:{title:"Login"}},{path:"/admin",name:"admin",component:function(){return n.e("admin").then(n.bind(null,"3530"))},meta:{title:"Admin"}},{path:"/exercises",name:"exercises",component:function(){return n.e("exercises").then(n.bind(null,"b280"))},meta:{title:"Exercises"}},{path:"/workouts",name:"workouts",component:function(){return n.e("workouts").then(n.bind(null,"b0c6"))},meta:{title:"Workouts"}},{path:"/search",name:"search",component:function(){return n.e("search").then(n.bind(null,"e9a0"))},meta:{title:"Search"}},{path:"/profile/:user_id",name:"profile",component:function(){return n.e("profile").then(n.bind(null,"c66d"))},meta:{title:"Profile"}},{path:"/start/:workout_id",name:"start",component:function(){return n.e("start").then(n.bind(null,"d701"))},meta:{title:"Start"}}]});me.beforeEach(function(e,t,n){"login"===e.name||c.a.auth().currentUser?n():(console.log("redirecting...."),n("login"))}),me.afterEach(function(e){document.title="".concat(e.meta.title," - Workout like Thor"),window.scrollTo(0,0)});var pe=me;a["c"].add(r["b"]),a["c"].add(o["e"]),a["c"].add(o["f"]),a["c"].add(r["d"]),a["c"].add(r["e"]),a["c"].add(r["a"]),a["c"].add(o["a"]),a["c"].add(o["d"]),a["c"].add(o["c"]),a["c"].add(o["b"]),a["c"].add(o["b"]),a["c"].add(r["c"]),u["default"].component("font-awesome-icon",i["a"]),u["default"].config.productionTip=!0,u["default"].use(l["a"]),u["default"].use(d["a"]),u["default"].component("b-alert",f["a"]),u["default"].component("b-container",m["a"]),u["default"].component("b-row",p["a"]),u["default"].component("b-col",b["a"]),u["default"].component("b-navbar",h["a"]),u["default"].component("b-navbar-brand",v["a"]),u["default"].component("b-navbar-toggle",g["a"]),u["default"].component("b-navbar-nav",k["a"]),u["default"].component("b-nav-item",w["a"]),u["default"].component("b-nav-form",y["a"]),u["default"].component("b-button",x["a"]),u["default"].component("b-form",_["a"]),u["default"].component("b-form-group",C["a"]),u["default"].component("b-form-input",U["a"]),u["default"].component("b-form-textarea",B["a"]),u["default"].component("b-form-checkbox",D["a"]),u["default"].component("b-form-checkbox-group",E["a"]),u["default"].component("b-collapse",S["a"]),u["default"].component("b-card",j["a"]),u["default"].component("b-card-text",A["a"]),u["default"].component("b-card-img",O["a"]),u["default"].component("b-img",T["a"]),u["default"].component("b-form-invalid-feedback",N["a"]),u["default"].component("b-form-valid-feedback",P["a"]),u["default"].component("b-badge",q["a"]),u["default"].component("b-tab",L["a"]),u["default"].component("b-tabs",W["a"]),u["default"].component("b-table",$["a"]),u["default"].component("b-form-select",H["a"]),u["default"].component("b-progress",I["a"]),u["default"].directive("b-tooltip",z["a"]);var be="";c.a.auth().onAuthStateChanged(function(){be||(be=new u["default"]({router:pe,render:function(e){return e(Q)}}).$mount("#app"))})},"5c0b":function(e,t,n){"use strict";var a=n("e332"),r=n.n(a);r.a},"940c":function(e,t,n){"use strict";t["a"]={exerciseTags:"exercise-tags",exercises:"exercises",users:"users",workoutGoals:"workout-goals",workoutLevels:"workout-levels",workoutTypes:"workout-types",workouts:"workouts"}},"9b19":function(e,t,n){e.exports=n.p+"img/logo.f3257d6b.svg"},e332:function(e,t,n){}});