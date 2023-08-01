"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[605,183,89],{183:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(861),n=a(152),s=a(757),i=a.n(s),c=a(791),o=a(980),l=a(931),u="Cast_castContainer__WQvPg",v="Cast_castItem__mogLp",f="Cast_actorImage__6ebPK",d="Cast_actorName__ISDvr",_=a(184),m=function(){var e=(0,l.UO)().movieId,t=(0,c.useState)([]),a=(0,n.Z)(t,2),s=a[0],m=a[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=de21efcc56a4ffd99e69f6f9f320b387"));case 3:a=t.sent,m(a.data.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching cast data:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,_.jsx)("div",{className:u,children:(0,_.jsx)("ul",{children:s.map((function(e){return(0,_.jsxs)("li",{className:v,children:[(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name,className:f}),(0,_.jsx)("p",{className:d,children:e.name})]},e.id)}))})})}},89:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(861),n=a(152),s=a(757),i=a.n(s),c=a(791),o=a(980),l="Reviews_reviewsContainer__A4aGr",u="Reviews_reviewItem__dyMLo",v="Reviews_reviewAuthor__eNx0E",f=a(184),d=function(e){var t=e.movieId,a=(0,c.useState)([]),s=(0,n.Z)(a,2),d=s[0],_=s[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=de21efcc56a4ffd99e69f6f9f320b387"));case 3:a=e.sent,_(a.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching reviews data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsx)("div",{className:l,children:0===d.length?(0,f.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,f.jsx)("ul",{children:d.map((function(e){return(0,f.jsxs)("li",{className:u,children:[(0,f.jsxs)("p",{className:v,children:["Author: ",e.author]}),(0,f.jsx)("p",{children:e.content})]},e.id)}))})})}},605:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(861),n=a(152),s=a(757),i=a.n(s),c=a(791),o=a(931),l=a(980),u="MovieDetails_movieDetailsContainer__PSt5M",v="MovieDetails_movieTitle__63q9W",f="MovieDetails_moviePoster__N7t73",d="MovieDetails_movieInfoContainer__GOtum",_="MovieDetails_filmData__8m1gY",m="MovieDetails_movieOverview__aCVZh",h="MovieDetails_viewLinksContainer__mMsBA",p="MovieDetails_viewLink__lAZWc",x=a(183),j=a(89),w=a(184),g=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)({}),a=(0,n.Z)(t,2),s=a[0],g=a[1],N=(0,c.useState)(!1),k=(0,n.Z)(N,2),b=k[0],C=k[1],Z=(0,c.useState)(!1),D=(0,n.Z)(Z,2),M=D[0],I=D[1];(0,c.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=de21efcc56a4ffd99e69f6f9f320b387"));case 3:a=t.sent,g(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);return(0,w.jsxs)("div",{className:u,children:[(0,w.jsx)("h1",{className:v,children:s.title||s.name}),(0,w.jsxs)("div",{className:d,children:[(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(s.poster_path),alt:s.title||s.name,className:f}),(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:m,children:s.overview}),(0,w.jsxs)("div",{className:_,children:[(0,w.jsxs)("p",{children:["Release Date: ",s.release_date]}),(0,w.jsxs)("p",{children:["Vote Average: ",s.vote_average]}),(0,w.jsxs)("p",{children:["Vote Count: ",s.vote_count]})]})]})]}),(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("button",{onClick:function(){C(!0),I(!1)},className:p,children:"Cast"}),(0,w.jsx)("button",{onClick:function(){C(!1),I(!0)},className:p,children:"Reviews"})]}),b&&(0,w.jsx)(x.default,{movieId:e}),M&&(0,w.jsx)(j.default,{movieId:e})]})}}}]);
//# sourceMappingURL=605.7bbb46a2.chunk.js.map