(function(e){function t(t){for(var r,o,c=t[0],u=t[1],i=t[2],d=0,b=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&b.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==s[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-pages/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"100d":function(e,t,n){"use strict";n("5ea0")},1758:function(e,t,n){"use strict";n("67f0")},"2ad5":function(e,t,n){"use strict";n("9fcc")},4957:function(e,t,n){"use strict";n("a058")},"4aff":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b0c0");var r=n("7a23"),s={class:"app"};function a(e,t,n,a,o,c){var u=Object(r["B"])("navbar"),i=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(u),Object(r["h"])("div",s,[Object(r["k"])(i)])],64)}var o=n("9cef"),c=n.n(o),u=function(e){return Object(r["w"])("data-v-0a178de0"),e=e(),Object(r["u"])(),e},i={class:"navbar"},l={class:"navbar_content"},d=u((function(){return Object(r["h"])("img",{src:c.a,alt:"LOGO",height:"40"},null,-1)})),b=[d],f={class:"navbar__btns"},p=Object(r["j"])("Список пользователей"),v=Object(r["j"])("ABOUT");function O(e,t,n,s,a,o){var c=Object(r["B"])("my-button");return Object(r["t"])(),Object(r["g"])("div",i,[Object(r["h"])("div",l,[Object(r["h"])("div",{class:"navbar_logo",onClick:t[0]||(t[0]=function(t){return e.$router.push("/")})},b),Object(r["h"])("div",f,[Object(r["k"])(c,{onClick:t[1]||(t[1]=function(t){return e.$router.push("/userspage")}),style:{"margin-left":"15px"}},{default:Object(r["I"])((function(){return[p]})),_:1}),Object(r["k"])(c,{onClick:t[2]||(t[2]=function(t){return e.$router.push("/about")}),style:{"margin-left":"15px"}},{default:Object(r["I"])((function(){return[v]})),_:1})])])])}var h={class:"btn"};function m(e,t,n,s,a,o){return Object(r["t"])(),Object(r["g"])("button",h,[Object(r["A"])(e.$slots,"default",{},void 0,!0)])}var j={name:"my-button"},g=(n("fbdd"),n("6b0d")),y=n.n(g);const _=y()(j,[["render",m],["__scopeId","data-v-11734a39"]]);var U=_,k={components:{MyButton:U}};n("2ad5");const w=y()(k,[["render",O],["__scopeId","data-v-0a178de0"]]);var S=w,I={components:{Navbar:S}};n("6a5d");const x=y()(I,[["render",a]]);var V=x,M=["value"];function C(e,t,n,s,a,o){return Object(r["t"])(),Object(r["g"])("input",{value:n.modelValue,onInput:t[0]||(t[0]=function(){return o.updateInput&&o.updateInput.apply(o,arguments)}),type:"text",class:"input"},null,40,M)}n("a9e3");var B={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput:function(e){this.$emit("update:modelValue",e.target.value)}}};n("bf40");const L=y()(B,[["render",C],["__scopeId","data-v-3206107e"]]);var $=L;function D(e,t,n,s,a,o){return n.show?(Object(r["t"])(),Object(r["g"])("div",{key:0,class:"dialog",onClick:t[1]||(t[1]=Object(r["K"])((function(){return o.hideDialog&&o.hideDialog.apply(o,arguments)}),["stop"]))},[Object(r["h"])("div",{onClick:t[0]||(t[0]=Object(r["K"])((function(){}),["stop"])),class:"dialog__content"},[Object(r["A"])(e.$slots,"default",{},void 0,!0)])])):Object(r["f"])("",!0)}var R={name:"my-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog:function(){this.$emit("update:show",!1)}}};n("100d");const A=y()(R,[["render",D],["__scopeId","data-v-186f2f1b"]]);var E=A,P=[U,$,E],J=n("6c02"),T={class:"home"},N=Object(r["h"])("h1",null,"Главная",-1),z=[N];function H(e,t,n,s,a,o){return Object(r["t"])(),Object(r["g"])("div",T,z)}var K={name:"Home",components:{},data:function(){return{}},methods:{}};const q=y()(K,[["render",H]]);var G=q,F={class:"about"},Q=Object(r["h"])("h1",null,"This is an about page",-1),W=[Q];function X(e,t){return Object(r["t"])(),Object(r["g"])("div",F,W)}const Y={},Z=y()(Y,[["render",X]]);var ee=Z;var te=n("5530"),ne=(n("4de4"),{key:0}),re=Object(r["i"])('<h3 data-v-10b8191b>Список пользователей</h3><div class="header" data-v-10b8191b><div class="header_pos" data-v-10b8191b>ID</div><div class="header_pos" data-v-10b8191b>Аватар</div><div class="header_pos" data-v-10b8191b>Имя</div><div class="header_pos" data-v-10b8191b>Возраст</div><div class="header_pos" data-v-10b8191b>Статус</div><div class="header_pos" data-v-10b8191b>Действия</div></div>',2),se={key:1,style:{color:"red"}};function ae(e,t,n,s,a,o){var c=Object(r["B"])("user-item-in-list");return n.users.length>0?(Object(r["t"])(),Object(r["g"])("div",ne,[re,Object(r["k"])(r["b"],{name:"user-list"},{default:Object(r["I"])((function(){return[(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(n.users,(function(t){return Object(r["t"])(),Object(r["e"])(c,{user:t,key:t.id,onRemove:function(n){return e.$emit("remove",t)}},null,8,["user","onRemove"])})),128))]})),_:1})])):(Object(r["t"])(),Object(r["g"])("h2",se,"Список пользователей пуст!"))}var oe={class:"user"},ce={class:"header_pos"},ue={class:"header_pos"},ie=["innerHTML"],le={class:"header_pos"},de={class:"header_pos"},be={class:"header_pos"},fe={class:"header_pos"},pe={class:"user__btns"},ve=Object(r["j"])("Редактировать "),Oe=Object(r["j"])("Удалить ");function he(e,t,n,s,a,o){var c=Object(r["B"])("my-button");return Object(r["t"])(),Object(r["g"])("div",oe,[Object(r["h"])("div",ce,Object(r["E"])(n.user.id),1),Object(r["h"])("div",ue,[Object(r["h"])("span",{innerHTML:n.user.photo},null,8,ie)]),Object(r["h"])("div",le,Object(r["E"])(n.user.name),1),Object(r["h"])("div",de,Object(r["E"])(n.user.age),1),Object(r["h"])("div",be,Object(r["E"])(n.user.status),1),Object(r["h"])("div",fe,[Object(r["h"])("div",pe,[Object(r["k"])(c,{onClick:t[0]||(t[0]=function(t){return e.$router.push("/user/"+n.user.id),e.$emit("edit",n.user)})},{default:Object(r["I"])((function(){return[ve]})),_:1}),Object(r["k"])(c,{style:{"margin-top":"15px"},onClick:t[1]||(t[1]=function(t){return e.$emit("remove",n.user)})},{default:Object(r["I"])((function(){return[Oe]})),_:1})])])])}var me={name:"user-item-in-list",components:{MyButton:U},props:{user:{type:Object,required:!0}}};n("6a74");const je=y()(me,[["render",he],["__scopeId","data-v-33429012"]]);var ge=je,ye={name:"users-list",components:{UserItemInList:ge},props:{users:{type:Array,required:!0}}};n("f367");const _e=y()(ye,[["render",ae],["__scopeId","data-v-10b8191b"]]);var Ue=_e,ke=function(e){return Object(r["w"])("data-v-72b14600"),e=e(),Object(r["u"])(),e},we=ke((function(){return Object(r["h"])("h4",null,"Создание нового пользователя",-1)})),Se=Object(r["j"])(" Создать ");function Ie(e,t,n,s,a,o){var c=Object(r["B"])("my-input"),u=Object(r["B"])("my-button"),i=Object(r["C"])("focus");return Object(r["t"])(),Object(r["g"])("form",{onSubmit:t[2]||(t[2]=Object(r["K"])((function(){}),["prevent"]))},[we,Object(r["J"])(Object(r["k"])(c,{modelValue:a.user.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.user.name=e}),type:"text",placeholder:"Имя"},null,8,["modelValue"]),[[i]]),Object(r["k"])(c,{modelValue:a.user.age,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.user.age=e}),type:"text",placeholder:"Возраст"},null,8,["modelValue"]),Object(r["k"])(u,{class:"btn",onClick:o.createUser,style:{"align-self":"flex-end","margin-top":"15px"}},{default:Object(r["I"])((function(){return[Se]})),_:1},8,["onClick"])],32)}var xe=n("1da1"),Ve=(n("96cf"),n("b41d")),Me=n("7fc3"),Ce=n("bc3a"),Be=n.n(Ce),Le={name:"user-form",components:{MyButton:U},data:function(){return{user:{id:"",photo:"",name:"",age:"",status:""}}},methods:{createUser:function(){var e=this;return Object(xe["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.user.id=Date.now(),n=e,t.next=4,Be.a.get("https://yesno.wtf/api").then((function(e){"yes"===e.data.answer?n.user.status="Активен":n.user.status="---"})).catch((function(e){n.user.status="err"}));case 4:n.user.photo=Object(Ve["createAvatar"])(Me,{seed:n.user.name+n.user.age,size:100,topChance:100}),e.$emit("create",e.user),e.user={name:"",age:""};case 7:case"end":return t.stop()}}),t)})))()}}};n("4957");const $e=y()(Le,[["render",Ie],["__scopeId","data-v-72b14600"]]);var De=$e,Re=function(e){return Object(r["w"])("data-v-2422f1d1"),e=e(),Object(r["u"])(),e},Ae=Re((function(){return Object(r["h"])("option",{disabled:"",value:""},"Сортировать по",-1)})),Ee=["value"];function Pe(e,t,n,s,a,o){return Object(r["J"])((Object(r["t"])(),Object(r["g"])("select",{class:"select","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.modelValue=e}),onChange:t[1]||(t[1]=function(){return o.changeOption&&o.changeOption.apply(o,arguments)})},[Ae,(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(n.options,(function(e){return Object(r["t"])(),Object(r["g"])("option",{key:e.value,value:e.value},Object(r["E"])(e.name),9,Ee)})),128))],544)),[[r["G"],n.modelValue]])}var Je={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:function(){return[]}}},methods:{changeOption:function(e){this.$emit("update:modelValue",e.target.value)}}};n("1758");const Te=y()(Je,[["render",Pe],["__scopeId","data-v-2422f1d1"]]);var Ne=Te,ze=n("5502");Object(te["a"])(Object(te["a"])({createUser:function(e){""===e.name||""===e.age?alert("Введите имя и возраст нового пользователя!"):(this.users.push(e),this.dialogVisible=!1)},removeUser:function(e){this.users=this.users.filter((function(t){return t.id!=e.id}))},showDialog:function(){this.dialogVisible=!0}},Object(ze["d"])({setSelectedSort:"user/setSelectedSort"})),Object(ze["b"])({fetchUsers:"user/fetchUsers"})),Object(te["a"])(Object(te["a"])({},Object(ze["e"])({users:function(e){return e.user.users},isUsersLoading:function(e){return e.user.isUsersLoading},selectedSort:function(e){return e.user.selectedSort},sortOptions:function(e){return e.user.sortOptions}})),Object(ze["c"])({sortedUsers:"user/sortedUsers"})),n("aa12");var He=Object(r["h"])("h1",null,"Страница со списком пользователей",-1),Ke={class:"app__btns"},qe=Object(r["j"])(" Создать пользователя "),Ge={key:1};function Fe(e,t,n,s,a,o){var c=Object(r["B"])("my-button"),u=Object(r["B"])("my-select"),i=Object(r["B"])("user-form"),l=Object(r["B"])("my-dialog"),d=Object(r["B"])("users-list");return Object(r["t"])(),Object(r["g"])("div",null,[He,Object(r["h"])("div",Ke,[Object(r["k"])(c,{onClick:o.showDialog},{default:Object(r["I"])((function(){return[qe]})),_:1},8,["onClick"]),Object(r["k"])(u,{modelValue:a.selectedSort,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.selectedSort=e}),options:a.sortOptions},null,8,["modelValue","options"])]),Object(r["k"])(l,{show:a.dialogVisible,"onUpdate:show":t[1]||(t[1]=function(e){return a.dialogVisible=e})},{default:Object(r["I"])((function(){return[Object(r["k"])(i,{onCreate:o.createUser},null,8,["onCreate"])]})),_:1},8,["show"]),a.isUsersLoading?(Object(r["t"])(),Object(r["g"])("div",Ge,"Идет загрузка")):(Object(r["t"])(),Object(r["e"])(d,{key:0,users:o.sortedUsers,onRemove:o.removeUser},null,8,["users","onRemove"]))])}var Qe=n("2909"),We=(n("4e82"),{components:{UserForm:De,UsersList:Ue,MyDialog:E,MyButton:U,MySelect:Ne},data:function(){return{users:[],dialogVisible:!1,isUsersLoading:!1,selectedSort:"",sortOptions:[{value:"name",name:"По имени"},{value:"age",name:"По возрасту"}]}},methods:{saveUsers:function(){var e=JSON.stringify(this.users);localStorage.setItem("users",e)},createUser:function(e){""===e.name||""===e.age?alert("Введите имя и возраст!"):(this.users.push(e),this.dialogVisible=!1),this.saveUsers()},removeUser:function(e){this.users=this.users.filter((function(t){return t.id!=e.id})),this.saveUsers()},showDialog:function(){this.dialogVisible=!0},fetchUsers:function(){var e=this;return Object(xe["a"])(regeneratorRuntime.mark((function t(){var n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isUsersLoading=!0,t.next=4,Be.a.get("https://jsonplaceholder.typicode.com/posts?_limit=20");case 4:n=t.sent,e.users=n.data,r=0;case 7:if(!(r<e.users.length)){t.next=17;break}return e.users[r].name=Math.floor(100*Math.random()),e.users[r].age=Math.floor(90*Math.random()),s=e.users[r],t.next=13,Be.a.get("https://yesno.wtf/api").then((function(e){"yes"===e.data.answer?s.status="Активен":s.status="---"})).catch((function(e){s.status="err"}));case 13:s.photo=Object(Ve["createAvatar"])(Me,{seed:Math.floor(100*Math.random()),size:100,accessoriesChance:Math.floor(100*Math.random())});case 14:r++,t.next=7;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](0),alert("Ошибка");case 22:return t.prev=22,e.isUsersLoading=!1,t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[0,19,22,25]])})))()}},mounted:function(){if(localStorage.getItem("users"))try{this.users=JSON.parse(localStorage.getItem("users"))}catch(e){localStorage.removeItem("users")}},watch:{},computed:{sortedUsers:function(){var e=this;return Object(Qe["a"])(this.users).sort((function(t,n){var r;return null===(r=t[e.selectedSort])||void 0===r?void 0:r.localeCompare(n[e.selectedSort])}))}}});n("6324");const Xe=y()(We,[["render",Fe]]);var Ye=Xe;function Ze(e,t,n,s,a,o){return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["h"])("h1",null,"Страница пользователя с ID "+Object(r["E"])(e.$route.params.id),1)])}var et={data:function(){return{newUsers:[]}},components:{UserItemInList:ge},methods:{},mounted:function(){if(localStorage.getItem("users"))try{this.newUsers=JSON.parse(localStorage.getItem("users"))}catch(e){localStorage.removeItem("users")}}};const tt=y()(et,[["render",Ze]]);var nt=tt,rt=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:ee},{path:"/user/:id",name:"UserItemID",component:nt},{path:"/userspage",name:"UsersPag",component:Ye}],st=Object(J["a"])({history:Object(J["b"])("/vue-pages/"),routes:rt}),at=st,ot={mounted:function(e){e.focus()},name:"focus"},ct=[ot],ut={state:function(){return{users:[],isUsersLoading:!1,selectedSort:"",sortOptions:[{value:"name",name:"По имени"},{value:"age",name:"По возрасту"}]}},getters:{sortedUsers:function(e){return Object(Qe["a"])(e.users).sort((function(t,n){var r;return null===(r=t[e.selectedSort])||void 0===r?void 0:r.localeCompare(n[e.selectedSort])}))}},mutations:{setUsers:function(e,t){e.users=t;for(var n=0;n<e.users.length;n++)e.users[n].id=5*Math.random(),e.users[n].name=100*n,e.users[n].age=Math.floor(90*Math.random())},setLoading:function(e,t){e.isUsersLoading=t},setSelectedSort:function(e,t){e.selectedSort=t}},actions:{fetchUsers:function(e){return Object(xe["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state,n=e.commit,t.prev=1,n("setLoading",!0),t.next=5,Be.a.get("https://jsonplaceholder.typicode.com/posts?_limit=10");case 5:r=t.sent,n("setUsers",r.data),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),alert(t.t0);case 12:return t.prev=12,n("setLoading",!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()}},namespaced:!0},it=Object(ze["a"])({modules:{user:ut}}),lt=Object(r["d"])(V);P.forEach((function(e){lt.component(e.name,e)})),ct.forEach((function(e){lt.directive(e.name,e)})),lt.use(at).use(it).mount("#app")},"5ea0":function(e,t,n){},6324:function(e,t,n){"use strict";n("e247")},"67f0":function(e,t,n){},"6a5d":function(e,t,n){"use strict";n("4aff")},"6a74":function(e,t,n){"use strict";n("c296")},"9cef":function(e,t,n){e.exports=n.p+"img/avatar_2021_round_sm.51c2521c.png"},"9fcc":function(e,t,n){},a058:function(e,t,n){},aa12:function(e,t,n){"use strict";n("edf0")},bf40:function(e,t,n){"use strict";n("cb19")},c296:function(e,t,n){},cb19:function(e,t,n){},e247:function(e,t,n){},e32f:function(e,t,n){},edf0:function(e,t,n){},f367:function(e,t,n){"use strict";n("f753")},f753:function(e,t,n){},fbdd:function(e,t,n){"use strict";n("e32f")}});
//# sourceMappingURL=app.d3047418.js.map