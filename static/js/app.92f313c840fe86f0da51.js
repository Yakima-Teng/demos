webpackJsonp([2,0],{0:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var l=a(24),n=r(l),i=a(25),s=r(i),u=a(26),o=r(u),c=a(28),d=r(c),m=a(27),f=r(m),g=a(4),p=r(g),h=a(193);a(188);var _=a(162),v=a(340),x=r(v),j=a(342),E=r(j),N=a(341),w=r(N),y=a(344),k=r(y),b=a(345),I=r(b),M=a(346),S=r(M),C=a(343),P=r(C),X=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={},a}return(0,f["default"])(e,t),(0,o["default"])(e,[{key:"render",value:function(){return p["default"].createElement("div",{className:"app-wrapper"},p["default"].createElement(x["default"],null),p["default"].createElement("div",{className:"app-content"},this.props.children),p["default"].createElement(E["default"],null),p["default"].createElement(w["default"],null))}}]),e}(p["default"].Component),Y=p["default"].createElement(_.Route,{path:"/",component:X},p["default"].createElement(_.IndexRoute,{component:k["default"]}),p["default"].createElement(_.Route,{path:"/slider-2d-js",component:k["default"]}),p["default"].createElement(_.Route,{path:"/slider-3d-css",component:I["default"]}),p["default"].createElement(_.Route,{path:"/slider-3d-js",component:S["default"]}),p["default"].createElement(_.Route,{path:"/note",component:P["default"]}),p["default"].createElement(_.Route,{path:"*",component:k["default"]}));(0,h.render)(p["default"].createElement(_.Router,{history:_.hashHistory},Y),document.getElementById("app")),function(){for(var t=0,e=["webkit","moz"],a=0,r=e.length;a<r&&!window.requestAnimationFrame;a++)window.requestAnimationFrame=window[e[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[a]+"CancelAnimationFrame"]||window[e[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var a=+new Date,r=Math.max(0,16.7-(a-t)),l=window.setTimeout(function(){e()},r);return t=a+r,l}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},168:function(t,e){t.exports=window.$},171:function(t,e,a){t.exports=a.p+"static/img/magic.aee5162.jpg"},188:function(t,e){},340:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var l=a(24),n=r(l),i=a(25),s=r(i),u=a(26),o=r(u),c=a(28),d=r(c),m=a(27),f=r(m),g=a(4),p=r(g),h=a(162),_=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={menus:[{title:"2d幻灯-JS",url:"slider-2d-js"},{title:"3d幻灯-CSS",url:"slider-3d-css"},{title:"3d幻灯-JS",url:"slider-3d-js"},{title:"说明及其他",url:"note"}]},a}return(0,f["default"])(e,t),(0,o["default"])(e,[{key:"render",value:function(){var t=this.state.menus.map(function(t){return p["default"].createElement("li",{className:"li",key:t.url},p["default"].createElement(h.Link,{className:"title",to:"/"+t.url},t.title))});return p["default"].createElement("header",{className:"app-header"},p["default"].createElement("nav",{className:"nav"},p["default"].createElement("ul",{className:"ul"},t)))}}]),e}(p["default"].Component);e["default"]=_},341:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var l=a(24),n=r(l),i=a(25),s=r(i),u=a(26),o=r(u),c=a(28),d=r(c),m=a(27),f=r(m),g=a(4),p=r(g),h=a(168),_=r(h),v=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={isLoading:!0},a}return(0,f["default"])(e,t),(0,o["default"])(e,[{key:"componentDidMount",value:function(){function t(){console.log(e.refs.progressBar.className),e.refs.progressBar.style.width=++r/17*100+"%",17===r&&setTimeout(function(){e.setState({isLoading:!1})},900)}var e=this,r=0,l=new Image;l.src=a(171),l.onload=function(){(0,_["default"])("body").css({"background-color":"#000","background-image":'url("'+l.src+'")'}),t()};for(var n=1;n<17;n++){var i=new Image;i.src="./static/img/near_1200x800/"+(n>9?n:"0"+n)+".jpg",i.onload=t}}},{key:"render",value:function(){return p["default"].createElement("div",{className:"app-loading"+(this.state.isLoading?"":" fade-out")},p["default"].createElement("div",{className:"inner"},p["default"].createElement("div",{className:"progress-bar-wrapper"},p["default"].createElement("div",{ref:"progressBar",className:"progress-bar"},p["default"].createElement("i",{className:"fa fa-chrome fa-pulse fa-2x"})))))}}]),e}(p["default"].Component);e["default"]=v},342:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var l=a(24),n=r(l),i=a(25),s=r(i),u=a(26),o=r(u),c=a(28),d=r(c),m=a(27),f=r(m),g=a(4),p=r(g),h=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={snowsNumber:100},a}return(0,f["default"])(e,t),(0,o["default"])(e,[{key:"render",value:function(){var t=this.generateSnows().map(function(t){var e={animationDelay:100*-t+"ms",left:100*Math.random()+"%"};return p["default"].createElement("div",{className:"snow",key:t,style:e})});return p["default"].createElement("div",{className:"app-snows"},t)}},{key:"generateSnows",value:function(){for(var t=[],e=0;e<this.state.snowsNumber;e++)t.push(e);return t}}]),e}(p["default"].Component);e["default"]=h},343:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var l=a(24),n=r(l),i=a(25),s=r(i),u=a(26),o=r(u),c=a(28),d=r(c),m=a(27),f=r(m),g=a(4),p=r(g),h=a(113),_=r(h),v=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={note:{title:"Note",details:["这是一个简单的进阶教程：","1、“2D幻灯-JS”是一个很常规的JS代码；","2、“3D幻灯-CSS”在CSS3 animation的基础上，使用了CSS3 transform 3D变换；","3、“3D幻灯-JS”中改为由JS控制六面体的3D变换（根据鼠标位置相应地转动）；","4、该SPA所有图片均来自网络，版权归原作者所有。","5、为获得较好的视觉体验，请使用新版Chrome浏览器查看该SPA。"]}},a}return(0,f["default"])(e,t),(0,o["default"])(e,[{key:"render",value:function(){var t=this.state.note.details.map(function(t){return p["default"].createElement("li",{className:"li",key:_["default"].v4()},t)});return p["default"].createElement("div",{className:"note"},p["default"].createElement("div",{className:"inner"},p["default"].createElement("section",{className:"section"},p["default"].createElement("h3",{className:"title"},this.state.note.title),p["default"].createElement("ul",{className:"ul"},t))))}}]),e}(p["default"].Component);e["default"]=v},344:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var l=a(24),n=r(l),i=a(25),s=r(i),u=a(26),o=r(u),c=a(28),d=r(c),m=a(27),f=r(m),g=a(4),p=r(g),h=a(265),_=r(h),v=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.showPic=function(t){console.log(t),a.setState({curIndex:t})},a.state={timer:null,curIndex:0,images16:[{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""},{url:"./static/img/near_1200x800/09.jpg",title:""},{url:"./static/img/near_1200x800/10.jpg",title:""},{url:"./static/img/near_1200x800/11.jpg",title:""},{url:"./static/img/near_1200x800/12.jpg",title:""},{url:"./static/img/near_1200x800/13.jpg",title:""},{url:"./static/img/near_1200x800/14.jpg",title:""},{url:"./static/img/near_1200x800/15.jpg",title:""},{url:"./static/img/near_1200x800/16.jpg",title:""}]},a}return(0,f["default"])(e,t),(0,o["default"])(e,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"componentWillUnmount",value:function(){this.stopInterval()}},{key:"render",value:function(){var t=this,e=this.state.images16.map(function(e,a){return p["default"].createElement("li",{className:"photo",key:a,style:{display:t.isCurIndexPicture(e.url)?"block":"none"}},p["default"].createElement("img",{className:"photo-img",src:e.url,alt:e.title}))}),a=this.state.images16.map(function(e,a){return p["default"].createElement("div",{key:a,className:(0,_["default"])({point:!0,scale:t.isCurIndexPicture(e.url)}),style:{backgroundImage:"url("+e.url+")"},onMouseEnter:function(){return t.showPic(a)}})});return p["default"].createElement("div",{className:"slider-2d-js"},p["default"].createElement("section",{onMouseEnter:this.stopInterval.bind(this),onMouseLeave:this.startInterval.bind(this),className:"gallery"},p["default"].createElement("ul",{className:"photos"},e),p["default"].createElement("aside",{onClick:this.showPrevPic.bind(this),className:"arr arr-left"},p["default"].createElement("i",{className:"fa fa-chevron-left"})),p["default"].createElement("aside",{onClick:this.showNextPic.bind(this),className:"arr arr-right"},p["default"].createElement("i",{className:"fa fa-chevron-right"})),p["default"].createElement("footer",{className:"points"},a)))}},{key:"isCurIndexPicture",value:function(t){var e=t.match(/\/(\d*)\.jpg/)[0].replace(/\/(\d*)\.jpg/,"$1");return parseInt(e)===parseInt(this.state.curIndex)+1}},{key:"startInterval",value:function(){var t=this;this.setState({timer:setInterval(function(){t.showNextPic()},2e3)})}},{key:"stopInterval",value:function(){this.state.timer&&clearInterval(this.state.timer)}},{key:"showPrevPic",value:function(){0===this.state.curIndex?this.setState({curIndex:this.state.images16.length-1}):this.setState({curIndex:this.state.curIndex-1})}},{key:"showNextPic",value:function(){this.state.curIndex===this.state.images16.length-1?this.setState({curIndex:0}):this.setState({curIndex:this.state.curIndex+1})}}]),e}(p["default"].Component);e["default"]=v},345:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var l=a(24),n=r(l),i=a(25),s=r(i),u=a(26),o=r(u),c=a(28),d=r(c),m=a(27),f=r(m),g=a(4),p=r(g),h=a(113),_=r(h),v=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={images24:[{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""},{url:"./static/img/near_1200x800/09.jpg",title:""},{url:"./static/img/near_1200x800/10.jpg",title:""},{url:"./static/img/near_1200x800/11.jpg",title:""},{url:"./static/img/near_1200x800/12.jpg",title:""},{url:"./static/img/near_1200x800/13.jpg",title:""},{url:"./static/img/near_1200x800/14.jpg",title:""},{url:"./static/img/near_1200x800/15.jpg",title:""},{url:"./static/img/near_1200x800/16.jpg",title:""},{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""}]},a}return(0,f["default"])(e,t),(0,o["default"])(e,[{key:"render",value:function(){for(var t=[],e=0;e<6;e++)t.push([this.state.images24[4*e],this.state.images24[4*e+1],this.state.images24[4*e+2],this.state.images24[4*e+3]]);var a=t.map(function(t){return p["default"].createElement("li",{className:"stage-cover",key:_["default"].v4()},p["default"].createElement("ul",{className:"container-cover"},t.map(function(t){return p["default"].createElement("li",{className:"stage-pic",key:_["default"].v4()},p["default"].createElement("div",{className:"container-pic"},p["default"].createElement("img",{src:t.url,alt:t.title,className:"img"})))})))});return p["default"].createElement("div",{className:"slider-3d-css"},"// stage for 六面体整体",p["default"].createElement("div",{className:"stage-whole"},p["default"].createElement("ul",{className:"container-whole"},a)))}}]),e}(p["default"].Component);e["default"]=v},346:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var l=a(339),n=r(l),i=a(24),s=r(i),u=a(25),o=r(u),c=a(26),d=r(c),m=a(28),f=r(m),g=a(27),p=r(g),h=a(4),_=r(h),v=a(168),x=r(v),j=function(t){function e(t){(0,o["default"])(this,e);var a=(0,f["default"])(this,(e.__proto__||(0,s["default"])(e)).call(this,t));return a.getMousePosition=function(t){return{x:t.pageX||t.clientX+document.body.scrollLeft,y:t.pageY||t.clientY+document.body.scrollTop}},a.transform=function(t){(0,x["default"])(".container-whole").css({transform:t})},a.startTransform=function(t,e){e=parseInt(e);var r=(0,x["default"])(".container-whole").get(0).style.webkitTransform||"rotateX(0deg) rotateY(0deg) rotateZ(0deg)",l=parseInt(r.replace(/^rotateX\((-?\d*)deg\).*$/,"$1")),n=parseInt(r.replace(/^.*rotateY\((-?\d*)deg\).*$/,"$1")),i=parseInt(r.replace(/^.*rotateZ\((-?\d*)deg\).*$/,"$1"));switch(a.setState({rotateX:l,rotateY:n,rotateZ:i}),t){case"up":r="rotateX("+(l+e)+"deg) rotateY("+n+"deg) rotateZ("+i+"deg)";break;case"down":r="rotateX("+(l-e)+"deg) rotateY("+n+"deg) rotateZ("+i+"deg)";break;case"right":r="rotateX("+l+"deg) rotateY("+(n+e)+"deg) rotateZ("+i+"deg)";break;case"left":r="rotateX("+l+"deg) rotateY("+(n-e)+"deg) rotateZ("+i+"deg)";break;case"scroll":default:r="rotateX("+l+"deg) rotateY("+n+"deg) rotateZ("+(i+e)+"deg)"}a.transform(r)},a.cool=function(t,e,r){function l(t){return t=parseInt(t),{yUp:r/e*t-r,yDown:-(r/e)*t}}var n=(0,x["default"])(t.target||t.srcElement),i=a.getMousePosition(t),s=i.x,u=0-i.y,o=n.offset().left,c=0-n.offset().top;s-=o,u-=c;var d=l(s).yUp,m=l(s).yDown,f=parseInt(Math.sqrt(Math.pow(s-.5*e,2)+Math.pow(u+.5*r,2))),g=1;f<80?a.startTransform("scroll",g):u>d?u>m?a.startTransform("up",g):a.startTransform("left",g):u>m?a.startTransform("right",g):a.startTransform("down",g)},a.state={timer:null,rotateX:0,rotateY:0,rotateZ:0,images24:[{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""},{url:"./static/img/near_1200x800/09.jpg",title:""},{url:"./static/img/near_1200x800/10.jpg",title:""},{url:"./static/img/near_1200x800/11.jpg",title:""},{url:"./static/img/near_1200x800/12.jpg",title:""},{url:"./static/img/near_1200x800/13.jpg",title:""},{url:"./static/img/near_1200x800/14.jpg",title:""},{url:"./static/img/near_1200x800/15.jpg",title:""},{url:"./static/img/near_1200x800/16.jpg",title:""},{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""}]},a}return(0,p["default"])(e,t),(0,d["default"])(e,[{key:"componentWillUnmount",value:function(){this.stopInterval()}},{key:"render",value:function(){for(var t=this,e=[],a=0;a<6;a++)e.push([this.state.images24[4*a],this.state.images24[4*a+1],this.state.images24[4*a+2],this.state.images24[4*a+3]]);var r=e.map(function(e,a){return _["default"].createElement("li",{className:"stage-cover",key:a},_["default"].createElement("ul",{onMouseEnter:t.startInterval.bind(t),onMouseLeave:t.stopInterval.bind(t),className:"container-cover"},e.map(function(t,e){return _["default"].createElement("li",{className:"stage-pic",key:e},_["default"].createElement("div",{className:"container-pic"},_["default"].createElement("img",{src:t.url,alt:t.title,className:"img"})))})))});return _["default"].createElement("div",{className:"slider-3d-js"},_["default"].createElement("div",{className:"slider"},_["default"].createElement("div",{className:"stage-whole"},_["default"].createElement("ul",{className:"container-whole"},r))),_["default"].createElement("aside",{className:"controls"},_["default"].createElement("ul",{className:"ul"},_["default"].createElement("li",{className:"li"},_["default"].createElement("label",{htmlFor:"rotateX",className:"label"},"RotateX"),_["default"].createElement("input",{onChange:this.rotate.bind(this,"rotateX"),type:"number",id:"rotateX",className:"input",value:this.state.rotateX})),_["default"].createElement("li",{className:"li"},_["default"].createElement("label",{htmlFor:"rotateY",className:"label"},"RotateY"),_["default"].createElement("input",{onChange:this.rotate.bind(this,"rotateY"),type:"number",id:"rotateY",className:"input",value:this.state.rotateY})),_["default"].createElement("li",{className:"li"},_["default"].createElement("label",{htmlFor:"rotateZ",className:"label"},"RotateZ"),_["default"].createElement("input",{onChange:this.rotate.bind(this,"rotateZ"),type:"number",id:"rotateZ",className:"input",value:this.state.rotateZ})))))}},{key:"rotate",value:function(t,e){var a=this;this.setState((0,n["default"])({},t,(e.target||e.srcElement).value),function(){(0,x["default"])(".container-whole").css({transform:"rotateX("+a.state.rotateX+"deg) rotateY("+a.state.rotateY+"deg) rotateZ("+a.state.rotateZ+"deg)"})})}},{key:"startInterval",value:function(t){function e(){a.cool(t,r,l),a.setState({timer:window.requestAnimationFrame(e)})}t.persist();var a=this,r=(0,x["default"])(t.target).width(),l=(0,x["default"])(t.target).height();e()}},{key:"stopInterval",value:function(){this.state.timer&&window.cancelAnimationFrame(this.state.timer)}}]),e}(_["default"].Component);e["default"]=j},347:function(t,e){}});