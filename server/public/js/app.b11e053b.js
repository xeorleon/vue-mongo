(function(t){function e(e){for(var n,c,s=e[0],u=e[1],i=e[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var p=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},1960:function(t,e,r){"use strict";r("50de")},"50de":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("PostComponent")],1)},a=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Latest Posts")]),r("div",{staticClass:"create-post"},[r("label",{attrs:{for:"create-post"}},[t._v("Say Something... ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Create a post"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),r("button",{on:{click:t.createdPost}},[t._v(" Post!")])]),r("hr"),t.error?r("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),r("div",{staticClass:"posts-container"},t._l(t.posts,(function(e,n){return r("div",{key:e._id,staticClass:"post",attrs:{item:e,index:n},on:{dblclick:function(r){return t.deletePost(e._id)}}},[t._v(" "+t._s(e.createdAt.getDate()+"/"+(e.createdAt.getMonth()+1)+"/"+e.createdAt.getFullYear())+" "),r("p",{staticClass:"text"},[t._v(t._s(e.text))])])})),0)])},s=[],u=(r("96cf"),r("1da1")),i=(r("d81d"),r("5530")),p=r("d4ec"),l=r("bee2"),f=r("bc3a"),d=r.n(f),v="api/posts/",m=function(){function t(){Object(p["a"])(this,t)}return Object(l["a"])(t,null,[{key:"getPosts",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.a.get(v);case 2:return e=t.sent,t.prev=3,r=e.data,t.abrupt("return",r.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{createdAt:new Date(t.createdAt)})})));case 8:return t.prev=8,t.t0=t["catch"](3),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[3,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"insertPost",value:function(t){return d.a.post(v,{text:t})}},{key:"deletePost",value:function(t){return d.a.delete("".concat(v).concat(t))}}]),t}(),b=m,h={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.getPosts();case 3:t.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{createdPost:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.insertPost(t.text);case 2:return e.next=4,b.getPosts();case 4:t.posts=e.sent;case 5:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,b.deletePost(t);case 2:return r.next=4,b.getPosts();case 4:e.posts=r.sent;case 5:case"end":return r.stop()}}),r)})))()}}},g=h,x=(r("1960"),r("2877")),w=Object(x["a"])(g,c,s,!1,null,"530a7bcc",null),P=w.exports,y={name:"App",components:{PostComponent:P}},_=y,O=(r("034f"),Object(x["a"])(_,o,a,!1,null,null,null)),j=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.b11e053b.js.map