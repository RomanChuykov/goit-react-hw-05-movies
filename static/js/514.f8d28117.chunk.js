"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[514],{514:function(n,e,r){r.r(e),r.d(e,{MovieDetails:function(){return O}});var t,o,a,c,s,i,u,p,l,d,f=r(439),x=r(791),h=r(689),v=r(414),b=r(168),m=r(867),g=m.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),Z=m.ZP.img(o||(o=(0,b.Z)(["\n  border-radius: 4px;\n\n"]))),w=m.ZP.div(a||(a=(0,b.Z)([""]))),j=m.ZP.h2(c||(c=(0,b.Z)(["\n  margin-bottom: 45px;\n  font-weight: 700;\n  font-size: 36px;\n  color: #6a9bd8;\n \n"]))),k=m.ZP.span(s||(s=(0,b.Z)(["\n  font-weight: 200;\n  color: #858585;\n"]))),P=m.ZP.p(i||(i=(0,b.Z)(["\n  margin-bottom: 15px;\n  font-size: 22px;\n  font-weight: 500;\n  color: #6a9bd8;\n"]))),y=m.ZP.span(u||(u=(0,b.Z)(["\n  font-weight: 300;\n  letter-spacing: 0.05em;\n  color: #858585;\n"]))),_=r(184),U=function(n){var e=n.movie,r=e.poster_path,t=e.title,o=e.release_date,a=e.vote_average,c=e.overview,s=e.genres,i="https://image.tmdb.org/t/p/w500/".concat(r),u=o.slice(0,4),p=a.toFixed(1),l=s.map((function(n){return n.name})).join(", ");return(0,_.jsxs)(g,{children:[(0,_.jsx)(Z,{src:i,alt:"{title}",width:"350"}),(0,_.jsxs)(w,{children:[(0,_.jsxs)(j,{children:[t," ",(0,_.jsxs)(k,{children:["(",u,")"]})]}),(0,_.jsxs)(P,{children:["User score: ",(0,_.jsx)(y,{children:p})]}),(0,_.jsxs)(P,{children:["Overview: ",(0,_.jsx)(y,{children:c})]}),(0,_.jsxs)(P,{children:["Genres: ",(0,_.jsx)(y,{children:l})]})]})]})},z=r(87),S=(0,m.ZP)(z.rU)(p||(p=(0,b.Z)(["\n  display: inline-block;\n  margin-bottom: 20px;\n  padding: 8px 14px;\n\n  font-weight: 500;\n  font-size: 18px;\n\n  border-radius: 4px;\n\n  border: none;\n  color: #6a9bd8;\n  background-color: #ebf5fc;\n  \n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n\n  :hover,\n  :focus-visible {\n    color: #ebf5fc;\n    background-color: #6a9bd8;\n  }\n\n  :focus {\n    outline: 3px solid #ebf5fc;\n    box-shadow: 0px 0px 0px 6px #6a9bd8;\n  }\n"]))),C=m.ZP.div(l||(l=(0,b.Z)(["\n  margin: 20px 0;\n  display: flex;\n  gap: 10px;\n"]))),L=(0,m.ZP)(z.OL)(d||(d=(0,b.Z)(["\n  display: inline-block;\n  padding: 8px 14px;\n\n  font-weight: 500;\n  font-size: 18px;\n\n  border-radius: 4px;\n\n  border: none;\n  color: #6a9bd8;\n  background-color: #ebf5fc;\n  \n\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n\n  &.active {\n    color: #ebf5fc;\n    background-color: #6a9bd8;\n    \n  }\n\n  :hover,\n  :focus-visible {\n    color: #ebf5fc;\n    background-color: #6a9bd8;\n  }\n\n  :focus {\n    outline: 3px solid #ebf5fc;\n    box-shadow: 0px 0px 0px 6px #6a9bd8;\n  }\n"]))),O=function(){var n,e,r=(0,x.useState)(null),t=(0,f.Z)(r,2),o=t[0],a=t[1],c=(0,h.UO)().movieId,s=(0,h.TH)();if((0,x.useEffect)((function(){(0,v.TP)(c).then(a)}),[c]),!o)return null;var i=null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(S,{to:i,children:"\u2190 Go back"}),(0,_.jsx)(U,{movie:o}),(0,_.jsxs)(C,{children:[(0,_.jsx)(L,{to:"cast",state:{from:i},children:"Cast"}),(0,_.jsx)(L,{to:"reviews",state:{from:i},children:"Reviews"})]}),(0,_.jsx)(x.Suspense,{children:(0,_.jsx)(h.j3,{})})]})}},414:function(n,e,r){r.d(e,{Df:function(){return i},M1:function(){return l},Pt:function(){return p},TP:function(){return u},tx:function(){return d}});var t=r(861),o=r(757),a=r.n(o),c=r(243),s=new URLSearchParams({api_key:"20e13b9a04a0b41c58cfa9dd598a635c",language:"en-US",include_adult:!1});c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,t.Z)(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/all/week?".concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?").concat(s));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?".concat(s,"&query=").concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?").concat(s));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?").concat(s));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=514.f8d28117.chunk.js.map