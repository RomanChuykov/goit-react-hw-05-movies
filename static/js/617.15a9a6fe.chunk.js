"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[617],{617:function(n,t,r){r.r(t),r.d(t,{Cast:function(){return b}});var e,a,c,u,s,o=r(439),i=r(791),p=r(689),f=r(414),l=r(184),h=function(){return(0,l.jsx)("p",{children:"Sorry, we don't have any cast on this movie"})},d=r(168),x=r(867),v=x.ZP.ul(e||(e=(0,d.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px 10px;\n  justify-content: center;\n"]))),m=x.ZP.li(a||(a=(0,d.Z)(["\n  flex-basis: 150px;\n"]))),w=x.ZP.img(c||(c=(0,d.Z)(["\n  margin-bottom: 5px;\n  border-radius: 4px;\nmax-height:150px;\n\n\n"]))),Z=x.ZP.p(u||(u=(0,d.Z)(["\n  margin-bottom: 5px;\n  font-weight: 500;\n"]))),g=x.ZP.p(s||(s=(0,d.Z)(["\n  color: #6a9bd8;\n"]))),b=function(){var n=(0,i.useState)(null),t=(0,o.Z)(n,2),r=t[0],e=t[1],a=(0,p.UO)().movieId;if((0,i.useEffect)((function(){(0,f.M1)(a).then(e)}),[a]),r)return(0,l.jsxs)(v,{children:[0===r.length&&(0,l.jsx)(h,{}),r.map((function(n){var t=n.id,r=n.profile_path,e=n.name,a=n.character;return(0,l.jsxs)(m,{children:[r?(0,l.jsx)(w,{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:""}):(0,l.jsx)(w,{src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"Placeholder"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(Z,{children:e}),(0,l.jsx)(g,{children:a})]})]},t)}))]})}},414:function(n,t,r){r.d(t,{Df:function(){return o},M1:function(){return f},Pt:function(){return p},TP:function(){return i},tx:function(){return l}});var e=r(861),a=r(757),c=r.n(a),u=r(243),s=new URLSearchParams({api_key:"20e13b9a04a0b41c58cfa9dd598a635c",language:"en-US",include_adult:!1});u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/week?".concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?").concat(s));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(s,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?").concat(s));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?").concat(s));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=617.15a9a6fe.chunk.js.map