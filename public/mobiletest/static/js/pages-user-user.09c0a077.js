(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"199c":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("7efc").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("u-navbar",t._g(t._b({staticClass:"navbar",attrs:{"back-icon-size":36,"back-icon-name":t.backIcon,"back-icon-color":t.backColor,"back-text":"",title:t.title,"title-color":t.titleColor,"border-bottom":t.borderBottom,"title-bold":!0,"custom-back":t.back,backgroundColor:!0,background:t.backgroundObj,isBack:t.isBack,titleWidth:"540"}},"u-navbar",t.$attrs,!1),t.$listeners),[t._t("center"),t._t("right")],2)},i=[]},"23a2":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={navbar:n("b50e").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("navbar",{attrs:{title:"User agreement",background:"#FED104",titleColor:"#0F0F0E",backColor:"#0F0F0E"}}),n("v-uni-view",{domProps:{innerHTML:t._s(t.protocol)}})],1)},i=[]},4201:function(t,e,n){"use strict";n.r(e);var a=n("7d70"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"45d7":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 主题配置 */.u-navbar[data-v-6fefbe5a]{width:100%}.u-navbar-fixed[data-v-6fefbe5a]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-6fefbe5a]{width:100%}.u-navbar-inner[data-v-6fefbe5a]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-6fefbe5a]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-6fefbe5a]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-6fefbe5a]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-6fefbe5a]{flex:1}.u-title[data-v-6fefbe5a]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-6fefbe5a]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-6fefbe5a]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=e},"4bc1":function(t,e,n){"use strict";n.r(e);var a=n("e743"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"4f45":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uIcon:n("2c2b").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[n("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),n("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?n("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?n("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?n("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[n("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),n("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),n("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?n("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},i=[]},"76bd":function(t,e,n){"use strict";var a=n("b940"),r=n.n(a);r.a},"781a":function(t,e,n){"use strict";n.r(e);var a=n("23a2"),r=n("4201");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var u,o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"73016b73",null,!1,a["a"],u);e["default"]=c.exports},"7d70":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("1da1")),i=n("0fc5"),u={data:function(){return{protocol:""}},methods:{load:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.userprotocol)();case 2:n=e.sent,console.log(n),t.protocol=n;case 5:case"end":return e.stop()}}),e)})))()}},onLoad:function(){this.load()}};e.default=u},"7efc":function(t,e,n){"use strict";n.r(e);var a=n("4f45"),r=n("8661");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("76bd");var u,o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"6fefbe5a",null,!1,a["a"],u);e["default"]=c.exports},8661:function(t,e,n){"use strict";n.r(e);var a=n("9139"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},9139:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync(),r={},i={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:r,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=i},b50e:function(t,e,n){"use strict";n.r(e);var a=n("199c"),r=n("4bc1");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var u,o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"1f02e089",null,!1,a["a"],u);e["default"]=c.exports},b940:function(t,e,n){var a=n("45d7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("25712023",a,!0,{sourceMap:!1,shadowMode:!1})},e743:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={inheritAttrs:!1,props:{title:{type:String,default:""},titleColor:{type:String,default:"#17273a"},titleSize:{type:[String,Number],default:32},backIcon:{type:String,default:"arrow-left"},backColor:{type:String,default:"#919191"},isBack:{type:Boolean,default:!0},background:{type:String,default:"transparent"},isComfirm:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!1}},computed:{backgroundObj:function(){return"transparent"==this.background?{background:"rgba(0,0,0,0)"}:{background:this.background}}},data:function(){return{}},methods:{back:function(){if(this.isComfirm)this.$emit("beforeBack");else{var t=getCurrentPages();1==t.length?uni.navigateTo({url:"/pages/home/home"}):uni.navigateBack({})}}}};e.default=a}}]);