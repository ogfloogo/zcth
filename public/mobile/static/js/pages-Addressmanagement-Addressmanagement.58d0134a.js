(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Addressmanagement-Addressmanagement"],{"0602":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={navbar:n("b50e").default,mnodata:n("5344").default,overbtn:n("1c27").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("navbar",{attrs:{title:"Address management",background:"#FED104",titleColor:"#0F0F0E",backColor:"#0F0F0E"}}),a("v-uni-view",[t.list.length?a("v-uni-view",t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"box1"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"phone"},[t._v(t._s(e.mobile))])],1),a("v-uni-view",{staticClass:"mid"},[a("v-uni-image",{staticStyle:{width:"41rpx",height:"49rpx"},attrs:{src:n("a115"),mode:""}}),a("v-uni-view",{staticClass:"mid-address"},[t._v(t._s(e.province)+", "+t._s(e.city)+","+t._s(e.county)+","+t._s(e.village)+","+t._s(e.address))])],1),a("v-uni-view",{staticClass:"bottom"},[e.is_default?a("v-uni-view",{staticStyle:{width:"32rpx",height:"32rpx","margin-right":"20rpx"}},[a("v-uni-image",{staticStyle:{width:"32rpx",height:"32rpx"},attrs:{src:n("13ff"),mode:""}})],1):a("v-uni-view",{staticStyle:{width:"32rpx",height:"32rpx","margin-right":"20rpx",border:"2rpx solid #C8C8C8",background:"#ECECEC"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setDefault(e.id)}}}),a("v-uni-view",{staticClass:"default"},[t._v(t._s(t.$t("management.default")))]),a("v-uni-image",{staticStyle:{width:"29rpx",height:"29rpx","margin-left":"122rpx"},attrs:{src:n("cb80"),mode:""}}),a("v-uni-view",{staticClass:"edit",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.edit(e)}}},[t._v(t._s(t.$t("management.edit")))]),a("v-uni-image",{staticStyle:{width:"29rpx",height:"29rpx","margin-left":"60rpx"},attrs:{src:n("a1c4"),mode:""},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.delete1(i,e.id)}}}),a("v-uni-view",{staticClass:"edit"},[t._v(t._s(t.$t("management.delete")))])],1)],1)})),1):a("mnodata")],1),a("v-uni-view",{staticStyle:{width:"670rpx",height:"90rpx",position:"fixed",bottom:"30rpx",left:"40rpx"}},[a("overbtn",{attrs:{btnText:t.$t("management.add"),fontSize:30,propStyle:{width:"116rpx",height:"60rpx",color:"#0F0F0E",background:"#FED104",border:"none"},btnType:"overline"},on:{btnAction:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/Addaddress/Addaddress")}}})],1)],1)},r=[]},"13ff":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAhtJREFUWEftl79LW1EUx7/fCxrtUMXiUHQoUapSLR2qTnVz0OpWceggUjq42NrFoas4thBQG3BQCv4FEkSchC4qGdSlINRBEcFNrA0m95SbH9TEXN97yXvJ0gwJ5J13v5/zveee9w6R/bRHJKRDegrgW4g8I1Gfu+bT76WAPwFZUwm1eDTNhFmX5qt1SVpqlV4n8MInsXuXEeBAKTV89J4nzGQuO4Q8r4R4TkPAfZVgH8PR1EcCXysp/g9CzTD8LblL8mVVAET2jAO/Cd8LzlU+AlyzLZoSV9EBBf0HCNyBh7XAwiDR+5hYjAsi8fwdDxTAiK++Jnqa0/0OSQ10Luu8agoMoFDcqP44EUzEKuBAMfH4uWAyJri6yT9OvjvgRTz9MPKzD3gVtwI01wNDYcLYdnjhrgOVIm4FiL0hnjYRNxr4sKWxeXw/RKniVoD9SYUHNRlRJ4hyxK0AYx3E/ADBzPG1QjSGgJVhojt7zk2srdptHlqLcLyTmHtlhzDi30eIrkdZyhLEHU+BDWLnzB9xRwATUAzi9FLwpKG8zHNb4qoPFELc3k+ve15YC64Aijlh/ts7E7zbuNte3XWOTJRrABM82g7M9hNNdcTGL8HnbcF10ovc3VhPAOVJFb+7+i+l4ajeJaSKr+VLqRkqfAnCXqc1ReNTdjQzLqDH6QY/r6fnw4Tqrf5wmssqbzyHdBOo8znjPwAPC8fzvwEmOrftsgnwAAAAAElFTkSuQmCC"},"2ef3":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r=n("732bb"),s={data:function(){return{list:[]}},methods:{delete1:function(t,e){var n=this;return(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading(),t.next=3,(0,r.deladdress)({id:e});case 3:n.load(),uni.hideLoading();case 5:case"end":return t.stop()}}),t)})))()},checkboxChange:function(t){if(t.value)for(var e=0;e<this.list.length;e++)t.name!=this.list[e].name&&(this.list[e].checked=!1)},setDefault:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading({}),n.next=3,(0,r.setdefault)({id:t,is_default:1});case 3:uni.hideLoading(),e.load();case 5:case"end":return n.stop()}}),n)})))()},navTo:function(t){uni.navigateTo({url:t})},edit:function(t){uni.navigateTo({url:"../editaddress/editaddress?addinfo="+encodeURIComponent(JSON.stringify(t))})},load:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getaddress)();case 2:for(n=e.sent,console.log(n),a=0;a<n.length;a++)n[a].checked=!1;t.list=n,console.log(t.list);case 7:case"end":return e.stop()}}),e)})))()}},onShow:function(){this.load()}};e.default=s},"420c":function(t,e,n){"use strict";n.r(e);var a=n("2ef3"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"732bb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getaddress=i,e.address=r,e.editaddress=s,e.deladdress=o,e.setdefault=d;var a=n("b729");function i(t){return a.http.post("/personalcenter/getaddress",t)}function r(t){return a.http.post("/personalcenter/address",t)}function s(t){return a.http.post("/personalcenter/editaddress",t)}function o(t){return a.http.post("/personalcenter/deladdress",t)}function d(t){return a.http.post("/personalcenter/setdefault",t)}},"8ecf":function(t,e,n){var a=n("acc8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5e361565",a,!0,{sourceMap:!1,shadowMode:!1})},a115:function(t,e,n){t.exports=n.p+"static/img/address.d3a50e83.png"},a1c4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8CAYAAADWibxkAAAAAXNSR0IArs4c6QAABBxJREFUaEPtW11oXFUQ/s5xFyrxr9gIQsWKLbRLQSlS8HHtS0EQAvfMzQZB8qD4B/poFWSRUn1UEFv0Ia0PiTl3Y0DwwQeJTz4I/kGJBa0/UAVNpTY2WNjsHZl1W25udrPnZu+Ga3PmYVk4M3NnvntmzpzZWYUhkbX2EQCnAdyzyUf8zszPhWE4t0l5JzHlxJWRyVp7O4AfAOzKKJpm/wfAPiL6dUA9PcWHBcBxAK/kYbRS6j1jzFN56OqmI3cA5ubm7m61WucB3JyT0S2t9YEgCL7PSd8aNbkDEEXRu8z8ZMpYAeSsowP7AFSSvEopa4wJHeUzseUKQKPR2B/HsTh6U8qKh4joSxfLrLV7AXwHoJTk11ofCoLgaxcdWXhyBcBa+yGAsaQBzPxBGIa1LEZFUXSSmZ9OyXxCREez6HHhzQ0Aa+3DAD5PPbQZx/GB8fFxCQFn6uSRHwHsSIVC1RjzmbMiB8Y2AJ1tV2FmnZbRWt8GYC8zl/voexzA7hTPBQBfONjRjeUQgD2phd8AvL+RPqVUU47gOI6X03xKqRjAIhHJEd0mFUXRs8z8tnzfpKH/NzFWSj1vjHmnDYC19jIAecvbiZaJSIq1NgBSba2JtW2AxFUiatcpAsDrAF7aBk4nXXyDiI61AZCPKIqOMPNBpdSaPMDMrwLYmZCUcFnoAZaEkdT+w8olDOAigHXJrWNPFUB7W3foklLqtaStzCzxf9YY8+n1JLjRm7fW/gzg3gTPt0T0YBF3i7X2GwAPJGz7hYjSp8g60zd8Wx4AvwN8CPgc4JOgPwX8MbjpOkDqjkaj8Vgcx7vjOP64VqtJTulJMzMze7TWj2qtLwRB8JFSSoofJypkHZBqbPyttT4cBMG5bh51uklydb61XaIqdcoY84yT9/9d6YtVCE1NTe0YGRm5kmqPXa/B0451uZO0VlZWbpmcnLzqAkLhAJifn7+j2WxeShn/FhG92M0ha+2bAF5IrpXL5Z1jY2N/eQAcEPA7oGg5wIeAzwE+CfpTwB+Dvg7whZCvBH0pvBYBfxfwlyF/G/TXYd8P8A2RLgjccB2hhYWF0tLS0p/J6ROl1MvGGJlHWEdRFB1j5hOJheXR0dE7q9XqqkNDqHhNUTF6dnb2CRl1BSADVl+Vy+UjvXp8nQaK/G4vw1FNGbYMw/CMi/PCU7iW2DXDp6end5VKpbsWFxfP1et1mdLqSfV6XVcqlf2rq6t/TExMyDCEMxUWAGcPBmT0ABStKTrgC80s7neA3wEF+20w8x4eUMCHgA+BrQkBmdLsNSk64CYeWFwmRZND30MZlBzYyi1UkAsA8seC+7fQ6DwfdZ6I5P9HG1K/UdkIQNBPSUHXG0Rk+tnWD4D7AMwAODzEKfB+NmZdl8EqmTWqEdFP/YT/BWpdrWpz1RuGAAAAAElFTkSuQmCC"},acc8:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 主题配置 */uni-page-body[data-v-6f7a88a8]{background-color:#fff}.box1[data-v-6f7a88a8]{padding:%?40?%}.top[data-v-6f7a88a8]{display:flex;font-family:Rubik;justify-content:space-between}.top .name[data-v-6f7a88a8]{font-size:%?34?%;font-weight:500;color:#2b3039}.top .phone[data-v-6f7a88a8]{font-size:%?30?%;font-weight:400;color:#65676b}.mid[data-v-6f7a88a8]{display:flex;justify-content:space-between;margin-top:%?39?%;margin-bottom:%?42?%}.mid .mid-address[data-v-6f7a88a8]{font-size:%?30?%;font-family:Rubik;font-weight:400;color:#0f0f0e;margin-left:%?20?%;width:%?609?%;height:%?63?%}.bottom[data-v-6f7a88a8]{display:flex;align-items:center;height:%?34?%}.bottom .default[data-v-6f7a88a8]{margin-left:%?-6?%}.bottom .edit[data-v-6f7a88a8]{font-size:%?28?%;font-family:Rubik;font-weight:400;color:#aaa;margin-left:%?13?%}body.?%PAGE?%[data-v-6f7a88a8]{background-color:#fff}',""]),t.exports=e},cb80:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAAXNSR0IArs4c6QAAA2JJREFUaEPt2z+I1TAcB/Dvr6KLiIuDq5uL4uifQT3FRdza9E5BdBPEQXBQBxdBBQcXFSdBQXj93Zs8wUk9QT2dHERwcVQHFeRO4TihkTxaePTeuyZtkubwuhzcS9Lfp0mTNE0JxdHr9XZHUXQJwEEAm8r/W/y7SEQ3kyS50qRMZt4A4C6AKQC/pJTn0zRl3bJIJcyy7AwR3QEQ6WZsmk5KOZGm6QuT/AWyD+DYUL6ciE4mSfJIpywqavK1D2QR0DkhxG2d4FSaMcgyuzaWmPlx5UrpxtAk3d8oinbGcfxJJ3MN0giroPMj7sk5AEs6wRik+U1Et5IkeaaTRxOpjVVQWTnxnBBir04wrtLUIP8A2Dji3Cs241HQl0KIA64QdeXWIH8AmABwFMB1E2xQUB2kEOJD0UldNMEGAzVBljXJzNrYIKBNkKbYzqFtkCbYTqE2kDpYKeVUZ1CbSA3s106gLpBFT7wDgJrsVMfZRe9Qx8jnALZUx1ciuu8V2gUSwAyA2Bu0S6QQYskLtGukasrOoSEgnUNDQTqFhoR0Bg0N6QRag/ypVhnLR626Z9Ph35lZTQZGjpPlEKJ613FlWu2MapDzURQdieP4nQlwaMbTGGm1RkNGWoOGjrQCXQ3I1lBmXgegp+aSI+67Tu/JZRP7EcudWquABfIhgOOhIxvX6GpA9vv97XmeH5ZSflTveoyHl9WAnJ6ePiSlfApg/aA2ia4aQ7Msu09Ep0Nursz8pFjkLsM0W2Fg5q0AvoWMLCYYswD2D8dpVKPMvAvA+wo0qN7VGZSIHiRJcqqLad24czKz/RptAm07Qa+7qEFAXSODaLo+kJ1DfSE7hfpEdgb1jXQGBfCZiF6N6wmllOo1/LLXBDrLH3W9q9fhpWEwg9cEK63xNCx3kM3J8NIgIKdIW9DNANRKnnrgbnI4R1qBqkKyLLtARDcaYNVevhOumuvwVW/ddMvCmFnV7DaDKv0uhPhikL5VUmvQVlF4yLwGrVxkrcUxDxXT+BRrNfq/1mjn21gbt9kiIzO/AbBnuByfG5Pbxq+bXy1xVvcbL/jeaq4brO10M118PGAbUVdenuf5Pu+fg9RFZfn3XEp5Nk3TewOoOorPQi4DUNvMXXzgY9mwYnELAGbzPL82OTn5VqX8Bw8aazwrWKu6AAAAAElFTkSuQmCC"},d45e:function(t,e,n){"use strict";var a=n("8ecf"),i=n.n(a);i.a},fed7:function(t,e,n){"use strict";n.r(e);var a=n("0602"),i=n("420c");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("d45e");var s,o=n("f0c5"),d=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"6f7a88a8",null,!1,a["a"],s);e["default"]=d.exports}}]);