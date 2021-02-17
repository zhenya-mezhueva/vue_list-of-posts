(function(t){function e(e){for(var n,a,c=e[0],i=e[1],p=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,p||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,c=1;c<s.length;c++){var i=s[c];0!==o[i]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},o={app:0},r=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var u=i;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"487b":function(t,e,s){"use strict";s("ac5d")},"4ab0":function(t,e,s){},5463:function(t,e,s){"use strict";s("4ab0")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"top"},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"posts-nav",attrs:{to:{name:"posts-list"}}},[t._v(" Posts ")])],1)]),s("div",{staticClass:"container"},[s("router-view")],1)])},r=[],a=(s("5c0b"),s("2877")),c={},i=Object(a["a"])(c,o,r,!1,null,null,null),p=i.exports,u=s("8c4f"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"posts-list__link",attrs:{to:{name:"posts-list"}}},[s("div",{staticClass:"posts-list"},t._l(t.posts,(function(t){return s("PostCard",{key:t.id,attrs:{post:t}})})),1)])},f=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"post-link",attrs:{to:{name:"post",params:{id:t.post.id}}}},[s("div",{staticClass:"post-card post-list__item"},[s("h4",{staticClass:"post-card__title"},[t._v(t._s(t.post.title))]),s("p",{staticClass:"post-card__text"},[t._v(" "+t._s(t.post.body)+" ")])])])},_=[],h={props:{post:Object}},v=h,b=(s("6038"),Object(a["a"])(v,d,_,!1,null,null,null)),m=b.exports,g=s("2f62"),y={name:"PostList",components:{PostCard:m},created:function(){this.$store.dispatch("fetchPosts")},computed:Object(g["b"])(["posts"])},P=y,C=(s("5463"),Object(a["a"])(P,l,f,!1,null,"7428e99c",null)),O=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-card post"},[n("div",{staticClass:"post__top"},[n("img",{staticClass:"post__logo",attrs:{src:s("ba97"),alt:"user-logo"}}),n("span",[t._v("user #"+t._s(t.post.userId)+" ")])]),n("h4",{staticClass:"post-card__title"},[t._v(t._s(t.post.title))]),n("p",{staticClass:"post-card__text"},[t._v(" "+t._s(t.post.body)+" ")])])},w=[],x=s("bc3a"),S=s.n(x),T=S.a.create({baseURL:"https://jsonplaceholder.typicode.com",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),k={getPosts:function(){return T.get("/posts")},getPost:function(t){return T.get("/posts/".concat(t))}},E={name:"PostDetails",props:["id"],data:function(){return{post:{}}},created:function(){var t=this;k.getPost(this.id).then((function(e){t.post=e.data})).catch((function(t){console.log("There was an error:",t.response)}))}},$=E,M=(s("487b"),Object(a["a"])($,j,w,!1,null,"554f50f4",null)),J=M.exports;n["a"].use(u["a"]);var L=new u["a"]({mode:"history",routes:[{path:"/",name:"posts-list",component:O},{path:"/post/:id",name:"post",component:J,props:!0}]});n["a"].use(g["a"]);var A=new g["a"].Store({state:{posts:[]},mutations:{SET_POSTS:function(t,e){t.posts=e}},actions:{fetchPosts:function(t){var e=t.commit;k.getPosts().then((function(t){e("SET_POSTS",t.data)})).catch((function(t){console.log("There was an error:",t.response)}))}}});n["a"].config.productionTip=!1,new n["a"]({router:L,store:A,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},6038:function(t,e,s){"use strict";s("f4d7")},"9c0c":function(t,e,s){},ac5d:function(t,e,s){},ba97:function(t,e,s){t.exports=s.p+"img/user.1b6baed0.png"},f4d7:function(t,e,s){}});
//# sourceMappingURL=app.22d5825f.js.map