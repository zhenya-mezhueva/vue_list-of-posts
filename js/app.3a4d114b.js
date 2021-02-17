(function(t){function s(s){for(var o,a,c=s[0],i=s[1],p=s[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(s);while(f.length)f.shift()();return r.push.apply(r,p||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],o=!0,c=1;c<e.length;c++){var i=e[c];0!==n[i]&&(o=!1)}o&&(r.splice(s--,1),t=a(a.s=e[0]))}return t}var o={},n={app:0},r=[];function a(s){if(o[s])return o[s].exports;var e=o[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=o,a.d=function(t,s,e){a.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,s){if(1&s&&(t=a(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var o in t)a.d(e,o,function(s){return t[s]}.bind(null,o));return e},a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},a.p="/vue_list-of-posts/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=s,c=c.slice();for(var p=0;p<c.length;p++)s(c[p]);var u=i;r.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"487b":function(t,s,e){"use strict";e("ac5d")},"4ab0":function(t,s,e){},5463:function(t,s,e){"use strict";e("4ab0")},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"posts-nav",attrs:{to:{name:"posts-list"}}},[t._v(" Posts ")])],1)]),e("div",{staticClass:"container"},[e("router-view")],1)])},r=[],a=(e("5c0b"),e("2877")),c={},i=Object(a["a"])(c,n,r,!1,null,null,null),p=i.exports,u=e("8c4f"),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("router-link",{staticClass:"posts-list__link",attrs:{to:{name:"posts-list"}}},[e("div",{staticClass:"posts-list"},t._l(t.posts,(function(t){return e("PostCard",{key:t.id,attrs:{post:t}})})),1)])},f=[],d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("router-link",{staticClass:"post-link",attrs:{to:{name:"post",params:{id:t.post.id}}}},[e("div",{staticClass:"post-card post-list__item"},[e("h4",{staticClass:"post-card__title"},[t._v(t._s(t.post.title))]),e("p",{staticClass:"post-card__text"},[t._v(" "+t._s(t.post.body)+" ")])])])},_=[],v={props:{post:Object}},h=v,b=(e("6038"),Object(a["a"])(h,d,_,!1,null,null,null)),m=b.exports,g=e("2f62"),y={name:"PostList",components:{PostCard:m},created:function(){this.$store.dispatch("fetchPosts")},computed:Object(g["b"])(["posts"])},P=y,C=(e("5463"),Object(a["a"])(P,l,f,!1,null,"7428e99c",null)),O=C.exports,j=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"post-card post"},[o("div",{staticClass:"post__top"},[o("img",{staticClass:"post__logo",attrs:{src:e("ba97"),alt:"user-logo"}}),o("span",[t._v("user #"+t._s(t.post.userId)+" ")])]),o("h4",{staticClass:"post-card__title"},[t._v(t._s(t.post.title))]),o("p",{staticClass:"post-card__text"},[t._v(" "+t._s(t.post.body)+" ")])])},w=[],x=e("bc3a"),S=e.n(x),T=S.a.create({baseURL:"https://jsonplaceholder.typicode.com",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),k={getPosts:function(){return T.get("/posts")},getPost:function(t){return T.get("/posts/".concat(t))}},E={name:"PostDetails",props:["id"],data:function(){return{post:{}}},created:function(){var t=this;k.getPost(this.id).then((function(s){t.post=s.data})).catch((function(t){console.log("There was an error:",t.response)}))}},$=E,M=(e("487b"),Object(a["a"])($,j,w,!1,null,"554f50f4",null)),J=M.exports;o["a"].use(u["a"]);var L=new u["a"]({mode:"history",routes:[{path:"/",name:"posts-list",component:O},{path:"/vue_list-of-posts/",redirect:{name:"posts-list"}},{path:"/post/:id",name:"post",component:J,props:!0}]});o["a"].use(g["a"]);var A=new g["a"].Store({state:{posts:[]},mutations:{SET_POSTS:function(t,s){t.posts=s}},actions:{fetchPosts:function(t){var s=t.commit;k.getPosts().then((function(t){s("SET_POSTS",t.data)})).catch((function(t){console.log("There was an error:",t.response)}))}}});o["a"].config.productionTip=!1,new o["a"]({router:L,store:A,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,s,e){"use strict";e("9c0c")},6038:function(t,s,e){"use strict";e("f4d7")},"9c0c":function(t,s,e){},ac5d:function(t,s,e){},ba97:function(t,s,e){t.exports=e.p+"img/user.1b6baed0.png"},f4d7:function(t,s,e){}});
//# sourceMappingURL=app.3a4d114b.js.map