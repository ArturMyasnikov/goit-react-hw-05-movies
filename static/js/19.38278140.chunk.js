"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[19],{9019:function(t,n,e){e.r(n);var i=e(885),a=e(2791),c=e(1380),r=e(4791),o=e(1895),s=e(184);n.default=function(){var t=(0,a.useState)(),n=(0,i.Z)(t,2),e=n[0],u=n[1];return(0,a.useEffect)((function(){(0,r.JS)().then((function(t){var n=t.data;return u(n.results)}))}),[]),(0,s.jsx)("section",{className:c.Z.trendingFilmsSection,children:(0,s.jsx)(o.Z,{films:e,homePath:"true"})})}},1895:function(t,n,e){var i=e(1380),a=e(501),c=e(184);n.Z=function(t){var n=t.films,e=t.homePath,r=void 0!==e&&e;return(0,c.jsx)("ul",{className:i.Z.filmList,children:n&&n.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{className:i.Z.poster,src:"https://image.tmdb.org/t/p/original"+t.poster_path,height:"auto",alt:"Film poster"}),(0,c.jsx)(a.rU,{to:r?"/movies/".concat(t.id):"".concat(t.id),className:i.Z.filmTitle,children:t.original_title||t.original_name})]})},t.id)}))})}},4791:function(t,n,e){e.d(n,{EB:function(){return s},JS:function(){return o},Jh:function(){return m},_r:function(){return l},ts:function(){return u}});var i=e(4569),a=e.n(i),c="9adb764dcbd165157ec52c929874934d",r="https://api.themoviedb.org/3/movie";function o(){return a().get("".concat("https://api.themoviedb.org/3/trending/all/day","?api_key=").concat(c,"&page=1"))}function s(t){return a().get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(c,"&page=1&query=").concat(t))}function u(t){return a().get("".concat(r,"/").concat(t,"?api_key=").concat(c,"&language=en-US"))}function l(t){return a().get("".concat(r,"/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}function m(t){return a().get("".concat(r,"/").concat(t,"/credits?api_key=").concat(c,"&language=en-US"))}},1380:function(t,n){n.Z={trendingFilmsSection:"TrandingFilms_trendingFilmsSection__7Zfxg",filmList:"TrandingFilms_filmList__t++fI",filmTitle:"TrandingFilms_filmTitle__v0ooz",poster:"TrandingFilms_poster__0ofeM"}}}]);
//# sourceMappingURL=19.38278140.chunk.js.map