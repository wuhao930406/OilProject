(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),l=t(3),c=t.n(l),i=(t(15),t(4)),r=t(5),m=t(7),o=t(6),g=t(8),d=t(1),u=(t(17),t(18),["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"]),f=function(e){function a(){var e;Object(i.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).watchFullScreen=function(){var a=window.navigator.userAgent.toLowerCase();Object(d.a)(Object(d.a)(e));a.indexOf("chrome")>0?document.body.scrollHeight===window.screen.height&&document.body.scrollWidth===window.screen.width?e.setState({fullscreen:!1}):e.setState({fullscreen:!0}):window.outerHeight===window.screen.height&&window.outerWidth===window.screen.width?e.setState({fullscreen:!1}):e.setState({fullscreen:!0})};var t=(new Date).getTime();return e.state={date:e.timetrans(t),day:(new Date).getDay(),fullscreen:!1,loaded:!1,loadeds:!1,hide:!1},e}return Object(g.a)(a,e),Object(r.a)(a,[{key:"timetrans",value:function(e){var a=new Date(e);return a.getFullYear()+"-"+((a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"-")+((a.getDate()<10?"0"+a.getDate():a.getDate())+" ")+((a.getHours()<10?"0"+a.getHours():a.getHours())+":")+((a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())+":")+(a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds())}},{key:"componentDidMount",value:function(){var e=this,a=this;window.addEventListener("keypress",function(e){a.watchFullScreen()}),setInterval(function(){var a=(new Date).getTime();e.setState({date:e.timetrans(a),loaded:!0,hide:!0})},1e3),setTimeout(function(){e.setState({loadeds:!0})},800)}},{key:"fullScreen",value:function(){var e=document.documentElement,a=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;"undefined"!=typeof a&&a&&a.call(e)}},{key:"exitScreen",value:function(){var e=document;e.exitFullscreen?e.exitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitCancelFullScreen&&e.webkitCancelFullScreen()}},{key:"changeScreen",value:function(e){e?this.exitScreen():this.fullScreen(),this.setState({fullscreen:!e})}},{key:"render",value:function(){var e=this,a=this.state,t=a.date,s=a.day,l=a.fullscreen,c=a.loaded,i=a.loadeds,r=a.hide;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"loadbox",style:{bottom:i?"-100%":0,transition:"all 0.4s",display:r?"none":"block"}},n.a.createElement("div",{className:"base"},n.a.createElement("div",{className:"cube"}),n.a.createElement("div",{className:"cube"}),n.a.createElement("div",{className:"cube"}),n.a.createElement("div",{className:"cube"}),n.a.createElement("div",{className:"cube"}),n.a.createElement("div",{className:"cube"}),n.a.createElement("div",{className:"cube"}),n.a.createElement("div",{className:"cube"}),n.a.createElement("div",{className:"cube"})),n.a.createElement("p",{className:"tisi"},"\u52a0\u8f7d\u4e2d...")),n.a.createElement("div",{className:"header"},n.a.createElement("ul",{className:"icongroup"},n.a.createElement("li",{style:{marginLeft:c?0:-260,transition:"all 0.4s"}},n.a.createElement("img",{src:"./assets/images/gallery.png",alt:""})),n.a.createElement("li",{className:"time",style:{marginRight:c?0:-300,transition:"all 0.4s"}},n.a.createElement("img",{src:"./assets/images/time.png",alt:""}),n.a.createElement("p",null,"\u661f\u671f",u[s],"  ",t))),n.a.createElement("div",{className:"logocons",style:{marginTop:c?44:600}},n.a.createElement("img",{src:"./assets/images/Logo.png",alt:""}))),n.a.createElement("div",{className:"content"},n.a.createElement("ul",{className:"mainNav"},n.a.createElement("a",{href:window.configs.first.url,target:window.configs.first.target?"_blank":"",className:"lia",style:{left:c?0:"-33%",top:c?0:-153}},n.a.createElement("div",{className:"leftcon"},n.a.createElement("img",{className:"f1",src:"./assets/images/1a.svg",alt:""}),n.a.createElement("img",{className:"bt",src:"./assets/images/123b.svg",alt:""}),n.a.createElement("img",{className:"none",src:"./assets/images/icon01.png",alt:""})),n.a.createElement("div",{className:"rightext"},n.a.createElement("p",null,window.configs.first.name1,n.a.createElement("br",null),window.configs.first.name2))),n.a.createElement("a",{href:window.configs.second.url,target:window.configs.second.target?"_blank":"",className:"lib",style:{top:c?0:-153}},n.a.createElement("div",{className:"leftcon"},n.a.createElement("img",{className:"f1",src:"./assets/images/2a.svg",alt:""}),n.a.createElement("img",{className:"bt",src:"./assets/images/123b.svg",alt:""}),n.a.createElement("img",{className:"none",src:"./assets/images/icon02.png",alt:""})),n.a.createElement("div",{className:"rightext"},n.a.createElement("p",null,window.configs.second.name1,n.a.createElement("br",null),window.configs.second.name2))),n.a.createElement("a",{href:window.configs.third.url,className:"lic",target:window.configs.third.target?"_blank":"",style:{right:c?0:"-33%",top:c?0:-153}},n.a.createElement("div",{className:"leftcon"},n.a.createElement("img",{className:"f1",src:"./assets/images/3a.svg",alt:""}),n.a.createElement("img",{className:"bt",src:"./assets/images/123b.svg",alt:""}),n.a.createElement("img",{className:"none",src:"./assets/images/icon03.png",alt:""})),n.a.createElement("div",{className:"rightext"},n.a.createElement("p",null,window.configs.third.name1,n.a.createElement("br",null),window.configs.third.name2))),n.a.createElement("a",{href:window.configs.fourth.url,className:"lid",target:window.configs.fourth.target?"_blank":"",style:{left:c?0:"-33%",bottom:c?0:-153}},n.a.createElement("div",{className:"leftcon"},n.a.createElement("img",{className:"f1",style:{top:16},src:"./assets/images/4a.svg",alt:""}),n.a.createElement("img",{className:"bt",src:"./assets/images/4b.svg",alt:""}),n.a.createElement("img",{className:"none",src:"./assets/images/icon04.png",alt:""})),n.a.createElement("div",{className:"rightext"},n.a.createElement("p",null,window.configs.fourth.name1,n.a.createElement("br",null),window.configs.fourth.name2))),n.a.createElement("a",{href:window.configs.fifth.url,className:"lie",target:window.configs.fifth.target?"_blank":"",style:{bottom:c?0:-153}},n.a.createElement("div",{className:"leftcon"},n.a.createElement("img",{className:"f1",style:{top:16,left:14},src:"./assets/images/5a.svg",alt:""}),n.a.createElement("img",{className:"bt",src:"./assets/images/5b.svg",alt:""}),n.a.createElement("img",{className:"none",src:"./assets/images/icon05.png",alt:""})),n.a.createElement("div",{className:"rightext"},n.a.createElement("p",null,window.configs.fifth.name1,n.a.createElement("br",null),window.configs.fifth.name2))),n.a.createElement("a",{href:window.configs.sixth.url,className:"lif",target:window.configs.sixth.target?"_blank":"",style:{right:c?0:"-33%",bottom:c?0:-153}},n.a.createElement("div",{className:"leftcon"},n.a.createElement("img",{className:"f1",style:{top:16},src:"./assets/images/6a.svg",alt:""}),n.a.createElement("img",{className:"bt",src:"./assets/images/6b.svg",alt:""}),n.a.createElement("img",{className:"none",src:"./assets/images/icon06.png",alt:""})),n.a.createElement("div",{className:"rightext"},n.a.createElement("p",null,window.configs.sixth.name1,n.a.createElement("br",null),window.configs.sixth.name2)))),n.a.createElement("div",{className:"bacs",style:{opacity:c?1:0,transition:"all 4s"}}),n.a.createElement("p",{className:"botbox"},n.a.createElement("b",{style:{padding:"0px 10px",backgroundColor:"#fff",marginRight:8}}),"Technical support \uff1aCPECC\u897f\u5357\u5206\u516c\u53f8      \xa0|\xa0      \u7248\u672cV2018.12.22"),n.a.createElement("div",{className:"fullscreen",onClick:function(){e.changeScreen(l)}},n.a.createElement("img",{src:l?"./assets/images/disfull.svg":"./assets/images/full.svg",alt:""}))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.6d7c369e.chunk.js.map