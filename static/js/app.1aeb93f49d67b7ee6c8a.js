webpackJsonp([2,0],{0:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=a(13),n=r(i),l=a(14),s=r(l),u=a(15),o=r(u),c=a(17),d=r(c),f=a(16),m=r(f),h=a(4),g=r(h),p=a(218);a(211);var v=a(181),y=a(378),_=r(y),w=a(380),x=r(w),E=a(379),j=r(E),b=a(385),k=r(b),N=a(386),I=r(N),C=a(387),P=r(C),M=a(382),A=r(M),S=a(384),R=r(S),L=a(383),O=r(L),Y=a(381),T=r(Y),X=function(t){function e(t){(0,s.default)(this,e);var a=(0,d.default)(this,(e.__proto__||(0,n.default)(e)).call(this,t));return a.state={},a}return(0,m.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){return g.default.createElement("div",{className:"app-wrapper"},g.default.createElement(_.default,null),g.default.createElement("div",{className:"app-content"},this.props.children),g.default.createElement(x.default,null),g.default.createElement(j.default,null))}}]),e}(g.default.Component),B=g.default.createElement(v.Route,{path:"/",component:X},g.default.createElement(v.IndexRoute,{component:I.default}),g.default.createElement(v.Route,{path:"/slider-2d-js",component:k.default}),g.default.createElement(v.Route,{path:"/slider-3d-css",component:I.default}),g.default.createElement(v.Route,{path:"/slider-3d-js",component:P.default}),g.default.createElement(v.Route,{path:"/rainbow",component:R.default}),g.default.createElement(v.Route,{path:"/particles",component:O.default}),g.default.createElement(v.Route,{path:"/note",component:A.default}),g.default.createElement(v.Route,{path:"/cards",component:T.default}),g.default.createElement(v.Route,{path:"*",component:k.default}));(0,p.render)(g.default.createElement(v.Router,{history:v.hashHistory},B),document.getElementById("app")),function(){for(var t=0,e=["webkit","moz"],a=0,r=e.length;a<r&&!window.requestAnimationFrame;a++)window.requestAnimationFrame=window[e[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[a]+"CancelAnimationFrame"]||window[e[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var a=+new Date,r=Math.max(0,16.7-(a-t)),i=window.setTimeout(function(){e()},r);return t=a+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},125:function(t,e,a){t.exports=a.p+"static/img/pikaqiu.14ad77d.png"},185:function(t,e){"use strict";var a=e.typeOf=function(t){return{}.toString.call(t).slice(8,-1).toLowerCase()},r=e.merge=function(t,e){if(t&&e)for(var i in e)"object"===a(t[i])&&"object"===a(e[i])?r(t[i],e[i]):t[i]=e[i];return t}},189:function(t,e){t.exports=window.$},195:function(t,e,a){t.exports=a.p+"static/img/magic.aee5162.jpg"},211:function(t,e){},378:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(13),n=r(i),l=a(14),s=r(l),u=a(15),o=r(u),c=a(17),d=r(c),f=a(16),m=r(f),h=a(4),g=r(h),p=a(181),v=function(t){function e(t){(0,s.default)(this,e);var a=(0,d.default)(this,(e.__proto__||(0,n.default)(e)).call(this,t));return a.state={menus:[{title:"2d幻灯-JS",url:"slider-2d-js"},{title:"3d幻灯-CSS",url:"slider-3d-css"},{title:"3d幻灯-JS",url:"slider-3d-js"},{title:"彩带",url:"rainbow"},{title:"粒子效果",url:"particles"},{title:"不重色卡牌",url:"cards"},{title:"说明及其他",url:"note"}]},a}return(0,m.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){var t=this.state.menus.map(function(t){return g.default.createElement("li",{className:"li",key:t.url},g.default.createElement(p.Link,{className:"title",to:"/"+t.url},t.title))});return g.default.createElement("header",{className:"app-header"},g.default.createElement("nav",{className:"nav"},g.default.createElement("ul",{className:"ul"},t)))}}]),e}(g.default.Component);e.default=v},379:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(13),n=r(i),l=a(14),s=r(l),u=a(15),o=r(u),c=a(17),d=r(c),f=a(16),m=r(f),h=a(4),g=r(h),p=a(189),v=r(p),y=function(t){function e(t){(0,s.default)(this,e);var a=(0,d.default)(this,(e.__proto__||(0,n.default)(e)).call(this,t));return a.state={isLoading:!0},a}return(0,m.default)(e,t),(0,o.default)(e,[{key:"componentDidMount",value:function(){function t(){e.refs.progressBar.style.width=++r/18*100+"%",18===r&&setTimeout(function(){e.setState({isLoading:!1})},900)}var e=this,r=0,i=new Image;i.src=a(195),i.onload=function(){(0,v.default)("body").css({"background-color":"#000","background-image":'url("'+i.src+'")'}),t()};var n=new Image;n.src=a(125),n.onload=t;for(var l=1;l<17;l++){var s=new Image;s.src="./static/img/near_1200x800/"+(l>9?l:"0"+l)+".jpg",s.onload=t}}},{key:"render",value:function(){return g.default.createElement("div",{className:"app-loading"+(this.state.isLoading?"":" fade-out")},g.default.createElement("div",{className:"inner"},g.default.createElement("div",{className:"progress-bar-wrapper"},g.default.createElement("div",{ref:"progressBar",className:"progress-bar"},g.default.createElement("i",{className:"fa fa-chrome fa-pulse fa-2x"})))))}}]),e}(g.default.Component);e.default=y},380:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(13),n=r(i),l=a(14),s=r(l),u=a(15),o=r(u),c=a(17),d=r(c),f=a(16),m=r(f),h=a(4),g=r(h),p=function(t){function e(t){(0,s.default)(this,e);var a=(0,d.default)(this,(e.__proto__||(0,n.default)(e)).call(this,t));return a.state={snowsNumber:100},a}return(0,m.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){var t=this.generateSnows().map(function(t){var e={animationDelay:100*-t+"ms",left:100*Math.random()+"%"};return g.default.createElement("div",{className:"snow",key:t,style:e})});return g.default.createElement("div",{className:"app-snows"},t)}},{key:"generateSnows",value:function(){for(var t=[],e=0;e<this.state.snowsNumber;e++)t.push(e);return t}}]),e}(g.default.Component);e.default=p},381:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(187),n=r(i),l=a(389),s=r(l),u=a(13),o=r(u),c=a(14),d=r(c),f=a(15),m=r(f),h=a(17),g=r(h),p=a(16),v=r(p),y=a(4),_=r(y),w=a(163),x=r(w),E=function(t){function e(t){(0,d.default)(this,e);var a=(0,g.default)(this,(e.__proto__||(0,o.default)(e)).call(this,t));return a.state={timer:null,numberOfItemsPerRow:8,curProvinceIndex:0,originalPositions:[],indexOfCurLastCardByEye:30,arrowDirections:[],curCardsArrByEye:[],allCities:{"北京":["北京"],"天津":["天津"],"上海":["上海"],"重庆":["重庆"],"河北":["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"],"山西":["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁","塑州"],"陕西":["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"],"山东":["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","荷泽","菏泽"],"河南":["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店","济源"],"辽宁":["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"],"吉林":["长春","吉林","四平","辽源","通化","白山","松原","白城","延边","延吉"],"黑龙江":["哈尔滨","齐齐哈尔","鸡西","鹤岗","双鸭山","大庆","伊春","佳木斯","七台河","牡丹江","黑河","绥化","大兴安岭","松花江","农垦"],"江苏":["南京","无锡","徐州","常州","苏州","南通","连云港","淮安","盐城","扬州","镇江","泰州","宿迁","昆山","张家港","海安","太仓","常熟","金坛"],"浙江":["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水","东阳","萧山","嘉善"],"安徽":["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","亳州","池州","宣城"],"江西":["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"],"福建":["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德","晋江"],"湖北":["武汉","黄石","十堰","宜昌","襄樊","鄂州","荆门","孝感","荆州","黄冈","咸宁","随州","恩施州","神农架","仙桃","沙市"],"湖南":["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西州","大庸","醴陵"],"四川":["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝州","甘孜州","凉山州","达县"],"贵州":["贵阳","六盘水","遵义","安顺","铜仁","黔西南州","毕节","黔东南州","黔南州"],"云南":["昆明","曲靖","玉溪","保山","昭通","丽江","思茅","临沧","楚雄州","红河州","文山州","西双版纳州","大理州","德宏州","怒江州","迪庆州","东川","普洱"],"广东":["广州","韶关","深圳","珠海","汕头","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"],"海南":["海口","三亚","琼州"],"甘肃":["兰州","嘉峪关","金昌","白银","天水","武威","张掖","平凉","酒泉","庆阳","定西","陇南","临夏州","甘南州"],"青海":["西宁","海东","海北州","黄南州","海南州","果洛州","玉树州","海西州"],"内蒙古":["呼和浩特","包头","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","兴安盟","锡林郭勒盟","阿拉善盟","乌海"],"新疆":["乌鲁木齐","克拉玛依","吐鲁番","哈密","昌吉州","博尔州","巴音郭楞州","阿克苏","克孜勒苏柯尔克孜州","喀什","和田","伊犁哈萨克州","塔城","阿勒泰","石河子","阿拉尔","图木舒克","五家渠"],"西藏":["拉萨","昌都","山南","日喀则","那曲","阿里","林芝"],"广西":["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"],"宁夏":["银川","石嘴山","吴忠","固原","中卫"],"港澳台":["台湾省","香港特别行政区","澳门特别行政区"]}},a.data={},a}return(0,v.default)(e,t),(0,m.default)(e,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillUnmount",value:function(){var t=this;t.state.timer&&clearInterval(t.state.timer)}},{key:"render",value:function(){var t=this,e=(0,s.default)(this.state.allCities);return _.default.createElement("div",{className:"cards-container"},_.default.createElement("ul",{className:"cards-wrapper",ref:"cardsWrapper"},e.map(function(e,a){return _.default.createElement("li",{onClick:t.toggleHighlight.bind(t,a),className:"card",key:a},_.default.createElement("div",{className:"inner"},_.default.createElement("header",{className:"header"},a+"."+e,_.default.createElement("i",{className:(0,x.default)("fa","fa-2x",(0,n.default)({},t.state.arrowDirections[a],!0))})),_.default.createElement("article",{className:"article"},_.default.createElement("ul",null,t.state.allCities[e].map(function(t,e){return _.default.createElement("li",{className:"city",key:e},t)})))))})))}},{key:"init",value:function(){var t=this;t.setLayout(),t.walkingAround()}},{key:"toggleHighlight",value:function(t){var e=this,a=e.state.curProvinceIndex,r=e.refs.cardsWrapper.querySelectorAll(".card"),i=r[a],n=r[t];n.classList.contains("active-province")?(n.classList.remove("active-province"),n.style.transform=e.state.originalPositions[t]):(i.classList.remove("active-province"),i.style.transform=e.state.originalPositions[a],n.classList.add("active-province"),n.style.transform="translate(-50%, -50%) rotateY(180deg)"),e.setState({curProvinceIndex:t})}},{key:"setLayout",value:function(){for(var t=this,e=t.refs.cardsWrapper.querySelectorAll(".card"),a=t.state.numberOfItemsPerRow,r=Math.ceil((0,s.default)(t.state.allCities).length/a),i=100*(1/a).toFixed(5)+"%",n=100*(1/r).toFixed(5)+"%",l=[],u=[],o=[],c=0,d=e.length;c<d;c++){e[c].cssText="width:"+i+"; height:"+n,e[c].classList.contains("active-province")&&e[c].classList.remove("active-province");var f=100*(c%8-4)+"%",m=100*(Math.floor(c/8)-2)+"%",h="translate("+f+","+m+")";e[c].style.transform=h,o.push({transform:h});var g=Math.floor(c/a),p=g%2===0?Array.prototype.unshift:Array.prototype.push;p.call(u,c),8===u.length&&(l=l.concat(u),u=[])}t.setState({curCardsArrByEye:l},function(){t.setState({originalPositions:o,indexOfCurLastCardByEye:t.state.curCardsArrByEye[t.state.curCardsArrByEye.length-1]})})}},{key:"walkAround",value:function(){var t=this,e=[],a=t.state.originalPositions.length,r=t.state.curCardsArrByEye.indexOf(t.state.indexOfCurLastCardByEye);t.setState({indexOfCurLastCardByEye:t.state.curCardsArrByEye[r-1]});for(var i=0;i<a;i++){var n=Math.floor(i/t.state.numberOfItemsPerRow);i===a-1?e[i]=t.state.originalPositions[t.state.numberOfItemsPerRow-1]:n%2===0&&i%t.state.numberOfItemsPerRow===0||n%2===1&&i%t.state.numberOfItemsPerRow===t.state.numberOfItemsPerRow-1?e[i]=t.state.originalPositions[i+8]:e[i]=t.state.originalPositions[n%2===0?i-1:i+1]}t.setState({originalPositions:e});for(var l=t.refs.cardsWrapper.querySelectorAll(".card"),s=function(e,a){l[a].classList.contains("active-province")?l[a].style.transform="translate(-50%, -50%) rotateY(180deg)":l[a].style.transform=t.state.originalPositions[a].transform,a===t.state.curCardsArrByEye[r]&&(l[a].classList.contains("active-province")||(l[a].classList.add("z-index-low"),l[a].style.display="none",setTimeout(function(){l[a].classList.remove("z-index-low"),l[a].style.display="block"},300)))},u=0,o=l.length;u<o;u++)s(o,u);t.setArrowDirections(),t.colorElements(".card header",.6)}},{key:"walkingAround",value:function(){var t=this;t.setState({timer:setInterval(t.walkAround.bind(t),1e3)}),setTimeout(function(){t.state.timer&&clearInterval(t.state.timer)},64e5)}},{key:"setArrowDirections",value:function(){for(var t=this,e=[],a=[],r=t.state.originalPositions.length,i="fa-chevron-left",n="fa-arrow-right",l="fa-arrow-circle-o-down",s=0;s<r;s++){var u=Math.floor(s/t.state.numberOfItemsPerRow);0===s?a.push(t.state.curCardsArrByEye[r-1]):a.push(t.state.curCardsArrByEye[s-1]),0===s?e[t.state.curCardsArrByEye[r-1]]=i:s===r-1||u%2===1&&s%t.state.numberOfItemsPerRow!==t.state.numberOfItemsPerRow-1?e[t.state.curCardsArrByEye[s-1]]=n:s%t.state.numberOfItemsPerRow===t.state.numberOfItemsPerRow-1?e[t.state.curCardsArrByEye[s-1]]=l:e[t.state.curCardsArrByEye[s-1]]=i}t.setState({curCardsArrByEye:a,arrowDirections:e})}},{key:"rgba2Color",value:function(t,e,a,r){r=r||1;var i=Math.round;return"rgba("+i(t)+","+i(e)+","+i(a)+","+r+")"}},{key:"colorElements",value:function(t,e){var a=this,r=a.refs.cardsWrapper.querySelectorAll(t),i=r.length,n=200+55*Math.random(),l=255-n,s=2*Math.PI/i;e=e||0;for(var u=0;u<i;u++){var o=Math.sin(s*u+2+e)*l+n,c=Math.sin(s*u+e)*l+n,d=Math.sin(s*u+4+e)*l+n;r[u].style.backgroundColor=a.rgba2Color(o,c,d,Math.random())}}}]),e}(_.default.Component);e.default=E},382:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(13),n=r(i),l=a(14),s=r(l),u=a(15),o=r(u),c=a(17),d=r(c),f=a(16),m=r(f),h=a(4),g=r(h),p=a(130),v=r(p),y=function(t){function e(t){(0,s.default)(this,e);var a=(0,d.default)(this,(e.__proto__||(0,n.default)(e)).call(this,t));return a.state={note:{title:"Note",details:["这是一些简单的小DEMOS：","1、“2D幻灯-JS”是一个很常规的JS幻灯片；","2、“3D幻灯-CSS”在CSS3 animation的基础上，使用CSS3 transform 3D变换实现的幻灯片；","3、“3D幻灯-JS”通过JS控制六面体的3D变换（根据鼠标位置相应地转动）；","4、“彩带”代码借鉴自VueJS作者的博客","5、“粒子效果”","6、该SPA所有图片均来自网络，版权归原作者所有。","7、为获得较好的视觉体验，请使用新版Chrome浏览器查看该SPA。"]}},a}return(0,m.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){var t=this.state.note.details.map(function(t){return g.default.createElement("li",{className:"li",key:v.default.v4()},t)});return g.default.createElement("div",{className:"note"},g.default.createElement("div",{className:"inner"},g.default.createElement("section",{className:"section"},g.default.createElement("h3",{className:"title"},this.state.note.title),g.default.createElement("ul",{className:"ul"},t))))}}]),e}(g.default.Component);e.default=y},383:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(13),n=r(i),l=a(17),s=r(l),u=a(16),o=r(u),c=a(14),d=r(c),f=a(15),m=r(f),h=a(4),g=r(h),p=a(185),v=function(){function t(e,a,r){(0,d.default)(this,t),this.x=e,this.y=a,this.rgba=r,this.vectorX=4*(Math.random()-.5),this.vectorY=-5+2*(Math.random()-.5),this.gravity=.1}return(0,m.default)(t,[{key:"getX",value:function(){return this.x+=this.vectorX,this.x}},{key:"getY",value:function(){return this.gravity-=.01,this.vectorY+=this.gravity,this.y+=this.vectorY,this.gravity<0&&(this.gravity=.1),this.y}},{key:"getRadius",value:function(){return 2}}]),t}(),y=function(t){function e(t){(0,d.default)(this,e);var a=(0,s.default)(this,(e.__proto__||(0,n.default)(e)).call(this,t));return a.state={},a.data={canvas:null,ctx:null,alpha:.6,width:window.innerWidth,height:window.innerHeight,dpr:window.devicePixelRatio||1,timer:null,animationId:null,particles:[]},a}return(0,o.default)(e,t),(0,m.default)(e,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillUnmount",value:function(){this.data.timer&&clearInterval(this.data.timer),this.data.animationId&&window.cancelAnimationFrame(this.data.animationId)}},{key:"render",value:function(){return g.default.createElement("div",{className:"particles"},g.default.createElement("canvas",{className:"canvas",ref:"particlesCanvas",width:"500",height:"300"},"Your browser does not support HTML5 Canvas API"))}},{key:"init",value:function(){if(document.createElement("canvas").getContext){var t=this.refs.particlesCanvas;t.width=this.data.width*this.data.dpr,t.height=this.data.height*this.data.dpr;var e=t.getContext("2d");e.scale(this.data.dpr,this.data.dpr),e.globalAlpha=this.data.alpha,(0,p.merge)(this.data,{canvas:t,ctx:e}),this.downloadImage()}}},{key:"downloadImage",value:function(){var t=this,e=new Image;e.src=a(125),e.onload=function(){var a=Math.max(t.data.width,t.data.height),r=.3*a,i=335*r/370,n=(t.data.width-r)/2,l=(t.data.height-i)/2,s=t.data.ctx;s.drawImage(e,0,0,e.width,e.height,n,l,r,i);var u=s.getImageData(0,0,t.data.width,t.data.height);setTimeout(t.collectParticles.bind(t,u),300),(0,p.merge)(t.data,{timer:setInterval(t.collectParticles.bind(t,u),6e3)})}}},{key:"collectParticles",value:function(t){for(var e=this,a=[],r=t.data,i=0,n=0;n<t.width;n+=6)for(var l=0;l<t.height;l+=6)if(i=4*(l*t.width+n),r[i+3]>50){var s=r[i],u=r[i+1],o=r[i+2],c=r[i+3],d=n,f=l,m="rgba("+s+", "+u+", "+o+", "+c+")";a.push(new v(d/this.data.dpr,f/this.data.dpr,m))}(0,p.merge)(this.data,{particles:a}),void function t(){this.draw(),(0,p.merge)(this.data,{animationId:window.requestAnimationFrame(t.bind(this))})}.call(this),setTimeout(function(){window.cancelAnimationFrame(e.data.animationId)},6e3)}},{key:"draw",value:function(){var t=this.data.particles,e=this.data.ctx;e.clearRect(0,0,this.data.width,this.data.height);for(var a=0,r=t.length;a<r;a++){var i=t[a];e.save(),e.beginPath(),e.arc(i.getX(),i.getY(),i.getRadius(),0,2*Math.PI),e.fillStyle=i.rgba,e.fill(),e.restore()}}}]),e}(g.default.Component);e.default=y},384:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(13),n=r(i),l=a(14),s=r(l),u=a(15),o=r(u),c=a(17),d=r(c),f=a(16),m=r(f),h=a(4),g=r(h),p=a(185),v=function(t){function e(t){(0,s.default)(this,e);var a=(0,d.default)(this,(e.__proto__||(0,n.default)(e)).call(this,t));return a.state={},a.data={canvas:null,ctx:null,timer:null,times:0,limit:500,alpha:.6,size:80,width:window.innerWidth,height:window.innerHeight,dpr:window.devicePixelRatio||1,r:0,points:null},a}return(0,m.default)(e,t),(0,o.default)(e,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillUnmount",value:function(){this.data.timer&&clearTimeout(this.data.timer)}},{key:"render",value:function(){return g.default.createElement("div",{className:"rainbow"},g.default.createElement("canvas",{className:"canvas",ref:"rainbowCanvas",width:"500",height:"300"},"Your browser does not support HTML5 Canvas API"))}},{key:"init",value:function(){if(document.createElement("canvas").getContext){var t=this.refs.rainbowCanvas;t.width=this.data.width*this.data.dpr,t.height=this.data.height*this.data.dpr;var e=t.getContext("2d");e.scale(this.data.dpr,this.data.dpr),e.globalAlpha=this.data.alpha,(0,p.merge)(this.data,{canvas:t,ctx:e}),this.renderLoop()}}},{key:"renderLoop",value:function(){this.redraw(),(0,p.merge)(this.data,{times:this.data.times+1}),this.data.times<this.data.limit?(0,p.merge)(this.data,{timer:setTimeout(this.renderLoop.bind(this),1e3)}):console.log("Finished "+this.data.limit+" times.")}},{key:"redraw",value:function(){for(this.data.ctx.clearRect(0,0,this.data.width,this.data.height),(0,p.merge)(this.data,{points:[{x:0,y:.7*this.data.height+this.data.size},{x:0,y:.7*this.data.height-this.data.size}]});this.data.points[1].x<this.data.width+this.data.size;)this.draw(this.data.points[0],this.data.points[1])}},{key:"draw",value:function(t,e){var a=Math.cos,r=Math.PI,i=Math.random,n=this.data.ctx;n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(e.x,e.y);var l={x:e.x+(2*i()-.25)*this.data.size,y:this.line(e.y)};n.lineTo(l.x,l.y),n.closePath();var s=this.data.r-2*r/-50;n.fillStyle="#"+(127*a(s)+128<<16|127*a(s+2*r/3)+128<<8|127*a(s+2*r/3*2)+128).toString(16),n.fill(),(0,p.merge)(this.data,{r:s,points:[{x:this.data.points[1].x,y:this.data.points[1].y},{x:l.x,y:l.y}]})}},{key:"line",value:function(t){var e=t+(2*Math.random()-1.1)*this.data.size;return e>this.data.height||e<0?this.line(t):e}}]),e}(g.default.Component);e.default=v},385:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(13),n=r(i),l=a(14),s=r(l),u=a(15),o=r(u),c=a(17),d=r(c),f=a(16),m=r(f),h=a(4),g=r(h),p=a(163),v=r(p),y=function(t){function e(t){(0,s.default)(this,e);var a=(0,d.default)(this,(e.__proto__||(0,n.default)(e)).call(this,t));return a.showPic=function(t){console.log(t),a.setState({curIndex:t})},a.state={timer:null,curIndex:0,images16:[{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""},{url:"./static/img/near_1200x800/09.jpg",title:""},{url:"./static/img/near_1200x800/10.jpg",title:""},{url:"./static/img/near_1200x800/11.jpg",title:""},{url:"./static/img/near_1200x800/12.jpg",title:""},{url:"./static/img/near_1200x800/13.jpg",title:""},{url:"./static/img/near_1200x800/14.jpg",title:""},{url:"./static/img/near_1200x800/15.jpg",title:""},{url:"./static/img/near_1200x800/16.jpg",title:""}]},a}return(0,m.default)(e,t),(0,o.default)(e,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"componentWillUnmount",value:function(){this.stopInterval()}},{key:"render",value:function(){var t=this,e=this.state.images16.map(function(e,a){return g.default.createElement("li",{className:"photo",key:a,style:{display:t.isCurIndexPicture(e.url)?"block":"none"}},g.default.createElement("img",{className:"photo-img",src:e.url,alt:e.title}))}),a=this.state.images16.map(function(e,a){return g.default.createElement("div",{key:a,className:(0,v.default)({point:!0,scale:t.isCurIndexPicture(e.url)}),style:{backgroundImage:"url("+e.url+")"},onMouseEnter:function(){return t.showPic(a)}})});return g.default.createElement("div",{className:"slider-2d-js"},g.default.createElement("section",{onMouseEnter:this.stopInterval.bind(this),onMouseLeave:this.startInterval.bind(this),className:"gallery"},g.default.createElement("ul",{className:"photos"},e),g.default.createElement("aside",{onClick:this.showPrevPic.bind(this),className:"arr arr-left"},g.default.createElement("i",{className:"fa fa-chevron-left"})),g.default.createElement("aside",{onClick:this.showNextPic.bind(this),className:"arr arr-right"},g.default.createElement("i",{className:"fa fa-chevron-right"})),g.default.createElement("footer",{className:"points"},a)))}},{key:"isCurIndexPicture",value:function(t){var e=t.match(/\/(\d*)\.jpg/)[0].replace(/\/(\d*)\.jpg/,"$1");return parseInt(e)===parseInt(this.state.curIndex)+1}},{key:"startInterval",value:function(){var t=this;this.setState({timer:setInterval(function(){t.showNextPic()},2e3)})}},{key:"stopInterval",value:function(){this.state.timer&&clearInterval(this.state.timer)}},{key:"showPrevPic",value:function(){0===this.state.curIndex?this.setState({curIndex:this.state.images16.length-1}):this.setState({curIndex:this.state.curIndex-1})}},{key:"showNextPic",value:function(){this.state.curIndex===this.state.images16.length-1?this.setState({curIndex:0}):this.setState({curIndex:this.state.curIndex+1})}}]),e}(g.default.Component);e.default=y},386:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(13),n=r(i),l=a(14),s=r(l),u=a(15),o=r(u),c=a(17),d=r(c),f=a(16),m=r(f),h=a(4),g=r(h),p=a(130),v=r(p),y=function(t){function e(t){(0,s.default)(this,e);var a=(0,d.default)(this,(e.__proto__||(0,n.default)(e)).call(this,t));return a.state={images24:[{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""},{url:"./static/img/near_1200x800/09.jpg",title:""},{url:"./static/img/near_1200x800/10.jpg",title:""},{url:"./static/img/near_1200x800/11.jpg",title:""},{url:"./static/img/near_1200x800/12.jpg",title:""},{url:"./static/img/near_1200x800/13.jpg",title:""},{url:"./static/img/near_1200x800/14.jpg",title:""},{url:"./static/img/near_1200x800/15.jpg",title:""},{url:"./static/img/near_1200x800/16.jpg",title:""},{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""}]},a}return(0,m.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){for(var t=[],e=0;e<6;e++)t.push([this.state.images24[4*e],this.state.images24[4*e+1],this.state.images24[4*e+2],this.state.images24[4*e+3]]);var a=t.map(function(t){return g.default.createElement("li",{className:"stage-cover",key:v.default.v4()},g.default.createElement("ul",{className:"container-cover"},t.map(function(t){return g.default.createElement("li",{className:"stage-pic",key:v.default.v4()},g.default.createElement("div",{className:"container-pic"},g.default.createElement("img",{src:t.url,alt:t.title,className:"img"})))})))});return g.default.createElement("div",{className:"slider-3d-css"},"// stage for 六面体整体",g.default.createElement("div",{className:"stage-whole"},g.default.createElement("ul",{className:"container-whole"},a)))}}]),e}(g.default.Component);e.default=y},387:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(187),n=r(i),l=a(13),s=r(l),u=a(14),o=r(u),c=a(15),d=r(c),f=a(17),m=r(f),h=a(16),g=r(h),p=a(4),v=r(p),y=a(189),_=r(y),w=function(t){function e(t){(0,o.default)(this,e);var a=(0,m.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t));return a.getMousePosition=function(t){return{x:t.pageX||t.clientX+document.body.scrollLeft,y:t.pageY||t.clientY+document.body.scrollTop}},a.transform=function(t){(0,_.default)(".container-whole").css({transform:t})},a.startTransform=function(t,e){e=parseInt(e);var r=(0,_.default)(".container-whole").get(0).style.webkitTransform||"rotateX(0deg) rotateY(0deg) rotateZ(0deg)",i=parseInt(r.replace(/^rotateX\((-?\d*)deg\).*$/,"$1")),n=parseInt(r.replace(/^.*rotateY\((-?\d*)deg\).*$/,"$1")),l=parseInt(r.replace(/^.*rotateZ\((-?\d*)deg\).*$/,"$1"));switch(a.setState({rotateX:i,rotateY:n,rotateZ:l}),t){case"up":r="rotateX("+(i+e)+"deg) rotateY("+n+"deg) rotateZ("+l+"deg)";break;case"down":r="rotateX("+(i-e)+"deg) rotateY("+n+"deg) rotateZ("+l+"deg)";break;case"right":r="rotateX("+i+"deg) rotateY("+(n+e)+"deg) rotateZ("+l+"deg)";break;case"left":r="rotateX("+i+"deg) rotateY("+(n-e)+"deg) rotateZ("+l+"deg)";break;case"scroll":default:r="rotateX("+i+"deg) rotateY("+n+"deg) rotateZ("+(l+e)+"deg)"}a.transform(r)},a.cool=function(t,e,r){function i(t){return t=parseInt(t),{yUp:r/e*t-r,yDown:-(r/e)*t}}var n=(0,_.default)(t.target||t.srcElement),l=a.getMousePosition(t),s=l.x,u=0-l.y,o=n.offset().left,c=0-n.offset().top;s-=o,u-=c;var d=i(s).yUp,f=i(s).yDown,m=parseInt(Math.sqrt(Math.pow(s-.5*e,2)+Math.pow(u+.5*r,2))),h=1;m<80?a.startTransform("scroll",h):u>d?u>f?a.startTransform("up",h):a.startTransform("left",h):u>f?a.startTransform("right",h):a.startTransform("down",h)},a.state={timer:null,rotateX:0,rotateY:0,rotateZ:0,images24:[{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""},{url:"./static/img/near_1200x800/09.jpg",title:""},{url:"./static/img/near_1200x800/10.jpg",title:""},{url:"./static/img/near_1200x800/11.jpg",title:""},{url:"./static/img/near_1200x800/12.jpg",title:""},{url:"./static/img/near_1200x800/13.jpg",title:""},{url:"./static/img/near_1200x800/14.jpg",title:""},{url:"./static/img/near_1200x800/15.jpg",title:""},{url:"./static/img/near_1200x800/16.jpg",title:""},{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""}]},a}return(0,g.default)(e,t),(0,d.default)(e,[{key:"componentWillUnmount",value:function(){this.stopInterval()}},{key:"render",value:function(){for(var t=this,e=[],a=0;a<6;a++)e.push([this.state.images24[4*a],this.state.images24[4*a+1],this.state.images24[4*a+2],this.state.images24[4*a+3]]);var r=e.map(function(e,a){return v.default.createElement("li",{className:"stage-cover",key:a},v.default.createElement("ul",{onMouseMove:t.startInterval.bind(t),onMouseLeave:t.stopInterval.bind(t),className:"container-cover"},e.map(function(t,e){return v.default.createElement("li",{className:"stage-pic",key:e},v.default.createElement("div",{className:"container-pic"},v.default.createElement("img",{src:t.url,alt:t.title,className:"img"})))})))});return v.default.createElement("div",{className:"slider-3d-js"},v.default.createElement("div",{className:"slider"},v.default.createElement("div",{className:"stage-whole"},v.default.createElement("ul",{className:"container-whole"},r))),v.default.createElement("aside",{className:"controls"},v.default.createElement("ul",{className:"ul"},v.default.createElement("li",{className:"li"},v.default.createElement("label",{htmlFor:"rotateX",className:"label"},"RotateX"),v.default.createElement("input",{onChange:this.rotate.bind(this,"rotateX"),type:"number",id:"rotateX",className:"input",value:this.state.rotateX})),v.default.createElement("li",{className:"li"},v.default.createElement("label",{htmlFor:"rotateY",className:"label"},"RotateY"),v.default.createElement("input",{onChange:this.rotate.bind(this,"rotateY"),type:"number",id:"rotateY",className:"input",value:this.state.rotateY})),v.default.createElement("li",{className:"li"},v.default.createElement("label",{htmlFor:"rotateZ",className:"label"},"RotateZ"),v.default.createElement("input",{onChange:this.rotate.bind(this,"rotateZ"),type:"number",id:"rotateZ",className:"input",value:this.state.rotateZ})))))}},{key:"rotate",value:function(t,e){var a=this;this.setState((0,n.default)({},t,(e.target||e.srcElement).value),function(){(0,_.default)(".container-whole").css({transform:"rotateX("+a.state.rotateX+"deg) rotateY("+a.state.rotateY+"deg) rotateZ("+a.state.rotateZ+"deg)"})})}},{key:"startInterval",value:function(t){t.persist();var e=this,a=(0,_.default)(t.target).width(),r=(0,_.default)(t.target).height();setTimeout(function(){e.cool(t,a,r)},0)}},{key:"stopInterval",value:function(){this.state.timer}}]),e}(v.default.Component);e.default=w},393:function(t,e){},394:function(t,e){}});