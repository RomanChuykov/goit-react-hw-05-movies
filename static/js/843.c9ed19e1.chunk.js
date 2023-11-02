"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[843],{335:function(n,t,e){e.d(t,{O:function(){return v}});var r,a,o,c,u=e(689),i=e(168),s=e(867),p=e(87),f=s.ZP.ul(r||(r=(0,i.Z)(["\n  margin-bottom: 40px;\n  justify-content: space-between;\n  "]))),d=s.ZP.li(a||(a=(0,i.Z)(["\n  flex-basis: calc((100% - 100px) / 5);\n  max-height: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color:  #ebf5fc;\n \n  "]))),l=(0,s.ZP)(p.rU)(o||(o=(0,i.Z)(["\n  object-fit: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  &:hover img {\n    filter: grayscale(0);\n  }\n\n  &:hover p {\n    color: #6a9bd8;\n  }\n"]))),x=s.ZP.p(c||(c=(0,i.Z)(["\n  height: 100%;\n  padding: 10px 8px;\n  font-weight: 500;\n  font-size: 18px;\n  transition: all 200ms ease-in-out;\n"]))),h=e(184),v=function(n){var t=n.movies,e=(0,u.TH)();return(0,h.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title,a=n.original_name;n.poster_path;return(0,h.jsx)(d,{children:(0,h.jsx)(l,{to:"/movies/".concat(t),state:{from:e},children:(0,h.jsx)(x,{children:null!==r&&void 0!==r?r:a})})},t)}))})}},843:function(n,t,e){e.r(t),e.d(t,{Movies:function(){return m}});var r,a,o,c=e(439),u=e(791),i=e(87),s=e(168),p=e(867),f=p.ZP.form(r||(r=(0,s.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  gap: 20px;\n"]))),d=p.ZP.input(a||(a=(0,s.Z)(["\n  padding: 13px 20px;\n  width: 300px;\n  border-radius: 4px;\n\n  font-size: 18px;\n  color: #858585;\n\n \n  border: 1px solid;\n\n  :focus {\n    outline: 3px solid #ebf5fc;\n    box-shadow: 0px 0px 0px 6px #6a9bd8;\n  }\n"]))),l=p.ZP.button(o||(o=(0,s.Z)(["\n  padding: 8px 14px;\n\n  font-weight: 700;\n  font-size: 22px;\n\n  border-radius: 4px;\n\n  border: none;\n  color: #6a9bd8;\n  background-color: #ebf5fc;\n \n\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n\n  :hover,\n  :focus-visible {\n    color: #ebf5fc;\n    background-color: #6a9bd8;\n  }\n\n  :focus {\n    outline: 3px solid #ebf5fc;\n    box-shadow: 0px 0px 0px 6px #6a9bd8;\n  }\n"]))),x=e(184),h=function(n){var t=n.onChange,e=n.onSubmit;return(0,x.jsxs)(f,{onSubmit:e,children:[(0,x.jsx)(d,{type:"text",onChange:t}),(0,x.jsx)(l,{type:"submit",children:"Search"})]})},v=e(414),b=e(335),m=function(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,u.useState)(""),o=(0,c.Z)(a,2),s=o[0],p=o[1],f=(0,i.lr)(),d=(0,c.Z)(f,2),l=d[0],m=d[1];(0,u.useEffect)((function(){var n,t=null!==(n=l.get("query"))&&void 0!==n?n:"";t&&(0,v.Pt)(t).then(r)}),[l]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h,{onSubmit:function(n){n.preventDefault(),m(""!==s?{query:s}:{})},onChange:function(n){p(n.target.value)}}),(0,x.jsx)(b.O,{movies:e})]})}},414:function(n,t,e){e.d(t,{Df:function(){return i},M1:function(){return f},Pt:function(){return p},TP:function(){return s},tx:function(){return d}});var r=e(861),a=e(757),o=e.n(a),c=e(243),u=new URLSearchParams({api_key:"20e13b9a04a0b41c58cfa9dd598a635c",language:"en-US",include_adult:!1});c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/all/week?".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?".concat(u,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=843.c9ed19e1.chunk.js.map